import React from 'react';

const OtherLanguages = ({ otherLanguages }) => {
  return (
    otherLanguages && (
      <div className="lang">
        Google offered in:
        {otherLanguages.map((otherLang) => {
          return (
            <a href="#" key={otherLang.languageCode} dir={otherLang.direction}>
              {otherLang.languageName}
            </a>
          );
        })}
        ;
      </div>
    )
  );
};

export default OtherLanguages;
