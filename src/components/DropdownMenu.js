/* eslint-disable */
import React, { useState } from 'react'
import styles from './Navbar.module.css'
import { ReactComponent as CogIcon } from '../icons/cog.svg'
import { ReactComponent as ChevronBellIcon } from '../icons/chevron.svg'
import { CSSTransition } from 'react-transition-group'
import './Animations.css'
import { ReactComponent as ArrowIcon } from '../icons/arrow.svg'


export default function DropdownMenu() {
  const [activeMenu, setActiveMenu] = useState('main')
  const [menuHeight, setMenuHeight] = useState(null)
  function calcHeight(el) {
    const height = el.offsetHeight;
    setMenuHeight(height)
  }
  function DropdownItem(props) {
    return (
      <a  className={styles.menu_item} onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}>
        <span className={styles.icon_button}>
          {props.leftIcon}
        </span>
        {props.children}
        <span className={styles.icon_right}>
          {props.rightIcon}
        </span>
      </a>
    )
  }

  return (
    <div className={styles.dropdown} style={
      { height: menuHeight }
    }>
      <CSSTransition in={activeMenu === 'main'} unmountOnExit timeout={500} classNames='menu-primary' onEnter={calcHeight}>
        <div className='menu'>
          <DropdownItem>My Profile</DropdownItem>
          <DropdownItem
            leftIcon={<CogIcon />}
            rightIcon={<ChevronBellIcon />}
            goToMenu="settings"
          >
            Settings
          </DropdownItem>
        </div>
      </CSSTransition>

      <CSSTransition in={activeMenu === 'settings'} unmountOnExit timeout={500} classNames='menu-secondary' onEnter={calcHeight}>
        <div className='menu'>
          <DropdownItem goToMenu='main' leftIcon={<ArrowIcon />} />
          <DropdownItem>Settings</DropdownItem>
          <DropdownItem>Settings</DropdownItem>
          <DropdownItem>Settings</DropdownItem>
          <DropdownItem>Settings</DropdownItem>
        </div>
      </CSSTransition>
    </div>
  )
}