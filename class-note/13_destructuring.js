function fetchData(){
    return{
        data:{
            name:'capt',
            age: 27
        },
        config:{},
        statusText = '',
        headers = '',
    }
}

var result = fetchDate()

var {data,config,statusText,headers} =  fetchData()
console.log(config)
console.log(data)

var {data: stringdata} = fetchData()
console.log(stringdata) // 별칭으로 바꿀 수 있다.