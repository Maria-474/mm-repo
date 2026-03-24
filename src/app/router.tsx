import Main from '@/pages/Main/Main'
import Staff from '@/pages/Staff/Staff'
import Spells from '@/pages/Spells/Spells'
import House from '@/pages/House/House'
import Characters from '@/pages/Characters/Characters'
import AppHeader from '@/components/AppHeader/AppHeader'
import Quiz from '@/pages/Quiz/Quiz'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

export default function Router() {
  return (
    <BrowserRouter basename="/mm-repo/">
      <AppHeader />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/staff" element={<Staff />} />
        <Route path="/spells" element={<Spells />} />
        <Route path="/characters" element={<Characters />} />
        <Route path="/house/:houseId" element={<House />} />
      </Routes>
    </BrowserRouter>
  )
}
