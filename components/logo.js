import React from 'react';
import Link from 'next/link';
function logo(props) {
    return (
        <>
            <Link className="navbar-brand scroll-none" href="/">
                <img src="/assets/img/logo2.png" alt="PNG logo of Trinet Digital" height="60" className="scroll-none" />
            </Link>
            <Link className="navbar-brand scroll-block" href="/">
                <img src="/assets/img/logo3.png" alt="Another PNG photo of Trinet Digital" height="60" className="scroll-block" />
            </Link>
        </>
    );
}

export default logo;