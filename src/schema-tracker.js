var util = require('./util');
var { schemaBuilder } = util.publicApis;

var { DefinitionTracker } = require('./definition-tracker');

function SchemaTracker() {
  this.definitions = [];

  return new Proxy(this, {
    get: (target, prop) => {
      console.log('getting', prop, 'from', target, 'and its:', !schemaBuilder.has(prop));
      if (!schemaBuilder.has(prop)) {
        return target[prop];
      } else {
        return target._trackDef(prop);
      }
    },
  });
}

SchemaTracker.prototype._trackDef = function(prop) {
  // var def = { method: prop };
  var def = new DefinitionTracker(prop);
  this.definitions.push(def);
  return def;
};

module.exports = {
  SchemaTracker,
};
