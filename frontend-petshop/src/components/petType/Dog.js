import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import Sort from "./Sort";
import Petmenu from "./Petmenu";
import Sidemenu from "./Sidemenu";

export default function Dog() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col">
      <p className="flex justify-center items-center text-xl font-bold">Dog</p>

      <div>
        {/* dog menu */}
        <Petmenu />
      </div>
      <div className="flex flex-row justify-between m-3">
        {/* products */}
        <p>
          <span className="font-bold">2222</span> products
        </p>
        {/* search - drop down menu - filter */}
        <Sort />
      </div>
      <div>
        {/* side menu */}
              <div>
                  <Sidemenu />
                  
              </div>
              
        {/* products card */}
        <p>Display pf Products</p>
      </div>
      <div>Payment methods</div>
    </div>
  );
}
