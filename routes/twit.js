const router = require("express").Router();
const { getTweet } = require("../controller/app");

router.get("/tweet", getTweet);

module.exports = router;
