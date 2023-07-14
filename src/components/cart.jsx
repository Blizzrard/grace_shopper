import { useEffect, useState } from "react";
<<<<<<< HEAD
import { Link, useNavigate, useOutletContext } from "react-router-dom";
import { BASE_URL, checkout, fetchCart, removeFromCart } from "../api/util";
=======
import { Link, useOutletContext } from "react-router-dom";
import { BASE_URL } from "../api/util";
>>>>>>> origin/Jason

export default function Cart() {
  const { user, setUser, cartItems, setCartItems, token, setToken } =
    useOutletContext();
  console.log(cartItems);
<<<<<<< HEAD
  if (cartItems.Empty) {
    return (
      <div>
        <h2>{cartItems.Empty}</h2>
      </div>
    );
  }
  const navigate = useNavigate();
=======

>>>>>>> origin/Jason
  const calculateTotalPrice = (cartItems) => {
    let totalPrice = 0;

    // Iterate over the cart items and sum up their prices
    cartItems.forEach((item) => {
      const price = parseFloat(item.price.replace("$", ""));
<<<<<<< HEAD
      const multi = price * item.quantity;
      totalPrice += multi;
=======
      totalPrice += price;
>>>>>>> origin/Jason
    });

    return totalPrice.toFixed(2); // Return the total price with two decimal places
  };
  const totalPrice = calculateTotalPrice(cartItems);

  async function deleteCartItem(cartId) {
    const localToken = localStorage.getItem("token");
    const response = await fetch(`${BASE_URL}/cart`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localToken}`,
      },
      body: JSON.stringify({
        cartId,
      }),
    });
    const result = await response.json();
<<<<<<< HEAD
    location.reload();
  }

=======
    console.log(result);
    location.reload();
  }

  if (cartItems.length === 0) {
    return (
      <div>
        <h2>loading</h2>
      </div>
    );
  }

>>>>>>> origin/Jason
  return (
    <div id="cart-page">
      <div id="products">
        <h2>Cart</h2>
        <div className="product-list">
          {cartItems.map((cartItem) => {
            return (
              <div className="activity-post" key={cartItem.id}>
                <Link className="item-link" to={`/merch/${cartItem.id}`}>
                  <h1>{cartItem.name}</h1>
                </Link>
                <img className="cart-photo" src={cartItem.photo} alt="" />
                <h2>{cartItem.type}</h2>
                <p>Quantity: {cartItem.quantity}</p>
                <p className="treat-price">{cartItem.price}</p>
                <button
<<<<<<< HEAD
                  onClick={async () => {
                    const response = await removeFromCart(cartItem.id);
                    if (response) {
                      const newCart = await fetchCart();
                      if (newCart) {
                        setCartItems(newCart);
                      }
                    }
                  }}
=======
                  onClick={() => deleteCartItem(cartItem.id)}
>>>>>>> origin/Jason
                  className="remove-item"
                >
                  Remove Item
                </button>
              </div>
            );
          })}
        </div>
        <h3>
          Total: $<span id="total-cost">{totalPrice}</span>
        </h3>
<<<<<<< HEAD
        <button
          onClick={async () => {
            checkout();
            const response = await fetchCart();
            if (response) {
              setCartItems(response);
              navigate("/");
            }
          }}
          id="checkout"
        >
          Checkout
        </button>
=======
        <button id="checkout">Checkout</button>
>>>>>>> origin/Jason
      </div>
    </div>
  );
}
