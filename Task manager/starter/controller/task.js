const TaskModal = require("../modal/Task");
const asyncMiddleWare = require("../middleware/async");
const getAllTasks = asyncMiddleWare(async (req, res) => {
  // try {
  const allTasks = await TaskModal.find({});
  if (!allTasks) {
    return res.status(400).json({ msg: "No task found" });
  }
  res.status(200).json({ tasks: allTasks });
  // } catch (error) {
  //   res.status(500).json({ msg: error });
  // }
});

const createTask = async (req, res) => {
  try {
    const task = await TaskModal.create(req.body);
    return res.json({ task });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};
const getSingleTask = async (req, res) => {
  try {
    const { id: taskId } = req.params;
    const singleTask = await TaskModal.find({ _id: taskId });
    if (!singleTask)
      return res.status(400).json({ msg: `No task found with id:${taskId}` });

    res.status(200).json({ task: singleTask });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};
const updateTask = async (req, res) => {
  try {
    const { id: taskId } = req.params;
    const task = await TaskModal.findOneAndUpdate({ _id: taskId }, req.body, {
      new: true,
      runValidators: true,
    });
    if (!task) {
      return res.status(404).json(`No task found with id:${taskId}`);
    }
    res.status(200).json({ task });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const deleteTask = async (req, res) => {
  try {
    const { id: taskId } = req.params;
    const task = await TaskModal.findOneAndDelete({ _id: taskId });
    if (!task) {
      return res.status(404).json(`No task found with id:${taskId}`);
    }

    res.status(200).json({ task });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

module.exports = {
  getAllTasks,
  getSingleTask,
  createTask,
  updateTask,
  deleteTask,
};
