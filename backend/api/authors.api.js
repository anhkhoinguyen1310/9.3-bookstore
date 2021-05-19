var express = require('express');
var router = express.Router();



const authorsController = require("../controllers/authors.controller");

//make post require from /api/authors
router.post("/", authorsController.createAuthor);


module.exports = router;
