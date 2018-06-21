import React from 'react'

import Link from '../components/Link'
import BackgroundImage from '../components/BackgroundImage'
import IconGrid from '../components/IconGrid'
import Popup from '../components/Popup'

import bgEmblem3d from '../images/bg-emblem-3d-white.svg'
import bed from '../images/bed.svg'
import emergency from '../images/emergency.svg'
import patient from '../images/patient.svg'
import surgery from '../images/surgery.svg'

class BrokenSystemPage extends React.Component {
  state = {
    popupContent: null
  }

  static defaultProps = {
    iconGridItems: [
      {
        title: 'Emergency Department',
        description:
          'Do you know what times of day your peak demand hits by season and day of the week?',
        image: emergency,
        linkTo: '#',
        popupContent: (
          <div>
            <h3>Emergency Department</h3>
            <ul>
              <li>
                Do you know what times of day your peak demand hits by season
                and day of the week?
              </li>
              <li>
                Can you predict how many patients are going to arrive in the
                next hour?
              </li>
              <li>
                Do you know right now what kinds of conditions your patients
                have?
              </li>
              <li>
                Do you know the key moments you need medical specialists to give
                judgements?
              </li>
              <li>
                Do you know when patients need to be discharged to sustain flow?
              </li>
              <li>
                Do you know what has to happen in triage to get patients off
                ambulance stretchers?
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
          'Do you know every patient admitted to your hospital right now at a glance?',
        image: bed,
        linkTo: '#',
        popupContent: (
          <div>
            <h3>Beds (admitted patients)</h3>
            <ul>
              <li>
                Do you know every patient admitted to your hospital right now at
                a glance?
              </li>
              <li>
                Do you know which of them are at the highest risk of having a
                long stay?
              </li>
              <li>
                Have you got at your fingertips a list of patients who have
                stayed too long in every ward?
              </li>
              <li>
                Have you got individual registers for extremely long stays and
                special cases?
              </li>
              <li>Have you got automated red to green strategies?</li>
              <li>
                Do you have an information system so teams across the hospital
                can agree which patients need special attention?
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
          'Do you know which surgeons have too many patients on the waiting list?',
        image: surgery,
        linkTo: '#',
        popupContent: (
          <div>
            <h3>Surgery</h3>
            <ul>
              <li>
                Do you know which surgeons have too many patients on the waiting
                list?
              </li>
              <li>
                Do you know how many theatre sessions every specialty requires?
              </li>
              <li>
                Do you know the right balance between allocating emergency and
                elective surgeries?
              </li>
              <li>
                Do you know which patients need to booked today to avoid long
                waits?
              </li>
              <li>
                Do you know how long each doctor’s waitlist should be to ensure
                every patient is treated in clinically recommended times?
              </li>
              <li>
                Do you automatically know the operating times for each surgeon
                for each procedure?
              </li>
              <li>
                Do you know how effective every surgeon and team are in making
                offers in time?
              </li>
              <li>
                Have you got at your fingertips the utilisation rates of every
                theatre, doctor and team?
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
          'Do you know how many slots you need each week to meet your demand?',
        image: patient,
        linkTo: '#',
        popupContent: (
          <div>
            <h3>Outpatients</h3>
            <ul>
              <li>
                Do you know how many slots you need each week to meet your
                demand?
              </li>
              <li>
                Do you know if referrals are rising or falling for each
                specialty?
              </li>
              <li>
                Do you know how many new and review appointments each doctor
                does in each clinic?
              </li>
              <li>Do you know how many book slots you have had this week?</li>
              <li>
                Do you know how many unbooked slots were wasted last week and
                the weeks before?
              </li>
              <li>
                Do you know how many slots you need in the next four weeks to
                ensure demand is met?
              </li>
              <li>
                Do you know which teams are treating patients in chronological
                order?
              </li>
              <li>
                Do you know which patients need to be seen today to meet your
                goals?
              </li>
              <li>
                Do you know how many emergency slots you need before planning
                elective sessions?
              </li>
              <li>
                Do you know how many referrals you are yet to even categorise?
              </li>
              <li>
                Do you know if any teams have large sets of uncategorised
                referrals?
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
    const { popupContent } = this.state
    const { iconGridItems } = this.props

    return (
      <main>
        {popupContent && (
          <Popup onClose={() => this.setState({ popupContent: null })}>
            {popupContent}
          </Popup>
        )}
        <div className="dark">
          <section className="section thick vh-100">
            <div className="container skinny">
              <div className="pull-right-skinny">
                <h1>A broken system</h1>
                <p>
                  We all know that we spend vast amounts of money and time
                  collecting and storing data - and not enough time
                  understanding and acting on it.
                </p>
                <p>
                  Modern EMRs save time and improve quality for clinicians by
                  making the data most relevant for care intuitive to access and
                  easy to use. The very best systems use clinical decision
                  support to provide alerts for situations that require special
                  attention.
                </p>
                <p>
                  The problem is nobody is doing the same for the hospital as a
                  whole.
                </p>
              </div>

              <Link
                to="/a-broken-system/"
                strong
                icon="page"
                arrow="down"
                scrollButton
              >
                See. Change.
              </Link>
            </div>
          </section>

          <section className="section thick" id="scrollToTarget">
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

        <section className="section primary thick vh-90">
          <BackgroundImage
            src={bgEmblem3d}
            contain
            style={{ top: '5rem', bottom: '5rem' }}
          />
          <div className="container skinnier relative">
            <h2>
              <span>If you could</span> see <span>all this, what would</span>{' '}
              change<span>?</span>
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

export default BrokenSystemPage
