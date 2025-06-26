import { Err, ErrFromText, Ok, wrap, wrapAsync } from "lib-result";

class DivisionError extends Error {}

function divide(a, b) {
  if (b === 0) {
    return Err(new DivisionError("Cannot Divide By Zero"));
  }
  return Ok(a / b);
}

// Method-based API
const result = divide(6, 2);
if (result.isOk()) {
  console.log(result.ok); // 3
} else {
  console.error(result.error.message);
}

const mayDivide = divide(1, 0);
if (mayDivide.isError()) {
  console.error(mayDivide.error.message); // "Cannot Divide By Zero"
}

// Using unwrap
const errorResult = ErrFromText("Failed");
try {
  const value = errorResult.unwrap();
  console.log(value);
} catch (e) {
  console.error(e.message); // "Failed"
}

// Using wrap for synchronous operations
const wrappedResult = wrap(() => divide(10, 2));
if (wrappedResult.isOk()) {
  console.log(wrappedResult.ok); // 5
}

// Using wrapAsync for asynchronous operations
const asyncResult = await wrapAsync(() =>
  fetch("https://jsonplaceholder.typicode.com/users/1")
);
if (asyncResult.isOk()) {
  console.log(asyncResult.ok.status); // 200
}

// Using map and pipe for chaining transformations
const chained = divide(10, 2)
  .map(x => x + 1) // Ok(6)
  .pipe(x => divide(x, 2)); // Ok(3)
if (chained.isOk()) {
  console.log(chained.ok); // 3
}

// Using ErrFromObject to create an error with custom properties
import { ErrFromObject } from "lib-result";
const customErr = ErrFromObject(
  { code: 123, info: "Custom" },
  "Something went wrong"
);
if (customErr.isError()) {
  console.error(customErr.error.message); // "Something went wrong"
  console.error(customErr.error.code); // 123
  console.error(customErr.error.info); // "Custom"
}