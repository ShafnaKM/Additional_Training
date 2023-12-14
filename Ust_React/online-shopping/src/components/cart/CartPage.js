import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import AddCartItemsPage from "./AddCartItemsPage";
import ViewCartPage from "./ViewCartPage";

const CartPage = () => {
  let [cartList, updateCartList] = useState();
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <Routes>
              <Route
                path="/add-cart"
                element={<AddCartItemsPage updateCartList={updateCartList} />}
              />
              <Route
                path="/view-cart"
                element={<ViewCartPage cartList={cartList} />}
              />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
