import React from 'react'

import { Context } from './Store'
import ExternalLink from './ExternalLink'

import telegramImg from '../styles/img/telegram.svg'
import githubImg from '../styles/img/github.svg'
import twitterImg from '../styles/img/twitter.svg'

export type FooterPropsType = {}


const Footer: React.FC<FooterPropsType> = () => {
  const store = React.useContext(Context)
  // const page = store.contentful.pages[0]
  const page = {
    telegramLink: '',
    githubLink: '',
    twitterLink: ''
  }

  return (
    <div className='Footer'>
      <div className='container d-flex flex-row justify-content-end'>
        <div className='flex-grow-1 d-none d-lg-flex flex-row'>
          {['Bot', 'About', 'Instructions', 'FAQ']
            .map(link =>
              <a
                key={link}
                href={`#${link}`}
                className='Footer__anchor'
              >
                {link}
              </a>
            )}
        </div>
        {[
          {
            link: page.telegramLink,
            img: telegramImg
          },
          {
            link: page.githubLink,
            img: githubImg
          },
          {
            link: page.twitterLink,
            img: twitterImg
          },
        ].map(link =>
          <ExternalLink
            newTab
            to={link.link}
            className='Footer__link'
          >
            <img src={link.img} />
          </ExternalLink>
        )}
      </div>
    </div>
  )
}


export default Footer