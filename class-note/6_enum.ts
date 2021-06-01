enum Shoes{ // enum은 별도의 값을 지정하지 않으면 숫자형으로 처리된다.
    Nike = '나이키',
    Adidas = '아디다스'
}
var myShoes = Shoes.Nike
console.log(myShoes) // '나이키'

// 예제
enum Answer{
    Yes ='Y',
    No = 'N',
}
function askQuestion(answer:Answer ){
    if(answer === Answer.Yes){
        console.log('Corret')
    }
    if (answer === Answer.No){
        console.log('Wrong')
    }
}

// askQuestion('yes')
// askQuestion('y')
// askQuestion('예스')
askQuestion(Answer.Yes)
askQuestion('Yes')

//드롭다운 형태의 목록의 형태에서 활용이 가능하다.