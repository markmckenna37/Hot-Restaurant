const tableData = require("./data/tabledata")
module.exports = function(app) {
    app.get("/api/tables", function(req, res) {
        return res.json(tableData)
      });
      app.post("/api/tables", function(req, res) {
        if (tableData.length < 5) {
            tableData.push(req.body);
            res.json(true);
        }
        else {
            res.json(false);
        }
      });
        
}