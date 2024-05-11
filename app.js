const express = require('express')
const app = express()

const port = 3000;

app.get('/', (req,res)=> {
    res.status(200).send('<h1>Server backend Home page</h1>');
})

app.get('/about', (req,res)=> {
    const developer = {
        name: "Abdul",
        age: 38
    }
    res.status(200).json(developer)
})

app.listen(port, ()=> {
    console.log(`Server is listening on port ${port}...`);
})