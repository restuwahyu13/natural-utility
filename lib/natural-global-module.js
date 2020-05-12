/**
* natural-utility
* @author Copyright(c) 2019-2020 by Restu wahyu saputra
* MIT Licensed
*/
'use strict'
/**
* global module loader parallel, for load any module
*
* @param {  String | Array } input
* @param {  String | Array } module
* @return {Object} Object
*/
function NaturalModule (input, module) {
  this.configs = {}
  this.modules = undefined
  this.inputs = undefined
  switch (typeof module && typeof input) {
    case 'object':
      this.modules = this.injectModule(module)
      input.forEach(modules => {
        this.inputs = input.indexOf(modules)
        this.configs[modules] = {
          value: this.modules[this.inputs],
          writable: true,
          enumerable: true
        }
      })
      return Object.defineProperties(global, this.configs)
  }
}
/**
* function method for load any module in parallel
*
* @param { Array | String } module
*/
NaturalModule.prototype.injectModule = function (module) {
  this.modules = undefined
  this.value = undefined
  this.newValue = undefined
  switch (module.length > 0 && typeof module) {
    case 'object':
      this.value = module.filter((modules, i) => module.indexOf(modules.trim()) === i)
      this.newValue = this.value.join().replace(/ /gi, '').split(',')
      this.modules = this.newValue.map((modules, i) => require(`${modules}`))
      return this.modules
  }
}
/**
*global module to register each given module without the need to write (require) repeatedly, then the module will run in parallel, the module can also be accessed globally in each file or a different route.
*
* @param { Array } input
* @param { Array } module
*/
function globalModule (input, module) {
  switch (typeof module && typeof input) {
    case 'object':
      return new NaturalModule(input, module)
  }
}

module.exports = globalModule
