import { CSSProperties, useContext } from "react";
import { ProductContext } from "./ProductCard";
 
export interface Props {
  title?: string;
  className?: string;
  style?: CSSProperties
}

export const ProductTitle = ({ title, className, style }: Props) => {
  const { product } = useContext(ProductContext);

  return (
    <div style={style} className={`${className}`}>
      {title ? title : product.title}
    </div>
  );
};
