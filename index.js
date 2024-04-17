const express = require('express');
const cors = require('cors');

require('dotenv').config()


const authRoutes = require("./routes/auth.js")

const app = express()
const PORT = process.env.PORT || 5000


app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get('/', (req, res) => {
    res.send("hello, world")
})

app.use("/auth", authRoutes)
app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`)
})