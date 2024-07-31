const express = require("express");
const cors = require("cors");
const axios = require ('axios');
const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
  const { username } = req.body;
  try{
const r = await axios.put('https://api.chatengine.io/users/',
{username:username, secret:username, first_name:username},
{headers:{"private-key":"72b7953e-07e2-4862-9ea1-43f0318062fc"}}

)
return res.status(r.status).json(r.data)

  }catch(e){
console.log(e)
  }
  return res.json({ username: username, secret: "sha256..." });
});

app.listen(3001,()=>{
    console.log("Server is running on port 3001"); 
})