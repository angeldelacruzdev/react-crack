import { Formik, Form } from "formik";
import customForm from "../data/custom-form.json";
import { MyTextInput } from "../components";

const initialValues: { [key: string]: any } = {};

for ( let input of customForm) {
  initialValues[input.name] = input.value;
}

export const DynamicFormPage = () => {
  return (
    <div>
      <h1>Dynamic Form</h1>

      <Formik
        initialValues={initialValues}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {(formik) => (
          <>
            <Form>
              {customForm.map(({ type, label, placeholder, value, name }) => {
                return (
                  <MyTextInput
                    key={name}
                    type={type as any}
                    label={label}
                    name={name}
                    placeholder={placeholder}
                  />
                );
              })}

              <button type="submit">Submit</button>
            </Form>
          </>
        )}
      </Formik>
    </div>
  );
};
