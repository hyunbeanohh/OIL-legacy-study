import React, { useEffect,useState } from 'react'
import {Row,Col,Avatar,List} from 'antd'
import Axios from 'axios'
import SideVideo from './Section/SideVideo'
import Subscribe from './Section/Subscribe'
import Comment from './Section/Comment'
import LikeDisLike from './Section/LikeDisLike'
//import { response } from 'express'

function VideoDetailPage(props) {
    const videoId = props.match.params.videoId
    const variable = {videoId:videoId}

    const [VideoDetail, setVideoDetail] = useState([])
    const [Comments, setComments] = useState([])

    useEffect(() => {

        Axios.post('/api/video/getVideoDetail',variable)
        .then(response=>{
            if(response.data.success){
                //console.log(response.data.videoDetail)
                setVideoDetail(response.data.videoDetail)
            }else{
                alert('비디오 정보를 가져오는데 실패했습니다.')
            }
        })

        Axios.post('/api/comment/getComments',variable)
        .then(response=>{
            if(response.data.success){
                //console.log(response.data.comments)
                setComments(response.data.comments)
            }else{
                alert('댓글 정보를 가져오는데 실패했습니다.')
            }
        })
    })

    const refreshFunction = (newComment) =>{
        setComments(Comments.concat(newComment))
    }

    if(VideoDetail.writer){ 
        const subscriptionBtn = VideoDetail.writer._id !== localStorage.getItem('userId') && <Subscribe userTo={VideoDetail.writer._id} userFrom = {localStorage.getItem('userId')}/>
        return (
        
            <Row gutter={[16,16]}>
                <Col lg={18} xs ={24}>
                    <div style = {{width:'100%', padding: '3rem 4rem'}}>
                        <video style={{width:'100%'}} src={`http://localhost:5000/${VideoDetail.filePath}`} controls/>

                        <List.Item
                            actions = {[<LikeDisLike videoDetail videoId={videoId} userId={localStorage.getItem('userId')}/>,subscriptionBtn]}
                        >
                        <List.Item.Meta
                            avatar = {<Avatar src={VideoDetail.writer.image} />}
                            title = {VideoDetail.writer.name}
                            description = {VideoDetail.description}
                        />

                        </List.Item>
                        {/*Comment Items */}
                        <Comment refreshFunction = {refreshFunction} CommentLists = {Comments} postId = {VideoDetail._id}/>
                    </div>
                </Col>

                <Col lg={6} xs ={24}>
                    <SideVideo/>
                </Col>
            </Row>
       
    )

    }else{
        return(
            <div>Loading...</div>
        )
    }

}

export default VideoDetailPage
