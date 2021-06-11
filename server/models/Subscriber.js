const mongoose = require('mongoose');
const Schema = mongoose.Schema

const SubscriberSchema = mongoose.Schema({
    uerTo:{
        type:Schema.Types.ObjectId,
        ref:'User'
    },
    userFrom:{
        type: Schema.Types.ObjectId,
        ref:'User'
    }
}, { timestamps: true }) //timestamp = true를 선언해야 만든 날의 date와 update의 date가 표시가 된다.



const Subscriber = mongoose.model('Subscriber', SubscriberSchema);

module.exports = { Subscriber }