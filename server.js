const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());
function getFlightPrices(sourceCity, destinationCity) {
  return [
    { source: "Delhi", destination: "Jaipur", price: 200, date: "12-Apr-2023" },
    { source: "Delhi", destination: "Mumbai", price: 250, date: "12-Apr-2023"},
    { source: "Mumbai", destination: "Bangalore", price: 150, date: "12-Apr-2023" },
  ];
}
app.get('/api/flights/:source/:destination/', (req, res) => {
  const { source, destination } = req.params;
  const flights = getFlightPrices(source, destination );
  res.json(flights);
});

const port = 5000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
