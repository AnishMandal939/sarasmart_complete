const authRouter = require("./auth");
const paymentGatewayRouter = require("./braintree");
const productCategoryRouter = require("./categories");
const homePageSliderImageRouter = require("./customize.js");
const productOrderRouter = require("./orders");
const productRouter = require("./products");
const adminUserControlRouter = require("./users");

module.exports = function routes(router) {
  authRouter(router);
  paymentGatewayRouter(router);
  productCategoryRouter(router);
  homePageSliderImageRouter(router);
  productOrderRouter(router);
  productRouter(router);
  adminUserControlRouter(router);
};
