const express = require("express");

const router = express.Router();

const news = require("../actions/news");

router.get("/", (req, res) => {
  news
    .get(req.query)
    .then((result) => res.json(result))
    .catch((err) =>
      res
        .status(err.status || 400)
        .send({ return_code: 1, return_msg: err.message || err })
    );
});

module.exports = router;
