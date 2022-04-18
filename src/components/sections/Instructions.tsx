import React from 'react'

import { Context } from '../Store'


export type InstructionsPropsType = {}


const Instructions: React.FC<InstructionsPropsType> = () => {
  const store = React.useContext(Context)
  const page = store.contentful.pages[0]

  return (
    <div id='Instructions' >
      <div className='container'>
        <div className='row'>
          <div className='col'>
            <h2 className='h2 mb-3'>
              Folow this easy steps to connect:
            </h2>
          </div>
        </div>
        <div className='row'>
          {[
            {
              title: '1. Integrate',
              bullets: [
                'Invite NINDAO to your group chat',
                'Input wallet addresses for the Multisig',
                'Connect Telegram with Metamask using your mobile device through walletConnect.',
              ]
            },
            {
              title: '2. Transform',
              bullets: [
                'NINDAO will send a transaction to initiate the DAO.',
              ]
            },
            {
              title: '3. Organize',
              bullets: [
                'Manage treasure',
                'Create voting polls',
                'Make proposals',
              ]
            }
          ].map(tile =>
            <div className='col-12 col-lg-4 my-3'>
              <div className='tile'>
                <h3 className='h3'>
                  {tile.title}
                </h3>
                <ul>
                  {tile.bullets.map(bullet =>
                    <li>{bullet}</li>
                  )}
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}


export default Instructions