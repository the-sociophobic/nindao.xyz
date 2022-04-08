import React from 'react'

import { Context } from './Store'
import ExternalLink from './ExternalLink'

import Logo from '../styles/img/logo.svg'


export type HeaderPropsType = {}


const Header: React.FC<HeaderPropsType> = () => {
  const store = React.useContext(Context)
  const page = store.contentful.pages[0]

  return (
    <div className='Header'>
      <div className='container d-flex flex-row align-items-center justify-content-between'>
        <img
          className='Logo'
          src={Logo}
        />
        <ExternalLink
          newTab
          to={page.botLink}
          className='Button Button--primary d-inline-block'
        >
          Transform now
        </ExternalLink>
      </div>
    </div>
  )
}


export default Header