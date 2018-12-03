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
<<<<<<< HEAD
    autoplayResume: 3000
=======
    autoplay: 5000,
    autoplayResume: 3000,
    testimonials: [
      {
        content: `I absolutely rely on this system to tell me what I need to keep an eye on.`,
        title: `Co-ordinator`,
        logo: childrensHealth
      },
      {
        content: `This system saves us so much time and replaces a lot of the manual entry we used to do. We now have more time to find solutions.`,
        title: `A/NUM Specialist Outpatients`,
        logo: metroSouth
      },
      {
        content: `Prior to having access, my role was very frustrating due to the lack of meaningful waiting lists that were regularly updated ... having data on tap has made meaningful inroads into my ability to work with clinical departments as we strive to ensure appropriate service for patients.`,
        title: `Clinical Director`,
        logo: gchf
      },
      {
        content: `In my personal opinion, this is without doubt the most advanced technology used to inform the delivery of healthcare services.`,
        title: `Relationship Manager`,
        logo: qldHealth
      }
    ]
>>>>>>> parent of 0a4509c... basic changeover to video
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
<<<<<<< HEAD
              <iframe
                src={`https://www.youtube.com/embed/${testimonial.content}`}
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              />
=======
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
>>>>>>> parent of 0a4509c... basic changeover to video
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
