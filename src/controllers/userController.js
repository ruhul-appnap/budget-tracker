const { validateUser } = require("../utils/validation");

const registerUser = async (req, res) => {
  const { name, email, password } = req;

  const validationError = validateUser({ name, email, password });

  if (validationError) {
    return res.status(400).json({ message: validationError });
  }

  //

  console.log("register user");
};

module.exports = { registerUser };
