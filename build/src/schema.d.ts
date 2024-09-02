import * as yup from "yup";
declare const batchRegisterSchema: yup.ArraySchema<any[], yup.AnyObject, undefined, "">;
declare const userSchema: yup.ObjectSchema<{
    id: string;
    firstName: string;
    lastName: string;
    email: string | undefined;
    phoneNumber: string;
    password: string | undefined;
    acceptedTermsCondition: boolean | undefined;
}, yup.AnyObject, {
    id: undefined;
    firstName: undefined;
    lastName: undefined;
    email: undefined;
    phoneNumber: undefined;
    password: undefined;
    acceptedTermsCondition: undefined;
}, "">;
declare const noteSchema: yup.ObjectSchema<{
    title: string | undefined;
    content: string | undefined;
}, yup.AnyObject, {
    title: undefined;
    content: undefined;
}, "">;
export { batchRegisterSchema, userSchema, noteSchema };
