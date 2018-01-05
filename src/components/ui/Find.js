import React from 'react';

const Find = ({find}) => (
  <div className='find'>
    Find: <input type="text" onChange={find}/>
  </div>  
);

export default Find;