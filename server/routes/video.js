const express = require('express');
const router = express.Router();
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
        return res.json({success: true, url:res.req.file.path, fileName:res.req.file.filename })
    })
})

module.exports = router;
