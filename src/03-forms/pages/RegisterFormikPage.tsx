import { Form, Formik, FormikValues } from "formik";
import * as Yup from "yup";
import { MyTextInput } from "../components";

import "./../styles/styles.css";

export const RegisterFormikPage = () => {
  return (
    <div>
      <h1>Register Formik Page</h1>

      <Formik
        initialValues={{
          name: "",
          email: "",
          password1: "",
          password2: "",
        }}
        onSubmit={function (values: FormikValues): void | Promise<any> {
          console.log(values);
        }}
        validationSchema={Yup.object({
          name: Yup.string()
            .min(2, "El nombre debe de ser de 3 o mas caracteres.")
            .max(15, "El nombre debe de ser de menor de 15 caracteres.")
            .required("Requerido"),
          email: Yup.string()
            .email("Revise el formato del correo.")
            .required("Requerido"),
          password1: Yup.string()
            .min(6, "Mínimo 6 caracteres")
            .required("Requerido"),
          password2: Yup.string()
            .oneOf([Yup.ref("password1")], "Las contraseñas no son iguales.")
            .required("Requerido"),
        })}
      >
        {({handleReset}) => (
          <Form>
            <MyTextInput label={"Nombre"} name={"name"} />
            <MyTextInput label={"Email"} name={"email"} />
            <MyTextInput
              label={"Password"}
              name={"password1"}
              placeholder="******"
              type="password"
            />

            <MyTextInput
              label={"Confirm Password"}
              name={"password2"}
              type="password"
              placeholder="******"
            />

            <button type="submit">Create</button>

            <button type="button" onClick={handleReset}>
              Reset
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
