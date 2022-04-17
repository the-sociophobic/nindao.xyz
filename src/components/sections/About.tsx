import React from 'react'

import { Context } from '../Store'

import PhoneImg from '../../styles/img/phone.png'


export type AboutPropsType = {}


const About: React.FC<AboutPropsType> = () => {
  const store = React.useContext(Context)
  const page = store.contentful.pages[0]

  return (
    <div id='About' >
      <div className='container mt-5'>
        <div className='row d-flex justify-content-around'>
          <div className='col-12 col-sm-6 d-flex flex-column my-3'>
            <h1 className='h1 mb-4'>
              About
            </h1>
            <p className='p mb-5'>
              NINDAO is a cyborg-ninja programmed with a future-funk *nindō*: to build infrastructures for communities as they happen. Most DAOs begin from Telegram chats, so why not convert them into trustless organizations? *(or ... “use the interface for trustless coordination?”)*
              <br /><br />
              Featuring Gnosis Safe multisig, Telegram-Wallet integration, in-app voting, and more, NINDAO integrates robust tooling with the de-facto DAO messenger to remix business-as-usual for the grooviest web3 ninjas.
              <br /><br />
              <br /><br />
            </p>
          </div>
          <div className='col-12 col-sm-6 d-flex flex-column my-3'>
            <img
              src={PhoneImg}
              className='w-100'
            />
          </div>
        </div>
      </div>
    </div>
  )
}


export default About