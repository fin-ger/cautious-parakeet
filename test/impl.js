var expect = require('chai').expect;
var impl = require('../impl');

describe("get_time", function() {
  it("should get the current time", function() {
    var currentDate = Date.now() / 1000;
    var time = impl.get_time();
    expect(currentDate).to.equal(time);
  });
  it("should return millisecond timestamp when invoked with (0)", function() {
    var currentDate = Date.now();
    var time = impl.get_time(0);
    expect(currentDate).to.equal(time);
  });
});
