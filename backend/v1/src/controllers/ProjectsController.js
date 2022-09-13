const ProjectsService = require("../services/ProjectsService.js");
const getAll = async (req, res) => {
  const projects = await ProjectsService.findAll();
  // res.render("projects", { projects: projects });
  res.send(projects);
};

const getById = async (req, res) => {
  const project = await ProjectsService.findById(req.params.id);
  res.render("projects", { project: project });
};
const create = async (req, res) => {
  // const projectData = {
  //   name: req.body.name,
  //   user_id: req.user?._id,
  // };
  // const addProject = await ProjectsService.add(projectData);
  req.body.user_id = req.user?._id;
  // req.body.user_id = req.user;
  const addProject = await ProjectsService.add(req.body);
  res.send("Projects Create");
};
const remove = async (req, res) => {
  const itemId = await ProjectsService.delete(req.params.id);
  res.render("projects");
};
const update = async (req, res) => {
  if (!req.params?.id) {
    return "ID is missing.";
  }
  await ProjectsService.update(req.params.id, req.body);
  res.send("Project Updated");
};
module.exports = {
  getAll,
  getById,
  create,
  remove,
  update,
};
