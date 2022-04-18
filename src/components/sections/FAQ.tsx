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
                text: 'NinDAO is a Telegram cyborg that enables users to turn group chats into fully-functioning, trustless DAO management platforms.'
              },
              {
                title: 'Okay, so its a Telegram bot.',
                text: <>
                  NinDAO is built from (de)centralized parts for web3 purposes, similar to the machine-organism hybrid of a cyborg.
                  <br />
                  As DAOs integrate automation with human collaboration, they could be considered cyborg organizations.
                </>
              },
              {
                title: 'What can NINDAO do?',
                text: 'NinDAO allows members to manage their treasury, perform multisig transactions, open voting polls, make proposals, and manage membership.'
              },
              {
                title: 'Why NINDAO?',
                text: <>
                  NinDAO reprograms applications already in-use as sites for web3 innovation and tooling.
                  <br />
                  By leveraging familiar mechanics, both web3 natives and newcomers are enabled to start their own DAO.
                </>
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