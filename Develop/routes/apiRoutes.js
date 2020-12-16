const fs = require('fs');

module.exports = function(app){

let notes = require("../db/db.json")

app.get("/api/notes", (req, res) => {
    return res.json(notes)
})

app.get("/api/notes/:id", (req, res) => {
    // console.log(req.params.id)
    const id = req.params.id;
    let fnote;

    notes.forEach(n => {
        if(id == n.id){
            fnote = n;
            return res.json(fnote)
        }
    })
    return res.json(false)

})
