const webmodels = require('../models/models.js')
const controller = {}

controller.getUsers = async (req, res) => {
    console.log("getUsers()")    
    const users = await webmodels.users.find()

    res.json(users)
}

controller.getUserByName = async(req, res) => {
    const name = req.query.name
    console.log("getUserByName(" + name + ")")  

    const user = await webmodels.users.find({ name: name })

    res.json(user)
}

controller.getUserById = async(req, res) => {
    const id = req.query.id
    console.log("getUserById(" + id + ")")    

    try {
        const user = await webmodels.users.findById(id)
        
        res.json(user)
    } catch (error) {
        res.json( { message: 'Wrong ID!' })
    }

}

controller.getVideoById = async(req, res) => {
    const id = req.params.id
    console.log("getVideoById(" + id + ")")    

    try {
        const video = await webmodels.videos.findById(id)
        
        res.json(video)
    } catch (error) {
        res.json( { message: 'Wrong ID!' })
    }

}

controller.updateVideo = async(req, res) => {
    const Video = {
        title: req.body.title,
        likes: req.body.likes,
        url: req.body.url,
        comments: req.body.comments,
    }

    console.log(Video)
    console.log(req.params.id)
    await webmodels.videos.findByIdAndUpdate(req.params.id, {$set: Video}, {new:true})
    res.json({
        'message':'Video updated' + req.params.id
    })
    
}

controller.updateUser = async(req, res) => {
    const User = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        gender: req.body.gender,
        edad: req.body.edad,
    }

    console.log(User)
    console.log(req.params.id)
    await webmodels.users.findByIdAndUpdate(req.params.id, {$set: User}, {new:true})
    res.json({
        'message':'User updated'
    })
    
}

controller.deleteUser = async(req, res) => {
    const id = req.params.id
    console.log("deleteUser(" + id + ")") 

    try {
        await webmodels.users.findByIdAndRemove(id)
        
        res.json( {message: "User with ID: "+ id + " deleted." })
    } catch (error) {
        res.json( { message: 'Wrong ID!' })
    }
}

controller.deleteUsers = async(req, res) => {
    try {
        await webmodels.users.remove({}, function(err){
        })

        res.json( {message: "Users deleted." })
    } catch (error) {
        res.json( { message: 'Not Removed!' })
    }
}

controller.createUser = async (req, res) => {
    const User=webmodels.users
    user= new User(req.body)

    console.log("user leido")
    console.log(req)

    await user.save()
    res.json({
        'message': 'user saved'
    })
}

controller.getVideos = async (req, res) => {
    console.log("getVideos()")    
    const videos = await webmodels.videos.find()

    res.json(videos)
}


controller.createVideo = async (req, res) => {
    const Video=webmodels.videos
    video= new Video(req.body)

    console.log("Video a crear")
    console.log(req.body)

    await video.save()
    res.json({
        message: 'Video saved. ID = ' + video._id
    })
}


controller.deleteVideo = async(req, res) => {
    const id = req.params.id
    console.log("deleteVideo(" + id + ")") 

    try {
        await webmodels.videos.findByIdAndRemove(id)
        
        res.json( {message: "Video with ID: "+ id + " deleted." })
    } catch (error) {
        res.json( { message: 'Wrong ID!' })
    }
}

module.exports = controller