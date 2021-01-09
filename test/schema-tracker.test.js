var { expect } = require('chai');

var { SchemaTracker } = require('../src/schema-tracker');

describe('schema-tracker test', () => {
  describe('schema-tracker examples', () => {
    it('should create a schema-tracker', () => {
      new SchemaTracker();
    });

    it.only('should create a schema-tracker', () => {
      var schema = new SchemaTracker();
      var ddl = schema.createTable/*('someTable');*/
      console.log(ddl);
      var defs = schema.definitions/*('someTable');*/
      console.log(defs);
      expect(defs).to.be.an('array');
    });
  });
});
