const express = require("express");
const Router = express.Router();
const {setString, getString} = require("./Redis");
const CryptoJS = require("crypto-js");
const captcha = require("./Code");
const fs = require("fs");

Router.use("*", (req, res, next) => {
    res.header("Access-Control-Allow-Origin", req.headers.origin);
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("Content-Type", "application/json;charset=utf-8");
    res.header("Access-Control-Allow-Credentials", true);
    next();
});

Router.post("/login", (req, res) => {
    let username = req.body.username;
    let password = CryptoJS.AES.decrypt(req.body.password, username).toString(CryptoJS.enc.Utf8);   // 解密
    let code = req.body.code.toLowerCase();
    // console.log(req)
    if(!req.signedCookies.session) {
        res.send({success: "no", msg: "验证码过期"})
        return;
    }
    console.log(req.signedCookies.session)
    getString(req.signedCookies.session).then(data => {
        if(code === data) {
            console.log("验证码正确")
            fs.readFile(__dirname + "/../user.conf", "utf8", (err, data) => {
                let dataArr = data.toString().split("=");
                if(username === dataArr[0]) {
                    if(password === dataArr[1]) {
                        // 设置30分钟
                        res.cookie("uid", username, {maxAge: 300000})
                        res.send({success: "ok", msg: "登录成功"})
                        return;
                    }
                }
                res.send({success: "no", msg: "用户名或密码错误"})
            })
        } else {
            res.send({success: "no", msg: "验证码错误"})
        }
    }).catch(err => {
        console.log(err)
    })
})

Router.get("/code", (req, res) => {
    let code = captcha();
    console.log(req.sessionID)
    setString(req.sessionID, code.text.toLowerCase(), 300)
    res.type("svg");
    res.status(200).send(code.data)
    res.end();
})
module.exports = Router;