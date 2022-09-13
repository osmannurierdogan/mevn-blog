module.exports = class Service {
  async findAll() {
    return this.model.find();
  }
  async findById(itemId) {
    return this.model.findById(itemId);
  }
  async find(item) {
    return this.model.findOne(item);
  }
  async add(item) {
    return this.model.create(item);
  }
  async delete(itemId) {
    return this.model.deleteOne({ _id: itemId });
  }
  async update(itemId, data) {
    return this.model.findByIdAndUpdate(itemId, data, { new: true });
  }
  async update(item, data) {
    return this.model.findOneAndUpdate(item, data, { new: true });
  }
};
