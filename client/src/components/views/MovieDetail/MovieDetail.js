//import { response } from 'express';
import React, { useEffect,useState } from 'react'
import {API_URL,API_KEY,IMAGE_BASE_URL} from '../../Config'
import MainImage from '../LandingPage/Section/MainImage'
import MovieInfo from './Section/MovieInfo'
import GridCard  from '../commons/GridCard'
import  {Row}  from  'antd'
import Favorite from './Section/Favorite'
 
function MovieDetail(props) {

    let movieId = props.match.params.movieId // (movieId : "45445") 처럼 되어있기 때문에 형식에 맞게 가져와야 함.
    const [Movie, setMovie] = useState([])
    const [Casts, setCasts] = useState([])
    const [ActorToggle, setActorToggle] = useState(false) // initial state를 false로 설정 후 버튼 클릭시 true가 되고 배우가 표시 됨.

    useEffect(() => {

        let endpointCrew = `${API_URL}movie/${movieId}/credits?api_key=${API_KEY}`;
        let endpointInfo = `${API_URL}movie/${movieId}?api_key=${API_KEY}`;

        fetch(endpointInfo)
        .then(response => response.json())
        .then(response=>{
            //console.log(response)
            setMovie(response)
        })

        fetch(endpointCrew)
        .then(response => response.json())
        .then(response=>{
            //console.log('responseForCrew', response)
            setCasts(response.cast)
         })
    }, [])

    const toggleActorView = () =>{ //Actor View
        setActorToggle(!ActorToggle)
    }


        
    return (
        <div>

            {/* Hearder */}

            <MainImage //MainImage 틀을 가져와 데이터의 값만 수정
                image={`${IMAGE_BASE_URL}w1280${Movie.backdrop_path}`}
                title={Movie.original_title}
                text={Movie.overview}
            
            />

            {/*Body */}
            <div style ={{width:'85%', margin:'1rem auto'}}>

                <div style={{display:'flex', justifyContent:'flex-end'}}>
                    <Favorite  movieInfo = {Movie} movieId = {movieId} userFrom = {localStorage.getItem('userId')}/>
                </div>


                {/*Movie Info*/}
                <MovieInfo
                    movie = {Movie}
                />

            <br/>
                
                {/*Actor Grid*/}
            <div style={{display:'flex',justifyContent:'center', margin:'2rem'}}>
                <button onClick={toggleActorView}>Toggle Actor View</button>
            </div>
            {ActorToggle && 
            <Row gutter={[16,16]}>
                    {Casts && Casts.map((cast,index)=>(
                        <React.Fragment key={index}>
                            <GridCard
                                image = {cast.profile_path ? 
                                `${IMAGE_BASE_URL}w500${cast.profile_path}` : null}
                                characterName = {cast.name}
                            />
                        </React.Fragment>
                ))}
            </Row>
            }
            </div>

        </div>
    )
}

export default MovieDetail
