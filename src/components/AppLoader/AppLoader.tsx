import { IconMagicWand } from '@/icons'
import classes from './AppLoader.module.scss'

export const AppLoader = () => {
  return (
    <div className={classes.loaderWrapper}>
      <IconMagicWand />
    </div>
  )
}
