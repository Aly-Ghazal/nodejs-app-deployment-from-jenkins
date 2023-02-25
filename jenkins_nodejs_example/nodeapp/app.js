const express = require('express')
const app = express()
const port = 3000
app.get('/', (req, res) => {
    res.send('This Aly Ghazal\'s final project in ITI DevOps intensive code Training')
  })
  
  app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })
