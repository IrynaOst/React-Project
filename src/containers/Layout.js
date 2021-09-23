import React from 'react';

const Layout = ({ children }) => {
    return (
        <>
            <header className="App-header">
                <nav>
                    hello from Layout
                </nav>
            </header>
            {children}
        </>
    )
}

export default Layout;
