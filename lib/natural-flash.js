/**
* natural-utility
* @author Copyright(c) 2019-2020 by Restu wahyu saputra
* MIT Licensed
*/
'use strict'
/**
* Module dependencies.
* @private
*/
var events = require('events')
var eventEmitter = new events.EventEmitter()
var msg = []
/**
* flash message middleware,  for handling any message
*
* @return {Function}
*/
function naturalFlash () {
  return function (req, res, next) {
    /**
*  global method for handling any message from user
*
* @param {Array | String} message
*/
    req.flash = function (message) {
      switch (typeof message) {
        case 'string':
          eventEmitter.setMaxListeners(Infinity)
          eventEmitter.on('view', () => msg.push(message.trim()))
          eventEmitter.emit('view')
          const messages = msg.filter((val, index) => msg.indexOf(val) === index)
          const newMessage = messages.map((val) => val)
          res.cookie('natural_id', newMessage, { maxAge: 3600, httpOnly: true })
          break
      }
    }
    /**
*  global method for handling any message from user display to views
*
* @return {Array}
*/
    res.locals.messages = () => req.cookies.natural_id
    next()
  }
}

module.exports = naturalFlash
