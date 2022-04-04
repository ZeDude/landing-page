import React, { useState } from 'react';
import { fetchUser } from '../controllers/LandingPageController';

const NavMenu = ({ user, setUser }) => {
  const fetchUserHandler = () => {
    fetchUser()
      .then((user) => {
        setUser(user);
      })
      .catch((error) => {
        // manage error
      });
  };
  return (
    <nav>
      <a href="#">Gmail</a>
      <a href="#">Images</a>
      <img src="img/g-menu.PNG" />
      {!user.email && (
        <button
          onClick={() => {
            fetchUserHandler();
          }}
        >
          Sign in
        </button>
      )}
      {user.email && (
        <div className="gb_La gb_hd gb_mg gb_f gb_Af">
          <div className="gb_zf gb_Xa gb_mg gb_f">
            <a
              className="gb_A gb_Ka gb_f"
              aria-label={`Google Account: ${user.fullName} (${user.email})`}
              href="#"
              role="button"
              tabIndex="0"
              aria-expanded="false"
            >
              <img
                className="gb_Aa gbii"
                src={`img/${user.img_src}`}
                alt=""
                aria-hidden="true"
              />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavMenu;
