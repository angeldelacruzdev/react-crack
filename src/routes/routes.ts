import { LazyExoticComponent } from "react";
import {
  RegisterPage,
  FormikAbstractionPage,
  FormikBasicPage,
  FormikComponentPage,
  FormikYupPage,
  RegisterFormikPage,
  DynamicFormPage
} from "../03-forms/pages";

type JSXComponent = () => JSX.Element;

interface Route {
  path: string;
  Component: LazyExoticComponent<JSXComponent> | JSXComponent;
  to: string;
  name: string;
}

export const routes: Route[] = [
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
  {
    to: "/register-Formik-page",
    path: "register-Formik-page",
    Component: RegisterFormikPage,
    name: "Register Formik Page",
  },
  {
    to: "/dynamic-Formik-page",
    path: "dynamic-Formik-page",
    Component: DynamicFormPage,
    name: "Dynamic Formik Page",
  },
];
