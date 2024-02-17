const mongoose = require('mongoose');
const Schema = mongoose.Schema

const LikeSchema = mongoose.Schema({
    userId:{
        type: Schema.Types.ObjectId,
        ref: 'User'
   },
    commentId:{
        type: Schema.Types.ObjectId,
        ref: 'Comment'
    },
    videoId:{
        type: Schema.Types.ObjectId,
        ref:'Video'
    }
}, { timestamps: true }) //timestamp = true를 선언해야 만든 날의 date와 update의 date가 표시가 된다.



const Like = mongoose.model('Like', LikeSchema);

module.exports = { Like }