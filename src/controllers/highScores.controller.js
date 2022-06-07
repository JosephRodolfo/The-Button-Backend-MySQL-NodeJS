const HighScores = require('../models/HighScores.model');

exports.copyTable = (req, res) => {
    HighScores.copyTable((err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while copying table.",
        });
      else res.send(data);
    });
  };

  exports.dropTable = (req, res) => {
    HighScores.dropTable((err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while dropping table.",
        });
      else res.send(data);
    });
  };

  exports.findAll = (req, res) => {

    const highScores = req.query.highScores;
    HighScores.getAll(highScores, (err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving high scores."
        });
      else res.send(data);
    });
  
  };