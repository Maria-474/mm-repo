import { IconMagicWand } from '@/icons'
import classes from './AppLoader.module.scss'

export default function Loader() {
  return (
    <div className={classes.loaderWrapper}>
      <IconMagicWand />
    </div>
  )
}
