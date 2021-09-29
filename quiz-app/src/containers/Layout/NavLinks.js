import React from 'react';
import LinkRout from '../../components/LinkRout/LinkRout';
import { HOME, LOGIN, SIGNUP } from '../../navigations/CONSTANTS';
import Login from '../../pages/Login/Login';
import Signup from '../../pages/Signup/Signup';

const NavLinks = () => {
    return (
        <nav className="d-flex a-i-center">
            <LinkRout to={HOME}>Home</LinkRout>
            <LinkRout to={LOGIN}>
                <Login />
            </LinkRout>
            <LinkRout to={SIGNUP}>
                <Signup />
            </LinkRout>
        </nav>
    )
}

export default NavLinks;
