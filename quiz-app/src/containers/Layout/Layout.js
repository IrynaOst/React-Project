import React from 'react';
import NavLinks from './NavLinks';
import logo from '../../assets/logo.jpg';
import { HOME } from '../../navigations/CONSTANTS';
import LinkRout from '../../components/LinkRout/LinkRout';

const Layout = ({ children }) => {
    return (
        <>
            <header className="App-header">
                <LinkRout to={HOME}>
                    <div className="d-flex a-i-center">
                        <img className="logo" src={logo} alt="logo" />
                        <span>Musicdemy</span>
                    </div>
                </LinkRout>
                <NavLinks />
            </header>
            {children}
        </>
    )
}

export default Layout;
