import React from 'react';
import { Link } from 'react-router-dom';
import { HOME } from '../../constants/navigations';
import Login from '../../pages/Login/Login';
import Signup from '../../pages/Signup/Signup';
import './NavLinks.scss';

const NavLinks = ({ user, logout }) => {
    return (
        <nav className="d-flex a-i-center" >
            <Link to={HOME} className="p-05">Home</Link>
            {
                user?.result ? (
                    <div className="d-flex a-i-center profile-links">
                        <img className="logo" src={user.result.imageUrl} alt={user.result.name} />
                        <span className="p-05">{user.result.name}</span>
                        <button className="btn" onClick={logout}>Log out</button>
                    </div>
                ) : (
                    <div className="d-flex">
                        <Login />
                        <Signup />
                    </div>
                )
            }
        </nav>
    )
}

export default NavLinks;
