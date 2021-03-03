//백엔드 시작점
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const { User } = require("./models/User");
const config = require('./config/key')
const cookieparser = require('cookie-parser');
const {auth} = require('./middleware/auth');


//application/x-www.form.urlencoded 처럼 분석해서 가져옴.
app.use(bodyParser.urlencoded({extended: true})); 
//json타입으로 된것을 분석해서 가져오도록 함 .
app.use(bodyParser.json());
app.use(cookieparser());

const mongoose = require('mongoose');
mongoose.connect(config.mongoURI,
  {useNewUrlParser:true, useUnifiedTopology:true, useCreateIndex:true, useFindAndModify:false}
).then(()=> console.log('MongoDB Connected'))
 .catch(err => console.log(err))

app.get('/', (req, res) => {
  res.send('안녕하세요!!!!!!!!');
})

app.get('/api/hello',(req,res)=> res.send('React master!!!') )


app.post('/api/users/register', (req,res)=>{
  //회원 가입 할때 필요한 정보들을 클라이언트에서 가져오면 
  //그것들을 데이터 베이스에 넣어 준다.
  const user = new User(req.body) // bodyparser를 이용해서 res.body로 클라이언트에서 정보를 받아온다.
  
  user.save((err,userInfo) => {
    if(err) return res.json({success:false, err})
    return res.status(200).json({
        success:true
      }); //res.status(200) -> 성공 했다는 의미
  }) //mongodb api
})

//로그인 기능
app.post('/api/users/login', (req,res)=>{
  
  //1.요청된 이메일을 데이터 베이스에서 있는지 찾는다.
  User.findOne({email: req.body.email},(err,user)=>{  //findOne -> mongoose method
    if(!user){
      return res.json({
        loginSuccess: false,
        message:"이메일에 해당하는 사용자가가 없습니다."
      })
    }
    //2.요청된 이메일이 데이터 베이스에 있다면 비밀번호가 같은지 확인한다.
    user.comparePassword(req.body.password , (err,isMatch)=>{
  
      if(!isMatch) return res.json({loginSuccess:false, message:"비밀번호가 틀렸습니다."})
    
      //3.비밀번호 까지 같다면 Token생성.
      user.generateToken((err,user)=>{
        if(err) return res.status(400).send(err);
        // 토큰을 저장한다. 쿠키,로컬스토리지 등.. 다양한 곳에 저장할 수 있다.
        res.cookie("x_auth",user.token)
        .status(200)
        .json({loginSuccess: true, userId: user._id})
      })
    })
  })
})


app.get('/api/users/auth',auth,(req,res)=>{ //auth ->미드웨어 :콜백 하기전에 중간에서 기능을 해줌
  //여기 까지 미들웨어를 통과해 왔다는 말은 Authentication이 True
  res.status(200).json({
    _id : req.user._id,
    isAdmin: req.user.role === 0 ? false : true,
    isAuth: true,
    email: req.user.email,
    name:req.user.name,
    lastname:req.user.lastname,
    role:req.user.role,
    image:req.user.image
  })
})
app.get('/api/users/logout',auth,(req,res)=>{
  User.findOneAndUpdate({_id:req.user._id},
    {token:""},
    (err,user)=>{
      if(err) return res.json({success:false,err});
      return res.status(200).send({
        success:true
      })
    })
})

const port = 5000;
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
})