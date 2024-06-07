import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <>
            <header>
                <nav>
                    <div className='logo'>
                       <img src="https://www.ngoaaptak.com/wp-content/uploads/2022/04/Ngo-Registration-Consultant-In-Dhanbad.jpg" alt="NGO Logo" />
                        </div>
                    <ul>
                        <li>
                        <Link to="/">Home</Link>
                            </li>
                        <li>
                        <Link to="/about">About</Link>
                            </li>
                        <li>
                        <Link to="/program">Programs</Link>
                        </li>
                        {/* <li>
                        <Link to="/get">Get Involved</Link>
                        </li> */}
                        <li>
                        <Link to="/contact">Contact</Link>
                            </li>
                    </ul>
                </nav>
            </header>

        </>
    )
}

export default Header
