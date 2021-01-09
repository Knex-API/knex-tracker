var util = require('util');

var debug = require('debug')('knex-tracker:DefinitionTracker');

var utils = require('./util');


util.inherits(DefinitionTracker, Function);
function DefinitionTracker(initialMethod) {
  DefinitionTracker.super_.call(this);
  debug('Created for initialMethod', initialMethod);
  this.initialMethod = initialMethod;
  this.calls = [];


  debug('making proxy for', this);
  this.myProxy = utils.makeFunctionProxyHandler(this);
  debug('making proxy done:', this.myProxy);
  return this.myProxy;
}

DefinitionTracker.prototype._proxyHandler = function() {
  debug('calling _proxyHandler in', this, 'with', arguments);
  // this.calls.push({ ...arguments });
  this.calls.push( ...arguments );
  // return this;
  return this.myProxy;
};

// DefinitionTracker.prototype._trackCall = function() {
// };

module.exports = {
  DefinitionTracker,
};
