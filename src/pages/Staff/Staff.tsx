import { useStaff } from '@/hooks/useStaff'
import { AppLoader } from '@/components/AppLoader'
import { AppTitle } from '@/components/AppTitle'
import { PersonList } from '@/components/PersonList'

export default function Staff() {
  const { data, isLoading, error } = useStaff()

  return (
    <div>
      <AppTitle text="Staff" />
      {isLoading ? <AppLoader /> : <PersonList list={data} />}
      {error && <p>{error.message}</p>}
    </div>
  )
}
