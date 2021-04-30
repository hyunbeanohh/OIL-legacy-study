const mongoose = require('mongoose');
const Schema = require('mongoose')

const videoSchema = mongoose.Schema({
    
    wrtier : { // 쓰는 사람의 아이디는 User.js의 스키마의 모든 정보를 가져올 수 있다. 
        type: Schema.Types.ObjectId,
        ref : 'User' // 불러올 곳이 Uers
    },
    title:{
        type: String,
        maxlength: 50
    },
    description :{
        type:String,
    },
    privacy :{
        type:Number
    },
    filePath :{
        type:String
    },
    category :{
        type:String
    },
    views:{
        type:Number,
        default:0
    },
    duration:{
        type:String
    },
    thumbnail:{
        type:String
    }
},{timestapm:true}) //timestamp = true를 선언해야 만든 날의 date와 update의 date가 표시가 된다.



const Video = mongoose.model('Video', videoSchema);

module.exports = { Video }