import React, { useEffect, useState } from 'react'
import { FaCode } from "react-icons/fa";
import { Card, Avatar, Col, Typography, Row } from 'antd';
import Axios from 'axios';
import moment from 'moment';
const { Title } = Typography;
const { Meta } = Card;


function SubscriptionPage() {
    const [Video, setVideo] = useState([])

    useEffect(() => {
        const subscriptionVariables = {
            userFrom : localStorage.getItem('userid')
        }
        Axios.post('/api/video/getSubscriptionVideos',subscriptionVariables)
        .then(response=>{
            if (response.data.success){
                console.log(response.data.videoInfo)
                setVideo(response.data.videoInfo)
            }else{
                alert('비디오 가져오기를 실패했습니다.')
            }
        })
    }, [])

    const renderCards = Video.map((video,index)=>{
        
        var minutes = Math.floor(video.duration / 60)
        var seconds = Math.floor((video.duration - minutes * 60))

        return <Col key = {index} lg = {6} md = {8} xs ={24}>
        <a href={`/video/${video._id}`}>
            <div style ={{position: 'relative'}}>
                <img style={{width:'100%'}} src={`http://localhost:5000/${video.thumbnail}`}alt = "thumbnail"/>
                <div className = 'duration'>
                    <span>{minutes}:{seconds}</span>
                </div>
            </div>
        </a>
        <br/>

        <Meta 
            avatar = {
                <Avatar src = {video.writer.image}/>
            }
            title = {video.title}
            description = ""
        />
        <span>{video.writer.name}</span><br/>
        <span style ={{marginLeft:'3rem'}}>{video.views} views </span> - <span>{moment(video.createAt).format('MMM DD YY')}</span>
    </Col>
    })

    return (
        <div style={{width:'85%',margin:'3rem auto'}}>
            <Title level = {2}> Subscription </Title>
            <hr/>
            <Row gutter = {[32,16]}>
                {renderCards}
            </Row>
        </div>
    )
}

export default SubscriptionPage

