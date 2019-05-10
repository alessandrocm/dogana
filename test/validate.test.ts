import 'mocha';
import { expect } from 'chai';
import validate from '../src/validate';

describe('validate', () => {

  it('should return valid true if no method is provided', done => {

    const expected = {valid: true};
    const actual = validate('value', '', {}, {});
    expect(actual).to.deep.equal(expected);
    done();
  
  });

  it('should return valid value for specified method', done => {

    const expected = {valid: true};
    const actual = validate(42, 'required', null, null);
    expect(actual).to.deep.equal(expected);
    done();

  });

});
