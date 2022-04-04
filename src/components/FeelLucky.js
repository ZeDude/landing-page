import React from 'react';

const FeelLucky = (key) => {
  const goDoodle = () => {
    window.location.href = 'https://www.google.com/doodle';
  };
  return (
    <input
      key={key}
      type="button"
      className="s-btn"
      value="I'm Feeling Lucky"
      onClick={() => goDoodle()}
    />
  );
};

export default FeelLucky;
