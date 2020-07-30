const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * Get all of the items on the shelf
 */
router.get('/', (req, res) => {
    const queryString = `SELECT * from item;`;
    pool.query(queryString).then((result)=>{
        res.send(result.rows);
    }).catch((err)=>{
        console.log(`error is ${err}`);
        res.sendStatus(500);
    })
});

/**
 * Add an item for the logged in user to the shelf
 */
router.post('/', (req, res) => {
    console.log('POST req.body: ', req.body);
    console.log('POST req.user: ', req.user);
    console.log('POST req.body.description: ', req.body.description);
    
    const queryString = `INSERT INTO "item" ("description", "image_url")
        VALUES ( $1, $2);`;
    
    pool.query(queryString, [req.body.image_url, req.body.description]).then(( result ) => {
            // success
            console.log("POST successful")
            res.sendStatus(201);
        }).catch((err) => {
            // failure
            console.log("----->Error in POST:", err);
            res.sendStatus(500)
        })
});


/**
 * Delete an item if it's something the logged in user added
 */
router.delete('/:id', (req, res) => {

});


/**
 * Update an item if it's something the logged in user added
 */
router.put('/:id', (req, res) => {

});


/**
 * Return all users along with the total number of items 
 * they have added to the shelf
 */
router.get('/count', (req, res) => {

});


/**
 * Return a specific item by id
 */
router.get('/:id', (req, res) => {

});

module.exports = router;