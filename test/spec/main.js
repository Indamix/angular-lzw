'use strict';

describe('Service: LZW', function () {

  beforeEach(module('LZW'));

  var service;

  beforeEach(inject(function (lzw) {
    service = lzw;
  }));

  it('should compress and decompress properly', function () {
    var tests = [
      'UTF symbols: вот тут просто так не работает',
      'I have great desire   My desire is great',
      new Array(10).join('I have great desire   My desire is great'),
      new Array(10).join(' ').split('').map(Math.random).join(),
      new Array(100).join(' ').split('').map(Math.random).join()
    ];

    for (var i = 0; i < tests.length; ++i) {
      var s = tests[i];
      expect(service.decompress(service.compress(s))).toBe(s);
    }
  })
});
