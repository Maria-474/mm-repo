import AppTitle from '@/components/AppTitle/AppTitle'
import { useCharacters } from '@/hooks/useCharacters'
import AppLoader from '@/components/AppLoader/AppLoader'
import PersonList from '@/components/PersonList/PersonList'
import AppButton from '@/components/UI/AppButton/AppButton'
import AppInput from '@/components/UI/AppInput/AppInput'
import classes from './Characters.module.scss'
import { useState, useMemo } from 'react'
import { Person } from '@/types/person'

type SortType = 'aToZ' | 'zToA' | 'default'

export default function Characters() {
  const { characters, isLoading } = useCharacters()

  const [sortType, setSortType] = useState<SortType>('default')
  const [search, setSearch] = useState<string>('')
  const [filter, setFilter] = useState<string>('')

  const onSortButtonClick = (type: SortType) => {
    sortType === type ? setSortType('default') : setSortType(type)
  }

  const handleSearch = (value: string) => {
    setSearch(value)
  }

  const housesList = ['Gryffindor', 'Slytherin', 'Ravenclaw', 'Hufflepuff']
  const onHouseButtonClick = (house: string) => {
    filter === house ? setFilter('') : setFilter(house)
  }

  const charactersList = useMemo(() => {
    let list: Person[] = [...characters]

    if (search) {
      list = list.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
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
  }, [characters, search, filter, sortType])

  return (
    <div>
      <AppTitle text="All characters" />
      <div className={classes.filtersBlock}>
        <p>Search</p>
        <AppInput placeholderText="start typing..." onInput={handleSearch} />
      </div>
      <div className={classes.filtersBlock}>
        <p>Filter</p>
        {housesList.map((house) => (
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
      {charactersList.length === 0 && !isLoading && (
        <p className={classes.noResultsText}>
          Oops! No results, try anything else 🔮
        </p>
      )}
    </div>
  )
}
