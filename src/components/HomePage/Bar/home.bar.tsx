import React from 'react';
import { homeBarStyles } from './home.bar.styles';

const HomeBar: React.FC = () => {
    return (
        <nav style={homeBarStyles.navbar}>
            <div style={homeBarStyles.logo}>
                <h1>Educa Nexo 2.0</h1>
            </div>
            <form style={homeBarStyles.loginForm}>
                <input type="email" placeholder="Email" style={homeBarStyles.input} />
                <input type="password" placeholder="Password" style={homeBarStyles.input} />
                <button type="submit" style={homeBarStyles.button}>Login</button>
            </form>
        </nav>
    );
};

export default HomeBar;
