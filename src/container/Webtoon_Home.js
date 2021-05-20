import React, { Component } from 'react'
import Header from '../component/Header'
import Week from '../component/Week'
import Footer from '../component/Footer'
import Webtoon_Info from '../component/Webtoon_Info'
import Episode_List from '../component/Episode_List'
import Axios from 'axios'

class Webtoon_Home extends Component{
    constructor(props){
        super(props)

        this.state = {
            webtoonId : parseInt(props.match.params.webtoonId, 10),
            webtoon : {},
            episode_list:[]
        }
    }
    componentDidMount(){
        this._getWebtoon()
        this._getEpisodeList()
    }
    
    _getWebtoon(){
        const api_path = '/data/Webtoon_detail.json'

        Axios.get(api_path)
        .then(data=>{
            //웹툰 가운데 id가 일치하는 웹툰을 state.webtoon에 저장
            this.setState({
                webtoon:data.data.webtoons.find(w=>(
                    w.id === this.state.webtoonId
                ))
            })
        })
        .catch(error=>{
            console.log('데이터를 불러오는데 실패했습니다.')
        })
    }

    _getEpisodeList(){
        const api_path = '/data/Episode_list.json'

        Axios.get(api_path)
        .then(data=>{
            //웹툰 가운데 id가 일치한 에피소드들만 state.episode에 저장
            this.setState({
                episode_list : data.data.webtoonEpisodes.filter(episode=>(
                    episode.webtoonId === this.state.webtoonId
                ))
            })
        })
    }
    render(){
        return(
            <div>
                <Header/>
                <Week/>
                {this.state.webtoon.id? (
                    <Webtoon_Info webtoon = {this.state.webtoon}/>
                ):(
                    <sapn>
                        Loading...
                    </sapn>
                )}

                {this.state.episode_list.length > 0  ? (
                    <Episode_List episode = {this.state.episode_list}/>
                ):(
                    <span>
                        Loading...
                    </span>
                )}
                <Footer/>
            </div>
        )
    }
}
export default Webtoon_Home
