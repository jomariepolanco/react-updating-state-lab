// Code YouTubeDebugger Component Here
import React from 'react'

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

    handleButton = () => {
        this.state.settings.bitrate = 12
    }

    handleResolution = () => {
        this.state.settings.video.resolution = '720p'
    }

    render(){
        return(
            <div>
                <button onClick={this.handleButton} className="bitrate"></button>
                <button className="resolution" onClick={this.handleResolution}></button>
            </div>
        )
    }
}

export default YouTubeDebugger