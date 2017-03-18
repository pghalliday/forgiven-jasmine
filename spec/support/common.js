// assertions
import chai from 'chai';
chai.should();

// forgiven
import {
  create,
} from 'forgiven';
import {
  jasmine,
} from '../../src';
global.given = create(jasmine);
