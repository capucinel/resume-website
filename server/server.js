const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");

const details = require("./details.json");

const app = express();
app.use(cors({
  origin: "*"
}));
app.use(bodyParser.json());

app.listen(4000, () => {
  console.log("The server started on port 4000 !!!!!!");
});

app.get("/", (req, res) => {
  res.send(
    "<h1 style='text-align: center'>Wellcome to FunOfHeuristic <br><br>😃👻😃👻😃👻😃👻😃</h1>"
  );
});

app.post("/sendmail", (req, res) => {
  console.log("request came" + req);

  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: details.email,
      pass: details.password
    }
  });

  let mailOptions = {
    from: 'My Personal WebSite <capucine.leclerc@gmail.com>',
    to: 'capucine_49@hotmail.com',
    subject: req.body.object,
    text: req.body.message
    };

  transporter.sendMail(mailOptions, (err, info) => {
    if (err)
      console.log(err)
    else
      console.log(info);
      res.send(info);
      // transporter.close();
  });
});

module.exports = app;
