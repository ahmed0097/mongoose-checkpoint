const mongoose = require('mongoose');
const schema = mongoose.Schema;



const personSchema = new schema({
  name: {
    type: String,
    required: true
},
age: {
    type: Number,
    required:false
} ,
favoriteFoods : 
      [String]
})

const Persons = module.exports = mongoose.model("Persons",personSchema)