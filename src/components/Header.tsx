import React from 'react'

import ActionButton from './ActionButton'

import Logo from '../styles/img/logo.svg'


export type HeaderPropsType = {}


const Header: React.FC<HeaderPropsType> = () =>
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
      <ActionButton />
    </div>
  </div>


export default Header