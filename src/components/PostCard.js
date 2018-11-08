import React from 'react'
import Link from 'gatsby-link'
import _map from 'lodash/map'

import Image from './Image'
import './PostCard.css'

const PostCard = ({
  featuredImage,
  title,
  excerpt,
  slug,
  categories = [],
  className = '',
  ...props
}) => {
  console.log(featuredImage)
  return (
    <Link to={slug} className={`PostCard ${className}`}>
      {featuredImage && (
        <div className="PostCard--Image relative">
          <Image background src={featuredImage} alt={title} />
        </div>
      )}
      <div className="PostCard--Content">
        {title && <h3 className="PostCard--Title">{title}</h3>}
        <div className="PostCard--Category">
          {categories && categories.map(cat => cat.category).join(', ')}
        </div>
        {excerpt && <div className="PostCard--Excerpt">{excerpt}</div>}
        <span className="PostCard--ReadMore">
          Read more
          <svg
            className={`feather feather-chevron-right Link--arrow Link--arrow-right`}
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </span>
      </div>
    </Link>
  )
}

export default PostCard
