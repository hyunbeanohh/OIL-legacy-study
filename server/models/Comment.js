const mongoose = require('mongoose');
const Schema = mongoose.Schema

const CommentSchema = mongoose.Schema({
    writer : {
        type:Schema.Types.ObjectId,
        ref:'User',
        require : true
    },
    postId:{
        type:Schema.Types.ObjectId,
        ref:'Video'
    },
    responseTo:{
        type:Schema.Types.ObjectId,
        ref:'User'
    },
    content:{
        type:String
    }
}, { timestamps: true }) //timestamp = true를 선언해야 만든 날의 date와 update의 date가 표시가 된다.



const Comment = mongoose.model('Comment', CommentSchema);

module.exports = { Comment }