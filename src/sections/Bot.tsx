import React from 'react'

import ActionButton from '../components/ActionButton'
import { Section } from '../components/Store/Types/models'


export type BotPropsType = {
  section?: Section
}


const Bot: React.FC<BotPropsType> = ({
  section
}) => !section ?
    <div />
    :
    <div className='container my-5' id='Bot' >
      <div className='row'>
        <div className='col'>
          <div className='Bot'>
            <div className='row d-flex justify-content-around'>
              <div className='col-11 col-sm-5 d-flex flex-column justify-content-around my-3'>
                <img
                  src={section?.image?.file?.url}
                  className='w-100'
                />
              </div>
              <div className='col-11 col-sm-5 d-flex flex-column justify-content-center my-3'>
                <h1 className='h1 mb-4'>
                  {section.title}
                </h1>
                {section.text}
                <div className='d-flex flex-row justify-content-end'>
                  <ActionButton />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>


export default Bot