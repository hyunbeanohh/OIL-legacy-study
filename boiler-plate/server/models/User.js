// 스키마 정의

const mongoose = require('mongoose');
const  bcyrpt = require('bcrypt');
const saltRounds = 10;  //10-> 10자리인 솔트를 만들어서 비밀번호를 암호화. 
const jwt = require('jsonwebtoken')


const userSchema = mongoose.Schema({
    name:{
        type:String,
        maxlength:50,
    },
    email:{
        type:String,
        trim:true, //스페이스 없애주느 역할
        unique:1
    },
    password:{
        type:String,
        minlength:5
    },
    lastname:{
        type:String,
        maxlength:50
    },
    role:{
        type:Number,
        default:0
    },
    image: String,
    token:{
        type:String,
    },
    tokenExp:{ //토근의 유효기간
        type:Number
    }
})

//mongoose method
//유저 정보를 저장하기 전에 이 함수를 실행함.
userSchema.pre('save',function(next){  //next를 선언하여  index.js user.save로 넘겨줌.
    let user =this;

    if(user.isModified('password')){ //password가 변환될때만 비크립트를 이용해서 변환함.
    //비밀번호를 암호화 시킨다.
    bcyrpt.genSalt(saltRounds,function(err,salt){
        if(err) return  next(err)

        bcyrpt.hash(user.password, salt, function(err,hash){
            if(err) return next(err)
            user.password  = hash // user스키마에 들어있는password를  hash된 비밀번호로 바꿔준다.
            next()
        })
        
    })
        }else{ // 비밀번호를 바꾸는게 아니라 다른것을 바꿀때는 그냥 넘어감.
            next()
        }
    }
)

userSchema.methods.comparePassword= function(plainPassword,cb){
    //plainPassword -> 1234567  , 암호화된 비밀번호 :$2b$10$Bc6cfu6v9E.wrShD.SQ0IO3gugJTZB5z8LiWaaZxja/PFGkuuA1GG
    //plainpassword를 암호화해서 맞는지 비교함
    bcyrpt.compare(plainPassword,this.password, function(err,isMatch){
        if(err) return cb(err)
        cb(null,isMatch)
    })
}

userSchema.methods.generateToken = function(cb){
    //jsonwebtoken을 이용해서 token을 생성하기
    let user = this
    let token = jwt.sign(user._id.toHexString(),'secretToken')

    //user_.id + 'secretToken' = Token
    //-> 'secretToken' -> user._id
    user.token = token
    user.save(function(err,user){
        if(err) return cb(err)
        cb(null,user)
    })
}

userSchema.statics.findByToken = function(token,cb){
    let user = this;

    //토큰을 decode 한다.
    jwt.verify(token,'secretToken',function(err,decoded){
        //유저 아이디를 이용해서 유저를 찾은 다음에 
        //클라이언트에서 가져온 token과 DB에 보관된 토큰이 일치하는지 확인
        user.findOne({"_id":decoded, "token":token}, function(err,user){
            if(err) return cb(err);
            cb(null,user)
        })
    })
}

const User = mongoose.model('User',userSchema)

module.exports={User}