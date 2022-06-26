import { useContext } from "react";
import { ProductContext } from "./ProductCard";
import styles from "./../styles/styles.module.css";

export const ProductTitle = ({ title }: { title?: string }) => {
  const { product } = useContext(ProductContext);

  return (
    <div className={styles.productTitle}>{title ? title : product.title}</div>
  );
};
