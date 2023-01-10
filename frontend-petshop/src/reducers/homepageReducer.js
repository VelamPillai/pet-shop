export const homepageReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'setUser': {
      return {
        ...state,
        user: payload.data,
      };
    }
    /* case "setUserIconStatus": {
            return {
                ...state,
                userIconStatus:!state.userIconStatus

            }
        } */
    default: {
      return state;
    }
  }
};
