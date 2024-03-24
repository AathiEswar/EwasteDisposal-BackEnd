const mongoose = require("mongoose");

const centerSchema = new mongoose.Schema({
    Sno : Number,
    Name_Address : String ,
    Installed_Capacity_Metric_Tons_per_Annum_MTA : Number, 
    email : String ,
    customers : {type:  Array , unique: true},
    
})


const centerModel = mongoose.model("centerModel" , centerSchema );

module.exports = centerModel;