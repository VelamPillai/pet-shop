export const adminReducer = (state, action) => {
    const { type, payload } = action;
    switch (type) {
      case "setProduct": {
        return {
         
        };
      }
      
      case 'clearForm': {
        return {
            ...state,
           
            petName: '',
            productName: '',
            description: '',
            price: '',
            brand: '',
            petSize: '',
            lifeStyle: '',
            productCategory: '',
            material: '',
            productCharacter: '',
            sale: '',
            productArrival: '',
            productImage:''
            
            

        
            
            
            

        }
        }
      default: {
        return state;
      }
    }
  };
  