const express = require("express");
const router = express.Router();

const {
  createShortUrl,
  redirectUrl,
} = require("../controllers/urlController");

// POST → create short URL
router.post("/shorten", createShortUrl);

// GET → redirect
router.get("/:shortCode", redirectUrl);

module.exports = router;
