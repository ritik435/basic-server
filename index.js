import  Express  from "express";
const PORT=3000;
const app= Express();

//app is listening to the port
app.listen(PORT,function(){
  console.log(`listening at http://localhost:${PORT}`);
})
app.get('/', (req, res) => {
  res.send('Hey this is my API running 🥳')
})

app.get('/about', (req, res) => {
  res.send('This is my about route..... ')
})


// Export the Express API
export default app;

