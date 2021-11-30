import { ZipCodeValidator } from "./zip-code-validator";
import {StringValidator} from "./string-validator";

let strings = ["Hello", "98052", "101"];

let validators: { [s: string]: StringValidator } = {};
validators["ZIP code"] = new ZipCodeValidator();

strings.forEach((s) => {
    for (let name in validators) {
      console.log(
        `"${s}" - ${
          validators[name].isAcceptable(s) ? "matches" : "does not match"
        } ${name}`
      );
    }
  });