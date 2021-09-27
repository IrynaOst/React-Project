import React from 'react';
import { Link } from 'react-router-dom';
import './LinkRout.scss';

const LinkRout = (props) => {
    return (
        <Link {...props} className="nav-links">
            {props.children}
        </Link>
    )
}

export default LinkRout;