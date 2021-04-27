const express = require('express');
const router = express.Router();
var ffmpeg = require('fluent-ffmpeg')
//const { Video } = require("../models/Video");

//const { auth } = require("../middleware/auth");
const multer = require("multer")

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

router.post('/thumbnail', (req,res)=>{ 
    // 썸네일 생성하고 비디오 정보를 가져오기.
    let thumbsFilePath = ""
    let fileDuration = ""
    // 비디오 정보 가져오기 
    ffmpeg.ffprobe(req.body.filePath, function(err,metadata){
        console.log(req.body.url)
        console.dir(metadata)
        console.log(metadata.format.duration)
        
        fileDuration = metadata.format.duration
    })
    
    // 썸네일 생성 
    ffmpeg(req.body.filePath) // 클라이언트에서 가져오는 비디오 저장 경로 -> upload
    .on('filenames',function(filenames){
        console.log('Will generate' + filenames.join(', '))
        console.log(filenames)

        thumbsFilePath = "uploads/thumbnails/" + filenames[0]
    })
    .on('end', function(){ // 썸네일 생성 후 무엇을 할 것인지 로직 작성.
        console.log('Screenshots Taken')
        return res.join({success:true ,thumbsFilePath:thumbsFilePath, fileDuration:fileDuration})
    })
    .on('err',function(err){ // 썸네일 생성 후 무엇을 할 것인지 로직 작성.
        console.error('err')
        return res.join({success:false, err})
    })
    .screenshots({
        // Will take screens at 20%, 40%, 60% and 80% of the video
        count: 3,
        folder: 'uploads/thumbnails',
        size:'320x240',
        // %b input basename ( filename w/o extension )
        filename:'thumbnail-%b.png'
    })
})
module.exports = router;
