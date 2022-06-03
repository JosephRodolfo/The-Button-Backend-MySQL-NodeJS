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
      address: req.body.address,
      score: req.body.score
    });
  
    User.create(user, (err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the user.",
        });
      else res.send({...data});
    });
  };

  exports.deleteAll = (req, res) => {
    User.deleteAll((err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while deleting users.",
        });
      else res.send(data);
    });
  };