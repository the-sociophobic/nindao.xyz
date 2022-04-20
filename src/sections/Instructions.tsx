import React from 'react'

import { Section } from '../components/Store/Types/models'


export type InstructionsPropsType = {
  section?: Section
}


const Instructions: React.FC<InstructionsPropsType> = ({
  section
}) => !section ?
    <div />
    :
    <div id='Instructions' >
      <div className='container'>
        <div className='row'>
          <div className='col'>
            <h2 className='h2 mb-3'>
              {section.title}
            </h2>
          </div>
        </div>
        <div className='row'>
          {section?.subsections?.map(subsection =>
            <div
              key={subsection.id}
              className='col-12 col-lg-4 my-3'
            >
              <div className='tile'>
                <h3 className='h3'>
                  {subsection.title}
                </h3>
                {subsection.text}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>


export default Instructions