import React from 'react'
import Helmet from 'react-helmet'

import Link from '../components/Link'
import HeroScene from '../components/HeroScene'
import BackgroundImage from '../components/BackgroundImage'
import ScrollNav from '../components/ScrollNav'
import Testimonials from '../components/Testimonials'
import MacBook from '../components/MacBook'
import bgEmblem3d from '../images/bg-emblem-3d-white.svg'
import bgCircles from '../images/bg-circles.png'
import bgGraphicHome from '../images/graphic-home.svg'

import './home.scss'

class HomePage extends React.Component {
  state = {
    loaded: false
  }

  componentDidMount() {
    this.setState({ loaded: true })
  }

  render() {
    return (
      <main className="Home">
        <Helmet>
          <meta
            name="description"
            content="Revolutionary technology that empowers clinical and managerial leaders to collaborate with clarity. With our suite of proprietary algorithms visualising consistent, high-frequency, patient-level data, the best decisions can be made for any given level of resource."
          />
        </Helmet>
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

        <section
          className="section dark thick vh-100 Home--TheProblem"
          id="the-problem"
          data-scrollToTarget
        >
          <div className="container skinny relative">
            <BackgroundImage src={bgGraphicHome} contain animate />
            <div className="pull-left-skinny relative">
              <h2>Time to Shine a Light?</h2>
              <div className="statement">
                <p>
                  We asked a wide array of clinicians the following question:
                </p>
                <p>
                  “How much automated data do you have available that is
                  designed to help you improve the work of your team?”
                </p>
              </div>
              <p>
                We thought the answer would be: “Not very much.” It wasn’t.{' '}
                <strong>The response was: “None”.</strong>
              </p>
              <Link to="/a-case-for-change/" strong icon="page">
                A case for change
              </Link>
            </div>
          </div>
        </section>

        <section
          className="section primary thick layer-dark vh-100 Home--OurSolution"
          id="our-solution"
        >
          <MacBook />
          <div className="container skinny relative flex">
            <div className="pull-right-skinny">
              <h2>A new way</h2>
              <p className="statement">
                Actionable insights in six clicks or less
              </p>
              <p>
                It’s not a damn dashboard. It’s not about KPIs. It’s
                revolutionary technology that empowers clinical and managerial
                leaders to collaborate with clarity. With our suite of
                proprietary algorithms visualising consistent, high-frequency,
                patient-level data, the best decisions can be made for any given
                level of resource.
              </p>
              <p>
                And now we <em>interact</em> with the data in a completely new
                way including setting personal thresholds for active monitoring,
                sharing with colleagues and establishing personable discussion
                groups.
              </p>
              <Link to="/a-better-view/" strong icon="page">
                A better view
              </Link>
            </div>
          </div>
        </section>

        <section
          className="section light-reverse thick layer-dark vh-100 Home--TrackRecord"
          id="track-record"
        >
          <BackgroundImage src={bgCircles} contain />
          <div className="container skinny">
            <div className="pull-left-skinny">
              <h2>Proven track record</h2>
              <p>
                Our software is currently used in more than 50 hospitals to
                enhance clinical team engagement and support sustainable
                performance improvement.
              </p>
            </div>
          </div>
          <div className="container skinnier">
            <Testimonials />
          </div>
        </section>

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
            <h2>De-stressing health</h2>
            <p className="statement">
              The hardest job in the world is even harder when you don’t have
              the tools you need to make better decisions.
            </p>
            <p>
              With decades of experience in healthcare, we’ve made it our
              mission to create a world where you spend no time looking for
              data, less time stressing and more time improving your clinical
              system.
            </p>
            <Link to="/about/" strong icon="page">
              About us
            </Link>
          </div>
        </section>
      </main>
    )
  }
}

export default HomePage
