import React, { useContext } from "react";
import ShopContext from "../../context/Shop-context";
const Product = (props) => {
  const { id, productName, price, productImage } = props.data;
  const { addToCart, cartItems } = useContext(ShopContext);
  const cartItemAmount = cartItems[id];
  return (
    <div className="product">
      <img src={productImage} alt={productName} />
      <div className="discribtion">
        <p>{""}</p>
        <b>{productName}</b>
        <p>{price}</p>
        <button className="addToCartBttn" onClick={() => addToCart(id)}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Product;
