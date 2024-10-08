const db = require("./db.config");
const Customer = db.customers;

function createCustomer(req, res) {
  if (!req.body.name || !req.body.email || !req.body.age) {
    return res.status(400).send({
      message: "Bad Data",
    });
  }
  const customerObject = {
    name: req.body.name,
    email: req.body.email,
    age: req.body.age,
  };

  Customer.create(customerObject)
    .then((data) => {
      res.send(data);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
}

function findAllCustomer(req, res) {}
function findCustomerByEmail(req, res) {}
function updateCustomer(req, res) {}
function deleteCustomer(req, res) {}

module.exports = {
  createCustomer,
  findAllCustomer,
  findCustomerByEmail,
  updateCustomer,
  deleteCustomer,
};
