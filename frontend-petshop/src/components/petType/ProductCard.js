import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

import { TbBasketOff, TbBasket } from "react-icons/tb";

import { BsHeartFill, BsHeart } from "react-icons/bs";
import { StoreContext } from "../../context/StoreContext.js";

export default function ProductCard({ product }) {
  const navigate = useNavigate();
  const { productDispatch, productState, homepageState, homepageDispatch } =
    useContext(StoreContext);
  const { user } = homepageState;
  const { favoriteProduct, cart } = productState;

  useEffect(() => {
    user &&
      productDispatch({
        type: "setFavoriteProduct",
        payload: { data: [...user.favoriteProduct] },
      });
  }, [user]);
  //event handler :FavoriteProductHandler
  const FavoriteProductHandler = async (e) => {
    e.stopPropagation();
    if (user) {
      let data = new FormData();
      data.append("firstName", user.firstName);
      data.append("lastName", user.lastName);
      data.append("email", user.email);
      //password not want to update then old password has been taken
      data.append("password", user.password);
      data.append("profileImage", user.profileImage);

      if (user.favoriteProduct.includes(product._id)) {
        //toast.error("product is already there in favorite");
        data.append("favoriteProduct", product._id);
      } else {
        data.append("favoriteProduct", product._id);
      }
      //  for (let key of data.values())
      // {

      //   console.log(key)
      //   }
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
            toast.error(result.message);
          }
        });
    } else {
      toast.error("Please Login to add favorite items");

      setTimeout(() => {
        navigate("/login");
      }, 2000);
    }
  };

  //event handler to handle Cart click
  const handleCartClick = (e) => {
    e.stopPropagation();
    cart.map((item) => item._id).includes(product._id)
      ? toast.error("product is exists in the Cart")
      : productDispatch({
          type: "setCart",
          payload: { data: product },
        });
  };

  const deleteCartItem = (e) => {
    e.stopPropagation();
    productDispatch({
      type: "resetCart",
      payload: { data: [...cart].filter((item) => item._id !== product._id) },
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

  //event handler to navigate to single product page

  const showProductClick = (e) => {
    //console.log(product)
    productDispatch({
      type: "setSingleProduct",
      payload: { data: product },
    });

    navigate("/product");
  };
  return (
    <div
      onClick={showProductClick}
      className="flex flex-col border w-[350px] sm:w-[300px] h-[300px] md:h-[300px] bg-orange-400/50 box-border rounded-lg p-5 m-2 relative "
    >
      <Toaster />
      {product.sale && (
        <p
          className={`absolute top-[-.25rem] left-[-.25rem]  text-white bg-red-500 p-3 rounded-br-2xl `}
        >
          Sale
        </p>
      )}

      {cart && user.role === "admin" ? null : cart
          .map((item) => item._id)
          .includes(product._id) ? (
        <TbBasket
          onClick={deleteCartItem}
          className={`absolute top-10 right-3 text-3xl text-green-700 hover:text-green-700/75 hover:text-4xl `}
        />
      ) : (
        <TbBasketOff
          onClick={handleCartClick}
          className={`absolute top-10 right-3 text-3xl text-orange-700 hover:text-orange-700/75 hover:text-4xl`}
        />
      )}

      {user && user.role === "user" ? (
        user?.favoriteProduct?.includes(product._id) ? (
          <BsHeartFill
            onClick={FavoriteProductHandler}
            className={`absolute top-3 right-4 text-2xl text-orange-700 hover:text-orange-700/75 hover:text-3xl `}
          />
        ) : (
          <BsHeart
            onClick={FavoriteProductHandler}
            className={`absolute top-3 right-4 text-2xl text-orange-700 hover:text-orange-700/75 hover:text-3xl`}
          />
        )
      ) : null}

      <img
        src={product.productImage}
        alt="card-pic"
        className="w-[50%] h-[150px] mb-1 text-center mx-auto rounded-lg shadow-md shadow-gray-500"
      />
      <p className="text-sm  text-gray-500">
        {product.brand} - {product.petName}
      </p>
      <p className="font-bold text-sm ">{product.productName}</p>
      <p className="text-xs my-1">{product.productCharacter}</p>
      <div className="flex justify-center items-center ">
        {product.sale ? (
          <p className="border w-[80%] flex justify-center items-center rounded-lg bg-red-500 absolute bottom-0 mb-2 hover:border-2 hover:border-orange-300  hover:bg-orange-400/50">
            $ {product.price}
          </p>
        ) : (
          <p className="border w-[80%] flex justify-center items-center rounded-lg bg-orange-200 absolute bottom-0 mb-2 hover:border-2 hover:border-orange-400  hover:bg-orange-400/50">
            $ {product.price}
          </p>
        )}
      </div>
    </div>
  );
}
