import React from 'react'
import {Col} from 'antd'


function GridCard(props) {

    if(props.landingPage) {    
        return (
            <Col lg={6} md={8} xs={24}> {/*large = 6사이즈 = 4개 씩, medium = 8 3개씩 , small = 24 1개*/}
                <div style={{position:'relative'}}>
                    <a href={`/movie/${props.movieId}`}>
                        <img style={{width:'100%' ,height:'320px'}}src={props.image} alt={props.moiveName}/>
                    </a>
                </div>
            </Col>
        )
    }else{
        return(
        <Col lg={6} md={8} xs={24}>
                <div style={{position:'relative'}}>
                    <img style={{width:'100%' ,height:'320px'}}src={props.image} alt={props.characterName}/>
                </div>
            </Col>
        )
    }
}
export default GridCard
