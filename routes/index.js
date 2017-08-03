// Require Modules ======================== //////
const express = require('express');
const router = express.Router();
const User = require('../models/user');





// home page route 
router.get('/', function (req, res) {
    
    if (!req.session.username) {
        res.redirect('/login');
    } else {
         console.log('session status from the home page');
    console.log(req.session);
    res.render('home', { username : req.session.username });
    }
   
});


// login route
router.route('/login')
    .get(function (req, res) {
        res.render('login');
    })
    .post(function (req, res) {

         // store user input in a variable
        var username = req.body.username;
        var password = req.body.password;

        // check user credentials
        if (User.find(username, password)) {
            req.session.username = username;
            req.session.isAuthenticated = true;
            console.log(req.session);
            res.redirect('/');
        } else {
            console.log('Sorry wrong password');
            res.redirect('/login');
        }

    });




    // logout
    router.get('/logout',function(req ,res){
        console.log('destroying user session');
       req.session.destroy();
        
        res.redirect('/login');
    });






// Export Routes ======================== //////
module.exports = router;

