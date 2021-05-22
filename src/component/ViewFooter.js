import React, { Component } from 'react'
import unlike from '../Btnimg/btn-nav-btm-like-nor.svg'
import like from '../Btnimg/btn-nav-btm-like-on.svg'
import AOS from 'aos'
import 'aos/dist/aos.css'

class ViewFooter extends Component{
    constructor(props){
        super(props)

        this.state = {
            clicked : true,
            unlike : unlike,
            like : like,
            image : unlike
        }
        this.change  = this.change.bind(this)

    }
    componentDidMount(){
        AOS.init({
            duration:1500
        })
    }
    change(){
        if (this.state.clicked){
            this.setState({image:this.state.like})
        }else{
            this.setState({image:this.state.unlike})
        }
        this.setState({clicked: !this.state.clicked})
    }
    render(){
        return(
            <div className = 'wrap_viewfooter'>
            <img src={this.state.image} style ={{cursor:'Pointer'}} onClick ={this.change} className = 'viewfooter' />
            </div>
        )
    }
}

export default ViewFooter
