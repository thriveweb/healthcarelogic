import React from 'react'
import Helmet from 'react-helmet'

import Link from '../components/Link'
import Content from '../components/Content'
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
import Meta from '../components/Meta'

// Export Template for use in CMS preview
export const BetterViewPageTemplate = ({
  title,
  section1,
  section2,
  iconGrid,
  section3,
  meta
}) => (
  <main>
    <Helmet>
      <title>{title}</title>
    </Helmet>
    <Meta {...meta} />
    <ScrollNav />

    <div className="section-wrap dark">
      {section1 && (
        <section className="section thick vh-100">
          <BackgroundImage src={bgEmblemShape} animate size={'650px'} />
          <div className="container skinny">
            <div className="pull-right-skinny">
              <h1>{section1.title}</h1>
              <Content src={section1.content} />
            </div>

            <Link
              to="#personalised"
              strong
              icon="page"
              arrow="down"
              scrollButton
            >
              See. Change.
            </Link>
          </div>
        </section>
      )}

      <section className="section thick vh-100" id="personalised">
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

    {section2 && (
      <section className="section dark thick vh-100" id="the-coordination-hub">
        <div className="container">
          <VideoSection videoUrl={'https://player.vimeo.com/video/261768328'}>
            <h2>{section2.title}</h2>
            <Content src={section2.content} />
          </VideoSection>
        </div>

        <Link
          href="#more-features"
          strong
          icon="page"
          arrow="down"
          scrollButton
        >
          SystemView Features
        </Link>
      </section>
    )}

    <section className="section primary thick vh-100" id="more-features">
      <BackgroundImage src={bgCirclesWhite} contain />

      <div className="container">
        <h2 style={{ marginBottom: '4rem' }}>More features</h2>

        {iconGrid && <IconGrid fontSizeSmall items={iconGrid} />}
      </div>

      <Link to="#here-to-help" strong icon="page" arrow="down" scrollButton>
        Tech Support
      </Link>
    </section>

    {section3 && (
      <section className="section light thick vh-100" id="here-to-help">
        <BackgroundImage
          src={bgEmblem}
          contain
          animate
          style={{ top: '5rem', bottom: '10vh' }}
        />

        <div className="container skinnier relative">
          <h2 className="color-primary">{section3.title}</h2>
          <div className="statement">
            <Content src={section3.subtitle} />
          </div>
          <Content src={section3.content} />
          <Link to="/contact/" icon="page" strong>
            Contact Us
          </Link>
        </div>
      </section>
    )}
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
        section1 {
          title
          content
        }
        section2 {
          title
          content
        }
        iconGrid {
          title
          description
          image
        }
        section3 {
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
