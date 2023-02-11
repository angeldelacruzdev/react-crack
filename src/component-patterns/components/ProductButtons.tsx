import { CSSProperties, useCallback, useContext } from "react";
import { ProductContext } from "./ProductCard";

export interface Props {
  className?: string;
  style?: CSSProperties;
}

export const ProductButtons = ({ className, style }: Props) => {
  const { counter, increaseBy, maxCount } = useContext(ProductContext);

  let isMaxReached = useCallback(
    () => !!maxCount && counter === maxCount,
    [counter, maxCount]
  );

  return (
    <div style={style} className={`${className}`}>
      <button type="button" onClick={() => increaseBy(-1)}>
        -
      </button>
      <div>{counter}</div>
      <button
        type="button"
        onClick={() => increaseBy(+1)}
        disabled={isMaxReached()}
      >
        +
      </button>
    </div>
  );
};
