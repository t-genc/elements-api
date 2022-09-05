import express from "express"
import config from "config"
import * as dotenv from 'dotenv'
import { rateLimit } from "express-rate-limit"
import connectDb from "./utils/db/connect"
import routes from "./routes"

dotenv.config()

const port = config.get<number>('port')
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }));

const apiLimiter = rateLimit({
	windowMs: 5 * 60 * 1000,
	max: 100,
	standardHeaders: true,
	legacyHeaders: false,
	message: "Slow down 🐎, too many request..try again after a couple of minutes"
})


app.use("/api", apiLimiter, routes)

app.listen(port ,async () => {
	console.log("listening")
	await connectDb()

})
