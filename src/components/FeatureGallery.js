import React from 'react'
import ChevronRight from 'react-feather/dist/icons/chevron-right'

import './FeatureGallery.scss'

export default class FeatureGallery extends React.Component {
  static defaultProps = {
    flip: false,
    autoplay: 4000,
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

  componentDidMount() {
    if (this.props.autoplay) {
      this.timer = window.setInterval(this.progressSlide, this.props.autoplay)
    }
  }

  componentWillUnmount() {
    if (this.timer) {
      window.clearInterval(this.timer)
    }
  }

  progressSlide = () => {
    console.log(this.state.selectedSlide)
    // this.setState(prevState: {})
  }

  render() {
    const { title, autoplay, slides, items, flip } = this.props
    const { selectedSlide } = this.state

    return (
      <div className={`FeatureGallery ${flip ? 'FeatureGallery-flip' : ''}`}>
        <div className="FeatureGallery--Sidebar">
          {title && <h2 className="FeatureGallery--Title">{title}</h2>}
          {(items || slides).map((slide, index) => {
            const className = `FeatureGallery--Sidebar--Button ${
              selectedSlide === index ? 'active' : ''
            }`
            return (
              <button
                key={`Button--${index}`}
                className={className}
                onClick={() => this.setState({ selectedSlide: index })}
              >
                {slide.title}
                <ChevronRight />
              </button>
            )
          })}
        </div>
        <div className="FeatureGallery--Images">
          {(items || slides).map((slide, index) => {
            const className = `FeatureGallery--Images--Item ${
              selectedSlide === index ? 'active' : ''
            }`
            return (
              <div key={`Images--${index}`} className={className}>
                <img src={slide.image} alt={slide.title} />
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}
