import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import NavLinks from './NavLinks';
import logo from '../../assets/logo.jpg';
import { HOME } from '../../constants/navigations';
import { useDispatch } from 'react-redux';
import { LOGOUT } from '../../redux/constants';

const Layout = ({ children }) => {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
   
    const dispatch = useDispatch();
    const location = useLocation();

    const logout = () => {
        dispatch({ type: LOGOUT });
        setUser(null);
    }

    useEffect(() => {
        const token = user?.token;
        
        setUser(JSON.parse(localStorage.getItem('profile')));
        console.log(user);
    }, [location]);

    

    return (
        <>
            <header className="App-header">
                <Link to={HOME}>
                    <div className="d-flex a-i-center">
                        <img className="logo" src={logo} alt="logo" />
                        <span>Musicdemy</span>
                    </div>
                </Link>
                <NavLinks user={user} logout={logout} />
            </header>
            {children}
        </>
    )
}

export default Layout;
