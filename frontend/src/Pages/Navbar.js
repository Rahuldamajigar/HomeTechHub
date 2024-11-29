import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    const navigate = useNavigate();

    const isLoggedIn = localStorage.getItem("authToken");

    const logout = () => {
        localStorage.removeItem("authToken");
        navigate('/login'); 
    };

    return (
        <div>
            <nav>
                <div className="nav-content">
                    <div className="logo">
                        <img src="images/logo.png" alt="logo"/>
                        <Link to='/'>HomeTechHub</Link>
                    </div>
                    <ul className="nav-links">
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/About'>About</Link></li>
                        <li><Link to='/ServiceList'>Services</Link></li>
                        <li><Link to='/Contact'>Contact</Link></li>
                        {isLoggedIn ? (
                            <li><button className="logout-btn" onClick={logout}>Logout</button></li>
                        ) : (
                            <li><Link to='/login'>Login</Link></li>
                        )}
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
