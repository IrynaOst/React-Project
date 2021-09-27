import React from 'react';
import NavLinks from './NavLinks';
import logo from '../../assets/logo.jpg';

const Layout = ({ children }) => {
    return (
        <>
            <header className="App-header">
                <img className="logo" src={logo} alt="logo"/>
                <NavLinks />
            </header>
            {children}
        </>
    )
}

export default Layout;
