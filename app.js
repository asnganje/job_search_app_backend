const express = require('express')
require('dotenv').config()
const app = express()
const usersRouter = require('./server/routes/userRoutes')
const applicationsRouter = require('./server/routes/applicationRoutes')
const jobsRouter = require('./server/routes/jobRoutes')
const connectDB = require('./server/db/connect')

app.use(express.json())
app.use('/api/v1/users', usersRouter)
app.use('/api/v1/applications', applicationsRouter)
app.use('/api/v1/jobs', jobsRouter)

app.use('*', (req, res)=> {
    res.json({msg: 'Resource or route not found'})
})

app.use((err, req, res, next)=> {
    res.json({msg: err})
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