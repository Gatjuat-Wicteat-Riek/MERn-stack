const express = require("express")
const router = express.Router()
const {
    createWorkout,
    getWorkouts,
    getWorkout,
    deleteWorkout,
    updateWorkout,
} = require("../controllers/workoutController")

//Getting the routes
router.get("/", getWorkouts)

//gettting the single workouts
router.get("/:id", getWorkout)

// inserting the data into the app
router.post("/", createWorkout)

// Updating the data in the document
router.patch("/:id", updateWorkout)

// deleting the document
router.delete("/:id", deleteWorkout)



module.exports = router