import React from 'react'

import { Context } from './Store'
import ExternalLink from './ExternalLink'

import telegramImg from '../styles/img/telegram.svg'
import githubImg from '../styles/img/github.svg'
import twitterImg from '../styles/img/twitter.svg'

export type FooterPropsType = {}


const Footer: React.FC<FooterPropsType> = () => {
  const store = React.useContext(Context)
  const page = store.contentful.pages[0]

  return (
    <div className='Footer'>
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
  )
}


export default Footer