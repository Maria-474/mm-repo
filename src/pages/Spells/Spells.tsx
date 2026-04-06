import { AppTitle } from '@/components/AppTitle'
import { useSpells } from '@/hooks/useSpells'
import { useState } from 'react'
import { AppButton } from '@/components/UI/AppButton'
import { AppLoader } from '@/components/AppLoader'
import classes from './Spells.module.scss'
import { Spell } from '@/types/spell'

export default function Spells() {
  const { data, isLoading, error } = useSpells()

  const [currentSpell, setCurrentSpell] = useState(
    'Click on any spell to see its meaning!'
  )

  return (
    <div>
      <AppTitle text="Spells" />

      {isLoading ? (
        <AppLoader />
      ) : (
        <div className={classes.spellsWrapper}>
          <div className={classes.spellsList}>
            {data.map((spell: Spell) => (
              <AppButton
                key={spell.id}
                text={spell.name}
                isActive={currentSpell === spell.description}
                onButtonClick={() => setCurrentSpell(spell.description)}
              />
            ))}
          </div>
          <div className={classes.spellDescription}>
            <p>{currentSpell}</p>
          </div>
        </div>
      )}
      {error && <p>{error.message}</p>}
    </div>
  )
}
