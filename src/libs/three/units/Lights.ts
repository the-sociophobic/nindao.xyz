import Unit from '../Unit'


export default class Lowpoly extends Unit {

  light0: any
  light1: any
  light2: any

  constructor(props: any) {
    super(props)

    const { scene, THREE } = props

    this.light2 = new THREE.AmbientLight(0xFFFFFF)
    this.light0 = new THREE.HemisphereLight(0xffffff, 0xffffff, 17)
    this.light0.position.set(7, 25, -7)
    this.light1 = new THREE.HemisphereLight(0xffffff, 0xffffff, 7)
    this.light1.position.set(10, 25, 10)
    // this.light0.castShadow = true
    scene.add(this.light0)
    scene.add(this.light1)
    scene.add(this.light2)

    props.unitLoaded()
  }

  animate = (props?: any) => {
    const R = 100
    const alpha = props.frameNumber / props.maxFrameNumber * Math.PI * 2 * 55

    // this.light0.position.set(7, R * Math.cos(alpha), R * Math.sin(alpha))
    // this.light1.position.set(R * Math.sin(alpha), 7, R * Math.cos(alpha))
  }
  dispose = () => { }
}
