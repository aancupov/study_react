import React from 'react';

const Likes = ({ id, result, click, error }) => {
  let res = 0;
  if ( !error && Array.isArray(result) ) {
    res = result[id].likes;
  }
  return (
    <div>
      { error ? (
          <div> Likes: error </div>
        ) : (
          <div> Likes: { res } </div>
      )}
      <button onClick={click}>Like</button>
    </div>
  ); 
}

export default Likes;
