import React, { useState } from 'react';

function DeleteDog({ onDelete }) {
    const [dogId, setDogId] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onDelete(dogId);
        setDogId('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={dogId}
                onChange={(e) => setDogId(e.target.value)}
                placeholder="Dog ID"
            />
            <button type="submit">Delete Dog</button>
        </form>
    );
}

export default DeleteDog;
