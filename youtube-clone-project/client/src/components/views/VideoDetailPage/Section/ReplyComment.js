import React,{useState,useEffect} from 'react'
import SingleComment from './SingleComment'

function ReplyComment(props) {

    const [ChildStateNumber, setChildStateNumber] = useState(0)
    const [OpenReplyComments, setOpenReplyComments] = useState(false)

    useEffect(() => {
       let commentNumber = 0;
       props.CommentLists.map((comment,index)=>{
           if(comment.responseTo === props.parentCommentId){
            commentNumber++
           }
       })
       setChildStateNumber(commentNumber)
    }, [props.CommentLists, props.parentCommentId])


    let renderReplyComment = (parentCommentId) => (
        props.CommentLists.map((comment,index)=>(
            <React.Fragment>
                {comment.responseTo === parentCommentId &&
                <div style={{width:'80%', marginLeft:'40px'}}>
                    <SingleComment comment={comment} postId={props.postId} refreshFunction={props.refreshFunction}/>
                    <ReplyComment CommentLists = {props.CommentLists} postId = {props.postId} parentCommentId = {comment._id} refreshFunction={props.refreshFunction}/>
                </div>
                }   
            </React.Fragment>
        ))
    )


    const onhandleChange = () =>{
        setOpenReplyComments(!OpenReplyComments)
    }


    return (
        <div>
            {ChildStateNumber > 0 &&  
                <p style={{fontSize:'14px', margin:'0px', color:'gray'}} onClick={onhandleChange}>
                    View {ChildStateNumber} more Comments
                </p>
            }
           

            { OpenReplyComments &&
             renderReplyComment(props.parentCommentId)
             }
        </div>
    )
}

export default ReplyComment
