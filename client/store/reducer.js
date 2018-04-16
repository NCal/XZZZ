const initialState = {user: null, results: []}

const reducer = (state = initialState, action) => {
  // console.log('action.type', action.type)
  switch (action.type) {
    case 'LOGIN':
      return { user: action.user, results: [] }
    case 'LOGOUT':
      console.log('redux logout')
      return { user: initialState.user, results: [] }
  }

  return state
}

export default reducer
