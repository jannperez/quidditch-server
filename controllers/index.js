const House = require("../models/Houses");
const Student = require("../models/HogwartsStudents");
const Patronus = require("../models/Patronus");
const Wand = require("../models/Wand");


async function createStudent(req, res) {
  try {
    const student = await new Student(req.body)
    await student.save();
    return res.status(201).json({ student });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}

async function createHouse(req, res) {
  try {
    const house = await new House(req.body)
    await house.save();
    return res.status(201).json({ house });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}

async function createPatronus(req, res) {
  try {
    const patronus = await new Patronus(req.body)
    await patronus.save();
    return res.status(201).json({ patronus });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}

async function createWand(req, res) {
  try {
    const wand = await new Wand(req.body)
    await wand.save();
    return res.status(201).json({ wand });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}
async function getStudent(req, res) {
  try {
    const student = await Student.find().populate("house").populate("patronus");
    return res.status(200).json({ student });
  } catch (error) {
    return res.status(500).send(error.message);
  }
}
async function getHouse(req, res) {
  try {
    const house = await House.find();
    return res.status(200).json({ house });
  } catch (error) {
    return res.status(500).send(error.message);
  }
}
async function getPatronus(req, res) {
  try {
    const patronus = await Patronus.find();
    return res.status(200).json({ patronus });
  } catch (error) {
    return res.status(500).send(error.message);
  }
}

async function getWand(req, res) {
  try {
    const wand = await Wand.find();
    return res.status(200).json({ wand });
  } catch (error) {
    return res.status(500).send(error.message);
  }
}

const updateWand = (req, res) => {
  try {
    const { id } = req.params
    Wand.findByIdAndUpdate(id, req.body, { new: true }, (err, wand) => {

      if (err !== null) {
        console.log(err, 'error')
        res.status(404).send(err.message)
      } else {
        console.log(wand)
        res.json(wand)
      }
    })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const updateHouse = (req, res) => {
  try {
    const { id } = req.params
    House.findByIdAndUpdate(id, req.body, { new: true }, (err, wand) => {

      if (err !== null) {
        console.log(err, 'error')
        res.status(404).send(err.message)
      } else {
        console.log(wand)
        res.json(wand)
      }
    })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const updatePatronus = (req, res) => {
  try {
    const { id } = req.params
    Patronus.findByIdAndUpdate(id, req.body, { new: true }, (err, wand) => {

      if (err !== null) {
        console.log(err, 'error')
        res.status(404).send(err.message)
      } else {
        console.log(wand)
        res.json(wand)
      }
    })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}


const updateStudent = (req, res) => {
  try {
    const { id } = req.params
    Student.findByIdAndUpdate(id, req.body, { new: true }, (err, student) => {

      if (err !== null) {
        console.log(err, 'error')
        res.status(404).send(err.message)
      } else {
        console.log(student)
        res.json(student)
      }

    })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

async function deleteStudentById(req, res) {
  try {
    const { _id } = await Student.findByIdAndDelete(req.params.id);
    return res.status(200).send(`deleted student`);
  } catch (error) {
    return res.status(500).send(error.message);
  }
}

async function deleteById(req, res) {
  try {
    const { _id } = await Patronus.findByIdAndDelete(req.params.id);
    return res.status(200).send(`deleted Patronus`);
  } catch (error) {
    return res.status(500).send(error.message);
  }
}
async function deleteWandById(req, res) {
  try {
    const { _id } = await Wand.findByIdAndDelete(req.params.id);
    return res.status(200).send(`deleted Wand`);
  } catch (error) {
    return res.status(500).send(error.message);
  }
}

//   async function deleteAll(req, res) {
//     try {
//       const { name } = req.params;
//       const deleted = await Student.deleteMany({name});
//       if (deleted) {
//         return res.status(200).send(`Delete Student`);
//       }
//       throw new Error(`Student not found`);
//     } catch (error) {
//       return res.status(500).send(error.message);
//     }
//   }


module.exports = {
  createStudent,
  createHouse,
  createPatronus,
  createWand,
  getHouse,
  getStudent,
  getPatronus,
  getWand,
  updateStudent,
  updateWand,
  updateHouse,
  updatePatronus,
  deleteStudentById,
  deleteById,
  deleteWandById
};