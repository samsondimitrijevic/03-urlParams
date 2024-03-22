const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://samson:Qw60$gofsam24@cluster0.5wxoyow.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0/student-tracker"
  )
  .then(() => {
    console.log("Connected to the Database");
  })
  .catch((err) => {
    console.error("Error:", err);
  });
