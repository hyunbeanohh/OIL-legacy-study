import React,{useEffect,useState} from 'react'
import {Tooltip,Icon} from 'antd'
import Axios from 'axios'

function LikeDisLike(props) {

    const [Likes, setLikes] = useState(0)
    const [DisLikes, setDisLikes] = useState(0)
    const [LikesActions, setLikesActions] = useState(null)
    const [DisLikeActions, setDisLikeActions] = useState(null)

    let variable = {}

    if(props.videoDetail){
        variable = {videoId:props.videoId , userId:props.userId}
    }else{
        variable = {commentId:props.commentId , userId:props.userId}
    }

    useEffect(() => {
       Axios.post('/api/like/getLike',variable)
       .then(response=>{
           if(response.data.success){
            // 1. 얼마나 많은 좋아요를 받았는지 
            //console.log(response.data.variable)
            setLikes(response.data.likes.length)
            // 2. 이미 좋아요를 눌렀는지
            response.data.likes.map(like=>{
                if(like.userId === props.userId){
                    setLikesActions('liked')
                }
            })
           }else{
               alert('Like 정보를 가져오지 못했습니다.')
           }
       })


       Axios.post('/api/like/getDisLike',variable)
       .then(response=>{
           if(response.data.success){
            // 1. 얼마나 많은 싫어요 받았는지 
            setDisLikes(response.data.dislikes.length)
            // 2. 이미 싫어요를 눌렀는지
            response.data.dislikes.map(dislike=>{
                if(dislike.userId === props.userId){  // dislike.userId -> 다른 사람들의 정보 , props.userId -> 내 자신의 정보
                    setDisLikeActions('disliked')
                }
            })
           }else{
               alert('DisLike 정보를 가져오지 못했습니다.')
           }
       })
    }, [props.userId, variable])


    const onLike =() => {
        if(LikesActions === null){
            Axios.post('/api/like/upLike',variable)
            .then(response=>{
                if(response.data.sucess){
                    setLikes(Likes + 1)
                    setLikesActions('liked')

                    if(DisLikeActions !== null){
                        setDisLikeActions(null)
                        setDisLikes(DisLikes - 1)
                    }

                }else{
                    alert('좋아요를 실패했습니다.')
                }
            })
        }else{ 
            Axios.post('/api/like/unLike',variable)
            .then(response=>{
                if(response.data.success){
                    setLikes(Likes - 1)
                    setLikesActions(null)
                }else{
                    alert('좋아요 취소를 실패했습니다.')
                }
        })
    }
}

    const onDisLike= () => {
        if(DisLikeActions !== null){
            Axios.post('/api/like/unDisLike',variable)
            .then(response => {
                if(response.data.success){
                    setDisLikes(DisLikes - 1)
                    setDisLikeActions(null)

                }else{
                    alert('싫어요를 실패했습니다.')
                }
            })
        }else{
            Axios.post('/api/like/upDisLike',variable)
            .then(response => {
                if(response.data.success){
                   setDisLikes(DisLikes + 1)
                   setDisLikeActions('disliked')

                if(LikesActions !== null){
                    setLikesActions(null)
                    setLikes(Likes - 1)
                }
                }else{
                    alert('싫어요를 실패했습니다.')
                }
            })
        }
    }

    return (
        <div>
            <span key ='comment-basic-like'>
                <Tooltip title='Like'>
                    <Icon type='like' 
                    theme= {LikesActions === 'liked' ? 'filled' : 'outlined' } 
                    onClick = {onLike}
                    />
                </Tooltip>
            <span style={{paddingLeft:'8px',cursor:'auto'}}> {Likes} </span>
            </span>
            
            <span key ='comment-basic-dislike'>
                <Tooltip title='Dislike'>
                    <Icon 
                    type='dislike'
                    theme= {DisLikeActions === 'disliked' ? 'filled' : 'outlined' } 
                    onClick = {onDisLike}/>
                </Tooltip>
            <span style={{paddingLeft:'8px',cursor:'auto'}}> {DisLikes} </span>
            </span>
        </div>
    )
}

export default LikeDisLike
