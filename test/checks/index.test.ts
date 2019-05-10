import 'mocha';
import { expect } from 'chai';
import required from '../../src/checks/required';

describe('checks', () => {

  describe('required', () => {

    it('should return valid false if value is null', done => {

      const expected = {valid: false};
      const actual = required(null);
      expect(actual).to.deep.equal(expected);
      done();
      
    });

    it('should return valid true if value is not null', done => {

      const expected = {valid: true};
      const actual = required('value');
      expect(actual).to.deep.equal(expected);
      done();

    });

  });

});
