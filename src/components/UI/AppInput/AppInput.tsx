import { FormEvent } from 'react'
import classes from './AppInput.module.scss'

type AppInputProps = {
  placeholderText: string
  onInput: (value: string) => void
}

const AppInput = ({ placeholderText, onInput }: AppInputProps) => {
  function handleInput(e: FormEvent<HTMLInputElement>) {
    onInput(e.currentTarget.value)
  }

  return (
    <input
      onInput={handleInput}
      className={classes.input}
      placeholder={placeholderText}
    />
  )
}

export default AppInput
