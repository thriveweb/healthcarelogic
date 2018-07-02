import React from 'react'

import Plyr from './Plyr'
import './VideoSection.css'

export default class VideoSection extends React.Component {
  state = {
    touched: false
  }

  render() {
    const { children, videoUrl } = this.props
    const { touched } = this.state

    const controls = [
      'play-large',
      'play',
      'progress',
      'current-time',
      'mute',
      'volume',
      'captions',
      'airplay',
      'fullscreen'
    ]

    return (
      <div className="VideoSection">
        <div className="VideoSection--Content">{children}</div>
        <div className={`VideoSection--Video ${touched ? 'touched' : ''}`}>
          <Plyr
            type="vimeo"
            videoId={videoUrl}
            hideControls
            playsinline
            controls={controls}
            onPlay={() => this.setState({ touched: true })}
          />
        </div>
      </div>
    )
  }
}
