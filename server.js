const express = require("express");
const bcrypt = require("bcrypt");
const knex = require("knex");

const register = require("./controls/register");
const signin = require("./controls/signin");
const profile = require("./controls/profile");
const image = require("./controls/image");

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// postgres://seedb:P6wxUiqyWSksLorae0wr96xNkhf2Jalc@dpg-cgr6cr5269v4ioo4lqu0-a/seedb

const db = knex({
  client: "pg",
  connection: {
    host: "dpg-cgr6cr5269v4ioo4lqu0-a",
    port: 5432,
    user: "seedb",
    password: "P6wxUiqyWSksLorae0wr96xNkhf2Jalc",
    database: "seedb",
  },
});
app.get("/", (req, res) => {
  res.json("Hello");
});

app.post("/register", (req, res) => {
  register.registerHandler(req, res, db, bcrypt);
});
app.post("/signin", (req, res) => {
  signin.signingHandler(req, res, db, bcrypt);
});
app.get("/profile/:id", (req, res) => {
  profile.profileHandler(req, res, db);
});
app.put("/image", (req, res) => {
  image.imageHandler(req, res, db);
});
app.listen(process.env.PORT || 3000);
