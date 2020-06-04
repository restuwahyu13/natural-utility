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
  switch (module.length > 0 && typeof module) {
    case 'object':
      this.modules = module.filter((modules, i) => module.indexOf(modules.trim()) === i)
      .join().replace(/ /gi, '').split(',').map((modules, i) => require(`${modules}`))
      return this.modules
  }
}
/**
*global module to register each given module without the need to rewrite require, then the module will be run as parallel, the module can also be accessed as a global in every file or route in many ways, which you haven't to to re-register the same module as you want to use it.
*
* @param { Array } input
* @param { Array } module
*/
function globalModule (input, module) {
  switch (typeof module && typeof input) {
    case 'object':
      this.modules = new NaturalModule(input, module)
      return this.modules
  }
}

module.exports = globalModule
