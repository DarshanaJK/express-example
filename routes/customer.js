const express = require('express');
const router = express.Router();

router.get('/', (req,res) => {
    res.send("Customer API just called!");
})

router.get('/:id', (req,res) => {
    res.send(`Customer with id ${req.params.id} just called!`)
})

router.post('/', (req,res) => {
    res.send(req.body);
})

router.put('/:id',(req,res) => {
    res.send(`Customer with id ${req.params.id} just updated!`)
})

router.delete('/:id',(req,res) => {
    res.send(`Customer with id ${req.params.id} just deleted!`)
})

module.exports = router;