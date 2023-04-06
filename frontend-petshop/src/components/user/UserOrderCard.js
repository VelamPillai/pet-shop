import React, {  useContext } from 'react'
import {useNavigate} from 'react-router-dom'
import { GiCancel } from "react-icons/gi";
import { StoreContext } from "../../context/StoreContext";


export default function UserOrderCard() {

    const navigate = useNavigate();
    
    const {  productState } = useContext(StoreContext);
    const { singleOrder } = productState;
   
    const cancelHandler = (e) => {
        e.preventDefault();
        navigate('/orders')
    }
   
   
    return (
        <>
            
            <div className='mt-2 flex justify-around'><p><span className='text-orange-500 font-bold mr-5'>Order No:</span>{singleOrder._id}</p>
            <GiCancel className="text-white bg-red-500 border-red-500 p-1 rounded-full  text-3xl cursor-pointer" onClick={ cancelHandler} /></div>
            <div className='mt-1 flex justify-center item-center cursor-pointer '>
                <div className='w-[400px] bg-orange-200/50 p-2 rounded-xl'>
                     <p><span className='text-orange-500 font-bold mr-5'>Date:</span>{singleOrder.orderedDate.slice(0, 10)} </p>
                    <p><span className='text-orange-500 font-bold mr-5'>Price:</span>{singleOrder.totalPrice}</p>
                    <p><span className='text-orange-500 font-bold mr-5'>Status:</span>{singleOrder.status}</p>
                    <p><span className='text-orange-500 font-bold mr-5'>Carrier:</span>{singleOrder.carrier}</p>
                    <p><span className='text-orange-500 font-bold mr-5'>Products:</span></p>
                    <ul className='flex flex-col md:flex-row '>
                    {singleOrder.items.map((item, idx) => {
                      return (<li key={idx} className='ml-2 border-black border-2 flex justify-center items-center p-1 flex-col' >
                        <p>{item.productName}</p>
                        <img src={item.productImage} className='w-[50px] h-[50px]' alt='productPic'/>
      
                      </li>)
                    })}
                    </ul>  
                   
                    </div>
      
            </div> 

            </>
  )
}
