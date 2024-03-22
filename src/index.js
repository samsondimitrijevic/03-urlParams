const express = require("express");
require("./config/db");
/* const routes = require("./routes"); */
const baseRouter = require("./routes/baseRoutes");
const studentRouter = require("./routes/studentRoutes");
const utilityRouter = require("./routes/utilityRoutes");

const { clearAndInsertData } = require("./models/student-data");

const app = express();
app.use(express.json());

clearAndInsertData();

app.use("/students", studentRouter);
app.use("/utilities", utilityRouter);
app.use("/", baseRouter);

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server listening on http://localhost: ${PORT}`);
});
