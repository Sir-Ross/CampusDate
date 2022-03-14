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




