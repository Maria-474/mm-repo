import classes from './AppButton.module.scss'
import clsx from 'clsx'

type AppButtonProps = {
  text: string
  isActive?: boolean
  onButtonClick: () => void
}

const AppButton = ({ text, isActive, onButtonClick }: AppButtonProps) => {
  return (
    <button
      onClick={onButtonClick}
      className={clsx(
        classes.buttonWrapper,
        isActive && classes.buttonWrapperActive
      )}
    >
      {text}
    </button>
  )
}

export default AppButton
