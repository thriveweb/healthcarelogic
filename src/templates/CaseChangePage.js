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

  static defaultProps = {
    iconGridItems: [
      {
        title: 'Emergency Department',
        description:
          'Do you know the length of stay required in each of your treatment areas for the ED system to have flow? And is this updated every five minutes based on today’s variation in demand?',
        image: emergency,
        linkTo: '#',
        popupContent: (
          <div>
            <h3>Emergency Department</h3>
            <ul>
              <li>
                Do you know the length of stay required in each of your
                treatment areas for the ED system to have flow? And is this
                updated every five minutes based on today’s variation in demand?
              </li>
              <li>
                Do you know which patients have exceeded the required length of
                stay in each area and why? And what actions you can take to
                resolve this now?
              </li>
              <li>
                Are all of your ED escalation pathways automated with real-time
                text and email alerts? Are your escalations happening before or
                after ED flow is blocked?
              </li>
              <li>
                Do you know how many patients are predicted to present to ED in
                the following hour and for the rest of the day? And if within
                previous hours you have had higher than expected presentations?
              </li>
              <li>
                Can you easily see the patients waiting for a ward admission or
                subspecialty review? And are the teams automatically notified
                via text or email at the minute these requests are made?
              </li>
              <li>
                Can you see today’s inpatient ward discharges and their impact
                to ED patient flow?
              </li>
              <li>
                Do you know how long it takes to triage patients that arrive by
                ambulance and how this impacts POST?
              </li>
            </ul>
            <p>
              If you could <strong>see</strong> all this, what would{' '}
              <strong>change</strong>?
            </p>
            <p>
              SystemView will give you these answers every five minutes –
              automatically and available to everyone.
            </p>
            <Link to="/a-better-view/" strong icon="page">
              A better view
            </Link>
          </div>
        )
      },
      {
        title: 'Beds (admitted patients)',
        description:
          'Can you see every admitted patient in your hospital right now at a glance and which patients are stranded, complex or have waited too long in each ward for the system to have flow?',
        image: bed,
        linkTo: '#',
        popupContent: (
          <div>
            <h3>Beds (admitted patients)</h3>
            <ul>
              <li>
                Can you see every admitted patient in your hospital right now at
                a glance and which patients are stranded, complex or have waited
                too long in each ward for the system to have flow?
              </li>
              <li>
                Do you know which patients are at the highest risk of having a
                long stay or most likely to be readmitted? Is this updated every
                five minutes?
              </li>
              <li>
                Have you got individual registers for extremely long stays and
                special cases?
              </li>
              <li>Have you got automated red to green and AEP strategies?</li>
              <li>
                Do you have an information system so teams across the hospital
                can agree which patients need special attention to prioritise
                care by acuity and system flow?
              </li>
              <li>
                Are you still having frivolous bed meetings or escalations?
              </li>
              <li>
                Do you know what lengths of stay each ward needs to make the
                whole system work?
              </li>
            </ul>
            <p>
              If you could <strong>see</strong> all this, what would{' '}
              <strong>change</strong>?
            </p>
            <p>
              SystemView will give you these answers every five minutes –
              automatically and available to everyone.
            </p>
            <Link to="/a-better-view/" strong icon="page">
              A better view
            </Link>
          </div>
        )
      },
      {
        title: 'Surgery',
        description:
          'Do you know how long each doctor’s waitlist should be to ensure every patient is treated in clinically recommended times? Do you know which doctors have heavy and light order books and is this recalculated daily?',
        image: surgery,
        linkTo: '#',
        popupContent: (
          <div>
            <h3>Surgery</h3>
            <ul>
              <li>
                Do you know how long each doctor’s waitlist should be to ensure
                every patient is treated in clinically recommended times? Do you
                know which doctors have heavy and light order books and is this
                recalculated daily?
              </li>
              <li>
                Do you know how booked tomorrow’s theatre sessions are and who
                are the optimal patients to book with the remaining theatre
                minutes?
              </li>
              <li>
                Do you know how many theatre sessions every specialty requires?
                And within each specialty, do you know which doctors have too
                many or not enough capacity?
              </li>
              <li>
                Do you know which patients need to be booked today to avoid long
                waits?
              </li>
              <li>
                Have you got at your fingertips the utilisation rates of every
                theatre, doctor and team - and associated trends?
              </li>
              <li>
                Do you know which patients are currently booked out of turn and
                the aggregate impact to the system of this?
              </li>
              <li>
                Do you know which doctors have light order books and how many
                extra new outpatients they could treat without risking NEST?
              </li>
            </ul>

            <p>
              If you could <strong>see</strong> all this, what would{' '}
              <strong>change</strong>?
            </p>
            <p>
              SystemView updates theatre schedule views every hour and provides
              daily and weekly intelligence about your theatre allocation –
              automatically and available to everyone.
            </p>
            <Link to="/a-better-view/" strong icon="page">
              A better view
            </Link>
          </div>
        )
      },
      {
        title: 'Outpatients',
        description:
          'Do you know how many outpatient appointments you need each week to see your present demand? And do you use this to set your clinic templates or simply do ‘what we’ve always done’?',
        image: patient,
        linkTo: '#',
        popupContent: (
          <div>
            <h3>Outpatients</h3>
            <ul>
              <li>
                Do you know how many outpatient appointments you need each week
                to see your present demand? And do you use this to set your
                clinic templates or simply do ‘what we’ve always done’?
              </li>
              <li>
                Do you know how many unbooked outpatient slots you have today,
                tomorrow and in three weeks?
              </li>
              <li>
                Do you know how many unbooked slots were wasted last week and
                the weeks before?
              </li>
              <li>
                Do you know if referral demand is rising or falling for each
                specialty? And are you automatically notified if last week had
                higher than usual demand?
              </li>
              <li>
                Do you know at a click how many referrals are yet to be
                categorised? And do you know the longest waiting uncategorised
                referral?
              </li>
              <li>
                Do you know which patients need to be booked or seen today to
                meet your goals?
              </li>
              <li>
                Do you know how many new and review appointments each doctor did
                in each clinic last week?
              </li>
              <li>
                Can you see the variation in discharges, review appointment
                generation, conversions to elective surgery and FTAs within
                doctors of the same team last week?
              </li>
              <li>
                Do you know how many emergency slots you need to plan for in
                next week’s schedule?
              </li>
              <li>
                Do you know how many patients with a booked review appointment
                could be safely discharged to a GP?
              </li>
              <li>
                Do you know how many patients are currently booked out of
                chronological order and the aggregate impact of this?
              </li>
            </ul>

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
          </div>
        )
      }
    ]
  }

  openPopup = ({ popupContent }) => this.setState({ popupContent })

  render() {
    let { template, slug, title, section1, iconGrid } = this.props
    const { popupContent } = this.state
    const { iconGridItems } = this.props
    return (
      <main>
        <Helmet>
          <title>{title}</title>
        </Helmet>

        <ScrollNav />

        {popupContent && (
          <Popup onClose={() => this.setState({ popupContent: null })}>
            {popupContent}
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
                items={iconGridItems}
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
        template
        slug
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
          popupContent
        }
      }
    }
  }
`
