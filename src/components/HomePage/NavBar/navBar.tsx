import React from 'react';
import { navBarStyles } from './navBar.styles';

const NavBar: React.FC = () => {
    return (
        <nav style={navBarStyles.navbar}>
            <div style={navBarStyles.logo}>
                <h1>Educa Nexo 2.0</h1>
            </div>
            <form style={navBarStyles.loginForm}>
                <input type="email" placeholder="Email" style={navBarStyles.input} />
                <input type="password" placeholder="Password" style={navBarStyles.input} />
                <button type="submit" style={navBarStyles.button}>Login</button>
            </form>
        </nav>
    );
};

export default NavBar;
