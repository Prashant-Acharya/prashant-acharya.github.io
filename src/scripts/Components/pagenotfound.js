import React from 'react';
import { Link } from 'react-router-dom';

const PageNotFound = () => (
  <div>
    <h2>Oops, Page Not Found</h2>
    <Link to='/' className='link'>
      Redirect to home page instead
    </Link>
  </div>
);

export default PageNotFound;
