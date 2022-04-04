import React, { useState } from 'react';

const SettingsMenu = () => {
  const [themeFocus, setThemeFocus] = useState(false);
  return (
    <ul
      className="settingsMenu"
      aria-labelledby="Mses6b"
      id="dEjpnf"
      role="menu"
      style={{
        bottom: '46px',
        right: '30px',
        display: 'block'
      }}
    >
      <li role="none">
        <a
          className="menuItem"
          href="https://www.google.com/preferences?hl=en-IL&amp;fg=1"
          role="menuitem"
          tabIndex="-1"
        >
          Search settings
        </a>
      </li>
      <li role="none">
        <a
          className="menuItem"
          href="/advanced_search?hl=en-IL&amp;fg=1"
          role="menuitem"
          tabIndex="-1"
        >
          Advanced search
        </a>
      </li>
      <li role="none">
        <a
          className="menuItem"
          href="https://myactivity.google.com/privacyadvisor/search?utm_source=googlemenu&amp;fg=1"
          role="menuitem"
          tabIndex="-1"
        >
          Your data in Search
        </a>
      </li>
      <li role="none">
        <a
          className="menuItem"
          href="https://myactivity.google.com/product/search?utm_source=google&amp;hl=en-IL&amp;fg=1"
          role="menuitem"
          tabIndex="-1"
        >
          Search history
        </a>
      </li>
      <li role="none">
        <a
          className="menuItem"
          href="https://support.google.com/websearch/?p=ws_results_help&amp;hl=en-IL&amp;fg=1"
          role="menuitem"
          tabIndex="-1"
        >
          Search help
        </a>
      </li>
      <li role="none">
        <a className="menuItem" href="#" role="menuitem" tabIndex="-1">
          Send feedback
        </a>
      </li>
      <li className="menuSep" role="separator"></li>
      <li role="none">
        <div className="menuItem pENqnf" role="menuitem" tabIndex="-1">
          <div className="tFYjZe" role="link" tabIndex="0">
            <div
              style={{ color: '#70757a', fontSize: '14px' }}
              onMouseEnter={() => setThemeFocus(true)}
              onMouseLeave={() => setThemeFocus(false)}
            >
              Dark theme: Off
            </div>
            <div
              style={{
                float: 'right',
                marginTop: '-20px',
                display: themeFocus ? 'block' : 'none'
              }}
            >
              <span
                style={{ height: '20px', lineHeight: '20px', width: '20px' }}
                className="z1asCe aqvxcd"
              >
                <svg
                  focusable="false"
                  xmlns="http://www.w3.org/2000/svg"
                  enableBackground="new 0 0 24 24"
                  height="24"
                  viewBox="0 0 24 24"
                  width="24"
                >
                  <rect fill="none" height="24" width="24"></rect>
                  <path d="M12,7c-2.76,0-5,2.24-5,5s2.24,5,5,5s5-2.24,5-5S14.76,7,12,7L12,7z M2,13l2,0c0.55,0,1-0.45,1-1s-0.45-1-1-1l-2,0 c-0.55,0-1,0.45-1,1S1.45,13,2,13z M20,13l2,0c0.55,0,1-0.45,1-1s-0.45-1-1-1l-2,0c-0.55,0-1,0.45-1,1S19.45,13,20,13z M11,2v2 c0,0.55,0.45,1,1,1s1-0.45,1-1V2c0-0.55-0.45-1-1-1S11,1.45,11,2z M11,20v2c0,0.55,0.45,1,1,1s1-0.45,1-1v-2c0-0.55-0.45-1-1-1 C11.45,19,11,19.45,11,20z M5.99,4.58c-0.39-0.39-1.03-0.39-1.41,0c-0.39,0.39-0.39,1.03,0,1.41l1.06,1.06 c0.39,0.39,1.03,0.39,1.41,0s0.39-1.03,0-1.41L5.99,4.58z M18.36,16.95c-0.39-0.39-1.03-0.39-1.41,0c-0.39,0.39-0.39,1.03,0,1.41 l1.06,1.06c0.39,0.39,1.03,0.39,1.41,0c0.39-0.39,0.39-1.03,0-1.41L18.36,16.95z M19.42,5.99c0.39-0.39,0.39-1.03,0-1.41 c-0.39-0.39-1.03-0.39-1.41,0l-1.06,1.06c-0.39,0.39-0.39,1.03,0,1.41s1.03,0.39,1.41,0L19.42,5.99z M7.05,18.36 c0.39-0.39,0.39-1.03,0-1.41c-0.39-0.39-1.03-0.39-1.41,0l-1.06,1.06c-0.39,0.39-0.39,1.03,0,1.41s1.03,0.39,1.41,0L7.05,18.36z"></path>
                </svg>
              </span>
            </div>
          </div>
        </div>
      </li>
    </ul>
  );
};

export default SettingsMenu;
