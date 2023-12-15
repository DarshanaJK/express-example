const express = require("express");
const app = express();
const port = 3000;

app.get('/', (req,res) => {
    res.send("<h1><center>Hello World</center></h1>")
})


app.post('/', (req, res) => {
    res.send('Got a POST request!');
})


app.get('/customers', (req,res) => {
    res.send('Customers page');
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});