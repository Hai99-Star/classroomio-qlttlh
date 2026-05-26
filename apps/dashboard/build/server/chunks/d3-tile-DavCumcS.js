import { c as createSubscriber } from './create-id-D7gdjJzW.js';
import { p as clsx$1 } from './index2-Eg0dVEDW.js';
import { e as extendTailwindMerge } from './index6-DijlZyMe.js';

var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
function getDefaultExportFromCjs(x) {
  return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, "default") ? x["default"] : x;
}
function range$2(start, stop, step) {
  start = +start, stop = +stop, step = (n = arguments.length) < 2 ? (stop = start, start = 0, 1) : n < 3 ? 1 : +step;
  var i = -1, n = Math.max(0, Math.ceil((stop - start) / step)) | 0, range2 = new Array(n);
  while (++i < n) {
    range2[i] = start + i * step;
  }
  return range2;
}
var freeGlobal = typeof global == "object" && global && global.Object === Object && global;
var freeSelf = typeof self == "object" && self && self.Object === Object && self;
var root = freeGlobal || freeSelf || Function("return this")();
var Symbol$1 = root.Symbol;
var objectProto$9 = Object.prototype;
var hasOwnProperty$7 = objectProto$9.hasOwnProperty;
var nativeObjectToString$1 = objectProto$9.toString;
var symToStringTag$1 = Symbol$1 ? Symbol$1.toStringTag : void 0;
function getRawTag(value) {
  var isOwn = hasOwnProperty$7.call(value, symToStringTag$1), tag = value[symToStringTag$1];
  try {
    value[symToStringTag$1] = void 0;
    var unmasked = true;
  } catch (e) {
  }
  var result = nativeObjectToString$1.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag$1] = tag;
    } else {
      delete value[symToStringTag$1];
    }
  }
  return result;
}
var objectProto$8 = Object.prototype;
var nativeObjectToString = objectProto$8.toString;
function objectToString(value) {
  return nativeObjectToString.call(value);
}
var nullTag = "[object Null]", undefinedTag = "[object Undefined]";
var symToStringTag = Symbol$1 ? Symbol$1.toStringTag : void 0;
function baseGetTag(value) {
  if (value == null) {
    return value === void 0 ? undefinedTag : nullTag;
  }
  return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value);
}
function isObjectLike(value) {
  return value != null && typeof value == "object";
}
var isArray = Array.isArray;
function isObject(value) {
  var type = typeof value;
  return value != null && (type == "object" || type == "function");
}
function identity(value) {
  return value;
}
var asyncTag = "[object AsyncFunction]", funcTag$1 = "[object Function]", genTag = "[object GeneratorFunction]", proxyTag = "[object Proxy]";
function isFunction(value) {
  if (!isObject(value)) {
    return false;
  }
  var tag = baseGetTag(value);
  return tag == funcTag$1 || tag == genTag || tag == asyncTag || tag == proxyTag;
}
var coreJsData = root["__core-js_shared__"];
var maskSrcKey = function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || "");
  return uid ? "Symbol(src)_1." + uid : "";
}();
function isMasked(func) {
  return !!maskSrcKey && maskSrcKey in func;
}
var funcProto$2 = Function.prototype;
var funcToString$2 = funcProto$2.toString;
function toSource(func) {
  if (func != null) {
    try {
      return funcToString$2.call(func);
    } catch (e) {
    }
    try {
      return func + "";
    } catch (e) {
    }
  }
  return "";
}
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
var reIsHostCtor = /^\[object .+?Constructor\]$/;
var funcProto$1 = Function.prototype, objectProto$7 = Object.prototype;
var funcToString$1 = funcProto$1.toString;
var hasOwnProperty$6 = objectProto$7.hasOwnProperty;
var reIsNative = RegExp(
  "^" + funcToString$1.call(hasOwnProperty$6).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}
function getValue(object, key) {
  return object == null ? void 0 : object[key];
}
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : void 0;
}
var objectCreate = Object.create;
var baseCreate = /* @__PURE__ */ function() {
  function object() {
  }
  return function(proto) {
    if (!isObject(proto)) {
      return {};
    }
    if (objectCreate) {
      return objectCreate(proto);
    }
    object.prototype = proto;
    var result = new object();
    object.prototype = void 0;
    return result;
  };
}();
function apply(func, thisArg, args) {
  switch (args.length) {
    case 0:
      return func.call(thisArg);
    case 1:
      return func.call(thisArg, args[0]);
    case 2:
      return func.call(thisArg, args[0], args[1]);
    case 3:
      return func.call(thisArg, args[0], args[1], args[2]);
  }
  return func.apply(thisArg, args);
}
function copyArray(source, array) {
  var index = -1, length = source.length;
  array || (array = Array(length));
  while (++index < length) {
    array[index] = source[index];
  }
  return array;
}
var HOT_COUNT = 800, HOT_SPAN = 16;
var nativeNow = Date.now;
function shortOut(func) {
  var count = 0, lastCalled = 0;
  return function() {
    var stamp = nativeNow(), remaining = HOT_SPAN - (stamp - lastCalled);
    lastCalled = stamp;
    if (remaining > 0) {
      if (++count >= HOT_COUNT) {
        return arguments[0];
      }
    } else {
      count = 0;
    }
    return func.apply(void 0, arguments);
  };
}
function constant(value) {
  return function() {
    return value;
  };
}
var defineProperty = function() {
  try {
    var func = getNative(Object, "defineProperty");
    func({}, "", {});
    return func;
  } catch (e) {
  }
}();
var baseSetToString = !defineProperty ? identity : function(func, string) {
  return defineProperty(func, "toString", {
    "configurable": true,
    "enumerable": false,
    "value": constant(string),
    "writable": true
  });
};
var setToString = shortOut(baseSetToString);
var MAX_SAFE_INTEGER$1 = 9007199254740991;
var reIsUint = /^(?:0|[1-9]\d*)$/;
function isIndex(value, length) {
  var type = typeof value;
  length = length == null ? MAX_SAFE_INTEGER$1 : length;
  return !!length && (type == "number" || type != "symbol" && reIsUint.test(value)) && (value > -1 && value % 1 == 0 && value < length);
}
function baseAssignValue(object, key, value) {
  if (key == "__proto__" && defineProperty) {
    defineProperty(object, key, {
      "configurable": true,
      "enumerable": true,
      "value": value,
      "writable": true
    });
  } else {
    object[key] = value;
  }
}
function eq(value, other) {
  return value === other || value !== value && other !== other;
}
var objectProto$6 = Object.prototype;
var hasOwnProperty$5 = objectProto$6.hasOwnProperty;
function assignValue(object, key, value) {
  var objValue = object[key];
  if (!(hasOwnProperty$5.call(object, key) && eq(objValue, value)) || value === void 0 && !(key in object)) {
    baseAssignValue(object, key, value);
  }
}
function copyObject(source, props, object, customizer) {
  var isNew = !object;
  object || (object = {});
  var index = -1, length = props.length;
  while (++index < length) {
    var key = props[index];
    var newValue = void 0;
    if (newValue === void 0) {
      newValue = source[key];
    }
    if (isNew) {
      baseAssignValue(object, key, newValue);
    } else {
      assignValue(object, key, newValue);
    }
  }
  return object;
}
var nativeMax = Math.max;
function overRest(func, start, transform) {
  start = nativeMax(start === void 0 ? func.length - 1 : start, 0);
  return function() {
    var args = arguments, index = -1, length = nativeMax(args.length - start, 0), array = Array(length);
    while (++index < length) {
      array[index] = args[start + index];
    }
    index = -1;
    var otherArgs = Array(start + 1);
    while (++index < start) {
      otherArgs[index] = args[index];
    }
    otherArgs[start] = transform(array);
    return apply(func, this, otherArgs);
  };
}
function baseRest(func, start) {
  return setToString(overRest(func, start, identity), func + "");
}
var MAX_SAFE_INTEGER = 9007199254740991;
function isLength(value) {
  return typeof value == "number" && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}
function isIterateeCall(value, index, object) {
  if (!isObject(object)) {
    return false;
  }
  var type = typeof index;
  if (type == "number" ? isArrayLike(object) && isIndex(index, object.length) : type == "string" && index in object) {
    return eq(object[index], value);
  }
  return false;
}
function createAssigner(assigner) {
  return baseRest(function(object, sources) {
    var index = -1, length = sources.length, customizer = length > 1 ? sources[length - 1] : void 0, guard = length > 2 ? sources[2] : void 0;
    customizer = assigner.length > 3 && typeof customizer == "function" ? (length--, customizer) : void 0;
    if (guard && isIterateeCall(sources[0], sources[1], guard)) {
      customizer = length < 3 ? void 0 : customizer;
      length = 1;
    }
    object = Object(object);
    while (++index < length) {
      var source = sources[index];
      if (source) {
        assigner(object, source, index, customizer);
      }
    }
    return object;
  });
}
var objectProto$5 = Object.prototype;
function isPrototype(value) {
  var Ctor = value && value.constructor, proto = typeof Ctor == "function" && Ctor.prototype || objectProto$5;
  return value === proto;
}
function baseTimes(n, iteratee) {
  var index = -1, result = Array(n);
  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}
var argsTag$1 = "[object Arguments]";
function baseIsArguments(value) {
  return isObjectLike(value) && baseGetTag(value) == argsTag$1;
}
var objectProto$4 = Object.prototype;
var hasOwnProperty$4 = objectProto$4.hasOwnProperty;
var propertyIsEnumerable = objectProto$4.propertyIsEnumerable;
var isArguments = baseIsArguments(/* @__PURE__ */ function() {
  return arguments;
}()) ? baseIsArguments : function(value) {
  return isObjectLike(value) && hasOwnProperty$4.call(value, "callee") && !propertyIsEnumerable.call(value, "callee");
};
function stubFalse() {
  return false;
}
var freeExports$2 = typeof exports == "object" && exports && !exports.nodeType && exports;
var freeModule$2 = freeExports$2 && typeof module == "object" && module && !module.nodeType && module;
var moduleExports$2 = freeModule$2 && freeModule$2.exports === freeExports$2;
var Buffer$1 = moduleExports$2 ? root.Buffer : void 0;
var nativeIsBuffer = Buffer$1 ? Buffer$1.isBuffer : void 0;
var isBuffer = nativeIsBuffer || stubFalse;
var argsTag = "[object Arguments]", arrayTag = "[object Array]", boolTag = "[object Boolean]", dateTag = "[object Date]", errorTag = "[object Error]", funcTag = "[object Function]", mapTag = "[object Map]", numberTag = "[object Number]", objectTag$1 = "[object Object]", regexpTag = "[object RegExp]", setTag = "[object Set]", stringTag = "[object String]", weakMapTag = "[object WeakMap]";
var arrayBufferTag = "[object ArrayBuffer]", dataViewTag = "[object DataView]", float32Tag = "[object Float32Array]", float64Tag = "[object Float64Array]", int8Tag = "[object Int8Array]", int16Tag = "[object Int16Array]", int32Tag = "[object Int32Array]", uint8Tag = "[object Uint8Array]", uint8ClampedTag = "[object Uint8ClampedArray]", uint16Tag = "[object Uint16Array]", uint32Tag = "[object Uint32Array]";
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dataViewTag] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag] = typedArrayTags[mapTag] = typedArrayTags[numberTag] = typedArrayTags[objectTag$1] = typedArrayTags[regexpTag] = typedArrayTags[setTag] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;
function baseIsTypedArray(value) {
  return isObjectLike(value) && isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
}
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}
var freeExports$1 = typeof exports == "object" && exports && !exports.nodeType && exports;
var freeModule$1 = freeExports$1 && typeof module == "object" && module && !module.nodeType && module;
var moduleExports$1 = freeModule$1 && freeModule$1.exports === freeExports$1;
var freeProcess = moduleExports$1 && freeGlobal.process;
var nodeUtil = function() {
  try {
    var types = freeModule$1 && freeModule$1.require && freeModule$1.require("util").types;
    if (types) {
      return types;
    }
    return freeProcess && freeProcess.binding && freeProcess.binding("util");
  } catch (e) {
  }
}();
var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;
var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;
function arrayLikeKeys(value, inherited) {
  var isArr = isArray(value), isArg = !isArr && isArguments(value), isBuff = !isArr && !isArg && isBuffer(value), isType = !isArr && !isArg && !isBuff && isTypedArray(value), skipIndexes = isArr || isArg || isBuff || isType, result = skipIndexes ? baseTimes(value.length, String) : [], length = result.length;
  for (var key in value) {
    if (!(skipIndexes && // Safari 9 has enumerable `arguments.length` in strict mode.
    (key == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    isBuff && (key == "offset" || key == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    isType && (key == "buffer" || key == "byteLength" || key == "byteOffset") || // Skip index properties.
    isIndex(key, length)))) {
      result.push(key);
    }
  }
  return result;
}
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}
function nativeKeysIn(object) {
  var result = [];
  if (object != null) {
    for (var key in Object(object)) {
      result.push(key);
    }
  }
  return result;
}
var objectProto$3 = Object.prototype;
var hasOwnProperty$3 = objectProto$3.hasOwnProperty;
function baseKeysIn(object) {
  if (!isObject(object)) {
    return nativeKeysIn(object);
  }
  var isProto = isPrototype(object), result = [];
  for (var key in object) {
    if (!(key == "constructor" && (isProto || !hasOwnProperty$3.call(object, key)))) {
      result.push(key);
    }
  }
  return result;
}
function keysIn(object) {
  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeysIn(object);
}
var nativeCreate = getNative(Object, "create");
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
  this.size = 0;
}
function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}
var HASH_UNDEFINED$1 = "__lodash_hash_undefined__";
var objectProto$2 = Object.prototype;
var hasOwnProperty$2 = objectProto$2.hasOwnProperty;
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED$1 ? void 0 : result;
  }
  return hasOwnProperty$2.call(data, key) ? data[key] : void 0;
}
var objectProto$1 = Object.prototype;
var hasOwnProperty$1 = objectProto$1.hasOwnProperty;
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? data[key] !== void 0 : hasOwnProperty$1.call(data, key);
}
var HASH_UNDEFINED = "__lodash_hash_undefined__";
function hashSet(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = nativeCreate && value === void 0 ? HASH_UNDEFINED : value;
  return this;
}
function Hash(entries2) {
  var index = -1, length = entries2 == null ? 0 : entries2.length;
  this.clear();
  while (++index < length) {
    var entry = entries2[index];
    this.set(entry[0], entry[1]);
  }
}
Hash.prototype.clear = hashClear;
Hash.prototype["delete"] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}
var arrayProto = Array.prototype;
var splice = arrayProto.splice;
function listCacheDelete(key) {
  var data = this.__data__, index = assocIndexOf(data, key);
  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  --this.size;
  return true;
}
function listCacheGet(key) {
  var data = this.__data__, index = assocIndexOf(data, key);
  return index < 0 ? void 0 : data[index][1];
}
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}
function listCacheSet(key, value) {
  var data = this.__data__, index = assocIndexOf(data, key);
  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}
