const db = require("../db")
const Wand = require("../models/Wand")
db.on("error", console.error.bind(console, "MongoDB connection error"));

const main = async () => {
    const wand = [
    {
        age_restriction: "10",
        wand_material: "11 inches long, made of holly, and Phoenix feather",
        access_to_magic: "Passed",
        
    },
    {
        age_restriction: "10",
        wand_material: "14 inches, willow, and unicorn hair",
        access_to_magic: "Passed",
        
    },
    {
        age_restriction: "10",
        wand_material: "10.5 inches, vine wood, and dragon heartstring",
        access_to_magic: "Passed",
        
    }, {
        age_restriction: "10",
        wand_material: "10 inches long, hawthorne wood, and unicorn hair",
        access_to_magic: "Passed",
        
    },
    {
        age_restriction: "10",
        wand_material: "Unknown, Passed down to him",
        access_to_magic: "Passed",
        
    },
    {
        age_restriction: "10",
        wand_material: "Unknown",
        access_to_magic: "Passed",
        
    },
]

await Wand.insertMany(wand);
    console.log("Abracadabra");
}
const run = async () => {
    await main();
    db.close();
  };

  run();
  


