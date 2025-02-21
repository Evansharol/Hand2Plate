const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 5001;

app.use(bodyParser.json());

let data = [
  { message: 'Hand2Plate has been a game-changer for our community. We are able to feed more people thanks to their efforts.', author: 'Charity Partner A' },
  { message: 'The process is so easy and efficient. We are grateful for the support from Hand2Plate.', author: 'Charity Partner B' },
  { message: 'A wonderful initiative that helps reduce food waste and support those in need.', author: 'Charity Partner C' },
];

app.get('/api/data', (req, res) => {
  res.json(data);
});

app.post('/api/submit', (req, res) => {
  const newData = req.body;
  data.push(newData);
  res.json({ message: 'Data submitted successfully', data: newData });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});