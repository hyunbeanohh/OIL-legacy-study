import React,{Component} from 'react'
import Axios from 'axios'

import Header from '../component/Header'
import Week from '../component/Week'
import Footer from '../component/Footer'
import Webtoon_List from '../component/Webtoon_List'


class Main extends Component{
    constructor(props){
        super(props)

        this.state = {
            day : 'mon', // default
            webtoon_list : []
        }
    }

    componentDidMount(){
        this._getList()
    }

    _getList(){
        //webtoon_list를 가져오기
        const api_path = 'data/Webtoon_list.json'

        Axios.get(api_path)
        .then(data=>{
            this.setState(
                {webtoon_list : data.data.webtoonList}
            )
        })
        .catch(error => {
            console.log('데이터를 가져오는데 실패했습니다.')
        })
    }

    render(){
        return (
            <div>
                <Header/>
                <Week/>

                    {this.state.webtoon_list.length > 0 ? ( 
                        <Webtoon_List list = {
                            this.state.webtoon_list.filter(webtoon => (
                                webtoon.day === this.state.day
                            ))
                        }/>
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

export default Main
