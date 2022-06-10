const { body, validationResult } = require("express-validator");

//RECORDAR EXPORTARLO ABAJO!!
const userValidationRules = () => {
  return [
    body("name")
      .isLength({ min: 3 }, { max: 20 })
      .isAlpha("es-ES", { ignore: " " })
      .notEmpty()
      .withMessage("Should be alpha. Between 3 and 20 characters"),
    body("surname")
      .isLength({ min: 3 }, { max: 20 })
      .isAlpha("es-ES", { ignore: " " })
      .notEmpty()
      .withMessage("Should be alpha. Between 3 and 20 characters"),
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
      .notEmpty()
      .withMessage(
        "Should be alphanumeric. Between 8 and 20 characters.1 Number, 1 lowercase, 1 uppercase, No special character"
      ),
    body("phone")
      .isLength({ min: 3 }, { max: 20 })
      .isNumeric("en-US")
      .notEmpty()
      .withMessage("Should be numeric. Between 3 and 20 characters"),
    body("address")
      .isLength({ min: 5 }, { max: 20 })
      .notEmpty()
      .withMessage("Should be alphanumeric. Between 5 and 20 characters"),
    body("age").isNumeric("en-US").notEmpty().withMessage("Should be numeric"),
    body("document")
      .isLength({ min: 5 }, { max: 20 })
      .isNumeric("en-US")
      .notEmpty()
      .withMessage("Should be numeric. Between 5 and 20 characters"),
    body("email").isEmail().notEmpty().withMessage("Should be email"),
    body("phone2")
      .isLength({ min: 5 }, { max: 20 })
      .isNumeric("en-US")
      .notEmpty()
      .withMessage("Should be numeric. Between 5 and 20 characters"),
  ];
};
//RECORDAR EXPORTARLO ABAJO!!
const profValidationRules = () => {
  return [
    body("tuition")
      .isLength({ max: 255 })
      .notEmpty()
      .withMessage("Should be alphanumeric. Max 255 characters"),
    body("trainings")
      .isLength({ max: 255 })
      .notEmpty()
      .withMessage("Should be alphanumeric. Max 255 characters"),

    body("photo")
      .isLength({ max: 50 })
      .notEmpty()
      .withMessage("Should be alphanumeric. Max 50 characters"),
    body("cvu")
      .isLength({ min: 0 }, { max: 22 })
      .withMessage("Should be numeric. Max 22 characters")
      .isNumeric()
      .withMessage("Should be numeric.")
      .notEmpty()
      .withMessage("Should not be empty"),
  ];
};
//RECORDAR EXPORTARLO ABAJO!!
const userValidShortReg = () => {
  return [
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
      .notEmpty()
      .withMessage(
        "Should be alphanumeric. Between 8 and 20 characters.1 Number, 1 lowercase, 1 uppercase, No special character"
      ),
    body("email").isEmail().notEmpty().withMessage("Should be email"),
  ];
};
//RECORDAR EXPORTARLO ABAJO!!
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
  userValidShortReg,
  profValidationRules,
  validate,
};
