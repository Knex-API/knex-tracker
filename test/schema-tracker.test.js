var { expect } = require('chai');

var { SchemaTracker } = require('../src/schema-tracker');

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
      console.log(ddl);
      // expect(defs).to.be.an('array');
      // console.log(defs.calls);
      // console.log('defs', ddl, defs[0]);
    });
  });
});
