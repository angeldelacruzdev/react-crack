import {
  ProductCard,
  ProductButtons,
  ProductImage,
  ProductTitle,
} from "../components";

import "./../styles/custom-styles.css";
const product = {
  id: "1",
  title: "Coffe Mug - Product",
  img: "/coffee-mug.png",
};

const ShoppingPage = () => {
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
        <ProductCard product={product} className="bg-dark">
          <ProductImage className="custom-image" />
          <ProductTitle className="text-white" />
          <ProductButtons />
        </ProductCard>

        <ProductCard product={product} className="bg-dark">
          <ProductCard.Image className="custom-image" />
          <ProductCard.Title className="text-white" />
          <ProductCard.Buttons />
        </ProductCard>
        <ProductCard product={product} style={{ background: "#3F68D0" }}>
          <ProductCard.Image className="custom-image" />
          <ProductCard.Title className="text-white" />
          <ProductCard.Buttons
            style={{
              background: "#401517",
              color: "white",
              flex: "flex",
              justifyContent: "flex-end",
            }}
          />
        </ProductCard>
      </div>
    </>
  );
};

export default ShoppingPage;
