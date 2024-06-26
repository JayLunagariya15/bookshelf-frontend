import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Layout from "./Layout";
import { getCart } from "./cartHelpers";
import Card from "./Card";
import Checkout from "./Checkout";

const Cart = () => {
  const [items, setItems] = useState([]);
  const [run, setRun] = useState(false);

  const noItemsMessage = () => {
    return (
      <div>
        <h2 className="bg-red-500 w-fit px-4 rounded text-white">
          Your cart is empty
        </h2>
        <br />
        <Link to="/shop" className="text-blue-500 hover:text-blue-700">
          Start Shopping Now!
        </Link>
      </div>
    );
  };

  const showItems = (items) => {
    return (
      <div>
        <h2 className="font-bold">Your Cart Has {`${items.length}`} Items</h2>
        <hr />
        {items.map((p, i) => (
          <Card
            key={i}
            product={p}
            showAddToCartButton={false}
            cartUpdate={true}
            showRemoveProductButton={true}
            setRun={setRun}
            run={run}
          />
        ))}
      </div>
    );
  };

  useEffect(() => {
    setItems(getCart());
  }, [run]);

  return (
    <Layout
      title="My Cart"
      description="Manage your cart items. Add, Remove, Checkout or Continue Shopping"
      className="container-fluid"
    >
      <div className="row px-4">
        <div className="col-6">
          {items.length > 0 ? showItems(items) : noItemsMessage()}
        </div>

        <div className="col-6">
          <h2 className="mb-4 font-medium text-2xl">Cart summary</h2>
          <hr />
          <Checkout products={items} />
        </div>
      </div>
    </Layout>
  );
};

export default Cart;
