import { Link } from 'gatsby'
import React from 'react'

export default function Navbar() {
    return (
        <nav>
            <h1>Pemba</h1>
            <div className="links">
                <Link to='/' activeClassName="active">Home</Link>
                <Link to='/projects' activeClassName="active">Projects</Link>
                <Link to='/contact' activeClassName="active">Contact</Link>
            </div>
        </nav>
    )
}
