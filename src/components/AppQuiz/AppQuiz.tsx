import { AppButton } from '@/components/UI/AppButton'
import { AppPlayer } from '@/components/AppPlayer'
import { useState, useRef } from 'react'
import classes from './AppQuiz.module.scss'
import { QuizQuestion } from '@/types/quiz-question'
import { quizQuestions } from '@/app/quizQuestions'
import { AppModal } from '@/components/AppModal'
import { QuizQuestionItem } from '@/components/QuizQuestionItem'
import { QuizNextStep } from '@/components/QuizNextStep'

type ModalMode = 'start' | 'nextStep' | 'question'

export const AppQuiz = () => {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isAnswerTouched, setIsAnswerTouched] = useState(false)

  const [modalMode, setModalMode] = useState<ModalMode | null>('start')

  const currentQuestion = useRef<QuizQuestion>(quizQuestions[0])
  const answerTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const correctAnswersCounter = useRef<number>(0)

  const isLastQuestion =
    quizQuestions.indexOf(currentQuestion.current) === quizQuestions.length - 1

  const onStartButtonClick = () => {
    setIsAnswerTouched(false)
    setModalMode(null)
    setIsPlaying(true)
  }

  const handleTimeUpdate = (currentTime: number) => {
    if (isAnswerTouched) return

    if (currentTime >= currentQuestion.current.modalShowTimeout / 1000) {
      setIsPlaying(false)
      setModalMode('question')
    }
  }

  const onAnswerButtonClick = (isAnswerCorrect: boolean) => {
    if (isAnswerCorrect) {
      correctAnswersCounter.current++
    }

    setIsAnswerTouched(true)

    if (answerTimeoutRef.current) {
      clearTimeout(answerTimeoutRef.current)
    }

    answerTimeoutRef.current = setTimeout(() => {
      setModalMode(null)
      setIsPlaying(true)
    }, 2000)
  }

  const onPlayingEnded = () => {
    setModalMode('nextStep')
    setIsPlaying(false)
  }

  const onNextStepButtonClick = () => {
    if (isLastQuestion) {
      currentQuestion.current = quizQuestions[0]
      correctAnswersCounter.current = 0
    } else {
      const nextQuestionIndex =
        quizQuestions.indexOf(currentQuestion.current) + 1
      currentQuestion.current = quizQuestions[nextQuestionIndex]
    }

    setModalMode(null)
    onStartButtonClick()
  }

  return (
    <div className={classes.quizWrapper}>
      <AppPlayer
        src={currentQuestion.current.videoSrc}
        isPlaying={isPlaying}
        onTimeUpdate={handleTimeUpdate}
        onEnded={onPlayingEnded}
      />
      <AppModal isModalShown={!!modalMode}>
        {modalMode === 'start' && (
          <AppButton text="Начать" onButtonClick={onStartButtonClick} />
        )}
        {modalMode === 'nextStep' && (
          <QuizNextStep
            isLastQuestion={isLastQuestion}
            correctAnswersCount={correctAnswersCounter.current}
            quizQuestionsCount={quizQuestions.length}
            onNextStepButtonClick={onNextStepButtonClick}
          />
        )}

        {modalMode === 'question' && (
          <QuizQuestionItem
            currentQuestion={currentQuestion.current}
            isAnswerTouched={isAnswerTouched}
            onAnswerButtonClick={onAnswerButtonClick}
          />
        )}
      </AppModal>
    </div>
  )
}
