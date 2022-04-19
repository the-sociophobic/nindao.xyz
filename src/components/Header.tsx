import React from 'react'

import { Context } from './Store'
import ExternalLink from './ExternalLink'

import Logo from '../styles/img/logo.svg'


export type HeaderPropsType = {}


const Header: React.FC<HeaderPropsType> = () => {
  const store = React.useContext(Context)
  // const page = store.contentful.pages[0]
  const page = {
    botLink: ''
  }

  return (
    <div className='Header'>
      <div className='container d-flex flex-row align-items-center justify-content-between'>
        <img
          className='Logo'
          src={Logo}
        />
        <div className='flex-grow-1 d-none d-lg-flex flex-row justify-content-end'>
          {['Bot', 'About', 'Instructions', 'FAQ']
            .map(link =>
              <a
                key={link}
                href={`#${link}`}
                className='Header__anchor'
              >
                {link}
              </a>
            )}
        </div>
        <ExternalLink
          newTab
          to={page.botLink}
          className='Button Button--primary d-inline-block'
          disabled
        >
          Coming Soon
        </ExternalLink>
      </div>
    </div>
  )
}


export default Header