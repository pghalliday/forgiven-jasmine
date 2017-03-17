function getSetupFunction({pending, only}) {
  if (pending) {
    return xdescribe;
  } else if (only) {
    return fdescribe;
  }
  return describe;
}

function getTestFunction({pending, only}) {
  if (pending) {
    return xit;
  } else if (only) {
    return fit;
  }
  return it;
}

function setup({
  description,
  beforeEach: beforeEachCallback,
  afterEach: afterEachCallback,
  pending,
  only,
}, callback) {
  getSetupFunction({pending, only})(description, () => {
    if (beforeEachCallback) {
      beforeEach(beforeEachCallback);
    }
    if (afterEachCallback) {
      afterEach(afterEachCallback);
    }
    callback(
      setup,
      test,
    );
  });
}

function test({description, test, pending, only}) {
  getTestFunction({pending, only})(description, test);
}

export function jasmine(params, callback) {
  return () => {
    setup(params, callback);
  };
}
