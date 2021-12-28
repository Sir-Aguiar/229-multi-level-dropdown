/* eslint-disable */
import styles from "./Navbar.module.css"
import React, { useState } from 'react'


export default function NavItem(props) {
  const [open, setOpen] = useState(false)
  return (
    <li className={styles.nav_item}>
      <a  className={styles.icon_button} onClick={
        () => setOpen(!open)
      }>
        {props.icon}
      </a>
      {
        open && props.children
      }
    </li>
  )
}