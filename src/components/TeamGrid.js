import React from 'react'

import Link from './Link'
import seeMore from '../images/see-more.svg'
import './TeamGrid.css'
import Image from '../components/Image'

const TeamGrid = ({ props, team }) => (
  <div className="TeamGrid">
    {team.map((member, index) => {
      return (
        <Link
          to={member.slug}
          className="TeamGrid--Item"
          key={`TeamGrid--${member.name}`}
        >
          <Image
            className="TeamGrid--Item--Image"
            src={member.image}
            alt={member.name}
          />
          <h5 className="TeamGrid--Item--Title">{member.name}</h5>
          <h6 className="TeamGrid--Item--Subtitle">{member.position}</h6>
          <div
            className="TeamGrid--Item--Hover absolute"
            style={{ backgroundImage: `url(${seeMore})` }}
          />
        </Link>
      )
    })}
  </div>
)

export default TeamGrid
