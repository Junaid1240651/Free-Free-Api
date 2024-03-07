const uuid = require('uuid');
const path = require('path');
const User = require('../model/user');

exports.getHomePage = async (req, res) => {

    // await res.sendFile(path.join(__dirname, '../', 'index.html'));

    if (req.id) {
        res.json(req.id);
    }

    if (!req.id) {
        const id = uuid.v4().replace(/-/g, '');
        // res.cookie('UniqueEndPointId', id);

        res.json(id);
    }

}


exports.getUserData = async (req, res) => {
    try {
        const userId = req.params.id;
        const userData = await User.find({ 'userId': userId }, { data: 1, _id: 0 });
        const extractedData = userData.map(user => user.data);
        console.log(extractedData)
        res.json(extractedData);
    } catch (error) {
        console.error("Error fetching user data:", error);
        res.status(500).json({
            error: "Error fetching user data:"
        });
    }
};


exports.createUserData = async (req, res) => {
    try {
        const userId = req.params.id;
        const newData = req.body;

        let userData = await User.findOne(userId);

        if (userData) {
            userData.data = { ...userData.data, ...newData };
        } else {

            userData = new User({ userId, data: newData });
        }
        await userData.save();

        res.status(201).json(userData);
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Error Occured while inserting data' })
    }
}

