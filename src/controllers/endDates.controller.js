const EndDate = require("../models/EndDate.model");
const getNewRandomDate = require("../utils/getNewRandomDate");
const Configuration = require("../models/Configuration.model");
exports.findOne = (req, res) => {
  EndDate.findById(req.params.id, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found end date with id ${req.params.id}.`,
        });
      } else {
        res.status(500).send({
          message: "Error retrieving end date with id " + req.params.id,
        });
      }
    } else res.send(data);
  });
};

exports.findLastCreated = (req, res) => {
  EndDate.findLast((err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found most recently inserted end date`,
        });
      } else {
        res.status(500).send({
          message: "Error retrieving last inserted end date",
        });
      }
    } else res.send(data);
  });
};

exports.create = (req, res) => {
  Configuration.findById(1, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found configuration with id 1.`,
        });
      } else {
        res.status(500).send({
          message: "Error retrieving configuration with id 1",
        });
      }
    } else {
      let newEndDate = getNewRandomDate(data.speed);
      const endDate = new EndDate({
        datedata: newEndDate,
      });

      EndDate.create(endDate, (err, data) => {
        if (err)
          res.status(500).send({
            message:
              err.message || "Some error occurred while creating the end date.",
          });
        else res.send({ ...data });
      });
    }
  });
};

exports.findAll = (req, res) => {
  const date = req.query.date;
  EndDate.getAll(date, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving end dates.",
      });
    else res.send(data);
  });
};

exports.deleteAll = (req, res) => {
  EndDate.deleteAll((err, data) => {
    if (err)
      res.status(500).send({
        message: err.message || "Some error occurred while deleting end dates.",
      });
    else res.send(data);
  });
};
