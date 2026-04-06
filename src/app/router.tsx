import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import ErrorBoundary from '@/components/ErrorBoundary/ErrorBoundary'
import { AppLayout } from '@/components/AppLayout'
import { AppLoader } from '@/components/AppLoader'

const Main = lazy(() => import('@/pages/Main/Main'))
const Quiz = lazy(() => import('@/pages/Quiz/Quiz'))
const Staff = lazy(() => import('@/pages/Staff/Staff'))
const Spells = lazy(() => import('@/pages/Spells/Spells'))
const Characters = lazy(() => import('@/pages/Characters/Characters'))
const House = lazy(() => import('@/pages/House/House'))
const NotFound = lazy(() => import('@/pages/NotFound/NotFound'))

const BASE_NAME = '/mm-repo/'

const ROUTES = {
  main: '/',
  quiz: '/quiz',
  staff: '/staff',
  spells: '/spells',
  characters: '/characters',
  house: '/house/:houseId'
} as const

export default function Router() {
  return (
    <ErrorBoundary onReset={() => window.location.reload()}>
      <BrowserRouter basename={BASE_NAME}>
        <Suspense fallback={<AppLoader />}>
          <Routes>
            <Route element={<AppLayout />}>
              <Route path={ROUTES.main} element={<Main />} />
              <Route path={ROUTES.quiz} element={<Quiz />} />
              <Route path={ROUTES.staff} element={<Staff />} />
              <Route path={ROUTES.spells} element={<Spells />} />
              <Route path={ROUTES.characters} element={<Characters />} />
              <Route path={ROUTES.house} element={<House />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </ErrorBoundary>
  )
}
