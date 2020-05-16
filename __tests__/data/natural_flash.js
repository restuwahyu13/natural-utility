const express = require('express')
const router = express.Router()
const fs = require('fs')
const path = require('path')

module.exports = function () {
  return [
        router.get("/tests5", async (req, res, next) => {
          const errorsData =  await fs.readFileSync(path.join(__dirname, '../../small.dummy.json'), { encoding: 'utf-8' })
          const newErrorMessages = JSON.parse(errorsData)
           res.status(200).json({ errors: newErrorMessages });
        }),
        router.post("/tests6",  async(req, res, next) => {
            req.body.errors[0].forEach((errors, i) => {
                  req.flash(errors.title);
            });
            res.status(200).json({errors: req.body.errors});
        })
    ]
}
