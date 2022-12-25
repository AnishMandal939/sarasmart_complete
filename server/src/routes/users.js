const usersController = require("../controller/users");

module.exports = function adminUserControlRouter(router) {
  getAllUserRoute(router);
  getSingleUserRoute(router);
  addUserRoute(router);
  editUserRoute(router);
  deleteUserRoute(router);
  changeUserPasswordRoute(router);
};

function getSingleUserRoute(router) {
  router.post("/api/user/signle-user", usersController.getSingleUser);
}

function addUserRoute(router) {
  router.post("/api/user/add-user", usersController.postAddUser);
}

function editUserRoute(router) {
  router.post("/api/user/edit-user", usersController.postEditUser);
}

function deleteUserRoute(router) {
  router.post("/api/user/delete-user", usersController.getDeleteUser);
}

function changeUserPasswordRoute(router) {
  router.post("/api/user/change-password", usersController.changePassword);
}

function getAllUserRoute(router) {
  router.get("/api/user/all-user", usersController.getAllUser);
}
