const Joi = require("joi");

const userSchema = Joi.object({
  name: Joi.string()
    .min(3)
    .regex(/^[a-zA-Z\s]+$/)
    .required()
    .messages({
      "string.base": "Name must be a string",
      "string.min": "Name must be at least 3 characters long",
      "string.pattern.base": "Name can only contain letters and spaces",
      "any.required": "Name is required",
    }),
  email: Joi.string().email().required().messages({
    "string.email": "Invalid email format",
    "any.required": "Email is required",
  }),
  password: Joi.string()
    .min(8)
    .pattern(/[0-9]/)
    .pattern(/[!@#$%^&*(),.?":{}|<>]/)
    .required()
    .messages({
      "string.min": "Password must be at least 8 characters long",
      "string.pattern.base":
        "Password must contain at least one number and one special character",
      "any.required": "Password is required",
    }),
});

const loginSchema = Joi.object({
  email: Joi.string().email().required().messages({
    "string.email": "Invalid email format",
    "any.required": "Email is required",
  }),
  password: Joi.string().required().messages({
    "any.required": "Password is required",
  }),
});

const validateUser = (userData) => {
  const { error } = userSchema.validate(userData, { abortEarly: false });
  console.log(error);

  if (error) {
    const errorMessages = error.details.map((err) => err.message);
    return errorMessages; // R
  }
  return null; // No errors
};

module.exports = { validateUser };
