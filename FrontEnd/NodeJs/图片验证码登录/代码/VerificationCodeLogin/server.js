const express = require("express");
const session = require("express-session");
const app = new express();
const bodyParser = require("body-parser")
const Router = require("./util/Router");
const cookieParser = require("cookie-parser");
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static("page"))
let secret = "WickYo";
app.use(cookieParser(secret))
app.use(session({
    secret,
    name: "session",
    resave: false,
    rolling: true,
    saveUninitialized: true,
    cookie: {
        maxAge: 300000
    },
}));
app.use(Router);
app.listen(10086, () => {
    console.log("服务启动成功")
})