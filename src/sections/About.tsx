import React from 'react'

import { Section } from '../components/Store/Types/models'


export type AboutPropsType = {
  section?: Section
}


const About: React.FC<AboutPropsType> = ({
  section
}) => !section ?
    <div />
    :
    <div id='About' >
      <div className='container mt-5 mb-neg32'>
        <div className='row d-flex justify-content-around'>
          <div className='col-12 col-md-6 d-flex flex-column my-3'>
            <h1 className='h1 mb-4'>
              {section.title}
            </h1>
            <p className='p mb-5'>
              {section.text}
              <br className='d-none d-md-inline' /><br className='d-none d-md-inline' />
              <br className='d-none d-md-inline' /><br className='d-none d-md-inline' />
            </p>
          </div>
          <div className='col-12 col-md-6 d-flex flex-column my-3'>
            <img
              src={section?.image?.file?.url}
              className='w-100'
            />
          </div>
        </div>
      </div>
    </div>


export default About