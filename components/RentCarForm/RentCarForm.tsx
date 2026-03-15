import { ErrorMessage, Field, Form, Formik, FormikHelpers } from "formik";
import css from "./RentCarForm.module.css";
import Button from "../Button/Button";
import * as Yup from "yup";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import toast from "react-hot-toast";
import { useState } from "react";

const RentCarFormSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Name must be at least 2 characters")
    .max(30, "Name is too long")
    .required("Name is required"),
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  bookingDate: Yup.date().nullable().required("Date is required"),
});

interface RentCarFormValues {
  name: string;
  email: string;
  bookingDate: Date | null;
  comment: string;
}

const initialValues: RentCarFormValues = {
  name: "",
  email: "",
  bookingDate: null,
  comment: "",
};

const RentCarForm = () => {
  const handleSubmit = async (
    values: RentCarFormValues,
    actions: FormikHelpers<RentCarFormValues>,
  ) => {
    await new Promise((resolve) => setTimeout(resolve, 2500));
    toast.success(
      "Success! Your car booking request has been sent. We'll contact you soon!",
      {
        duration: 2500,
      },
    );
    actions.setSubmitting(false);
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={RentCarFormSchema}
      onSubmit={handleSubmit}
    >
      {({ values, setFieldValue, isSubmitting }) => (
        <Form className={css.form}>
          <div className={css.formDescription}>
            <h3 className="heading-md">Book your car now</h3>
            <p className="text-primary text-gray">
              Stay connected! We are always ready to help you.
            </p>
          </div>
          <span className={css.fieldWrapper}>
            <Field
              type="text"
              name="name"
              placeholder="Name*"
              className={`${css.input} text-primary`}
            />
            <ErrorMessage name="name" component="span" className={css.error} />
          </span>
          <span className={css.fieldWrapper}>
            <Field
              type="email"
              name="email"
              placeholder="Email*"
              className={`${css.input} text-primary`}
            />
            <ErrorMessage name="email" component="span" className={css.error} />
          </span>
          <span className={css.fieldWrapper}>
            <DatePicker
              selected={values.bookingDate}
              onChange={(date: Date | null) =>
                setFieldValue("bookingDate", date)
              }
              placeholderText="Booking date"
              minDate={new Date()}
              dateFormat="dd/MM/yyyy"
              className={css.input}
              calendarClassName={css.customCalendar}
              autoComplete="off"
            />
            <ErrorMessage
              name="bookingDate"
              component="span"
              className={css.error}
            />
          </span>
          <Field
            as="textarea"
            name="comment"
            id="comment"
            rows={4}
            placeholder="Comment"
            className={`${css.textarea} text-primary`}
          />
          <Button buttonType="submit" isFetching={isSubmitting} variant="blue">
            Send
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default RentCarForm;
