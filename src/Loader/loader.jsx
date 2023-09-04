// eslint-disable-next-line no-unused-vars
import React from 'react'
import styles from "./loader.module.css"
import LoadingSpinnerComponent from 'react-spinners-components'

const Loader = () => {
  return (
    <div className={styles.loader}><LoadingSpinnerComponent type={'Spinner'} color='blue' size={'200px'}/></div>
  )
}

export default Loader