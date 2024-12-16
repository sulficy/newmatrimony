const mongoose = require('mongoose')
const doctorSchema = new mongoose.Schema({
    name: { type: String },
    date: { type: String  },
    time: { type: String},
    reason: { type: String},
    userId: { type: String}
});

const appointment = mongoose.model('appointmen', doctorSchema);

module.exports = appointment