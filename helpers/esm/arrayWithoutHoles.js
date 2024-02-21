import _Array$isArray from "core-js-version2/library/fn/array/is-array.js";
import arrayLikeToArray from "./arrayLikeToArray.js";
export default function _arrayWithoutHoles(arr) {
  if (_Array$isArray(arr)) return arrayLikeToArray(arr);
}