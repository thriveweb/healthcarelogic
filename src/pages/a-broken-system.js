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
          'Can you predict how many patients are going to arrive in the next hour?',
        image: emergency,
        linkTo: '#',
        popupContent: (
          <div>
            <h2>Surgery</h2>
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
              Do you know how eective every surgeon and team are in making oers
              in time?
            </li>
            <li>
              Have you got at your ngertips the utilisation rates of every
              theatre, doctor and team?
            </li>
          </div>
        )
      },
      {
        title: 'Beds',
        description:
          'Do you know every patient admitted to your hospital right now at a glance?',
        image: bed,
        linkTo: '#',
        popupContent: (
          <div>
            <h2>Surgery</h2>
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
              Do you know how eective every surgeon and team are in making oers
              in time?
            </li>
            <li>
              Have you got at your ngertips the utilisation rates of every
              theatre, doctor and team?
            </li>
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
            <h2>Surgery</h2>
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
              Do you know how eective every surgeon and team are in making oers
              in time?
            </li>
            <li>
              Have you got at your ngertips the utilisation rates of every
              theatre, doctor and team?
            </li>
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
            <h2>Surgery</h2>
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
              Do you know how eective every surgeon and team are in making oers
              in time?
            </li>
            <li>
              Have you got at your ngertips the utilisation rates of every
              theatre, doctor and team?
            </li>
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
                  Health services across the world are paying huge money to
                  collect vast amounts of data but still can’t answer basic
                  questions about what is happening inside their hospitals right
                  now and what needs to change to create a better system.
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

          <section className="section thick">
            <div className="container skinny">
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
