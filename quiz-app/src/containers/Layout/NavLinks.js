import React from 'react';
import LinkRout from '../../components/LinkRout/LinkRout';
import { HOME, LOGIN, SIGNUP } from '../../constants/navigations';
import Login from '../../pages/Login/Login';
import Signup from '../../pages/Signup/Signup';

const NavLinks = ({ user }) => {
    return (
        <nav className="d-flex a-i-center" >
            <LinkRout to={HOME}>Home</LinkRout>
            {
                user ? (
                    <div className="d-flex a-i-center m-05">
                        <img className="logo" src={user.result.imageUrl} alt={user.result.name} />
                        <span>{user.result.name}</span>
                        <button className="btn">Log out</button>
                    </div>
                ) : (
                    <div className="d-flex ">
                        <LinkRout to={LOGIN}>
                            <Login />
                        </LinkRout>
                        <LinkRout to={SIGNUP}>
                            <Signup />
                        </LinkRout>
                    </div>
                )
            }

        </nav>
    )
}

export default NavLinks;
