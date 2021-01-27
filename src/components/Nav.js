import React from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Nav() {

    const location = useLocation();

    return (
        <div className='position-relative'>
            <div className='nav-backer'></div>
            <nav className='row m-0'>
                <ul class='nav'>
                    <li class='nav-item'>
                        <Link to='/' className={location.pathname === '/' ? 'nav-link active' : 'nav-link'}>Home</Link>
                    </li>
                    <li class='nav-item'>
                        <Link to='/pricing' className={location.pathname === '/pricing' ? 'nav-link active' : 'nav-link'}>Pricing</Link>
                    </li>
                    <li class='nav-item'>
                        <Link to='/portfolio' className={location.pathname === '/portfolio' ? 'nav-link active' : 'nav-link'}>Portfolio</Link>
                    </li>
                    <li class='nav-item'>
                        <Link to='/contact' className={location.pathname === '/contact' ? 'nav-link active' : 'nav-link'}>Contact</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}
