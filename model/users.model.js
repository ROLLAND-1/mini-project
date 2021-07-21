const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    email:String,
    password:String
})

UserSchema.statics.login = async function (email,password) {
    const user = await this.findOne({email});
    if (user) {
        const auth = password == user.password;
        if (auth) {
            return user;
        }
        throw Error('Incorrect password');
    }
    throw Error('Incorrect email');
}



module.exports = mongoose.model('user',UserSchema);