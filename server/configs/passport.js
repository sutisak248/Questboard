const   passport = require('passport'),
        passportLocal = require('passport-local'),
        passportLocalMongoose = require('passport-local-mongoose'),
        User = require('../models/user.model'),
        LocalStrategy = require('passport-local').Strategy;
        
        
        const JWTstrategy = require('passport-jwt').Strategy;
        const ExtractJWT = require('passport-jwt').ExtractJwt;
        const opts = {};
        opts.jwtFromRequest = ExtractJWT.fromAuthHeaderAsBearerToken();
        opts.secretOrKey = 'TOP_SECRET';

        passport.use(new LocalStrategy({
            usernameField: 'email',
            passwordField: 'password'
        }, 
        (email, password, cb) => {        
         //this one is typically a DB call. Assume that the returned user object is pre-formatted and ready for storing in JWT  
            
        return User.findOne({email, password})
               .then(user => {
                   console.log("inthen")
                   if (!user) {
                       return cb(null, false, {message: 'Incorrect email or password.'})
                   }               
                   return cb(null, user, {message: 'Logged In Successfully'})
              })
              .catch(err => cb(err))
        }
        ));
    
     


       

    

passport.use(
    'signup',
    new LocalStrategy(
      {
        usernameField: 'email',
        passwordField: 'password'
      },
      async (email, password, done) => {
        try {
            User.findOne({email}).then(async user =>{
                if(!user){
                    const user = await User.create({ email, password });
                    return done(null, user);
                }
                else {
                    console.log("Already")
                    return done(null)
                }
            }   
            )
          
        } catch (error) {
          done(error);
        }
      }
    )
  );
passport.use(
    'login',
    new LocalStrategy(
      {
        usernameField: 'email',
        passwordField: 'password'
      },
      async (email, password, done) => {
        try {
          const user = await User.findOne({ email });
  
          if (!user) {
            return done(null, false, { message: 'User not found' });
          }
  
          const validate = await user.isValidPassword(password);
          console.log(validate)
          if (!validate) {
              console.log("wraong pass")
            return done(null, false, { message: 'Wrong Password' });
          }
  
          return done(null, user, { message: 'Logged in Successfully' });
        } catch (error) {
          return done(error);
        }
      }
    )
  );
passport.use(
    'pass',
    new JWTstrategy(opts, (jwt_payload, done) => {
      User.findById(jwt_payload._id).then(user => {
        if (user) return done(null, user);
        return done(null, false);
      }).catch(err => console.log(err));
  })
);