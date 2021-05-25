import React, { Component } from 'react'
import unlike from '../Btnimg/btn-nav-btm-like-nor.svg'
import like from '../Btnimg/btn-nav-btm-like-on.svg'
import styled from 'styled-components'

const Wrap_Viewer = styled.div`
position: fixed; 
bottom: 0px; 
height: 90px; 
width: 100%; 
background-color:rgba(255, 255, 255, 0.674);
border-top: 1px solid gray;

`
const View_footer = styled.div`
   position: fixed; 
   margin:15px 0px 0px 15px;  
   cursor: pointer;
`

class ViewFooter extends Component{
    constructor(props){
        super(props)

        this.state = {
            clicked : true,
            unlike : unlike,
            like : like,
            image : unlike,
            opacity: '1',
        }
       
        this.change  = this.change.bind(this)
    }
    componentDidMount(){
        window.addEventListener('scroll',this.handleScroll)
        
    }
    componentWillUnmount(){
        window.removeEventListener('scroll',this.handleScroll)
        
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
            <Wrap_Viewer >
                <View_footer>
                    <img src={this.state.image} onClick ={this.change}  />
                </View_footer>
            </Wrap_Viewer>
        )
    }
}

export default ViewFooter
