import React from 'react'

import { Context } from './Store'
import Header from './Header'
import Footer from './Footer'
import SectionWithBackground from './SectionWithBackground'
import Background from './Background'

import backgroundImg from '../styles/img/background.jpg'
import Section from './Section'

const Site: React.FC = () => {
  const store = React.useContext(Context)
  const sections = store?.contentful?.pages?.[0]?.sections
    ?.filter((section: any) => section.type === 'section')

  return store.ready ?
    <div className="App">
      <Header />
      <SectionWithBackground
        backgroundImage={backgroundImg}
      >
        <Background />
      </SectionWithBackground>
      {sections.map((section: any, index: number) =>
        <Section
          title={section.title}
          bullets={section.bullets}
          image={section.image}
          imageMobile={section.imageMobile}
          imageToRight={!!(index % 2)}
        />
      )}
      <Footer />
    </div>
    :
    <div />
}


export default Site
