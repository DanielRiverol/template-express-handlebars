import express from "express";
import { engine } from "express-handlebars";
import {join,__dirname} from "./utils/index.js"
//settings
const app = express();
app.set("PORT", 3000);
app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", join(__dirname,'views'));

// console.log(join(__dirname, "views"));
// console.log(join(__dirname, "../public"));

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(join(__dirname, "../public")));

//routes
app.get("/", (req, res) => {
  res.render("home", { title: "HOME" });
});

//listeners
app.listen(app.get("PORT"), () => {
  console.log(`Server on port http://localhost:${app.get("PORT")}`);
});
