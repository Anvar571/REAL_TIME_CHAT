const {
    login,
    register,
    getAllUsers,
    setAvatar,
    logOut,
  } = require("../controller/AuthCtrl");
  
  const router = require("express").Router();
  
  router.post("/login", login);
  router.post("/register", register);
  router.get("/allusers/:id", getAllUsers);
  router.get("/logout/:id", logOut);
  
  module.exports = router;
  