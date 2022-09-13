import * as dotenv from 'dotenv' 
dotenv.config()

const DB_URL=process.env.DB_URL
export default {
    port:8080,
    dbUrl:DB_URL
}