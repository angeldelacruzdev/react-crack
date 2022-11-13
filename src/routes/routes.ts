import { LazyExoticComponent } from "react";
import {
  RegisterPage,
  FormikAbstractionPage,
  FormikBasicPage,
  FormikComponentPage,
  FormikYupPage,
} from "../03-forms/pages";

import NoLazy from "../components/lazyload/pages/NoLazy";

type JSXComponent = () => JSX.Element;

interface Route {
  path: string;
  Component: LazyExoticComponent<JSXComponent> | JSXComponent;
  to: string;
  name: string;
}

export const routes: Route[] = [
  {
    to: "/no-lazy",
    path: "no-lazy",
    Component: NoLazy,
    name: "Not Lazy Page",
  },
  {
    to: "/register",
    path: "register",
    Component: RegisterPage,
    name: "Register Page",
  },
  {
    to: "/formik-basic",
    path: "formik-basic",
    Component: FormikBasicPage,
    name: "Formik Basic Page",
  },
  {
    to: "/formik-yup",
    path: "formik-yup",
    Component: FormikYupPage,
    name: "Formik Yup Page",
  },
  {
    to: "/formik-component",
    path: "formik-component",
    Component: FormikComponentPage,
    name: "Formik Component Page",
  },
  {
    to: "/formik-abstractions",
    path: "formik-abstractions",
    Component: FormikAbstractionPage,
    name: "Formik Abstractions Page",
  },
];
