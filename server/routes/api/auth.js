const express = require('express');
const mongodb = require('mongodb'),
      jwt = require('jsonwebtoken'),
      passport = require('passport');
      require('../../configs/passport'),
      User = require('../../models/user.model'),
      bodyParser = require('body-parser').json();

        
const router = express.Router();

router.post('/signup',
    passport.authenticate('signup', { session: false }),
    async (req, res, next) => {
      res.json({
        message: 'Signup successful',
        user: req.user
      });
    }
  );

router.post('/login',async (req, res, next) => {
      passport.authenticate(
        'login',
        async (err, user, info) => {
          try {
            if (err || !user) {
                message = info.message
                console.log("have err")
                return res.json({
                    message:message,
                    success: false
                });
            }
  
            req.login(
                user, { session: false },
                async (error) => {
                    if (error) return next(error);
                        const payload = {
                            _id: user._id,
                            email: user.email 
                        };
                        // console.log(payload.email)
                        const token = jwt.sign(payload, 'TOP_SECRET');        
                        return res.json({ 
                            token :'Bearer '+token ,
                            success : true
                    });
                }
            );
          } catch (error) {
            return next(error);
          }
        }
      )(req, res, next);
    }
);
router.get('/test',passport.authenticate('pass',{
    session:false
}),(req,res)=>{
    return res.json({
        user:"Hee"
    })
})


module.exports = router;