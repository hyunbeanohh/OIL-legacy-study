
const express = require('express');
const router = express.Router();
const { Like } = require("../models/Like");
const { DisLike } = require("../models/DisLike");
//const { response } = require('express');

//=================================
//             Like
//=================================


router.post('/getLike', (req,res)=>{ 

    let variable = {}

    if(req.body.videoId){
        variable = {videoId:req.body.videoId}
    }else{
        variable = {commentId:req.body.commentId}
    }

   Like.find(variable)
   .exec((err,likes)=>{
       if(err) res.status(400).send(err)
       res.status(200).json({success:true,likes})
   })
})

router.post('/getDisLike', (req,res)=>{ 

    let variable = {}

    if(req.body.videoId){
        variable = {videoId:req.body.videoId}
    }else{
        variable = {commentId:req.body.commentId}
    }

   DisLike.find(variable)
   .exec((err,dislikes)=>{
       if(err) res.status(400).send(err)
       res.status(200).json({success:true,dislikes})
   })
})


router.post('/upLike', (req,res)=>{ 

    let variable = {}

    if(req.body.videoId){
        variable = {videoId:req.body.videoId, userId : req.body.userId}
    }else{
        variable = {commentId:req.body.commentId, userId: req.body.userId}
    }


    // Like collection에 클릭 정보를 넣어준다.
    const like = new Like(variable)

    like.save((err,uplike)=>{
        if(err) res.status(400).json({success:false,err})

        DisLike.findOneAndDelete(variable)
        .exec((err,dislike)=>{
            if(err)res.status(400).json({success:false,err})
            response.status(200).json({success:true,dislike})
        })
    })
    
    
})

    // 만약 싫어요가 먼저 눌려있다면 1 줄여주고 좋아요로 바꾼다.

router.post('/unLike', (req,res)=>{ 

    let variable = {}

    if(req.body.videoId){
        variable = {videoId:req.body.videoId, userId : req.body.userId}
    }else{
        variable = {commentId:req.body.commentId, userId: req.body.userId}
    }

   Like.findOneAndDelete(variable)
   .exec((err,unlike)=>{
       if(err) res.status(400).json({success:false,err})
       res.status(200).json({success:true,unlike})
   })
})



router.post('/unDisLike', (req,res)=>{ 

    let variable = {}

    if(req.body.videoId){
        variable = {videoId:req.body.videoId, userId : req.body.userId}
    }else{
        variable = {commentId:req.body.commentId, userId: req.body.userId}
    }

   DisLike.findOneAndDelete(variable)
   .exec((err,unlike)=>{
       if(err) res.status(400).json({success:false,err})
       res.status(200).json({success:true,unlike})
   })
})

router.post('/upDisLike', (req,res)=>{ 

    let variable = {}

    if(req.body.videoId){
        variable = {videoId:req.body.videoId, userId : req.body.userId}
    }else{
        variable = {commentId:req.body.commentId, userId: req.body.userId}
    }

    // DisLike collection에 클릭 정보를 넣어준다.
    const dislike = new DisLike(variable)

    dislike.save((err,dislike)=>{
        if(err) res.status(400).json({success:false,err})

        Like.findOneAndDelete(variable)
        .exec((err,like)=>{
            if(err)res.status(400).json({success:false,err})
            response.status(200).json({success:true,like})
        })
    })
})

module.exports = router;
