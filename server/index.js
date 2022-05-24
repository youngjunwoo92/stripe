const express = require('express');
const cors = require('cors');
const createCheckoutSession = require('./api/checkout');
require('dotenv').config();

const app = express();
const port = 8080;

app.use(express.json());
app.use(cors({ origin: true }));

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.post('/create-checkout-session', createCheckoutSession);

app.listen(port, () => console.log('server listening on port', port));
