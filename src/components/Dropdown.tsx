import React from 'react'

import ResizeObserver from 'resize-observer-polyfill'


type Props = {
  title: string | JSX.Element
  className?: string
  initialOpen?: boolean
  opened?: boolean
  toggleOpened?: Function
}


class Dropdown extends React.Component<Props, {}> {
  state = {
    opened: this.props.initialOpen || this.props.opened || false,
    contentHeight: 0,
  }

  titleRef: any = React.createRef()
  contentRef: any = React.createRef()
  resizeObs: any

  componentDidMount = () =>
    setTimeout(
      () =>
        this.resizeObs = new ResizeObserver(this.updateContentHeight.bind(this))
          .observe(this.contentRef.current)
      , 200)

  componentDidUpdate = (prevProps: any) =>
    this.props.opened !== prevProps.opened &&
    this.setState({ opened: this.props.opened })

  updateContentHeight = () =>
    this.setState({
      contentHeight: this.contentRef?.current?.clientHeight
    })

  toggleOpened = () => {
    if (!this.state.opened)
      setTimeout(() => window.scroll({
        top: this.titleRef?.current?.getBoundingClientRect()?.top + window.scrollY - 200,
        behavior: 'smooth'
      }), 250)


    this.props.toggleOpened ?
      this.props.toggleOpened()
      :
      this.setState({ opened: !this.state.opened })
  }

  render = () =>
    this.props.children &&
    <div
      ref={this.titleRef}
      className={`
            Dropdown
            ${this.state.opened && 'Dropdown--opened'}
            ${this.props.className}
          `}
    >
      <div
        className='Dropdown__title'
        onClick={() => this.toggleOpened()}
      >
        <div
          className='Dropdown__title__text'
        >
          {this.props.title}
        </div>
      </div>
      <div
        className='Dropdown__content'
        style={{
          height: this.state.opened ?
            this.state.contentHeight
            :
            0
        }}
      >
        <div
          className='Dropdown__content__container'
          ref={this.contentRef}
        >
          {this.props.children}
        </div>
      </div>
    </div>
}


export default Dropdown