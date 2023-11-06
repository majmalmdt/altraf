const express = require("express");
const mysql = require("mysql");
const history = require("connect-history-api-fallback");

const app = express();

let connection = mysql.createConnection({
    host: "69.49.235.107",
    user: "altar6l6_user",
    password: "uX0%u}39C,L]",
    database: "altar6l6_main_data",
});

connection.connect((err) => {
    if (err) {
        console.log("Error");
    } else {
        console.log("Ok");
    }
});

app.use(require("cors")({ origin: "*" }));
app.use(express.json());
app.use("/api", require("./api/api.js")(connection));
app.use("/", express.static(__dirname + "/spa"));
app.use(
    history({
        disableDotRule: true,
        verbose: true,
    })
);
app.use("/", express.static(__dirname + "/spa"));
app.listen(80, () => console.log("Server is running"));
