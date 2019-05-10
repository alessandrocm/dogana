import 'mocha';
import { expect } from 'chai';
import { Rule, LengthOptions } from '../../src/rules/types';
import isArray from '../../src/rules/array';
import isBoolean from '../../src/rules/boolean';
import combine from '../../src/rules/combine';
import custom from '../../src/rules/custom';
import either from '../../src/rules/either';
import isDate from '../../src/rules/date';
import isEmail from '../../src/rules/email';
import isLength from '../../src/rules/length';
import matches from '../../src/rules/matches';
import isNumeric from '../../src/rules/numeric';
import isObject from '../../src/rules/object';
import required from '../../src/rules/required';
import isString from '../../src/rules/string';

describe('rules', () => {

  describe('#isArray', () => {

    it('should return a valid rule with default message', done => {
  
      const rule = isArray();
      expect(rule).to.be.an('object');
      expect(rule.isArray).to.be.an('object');
      expect(rule.isArray.message).to.be.a('string');
      expect(rule.isArray.message).to.equal('must be an array');
      done();
  
    });
  
    it('should return a valid rule with custom message', done => {
  
      const rule = isArray('this is a custom message');
      expect(rule).to.be.an('object');
      expect(rule.isArray).to.be.an('object');
      expect(rule.isArray.message).to.be.a('string');
      expect(rule.isArray.message).to.equal('this is a custom message');
      done();
  
    });
  
  });

  describe('#isBoolean', () => {
  
    it('should return a valid rule with default message', done => {
  
      const rule = isBoolean();
      expect(rule).to.be.an('object');
      expect(rule.isBoolean).to.be.an('object');
      expect(rule.isBoolean.message).to.be.a('string');
      expect(rule.isBoolean.message).to.equal('must be a boolean');
      done();
  
    });
  
    it('should return a valid rule with custom message', done => {
  
      const rule = isBoolean('this is a custom message');
      expect(rule).to.be.an('object');
      expect(rule.isBoolean).to.be.an('object');
      expect(rule.isBoolean.message).to.be.a('string');
      expect(rule.isBoolean.message).to.equal('this is a custom message');
      done();
  
    });
  
  });

  describe('#combine', () => {
  
    it('should return an object with all rules combined', done => {
  
      const rules = ['isArray', 'isBoolean', 'isCustom', 'isDate', 'isEmail',
        'isLength', 'matches', 'isNumeric', 'isObject', 'required', 'isString'];
      const combinedRules = combine(
        isArray(),
        isBoolean(),
        custom({name: 'isCustom', message: 'custom message', checker: () => true}),
        isDate(),
        isEmail(),
        isLength(),
        matches(/^\d+$/),
        isNumeric(),
        isObject(),
        required(),
        isString()
      );
      expect(combinedRules).to.be.an('object');
      const keys = Object.keys(combinedRules);
      keys.forEach((key: string) => {
        expect(rules.includes(key)).to.be.true;
        expect(combinedRules[key]).to.be.an('object');
      });
      done();
  
    });
  
  });
  
  describe('#custom', () => {

    it('should return a valid rule with correct options', done => {
  
      const name = 'isCustom';
      const checker = (obj: any, value: any) => true;
      const message = 'must pass custom validation';
      const rule = custom({name, message, checker});
      expect(rule).to.be.an('object');
      expect(rule[name]).to.be.an('object');
      expect(rule[name].message).to.be.a('string');
      expect(rule[name].message).to.equal('must pass custom validation');
      expect(rule[name].options).to.be.a('function');
      expect(rule[name].options).to.equal(checker);
      done();
  
    });
  
  });

  describe('#isDate', () => {
  
    it('should return a valid rule with default message', done => {
  
      const rule = isDate();
      expect(rule).to.be.an('object');
      expect(rule.isDate).to.be.an('object');
      expect(rule.isDate.message).to.be.a('string');
      expect(rule.isDate.message).to.equal('must be a valid date');
      done();
  
    });
  
    it('should return a valid rule with custom message', done => {
  
      const rule = isDate('this is a custom message');
      expect(rule).to.be.an('object');
      expect(rule.isDate).to.be.an('object');
      expect(rule.isDate.message).to.be.a('string');
      expect(rule.isDate.message).to.equal('this is a custom message');
      done();
  
    });
  
  });

  describe('#either', () => {

    it('should return a valid rule with valid options', done => {

      const rule = either(
        'must be either boolean or numeric',
        isBoolean(),
        isNumeric()
      );

      expect(rule).to.be.an('object');
      expect(rule.either.message).to.be.a('string');
      expect(rule.either.message).to.equal('must be either boolean or numeric');
      expect(rule.either.options).to.be.an('array');
      expect((<Rule[]>rule.either.options)[0]).to.be.an('object');
      expect((<Rule[]>rule.either.options)[0].isBoolean).to.be.an('object');
      expect((<Rule[]>rule.either.options)[1]).to.be.an('object');
      expect((<Rule[]>rule.either.options)[1].isNumeric).to.be.an('object');
      done();

    });

  });

  describe('#isEmail', () => {

    it('should return a valid rule with default message', done => {

      const rule = isEmail();
      expect(rule).to.be.an('object');
      expect(rule.isEmail).to.be.an('object');
      expect(rule.isEmail.message).to.be.a('string');
      expect(rule.isEmail.message).to.equal('must be a valid email');
      done();

    });

    it('should return a valid rule with custom message', done => {

      const rule = isEmail('this is a custom message');
      expect(rule).to.be.an('object');
      expect(rule.isEmail).to.be.an('object');
      expect(rule.isEmail.message).to.be.a('string');
      expect(rule.isEmail.message).to.equal('this is a custom message');
      done();

    });

  });

  describe('#isLength', () => {

    it('should return a valid rule with default options', done => {
  
      const rule = isLength();
      expect(rule).to.be.an('object');
      expect(rule.isLength).to.be.an('object');
      expect(rule.isLength.message).to.be.a('string');
      expect(rule.isLength.message).to.equal('must be the correct length');
      expect(rule.isLength.options).to.be.an('object');
      expect((<LengthOptions>rule.isLength.options).min).to.not.be.undefined;
      expect((<LengthOptions>rule.isLength.options).max).to.be.undefined;
      done();
  
    });
  
    it('should return a valid rule with correct options', done => {
  
      const rule = isLength({min: 5, max: 10}, 'length must be between 5 and 10');
      expect(rule).to.be.an('object');
      expect(rule.isLength).to.be.an('object');
      expect(rule.isLength.message).to.be.a('string');
      expect(rule.isLength.message).to.equal('length must be between 5 and 10');
      expect(rule.isLength.options).to.be.an('object');
      expect((<LengthOptions>rule.isLength.options).min).to.be.a('number');
      expect((<LengthOptions>rule.isLength.options).min).to.equal(5);
      expect((<LengthOptions>rule.isLength.options).max).to.be.a('number');
      expect((<LengthOptions>rule.isLength.options).max).to.equal(10);
      
      done();
  
    });
  
  });

  describe('#matches', () => {

    it('should return a valid rule with correct default message', done => {

      const regex = /^\d+$/;
      const rule = matches(regex);
      expect(rule).to.be.an('object');
      expect(rule.matches).to.be.an('object');
      expect(rule.matches.options).to.equal(regex);
      expect(rule.matches.message).to.be.a('string');
      expect(rule.matches.message).to.equal('must be a valid format');
      done();

    });

    it('should return a valid rule with custom message', done => {

      const regex = /^[a-zA-Z]+$/;
      const rule = matches(regex, 'must be all alpha characters');
      expect(rule).to.be.an('object');
      expect(rule.matches).to.be.an('object');
      expect(rule.matches.options).to.equal(regex);
      expect(rule.matches.message).to.be.a('string');
      expect(rule.matches.message).to.equal('must be all alpha characters');
      done();

    });

  });

  describe('#isNumeric', () => {

    it('should return a valid rule with correct default message', done => {
  
      const rule = isNumeric();
      expect(rule).to.be.an('object');
      expect(rule.isNumeric).to.be.an('object');
      expect(rule.isNumeric.message).to.be.a('string');
      expect(rule.isNumeric.message).to.equal('must be numeric');
      done();
  
    });
  
    it('should return a valid rule with custom message', done => {
  
      const rule = isNumeric('must be all numeric characters');
      expect(rule).to.be.an('object');
      expect(rule.isNumeric).to.be.an('object');
      expect(rule.isNumeric.message).to.be.a('string');
      expect(rule.isNumeric.message).to.equal('must be all numeric characters');
      done();
  
    });
  
  });

  describe('#isObject', () => {

    it('should return a valid rule with default message', done => {

      const rule = isObject();
      expect(rule).to.be.an('object');
      expect(rule.isObject).to.be.an('object');
      expect(rule.isObject.message).to.be.a('string');
      expect(rule.isObject.message).to.equal('must be an object');
      done();

    });

    it('should return a valid rule with custom message', done => {

      const rule = isObject('this is a custom message');
      expect(rule).to.be.an('object');
      expect(rule.isObject).to.be.an('object');
      expect(rule.isObject.message).to.be.a('string');
      expect(rule.isObject.message).to.equal('this is a custom message');
      done();

    });

  });

  describe('#required', () => {

    it('should return a valid rule with correct default message', done => {
  
      const rule = required();
      expect(rule).to.be.an('object');
      expect(rule.required).to.be.an('object');
      expect(rule.required.message).to.be.a('string');
      expect(rule.required.message).to.equal('is required');
      done();
  
    });
  
    it('should return a valid rule with custom message', done => {
  
      const rule = required('must be provided');
      expect(rule).to.be.an('object');
      expect(rule.required).to.be.an('object');
      expect(rule.required.message).to.be.a('string');
      expect(rule.required.message).to.equal('must be provided');
      done();
  
    });
  
  });

  describe('#isString', () => {

    it('should return a valid rule with correct default message', done => {
  
      const rule = isString();
      expect(rule).to.be.an('object');
      expect(rule.isString).to.be.an('object');
      expect(rule.isString.message).to.be.a('string');
      expect(rule.isString.message).to.equal('must be a string');
      done();
  
    });
  
    it('should return a valid rule with custom message', done => {
  
      const rule = isString('should be a string');
      expect(rule).to.be.an('object');
      expect(rule.isString).to.be.an('object');
      expect(rule.isString.message).to.be.a('string');
      expect(rule.isString.message).to.equal('should be a string');
      done();
  
    });
  
  });

});
