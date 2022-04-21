const express = require('express');
const cors = require('cors');
const app = express();
const port =process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/', (req ,res)=>{
    res.send('Hello this this mongoDb with node')
});

app.listen(port , ()=>{
    console.log("Hi this is crud server");
})