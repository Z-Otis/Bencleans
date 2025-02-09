import React from 'react';

const Button = ({ name, isBeam = false, containerClass, href }) => {
  return (
    <button className={`btn ${containerClass}`}>
       <a href={href} target='_blank' className="inline-block w-full h-full">
        {name}
      </a>
      
      {isBeam && (
        <span className='relative flex h-3 w-3'>
          <span className='btn-ping' />
          <span className='btn-ping_dot' />
        </span>
      )}
     
    </button>
  );
};

export default Button;