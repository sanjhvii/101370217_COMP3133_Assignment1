
const mongoose = require('mongoose');

//Employee schema created 
const employeeSchema = mongoose.Schema({

    first_name:{
        type:String,
        required: true,
        max:100
    },

    last_name:{
        type:String,
        required: true,
        max:50
    },

    email:{
        type:String,
        required: true,
        unique: true,
         
    },

    salary:{
        type:Number,
        required: true
    },

    gender:{
        type: String,
        //enum - sets to predefined values - here it refers to different gender
        emum :['Male','Female','Other' ]

    }
})

module.exports = mongoose.model('employee', employeeSchema);