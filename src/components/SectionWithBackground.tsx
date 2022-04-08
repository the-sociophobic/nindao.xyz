import React from 'react'


export type SectionWithBackgroundPropsType = {
  children: JSX.Element | JSX.Element[]
  backgroundImage: string
  backgroundContent?: JSX.Element | JSX.Element[]
  darkened?: boolean
}


const SectionWithBackground: React.FC<SectionWithBackgroundPropsType> = ({
  children,
  backgroundImage,
  backgroundContent,
  darkened
}) =>
  <div className='SectionWithBackground'>
    <div
      className={`SectionWithBackground__background ${darkened && 'SectionWithBackground__background--darkened'}`}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {backgroundContent}
    </div>
    <div className='SectionWithBackground__container'>
      <div className='SectionWithBackground__container__content'>
        {children}
      </div>
    </div>
  </div>


export default SectionWithBackground