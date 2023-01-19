export const productReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "setProduct": {
      return {
        ...state,
        product: [...payload.data],
        originalProduct: [...payload.data],
      };
    }
    case "setSortOption": {
      return {
        ...state,
        sortOption: payload.data,
      };
    }
    default: {
      return state;
    }
  }
};
