import React from 'react'

import { Context } from './Store'


class Loader extends React.Component {

  state = {
    transparent: false,
    hidden: false
  }

  static contextType = Context

  componentDidMount = () =>
    this?.context?.registerInitializeCallback(() => this.hide())

  hide = () => {
    this.setState({ transparent: true })
    setTimeout(
      () => this.setState({ hidden: true })
      , 900)
  }

  render = () =>
    <div className={`
      Loader
      ${this.state.transparent && 'Loader--transparent'}
      ${this.state.hidden && 'd-none'}
    `}>

    </div>
}


export default Loader