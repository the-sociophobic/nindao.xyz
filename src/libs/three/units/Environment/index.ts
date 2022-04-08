import * as THREE from 'three'

import Unit from '../../Unit'
import hdrLoader from '../../loaders/hdrLoader'
import HDRMap from './HDRI/background.hdr'


export default class Fence extends Unit {
  constructor(props: any) {
    super(props)

    this.loadTexture()
  }

  loadTexture = async () => {
    this.props.scene.environment = await hdrLoader(HDRMap)
    this.props.scene.environment.encoding = THREE.sRGBEncoding
    this.props.scene.environment.minFilter = THREE.NearestFilter
    this.props.scene.environment.magFilter = THREE.NearestFilter
    this.props.scene.environment.flipY = true

    // console.log(this.props.scene.environment)
    this.props.unitLoaded()
  }

  animate = (props?: any) => {}
  dispose = (props?: any) => {}
}