import React, { Component } from 'react'
import Axios from 'axios'
import {Link} from 'react-router-dom'
import AOS from 'aos'
import 'aos/dist/aos.css'
import classNames from 'classnames';
import ViewFooter from '../component/ViewFooter'
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
            clicked : true,
            have : btn_nav_have_on,
            unhave : btn_nav_have_nor,
            default : btn_nav_have_nor,
            hide : true,
            prevScrollpos : window.pageYOffset
        }
        this.change  = this.change.bind(this)
        this.handleScroll = this.handleScroll.bind(this)
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
            this.setState({image:this.state.unhave})
        }
        this.setState({clicked: !this.state.clicked})
    }

    handleScroll(){
        const { prevScrollpos } = this.state
        const currentScrollsPos = window.pageYOffset
        const hide = prevScrollpos > currentScrollsPos

        this.setState({
            prevScrollpos : currentScrollsPos,
            hide
        })
    }
    
    render(){
        const episode = this.state.episode
        const bomtoon_uri = "https://bomtoon.com"
        return(
            <div className = 'wrap_viewer'>
                {episode.id ? (
                    <div>
                        
                        <div className = {classNames('top_viwer',{
                            'top_hidden' : !this.state.hide
                        })}>
                            <button className ='top_back_btn'><img src = {btn_viewer_back}/></button>
                            <span className = 'top_title' >{episode.title}</span>
                            <Link to = {`/webtoon/${episode.webtoonId}`} className = 'btn_close' >
                            <img src={btn_viewer_home}onClick={()=> window.open(bomtoon_uri)} />
                            </Link>
                            <img src={this.state.default} style ={{cursor:'Pointer'}} onClick ={this.change} className = 'change_img' />
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