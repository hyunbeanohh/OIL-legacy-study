import React,{useEffect, useState} from 'react'
import Axios from 'axios'
//`import { response } from 'express'

function Favorite(props) {
    const movieId = props.movieId
    const userFrom = props.userFrom
    const movieTitle = props.movieInfo.title
    const moviePost = props.movieInfo.backdrop_path
    const movieRunTime = props.movieInfo.runtime

    const [FavoriteNumber, setFavoriteNumber] = useState(0)
    const [Favorited, setFavorited] = useState(false)
    let variables ={
        userFrom,
        movieId
    }

    
    useEffect(() => { 
        
        
        Axios.post('/api/favorite/favoriteNumber',variables)
        .then(response=>{
            console.log(response.data)
            if(response.data.success){
                setFavoriteNumber(response.data.favoriteNumber)
            }else{
                alert('숫자 정보를 가져오는데 실패했습니다.')
            }
        })
        
        
        Axios.post('/api/favorite/favorited',variables)
        .then(response=>{
            console.log(response.data)
            if(response.data.success){
                setFavorited(response.data.favorited)
            }else{
                alert('정보를 가져오는데 실패했습니다.')
            }
        })
    }, [])
    
    const onClickFavorited = () =>  {
        if(Favorite){
            Axios.post('api/favorite/removeFromFavorite',variables)
            .then(response=>{
                if(response.data.success){

                }else{
                    alert('즐겨찾기 목록에서 삭제하는것을 실패했습니다.')
                }
            })
        }else{
            Axios.post('api/favorite/addToFavorite',variables)
            .then(response=>{
                if(response.data.success){

                }else{
                    alert('즐겨찾기 목록에서 추가하는것을 실패했습니다.')
                }
            })
        }
    }
    
    return (
        <div>
            <button onClick={onClickFavorited}>{Favorited ? "Not Favorite" : "Add to Favorite"} {FavoriteNumber}</button>
        </div>
    )
}

export default Favorite
