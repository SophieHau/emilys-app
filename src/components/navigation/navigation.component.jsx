import React from 'react';
import Logo from '../logo/logo.component';


const Navigation = () => {
    return(
        <nav style={{display: 'flex', justifyContent: 'space-between'}}>
            <Logo />
            <div style={{ display: 'flex', justifyContent: 'flex-end'}}>
                <p style={{padding: 5}}>Sign in</p>
                <p style={{padding: 5}}>Sign out</p>
            </div>
        </nav>
    );
};

export default Navigation;