var _Reflect$construct = require("core-js/library/fn/reflect/construct.js");
var getPrototypeOf = require("./getPrototypeOf.js");
var isNativeReflectConstruct = require("./isNativeReflectConstruct.js");
var possibleConstructorReturn = require("./possibleConstructorReturn.js");
function _callSuper(t, o, e) {
  return o = getPrototypeOf(o), possibleConstructorReturn(t, isNativeReflectConstruct() ? _Reflect$construct(o, e || [], getPrototypeOf(t).constructor) : o.apply(t, e));
}
module.exports = _callSuper, module.exports.__esModule = true, module.exports["default"] = module.exports;