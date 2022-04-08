export type StateType = {
  ready: boolean

  contentfulData: any
  contentful: any
}

const initialState = {
  ready: false,

  contentfulData: {},
  contentful: {},
}


export {
  initialState,
}
