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
return function (req,  next) {
/**
*  global method for handling any message from user
*
* @param {Array | String} message
*/
 req.app.context.flash = function (message) {
    switch (typeof message) {
      case 'string':
        eventEmitter.setMaxListeners(Infinity)
        eventEmitter.on('view', () => msg.push(message.trim()))
        eventEmitter.emit('view')
        break
      }
    }
/**
*  global method for handling any message from user display to views
*
* @return {Array}
*/
req.state.messages = function()  {
    const messages = msg.filter((val, i) => msg.indexOf(val) === i)
    const newMessage = messages.map((val) => val)
    return newMessage
  }
  return next()
  }
}

module.exports = naturalFlash;
