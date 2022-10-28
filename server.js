
const Express = require("express")
const cookieParser = require("cookie-parser")
const cors = require("cors")
const app = Express()

const PORT = 4000
app.use(cookieParser())
app.use(cors())
app.use(Express.json())
app.use(Express.urlencoded())

app.get("/light-mode", (req, res) => {
    res.cookie("theme", "light-mode")
    res.status(200).json({message: "light-mode cookie saved"})
})

app.get("/dark-mode", (req, res) => {
    res.cookie("theme", "dark-mode")
    res.status(200).json({message: "dark-mode cookie saved"})
})

app.listen(PORT, () => {
    console.log(`Listening on PORT ${PORT}`)
})
