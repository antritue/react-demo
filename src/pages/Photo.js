import React, { useState, useEffect } from 'react';

const Photo = () => {
  const [list, setList] = useState([]);
  useEffect(() => {
    (async () => {
      const res = await fetch('https://jsonplaceholder.typicode.com/photos');
      const list = await res.json();
      setList(list);
    })();
  }, []);

  return (
    <>
      <h1>Photo</h1>
      <div className='grid-container'>
        {list.map((item) => (
          <div className='grid-item' key={item.id}>
            <img src={item.thumbnailUrl} />
            <p>{item.title}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Photo;
