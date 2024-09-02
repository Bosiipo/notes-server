import * as yup from "yup";

const batchRegisterSchema = yup
  .array()
  .min(1)
  .max(10)
  .typeError("Request body must be an array")
  .required();

const userSchema = yup.object().shape({
  id: yup.string().required(),
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  email: yup.string().email(),
  phoneNumber: yup
    .string()
    .matches(/^(?:\d{11})$/gim, "Invalid phone number")
    .required(),
  password: yup.string(),
  acceptedTermsCondition: yup.boolean(),
});

const noteSchema = yup.object().shape({
  title: yup.string(),
  content: yup.string(),
});

export { batchRegisterSchema, userSchema, noteSchema };
