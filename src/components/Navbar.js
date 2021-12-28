import styles from "./Navbar.module.css"
import React from 'react'



function Navbar(props) {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navbar_nav}>
        {props.children}
      </ul>
    </nav>
  );
}


export default Navbar

