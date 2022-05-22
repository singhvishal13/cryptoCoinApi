const PORT = process.env.PORT || 8000
const express = require('express')

const coinRoute = require('./routes/coin')
const app = express()

app.use("/api", coinRoute)

app.listen(PORT, () =>{
    console.log("running on port " ,PORT)
})