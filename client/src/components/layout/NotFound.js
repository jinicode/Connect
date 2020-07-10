import React, { Fragment } from 'react';

const NotFound = () => {
  return (
    <Fragment>
      <h1 className='x-large text-primary'>
        <i className='fas fa-exclamation-triangle' /> Page Not Found, maybe jinit and this page are hiding in quaratine .
      </h1>
      <p className='large'>Sorry, you are not cool enough to visit this page .</p>
    </Fragment>
  );
};

export default NotFound;
