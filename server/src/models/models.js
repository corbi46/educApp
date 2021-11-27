const mongoose = require('mongoose')
const Schema = mongoose.Schema

user_schema = new Schema({
    name: String,
    email: String,
    password: String,
    gender: String,
    edad: Number
})

video_schema = new Schema({
    title: String,
    likes: Number,
    url: String,
    comments: [{
        username: String,
        body: String
    }]
})

module.exports = {
    users: mongoose.model('users', user_schema),
    videos: mongoose.model('videos', video_schema),
}