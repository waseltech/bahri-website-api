import { body } from "express-validator";

export const newsValidator = [
  body("titleAr")
  .notEmpty({
    ignore_whitespace: true,
  }).withMessage("arabic title require")
  .isString().withMessage("arabic title must be string") ,
  body("titleEn")
  .notEmpty({
    ignore_whitespace: true,
  }).withMessage("english title require")
  .isString().withMessage("english title must be string"),

  body("descriptionAr")
  .notEmpty({
    ignore_whitespace: true,
  }).withMessage("arabic description require")
  .isString().withMessage("arabic description must be string") ,
  body("descriptionEn")
  .notEmpty({
    ignore_whitespace: true,
  }).withMessage("english description require")
  .isString().withMessage("arabic description must be string") ,
];