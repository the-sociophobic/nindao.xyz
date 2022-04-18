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
              Getting Started
            </h2>
          </div>
        </div>
        <div className='row'>
          {[
            {
              title: '1. Integrate',
              bullets: [
                'Add @ninDAO_bot to your group chat',
                'Input member wallet addresses for the Multisig',
              ]
            },
            {
              title: '2. Transform',
              bullets: [
                'Using your mobile device, connect to Metamask through WalletConnect',
                'NinDAO will send an Etherscan transaction to confirm DAO initiation',
              ]
            },
            {
              title: '3. Organize',
              bullets: [
                'Trustlessly manage your digital assets with on-chain transactions',
                'Create and edit proposals, voting polls, and membership',
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