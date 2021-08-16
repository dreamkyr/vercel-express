const express = require("express");
const router = express.Router();

/**
 * GET product list.
 *
 * @return product list | empty.
 */
router.get("/", async (req, res) => {
  try {
    throw('Manually generated Error');
  } catch (error) {
    console.error('###error log:', error);
    return res.status(500).send("Server error");
  }
});

module.exports = router;
