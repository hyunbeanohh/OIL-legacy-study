import React, { useState } from 'react'
import {Comment,Avatar,Button,Input} from 'antd'
import Axios from 'axios'
import {useSelector} from 'react-redux'
const {TextArea} = Input

function SingleComment(props) {

    const user = useSelector(state=> state.user)
    const [openReply, setopenReply] = useState(false)
    const [CommentValue, setCommentValue] = useState("")

    const onClickreplyOpen = () => {
        setopenReply(!openReply)
    }

    const actions = [
        <span onClick={onClickreplyOpen} key ="comment-basic-reply-to">Reply to</span>
    ]

    const onhandleChange = (evt) => {
        setCommentValue(evt.currentTarget.value)
    }   


     
    const onSubmit = (evt) => {
        evt.preventDefault()

        const variables ={
            content: CommentValue,
            writer: user.userData._id,
            postId: props.postId,
            responseTo: props.comment._id
    
        }

        Axios.post('/api/comment/saveComment', variables)
        .then(response => {
            if (response.data.success) {
                setCommentValue("")
                setopenReply(!openReply)
                props.refreshFunction(response.data.result)
            } else {
                alert('Failed to save Comment')
            }
        })
}

    return (
        <div>
            {props.comment.writer && (
                    <Comment
                       actions={actions}
                       author={props.comment.writer.name}
                       avatar={
                           <Avatar
                               src={props.comment.writer.image}
                               alt="image"
                           />
                       }
                       content={
                           <p>
                               {props.comment.content}
                           </p>
                       }
                   ></Comment>

            )}
    
        { openReply && 
            <form style ={{display:'flex'}} onSubmit = {onSubmit} >
            <TextArea
                style ={{width:'100%',borderRadius:'5px'}}
                onChange = {onhandleChange}
                value = {CommentValue}
                placeholder = '댓글을 작성해주세요.'/>
            
            <br/>
            <button style={{width:'20%', height:'52px'}} onClick={onSubmit}>Submit</button>
            </form>
        }      

        </div>
    )
}

export default SingleComment
