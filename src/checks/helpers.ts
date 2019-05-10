import { isNil } from '../utilities';
import { ValidValue } from './types';

export function validValue(passes: boolean | ValidValue = true) : ValidValue {

  if (typeof passes === 'boolean') {
    return {valid : passes};
  }
  else {
    return passes;
  }

}

export function nullOrValid(value: any, validate: (val: any) => boolean | ValidValue) {

  if (isNil(value)) {
    return validValue();
  }

  return validValue(validate(value))
}
