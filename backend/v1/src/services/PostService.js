const BaseService = require("./BaseService");
const PostModel = require("../models/PostModel");

class PostService extends BaseService {
  model = PostModel;
}

module.exports = new PostService();
