import React from 'react'
import ReactDOM from 'react-dom'

class DigitalClicker extends React.Component {
  constructor(){
    super()

    this.state = {
      timesClicked: 0
  }
}

  handleClick(){
    this.setState({
      timesClicked: this.state.timesClicked + 1
    })
  }

  render(){
    return(
      <button onClick={this.handleClick.bind(this)}>{this.state.timesClicked}</button>
    )
  }
}

module.exports = DigitalClicker
