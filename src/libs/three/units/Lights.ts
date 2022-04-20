import * as THREE from 'three'

import Unit from '../Unit'


const numberOfLights = 10
const arenaRadius = 26
const lightColors = [
  '#00c797',
  '#e400da',
  '#28348d',
  '#00fd00',
  '#d60002'
]

const lightPos = () =>
  new THREE.Vector3(
    (Math.random() - .5) * 2 * arenaRadius * .99,
    (Math.random() - .5) * 2 * arenaRadius * .99,
    -(Math.random() - .26) * arenaRadius * .99
  )



export default class Lowpoly extends Unit {

  lights: any[]

  constructor(props: any) {
    super(props)

    const { scene, THREE } = props

    this.lights = Array
      .from(
        { length: numberOfLights },
        (light, index) => {
          const tmp = new THREE.PointLight(
            lightColors[index % lightColors.length],
            3.5,
            35
          )
          tmp.position.copy(lightPos())
          scene.add(tmp)

          return tmp
        }
      )

    props.unitLoaded()
  }

  animate = (props?: any) => { }
  dispose = () => { }
}
