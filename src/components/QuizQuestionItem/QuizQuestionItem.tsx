import classes from './QuizQuestionItem.module.scss'
import { QuizQuestion } from '@/types/quiz-question'
import { QuizAnswerItem } from '@/components/QuizAnswerItem'

type QuizItemProps = {
  currentQuestion: QuizQuestion
  isAnswerTouched: boolean
  onAnswerButtonClick: (isAnswerCorrect: boolean) => void
}

export const QuizQuestionItem = ({
  currentQuestion,
  isAnswerTouched,
  onAnswerButtonClick
}: QuizItemProps) => {
  return (
    <div className={classes.quizItemWrapper}>
      <p>{currentQuestion.question}</p>
      <div className={classes.answersWrapper}>
        {currentQuestion.answers.map((answer) => (
          <QuizAnswerItem
            key={answer.text}
            answer={answer}
            isDisabled={isAnswerTouched}
            onAnswerClick={onAnswerButtonClick}
          />
        ))}
      </div>
    </div>
  )
}
