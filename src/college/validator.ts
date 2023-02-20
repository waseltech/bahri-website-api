import { body } from "express-validator";

export const collegeValidator = [
  body("nameAr")
  .notEmpty({
    ignore_whitespace: true,
  }).withMessage("arabic name require")
  .isString().withMessage("arabic name must be string") ,
  body("nameEn")
  .notEmpty({
    ignore_whitespace: true,
  }).withMessage("english name require"),
  body("code")
  .trim()
  .notEmpty({
    ignore_whitespace: true,
  }).withMessage("college code  require")
  .isString().withMessage("college code  must be string")
 
];