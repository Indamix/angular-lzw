'use strict';

(function (undefined) {

  angular
    .module('LZW', [])
    .factory('lzw', function () {
      return {
        'compress': function (s) {
          var dict = {},
              data = encodeURI(s + '').split(''),
              ret = [],
              phrase = data[0],
              code = 256,
              char;
          for (var i = 1, len = data.length; i < len; ++i) {
            char = data[i];
            if (dict[phrase + char] === undefined) {
              ret.push(phrase.length > 1 ? dict[phrase] : phrase.charCodeAt(0));
              dict[phrase + char] = code;
              ++code;
              phrase = char;
            } else {
              phrase += char;
            }
          }
          ret.push(phrase.length > 1 ? dict[phrase] : phrase.charCodeAt(0));
          return String.fromCharCode.apply(String, ret);
        },

        'decompress': function (s) {
          var dict = {},
              data = (s + '').split(''),
              char = data[0],
              oldPhrase = char,
              ret = [char],
              code = 256,
              phrase;
          for (var i = 1, len = data.length; i < len; ++i) {
            var currCode = data[i].charCodeAt(0);
            phrase = currCode < 256 ? data[i] : dict[currCode] || oldPhrase + char;
            ret.push(phrase);
            char = phrase.charAt(0);
            dict[code] = oldPhrase + char;
            ++code;
            oldPhrase = phrase;
          }
          return decodeURI(ret.join(''));
        }
      }
    });

})();
