import React, { Component } from 'react'
import Axios from 'axios'
import {Link} from 'react-router-dom'
import AOS from 'aos'
import 'aos/dist/aos.css'
import ViewFooter from '../component/ViewFooter'
import HideHeader from '../component/HideHeader'
import btn_viewer_home from '../Btnimg/btn-viewer-home.svg'
import btn_viewer_back from '../Btnimg/btn-nav-back-b-850.svg'
import btn_nav_have_on from '../Btnimg/btn-nav-have-on.svg'
import btn_nav_have_nor from '../Btnimg/btn-nav-have-nor.svg'


class View extends Component{
    
    constructor(props){
        super(props)

        this.state = {
            episodeId : parseInt(props.match.params.episodeId,10),
            episode : {},
            licked : true,
            have : btn_nav_have_on,
            logo : btn_nav_have_nor,
            image : btn_nav_have_nor,
        }
        this.change  = this.change.bind(this)
    }

    componentDidMount(){
        AOS.init({
            duration: 1500
        })
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


    render(){
        const episode = this.state.episode
        const bomtoon_uri = "https://www.bomtoon.com/?NaPm=ct%3Dkox5b67j%7Cci%3Dcheckout%7Ctr%3Dds%7Ctrx%3D%7Chk%3D8d3ac72365dcae1f3771c915f0bb993647a9a126"
        
        return(
            <div className = 'wrap_viewer'>
                {episode.id ? (
                    
                    <div>
                        
                        <div className = 'top_viewer' data-aos = 'fade-down'>
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