import classes from './AppModal.module.scss'
import clsx from 'clsx'

type AppModalProps = {
  isModalShown: boolean
  children: React.ReactNode
}

export default function AppModal({ isModalShown, children }: AppModalProps) {
  return (
    <div
      className={clsx(
        classes.modalWrapper,
        isModalShown && classes.modalWrapperShown
      )}
    >
      {children}
    </div>
  )
}
