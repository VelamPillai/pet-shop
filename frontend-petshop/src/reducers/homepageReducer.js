

export const homepageReducer = (state, action) => {
    const { type, payload } = action;
    switch (type) {
        case "setUser": {
            return {
                ...state,
                user:payload.data

            }
        }
        
        default: {
            return state
            }
    }
}