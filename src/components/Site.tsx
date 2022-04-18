import React from 'react'

import { Context } from './Store'
import Header from './Header'
import Footer from './Footer'
import SectionWithBackground from './SectionWithBackground'
// import Background from './Background'
import Bot from './sections/Bot'
import About from './sections/About'
import Instructions from './sections/Instructions'
import FAQ from './sections/FAQ'

import backgroundImg from '../styles/img/background.jpg'
import logoImg from '../styles/img/logo.svg'
// import Section from './Section'


const Site: React.FC = () => {
  const store = React.useContext(Context)
  // const sections = store?.contentful?.pages?.[0]?.sections
  //   ?.filter((section: any) => section.type === 'section')

  return store.ready ?
    <div className="App">
      <Header />
      <SectionWithBackground
        backgroundImage={backgroundImg}
      >
        {/* <Background /> */}
        <div className='container d-flex flex-row justify-content-center position-relative'>
          <div className='col-11 col-sm-4 d-flex flex-column justify-content-center'>
            <img
              src={logoImg}
              className='w-100 mb-3'
            />
            <p className='p text-white text-center'>
              the web3 cyborg for trustless coordination ツ
            </p>
          </div>
        </div>
      </SectionWithBackground>
      <Bot />
      <About />
      <Instructions />
      <FAQ />
      {/* {sections.map((section: any, index: number) =>
        <Section
          title={section.title}
          bullets={section.bullets}
          image={section.image}
          imageMobile={section.imageMobile}
          imageToRight={!!(index % 2)}
        />
      )} */}
      <Footer />
    </div>
    :
    <div />
}


export default Site
