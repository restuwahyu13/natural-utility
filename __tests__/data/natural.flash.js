const express = require('express')
const router = express.Router()
const fs = require('fs')
const path = require('path')

router.post('/flash', (req, res, next) => {
  req.body.errors.forEach(errors => {
    req.flash(errors.title)
  })

  res.json({ data: req.body.errors })

  return next()
})

module.exports = router
