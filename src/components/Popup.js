import React from 'react'
import X from 'react-feather/dist/icons/x'

import './Popup.css'

export default class Popup extends React.Component {
  render() {
    const { children, onClose } = this.props

    return (
      <div className="Popup--Wrap">
        <div className="Popup--Overlay" onClick={onClose} />
        <div className="container skinnier relative">
          <a
            href="#"
            onClick={e => {
              e.preventDefault()
              onClose()
            }}
            className="Popup--CloseButton"
          >
            <X />
          </a>
          <div className="Popup">{children}</div>
        </div>
      </div>
    )
  }
}
