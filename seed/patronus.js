const db = require("../db")
const Patronus = require("../models/Patronus")
const Wand = require("../models/Wand")
db.on("error", console.error.bind(console, "MongoDB connection error"));

const main = async () => {


  const wand1 = await Wand.find({wand_material:"11 inches long, made of holly, and Phoenix feather"})
  const wand2 = await Wand.find({wand_material:"14 inches, willow, and unicorn hair"})
  const wand3 = await Wand.find({wand_material:"10.5 inches, vine wood, and dragon heartstring"})
  const wand4 = await Wand.find({wand_material:"10 inches long, hawthorne wood, and unicorn hair"})
  const wand5 = await Wand.find({wand_material:"Unknown, Passed down to him"})
  const wand6 = await Wand.find({wand_material:"Unknown"})



    const patronus = [
        {
           wand: wand1[0]._id,
           protection: "A Stag",
         },
         {
            wand: wand2[0]._id,
            protection: "Jack Russell Terrier",
          },
          {
            wand: wand3[0]._id,
            protection: "Otter",
          },
          {
            wand: wand4[0]._id,
            protection: "Dragon",
          },
          {
            wand: wand5[0]._id,
            protection: "Non-corporeal",
          },
          {
            wand: wand6[0]._id,
            protection: "Non-corporeal",
          },   
    ] 
     
     await Patronus.insertMany(patronus);
     console.log("Abracadabra");

    }
    const run = async () => {
        await main();
        db.close();
      };
    
      run();