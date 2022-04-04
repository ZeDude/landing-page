import React, { useState, useEffect } from 'react';
//import './App.css';

import NavMenu from './components/NavMenu';
import Footer from './components/Footer';
import SearchInput from './components/SearchInput';
import OtherLanguages from './components/OtherLanguages';
import { fetchPageEnv } from './controllers/LandingPageController';

function App() {
  const [pageEnv, setPageEnv] = useState({});
  const [user, setUser] = useState({});
  useEffect(() => {
    fetchPageEnv(navigator.language)
      .then((pageEnv) => {
        console.log('pageEnv', pageEnv);
        setPageEnv(pageEnv);
      })
      .catch((error) => {
        // manage error
      });
  }, []);
  console.log('user', user);
  return (
    <>
      <React.StrictMode>
        <NavMenu user={user} setUser={setUser} />
        <section className="section-1">
          <img src="img/logo.png" className="logo" />
          <SearchInput />
          <OtherLanguages otherLanguages={pageEnv.otherLanguages} />
        </section>
        <Footer country="Israel" />
      </React.StrictMode>
    </>
  );
}

export default App;
