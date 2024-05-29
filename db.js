const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://juanchoavid57:Yujuan1112*@curso-full-stack.r33wq9a.mongodb.net/?retryWrites=true&w=majority&appName=curso-full-stack";
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

export default client