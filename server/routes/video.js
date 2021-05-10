const express = require('express');
const router = express.Router();
var ffmpeg = require('fluent-ffmpeg')
const { Video } = require("../models/Video");

//const { auth } = require("../middleware/auth");
const multer = require("multer");


// multer 설정
let storage = multer.diskStorage({
    destination : (req,file,cb)=>{
        cb(null,"uploads/") //upload/ 폴더에 저장된 동영상들을 저장한다.    
    },
    filename: (req,file,cb) => { // 어떤 파일 이름으로 저장할지
        cb(null, `${Date.now()}_${file.originalname}`)
    },
    fileFilter: (req,file,cb) => { // 필터된 동영상만 올릴 수 있도록 설정한다.
        const ext = path.extname(file.originalname)
        if (ext !== '.mp4' || ext !== '.MPEG'){
            return cb(res.status(400).end('only mp4 is allowed'), false)
        }
        cb(null,true)
    }
})

const upload = multer({storage: storage}).single("file")


//=================================
//             video
//=================================

router.post('/uploadfiles', (req,res)=>{ 
    //req => client에서 보낸것들 , 파일을 받아옴.
    // 비디오를 서버에 저장한다.

    upload(req,res,err =>{
        if (err) {
            return res.json({success:false ,err})
        }
        return res.json({success: true, filePath:res.req.file.path, fileName:res.req.file.filename })
    })
})

router.post('/uploadVedio', (req,res)=>{ 
    // 비디오 정보들을 저장한다.
    const video = new Video(req.body) // req.body - 클라이언트에서 보낸 variable을 모두 담는다. writer,title ...
    
    video.save((err,doc,)=>{
        if(err) return res.json({success:false,err})
        res.status(200).json({success:true})
    })
    
})

router.post("/getVideoDetail", (req, res) => {

    Video.findOne({ "_id" : req.body.videoId })
    .populate('writer')
    .exec((err, videoDetail) => {
        if(err) return res.status(400).send(err);
        res.status(200).json({ success: true, videoDetail })
    })
});

router.get("/getVideos", (req, res) => {

    Video.find()
        .populate('writer')
        .exec((err, videos) => {
            if(err) return res.status(400).send(err);
            res.status(200).json({ success: true, videos })
        })

});


router.post("/thumbnail", (req, res) => {

    let thumbsFilePath ="";
    let fileDuration ="";

    ffmpeg.ffprobe(req.body.filePath, function(err, metadata){
        console.dir(metadata);
        console.log(metadata.format.duration);

        fileDuration = metadata.format.duration;
    })


    ffmpeg(req.body.filePath)
        .on('filenames', function (filenames) {
            console.log('Will generate ' + filenames.join(', '))
            thumbsFilePath = "uploads/thumbnails/" + filenames[0];
        })
        .on('end', function () {
            console.log('Screenshots taken');
            return res.json({ success: true, thumbsFilePath: thumbsFilePath, fileDuration: fileDuration})
        })
        .screenshots({
            count: 3,
            folder: 'uploads/thumbnails',
            size:'320x240',
            filename:'thumbnail-%b.png'
        });

});
module.exports = router;
