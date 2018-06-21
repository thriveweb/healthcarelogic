import React from 'react'

import BackgroundImage from '../components/BackgroundImage'
import gchf from '../images/logos/gchf.png'

import './Testimonials.css'

export default class Testimonials extends React.Component {
  static defaultProps = {
    autoplay: 3000,
    testimonials: [
      {
        content: `I absolutely rely on this system to tell me what I need to keep an eye on.`,
        title: `Co-ordinator, Children’s Health Queensland Hospital and Health Service`,
        logo: gchf
      },
      {
        content: `This system saves us so much time and replaces a lot of the manual entry we used to do. We now have more time to find solutions.`,
        title: `A/NUM Specialist Outpatients, Metro South Hospital and Health Service`,
        logo: gchf
      },
      {
        content: `Prior to having access to SystemView, my role was very frustrating due to the lack of meaningful waiting lists that were regularly updated ... having data on tap has made meaningful inroads into my ability to work with clinical departments as we strive to ensure appropriate service for patients.`,
        title: `Clinical Director, Gold Coast Hospital and Health Service`,
        logo: gchf
      },
      {
        content: `In my personal opinion, SystemView is without doubt the most advanced technology used to inform the delivery of healthcare services.`,
        title: `Relationship Manager, Queensland Department of Health`,
        logo: gchf
      }
    ]
  }

  timer = null
  slideEls = []

  state = {
    activeSlide: 0
  }

  componentDidMount() {
    if (this.props.autoplay) {
      window.setInterval(this.progressSlide, this.props.autoplay)
    }
    this.calculateHeights()
  }

  componentWillUnmount() {
    if (this.timer) window.clearInterval(this.timer)
  }

  progressSlide = () =>
    this.setState({
      activeSlide: this.state.activeSlide + 1
    })

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
        {testimonials.map((testimonial, index) => {
          const active = activeSlide % testimonials.length === index
          const prev = (activeSlide - 1) % testimonials.length === index
          const next = (activeSlide + 1) % testimonials.length === index
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
              {testimonial.logo && (
                <div className="Testimonials--Item--Logo">
                  <BackgroundImage src={testimonial.logo} contain />
                </div>
              )}
              <div className="Testimonials--Item--Inner">
                <h6 className="Testimonials--Item--Title">
                  {testimonial.title}
                </h6>
                <div className="Testimonials--Item--Content">
                  “{testimonial.content}”
                </div>
              </div>
            </div>
          )
        })}
      </div>
    )
  }
}
