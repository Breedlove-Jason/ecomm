const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.get("/", (req, res) => {
  res.send(`
    <div>
      <form method="POST">
        <input name="email" placeholder="email" />
        <input name="password" placeholder="password" />
        <input name="passwordConfirmation" placeholder="password confirmation" />
        <button>Sign Up</button>
        </form>
        </div>`);
});

const bodyParser = (req, res, next) => {
  if (req.method === "POST") {
    req.on("data", (data) => {
      console.log();
      const parsed = data.toString("utf8").split("&");
      const formData = {};
      for (let i = 0; i < parsed.length; i++) {
        const [key, value] = parsed[i].split("=");
        formData[key] = value;
      }
      req.body = formData;
      next();
    });
  } else {
    next();
  }
};
app.post("/", bodyParser, (req, res) => {
  console.log("req.body", req.body);

  res.send("Account created");
});

app.listen(3000, () => {
  console.log("Example app listening on port 3000!");
});
