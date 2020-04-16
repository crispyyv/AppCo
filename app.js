const fs = require("fs");
const path = require("path");
const express = require("express");
const config = require("config");

const startAndCreate = require(path.resolve(__dirname, "./db/script"));

const data = {
  users: JSON.parse(fs.readFileSync("db/users.json")),
  users_statistic: JSON.parse(fs.readFileSync("db/users_statistic.json")),
};

const dbPath = path.resolve(__dirname, "db/usersInfo.db");

const app = express();

const PORT = config.get("port") || 5000;

app.listen(PORT, () => {
  console.log(`App has been started on port ${PORT}...`);
});

app.get("/users", (req, res) => {
  startAndCreate(dbPath, data.users, "users")
    .then((result) => res.send(result))
    .catch((err) => console.log(err.message));
});

app.get("/users/:id", (req, res) => {
  let id = req.params.id;
  startAndCreate(dbPath, data.users_statistic, "users_statistic")
    .then((result) => {
      const filtered = result.filter((user) => {
        user.date = new Date(user.date).toLocaleString("en-US", {
          month: "short",
          day: "numeric",
        });
        return user.user_id == id;
      });
      res.send(filtered);
    })
    .catch((err) => console.log(err.message));
});
