const mongoose = require('mongoose')

const PostSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true,
    },
    postimage:{
        type : String,
    },
    authorId : {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'user',
        required : true  
    },
    likes : {
        type : Array,
        default : 0
    },
    comments : [{
        user:{
            type : mongoose.Schema.ObjectId,
            required : true
        },
        username:{
            type : String,
            required : true
        },
        userimg:{
            type : String
        },
        comment : {
            type : String,
            required : true
        }
    }]
}, {
    timestamps: true
});

const Post = mongoose.model('Post', PostSchema);

module.exports = Post;