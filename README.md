# 스타일 컴포넌트 📚 


### 스타일 컴포넌트 설치❗️
`npm i styled-components`


### 타입스크립트❗️
`npm install @types/styled-components`

- - - - -

### 예시
``` JSX
import React, { Component } from 'react'
import styled,{createGlobalStyle,css,keyframes} from 'styled-components'

createGlobalStyle`
body{
  padding:0px;
  margin: 0px;
}`

class App extends Component{
  render(){
    return(
      <Container>
        <Button>success</Button>
        <Button danger rotationTime={1}>danger</Button>
        <Anchor href = 'http://gogle.com'>gogle</Anchor>
      </Container>
    )
  }
}

const Container = styled.div`
  height: 100vh;
  width : 100%;
  background-color: #bdc3c7;
`

const Button =styled.button`
   border-radius: 50px;
    padding: 5px;
    min-width: 120px;
    color:white;
    font-weight: 600;
    -webkit-appearance: none;
    cursor:pointer;
    &:active,
    &focus{
      outline:none;
    }
    background-color: ${props=> (props.danger ? "#e74c3c" : "#2ecc71")};
    ${props=>{
      if(props.danger){
        return css `animation: ${rotation} ${props.rotationTime}s linear infinite`;
      }
    }}
`

const Anchor = styled(Button.withComponent("a"))`
  text-decoration :none;
`;

const rotation = keyframes`
  from{
    transform: rotate(0deg);
  }
  to{
    transform: rotate(360deg);
}
`

export default App;
```
- - - - -

## 💁🏻 Why Styled-Component(CSS-IN-JS) ?

<br/>

- 직관적이며 css파일을 따로 생성하지 않는다.
- Webpack이나 Sass 등을 따로 관리하지 않아도 된다.
- 모바일 지원
- 스타일 스코프
- no-class-policy
- 서버 사이드 렌더링 지원
- CSS 테스팅
- 스타일을 props에 따라 적용
- 상속과 재활용

- - - - -

<br/>

### 참고 자료💡
- [노마드 코더](https://www.youtube.com/watch?v=MqGxMOhPqeI)
- [Styled-Component 공식 홈페이지](https://styled-components.com/docs/api#css)
- [8 reasons to use styled-components](https://blog.logrocket.com/8-reasons-to-use-styled-components-cf3788f0bb4d/)
- [8 reasons to use styled-components 번역 블로그](https://analogcoding.tistory.com/181)
- [flatuicolors.com](https://flatuicolors.com/)