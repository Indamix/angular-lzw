[angular-lzw](http://indamix.github.io/angular-lzw)
===========

AngularJS service for LZW compression / decompression

Helps to save space in localStorage, sessionStorage, cookies etc.

## Installing

```bower install angular-lzw```

Or just download it from GitHub

## API

### lzw.compress(string);
### lzw.decompress(string);

## Usage Example

```javascript

  angular
    .module('app', [
      'LZW'
    ])
    .controller('MainController', function($scope, lzw) {
    
      var original = 'A string to be compressed',
          compressed = lzw.compress(original),
          decompressed = lzw.decompress(compressed);
          
      console.log(original === decompressed ? 'PASS' : 'FAIL');
    
    });

```
