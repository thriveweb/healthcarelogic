import React from 'react'
import Link from '../components/Link'

const BrokenSystemPage = () => (
  <main>
    <section className="section dark thick vh-100">
      <div className="container skinny">
        <div className="container--pull-right-skinny">
          <h1>A broken system</h1>
          <p>
            Health services across the world are paying huge money to collect
            vast amounts of data but still can’t answer basic questions about
            what is happening inside their hospitals right now and what needs to
            change to create a better system.
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

    <section className="section primary thick vh-90">
      <div className="container">
        <h2>
          Do you know_{' '}
          <span>If you could see all this, what would change?</span>
        </h2>
        <p>
          SystemView will give you these answers every five minutes –
          automatically and available to everyone.
        </p>
        <Link to="/a-better-view/" strong icon="page">
          A better view
        </Link>
      </div>
    </section>
  </main>
)

export default BrokenSystemPage
