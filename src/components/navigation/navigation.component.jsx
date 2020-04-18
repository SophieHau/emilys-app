import React from 'react';
import Logo from '../logo/logo.component';
import './navigation.style.css';


const Navigation = ({ isSignedIn, onRouteChange }) => {
    if (isSignedIn) {
        return(
        <nav className="dt w-100 border-box pa3 ph5-ns">
            <div className="dtc v-mid mid-gray w-25">
                <Logo className="dib w2 h2 br-100" />
            </div>
            <div className="dtc v-mid w-75 tr">
                <p onClick={() => onRouteChange('signout')} className="pointer link dim dark-gray f6 f5-ns dib mr3 mr4-ns">Sign out</p>
            </div>
        </nav>
        );
    } else {
        return(
            <nav className="dt w-100 border-box pa3 ph5-ns">
                <div className="dtc v-mid mid-gray w-25">
                    <Logo className="dib w2 h2 br-100" />
                </div>
                <div className="dtc v-mid w-75 tr">
                    <p onClick={() => onRouteChange('signin')} className="pointer link dim dark-gray f6 f5-ns dib mr3 mr4-ns">Sign in</p>
                    <p onClick={() => onRouteChange('register')} className="pointer link dim dark-gray f6 f5-ns dib">Register</p>
                </div>
            </nav>
        );
    }    
};

export default Navigation;