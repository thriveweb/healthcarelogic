import React from 'react'
import Link from '../components/Link'

const AboutPage = () => (
  <main>
    <section className="section dark thick vh-100">
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
      <div className="container">
        <h2>Team</h2>
      </div>
    </section>
  </main>
)

export default AboutPage
