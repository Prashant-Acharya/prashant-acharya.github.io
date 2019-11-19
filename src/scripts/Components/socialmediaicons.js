import React from 'react';

const SocialIcons = ({ image, link, name }) => (
  <React.Fragment>
    <a href={link} target='_blank'>
      <img src={image} alt={name} />
    </a>
  </React.Fragment>
);

export default SocialIcons;
