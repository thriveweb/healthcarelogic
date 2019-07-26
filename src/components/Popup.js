import React from 'react'
import X from 'react-feather/dist/icons/x'

import './Popup.css'

export default class Popup extends React.Component {
  state = {
    popped: true
  }

  updateBodyStyle = () => {
    if (typeof window === 'undefined') return false
    document.body.style.position = this.state.popped ? 'fixed' : 'initial'
  }

  handleClose = e => {
    e.preventDefault()
    document.body.style.position = 'initial'
    this.setState({ popped: false })
    this.props.onClose()
  }

  render() {
    const { children } = this.props

    this.updateBodyStyle()

    return (
      <div className="Popup--Wrap">
        <div className="Popup--Overlay" onClick={this.handleClose} />
        <div className="container skinny relative">
          <a
            href="#questions-faced"
            onClick={this.handleClose}
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
