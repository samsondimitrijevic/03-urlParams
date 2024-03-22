const express = require('express');
const router = express.Router();
const {
  getAllStudents,
  getStudentById,
  getStudentByName,
  createStudent,
  updateStudent,
  deleteStudent,
} = require("../controllers/studentControllers");

router.get("/", getAllStudents);
router.get("/filter", getStudentByName);
router.get("/:id", getStudentById);
router.post("", createStudent);
router.put("/:id", updateStudent);
router.delete("/:id", deleteStudent);

module.exports = router;