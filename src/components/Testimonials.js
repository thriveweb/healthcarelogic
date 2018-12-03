import React from 'react'
import ChevronRight from 'react-feather/dist/icons/chevron-right'
import ChevronLeft from 'react-feather/dist/icons/chevron-left'

import BackgroundImage from '../components/BackgroundImage'
import gchf from '../images/logos/gchf.png'
import qldHealth from '../images/logos/qld-health.jpg'
import childrensHealth from '../images/logos/childrens-health.png'
import metroSouth from '../images/logos/metro-south.png'

import './Testimonials.css'

export default class Testimonials extends React.Component {
  static defaultProps = {
    autoplayResume: 3000
  }

  // timer = null
  // resumeTimer = null
  slideEls = []

  state = {
    activeSlide: 0
  }

  componentDidMount() {
    this.calculateHeights()
    // this.startAutoplay()
  }
  //
  // componentWillUnmount() {
  //   this.stopAutoplay()
  // }

  // startAutoplay = () => {
  //   if (this.props.autoplay) {
  //     this.timer = window.setInterval(this.progressSlide, this.props.autoplay)
  //   }
  // }

  // stopAutoplay = () => {
  //   if (this.timer) window.clearInterval(this.timer)
  //   if (this.resumeTimer) window.clearTimeout(this.resumeTimer)
  // }

  progressSlide = (increment = 1) =>
    this.setState({
      activeSlide: this.state.activeSlide + increment
    })

  handleClick = increment => {
    // this.stopAutoplay()
    this.progressSlide(increment)
    // this.resumeTimer = window.setTimeout(
    //   this.startAutoplay,
    //   this.props.autoplayResume
    // )
  }

  calculateHeights = () => {
    let height = Math.max(...this.slideEls.map(el => el.offsetHeight))

    this.setState({ slideElHeight: height })
  }

  render() {
    const { testimonials } = this.props
    const { activeSlide, slideElHeight } = this.state

    return (
      <div
        className="Testimonials"
        style={{ height: `calc(${slideElHeight}px + 7rem)` || 'auto' }}
      >
        <ChevronLeft
          className="Testimonials--Button prev"
          onClick={() => this.handleClick(-1)}
        />

        {testimonials.map((testimonial, index) => {
          let activeSlideBuffer = activeSlide + testimonials.length * 1000
          const active = activeSlideBuffer % testimonials.length === index
          const prev = (activeSlideBuffer - 1) % testimonials.length === index
          const next = (activeSlideBuffer + 1) % testimonials.length === index
          let className = `Testimonials--Item`
          if (active) className += ' active'
          if (prev) className += ' prev'
          if (next) className += ' next'

          return (
            <div
              className={className}
              key={`testimonial-${index}`}
              ref={el => {
                this.slideEls.push(el)
              }}
              style={{ height: slideElHeight || 'auto' }}
            >
              <iframe
                src={`https://www.youtube.com/embed/${testimonial.content}`}
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              />
            </div>
          )
        })}

        <ChevronRight
          className="Testimonials--Button next"
          onClick={() => this.handleClick(1)}
        />
      </div>
    )
  }
}
