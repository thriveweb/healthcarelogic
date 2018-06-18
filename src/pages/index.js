import React from 'react'
import Link from '../components/Link'

const HomePage = () => (
  <main>
    <section className="section dark thick">
      <div className="container">
        <h1>
          If we could <span>see</span> the system, what would{' '}
          <span>change</span>?
        </h1>

        <Link href="#" strong icon="page" arrow="down">
          See. Change.
        </Link>
      </div>
    </section>

    <section className="section dark thick">
      <div className="container">
        <h2>Sick of flying blind?</h2>
        <div className="statement">
          <p>
            We undertook a research exercise in late 2013 and asked a wide array
            of senior clinicians the following question:
          </p>
          <p>
            “How much automated data do you have available that is designed to
            help you improve the work of your team?
          </p>
        </div>
        <p>
          We thought the answer would be “not very much”. It wasn’t.{' '}
          <strong>The answer was: “None”.</strong>
        </p>
        <Link to="/a-broken-system/" strong icon="page">
          A broken system
        </Link>
      </div>
    </section>

    <section className="section primary thick">
      <div className="container">
        <h2>A new way</h2>
        <p className="statement">
          Our world-first software curate and automatically delivers the
          information we need to make
        </p>
        <p>
          It's not another dashboard. It's not about KPIs. It is revolutionary
          technology that provides consistent, high-frequency and shareable data
          that allows you to not only predict what lies ahead but address the
          issues at the core of the problem.
        </p>
        <Link to="/a-better-view/" strong icon="page">
          A better view
        </Link>
      </div>
    </section>

    <section className="section light thick">
      <div className="container">
        <h2>Proven track record</h2>
        <p>
          Our software is already being used in more than 50 hospitals where it
          is optimising performance.
        </p>
      </div>
    </section>

    <section className="section primary thick">
      <div className="container">
        <h2>De-stressing health</h2>
        <p className="statement">
          The hardest job in the world is even harder when you don’t have the
          tools you need to make better decisions.
        </p>
        <p>
          With decades of experience in healthcare, we feel your pain and have
          made it our mission to ensure you spend less time stressing and more
          time delivering great outcomes for your patients.
        </p>
        <Link to="/about/" strong icon="page">
          About us
        </Link>
      </div>
    </section>
  </main>
)

export default HomePage
