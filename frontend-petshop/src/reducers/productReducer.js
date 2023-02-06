/*export const productReducer = (state, action) => {
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
        subMenuName: "",
      };
    }
    case "setSubMenuName": {
      return {
        ...state,
        subMenuName: payload.data,
      };
    }
    case "setFilteredProduct": {
      return {
        ...state,
        product: [...state.product].filter(
          (item) =>
            (item.petName === state.menuName || item.petName === "dog/cat") &&
            item.productCategory === state.subMenuName
        ),
      };
    }
    case "setBrand": {
      return {
        ...state,
        brand: [...payload.data],
      };
    }
    case "setSideMenuBrand": {
      return {
        ...state,
        sideMenuBrand: [...payload.data],
      };
    }
    case "setSingleProduct": {
      return {
        ...state,
        singleProduct: payload.data,
      };
    }
    case "setSearchedProduct": {
      return {
        ...state,
        searchedProduct: [...payload.data]
        
      };
    }
    case "setFavoriteProduct": {
      
      return {
        ...state,
        favoriteProduct:[...payload.data]
        
      };
    }
    case "setShowHideFavoriteBtn": {
      
      return {
        ...state,
        showHideFavoriteBtn:!state.showHideFavoriteBtn
        
      };
    }
    case "setCart": {
      
      return {
        ...state,
        cart:[...state.cart,payload.data]
        
      };
    }
    case "resetCart": {
      
      return {
        ...state,
        cart:[...payload.data]
        
      };
    }
    case "setShowHideCartBtn": {
      
      return {
        ...state,
        showHideCartBtn:!state.showHideCartBtn
        
      };
    }
    case "setOrderCart": {
      
      return {
        ...state,
        orderCart:[...state.cart,...state.orderCart,payload.data]
        
      };
    }
    case "resetOrderCart": {
      
      return {
        ...state,
        orderCart:[...payload.data]
        
      };
    }
    default: {
      return state;
    }
  }
};
*/

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
        subMenuName: "",
      };
    }
    case "setSubMenuName": {
      return {
        ...state,
        subMenuName: payload.data,
      };
    }
    case "setFilteredProduct": {
      return {
        ...state,
        product: [...state.product].filter(
          (item) =>
            (item.petName === state.menuName || item.petName === "dog/cat") &&
            item.productCategory === state.subMenuName
        ),
      };
    }
    case "setBrand": {
      return {
        ...state,
        brand: [...payload.data],
      };
    }
    case "setSideMenuBrand": {
      return {
        ...state,
        sideMenuBrand: [...payload.data],
      };
    }
    case "setSingleProduct": {
      return {
        ...state,
        singleProduct: payload.data,
      };
    }
    case "setSearchedProduct": {
      return {
        ...state,
        searchedProduct: [...payload.data]
        
      };
    }
    case "setFavoriteProduct": {
      
      return {
        ...state,
        favoriteProduct:[...payload.data]
        
      };
    }
    case "setShowHideFavoriteBtn": {
      
      return {
        ...state,
        showHideFavoriteBtn:!state.showHideFavoriteBtn
        
      };
    }
    case "setCart": {
      
      return {
        ...state,
        cart:Array.isArray(payload.data)?[...payload.data]:[...state.cart,payload.data]
        
      };
    }
    case "resetCart": {
      
      return {
        ...state,
        cart:[...payload.data]
        
      };
    }
    case "setShowHideCartBtn": {
      
      return {
        ...state,
        showHideCartBtn:!state.showHideCartBtn
        
      };
    }
    case "setOrderCart": {
      
      return {
        ...state,
        orderCart:[...state.cart,...state.orderCart,payload.data]
        
      };
    }
    case "resetOrderCart": {
      
      return {
        ...state,
        orderCart:[...payload.data]
        
      };
    }
    default: {
      return state;
    }
  }
};