function ListCache(entries2) {
  var index = -1, length = entries2 == null ? 0 : entries2.length;
  this.clear();
  while (++index < length) {
    var entry = entries2[index];
    this.set(entry[0], entry[1]);
  }
}
ListCache.prototype.clear = listCacheClear;
ListCache.prototype["delete"] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;
var Map$1 = getNative(root, "Map");
function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    "hash": new Hash(),
    "map": new (Map$1 || ListCache)(),
    "string": new Hash()
  };
}
function isKeyable(value) {
  var type = typeof value;
  return type == "string" || type == "number" || type == "symbol" || type == "boolean" ? value !== "__proto__" : value === null;
}
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key) ? data[typeof key == "string" ? "string" : "hash"] : data.map;
}
function mapCacheDelete(key) {
  var result = getMapData(this, key)["delete"](key);
  this.size -= result ? 1 : 0;
  return result;
}
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}
function mapCacheSet(key, value) {
  var data = getMapData(this, key), size = data.size;
  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}
function MapCache(entries2) {
  var index = -1, length = entries2 == null ? 0 : entries2.length;
  this.clear();
  while (++index < length) {
    var entry = entries2[index];
    this.set(entry[0], entry[1]);
  }
}
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype["delete"] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;
var getPrototype = overArg(Object.getPrototypeOf, Object);
var objectTag = "[object Object]";
var funcProto = Function.prototype, objectProto = Object.prototype;
var funcToString = funcProto.toString;
var hasOwnProperty = objectProto.hasOwnProperty;
var objectCtorString = funcToString.call(Object);
function isPlainObject(value) {
  if (!isObjectLike(value) || baseGetTag(value) != objectTag) {
    return false;
  }
  var proto = getPrototype(value);
  if (proto === null) {
    return true;
  }
  var Ctor = hasOwnProperty.call(proto, "constructor") && proto.constructor;
  return typeof Ctor == "function" && Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString;
}
function stackClear() {
  this.__data__ = new ListCache();
  this.size = 0;
}
function stackDelete(key) {
  var data = this.__data__, result = data["delete"](key);
  this.size = data.size;
  return result;
}
function stackGet(key) {
  return this.__data__.get(key);
}
function stackHas(key) {
  return this.__data__.has(key);
}
var LARGE_ARRAY_SIZE = 200;
function stackSet(key, value) {
  var data = this.__data__;
  if (data instanceof ListCache) {
    var pairs = data.__data__;
    if (!Map$1 || pairs.length < LARGE_ARRAY_SIZE - 1) {
      pairs.push([key, value]);
      this.size = ++data.size;
      return this;
    }
    data = this.__data__ = new MapCache(pairs);
  }
  data.set(key, value);
  this.size = data.size;
  return this;
}
function Stack(entries2) {
  var data = this.__data__ = new ListCache(entries2);
  this.size = data.size;
}
Stack.prototype.clear = stackClear;
Stack.prototype["delete"] = stackDelete;
Stack.prototype.get = stackGet;
Stack.prototype.has = stackHas;
Stack.prototype.set = stackSet;
var freeExports = typeof exports == "object" && exports && !exports.nodeType && exports;
var freeModule = freeExports && typeof module == "object" && module && !module.nodeType && module;
var moduleExports = freeModule && freeModule.exports === freeExports;
var Buffer = moduleExports ? root.Buffer : void 0;
Buffer ? Buffer.allocUnsafe : void 0;
function cloneBuffer(buffer, isDeep) {
  {
    return buffer.slice();
  }
}
var Uint8Array = root.Uint8Array;
function cloneArrayBuffer(arrayBuffer) {
  var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
  new Uint8Array(result).set(new Uint8Array(arrayBuffer));
  return result;
}
function cloneTypedArray(typedArray, isDeep) {
  var buffer = cloneArrayBuffer(typedArray.buffer);
  return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
}
function initCloneObject(object) {
  return typeof object.constructor == "function" && !isPrototype(object) ? baseCreate(getPrototype(object)) : {};
}
function createBaseFor(fromRight) {
  return function(object, iteratee, keysFunc) {
    var index = -1, iterable = Object(object), props = keysFunc(object), length = props.length;
    while (length--) {
      var key = props[++index];
      if (iteratee(iterable[key], key, iterable) === false) {
        break;
      }
    }
    return object;
  };
}
var baseFor = createBaseFor();
function assignMergeValue(object, key, value) {
  if (value !== void 0 && !eq(object[key], value) || value === void 0 && !(key in object)) {
    baseAssignValue(object, key, value);
  }
}
function isArrayLikeObject(value) {
  return isObjectLike(value) && isArrayLike(value);
}
function safeGet(object, key) {
  if (key === "constructor" && typeof object[key] === "function") {
    return;
  }
  if (key == "__proto__") {
    return;
  }
  return object[key];
}
function toPlainObject(value) {
  return copyObject(value, keysIn(value));
}
function baseMergeDeep(object, source, key, srcIndex, mergeFunc, customizer, stack) {
  var objValue = safeGet(object, key), srcValue = safeGet(source, key), stacked = stack.get(srcValue);
  if (stacked) {
    assignMergeValue(object, key, stacked);
    return;
  }
  var newValue = customizer ? customizer(objValue, srcValue, key + "", object, source, stack) : void 0;
  var isCommon = newValue === void 0;
  if (isCommon) {
    var isArr = isArray(srcValue), isBuff = !isArr && isBuffer(srcValue), isTyped = !isArr && !isBuff && isTypedArray(srcValue);
    newValue = srcValue;
    if (isArr || isBuff || isTyped) {
      if (isArray(objValue)) {
        newValue = objValue;
      } else if (isArrayLikeObject(objValue)) {
        newValue = copyArray(objValue);
      } else if (isBuff) {
        isCommon = false;
        newValue = cloneBuffer(srcValue);
      } else if (isTyped) {
        isCommon = false;
        newValue = cloneTypedArray(srcValue);
      } else {
        newValue = [];
      }
    } else if (isPlainObject(srcValue) || isArguments(srcValue)) {
      newValue = objValue;
      if (isArguments(objValue)) {
        newValue = toPlainObject(objValue);
      } else if (!isObject(objValue) || isFunction(objValue)) {
        newValue = initCloneObject(srcValue);
      }
    } else {
      isCommon = false;
    }
  }
  if (isCommon) {
    stack.set(srcValue, newValue);
    mergeFunc(newValue, srcValue, srcIndex, customizer, stack);
    stack["delete"](srcValue);
  }
  assignMergeValue(object, key, newValue);
}
function baseMerge(object, source, srcIndex, customizer, stack) {
  if (object === source) {
    return;
  }
  baseFor(source, function(srcValue, key) {
    stack || (stack = new Stack());
    if (isObject(srcValue)) {
      baseMergeDeep(object, source, key, srcIndex, baseMerge, customizer, stack);
    } else {
      var newValue = customizer ? customizer(safeGet(object, key), srcValue, key + "", object, source, stack) : void 0;
      if (newValue === void 0) {
        newValue = srcValue;
      }
      assignMergeValue(object, key, newValue);
    }
  }, keysIn);
}
function customDefaultsMerge(objValue, srcValue, key, object, source, stack) {
  if (isObject(objValue) && isObject(srcValue)) {
    stack.set(srcValue, objValue);
    baseMerge(objValue, srcValue, void 0, customDefaultsMerge, stack);
    stack["delete"](srcValue);
  }
  return objValue;
}
var mergeWith = createAssigner(function(object, source, srcIndex, customizer) {
  baseMerge(object, source, srcIndex, customizer);
});
var defaultsDeep = baseRest(function(args) {
  args.push(void 0, customDefaultsMerge);
  return apply(mergeWith, void 0, args);
});
function keys(o) {
  return Object.keys(o);
}
function entries(o) {
  if (o instanceof Map)
    return Array.from(o.entries());
  return Object.entries(o);
}
function fromEntries(entries2) {
  return Object.fromEntries(entries2);
}
const t0 = /* @__PURE__ */ new Date(), t1 = /* @__PURE__ */ new Date();
function timeInterval$1(floori, offseti, count, field) {
  function interval(date) {
    return floori(date = arguments.length === 0 ? /* @__PURE__ */ new Date() : /* @__PURE__ */ new Date(+date)), date;
  }
  interval.floor = (date) => {
    return floori(date = /* @__PURE__ */ new Date(+date)), date;
  };
  interval.ceil = (date) => {
    return floori(date = new Date(date - 1)), offseti(date, 1), floori(date), date;
  };
  interval.round = (date) => {
    const d0 = interval(date), d1 = interval.ceil(date);
    return date - d0 < d1 - date ? d0 : d1;
  };
  interval.offset = (date, step) => {
    return offseti(date = /* @__PURE__ */ new Date(+date), step == null ? 1 : Math.floor(step)), date;
  };
  interval.range = (start, stop, step) => {
    const range2 = [];
    start = interval.ceil(start);
    step = step == null ? 1 : Math.floor(step);
    if (!(start < stop) || !(step > 0)) return range2;
    let previous;
    do
      range2.push(previous = /* @__PURE__ */ new Date(+start)), offseti(start, step), floori(start);
    while (previous < start && start < stop);
    return range2;
  };
  interval.filter = (test) => {
    return timeInterval$1((date) => {
      if (date >= date) while (floori(date), !test(date)) date.setTime(date - 1);
    }, (date, step) => {
      if (date >= date) {
        if (step < 0) while (++step <= 0) {
          while (offseti(date, -1), !test(date)) {
          }
        }
        else while (--step >= 0) {
          while (offseti(date, 1), !test(date)) {
          }
        }
      }
    });
  };
  if (count) {
    interval.count = (start, end) => {
      t0.setTime(+start), t1.setTime(+end);
      floori(t0), floori(t1);
      return Math.floor(count(t0, t1));
    };
    interval.every = (step) => {
      step = Math.floor(step);
      return !isFinite(step) || !(step > 0) ? null : !(step > 1) ? interval : interval.filter(field ? (d) => field(d) % step === 0 : (d) => interval.count(0, d) % step === 0);
    };
  }
  return interval;
}
const millisecond = timeInterval$1(() => {
}, (date, step) => {
  date.setTime(+date + step);
}, (start, end) => {
  return end - start;
});
millisecond.every = (k) => {
  k = Math.floor(k);
  if (!isFinite(k) || !(k > 0)) return null;
  if (!(k > 1)) return millisecond;
  return timeInterval$1((date) => {
    date.setTime(Math.floor(date / k) * k);
  }, (date, step) => {
    date.setTime(+date + step * k);
  }, (start, end) => {
    return (end - start) / k;
  });
};
millisecond.range;
const durationSecond = 1e3;
const durationMinute = durationSecond * 60;
const durationHour = durationMinute * 60;
const durationDay = durationHour * 24;
const durationWeek = durationDay * 7;
const durationMonth = durationDay * 30;
const durationYear = durationDay * 365;
const second = timeInterval$1((date) => {
  date.setTime(date - date.getMilliseconds());
}, (date, step) => {
  date.setTime(+date + step * durationSecond);
}, (start, end) => {
  return (end - start) / durationSecond;
}, (date) => {
  return date.getUTCSeconds();
});
second.range;
const timeMinute = timeInterval$1((date) => {
  date.setTime(date - date.getMilliseconds() - date.getSeconds() * durationSecond);
}, (date, step) => {
  date.setTime(+date + step * durationMinute);
}, (start, end) => {
  return (end - start) / durationMinute;
}, (date) => {
  return date.getMinutes();
});
timeMinute.range;
const utcMinute = timeInterval$1((date) => {
  date.setUTCSeconds(0, 0);
}, (date, step) => {
  date.setTime(+date + step * durationMinute);
}, (start, end) => {
  return (end - start) / durationMinute;
}, (date) => {
  return date.getUTCMinutes();
});
utcMinute.range;
const timeHour = timeInterval$1((date) => {
  date.setTime(date - date.getMilliseconds() - date.getSeconds() * durationSecond - date.getMinutes() * durationMinute);
}, (date, step) => {
  date.setTime(+date + step * durationHour);
}, (start, end) => {
  return (end - start) / durationHour;
}, (date) => {
  return date.getHours();
});
timeHour.range;
const utcHour = timeInterval$1((date) => {
  date.setUTCMinutes(0, 0, 0);
}, (date, step) => {
  date.setTime(+date + step * durationHour);
}, (start, end) => {
  return (end - start) / durationHour;
}, (date) => {
  return date.getUTCHours();
});
utcHour.range;
const timeDay = timeInterval$1(
  (date) => date.setHours(0, 0, 0, 0),
  (date, step) => date.setDate(date.getDate() + step),
  (start, end) => (end - start - (end.getTimezoneOffset() - start.getTimezoneOffset()) * durationMinute) / durationDay,
  (date) => date.getDate() - 1
);
timeDay.range;
const utcDay = timeInterval$1((date) => {
  date.setUTCHours(0, 0, 0, 0);
}, (date, step) => {
  date.setUTCDate(date.getUTCDate() + step);
}, (start, end) => {
  return (end - start) / durationDay;
}, (date) => {
  return date.getUTCDate() - 1;
});
utcDay.range;
const unixDay = timeInterval$1((date) => {
  date.setUTCHours(0, 0, 0, 0);
}, (date, step) => {
  date.setUTCDate(date.getUTCDate() + step);
}, (start, end) => {
  return (end - start) / durationDay;
}, (date) => {
  return Math.floor(date / durationDay);
});
unixDay.range;
function timeWeekday(i) {
  return timeInterval$1((date) => {
    date.setDate(date.getDate() - (date.getDay() + 7 - i) % 7);
    date.setHours(0, 0, 0, 0);
  }, (date, step) => {
    date.setDate(date.getDate() + step * 7);
  }, (start, end) => {
    return (end - start - (end.getTimezoneOffset() - start.getTimezoneOffset()) * durationMinute) / durationWeek;
  });
}
const timeSunday = timeWeekday(0);
const timeMonday = timeWeekday(1);
const timeTuesday = timeWeekday(2);
const timeWednesday = timeWeekday(3);
const timeThursday = timeWeekday(4);
const timeFriday = timeWeekday(5);
const timeSaturday = timeWeekday(6);
timeSunday.range;
timeMonday.range;
timeTuesday.range;
timeWednesday.range;
timeThursday.range;
timeFriday.range;
timeSaturday.range;
function utcWeekday(i) {
  return timeInterval$1((date) => {
    date.setUTCDate(date.getUTCDate() - (date.getUTCDay() + 7 - i) % 7);
    date.setUTCHours(0, 0, 0, 0);
  }, (date, step) => {
    date.setUTCDate(date.getUTCDate() + step * 7);
  }, (start, end) => {
    return (end - start) / durationWeek;
  });
}
const utcSunday = utcWeekday(0);
const utcMonday = utcWeekday(1);
const utcTuesday = utcWeekday(2);
const utcWednesday = utcWeekday(3);
const utcThursday = utcWeekday(4);
const utcFriday = utcWeekday(5);
const utcSaturday = utcWeekday(6);
utcSunday.range;
utcMonday.range;
utcTuesday.range;
utcWednesday.range;
utcThursday.range;
utcFriday.range;
utcSaturday.range;
const timeMonth = timeInterval$1((date) => {
  date.setDate(1);
  date.setHours(0, 0, 0, 0);
}, (date, step) => {
  date.setMonth(date.getMonth() + step);
}, (start, end) => {
  return end.getMonth() - start.getMonth() + (end.getFullYear() - start.getFullYear()) * 12;
}, (date) => {
  return date.getMonth();
});
timeMonth.range;
const utcMonth = timeInterval$1((date) => {
  date.setUTCDate(1);
  date.setUTCHours(0, 0, 0, 0);
}, (date, step) => {
  date.setUTCMonth(date.getUTCMonth() + step);
}, (start, end) => {
  return end.getUTCMonth() - start.getUTCMonth() + (end.getUTCFullYear() - start.getUTCFullYear()) * 12;
}, (date) => {
  return date.getUTCMonth();
});
utcMonth.range;
const timeYear = timeInterval$1((date) => {
  date.setMonth(0, 1);
  date.setHours(0, 0, 0, 0);
}, (date, step) => {
  date.setFullYear(date.getFullYear() + step);
}, (start, end) => {
  return end.getFullYear() - start.getFullYear();
}, (date) => {
  return date.getFullYear();
});
timeYear.every = (k) => {
  return !isFinite(k = Math.floor(k)) || !(k > 0) ? null : timeInterval$1((date) => {
    date.setFullYear(Math.floor(date.getFullYear() / k) * k);
    date.setMonth(0, 1);
    date.setHours(0, 0, 0, 0);
  }, (date, step) => {
    date.setFullYear(date.getFullYear() + step * k);
  });
};
timeYear.range;
const utcYear = timeInterval$1((date) => {
  date.setUTCMonth(0, 1);
  date.setUTCHours(0, 0, 0, 0);
}, (date, step) => {
  date.setUTCFullYear(date.getUTCFullYear() + step);
}, (start, end) => {
  return end.getUTCFullYear() - start.getUTCFullYear();
}, (date) => {
  return date.getUTCFullYear();
});
utcYear.every = (k) => {
  return !isFinite(k = Math.floor(k)) || !(k > 0) ? null : timeInterval$1((date) => {
    date.setUTCFullYear(Math.floor(date.getUTCFullYear() / k) * k);
    date.setUTCMonth(0, 1);
    date.setUTCHours(0, 0, 0, 0);
  }, (date, step) => {
    date.setUTCFullYear(date.getUTCFullYear() + step * k);
  });
};
utcYear.range;
var PeriodType;
(function(PeriodType2) {
  PeriodType2[PeriodType2["Custom"] = 1] = "Custom";
  PeriodType2[PeriodType2["Day"] = 10] = "Day";
  PeriodType2[PeriodType2["DayTime"] = 11] = "DayTime";
  PeriodType2[PeriodType2["TimeOnly"] = 15] = "TimeOnly";
  PeriodType2[PeriodType2["Week"] = 20] = "Week";
  PeriodType2[PeriodType2["WeekSun"] = 21] = "WeekSun";
  PeriodType2[PeriodType2["WeekMon"] = 22] = "WeekMon";
  PeriodType2[PeriodType2["WeekTue"] = 23] = "WeekTue";
  PeriodType2[PeriodType2["WeekWed"] = 24] = "WeekWed";
  PeriodType2[PeriodType2["WeekThu"] = 25] = "WeekThu";
  PeriodType2[PeriodType2["WeekFri"] = 26] = "WeekFri";
  PeriodType2[PeriodType2["WeekSat"] = 27] = "WeekSat";
  PeriodType2[PeriodType2["Month"] = 30] = "Month";
  PeriodType2[PeriodType2["MonthYear"] = 31] = "MonthYear";
  PeriodType2[PeriodType2["Quarter"] = 40] = "Quarter";
  PeriodType2[PeriodType2["CalendarYear"] = 50] = "CalendarYear";
  PeriodType2[PeriodType2["FiscalYearOctober"] = 60] = "FiscalYearOctober";
  PeriodType2[PeriodType2["BiWeek1"] = 70] = "BiWeek1";
  PeriodType2[PeriodType2["BiWeek1Sun"] = 71] = "BiWeek1Sun";
  PeriodType2[PeriodType2["BiWeek1Mon"] = 72] = "BiWeek1Mon";
  PeriodType2[PeriodType2["BiWeek1Tue"] = 73] = "BiWeek1Tue";
  PeriodType2[PeriodType2["BiWeek1Wed"] = 74] = "BiWeek1Wed";
  PeriodType2[PeriodType2["BiWeek1Thu"] = 75] = "BiWeek1Thu";
  PeriodType2[PeriodType2["BiWeek1Fri"] = 76] = "BiWeek1Fri";
  PeriodType2[PeriodType2["BiWeek1Sat"] = 77] = "BiWeek1Sat";
  PeriodType2[PeriodType2["BiWeek2"] = 80] = "BiWeek2";
  PeriodType2[PeriodType2["BiWeek2Sun"] = 81] = "BiWeek2Sun";
  PeriodType2[PeriodType2["BiWeek2Mon"] = 82] = "BiWeek2Mon";
  PeriodType2[PeriodType2["BiWeek2Tue"] = 83] = "BiWeek2Tue";
  PeriodType2[PeriodType2["BiWeek2Wed"] = 84] = "BiWeek2Wed";
  PeriodType2[PeriodType2["BiWeek2Thu"] = 85] = "BiWeek2Thu";
  PeriodType2[PeriodType2["BiWeek2Fri"] = 86] = "BiWeek2Fri";
  PeriodType2[PeriodType2["BiWeek2Sat"] = 87] = "BiWeek2Sat";
})(PeriodType || (PeriodType = {}));
const periodTypeMappings = {
  [PeriodType.Custom]: "custom",
  [PeriodType.Day]: "day",
  [PeriodType.DayTime]: "daytime",
  [PeriodType.TimeOnly]: "time",
  [PeriodType.WeekSun]: "week-sun",
  [PeriodType.WeekMon]: "week-mon",
  [PeriodType.WeekTue]: "week-tue",
  [PeriodType.WeekWed]: "week-wed",
  [PeriodType.WeekThu]: "week-thu",
  [PeriodType.WeekFri]: "week-fri",
  [PeriodType.WeekSat]: "week-sat",
  [PeriodType.Week]: "week",
  [PeriodType.Month]: "month",
  [PeriodType.MonthYear]: "month-year",
  [PeriodType.Quarter]: "quarter",
  [PeriodType.CalendarYear]: "year",
  [PeriodType.FiscalYearOctober]: "fiscal-year-october",
  [PeriodType.BiWeek1Sun]: "biweek1-sun",
  [PeriodType.BiWeek1Mon]: "biweek1-mon",
  [PeriodType.BiWeek1Tue]: "biweek1-tue",
  [PeriodType.BiWeek1Wed]: "biweek1-wed",
  [PeriodType.BiWeek1Thu]: "biweek1-thu",
  [PeriodType.BiWeek1Fri]: "biweek1-fri",
  [PeriodType.BiWeek1Sat]: "biweek1-sat",
  [PeriodType.BiWeek1]: "biweek1",
  [PeriodType.BiWeek2Sun]: "biweek2-sun",
  [PeriodType.BiWeek2Mon]: "biweek2-mon",
  [PeriodType.BiWeek2Tue]: "biweek2-tue",
  [PeriodType.BiWeek2Wed]: "biweek2-wed",
  [PeriodType.BiWeek2Thu]: "biweek2-thu",
  [PeriodType.BiWeek2Fri]: "biweek2-fri",
  [PeriodType.BiWeek2Sat]: "biweek2-sat",
  [PeriodType.BiWeek2]: "biweek2"
};
var DayOfWeek;
(function(DayOfWeek2) {
  DayOfWeek2[DayOfWeek2["Sunday"] = 0] = "Sunday";
  DayOfWeek2[DayOfWeek2["Monday"] = 1] = "Monday";
  DayOfWeek2[DayOfWeek2["Tuesday"] = 2] = "Tuesday";
  DayOfWeek2[DayOfWeek2["Wednesday"] = 3] = "Wednesday";
  DayOfWeek2[DayOfWeek2["Thursday"] = 4] = "Thursday";
  DayOfWeek2[DayOfWeek2["Friday"] = 5] = "Friday";
  DayOfWeek2[DayOfWeek2["Saturday"] = 6] = "Saturday";
})(DayOfWeek || (DayOfWeek = {}));
var DateToken;
(function(DateToken2) {
  DateToken2["Year_numeric"] = "yyy";
  DateToken2["Year_2Digit"] = "yy";
  DateToken2["Month_long"] = "MMMM";
  DateToken2["Month_short"] = "MMM";
  DateToken2["Month_2Digit"] = "MM";
  DateToken2["Month_numeric"] = "M";
  DateToken2["Hour_numeric"] = "h";
  DateToken2["Hour_2Digit"] = "hh";
  DateToken2["Hour_wAMPM"] = "a";
  DateToken2["Hour_woAMPM"] = "aaaaaa";
  DateToken2["Minute_numeric"] = "m";
  DateToken2["Minute_2Digit"] = "mm";
  DateToken2["Second_numeric"] = "s";
  DateToken2["Second_2Digit"] = "ss";
  DateToken2["MiliSecond_3"] = "SSS";
  DateToken2["DayOfMonth_numeric"] = "d";
  DateToken2["DayOfMonth_2Digit"] = "dd";
  DateToken2["DayOfMonth_withOrdinal"] = "do";
  DateToken2["DayOfWeek_narrow"] = "eeeee";
  DateToken2["DayOfWeek_long"] = "eeee";
  DateToken2["DayOfWeek_short"] = "eee";
})(DateToken || (DateToken = {}));
function getWeekStartsOnFromIntl(locales) {
  if (!locales) {
    return DayOfWeek.Sunday;
  }
  const locale = new Intl.Locale(locales);
  const weekInfo = locale.weekInfo ?? locale.getWeekInfo?.();
  return (weekInfo?.firstDay ?? 0) % 7;
}
const defaultLocaleSettings = {
  locale: "en",
  dictionary: {
    Ok: "Ok",
    Cancel: "Cancel",
    Date: {
      Start: "Start",
      End: "End",
      Empty: "Empty",
      Day: "Day",
      DayTime: "Day Time",
      Time: "Time",
      Week: "Week",
      BiWeek: "Bi-Week",
      Month: "Month",
      Quarter: "Quarter",
      CalendarYear: "Calendar Year",
      FiscalYearOct: "Fiscal Year (Oct)",
      PeriodDay: {
        Current: "Today",
        Last: "Yesterday",
        LastX: "Last {0} days"
      },
      PeriodWeek: {
        Current: "This week",
        Last: "Last week",
        LastX: "Last {0} weeks"
      },
      PeriodBiWeek: {
        Current: "This bi-week",
        Last: "Last bi-week",
        LastX: "Last {0} bi-weeks"
      },
      PeriodMonth: {
        Current: "This month",
        Last: "Last month",
        LastX: "Last {0} months"
      },
      PeriodQuarter: {
        Current: "This quarter",
        Last: "Last quarter",
        LastX: "Last {0} quarters"
      },
      PeriodQuarterSameLastyear: "Same quarter last year",
      PeriodYear: {
        Current: "This year",
        Last: "Last year",
        LastX: "Last {0} years"
      },
      PeriodFiscalYear: {
        Current: "This fiscal year",
        Last: "Last fiscal year",
        LastX: "Last {0} fiscal years"
      }
    }
  },
  formats: {
    numbers: {
      defaults: {
        currency: "USD",
        fractionDigits: 2,
        currencyDisplay: "symbol"
      }
    },
    dates: {
      baseParsing: "MM/dd/yyyy",
      weekStartsOn: DayOfWeek.Sunday,
      ordinalSuffixes: {
        one: "st",
        two: "nd",
        few: "rd",
        other: "th"
      },
      presets: {
        day: {
          short: [DateToken.DayOfMonth_numeric, DateToken.Month_numeric],
          default: [DateToken.DayOfMonth_numeric, DateToken.Month_numeric, DateToken.Year_numeric],
          long: [DateToken.DayOfMonth_numeric, DateToken.Month_short, DateToken.Year_numeric]
        },
        dayTime: {
          short: [
            DateToken.DayOfMonth_numeric,
            DateToken.Month_numeric,
            DateToken.Year_numeric,
            DateToken.Hour_numeric,
            DateToken.Minute_numeric
          ],
          default: [
            DateToken.DayOfMonth_numeric,
            DateToken.Month_numeric,
            DateToken.Year_numeric,
            DateToken.Hour_2Digit,
            DateToken.Minute_2Digit
          ],
          long: [
            DateToken.DayOfMonth_numeric,
            DateToken.Month_numeric,
            DateToken.Year_numeric,
            DateToken.Hour_2Digit,
            DateToken.Minute_2Digit,
            DateToken.Second_2Digit
          ]
        },
        timeOnly: {
          short: [DateToken.Hour_numeric, DateToken.Minute_numeric],
          default: [DateToken.Hour_2Digit, DateToken.Minute_2Digit, DateToken.Second_2Digit],
          long: [
            DateToken.Hour_2Digit,
            DateToken.Minute_2Digit,
            DateToken.Second_2Digit,
            DateToken.MiliSecond_3
          ]
        },
        week: {
          short: [DateToken.DayOfMonth_numeric, DateToken.Month_numeric],
          default: [DateToken.DayOfMonth_numeric, DateToken.Month_numeric, DateToken.Year_numeric],
          long: [DateToken.DayOfMonth_numeric, DateToken.Month_numeric, DateToken.Year_numeric]
        },
        month: {
          short: DateToken.Month_short,
          default: DateToken.Month_long,
          long: [DateToken.Month_long, DateToken.Year_numeric]
        },
        monthsYear: {
          short: [DateToken.Month_short, DateToken.Year_2Digit],
          default: [DateToken.Month_long, DateToken.Year_numeric],
          long: [DateToken.Month_long, DateToken.Year_numeric]
        },
        year: {
          short: DateToken.Year_2Digit,
          default: DateToken.Year_numeric,
          long: DateToken.Year_numeric
        }
      }
    }
  }
};
function createLocaleSettings(localeSettings, base = defaultLocaleSettings) {
  if (localeSettings.formats?.dates?.ordinalSuffixes) {
    localeSettings.formats.dates.ordinalSuffixes = {
      one: "",
      two: "",
      few: "",
      other: "",
      zero: "",
      many: "",
      ...localeSettings.formats.dates.ordinalSuffixes
    };
  }
  if (localeSettings.formats?.dates?.weekStartsOn === void 0) {
    localeSettings = defaultsDeep(localeSettings, {
      formats: { dates: { weekStartsOn: getWeekStartsOnFromIntl(localeSettings.locale) } }
    });
  }
  return defaultsDeep(localeSettings, base);
}
const defaultLocale = createLocaleSettings({ locale: "en" });
function getPeriodTypeByCode(code) {
  const element = entries(periodTypeMappings).find((c) => c[1] === code);
  return parseInt(String(element?.[0] ?? "0"));
}
function getFiscalYear(date = /* @__PURE__ */ new Date(), options) {
  if (date === null) {
    return NaN;
  }
  const startMonth = 10;
  return date.getMonth() >= startMonth - 1 ? date.getFullYear() + 1 : date.getFullYear();
}
const biweekBaseDates = [/* @__PURE__ */ new Date("1799-12-22T00:00"), /* @__PURE__ */ new Date("1799-12-15T00:00")];
function startOfBiWeek(date, week, startOfWeek2) {
  var weekBaseDate = biweekBaseDates[week - 1];
  var baseDate = intervalOffset("day", weekBaseDate, startOfWeek2);
  var periodsSince = Math.floor(intervalDifference("day", baseDate, date) / 14);
  return intervalOffset("day", baseDate, periodsSince * 14);
}
function endOfBiWeek(date, week, startOfWeek2) {
  return intervalOffset("day", startOfBiWeek(date, week, startOfWeek2), 13);
}
function startOfWeek(date, weekStartsOn) {
  switch (weekStartsOn) {
    case DayOfWeek.Sunday:
      return startOfInterval(timeSunday, date);
    case DayOfWeek.Monday:
      return startOfInterval(timeMonday, date);
    case DayOfWeek.Tuesday:
      return startOfInterval(timeTuesday, date);
    case DayOfWeek.Wednesday:
      return startOfInterval(timeWednesday, date);
    case DayOfWeek.Thursday:
      return startOfInterval(timeThursday, date);
    case DayOfWeek.Friday:
      return startOfInterval(timeFriday, date);
    case DayOfWeek.Saturday:
      return startOfInterval(timeSaturday, date);
  }
}
function endOfWeek(date, weekStartsOn) {
  switch (weekStartsOn) {
    case DayOfWeek.Sunday:
      return endOfInterval(timeSunday, date);
    case DayOfWeek.Monday:
      return endOfInterval(timeMonday, date);
    case DayOfWeek.Tuesday:
      return endOfInterval(timeTuesday, date);
    case DayOfWeek.Wednesday:
      return endOfInterval(timeWednesday, date);
    case DayOfWeek.Thursday:
      return endOfInterval(timeThursday, date);
    case DayOfWeek.Friday:
      return endOfInterval(timeFriday, date);
    case DayOfWeek.Saturday:
      return endOfInterval(timeSaturday, date);
  }
}
function formatIntl(settings, dt, tokens_or_intlOptions) {
  const { locale, formats: { dates: { ordinalSuffixes: suffixes } } } = settings;
  function formatIntlOrdinal(formatter2, with_ordinal = false) {
    if (with_ordinal) {
      const rules = new Intl.PluralRules(locale, { type: "ordinal" });
      const splited = formatter2.formatToParts(dt);
      return splited.map((c) => {
        if (c.type === "day") {
          const ordinal = rules.select(parseInt(c.value, 10));
          const suffix = suffixes[ordinal];
          return `${c.value}${suffix}`;
        }
        return c.value;
      }).join("");
    }
    return formatter2.format(dt);
  }
  if (typeof tokens_or_intlOptions !== "string" && !Array.isArray(tokens_or_intlOptions)) {
    return formatIntlOrdinal(new Intl.DateTimeFormat(locale, tokens_or_intlOptions), tokens_or_intlOptions.withOrdinal);
  }
  const tokens = Array.isArray(tokens_or_intlOptions) ? tokens_or_intlOptions.join("") : tokens_or_intlOptions;
  const formatter = new Intl.DateTimeFormat(locale, {
    year: tokens.includes(DateToken.Year_numeric) ? "numeric" : tokens.includes(DateToken.Year_2Digit) ? "2-digit" : void 0,
    month: tokens.includes(DateToken.Month_long) ? "long" : tokens.includes(DateToken.Month_short) ? "short" : tokens.includes(DateToken.Month_2Digit) ? "2-digit" : tokens.includes(DateToken.Month_numeric) ? "numeric" : void 0,
    day: tokens.includes(DateToken.DayOfMonth_2Digit) ? "2-digit" : tokens.includes(DateToken.DayOfMonth_numeric) ? "numeric" : void 0,
    hour: tokens.includes(DateToken.Hour_2Digit) ? "2-digit" : tokens.includes(DateToken.Hour_numeric) ? "numeric" : void 0,
    hour12: tokens.includes(DateToken.Hour_woAMPM) ? false : tokens.includes(DateToken.Hour_wAMPM) ? true : void 0,
    minute: tokens.includes(DateToken.Minute_2Digit) ? "2-digit" : tokens.includes(DateToken.Minute_numeric) ? "numeric" : void 0,
    second: tokens.includes(DateToken.Second_2Digit) ? "2-digit" : tokens.includes(DateToken.Second_numeric) ? "numeric" : void 0,
    fractionalSecondDigits: tokens.includes(DateToken.MiliSecond_3) ? 3 : void 0,
    weekday: tokens.includes(DateToken.DayOfWeek_narrow) ? "narrow" : tokens.includes(DateToken.DayOfWeek_long) ? "long" : tokens.includes(DateToken.DayOfWeek_short) ? "short" : void 0
  });
  return formatIntlOrdinal(formatter, tokens.includes(DateToken.DayOfMonth_withOrdinal));
}
function range$1(settings, date, weekStartsOn, formatToUse, biWeek = void 0) {
  const start = biWeek === void 0 ? startOfWeek(date, weekStartsOn) : startOfBiWeek(date, biWeek, weekStartsOn);
  const end = biWeek === void 0 ? endOfWeek(date, weekStartsOn) : endOfBiWeek(date, biWeek, weekStartsOn);
  return formatIntl(settings, start, formatToUse) + " - " + formatIntl(settings, end, formatToUse);
}
function updatePeriodTypeWithWeekStartsOn(weekStartsOn, periodType) {
  if (periodType === PeriodType.Week) {
    periodType = [
      PeriodType.WeekSun,
      PeriodType.WeekMon,
      PeriodType.WeekTue,
      PeriodType.WeekWed,
      PeriodType.WeekThu,
      PeriodType.WeekFri,
      PeriodType.WeekSat
    ][weekStartsOn];
  } else if (periodType === PeriodType.BiWeek1) {
    periodType = [
      PeriodType.BiWeek1Sun,
      PeriodType.BiWeek1Mon,
      PeriodType.BiWeek1Tue,
      PeriodType.BiWeek1Wed,
      PeriodType.BiWeek1Thu,
      PeriodType.BiWeek1Fri,
      PeriodType.BiWeek1Sat
    ][weekStartsOn];
  } else if (periodType === PeriodType.BiWeek2) {
    periodType = [
      PeriodType.BiWeek2Sun,
      PeriodType.BiWeek2Mon,
      PeriodType.BiWeek2Tue,
      PeriodType.BiWeek2Wed,
      PeriodType.BiWeek2Thu,
      PeriodType.BiWeek2Fri,
      PeriodType.BiWeek2Sat
    ][weekStartsOn];
  }
  return periodType;
}
function formatDateWithLocale(settings, date, periodType, options = {}) {
  if (typeof date === "string") {
    date = parseDate(date);
  }
  if (date == null || isNaN(date)) {
    return "";
  }
  const weekStartsOn = options.weekStartsOn ?? settings.formats.dates.weekStartsOn;
  const { day, dayTime, timeOnly, week, month, monthsYear, year } = settings.formats.dates.presets;
  periodType = typeof periodType === "string" ? getPeriodTypeByCode(periodType) : periodType ?? PeriodType.Day;
  periodType = updatePeriodTypeWithWeekStartsOn(weekStartsOn, periodType) ?? periodType;
  function rv(preset) {
    if (options.variant === "custom") {
      return options.custom ?? preset.default;
    } else if (options.custom && !options.variant) {
      return options.custom;
    }
    return preset[options.variant ?? "default"];
  }
  switch (periodType) {
    case PeriodType.Custom:
      return formatIntl(settings, date, options.custom);
    case PeriodType.Day:
      return formatIntl(settings, date, rv(day));
    case PeriodType.DayTime:
      return formatIntl(settings, date, rv(dayTime));
    case PeriodType.TimeOnly:
      return formatIntl(settings, date, rv(timeOnly));
    case PeriodType.Week:
    case PeriodType.WeekSun:
      return range$1(settings, date, 0, rv(week));
    case PeriodType.WeekMon:
      return range$1(settings, date, 1, rv(week));
    case PeriodType.WeekTue:
      return range$1(settings, date, 2, rv(week));
    case PeriodType.WeekWed:
      return range$1(settings, date, 3, rv(week));
    case PeriodType.WeekThu:
      return range$1(settings, date, 4, rv(week));
    case PeriodType.WeekFri:
      return range$1(settings, date, 5, rv(week));
    case PeriodType.WeekSat:
      return range$1(settings, date, 6, rv(week));
    case PeriodType.Month:
      return formatIntl(settings, date, rv(month));
    case PeriodType.MonthYear:
      return formatIntl(settings, date, rv(monthsYear));
    case PeriodType.Quarter:
      return [
        formatIntl(settings, startOfInterval("quarter", date), rv(month)),
        formatIntl(settings, endOfInterval("quarter", date), rv(monthsYear))
      ].join(" - ");
    case PeriodType.CalendarYear:
      return formatIntl(settings, date, rv(year));
    case PeriodType.FiscalYearOctober:
      const fDate = new Date(getFiscalYear(date), 0, 1);
      return formatIntl(settings, fDate, rv(year));
    case PeriodType.BiWeek1:
    case PeriodType.BiWeek1Sun:
      return range$1(settings, date, 0, rv(week), 1);
    case PeriodType.BiWeek1Mon:
      return range$1(settings, date, 1, rv(week), 1);
    case PeriodType.BiWeek1Tue:
      return range$1(settings, date, 2, rv(week), 1);
    case PeriodType.BiWeek1Wed:
      return range$1(settings, date, 3, rv(week), 1);
    case PeriodType.BiWeek1Thu:
      return range$1(settings, date, 4, rv(week), 1);
    case PeriodType.BiWeek1Fri:
      return range$1(settings, date, 5, rv(week), 1);
    case PeriodType.BiWeek1Sat:
      return range$1(settings, date, 6, rv(week), 1);
    case PeriodType.BiWeek2:
    case PeriodType.BiWeek2Sun:
      return range$1(settings, date, 0, rv(week), 2);
    case PeriodType.BiWeek2Mon:
      return range$1(settings, date, 1, rv(week), 2);
    case PeriodType.BiWeek2Tue:
      return range$1(settings, date, 2, rv(week), 2);
    case PeriodType.BiWeek2Wed:
      return range$1(settings, date, 3, rv(week), 2);
    case PeriodType.BiWeek2Thu:
      return range$1(settings, date, 4, rv(week), 2);
    case PeriodType.BiWeek2Fri:
      return range$1(settings, date, 5, rv(week), 2);
    case PeriodType.BiWeek2Sat:
      return range$1(settings, date, 6, rv(week), 2);
    default:
      return date.toISOString();
  }
}
const DATE_FORMAT = /^\d{4}-\d{2}-\d{2}(T\d{2}:\d{2}(:\d{2}(\.\d+|)?(Z|(-|\+)\d{2}:\d{2}?)?)?)?$/;
function isStringDate(value) {
  return DATE_FORMAT.test(value);
}
function isStringDateWithTime(value) {
  return isStringDate(value) && value.includes("T");
}
function parseDate(dateStr, format) {
  if (!isStringDate(dateStr))
    return /* @__PURE__ */ new Date("Invalid Date");
  if (isStringDateWithTime(dateStr)) {
    return new Date(dateStr);
  }
  const [date, time2] = dateStr.split("T");
  const [year, month, day] = date.split("-").map(Number);
  if (time2) {
    const [hour, minute, second2] = time2.split(":").map(Number);
    return new Date(year, month - 1, day, hour, minute, second2);
  } else {
    return new Date(year, month - 1, day);
  }
}
const timeQuarter = timeInterval$1(
  // floor
  (date) => {
    date.setMonth(date.getMonth() - date.getMonth() % 3, 1);
    date.setHours(0, 0, 0, 0);
  },
  // offset
  (date, step) => date.setMonth(date.getMonth() + step * 3, 1),
  // count
  (start, end) => (end.getTime() - start.getTime()) / (1e3 * 60 * 60 * 24 * 30 * 3),
  // field
  (date) => date.getMonth()
  // TODO: what should this be?
);
function timeInterval(name) {
  switch (name) {
    case "millisecond":
      return millisecond;
    case "second":
      return second;
    case "minute":
      return timeMinute;
    case "hour":
      return timeHour;
    case "day":
      return timeDay;
    case "week":
      return timeSunday;
    case "month":
      return timeMonth;
    case "quarter":
      return timeQuarter;
    case "year":
      return timeYear;
  }
}
function startOfInterval(interval, date) {
  interval = typeof interval === "string" ? timeInterval(interval) : interval;
  if (date === void 0) {
    return (date2) => new Date(interval.floor(date2));
  }
  return new Date(interval.floor(date));
}
function endOfInterval(interval, date) {
  interval = typeof interval === "string" ? timeInterval(interval) : interval;
  if (date === void 0) {
    return (date2) => new Date(interval.offset(interval.floor(date2), 1).getTime() - 1);
  }
  return new Date(interval.offset(interval.floor(date), 1).getTime() - 1);
}
function intervalOffset(interval, date, offset) {
  interval = typeof interval === "string" ? timeInterval(interval) : interval;
  return interval.offset(date, offset);
}
function intervalDifference(interval, date1, date2) {
  interval = typeof interval === "string" ? timeInterval(interval) : interval;
  if (date1 === void 0 || date2 === void 0) {
    return (date12, date22) => interval.count(date12, date22);
  }
  return interval.count(date1, date2);
}
var DurationUnits;
(function(DurationUnits2) {
  DurationUnits2[DurationUnits2["Year"] = 0] = "Year";
  DurationUnits2[DurationUnits2["Day"] = 1] = "Day";
  DurationUnits2[DurationUnits2["Hour"] = 2] = "Hour";
  DurationUnits2[DurationUnits2["Minute"] = 3] = "Minute";
  DurationUnits2[DurationUnits2["Second"] = 4] = "Second";
  DurationUnits2[DurationUnits2["Millisecond"] = 5] = "Millisecond";
})(DurationUnits || (DurationUnits = {}));
class Duration {
  #milliseconds = 0;
  #seconds = 0;
  #minutes = 0;
  #hours = 0;
  #days = 0;
  #years = 0;
  constructor(options = {}) {
    const startDate = typeof options.start === "string" ? parseDate(options.start) : options.start;
    const endDate = typeof options.end === "string" ? parseDate(options.end) : options.end;
    const differenceInMs = startDate ? Math.abs(Number(endDate || /* @__PURE__ */ new Date()) - Number(startDate)) : void 0;
    if (!Number.isFinite(differenceInMs) && options.duration == null) {
      return;
    }
    this.#milliseconds = options.duration?.milliseconds ?? differenceInMs ?? 0;
    this.#seconds = options.duration?.seconds ?? 0;
    this.#minutes = options.duration?.minutes ?? 0;
    this.#hours = options.duration?.hours ?? 0;
    this.#days = options.duration?.days ?? 0;
    this.#years = options.duration?.years ?? 0;
    if (this.#milliseconds >= 1e3) {
      const carrySeconds = (this.#milliseconds - this.#milliseconds % 1e3) / 1e3;
      this.#seconds += carrySeconds;
      this.#milliseconds = this.#milliseconds - carrySeconds * 1e3;
    }
    if (this.#seconds >= 60) {
      const carryMinutes = (this.#seconds - this.#seconds % 60) / 60;
      this.#minutes += carryMinutes;
      this.#seconds = this.#seconds - carryMinutes * 60;
    }
    if (this.#minutes >= 60) {
      const carryHours = (this.#minutes - this.#minutes % 60) / 60;
      this.#hours += carryHours;
      this.#minutes = this.#minutes - carryHours * 60;
    }
    if (this.#hours >= 24) {
      const carryDays = (this.#hours - this.#hours % 24) / 24;
      this.#days += carryDays;
      this.#hours = this.#hours - carryDays * 24;
    }
    if (this.#days >= 365) {
      const carryYears = (this.#days - this.#days % 365) / 365;
      this.#years += carryYears;
      this.#days = this.#days - carryYears * 365;
    }
  }
  get years() {
    return this.#years;
  }
  get days() {
    return this.#days;
  }
  get hours() {
    return this.#hours;
  }
  get minutes() {
    return this.#minutes;
  }
  get seconds() {
    return this.#seconds;
  }
  get milliseconds() {
    return this.#milliseconds;
  }
  valueOf() {
    return this.#milliseconds + this.#seconds * 1e3 + this.#minutes * 60 * 1e3 + this.#hours * 60 * 60 * 1e3 + this.#days * 24 * 60 * 60 * 1e3 + this.#years * 365 * 24 * 60 * 60 * 1e3;
  }
  toJSON() {
    return {
      years: this.#years,
      days: this.#days,
      hours: this.#hours,
      minutes: this.#minutes,
      seconds: this.#seconds,
      milliseconds: this.#milliseconds
    };
  }
  format(options = {}) {
    const { minUnits, totalUnits = 99, variant = "short" } = options;
    var sentenceArr = [];
    var unitNames = variant === "short" ? ["y", "d", "h", "m", "s", "ms"] : ["years", "days", "hours", "minutes", "seconds", "milliseconds"];
    var unitNums = [
      this.years,
      this.days,
      this.hours,
      this.minutes,
      this.seconds,
      this.milliseconds
    ].filter((x, i2) => i2 <= (minUnits ?? 99));
    for (var i in unitNums) {
      if (sentenceArr.length >= totalUnits) {
        break;
      }
      const unitNum = unitNums[i];
      let unitName = unitNames[i];
      if (unitNum !== 0 || sentenceArr.length === 0 && Number(i) === unitNums.length - 1) {
        switch (variant) {
          case "short":
            sentenceArr.push(unitNum + unitName);
            break;
          case "long":
            if (unitNum === 1) {
              unitName = unitName.slice(0, -1);
            }
            sentenceArr.push(unitNum + " " + unitName);
            break;
        }
      }
    }
    const sentence = sentenceArr.join(variant === "long" ? " and " : " ");
    return sentence;
  }
  toString() {
    return this.format();
  }
}
[50, ...range$2(100, 1e3, 100)];
const twMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      shadow: [
        "shadow-border-l",
        "shadow-border-r",
        "shadow-border-t",
        "shadow-border-b",
        "elevation-none",
        ...range$2(1, 25).map((x) => `elevation-${x}`)
      ]
    }
  }
});
const cls = (...inputs) => twMerge(clsx$1(...inputs));
const copyProperty = (to, from, property, ignoreNonConfigurable) => {
  if (property === "length" || property === "prototype") {
    return;
  }
  if (property === "arguments" || property === "caller") {
    return;
  }
  const toDescriptor = Object.getOwnPropertyDescriptor(to, property);
  const fromDescriptor = Object.getOwnPropertyDescriptor(from, property);
  if (!canCopyProperty(toDescriptor, fromDescriptor) && ignoreNonConfigurable) {
    return;
  }
  Object.defineProperty(to, property, fromDescriptor);
};
const canCopyProperty = function(toDescriptor, fromDescriptor) {
  return toDescriptor === void 0 || toDescriptor.configurable || toDescriptor.writable === fromDescriptor.writable && toDescriptor.enumerable === fromDescriptor.enumerable && toDescriptor.configurable === fromDescriptor.configurable && (toDescriptor.writable || toDescriptor.value === fromDescriptor.value);
};
const changePrototype = (to, from) => {
  const fromPrototype = Object.getPrototypeOf(from);
  if (fromPrototype === Object.getPrototypeOf(to)) {
    return;
  }
  Object.setPrototypeOf(to, fromPrototype);
};
const wrappedToString = (withName, fromBody) => `/* Wrapped ${withName}*/
${fromBody}`;
const toStringDescriptor = Object.getOwnPropertyDescriptor(Function.prototype, "toString");
const toStringName = Object.getOwnPropertyDescriptor(Function.prototype.toString, "name");
const changeToString = (to, from, name) => {
  const withName = name === "" ? "" : `with ${name.trim()}() `;
  const newToString = wrappedToString.bind(null, withName, from.toString());
  Object.defineProperty(newToString, "name", toStringName);
  const { writable, enumerable, configurable } = toStringDescriptor;
  Object.defineProperty(to, "toString", { value: newToString, writable, enumerable, configurable });
};
function mimicFunction(to, from, { ignoreNonConfigurable = false } = {}) {
  const { name } = to;
  for (const property of Reflect.ownKeys(from)) {
    copyProperty(to, from, property, ignoreNonConfigurable);
  }
  changePrototype(to, from);
  changeToString(to, from, name);
  return to;
}
const maxTimeoutValue = 2147483647;
const cacheStore = /* @__PURE__ */ new WeakMap();
const cacheTimerStore = /* @__PURE__ */ new WeakMap();
const cacheKeyStore = /* @__PURE__ */ new WeakMap();
function getValidCacheItem(cache, key) {
  const item = cache.get(key);
  if (!item) {
    return void 0;
  }
  if (item.maxAge <= Date.now()) {
    cache.delete(key);
    return void 0;
  }
  return item;
}
function memoize(function_, { cacheKey, cache = /* @__PURE__ */ new Map(), maxAge } = {}) {
  if (maxAge === 0) {
    return function_;
  }
  if (typeof maxAge === "number" && Number.isFinite(maxAge)) {
    if (maxAge > maxTimeoutValue) {
      throw new TypeError(`The \`maxAge\` option cannot exceed ${maxTimeoutValue}.`);
    }
    if (maxAge < 0) {
      throw new TypeError("The `maxAge` option should not be a negative number.");
    }
  }
  const memoized = function(...arguments_) {
    const key = cacheKey ? cacheKey(arguments_) : arguments_[0];
    const cacheItem = getValidCacheItem(cache, key);
    if (cacheItem) {
      return cacheItem.data;
    }
    const result = function_.apply(this, arguments_);
    const computedMaxAge = typeof maxAge === "function" ? maxAge(...arguments_) : maxAge;
    if (computedMaxAge !== void 0 && computedMaxAge !== Number.POSITIVE_INFINITY) {
      if (!Number.isFinite(computedMaxAge)) {
        throw new TypeError("The `maxAge` function must return a finite number, `0`, or `Infinity`.");
      }
      if (computedMaxAge <= 0) {
        return result;
      }
      if (computedMaxAge > maxTimeoutValue) {
        throw new TypeError(`The \`maxAge\` function result cannot exceed ${maxTimeoutValue}.`);
      }
    }
    cache.set(key, {
      data: result,
      maxAge: computedMaxAge === void 0 || computedMaxAge === Number.POSITIVE_INFINITY ? Number.POSITIVE_INFINITY : Date.now() + computedMaxAge
    });
    if (computedMaxAge !== void 0 && computedMaxAge !== Number.POSITIVE_INFINITY) {
      const timer = setTimeout(() => {
        cache.delete(key);
        cacheTimerStore.get(memoized)?.delete(timer);
      }, computedMaxAge);
      timer.unref?.();
      const timers = cacheTimerStore.get(memoized) ?? /* @__PURE__ */ new Set();
      timers.add(timer);
      cacheTimerStore.set(memoized, timers);
    }
    return result;
  };
  mimicFunction(memoized, function_, {
    ignoreNonConfigurable: true
  });
  cacheStore.set(memoized, cache);
  cacheKeyStore.set(memoized, cacheKey ?? ((arguments_) => arguments_[0]));
  return memoized;
}
const MEASUREMENT_ELEMENT_ID = "__text_measurement_id";
function _getStringWidth(str, style) {
  try {
    let textEl = document.getElementById(MEASUREMENT_ELEMENT_ID);
    if (!textEl) {
      const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      svg.style.width = "0";
      svg.style.height = "0";
      svg.style.position = "absolute";
      svg.style.top = "-100%";
      svg.style.left = "-100%";
      textEl = document.createElementNS("http://www.w3.org/2000/svg", "text");
      textEl.setAttribute("id", MEASUREMENT_ELEMENT_ID);
      svg.appendChild(textEl);
      document.body.appendChild(svg);
    }
    Object.assign(textEl.style, style);
    textEl.textContent = str;
    return textEl.getComputedTextLength();
  } catch (e) {
    return null;
  }
}
const getStringWidth = memoize(_getStringWidth, {
  cacheKey: ([str, style]) => `${str}_${JSON.stringify(style)}`
});
function toTitleCase(str) {
  return str.replace(/^\w/, (d) => d.toUpperCase());
}
const DEFAULT_ELLIPSIS = "…";
function truncateText(text, { position = "end", ellipsis = DEFAULT_ELLIPSIS, maxWidth, style, maxChars }) {
  if (!text)
    return "";
  if (maxWidth === void 0 && maxChars === void 0)
    return text;
  let workingText = text;
  if (maxChars !== void 0 && text.length > maxChars) {
    if (position === "start") {
      workingText = ellipsis + text.slice(-maxChars);
    } else if (position === "middle") {
      const half = Math.floor(maxChars / 2);
      workingText = text.slice(0, half) + ellipsis + text.slice(-half);
    } else {
      workingText = text.slice(0, maxChars) + ellipsis;
    }
  }
  if (maxWidth !== void 0) {
    const fullWidth = getStringWidth(workingText, style);
    if (fullWidth === null || fullWidth <= maxWidth)
      return workingText;
    const ellipsisWidth = getStringWidth(ellipsis, style) ?? 0;
    let availableWidth = maxWidth - ellipsisWidth;
    if (position === "start") {
      let truncated = workingText.slice(ellipsis.length);
      let truncatedWidth = getStringWidth(truncated, style);
      while (truncatedWidth !== null && truncatedWidth > availableWidth && truncated.length > 0) {
        truncated = truncated.slice(1);
        truncatedWidth = getStringWidth(truncated, style);
      }
      return ellipsis + truncated;
    } else if (position === "middle") {
      const halfWidth = availableWidth / 2;
      let left = "";
      let right = "";
      let bestLeft = "";
      let bestRight = "";
      for (let i = 0, j = workingText.length - 1; i < workingText.length && j >= 0; i++, j--) {
        const leftTest = workingText.slice(0, i + 1);
        const rightTest = workingText.slice(j);
        const leftWidth = getStringWidth(leftTest, style);
        const rightWidth = getStringWidth(rightTest, style);
        if (leftWidth !== null && leftWidth <= halfWidth)
          left = leftTest;
        if (rightWidth !== null && rightWidth <= halfWidth)
          right = rightTest;
        const combinedWidth = getStringWidth(left + ellipsis + right, style);
        if (combinedWidth !== null && combinedWidth <= maxWidth) {
          bestLeft = left;
          bestRight = right;
        } else {
          break;
        }
      }
      return bestLeft + ellipsis + bestRight;
    } else {
      let truncated = workingText.slice(0, -ellipsis.length);
      let truncatedWidth = getStringWidth(truncated + ellipsis, style);
      while (truncatedWidth !== null && truncatedWidth > maxWidth && truncated.length > 0) {
        truncated = truncated.slice(0, -1);
        truncatedWidth = getStringWidth(truncated + ellipsis, style);
      }
      return truncated + ellipsis;
    }
  }
  return workingText;
}
const defaultWindow = void 0;
function getActiveElement(document2) {
  let activeElement = document2.activeElement;
  while (activeElement?.shadowRoot) {
    const node = activeElement.shadowRoot.activeElement;
    if (node === activeElement)
      break;
    else
      activeElement = node;
  }
  return activeElement;
}
class ActiveElement {
  #document;
  #subscribe;
  constructor(options = {}) {
    const { window: window2 = defaultWindow, document: document2 = window2?.document } = options;
    if (window2 === void 0) return;
    this.#document = document2;
    this.#subscribe = createSubscriber();
  }
  get current() {
    this.#subscribe?.();
    if (!this.#document) return null;
    return getActiveElement(this.#document);
  }
}
new ActiveElement();
function runWatcher(sources, flush, effect, options = {}) {
  const { lazy = false } = options;
}
function watch(sources, effect, options) {
  runWatcher(sources, "post", effect, options);
}
function watchPre(sources, effect, options) {
  runWatcher(sources, "pre", effect, options);
}
watch.pre = watchPre;
const DEFAULT_FILL = "rgb(0, 0, 0)";
const CANVAS_STYLES_ELEMENT_ID = "__layerchart_canvas_styles_id";
const supportedStyles = [
  "fill",
  "fillOpacity",
  "stroke",
  "strokeWidth",
  "opacity",
  "fontWeight",
  "fontSize",
  "fontFamily",
  "textAnchor",
  "textAlign",
  "paintOrder"
];
function _getComputedStyles(canvas, { styles, classes } = {}) {
  try {
    let svg = document.getElementById(CANVAS_STYLES_ELEMENT_ID);
    if (!svg) {
      svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      svg.setAttribute("id", CANVAS_STYLES_ELEMENT_ID);
      svg.style.display = "none";
      canvas.after(svg);
    }
    svg = svg;
    svg.removeAttribute("style");
    svg.removeAttribute("class");
    if (styles) {
      Object.assign(svg.style, styles);
    }
    svg.style.display = "none";
    if (classes) {
      svg.setAttribute("class", cls(classes).split(" ").filter((s) => !s.startsWith("transition-")).join(" "));
    }
    const computedStyles = supportedStyles.reduce((acc, style) => {
      acc[style] = window.getComputedStyle(svg)[style];
      return acc;
    }, {});
    return computedStyles;
  } catch (e) {
    console.error("Unable to get computed styles", e);
    return {};
  }
}
function getComputedStylesKey(canvas, { styles, classes } = {}) {
  return JSON.stringify({ canvasId: canvas.id, styles, classes });
}
const getComputedStyles = memoize(_getComputedStyles, {
  cacheKey: ([canvas, styleOptions]) => {
    return getComputedStylesKey(canvas, styleOptions);
  }
});
function render(ctx, render2, styleOptions = {}, { applyText } = {}) {
  let resolvedStyles;
  if (styleOptions.classes == null && !Object.values(styleOptions.styles ?? {}).some((v) => typeof v === "string" && v.includes("var("))) {
    resolvedStyles = styleOptions.styles ?? {};
  } else {
    const { constantStyles, variableStyles } = Object.entries(styleOptions.styles ?? {}).reduce((acc, [key, value]) => {
      if (typeof value === "number" || typeof value === "string" && !value.includes("var(")) {
        acc.constantStyles[key] = value;
      } else if (typeof value === "string" && value.includes("var(")) {
        acc.variableStyles[key] = value;
      }
      return acc;
    }, { constantStyles: {}, variableStyles: {} });
    const computedStyles = getComputedStyles(ctx.canvas, {
      styles: variableStyles,
      classes: styleOptions.classes
    });
    resolvedStyles = { ...computedStyles, ...constantStyles };
  }
  const paintOrder = resolvedStyles?.paintOrder === "stroke" ? ["stroke", "fill"] : ["fill", "stroke"];
  if (resolvedStyles?.opacity) {
    ctx.globalAlpha = Number(resolvedStyles?.opacity);
  }
  if (applyText) {
    ctx.font = `${resolvedStyles.fontWeight} ${resolvedStyles.fontSize} ${resolvedStyles.fontFamily}`;
    if (resolvedStyles.textAnchor === "middle") {
      ctx.textAlign = "center";
    } else if (resolvedStyles.textAnchor === "end") {
      ctx.textAlign = "right";
    } else {
      ctx.textAlign = resolvedStyles.textAlign;
    }
  }
  if (resolvedStyles.strokeDasharray?.includes(",")) {
    const dashArray = resolvedStyles.strokeDasharray.split(",").map((s) => Number(s.replace("px", "")));
    ctx.setLineDash(dashArray);
  }
  for (const attr of paintOrder) {
    if (attr === "fill") {
      const fill = styleOptions.styles?.fill && (styleOptions.styles?.fill instanceof CanvasGradient || styleOptions.styles?.fill instanceof CanvasPattern || !styleOptions.styles?.fill?.includes("var")) ? styleOptions.styles.fill : resolvedStyles?.fill;
      if (fill && !["none", DEFAULT_FILL].includes(fill)) {
        const currentGlobalAlpha = ctx.globalAlpha;
        const fillOpacity = Number(resolvedStyles?.fillOpacity);
        const opacity = Number(resolvedStyles?.opacity);
        ctx.globalAlpha = fillOpacity * opacity;
        ctx.fillStyle = fill;
        render2.fill(ctx);
        ctx.globalAlpha = currentGlobalAlpha;
      }
    } else if (attr === "stroke") {
      const stroke = styleOptions.styles?.stroke && (styleOptions.styles?.stroke instanceof CanvasGradient || !styleOptions.styles?.stroke?.includes("var")) ? styleOptions.styles?.stroke : resolvedStyles?.stroke;
      if (stroke && !["none"].includes(stroke)) {
        ctx.lineWidth = typeof resolvedStyles?.strokeWidth === "string" ? Number(resolvedStyles?.strokeWidth?.replace("px", "")) : resolvedStyles?.strokeWidth ?? 1;
        ctx.strokeStyle = stroke;
        render2.stroke(ctx);
      }
    }
  }
}
function renderPathData(ctx, pathData, styleOptions = {}) {
  const path = new Path2D(pathData ?? "");
  render(ctx, {
    fill: (ctx2) => ctx2.fill(path),
    stroke: (ctx2) => ctx2.stroke(path)
  }, styleOptions);
}
function renderCircle(ctx, coords, styleOptions = {}) {
  ctx.beginPath();
  ctx.arc(coords.cx, coords.cy, coords.r, 0, 2 * Math.PI);
  render(ctx, {
    fill: (ctx2) => {
      ctx2.fill();
    },
    stroke: (ctx2) => {
      ctx2.stroke();
    }
  }, styleOptions);
  ctx.closePath();
}
function _createLinearGradient(ctx, x0, y0, x1, y1, stops) {
  const gradient = ctx.createLinearGradient(x0, y0, x1, y1);
  for (const { offset, color } of stops) {
    gradient.addColorStop(offset, color);
  }
  return gradient;
}
memoize(_createLinearGradient, {
  cacheKey: (args) => JSON.stringify(args.slice(1))
  // Ignore `ctx` argument
});
function _createPattern(ctx, width2, height, shapes, background) {
  const patternCanvas = document.createElement("canvas");
  const patternCtx = patternCanvas.getContext("2d");
  ctx.canvas.after(patternCanvas);
  patternCanvas.width = width2;
  patternCanvas.height = height;
  if (background) {
    patternCtx.fillStyle = background;
    patternCtx.fillRect(0, 0, width2, height);
  }
  for (const shape of shapes) {
    patternCtx.save();
    if (shape.type === "circle") {
      renderCircle(patternCtx, { cx: shape.cx, cy: shape.cy, r: shape.r }, { styles: { fill: shape.fill, opacity: shape.opacity } });
    } else if (shape.type === "line") {
      renderPathData(patternCtx, shape.path, {
        styles: { stroke: shape.stroke, strokeWidth: shape.strokeWidth, opacity: shape.opacity }
      });
    }
    patternCtx.restore();
  }
  const pattern = ctx.createPattern(patternCanvas, "repeat");
  ctx.canvas.parentElement?.removeChild(patternCanvas);
  return pattern;
}
memoize(_createPattern, {
  cacheKey: (args) => JSON.stringify(args.slice(1))
  // Ignore `ctx` argument
});
var d3InterpolatePath = { exports: {} };
(function(module2, exports$1) {
  (function(global2, factory) {
    factory(exports$1);
  })(commonjsGlobal, function(exports$12) {
    function ownKeys(object, enumerableOnly) {
      var keys2 = Object.keys(object);
      if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) {
          symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
          });
        }
        keys2.push.apply(keys2, symbols);
      }
      return keys2;
    }
    function _objectSpread2(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i] != null ? arguments[i] : {};
        if (i % 2) {
          ownKeys(Object(source), true).forEach(function(key) {
            _defineProperty(target, key, source[key]);
          });
        } else if (Object.getOwnPropertyDescriptors) {
          Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
        } else {
          ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
          });
        }
      }
      return target;
    }
    function _typeof(obj) {
      "@babel/helpers - typeof";
      if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
        _typeof = function(obj2) {
          return typeof obj2;
        };
      } else {
        _typeof = function(obj2) {
          return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
        };
      }
      return _typeof(obj);
    }
    function _defineProperty(obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, {
          value,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        obj[key] = value;
      }
      return obj;
    }
    function _extends() {
      _extends = Object.assign || function(target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i];
          for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key];
            }
          }
        }
        return target;
      };
      return _extends.apply(this, arguments);
    }
    function _unsupportedIterableToArray(o, minLen) {
      if (!o) return;
      if (typeof o === "string") return _arrayLikeToArray(o, minLen);
      var n = Object.prototype.toString.call(o).slice(8, -1);
      if (n === "Object" && o.constructor) n = o.constructor.name;
      if (n === "Map" || n === "Set") return Array.from(o);
      if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
    }
    function _arrayLikeToArray(arr, len) {
      if (len == null || len > arr.length) len = arr.length;
      for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
      return arr2;
    }
    function _createForOfIteratorHelper(o, allowArrayLike) {
      var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
      if (!it) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike) {
          if (it) o = it;
          var i = 0;
          var F = function() {
          };
          return {
            s: F,
            n: function() {
              if (i >= o.length) return {
                done: true
              };
              return {
                done: false,
                value: o[i++]
              };
            },
            e: function(e) {
              throw e;
            },
            f: F
          };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }
      var normalCompletion = true, didErr = false, err;
      return {
        s: function() {
          it = it.call(o);
        },
        n: function() {
          var step = it.next();
          normalCompletion = step.done;
          return step;
        },
        e: function(e) {
          didErr = true;
          err = e;
        },
        f: function() {
          try {
            if (!normalCompletion && it.return != null) it.return();
          } finally {
            if (didErr) throw err;
          }
        }
      };
    }
    function decasteljau(points, t) {
      var left = [];
      var right = [];
      function decasteljauRecurse(points2, t2) {
        if (points2.length === 1) {
          left.push(points2[0]);
          right.push(points2[0]);
        } else {
          var newPoints = Array(points2.length - 1);
          for (var i = 0; i < newPoints.length; i++) {
            if (i === 0) {
              left.push(points2[0]);
            }
            if (i === newPoints.length - 1) {
              right.push(points2[i + 1]);
            }
            newPoints[i] = [(1 - t2) * points2[i][0] + t2 * points2[i + 1][0], (1 - t2) * points2[i][1] + t2 * points2[i + 1][1]];
          }
          decasteljauRecurse(newPoints, t2);
        }
      }
      if (points.length) {
        decasteljauRecurse(points, t);
      }
      return {
        left,
        right: right.reverse()
      };
    }
    function pointsToCommand(points) {
      var command = {};
      if (points.length === 4) {
        command.x2 = points[2][0];
        command.y2 = points[2][1];
      }
      if (points.length >= 3) {
        command.x1 = points[1][0];
        command.y1 = points[1][1];
      }
      command.x = points[points.length - 1][0];
      command.y = points[points.length - 1][1];
      if (points.length === 4) {
        command.type = "C";
      } else if (points.length === 3) {
        command.type = "Q";
      } else {
        command.type = "L";
      }
      return command;
    }
    function splitCurveAsPoints(points, segmentCount) {
      segmentCount = segmentCount || 2;
      var segments = [];
      var remainingCurve = points;
      var tIncrement = 1 / segmentCount;
      for (var i = 0; i < segmentCount - 1; i++) {
        var tRelative = tIncrement / (1 - tIncrement * i);
        var split = decasteljau(remainingCurve, tRelative);
        segments.push(split.left);
        remainingCurve = split.right;
      }
      segments.push(remainingCurve);
      return segments;
    }
    function splitCurve(commandStart, commandEnd, segmentCount) {
      var points = [[commandStart.x, commandStart.y]];
      if (commandEnd.x1 != null) {
        points.push([commandEnd.x1, commandEnd.y1]);
      }
      if (commandEnd.x2 != null) {
        points.push([commandEnd.x2, commandEnd.y2]);
      }
      points.push([commandEnd.x, commandEnd.y]);
      return splitCurveAsPoints(points, segmentCount).map(pointsToCommand);
    }
    var commandTokenRegex = /[MLCSTQAHVZmlcstqahv]|-?[\d.e+-]+/g;
    var typeMap = {
      M: ["x", "y"],
      L: ["x", "y"],
      H: ["x"],
      V: ["y"],
      C: ["x1", "y1", "x2", "y2", "x", "y"],
      S: ["x2", "y2", "x", "y"],
      Q: ["x1", "y1", "x", "y"],
      T: ["x", "y"],
      A: ["rx", "ry", "xAxisRotation", "largeArcFlag", "sweepFlag", "x", "y"],
      Z: []
    };
    Object.keys(typeMap).forEach(function(key) {
      typeMap[key.toLowerCase()] = typeMap[key];
    });
    function arrayOfLength(length, value) {
      var array = Array(length);
      for (var i = 0; i < length; i++) {
        array[i] = value;
      }
      return array;
    }
    function commandToString(command) {
      return "".concat(command.type).concat(typeMap[command.type].map(function(p) {
        return command[p];
      }).join(","));
    }
    function convertToSameType(aCommand, bCommand) {
      var conversionMap = {
        x1: "x",
        y1: "y",
        x2: "x",
        y2: "y"
      };
      var readFromBKeys = ["xAxisRotation", "largeArcFlag", "sweepFlag"];
      if (aCommand.type !== bCommand.type && bCommand.type.toUpperCase() !== "M") {
        var aConverted = {};
        Object.keys(bCommand).forEach(function(bKey) {
          var bValue = bCommand[bKey];
          var aValue = aCommand[bKey];
          if (aValue === void 0) {
            if (readFromBKeys.includes(bKey)) {
              aValue = bValue;
            } else {
              if (aValue === void 0 && conversionMap[bKey]) {
                aValue = aCommand[conversionMap[bKey]];
              }
              if (aValue === void 0) {
                aValue = 0;
              }
            }
          }
          aConverted[bKey] = aValue;
        });
        aConverted.type = bCommand.type;
        aCommand = aConverted;
      }
      return aCommand;
    }
    function splitSegment(commandStart, commandEnd, segmentCount) {
      var segments = [];
      if (commandEnd.type === "L" || commandEnd.type === "Q" || commandEnd.type === "C") {
        segments = segments.concat(splitCurve(commandStart, commandEnd, segmentCount));
      } else {
        var copyCommand = _extends({}, commandStart);
        if (copyCommand.type === "M") {
          copyCommand.type = "L";
        }
        segments = segments.concat(arrayOfLength(segmentCount - 1).map(function() {
          return copyCommand;
        }));
        segments.push(commandEnd);
      }
      return segments;
    }
    function extend(commandsToExtend, referenceCommands, excludeSegment) {
      var numSegmentsToExtend = commandsToExtend.length - 1;
      var numReferenceSegments = referenceCommands.length - 1;
      var segmentRatio = numSegmentsToExtend / numReferenceSegments;
      var countPointsPerSegment = arrayOfLength(numReferenceSegments).reduce(function(accum, d, i) {
        var insertIndex = Math.floor(segmentRatio * i);
        if (excludeSegment && insertIndex < commandsToExtend.length - 1 && excludeSegment(commandsToExtend[insertIndex], commandsToExtend[insertIndex + 1])) {
          var addToPriorSegment = segmentRatio * i % 1 < 0.5;
          if (accum[insertIndex]) {
            if (addToPriorSegment) {
              if (insertIndex > 0) {
                insertIndex -= 1;
              } else if (insertIndex < commandsToExtend.length - 1) {
                insertIndex += 1;
              }
            } else if (insertIndex < commandsToExtend.length - 1) {
              insertIndex += 1;
            } else if (insertIndex > 0) {
              insertIndex -= 1;
            }
          }
        }
        accum[insertIndex] = (accum[insertIndex] || 0) + 1;
        return accum;
      }, []);
      var extended = countPointsPerSegment.reduce(function(extended2, segmentCount, i) {
        if (i === commandsToExtend.length - 1) {
          var lastCommandCopies = arrayOfLength(segmentCount, _extends({}, commandsToExtend[commandsToExtend.length - 1]));
          if (lastCommandCopies[0].type === "M") {
            lastCommandCopies.forEach(function(d) {
              d.type = "L";
            });
          }
          return extended2.concat(lastCommandCopies);
        }
        return extended2.concat(splitSegment(commandsToExtend[i], commandsToExtend[i + 1], segmentCount));
      }, []);
      extended.unshift(commandsToExtend[0]);
      return extended;
    }
    function pathCommandsFromString(d) {
      var tokens = (d || "").match(commandTokenRegex) || [];
      var commands = [];
      var commandArgs;
      var command;
      for (var i = 0; i < tokens.length; ++i) {
        commandArgs = typeMap[tokens[i]];
        if (commandArgs) {
          command = {
            type: tokens[i]
          };
          for (var a = 0; a < commandArgs.length; ++a) {
            command[commandArgs[a]] = +tokens[i + a + 1];
          }
          i += commandArgs.length;
          commands.push(command);
        }
      }
      return commands;
    }
    function interpolatePathCommands(aCommandsInput, bCommandsInput, interpolateOptions) {
      var aCommands = aCommandsInput == null ? [] : aCommandsInput.slice();
      var bCommands = bCommandsInput == null ? [] : bCommandsInput.slice();
      var _ref = _typeof(interpolateOptions) === "object" ? interpolateOptions : {
        excludeSegment: interpolateOptions,
        snapEndsToInput: true
      }, excludeSegment = _ref.excludeSegment, snapEndsToInput = _ref.snapEndsToInput;
      if (!aCommands.length && !bCommands.length) {
        return function nullInterpolator() {
          return [];
        };
      }
      var addZ = (aCommands.length === 0 || aCommands[aCommands.length - 1].type === "Z") && (bCommands.length === 0 || bCommands[bCommands.length - 1].type === "Z");
      if (aCommands.length > 0 && aCommands[aCommands.length - 1].type === "Z") {
        aCommands.pop();
      }
      if (bCommands.length > 0 && bCommands[bCommands.length - 1].type === "Z") {
        bCommands.pop();
      }
      if (!aCommands.length) {
        aCommands.push(bCommands[0]);
      } else if (!bCommands.length) {
        bCommands.push(aCommands[0]);
      }
      var numPointsToExtend = Math.abs(bCommands.length - aCommands.length);
      if (numPointsToExtend !== 0) {
        if (bCommands.length > aCommands.length) {
          aCommands = extend(aCommands, bCommands, excludeSegment);
        } else if (bCommands.length < aCommands.length) {
          bCommands = extend(bCommands, aCommands, excludeSegment);
        }
      }
      aCommands = aCommands.map(function(aCommand, i) {
        return convertToSameType(aCommand, bCommands[i]);
      });
      var interpolatedCommands = aCommands.map(function(aCommand) {
        return _objectSpread2({}, aCommand);
      });
      if (addZ) {
        interpolatedCommands.push({
          type: "Z"
        });
        aCommands.push({
          type: "Z"
        });
      }
      return function pathCommandInterpolator(t) {
        if (t === 1 && snapEndsToInput) {
          return bCommandsInput == null ? [] : bCommandsInput;
        }
        if (t === 0) {
          return aCommands;
        }
        for (var i = 0; i < interpolatedCommands.length; ++i) {
          var aCommand = aCommands[i];
          var bCommand = bCommands[i];
          var interpolatedCommand = interpolatedCommands[i];
          var _iterator = _createForOfIteratorHelper(typeMap[interpolatedCommand.type]), _step;
          try {
            for (_iterator.s(); !(_step = _iterator.n()).done; ) {
              var arg = _step.value;
              interpolatedCommand[arg] = (1 - t) * aCommand[arg] + t * bCommand[arg];
              if (arg === "largeArcFlag" || arg === "sweepFlag") {
                interpolatedCommand[arg] = Math.round(interpolatedCommand[arg]);
              }
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }
        }
        return interpolatedCommands;
      };
    }
    function interpolatePath(a, b, interpolateOptions) {
      var aCommands = pathCommandsFromString(a);
      var bCommands = pathCommandsFromString(b);
      var _ref2 = _typeof(interpolateOptions) === "object" ? interpolateOptions : {
        excludeSegment: interpolateOptions,
        snapEndsToInput: true
      }, excludeSegment = _ref2.excludeSegment, snapEndsToInput = _ref2.snapEndsToInput;
      if (!aCommands.length && !bCommands.length) {
        return function nullInterpolator() {
          return "";
        };
      }
      var commandInterpolator = interpolatePathCommands(aCommands, bCommands, {
        excludeSegment,
        snapEndsToInput
      });
      return function pathStringInterpolator(t) {
        if (t === 1 && snapEndsToInput) {
          return b == null ? "" : b;
        }
        var interpolatedCommands = commandInterpolator(t);
        var interpolatedString = "";
        var _iterator2 = _createForOfIteratorHelper(interpolatedCommands), _step2;
        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
            var interpolatedCommand = _step2.value;
            interpolatedString += commandToString(interpolatedCommand);
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
        return interpolatedString;
      };
    }
    exports$12.interpolatePath = interpolatePath;
    exports$12.interpolatePathCommands = interpolatePathCommands;
    exports$12.pathCommandsFromString = pathCommandsFromString;
    Object.defineProperty(exports$12, "__esModule", { value: true });
  });
})(d3InterpolatePath, d3InterpolatePath.exports);
var d3InterpolatePathExports = d3InterpolatePath.exports;
var d3Tile = { exports: {} };
(function(module2, exports$1) {
  (function(global2, factory) {
    factory(exports$1);
  })(commonjsGlobal, function(exports$12) {
    function defaultScale(t) {
      return t.k;
    }
    function defaultTranslate(t) {
      return [t.x, t.y];
    }
    function constant2(x) {
      return function() {
        return x;
      };
    }
    function tile() {
      let x0 = 0, y0 = 0, x1 = 960, y1 = 500;
      let clampX = true, clampY = true;
      let tileSize = 256;
      let scale = defaultScale;
      let translate = defaultTranslate;
      let zoomDelta = 0;
      function tile2() {
        const scale_ = +scale.apply(this, arguments);
        const translate_ = translate.apply(this, arguments);
        const z = Math.log2(scale_ / tileSize);
        const z0 = Math.round(Math.max(z + zoomDelta, 0));
        const k = Math.pow(2, z - z0) * tileSize;
        const x = +translate_[0] - scale_ / 2;
        const y = +translate_[1] - scale_ / 2;
        const xmin = Math.max(clampX ? 0 : -Infinity, Math.floor((x0 - x) / k));
        const xmax = Math.min(clampX ? 1 << z0 : Infinity, Math.ceil((x1 - x) / k));
        const ymin = Math.max(clampY ? 0 : -Infinity, Math.floor((y0 - y) / k));
        const ymax = Math.min(clampY ? 1 << z0 : Infinity, Math.ceil((y1 - y) / k));
        const tiles = [];
        for (let y2 = ymin; y2 < ymax; ++y2) {
          for (let x2 = xmin; x2 < xmax; ++x2) {
            tiles.push([x2, y2, z0]);
          }
        }
        tiles.translate = [x / k, y / k];
        tiles.scale = k;
        return tiles;
      }
      tile2.size = function(_) {
        return arguments.length ? (x0 = y0 = 0, x1 = +_[0], y1 = +_[1], tile2) : [x1 - x0, y1 - y0];
      };
      tile2.extent = function(_) {
        return arguments.length ? (x0 = +_[0][0], y0 = +_[0][1], x1 = +_[1][0], y1 = +_[1][1], tile2) : [[x0, y0], [x1, y1]];
      };
      tile2.scale = function(_) {
        return arguments.length ? (scale = typeof _ === "function" ? _ : constant2(+_), tile2) : scale;
      };
      tile2.translate = function(_) {
        return arguments.length ? (translate = typeof _ === "function" ? _ : constant2([+_[0], +_[1]]), tile2) : translate;
      };
      tile2.zoomDelta = function(_) {
        return arguments.length ? (zoomDelta = +_, tile2) : zoomDelta;
      };
      tile2.tileSize = function(_) {
        return arguments.length ? (tileSize = +_, tile2) : tileSize;
      };
      tile2.clamp = function(_) {
        return arguments.length ? (clampX = clampY = !!_, tile2) : clampX && clampY;
      };
      tile2.clampX = function(_) {
        return arguments.length ? (clampX = !!_, tile2) : clampX;
      };
      tile2.clampY = function(_) {
        return arguments.length ? (clampY = !!_, tile2) : clampY;
      };
      return tile2;
    }
    function tileWrap([x, y, z]) {
      const j = 1 << z;
      return [x - Math.floor(x / j) * j, y - Math.floor(y / j) * j, z];
    }
    exports$12.tile = tile;
    exports$12.tileWrap = tileWrap;
    Object.defineProperty(exports$12, "__esModule", { value: true });
  });
})(d3Tile, d3Tile.exports);

export { getStringWidth as A, DateToken as B, second as C, Duration as D, durationSecond as E, durationMinute as F, durationHour as G, durationDay as H, durationWeek as I, durationMonth as J, durationYear as K, millisecond as L, MapCache as M, timeMinute as N, timeHour as O, PeriodType as P, timeMonth as Q, utcYear as R, Symbol$1 as S, utcSunday as T, utcThursday as U, utcDay as a, timeDay as b, commonjsGlobal as c, timeYear as d, timeThursday as e, timeSunday as f, getDefaultExportFromCjs as g, cls as h, isArray as i, defaultLocale as j, isObjectLike as k, baseGetTag as l, defaultWindow as m, d3InterpolatePathExports as n, isStringDate as o, periodTypeMappings as p, formatDateWithLocale as q, range$2 as r, toTitleCase as s, timeMonday as t, utcMonday as u, keys as v, watch as w, fromEntries as x, entries as y, truncateText as z };
//# sourceMappingURL=d3-tile-DavCumcS.js.map
