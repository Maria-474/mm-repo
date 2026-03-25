import { QuizQuestion } from "@/types/quiz-question"

export const quizQuestions: QuizQuestion[] = [
  {
    "id": "01",
    "question": "Что она скажет дальше?",
    "answers": [
      { "text": "У меня много работы", "isCorrect": false },
      { "text": "У меня 12 детей", "isCorrect": false },
      { "text": "У меня нет желания", "isCorrect": false },
      { "text": "У меня 12 собак", "isCorrect": true }
    ],
    "modalShowTimeout": 10800,
    "videoSrc": `${import.meta.env.BASE_URL}Q1.mp4`
  },
  {
    "id": "02",
    "question": "Что скажет кондуктор?",
    "answers": [
      { "text": "Не сиди на холодном", "isCorrect": false },
      { "text": "Зачем ты упал?", "isCorrect": true },
      { "text": "Давай помогу", "isCorrect": false },
      { "text": "Ты не ушибся?", "isCorrect": false }
    ],
    "modalShowTimeout": 18150,
    "videoSrc": `${import.meta.env.BASE_URL}Q2.mp4`
  },
  {
    "id": "03",
    "question": "Что ответит Рон?",
    "answers": [
      { "text": "Да, ты совершенно права", "isCorrect": false },
      { "text": "Откуда ты все знаешь?", "isCorrect": false },
      { "text": "А я не знал", "isCorrect": false },
      { "text": "Да, и навозным жукам", "isCorrect": true }
    ],
    "modalShowTimeout": 9750,
    "videoSrc": `${import.meta.env.BASE_URL}Q3.mp4`
  },
  {
    "id": "04",
    "question": "Что ответит Гермиона?",
    "answers": [
      { "text": "На его вещах написано", "isCorrect": true },
      { "text": "Я читаю много книг", "isCorrect": false },
      { "text": "О нем писали в газете", "isCorrect": false },
      { "text": "Это наш новый преподаватель", "isCorrect": false }
    ],
    "modalShowTimeout": 12650,
    "videoSrc": `${import.meta.env.BASE_URL}Q4.mp4`
  },
  {
    "id": "05",
    "question": "Что профессор скажет дальше?",
    "answers": [
      { "text": "Шрам", "isCorrect": false },
      { "text": "Плохое зрение", "isCorrect": false },
      { "text": "Нет родителей", "isCorrect": false },
      { "text": "Гримм", "isCorrect": true }
    ],
    "modalShowTimeout": 12800,
    "videoSrc": `${import.meta.env.BASE_URL}Q5.mp4`
  },
  {
    "id": "06",
    "question": "Во что превратится боггарт?",
    "answers": [
      { "text": "Дыня", "isCorrect": false },
      { "text": "Шарик", "isCorrect": true },
      { "text": "Мячик", "isCorrect": false },
      { "text": "Клоун", "isCorrect": false }
    ],
    "modalShowTimeout": 14600,
    "videoSrc": `${import.meta.env.BASE_URL}Q6.mp4`
  },
  {
    "id": "07",
    "question": "Какой номер страницы?",
    "answers": [
      { "text": "214", "isCorrect": false },
      { "text": "798", "isCorrect": false },
      { "text": "394", "isCorrect": true },
      { "text": "541", "isCorrect": false }
    ],
    "modalShowTimeout": 13200,
    "videoSrc": `${import.meta.env.BASE_URL}Q7.mp4`
  },
  {
    "id": "08",
    "question": "Какое заклинание произнесут близнецы?",
    "answers": [
      { "text": "Шалость удалась", "isCorrect": true },
      { "text": "Карта исчезни", "isCorrect": false },
      { "text": "Сокрой свой секрет", "isCorrect": false },
      { "text": "Авада кедавра", "isCorrect": false }
    ],
    "modalShowTimeout": 8600,
    "videoSrc": `${import.meta.env.BASE_URL}Q8.mp4`
  },
  {
    "id": "09",
    "question": "Что ответит Гарри?",
    "answers": [
      { "text": "Я вспомнил, как видел своих родителей", "isCorrect": false },
      { "text": "Первый урок волшебству", "isCorrect": false },
      { "text": "Я вспомнил профессора Снейпа", "isCorrect": false },
      { "text": "Первый полет на метле", "isCorrect": true }
    ],
    "modalShowTimeout": 14100,
    "videoSrc": `${import.meta.env.BASE_URL}Q9.mp4`
  },
]
