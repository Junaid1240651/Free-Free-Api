const uuid = require('uuid');
const path = require('path');
const { ObjectId } = require('mongoose');
const User = require('../model/user');
const { error } = require('console');
// const UserData = require('../model/userData');

exports.getHomePage = async (req, res) => {

    // await res.sendFile(path.join(__dirname, '../', 'index.html'));

    const id = uuid.v4().replace(/-/g, '');
    // res.cookie('UniqueEndPointId', id);
    await User.create({ userId: id });
    res.json(id);

}

exports.getFieldNames = async (req, res) => {
    try {
        const userId = req.params.userId;
        const userObject = await User.find({ userId: userId }, '-_id -userId -__v');
        const fields = Object.keys(userObject[0]).slice(3);
        res.status(200).json(fields);
    }
    catch (error) {
        console.error("Error fetching field data:", error);
        res.status(500).json({
            error: "Error fetching field data:"
        });
    }
}


exports.getUserData = async (req, res) => {
    try {
        const userId = req.params.userId;
        const resource = req.params.resource;
        const data = await User.find({ userId }, `${resource} -_id`);
        // console.log(user);
        res.status(200).json(data[0][resource]);

    } catch (error) {
        console.error("Error fetching user data:", error);
        res.status(500).json({
            error: "Error fetching user data:"
        });
    }
};



exports.createUserData = async (req, res) => {
    try {
        const userId = req.params.userId;
        const resource = req.params.resource;
        const newData = req.body;
        const dataId = uuid.v1();
        newData["dataId"] = dataId.replace(/-/g, '');

        let userData = await User.findOne({ userId });

        if (!userData) {
            throw new Error('User Not Found')
        }
        if (!userData[resource]) {
            userData = await User.updateOne({ userId: userId }, { [resource]: [newData] });
            return res.status(201).json(newData);
        } else {
            userData.markModified(resource);
            userData[resource].push(newData);
        }

        await userData.save();

        res.status(201).json(userData);
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Error Occured while inserting data' })
    }
}

exports.deleteUserData = async (req, res) => {
    // const userId = req.params.userId;
    try {
        const deleteId = req.params.id;
        await UserData.findByIdAndDelete(deleteId);

        res.status(204).end();
    }
    catch (err) {
        console.error("Error deleting data", err);
        res.status(500).json({ error: 'Internal Servor Error' });
    }
}

exports.updateUserData = async (req, res) => {
    try {

    }
    catch (err) {

    }
}