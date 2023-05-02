const { MongoClient, ObjectId } = require('mongodb');

const url = process.env.MONGO_URL;

const client = new MongoClient(url);

async function connect() {
  const db = await client.connect();
  console.log("Connected to MongoDB");
  return db;
}

module.exports = { connect, ObjectId };