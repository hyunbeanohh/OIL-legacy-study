if(process.env.NODE_ENV=== 'production'){
    module.exports = require('./prod');
} //환경변수 설정
else{
    module.exports = require('./dev')
}