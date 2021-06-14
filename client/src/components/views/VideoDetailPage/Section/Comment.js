import Axios from 'axios'
import React,{useState }from 'react'
import {useSelector} from 'react-redux'
import SingleComment from './SingleComment'
function Comment(props) {

    const videoId = props.postId 
    const user = useSelector(state=> state.user)
    const [CommentValue, setCommentValue] = useState("")

    const handleClick = (evt) =>{ // 타이핑을 할 수 있도록 구현
        setCommentValue(evt.currentTarget.value)
    }
    const variables ={
        content: CommentValue,
        writer: user.userData._id,
        postId: videoId

    }
     
    const onSubmit = (evt) => {
        evt.preventDefault()
        Axios.post('/api/comment/saveComment',variables)
        .then(response=>{
            if(response.data.success){
                console.log(response.data.result)
                setCommentValue("")
                props.refreshComment(response.data.result)
            }else{
                alert('댓글을 저장하지 못했습니다.')
            }
        })
    }

    return (
        <div>
           <br/>
           <p>Replies</p>
           <hr/>

            {props.CommentList && props.CommentList.map((comment,i)=>(
                (!comment.responseTo && 
                    <SingleComment refreshComment={props.refreshComment} comment = {comment} postId = {videoId}/>
                    )
               
            ))}
            {/*Comment list */}
            

            {/*Roote Comment list */}

            <form style ={{display:'flex'}} onSubmit = {onSubmit}>
                <textarea
                    style ={{width:'100%',borderRadius:'5px'}}
                    onChange = {handleClick}
                    value = {CommentValue}
                    placeholder = '댓글을 작성해주세요.'/>
            <br/>
            <button style={{width:'20%', height:'52px'}} onClick={onSubmit}>Submit</button>
            </form>
        </div>
    )
}

export default Comment
