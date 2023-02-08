import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";

import toast, { Toaster } from "react-hot-toast";

import { StoreContext } from "../../context/StoreContext";

//file to binary
const toBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
export default function UpdateProduct() {
  const navigate = useNavigate();
  const { adminState, adminDispatch, productDispatch } =
    useContext(StoreContext);

  const { product } = adminState;

  const updateProduct = async (e) => {
    e.preventDefault();
    let formData = new FormData(e.target);
    let data = new FormData();

    let productImage =
      formData.get("productImage").size > 0
        ? await toBase64(formData.get("productImage"))
        : product.productImage;

    data.append("petName", e.target.petName.value);
    data.append("productName", e.target.productName.value);
    data.append("description", e.target.description.value);
    data.append("price", e.target.price.value);
    data.append("brand", e.target.brand.value);
    data.append("petSize", e.target.petSize.value);
    data.append("lifeStyle", e.target.lifeStyle.value);
    data.append("productCategory", e.target.productCategory.value);
    data.append("material", e.target.material.value);
    data.append("productCharacter", e.target.productCharacter.value);
    data.append("sale", e.target.sale.value);
    data.append("productArrival", e.target.productArrival.value);
    data.append("productImage", productImage);

    adminDispatch({ type: "clearForm" });

    fetch(` /products/${product._id}`, {
      method: "PATCH",
      headers: { token: localStorage.getItem("token") },
      body: data,
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.success) {
          productDispatch({
            type: "setProduct",
            payload: { data: result.data },
          });

          toast.success(`Product updated!!!`);
          setTimeout(() => navigate("/displayProduct"), 1000);
        } else {
          if (Array.isArray(result.message)) {
            const errMessage = result.message.reduce(
              (overallError, errItem) => (overallError += ` * ${errItem}  \n `),
              " "
            );
            toast.error(`${errMessage}`);
          } else {
            toast.error(result.message.message);
          }
        }
      });
  };

  return (
    <div>
      <div className="flex justify-center items-center flex-wrap flex-col xl:flex-row  lg:border m-auto rounded shadow-black shadow-xs mt-[3rem]  sm:mt-[1rem]">
        <Toaster />

        <p className="  font-bold text-center text-shadow">Update Product</p>

        <form
          onSubmit={updateProduct}
          className=" grid  sm:grid-cols-3 justify-center items-center w-[100%]"
        >
          <label className="flex flex-col  justify-center item-center text-xs  sm:text-md  sm:items-start m-[.25rem]  ">
            Pet Name :{" "}
            <input
              className="border border-slate-200 rounded w-[150px]  sm:w-[200px] lg:w-[300px] h-[50px] "
              type="text"
              name="petName"
              /* onChange={(e) => adminDispatch({
              type: "onChange",
              payload: { name: e.target.name, data: e.target.value }
            })
            }*/
              defaultValue={product.petName}
            />
          </label>
          <label className="flex flex-col justify-center item-center text-xs  sm:text-md  sm:items-start m-[.25rem]  ">
            Product Name :{" "}
            <input
              type="text"
              name="productName"
              className="border border-slate-200 rounded w-[150px]    sm:w-[200px] lg:w-[300px] h-[50px] "
              /* onChange={(e) => adminDispatch({
              type: "onChange",
              payload: { name: e.target.name, data: e.target.value }
            })
            }
             */
              defaultValue={product.productName}
            />
          </label>
          <label className="flex flex-col justify-center item-center text-xs  sm:text-md  sm:items-start m-[.25rem]  ">
            Description :{" "}
            <input
              className="border border-slate-200 rounded w-[150px]  sm:w-[200px] lg:w-[300px] h-[50px] "
              type="text"
              name="description"
              /* onChange={(e) => adminDispatch({
              type: "onChange",
              payload: { name: e.target.name, data: e.target.value }
            })}
            value={adminState.email} */
              defaultValue={product.description}
            />
          </label>
          <label className="flex flex-col justify-center item-center text-xs  sm:text-md   sm:items-start m-[.25rem]  ">
            Price:{" "}
            <input
              className="border border-slate-200 rounded w-[150px]   sm:w-[200px] lg:w-[300px] h-[50px] "
              type="number"
              step="0.01"
              name="price"
              /* onChange={(e) => adminDispatch({
              type: "onChange",
              payload: { name: e.target.name, data: e.target.value }
            })}
            value={adminState.password} */
              defaultValue={product.price}
            />
          </label>
          <label className="flex flex-col justify-center item-center text-xs  sm:text-md  sm:items-start m-[.25rem]  ">
            Brand:{" "}
            <input
              className="border border-slate-200 rounded w-[150px]  sm:w-[200px] lg:w-[300px] h-[50px] "
              type="text"
              name="brand"
              /* onChange={(e) => adminDispatch({
              type: "onChange",
              payload: { name: e.target.name, data: e.target.value }
            })}
            value={adminState.email} */
              defaultValue={product.brand}
            />
          </label>
          <label className="flex flex-col justify-center item-center text-xs  sm:text-md  sm:items-start m-[.25rem]  ">
            Pet Size :{" "}
            <select
              className="border border-slate-200 rounded w-[150px] lg:w-[300px]  sm:w-[200px] h-[50px] "
              name="petSize"
              /* onChange={(e) => adminDispatch({
              type: "onChange",
              payload: { name: e.target.name, data: e.target.value }
            })}
            value={adminState.email} */
              defaultValue={product.petSize}
            >
              {" "}
              <option value="all">all</option>
              <option value="small">Small</option>
              <option value="medium">medium</option>
              <option value="large">large</option>
            </select>
          </label>
          <label className="flex flex-col justify-center item-center text-xs  sm:text-md  sm:items-start m-[.25rem]  ">
            Life Style :{" "}
            <select
              className="border border-slate-200 rounded w-[150px]  sm:w-[200px] lg:w-[300px] h-[50px] "
              name="lifeStyle"
              /* onChange={(e) => adminDispatch({
              type: "onChange",
              payload: { name: e.target.name, data: e.target.value }
            })}
            value={adminState.email} */
              defaultValue={product.lifeStyle}
            >
              {" "}
              <option value="all">all</option>
              <option value="puppy">puppy</option>
              <option value="adult">adult</option>
              <option value="senior">senior</option>
            </select>
          </label>
          <label className="flex flex-col justify-center item-center text-xs  sm:text-md  sm:items-start m-[.25rem]  ">
            Product Category :{" "}
            <select
              className="border border-slate-200 rounded w-[150px]  sm:w-[200px] lg:w-[300px] h-[50px] "
              name="productCategory"
              /* onChange={(e) => adminDispatch({
              type: "onChange",
              payload: { name: e.target.name, data: e.target.value }
            })}
            value={adminState.email} */
              defaultValue={product.productCategory}
            >
              {" "}
              <option value="food">food</option>
              <option value="pharmacy">pharmacy</option>
              <option value="toys">toys</option>
              <option value="treats">treats</option>
              <option value="homes">homes</option>
              <option value="care">care</option>
              <option value="supplements">supplements</option>
            </select>
          </label>
          <label className="flex flex-col justify-center item-center text-xs  sm:text-md  sm:items-start m-[.25rem]  ">
            Material :{" "}
            <select
              className="border border-slate-200 rounded w-[150px]  sm:w-[200px] lg:w-[300px] h-[50px] "
              name="material"
              /* onChange={(e) => adminDispatch({
              type: "onChange",
              payload: { name: e.target.name, data: e.target.value }
            })}
            value={adminState.email} */
              defaultValue={product.material}
            >
              {" "}
              <option value="na">-NA-</option>
              <option value="rubber">rubber</option>
              <option value="polyester">polyester</option>
              <option value="push">push</option>
              <option value="nylon">nylon</option>
            </select>
          </label>
          <label className="flex flex-col justify-center item-center text-xs  sm:text-md  sm:items-start m-[.25rem]  ">
            Product Character :{" "}
            <div className="flex flex-row">
              <input
                type="text"
                name="productCharacter"
                className="border border-slate-200 rounded w-[150px]  sm:w-[200px] h-[50px] "
                defaultValue={product.productCharacter}
              />
              {/* <button className="w-[50px]  bg-orange-500    rounded shadow-black shadow-md hover:bg-green-600  sm:ml-1 h-[50px] lg:box-content">
                +
              </button> */}
            </div>
          </label>
          <label className="fleconst product = await productCollection.find();x flex-col justify-center item-center text-xs  sm:text-md  sm:items-start m-[.25rem]  ">
            Sale :{" "}
            <select
              className="border border-slate-200 rounded w-[150px] sm:w-[200px] lg:w-[300px] h-[50px] "
              name="sale"
              /* onChange={(e) => adminDispatch({
              type: "onChange",
              payload: { name: e.target.name, data: e.target.value }
            })}
            value={adminState.email} */
              defaultValue={product.sale}
            >
              {" "}
              <option value="false">False</option>
              <option value="true">true</option>
            </select>
          </label>
          <label className="flex flex-col justify-center item-center text-xs  sm:text-md  sm:items-start m-[.25rem]  ">
            Product Arrival :{" "}
            <select
              className="border border-slate-200 rounded w-[150px]  sm:w-[200px] lg:w-[300px] h-[50px] "
              name="productArrival"
              /* onChange={(e) => adminDispatch({
              type: "onChange",
              payload: { name: e.target.name, data: e.target.value }
            })}
            value={adminState.email} */
              defaultValue={product.productArrival}
            >
              {" "}
              <option value="new">New</option>
              <option value="old">Old</option>
            </select>
          </label>

          <label className="flex flex-col justify-center item-center text-xs  sm:text-md  sm:items-start m-[.25rem]  ">
            Product Image:{" "}
            {product.productImage && (
              <img
                src={product.productImage}
                width="100px"
                alt="productImage"
              />
            )}
            <input
              className="border border-slate-200 rounded w-[150px]  sm:w-[200px] lg:w-[300px] h-[50px] "
              type="file"
              name="productImage"
              /* onChange={(e) => {             
              
                adminDispatch({
              type: "onChange",
              payload: { name: e.target.name, data: e.target.files[0] }/* for image file  */
              /*  })
            }
          } */
            />
          </label>
          <button className="bg-orange-500 justify-center items-center w-[200px]  sm:w-[300px]  my-3  sm:mx-auto  sm:my-[1rem]  sm:p-1 rounded shadow-black shadow-md hover:bg-green-600  h-[30px] lg:box-content">
            UpdateProduct
          </button>
        </form>
      </div>
    </div>
  );
}
