const express = require('express');
const app = express();

const MongoClient = require('mongodb').MongoClient;
const createRouter = require('./helpers/create_router.js')
const cors = require('cors')

app.use(express.json());
app.use(cors());

MongoClient.connect('mongodb://0.0.0.0:27017', {useUnifiedTopology: true})
.then((client) => {
  const db = client.db('hotel_bookings');
  const hotelCollection = db.collection('customers')
  const hotelRouter = createRouter(hotelCollection)
  app.use('/api/hotel-bookings', hotelRouter)
})
.catch(console.error);

app.listen(5000, function () {
  console.log(`Listening on port ${ this.address().port }`);
});
