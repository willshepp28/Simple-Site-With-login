// Require Modules ======================== //////
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const session = require('express-session');
const handlebars = require('express-handlebars');

const index = require('./routes/index');

const app = express();

// Middleware ======================== //////
app.engine('handlebars', handlebars({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');


app.use('/assets', express.static(path.join(__dirname, 'public')));



// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }
}));


app.use(function(req,res,next){
  
    
  
   if (!req.session.username){
           var username = req.session.username;
        var isAuthenticated = req.session.isAuthenticated = false;
         console.log(username + " loggin your session");
    console.log(isAuthenticated + " your login status")
   }
 
    

   
    next();
});


app.use('/', index);





// Start Server ======================== //////
app.listen(3000, function(){
    console.log('Server listening on port 3000');
});