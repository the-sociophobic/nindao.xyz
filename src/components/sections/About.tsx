import React from 'react'

import { Context } from '../Store'

import PhoneImg from '../../styles/img/phone.png'


export type AboutPropsType = {}


const About: React.FC<AboutPropsType> = () => {
  const store = React.useContext(Context)
  const page = store.contentful.pages[0]

  return (
    <div id='About' >
      <div className='container mt-5 mb-neg32'>
        <div className='row d-flex justify-content-around'>
          <div className='col-12 col-md-5 d-flex flex-column my-3'>
            <h1 className='h1 mb-4'>
              About
            </h1>
            <p className='p mb-5'>
              NinDAO is a cyborg-ninja programmed with a future-funk *nindō*: to build infrastructures for communities as they happen. As most DAOs begin from a Telegram chat, why not use its interface for trustless coordination?
              <br /><br />
              Featuring multisig, wallet integration, in-app transactions, and more, NinDAO integrates robust tooling with the de facto DAO messenger, to remix business-as-usual for the grooviest web3 ninjas.
              <br /><br />
              <br /><br />
            </p>
          </div>
          <div className='col-12 col-md-7 d-flex flex-column my-3'>
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