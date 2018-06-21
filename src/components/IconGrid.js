import React from 'react'

import Link from './Link'
import './IconGrid.css'

export default ({ items = [], handleClick }) => (
  <div className="IconGrid">
    {items.map(item => (
      <div className="IconGrid--Item" key={`IconGrid--${item.title}`}>
        <div className="IconGrid--Item--Image">
          <img src={item.image} alt={item.title} />
        </div>
        <div>
          <h3>{item.title}</h3>
          <p className="statement">{item.description}</p>
          <Link
            to={item.linkTo}
            strong
            icon="page"
            onClick={e => handleClick({ e, item })}
          >
            More Questions
          </Link>
        </div>
      </div>
    ))}
  </div>
)
