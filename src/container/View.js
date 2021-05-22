import React, { Component } from 'react'
import Axios from 'axios'
import {Link} from 'react-router-dom'
import AOS from 'aos'
import 'aos/dist/aos.css'
import ViewFooter from '../component/ViewFooter'
import btn_viewer_home from '../Btnimg/btn-viewer-home.svg'
import btn_viewer_back from '../Btnimg/btn-nav-back-b-850.svg'
import btn_nav_have_on from '../Btnimg/btn-nav-have-on.svg'
import btn_nav_have_nor from '../Btnimg/btn-nav-have-nor.svg'
import HideHeader from '../component/HideHeader'



class View extends Component{
    
    constructor(props){
        super(props)
        
        this.state = {
            episodeId : parseInt(props.match.params.episodeId,10),
            episode : {},
            clicked : true,
            have : btn_nav_have_on,
            logo : btn_nav_have_nor,
            image : btn_nav_have_nor,
            hide : false,
            pageY : 0
        }
        this.change  = this.change.bind(this)
    }

    componentDidMount(){
        this._getEpisodeList()
        window.addEventListener('scroll',this.handleScroll)
    }

    componentWillUnmount(){
        window.removeEventListener('scroll',this.handleScroll)
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

    change(){
        if (this.state.clicked){
            this.setState({image:this.state.have})
        }else{
            this.setState({image:this.state.logo})
        }
        this.setState({clicked: !this.state.clicked})
    }

    handleScroll(){
        const { pageYOffset } = window
        const deltaY = pageYOffset - this.state.pageY
        const hide = pageYOffset !== 0 && deltaY >= 0

        this.setState({hide,pageYOffset})
    }
    render(){
        const episode = this.state.episode
        const bomtoon_uri = "https:// bomtoon.com"
        return(
            <div className = 'wrap_viewer'>
                {episode.id ? (
                    <div>
                        <HideHeader/>
                        <div className = 'top_viewer'>
                            <button className = 'top_back_btn' onClick ={()=> console.log('click')}><img src = {btn_viewer_back}/></button>
                            <span className = 'top_title' >{episode.title}</span>
                            <Link to = {`/webtoon/${episode.webtoonId}`} className = 'btn_close' >
                            <img src={btn_viewer_home}onClick={()=> window.open(bomtoon_uri)} />
                            </Link>
                            <img src={this.state.image} style ={{cursor:'Pointer'}} onClick ={this.change} className = 'change_img' />
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
                <ViewFooter/>
            </div>
            
        )
    }
}

export default View