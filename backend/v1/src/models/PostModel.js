const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema(
  {
    title: String,
    content: String,
    user_id: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "User",
      autopopulate: {
        maxDepth: 1,
      },
    },
  },
  { versionKey: false, timestamps: true },
);

PostSchema.plugin(require("mongoose-autopopulate"));
const Post = mongoose.model("Post", PostSchema);
module.exports = Post;
