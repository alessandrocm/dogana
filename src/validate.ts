import { validValue } from "./checks/helpers";
import { validators } from './checks';

export default function validate(value: any, method: string, options?: object | Function, source?: object) {

  if (!method) {
    return validValue();
  }

  return validators[method](value, options);

}
