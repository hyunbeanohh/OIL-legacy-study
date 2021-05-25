import React, { Component } from 'react'
import Axios from 'axios'
import {Link} from 'react-router-dom'
import ViewFooter from '../component/ViewFooter'
import styled from 'styled-components'
import btn_viewer_home from '../Btnimg/btn-viewer-home.svg'
import btn_viewer_back from '../Btnimg/btn-nav-back-b-850.svg'
import btn_nav_have_on from '../Btnimg/btn-nav-have-on.svg'
import btn_nav_have_nor from '../Btnimg/btn-nav-have-nor.svg'


const WrapViewer = styled.div`
    padding-top:0px;
`
const TopViewer = styled.div`
    position:fixed;
    top:0px;
    left:0;
    width:100%;
    height:60px;
    line-height:30px;
    border-bottom: 1px solid #f3f3f3;
    background-color:rgba(255, 255, 255, 0.674);
`
class View extends Component{
    
    constructor(props){
        super(props)

        this.state = {
            episodeId : parseInt(props.match.params.episodeId,10),
            episode : {},
            clicked : true,
            have : btn_nav_have_on,
            unhave : btn_nav_have_nor,
            image : btn_nav_have_nor,
            opacity : '1',
            transition : 'ease'

        }
        
        this.change  = this.change.bind(this)
        this.handleScroll = this.handleScroll.bind(this)
        this.setWrapperRef = this.setWrapperRef.bind(this)
        this.clickedScreen = this.clickedScreen.bind(this)
        
    }

    componentDidMount(){
        this._getEpisodeList()
        window.addEventListener('scroll',this.handleScroll)
        window.addEventListener('click',this.clickedScreen)
    }

    componentWillUnmount(){
        window.removeEventListener('scroll',this.handleScroll)
        window.removeEventListener('click',this.clickedScreen)
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
        if (typeof window !== "undefined") {
            window.onscroll = () => {
              let currentScrollPos = window.pageYOffset;
              let maxScroll = document.body.scrollHeight - window.innerHeight;
              // console.log(maxScroll)
              if (currentScrollPos > 0 && currentScrollPos < maxScroll) {
                this.setState({ opacity: "0" ,transition:'all 0.3s ease-in'})
                // console.log(currentScrollPos)
              } else {
                this.setState({ opacity: "1" ,transition:'all 0.3s ease-in'})
              }
            }
          }
    }

    setWrapperRef(node){
        this.wrapperRef = node;
    }

    clickedScreen(e){
        if(this.wrapperRef && !this.wrapperRef.contains(e.target)){

            if(this.state.clicked){
                this.setState({opacity:"0" ,transition:'all 0.3s ease-in'})
            }else{
                this.setState({opacity:"1" , trransition:'all 0.3s ease-in'})
            }
            this.setState({clicked: !this.state.clicked})
        
        }
    }
    
    render(){
        const episode = this.state.episode
        const bomtoon_uri = "https://bomtoon.com"
        
        return(
            <div className ='wrap_viewer'>
                {episode.id ? (
                    <div>
                        
                        <div className = 'top_viewer' style={{ opacity: `${this.state.opacity}` ,transition: `${this.state.transition}`}} ref = {this.setWrapperRef }>
                            <button className ='top_back_btn' onClick ={()=> console.log('click')}><img src = {btn_viewer_back}/></button>
                            <div className = 'top_title' >{episode.title}</div>

                            <Link to = {`/webtoon/${episode.webtoonId}`} className = 'btn_close' >
                            <img src={btn_viewer_home}onClick={()=> window.open(bomtoon_uri)} />
                            </Link>
                            
                            <img src={this.state.image} onClick ={this.change} className = 'change_img' />
                        </div>
                        
                        <div className = 'wrap_images'  > 
                            {episode.images.map((img,index)=>(
                                <img key={index} src = {img}/>
                        ))}
                        </div>
                    </div>
                ):(
                    <div>Loading...</div>
                )}
                
                <div style={{ opacity: `${this.state.opacity}` , transition:`${this.state.transition}`}} onClick={this.clickedScreen}>
                    <ViewFooter />
                </div>
                
            </div>
            
        )
    }
}
export default View