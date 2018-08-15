import React from 'react'
import Helmet from 'react-helmet'

import Link from '../components/Link'
import Content from '../components/Content'
import BackgroundImage from '../components/BackgroundImage'
import IconGrid from '../components/IconGrid'
import Popup from '../components/Popup'
import ScrollNav from '../components/ScrollNav'

import bgBrokenSystem from '../images/broken-system.png'
import bgEmblem3d from '../images/bg-emblem-3d-white.svg'
import bed from '../images/bed.svg'
import emergency from '../images/emergency.svg'
import patient from '../images/patient.svg'
import surgery from '../images/surgery.svg'

class CaseChangePageTemplate extends React.Component {
  state = {
    popupContent: null
  }

  openPopup = ({ popupContent }) => this.setState({ popupContent })

  render() {
    let { title, section1, iconGrid } = this.props
    const { popupContent } = this.state
    return (
      <main>
        <Helmet>
          <title>{title}</title>
        </Helmet>

        <ScrollNav />

        {popupContent && (
          <Popup onClose={() => this.setState({ popupContent: null })}>
            <h3>{popupContent.title}</h3>
            <Content src={popupContent.content} />
            <p>
              If you could <strong>see</strong> all this, what would{' '}
              <strong>change</strong>?
            </p>
            <p>
              SystemView provides this information each day – automatically and
              available to everyone.
            </p>
            <Link to="/a-better-view/" strong icon="page">
              A better view
            </Link>
          </Popup>
        )}

        <div className="dark section-wrap">
          <section className="section thick vh-100">
            <div className="container skinny relative">
              <BackgroundImage
                src={bgBrokenSystem}
                contain
                animate
                style={{
                  backgroundPosition: 'left'
                }}
              />
              <div className="pull-right-skinny">
                <h1>{section1.title}</h1>
                <Content src={section1.content} />
              </div>
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
          </section>

          <section
            className="section thick"
            data-scrollToTarget
            id="questions-faced"
          >
            <div className="container">
              <IconGrid
                items={iconGrid}
                handleClick={({ e, item }) => {
                  e.preventDefault()
                  this.openPopup({ popupContent: item.popupContent })
                }}
              />
            </div>
          </section>
        </div>

        <section className="section primary thick vh-100" id="answers-provided">
          <BackgroundImage
            src={bgEmblem3d}
            contain
            style={{ top: '5rem', bottom: '5rem' }}
          />
          <div className="container skinnier relative">
            <h2>
              <span>If you could</span> see <span>all this, what would</span>{' '}
              change
              <span>?</span>
            </h2>
            <p>
              SystemView will give you the answers to all these questions and
              more, in real time, automatically and available to everyone.
            </p>
            <Link to="/a-better-view/" strong icon="page">
              A better view
            </Link>
          </div>
        </section>
      </main>
    )
  }
}

const CaseChangePage = ({ data: { page } }) => (
  <CaseChangePageTemplate {...page} {...page.frontmatter} body={page.html} />
)

export default CaseChangePage

export const pageQuery = graphql`
  query CaseChangePage($id: String!) {
    page: markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        section1 {
          title
          content
        }
        iconGrid {
          title
          image
          description
          linkTo
          popupContent {
            title
            content
          }
        }
      }
    }
  }
`
