import React from 'react'

import Link from '../components/Link'
import BackgroundImage from '../components/BackgroundImage'
import IconGrid from '../components/IconGrid'
import FeatureGallery from '../components/FeatureGallery'
import VideoSection from '../components/VideoSection'

import bgEmblemShape from '../images/emblem-shape.svg'
import bgEmblem from '../images/bg-emblem-3d-white.svg'
import click from '../images/click.svg'
import flag from '../images/flag.svg'
import data from '../images/data.svg'
import safe from '../images/safe.svg'

import screens from '../images/screens.png'

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
              expectations, clinical and managerial leaders have lacked support
              by not being given the information tools they need to do the
              hardest job in the world.
            </p>
            <p>
              We wanted to change this by creating a world were data flows
              automatically and is beautifully presented and organised according
              to priorities.
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
                image: screens
              },
              {
                title:
                  'Draw improvement trajectories and monitor against them automatically',
                image: screens
              },
              {
                title: 'Set and automatically monitor personalised standards',
                image: screens
              },
              {
                title:
                  'Receive push notifications for improvements or standards outside thresholds',
                image: screens
              }
            ]}
          />
        </div>
      </section>
    </div>

    <section className="section light thick">
      <div className="container">
        <FeatureGallery
          title="Shareable"
          flip
          items={[
            {
              title:
                'Create groups of charts into projects and watch as they automatically update',
              image: screens
            },
            {
              title:
                'Create discussion groups with colleagues over charts or projects',
              image: screens
            },
            {
              title: 'Export charts automatically into PowerPoint',
              image: screens
            }
          ]}
        />
      </div>
    </section>

    <section className="section dark thick">
      <div className="container">
        <VideoSection videoUrl={'https://vimeo.com/252893118'}>
          <h2>The Coordination Hub</h2>
          <p>
            The platform allows you to select any set of screens and send them
            on an ‘always-on’ basis to your screens on the wall – a locally
            configurable coordination hub in a box.
          </p>
        </VideoSection>
      </div>
    </section>

    <section className="section primary thick">
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

    <section className="section light thick vh-90">
      <BackgroundImage
        src={bgEmblem}
        contain
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
        <Link to="contact" icon="page" strong>
          Contact Us
        </Link>
      </div>
    </section>
  </main>
)

export default BetterViewPage
