const app = require('./app')
const dotenv = require('dotenv')
const path = require('path')
const connectDatabase = require('./config/database')


dotenv.config({path:path.join(__dirname,"config/config.env")})
connectDatabase();
const server = app.listen(process.env.PORT, () => console.log(`Server running on port ${process.env.PORT}`));

process.on('unhandledRejection', (err)=>{
    console.log(`UNHANDLED REJECTION: ${err.message}`)
    console.log("shutting down due to unhandled rejection")
    server.close(()=>{
        process.exit(1)
    })
})



process.on('uncaughtException', (err)=>{
    console.log(`uncaughtException: ${err.message}`)
    console.log("shutting down due to uncaughtException")
    server.close(()=>{
        process.exit(1)
    })
})
