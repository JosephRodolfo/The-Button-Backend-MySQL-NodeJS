const EndDate = require('../models/EndDate.model')



exports.findOne = (req, res) => {
  

    EndDate.findById(req.params.id, (err, data) => {
        if (err) {
          if (err.kind === "not_found") {
            res.status(404).send({
              message: `Not found end date with id ${req.params.id}.`
            });
          } else {
            res.status(500).send({
              message: "Error retrieving end date with id " + req.params.id
            });
          }
        } else res.send(data);
      });
};