import React,{useState} from 'react';
import {useDispatch} from 'react-redux';
import {registerUser} from '../../../_actions/user_actions'
import {withRouter} from 'react-router-dom'


function RegisterPage(props) {
    const dispatch = useDispatch();
    const [Email, setEmail] = useState("")
    const [Password, setPassword] = useState("")
    const [Name, setName] = useState("")
    const [ConfirmPassword, setConfirmPassword] = useState("")

    const onEmailHandler =(evt)=>{
        setEmail(evt.currentTarget.value)
    }
    const onPasswordHandler = (evt) =>{
        setPassword(evt.currentTarget.value)
    }
    const onNameHandler =(evt)=>{
        setName(evt.currentTarget.value)
    }
    const onConfirmPasswordHandler =(evt)=>{
        setConfirmPassword(evt.currentTarget.value)
    }
    const onSubmitHandler = (evt) =>{
        evt.preventDefault(); // 페이지 새로고침 방지

        if(Password !== ConfirmPassword){
            return alert("비밀번호가 다릅니다.")
        }

        let body ={
            email : Email,
            password : Password,
            name : Name
        }

        dispatch(registerUser(body))
        .then(response=>{
            if(response.payload.success){
                props.history.push("/login")
            }else{
                alert('Failed to sign up')
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

                <label>Name</label>
                <input type="text" value ={Name} onChange={onNameHandler}/>

                <label>Password</label>
                <input type="password" value ={Password} onChange={onPasswordHandler}/>

                <label>Confrim Password</label>
                <input type="password" value ={ConfirmPassword} onChange={onConfirmPasswordHandler}/>

                <br />
                <button type="submit">
                    회원 가입
                </button>
            </form>

        </div>
    )
}

export default withRouter(RegisterPage)
