var { expect } = require('chai');

var { SchemaTracker } = require('../src/schema-tracker');

describe('schema-tracker test', () => {
  describe('schema-tracker examples', () => {
    it('should create a schema-tracker', () => {
      new SchemaTracker();
    });
  });
});
