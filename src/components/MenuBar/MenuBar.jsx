import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";

//import images
import imgLogo from '../../assets/shared/logo.svg';
import hamburgerIcon from '../../assets/shared/icon-hamburger.svg';
import closeIcon from '../../assets/shared/icon-close.svg';

//Menu Bar component used in every page of the website.
const MenuBar = () => {

  //Main useState that defines the transition of content related to each active tab of the menu.
  //The initial value is defined as the value saved in local storage to get the last active tab before re-render.
  //if there is no data stored in local storage, define 'home' as the active tab.
  const [activeMenuTab, setActiveMenuTab] = useState(() => {
    const localData = JSON.parse(window.localStorage.getItem('activeMenuTab'));
    return localData ? localData : 'home';
  });

  //useEffect to save value in local storage related to the active tab
  useEffect(() => {
    window.localStorage.setItem('activeMenuTab', JSON.stringify(activeMenuTab));
  }, [activeMenuTab]);

  //useEffect to change body class to specific name depending on the active tab. Used to change bg image.
  useEffect(() => {
    function changeBodyClass(className) {
      document.body.className = '';
      document.body.classList.add(className);
    }

    switch (activeMenuTab) {
      case 'home':
        changeBodyClass('home-bg-image');
        break;
      case 'destination':
        changeBodyClass('destination-bg-image');
        break;
      case 'crew':
        changeBodyClass('crew-bg-image');
        break;
      case 'technology':
        changeBodyClass('technology-bg-image');
        break;
    }
  }, [activeMenuTab]);

  //useState and function UpdateMenu used to make interactions of hamburger menu.
  //(open hamburger menu on click, display hamburger menu, close hamburger menu on click).
  const [burgerClass, setBurgerClass] = useState('unclicked visible');
  const [closeClass, setCloseClass] = useState('clicked hidden')
  const [menuClass, setMenuClass] = useState('hidden');
  const [isMenuClicked, setIsMenuClicked] = useState(false);

  const updateMenu = () => {
    if(!isMenuClicked) {
      setBurgerClass('clicked hidden');
      setMenuClass('visible');
      setCloseClass('unclicked visible');
    } else {
      setBurgerClass('unclicked visible');
      setMenuClass('hidden');
      setCloseClass('clicked hidden');
    }
    setIsMenuClicked(!isMenuClicked);
  }

  return (
      <div className="header">
        <img src={imgLogo} alt="logo" className='logo'/>
        <div className={`menu-btns ${menuClass}`}>
          <img src={closeIcon} alt="close-icon" className={`close-icon ${closeClass}`} onClick={updateMenu} />
          <Link to="/" className={`menu-btn nav-text ${activeMenuTab === 'home' ? 'active-page' : ''}`} onClick={() => {
            setActiveMenuTab('home');
            setIsMenuClicked(false);
            updateMenu();
            }}>
            <span className="menu-btn-number">00</span>
            <span className="menu-btn-text">home</span>
          </Link>
          <Link to="/destination" className={`menu-btn nav-text ${activeMenuTab === 'destination' ? 'active-page' : ''}`} onClick={() => {
            setActiveMenuTab('destination');
            setIsMenuClicked(false);
            updateMenu();
            }}>
            <span className="menu-btn-number">01</span>
            <span className="menu-btn-text">destination</span>
          </Link>
          <Link to="/crew" className={`menu-btn nav-text ${activeMenuTab === 'crew' ? 'active-page' : ''}`} onClick={() => {
            setActiveMenuTab('crew');
            setIsMenuClicked(false);
            updateMenu();
            }}>
            <span className="menu-btn-number">02</span>
            <span className="menu-btn-text">crew</span>
          </Link>
          <Link to="/technology" className={`menu-btn nav-text ${activeMenuTab === 'technology' ? 'active-page' : ''}`} onClick={() => {
            setActiveMenuTab('technology');
            setIsMenuClicked(false);
            updateMenu();
            }}>
            <span className="menu-btn-number">03</span>
            <span className="menu-btn-text">technology</span>
          </Link>
        </div>
        <div className="burger-menu">
          <img src={hamburgerIcon} alt="hamb-icon" className={`hamburger-icon ${burgerClass}`} onClick={updateMenu} />
        </div>
        <div className="menu-line"></div>
      </div>
  )
}
  
export default MenuBar;