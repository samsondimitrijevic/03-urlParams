const { Student } = require("../models/students");

// GET  http://localhost:3001/students/
const getAllStudents = async (req, res) => {
  const students = await Student.find({});
  res.status(200).json({ data: students });
};

// GET http://localhost:3001/students/1
const getStudentById = async (req, res) => {
  const { id } = req.params;
  const student = await Student.findById(id);
  res.status(200).json({ data: student });
};

/*   const student = students.find((student) => {
    return student.id.toString() === id;
  }); */

// GET http://localhost:3001/filter?name=Samson
const getStudentByName = async (req, res) => {
  const { name } = req.query;

  const nameFilter = {
    name: { $regex: new RegExp(name, "i") },
  };

  const student = await Student.find(name ? nameFilter : {});
  res.status(200).json({ data: student });
};

/*   if (name) {
    const filteredStudent = students.filter((student) => {
      return student.name === name;
    });
    res.status(200).json({ data: filteredStudent });
  } else {
    res.status(200).json({ data: students });
  }
}; */

// POST http://localhost:3001/students/
const createStudent = async (req, res) => {
  const newStudent = new Student({
    name: req.body.name,
  });
  await newStudent.save();
  res.status(201).json({ data: newStudent });

  /*  console.log(req.body);
  const newStudent = {
    id: Date.now(),
    name: req.body.name,
  };

  students.push(newStudent);
  res.status(201).json({ data: newStudent }); */

  /*   students.push({
    id: 4,
    name: "Lauren",
  });
  res.status(201).json({
    id: 4,
    name: "Lauren",
  }); */
};

// PUT
const updateStudent = (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  students = students.map((student) => {
    if (student.id.toString() === id) {
      return {
        ...student,
        name,
      };
    } else {
      return student;
    }
  });

  const updatedStudent = students.find(
    (student) => student.id.toString() === id
  );
  res.status(200).json({ data: updatedStudent });
};

// DELETE http://localhost:3001/students/:id
const deleteStudent = (req, res) => {
  const { id } = req.params;

  students = students.filter((student) => {
    return student.id.toString() !== id;
  });

  res.status(200).json({
    data: "Student Deleted",
  });
};

module.exports = {
  getAllStudents,
  getStudentById,
  getStudentByName,
  createStudent,
  updateStudent,
  deleteStudent,
};
