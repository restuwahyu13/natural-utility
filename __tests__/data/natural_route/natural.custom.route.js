const express = require('express')
const router = express.Router()
const fs = require('fs')
const path = require('path')
const axios = require('axios')

module.exports = function () {
  return [
    router.get('/test1', function (req, res, next) {
      const readFile = fs.createReadStream(path.join(__dirname, '../../../big.dummy.json'))

      var data = ''

      readFile.on('data', function (chunk) {
        data += chunk
      })

      readFile.on('end', function () {
        const parse = JSON.parse(data)
        res.json({ data: parse })
      })
    }),
    router.get('/test4', async function (req, res, next) {
      const fetchApi = await axios.get('https://jsonplaceholder.typicode.com/photos')
      res.json({ data: fetchApi.data })
    })
  ]
}
