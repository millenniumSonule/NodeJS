const { MongoClient } = require('mongodb');

// Connection URL
const url = 'mongodb://localhost:27017';
// Database Name
const dbName = 'asdasd'; // Make sure this matches your intended database name

const client = new MongoClient(url);

async function createCollection() {
  try {
    await client.connect();
    console.log('Connected successfully to server');

    const db = client.db(dbName);

    // Check if the collection exists
    const collections = await db.listCollections({ name: 'asddwqd' }).toArray();
    if (collections.length > 0) {
      console.log('Collection already exists');
    } else {
      // Create a collection 
      const collection = await db.createCollection('asddwqd');
      console.log('Collection created:', collection.collectionName);
    }

  } catch (err) {
    console.error('Error:', err);
  } finally {
    await client.close();
  }
}

createCollection();
