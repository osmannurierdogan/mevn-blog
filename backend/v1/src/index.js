const express = require("express");
const helmet = require("helmet");
const config = require("./config");
const loaders = require("./loaders");
const path = require("path");
const { PostRoutes, UserRoutes } = require("./routes");

config();
loaders();
const APP_PORT = process.env.APP_PORT || 3232;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.set("views", path.join(__dirname, "/views"));
app.set("view engine", "pug");

app.use("/posts", PostRoutes);
app.use("/users", UserRoutes);

app.get("/", (req, res) => {
  res.render("index");
});
app.get("/:id", (req, res) => {
  res.render("blog", { blog: blog });
});

app.get("/:slug", (req, res) => {
  res.render("blog", { blog: blog });
});


app.get("/profile/:id/add-blog-post", (req, res) => {
  res.render("blog", { blog: blog });
});

app.get("/posts/:id", (req, res) => {
  res.render("blog", { blog: blog });
});

app.get("/posts/:id/edit", (req, res) => {
  res.render("blog", { blog: blog });
});

app.listen(APP_PORT, () => {
  console.log(`Server is running on ${APP_PORT}...`);
});
