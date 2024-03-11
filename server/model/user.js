const { Schema, default: mongoose } = require('mongoose');

const userSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true,
        unique: true
    }

}, { strict: false });


module.exports = mongoose.model('user', userSchema);

