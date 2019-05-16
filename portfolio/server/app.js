const express = require('express')
const cors = require('cors')

const app = express()
app.use(cors())
const port = 3000

app.get('/', (req, res) => {
    
    console.log("ROOT HIT");
    res.send('Hello World!');

})
 

app.get('/sample', (req, res) => {

    console.log("REQUEST HIT");

    res.send({
        success: true,
        message: 'Post saved successfully!'
    })

})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))