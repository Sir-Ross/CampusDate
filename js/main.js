const { MongoClient, ServerApiVersion } = require("mongodb");

//Connection URL
const {uri} = require('./config.json');

//Client
const client = new MongoClient(uri,
	{
		serverApi: {
			version: ServerApiVersion.v1,
			strict: true,
			deprecationErrors: true,
		}
	});


async function run() {
  try {
    // Connect the client to the server
    console.log("Connecting");
    await client.connect();
    console.log("Connecting to database");
    // Establish and verify connection
    await client.db("campusdate").command({ ping: 1 });
    console.log("Connected successfully to server");
  } finally {
    // Ensures that the client will close when you finish/error
    console.log("Connection closed");
    await client.close();
  }
}

run();
//console.log("Test");