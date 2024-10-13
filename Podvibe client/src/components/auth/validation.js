import Joi from "joi";

let validationMsgs = {
  name: {
    "string.alphanum": "Username must contain only letters and numbers",
    "string.min": "Username must be at least 6 characters long",
    "string.max": "Username must not exceed 30 characters",
    "string.empty": "Username is required",
  },
  email: {
    "string.email": "Email must be in a valid format (e.g., user@domain.com)",
    "string.empty": "Email is required",
  },
  password: {
    "string.pattern.base":
      "Password must be between 8 and 30 characters, containing only letters and numbers",
    "string.empty": "Password is required",
  },
  confirmPass: {
    "any.only": "Password and confirmation must match",
    "string.empty": "Password confirmation is required",
  },
  date: {
    "any.only": "Must be a number between 1 and 31",
    "string.empty": "Birth Day is required",
  },
  month: {
    "any.only": "Must be a number between 1 and 12",
    "string.empty": "Birth Month is required",
  },
  year: {
    "any.only": "Must be a number between 1950 and 2016",
    "string.empty": "Birth Year is required",
  },
};

export const schema = Joi.object({
  name: Joi.string()
    .alphanum()
    .min(6)
    .max(30)
    .required()
    .messages(validationMsgs.name),
  email: Joi.string()
    .email({
      minDomainSegments: 2,
      tlds: { allow: ["com", "net"] },
    })
    .required()
    .messages(validationMsgs.email),
  password: Joi.string()
    .pattern(new RegExp("^[a-zA-Z0-9]{8,30}$"))
    .required()
    .messages(validationMsgs.password),
  confirmPass: Joi.ref("password"),
    // .required(),
    // .messages(validationMsgs.confirmPass),
  date: Joi.number()
    .integer()
    .min(1)
    .max(31)
    .required()
    .messages(validationMsgs.date),

  month: Joi.number()
    .integer()
    .min(1)
    .max(12)
    .required()
    .messages(validationMsgs.month),

  year: Joi.number()
    .integer()
    .min(1950)
    .max(2016)
    .required()
    .messages(validationMsgs.year),
  gender: Joi.string()
    .required()
}).options({ abortEarly: false })


export const mapValidationToState = (user) => {
  const { error } = schema.validate(user);
  if (error) {
    console.log(error);
    return error.details
      .map((validObj) => {
        return { [validObj.context.key]: validObj.message };
      })
      .reduce((initialObject, currentObject) => {
        return { ...initialObject, ...currentObject };
      });
  }
  return null;
};
