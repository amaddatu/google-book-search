const db = require('../models');
db.sequelize.sync().then(function() {
    console.log("Sync up database");
});


module.exports = app => {
    app.get("/chuck", (req, res) => {
        res.end("Eyyyy...");
    });
    app.get("/_api/non-cached", (req, res) => {
        res.json({ random: Math.random() });
    });
    app.get("/api/cached", (req, res) => {
        res.json({ random: Math.random() });
    });
    app.post("/api/model2", (req, res) => {
        db.Model2.create(req.body)
        .then( model2Entry => {
            // console.log(model2Entry);
            res.json(model2Entry);
        })
        .catch( err => {
            console.log(err);
            res.json(false);
        });
    });
    app.get("/api/model2/:id", (req, res) => {
        db.Model2.findOne({
            where: {
                id: req.params.id
            }
        })
        .then( results => {
            // console.log(results);
            res.json(results.dataValues);
        });
    });
}