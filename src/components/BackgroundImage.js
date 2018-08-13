import React from 'react'

import './BackgroundImage.css'

export default ({
  className = '',
  src,
  imageSize,
  contain = false,
  opacity = 1,
  animate = false,
  size = null,
  style
}) => {
  let backgroundSize = 'cover'
  if (contain) backgroundSize = 'contain'
  if (size) backgroundSize = size
  return (
    <div
      className={`BackgroundImage absolute ${className}`}
      style={{
        backgroundImage: `url(${encodeURI(src)})`,
        backgroundSize,
        opacity: opacity,
        animationName: animate ? 'BackgroundImage--animation' : '',
        ...style
      }}
    />
  )
}
