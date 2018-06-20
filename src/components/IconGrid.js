import React from 'react'

import Link from './Link'
import './IconGrid.css'

export default ({ items = [] }) => (
  <div className="IconGrid">
    {items.map(({ image, title, description, linkTo }) => (
      <div className="IconGrid--Item" key={`IconGrid--${title}`}>
        <div className="IconGrid--Item--Image">
          <img src={image} alt={title} />
        </div>
        <div>
          <h3>{title}</h3>
          <p className="statement">{description}</p>
          <Link to={linkTo} strong icon="page">
            More Questions
          </Link>
        </div>
      </div>
    ))}
  </div>
)
