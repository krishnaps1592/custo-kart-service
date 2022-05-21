const customerObj = require("../models/customer");

const customerController = {
  all(req, res) {
    customerObj.find({}).execute((err, custs) => res.json(custs));
  },

  byid(req, res) {
    customerObj
      .findOne({ _id: req.params._id })
      .exec((err, customer) => res.json(customer));
  },
  createOne(req, res) {
    const customer = new customerObj(req.body);
    customer.save((err, saved) => {
      customerObj.findOne({ _id: saved._id }).exec((err, cus) => res.json(cus));
    });
  },
};

module.exports = customerController;
