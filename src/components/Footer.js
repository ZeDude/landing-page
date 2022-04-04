import React, { useEffect, useState } from 'react';
import LinkButton from './LinkButton';
import SettingsMenu from './SettingsMenu';
import useComponentVisible from '../utils/useComponentVisible';

const Footer = ({ country }) => {
  const [isVisible, setIsVisible] = useState(false);

  const { ref, isComponentVisible, setIsComponentVisible } =
    useComponentVisible(false);

  const toggleSettingsMenu = (event) => {
    event.preventDefault();
    console.log('toggleSettingsMenu, isComponentVisible', isComponentVisible);
    console.log('toggleSettingsMenu, isVisible', isVisible);
    setIsComponentVisible(!isVisible);
  };

  useEffect(() => {
    console.log('useEffect, isComponentVisible', isComponentVisible);
    setIsVisible(isComponentVisible);
  }, [isComponentVisible]);

  return (
    <footer>
      <div ref={ref}>{isComponentVisible && <SettingsMenu />}</div>
      <h4>{country}</h4>
      <div className="links">
        <div className="link-left">
          <LinkButton url="#" label="About" />
          <LinkButton url="#" label="Advertising" />
          <LinkButton url="#" label="Business" />
          <LinkButton url="#" label="How Search works" />
        </div>
        <div className="link-right">
          <LinkButton url="#" label="Privacy" />
          <LinkButton url="#" label="Terms" />
          <a href="#" onClick={(e) => toggleSettingsMenu(e)}>
            Settings
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
