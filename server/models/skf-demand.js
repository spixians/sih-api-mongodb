var mongoose = require('mongoose')

var demand_estimation = mongoose.model('demand_estimation',{
   
    qty : {
        type : Number,
        required : true ,
       },

   comp_name : {
    type : String,
    required : true ,
    trim:true

        },

    comp_type:{
        type : String,
        required : true ,
        trim:true
           

    },
    
    mode_of_delivery:{
        type : String,
        required : true ,
        trim:true
    
    },

    month:{
        type : String,
        required : true ,
        trim:true
    
    },

    year:{
        type : Number,
        required : true ,
        trim:true
        }
})

module.exports = { demand_estimation }

// demand_estimation : {

//     qty : Number,
//     comp_name : String ,
//     comp_type : String,
//     mode_of_delivery: String,
//     month:String,
//     year:Number
// },
