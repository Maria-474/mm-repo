import AppTitle from '@/components/AppTitle/AppTitle'
import classes from './Main.module.scss'
import { NavLink } from 'react-router-dom'
import AppPlayer from '@/components/AppPlayer/AppPlayer'

export default function Main() {
  return (
    <div className={classes.mainWrapper}>
      <div className={classes.mainInfo}>
        <AppTitle text="Welcome to the World of Magic" />
        <p className={classes.mainDescription}>
          This project is your guide to the universe of Harry Potter. Here
          you’ll find characters, spells, and magical facts to dive deeper into
          the wizarding world.
        </p>
        <p className={classes.mainDescription}>
          Explore, learn new things, and test your knowledge in{' '}
          <NavLink to="/quiz" className={classes.mainLink}>
            magical challenges
          </NavLink>
          . Who&nbsp;knows&nbsp;—&nbsp;you might discover the wizard within
          yourself.
        </p>
      </div>
      <AppPlayer
        src={`${import.meta.env.BASE_URL}main.mov`}
        isPlaying
        loop
        muted
        width="1000px"
        height="565px"
        className={classes.mainPlayer}
      />
    </div>
  )
}
