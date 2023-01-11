/* import { Navigate } from "react-router-dom";
import toast, { Toaster } from 'react-hot-toast'; */


/* const registerUser = (e) => {
    
    
    const data = new FormData(e.target);
    console.log(e.target)
    //post newUser to server
    fetch('http://localhost:8000/users/signup', { method: 'POST', body: data })
      .then((res) => res.json())
      .then((result) => {
        if (result.success) {
          let name = result.data.firstName.concat(' ', result.data.lastName);
          toast.success(`Hallo ${name} ! Welcome to Pet-Store`);
            setTimeout(() => {
              return <Navigate to='/login' replace={true} />
          }, 2000);
        } else {
          if (Array.isArray(result.message)) {
            const errMessage = result.message.reduce(
              (overallError, errItem) => (overallError += ` * ${errItem}  \n `),
              ''
            );
            console.log(result.message);
            toast.error(`${errMessage}`);
          } else {
            toast.error(result.message);
            //console.log(result)
          }
        }
      }); 
  }; */


  //file to binary
  const toBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });

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
        /* case 'signup': {          
              
            return registerUser(payload.data)
        } */
        default:
            return state
    }
 
}
