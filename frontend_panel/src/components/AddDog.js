import React, { useState } from 'react';

function AddDog({ onAdd }) {
  const [name, setName] = useState('');
  const [race, setRace] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd({ name, race });
    setName('');
    setRace('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" />
      <input type="text" value={race} onChange={(e) => setRace(e.target.value)} placeholder="Race" />
      <button type="submit">Add Dog</button>
    </form>
  );
}

export default AddDog;
