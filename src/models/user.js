import mongoose from 'mongoose';

const User = new mongoose.Schema({
    name: {
        type: String,
        default: '',
        required: true
    },
    avatar: {
        type: String,
        default: '',
        required: true
    }
});

User.path('avatar').validate((val) => {
    const urlRegex = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-/]))?/;
    return urlRegex.test(val);
}, 'Invalid URL.');

export default mongoose.model('User', User)
