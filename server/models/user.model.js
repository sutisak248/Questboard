const mongoose = require('mongoose'),
     bcrypt = require('bcrypt'),
passportLocalMongoose = require('passport-local-mongoose');

let UserSchema =  new mongoose.Schema({
    username : String,
    email : String,
    password : String,
    infoma :{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Infoma"
    },
    quests :[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Quest'
    }]
})
UserSchema.pre(
    'save',
    async function(next) {
      const user = this;
      const hash = await bcrypt.hash(this.password, 10);
  
      this.password = hash;
      next();
    }
);
UserSchema.methods.isValidPassword = async function(password) {
    const user = this;
    const compare = await bcrypt.compare(password, user.password);
  
    return compare;
}

UserSchema.plugin(passportLocalMongoose);
const User = mongoose.model('User', UserSchema) 



module.exports = User

