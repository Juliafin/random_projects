'use strict';

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var values = function () {
  var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
    var hello, howareyou, failure;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return wrapPromise("hello", 200);

          case 2:
            hello = _context.sent;

            console.log(hello);
            _context.next = 6;
            return wrapPromise('How are you', 2000);

          case 6:
            howareyou = _context.sent;

            console.log(howareyou);
            _context.next = 10;
            return wrapPromise('this will fail', 5000, false);

          case 10:
            failure = _context.sent;

            failure.then(function () {
              return console.log('hello');
            });

          case 12:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function values() {
    return _ref.apply(this, arguments);
  };
}();

var _test = require('./test.js');

var _test2 = _interopRequireDefault(_test);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _test2.default)('BABEL IS Still WORKING');
console.log('even more code;');
(0, _test2.default)('Production is still working!');

(0, _test2.default)('hello there!');
(0, _test2.default)('how are you!');

function wrapPromise(value, time) {
  var condition = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

  return new _promise2.default(function (resolve, reject) {
    setTimeout(function () {
      if (condition) {
        resolve(value);
      } else {
        reject('The promise with value ' + value + ' failed.');
      }
    }, time);
  });
}

values().catch(function () {
  console.log('hello there was a failure!');
});
//# sourceMappingURL=index.js.map