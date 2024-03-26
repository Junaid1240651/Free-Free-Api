const User = require("../model/user");

class ResourceService {
  static async createResource(userId, userRequests) {
    try {
      await User.create({ userId, userRequests });
    } catch (error) {
      throw new Error(error);
    }
  }

  static async getAllResources(userId) {
    try {
      return await User.find(
        { userId: userId },
        "-_id -userId -__v -currDate -date_time"
      );
    } catch (error) {
      throw new Error(error);
    }
  }

  static async findResource(userId) {
    try {
      return await User.findOne({ userId });
    } catch (error) {
      throw new Error(error);
    }
  }

  static async updateResource(userId, resource, newData) {
    try {
      return await User.updateOne(
        { userId: userId },
        { [resource]: [newData] }
      );
    } catch (error) {
      throw new Error(error);
    }
  }

  static async updateOneResource(userId, resource, updated) {
    try {
      await User.findOneAndUpdate({ userId: userId }, { [resource]: updated });
    } catch (error) {
      throw new Error(error);
    }
  }
}
module.exports = ResourceService;
