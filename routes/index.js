const express = require("express");
const router = express.Router();
const storeController = require("../controllers/storeController");
const { catchErrors } = require("../handlers/errorHandlers");

router.get("/", catchErrors(storeController.getStores));
router.get("/stores", catchErrors(storeController.getStores));
router.get("/stores/page/:page", catchErrors(storeController.getStores));

router.get("/add", storeController.addStore);
router.post(
  "/add",
  storeController.upload,
  catchErrors(storeController.resize),
  catchErrors(storeController.createStore)
);

router.get("/stores/:id/edit", catchErrors(storeController.editStore));
router.post(
  "/add/:id",
  storeController.upload,
  catchErrors(storeController.resize),
  catchErrors(storeController.updateStore)
);

router.get("/store/:slug", catchErrors(storeController.getStoreBySlug));

router.get("/api/search", catchErrors(storeController.searchStores));

module.exports = router;

//=> {
//console.log("Hey guys");
//res.send("Моя первая серверная страница!");
// const bogfront = { name: "Boglan", age: 25 };
// res.json(req.query);
// router.get("/test/:name/:model", (req, res) => {
//   res.json(req.params);
//res.render("index");
//};

// router.get("/hello", (req, res) => {
//   res.render("hello", {
//     title: "My first title",
//     age: 25,
//   });
// });
