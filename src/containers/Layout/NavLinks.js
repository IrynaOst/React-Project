import React from 'react';
import LinkRout from '../../components/LinkRout/LinkRout';
import { HOME, LOGIN, SIGNUP } from '../../navigations/CONSTANTS';

const NavLinks = () => {
    return (
        <nav>
            <LinkRout to={HOME}>Home</LinkRout>
            <LinkRout to={LOGIN}>Log in</LinkRout>
            <LinkRout to={SIGNUP}>Sign up</LinkRout>
        </nav>
    )
}

export default NavLinks;
