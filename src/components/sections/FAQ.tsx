import React from 'react'

import { Context } from '../Store'
import Dropdown from '../Dropdown'


export type FAQPropsType = {}


const FAQ: React.FC<FAQPropsType> = () => {
  const store = React.useContext(Context)
  const page = store.contentful.pages[0]

  return (
    <div id='FAQ' >
      <div className='container'>
        <div className='row'>
          <div className='col'>
            <div className='title'>
              FAQ
            </div>
            {[
              {
                title: 'What is NINDAO?',
                text: 'NINDAO is a Telegram cyborg that enables users to turn group chats into fully-functioning, trustless DAO management platforms.'
              },
              {
                title: 'Okay, so its a Telegram bot.',
                text: <>
                  NINDAO is built from (de)centralized parts for web3 purposes, similar to the machine-organism hybrid of a cyborg.
                  <br />
                  As DAOs integrate automation with human collaboration, they could be considered cyborg organizations.
                </>
              },
              {
                title: 'What can NINDAO do?',
                text: 'NINDAO allows members to manage their treasury, perform multisig transactions, open voting polls, make proposals, and manage membership.'
              },
              {
                title: 'Why NINDAO?',
                text: `NinDAO comes from Japanese にんだお — Ninja way. Like Naruto's way to become Hokage, NinDAO will fight it's way to decentralized glory!`
              },
            ].map(dropdown =>
              <Dropdown
                title={dropdown.title}
              >
                {dropdown.text}
              </Dropdown>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}


export default FAQ