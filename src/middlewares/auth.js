async function verifyToken(req, res, next) {
  const token = req.cookies.token;
  const  jsonwebtoken  = require("jsonwebtoken");


  if (token === undefined) {
    return res.json({
      message: "Access Denied! Unauthorized User",
    });
  } else {
    jsonwebtoken.verify(token, process.env.SECRET_KEY, (err, authData) => {

      console.log(authData);

      if (err) {
        res.json({
          message: "Invalid Token...",
        });
      } else {
        // const role = authData.user.role;
        // console.log(authData);
        // if (email === "admin") {
          next();
        // } else {
        //   return res.json({
        //     message: "Access Denied! you are not an Admin",
        //   });
        // }
      }
    });
  }

}

module.exports={verifyToken}
