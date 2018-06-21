import React from 'react'

import Plyr from './Plyr'
import './VideoSection.css'

export default ({ children, videoUrl }) => (
  <div className="VideoSection">
    <div className="VideoSection--Content">{children}</div>
    <div className="VideoSection--Video">
      <Plyr
        type="vimeo"
        videoId={videoUrl}
        hideControls
        controls={['play-large']}
      />
    </div>
  </div>
)
