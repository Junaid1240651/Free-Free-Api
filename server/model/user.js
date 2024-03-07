const { Schema, default: mongoose } = require('mongoose');

const userSchema = new mongoose.Schema({
    data: mongoose.Schema.Types.Mixed
});


module.exports = mongoose.model('user', userSchema);

