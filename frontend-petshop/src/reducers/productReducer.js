
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
      switch (payload.name) {
        case 'brand': {
          return {
            ...state,
             sideMenuProduct:payload.checked?[...new Set([...state.sideMenuProduct,...[...state.product].filter(
              (item) =>
                ((item.petName === state.menuName || item.petName === "dog/cat") ||
                (item.productCategory === state.subMenuName) )&& (item.brand===payload.data)
            )])]:[...new Set([...state.sideMenuProduct].filter(
              (item) =>
                ((item.petName === state.menuName || item.petName === "dog/cat") ||
                (item.productCategory === state.subMenuName) )&& (item.brand!==payload.data)
            ))],
            originalSideMenuProduct:payload.checked?[...new Set([...state.sideMenuProduct,...[...state.product].filter(
              (item) =>
                ((item.petName === state.menuName || item.petName === "dog/cat") ||
                (item.productCategory === state.subMenuName) )&& (item.brand===payload.data)
            )])]:[...new Set([...state.sideMenuProduct].filter(
              (item) =>
                ((item.petName === state.menuName || item.petName === "dog/cat") ||
                (item.productCategory === state.subMenuName) )&& (item.brand!==payload.data)
            ))]
           
          };
        }
        case 'lifeStyle': {
          return {
            ...state,
             sideMenuProduct:payload.checked?[...new Set([...state.sideMenuProduct,...[...state.product].filter(
              (item) =>
                ((item.petName === state.menuName || item.petName === "dog/cat") ||
                (item.productCategory === state.subMenuName) )&& (item.lifeStyle===payload.data)
            )])]:[...new Set([...state.sideMenuProduct].filter(
              (item) =>
                ((item.petName === state.menuName || item.petName === "dog/cat") ||
                (item.productCategory === state.subMenuName) )&& (item.lifeStyle!==payload.data)
            ))],
            originalSideMenuProduct:payload.checked?[...new Set([...state.sideMenuProduct,...[...state.product].filter(
              (item) =>
                ((item.petName === state.menuName || item.petName === "dog/cat") ||
                (item.productCategory === state.subMenuName) )&& (item.lifeStyle===payload.data)
            )])]:[...new Set([...state.sideMenuProduct].filter(
              (item) =>
                ((item.petName === state.menuName || item.petName === "dog/cat") ||
                (item.productCategory === state.subMenuName) )&& (item.lifeStyle!==payload.data)
            ))]
           
          };
        }
        case 'petSize': {
          return {
            ...state,
             sideMenuProduct:payload.checked?[...new Set([...state.sideMenuProduct,...[...state.product].filter(
              (item) =>
                ((item.petName === state.menuName || item.petName === "dog/cat") ||
                (item.productCategory === state.subMenuName) )&& (item.petSize===payload.data)
            )])]:[...new Set([...state.sideMenuProduct].filter(
              (item) =>
                ((item.petName === state.menuName || item.petName === "dog/cat") ||
                (item.productCategory === state.subMenuName) )&& (item.petSize!==payload.data)
            ))],
            originalSideMenuProduct:payload.checked?[...new Set([...state.sideMenuProduct,...[...state.product].filter(
              (item) =>
                ((item.petName === state.menuName || item.petName === "dog/cat") ||
                (item.productCategory === state.subMenuName) )&& (item.petSize===payload.data)
            )])]:[...new Set([...state.sideMenuProduct].filter(
              (item) =>
                ((item.petName === state.menuName || item.petName === "dog/cat") ||
                (item.productCategory === state.subMenuName) )&& (item.petSize!==payload.data)
            ))]
           
          };
        }
        case 'material': {
          return {
            ...state,
             sideMenuProduct:payload.checked?[...new Set([...state.sideMenuProduct,...[...state.product].filter(
              (item) =>
                ((item.petName === state.menuName || item.petName === "dog/cat") ||
                (item.productCategory === state.subMenuName) )&& (item.material===payload.data)
            )])]:[...new Set([...state.sideMenuProduct].filter(
              (item) =>
                ((item.petName === state.menuName || item.petName === "dog/cat") ||
                (item.productCategory === state.subMenuName) )&& (item.material!==payload.data)
            ))],
            originalSideMenuProduct:payload.checked?[...new Set([...state.sideMenuProduct,...[...state.product].filter(
              (item) =>
                ((item.petName === state.menuName || item.petName === "dog/cat") ||
                (item.productCategory === state.subMenuName) )&& (item.material===payload.data)
            )])]:[...new Set([...state.sideMenuProduct].filter(
              (item) =>
                ((item.petName === state.menuName || item.petName === "dog/cat") ||
                (item.productCategory === state.subMenuName) )&& (item.material!==payload.data)
            ))]
           
          };
        }
        default: {
          return state
          }
      }
      
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
      //localStorage.removeItem("localCart"); 
      return {
        ...state,
         cart:[...payload.data] 
       
        
      };
    }
    case "removeCart": {
      localStorage.removeItem("localCart");  
     //localStorage.removeItem("localCart"); 
     return {
       ...state,
        cart:[] 
      
       
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
    case "setSingleOrder": {
      
      return {
        ...state,
        singleOrder:payload.data
        
      };
    }
    default: {
      return state;
    }
  }
};