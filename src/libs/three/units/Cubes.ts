import * as THREE from 'three'

import Unit from '../Unit'


const numberOfCubes = 128
const cubeRadius = 1
const cubeSpeed = .135
const arenaRadius = 26
var dummy = new THREE.Object3D()

export type cubeData = {
  index: number
  transitionId: number | undefined
  position: THREE.Vector3
  scale: THREE.Vector3
  speed: number
}


const cubeInitialPos = () =>
  new THREE.Vector3(
    (Math.random() - .5) * 2 * arenaRadius * .99,
    (Math.random() - .5) * 2 * arenaRadius * .99,
    (Math.random() - .5) * 2 * arenaRadius * .99
  )
const cubeInitialScale = () => {
  const side = (1 + Math.random()) * cubeRadius

  return new THREE.Vector3(side, side, side)
}
const cubeInitialSpeed = () =>
  (Math.random() + .1) * Math.sign(Math.random() - .5) * cubeSpeed


class Cubes extends Unit {

  cubes: cubeData[] = []
  cubeInstance: any

  constructor(props: any) {
    super(props)

    const { scene, THREE } = props

    this.cubes = Array
      .from(
        { length: numberOfCubes },
        (cube, index) => ({
          index: index,
          transitionId: undefined,
          position: cubeInitialPos(),
          scale: cubeInitialScale(),
          speed: cubeInitialSpeed()
        })
      )

    const geometry = new THREE.BoxGeometry(1, 1, 1)
    const material = new THREE.MeshStandardMaterial({ color: 0x557755, metalness: 1 })
    console.log(material)
    this.cubeInstance = new THREE.InstancedMesh(geometry, material, numberOfCubes)
    this.cubeInstance.instanceMatrix.setUsage(THREE.DynamicDrawUsage)
    scene.add(this.cubeInstance)

    props.unitLoaded()
  }

  animate = (props?: any) => {
    if (!this.cubeInstance)
      return

    this.cubes.forEach(cube => {
      cube.position.y += cube.speed
      if (cube.position.y > arenaRadius)
        cube.position.y = -arenaRadius * .99
      if (cube.position.y < -arenaRadius)
        cube.position.y = arenaRadius * .99

      dummy.position.copy(cube.position)
      dummy.scale.copy(cube.scale)

      dummy.updateMatrix()
      this.cubeInstance.setMatrixAt(cube.index, dummy.matrix)
    })

    this.cubeInstance.instanceMatrix.needsUpdate = true
  }
  dispose = () => { }
}


export default Cubes