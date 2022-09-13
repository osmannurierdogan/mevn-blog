const express = require("express");
const router = express.Router();
const PostService = require("../services/PostService");

router.get("/", async (req, res) => {
  const posts = await PostService.findAll();
  res.render("posts", { posts: posts });
});
router.get("/:id", async (req, res) => {
  const post = await PostService.findById(req.params.id);
  res.render("post", { post: post });
});
router.post("/new-post", async (req, res) => {
  const post = await PostService.add(req.body);
  // await PostService.add(req.body);
  res.render("post", { post: post });
});

module.exports = router;
