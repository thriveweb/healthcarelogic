import React from 'react'
import Helmet from 'react-helmet'

import Link from '../components/Link'
import ScrollNav from '../components/ScrollNav'
import BackgroundImage from '../components/BackgroundImage'
import IconGrid from '../components/IconGrid'
import FeatureGallery from '../components/FeatureGallery'
import VideoSection from '../components/VideoSection'

import bgEmblemShape from '../images/emblem-shape.svg'
import bgEmblem from '../images/bg-emblem-3d-white.svg'
import bgCirclesWhite from '../images/bg-circles-white.png'
import click from '../images/click.svg'
import flag from '../images/flag.svg'
import data from '../images/data.svg'
import safe from '../images/safe.svg'

import screen1 from '../images/screens/healthcarelogic_videoscreens-001.jpeg'
import screen2 from '../images/screens/healthcarelogic_videoscreens-002.jpeg'
import screen3 from '../images/screens/healthcarelogic_videoscreens-003.jpeg'
import screen4 from '../images/screens/healthcarelogic_videoscreens-004.jpeg'
import screen5 from '../images/screens/healthcarelogic_videoscreens-005.jpeg'
import screen6 from '../images/screens/healthcarelogic_videoscreens-006.jpeg'
import screen7 from '../images/screens/healthcarelogic_videoscreens-007.jpeg'

// Export Template for use in CMS preview
export const BetterViewPageTemplate = ({ title }) => (
  <main>
    <Helmet>
      <title>A better view</title>
    </Helmet>

    <ScrollNav />

    <div className="section-wrap dark">
      <section className="section thick vh-100">
        <BackgroundImage src={bgEmblemShape} animate size={'650px'} />
        <div className="container skinny">
          <div className="pull-right-skinny">
            <h1>A better view</h1>
            <p>
              Amid increasing demand and rising political and patient
              expectations, clinical and managerial leaders have lacked support
              by not being given the information tools they need to do the
              hardest job in the world.
            </p>
            <p>
              We wanted to change this by creating a world where data flows
              automatically and is beautifully presented and organised according
              to priorities.
            </p>
          </div>

          <Link
            to="/a-case-for-change/"
            strong
            icon="page"
            arrow="down"
            scrollButton
          >
            See. Change.
          </Link>
        </div>
      </section>

      <section
        className="section thick vh-100"
        data-scrollToTarget
        id="personalised"
      >
        <div className="container skinnier" style={{ marginBottom: '5rem' }}>
          <p>
            By curating information into a set of consistent algorithms, we’ve
            built a set of power functions to enable teams and staff to make
            better decisions.
          </p>
        </div>

        <div className="container">
          <FeatureGallery
            title="Personalised"
            items={[
              {
                title: 'Watch any chart and its automatic updates',
                image: screen1
              },
              {
                title:
                  'Draw improvement trajectories and monitor against them automatically',
                image: screen2
              },
              {
                title: 'Set and automatically monitor personalised standards',
                image: screen3
              },
              {
                title:
                  'Receive push notifications for improvements or standards outside thresholds',
                image: screen4
              }
            ]}
          />
        </div>
      </section>
    </div>

    <section className="section light thick vh-100" id="shareable">
      <div className="container">
        <FeatureGallery
          title="Shareable"
          flip
          items={[
            {
              title:
                'Create groups of charts into projects and watch as they automatically update',
              image: screen5
            },
            {
              title:
                'Create discussion groups with colleagues over charts or projects',
              image: screen6
            },
            {
              title: 'Export charts automatically into PowerPoint',
              image: screen7
            }
          ]}
        />
      </div>
    </section>

    <section className="section dark thick vh-100" id="the-coordination-hub">
      <div className="container">
        <VideoSection videoUrl={'https://vimeo.com/261768328/fb3b2982f2'}>
          <h2>The Coordination Hub</h2>
          <p>
            The platform allows you to select any set of screens and send them
            on an ‘always-on’ basis to your screens on the wall – a locally
            configurable coordination hub in a box.
          </p>
        </VideoSection>
      </div>
    </section>

    <section className="section primary thick vh-100" id="more-features">
      <BackgroundImage src={bgCirclesWhite} contain />

      <div className="container">
        <h2 style={{ marginBottom: '4rem' }}>More features</h2>

        <IconGrid
          fontSizeSmall
          items={[
            {
              title: 'Six clicks or less to actionable insights',
              image: click,
              description:
                'SystemView allows users to drill to patient- and/or doctor-level data in six clicks or less. It’s not about being able to choose anything. Rather, via SystemView’s fixed logic, it’s about being guided to only the actionable information.'
            },
            {
              title: 'Here and now',
              image: flag,
              description:
                'We’re calling an end to monthly performance reporting. After all, this is often six weeks out of date anyway. We are committed to delivering only the relevant information at the frequency that the decisions need to be made.'
            },
            {
              title: 'Existing data',
              image: data,
              description:
                'None of our analysis requires new collections of data. Our software collates huge arrays of routinely collected data that every hospital is already sourcing. What we do that no one has ever done is automate the management of the information so no one needs to manually compile it.'
            },
            {
              title: 'Accessible and safe',
              image: safe,
              description:
                'We have created a visualisation framework that any authorised user can log on to. Housed within a hospital’s firewall, it is fully secure.'
            }
          ]}
        />
      </div>
    </section>

    <section className="section light thick vh-100" id="here-to-help">
      <BackgroundImage
        src={bgEmblem}
        contain
        animate
        style={{ top: '5rem', bottom: '10vh' }}
      />

      <div className="container skinnier relative">
        <h2 className="color-primary">We’re here to help</h2>
        <div className="statement">
          <p>
            We know that not every hospital has the capacity and capability to
            develop and implement an absolutely reliable, commercial-grade and
            automated information environment. Because of this, our commitment
            to get you up and running includes:
          </p>
        </div>
        <ul>
          <li>Helping automate your data to the right specifications</li>
          <li>Installing the software on your networks</li>
          <li>Providing staff with onboarding and training</li>
          <li>Training your tech teams on how to maintain back-end</li>
          <li>Help desk support</li>
        </ul>
        <Link to="/contact/" icon="page" strong>
          Contact Us
        </Link>
      </div>
    </section>
  </main>
)

const BetterViewPage = ({ data: { page } }) => (
  <BetterViewPageTemplate {...page} {...page.frontmatter} body={page.html} />
)

export default BetterViewPage

export const pageQuery = graphql`
  query BetterViewPage($id: String!) {
    page: markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        template
      }
    }
  }
`
