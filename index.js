const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const { getBrands } = require('node-car-api');
const Brands = require('./models/brands');

/*
// connect to mongodb
mongoose.connect('mongodb://localhost/CARADISIAC');
mongoose.Promise = global.Promise;

//Store all the brands received from the car-api in the CARADISIAC databse (brands collection)
async function AddBrands() {
    try {
        const brands = await getBrands()
        await brands.forEach(brand => {
              Brands.create({ name: brand })
              //console.log(brand);
        })
    } catch (err) {
        console.log(err)
    }
}

AddBrands();



// set up express app
const app = express();

// use body-parser middleware
app.use(bodyParser.json());

// initialize routes
app.use('/api', require('./routes/api'));

// error handling middleware
app.use(function(err, req, res, next){
    console.log(err); // to see properties of message in our console
    res.status(422).send({error: err.message});
});

// listen for requests
app.listen(process.env.port || 4000, function(){
    console.log('now listening for requests on port 4000');
});
*/


var elasticsearch = require('elasticsearch');
var client = new elasticsearch.Client({
  host: 'localhost:9200',
  log: 'trace'
});

client.ping({
    // ping usually has a 3000ms timeout
    requestTimeout: 1000
  }, function (error) {
    if (error) {
      console.trace('elasticsearch cluster is down!');
    } else {
      console.log('All is well');
    }
  });

/*var body = {
    user:'miguel'
}

client.indices.putMapping({index:"twitter", type:"_doc", body:body});*/

client.indices.create({  
    index: 'gov'
  },function(err,resp,status) {
    if(err) {
      console.log(err);
    }
    else {
      console.log("create",resp);
    }
  });
