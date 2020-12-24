const   express = require('express'),
        bodyParser = require('body-parser'),
        cors= require('cors'),
        mongoose = require('mongoose'),
        passport =  require('passport');
        require('./configs/passport'),
        passportLocalMongoose = require('passport-local-mongoose'),
        passportLocal = require('passport-local'),
        User = require('./models/user.model'),
        methodOverride = require("method-override")
        
        

const app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(require('express-session')({
    secret: 'Qusetboard',
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(methodOverride("_method"));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


mongoose.connect("mongodb+srv://chanon:132231@cluster0-broqy.mongodb.net/Questboard?retryWrites=true&w=majority", {useNewUrlParser:true})
.then(()=>{
    console.log('successfully');
})
.catch(e=>console.log('error'))

app.use(bodyParser.json())
app.use(cors());


const posts = require('./routes/api/posts');
const auth = require('./routes/api/auth');
app.use('/api/posts',posts);
app.use('/api/auth',auth);
const port = process.env.PORT || 5000

app.listen(port,()=>console.log('server start at '+port))