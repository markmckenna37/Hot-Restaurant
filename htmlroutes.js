const path = require("path");
module.exports = function (app) {
    app.get("/", function (req, res) {
        res.sendFile(path.join(__dirname, "view.html"));
    });

    app.get("/tables", function (req, res) {
        res.sendFile(path.join(__dirname, "tables.html"));
    });
    app.get("/add", function (req, res) {
        res.sendFile(path.join(__dirname, "add.html"));
    });
}