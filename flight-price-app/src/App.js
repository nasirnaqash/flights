import React, { useState } from 'react';
import './App.css';

function App() {
  const [sourceCity, setSourceCity] = useState('');
  const [destinationCity, setDestinationCity] = useState('');
  const [flightPrices, setFlightPrices] = useState([]);

  const getFlightPrices = async () => {
    try {
      const response = await fetch(`/api/flights/${sourceCity}/${destinationCity}`);
      const data = await response.json();
      setFlightPrices(data);
    } catch (error) {
      console.error('Error fetching flight prices:', error);
    }
  };

  return (
    <div className="App">
      <h1>Flight Prices</h1>
      <div>
        <input
          type="text"
          placeholder="Source City"
          value={sourceCity}
          onChange={(e) => setSourceCity(e.target.value)}
        />
        <input
          type="text"
          placeholder="Destination City"
          value={destinationCity}
          onChange={(e) => setDestinationCity(e.target.value)}
        />
        <button onClick={getFlightPrices}>Search</button>
      </div>
      {flightPrices.length > 0 ? (
        <ul>
          {flightPrices.find((flight, index) => (
            <li key={index}>
              {flight.source} to {flight.destination}: ${flight.price}
            </li>
          ))}
        </ul>
      ) : (
        <p>No flight prices to display.</p>
      )}
    </div>
  );
}
export default App;
