import React from 'react';

const LinkButton = ({ url, label }) => {
  return (
    <a href={url} target="_top">
      {label}
    </a>
  );
};

export default LinkButton;
