const mongoose = require('mongoose');
const Schema = require('mongoose')

const videoSchema = mongoose.Schema({
    writer: {
        type:Schema.Types.ObjectId,
        ref: 'User'
    },
    title: {
        type:String,
        maxlength:50,
    },
    description: {
        type: String,
    },
    privacy: {
        type: Number,
    },
    filePath : {
        type: String,
    },
    catogory: String,
    views : {
        type: Number,
        default: 0 
    },
    duration :{
        type: String
    },
    thumbnail: {
        type: String
    }
}, { timestamps: true }) //timestamp = true를 선언해야 만든 날의 date와 update의 date가 표시가 된다.



const Video = mongoose.model('Video', videoSchema);

module.exports = { Video }