
import React, { useContext,useState,useEffect } from "react";

import { StoreContext } from "../../context/StoreContext";

import { AiFillDelete } from "react-icons/ai";


export default function CartModal() {

    const [price, setPrice] = useState(0);
    
  
  const { homepageState, productState ,productDispatch} = useContext(StoreContext);
 
  
    const { user } = homepageState;
    
  const { cart, product, showHideCartBtn } = productState;
  
 

    //hideModalHandler -
    const hideCartModalHandler = (e) => {
        productDispatch({type:"setShowHideCartBtn"})
  }; 
  //deleteCartItem
    
    const deleteCartItem = (id) => {
        console.log('delete')
         productDispatch({
             type: 'resetCart',
             payload:{data: [...cart].filter(item=>item._id!==id)}
         }) 
      console.log(cart.length)
       cart.length === 1 ? setPrice(0):
         setPrice((price)=>price=cart.reduce(
          (acc, item) => (acc += item.price * item.quantity),
          0
        ).toFixed(2))
                
    }
  
  //increase
  const increase = (id) => {
    console.log(id)
    const foundItem = cart.find((item) => item._id === id);
    foundItem.quantity++;
    setPrice((price)=>price=cart.reduce(
      (acc, item) => (acc += item.price * item.quantity),
      0
    ).toFixed(2))
    productDispatch({
      type: 'resetCart',
      /* payload:{data: [...([...cart].filter(item=>item._id!==id)),foundItem]} */
      payload:{data:[...cart]}
    }) 
   
  }
  
  //decrease

  const decrease = (id) => {
    const foundItem = cart.find((item) => item._id === id);
    if (foundItem.quantity === 1) {
      productDispatch({
        type: 'resetCart',        
        payload:{data:[...cart].filter(item=>item._id!==id)}
      }) 
      console.log(cart.length)
      cart.length === 1 && setPrice(0)
      
    } else {
      foundItem.quantity--;
      productDispatch({
        type: 'resetCart',        
        payload:{data:[...cart]}
      })  
      setPrice((price)=>price=cart.reduce(
        (acc, item) => (acc += item.price * item.quantity),
        0
      ).toFixed(2))
    }
    
     
  }

  return (
    
    <div className={`bg-orange-400 fixed right-[5px] height-[100vh]  md:right-0  inset-y-0  z-50 w-[100%] md:w-[100%] ${showHideCartBtn ? 'visible' : 'invisible'}`}>
      
      <div className="flex h-screen text-[1.5rem]  justify-start align-top p-3 ">
      <p className="flex  mt-2 text-black-800 mr-[2rem] ">Cart</p>
              <div className="flex flex-row "> 
                  <p className="  mt-5 text-black-800 text-sm  font-bold">No of Items : {cart.length}</p>
                  <p className="ml-[15rem] mt-5 text-black-800 text-sm font-bold ">Total Price  : ${price}</p>
              </div>
         
          <p
            onClick={hideCartModalHandler}
            className="top-0 right-5 absolute cursor-pointer  text-black-500 text-[3rem]"
          >
            x
          </p>
          <div className="flex flex-col justify-center items-center  top-10 absolute p-5 md:p-0">
            <ul className="flex flex-col p-3 ">
             {/*  {product &&
                product
                  .filter((item) => cart?.includes(item._id)) */}
                 { cart && cart.map((item) => {
                    return (
                      <li
                        key={item._id}
                        className="shadow-lg border-black bg-gray-300/25 rounded-xl m-1 p-1 flex flex-row justify-between items-center"
                      >
                        <img
                          src={item.productImage}
                          alt="card-pic"
                          className=" w-[75px] h-[75px] md:w-[150px] md:h-[150px] mr-4 p-1"
                        />
                        <div className="w-[75px] h-[75px] md:w-[250px] md:h-[150px] mr-4 p-1">
                          
                          <p className="font-bold text-[.5rem] md:text-[.5rem] text-black-500 ">
                            {item.productName}
                                </p>
                                <p className="font-bold text-[.5rem] md:text-[.5rem] text-gray-800">
                            {item.brand}
                                </p>
                                
                            </div>
                            <div className="flex ml-4">
                                    <button onClick={()=>increase(item._id)} className="w-[50px] bg-orange-500 mr-5 shadow-md  shadow-black rounded-md">+</button>
                                    <p>{item.quantity}</p>
                                    <button onClick={()=>decrease(item._id)} className="w-[50px] bg-orange-500 ml-5 shadow-md rounded-md shadow-black"> -</button>
                            </div>
                            
                            <p className="ml-[5rem] text-sm ">${(item.quantity * item.price).toFixed(2)}</p>
                            <AiFillDelete onClick={(e) => deleteCartItem(item._id)} className="mx-[6rem] text-red-900" />
                            
                      </li>
                    );
                  })}
            </ul>
          </div>
        </div>
      </div>
    
  );
}