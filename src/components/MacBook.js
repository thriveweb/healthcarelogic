import React from 'react'

import BackgroundImage from '../components/BackgroundImage'
import macbook from '../images/macbook.png'
import './MacBook.css'

export default ({ style, ...props }) => (
  <div
    className="MacBook"
    style={{
      ...style
    }}
  >
    <img className="MacBook--Image" src={macbook} />
    <video
      className="MacBook--Video"
      src="/display_screen_c.mp4"
      autoPlay
      playsInline
      muted
      loop
    />
  </div>
)
