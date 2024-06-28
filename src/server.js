import express from "express";
import bodyParser from "body-parser";
import viewEngine from "./config/viewEngine";
import initWenRoutes from "./route/web";
require("dotenv").config();

let app = express();

//config app

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

viewEngine(app);
initWenRoutes(app);

let port = process.env.PORT || 6969;
//Port === undefined => 6969
app.listen(port, () => {
  //callback
  console.log("Backend Nodejs is running in the port: " + port);
});
