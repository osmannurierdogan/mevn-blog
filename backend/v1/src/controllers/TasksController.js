const TasksService = require("../services/TasksService.js");
const getAll = async (req, res) => {
  const tasks = await TasksService.findAll();
  res.render("tasks", { tasks: tasks });
};
const getById = async (req, res) => {
  const task = await TasksService.findById(req.params.id);
  res.render("tasks", { task: task });
};
const create = async (req, res) => {
  const taskData = {
    title: "Redesign Landing Page",
    description: "Redesign the application's landing page from stracth.",
    due_date: new Date().getTime(),
    assigned_to: null,
    statuses: ["Completed", "Todo", "Doing", "Done"],
    section_id: null,
    project_id: null,
    user_id: null,
    order: 1,
    isCompleted: true,
    comments: [],
    media: [],
    sub_tasks: null,
  };
  await TasksService.add(taskData);
  res.render("tasks");
};
const remove = async (req, res) => {
  const itemId = await TasksService.delete(req.params.id);
  res.render("tasks");
};
module.exports = {
  getAll,
  getById,
  create,
  remove,
};
