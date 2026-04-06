import classes from './AppTitle.module.scss'

type TitleProps = {
  text: string
}

export const AppTitle = ({ text }: TitleProps) => {
  return <h1 className={classes.title}>{text}</h1>
}
