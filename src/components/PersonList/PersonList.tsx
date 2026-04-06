import { PersonCard } from '@/components/PersonCard'
import { Person } from '@/types/person'
import classes from './PersonList.module.scss'

type PersonListProps = {
  list: Person[]
}

export const PersonList = ({ list }: PersonListProps) => {
  return (
    <div className={classes.personList}>
      {list.map((item) => (
        <PersonCard key={item.id} person={item} />
      ))}
    </div>
  )
}
