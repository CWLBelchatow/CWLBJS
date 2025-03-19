import React from 'react';

function DogList({ dogs }) {
  return (
    <div>
      <h2>Dog List</h2>
      <ul>
        {dogs.map(dog => (
          <li key={dog.id}>{dog.name} - {dog.race}</li>
        ))}
      </ul>
    </div>
  );
}

export default DogList;
