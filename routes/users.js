const express = require('express');
const path = require('path');


const router = express.Router();

router.route('/users')
.get(function(req, res) {
    res.sendFile(path.join(__dirname, '../', 'views', 'users.html'));
})
.post(function(req, res) {
    const username = req.body.username;
    const nickname = req.body.nickname;

    console.log(username);
    console.log(nickname);
    res.redirect("/");
})


module.exports = router;