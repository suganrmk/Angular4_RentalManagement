// ./express-server/app.js
require('rootpath')();
import express from 'express';
import path from 'path';
import logger from 'morgan';
import mongoose from 'mongoose';
import SourceMapSupport from 'source-map-support';
import bb from 'express-busboy';
var multer = require("multer");

var cors = require('cors');
var bodyParser = require('body-parser');
var expressJwt = require('express-jwt');
var config = require('config.json');

// import routes
import productRoutes from './routes/product.server.route';
import route from './route';


// define our app using express
const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// allow-cors
app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
    // allow preflight
    if (req.method === 'OPTIONS') {
        res.sendStatus(200);
    } else {
        next();
    }
});





// app.post("/upload", multer({ dest: "./uploads/" }).array("myfile[]", 12), function(req, res) {
//     console.log(req.files)
//     res.send(req.files);
// });

// express-busboy to parse multipart/form-data and x-www-form-urlencoded both
// bb.extend(app);




// configure app
app.use(logger('dev'));
app.use(express.static(path.join(__dirname, 'public')));


// use JWT auth to secure the api, the token can be passed in the authorization header or querystring
// app.use(expressJwt({
//     secret: config.secret,
//     getToken: function(req) {
//         if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
//             return req.headers.authorization.split(' ')[1];
//         } else if (req.query && req.query.token) {
//             return req.query.token;
//         }
//         return null;
//     }
// }).unless({ path: ['/users/authenticate', '/users/register', '/product/upload'] }));

// routes
app.use('/users', require('./controllers/users.controller'));

// set the port
// const port = process.env.PORT || 4000;

// connect to database
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/mern-todo-app', {
    useMongoClient: true,
});

// add Source Map Support
SourceMapSupport.install();

app.use('/product', productRoutes);
app.use('/route', route);

app.get('/', (req, res) => {
    return res.end('Api working');
});



// catch 404
app.use((req, res, next) => {
    res.status(404).send('<h2 align=center>Page Not Found!</h2>');
});




// start the server
// app.listen(port, () => {
//     console.log(`App Server Listening at ${port}`);
// });

// start server
var port = process.env.NODE_ENV === 'production' ? 80 : 4000;
var server = app.listen(port, function() {
    console.log('Server listening on port ' + port);
});