import React,{useContext} from "react";
import {useNavigate} from 'react-router-dom'

import toast, { Toaster } from "react-hot-toast";

import { StoreContext } from '../../context/StoreContext';




//file to binary
const toBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
export default function UpdateProduct() {
  //const navigate = useNavigate();
  const { adminState, productDispatch} = useContext(StoreContext);
  
  const { product } = adminState;

  return (
    <div>{ product.petName}</div>
  )
}
