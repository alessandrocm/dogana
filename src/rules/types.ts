
export interface LengthOptions {
  min?: Number,
  max?: Number
}

type CustomChecker = (obj: any, value: any) => boolean;

export interface CustomOptions {
  name: string;
  message: string;
  checker: CustomChecker;
}

type CheckOptions = CustomChecker | LengthOptions | RegExp | Rule[];

export interface RuleOptions {
  message: string;
  options?: CheckOptions
}

export interface Rule {
  [key: string]: RuleOptions;
}
