"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.noteSchema = exports.userSchema = exports.batchRegisterSchema = void 0;
const yup = __importStar(require("yup"));
const batchRegisterSchema = yup
    .array()
    .min(1)
    .max(10)
    .typeError("Request body must be an array")
    .required();
exports.batchRegisterSchema = batchRegisterSchema;
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
exports.userSchema = userSchema;
const noteSchema = yup.object().shape({
    title: yup.string(),
    content: yup.string(),
});
exports.noteSchema = noteSchema;
//# sourceMappingURL=schema.js.map