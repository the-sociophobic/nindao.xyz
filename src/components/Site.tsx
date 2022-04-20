import React from 'react'

import { Context } from './Store'
import Header from './Header'
import Footer from './Footer'
import Hero from '../sections/Hero'
import Bot from '../sections/Bot'
import About from '../sections/About'
import Instructions from '../sections/Instructions'
import FAQ from '../sections/FAQ'


const Site: React.FC = () => {
  const store = React.useContext(Context)
  const site = store?.contentful?.sites?.[0]

  return store.ready && site ?
    <div className="App">
      <Header />
      <Hero section={site.heroSection} />
      <Bot section={site.botSection} />
      <About section={site.aboutSection} />
      <Instructions section={site.instructionsSection} />
      <FAQ section={site.faqSection} />
      <Footer />
    </div>
    :
    <div />
}


export default Site
