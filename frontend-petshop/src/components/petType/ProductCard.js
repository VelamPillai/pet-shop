import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

import { BsHeartFill, BsHeart } from "react-icons/bs";
import { StoreContext } from "../../context/StoreContext.js";

export default function ProductCard({ product }) {
  const navigate = useNavigate();
  const { productDispatch, productState, homepageState, homepageDispatch } =
    useContext(StoreContext);
  const { user } = homepageState;
  const { favoriteProduct } = productState;

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
      className="flex flex-col border w-[250px] 2xl:w-[300px] h-[375px]  sm:h-[350px] bg-orange-100/50 box-border rounded-lg p-1 m-1 relative  "
    >
      <Toaster />
      {product.sale && (
        <p
          className={`absolute top-2 left-2  text-white bg-red-500 p-4 rounded-br-2xl `}
        >
          Sale
        </p>
      )}
      {user && user.role === "user" ? (
        user?.favoriteProduct?.includes(product._id) ? (
          <BsHeartFill
            onClick={FavoriteProductHandler}
            className={`absolute top-3 right-4 text-xl text-orange-700 hover:text-orange-700/75 hover:text-2xl `}
          />
        ) : (
          <BsHeart
            onClick={FavoriteProductHandler}
            className={`absolute top-3 right-4 text-xl text-orange-700 hover:text-orange-700/75 hover:text-2xl`}
          />
        )
      ) : null}

      <img
        src={product.productImage}
        alt="card-pic"
        className="w-[100%] h-[150px] mb-1"
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
