import mongoose from 'mongoose';

const Article = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        require: true
    },
    title: {
        type: String,
        default: '',
        require: true
    },
    text: {
        type: String,
        default: '',
        require: true
    },
    tags: {
        type: Array,
        default: [],
        require: true
    }
});

export default mongoose.model('Article', Article);
