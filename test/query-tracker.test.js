var { expect } = require('chai');

var { QueryTracker } = require('../src/query-tracker');

describe('query-tracker test', () => {
  describe('query-tracker examples', () => {
    it('should create a query-tracker', () => {
      new QueryTracker();
    });
  });
});
