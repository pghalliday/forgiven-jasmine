import {
  jasmine,
} from '../../src';

describe('forgiven-jasmine', () => {
  it('should export the jasmine ui factory', () => {
    jasmine.should.be.ok;
  });

  // TODO: this is an initial import of something that was working
  // more integration tests need to be created
});
