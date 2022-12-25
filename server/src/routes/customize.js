const multer = require("multer");
const customizeController = require("../controller/customize");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/uploads/customize");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "_" + file.originalname);
  },
});

const upload = multer({ storage: storage });

module.exports = function homePageSliderImageRouter(router) {
  getHomePageSliderImageRoute(router);
  deleteHomePageSliderImageRoute(router);
  uploadHomePageSliderImageRoute(router);
  uploadDashboardDataRoute(router);
};

function getHomePageSliderImageRoute(router) {
  return router.get(
    "/api/customize/get-slide-image",
    customizeController.getImages
  );
}

function deleteHomePageSliderImageRoute(router) {
  return router.post(
    "/api/customize/delete-slide-image",
    customizeController.deleteSlideImage
  );
}

function uploadDashboardDataRoute(router) {
  return router.post(
    "/api/customize/dashboard-data",
    customizeController.getAllData
  );
}

function uploadHomePageSliderImageRoute(router) {
  return router.post(
    "/api/customize/upload-slide-image",
    upload.single("image"),
    customizeController.uploadSlideImage
  );
}
