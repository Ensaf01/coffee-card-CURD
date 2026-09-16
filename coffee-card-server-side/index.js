
const dns = require("dns");
dns.setServers(["8.8.8.8"]);
require('dotenv').config()
const express = require('express');
const cors = require('cors');
const app = express()
const port = process.env.PORT || 5000;


//middleware
app.use(cors())
app.use(express.json());


// CHECK the name and pass
console.log(process.env.SET_NAME)
console.log(process.env.SET_PASS)


const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
// const { default: UpdateCoffee } = require("../coffee-card-client-side/src/components/UpdateCoffee");
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
    //database of mongodb 
    const coffeeCollection = client.db("CoffeeDB").collection("coffeex");//CoffeeDB db name

    app.get('/coffees', async (req, res) => {

      const cursor = coffeeCollection.find() // find all data
      const result = await cursor.toArray();
      res.send(result)
    })
    // update page  a dekhabe id wise tai get mane read
    app.get('/coffees/:id', async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) }
      const result = await coffeeCollection.findOne(query)
      res.send(result)
    })
    //post
    app.post('/coffees', async (req, res) => {
      const newCoffe = req.body
      console.log(newCoffe);
      const result = await coffeeCollection.insertOne(newCoffe) // client theke asa newcoffee DB te insert korbo
      res.send(result)//client ke res korbo with result
    })

    //update 
    app.put('/coffees/:id', async (req, res) => {
      const id = req.params.id;
      const filter = { _id: new ObjectId(id) }
      const options = { upsert: true };
      const updatedCoffee=req.body;
      const coffee = {
        $set: {
          name: updatedCoffee.name,
          supplier: updatedCoffee.supplier,
          chef: updatedCoffee.chef,
          taste: updatedCoffee.taste,
          category: updatedCoffee.category,
          photo: updatedCoffee.photo,

        }
      }
      const result=await coffeeCollection.updateOne(filter,coffee,options)
      res.send(result)

    })

    app.delete('/coffees/:id', async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) }
      const result = await coffeeCollection.deleteOne(query)
      res.send(result)
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


app.get('/', async (req, res) => {
  res.send("Coffee making server running")
})

app.listen(port, () => {
  console.log(`coffe server runnig on port : ${port}`)
})