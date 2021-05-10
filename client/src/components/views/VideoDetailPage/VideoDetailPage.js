import React,{useEffect,useState} from 'react'
import {Row,Col,List,Avatar} from 'antd'
import Axios from 'axios'


function VideoDetailPage(props) {

    const [Video, setVideo] = useState([])
    
    const videoId = props.match.params.videoId
    const videoVariable = {
        videoId: videoId
    }


    useEffect(() => {

        Axios.post('/api/video/getVideoDetail', videoVariable.videoId)
        .then(response => {
            if (response.data.success) {
                console.log(response.data.videoDetail)
                setVideo(response.data.videoDetail)
            } else {
                alert('Failed to get video Info')
            }
        })
    }, [])

    if (Video.writer) {
        return (
            <Row gutter = {[16,16]}>
                <Col lg = {18} xs = {24}>
    
                    <div style = {{width:'100%', padding:'3rem 4rem'}}>
                        <video style={{width:'100%'}} src={`http://localhost:5000/${Video.filePath}`} controls/>
    
                        <List.Item
                            actions
                        >
                            <List.Item.Meta
                                avatar={<Avatar src={Video.writer && Video.writer.image} />}
                                title={<a href="https://ant.design">{Video.title}</a>}
                                description={Video.description}
                            />
    
                        </List.Item>
    
                        {/* Comment */}
                    </div>
                </Col>
                <Col lg ={6} xs = {24}>
                    Side Video
                </Col>
            </Row>
        )
    }else{
        return (<div>...loding</div>)
    }
    
}

export default VideoDetailPage
