const User = require('../models/User.model')


exports.findAll = (req, res) => {

    const user = req.query.user;
    User.getAll(user, (err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving end dates."
        });
      else res.send(data);
    });
  
  };

  
  exports.create = (req, res) => {

    if (!req.body) {
      res.status(400).send({
        message: "Content can not be empty!",
      });
    }
  
    const user = new User({
    //   datedata: newUser,
    });
  
    User.create(newUser, (err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the end date.",
        });
      else res.send({...data});
    });
  };