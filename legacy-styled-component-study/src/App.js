import React, { Component } from 'react'
import styled,{createGlobalStyle,css,keyframes,ThemeProvider} from 'styled-components'
import theme from './theme'
createGlobalStyle`
body{
  padding:0px;
  margin: 0px;
}`

const awesomeCard = css`
  box-shadow : 0 4px 6px rgba(50,50,93,0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
  background-color: white;
  border-radius: 10px;
  padding:20px
`

const Input = styled.input.attrs({
  required: true
})`
  border-radius:5px;
  ${awesomeCard}
`;

class App extends Component{
  render(){
    return(
      <ThemeProvider theme={theme}> 
      <Container>
        <Button>success</Button>
        <Button danger rotationTime={10}>danger</Button>
        <Anchor href = 'http://gogle.com'>gogle</Anchor>
        <Input placeholder ="ohb4199@naver.com"></Input>
      </Container>
      </ThemeProvider>
    )
  }
}



const Container = styled.div`
  height: 100vh;
  width : 100%;
  background-color: ${props => props.theme.mainColor};
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
