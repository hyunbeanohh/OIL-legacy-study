const express = require('express');
const router = express.Router();
const { Subscriber } = require("../models/Subscriber");

//=================================
//             Subscribe
//=================================

router.post('/subscriberNumber', (req,res)=>{ 
    Subscriber.find({'userTo': req.body.userTo})
    .exec((err,subscrbe)=>{
        if(err) return res.status(400).send(err)
        return res.status(200).json({success:true,subscribeNumber:subscrbe.length})
    })
})

router.post('/subscribed', (req,res)=>{ 
    Subscriber.find({'userTo': req.body.userTo, 'userFrom':req.body.userFrom})
    .exec((err,subscrbe)=>{
        if(err) return res.status(400).send(err)
        let result = false
        if(subscrbe.length !== 0){
            result = true
        }
        res.status(200).json({success:true,subscribed:result})
    })
})


module.exports = router;
