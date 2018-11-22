import React from 'react'

import Link from '../components/Link'
import Content from '../components/Content'
import HeroScene from '../components/HeroScene'
import BackgroundImage from '../components/BackgroundImage'
import ScrollNav from '../components/ScrollNav'
import Testimonials from '../components/Testimonials'
import MacBook from '../components/MacBook'
import Meta from '../components/Meta'
import BgBrokenSystem from '../components/BgBrokenSystem'
import bgEmblem3d from '../images/bg-emblem-3d-white.svg'
import bgCircles from '../images/bg-circles.png'

import './HomePage.scss'

export class HomePageTemplate extends React.Component {
  state = {
    loaded: false
  }

  componentDidMount() {
    this.setState({ loaded: true })
  }

  render() {
    const { meta, title, section1, section2, section3, section4 } = this.props
    return (
      <main className="Home">
        <Meta {...meta} />
        <section className="section dark thick vh-100">
          {this.state.loaded && <HeroScene />}
          <div className="container">
            <div className="pull-right">
              <h1 className="Home--Title">
                If we could <span>see</span> the system, what would{' '}
                <span>change</span>?
              </h1>

              <Link href="#" strong icon="page" arrow="down" scrollButton>
                See. Change.
              </Link>
            </div>
          </div>
        </section>

        <ScrollNav />

        {section1 && (
          <section
            className="section dark thick vh-100 Home--TheProblem"
            id="the-problem"
            data-scrollToTarget
          >
            <div className="container skinny relative">
              <BgBrokenSystem />
              {/* <BackgroundImage src={bgGraphicHome} contain animate /> */}
              <div className="pull-left-skinny relative">
                <h2>{section1.title}</h2>
                <div className="statement">
                  <Content src={section1.subtitle} />
                </div>
                <Content src={section1.content} />
                <Link to="/a-case-for-change/" strong icon="page">
                  A case for change
                </Link>
              </div>
            </div>
          </section>
        )}

        {section2 && (
          <section
            className="section primary thick layer-dark vh-100 Home--OurSolution"
            id="our-solution"
          >
            <MacBook />
            <div className="container skinny relative flex">
              <div className="pull-right-skinny">
                <h2>{section2.title}</h2>
                <div className="statement">
                  <Content src={section2.subtitle} />
                </div>
                <Content src={section2.content} />
                <Link to="/a-better-view/" strong icon="page">
                  A better view
                </Link>
              </div>
            </div>
          </section>
        )}

        {section3 && (
          <section
            className="section light-reverse thick layer-dark vh-100 Home--TrackRecord"
            id="track-record"
          >
            <BackgroundImage src={bgCircles} contain />
            <div className="container skinny">
              <div className="pull-left-skinny">
                <h2>{section3.title}</h2>
                <Content src={section3.content} />
              </div>
            </div>
            <div className="container skinnier">
              <Testimonials />
            </div>
          </section>
        )}

        {section4 && (
          <section
            className="section primary thick vh-100 layer-light"
            id="about-us"
          >
            <BackgroundImage
              src={bgEmblem3d}
              contain
              animate
              style={{ top: '5rem', bottom: '5rem' }}
            />
            <div className="container skinnier relative">
              <h2>{section4.title}</h2>
              <div className="statement">
                <Content src={section4.subtitle} />
              </div>
              <Content src={section4.content} />
              <Link to="/about/" strong icon="page">
                About us
              </Link>
            </div>
          </section>
        )}
      </main>
    )
  }
}
// Export Default HomePage for front-end
const HomePage = ({ data: { page } }) => (
  <HomePageTemplate {...page} {...page.frontmatter} body={page.html} />
)

export default HomePage

export const pageQuery = graphql`
  ## Query for HomePage data
  ## Use GraphiQL interface (http://localhost:8000/___graphql)
  ## $id is processed via gatsby-node.js
  ## query name must be unique to this file
  query HomePage($id: String!) {
    page: markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        section1 {
          title
          subtitle
          content
        }
        section2 {
          title
          subtitle
          content
        }
        section3 {
          title
          content
        }
        section4 {
          title
          subtitle
          content
        }
        meta {
          title
          description
          noindex
          canonicalLink
        }
      }
    }
  }
`
