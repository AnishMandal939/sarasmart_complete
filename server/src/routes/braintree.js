const brainTreeController = require("../controller/braintree");

module.exports = function paymentGatewayRouter(router) {
  getTokenRoute(router);
  paymentRoute(router);
};

function getTokenRoute(router) {
  router.post("/api/payment", brainTreeController.paymentProcess);
}

function paymentRoute(router) {
  router.post("/api/get-token", brainTreeController.ganerateToken);
}
