import React from 'react';

// partial components
import Copyright from '../partials/Copyright';
import Social from '../partials/Social';

const Footer = () => {
  return (
    <div className='footer-background text-white text-center'>
      <Social />
      <Copyright />
    </div>
  );
};

export default Footer;
