import React from 'react'


export type ExternalLinkProps = {
  to: string
  newTab?: boolean
  className?: string
  children?: JSX.Element | string
}


const ExternalLink = (props: ExternalLinkProps) => (
  <a
    className={props.className}
    href={(props.to.includes('http') ? '' : 'https://') + props.to}
    target={props.newTab ? "_blank" : ""}
    rel="noopener noreferrer"
  >
    {props.children}
  </a>
)


export default ExternalLink