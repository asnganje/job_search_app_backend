const express = require('express')
const app = express()
const usersRouter = require('./server/routes/userRoutes')
const applicationsRouter = require('./server/routes/applicationRoutes')
const jobsRouter = require('./server/routes/jobRoutes')
const port = 3000;

app.use('/api/v1/users', usersRouter)
app.use('/api/v1/applications', applicationsRouter)
app.use('/api/v1/jobs', jobsRouter)


app.listen(port, ()=> {
    console.log(`Server is listening on port ${port}...`);
})