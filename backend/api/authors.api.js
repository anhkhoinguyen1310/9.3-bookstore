var express = require('express');
var router = express.Router();



const authorsController = require("../controllers/authors.controller");

//C.R.U.D
//make post require from /api/authors (Create)
router.post("/", authorsController.createAuthor);

//READ
 router.get("/:id", authorsController.getSingleAuthor);

// UPDATE
router.patch("/:id", authorsController.update)

//Delete
router.delete("/:id", authorsController.destroy)

module.exports = router;
