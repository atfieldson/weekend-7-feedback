const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 5000;
const pool = require('./modules/pool')

/** ---------- MIDDLEWARE ---------- **/
app.use(bodyParser.json()); // needed for angular requests
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('build'));

/** ---------- EXPRESS ROUTES ---------- **/
app.post("/feedback",(req, res) => {
    let feedback = req.body;
    console.log(req.body);
    pool.query(`INSERT INTO "feedback" 
    ("feeling", "understanding", "support", "comments")
    VALUES ( $1, $2, $3, $4)`, [feedback.feeling, feedback.understanding, feedback.support, feedback.comments])
    .then((results) => {
        res.send(201, results);
    }).catch((error) => {
        res.send(500, error)
    })
})

app.get("/feedback", (req, res) => {
    pool.query(`SELECT * FROM "feedback"`)
        .then((results) => {
            res.send(results.rows);
        }).catch((error) => {
            res.send(500);
            console.log('error', error);
        });
 });





/** ---------- START SERVER ---------- **/
app.listen(port, function () {
    console.log('Listening on port: ', port);
});