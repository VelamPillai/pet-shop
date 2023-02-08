
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
    case "setSideMenuProduct": {
      return {
        ...state,
         sideMenuProduct:[...new Set([...state.sideMenuProduct,...[...state.product].filter(
          (item) =>
            ((item.petName === state.menuName || item.petName === "dog/cat") ||
            (item.productCategory === state.subMenuName) )&& (item.brand===payload.data)
        )])], 
       
      };
    }
    case "resetSideMenuProduct": {
      return {
        ...state,
         sideMenuProduct:[]
       
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
      localStorage.setItem("localCart", JSON.stringify([...state.cart, { ...payload.data, quantity: 1 }]));
      
      return {
        ...state,
        /* cart:Array.isArray(payload.data)?[...payload.data]:[...state.cart,payload.data] */
        cart: [...state.cart, { ...payload.data, quantity: 1 }]
        
      };
    }
    case "resetCart": {
      localStorage.setItem("localCart", JSON.stringify([...payload.data]));
      return {
        ...state,
        cart:[...payload.data]
        
      };
    }
    case "setTotalPrice": {
      
      return {
        ...state,
        totalPrice:payload.data
        
      };
    }
    case "setLocalStorageCart": {
      
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
    case "setOrder": {
      
      return {
        ...state,
        order:[...state.order,payload.data]
        
      };
    }
    case "resetOrder": {
      
      return {
        ...state,
        order:[...payload.data]
        
      };
    }
    default: {
      return state;
    }
  }
};