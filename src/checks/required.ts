import { validValue } from "./helpers";
import { isNil } from "../utilities";

export default function required(value: any) {
  return validValue(!isNil(value));
}