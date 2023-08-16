// import React from 'react'
import styles from "./button.module.css"

// eslint-disable-next-line react/prop-types
const Button = ({children,onclick}) => {
  return (
    <div>
        <button className={styles.mainbutton} onClick={onclick}>{children}</button>
    </div>
  )
}

export default Button