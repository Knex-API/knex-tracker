var { expect } = require('chai');

var util = require('../src/util');

describe('util test', () => {
  describe('util test date parsing', () => {
    it('should parse correctly using parseYyyymmddhhmmss', () => {
      var dateStr = '20210102213147';
      var dateArr = [2021, 1 - 1, 2 - 1, 21, 31, 47];
      var date = new Date(...dateArr, 0);
      var parsed = util.parseYyyymmddhhmmss(dateStr);
      expect(parsed.getTime()).to.equal(date.getTime());
    });
  });
});
