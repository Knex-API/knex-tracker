var { SchemaTracker } = require('./schema-tracker');
var { QueryTracker } = require('./query-tracker');

function KnexTracker(config) {
  if (!(this instanceof KnexTracker))
    return new KnexTracker(config);

  this._config = config;
  return new Proxy(this, {
    apply: (target, thisArgument, args) => {
      return this._trackQuery();
    }
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
