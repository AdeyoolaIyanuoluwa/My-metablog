// import React from 'react'
import styles from './signup.module.css'
import Input from '../../components/Input/input'

const Signup = () => {
  return (
    <div>
        <h1>Enter your email to sign up</h1>
        <p>Sign up to get started</p>
    <div className={styles.input_container}>
    <Input maininput={false} name="" value="" onchange="handlechange" type="text" placeholder="Firstname"/>
        <Input maininput={false} name="" value="" onchange="handlechange" type="text" placeholder="Lastname"/>
        <Input maininput={false} name="" value="" onchange="handlechange" type="text" placeholder=""/>
    </div>
    </div>
  )
}

export default Signup