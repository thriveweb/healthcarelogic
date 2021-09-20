import React from 'react'
import Content from '../components/Content'
import ChevronDown from 'react-feather/dist/icons/chevron-down'
import ChevronLeft from 'react-feather/dist/icons/chevron-left'

import _kebabCase from 'lodash/kebabCase'
import './Accordion.css'

export default class Accordion extends React.Component {
  static defaultProps = {
    items: [],
    buttonText: null,
    className: ''
  }

  // use state to auto close but has issues mobile view. onClick={() => this.handleClick(index)}
  // state = {
  //   activeItem: null
  // }
  //
  // handleClick = index => {
  //   this.setState({
  //     activeItem: this.state.activeItem === index ? null : index
  //   })
  // }

  toggleAccordion(e) {
    e.target.classList.toggle('active')
  }

  handleKeyDown = ev => {
    if (ev.keyCode === 13 && !ev.target.classList.contains('active')) {
      // enter to open
      this.toggleAccordion(ev)
    } else if (ev.keyCode === 27 && ev.target.classList.contains('active')) {
      // escape to close
      this.toggleAccordion(ev)
    }
  }

  render() {
    const { items, buttonText, className } = this.props
    return (
      <div className={`Accordion ${className}`}>
        {!!items &&
          items.map((item, index) => (
            <div
              className={`Accordion--item `}
              key={`accordion-item-${_kebabCase(item.title) + '-' + index}`}
              onClick={this.toggleAccordion.bind(this)}
              onKeyDown={this.handleKeyDown}
              tabIndex={0}
              aria-label="Toggle Accordion"
              role="button"
            >
              <h2 className="flex">
                <span className="Accordion-title">{item.title}</span>
                <ChevronDown />
              </h2>
              <div className={'description'}>
                <Content src={item.description} />
                <br />
                {item.applyLink && (
                  <a
                    className="Link Link-strong AccordionLink"
                    href={item.applyLink}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <svg
                      width="14px"
                      height="14px"
                      viewBox="0 0 14 14"
                      version="1.1"
                      className="Link--icon"
                    >
                      <g
                        id="Page-1"
                        stroke="none"
                        stroke-width="1"
                        fill="none"
                        fill-rule="evenodd"
                      >
                        <g
                          id="Homepage"
                          transform="translate(-200.000000, -1465.000000)"
                          fill="currentColor"
                        >
                          <g id="FLYING-BLIND">
                            <g
                              id="Group-12"
                              transform="translate(200.000000, 1114.000000)"
                            >
                              <g
                                id="Group-8"
                                transform="translate(0.000000, 349.000000)"
                              >
                                <path
                                  d="M12.5416667,16 C13.4166667,16 14,15.7083333 14,14.5416667 L14,3.45833333 C14,2.58333333 13.4166667,2 12.5416667,2 L1.45833333,2 C0.291666667,2 0,2.58333333 0,3.45833333 L0,14.5416667 C0,15.7083333 0.291666667,16 1.45833333,16 L12.5416667,16 Z M3.17333333,6.2 C2.8,6.2 2.8,6.2 2.8,5.85 L2.8,5.15 C2.8,4.8 2.8,4.8 3.17333333,4.8 L10.8266667,4.8 C11.2,4.8 11.2,4.8 11.2,5.15 L11.2,5.85 C11.2,6.2 11.2,6.2 10.8266667,6.2 L3.17333333,6.2 Z M3.17333333,9.7 C2.8,9.7 2.8,9.7 2.8,9.35 L2.8,8.65 C2.8,8.3 2.8,8.3 3.17333333,8.3 L10.8266667,8.3 C11.2,8.3 11.2,8.3 11.2,8.65 L11.2,9.35 C11.2,9.7 11.2,9.7 10.8266667,9.7 L3.17333333,9.7 Z M3.17333333,13.2 C2.8,13.2 2.8,13.2 2.8,12.85 L2.8,12.15 C2.8,11.8 2.8,11.8 3.17333333,11.8 L8.52833333,11.8 C8.90166667,11.8 8.90166667,11.8 8.90166667,12.15 L8.90166667,12.85 C8.90166667,13.2 8.90166667,13.2 8.52833333,13.2 L3.17333333,13.2 Z"
                                  id="read-more"
                                />
                              </g>
                            </g>
                          </g>
                        </g>
                      </g>
                    </svg>
                    {buttonText || 'Apply now'}
                    <ChevronLeft />
                  </a>
                )}
              </div>
            </div>
          ))}
      </div>
    )
  }
}
