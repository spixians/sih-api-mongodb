var mongoose = require('mongoose')
var data = new Date()


var Demand = mongoose.model('Demand',{
   
    quantity : {
        type : Number,
        required : true ,
       },

    component : {
        type : String,
        required : true ,
        trim:true   
    },
    componentType:{
        type : String,
        required : true ,
        trim:true,
    },
    
    deliveryMode:{
        type : String,
        required : true ,
        trim:true,
    },
    demandDate : {
        type: String,
        default : data.getDate()+'-'+data.getMonth()+'-'+data.getFullYear() ,
        trim :true,
    },
    expectedDate : {
        type : String,
        required : true ,
    },
    warehouseAvailability : {
        type : String,
        required : true ,
    },
    monthlyProduce : {
        type : String,
        required : true ,
    },
    


    
})

module.exports = { Demand }

// demand_estimation : {

//     qty : Number,
//     comp_name : String ,
//     comp_type : String,
//     mode_of_delivery: String,
//     month:String,
//     year:Number
// },
