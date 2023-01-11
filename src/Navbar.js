import React, { useState, useRef, useEffect } from 'react';
import { FaBars } from 'react-icons/fa';
import { links, social } from './data';
import logo from './logo.svg';

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);
  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };
  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height; 
    //linksHeight gets the total height of the ul that is linked with 
    
    if (showLinks) {
      linksContainerRef.current.style.height = `${linksHeight}px`; 
//When showlinks is clicked (HamburgerMenu) the height of ul is set to the div element linked with keyword ref
    } else {
      linksContainerRef.current.style.height = '0px';
//When showlinks is  not clicked (HamburgerMenu) the height of ul is set to 0px to hide it
    }
  }, [showLinks]); 
  return (
    <nav>
      <div className='nav-center'>
        <div className='nav-header'>
          <img src={logo} className='logo' alt='logo' />
          <button className='nav-toggle' onClick={toggleLinks}>
            <FaBars />
          </button>
        </div>
        <div className='links-container' ref={linksContainerRef}> 
{/* You need to use ref={} to link with with a useref hook. Here linksContainerRef is linked to dynamically set the height retrived from ul elemenet obtained from linksref hook */}
          
          <ul className='links' ref={linksRef}>
{/* Here linksRef is linked to retrive the height of ul elements within it */}
            {links.map((link) => {
              const { id, url, text } = link;
              return (
                <li key={id}>
                  <a href={url}>{text}</a>
                </li>
              );
            })}
          </ul>
        </div>
        <ul className='social-icons'>
          {social.map((socialIcon) => {
            const { id, url, icon } = socialIcon;
            return (
              <li key={id}>
                <a href={url}>{icon}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

