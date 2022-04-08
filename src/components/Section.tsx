import React from 'react'

import { File } from './Store/Types/contentfulTypes'


export type SectionPropsType = {
  title: JSX.Element | JSX.Element[]
  bullets: JSX.Element | JSX.Element[]
  image: File
  imageMobile: File
  imageToRight: boolean
}


const Section: React.FC<SectionPropsType> = ({
  title,
  bullets,
  image,
  imageMobile,
  imageToRight = false
}) =>
  <div className='Section py-5'>
    <img
      src={imageMobile.file.url}
      className='w-100 d-md-none'
    />
    <div className='container'>
      <div className='row'>
        <div className='col'>
          <h1 className='h1 text-center mb-5 mb-md-4'>
            {title}
          </h1>
        </div>
      </div>
      <div className={`row d-flex flex-row ${imageToRight && 'justify-content-end'}`}>
        <div className={`d-none d-md-flex col-6 ${imageToRight && 'order-3'}`}>
          <img
            src={image.file.url}
            className='w-100'
          />
        </div>
        <div className='col-12 col-md-5 order-2 d-flex flex-column justify-content-center'>
          {bullets}
        </div>
      </div>
    </div>
  </div>


export default Section