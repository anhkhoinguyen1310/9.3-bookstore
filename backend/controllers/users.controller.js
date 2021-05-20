
const Users = require("../models/user");
const bcrypt = require("bcrypt");

const createUsers = async (req, res) => {
   try {  
    const users = await new Users({...req.body});
    await users.save()
    res.json({
        data: users
    }) 
   }
   catch(error){
    res.status(404).json({
      messaage: error.message
    })
   }
  };


  const getSingleUsers = async (req, res) => { 
    const users = await Users.findById(req.params.id);
    res.status(200).json({
        data: users,
      });
  }

  const update = async (req, res) => 
  {
    const users = await users.findByIdAndUpdate(
      req.params.id,
      {...req.body},
      {new: true},
      );
      console.log({users})
      await users.save()
    res.status(200).json({
        data: users,
      });
  }

  const destroy = async (req, res) => { 
    const users = await Users.findByIdAndDelete(req.params.id);
    res.status(204).json({
        data: users,
      });
  }


  //1. Find the user
  //2. if no user found, throw error,
  //3. if user found, compare pw,
  //4. if user found, compare pw is correct, send back user
  //4b. //4. if user found, compare pw is incorrect, send back error


  const login = async (req, res) => { 
    const {email, password} = req.body
    const users = await Users.findOne({email});

    if (!users) res.status(404).json({message: "User not found"})

    
   const passwordCorrect = await bcrypt.compare(password, users.password)
    console.log({passwordCorrect})
    if (passwordCorrect) {
      const accessToken = await users.generateToken()
      res.status(200).json({
        success: true,
        token: accessToken, 
        message: "Successfully Sign-in"
      })
    }
        else 
        {
          res.status(404).json({message: "password incorrect"})
        }
  }
  
  
  module.exports = {
    createUsers,
    getSingleUsers,
    update,
    destroy,
    login

  };
  