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
        className="bg-dark text-white"
        initialValues={{
          count: 6,
          maxCount: 10,
        }}
      >
        {({ reset, isMaxCountReached, maxCount, increaseBy, count }) => (
          <>
            <ProductImage className="custom-image" />
            <ProductTitle className="text-white" />
            <ProductButtons />
            <button onClick={reset}>Reset</button>

            <button onClick={() => increaseBy(-2)}>-2</button>
            {!isMaxCountReached && (
              <button onClick={() => increaseBy(+2)}>+2</button>
            )}
            <span>{count} - {maxCount}</span>
          </>
        )}
      </ProductCard>
    </>
  );
};

export default ShoppingPage;
