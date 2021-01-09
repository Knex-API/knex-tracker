var util = require('./util');
var { schemaBuilder } = util.publicApis;

function SchemaTracker() {
  this.definitions = [];

  return new Proxy(this, {
    get: (target, prop) => {
      if (!schemaBuilder.has(prop)) {
        return target[prop];
      } else {
        return target._trackDef(prop);
      }
    },
  });
}

SchemaTracker.prototype._trackDef = function(prop) {
  var def = { method: prop };
  this.definitions.push(def);
  return def;
};

module.exports = {
  SchemaTracker,
};
