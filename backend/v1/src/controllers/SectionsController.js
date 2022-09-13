const SectionsService = require("../services/SectionsService.js");
const getAll = async (req, res) => {
  const sections = await SectionsService.findAll();
  res.render("sections", { sections: sections });
};
const getById = async (req, res) => {
  const section = await SectionsService.findById(req.params.id);
  res.render("sections", { section: section });
};
const create = async (req, res) => {
  const sectionData = {
    name: "Completed",
    user_id: null,
    project_id: null,
    order: 2,
  };
  await SectionsService.add(sectionData);
  res.render("sections");
};
const remove = async (req, res) => {
  const itemId = await SectionsService.delete(req.params.id);
  res.render("sections");
};
module.exports = {
  getAll,
  getById,
  create,
  remove,
};
