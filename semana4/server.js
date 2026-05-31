const express=require("express");
const app=express();

app.get("/",(req,res)=> {
  res.send("servidor funcionando correctamente");
});
app.listen(3000, () => {
    console.log("servidor ejecutandose en puerto 3000");
});


