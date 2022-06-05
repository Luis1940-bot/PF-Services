const { body, validationResult } = require("express-validator");
const userValidationRules = () => {
  return [
    body("name")
      .isLength({ min: 3 }, { max: 20 })
      .isAlphanumeric("en-US")
      .notEmpty(),
    body("username")
      .isLength({ min: 3 }, { max: 20 })
      .isAlphanumeric("en-US")
      .notEmpty(),
    body("surname")
      .isLength({ min: 3 }, { max: 20 })
      .isAlphanumeric("en-US")
      .notEmpty(),
    body("password")
      .isString()
      .isLength({ min: 8 })
      .not()
      .isLowercase()
      .not()
      .isUppercase()
      .not()
      .isNumeric()
      .not()
      .isAlpha()
      .notEmpty(),
    body("phone")
      .isLength({ min: 3 }, { max: 20 })
      .isNumeric("en-US")
      .notEmpty(),
    body("address").isLength({ min: 5 }, { max: 20 }).notEmpty(),
    body("age").isNumeric("en-US").notEmpty(),
    body("document")
      .isLength({ min: 5 }, { max: 20 })
      .isNumeric("en-US")
      .notEmpty(),
    body("active").isBoolean("en-US").notEmpty(),
    body("email").isEmail().notEmpty(),
    body("phone2")
      .isLength({ min: 5 }, { max: 20 })
      .isNumeric("en-US")
      .notEmpty(),
  ];
};

const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    return next();
  }
  const extractedErrors = [];
  errors.array().map((err) => extractedErrors.push({ [err.param]: err.msg }));

  return res.status(422).json({
    errors: extractedErrors,
  });
};

module.exports = {
  userValidationRules,
  validate,
};
