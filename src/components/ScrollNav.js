import React from 'react'
import _map from 'lodash/map'
import _startCase from 'lodash/startCase'
import _throttle from 'lodash/throttle'
import MoveTo from 'moveto'
import inView from 'in-view'
inView.threshold(0.5)

import './ScrollNav.css'

const ScrollDot = () => (
  <svg
    width="48"
    height="48"
    viewBox="0 0 48 48"
    xmlns="http://www.w3.org/2000/svg"
    className="ScrollDot"
  >
    <defs>
      <filter
        x="-69.7%"
        y="-69.7%"
        width="239.4%"
        height="239.4%"
        filterUnits="objectBoundingBox"
        id="filter-1"
      >
        <feGaussianBlur stdDeviation="5.112" in="SourceGraphic" />
      </filter>
    </defs>
    <g id="Page-1" fill="none" fillRule="evenodd">
      <g id="A-broken-system" transform="translate(-1364 -1227)">
        <g id="QUESTIONS-FACED" transform="translate(240 1027)">
          <g id="Group-18" transform="translate(986 213)">
            <g id="Group-4" transform="translate(151)">
              <circle
                id="glow"
                fill="#FFF"
                opacity="0.392"
                filter="url(#filter-1)"
                cx="11"
                cy="11"
                r="11"
              />
              <circle
                id="outer-ring"
                stroke="#FFF"
                strokeWidth="0.25"
                cx="11"
                cy="11"
                r="11"
              />
              <circle id="Oval-3" fill="#FFF" cx="11" cy="11" r="3" />
            </g>
          </g>
        </g>
      </g>
    </g>
  </svg>
)

export default class ScrollNav extends React.Component {
  state = {
    items: [],
    visibleItems: []
  }

  componentDidMount() {
    this.queryItems()
    this.watchScroll()
  }

  componentWillUnmount() {
    this.removeWatchScroll()
  }

  queryItems = () => {
    // .section with not empty id
    const items = _map(document.querySelectorAll('.section[id]'), el => el.id)
    this.setState({
      items
    })
  }

  checkInView = () => {
    if (!this.state.items.length) return false
    const visibleItems = this.state.items.filter(id =>
      inView.is(document.querySelector(`#${id}`))
    )
    this.setState({ visibleItems })
  }

  watchScroll = () => {
    window.addEventListener('scroll', this.checkInView, 1000)
  }

  removeWatchScroll = () => {
    window.removeEventListener('scroll', this.checkInView, 1000)
  }

  handleClick = ({ e, targetId }) => {
    e.preventDefault()
    const moveTo = new MoveTo({
      tolerance: 0,
      duration: 800,
      easing: 'easeOutQuart'
    })

    const target = document.querySelector(targetId)
    if (target) moveTo.move(target)
  }

  render() {
    const { items, visibleItems } = this.state

    const Group = ({ layer = 'dark' }) => (
      <div className={`ScrollNav layer-${layer}`}>
        {items.map(item => {
          const title = _startCase(item)
          const targetId = `#${item}`
          const active = visibleItems.indexOf(item) === 0
          return (
            <a
              key={targetId}
              className={`ScrollNav--Item ${active ? 'active' : ''}`}
              href={targetId}
              onClick={e => this.handleClick({ e, targetId })}
            >
              {title}
              <ScrollDot />
            </a>
          )
        })}
      </div>
    )

    return (
      <div>
        <Group layer="dark" />
      </div>
    )
  }
}
