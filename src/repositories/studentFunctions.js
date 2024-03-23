const { Student } = require("../models/students");

const getAllStudentsDB = async () => {
  const students = await Student.find({});
  return students;
};

const getStudentByIdDB = async (id) => {
  const student = await Student.findById(id);
  return student;
};

const getStudentByNameDB = async (name) => {
  const nameFilter = {
    name: { $regex: new RegExp(name, "i") },
  };
  const student = await Student.find(name ? nameFilter : {});
  return student;
};

const createStudentDB = async (payload) => {
  const newStudent = new Student(payload);
  await newStudent.save();
  return newStudent;
};

const updateStudentDB = async (id, payload) => {
  const updatedStudent = await Student.findByIdAndUpdate(id, payload, {
    new: true,
  });
  return updatedStudent;
};

const deleteStudentDB = async (id) => {
  await Student.findByIdAndDelete(id);
};

module.exports = {
  getAllStudentsDB,
  getStudentByIdDB,
  getStudentByNameDB,
  createStudentDB,
  updateStudentDB,
  deleteStudentDB,
};
