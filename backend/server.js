const express = require("express")
const app = express()
const workoutRoutes = require("./routes/workouts")
const mongoose = require("mongoose")

//middleware
app.use(express.json())

// connect to Database
mongoose
.connect("mongodb://127.0.0.1/MERNAPP")
.then(()=>
    console.log("Connected to database successfully.")
)
.catch((err)=>
    console.error("Connection not successfull.", err)
)

// ROUTES
app.get("/", (req,  res)=>{
    res.json({message: "Welcome to the app!!"})
})
app.use("/api/workouts", workoutRoutes)
const PORT = process.env.PORT || 4000;
app.listen(PORT, ()=> console.log("App running on port:", PORT))
