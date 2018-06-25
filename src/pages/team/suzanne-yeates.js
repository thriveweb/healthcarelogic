import React from 'react'
import Helmet from 'react-helmet'

import Link from '../../components/Link'
import { team } from '../about'
const member = team[8]

const TeamMember = () => (
  <main>
    <Helmet>
      <title>{member.title}</title>
    </Helmet>

    <section className="section dark thick vh-90">
      <div className="container skinny">
        <div style={{ display: 'flex', alignItems: 'flex-start' }}>
          <div style={{ margin: '0 5rem 0 0', maxWidth: '45rem' }}>
            <h1>{member.title}</h1>
            <h4>{member.subtitle}</h4>
            <p>{member.description}</p>
          </div>
          <img
            style={{ marginLeft: 'auto' }}
            src={member.image}
            alt={member.title}
          />
        </div>
        <div className="flex">
          <Link
            to="/about/"
            strong
            icon="page"
            arrow="right"
            style={{ margin: '2.5rem 0 0 auto' }}
          >
            Back
          </Link>
        </div>
      </div>
    </section>
  </main>
)

export default TeamMember
