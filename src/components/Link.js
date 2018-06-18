import React from 'react'
import Link from 'gatsby-link'

import './Link.css'

const A = props => <a {...props} />

export default ({
  to,
  children,
  icon = false,
  strong = false,
  arrow = 'right',
  ...props
}) => {
  const Comp = to ? Link : A

  return (
    <Comp to={to} className={`Link ${strong ? 'Link-strong' : ''}`} {...props}>
      {icon === 'page' && (
        <svg
          className="feather feather-file-text Link--icon"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <polyline points="14 2 14 8 20 8" />
          <line x1="16" y1="13" x2="8" y2="13" />
          <line x1="16" y1="17" x2="8" y2="17" />
          <polyline points="10 9 9 9 8 9" />
        </svg>
      )}

      {children}

      {strong && (
        <svg
          className={`feather feather-chevron-right Link--arrow Link--arrow-${arrow}`}
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
      )}
    </Comp>
  )
}
