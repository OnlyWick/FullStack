const redis = require("redis");
const client = redis.createClient({
    host: "192.168.56.101",
    port: 6379
})
client.on("connect", error => {
    if(!error) {
        console.log("connect to redis")
    }
})
client.on("error", error => {
    throw new Error(error)
})
function setString(key, value, expire) {
    return new Promise((resolve, reject) => {
        client.set(key, value, (error, replay) => {
            if(error) {
                reject("设置失败")
            }
            if(expire) {
                client.expire(key, expire);
            }
            resolve("设置成功")
        });
    })
}
function getString(key) {
    return new Promise((resolve, reject) => {
        if(key) {
            client.get(key, (error, replay) => {
                if(error) {
                    reject(`获取${key}失败`)
                }
                resolve(replay);
            })
        }
    })
}
module.exports = {
    setString,
    getString
}