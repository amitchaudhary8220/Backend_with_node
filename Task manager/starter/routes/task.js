const express = require("express");
const {
  getAllTasks,
  updateTask,
  createTask,
  deleteTask,
  getSingleTask,
} = require("../controller/task");

const router = express.Router();

// router.route("/").get(getAllTasks).post(createTask);
router.get("/", getAllTasks);
router.post("/", createTask);
router.route("/:id").get(getSingleTask).patch(updateTask).delete(deleteTask);
//we can use either put or patch for update , the difference is that , patch do not override the property ,which we don't specify

module.exports = router;
