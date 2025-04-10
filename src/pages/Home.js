// pages/Home.js
import React from 'react';
import Header from '../components/Header';

function Home() {
  return (
    <div>
      <Header />
      <div className="container mt-4">
      <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
        {/* You can add more content here */}
      </div>
    </div>
  );
}

export default Home;
