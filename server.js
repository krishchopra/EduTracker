const express = require("express");
const session = require("express-session");
const bodyParser = require("body-parser");

const app = express();


app.use(express.static("public"));
app.use(express.json());
app.use(session({ secret: "cats" }));
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
})

let port = process.env.PORT;
if (port == null || port == "") {
    port = 5000;
}
// listen for requests :)
const listener = app.listen(port, () => {
    console.log("Your app is listening on port " + listener.address().port);
});