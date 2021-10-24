const express = require('express')

const port = process.env.PORT || 5000

const app = express()


app.get('/hello', (req,res) => {
    res.send({message: 'hello from server'})
})


app.listen(port, () => {
    console.log(`🖥️ Server listening on port ${port}`)
})