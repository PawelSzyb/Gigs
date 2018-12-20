const express = require("express");
const router = express.Router();

const gigsController = require("../controllers/gig");

router.get("/", gigsController.getGigsListPage);

router.get("/add", gigsController.getAddGigPage);

router.post("/add", gigsController.addGig);

module.exports = router;
