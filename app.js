const express = require("express");
const axios = require("axios");
const app = express();
const port = 8000;

//api to getch users data
app.get("/fetch_data", (req, res) => {
  axios.get("https://randomuser.me/api/?results=10").then(
    (response) => {
      console.log(response.data);
      res.status(200).send({
        data: response.data,
        msg: "success",
      });
    },
    (error) => {
      console.log(error);
      res.status(400).send({
        err: error,
        msg: "failed to fetch",
      });
    }
  );
});

//function to fetch user data
function fetchUSer() {
  axios.get("https://randomuser.me/api/?results=10").then(
    (response) => {
      console.log(response.data);
    },
    (error) => {
      console.log(error);
    }
  );
}

//server port
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
