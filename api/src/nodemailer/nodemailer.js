var nodemailer = require("nodemailer");
const { host, port, secure, auth } = require("./config");

var transporter = nodemailer.createTransport({
  host: host,
  port: port,
  secure: secure,
  auth: {
    user: auth.user,
    pass: auth.pass,
  },
});

var mailOptions = {
  from: auth.user,
  to: "dlorko@gmail.com",
  subject: "Sending Email using Node.js",
  text: "That was easy!",
};

transporter.sendMail(mailOptions, function (error, info) {
  if (error) {
    console.log(error);
  } else {
    console.log("Email sent: " + info.response);
  }
});

