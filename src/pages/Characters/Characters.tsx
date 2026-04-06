import { AppTitle } from '@/components/AppTitle'
import { useCharacters } from '@/hooks/useCharacters'
import { AppLoader } from '@/components/AppLoader'
import { PersonList } from '@/components/PersonList'
import { AppButton } from '@/components/UI/AppButton'
import { AppInput } from '@/components/UI/AppInput'
import classes from './Characters.module.scss'
import { useState, useMemo } from 'react'
import { Person } from '@/types/person'
import useDebounce from '@/hooks/useDebounce'

type SortType = 'aToZ' | 'zToA' | 'default'

const HOUSES_LIST = ['Gryffindor', 'Slytherin', 'Ravenclaw', 'Hufflepuff']

export default function Characters() {
  const { data, isLoading, error } = useCharacters()

  const [sortType, setSortType] = useState<SortType>('default')

  const [search, setSearch] = useState<string>('')
  const debouncedSearch = useDebounce(search, 300)

  const [filter, setFilter] = useState<string>('')

  const onSortButtonClick = (type: SortType) => {
    sortType === type ? setSortType('default') : setSortType(type)
  }

  const handleSearch = (value: string) => {
    setSearch(value)
  }

  const onHouseButtonClick = (house: string) => {
    filter === house ? setFilter('') : setFilter(house)
  }

  const charactersList = useMemo(() => {
    let list: Person[] = [...data]

    if (debouncedSearch) {
      list = list.filter((item) =>
        item.name.toLowerCase().includes(debouncedSearch.toLowerCase())
      )
    }

    if (filter) {
      list = list.filter((item) => item.house === filter)
    }

    list.sort((a, b) => {
      if (sortType === 'aToZ') {
        return a.name.localeCompare(b.name)
      }

      if (sortType === 'zToA') {
        return b.name.localeCompare(a.name)
      }

      return 0
    })

    return list
  }, [data, debouncedSearch, filter, sortType])

  return (
    <div>
      <AppTitle text="All characters" />
      <div className={classes.filtersBlock}>
        <p>Search</p>
        <AppInput placeholderText="start typing..." onInput={handleSearch} />
      </div>
      <div className={classes.filtersBlock}>
        <p>Filter</p>
        {HOUSES_LIST.map((house) => (
          <AppButton
            key={house}
            text={house}
            isActive={filter === house}
            onButtonClick={() => onHouseButtonClick(house)}
          />
        ))}
      </div>
      <div className={classes.filtersBlock}>
        <p>Sort</p>
        <AppButton
          text="A to Z"
          isActive={sortType === 'aToZ'}
          onButtonClick={() => onSortButtonClick('aToZ')}
        />
        <AppButton
          text="Z to A"
          isActive={sortType === 'zToA'}
          onButtonClick={() => onSortButtonClick('zToA')}
        />
      </div>

      {isLoading ? <AppLoader /> : <PersonList list={charactersList} />}
      {charactersList.length === 0 && debouncedSearch && !error && (
        <p className={classes.noResultsText}>
          Oops! No results, try anything else 🔮
        </p>
      )}
      {error && <p>{error.message}</p>}
    </div>
  )
}
