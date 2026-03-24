import { useParams } from 'react-router-dom'
import AppTitle from '@/components/AppTitle/AppTitle'
import { useHouse } from '@/hooks/useHouse'
import PersonList from '@/components/PersonList/PersonList'
import AppLoader from '@/components/AppLoader/AppLoader'

type House = 'gryffindor' | 'slytherin' | 'ravenclaw' | 'hufflepuff'

export default function HousePage() {
  const { houseId } = useParams<{ houseId: House }>()

  if (!houseId) {
    return
  }

  const { housePersons, isLoading } = useHouse(houseId)

  const houseTitle = houseId.slice(0, 1).toLocaleUpperCase() + houseId.slice(1)

  return (
    <div>
      <AppTitle text={houseTitle} />
      {isLoading ? <AppLoader /> : <PersonList list={housePersons} />}
    </div>
  )
}
