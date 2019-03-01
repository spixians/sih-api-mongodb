require('./config/config')


const express = require('express')
const bodyParser = require('body-parser')
const { ObjectID } = require('mongodb')
const _ =require('lodash')

var { place_order } = require('./models/place-order')
// var { Sample } =require('./models/sample')
var {mongoose} = require('./db/mongoose');
var { Demand } =require('./models/skf-demand')


var app=express();
app.use(bodyParser.json());

app.post('/place-order',(req,res)=>{
    console.log(req.body);
    var body = _.pick(req.body , ['amount','batches','component','componentType','expectedDate','price','quantity','supplier', 'deliveryMode' ])
    
    //  console.log("hi")
    var data1=new place_order(body) 

    data1.save().then((d)=>{
        console.log(d)
        res.send(d)
    },(error)=>{
        console.log(error)
        res.status(400).send(e)
    })
})

app.get('/place-order',(req,res)=>{
    console.log('working')
    place_order.find().then((data)=>{
        res.send({data});
    },(e)=>{
        res.status(400).send(e);
    })
})

app.delete('/place-order',(req,res)=>{
    place_order.deleteMany({}).then((data)=>{
        res.send('delete successful')
    },(e)=>{
        res.sendStatus(400).send(e)
    })
})

app.get('/place-order/:supplier',(req,res)=>{
    var name = req.params.supplier

    place_order.find({supplier: name}).then((data)=>{
        res.send(data)
    },(e)=>{
        res.sendStatus(400).send(e)
    })

})

app.get('/demand', (req,res)=>{
    Demand.find().then((data)=>{
        res.send({data});
    },(e)=>{
        res.sendStatus(400).send(e)
    })
})

app.post('/demand',(req, res)=>{
    var body = _.pick(req.body , ['quantity', 'component','componentType','deliveryMode','demandDate','expectedDate','warehouseAvailability','monthlyProduce'])

    var demand =new Demand(body)

    demand.save().then((d)=>{
        console.log(d)
        res.send(d)
    },(e)=>{
        res.sendStatus(400).send(e)
        
    })
})
const port = process.env.PORT || 3000

app.listen(port,()=>{
    console.log(`Server started on port ${port}`)
})