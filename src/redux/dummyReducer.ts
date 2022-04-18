const initialState = {
}

export const dummyReducer = (state:any = initialState, action:any) => {
  const { payload } = action
  switch (action.type) {
    case 'ABC':
      return {
        ...state,
        isLoading: true
      }
    default:
      return state
  }
}

export default dummyReducer