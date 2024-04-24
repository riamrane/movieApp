import React from 'react'
import './Pagination.css'
import { Link } from 'react-router-dom'
export default function Pagination({ currentPage, totalPages, handlePreviousPage, handleNextPage, numbers, changeCPage }) {
    return (


        <nav>
            <ul className='pagination'>
                <li className='page-item'>
                    <Link to='#' className='page-link' onClick={handlePreviousPage} > Prev</Link>
                </li>

                {
                    numbers.map((n, i) => (
                        <li className={`page-item ${currentPage === n ? 'active' : ''}`} key={i}>
                            <Link to='#' className='page-link' onClick={() => changeCPage(n)} > {n}</Link>
                        </li>
                    ))


                }

                <li className='page-item'>
                    <Link to='#' className='page-link' onClick={handleNextPage} > Next</Link>
                </li>

            </ul>
        </nav>
    )
}
