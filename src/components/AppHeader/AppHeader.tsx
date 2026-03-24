import classes from './AppHeader.module.scss'
import { NavLink } from 'react-router-dom'
import clsx from 'clsx'
import HeaderContextMenu from '@/components/HeaderContextMenu/HeaderContextMenu'
import { IconBurgerMenu, IconClose } from '@/icons'
import { useState } from 'react'

interface HeaderLink {
  title: string
  path: string
}

export default function Header() {
  const headerLinks: HeaderLink[] = [
    { title: 'Main', path: '/' },
    { title: 'Quiz', path: '/quiz' },
    { title: 'All characters', path: '/characters' },
    { title: 'Spells', path: '/spells' },
    { title: 'Staff', path: '/staff' }
  ]

  const [isBurgerMenuOpened, setIsBurgerMenuOpened] = useState(false)

  return (
    <header>
      <button
        className={classes.burgerMenuButton}
        onClick={() => setIsBurgerMenuOpened(true)}
      >
        <IconBurgerMenu />
      </button>
      <div
        className={clsx(
          classes.header,
          isBurgerMenuOpened && classes.headerOpened
        )}
      >
        <button
          className={classes.burgerMenuCloseButton}
          onClick={() => setIsBurgerMenuOpened(false)}
        >
          <IconClose size={24} />
        </button>
        {headerLinks.map((link) => (
          <NavLink
            key={link.title}
            to={link.path}
            className={({ isActive }) =>
              clsx(classes.headerLink, isActive && classes.headerLinkActive)
            }
            onClick={() => setIsBurgerMenuOpened(false)}
          >
            {link.title}
          </NavLink>
        ))}
        <HeaderContextMenu
          onContextMenuButtonClick={() => setIsBurgerMenuOpened(false)}
        />
      </div>
    </header>
  )
}
