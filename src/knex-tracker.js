var util = require('util');

var { SchemaTracker } = require('./schema-tracker');
var { QueryTracker } = require('./query-tracker');

util.inherits(KnexTracker, Function);
function KnexTracker(config) {
  if (!(this instanceof KnexTracker))
    return new KnexTracker(config);
  KnexTracker.super_.call(this);

  this._config = config;

  // knex instances are callable, use target function instead
  var target = () => {};

  return new Proxy(target, {
    apply: (target, thisArgument, args) => {
      return this._trackQuery();
    },
    get: (target, prop) => {
      return this[prop];
    },
    getPrototypeOf: t => Object.getPrototypeOf(this),
  });
}

KnexTracker.prototype.table = function() {
  return this._trackQuery();
};

KnexTracker.prototype._trackQuery = function() {
  return new QueryTracker();
};

Object.defineProperty(KnexTracker.prototype, 'schema', {
  get: function() {
    return new SchemaTracker();
  },
});

module.exports = {
  KnexTracker,
};
