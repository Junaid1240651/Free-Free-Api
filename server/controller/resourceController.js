const uuid = require("uuid");
const { ObjectId } = require("mongoose");
const User = require("../model/user");
const ResourceService = require("../service/userServices");

class ResourceController {
  static async getHomePage(req, res) {
    const backPassword = process.env.PASSWORD;
    const frontPassword = req.body.password;
    if (frontPassword === backPassword) {
      const id = uuid.v4().replace(/-/g, "");

      await ResourceService.createResource(id);

      res.json(id);
    }else{
      res.status(401).json({Error:"unauthorized"});
    }
  }

  static async getFieldNames(req, res) {
    try {
      const userId = req.params.userId;
      const userObject = await ResourceService.getAllResources(userId);
      const fields = Object.keys(userObject[0]).slice(3);

      res.status(200).json(fields);
    } catch (error) {
      res.status(500).json({
        error: "Error fetching field data:",
      });
    }
  }

  static async getAllData(req, res) {
    try {
      const userId = req.params.userId;
      const resource = req.params.resource;
      const data = await ResourceService.getAllResources(userId);

      res.status(200).json(data[0][resource]);
    } catch (error) {
      res.status(500).json({ error: "Error fetching user data:" });
    }
  }

  static async createUserData(req, res) {
    try {
      const userId = req.params.userId;
      const resource = req.params.resource;
      const newData = req.body;
      const dataId = uuid.v1();
      newData["dataId"] = dataId.replace(/-/g, "");

      let userData = await ResourceService.findResource(userId);

      if (!userData) {
        throw new Error("User Not Found");
      }
      if (!userData[resource]) {
        userData = await ResourceService.updateResource(
          userId,
          resource,
          newData
        );
        return res.status(201).json(newData);
      } else {
        userData.markModified(resource);
        userData[resource].push(newData);
      }
      await userData.save();

      res.status(201).json(newData);
    } catch (err) {
      res.status(500).json({ error: "Error Occured while inserting data" });
    }
  }

  static async deleteUserData(req, res) {
    try {
      const userId = req.params.userId;
      const resource = req.params.resource;
      const deleteId = req.params.id;
      const user = await ResourceService.findResource(userId);

      const updated = user[resource].filter((ele) => ele.dataId != deleteId);

      await ResourceService.updateOneResource(userId, resource, updated);

      res.status(202).json({ message: "Data deleted successfully" });
    } catch (err) {
      res.status(500).json({ error: "Internal Servor Error" });
    }
  }

  static async updateUserData(req, res) {
    try {
      const resource = req.params.resource;
      const userId = req.params.userId;
      const updateId = req.params.id;
      const updatedData = req.body;
      updatedData["dataId"] = updateId;
      const user = await ResourceService.findResource(userId);

      const indexToUpdate = user[resource].findIndex(
        (ele) => ele.dataId === updateId
      );

      if (indexToUpdate === -1) {
        return res.status(404).json({ error: "Data not found" });
      }

      user[resource][indexToUpdate] = updatedData;

      await ResourceService.updateOneResource(userId, resource, user[resource]);

      res.status(201).json(user[resource][indexToUpdate]);
    } catch (err) {
      res.status(500).json({ error: "Internal Servor Error" });
    }
  }

  static async getUserDataById(req, res) {
    try {
      const userId = req.params.userId;
      const resource = req.params.resource;
      const dataId = req.params.id;

      const user = await ResourceService.findResource(userId);

      const getIndex = user[resource].findIndex((ele) => ele.dataId === dataId);

      if (getIndex === -1) {
        return res.status(404).json("User data not found");
      }

      res.status(200).json(user[resource][getIndex]);
    } catch (err) {
      res.status(500).json({ error: "Internal Sever Error" });
    }
  }
}

module.exports = ResourceController;
