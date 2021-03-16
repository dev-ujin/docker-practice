const express = require("express");
const redis = require("redis");

const client = redis.createClient({
    host: "redis-server",
    port: 6379
})

const PORT = 8080;
const app = express();

client.set("number", 0);
app.get('/', (req, res) => {
    client.get("number", (err, number) => {
        client.set("number", parseInt(number) + 1);
        res.send("Number is going up! Number: " + number);
    })
})

app.listen(PORT);
console.log("Server is running...!");