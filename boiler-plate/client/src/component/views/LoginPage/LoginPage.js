import React,{useState} from 'react'
import {useDispatch} from 'react-redux';
import {loginUser} from '../../../_actions/user_actions'
import {withRouter} from 'react-router-dom'

function LoginPage(props) {
    const dispatch = useDispatch();
    const [Email, setEmail] = useState("")
    const [Password, setPassword] = useState("")

    const onEmailHandler =(evt)=>{
        setEmail(evt.currentTarget.value)
    }
    const onPasswordHandler = (evt) =>{
        setPassword(evt.currentTarget.value)
    }
    const onSubmitHandler = (evt) =>{
        evt.preventDefault(); // 페이지 새로고침 방지

        let body ={
            email : Email,
            password : Password
        }

        dispatch(loginUser(body))
        .then(response=>{
            if(response.payload.loginSuccess){
                props.history.push('/') //  리액트에서 페이지를 이동 시킬때는 이런 방식으로 이동한다.
            }else{
                alert('Error')
            }
        });

    }
    return (
        <div style={{
            display:'flex', justifyContent:'center', alignItems:'center',
            width:'100%',height:'100vh'
        }}>
            <form style={{display:'flex', flexDirection:'column'}}
                  onSubmit={onSubmitHandler}
            >
                <label>Email</label>
                <input type="email" value ={Email} onChange ={onEmailHandler} />
                <label>Password</label>
                <input type="password" value ={Password} onChange={onPasswordHandler}/>
                <br />
                <button type="submit">
                    Login
                </button>
            </form>

        </div>
    )
}

export default withRouter(LoginPage)
