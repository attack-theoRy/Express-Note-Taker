const fs = require('fs');

module.exports = function(app)

var notes = require("../db/db.json")

app.get("/api/notes", (req, res) => {
    return res.json(notes)
}