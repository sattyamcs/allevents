import React, { Component } from 'react'
import Navbar from './Components/Navbar'
import AllEvents from './Components/AllEvents'
import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom'
import LoadingBar from 'react-top-loading-bar'

export class App extends Component {
//SetProgress is for the top loading bar
  state={
    progress:0
  }
  setProgress=(progress)=>{
    this.setState({progress:progress})
  }

  render() {
    return (
      <Router>
      <div>
        <Navbar />
        <LoadingBar
        height={4}
        color='#f11946'
        progress={this.state.progress}
      />
        {/* this props will allow to fetch 6 AllEvents  at a time */}
        <Routes>
          {/* Here unique key prop is passed because to re mount the page to the given different categories props we passed */}
          <Route exact path="/"><AllEvents setProgress={this.setProgress} key="/" category="all"/> </Route>
          <Route exact path="/all"><AllEvents setProgress={this.setProgress} key="all" category="all"/> </Route>
          <Route exact path="/music"><AllEvents setProgress={this.setProgress} key="music" category="music"/> </Route>
          <Route exact path="/business"><AllEvents setProgress={this.setProgress} key="business" category="business"/> </Route>
          <Route exact path="/sports"><AllEvents setProgress={this.setProgress} key="sports" category="sports"/> </Route>
          <Route exact path="/workshops"><AllEvents setProgress={this.setProgress} key="workshops" category="workshops"/> </Route>
        </Routes>
      </div>
      </Router>
    )
  }
}

export default App



