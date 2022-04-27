const { Router } = require("express");
const controllers = require('../controllers');
const router = Router();

router.get("/", (req, res) => res.send("Abracadabra!"));
module.exports = router;


router.post(`/student`, controllers.createStudent);
router.post(`/house`, controllers.createHouse);
router.post(`/patronus`, controllers.createPatronus);
router.post(`/wand`, controllers.createWand);
router.get(`/Wand`, controllers.getWand);
router.get(`/patronus`, controllers.getPatronus);
router.get(`/house`, controllers.getHouse);
router.get(`/student`, controllers.getStudent);
router.put(`/student/:id`, controllers.updateStudent);
router.put(`/wand/:id`, controllers.updateWand);
router.put(`/house/:id`, controllers.updateHouse);
router.put(`/patronus/:id`, controllers.updatePatronus);

router.delete(`/student/:id`, controllers.deleteStudentById);
router.delete(`/patronus/:id`, controllers.deleteById);
router.delete(`/wand/:id`, controllers.deleteWandById);


module.exports = router;