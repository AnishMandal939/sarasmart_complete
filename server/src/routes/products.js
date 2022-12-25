const multer = require("multer");
const productController = require("../controller/products");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/uploads/products");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "_" + file.originalname);
  },
});

const upload = multer({ storage: storage });

module.exports = function productRouter(router) {
  getAllProductsRoute(router);
  postProductsByCategoryRoute(router);
  postProductsByPriceRoute(router);
  postWishListProductRoute(router);
  postCartProductRoute(router);
  postProductRoute(router);
  editProductRoute(router);
  deleteProductRoute(router);
  getProductByIdRoute(router);
  addProductReviewRoute(router);
  deleteProductReviewRoute(router);
};

function postProductsByCategoryRoute(router) {
  return router.post(
    "/api/product/product-by-category",
    productController.getProductByCategory
  );
}

function postProductsByPriceRoute(router) {
  return router.post(
    "/api/product-by-price",
    productController.getProductByPrice
  );
}

function postWishListProductRoute(router) {
  return router.post(
    "/api/product/wish-product",
    productController.getWishProduct
  );
}

function postCartProductRoute(router) {
  return router.post(
    "/api/product/cart-product",
    productController.getCartProduct
  );
}

function postProductRoute(router) {
  return router.post(
    "/api/product/add-product",
    upload.any(),
    productController.postAddProduct
  );
}

function editProductRoute(router) {
  return router.post(
    "/api/product/edit-product",
    upload.any(),
    productController.postEditProduct
  );
}

function deleteProductRoute(router) {
  return router.post(
    "/api/product/delete-product",
    productController.getDeleteProduct
  );
}

function getProductByIdRoute(router) {
  return router.post(
    "/api/product/single-product",
    productController.getSingleProduct
  );
}

function addProductReviewRoute(router) {
  return router.post(
    "/api/product/add-review",
    productController.postAddReview
  );
}

function deleteProductReviewRoute(router) {
  return router.post(
    "/api/product/delete-review",
    productController.deleteReview
  );
}

function getAllProductsRoute(router) {
  return router.get(
    "/api/product/all-product",
    productController.getAllProduct
  );
}
