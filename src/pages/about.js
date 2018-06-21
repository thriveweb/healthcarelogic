import React from 'react'
import Helmet from 'react-helmet'

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

/*
Professor Martin Connor
Founder and CEO
In a health career spanning 17 years and four countries, Professor Martin Connor has successfully delivered large-scale national and regional programs focused on hospital performance. He has held a number of senior academic, executive and strategic management positions in the United Kingdom, Republic of Ireland, United States and Australia, and developed a reputation as a thought-leader in healthcare innovation, having been published in the British Medical Journal and Social Science and Medicine. Martin designed and led the implementation of Queensland Health’s MIS, a precursor to SystemView, across more than 50 hospitals. He previously acted as special advisor to the Republic of Ireland government during the GFC from 2011–13 and held a fellowship at Stanford University as a Commonwealth Fund Harkness Fellow in International Health Policy and Practice.

Andy Hill
Board Chair and Director
Andy Hill co-founded Oniqua MRO Analytics, a successful supply chain analytics business that grew from a two-person start-up in Australia to become the global leader in spares parts optimisation for asset-intensive industries. As CEO, he spearheaded the growth of Oniqua to become the dominant player in its market, with more than $12 billion of spares parts inventory managed by the Oniqua solution in more than 30 countries. After resigning as Oniqua CEO, Andy joined software development and technology company Corum Group as an advisor.

Associate Professor Christopher Ogg
Director Research and Development
With an academic background in Applied Mathematics, a PhD in Microbiology and Genomics and industry experience focused on analytics, Christopher Ogg was the lead logic designer for the MIS program that forms the basis of SystemView. As well as directly developing the algorithms and visualisations that underpin the solution, his ability to engage and stimulate clinical teams enables him to provide viscerally meaningful information to leaders for sustainable improvements in performance.

Andrew Ge-Hall
Director Software Development
Andrew Ge-Hall has worked in academia and public health for 15 years’, spanning software development, business intelligence and organisational administration. While managing the integration and platform team for the precursor to SystemView, he designed the system architecture that allows it to support delivery of high-frequency application refresh to more than 60 hospitals. Inspired by the latest development methods and technologies, Andrew now leads the teams that have created SystemView and other cutting-edge products.

Leigh Platt
Business Manager
Leigh Platt is an experienced business administrator who has worked internationally with major private-sector companies, including account management responsibilities for top-tier clients. She most recently worked on the Gold Coast Integrated Care Program where she teamed with the clinical and managerial leadership group on core business including chronic disease and hospitalisation risk management. Leigh manages our day-to-day business operations and assists with leadership coordination.

Nikita Nadezhdin
Senior Data Engineer
Nikita Nadezhdin has previously worked for Corelogic (RPData) and Mincom (now ABB) where his goal was to ensure data quality and user satisfaction. With a passion for streaming data and low-latency processing, he is working on building a solid data foundation for SystemView.

Kal Wong
Senior Web Engineer
A graduate of Griffith University with distinction, Kal Wong developed a custom CMS and LMS for Mediasphere before going on to create MyArthritis, a mobile app for people living with arthritis that saw working with rheumatologists. He successfully led a team to rebuilding the Gold Coast Hospital and Health Service’s intranet, streamlining content creation and policy document management.

Jackie Jin
Junior Web Engineer
Jackie Jin works closely with our senior web engineers on development of SystemView’s front-end code, maintenance of back-end code of data access layer and other reactive web applications. She also supports the UX design, animation and hosting resource. Jackie has a M.Sc in Computer Science from Queensland University of Technology.

Suzanne Yeates
Company Secretary
A chartered accountant, Suzanne Yeates is founder and principal of Outsourced Accounting Solutions. She has worked with public companies for more than 20 years and provides both CFO and company secretarial services to a number of public and private companies. Suzanne also has extensive experience working with tech industry start-ups.
*/

export const team = [
  {
    title: 'Professor Martin Connor',
    subtitle: 'Founder and CEO',
    image: teamMartin,
    linkTo: '/team/martin-connor/',
    description: `In a health career spanning 17 years and four countries, Professor Martin Connor has successfully delivered large-scale national and regional programs focused on hospital performance. He has held a number of senior academic, executive and strategic management positions in the United Kingdom, Republic of Ireland, United States and Australia, and developed a reputation as a thought-leader in healthcare innovation, having been published in the British Medical Journal and Social Science and Medicine. Martin designed and led the implementation of Queensland Health’s MIS, a precursor to SystemView, across more than 50 hospitals. He previously acted as special advisor to the Republic of Ireland government during the GFC from 2011–13 and held a fellowship at Stanford University as a Commonwealth Fund Harkness Fellow in International Health Policy and Practice.`
  },
  {
    title: 'Andy Hill',
    subtitle: 'Board Chair and Director',
    image: teamMartin,
    description: `Andy Hill co-founded Oniqua MRO Analytics, a successful supply chain analytics business that grew from a two-person start-up in Australia to become the global leader in spares parts optimisation for asset-intensive industries. As CEO, he spearheaded the growth of Oniqua to become the dominant player in its market, with more than $12 billion of spares parts inventory managed by the Oniqua solution in more than 30 countries. After resigning as Oniqua CEO, Andy joined software development and technology company Corum Group as an advisor.`
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
    <Helmet>
      <title>Our story</title>
    </Helmet>

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
            Our software has changed that and is already being used in more than
            50 hospitals where it is optimising performance in areas such as
            Outpatients, Surgery and Theatres, Endoscopy, Emergency and
            Inpatient Bed Management.
          </p>
          <p>
            Too much hospital reporting is not interesting, let alone important.
            The question we constantly ask ourselves is - can we get an action
            out of the data we are producing? If the answer is no, we throw it
            out. If it is yes, we keep it and get ready to take action.
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

    <section className="section primary thick" id="scrollToTarget">
      <div className="container skinny">
        <h2 style={{ marginBottom: '4rem' }}>Team</h2>
        <TeamGrid items={team} />
      </div>
    </section>
  </main>
)

export default AboutPage
