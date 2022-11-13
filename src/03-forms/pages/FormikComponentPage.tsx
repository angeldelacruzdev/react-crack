import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

import "./../styles/styles.css";

export const FormikComponentPage = () => {
  return (
    <div>
      <h1>Formik Component Tutorial.</h1>

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
            <label htmlFor="firstName">First Name</label>
            <Field name="firstName" type="text" />
            <ErrorMessage name="firstName" component="span" />

            <label htmlFor="lastName">Last Name</label>
            <Field name="lastName" type="text" />
            <ErrorMessage name="lastName" component="span" />

            <label htmlFor="email">Email Address</label>
            <Field name="email" type="email" />
            <ErrorMessage name="email" component="span" />

            <label htmlFor="jobType">Job Type</label>
            <Field name="jobType" as="select">
              <option value=""> Pick something</option>
              <option value="developer">Developer</option>
              <option value="designer">Designer</option>
              <option value="it-senior">IT Senior</option>
              <option value="it-junior"> IT Junior</option>
            </Field>
            <ErrorMessage name="jobType" component="span" />

            <label htmlFor="terms">
              <Field name="terms" id="terms" type="checkbox" />
              Terms and conditions
            </label>
            <ErrorMessage name="terms" component="span" />

            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};