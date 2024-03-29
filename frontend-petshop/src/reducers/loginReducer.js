export const loginReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'onChange': {
      return {
        ...state,
        email: payload.name === 'email' ? payload.data : state.email,
        password: payload.name === 'password' ? payload.data : state.password,
      };
    }
    case 'clearForm': {
      return {
        ...state,
        email: '',
        password: ''
       
      };
    }


    default: {
      return state;

    }
  }
};
