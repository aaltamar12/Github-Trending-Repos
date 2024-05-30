const { Router } = require("express");

const { getPopularRepositories } = require("../controllers/github.controller");

const router = Router();

router.get("/status", (req, res) => {
  return res.status(200).json({ msg: "Service Running" });
});
router.get("/", getPopularRepositories);

module.exports = router;
