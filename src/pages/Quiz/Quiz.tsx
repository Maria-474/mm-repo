import { AppTitle } from '@/components/AppTitle'
import { AppQuiz } from '@/components/AppQuiz'
import classes from './Quiz.module.scss'

export default function Quiz() {
  return (
    <div className={classes.quizPageWrapper}>
      <AppTitle text="Магический квиз" />
      <p className={classes.quizPageDescription}>
        Погрузись в мир волшебства и проверь, насколько хорошо ты знаешь
        вселенную Гарри Поттера. Тебя ждут воспоминания, вопросы и испытания,
        где важны внимательность и знания.
      </p>
      <p className={classes.quizPageDescription}>
        Смотри, отвечай и набирай очки — в конце ты узнаешь, насколько ты близок
        к званию настоящего волшебника.
      </p>
      <AppQuiz />
    </div>
  )
}
