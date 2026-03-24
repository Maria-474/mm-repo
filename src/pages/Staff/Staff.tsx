import { useStaff } from '@/hooks/useStaff'
import AppLoader from '@/components/AppLoader/AppLoader'
import AppTitle from '@/components/AppTitle/AppTitle'
import PersonList from '@/components/PersonList/PersonList'

export default function Staff() {
  const { staff, isLoading } = useStaff()

  return (
    <div>
      <AppTitle text="Staff" />
      {isLoading ? <AppLoader /> : <PersonList list={staff} />}
    </div>
  )
}
