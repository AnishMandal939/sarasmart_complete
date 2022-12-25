const authController = require("../controller/auth");
const { loginCheck, isAdmin, isAuth } = require("../middleware/auth");

module.exports = function authRouter(router) {
  checkIsUserAnAdminRoute(router);
  checkIsUserRoute(router);
  userLoginRoute(router);
  userRegistrationRoute(router);
};

function checkIsUserAnAdminRoute(router) {
  return router.post("/api/isadmin", authController.isAdmin);
}

function checkIsUserRoute(router) {
  return router.post(
    "/api/user",
    loginCheck,
    isAuth,
    isAdmin,
    authController.allUser
  );
}

function userRegistrationRoute(router) {
  return router.post("/api/signup", authController.postSignup);
}

function userLoginRoute(router) {
  return router.post("/api/signin", authController.postSignin);
}
