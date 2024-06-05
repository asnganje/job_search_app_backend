const express = require('express')
const morgan = require('morgan');
require('express-async-errors')
require('dotenv').config()
const app = express()
const authRouter = require('./server/routes/authRouter')
const jobsRouter = require('./server/routes/jobRoutes')
const connectDB = require('./server/db/connect')

app.use(morgan('combined'))
app.use(express.json())
app.use('/api/v1/auth', usersRouter)
app.use('/api/v1/jobs', authRouter)

app.use('*', (req, res)=> {
    res.json({msg: 'Resource or route not found'})
})

app.use((err, req, res, next)=> {
    res.json({msg: "Internal controller/middleware error"})
})
const port = process.env.PORT
const url = process.env.MONGO_URI

const start = async () => {
    try {
        await connectDB(url)
        app.listen(port, ()=> {
            console.log(`Server is listening on port ${port}...`);
        })
    } catch (error) {
        console.log(error);
    }
}
start()