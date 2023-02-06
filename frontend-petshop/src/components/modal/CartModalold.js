 import React, { useContext,useState ,useRef} from "react";

import { StoreContext } from "../../context/StoreContext";

import { AiFillDelete } from "react-icons/ai";


export default function CartModal() {

    
    const [price, setPrice] = useState(0);
    const [quantityVal, setquantityVal] = useState(1);
  
  const { homepageState, productState ,productDispatch} = useContext(StoreContext);
 
  
    const { user } = homepageState;
    
  const { orderCart, cart, product, showHideCartBtn } = productState;
  console.log('cart component',cart)
    //hideModalHandler -
    const hideCartModalHandler = (e) => {
        productDispatch({type:"setShowHideCartBtn"})
  }; 
  //deleteCartItem
    
    const deleteCartItem = (id) => {
        console.log(id)
        
        /*  productDispatch({
             type: 'resetCart',
             payload:{data: [...cart].filter(item=>item!==id)}
           })  */
                
    }
    //increaseQuantity
    const increaseQuantity = (e) => {
        console.log(e.target)
     /*  productDispatch({
        type:"setOrderCart",
        payload:{data:id}
      }) */
      //setquantityVal((quantity)=>quantity+=1)
    } 
        //decreaseQuantity
    const decreaseQuantity = (e) => {
            console.log(e.target)
         /*  productDispatch({
            type:"resetOrderCart",
            payload:{data:[...orderCart].filter(item=>item!==id)}
          }) */
          //setquantityVal((quantity)=>quantity-=1)
        } 

  return (
    
          <div className={`bg-orange-400 fixed right-[5px] height-[100vh] md:right-0  inset-y-0  z-50 w-[100%] md:w-[100%] ${ showHideCartBtn? 'visible':'invisible'}`}>
          <div className="flex h-screen text-[1.5rem]  justify-start align-top p-3 ">
              <div className="flex flex-row "> <p className="flex  mt-2 text-black-800 mr-[2rem] ">Cart</p>
                  <p className="  mt-5 text-black-800 text-sm ">No of Items : {cart.length}</p>
                  <p className="ml-[30rem] mt-5 text-black-800 text-sm font-bold ">Total Price  : ${price}</p>
              </div>
         
          <p
            onClick={hideCartModalHandler}
            className="top-0 right-5 absolute cursor-pointer  text-black-500 text-[3rem]"
          >
            x
          </p>
          <div className="flex flex-col justify-center items-center  top-10 absolute p-5 md:p-0">
            <ul className="flex flex-col p-3 ">
               {/* product &&
                product
                  .filter((item) => cart?.includes(item._id))  */
                  cart.map((item) => {
                    return (
                      <li
                        key={item._id}
                        className="shadow-lg border-black bg-gray-300/25 rounded-xl m-1 p-1 flex flex-row justify-center items-center"
                      >
                         <img
                          src={item.productImage}
                          alt="card-pic"
                          className=" w-[75px] h-[75px] md:w-[150px] md:h-[150px] mr-4 p-1"
                        /> 
                        <div>
                          
                          <p className="font-bold text-[.5rem] md:text-[.75rem] text-black-500">
                            {item.productName}
                                </p>
                                <p className="font-bold text-[.5rem] md:text-[.5rem] text-gray-800">
                            {item.brand}
                                </p> 
                                
                            </div>
                            <div className="flex ml-[4rem]">
                            <button className="w-[50px] bg-orange-500 mr-5 shadow-md rounded-md shadow-black"> +</button>
                <p>{item.quantity}</p>
                                    <button   className="w-[50px] bg-orange-500 ml-5 shadow-md rounded-md shadow-black"> -</button>
                            </div>
                            
                            <p className="ml-[12rem] text-sm ">${ item.price}</p>
                            <AiFillDelete onClick={() => deleteCartItem(item._id)} className="mx-[6rem] text-red-900" />
                            
                      </li>
                    );
                  })}
            </ul>
          </div>
        </div>
      </div>
    
  );
}
 