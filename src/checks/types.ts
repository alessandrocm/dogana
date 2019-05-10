
export interface ValidValue {
  valid: boolean;
}

export interface ValidationErrors {
  [key: string]: any;
  errors: Array<string>
}

export interface Results {
  [key: string]: ValidationErrors
}

export interface Validation {
  valid: ValidValue;
  message?: string;
  results?: Results;
}

export interface Validators {
  [key: string]: (...args: any[]) => ValidValue;
}