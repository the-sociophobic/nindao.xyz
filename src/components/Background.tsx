import React from 'react'

import ThreeScene from './ThreeScene'
// import Logo from '../libs/three/units/Logo'
import Cubes from '../libs/three/units/Cubes'
import Lights from '../libs/three/units/Lights'
import Environment from '../libs/three/units/Environment'


export type BackgroundPropsType = {}


const Background: React.FC<BackgroundPropsType> = () =>
  <div className='Background'>
    <ThreeScene
      id="3d-scene"
      units={{
        // arc: {
        //   unit: Logo,
        //   disabled: false,
        // },
        cubes: {
          unit: Cubes,
          disabled: false,
        },
        lights: {
          unit: Lights,
          disabled: false,
        },
        // env: {
        //   unit: Environment,
        //   disabled: false,
        // },
      }}
    />
  </div>


export default Background