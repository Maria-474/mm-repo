import { AppHeader } from '@/components/AppHeader'
import { Outlet } from 'react-router-dom'

export const AppLayout = () => {
  return (
    <section>
      <AppHeader />
      <main>
        <Outlet />
      </main>
    </section>
  )
}
