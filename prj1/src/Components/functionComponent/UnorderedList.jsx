import React from 'react';

const UnorderedList = () => {
  const items = ['React', 'Vite', 'JavaScript', 'CSS'];

  return (
    <div>
      <h2>Topics to Learn</h2>
      <ul>
        {items.map((item, index) => (
          <li key={index} style={{ margin: '5px 0', color: '#333' }}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UnorderedList;
