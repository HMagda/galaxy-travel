import React from 'react';
import styles from './ContactForm.module.scss';
import {useFormik} from 'formik';
import * as Yup from 'yup';

const ContactForm = () => {
  const formik = useFormik({
    initialValues: {
      firstName: '',
      email: '',
      textarea: '',
    },

    onSubmit: (e) => {
      const messages = {
        email: e.email,
        firstName: e.firstName,
        textarea: e.textarea,
      };
      fetch('http://localhost:8000/messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(messages),
      })
        .then((response) => {
          console.log(response.status);
        })
        .then(() => formik.resetForm());
    },

    validationSchema: Yup.object({
      email: Yup.string().email('Invalid email address').required('Required'),
      textarea: Yup.string().required('Required'),
    }),
  });

  return (
    <form
      onSubmit={formik.handleSubmit}
      className={styles.contact_form_container}
    >
      <label htmlFor='firstName'>First Name</label>
      <input
        id='firstName'
        name='firstName'
        type='text'
        placeholder='Jane'
        onChange={formik.handleChange}
        value={formik.values.firstName}
        className={styles.input}
      />

      <label htmlFor='email'>Email Address</label>
      <input
        id='email'
        name='email'
        type='email'
        placeholder='jane@email.com'
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.email}
        className={styles.input}
      />
      {formik.touched.email && formik.errors.email ? (
        <div className={styles.message}>{formik.errors.email}</div>
      ) : null}

      <label htmlFor='email'>Your message</label>
      <textarea
        id='textarea'
        name='textarea'
        type='textarea'
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.textarea}
        rows='6'
        cols='25'
        placeholder='Write your message here...'
      ></textarea>
      {formik.touched.email ? (
        <div className={styles.message}>{formik.errors.textarea}</div>
      ) : null}

      <div className={styles.btn_container}>
        <button type='submit' className={styles.btn + ' ' + styles.submit}>
          Send!
        </button>

        <button
          type='reset'
          onClick={formik.resetForm}
          className={styles.btn + ' ' + styles.reset}
        >
          Reset All
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
