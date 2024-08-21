const express = require('express');
const { MongoClient } = require('mongodb');

const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// MongoDB Connection URL and Database Name
const url = 'mongodb://localhost:27017';
const dbName = 'asdasd'; // Your database name

const client = new MongoClient(url);

async function getCollection() {
  try {
    await client.connect();
    console.log('Connected successfully to server');
    const db = client.db(dbName);
    return db.collection('asddwqd'); // Your collection name
  } catch (err) {
    console.error('Error connecting to MongoDB:', err);
    throw err;
  }
}

// API endpoint to post data to the database
app.post('/data', async (req, res) => {
  const data = req.body; // Data from the request body

  try {
    const collection = await getCollection();
    const result = await collection.insertOne(data);
    res.status(201).json({ message: 'Data inserted successfully', id: result.insertedId });
  } catch (err) {
    console.error('Error inserting data:', err);
    res.status(500).json({ message: 'Error inserting data' });
  }
});

app.get('/get', async (req,res)=>{
    res.send('SEND THE DATA')
})

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
