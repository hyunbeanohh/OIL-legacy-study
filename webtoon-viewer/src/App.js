import React,{Component} from "react"
import {BrowserRouter as Router, Route} from "react-router-dom"
import "./App.css"

import Main from "./container/Main"
import View from "./container/View"
import Webtoon_Home from "./container/Webtoon_Home"

class App extends Component{
  render(){
    return(
      <Router>
        <div>
          <Route exact path = "/" component={Main}/>
          <Route exact path = "/webtoon/:webtoonId" component={Webtoon_Home}/>
          <Route exact path = "/viewer/:episodeId" component={View}/>
        </div>
      </Router>
    )
  }
}

export default App;