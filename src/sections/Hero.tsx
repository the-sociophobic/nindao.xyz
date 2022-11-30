import React from 'react'

import { Section } from '../components/Store/Types/models'
import SectionWithBackground from '../components/SectionWithBackground'
import Background from '../components/Background'
import ActionButton from '../components/ActionButton'


export type HeroPropsType = {
  section?: Section
}


const Hero: React.FC<HeroPropsType> = ({
  section
}) => !section ?
    <div />
    :
    <SectionWithBackground
      backgroundImage={section.image?.file?.url}
    >
      <Background />
      <div className='container d-flex flex-row justify-content-center position-relative'>
        <div className='col-11 col-sm-4 d-flex flex-column justify-content-center'>
          <img
            src={section.image2?.file?.url}
            className='w-100 mb-3'
          />
          <p className='p text-white text-center'>
            {section.title}
          </p>
          <ActionButton />
        </div>
      </div>
    </SectionWithBackground>


export default Hero