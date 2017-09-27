// Get and use Express:
var express = require('express');
var app = express();

//Get and use Session:
var session = require('express-session');
app.use(session({secret: 'imsuperradicalman', resave: true, saveUninitialized: true}));
var cookieParser = require('cookie-parser');
app.use(cookieParser('imsuperradicalman'));

// Get and use Path:
var path = require('path');

// Get and use BodyParser:
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Get and use Mongoose:
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/trivia');
var Schema = mongoose.Schema;

// Direct to the Angular static files:
app.use(express.static(path.join(__dirname, './public/dist')));

// Mongoose Schemas:
var GameSchema = new mongoose.Schema({
    name: {type: String},
    score: {type: Number},
    percentage: {type: Number}
}, {timestamps: true });
mongoose.model('Game', GameSchema);
var Game = mongoose.model('Game');

var QuestionSchema = new mongoose.Schema({
    content: {type: String, required: true, minlength: 15},
    correctAnswer: {type: String, required: true},
    fakeAnswer1: {type: String, required: true},
    fakeAnswer2: {type: String, required: true}
}, {timestamps: true});
mongoose.model('Question', QuestionSchema);
var Question = mongoose.model('Question');



// Routes for talking to Database:
app.post('/question', function(req, res){
    Question.create(req.body, function(err, data){
        if(err){
            console.log("There was an error saving the question to the database.")
        } else {
            res.json(data);
        }
    })
});

app.get('/question', function(req, res){
    Question.find({}, function(err, questions){
        if(err){
            console.log("There was an error getting the question array from the database.");
        } else{
            res.json(questions);
        }
    })
})

app.post('/game', function(req, res){
    Game.create(req.body, function(err, game){
        if(err){
            console.log("There was an error saving the game in the database.");
        } else {
            res.json(game);
        }
    })
})

app.get('/game', function(req, res){
    Game.find({}, function(err, games){
        if(err){
            console.log("There was an error getting the games from the database.");
        } else{
            res.json(games);
        }
    }).sort('-percentage');
})

app.all('*', (req, res, next)=>{
    res.sendFile(path.resolve("./public/dist/index.html"));
});

// Setting server to listen:
app.listen(8000, function(){
    console.log("Listening on port 8000.");
});