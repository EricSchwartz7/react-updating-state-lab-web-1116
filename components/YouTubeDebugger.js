import React from 'react'
import ReactDOM from 'react-dom'

class YouTubeDebugger extends React.Component {
  constructor(){
    super()

    this.state = {
      errors: [],
      user: null,
      settings: {
        bitrate: 8,
        video: {
          resolution: '1080p'
        }
      }
    }
  }

  handleBitrate(){
    this.setState({
      settings: Object.assign({}, this.state.settings, { bitrate: 12 }),
    })
  }

  handleRes(){
    this.setState({
      settings: Object.assign({}, this.state.settings, {
        video: {
          resolution: '720p'
        }
      })
    })
  }

  render(){
    return(
      <div>
        <button className='bitrate' onClick={this.handleBitrate.bind(this)}>Bitrate</button>
        <button className='resolution' onClick={this.handleRes.bind(this)}>Resolution</button>
      </div>
    )
  }
}

module.exports = YouTubeDebugger
