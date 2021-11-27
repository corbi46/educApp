const controller = require('../controllers/web.controller')
const express = require ('express')
const router = express.Router()

router.get('/', controller.getUsers)        // Get all
router.post('/', controller.createUser)     // Create 
router.put('/', controller.updateUser)      // Update (data in body)
router.delete('/', controller.deleteUser)  // Delete all
router.post('/createVideo', controller.createVideo)     // Create 

router.get('/getUserByName', controller.getUserByName) // Get by name
router.get('/getUserById', controller.getUserById)     // Get by id
router.get('/getVideos', controller.getVideos)              // Get by ticket by id
router.get('/getVideo/:id', controller.getVideoById)
router.put('/:id', controller.updateUser)                 // Update (data in body, id in url) ?
router.put('/updateVideo/:id', controller.updateVideo)
router.delete('/:id', controller.deleteUser)              // Delete (id in url)
router.delete('/deleteVideo/:id', controller.deleteVideo)              // Delete (id in url)

module.exports = router