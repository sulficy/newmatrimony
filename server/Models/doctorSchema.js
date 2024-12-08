// doctorSchema
// const mongoose = require('mongoose');
const mongoose = require('mongoose')
const doctorSchema = new mongoose.Schema({
    name: { type: String,required:true },
    email: { type: String,required:true  },
    speciality: { type: String,required:true},
    phone: { type: String,required:true},
    doctorImg: { type: String,required:true },
    userId: { type: String,}
});

const doctors = mongoose.model('doctors', doctorSchema);

module.exports = doctors

