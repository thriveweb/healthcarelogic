import React from 'react'

import Link from './Link'
import seeMore from '../images/see-more.svg'
import './TeamGrid.css'

export default ({ items = [] }) => (
  <div className="TeamGrid">
    {items.map(({ title, subtitle, image, linkTo }) => (
      <Link to={linkTo} className="TeamGrid--Item" key={`TeamGrid--${title}`}>
        <img className="TeamGrid--Item--Image" src={image} alt={title} />
        <h5 className="TeamGrid--Item--Title">{title}</h5>
        <h6 className="TeamGrid--Item--Subtitle">{subtitle}</h6>
        <div
          className="TeamGrid--Item--Hover absolute"
          style={{ backgroundImage: `url(${seeMore})` }}
        />
      </Link>
    ))}
  </div>
)