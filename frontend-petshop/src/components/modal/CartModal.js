import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";

import toast, { Toaster } from "react-hot-toast";
import { StoreContext } from "../../context/StoreContext";

import { AiFillDelete } from "react-icons/ai";

export default function CartModal() {
  const navigate = useNavigate();

  const { homepageState, productState, productDispatch, homepageDispatch } =
    useContext(StoreContext);

  const { user } = homepageState;

  const { cart, product, showHideCartBtn, totalPrice } = productState;

  //hideModalHandler -
  const hideCartModalHandler = (e) => {
    productDispatch({ type: "setShowHideCartBtn" });
  };
  //deleteCartItem

  const deleteCartItem = (id) => {
    console.log("delete");
    productDispatch({
      type: "resetCart",
      payload: { data: [...cart].filter((item) => item._id !== id) },
    });

    cart.length === 1
      ? productDispatch({
          type: "setTotalPrice",
          payload: { data: 0 },
        })
      : productDispatch({
          type: "setTotalPrice",
          payload: {
            data: cart
              .reduce((acc, item) => (acc += item.price * item.quantity), 0)
              .toFixed(2),
          },
        });
  };

  //increase
  const increase = (id) => {
    console.log(id);
    const foundItem = cart.find((item) => item._id === id);
    foundItem.quantity++;
    productDispatch({
      type: "setTotalPrice",
      payload: {
        data: cart
          .reduce((acc, item) => (acc += item.price * item.quantity), 0)
          .toFixed(2),
      },
    });
    /*  setPrice(
      (price) =>
        (price = cart
          .reduce((acc, item) => (acc += item.price * item.quantity), 0)
          .toFixed(2))
    ); */
    productDispatch({
      type: "resetCart",
      payload: { data: [...cart] },
    });
  };

  //decrease

  const decrease = (id) => {
    const foundItem = cart.find((item) => item._id === id);
    if (foundItem.quantity === 1) {
      productDispatch({
        type: "resetCart",
        payload: { data: [...cart].filter((item) => item._id !== id) },
      });

      cart.length === 1 &&
        productDispatch({
          type: "setTotalPrice",
          payload: { data: 0 },
        });
    } else {
      foundItem.quantity--;
      productDispatch({
        type: "resetCart",
        payload: { data: [...cart] },
      });
      productDispatch({
        type: "setTotalPrice",
        payload: {
          data: cart
            .reduce((acc, item) => (acc += item.price * item.quantity), 0)
            .toFixed(2),
        },
      });
    }
  };

  //checkout handler
  const checkoutHandler = (e) => {
    e.stopPropagation();

    if (!user) {
      productDispatch({ type: "setShowHideCartBtn" });
      navigate("/login");
    } else {
      fetch(" /orders/addOrder", {
        method: "POST",
        headers: {
          token: localStorage.getItem("token"),
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          items: cart.map((item) => item._id),
          totalPrice: totalPrice,
          userId: user._id,
        }),
      })
        .then((res) => res.json())
        .then((result) => {
          if (result.success) {
            console.log(result.data);
            console.log(result.data._id);
            let data = new FormData();
            data.append("firstName", user.firstName);
            data.append("lastName", user.lastName);
            data.append("email", user.email);
            //password not want to update then old password has been taken
            data.append("password", user.password);
            data.append("profileImage", user.profileImage);
            user.favoriteProduct.length > 1 &&
              data.append("favoriteProduct", [...user.favoriteProduct]);
            data.append("ordersId", result.data._id);
            /* for (let key of data.keys())
            {
             
            console.log(key)
             } 
            for (let key of data.values())
             {
              
             console.log(key)
              }   */

            fetch(` /users/${user._id}`, {
              method: "PATCH",
              headers: { token: localStorage.getItem("token") },
              body: data,
            })
              .then((res) => res.json())
              .then((result) => {
                if (result.success) {
                  homepageDispatch({
                    type: "setUser",
                    payload: { data: result.data },
                  });
                } else {
                  toast.error(result.message.message);
                }
              });

            productDispatch({
              type: "resetCart",
              payload: { data: [] },
            });
            productDispatch({
              type: "setTotalPrice",
              payload: { data: 0 },
            });
            productDispatch({ type: "setShowHideCartBtn" });
          } else {
            console.log(result.message);
          }
        });
    } //else
  };

  return (
    <div
      className={`bg-orange-400 fixed right-[5px] height-[100vh]   sm:right-0  inset-y-0  z-50 w-[100%]  sm:w-[100%] ${
        showHideCartBtn ? "visible" : "invisible"
      }`}
    >
      <div className="flex h-[100%] text-[1.5rem]  justify-start align-top p-3 ">
        <p className="flex  mt-2 text-black-800 mr-[2rem] ">Cart</p>
        <div className="mt-3 flex flex-col right-20 absolute">
          <p className="  mt-5 text-black-800 text-sm  font-bold">
            No of Items : {cart.length}
          </p>
          <p className=" mt-5 text-black-800 text-sm font-bold ">
            Total Price : ${totalPrice}
          </p>
          <button
            onClick={checkoutHandler}
            className=" mt-5 text-black-800 text-sm font-bold border-1 border-black bg-black text-white p-3 shadow-white shadow-md hover:bg-white hover:text-black hover:shadow-lg hover:shadow-black"
          >
            Proceed to checkout
          </button>
        </div>

        <p
          onClick={hideCartModalHandler}
          className="top-0 right-10  sm:right-5 absolute cursor-pointer  text-black-500 text-[3rem]"
        >
          x
        </p>
        <div className="flex flex-col justify-center items-center top-[30%]  sm:top-10 absolute   sm:p-0">
          <ul className="flex flex-col p-3 ">
            {/*  {product &&
                product
                  .filter((item) => cart?.includes(item._id)) */}
            {cart &&
              cart.map((item) => {
                return (
                  <li
                    key={item._id}
                    className="shadow-lg border-black bg-gray-300/25 rounded-xl m-1 p-1 flex flex-row justify-between items-center"
                  >
                    <img
                      src={item.productImage}
                      alt="card-pic"
                      className=" w-[75px] h-[75px]  sm:w-[150px]  sm:h-[150px]  sm:mr-4 p-1"
                    />
                    <div className="w-[75px] h-[75px]  sm:w-[250px]  sm:h-[150px] mr-4  sm:p-1 ">
                      <p className="font-bold text-[10px]  sm:text-[.5rem] text-black-500  leading-3">
                        {item.productName}
                      </p>
                      <p className="font-bold text-[10px]  sm:text-[.5rem] text-black-500  leading-3">
                        {item.brand}
                      </p>
                    </div>
                    <div className="flex  sm:ml-4">
                      <button
                        onClick={() => increase(item._id)}
                        className="w-[25px] h-[50px]  sm:w-[50px] bg-orange-500 mr-1  sm:mr-5 shadow-md  shadow-black rounded-md"
                      >
                        +
                      </button>
                      <p className="text-md">{item.quantity}</p>
                      <button
                        onClick={() => decrease(item._id)}
                        className="w-[25px] h-[50px]  sm:w-[50px] bg-orange-500 ml-1  sm:ml-5 shadow-md rounded-md shadow-black"
                      >
                        {" "}
                        -
                      </button>
                    </div>

                    <p className="ml-1  sm:ml-[5rem] text-sm  ">
                      ${(item.quantity * item.price).toFixed(2)}
                    </p>
                    <AiFillDelete
                      onClick={(e) => deleteCartItem(item._id)}
                      className=" sm:mx-[6rem] text-red-900"
                    />
                  </li>
                );
              })}
          </ul>
        </div>
      </div>
    </div>
  );
}
