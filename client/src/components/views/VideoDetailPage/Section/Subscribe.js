import Axios from 'axios'
//import { response } from 'express'
import React,{useEffect,useState} from 'react'

function Subscribe(props) {

    const [SubscribeNumber, setSubscribeNumber] = useState(0)
    const [Subscribed, setSubscribed] = useState(false)
    

    useEffect(() => {
        let variable = {userTo:props.userTo}
        let subscribedvariable = {userTo:props.userTo, userFrom:localStorage.getItem('userId')}
       
       Axios.post('/api/subscribe/subscribeNumber',variable)
       .then(response=>{
           if(response.data.success){
            setSubscribeNumber(response.data.subscribeNumber)
           }else{
               alert('구독자 수 정보를 받아오지 못했습니다.')
           }
       })


       Axios.post('/api/subscribe/subscribed',subscribedvariable)
       .then(response=>{
           if(response.data.success){
            setSubscribed(response.data.subscribed)
           }else{
               alert('구독자 수 정보를 받아오지 못했습니다.(Subscribed)')
           }
       })
    }, [props.userTo])

    const onSubscribe = (props) => {

        let subscribeVariable = {
            userTo:props.userTo,
            userFrom:props.userFrom
        }

        // 이미 구독중이라면
        if(Subscribed){
            Axios.post('/api/subscribe/unsubscribe',subscribeVariable)
            .then(response=>{
                if(response.data.success){
                    setSubscribeNumber(SubscribeNumber -1)
                    setSubscribed(!Subscribed)
                }else{
                    alert('구독 취소하는데 실패했습니다.')
                }
            })
        }else{ // 아직 구독이 아니라면
            Axios.post('/api/subscribe/subscribe',subscribeVariable)
            .then(response=>{
                if(response.data.success){
                    setSubscribeNumber(SubscribeNumber +1)
                    setSubscribed(!Subscribed)
                }else{
                    alert('구독을 실패했습니다.')
                }
            })
        }
    }

    return (
        <div>
            <button 
                style = {{backgroundColor: `${Subscribed ? '#bdc3c7' : '#c0392b'}`, borderRadius:'4px',
                          color:'white',padding:'10px 16px',fontWeight:'500',fontSize:'1rem',textTransform:'uppercase'}}
                onClick = {onSubscribe}
            >
                {SubscribeNumber} {Subscribed? 'Subscribed':'Subscribe'}
            </button>
        </div>
    )
}

export default Subscribe
