import { NavLink, useLocation } from 'react-router-dom'
import classes from './HeaderContextMenu.module.scss'
import clsx from 'clsx'
import { useState, useRef } from 'react'

type HeaderContextMenuProps = {
  onContextMenuButtonClick: () => void
}

export const HeaderContextMenu = ({
  onContextMenuButtonClick
}: HeaderContextMenuProps) => {
  const housesLinks = [
    { title: 'Gryffindor', path: '/house/gryffindor' },
    { title: 'Slytherin', path: '/house/slytherin' },
    { title: 'Ravenclaw', path: '/house/ravenclaw' },
    { title: 'Hufflepuff', path: '/house/hufflepuff' }
  ]

  const location = useLocation()
  const isHousesLinkActive = location.pathname.startsWith('/house')

  const [isContextMenuShown, setIsContextMenuShown] = useState(false)
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }

    setIsContextMenuShown(true)
  }

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsContextMenuShown(false)
    }, 300)
  }

  const handleMouseClick = () => {
    setIsContextMenuShown(false)
    onContextMenuButtonClick()
  }

  return (
    <div className={classes.contextMenuWrapper}>
      <p
        className={clsx(
          classes.housesLink,
          isHousesLinkActive && classes.housesLinkActive
        )}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        Houses
      </p>
      <div
        className={clsx(
          classes.contextMenuList,
          isContextMenuShown && classes.contextMenuListShown
        )}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {housesLinks.map((houseLink) => (
          <NavLink
            key={houseLink.title}
            to={houseLink.path}
            className={classes.contextMenuItem}
            onClick={handleMouseClick}
          >
            {houseLink.title}
          </NavLink>
        ))}
      </div>
    </div>
  )
}
