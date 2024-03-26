const User = require("../model/user");

async function userRequests(req, res, next) {
  const { userId } = req.params;
  try {
    if (!userId) {
      return res.status(500).send("userId is required");
    }

    let user = await User.findOne({ userId });
    if (!user) {
      return res.status(500).send("User does not exist");
    }

    if (res.statusCode >= 200 && res.statusCode < 300) {
      user.userRequests++;
    }

    await user.save();
    next();
  } catch (error) {
    console.error("Error counting user requests:", error);
    next(error);
  }
}

module.exports = userRequests;
