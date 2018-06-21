import React from 'react'

import Link from '../components/Link'
import BackgroundImage from '../components/BackgroundImage'
import TeamGrid from '../components/TeamGrid'

import bgEmblem3d from '../images/bg-emblem-3d-white.svg'
import teamMartin from '../images/team/martin.jpg'
import teamDragan from '../images/team/dragan.jpg'
import teamFaye from '../images/team/faye.jpg'
import teamLeigh from '../images/team/leigh.jpg'
import teamLisa from '../images/team/lisa.jpg'
import teamSteven from '../images/team/steven.jpg'
import teamNikita from '../images/team/nikita.jpg'
import teamAndrew from '../images/team/andrew.jpg'

const teamGridItems = [
  {
    title: 'Professor Martin Connor',
    subtitle: 'Founder and CEO',
    image: teamMartin,
    linkTo: '/team/martin-connor/'
  },
  {
    title: 'Andy Hill',
    subtitle: 'BOARD CHAIR',
    image: teamMartin
  },
  {
    title: 'Andrew Ge-Hall',
    subtitle: 'DATABASE ARCHITECTURE CONSULTANT',
    image: teamMartin
  },
  {
    title: 'Nikita Nadezhdin',
    subtitle: 'SENIOR DATA ENGINEER',
    image: teamNikita
  },
  {
    title: 'Dragan Romic',
    subtitle: 'SENIOR DATA ENGINEER',
    image: teamDragan
  },
  {
    title: 'Lisa Symons',
    subtitle: 'TEST ENGINEER',
    image: teamLisa
  },
  {
    title: 'Professor Steven Stern',
    subtitle: 'PREDICTIVE ANALYTIC LEAD',
    image: teamSteven
  },
  {
    title: 'Leigh Platt',
    subtitle: 'BUSINESS MANAGER',
    image: teamLeigh
  },
  {
    title: 'Faye Kennedy',
    subtitle: 'PLATFORM BUILD LEAD',
    image: teamFaye
  }
]

const AboutPage = () => (
  <main>
    <section className="section dark thick vh-90">
      <BackgroundImage
        src={bgEmblem3d}
        contain
        opacity={0.4}
        style={{ top: '20rem', bottom: '20rem' }}
      />

      <div className="container skinny">
        <h1>Our story</h1>
        <div
          style={{
            columns: '2',
            columnGap: '5rem'
          }}
        >
          <p className="statement">
            Healthcare Logic is committed to developing software that helps
            clinical and managerial leaders improve the performance of their
            hospitals.
          </p>
          <p>
            Having worked in strategic health improvement for almost two decades
            across five countries and three continents, founder and CEO Martin
            Connor is driven by the remarkable fact there is no international
            standard definition of the appropriate data required to
            operationally manage a hospital.
          </p>
          <p>
            Indeed, when setting out on this mission, we undertook research that
            included asking a wide array of senior clinicians how much automated
            data they had access to that was designed to help improve their
            teams’ performances. The collective response shocked even us – none.
          </p>
          <p>
            Our software has changed that and is already being used in more than
            50 hospitals where it is optimising performance in areas such as
            Outpatients, Surgery and Theatres, Endoscopy, Emergency and
            Inpatient Bed Management.
          </p>
          <p>
            In search of a solution to many of the global challenges facing
            hospitals, we have created a common language that is helping solve
            the dilemma of capacity, demand and process and showing there is a
            simpler, cheaper and better way.
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

    <section className="section primary thick">
      <div className="container skinny">
        <h2 style={{ marginBottom: '4rem' }}>Team</h2>
        <TeamGrid items={teamGridItems} />
      </div>
    </section>
  </main>
)

export default AboutPage
