import React, { Component } from 'react'
import btn_nav_have_on from '../Btnimg/btn-nav-have-on.svg'
import btn_nav_have_nor from '../Btnimg/btn-nav-have-nor.svg'

class Toggle extends Component{
    constructor(props){
        super(props)

        this.state = {
            clicked : true,
            have : btn_nav_have_on,
            logo : btn_nav_have_nor,
            image : btn_nav_have_nor
        }
        this.change  = this.change.bind(this)
    }
    change(){
        if (this.state.clicked){
            this.state({image:this.state.have})
        }else{
            this.setState({image:this.state.logo})
        }
        this.setState({clicked: !this.state.clicked})
    }

    render(){
        return(
            <div onClick = {this.change}>
                <img src = {this.state.image} className = "change_img" alt = "img"/>
            </div>
        )
    }
}

export default Toggle
