import React, { useState, useEffect } from 'react';
import NavLinks from './NavLinks';
import logo from '../../assets/logo.jpg';
import { HOME } from '../../constants/navigations';
import LinkRout from '../../components/LinkRout/LinkRout';

const Layout = ({ children }) => {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    console.log(user);

    useEffect(() => {
        const token = user?.token;

        setUser(JSON.parse(localStorage.getItem('profile')));
    }, []);

    return (
        <>
            <header className="App-header">
                <LinkRout to={HOME}>
                    <div className="d-flex a-i-center">
                        <img className="logo" src={logo} alt="logo" />
                        <span>Musicdemy</span>
                    </div>
                </LinkRout>
                <NavLinks user={user}/>

            </header>
            {children}
        </>
    )
}

export default Layout;
