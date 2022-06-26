import { lazy, LazyExoticComponent } from "react";
import NoLazy from "../components/lazyload/pages/NoLazy";
 
type JSXComponent = () => JSX.Element;

interface Route {
  path: string;
  Component: LazyExoticComponent<JSXComponent> | JSXComponent;
  to: string;
  name: string;
}

const LazyLayout = lazy(
  () => import("../components/lazyload/components/LazyLayout")
);

export const routes: Route[] = [
  {
    to: "/lazyload/",
    path: "/lazyload/*",
    Component: LazyLayout,
    name: "Lazy Layout Page",
  },
  {
    to: "/no-lazy",
    path: "no-lazy",
    Component: NoLazy,
    name: "Not Lazy Page",
  },
];
