const mongoose = require('mongoose')
const stud = new mongoose.Schema({
    name: String,
    cgpa: Number,
    dpt: String
})
const smodel = new mongoose.model("Students", stud, students)
module.exports = smodel