
export interface ValidValue {
  valid: boolean;
}

export interface CheckErrors {
  [key: string]: any;
  errors: Array<string>
}

export interface Results {
  [key: string]: CheckErrors
}

export interface Validators {
  [key: string]: (...args: any[]) => ValidValue;
}