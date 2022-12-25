const ordersController = require("../controller/orders");

module.exports = function productOrderRouter(router) {
  getAllOrdersRoute(router);
  getOrderByUserRoute(router);
  updateOrderRoute(router);
  deleteOrderRoute(router);
  createOrderRoute(router);
};

function getAllOrdersRoute(router) {
  return router.get("/api/order/get-all-orders", ordersController.getAllOrders);
}

function getOrderByUserRoute(router) {
  return router.post(
    "/api/order/order-by-user",
    ordersController.getOrderByUser
  );
}

function updateOrderRoute(router) {
  return router.post(
    "/api/order/update-order",
    ordersController.postUpdateOrder
  );
}

function deleteOrderRoute(router) {
  return router.post(
    "/api/order/delete-order",
    ordersController.postDeleteOrder
  );
}

function createOrderRoute(router) {
  router.post("/api/order/create-order", ordersController.postCreateOrder);
}
