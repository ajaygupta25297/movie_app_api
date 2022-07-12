const db = require("../models");

// Defining methods for the movieController
module.exports = {
  findAll: function(req, res) {
    db.Movie
      .find(req.q)
      .then(dbModel => res.json(dbModel))
      .catch(err => {
        console.error(err) 
        res.status(422).json(err)
      });
    console.log(req.headers, 'hello');
  },
  findById: function(req, res) {
    db.Movie
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => {
        console.error(err)
        res.status(422).json(err)
      });
  },
  create: function(req, res) {
    db.Movie
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => {
        console.error(err)
        res.status(422).json(err)
      });
  },
  update: function(req, res) {
    db.Movie
      .findOneAndUpdate({ id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => {
        console.error(err)
        res.status(422).json(err)
      });
  },
  remove: function(req, res) {
    db.Movie
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => {
        console.error(err)
        res.status(422).json(err)
      });
  }
};