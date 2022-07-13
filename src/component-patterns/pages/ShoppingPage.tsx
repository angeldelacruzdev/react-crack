import {
  ProductCard,
  ProductButtons,
  ProductImage,
  ProductTitle,
} from "../components";

import "./../styles/custom-styles.css";

import { products } from "../data/products";

const product = products[0];

const ShoppingPage = () => {
  return (
    <>
      <h1>Shopping Store</h1>
      <hr />

      <ProductCard
        key={product.id}
        product={product}
        initialValues={{
          count: 6,
          maxCount: 10,
        }}
      >
        {({ reset, isMaxCountReached, maxCount, increaseBy, count }) => (
          <>
            <ProductImage />
            <ProductTitle />
            <ProductButtons />
          </>
        )}
      </ProductCard>
    </>
  );
};

export default ShoppingPage;
