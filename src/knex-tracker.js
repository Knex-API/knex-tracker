var util = require('util');

var { SchemaTracker } = require('./schema-tracker');
var { QueryTracker } = require('./query-tracker');

util.inherits(KnexTracker, Function);
function KnexTracker(config) {
  if (!(this instanceof KnexTracker))
    return new KnexTracker(config);
  KnexTracker.super_.call(this);

  this._config = config;
  this.trackedQueries = [];
  this.trackedSchemaDefinitions = [];

  // knex instances are callable, use target function instead
  /* istanbul ignore next */
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
  var query = new QueryTracker();
  this.trackedQueries.push(query);
  return query;
};

Object.defineProperty(KnexTracker.prototype, 'schema', {
  get: function() {
    var def = new SchemaTracker();
    this.trackedSchemaDefinitions.push(def);
    return def;
  },
});

Object.defineProperty(KnexTracker.prototype, 'trackedDefs', {
  get: function() {
    return this.trackedSchemaDefinitions;
  },
});


module.exports = {
  KnexTracker,
};
