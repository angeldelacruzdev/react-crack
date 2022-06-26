import { ProductCard, ProductButtons, ProductImage,ProductTitle } from "../components";

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
        <ProductCard product={product}>
          <ProductImage />
          <ProductTitle />
          <ProductButtons />
        </ProductCard>

        <ProductCard product={product}>
          <ProductCard.Image />
          <ProductCard.Title  />
          <ProductCard.Buttons />
        </ProductCard>
      </div>
    </>
  );
};

export default ShoppingPage;
