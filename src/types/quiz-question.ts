import { QuizAnswer } from "./quiz-answer"

export interface QuizQuestion {
  id: string,
  question: string,
  answers: QuizAnswer[],
  modalShowTimeout: number,
  videoSrc: string
}