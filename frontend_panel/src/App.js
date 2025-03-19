import React, { useState, useEffect } from 'react';
import DogList from './components/DogList';
import AddDog from './components/AddDog';
import DeleteDog from './components/DeleteDog';
import RegisterUser from './components/RegisterUser';
import ThemeSwitcher from './components/ThemeSwitcher';
import axios from 'axios';

function App() {
    const [dogs, setDogs] = useState([]);

    useEffect(() => {
        fetchDogs();
    }, []);

    const fetchDogs = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/dogs');
            setDogs(response.data);
        } catch (error) {
            console.error("Error fetching dogs:", error);
        }
    };

    const addDog = async (newDog) => {
        try {
            await axios.post('http://localhost:5000/api/dogs/addDog', newDog);
            fetchDogs(); // Refresh dog list
        } catch (error) {
            console.error("Error adding dog:", error);
        }
    };

    const deleteDog = async (dogId) => {
        try {
            await axios.post('http://localhost:5000/api/dogs/delete', { id: dogId });
            fetchDogs(); // Refresh dog list
        } catch (error) {
            console.error("Error deleting dog:", error);
        }
    };

  return (
    <div>
      <h1>CWL Bełchatów Admin Panel</h1>
      <ThemeSwitcher />
      <DogList dogs={dogs} />
      <AddDog onAdd={addDog} />
      <DeleteDog onDelete={deleteDog} />
      <RegisterUser />
    </div>
  );
}

export default App;
