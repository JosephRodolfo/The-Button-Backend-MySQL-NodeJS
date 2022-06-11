const Configuration = require("../models/Configuration.model");
exports.findById = (req, res) => {
  Configuration.findById(req.params.id, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found configuration with id ${req.params.id}.`,
        });
      } else {
        res.status(500).send({
          message: "Error retrieving configuration with id " + req.params.id,
        });
      }
    } else res.send(data);
  });
};

exports.update = (req, res) => {
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
  }
  console.log(req.body);
  Configuration.updateById(
    req.params.id,
    new Configuration(req.body),
    (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found Configuration with id ${req.params.id}.`,
          });
        } else {
          res.status(500).send({
            message: "Error updating Configuration with id " + req.params.id,
          });
        }
      } else res.send(data);
    }
  );
};
