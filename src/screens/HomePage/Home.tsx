import React from 'react';
import HomeBar from './Bar/home.bar';
import HomePage from './Page/home.page';


const Home: React.FC = () => {
  return (
    <div>
      <HomeBar />
      <HomePage />
    </div>
  );
};

export default Home;