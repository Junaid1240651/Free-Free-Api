const express = require("express");

const userRequests = require("../middleware/userRequests");

const router = express.Router();

const ResourceController = require("../controller/resourceController");

router.get("/Dashboard/:userId", ResourceController.getFieldNames);

router.get("/:userId/:resource", ResourceController.getAllData);

router.get("/:userId/:resource/:id", ResourceController.getUserDataById);

router.get("/", ResourceController.getHomePage);

router.post(
  "/:userId/:resource",
  userRequests,
  ResourceController.createUserData
);

router.put(
  "/:userId/:resource/:id",
  userRequests,
  ResourceController.updateUserData
);

router.delete(
  "/:userId/:id/:resource",
  userRequests,
  ResourceController.deleteUserDataById
);
router.delete(
  "/:userId/:resource",
  userRequests,
  ResourceController.deleteUserDataByResource
);

module.exports = router;
