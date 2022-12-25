const categoryController = require("../controller/categories");
const multer = require("multer");
const { loginCheck } = require("../middleware/auth");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/uploads/categories");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "_" + file.originalname);
  },
});

const upload = multer({ storage: storage });

module.exports = function productCategoryRouter(router) {
  getAllProductCategoryRoute(router);
  addProductCategoryRoute(router);
  deleteProductCategoryRoute(router);
  editProductCategoryRoute(router);
};

function getAllProductCategoryRoute(router) {
  return router.get(
    "/api/category/all-category",
    categoryController.getAllCategory
  );
}

function addProductCategoryRoute(router) {
  return router.post(
    "/api/category/add-category",
    loginCheck,
    upload.single("cImage"),
    categoryController.postAddCategory
  );
}

function editProductCategoryRoute(router) {
  return router.post(
    "/api/category/edit-category",
    loginCheck,
    categoryController.postEditCategory
  );
}

function deleteProductCategoryRoute(router) {
  return router.post(
    "/api/category/delete-category",
    loginCheck,
    categoryController.getDeleteCategory
  );
}
