var { expect } = require('chai');

var { SchemaTracker } = require('../src/schema-tracker');
var { DefinitionTracker } = require('../src/definition-tracker');

describe('schema-tracker test', () => {
  describe('schema-tracker examples', () => {
    it('should create a schema-tracker', () => {
      new SchemaTracker();
    });

    it.only('should create a schema-tracker', () => {
      var schema = new SchemaTracker();
      var ddl = schema.createTable('someTable');
      // console.log(ddl);
      // console.log('schema.definitions', schema.definitions);
      // console.log(ddl.withSchema());
      console.log(ddl.withSchema);
      console.log(ddl.withSchema('dbo'));
      console.log(ddl.__target__);
      console.log(schema);
      console.log(require('util').types.isProxy(schema));
      console.log(typeof schema.withSchema);
      console.log('instanceof', schema.withSchema instanceof DefinitionTracker);
      console.log(schema.withSchema('dbo'));
      console.log(schema);
      // expect(defs).to.be.an('array');
      // console.log(defs.calls);
      // console.log('defs', ddl, defs[0]);
    });
  });
});
