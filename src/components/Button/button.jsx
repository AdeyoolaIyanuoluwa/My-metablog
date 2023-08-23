// import React from 'react'
import styles from "./button.module.css"

// eslint-disable-next-line react/prop-types
const Button = ({children,onclick,mainbutton,type}) => {
  return (
    <div>
        <button className={mainbutton?styles.mainbutton:styles.subbutton} onClick={onclick} type={type}>{children}</button>
    </div>
  )
}

export default Button