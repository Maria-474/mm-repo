import { AppTitle } from '@/components/AppTitle'
import { AppButton } from '@/components/UI/AppButton'
import classes from './NotFound.module.scss'
import { useNavigate } from 'react-router-dom'

export default function NotFound() {
  const navigate = useNavigate()

  return (
    <div className={classes.notFoundWrapper}>
      <AppTitle text="Page not found" />
      <AppButton text="Go to main" onButtonClick={() => navigate('/')} />
    </div>
  )
}
