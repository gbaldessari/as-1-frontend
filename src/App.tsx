import React from 'react';
import NavBar from './components/HomePage/NavBar/navBar';
import HomePage from './components/HomePage/homePage';


const App: React.FC = () => {
    return (
        <div>
            <NavBar />
            <HomePage />
        </div>
    );
};

export default App;
