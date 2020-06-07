import 'mocha';
import { expect } from 'chai';
import validateObject from '../src';
import {
  isArray,
  isBoolean,
  combine,
  custom,
  either,
  isDate,
  isEmail,
  isLength,
  matches,
  isNumeric,
  isObject,
  required,
  isString
} from '../src/rules';

describe('validateObject', () => {

  it('should return invalid if subject is null', done => {

    const expected = {valid: false, message: 'object is null or empty'};
    const actual = validateObject(null, {test: combine(isString(), isEmail())});
    expect(actual).to.deep.equal(expected);
    done();

  });

  it('should return valid if rules for properties is null', done => {

    const expected = {valid: true};
    const actual = validateObject({test: 'test value'}, {test: null});
    expect(actual).to.deep.equal(expected);
    done();
    
  });

});
