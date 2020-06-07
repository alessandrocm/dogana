import { validValue } from "./checks/helpers";
import { validators } from './checks';
import { CheckOptions } from './rules/types';

export default function validate(value: any, method: string, options?: CheckOptions, source?: object) {

  if (!method) {
    return validValue();
  }

  if (!validators[method]) {
    return (typeof options === 'function') ? validValue(options(source, value)) : validValue(false);
  }

  return validators[method](value, options);

}
