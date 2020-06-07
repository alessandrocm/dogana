import isEmpty from 'lodash.isempty';
import isNull from 'lodash.isnull';
import isNil from 'lodash.isnil'

export {
  isEmpty,
  isNull,
  isNil
}

export function isNilOrEmpty(target: object) {
  return isNil(target) || isEmpty(target);
}
