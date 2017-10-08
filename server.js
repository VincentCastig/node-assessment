const express = require('express')
const bodyParser = require('body-parser')
const userCtrl = require('./usersCtrl')
const port = 3000

const app = express()

app.use(bodyParser.json());

app.get('/api/users', userCtrl.getUsers)
app.get('/api/users/:userId', userCtrl.getUserById)
app.get('/api/admins', userCtrl.getAdmins)
app.get('/api/nonadmins', userCtrl.getNonAdmins)
app.get('/api/user_type/:userType', userCtrl.getUserByType)
app.put('/api/users/:userId', userCtrl.putUserById)
app.post('/api/users', userCtrl.addUser)
app.delete('/api/users/:userId', userCtrl.deleteUser)


app.listen( port, () => {
    console.log(`Hey dude, I'm listening on port ${port}`)
})