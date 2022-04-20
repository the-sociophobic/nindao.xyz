import React from 'react'

import { Context } from './Store'
import ExternalLink from './ExternalLink'


const ActionButton: React.FC<{}> = () => {
  const store = React.useContext(Context)
  const site = store?.contentful?.sites?.[0]

  return !site ?
    <div />
    :
    <ExternalLink
      newTab
      to={site.botLink || ''}
      className='Button Button--primary d-inline-block'
      disabled={!site.botLinkEnabled}
    >
      {site.botLinkText}
    </ExternalLink>
}


export default ActionButton