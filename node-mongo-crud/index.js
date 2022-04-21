const express = require('express');
const { MongoClient, ServerApiVersion } = require('mongodb');
const cors = require('cors');
const app = express();
const port =process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

//mongo username : dbuser1  , password: Jgi6vssvOO3QeWlO



const uri = "mongodb+srv://dbuser1:Jgi6vssvOO3QeWlO@cluster0.os0ne.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
async function run(){
    try{
        await client.connect();
        const userCollection = client.db('foodExpress').collection('user');

        const user ={ name: 'Nadiya Nodi', email: 'nodi@gmail.com'};
        const result = await userCollection.insertOne(user);

        console.log(`User inserted with id: ${result.insertedId} `)

    }
    finally{
        // await client.close();
    }
}
run().catch(console.dir);

app.get('/', (req ,res)=>{
    res.send('Hello this this mongoDb with node')
});

app.listen(port , ()=>{
    console.log("Hi this is crud server");
})