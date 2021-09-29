import React from 'react';
import NavLinks from './NavLinks';
import logo from '../../assets/logo.jpg';

const Layout = ({ children }) => {
    return (
        <>
            <header className="App-header">
                <div className="d-flex a-i-center">
                    <img className="logo" src={logo} alt="logo"/>
                    <span>Musicdemy</span>
                </div>                
                <NavLinks />
            </header>
            {children}
        </>
    )
}

export default Layout;
