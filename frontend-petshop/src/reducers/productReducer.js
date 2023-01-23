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
    case "setMenuName": {
      return {
        ...state,
        menuName: payload.data,
        subMenuName:''
        
      }
    }
    case "setSubMenuName": {
      return {
        ...state,
        subMenuName : payload.data
      }
    }
    case "setFilteredProduct": {
      return {
        ...state,
        product: [...state.product].filter((item) => 
        (item.petName===state.menuName||item.petName==='dog/cat')&&item.productCategory===state.subMenuName)
      }
    }
    case "setBrand": {
      return {
        ...state,
       brand:[...payload.data]
      }
    }
    case "setSideMenuBrand": {
      return {
        ...state,
       sideMenuBrand:[...payload.data]
      }
      }
    default: {
      return state;
    }
  }
};
