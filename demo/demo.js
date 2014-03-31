(function () {

  angular
    .module('app', [
      'LZW'
    ])
    .controller('Demo', function ($scope, lzw) {
      var o = [];
      for (var j = 0; j < fns.length; ++j) {
        for (var i = 0; i < amounts.length; ++i) {
          var a = amounts[i],
              text = JSON.stringify(getArrayOf(fns[j], a));
          o.push({
            title: fns[j].title,
            example: fns[j](),
            amount: a,
            text: text,
            compressed: lzw.compress(text)
          });
        }
      }
      $scope.cases = o;
    });

  var amounts = [10, 100, 1000],
      fns = [id, object];

  function getArrayOf(fn, length) {
    var ret = [];
    for (var i = length; i--;) ret.push(fn());
    return ret;
  }

  var names = 'James John Robert Michael Anna Mark Julia Alex Walter Jesse'.split(' '),
      surnames = 'Smith Johnson Williams Brown Jones Miller White Pinkman'.split(' '),
      titles = 'JavaScript Developer,CEO,UX Prototyper,Manager'.split(',');

  function object() {
    return {
      name: rand(names),
      surname: rand(surnames),
      title: rand(titles),
      age: 25 + Math.random() * 20 | 0
    }
  }

  object.title = 'JS Object';

  function id() {
    return [hash(), hash(), hash(), hash()].join('-');
  }

  id.title = 'Hexadecimal Id';

  function hash() {
    return Math.random().toString(16).substr(2);
  }

  function rand(array) {
    return array[ Math.random() * array.length | 0 ];
  }

})();
