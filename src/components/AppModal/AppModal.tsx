import classes from './AppModal.module.scss'
import clsx from 'clsx'

type AppModalProps = {
  isModalShown: boolean
  children: React.ReactNode
}

export const AppModal = ({ isModalShown, children }: AppModalProps) => {
  return (
    <div
      role="dialog"
      aria-modal
      className={clsx(
        classes.modalWrapper,
        isModalShown && classes.modalWrapperShown
      )}
    >
      {children}
    </div>
  )
}
