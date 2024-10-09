import React from 'react';
import '../css/pages/Home.css';
import HomeIcon from '../components/HomeIcon';
import HomeTitle from '../components/HomeTitle';
import ContactUs from '../components/ContactUs';
import NavBar from '../components/NavBar';
import Categories from '../components/Categories';
import About from '../components/About';

function Home() {
  return (
    <div className="Home">
      <header className="Home-header">
        <HomeIcon />
        <HomeTitle />
        <ContactUs />
        <NavBar />
        <Categories />
        <About />
      </header>
    </div>
  );
}

export default Home;
