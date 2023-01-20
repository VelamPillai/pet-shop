

export function signupReducer(state, action) {
    const { type, payload } = action
    switch (type) {
      case 'onChange': {
        
            return {
                ...state,
                firstName: payload.name === 'firstName' ? payload.data : state.firstName,
                lastName:payload.name === 'lastName' ? payload.data : state.lastName,
                email: payload.name === 'email' ? payload.data : state.email,
                password: payload.name === 'password' ? payload.data : state.password,
                profileImage : payload.name === 'profileImage' ?  payload.data : ''
            }
                          
        }
        case 'clearForm': {
            return {
                ...state,
                firstName: '',
                lastName: '',
                email: '',
                password: '',
                

            }
            }
       
        default:
            return state
    }
 
}
