import { useParams } from 'react-router-dom'
import { AppTitle } from '@/components/AppTitle'
import { useHouse } from '@/hooks/useHouse'
import { PersonList } from '@/components/PersonList'
import { AppLoader } from '@/components/AppLoader'
import { HouseName } from '@/types/house'

const HOUSE_TITLES: Record<HouseName, string> = {
  gryffindor: 'House of Gryffindor',
  slytherin: 'House of Slytherin',
  ravenclaw: 'House of Ravenclaw',
  hufflepuff: 'House of Hufflepuff'
}

const isHouseName = (value: string | undefined): value is HouseName =>
  !!value && value in HOUSE_TITLES

export default function HousePage() {
  const { houseId } = useParams()

  if (!isHouseName(houseId)) {
    return (
      <div>
        <AppTitle text="House not found" />
      </div>
    )
  }

  const { data, isLoading, error } = useHouse(houseId)

  return (
    <div>
      <AppTitle text={HOUSE_TITLES[houseId]} />
      {isLoading ? <AppLoader /> : <PersonList list={data} />}
      {error && <p>{error.message}</p>}
    </div>
  )
}
