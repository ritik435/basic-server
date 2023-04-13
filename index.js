import  Express  from "express";
const PORT=3000;
const app= Express();

app.get("/", (req, res) => {
  res.set('Access-Control-Allow-Origin', '*');
  res.json({ message: "Hello from server!" });
});

app.get("/users", (req, res) => {
  res.set('Access-Control-Allow-Origin', '*');
  res.json({ message: "Hello from user!" });
});

//app is listening to the port
app.listen(PORT,function(){
    console.log(`listening at http://localhost:${PORT}`);
})