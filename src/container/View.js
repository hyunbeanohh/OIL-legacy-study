import React, { Component } from 'react'
import Axios from 'axios'
import {Link} from 'react-router-dom'
import btn_viewer_home from '../Btnimg/btn-viewer-home.svg'
import btn_viewer_back from '../Btnimg/btn-nav-back-b-850.svg'

class View extends Component{
    constructor(props){
        super(props)

        this.state = {
            episodeId : parseInt(props.match.params.episodeId,10),
            episode : {}
        }
    }

    componentDidMount(){
        this._getEpisodeList()
    }

    _getEpisodeList(){
        const api_path = '/data/Episode_list.json'

        Axios.get(api_path)
        .then(data => {
            this.setState({
                episode : data.data.webtoonEpisodes.find(episode=>(
                    episode.id === this.state.episodeId
                ))
            })
        })
        .catch(error=>{
            console.log('데이터를 불러오는데 실패했습니다.')
        })
    }

    render(){
        const episode = this.state.episode
        return(
            <div className = 'wrap_viewer'>
                {episode.id ? (
                    <div>
                        <div className = 'top_viewer'>
                            <button><img src = {btn_viewer_back} onClick={console.log('클릭')}/></button>
                            {episode.title}
                            <Link to = {`/webtoon/${episode.webtoonId}`} className = 'btn_close>' style ={{float:'right'}}><img src={btn_viewer_home}
                            onClick={()=> window.open("https://www.bomtoon.com/?NaPm=ct%3Dkox5b67j%7Cci%3Dcheckout%7Ctr%3Dds%7Ctrx%3D%7Chk%3D8d3ac72365dcae1f3771c915f0bb993647a9a126")}
                            /></Link>
                    </div>
                    
                    <div className = 'wrap_images'>
                        {episode.images.map((img,index)=>(
                            <img key={index} src = {img}/>
                        ))}
                    </div>
                </div>
                ):(
                    <span>Loading...</span>
                )}
            </div>
        )
    }
}


export default View