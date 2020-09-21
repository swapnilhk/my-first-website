import React from 'react';
import data from "./Data"

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      level : 0
    }
    this.handleClick = this.handleClick.bind(this)
  }
  
  handleClick(incr){
    let newLevel = this.state.level + incr //Increment level
    console.log("newlve: " + newLevel)
    this.setState((state, props) => {
    if(newLevel >= 0 && newLevel < data.length) {
      return {
        level : newLevel
      }
    }
  })}

  render (){
    return(
      <React.Fragment >
        <div className="container">
        <div className="subcontainer1">
            <p>{data[this.state.level].text}</p>
          </div>
          <div className="subcontainer2">
            {this.getContent(data[this.state.level])}
          </div>
          <button class="prev" onClick={() => this.handleClick(-1)}>Prev</button>
          <button class="next" onClick={() => this.handleClick(+1)}>Next</button>
        </div>
      </React.Fragment>
    )
  }

  getContent(currData){
    if(currData.img != null)
      return <img src={currData.img} alt=""/>
    else if(currData.options != null){
      return currData.options.map((option) => 
        <React.Fragment >
          <input type="radio" class="radio" name="answer" value="{option}" onChange=""/><label>{option}</label><br/>  
        </React.Fragment>
      )}
  }
}

export default App; 
