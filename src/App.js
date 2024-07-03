import React from 'react';
import Header from './components/header';
import Sidebar from './components/sidebar';
import Main from './components/main';
import Footer from './components/footer';
import './App.css';

const App = () => {
  return (
    <div className="app">
      <Header />
      <div className="content">
        <Sidebar />
        <Main />
      </div>
      <Footer />
    </div>
  );
};

export default App;
