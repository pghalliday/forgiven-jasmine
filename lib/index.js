"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.jasmine = jasmine;
function getSetupFunction(_ref) {
  var pending = _ref.pending,
      only = _ref.only;

  if (pending) {
    return xdescribe;
  } else if (only) {
    return fdescribe;
  }
  return describe;
}

function getTestFunction(_ref2) {
  var pending = _ref2.pending,
      only = _ref2.only;

  if (pending) {
    return xit;
  } else if (only) {
    return fit;
  }
  return it;
}

function setup(_ref3, callback) {
  var description = _ref3.description,
      beforeEachCallback = _ref3.beforeEach,
      afterEachCallback = _ref3.afterEach,
      pending = _ref3.pending,
      only = _ref3.only;

  getSetupFunction({ pending: pending, only: only })(description, function () {
    if (beforeEachCallback) {
      beforeEach(beforeEachCallback);
    }
    if (afterEachCallback) {
      afterEach(afterEachCallback);
    }
    callback(setup, test);
  });
}

function test(_ref4) {
  var description = _ref4.description,
      test = _ref4.test,
      pending = _ref4.pending,
      only = _ref4.only;

  getTestFunction({ pending: pending, only: only })(description, test);
}

function jasmine(params, callback) {
  return function () {
    setup(params, callback);
  };
}