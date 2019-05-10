import 'mocha';
import { expect } from 'chai';
import { validValue, nullOrValid } from '../../src/checks/helpers';

describe('helpers', () => {

  describe('validValue', () => {

    it('should return validValue object when passed a boolean', done => {

      const expected = {valid: true};
      const actual = validValue(true);
      expect(actual).to.deep.equal(expected);
      done();
      
    });

    it('should return validValue object when passed a validValue object', done => {

      const expected = {valid: false};
      const actual = validValue({valid: false});
      expect(actual).to.deep.equal(expected);
      done();

    });

  });

  describe('nullOrValid', () => {

    it('should return valid response if value is null', done => {

      const expected = {valid: true};
      const actual = nullOrValid(null, (val) => false);
      expect(actual).to.deep.equal(expected);
      done();

    });

    it('should return valid response if value is undefined', done => {

      const expected = {valid: true};
      const actual = nullOrValid(undefined, (val) => false);
      expect(actual).to.deep.equal(expected);
      done();
      
    });

    it('should return validator response if value is not null or undefined', done => {

      const expected = {valid: true};
      const actual = nullOrValid(23, (val) => true);
      expect(actual).to.deep.equal(expected);
      done();
      
    });

  });

});
