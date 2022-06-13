async function verifyToken(req, res, next) {
  const token = req.cookies.token;
  const  jsonwebtoken  = require("jsonwebtoken");

  if (token === undefined) {
    return res.json({
      message: "Access Denied! Unauthorized User",
    });
  } else {
    jsonwebtoken.verify(token, process.env.SECRET_KEY, (err, authData) => {
      if (err) {
        res.json({
          message: "Invalid Token...",
        });
      } else {     
          next();
      }
    });
  }

}

module.exports={verifyToken}
