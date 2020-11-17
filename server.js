const express = require("express");
const mongoose = require("mongoose");

//create a server
 const app = express();
 
 const PORT = process.env.PORT || 5000;

 app.listen(PORT, () => console.log("server is connected"));

 //connect to database

 const  uri = require("./config/connectt").MONGO_URI;

 mongoose 
 .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true})
 .then(() => console.log("database connected"))
 .catch(() => console.log("database connection failed"));

 const Persons = require("./models/person");





 //Create and Save a Record of a Model
const Person = new PersonModel({
  name: 'ali',
  age: 20,
  FavoriteFoods: ['pizza','burger']
});

Person.save(function(err, data){
  if(err) return console.error(err);
  console.log(`data saved successfuly ${data}`)
});

//Create Many Records with model.create()
PersonModel
.create([{
  name: 'mohamed',
  age: 66,
  FavoriteFoods: ['couscous','mlou5iya']
}, {
  name: ayman,
  age: 58,
  FavoriteFoods: ['mlewii', 'panini']
}, {
  name: 'seif',
  age: 67,
  FavoriteFoods: ['chakchouka','omlet']

}])
.then(() =>{
  console.log("Adding many persons successfuly");
})
.catch(err =>{
  console.error(err);
})

//Use model.find() to Search Your Database

PersonModel
.find({
  name:'ali'
})
.then(res =>{
  console.log("finding person with the name of ali");
  conssole.log(res);
})
.catch(err =>{
  console.error(err);
})

//Use model.findOne() to Return a Single Matching Document from Your Database

PersonModel
const food = "panini"
PersonModel
.findOne({FavoriteFoods: { $elemMatch: { $eq:food}}})
.then(res => {
  console.log("matching person by their food");
  console.log(err);
})
.catch(err => {
  console.error(err);
})


// Use model.findById() to Search Your Database By _id

//Perform Classic Updates by Running Find, Edit, then Save

 //Perform New Updates on a Document Using model.findOneAndUpdate()

PersonModel
    .findOneAndUpdate({name: 'seif'}, {age: 88}, {new: true, runValidators: true})
    .then(res => {
        console.log("New Document");
        console.log(res);
    })
    .catch(err => {
        console.error(err);
    })


//Delete One Document Using model.findByIdAndRemove




//MongoDB and Mongoose - Delete Many Documents with model.remove()

PersonModel
    .remove({ name: 'seif' })
    .then(res => {
        console.log("Delete work");
        console.log(res);
        if(res.n === 0){
            console.log("No persons deleted");
        }else
        {
            console.log(`${res.n} Person deleted`);
        }
    })
    .catch(err => {
        console.error(err);
    })


//Chain Search Query Helpers to Narrow Search Results
const food = "omlet";
PersonModel
    .find({favoriteFoods: { $elemMatch: {$eq: food}}})
    .sort({name: 1})
    .limit(2)
    .select({age: false})
    .exec(function(err, data){
        if(err) console.error(err);
        console.log(data);
    })
