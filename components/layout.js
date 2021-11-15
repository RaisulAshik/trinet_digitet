import React from 'react';
import Footer from './footer';
import NavBar from './NavBar';

const Layout = ({ children }) => {
    return (
        <div>
            <NavBar />
            {children}
            <Footer />
        </div>
    );
};

export default Layout;