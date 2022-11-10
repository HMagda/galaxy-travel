import React from "react";
import styles from "./SignupForm.module.scss";
import {useFormik} from "formik";
import * as Yup from "yup";

const SignupForm = () => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      email: "",
    },

    onSubmit: (e) => {
      const newsletter_data = {email: e.email, firstName: e.firstName};
      fetch("http://localhost:8000/newsletter_data", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newsletter_data),
      })
        .then((response) => {
          console.log(response.status);
        })
        .then(() => formik.resetForm());

      // fetch("http://localhost:8000/newsletter_data?firstName=John&email=john@gmail.com", {
      //   method: "GET"
      // })
      // .then(response => response.json())
      // .then(data => console.log(data))
    },

    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email address").required("Required"),
    }),
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="firstName">First Name</label>
      <input
        id="firstName"
        name="firstName"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.firstName}
      />

      <label htmlFor="email">Email Address</label>
      <input
        id="email"
        name="email"
        type="email"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.email}
      />
      {formik.touched.email && formik.errors.email ? (
        <div className={styles.message}>{formik.errors.email}</div>
      ) : null}

      <button type="submit" className={styles.btn}>
        subscribe now!
      </button>
    </form>
  );
};

export default SignupForm;
