import React from 'react'

import { Context } from '../Store'
import ExternalLink from '../ExternalLink'

import GirlImg from '../../styles/img/girl.jpg'


export type BotPropsType = {}


const Bot: React.FC<BotPropsType> = () => {
  const store = React.useContext(Context)
  const page = store.contentful.pages[0]

  return (
    <div className='container my-5' id='Bot' >
      <div className='row'>
        <div className='col'>
          <div className='Bot'>
            <div className='row d-flex justify-content-around'>
              <div className='col-11 col-sm-5 d-flex flex-column justify-content-around my-3'>
                <img
                  src={GirlImg}
                  className='w-100'
                />
              </div>
              <div className='col-11 col-sm-5 d-flex flex-column justify-content-center my-3'>
                <h1 className='h1 mb-4'>
                  Convert your group chat<br />into DAO
                </h1>
                <p className='p'>
                  NinDAO combines on-chain transactions with open-source protocol, allowing web3 ninjas to coordinate in stealth, right from Telegram.
                  <br />
                  Features:
                </p>
                <ul>
                  <li>
                    Gnosis Safe Multisig
                  </li>
                  <li>
                    Telegram-Metamask Integration
                  </li>
                  <li>
                    On-chain governance
                  </li>
                </ul>
                <div className='d-flex flex-row justify-content-end'>
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
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


export default Bot