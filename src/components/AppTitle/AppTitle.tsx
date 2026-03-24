import classes from './AppTitle.module.scss'

type TitleProps = {
  text: string
}

const Title = ({ text }: TitleProps) => {
  return <h1 className={classes.title}>{text}</h1>
}

export default Title
