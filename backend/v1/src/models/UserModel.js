const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    full_name: String,
    email: String,
    password: String,
    permission: String,
    posts: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "Post",
      autopopulate: {
        maxDepth: 1,
      },
    },
  },
  { versionKey: false, timestamps: true },
);

UserSchema.plugin(require("mongoose-autopopulate"));
const User = mongoose.model("User", UserSchema);
module.exports = User;
