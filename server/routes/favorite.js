const express = require('express');
const router = express.Router();
const {Favorite} = require('../models/Favorite')

router.post('/favoriteNumber',(req,res)=>{
   //mongoDB에서 favorite 숫자를 가져오기
   //그다음에 프론트에 다시 숫자 정보를 보내주기 
   Favorite.find({"movieId": req.body.movieId})
   .exec((err,info)=>{
       if(err) return res.status(400).send(err)
       res.status(200).json({success:true ,Favorite:info.length})
   })
}) // Section/Favorite.js 에서 Post방식으로 데이터를 보내기 때문에 post 사용


module.exports = router;
