const express = require("express");
const router = express.Router();

const gigsController = require("../controllers/gig");

router.get("/", gigsController.getGigsListPage);

module.exports = router;
