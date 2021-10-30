const express = require("express");
const router = express.Router();

router.get("/test",(req,res)=> {
  res.send("hello");
});
router.post("/add",(req,res)=>{
  const route = req.body.route;
  const link = req.body.link;
  router.get(`/${route}`,(req,res)=>res.redirect(link));
  res.send("done");
  console.log(router);
})


module.exports = router