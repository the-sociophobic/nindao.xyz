import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer'
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass'
import { GlitchPass } from 'three/examples/jsm/postprocessing/GlitchPass'
// import { Interaction } from 'three.interaction'

import isProd from '../utils/isProd'
import TransitionsHandler from './handlers/TransitionsHandler'


const targetToCamera = -15
const maxFrameNumber = 25000
const scaleFactor = 150


export default class Scene extends TransitionsHandler {

  scene: any
  numberOfLoadedUnits: number
  frameId: number = 0

  constructor(props: any) {
    super(props)

    this.scene = {
      renderer: undefined,
      camera: undefined,
      scene: new THREE.Scene(),
      composer: undefined,
      controls: undefined,

      clock: new THREE.Clock(),
      frameNumber: 0,

      units: {},
      unitsToggled: false,
    }

    this.numberOfLoadedUnits = 0
  }

  init = (ViewerDiv: HTMLElement) => {
    const W = ViewerDiv.clientWidth
    const H = ViewerDiv.clientHeight

    //ADD RENDERER
    const optimise = W > 1200
    this.scene.renderer = new THREE.WebGLRenderer({ antialias: !optimise, alpha: true })
    this.scene.renderer.setClearColor(0x000000, 0)
    this.scene.renderer.setSize(W, H)
    // this.scene.renderer.setPixelRatio(!optimise ? window.devicePixelRatio : 1)
    this.scene.renderer.setPixelRatio(window.devicePixelRatio)
    this.scene.renderer.shadowMap.enabled = true

    ViewerDiv.appendChild(this.scene.renderer.domElement)

    //ADD CAMERA
    this.scene.camera = new THREE.PerspectiveCamera(
      50,
      W / H,
      0.1,
      1000
    )
    this.scene.controls = new OrbitControls(this.scene.camera, this.scene.renderer.domElement)
    this.scene.controls.enabled = false
    this.scene.camera.position.x = 0
    this.scene.camera.position.y = 0
    this.scene.camera.position.z = targetToCamera * 2.05
    // this.scene.camera.position.y = Math.PI / 4

    this.scene.controls.update()

    this.scene.composer = new EffectComposer(this.scene.renderer)
    this.scene.composer.addPass(new RenderPass(this.scene.scene, this.scene.camera))
    const glitchPass = new GlitchPass()
    // glitchPass.uniforms = {
    //   ...glitchPass.uniforms,
    //   amount: { value: .007 }
    // }
    this.scene.composer.addPass(glitchPass)

    // this.interaction = new Interaction(this.scene.renderer, this.scene.scene, this.scene.camera)

    this.initUnits()

    if (!this.frameId)
      this.frameId = requestAnimationFrame(this.animate)
  }

  dispose = () => {
    this.disposeUnits()
    cancelAnimationFrame(this.frameId)
  }

  resize = (W: number, H: number) => {
    if (!this.scene.renderer || !this.scene.camera)
      return

    // const optimise = W > 1200

    this.scene.camera.aspect = W / H
    this.scene.camera.updateProjectionMatrix()

    this.scene.renderer.setSize(W, H)
    this.scene.composer.setSize(W, H)
    // this.scene.renderer.setPixelRatio(!optimise ? window.devicePixelRatio : 1)
    this.scene.renderer.setPixelRatio(window.devicePixelRatio)
  }

  animate = () => {
    this.scene.frameNumber = (this.scene.frameNumber + 1) % maxFrameNumber

    const { left, right, top, bottom } = this.scene.renderer.domElement.getBoundingClientRect()

    const isOffscreen =
      bottom < 0 ||
      top > this.scene.renderer.domElement.clientHeight ||
      right < 0 ||
      left > this.scene.renderer.domElement.clientWidth;

    if (!isOffscreen || true) {
      const {
        composer,
        controls,
        units,
        clock,
        renderer,
        camera,
      } = this.scene

      // camera.position.y = -scaleFactor * units.controls.scroll.alphaY
      // controls.target.y = -scaleFactor * units.controls.scroll.alphaY

      Object.keys(units)
        .forEach(unitName =>
          units[unitName].animate({
            THREE: THREE,
            ...this.scene,
            input: this.scene.units.Controls,
            maxFrameNumber: maxFrameNumber,
            // react: this.props.react,
          }))

      controls.update()
      composer.render()
      // composer.render(clock.getDelta())
      // renderer.render(this.scene.scene, this.scene.camera)
    }

    this.frameId = window.requestAnimationFrame(this.animate)
  }


  initUnits = () => {
    const props = {
      THREE: THREE,
      ...this.scene,
      input: this.scene.units.Controls,
      maxFrameNumber: maxFrameNumber,
      // react: this.props.react,
    }


    if (this?.props?.units)
      Object.keys(this.props.units)
        .forEach(unitName => {
          const unit = this?.props?.units?.[unitName]

          // if (!unit.disabled ^ this.scene.unitsToggled) {
          if (unit?.unit)
            this.scene.units[unitName] = new unit.unit({
              ...props,
              ...unit.args,
              unitLoaded: () => this.unitLoaded(unitName),
            })
          this.scene.units[unitName].init &&
            this.scene.units[unitName].init()
          // }
        })
  }

  unitLoaded = (name: string) => {
    this.numberOfLoadedUnits++
    !isProd() && console.log(`${name} loaded`)

    if (this.numberOfLoadedUnits >= Object.keys(this.scene.units).length)
      this.props?.setLoaded?.()
  }

  startUnits = () =>
    Object.keys(this.scene.units)
      .forEach(unitName => {
        const unit = this.scene.units[unitName]

        // if (!unit.disabled ^ this.scene.unitsToggled)
        unit?.start?.()
      })

  start = () =>
    this.startUnits()

  disposeUnits = () => {
    const {
      scene,
      units,
    } = this.scene

    Object.keys(units)
      .forEach(unitName => units[unitName].dispose())

    //REDO THIS SHIT: units should unregister themselves
    while (scene.children.length > 0)
      scene.remove(scene.children[0])
  }

  toggleUnits = () => {
    this.disposeUnits()
    this.scene.unitsToggled = !this.scene.unitsToggled
    this.initUnits()
  }

  // toggleUnit = unitName => {
  //   // if (this.scene[unitName].enabled)
  //   console.log(this.scene.scene.children)
  // }
}
