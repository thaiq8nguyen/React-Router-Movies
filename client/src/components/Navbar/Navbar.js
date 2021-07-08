import React from 'react'
import { Link } from "react-router-dom";
const Navbar = () => {
    return (
        <nav className="navbar is-dark">
            <div className="navbar-brand">
                <p className="navbar-item has-text-weight-bold">Thai&apos;s Movies Library</p>
            </div>
            <div className="navbar-menu">
                <div className="navbar-end">
                    <Link to="/" className="navbar-item">Home</Link>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
