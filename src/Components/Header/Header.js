import React, { useState } from 'react';
import './Header.css'
import {  Link } from 'react-router-dom';

export default function Header() {
    const [searchValue, setSearchValue] = useState('')

    const handleSearch = (e) => {
        setSearchValue(e.target.value);
        console.log(searchValue);
    }
    return (
        <div className='header'>
                <nav className='navbar'>
                    <div>
                        <Link to='/' className='nav-item nav-logo'>MovieDb</Link>
                    </div>
                    <div>
                        <Link className='nav-item'>Popular</Link>
                        <Link to='/toprated' className='nav-item'>Top Rated</Link>
                        <Link to='/upcomingmovie' className='nav-item'>Upcoming</Link>
                        <input
                        className='nav-item'
                            type="text"
                            placeholder="Search Movies"
                            value={searchValue}
                            onChange={handleSearch}
                        />
                        <button>Search</button>
                    </div>
                </nav>

            <div>

            </div>
        </div>
    )
}
