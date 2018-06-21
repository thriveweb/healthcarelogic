import React from 'react'

import Link from '../components/Link'
import BackgroundImage from '../components/BackgroundImage'
import IconGrid from '../components/IconGrid'

import bgEmblemShape from '../images/emblem-shape.svg'
import bgEmblem from '../images/bg-emblem-3d-white.svg'
import click from '../images/click.svg'
import flag from '../images/flag.svg'
import data from '../images/data.svg'
import safe from '../images/safe.svg'

const BetterViewPage = () => (
  <main>
    <div className="section-wrap dark">
      <section className="section thick vh-100">
        <BackgroundImage
          src={bgEmblemShape}
          contain
          style={{ top: '5rem', bottom: '10vh' }}
        />
        <div className="container skinny">
          <div className="pull-right-skinny">
            <h1>A better view</h1>
            <p>
              Amid increasing demand and rising political and patient
              expectations, we have created a world where data flows
              automatically and is beautifully presented and organising
              according to priorities.
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

      <section className="section vh-90">
        <div className="container">
          <h2>Personalised</h2>
        </div>
      </section>
    </div>

    <section className="section light thick vh-90">
      <div className="container">
        <h2>Shareable</h2>
      </div>
    </section>

    <section className="section primary thick vh-90">
      <div className="container">
        <h2 style={{ marginBottom: '4rem' }}>More features</h2>

        <IconGrid
          fontSizeSmall
          items={[
            {
              title: 'Six clicks - endless knowledge',
              image: click,
              description:
                'SystemView allows users to create personalised, data-rich environments in six clicks or less from the millions of charts it can automatically generate and update.'
            },
            {
              title: 'Here and now',
              image: flag,
              description:
                'There is nothing worse than juggling waitlists, schedules and sick patients - and being handed data that tells you nothing about the here and now. We are committed to delivering relevant, up-to-date information because that is the only data that can drive change.'
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

    <section className="section dark thick vh-90">
      <div className="container">
        <h2>The Coordination Hub</h2>
        <div className="statement">
          <p>Six clicks - endless knowledge</p>
        </div>
        <p>
          SystemView allows users to create personalised, data-rich environments
          in six clicks or less from the millions of charts it can automatically
          generate and update.
        </p>
      </div>
    </section>

    <section className="section light thick vh-90">
      <BackgroundImage
        src={bgEmblem}
        contain
        style={{ top: '5rem', bottom: '10vh' }}
      />

      <div className="container skinnier">
        <h2 className="color-primary">We’re here to help</h2>
        <div className="statement">
          <p>Our investment in Customer Success includes:</p>
        </div>
        Helping automate your data to the right specifications
        <ul>
          <li>Installing the software on your networks</li>
          <li>Providing staff with onboarding and training</li>
          <li>Training your tech teams on how to maintain back-end</li>
          <li>Help desk support</li>
          <li>Bespoke strategic improvement sessions (additional cost)</li>
        </ul>
        <Link to="contact" icon="page" strong>
          Contact Us
        </Link>
      </div>
    </section>
  </main>
)

export default BetterViewPage
