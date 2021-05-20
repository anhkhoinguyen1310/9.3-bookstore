var express = require('express');
var router = express.Router();



const usersControllers = require("../controllers/users.controller");

//C.R.U.D
//make post require from /api/Userss (Create)
router.post("/", usersControllers.createUsers);
router.post("/login", usersControllers.login);

//READ
 router.get("/:id", usersControllers.getSingleUsers);

// UPDATE
router.patch("/:id", usersControllers.update)

//Delete
router.delete("/:id", usersControllers.destroy)

module.exports = router;
