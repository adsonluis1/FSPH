const express = require('express');
const session = require('express-session');
const fileStore = require('session-file-store')(session);
const autRouters = require('./routers/authRouters');
const app = express();
const port = 3000;

app.use(
    express.urlencoded({
        extended: true
    }
));

app.use(express.json());

//session middleware
app.use(session({
    name: 'session',
    secret: 'nosso_secret',
    resave: false,
    saveUninitialized: false,
    store: new fileStore({
        logFn: function() {},
        path: require('path').join(__dirname, 'sessions'),
    }),
}));

// assets path
app.use(express.static('assets'));

app.use((req,res,next) => {

    if (req.session.userid) {
        res.locals.session = req.session;
    }
   
    next();
    
});

app.get('/',(req,res) => {
    res.status(200).sendFile(__dirname + '/views/main.html')
});

app.use('/',autRouters);

app.listen(port);