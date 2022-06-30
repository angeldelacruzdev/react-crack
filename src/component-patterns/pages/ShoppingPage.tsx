import useShoppingPage from "../hooks/useShoppingPage";
import {
  ProductCard,
  ProductButtons,
  ProductImage,
  ProductTitle,
} from "../components";

import "./../styles/custom-styles.css";

import { products } from "../data/products";

const ShoppingPage = () => {
  const { shoppingCart, onProductCountChange } = useShoppingPage();

  return (
    <>
      <h1>Shopping Store</h1>
      <hr />

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
        }}
      >
        {products.map((item) => (
          <ProductCard
            key={item.id}
            product={item}
            className="bg-dark"
            onChange={(e) => onProductCountChange(e)}
            value={shoppingCart[item.id]?.count || 0}
          >
            <ProductImage className="custom-image" />
            <ProductTitle className="text-white" />
            <ProductButtons />
          </ProductCard>
        ))}
      </div>

      <div className="shopping-cart">
        {Object.entries(shoppingCart).map(([key, product]) => (
          <ProductCard
            style={{ width: "100px" }}
            key={key}
            product={product}
            className="bg-dark"
            value={product.count}
            onChange={(e) => onProductCountChange(e)}
          >
            <ProductImage className="custom-image" />
            <ProductTitle className="text-white" />
            <ProductButtons
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            />
          </ProductCard>
        ))}
      </div>
    </>
  );
};

export default ShoppingPage;
