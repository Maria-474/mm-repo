import classes from './QuizNextStep.module.scss'
import { AppButton } from '@/components/UI/AppButton'

type QuizNextStepProps = {
  isLastQuestion: boolean
  correctAnswersCount: number
  quizQuestionsCount: number
  onNextStepButtonClick: () => void
}

export const QuizNextStep = ({
  isLastQuestion,
  correctAnswersCount,
  quizQuestionsCount,
  onNextStepButtonClick
}: QuizNextStepProps) => {
  const nextStepButtonText = isLastQuestion
    ? 'Начать с начала'
    : 'Следующий вопрос'

  return (
    <div className={classes.quizNextStepWrapper}>
      {isLastQuestion && (
        <p>
          Твой результат: {correctAnswersCount} из {quizQuestionsCount}
        </p>
      )}

      <AppButton
        text={nextStepButtonText}
        onButtonClick={onNextStepButtonClick}
      />
    </div>
  )
}
