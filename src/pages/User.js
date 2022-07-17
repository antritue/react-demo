import React, { useState, useEffect } from 'react';

const User = () => {
  const [list, setList] = useState([]);
  useEffect(() => {
    (async () => {
      const res = await fetch('https://jsonplaceholder.typicode.com/users');
      const list = await res.json();
      setList(list);
    })();
  }, []);
  return (
    <>
      <h1>User</h1>
      <div className='grid-container'>
        {list.map((item) => (
          <div className='grid-item' key={item.id}>
            <h3>{item.name}</h3>
            <p>{item.email}</p>
            <p>{item.phone}</p>
            <p>{item.website}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default User;
