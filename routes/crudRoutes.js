const { Router } = require("express");
const router = Router();
const {
  getAllData,
  getDataByID,
  addData,
  updateItemByID,
  deleteItemByID,
} = require("../controllers/crudController.js");

router.get("/", getAllData);
router.get("/:id", getDataByID);
router.post("/add", addData);
router.put("/:id", updateItemByID);
router.delete("/:id", deleteItemByID);

module.exports = router;
