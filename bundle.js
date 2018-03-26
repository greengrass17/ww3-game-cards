'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _interopDefault(ex) {
  return ex && (typeof ex === 'undefined' ? 'undefined' : _typeof(ex)) === 'object' && 'default' in ex ? ex['default'] : ex;
}

var mongodb = require('mongodb');
require('babel-polyfill');
var fs = _interopDefault(require('fs-extra'));
var path = _interopDefault(require('path'));

var config = {};

config.express = {
  port: 8080,
  ip: '0.0.0.0'
};

config.mongodb = {
  url: 'mongodb://admin:balm-G4-Mu01@ds159845.mlab.com:59845/ww3-game'
};

var db = void 0;

var init = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return mongodb.MongoClient.connect(config.mongodb.url);

          case 3:
            db = _context.sent;

            console.log('Connected to db');
            return _context.abrupt('return', db);

          case 8:
            _context.prev = 8;
            _context.t0 = _context['catch'](0);

            console.log('Cannot connect to db');
            console.log(_context.t0);
            throw _context.t0;

          case 13:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, undefined, [[0, 8]]);
  }));

  return function init() {
    return _ref.apply(this, arguments);
  };
}();

var camelToUnderscore = function camelToUnderscore(camelText) {
  var underscoreText = camelText;
  underscoreText = camelText.split(/(?=[A-Z])/);
  underscoreText = underscoreText.map(function (text) {
    return text.toLowerCase();
  }).join('_');
  return underscoreText;
};

var startServer = function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
    var _db;

    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return init();

          case 3:
            _db = _context2.sent;

            updateCards(_db);
            return _context2.abrupt('return');

          case 8:
            _context2.prev = 8;
            _context2.t0 = _context2['catch'](0);

            console.log(_context2.t0);
            throw _context2.t0;

          case 12:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, undefined, [[0, 8]]);
  }));

  return function startServer() {
    return _ref2.apply(this, arguments);
  };
}();

var updateCards = function updateCards(db) {
  ['AdvantageCards', 'EventCards'].forEach(function (dataName) {
    return updateCard(dataName, db);
  });
};

var updateCard = function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(dataName, db) {
    var collectionName, collection, data, _ref4, insertedCount;

    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            collectionName = camelToUnderscore(dataName);

            console.log(collectionName);

            collection = db.collection(collectionName);
            data = fs.readJsonSync(path.resolve(__dirname, 'static/' + collectionName + '.json'), 'utf8');
            _context3.prev = 4;
            _context3.next = 7;
            return collection.remove({});

          case 7:
            _context3.next = 13;
            break;

          case 9:
            _context3.prev = 9;
            _context3.t0 = _context3['catch'](4);

            console.log(_context3.t0);
            throw _context3.t0;

          case 13:
            _context3.prev = 13;
            _context3.next = 16;
            return collection.insertMany(data[dataName]);

          case 16:
            _ref4 = _context3.sent;
            insertedCount = _ref4.insertedCount;

            console.log('Number of cards added: ' + insertedCount);
            _context3.next = 25;
            break;

          case 21:
            _context3.prev = 21;
            _context3.t1 = _context3['catch'](13);

            console.log(_context3.t1);
            throw _context3.t1;

          case 25:
          case 'end':
            return _context3.stop();
        }
      }
    }, _callee3, undefined, [[4, 9], [13, 21]]);
  }));

  return function updateCard(_x, _x2) {
    return _ref3.apply(this, arguments);
  };
}();

startServer();
