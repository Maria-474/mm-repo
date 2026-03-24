import type { QuizAnswer } from '@/types/quiz-answer'
import classes from './QuizAnswer.module.scss'
import clsx from 'clsx'
import { useState } from 'react'

type QuizAnswerProps = {
  answer: QuizAnswer
  isDisabled: boolean
  onAnswerClick: (isAnswerCorrect: boolean) => void
}

export default function QuizAnswer({
  answer,
  isDisabled,
  onAnswerClick
}: QuizAnswerProps) {
  const [isAnswerTouched, setIsAnswerTouched] = useState(false)

  const handleAnswerClick = () => {
    setIsAnswerTouched(true)
    onAnswerClick(answer.isCorrect)
  }

  return (
    <button
      className={clsx(classes.quizAnswerButton, {
        [classes.quizAnswerButtonCorrect]: isAnswerTouched && answer.isCorrect,
        [classes.quizAnswerButtonIncorrect]:
          isAnswerTouched && !answer.isCorrect
      })}
      disabled={isDisabled}
      onClick={handleAnswerClick}
    >
      {answer.text}
    </button>
  )
}
