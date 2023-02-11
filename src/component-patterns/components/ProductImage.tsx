import { CSSProperties, useContext } from "react";
import { ProductContext } from "./ProductCard";
import noImage from "./../assets/no-image.jpg";
 
export interface Props {
  img?: string;
  className?: string;
  style?: CSSProperties;
}

export const ProductImage = ({ img = "", className, style }: Props) => {
  const { product } = useContext(ProductContext);

  let imgToshow: string;

  if (img) {
    imgToshow = img;
  } else if (product.img) {
    imgToshow = product.img;
  } else {
    imgToshow = noImage;
  }

  return (
    <img
      style={style}
      className={`${className}`}
      src={imgToshow}
      alt="product"
    />
  );
};
