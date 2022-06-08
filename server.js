const express = require('express')
const app = express()
const cors = require('cors')
const PORT = process.env.PORT || 8000 
const users = [
    {
        id: 1, 
        date: '2022-06-5',
        username:'sullivan',
        firstName: 'Chigozie',
        surName: 'Amadike',
        important: true
    },

    {
        id: 2, 
        date: '2022-06-5',
        username:'stephanie',
        firstName: 'Chiamaka',
        surName: 'Anozie',
        important: true
    },

    {
        id: 3, 
        date: '2022-06-5',
        username:'judith',
        firstName: 'Chimuanaya',
        surName: 'Amadike'
    },

    {
        id: 5, 
        date: '2022-06-5',
        username:'sullivan',
        firstName: 'Chigozie',
        surName: 'Amadike',
        important: true
    },

    {
        id: 6, 
        date: '2022-06-5',
        username:'ebube',
        firstName: 'immaculate',
        surName: 'chelsea',
        important: false
    },



]

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:userID', (request, response) => {
    let user = +request.params.userID
    let userID = users.find(person => person.id === user)

    if(userID){
        response.json(userID)
    }else{
        response.status(204).end()
    }
})
app.listen(PORT, () => {
    console.log(`listening to port ${PORT}`)
})                      