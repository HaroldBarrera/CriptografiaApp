const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
    res.send('Hello World! This is the server');
});



module.exports = router;