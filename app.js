const express = require("express");
const app = express();
const port = 3000;


//middleware
app.use(express.json());
app.get('/', (req,res) => {
    res.send("<h1><center>Hello World</center></h1>")
})

app.get('/customers', (req,res) => {
    res.send('Customers page');
})


app.post('/', (req, res) => {
    res.send('Got a POST request!');
})

app.post('/customers', (req, res) => {
    console.log(req.body);
    res.send(req.body);
})



app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});