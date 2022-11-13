import { Formik, Form } from "formik";
import * as Yup from "yup";
import { MyCheckBox, MySelect, MyTextInput } from "../components";

import "./../styles/styles.css";

export const FormikAbstractionPage = () => {
  return (
    <div>
      <h1>Formik Abstraction.</h1>

      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          terms: false,
          jobType: "",
        }}
        onSubmit={(value) => {
          console.log(value);
        }}
        validationSchema={Yup.object({
          firstName: Yup.string()
            .max(15, "Debe tener 15 caracteres o menos.")
            .required("Requerido"),
          lastName: Yup.string()
            .max(10, "Debe tener 10 caracteres o menos.")
            .required("Requerido"),
          email: Yup.string()
            .email("El email no es valido.")
            .required("Requerido"),
          terms: Yup.boolean().oneOf(
            [true],
            "Debe de aceptar los terminos y condiciones."
          ),
          jobType: Yup.string()
            .required("Requerido")
            .notOneOf(["it-junior"], "Esta opción no es permitida."),
        })}
      >
        {(formik) => (
          <Form>
            <MyTextInput label="First Name" name="firstName" />

            <MyTextInput label="Last Name" name="lastName" />

            <MyTextInput label="Email Address" name="email" />

            <MySelect label={"Job Type"} name={"jobType"}>
              <option value=""> Pick something</option>
              <option value="developer">Developer</option>
              <option value="designer">Designer</option>
              <option value="it-senior">IT Senior</option>
              <option value="it-junior"> IT Junior</option>
            </MySelect>

            <MyCheckBox label={"Terms & Conditions"} name={"terms"} />

            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

 
