import React,{useEffect,useState} from 'react'
import {API_URL,API_KEY,IMAGE_BASE_URL} from "../../Config"
import MainImage from "./Section/MainImage"
import GridCard from "../commons/GridCard"
import {Row} from 'antd'


function LandingPage() {
    const [Movies, setMovies] = useState([])//console.log(response.results) -> 배열 형태, initail state를 배열로 설정
    const [MainMovieImage, setMainMovieImage] = useState(null) //제일 인기있는 영화의 이미지는 results[0]으로 갱신
    const [CurrentPage, setCurrentPage] = useState(0)
    
    useEffect(() => {
        const endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
            fetchMovies(endpoint)
    }, [])

    const fetchMovies = (endpoint) => {
        fetch(endpoint)
        .then(response=>response.json())
        .then(response=>{
            //console.log(response.results)
            //setMovies([...response.results])
            setMovies([...Movies,...response.results])
            // ...Movies -> loadMoreItems 클릭 시 이미지들이 기존의 이미지들을 덮는것이 아니라 추가하기 위해 선언.
            setMainMovieImage(response.results[0])
            setCurrentPage(response.page)
        })
    }
    
    const loadMoreItems = () =>{ //CurrentPage의 initail state를 +1, 페이지를 덮지 않고 추가로 생성.
        const endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=${CurrentPage + 1}`;
        fetchMovies(endpoint)
    }


    return (
        <div style={{ width: '100%', margin: '0' }}>

        {/* Main Image */}
        {MainMovieImage && // && -> MainMovieImage가 존재한다면  MainImage를 렌더링.
            <MainImage
                image={`${IMAGE_BASE_URL}w1280${MainMovieImage.backdrop_path}`}
                title={MainMovieImage.original_title}
                text={MainMovieImage.overview}
            />
        }

        <div style={{ width: '85%', margin: '1rem auto' }}>
            <h2>Movies by latest</h2>
            <hr />

                {/*Movie grid Card */}
                <Row gutter={[16,16]}> {/* 이미지 상하좌우에 여백을 주기위해 gutter 선언*/}
                    {Movies && Movies.map((movie,index)=>(
                        <React.Fragment key={index}> {/*Fragment에 key 값을 넣어줘야 에러가 안남.*/}
                            <GridCard
                                landingPage
                                image = {movie.poster_path ? 
                                `${IMAGE_BASE_URL}w500${movie.poster_path}` : null}
                                movieId = {movie.id}
                                moiveName = {movie.original_title}
                            />
                        </React.Fragment>
                ))}
            </Row>
        </div>
               {/* LoadMore Button */}
        <div style={{display:'flex',justifyContent:'center'}}>
            <button onClick={loadMoreItems}>Load More</button>
        </div>

        </div>
    )
}

export default LandingPage