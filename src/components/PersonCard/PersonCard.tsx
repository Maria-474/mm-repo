import { useState } from 'react'
import clsx from 'clsx'
import classes from './PersonCard.module.scss'
import { Person } from '@/types/person'

type PersonCardProps = {
  person: Person
}

export const PersonCard = ({ person }: PersonCardProps) => {
  const [isPersonInfoShown, setPersonInfoShown] = useState(false)

  return (
    <div
      tabIndex={0}
      role="article"
      className={classes.cardWrapper}
      onFocus={() => setPersonInfoShown(true)}
      onBlur={() => setPersonInfoShown(false)}
      onMouseEnter={() => setPersonInfoShown(true)}
      onMouseLeave={() => setPersonInfoShown(false)}
    >
      <p className={classes.cardTitle}>{person.name}</p>
      {person.image ? (
        <div
          style={{ backgroundImage: `url(${person.image})` }}
          className={classes.cardImage}
        />
      ) : (
        <p className={classes.cardText}>No image</p>
      )}

      <div
        className={clsx(
          classes.cardInfo,
          isPersonInfoShown && classes.isPersonInfoShown
        )}
      >
        {person.house && <p>House: {person.house}</p>}
        {person.dateOfBirth && <p>Date of birth: {person.dateOfBirth}</p>}
        {person.actor && <p>Actor: {person.actor}</p>}
        {person.patronus && <p>Patronus: {person.patronus}</p>}
      </div>
    </div>
  )
}
