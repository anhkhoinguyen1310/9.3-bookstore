var express = require('express');
var router = express.Router();

var authorsRouter = require("./authors.api");
router.use("/authors", authorsRouter);

var usersRouter = require("./users.api");
router.use("/users", usersRouter);

module.exports = router;
