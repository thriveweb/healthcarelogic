import React from 'react'

import Link from '../components/Link'
import BackgroundImage from '../components/BackgroundImage'
import IconGrid from '../components/IconGrid'

import bgEmblem3d from '../images/bg-emblem-3d-white.svg'
import bed from '../images/bed.svg'
import emergency from '../images/emergency.svg'
import patient from '../images/patient.svg'
import surgery from '../images/surgery.svg'

const BrokenSystemPage = () => {
  const iconGridItems = [
    {
      title: 'Emergency Department',
      description:
        'Can you predict how many patients are going to arrive in the next hour?',
      image: emergency,
      linkTo: '#'
    },
    {
      title: 'Beds',
      description:
        'Do you know every patient admitted to your hospital right now at a glance?',
      image: bed,
      linkTo: '#'
    },
    {
      title: 'Surgery',
      description:
        'Do you know which surgeons have too many patients on the waiting list?',
      image: surgery,
      linkTo: '#'
    },
    {
      title: 'Outpatients',
      description:
        'Do you know how many slots you need each week to meet your demand?',
      image: patient,
      linkTo: '#'
    }
  ]

  return (
    <main>
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
            <IconGrid items={iconGridItems} />
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
export default BrokenSystemPage
