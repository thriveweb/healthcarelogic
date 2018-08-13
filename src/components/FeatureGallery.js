import React from 'react'
import ChevronRight from 'react-feather/dist/icons/chevron-right'

import './FeatureGallery.scss'

export default class FeatureGallery extends React.Component {
  static defaultProps = {
    flip: false,
    autoplay: 3000,
    autoplayResume: 3000,
    slides: [
      {
        title: 'This is a title of a slide',
        image: 'https://source.unsplash.com/800x500'
      },
      {
        title: 'Another slide title',
        image: 'https://source.unsplash.com/800x501'
      },
      {
        title: 'Slide title 4',
        image: 'https://source.unsplash.com/800x502'
      },
      {
        title:
          'This slide has a longer title that will probably span multiple lines',
        image: 'https://source.unsplash.com/400x303'
      }
    ]
  }

  state = {
    selectedSlide: 0
  }

  timer = null
  resumeTimer = null

  componentDidMount() {
    this.startAutoplay()
  }

  componentWillUnmount() {
    this.stopAutoplay()
  }

  startAutoplay = () => {
    if (this.props.autoplay) {
      this.timer = window.setInterval(this.progressSlide, this.props.autoplay)
    }
  }

  stopAutoplay = () => {
    if (this.timer) window.clearInterval(this.timer)
    if (this.resumeTimer) window.clearTimeout(this.resumeTimer)
  }

  progressSlide = (increment = 1) =>
    this.setState({
      selectedSlide: this.state.selectedSlide + increment
    })

  selectSlide = index => this.setState({ selectedSlide: index })

  handleClick = index => {
    this.stopAutoplay()
    this.selectSlide(index)
    this.resumeTimer = window.setTimeout(
      this.startAutoplay,
      this.props.autoplayResume
    )
  }

  render() {
    const { title, autoplay, slides, items, flip } = this.props
    const { selectedSlide } = this.state

    const isSelected = index =>
      selectedSlide % (items || slides).length === index

    return (
      <div className={`FeatureGallery ${flip ? 'FeatureGallery-flip' : ''}`}>
        <div className="FeatureGallery--Sidebar">
          {title && <h2 className="FeatureGallery--Title">{title}</h2>}
          {(items || slides).map((slide, index) => {
            const className = `FeatureGallery--Sidebar--Button ${
              isSelected(index) ? 'active' : ''
            }`

            return (
              <div
                className="FeatureGallery--Sidebar--Button--Wrap"
                key={`Button-${index}`}
              >
                <button
                  key={`Button--${index}`}
                  className={className}
                  onClick={() => this.handleClick(index)}
                >
                  {slide.title}
                  <ChevronRight />
                </button>
                {/* Image for responsive viewports */}
                <div
                  key={`Images--${index}`}
                  className="FeatureGallery--Images--Item"
                >
                  <img src={slide.image} alt={slide.title} />
                </div>
              </div>
            )
          })}
        </div>
        <div className="FeatureGallery--Images">
          {(items || slides).map((slide, index) => {
            const className = `FeatureGallery--Images--Item ${
              isSelected(index) ? 'active' : ''
            }`
            return (
              <div
                key={`Images--${index}`}
                className={className}
                key={`Slide-${index}`}
              >
                <img src={slide.image} alt={slide.title} />
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}
