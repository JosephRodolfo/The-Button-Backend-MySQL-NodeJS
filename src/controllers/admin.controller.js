const Admin = require("../models/Admin.model");
const { genSaltSync, hashSync, compareSync } = require("bcrypt");
const  jsonwebtoken  = require("jsonwebtoken");
const cookieParser = require("cookie-parser");

exports.findOne = (req, res) => {
  Admin.findByEmail(req.body.email, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found user with email ${req.body.email}.`,
        });
      } else {
        res.status(500).send({
          message: "Error retrieving user with email " + req.body.email,
        });
      }
    } else res.send(data);
  });
};

exports.registerAdmin = (req, res) => {
  const email = req.body.email;
  let password = req.body.password;

  if (!email || !password) {
    return res.sendStatus(400);
  }
  const salt = genSaltSync(10);
  password = hashSync(password, salt);
  const user = {
    email: email,
    password: password,
  };

  Admin.createAdmin(user, (err, data) => {
    if (err)
      res.status(500).send({
        message: err.message || "Some error occurred while creating the user.",
      });
    else res.send({ ...data });
  });
};

exports.loginAdmin = async(req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;
 let user = await Admin.findByEmail(email)



  if (!user) {
    return res.json({
      message: "Invalid email or password",
    });
  }
  const isValidPassword = compareSync(password, user.password);
  if (isValidPassword) {
    user.password = undefined;
    const jsontoken = jsonwebtoken.sign(
      { user: user },
      process.env.SECRET_KEY,
      { expiresIn: "30m" }
    );
    res.cookie("token", jsontoken, {
      httpOnly: true,
      secure: true,
      expires: new Date(Number(new Date()) + 30 * 60 * 1000),
    }); 

    res.json({ token: jsontoken });
  } else {
    return res.json({
      message: "Invalid email or password",
    });
  }
};
