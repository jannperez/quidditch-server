const db = require("../db")
const House = require("../models/Houses");
const Student = require("../models/HogwartsStudents");
const Patronus = require("../models/Patronus");


db.on("error", console.error.bind(console, "MongoDB connection error"));


const main = async () => {

  const patronus1 = await Patronus.find({protection: "A Stag"})
  const patronus2 = await Patronus.find({protection: "Jack Russell Terrier"})
  const patronus3 = await Patronus.find({protection: "Otter"})
  const patronus4 = await Patronus.find({protection: "Dragon"})
  const patronus5 = await Patronus.find({protection: "Non-corporeal"})
  
  const house1 = await House.find({House_Name: "Gryffindor"})
  const house2 = await House.find({House_Name: "Slytherin"})
  const house3 = await House.find({House_Name: "Hufflepuff"})
  const house4 = await House.find({House_Name: "Ravenclaw"})




  
   const student = [
       {
        name: "Harry Potter",
        age: "10",
        race: "Wizard",
        house: house1[0]._id,
        patronus: patronus1[0]._id,
        team: house1[0]._id,  
       },
      {
        name: "Ron Weasly",
        age: "10",
        race: "Wizard",
        house: house1[0]._id,
        patronus: patronus2[0]._id,
        team: house1[0]._id,
    
      },
      {
        name: "Hermione Jean Granger",
        age: "10",
        race: "Witch",
        house: house1[0]._id,
        patronus: patronus3[0]._id,
        team: house1[0]._id,
      },
      {
        name: "Draco Malfoy",
        age: "10",
        race: "Wizard",
        house: house2[0]._id,
        patronus: patronus4[0]._id,
        team: house2[0]._id,
      },
      {
        name: "Neville Longbottom",
        age: "10",
        race: "Wizard",
        house: house3[0]._id,
        patronus: patronus5[0]._id,
        team: house3[0]._id,
      },
      {
        name: "Luna Lovegood",
        age: "10",
        race: "Witch",
        house: house4[0]._id,
        patronus: patronus5[1]._id,
        team: house4[0]._id,
      },

      { 
        name: "Arabella Gregorovitch",
        age: "10",
        race: "Witch",
        house: "house3[0]._id,",
        patronus: "patronus3[0]._id",
        team: "house3[0]._id,",
         
      },

      {
        name: "Demmy Rodriguez",
        age: "12",
        race: "Witch",
        house: "house1[0]._id",
        patronus: "patronus[0]._id",
        team: "house1[0]._id",

      }
   ] 
    
    await Student.insertMany(student);
    console.log("Abracadabra");

}
const run = async () => {
    await main();
    db.close();
  };
run();