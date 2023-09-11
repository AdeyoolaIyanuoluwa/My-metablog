/* eslint-disable no-unused-vars */
import React from 'react'
import styles from 'pagination.module.css'
import ReactPaginate from 'react-paginate'

const Pagination = () => {
  return (
    <div>
       <div className={styles.paginate}>
                  <ReactPaginate
                    pageCount={10}
                    // onPageChange={handlePageClick}
                    className={styles.paginate}
                    pageClassName={styles.pageClassName}
                  />
                </div>
    </div>
  )
}

export default Pagination