"use client";
import { FormProvider as Form } from "react-hook-form";

const FormProvider = ({ children, onSubmit, methods }) => {
  return (
    <Form {...methods}>
      <form onSubmit={onSubmit} style={{ width: "100%", height: "100%" }}>
        {children}
      </form>
    </Form>
  );
};

export default FormProvider;
