
const dns = require("dns");
dns.setServers(["8.8.8.8"]);
require('dotenv').config() 
const express = require('express');
const cors = require('cors');
const app =express()
const port =process.env.PORT || 5000;


//middleware
 app.use(cors())
 app.use(express.json());


// CHECK the name and pass
// console.log(process.env.SET_NAME)
// console.log(process.env.SET_PASS)


const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = `mongodb+srv://${process.env.SET_NAME}:${process.env.SET_PASS}@cluster0.4vpj6z9.mongodb.net/?appName=Cluster0`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();

//post
app.post('/coffees',async(req,res)=>{
    const newCoffe=req.body
    console.log(newCoffe);
})

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);


 app.get('/',async(req,res)=>{
    res.send("Coffee making server running")
 })

 app.listen(port,()=>{
    console.log(`coffe server runnig on port : ${port}`)
 })