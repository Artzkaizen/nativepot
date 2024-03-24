import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';
import './Navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);
  const [activeLink, setActiveLink] = React.useState('home');

  const handleLinkClick = (link) => {
    setActiveLink(link);
    setToggleMenu(false); // Close the menu after clicking a link on small screens
  };

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <h1 className='app__navbar-logo-text' >Native Pot</h1>
      </div>
      <ul className="app__navbar-links">
        <li className={`p__opensans ${activeLink === 'home' ? 'active' : ''}`}><a href="#home" onClick={() => handleLinkClick('home')}>Home</a></li>
        <li className={`p__opensans ${activeLink === 'about' ? 'active' : ''}`}><a href="#about" onClick={() => handleLinkClick('about')}>About</a></li>
        <li className={`p__opensans ${activeLink === 'menu' ? 'active' : ''}`}><a href="#menu" onClick={() => handleLinkClick('menu')}>Menu</a></li>
        <li className={`p__opensans ${activeLink === 'awards' ? 'active' : ''}`}><a href="#awards" onClick={() => handleLinkClick('awards')}>Awards</a></li>
        <li className={`p__opensans ${activeLink === 'contact' ? 'active' : ''}`}><a href="#contact" onClick={() => handleLinkClick('contact')}>Contact</a></li>
      </ul>
      <div className="app__navbar-login">
        <a href="/">Book Table</a>
      </div>
      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu color="#fff" fontSize={27} onClick={() => setToggleMenu(true)} />
        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
            <MdOutlineRestaurantMenu fontSize={27} className="overlay__close" onClick={() => setToggleMenu(false)} />
            <ul className="app__navbar-smallscreen_links">
              <li><a href="#home" onClick={() => handleLinkClick('home')}>Home</a></li>
              <li><a href="#about" onClick={() => handleLinkClick('about')}>About</a></li>
              <li><a href="#menu" onClick={() => handleLinkClick('menu')}>Menu</a></li>
              <li><a href="#awards" onClick={() => handleLinkClick('awards')}>Awards</a></li>
              <li><a href="#contact" onClick={() => handleLinkClick('contact')}>Contact</a></li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
