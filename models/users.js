const mongoose = require('mongoose')
const userSchema = new mongoose.Schema(
    {
        serial_no: String,
        email:{
            type: String,
            unique: true,
        },
        password: String,
        isAdmin: Boolean,
    },{
        timestamps: true
    }
)
const userModel = mongoose.model('user',userSchema)
module.exports = userModel 