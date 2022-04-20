import React from 'react'

import Dropdown from '../components/Dropdown'
import { Section } from '../components/Store/Types/models'


export type FAQPropsType = {
  section?: Section
}


const FAQ: React.FC<FAQPropsType> = ({
  section
}) => !section ?
    <div />
    :
    <div id='FAQ' >
      <div className='container'>
        <div className='row'>
          <div className='col'>
            <div className='title'>
              {section.title}
            </div>
            {section?.subsections?.map(subsection =>
              <Dropdown
                key={subsection.id}
                title={subsection.title || ''}
              >
                {subsection.text}
              </Dropdown>
            )}
          </div>
        </div>
      </div>
    </div>


export default FAQ