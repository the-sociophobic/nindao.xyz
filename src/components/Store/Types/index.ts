import { Site, Section } from './models'


export type StateType = {
  ready: boolean

  contentfulData: any
  contentful: {
    sites?: Site[]
    sections?: Section[]
  }
}

const initialState = {
  ready: false,

  contentfulData: {},
  contentful: {},
}


export {
  initialState,
}
