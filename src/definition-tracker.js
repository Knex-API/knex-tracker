var util = require('util');

var debug = require('debug')('knex-tracker:DefinitionTracker');

var utils = require('./util');


util.inherits(DefinitionTracker, Function);
function DefinitionTracker(initialMethod) {
  DefinitionTracker.super_.call(this);
  debug('Created for initialMethod', initialMethod);
  this.initialMethod = initialMethod;
  this.calls = [];

  return utils.makeFunctionProxyHandler(this);
}

DefinitionTracker.prototype._proxyHandler = function() {
  debug('calling _proxyHandler in', this, 'with', arguments);
  // this.calls.push({ ...arguments });
  this.calls.push( ...arguments );
  // return this;
  return this.proxy;
};

DefinitionTracker.prototype[util.inspect.custom] = function() {
  return this;
};

module.exports = {
  DefinitionTracker,
};
