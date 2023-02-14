import React, { useContext, useState, useEffect } from "react";
import { MdUnfoldLess, MdUnfoldMore } from "react-icons/md";
import { useNavigate } from "react-router-dom";

import { StoreContext } from "../../context/StoreContext.js";


const lifeStyle = ["all", "puppy", "adult", "senior"];
const petSize = ['all', 'small', 'medium', 'large'];
const material = ['rubber', 'polyester', 'push', 'nylon']

export default function SideMenu() {
  const navigate = useNavigate();
  const [btn, setBtn] = useState(false);

  const { productState, productDispatch } = useContext(StoreContext);

  const {
    product,
    menuName,
    sideMenuBrand,
    subMenuName,
    sideMenuProduct,
    originalProduct,
  } = productState;

 /*  useEffect(() => {
    
  }, [menuName]); */
  useEffect(() => {
    setBtn(false);
    let sideMenuProduct = "";
    let sideMainProduct = "";
    product &&
      (sideMainProduct = [...product].filter(
        (item) => item.petName === menuName || item.petName === "dog/cat"
      ));
    product &&
      subMenuName &&
      (sideMenuProduct = [...product].filter(
        (item) =>
          (item.petName === menuName || item.petName === "dog/cat") &&
          item.productCategory === subMenuName
      ));

    product && subMenuName
      ? productDispatch({
          type: "setSideMenuBrand",
          payload: {
            data: [...new Set([...sideMenuProduct].map((item) => item.brand))],
          },
        })
      : productDispatch({
          type: "setSideMenuBrand",
          payload: {
            data: [...new Set([...sideMainProduct].map((item) => item.brand))],
          },
        });
  }, []);

  const handleBtnClick = (value) => {
    //e.stopPropagate();
    console.log('brandbtn',btn)
     value === "brand" &&  setBtn((btn) => !btn);
    value === "lifeStyle" && setBtn(true)
  };

  //handleSideMenuClick
  const handleSideMenuClick = (e) => {
    if (e.target.checked) {
      console.log(e.target.checked);
      productDispatch({
        type: "setSideMenuProduct",
        payload: { data: e.target.value, checked: true, name: e.target.name },
      });
      navigate("/petSideMenuPage");
    } else {
      if (sideMenuProduct) {
        productDispatch({
          type: "setProduct",
          payload: { data: originalProduct },
        });
        if (menuName && subMenuName) {
          navigate("/petSubMenuPage");
        } else {
          navigate("/petMainPage");
        }
      } else {
        productDispatch({
          type: "setSideMenuProduct",
          payload: {
            data: e.target.value,
            checked: false,
            name: e.target.name,
          },
        });
        navigate("/petSideMenuPage");
      }
    }
  };
  console.log(menuName, subMenuName);

  return (
    <div className="border-2 m-1 p-5 rounded-lg bg-orange-100 ">
      <div>
      <p className="font-bold text-lg m-2 text-shadow text-orange-600 flex justify-center">
        Brand
      </p>
      <div>
        {sideMenuBrand &&
          sideMenuBrand.map(
            (item, idx) =>
              idx <= (btn ? sideMenuBrand.length : 2) && (
                <div key={idx}>
                  <input
                    onClick={handleSideMenuClick}
                    type="checkbox"
                    name="brand"
                    value={item}
                  />
                  <label className="ml-3">
                    {item[0].toUpperCase() + item.slice(1, item.length)}
                  </label>
                </div>
              )
          )}
       </div>
      <div className="flex justify-center ">
        <button
          className=" border bg-orange-500 p-1 rounded-md hover:bg-orange-400 m-2 shadow-lg shadow-black"
          onClick={()=>handleBtnClick('brand')}
        >
          {btn ? <MdUnfoldLess /> : <MdUnfoldMore />}
        </button>
        </div>
        </div>
      <p className="font-bold text-lg m-2 text-shadow text-orange-600 flex justify-center">
        Life Style
      </p>
      <div>
        {lifeStyle.map(
          (item, idx) =>
          (
              <div key={idx}>
                <input
                  onClick={handleSideMenuClick}
                  type="checkbox"
                  name="lifeStyle"
                  value={item}
                />
                <label className="ml-3">
                  {item[0].toUpperCase() + item.slice(1, item.length)}
                </label>
              </div>
            )
        )}
      </div>
      <p className="font-bold text-lg m-2 text-shadow text-orange-600 flex justify-center">
        Pet Size
      </p>
      <div>
        {petSize.map(
          (item, idx) =>
          (
              <div key={idx}>
                <input
                  onClick={handleSideMenuClick}
                  type="checkbox"
                  name="petSize"
                  value={item}
                />
                <label className="ml-3">
                  {item[0].toUpperCase() + item.slice(1, item.length)}
                </label>
              </div>
            )
        )}
      </div>
      {(subMenuName === "toys" || subMenuName === "homes") && (
      <div>
      <p className="font-bold text-lg m-2 text-shadow text-orange-600 flex justify-center">
        Material
      </p>
      <div>
        {material.map(
          (item, idx) =>
          (
              <div key={idx}>
                <input
                  onClick={handleSideMenuClick}
                  type="checkbox"
                  name="material"
                  value={item}
                />
                <label className="ml-3">
                  {item[0].toUpperCase() + item.slice(1, item.length)}
                </label>
              </div>
            )
        )}
          </div>
          </div>
      ) }
      
    </div>
  );
}
