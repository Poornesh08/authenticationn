const express = require('express')
const dbase=require('./config/dbconnection');
const route=require('./router/userout')
const app = express();
const userRoute=require('./router/userout')

const port = 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
    res.send("namaskaragalu........");
})
app.listen(port, () => {
    console.log("Server is running on the port : 5000");
});


app.use("/user",userRoute)
app.get("/result", (req, res) => {
    res.sendFile(__dirname + "/view/result.html");
});

app.get("/err", (req, res) => {
    res.sendFile(__dirname + "/pages/err.html");
});
