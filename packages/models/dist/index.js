(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("@art-forms/observable"));
	else if(typeof define === 'function' && define.amd)
		define(["@art-forms/observable"], factory);
	else if(typeof exports === 'object')
		exports["Models"] = factory(require("@art-forms/observable"));
	else
		root["Models"] = factory(root["@art-forms/observable"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE__art_forms_observable__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../node_modules/json-logic-js/logic.js":
/*!**************************************************************!*\
  !*** D:/Works/art-forms/node_modules/json-logic-js/logic.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/* globals define,module */\n/*\nUsing a Universal Module Loader that should be browser, require, and AMD friendly\nhttp://ricostacruz.com/cheatsheets/umdjs.html\n*/\n;(function(root, factory) {\n  if (true) {\n    !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?\n\t\t\t\t(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :\n\t\t\t\t__WEBPACK_AMD_DEFINE_FACTORY__),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\n  } else {}\n}(this, function() {\n  \"use strict\";\n  /* globals console:false */\n\n  if ( ! Array.isArray) {\n    Array.isArray = function(arg) {\n      return Object.prototype.toString.call(arg) === \"[object Array]\";\n    };\n  }\n\n  /**\n   * Return an array that contains no duplicates (original not modified)\n   * @param  {array} array   Original reference array\n   * @return {array}         New array with no duplicates\n   */\n  function arrayUnique(array) {\n    var a = [];\n    for (var i=0, l=array.length; i<l; i++) {\n      if (a.indexOf(array[i]) === -1) {\n        a.push(array[i]);\n      }\n    }\n    return a;\n  }\n\n  var jsonLogic = {};\n  var operations = {\n    \"==\": function(a, b) {\n      return a == b;\n    },\n    \"===\": function(a, b) {\n      return a === b;\n    },\n    \"!=\": function(a, b) {\n      return a != b;\n    },\n    \"!==\": function(a, b) {\n      return a !== b;\n    },\n    \">\": function(a, b) {\n      return a > b;\n    },\n    \">=\": function(a, b) {\n      return a >= b;\n    },\n    \"<\": function(a, b, c) {\n      return (c === undefined) ? a < b : (a < b) && (b < c);\n    },\n    \"<=\": function(a, b, c) {\n      return (c === undefined) ? a <= b : (a <= b) && (b <= c);\n    },\n    \"!!\": function(a) {\n      return jsonLogic.truthy(a);\n    },\n    \"!\": function(a) {\n      return !jsonLogic.truthy(a);\n    },\n    \"%\": function(a, b) {\n      return a % b;\n    },\n    \"log\": function(a) {\n      console.log(a); return a;\n    },\n    \"in\": function(a, b) {\n      if(!b || typeof b.indexOf === \"undefined\") return false;\n      return (b.indexOf(a) !== -1);\n    },\n    \"cat\": function() {\n      return Array.prototype.join.call(arguments, \"\");\n    },\n    \"substr\":function(source, start, end) {\n      if(end < 0){\n        // JavaScript doesn't support negative end, this emulates PHP behavior\n        var temp = String(source).substr(start);\n        return temp.substr(0, temp.length + end);\n      }\n      return String(source).substr(start, end);\n    },\n    \"+\": function() {\n      return Array.prototype.reduce.call(arguments, function(a, b) {\n        return parseFloat(a, 10) + parseFloat(b, 10);\n      }, 0);\n    },\n    \"*\": function() {\n      return Array.prototype.reduce.call(arguments, function(a, b) {\n        return parseFloat(a, 10) * parseFloat(b, 10);\n      });\n    },\n    \"-\": function(a, b) {\n      if(b === undefined) {\n        return -a;\n      }else{\n        return a - b;\n      }\n    },\n    \"/\": function(a, b) {\n      return a / b;\n    },\n    \"min\": function() {\n      return Math.min.apply(this, arguments);\n    },\n    \"max\": function() {\n      return Math.max.apply(this, arguments);\n    },\n    \"merge\": function() {\n      return Array.prototype.reduce.call(arguments, function(a, b) {\n        return a.concat(b);\n      }, []);\n    },\n    \"var\": function(a, b) {\n      var not_found = (b === undefined) ? null : b;\n      var data = this;\n      if(typeof a === \"undefined\" || a===\"\" || a===null) {\n        return data;\n      }\n      var sub_props = String(a).split(\".\");\n      for(var i = 0; i < sub_props.length; i++) {\n        if(data === null) {\n          return not_found;\n        }\n        // Descending into data\n        data = data[sub_props[i]];\n        if(data === undefined) {\n          return not_found;\n        }\n      }\n      return data;\n    },\n    \"missing\": function() {\n      /*\n      Missing can receive many keys as many arguments, like {\"missing:[1,2]}\n      Missing can also receive *one* argument that is an array of keys,\n      which typically happens if it's actually acting on the output of another command\n      (like 'if' or 'merge')\n      */\n\n      var missing = [];\n      var keys = Array.isArray(arguments[0]) ? arguments[0] : arguments;\n\n      for(var i = 0; i < keys.length; i++) {\n        var key = keys[i];\n        var value = jsonLogic.apply({\"var\": key}, this);\n        if(value === null || value === \"\") {\n          missing.push(key);\n        }\n      }\n\n      return missing;\n    },\n    \"missing_some\": function(need_count, options) {\n      // missing_some takes two arguments, how many (minimum) items must be present, and an array of keys (just like 'missing') to check for presence.\n      var are_missing = jsonLogic.apply({\"missing\": options}, this);\n\n      if(options.length - are_missing.length >= need_count) {\n        return [];\n      }else{\n        return are_missing;\n      }\n    },\n    \"method\": function(obj, method, args) {\n      return obj[method].apply(obj, args);\n    },\n\n  };\n\n  jsonLogic.is_logic = function(logic) {\n    return (\n      typeof logic === \"object\" && // An object\n      logic !== null && // but not null\n      ! Array.isArray(logic) && // and not an array\n      Object.keys(logic).length === 1 // with exactly one key\n    );\n  };\n\n  /*\n  This helper will defer to the JsonLogic spec as a tie-breaker when different language interpreters define different behavior for the truthiness of primitives.  E.g., PHP considers empty arrays to be falsy, but Javascript considers them to be truthy. JsonLogic, as an ecosystem, needs one consistent answer.\n\n  Spec and rationale here: http://jsonlogic.com/truthy\n  */\n  jsonLogic.truthy = function(value) {\n    if(Array.isArray(value) && value.length === 0) {\n      return false;\n    }\n    return !! value;\n  };\n\n\n  jsonLogic.get_operator = function(logic) {\n    return Object.keys(logic)[0];\n  };\n\n  jsonLogic.get_values = function(logic) {\n    return logic[jsonLogic.get_operator(logic)];\n  };\n\n  jsonLogic.apply = function(logic, data) {\n    // Does this array contain logic? Only one way to find out.\n    if(Array.isArray(logic)) {\n      return logic.map(function(l) {\n        return jsonLogic.apply(l, data);\n      });\n    }\n    // You've recursed to a primitive, stop!\n    if( ! jsonLogic.is_logic(logic) ) {\n      return logic;\n    }\n\n    data = data || {};\n\n    var op = jsonLogic.get_operator(logic);\n    var values = logic[op];\n    var i;\n    var current;\n    var scopedLogic, scopedData, filtered, initial;\n\n    // easy syntax for unary operators, like {\"var\" : \"x\"} instead of strict {\"var\" : [\"x\"]}\n    if( ! Array.isArray(values)) {\n      values = [values];\n    }\n\n    // 'if', 'and', and 'or' violate the normal rule of depth-first calculating consequents, let each manage recursion as needed.\n    if(op === \"if\" || op == \"?:\") {\n      /* 'if' should be called with a odd number of parameters, 3 or greater\n      This works on the pattern:\n      if( 0 ){ 1 }else{ 2 };\n      if( 0 ){ 1 }else if( 2 ){ 3 }else{ 4 };\n      if( 0 ){ 1 }else if( 2 ){ 3 }else if( 4 ){ 5 }else{ 6 };\n\n      The implementation is:\n      For pairs of values (0,1 then 2,3 then 4,5 etc)\n      If the first evaluates truthy, evaluate and return the second\n      If the first evaluates falsy, jump to the next pair (e.g, 0,1 to 2,3)\n      given one parameter, evaluate and return it. (it's an Else and all the If/ElseIf were false)\n      given 0 parameters, return NULL (not great practice, but there was no Else)\n      */\n      for(i = 0; i < values.length - 1; i += 2) {\n        if( jsonLogic.truthy( jsonLogic.apply(values[i], data) ) ) {\n          return jsonLogic.apply(values[i+1], data);\n        }\n      }\n      if(values.length === i+1) return jsonLogic.apply(values[i], data);\n      return null;\n    }else if(op === \"and\") { // Return first falsy, or last\n      for(i=0; i < values.length; i+=1) {\n        current = jsonLogic.apply(values[i], data);\n        if( ! jsonLogic.truthy(current)) {\n          return current;\n        }\n      }\n      return current; // Last\n    }else if(op === \"or\") {// Return first truthy, or last\n      for(i=0; i < values.length; i+=1) {\n        current = jsonLogic.apply(values[i], data);\n        if( jsonLogic.truthy(current) ) {\n          return current;\n        }\n      }\n      return current; // Last\n\n\n\n\n    }else if(op === 'filter'){\n      scopedData = jsonLogic.apply(values[0], data);\n      scopedLogic = values[1];\n\n      if ( ! Array.isArray(scopedData)) {\n          return [];\n      }\n      // Return only the elements from the array in the first argument,\n      // that return truthy when passed to the logic in the second argument.\n      // For parity with JavaScript, reindex the returned array\n      return scopedData.filter(function(datum){\n          return jsonLogic.truthy( jsonLogic.apply(scopedLogic, datum));\n      });\n  }else if(op === 'map'){\n      scopedData = jsonLogic.apply(values[0], data);\n      scopedLogic = values[1];\n\n      if ( ! Array.isArray(scopedData)) {\n          return [];\n      }\n\n      return scopedData.map(function(datum){\n          return jsonLogic.apply(scopedLogic, datum);\n      });\n\n  }else if(op === 'reduce'){\n      scopedData = jsonLogic.apply(values[0], data);\n      scopedLogic = values[1];\n      initial = typeof values[2] !== 'undefined' ? values[2] : null;\n\n      if ( ! Array.isArray(scopedData)) {\n          return initial;\n      }\n\n      return scopedData.reduce(\n          function(accumulator, current){\n              return jsonLogic.apply(\n                  scopedLogic,\n                  {'current':current, 'accumulator':accumulator}\n              );\n          },\n          initial\n      );\n\n    }else if(op === \"all\") {\n      scopedData = jsonLogic.apply(values[0], data);\n      scopedLogic = values[1];\n      // All of an empty set is false. Note, some and none have correct fallback after the for loop\n      if( ! scopedData.length) {\n        return false;\n      }\n      for(i=0; i < scopedData.length; i+=1) {\n        if( ! jsonLogic.truthy( jsonLogic.apply(scopedLogic, scopedData[i]) )) {\n          return false; // First falsy, short circuit\n        }\n      }\n      return true; // All were truthy\n    }else if(op === \"none\") {\n      filtered = jsonLogic.apply({'filter' : values}, data);\n      return filtered.length === 0;\n\n    }else if(op === \"some\") {\n      filtered = jsonLogic.apply({'filter' : values}, data);\n      return filtered.length > 0;\n    }\n\n    // Everyone else gets immediate depth-first recursion\n    values = values.map(function(val) {\n      return jsonLogic.apply(val, data);\n    });\n\n\n    // The operation is called with \"data\" bound to its \"this\" and \"values\" passed as arguments.\n    // Structured commands like % or > can name formal arguments while flexible commands (like missing or merge) can operate on the pseudo-array arguments\n    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments\n    if(typeof operations[op] === \"function\") {\n      return operations[op].apply(data, values);\n    }else if(op.indexOf(\".\") > 0) { // Contains a dot, and not in the 0th position\n      var sub_ops = String(op).split(\".\");\n      var operation = operations;\n      for(i = 0; i < sub_ops.length; i++) {\n        // Descending into operations\n        operation = operation[sub_ops[i]];\n        if(operation === undefined) {\n          throw new Error(\"Unrecognized operation \" + op +\n          \" (failed at \" + sub_ops.slice(0, i+1).join(\".\") + \")\");\n        }\n      }\n\n      return operation.apply(data, values);\n    }\n\n    throw new Error(\"Unrecognized operation \" + op );\n  };\n\n  jsonLogic.uses_data = function(logic) {\n    var collection = [];\n\n    if( jsonLogic.is_logic(logic) ) {\n      var op = jsonLogic.get_operator(logic);\n      var values = logic[op];\n\n      if( ! Array.isArray(values)) {\n        values = [values];\n      }\n\n      if(op === \"var\") {\n        // This doesn't cover the case where the arg to var is itself a rule.\n        collection.push(values[0]);\n      }else{\n        // Recursion!\n        values.map(function(val) {\n          collection.push.apply(collection, jsonLogic.uses_data(val) );\n        });\n      }\n    }\n\n    return arrayUnique(collection);\n  };\n\n  jsonLogic.add_operation = function(name, code) {\n    operations[name] = code;\n  };\n\n  jsonLogic.rm_operation = function(name) {\n    delete operations[name];\n  };\n\n  jsonLogic.rule_like = function(rule, pattern) {\n    // console.log(\"Is \". JSON.stringify(rule) . \" like \" . JSON.stringify(pattern) . \"?\");\n    if(pattern === rule) {\n      return true;\n    } // TODO : Deep object equivalency?\n    if(pattern === \"@\") {\n      return true;\n    } // Wildcard!\n    if(pattern === \"number\") {\n      return (typeof rule === \"number\");\n    }\n    if(pattern === \"string\") {\n      return (typeof rule === \"string\");\n    }\n    if(pattern === \"array\") {\n      // !logic test might be superfluous in JavaScript\n      return Array.isArray(rule) && ! jsonLogic.is_logic(rule);\n    }\n\n    if(jsonLogic.is_logic(pattern)) {\n      if(jsonLogic.is_logic(rule)) {\n        var pattern_op = jsonLogic.get_operator(pattern);\n        var rule_op = jsonLogic.get_operator(rule);\n\n        if(pattern_op === \"@\" || pattern_op === rule_op) {\n        // echo \"\\nOperators match, go deeper\\n\";\n          return jsonLogic.rule_like(\n            jsonLogic.get_values(rule, false),\n            jsonLogic.get_values(pattern, false)\n          );\n        }\n      }\n      return false; // pattern is logic, rule isn't, can't be eq\n    }\n\n    if(Array.isArray(pattern)) {\n      if(Array.isArray(rule)) {\n        if(pattern.length !== rule.length) {\n          return false;\n        }\n        /*\n          Note, array order MATTERS, because we're using this array test logic to consider arguments, where order can matter. (e.g., + is commutative, but '-' or 'if' or 'var' are NOT)\n        */\n        for(var i = 0; i < pattern.length; i += 1) {\n          // If any fail, we fail\n          if( ! jsonLogic.rule_like(rule[i], pattern[i])) {\n            return false;\n          }\n        }\n        return true; // If they *all* passed, we pass\n      }else{\n        return false; // Pattern is array, rule isn't\n      }\n    }\n\n    // Not logic, not array, not a === match for rule.\n    return false;\n  };\n\n  return jsonLogic;\n}));\n\n\n//# sourceURL=webpack://Models/D:/Works/art-forms/node_modules/json-logic-js/logic.js?");

/***/ }),

/***/ "../../node_modules/uuid/lib/bytesToUuid.js":
/*!***************************************************************!*\
  !*** D:/Works/art-forms/node_modules/uuid/lib/bytesToUuid.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * Convert array of 16 byte values to UUID string format of the form:\n * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX\n */\nvar byteToHex = [];\nfor (var i = 0; i < 256; ++i) {\n  byteToHex[i] = (i + 0x100).toString(16).substr(1);\n}\n\nfunction bytesToUuid(buf, offset) {\n  var i = offset || 0;\n  var bth = byteToHex;\n  // join used to fix memory issue caused by concatenation: https://bugs.chromium.org/p/v8/issues/detail?id=3175#c4\n  return ([bth[buf[i++]], bth[buf[i++]], \n\tbth[buf[i++]], bth[buf[i++]], '-',\n\tbth[buf[i++]], bth[buf[i++]], '-',\n\tbth[buf[i++]], bth[buf[i++]], '-',\n\tbth[buf[i++]], bth[buf[i++]], '-',\n\tbth[buf[i++]], bth[buf[i++]],\n\tbth[buf[i++]], bth[buf[i++]],\n\tbth[buf[i++]], bth[buf[i++]]]).join('');\n}\n\nmodule.exports = bytesToUuid;\n\n\n//# sourceURL=webpack://Models/D:/Works/art-forms/node_modules/uuid/lib/bytesToUuid.js?");

/***/ }),

/***/ "../../node_modules/uuid/lib/rng-browser.js":
/*!***************************************************************!*\
  !*** D:/Works/art-forms/node_modules/uuid/lib/rng-browser.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Unique ID creation requires a high quality random # generator.  In the\n// browser this is a little complicated due to unknown quality of Math.random()\n// and inconsistent support for the `crypto` API.  We do the best we can via\n// feature-detection\n\n// getRandomValues needs to be invoked in a context where \"this\" is a Crypto\n// implementation. Also, find the complete implementation of crypto on IE11.\nvar getRandomValues = (typeof(crypto) != 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto)) ||\n                      (typeof(msCrypto) != 'undefined' && typeof window.msCrypto.getRandomValues == 'function' && msCrypto.getRandomValues.bind(msCrypto));\n\nif (getRandomValues) {\n  // WHATWG crypto RNG - http://wiki.whatwg.org/wiki/Crypto\n  var rnds8 = new Uint8Array(16); // eslint-disable-line no-undef\n\n  module.exports = function whatwgRNG() {\n    getRandomValues(rnds8);\n    return rnds8;\n  };\n} else {\n  // Math.random()-based (RNG)\n  //\n  // If all else fails, use Math.random().  It's fast, but is of unspecified\n  // quality.\n  var rnds = new Array(16);\n\n  module.exports = function mathRNG() {\n    for (var i = 0, r; i < 16; i++) {\n      if ((i & 0x03) === 0) r = Math.random() * 0x100000000;\n      rnds[i] = r >>> ((i & 0x03) << 3) & 0xff;\n    }\n\n    return rnds;\n  };\n}\n\n\n//# sourceURL=webpack://Models/D:/Works/art-forms/node_modules/uuid/lib/rng-browser.js?");

/***/ }),

/***/ "../../node_modules/uuid/v1.js":
/*!**************************************************!*\
  !*** D:/Works/art-forms/node_modules/uuid/v1.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var rng = __webpack_require__(/*! ./lib/rng */ \"../../node_modules/uuid/lib/rng-browser.js\");\nvar bytesToUuid = __webpack_require__(/*! ./lib/bytesToUuid */ \"../../node_modules/uuid/lib/bytesToUuid.js\");\n\n// **`v1()` - Generate time-based UUID**\n//\n// Inspired by https://github.com/LiosK/UUID.js\n// and http://docs.python.org/library/uuid.html\n\nvar _nodeId;\nvar _clockseq;\n\n// Previous uuid creation time\nvar _lastMSecs = 0;\nvar _lastNSecs = 0;\n\n// See https://github.com/broofa/node-uuid for API details\nfunction v1(options, buf, offset) {\n  var i = buf && offset || 0;\n  var b = buf || [];\n\n  options = options || {};\n  var node = options.node || _nodeId;\n  var clockseq = options.clockseq !== undefined ? options.clockseq : _clockseq;\n\n  // node and clockseq need to be initialized to random values if they're not\n  // specified.  We do this lazily to minimize issues related to insufficient\n  // system entropy.  See #189\n  if (node == null || clockseq == null) {\n    var seedBytes = rng();\n    if (node == null) {\n      // Per 4.5, create and 48-bit node id, (47 random bits + multicast bit = 1)\n      node = _nodeId = [\n        seedBytes[0] | 0x01,\n        seedBytes[1], seedBytes[2], seedBytes[3], seedBytes[4], seedBytes[5]\n      ];\n    }\n    if (clockseq == null) {\n      // Per 4.2.2, randomize (14 bit) clockseq\n      clockseq = _clockseq = (seedBytes[6] << 8 | seedBytes[7]) & 0x3fff;\n    }\n  }\n\n  // UUID timestamps are 100 nano-second units since the Gregorian epoch,\n  // (1582-10-15 00:00).  JSNumbers aren't precise enough for this, so\n  // time is handled internally as 'msecs' (integer milliseconds) and 'nsecs'\n  // (100-nanoseconds offset from msecs) since unix epoch, 1970-01-01 00:00.\n  var msecs = options.msecs !== undefined ? options.msecs : new Date().getTime();\n\n  // Per 4.2.1.2, use count of uuid's generated during the current clock\n  // cycle to simulate higher resolution clock\n  var nsecs = options.nsecs !== undefined ? options.nsecs : _lastNSecs + 1;\n\n  // Time since last uuid creation (in msecs)\n  var dt = (msecs - _lastMSecs) + (nsecs - _lastNSecs)/10000;\n\n  // Per 4.2.1.2, Bump clockseq on clock regression\n  if (dt < 0 && options.clockseq === undefined) {\n    clockseq = clockseq + 1 & 0x3fff;\n  }\n\n  // Reset nsecs if clock regresses (new clockseq) or we've moved onto a new\n  // time interval\n  if ((dt < 0 || msecs > _lastMSecs) && options.nsecs === undefined) {\n    nsecs = 0;\n  }\n\n  // Per 4.2.1.2 Throw error if too many uuids are requested\n  if (nsecs >= 10000) {\n    throw new Error('uuid.v1(): Can\\'t create more than 10M uuids/sec');\n  }\n\n  _lastMSecs = msecs;\n  _lastNSecs = nsecs;\n  _clockseq = clockseq;\n\n  // Per 4.1.4 - Convert from unix epoch to Gregorian epoch\n  msecs += 12219292800000;\n\n  // `time_low`\n  var tl = ((msecs & 0xfffffff) * 10000 + nsecs) % 0x100000000;\n  b[i++] = tl >>> 24 & 0xff;\n  b[i++] = tl >>> 16 & 0xff;\n  b[i++] = tl >>> 8 & 0xff;\n  b[i++] = tl & 0xff;\n\n  // `time_mid`\n  var tmh = (msecs / 0x100000000 * 10000) & 0xfffffff;\n  b[i++] = tmh >>> 8 & 0xff;\n  b[i++] = tmh & 0xff;\n\n  // `time_high_and_version`\n  b[i++] = tmh >>> 24 & 0xf | 0x10; // include version\n  b[i++] = tmh >>> 16 & 0xff;\n\n  // `clock_seq_hi_and_reserved` (Per 4.2.2 - include variant)\n  b[i++] = clockseq >>> 8 | 0x80;\n\n  // `clock_seq_low`\n  b[i++] = clockseq & 0xff;\n\n  // `node`\n  for (var n = 0; n < 6; ++n) {\n    b[i + n] = node[n];\n  }\n\n  return buf ? buf : bytesToUuid(b);\n}\n\nmodule.exports = v1;\n\n\n//# sourceURL=webpack://Models/D:/Works/art-forms/node_modules/uuid/v1.js?");

/***/ }),

/***/ "./src/constants/enableBehavior.ts":
/*!*****************************************!*\
  !*** ./src/constants/enableBehavior.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.AND = 'and';\r\nexports.OR = 'or';\r\n\n\n//# sourceURL=webpack://Models/./src/constants/enableBehavior.ts?");

/***/ }),

/***/ "./src/constants/enableWhenOperators.ts":
/*!**********************************************!*\
  !*** ./src/constants/enableWhenOperators.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.EXISTS = 'EXISTS';\r\nexports.EQUAL = '==';\r\nexports.NOT_EQUAL = '!=';\r\nexports.MORE = '>';\r\nexports.LESS = '<';\r\nexports.MORE_OR_EQUAL = '>=';\r\nexports.LESS_OR_EQUAL = '<=';\r\n\n\n//# sourceURL=webpack://Models/./src/constants/enableWhenOperators.ts?");

/***/ }),

/***/ "./src/constants/errorMessages.ts":
/*!****************************************!*\
  !*** ./src/constants/errorMessages.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.REQUIRED = 'Field is required';\r\nexports.REG_EXP = 'Invalid input';\r\n\n\n//# sourceURL=webpack://Models/./src/constants/errorMessages.ts?");

/***/ }),

/***/ "./src/constants/itemTypes.ts":
/*!************************************!*\
  !*** ./src/constants/itemTypes.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.GROUP = 'GROUP';\r\nexports.DISPLAY = 'DISPLAY';\r\nexports.BOOLEAN = 'BOOLEAN';\r\nexports.DECIMAL = 'DECIMAL';\r\nexports.DATE = 'DATE';\r\nexports.DATE_TIME = 'DATE_TIME';\r\nexports.TIME = 'TIME';\r\nexports.TEXT = 'TEXT';\r\nexports.CHOICE = 'CHOICE';\r\nexports.OPEN_CHOICE = 'OPEN_CHOICE';\r\nexports.MULTI_CHOICE = 'MULTI_CHOICE';\r\nexports.ATTACHMENT = 'ATTACHMENT';\r\nexports.STRING = 'STRING';\r\n\n\n//# sourceURL=webpack://Models/./src/constants/itemTypes.ts?");

/***/ }),

/***/ "./src/factories/answerFactory.ts":
/*!****************************************!*\
  !*** ./src/factories/answerFactory.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst answer_1 = __webpack_require__(/*! ../models/answer */ \"./src/models/answer.ts\");\r\nclass AnswerFactory {\r\n    constructor(parent) {\r\n        this.parent = parent;\r\n    }\r\n    createAnswer(answer) {\r\n        return new answer_1.Answer(answer, this.parent);\r\n    }\r\n}\r\nexports.AnswerFactory = AnswerFactory;\r\nexports.default = AnswerFactory;\r\n\n\n//# sourceURL=webpack://Models/./src/factories/answerFactory.ts?");

/***/ }),

/***/ "./src/factories/answerOptionFactory.ts":
/*!**********************************************!*\
  !*** ./src/factories/answerOptionFactory.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst answerOption_1 = __importDefault(__webpack_require__(/*! ../models/answerOption */ \"./src/models/answerOption.ts\"));\r\nclass AnswerOptionFactory {\r\n    constructor(parent) {\r\n        this.parent = parent;\r\n    }\r\n    createAnswerOption(answerOption) {\r\n        return new answerOption_1.default(answerOption, this.parent);\r\n    }\r\n}\r\nexports.AnswerOptionFactory = AnswerOptionFactory;\r\nexports.default = AnswerOptionFactory;\r\n\n\n//# sourceURL=webpack://Models/./src/factories/answerOptionFactory.ts?");

/***/ }),

/***/ "./src/factories/enableWhenFactory.ts":
/*!********************************************!*\
  !*** ./src/factories/enableWhenFactory.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst enableWhen_1 = __importDefault(__webpack_require__(/*! ../models/enableWhen */ \"./src/models/enableWhen.ts\"));\r\nclass EnableWhenFactory {\r\n    constructor(parent) {\r\n        this.parent = parent;\r\n    }\r\n    createEnableWhen(enableWhen) {\r\n        return new enableWhen_1.default(enableWhen, this.parent);\r\n    }\r\n}\r\nexports.EnableWhenFactory = EnableWhenFactory;\r\nexports.default = EnableWhenFactory;\r\n\n\n//# sourceURL=webpack://Models/./src/factories/enableWhenFactory.ts?");

/***/ }),

/***/ "./src/factories/initialAnswerFactory.ts":
/*!***********************************************!*\
  !*** ./src/factories/initialAnswerFactory.ts ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst initialAnswer_1 = __webpack_require__(/*! ../models/initialAnswer */ \"./src/models/initialAnswer.ts\");\r\nclass InitialAnswerFactory {\r\n    constructor(parent) {\r\n        this.parent = parent;\r\n    }\r\n    createInitialAnswer(initialAnswer) {\r\n        return new initialAnswer_1.InitialAnswer(initialAnswer, this.parent);\r\n    }\r\n}\r\nexports.InitialAnswerFactory = InitialAnswerFactory;\r\nexports.default = InitialAnswerFactory;\r\n\n\n//# sourceURL=webpack://Models/./src/factories/initialAnswerFactory.ts?");

/***/ }),

/***/ "./src/factories/itemByTypeFactory.ts":
/*!********************************************!*\
  !*** ./src/factories/itemByTypeFactory.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst itemFactory_1 = __webpack_require__(/*! ./itemFactory */ \"./src/factories/itemFactory.ts\");\r\nconst itemTypes_1 = __webpack_require__(/*! ../constants/itemTypes */ \"./src/constants/itemTypes.ts\");\r\nclass ItemByTypeFactory {\r\n    constructor(parent) {\r\n        this.itemFactory = new itemFactory_1.ItemFactory(parent);\r\n    }\r\n    createItem(item) {\r\n        switch (item.type) {\r\n            case itemTypes_1.ATTACHMENT: {\r\n                return this.itemFactory.createAttachmentItem(item);\r\n            }\r\n            case itemTypes_1.BOOLEAN: {\r\n                return this.itemFactory.createBooleanItem(item);\r\n            }\r\n            case itemTypes_1.CHOICE: {\r\n                return this.itemFactory.createChoiceItem(item);\r\n            }\r\n            case itemTypes_1.DATE: {\r\n                return this.itemFactory.createDateItem(item);\r\n            }\r\n            case itemTypes_1.DATE_TIME: {\r\n                return this.itemFactory.createDateTimeItem(item);\r\n            }\r\n            case itemTypes_1.DECIMAL: {\r\n                return this.itemFactory.createDecimalItem(item);\r\n            }\r\n            case itemTypes_1.DISPLAY: {\r\n                return this.itemFactory.createItem(item);\r\n            }\r\n            case itemTypes_1.GROUP: {\r\n                return this.itemFactory.createGroupItem(item);\r\n            }\r\n            case itemTypes_1.MULTI_CHOICE: {\r\n                return this.itemFactory.createMultiChoiceItem(item);\r\n            }\r\n            case itemTypes_1.OPEN_CHOICE: {\r\n                return this.itemFactory.createOpenChoiceItem(item);\r\n            }\r\n            case itemTypes_1.STRING: {\r\n                return this.itemFactory.createStringItem(item);\r\n            }\r\n            case itemTypes_1.TEXT: {\r\n                return this.itemFactory.createTextItem(item);\r\n            }\r\n            case itemTypes_1.TIME: {\r\n                return this.itemFactory.createTimeItem(item);\r\n            }\r\n            default: {\r\n                return this.itemFactory.createItem(item);\r\n            }\r\n        }\r\n    }\r\n}\r\nexports.ItemByTypeFactory = ItemByTypeFactory;\r\nexports.default = ItemByTypeFactory;\r\n\n\n//# sourceURL=webpack://Models/./src/factories/itemByTypeFactory.ts?");

/***/ }),

/***/ "./src/factories/itemFactory.ts":
/*!**************************************!*\
  !*** ./src/factories/itemFactory.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst textItem_1 = __importDefault(__webpack_require__(/*! ../models/questionItems/textItem */ \"./src/models/questionItems/textItem.ts\"));\r\nconst booleanItem_1 = __importDefault(__webpack_require__(/*! ../models/questionItems/booleanItem */ \"./src/models/questionItems/booleanItem.ts\"));\r\nconst item_1 = __importDefault(__webpack_require__(/*! ../models/item */ \"./src/models/item.ts\"));\r\nconst groupItem_1 = __importDefault(__webpack_require__(/*! ../models/groupItem */ \"./src/models/groupItem.ts\"));\r\nconst stringItem_1 = __importDefault(__webpack_require__(/*! ../models/questionItems/stringItem */ \"./src/models/questionItems/stringItem.ts\"));\r\nconst decimalItem_1 = __importDefault(__webpack_require__(/*! ../models/questionItems/decimalItem */ \"./src/models/questionItems/decimalItem.ts\"));\r\nconst timeItem_1 = __importDefault(__webpack_require__(/*! ../models/questionItems/timeItem */ \"./src/models/questionItems/timeItem.ts\"));\r\nconst dateItem_1 = __importDefault(__webpack_require__(/*! ../models/questionItems/dateItem */ \"./src/models/questionItems/dateItem.ts\"));\r\nconst dateTimeItem_1 = __importDefault(__webpack_require__(/*! ../models/questionItems/dateTimeItem */ \"./src/models/questionItems/dateTimeItem.ts\"));\r\nconst attachmentItem_1 = __importDefault(__webpack_require__(/*! ../models/questionItems/attachmentItem */ \"./src/models/questionItems/attachmentItem.ts\"));\r\nconst openChoiceItem_1 = __importDefault(__webpack_require__(/*! ../models/questionItems/openChoiceItem */ \"./src/models/questionItems/openChoiceItem.ts\"));\r\nconst choiceItem_1 = __importDefault(__webpack_require__(/*! ../models/questionItems/choiceItem */ \"./src/models/questionItems/choiceItem.ts\"));\r\nconst multiChoiceItem_1 = __importDefault(__webpack_require__(/*! ../models/questionItems/multiChoiceItem */ \"./src/models/questionItems/multiChoiceItem.ts\"));\r\nclass ItemFactory {\r\n    constructor(parent) {\r\n        this.parent = parent;\r\n    }\r\n    createItem(item) {\r\n        return new item_1.default(item, this.parent);\r\n    }\r\n    createGroupItem(item) {\r\n        return new groupItem_1.default(item, this.parent);\r\n    }\r\n    createTextItem(item) {\r\n        return new textItem_1.default(item, this.parent);\r\n    }\r\n    createStringItem(item) {\r\n        return new stringItem_1.default(item, this.parent);\r\n    }\r\n    createDecimalItem(item) {\r\n        return new decimalItem_1.default(item, this.parent);\r\n    }\r\n    createBooleanItem(item) {\r\n        return new booleanItem_1.default(item, this.parent);\r\n    }\r\n    createTimeItem(item) {\r\n        return new timeItem_1.default(item, this.parent);\r\n    }\r\n    createDateItem(item) {\r\n        return new dateItem_1.default(item, this.parent);\r\n    }\r\n    createDateTimeItem(item) {\r\n        return new dateTimeItem_1.default(item, this.parent);\r\n    }\r\n    createAttachmentItem(item) {\r\n        return new attachmentItem_1.default(item, this.parent);\r\n    }\r\n    createChoiceItem(item) {\r\n        return new choiceItem_1.default(item, this.parent);\r\n    }\r\n    createOpenChoiceItem(item) {\r\n        return new openChoiceItem_1.default(item, this.parent);\r\n    }\r\n    createMultiChoiceItem(item) {\r\n        return new multiChoiceItem_1.default(item, this.parent);\r\n    }\r\n}\r\nexports.ItemFactory = ItemFactory;\r\nexports.default = ItemFactory;\r\n\n\n//# sourceURL=webpack://Models/./src/factories/itemFactory.ts?");

/***/ }),

/***/ "./src/factories/questionResponseFactory.ts":
/*!**************************************************!*\
  !*** ./src/factories/questionResponseFactory.ts ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst questionnaireResponseItem_1 = __webpack_require__(/*! ../models/questionnaireResponseItem */ \"./src/models/questionnaireResponseItem.ts\");\r\nconst choiceStrategy_1 = __importDefault(__webpack_require__(/*! ../replyStrategies/choiceStrategy */ \"./src/replyStrategies/choiceStrategy.ts\"));\r\nconst textInputStrategy_1 = __importDefault(__webpack_require__(/*! ../replyStrategies/textInputStrategy */ \"./src/replyStrategies/textInputStrategy.ts\"));\r\nconst multiChoiceStrategy_1 = __importDefault(__webpack_require__(/*! ../replyStrategies/multiChoiceStrategy */ \"./src/replyStrategies/multiChoiceStrategy.ts\"));\r\nconst itemTypes_1 = __webpack_require__(/*! ../constants/itemTypes */ \"./src/constants/itemTypes.ts\");\r\nconst validators_1 = __importDefault(__webpack_require__(/*! ../validators/validators */ \"./src/validators/validators.ts\"));\r\nconst attachmentStrategy_1 = __importDefault(__webpack_require__(/*! ../replyStrategies/attachmentStrategy */ \"./src/replyStrategies/attachmentStrategy.ts\"));\r\nexports.questionResponseFactory = {\r\n    createResponse: (questionItem, answerCollection, responseItem) => {\r\n        const validationRules = [];\r\n        questionItem.required && validationRules.push(validators_1.default.required);\r\n        switch (questionItem.type) {\r\n            case itemTypes_1.STRING: {\r\n                validationRules.push(validators_1.default.stringRegExp);\r\n                return new questionnaireResponseItem_1.QuestionnaireResponseItem(responseItem, questionItem, textInputStrategy_1.default, validationRules, answerCollection);\r\n            }\r\n            case itemTypes_1.TEXT: {\r\n                validationRules.push(validators_1.default.textRegExp);\r\n                return new questionnaireResponseItem_1.QuestionnaireResponseItem(responseItem, questionItem, textInputStrategy_1.default, validationRules, answerCollection);\r\n            }\r\n            case itemTypes_1.DECIMAL: {\r\n                validationRules.push(validators_1.default.decimalRegExp);\r\n                return new questionnaireResponseItem_1.QuestionnaireResponseItem(responseItem, questionItem, textInputStrategy_1.default, validationRules, answerCollection);\r\n            }\r\n            case itemTypes_1.BOOLEAN: {\r\n                validationRules.push(validators_1.default.booleanRegExp);\r\n                return new questionnaireResponseItem_1.QuestionnaireResponseItem(responseItem, questionItem, textInputStrategy_1.default, validationRules, answerCollection);\r\n            }\r\n            case itemTypes_1.DATE: {\r\n                validationRules.push(validators_1.default.dateRegExp);\r\n                return new questionnaireResponseItem_1.QuestionnaireResponseItem(responseItem, questionItem, textInputStrategy_1.default, validationRules, answerCollection);\r\n            }\r\n            case itemTypes_1.TIME: {\r\n                validationRules.push(validators_1.default.timeRegExp);\r\n                return new questionnaireResponseItem_1.QuestionnaireResponseItem(responseItem, questionItem, textInputStrategy_1.default, validationRules, answerCollection);\r\n            }\r\n            case itemTypes_1.DATE_TIME: {\r\n                validationRules.push(validators_1.default.dateTimeRegExp);\r\n                return new questionnaireResponseItem_1.QuestionnaireResponseItem(responseItem, questionItem, textInputStrategy_1.default, validationRules, answerCollection);\r\n            }\r\n            case itemTypes_1.CHOICE: {\r\n                return new questionnaireResponseItem_1.QuestionnaireResponseItem(responseItem, questionItem, choiceStrategy_1.default, validationRules, answerCollection);\r\n            }\r\n            case itemTypes_1.OPEN_CHOICE: {\r\n                return new questionnaireResponseItem_1.QuestionnaireResponseItem(responseItem, questionItem, choiceStrategy_1.default, validationRules, answerCollection);\r\n            }\r\n            case itemTypes_1.MULTI_CHOICE: {\r\n                return new questionnaireResponseItem_1.QuestionnaireResponseItem(responseItem, questionItem, multiChoiceStrategy_1.default, validationRules, answerCollection);\r\n            }\r\n            case itemTypes_1.ATTACHMENT: {\r\n                return new questionnaireResponseItem_1.QuestionnaireResponseItem(responseItem, questionItem, attachmentStrategy_1.default, validationRules, answerCollection);\r\n            }\r\n            default: {\r\n                return new questionnaireResponseItem_1.QuestionnaireResponseItem(responseItem, questionItem, undefined, validationRules, answerCollection);\r\n            }\r\n        }\r\n    }\r\n};\r\nexports.default = exports.questionResponseFactory;\r\n\n\n//# sourceURL=webpack://Models/./src/factories/questionResponseFactory.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nfunction __export(m) {\r\n    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];\r\n}\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n///  CONSTANTS\r\n__export(__webpack_require__(/*! ./constants/itemTypes */ \"./src/constants/itemTypes.ts\"));\r\n__export(__webpack_require__(/*! ./constants/enableBehavior */ \"./src/constants/enableBehavior.ts\"));\r\n__export(__webpack_require__(/*! ./constants/enableWhenOperators */ \"./src/constants/enableWhenOperators.ts\"));\r\n__export(__webpack_require__(/*! ./constants/errorMessages */ \"./src/constants/errorMessages.ts\"));\r\n/// ---- INTERFACES\r\n__export(__webpack_require__(/*! ./models/enableWhen */ \"./src/models/enableWhen.ts\"));\r\n__export(__webpack_require__(/*! ./models/item */ \"./src/models/item.ts\"));\r\n__export(__webpack_require__(/*! ./models/groupItem */ \"./src/models/groupItem.ts\"));\r\n/// QUESTION ITEMS\r\n__export(__webpack_require__(/*! ./models/questionItems/questionItem */ \"./src/models/questionItems/questionItem.ts\"));\r\n__export(__webpack_require__(/*! ./models/questionItems/attachmentItem */ \"./src/models/questionItems/attachmentItem.ts\"));\r\n__export(__webpack_require__(/*! ./models/questionItems/booleanItem */ \"./src/models/questionItems/booleanItem.ts\"));\r\n__export(__webpack_require__(/*! ./models/questionItems/choiceItem */ \"./src/models/questionItems/choiceItem.ts\"));\r\n__export(__webpack_require__(/*! ./models/questionItems/dateItem */ \"./src/models/questionItems/dateItem.ts\"));\r\n__export(__webpack_require__(/*! ./models/questionItems/dateTimeItem */ \"./src/models/questionItems/dateTimeItem.ts\"));\r\n__export(__webpack_require__(/*! ./models/questionItems/decimalItem */ \"./src/models/questionItems/decimalItem.ts\"));\r\n__export(__webpack_require__(/*! ./models/questionItems/openChoiceItem */ \"./src/models/questionItems/openChoiceItem.ts\"));\r\n__export(__webpack_require__(/*! ./models/questionItems/stringItem */ \"./src/models/questionItems/stringItem.ts\"));\r\n__export(__webpack_require__(/*! ./models/questionItems/textItem */ \"./src/models/questionItems/textItem.ts\"));\r\n__export(__webpack_require__(/*! ./models/questionItems/timeItem */ \"./src/models/questionItems/timeItem.ts\"));\r\n__export(__webpack_require__(/*! ./models/questionItems/multiChoiceItem */ \"./src/models/questionItems/multiChoiceItem.ts\"));\r\n/// ----\r\n/// MAIN MODELS\r\n__export(__webpack_require__(/*! ./models/questionnaire */ \"./src/models/questionnaire.ts\"));\r\n__export(__webpack_require__(/*! ./models/questionnaireResponse */ \"./src/models/questionnaireResponse.ts\"));\r\n/// ----\r\n__export(__webpack_require__(/*! ./models/questionnaireResponseItem */ \"./src/models/questionnaireResponseItem.ts\"));\r\n__export(__webpack_require__(/*! ./models/answer */ \"./src/models/answer.ts\"));\r\n__export(__webpack_require__(/*! ./models/initialAnswer */ \"./src/models/initialAnswer.ts\"));\r\n__export(__webpack_require__(/*! ./models/answerOption */ \"./src/models/answerOption.ts\"));\r\n/// FACTORIES\r\n__export(__webpack_require__(/*! ./factories/itemFactory */ \"./src/factories/itemFactory.ts\"));\r\n__export(__webpack_require__(/*! ./factories/answerFactory */ \"./src/factories/answerFactory.ts\"));\r\n__export(__webpack_require__(/*! ./factories/initialAnswerFactory */ \"./src/factories/initialAnswerFactory.ts\"));\r\n__export(__webpack_require__(/*! ./factories/answerOptionFactory */ \"./src/factories/answerOptionFactory.ts\"));\r\n__export(__webpack_require__(/*! ./factories/questionResponseFactory */ \"./src/factories/questionResponseFactory.ts\"));\r\n__export(__webpack_require__(/*! ./factories/enableWhenFactory */ \"./src/factories/enableWhenFactory.ts\"));\r\n__export(__webpack_require__(/*! ./factories/itemByTypeFactory */ \"./src/factories/itemByTypeFactory.ts\"));\r\n/// ----\r\n/// REPLY STRATEGIES\r\n__export(__webpack_require__(/*! ./replyStrategies/choiceStrategy */ \"./src/replyStrategies/choiceStrategy.ts\"));\r\n__export(__webpack_require__(/*! ./replyStrategies/multiChoiceStrategy */ \"./src/replyStrategies/multiChoiceStrategy.ts\"));\r\n__export(__webpack_require__(/*! ./replyStrategies/textInputStrategy */ \"./src/replyStrategies/textInputStrategy.ts\"));\r\n/// ----\r\n\n\n//# sourceURL=webpack://Models/./src/index.ts?");

/***/ }),

/***/ "./src/interfaces/IInitialAnswer.ts":
/*!******************************************!*\
  !*** ./src/interfaces/IInitialAnswer.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n\n\n//# sourceURL=webpack://Models/./src/interfaces/IInitialAnswer.ts?");

/***/ }),

/***/ "./src/models/answer.ts":
/*!******************************!*\
  !*** ./src/models/answer.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\r\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\r\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\r\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\r\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\r\n};\r\nvar __metadata = (this && this.__metadata) || function (k, v) {\r\n    if (typeof Reflect === \"object\" && typeof Reflect.metadata === \"function\") return Reflect.metadata(k, v);\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nvar Answer_1;\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst v1_1 = __importDefault(__webpack_require__(/*! uuid/v1 */ \"../../node_modules/uuid/v1.js\"));\r\nconst observable_1 = __webpack_require__(/*! @art-forms/observable */ \"@art-forms/observable\");\r\nlet Answer = Answer_1 = class Answer {\r\n    constructor(answer, parent) {\r\n        this.itemIdMap = new Map();\r\n        this.id = answer && answer.id || v1_1.default();\r\n        this.parent = parent;\r\n        this.items = []; /// to be changed if needed!!!\r\n        this.value = answer && answer.value;\r\n        Object.defineProperty(Answer_1.prototype, 'position', {\r\n            enumerable: true,\r\n            configurable: true,\r\n            get() {\r\n                if (!this.parent)\r\n                    return;\r\n                let position;\r\n                this.parent.answers.find((option, index) => {\r\n                    if (option.id === this.id) {\r\n                        position = index;\r\n                        return true;\r\n                    }\r\n                });\r\n                return position;\r\n            }\r\n        });\r\n        this.items.forEach(item => this.itemIdMap.set(item.id, true));\r\n    }\r\n    addQuestionnaireResponseItem(item) {\r\n        if (this.itemIdMap.has(item.id))\r\n            return;\r\n        this.items.push(item);\r\n        this.itemIdMap.set(item.id, true);\r\n    }\r\n    updateAnswer(answer) {\r\n        Object.assign(this, answer);\r\n    }\r\n    setValue(value) {\r\n        this.value = value;\r\n    }\r\n    remove() {\r\n        this.parent && this.parent.removeAnswer(this);\r\n    }\r\n};\r\n__decorate([\r\n    observable_1.observableProperty,\r\n    __metadata(\"design:type\", Array)\r\n], Answer.prototype, \"items\", void 0);\r\nAnswer = Answer_1 = __decorate([\r\n    observable_1.observable,\r\n    __metadata(\"design:paramtypes\", [Object, Object])\r\n], Answer);\r\nexports.Answer = Answer;\r\nexports.default = Answer;\r\n\n\n//# sourceURL=webpack://Models/./src/models/answer.ts?");

/***/ }),

/***/ "./src/models/answerOption.ts":
/*!************************************!*\
  !*** ./src/models/answerOption.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\r\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\r\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\r\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\r\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\r\n};\r\nvar __metadata = (this && this.__metadata) || function (k, v) {\r\n    if (typeof Reflect === \"object\" && typeof Reflect.metadata === \"function\") return Reflect.metadata(k, v);\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nvar AnswerOption_1;\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst v1_1 = __importDefault(__webpack_require__(/*! uuid/v1 */ \"../../node_modules/uuid/v1.js\"));\r\nconst observable_1 = __webpack_require__(/*! @art-forms/observable */ \"@art-forms/observable\");\r\nlet AnswerOption = AnswerOption_1 = class AnswerOption {\r\n    constructor(option, parent) {\r\n        this.id = option && option.id || v1_1.default();\r\n        this.value = option && option.value;\r\n        this.parent = parent;\r\n        this.defaultSelected = !!option && !!option.defaultSelected;\r\n        Object.defineProperty(AnswerOption_1.prototype, 'position', {\r\n            enumerable: true,\r\n            configurable: true,\r\n            get() {\r\n                if (!this.parent)\r\n                    return;\r\n                let position;\r\n                this.parent.options.find((option, index) => {\r\n                    if (option.id === this.id) {\r\n                        position = index;\r\n                        return true;\r\n                    }\r\n                });\r\n                return position;\r\n            }\r\n        });\r\n    }\r\n    selectAsDefault() {\r\n        this.parent && this.parent.selectDefaultOption(this);\r\n    }\r\n    unselectAsDefault() {\r\n        this.parent && this.parent.unselectDefaultOption(this);\r\n    }\r\n    updateAnswerOption(option) {\r\n        this.id = option.id;\r\n        this.value = option.value;\r\n    }\r\n    setValue(value) {\r\n        this.value = value;\r\n    }\r\n    remove() {\r\n        this.parent && this.parent.removeAnswerOption(this);\r\n    }\r\n};\r\nAnswerOption = AnswerOption_1 = __decorate([\r\n    observable_1.observable,\r\n    __metadata(\"design:paramtypes\", [Object, Object])\r\n], AnswerOption);\r\nexports.AnswerOption = AnswerOption;\r\nexports.default = AnswerOption;\r\n\n\n//# sourceURL=webpack://Models/./src/models/answerOption.ts?");

/***/ }),

/***/ "./src/models/answersCollection.ts":
/*!*****************************************!*\
  !*** ./src/models/answersCollection.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\r\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\r\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\r\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\r\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\r\n};\r\nvar __metadata = (this && this.__metadata) || function (k, v) {\r\n    if (typeof Reflect === \"object\" && typeof Reflect.metadata === \"function\") return Reflect.metadata(k, v);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst observable_1 = __webpack_require__(/*! @art-forms/observable */ \"@art-forms/observable\");\r\nlet AnswerCollection = class AnswerCollection {\r\n    constructor(answers) {\r\n        this.answers = answers || [];\r\n    }\r\n    updateResponseAnswers(responseId, answers) {\r\n        const obs = observable_1.getObservable(this);\r\n        obs && obs.mute();\r\n        this.answers = this.answers.filter(answer => answer.parentId !== responseId);\r\n        answers.forEach(answer => {\r\n            this.answers.push({ parentId: responseId, value: answer.value });\r\n        });\r\n        obs && obs.unmute();\r\n        obs && obs.emitChange();\r\n    }\r\n};\r\nAnswerCollection = __decorate([\r\n    observable_1.observable,\r\n    __metadata(\"design:paramtypes\", [Array])\r\n], AnswerCollection);\r\nexports.AnswerCollection = AnswerCollection;\r\nexports.default = AnswerCollection;\r\n\n\n//# sourceURL=webpack://Models/./src/models/answersCollection.ts?");

/***/ }),

/***/ "./src/models/enableWhen.ts":
/*!**********************************!*\
  !*** ./src/models/enableWhen.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst enableWhenOperators_1 = __webpack_require__(/*! ../constants/enableWhenOperators */ \"./src/constants/enableWhenOperators.ts\");\r\nconst v1_js_1 = __importDefault(__webpack_require__(/*! uuid/v1.js */ \"../../node_modules/uuid/v1.js\"));\r\nclass EnableWhen {\r\n    constructor(enableWhen, parent) {\r\n        this.id = enableWhen && enableWhen.id || v1_js_1.default();\r\n        this.questionId = enableWhen && enableWhen.questionId;\r\n        this.operator = enableWhen && enableWhen.operator || enableWhenOperators_1.EQUAL;\r\n        this.answer = enableWhen && enableWhen.answer;\r\n        this.parent = parent;\r\n    }\r\n    remove() {\r\n        this.parent && this.parent.removeEnableWhen(this);\r\n    }\r\n}\r\nexports.EnableWhen = EnableWhen;\r\nexports.default = EnableWhen;\r\n\n\n//# sourceURL=webpack://Models/./src/models/enableWhen.ts?");

/***/ }),

/***/ "./src/models/groupItem.ts":
/*!*********************************!*\
  !*** ./src/models/groupItem.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\r\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\r\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\r\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\r\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\r\n};\r\nvar __metadata = (this && this.__metadata) || function (k, v) {\r\n    if (typeof Reflect === \"object\" && typeof Reflect.metadata === \"function\") return Reflect.metadata(k, v);\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst observable_1 = __webpack_require__(/*! @art-forms/observable */ \"@art-forms/observable\");\r\nconst itemByTypeFactory_1 = __importDefault(__webpack_require__(/*! ../factories/itemByTypeFactory */ \"./src/factories/itemByTypeFactory.ts\"));\r\nconst item_1 = __importDefault(__webpack_require__(/*! ./item */ \"./src/models/item.ts\"));\r\nconst itemTypes_1 = __webpack_require__(/*! ../constants/itemTypes */ \"./src/constants/itemTypes.ts\");\r\nlet GroupItem = class GroupItem extends item_1.default {\r\n    constructor(item, parent) {\r\n        super(item, parent);\r\n        this.type = itemTypes_1.GROUP;\r\n        this.itemIdMap = new Map();\r\n        this.itemByTypeFactory = new itemByTypeFactory_1.default(this);\r\n        this.completeItems(item);\r\n        this.items.forEach(item => this.itemIdMap.set(item.id, true));\r\n    }\r\n    addDescendantItemAfter(thisItem, newItem) {\r\n        this.addItem(newItem, thisItem.position + 1);\r\n    }\r\n    completeItems(item) {\r\n        if (item && item.items) {\r\n            this.items = item.items.map(item => this.itemByTypeFactory.createItem(item));\r\n        }\r\n        else {\r\n            this.items = [];\r\n        }\r\n    }\r\n    addItem(item, index) {\r\n        if (this.itemIdMap.has(item.id))\r\n            return;\r\n        item.parent = this;\r\n        index = index === undefined ? this.items.length : index;\r\n        this.items.splice(index, 0, item);\r\n        this.itemIdMap.set(item.id, true);\r\n    }\r\n    removeItem(item) {\r\n        this.items.splice(item.position, 1);\r\n        this.itemIdMap.delete(item.id);\r\n    }\r\n    replaceItem(oldItem, newItem) {\r\n        const position = oldItem.position;\r\n        this.items.splice(position, 1, newItem);\r\n        this.itemIdMap.delete(oldItem.id);\r\n        this.itemIdMap.set(newItem.id, true);\r\n    }\r\n};\r\n__decorate([\r\n    observable_1.observableProperty,\r\n    __metadata(\"design:type\", Array)\r\n], GroupItem.prototype, \"items\", void 0);\r\nGroupItem = __decorate([\r\n    observable_1.observable,\r\n    __metadata(\"design:paramtypes\", [Object, Object])\r\n], GroupItem);\r\nexports.GroupItem = GroupItem;\r\nexports.default = GroupItem;\r\n\n\n//# sourceURL=webpack://Models/./src/models/groupItem.ts?");

/***/ }),

/***/ "./src/models/initialAnswer.ts":
/*!*************************************!*\
  !*** ./src/models/initialAnswer.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst IInitialAnswer_1 = __importDefault(__webpack_require__(/*! ../interfaces/IInitialAnswer */ \"./src/interfaces/IInitialAnswer.ts\"));\r\nconst v1_1 = __importDefault(__webpack_require__(/*! uuid/v1 */ \"../../node_modules/uuid/v1.js\"));\r\nclass InitialAnswer {\r\n    constructor(initialAnswer, parent) {\r\n        this.id = initialAnswer && initialAnswer.id || v1_1.default();\r\n        this.value = initialAnswer && initialAnswer.value;\r\n        this.parent = parent;\r\n        Object.defineProperty(InitialAnswer.prototype, 'position', {\r\n            enumerable: true,\r\n            configurable: true,\r\n            get() {\r\n                if (!this.parent)\r\n                    return;\r\n                let position;\r\n                this.parent.initialAnswers.find((initialAnswer, index) => {\r\n                    if (initialAnswer.id === this.id) {\r\n                        position = index;\r\n                        return true;\r\n                    }\r\n                });\r\n                return position;\r\n            }\r\n        });\r\n    }\r\n    updateInitialAnswer(initialAnswer) {\r\n        this.id = initialAnswer.id;\r\n        this.value = initialAnswer.value;\r\n    }\r\n    setValue(value) {\r\n        this.value = value;\r\n    }\r\n    remove() {\r\n        this.parent && this.parent.removeInitialAnswer(this);\r\n    }\r\n}\r\nexports.InitialAnswer = InitialAnswer;\r\n\n\n//# sourceURL=webpack://Models/./src/models/initialAnswer.ts?");

/***/ }),

/***/ "./src/models/item.ts":
/*!****************************!*\
  !*** ./src/models/item.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\r\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\r\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\r\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\r\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\r\n};\r\nvar __metadata = (this && this.__metadata) || function (k, v) {\r\n    if (typeof Reflect === \"object\" && typeof Reflect.metadata === \"function\") return Reflect.metadata(k, v);\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nvar Item_1;\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst observable_1 = __webpack_require__(/*! @art-forms/observable */ \"@art-forms/observable\");\r\nconst v1_1 = __importDefault(__webpack_require__(/*! uuid/v1 */ \"../../node_modules/uuid/v1.js\"));\r\nconst enableBehavior_1 = __webpack_require__(/*! ../constants/enableBehavior */ \"./src/constants/enableBehavior.ts\");\r\nconst enableWhenFactory_1 = __importDefault(__webpack_require__(/*! ../factories/enableWhenFactory */ \"./src/factories/enableWhenFactory.ts\"));\r\nconst itemTypes_1 = __webpack_require__(/*! ../constants/itemTypes */ \"./src/constants/itemTypes.ts\");\r\nlet Item = Item_1 = class Item {\r\n    constructor(item, parent) {\r\n        this.type = itemTypes_1.DISPLAY;\r\n        this.enableWhenIdMap = new Map();\r\n        this.enableWhenFactory = new enableWhenFactory_1.default(this);\r\n        this.id = item && item.id || v1_1.default();\r\n        this.required = !!item && !!item.required;\r\n        this.text = item && item.text;\r\n        this.enableWhen = (item && item.enableWhen) ? item.enableWhen.map(enableWhen => this.enableWhenFactory.createEnableWhen(enableWhen)) : [];\r\n        this.enableBehavior = (item && item.enableBehavior) ? item.enableBehavior : enableBehavior_1.AND;\r\n        this.parent = parent;\r\n        this.enableWhen.forEach(enableWhen => this.enableWhenIdMap.set(enableWhen.id, true));\r\n        this._definePrototypeProperties();\r\n    }\r\n    _definePrototypeProperties() {\r\n        Object.defineProperty(Item_1.prototype, 'position', {\r\n            enumerable: true,\r\n            configurable: true,\r\n            get() {\r\n                if (!this.parent)\r\n                    return;\r\n                let position;\r\n                this.parent.items.find((item, index) => {\r\n                    if (item.id === this.id) {\r\n                        position = index;\r\n                        return true;\r\n                    }\r\n                });\r\n                return position;\r\n            }\r\n        });\r\n    }\r\n    addSiblingItemAfter(item) {\r\n        this.parent && this.parent.addDescendantItemAfter(this, item);\r\n    }\r\n    addEnableWhen(enableWhen) {\r\n        if (this.enableWhenIdMap.has(enableWhen.id))\r\n            return;\r\n        this.enableWhen.push(enableWhen);\r\n        this.enableWhenIdMap.set(enableWhen.id, true);\r\n    }\r\n    removeEnableWhen(enableWhen) {\r\n        let position;\r\n        this.enableWhen.find((EW, i) => {\r\n            if (EW.id === enableWhen.id) {\r\n                position = i;\r\n                return true;\r\n            }\r\n        });\r\n        if (position !== undefined) {\r\n            this.enableWhen.splice(position, 1);\r\n            this.enableWhenIdMap.delete(enableWhen.id);\r\n        }\r\n    }\r\n    updateItem(item) {\r\n        const obs = observable_1.getObservable(item);\r\n        obs && obs.mute();\r\n        this.id = item.id;\r\n        this.text = item.text;\r\n        this.required = !!item.required;\r\n        obs && obs.unmute();\r\n        obs && obs.emitChange();\r\n    }\r\n    remove() {\r\n        this.parent && this.parent.removeItem(this);\r\n    }\r\n    replace(newItem) {\r\n        this.parent && this.parent.replaceItem(this, newItem);\r\n    }\r\n};\r\n__decorate([\r\n    observable_1.observableProperty,\r\n    __metadata(\"design:type\", Array)\r\n], Item.prototype, \"enableWhen\", void 0);\r\nItem = Item_1 = __decorate([\r\n    observable_1.observable,\r\n    __metadata(\"design:paramtypes\", [Object, Object])\r\n], Item);\r\nexports.Item = Item;\r\nexports.default = Item;\r\n\n\n//# sourceURL=webpack://Models/./src/models/item.ts?");

/***/ }),

/***/ "./src/models/questionItems/attachmentItem.ts":
/*!****************************************************!*\
  !*** ./src/models/questionItems/attachmentItem.ts ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\r\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\r\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\r\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\r\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\r\n};\r\nvar __metadata = (this && this.__metadata) || function (k, v) {\r\n    if (typeof Reflect === \"object\" && typeof Reflect.metadata === \"function\") return Reflect.metadata(k, v);\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst itemTypes_1 = __webpack_require__(/*! ../../constants/itemTypes */ \"./src/constants/itemTypes.ts\");\r\nconst observable_1 = __webpack_require__(/*! @art-forms/observable */ \"@art-forms/observable\");\r\nconst questionItem_1 = __importDefault(__webpack_require__(/*! ./questionItem */ \"./src/models/questionItems/questionItem.ts\"));\r\nlet AttachmentItem = class AttachmentItem extends questionItem_1.default {\r\n    constructor(item, parent) {\r\n        super(item, parent);\r\n        this.type = itemTypes_1.ATTACHMENT;\r\n        this.multipleFiles = !!(item && item.multipleFiles);\r\n    }\r\n    updateItem(item) {\r\n        const obs = observable_1.getObservable(item);\r\n        obs && obs.mute();\r\n        this.multipleFiles = item.multipleFiles;\r\n        obs && obs.unmute();\r\n        super.updateItem(item);\r\n    }\r\n};\r\nAttachmentItem = __decorate([\r\n    observable_1.observable,\r\n    __metadata(\"design:paramtypes\", [Object, Object])\r\n], AttachmentItem);\r\nexports.AttachmentItem = AttachmentItem;\r\nexports.default = AttachmentItem;\r\n\n\n//# sourceURL=webpack://Models/./src/models/questionItems/attachmentItem.ts?");

/***/ }),

/***/ "./src/models/questionItems/booleanItem.ts":
/*!*************************************************!*\
  !*** ./src/models/questionItems/booleanItem.ts ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\r\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\r\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\r\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\r\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst itemTypes_1 = __webpack_require__(/*! ../../constants/itemTypes */ \"./src/constants/itemTypes.ts\");\r\nconst observable_1 = __webpack_require__(/*! @art-forms/observable */ \"@art-forms/observable\");\r\nconst questionItem_1 = __importDefault(__webpack_require__(/*! ./questionItem */ \"./src/models/questionItems/questionItem.ts\"));\r\nlet BooleanItem = class BooleanItem extends questionItem_1.default {\r\n    constructor() {\r\n        super(...arguments);\r\n        this.type = itemTypes_1.BOOLEAN;\r\n    }\r\n};\r\nBooleanItem = __decorate([\r\n    observable_1.observable\r\n], BooleanItem);\r\nexports.BooleanItem = BooleanItem;\r\nexports.default = BooleanItem;\r\n\n\n//# sourceURL=webpack://Models/./src/models/questionItems/booleanItem.ts?");

/***/ }),

/***/ "./src/models/questionItems/choiceItem.ts":
/*!************************************************!*\
  !*** ./src/models/questionItems/choiceItem.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\r\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\r\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\r\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\r\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\r\n};\r\nvar __metadata = (this && this.__metadata) || function (k, v) {\r\n    if (typeof Reflect === \"object\" && typeof Reflect.metadata === \"function\") return Reflect.metadata(k, v);\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst observable_1 = __webpack_require__(/*! @art-forms/observable */ \"@art-forms/observable\");\r\nconst questionItem_1 = __importDefault(__webpack_require__(/*! ./questionItem */ \"./src/models/questionItems/questionItem.ts\"));\r\nconst itemTypes_1 = __webpack_require__(/*! ../../constants/itemTypes */ \"./src/constants/itemTypes.ts\");\r\nconst answerOptionFactory_1 = __importDefault(__webpack_require__(/*! ../../factories/answerOptionFactory */ \"./src/factories/answerOptionFactory.ts\"));\r\nlet ChoiceItem = class ChoiceItem extends questionItem_1.default {\r\n    constructor(item, parent) {\r\n        super(item, parent);\r\n        this.type = itemTypes_1.CHOICE;\r\n        this.optionIdMap = new Map();\r\n        this.answerOptionFactory = new answerOptionFactory_1.default(this);\r\n        this.completeOptions(item);\r\n        this.options.forEach(option => this.optionIdMap.set(option.id, true));\r\n    }\r\n    completeOptions(item) {\r\n        if (item && item.options) {\r\n            this.options = item.options.map(option => this.answerOptionFactory.createAnswerOption(option));\r\n        }\r\n        else {\r\n            this.options = [];\r\n        }\r\n    }\r\n    setSingleInitialAnswer(initialAnswer) {\r\n    }\r\n    addInitialAnswer(initialAnswer) {\r\n    }\r\n    clearInitialAnswers() {\r\n        if (this.defaultOption) {\r\n            this.defaultOption.defaultSelected = false;\r\n        }\r\n    }\r\n    selectDefaultOption(answerOption) {\r\n        const option = this.options.find(option => option.id === answerOption.id);\r\n        if (!option)\r\n            return;\r\n        if (this.defaultOption) {\r\n            this.defaultOption.defaultSelected = false;\r\n        }\r\n        this.defaultOption = option;\r\n        this.defaultOption.defaultSelected = true;\r\n    }\r\n    unselectDefaultOption(answerOption) {\r\n        const option = this.options.find(option => option.id === answerOption.id);\r\n        if (option) {\r\n            option.defaultSelected = false;\r\n            this.defaultOption = undefined;\r\n        }\r\n    }\r\n    addAnswerOption(option) {\r\n        if (this.optionIdMap.has(option.id))\r\n            return;\r\n        this.options.push(option);\r\n        this.optionIdMap.set(option.id, true);\r\n    }\r\n    removeAnswerOption(option) {\r\n        this.options.splice(option.position, 1);\r\n        this.optionIdMap.delete(option.id);\r\n    }\r\n};\r\n__decorate([\r\n    observable_1.observableProperty,\r\n    __metadata(\"design:type\", Array)\r\n], ChoiceItem.prototype, \"options\", void 0);\r\nChoiceItem = __decorate([\r\n    observable_1.observable,\r\n    __metadata(\"design:paramtypes\", [Object, Object])\r\n], ChoiceItem);\r\nexports.ChoiceItem = ChoiceItem;\r\nexports.default = ChoiceItem;\r\n\n\n//# sourceURL=webpack://Models/./src/models/questionItems/choiceItem.ts?");

/***/ }),

/***/ "./src/models/questionItems/dateItem.ts":
/*!**********************************************!*\
  !*** ./src/models/questionItems/dateItem.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\r\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\r\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\r\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\r\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst observable_1 = __webpack_require__(/*! @art-forms/observable */ \"@art-forms/observable\");\r\nconst questionItem_1 = __importDefault(__webpack_require__(/*! ./questionItem */ \"./src/models/questionItems/questionItem.ts\"));\r\nconst itemTypes_1 = __webpack_require__(/*! ../../constants/itemTypes */ \"./src/constants/itemTypes.ts\");\r\nlet DateItem = class DateItem extends questionItem_1.default {\r\n    constructor() {\r\n        super(...arguments);\r\n        this.type = itemTypes_1.DATE;\r\n    }\r\n};\r\nDateItem = __decorate([\r\n    observable_1.observable\r\n], DateItem);\r\nexports.DateItem = DateItem;\r\nexports.default = DateItem;\r\n\n\n//# sourceURL=webpack://Models/./src/models/questionItems/dateItem.ts?");

/***/ }),

/***/ "./src/models/questionItems/dateTimeItem.ts":
/*!**************************************************!*\
  !*** ./src/models/questionItems/dateTimeItem.ts ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\r\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\r\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\r\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\r\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst observable_1 = __webpack_require__(/*! @art-forms/observable */ \"@art-forms/observable\");\r\nconst itemTypes_1 = __webpack_require__(/*! ../../constants/itemTypes */ \"./src/constants/itemTypes.ts\");\r\nconst questionItem_1 = __importDefault(__webpack_require__(/*! ./questionItem */ \"./src/models/questionItems/questionItem.ts\"));\r\nlet DateTimeItem = class DateTimeItem extends questionItem_1.default {\r\n    constructor() {\r\n        super(...arguments);\r\n        this.type = itemTypes_1.DATE_TIME;\r\n    }\r\n};\r\nDateTimeItem = __decorate([\r\n    observable_1.observable\r\n], DateTimeItem);\r\nexports.DateTimeItem = DateTimeItem;\r\nexports.default = DateTimeItem;\r\n\n\n//# sourceURL=webpack://Models/./src/models/questionItems/dateTimeItem.ts?");

/***/ }),

/***/ "./src/models/questionItems/decimalItem.ts":
/*!*************************************************!*\
  !*** ./src/models/questionItems/decimalItem.ts ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\r\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\r\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\r\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\r\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst itemTypes_1 = __webpack_require__(/*! ../../constants/itemTypes */ \"./src/constants/itemTypes.ts\");\r\nconst observable_1 = __webpack_require__(/*! @art-forms/observable */ \"@art-forms/observable\");\r\nconst questionItem_1 = __importDefault(__webpack_require__(/*! ./questionItem */ \"./src/models/questionItems/questionItem.ts\"));\r\nlet DecimalItem = class DecimalItem extends questionItem_1.default {\r\n    constructor() {\r\n        super(...arguments);\r\n        this.type = itemTypes_1.DECIMAL;\r\n    }\r\n};\r\nDecimalItem = __decorate([\r\n    observable_1.observable\r\n], DecimalItem);\r\nexports.DecimalItem = DecimalItem;\r\nexports.default = DecimalItem;\r\n\n\n//# sourceURL=webpack://Models/./src/models/questionItems/decimalItem.ts?");

/***/ }),

/***/ "./src/models/questionItems/multiChoiceItem.ts":
/*!*****************************************************!*\
  !*** ./src/models/questionItems/multiChoiceItem.ts ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\r\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\r\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\r\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\r\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\r\n};\r\nvar __metadata = (this && this.__metadata) || function (k, v) {\r\n    if (typeof Reflect === \"object\" && typeof Reflect.metadata === \"function\") return Reflect.metadata(k, v);\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst questionItem_1 = __importDefault(__webpack_require__(/*! ./questionItem */ \"./src/models/questionItems/questionItem.ts\"));\r\nconst itemTypes_1 = __webpack_require__(/*! ../../constants/itemTypes */ \"./src/constants/itemTypes.ts\");\r\nconst observable_1 = __webpack_require__(/*! @art-forms/observable */ \"@art-forms/observable\");\r\nconst answerOptionFactory_1 = __importDefault(__webpack_require__(/*! ../../factories/answerOptionFactory */ \"./src/factories/answerOptionFactory.ts\"));\r\nlet MultiChoiceItem = class MultiChoiceItem extends questionItem_1.default {\r\n    constructor(item, parent) {\r\n        super(item, parent);\r\n        this.type = itemTypes_1.MULTI_CHOICE;\r\n        this.optionIdMap = new Map();\r\n        this.answerOptionFactory = new answerOptionFactory_1.default(this);\r\n        this.completeOptions(item);\r\n        this.options.forEach(option => this.optionIdMap.set(option.id, true));\r\n    }\r\n    clearInitialAnswers() {\r\n        this.options.forEach(option => {\r\n            option.defaultSelected = false;\r\n        });\r\n    }\r\n    selectDefaultOption(answerOption) {\r\n        const option = this.options.find(option => option.id === answerOption.id);\r\n        if (option) {\r\n            option.defaultSelected = true;\r\n        }\r\n    }\r\n    unselectDefaultOption(answerOption) {\r\n        const option = this.options.find(option => option.id === answerOption.id);\r\n        if (option) {\r\n            option.defaultSelected = false;\r\n        }\r\n    }\r\n    completeOptions(item) {\r\n        if (item && item.options) {\r\n            this.options = item.options.map(option => this.answerOptionFactory.createAnswerOption(option));\r\n        }\r\n        else {\r\n            this.options = [];\r\n        }\r\n    }\r\n    addAnswerOption(option) {\r\n        if (this.optionIdMap.has(option.id))\r\n            return;\r\n        this.options.push(option);\r\n        this.optionIdMap.set(option.id, true);\r\n    }\r\n    removeAnswerOption(option) {\r\n        this.options.splice(option.position, 1);\r\n        this.optionIdMap.delete(option.id);\r\n    }\r\n};\r\n__decorate([\r\n    observable_1.observableProperty,\r\n    __metadata(\"design:type\", Array)\r\n], MultiChoiceItem.prototype, \"options\", void 0);\r\nMultiChoiceItem = __decorate([\r\n    observable_1.observable,\r\n    __metadata(\"design:paramtypes\", [Object, Object])\r\n], MultiChoiceItem);\r\nexports.MultiChoiceItem = MultiChoiceItem;\r\nexports.default = MultiChoiceItem;\r\n\n\n//# sourceURL=webpack://Models/./src/models/questionItems/multiChoiceItem.ts?");

/***/ }),

/***/ "./src/models/questionItems/openChoiceItem.ts":
/*!****************************************************!*\
  !*** ./src/models/questionItems/openChoiceItem.ts ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\r\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\r\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\r\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\r\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\r\n};\r\nvar __metadata = (this && this.__metadata) || function (k, v) {\r\n    if (typeof Reflect === \"object\" && typeof Reflect.metadata === \"function\") return Reflect.metadata(k, v);\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst itemTypes_1 = __webpack_require__(/*! ../../constants/itemTypes */ \"./src/constants/itemTypes.ts\");\r\nconst observable_1 = __webpack_require__(/*! @art-forms/observable */ \"@art-forms/observable\");\r\nconst answerOptionFactory_1 = __importDefault(__webpack_require__(/*! ../../factories/answerOptionFactory */ \"./src/factories/answerOptionFactory.ts\"));\r\nconst questionItem_1 = __importDefault(__webpack_require__(/*! ./questionItem */ \"./src/models/questionItems/questionItem.ts\"));\r\nlet OpenChoiceItem = class OpenChoiceItem extends questionItem_1.default {\r\n    constructor(item, parent) {\r\n        super(item, parent);\r\n        this.type = itemTypes_1.OPEN_CHOICE;\r\n        this.optionIdMap = new Map();\r\n        this.answerOptionFactory = new answerOptionFactory_1.default(this);\r\n        this.completeOptions(item);\r\n        this.options.forEach(option => this.optionIdMap.set(option.id, true));\r\n    }\r\n    clearInitialAnswers() {\r\n        if (this.defaultOption) {\r\n            this.defaultOption.defaultSelected = false;\r\n        }\r\n    }\r\n    selectDefaultOption(answerOption) {\r\n        const option = this.options.find(option => option.id === answerOption.id);\r\n        if (!option)\r\n            return;\r\n        if (this.defaultOption) {\r\n            this.defaultOption.defaultSelected = false;\r\n        }\r\n        this.defaultOption = option;\r\n        this.defaultOption.defaultSelected = true;\r\n    }\r\n    unselectDefaultOption(answerOption) {\r\n        const option = this.options.find(option => option.id === answerOption.id);\r\n        if (option) {\r\n            option.defaultSelected = false;\r\n            this.defaultOption = undefined;\r\n        }\r\n    }\r\n    completeOptions(item) {\r\n        if (item && item.options && item.options.length !== 0) {\r\n            this.options = item.options.map(option => this.answerOptionFactory.createAnswerOption(option));\r\n        }\r\n        else {\r\n            this.options = [this.answerOptionFactory.createAnswerOption()];\r\n        }\r\n    }\r\n    addAnswerOption(option) {\r\n        if (this.optionIdMap.has(option.id))\r\n            return;\r\n        this.options.splice(this.options.length - 1, 0, option);\r\n        this.optionIdMap.set(option.id, true);\r\n    }\r\n    removeAnswerOption(option) {\r\n        if (option.position === this.options.length - 1)\r\n            return;\r\n        this.options.splice(option.position, 1);\r\n        this.optionIdMap.delete(option.id);\r\n    }\r\n};\r\n__decorate([\r\n    observable_1.observableProperty,\r\n    __metadata(\"design:type\", Array)\r\n], OpenChoiceItem.prototype, \"options\", void 0);\r\nOpenChoiceItem = __decorate([\r\n    observable_1.observable,\r\n    __metadata(\"design:paramtypes\", [Object, Object])\r\n], OpenChoiceItem);\r\nexports.OpenChoiceItem = OpenChoiceItem;\r\nexports.default = OpenChoiceItem;\r\n\n\n//# sourceURL=webpack://Models/./src/models/questionItems/openChoiceItem.ts?");

/***/ }),

/***/ "./src/models/questionItems/questionItem.ts":
/*!**************************************************!*\
  !*** ./src/models/questionItems/questionItem.ts ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\r\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\r\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\r\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\r\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\r\n};\r\nvar __metadata = (this && this.__metadata) || function (k, v) {\r\n    if (typeof Reflect === \"object\" && typeof Reflect.metadata === \"function\") return Reflect.metadata(k, v);\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst observable_1 = __webpack_require__(/*! @art-forms/observable */ \"@art-forms/observable\");\r\nconst item_1 = __importDefault(__webpack_require__(/*! ../item */ \"./src/models/item.ts\"));\r\nconst initialAnswerFactory_1 = __importDefault(__webpack_require__(/*! ../../factories/initialAnswerFactory */ \"./src/factories/initialAnswerFactory.ts\"));\r\nclass QuestionItem extends item_1.default {\r\n    constructor(item, parent) {\r\n        super(item, parent);\r\n        this.initialAnswerIdMap = new Map();\r\n        this.initialAnswersFactory = new initialAnswerFactory_1.default(this);\r\n        this.completeInitialAnswers(item);\r\n        this.initialAnswers.forEach(initialAnswer => this.initialAnswerIdMap.set(initialAnswer.id, true));\r\n    }\r\n    completeInitialAnswers(item) {\r\n        if (item && item.initialAnswers) {\r\n            this.initialAnswers = item.initialAnswers.map(initialAnswer => this.initialAnswersFactory.createInitialAnswer(initialAnswer));\r\n        }\r\n        else {\r\n            this.initialAnswers = [];\r\n        }\r\n    }\r\n    setSingleInitialAnswer(initialAnswer) {\r\n        this.initialAnswers = [initialAnswer];\r\n        this.initialAnswerIdMap.clear();\r\n        this.initialAnswerIdMap.set(initialAnswer.id, true);\r\n    }\r\n    addInitialAnswer(initialAnswer) {\r\n        if (this.initialAnswerIdMap.has(initialAnswer.id))\r\n            return;\r\n        this.initialAnswers.push(initialAnswer);\r\n        this.initialAnswerIdMap.set(initialAnswer.id, true);\r\n    }\r\n    clearInitialAnswers() {\r\n        this.initialAnswers = [];\r\n        this.initialAnswerIdMap.clear();\r\n    }\r\n    removeInitialAnswer(initialAnswer) {\r\n        this.initialAnswers.splice(initialAnswer.position, 1);\r\n        this.initialAnswerIdMap.delete(initialAnswer.id);\r\n    }\r\n}\r\n__decorate([\r\n    observable_1.observableProperty,\r\n    __metadata(\"design:type\", Array)\r\n], QuestionItem.prototype, \"initialAnswers\", void 0);\r\nexports.QuestionItem = QuestionItem;\r\nexports.default = QuestionItem;\r\n\n\n//# sourceURL=webpack://Models/./src/models/questionItems/questionItem.ts?");

/***/ }),

/***/ "./src/models/questionItems/stringItem.ts":
/*!************************************************!*\
  !*** ./src/models/questionItems/stringItem.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\r\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\r\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\r\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\r\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst itemTypes_1 = __webpack_require__(/*! ../../constants/itemTypes */ \"./src/constants/itemTypes.ts\");\r\nconst questionItem_1 = __webpack_require__(/*! ./questionItem */ \"./src/models/questionItems/questionItem.ts\");\r\nconst observable_1 = __webpack_require__(/*! @art-forms/observable */ \"@art-forms/observable\");\r\nlet StringItem = class StringItem extends questionItem_1.QuestionItem {\r\n    constructor() {\r\n        super(...arguments);\r\n        this.type = itemTypes_1.STRING;\r\n    }\r\n};\r\nStringItem = __decorate([\r\n    observable_1.observable\r\n], StringItem);\r\nexports.StringItem = StringItem;\r\nexports.default = StringItem;\r\n\n\n//# sourceURL=webpack://Models/./src/models/questionItems/stringItem.ts?");

/***/ }),

/***/ "./src/models/questionItems/textItem.ts":
/*!**********************************************!*\
  !*** ./src/models/questionItems/textItem.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\r\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\r\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\r\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\r\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst itemTypes_1 = __webpack_require__(/*! ../../constants/itemTypes */ \"./src/constants/itemTypes.ts\");\r\nconst questionItem_1 = __webpack_require__(/*! ./questionItem */ \"./src/models/questionItems/questionItem.ts\");\r\nconst observable_1 = __webpack_require__(/*! @art-forms/observable */ \"@art-forms/observable\");\r\nlet TextItem = class TextItem extends questionItem_1.QuestionItem {\r\n    constructor() {\r\n        super(...arguments);\r\n        this.type = itemTypes_1.TEXT;\r\n    }\r\n};\r\nTextItem = __decorate([\r\n    observable_1.observable\r\n], TextItem);\r\nexports.TextItem = TextItem;\r\nexports.default = TextItem;\r\n\n\n//# sourceURL=webpack://Models/./src/models/questionItems/textItem.ts?");

/***/ }),

/***/ "./src/models/questionItems/timeItem.ts":
/*!**********************************************!*\
  !*** ./src/models/questionItems/timeItem.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\r\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\r\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\r\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\r\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst observable_1 = __webpack_require__(/*! @art-forms/observable */ \"@art-forms/observable\");\r\nconst questionItem_1 = __importDefault(__webpack_require__(/*! ./questionItem */ \"./src/models/questionItems/questionItem.ts\"));\r\nconst itemTypes_1 = __webpack_require__(/*! ../../constants/itemTypes */ \"./src/constants/itemTypes.ts\");\r\nlet TimeItem = class TimeItem extends questionItem_1.default {\r\n    constructor() {\r\n        super(...arguments);\r\n        this.type = itemTypes_1.TIME;\r\n    }\r\n};\r\nTimeItem = __decorate([\r\n    observable_1.observable\r\n], TimeItem);\r\nexports.TimeItem = TimeItem;\r\nexports.default = TimeItem;\r\n\n\n//# sourceURL=webpack://Models/./src/models/questionItems/timeItem.ts?");

/***/ }),

/***/ "./src/models/questionnaire.ts":
/*!*************************************!*\
  !*** ./src/models/questionnaire.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\r\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\r\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\r\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\r\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\r\n};\r\nvar __metadata = (this && this.__metadata) || function (k, v) {\r\n    if (typeof Reflect === \"object\" && typeof Reflect.metadata === \"function\") return Reflect.metadata(k, v);\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst v1_1 = __importDefault(__webpack_require__(/*! uuid/v1 */ \"../../node_modules/uuid/v1.js\"));\r\nconst observable_1 = __webpack_require__(/*! @art-forms/observable */ \"@art-forms/observable\");\r\nconst itemByTypeFactory_1 = __importDefault(__webpack_require__(/*! ../factories/itemByTypeFactory */ \"./src/factories/itemByTypeFactory.ts\"));\r\nlet Questionnaire = class Questionnaire {\r\n    constructor(questionnaire) {\r\n        this.itemIdMap = new Map();\r\n        this.itemByTypeFactory = new itemByTypeFactory_1.default(this);\r\n        this.id = questionnaire && questionnaire.id || v1_1.default();\r\n        this.description = questionnaire && questionnaire.description;\r\n        this.title = questionnaire && questionnaire.title;\r\n        this._completeItems(questionnaire);\r\n        this.items.forEach(item => this.itemIdMap.set(item.id, true));\r\n    }\r\n    _completeItems(questionnaire) {\r\n        if (questionnaire && questionnaire.items) {\r\n            this.items = questionnaire.items.map(item => this.itemByTypeFactory.createItem(item));\r\n        }\r\n        else {\r\n            this.items = [];\r\n        }\r\n    }\r\n    addDescendantItemAfter(thisItem, newItem) {\r\n        this.addItem(newItem, thisItem.position + 1);\r\n    }\r\n    updateQuestionnaire(questionnaire) {\r\n        const obs = observable_1.getObservable(this);\r\n        obs && obs.mute();\r\n        this.description = questionnaire.description;\r\n        this.title = questionnaire.title;\r\n        this.id = questionnaire.id;\r\n        obs && obs.unmute();\r\n        obs && obs.emitChange();\r\n    }\r\n    addItem(item, index) {\r\n        if (this.itemIdMap.has(item.id))\r\n            return;\r\n        item.parent = this;\r\n        index = index === undefined ? this.items.length : index;\r\n        this.items.splice(index, 0, item);\r\n        this.itemIdMap.set(item.id, true);\r\n    }\r\n    removeItem(item) {\r\n        this.items.splice(item.position, 1);\r\n        this.itemIdMap.delete(item.id);\r\n    }\r\n    replaceItem(oldItem, newItem) {\r\n        const position = oldItem.position;\r\n        this.items.splice(position, 1, newItem);\r\n        this.itemIdMap.delete(oldItem.id);\r\n        this.itemIdMap.set(newItem.id, true);\r\n    }\r\n};\r\n__decorate([\r\n    observable_1.observableProperty,\r\n    __metadata(\"design:type\", Array)\r\n], Questionnaire.prototype, \"items\", void 0);\r\nQuestionnaire = __decorate([\r\n    observable_1.observable,\r\n    __metadata(\"design:paramtypes\", [Object])\r\n], Questionnaire);\r\nexports.Questionnaire = Questionnaire;\r\nexports.default = Questionnaire;\r\n\n\n//# sourceURL=webpack://Models/./src/models/questionnaire.ts?");

/***/ }),

/***/ "./src/models/questionnaireResponse.ts":
/*!*********************************************!*\
  !*** ./src/models/questionnaireResponse.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\r\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\r\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\r\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\r\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\r\n};\r\nvar __metadata = (this && this.__metadata) || function (k, v) {\r\n    if (typeof Reflect === \"object\" && typeof Reflect.metadata === \"function\") return Reflect.metadata(k, v);\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst v1_1 = __importDefault(__webpack_require__(/*! uuid/v1 */ \"../../node_modules/uuid/v1.js\"));\r\nconst observable_1 = __webpack_require__(/*! @art-forms/observable */ \"@art-forms/observable\");\r\nconst answersCollection_1 = __importDefault(__webpack_require__(/*! ./answersCollection */ \"./src/models/answersCollection.ts\"));\r\nconst questionResponseFactory_1 = __importDefault(__webpack_require__(/*! ../factories/questionResponseFactory */ \"./src/factories/questionResponseFactory.ts\"));\r\nlet QuestionnaireResponse = class QuestionnaireResponse {\r\n    constructor(questionnaire, initialQuestionnaireResponse) {\r\n        this.answerCollection = new answersCollection_1.default();\r\n        this.itemIdMap = new Map(); //it's needed when adding new items\r\n        this.id = initialQuestionnaireResponse && initialQuestionnaireResponse.id || v1_1.default();\r\n        this.questionnaireId = questionnaire.id;\r\n        if (questionnaire.items) {\r\n            this.items = questionnaire.items.map(item => {\r\n                const existingResponseItem = initialQuestionnaireResponse && initialQuestionnaireResponse.items && initialQuestionnaireResponse.items.find(itm => itm.questionId === item.id);\r\n                return questionResponseFactory_1.default.createResponse(item, this.answerCollection, existingResponseItem);\r\n            });\r\n        }\r\n        else {\r\n            this.items = [];\r\n        }\r\n        this.items.forEach(item => this.itemIdMap.set(item.id, true));\r\n    }\r\n    addQuestionnaireResponseItem(item) {\r\n        if (this.itemIdMap.has(item.id))\r\n            return;\r\n        item.answerCollection = this.answerCollection;\r\n        this.items.push(item);\r\n        this.itemIdMap.set(item.id, true);\r\n    }\r\n    updateQuestionnaireResponse(questionnaireResponse) {\r\n        this.id = questionnaireResponse.id;\r\n        this.questionnaireId = questionnaireResponse.questionnaireId;\r\n    }\r\n};\r\n__decorate([\r\n    observable_1.observableProperty,\r\n    __metadata(\"design:type\", Array)\r\n], QuestionnaireResponse.prototype, \"items\", void 0);\r\nQuestionnaireResponse = __decorate([\r\n    observable_1.observable,\r\n    __metadata(\"design:paramtypes\", [Object, Object])\r\n], QuestionnaireResponse);\r\nexports.QuestionnaireResponse = QuestionnaireResponse;\r\nexports.default = QuestionnaireResponse;\r\n\n\n//# sourceURL=webpack://Models/./src/models/questionnaireResponse.ts?");

/***/ }),

/***/ "./src/models/questionnaireResponseItem.ts":
/*!*************************************************!*\
  !*** ./src/models/questionnaireResponseItem.ts ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\r\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\r\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\r\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\r\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\r\n};\r\nvar __metadata = (this && this.__metadata) || function (k, v) {\r\n    if (typeof Reflect === \"object\" && typeof Reflect.metadata === \"function\") return Reflect.metadata(k, v);\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst observable_1 = __webpack_require__(/*! @art-forms/observable */ \"@art-forms/observable\");\r\nconst v1_1 = __importDefault(__webpack_require__(/*! uuid/v1 */ \"../../node_modules/uuid/v1.js\"));\r\nconst answerFactory_1 = __importDefault(__webpack_require__(/*! ../factories/answerFactory */ \"./src/factories/answerFactory.ts\"));\r\nconst answersCollection_1 = __importDefault(__webpack_require__(/*! ./answersCollection */ \"./src/models/answersCollection.ts\"));\r\nconst json_logic_js_1 = __importDefault(__webpack_require__(/*! json-logic-js */ \"../../node_modules/json-logic-js/logic.js\"));\r\nconst questionResponseFactory_1 = __importDefault(__webpack_require__(/*! ../factories/questionResponseFactory */ \"./src/factories/questionResponseFactory.ts\"));\r\nlet QuestionnaireResponseItem = class QuestionnaireResponseItem {\r\n    constructor(initialResponseItem, questionItem, replyStrategy, validationRules, answerCollection) {\r\n        this.answerFactory = new answerFactory_1.default(this);\r\n        this.errorMessages = [];\r\n        this.isEnable = true;\r\n        this.itemIdMap = new Map();\r\n        this.answerIdMap = new Map();\r\n        this.id = initialResponseItem && initialResponseItem.id || v1_1.default();\r\n        this.questionId = questionItem.id;\r\n        this.text = questionItem.text;\r\n        this.answerCollection = answerCollection;\r\n        this._fillAnswers(initialResponseItem, questionItem);\r\n        this._fillItems(initialResponseItem, questionItem);\r\n        this.validationRules = validationRules;\r\n        this.replyStrategy = replyStrategy;\r\n        this.questionItem = questionItem;\r\n        this.validate();\r\n        this.decideEnablingObservation();\r\n        this.answerCollection.updateResponseAnswers(this.questionId, this.answers);\r\n        this._defineOwnProperties();\r\n        this.items.forEach(item => this.itemIdMap.set(item.id, true));\r\n        this.answers.forEach(answer => this.answerIdMap.set(answer.id, true));\r\n    }\r\n    _fillAnswers(initialResponseItem, questionItem) {\r\n        if (initialResponseItem && initialResponseItem.answers) {\r\n            this.answers = initialResponseItem.answers.map(answer => this.answerFactory.createAnswer(answer));\r\n        }\r\n        else {\r\n            const initialAnswers = questionItem.initialAnswers;\r\n            if (initialAnswers && initialAnswers.length) {\r\n                this.answers = initialAnswers.map(initialAnswer => this.answerFactory.createAnswer(initialAnswer));\r\n            }\r\n            else {\r\n                if (questionItem.options) {\r\n                    this.answers = questionItem.options\r\n                        .filter(option => {\r\n                        return option.defaultSelected && option;\r\n                    })\r\n                        .map(option => this.answerFactory.createAnswer(option));\r\n                }\r\n                else {\r\n                    this.answers = [];\r\n                }\r\n            }\r\n        }\r\n    }\r\n    _fillItems(initialResponseItem, questionItem) {\r\n        if (questionItem.items) {\r\n            this.items = questionItem.items.map(item => {\r\n                const existingResponseItem = initialResponseItem && initialResponseItem.items && initialResponseItem.items.find(itm => itm.questionId === item.id);\r\n                return questionResponseFactory_1.default.createResponse(item, this.answerCollection, existingResponseItem);\r\n            });\r\n        }\r\n        else {\r\n            this.items = [];\r\n        }\r\n    }\r\n    _defineOwnProperties() {\r\n        Object.defineProperty(this, 'isValid', {\r\n            get() {\r\n                return this.errorMessages.length === 0;\r\n            }\r\n        });\r\n    }\r\n    decideEnablingObservation() {\r\n        if (this.questionItem.enableWhen && this.questionItem.enableWhen.length) {\r\n            const obs = observable_1.getObservable(this.answerCollection);\r\n            obs && obs.subscribe(this.evaluateEnableWhen.bind(this));\r\n            this.enableWhenQuestionIds = this.questionItem.enableWhen.reduce((map, enableWhen) => {\r\n                if (enableWhen.questionId && enableWhen.operator && enableWhen.answer !== undefined && !map[enableWhen.questionId]) {\r\n                    map[enableWhen.questionId] = true;\r\n                }\r\n                return map;\r\n            }, {});\r\n        }\r\n    }\r\n    evaluateEnableWhen(answerCollection) {\r\n        if (this.questionItem.enableBehavior === undefined)\r\n            return;\r\n        const answers = answerCollection.answers;\r\n        const interestingAnswer = answers.filter(answer => this.enableWhenQuestionIds[answer.parentId]);\r\n        const enableWhenConfigs = !this.questionItem.enableWhen ? [] : this.questionItem.enableWhen.reduce((arr, enableWhen) => {\r\n            if (!enableWhen.questionId || !enableWhen.operator || !enableWhen.answer) {\r\n                return arr.concat(true);\r\n            }\r\n            return arr.concat(interestingAnswer\r\n                .filter(answer => answer.parentId === enableWhen.questionId)\r\n                .some(answer => {\r\n                return (json_logic_js_1.default.apply({ [enableWhen.operator]: ['' + answer.value, '' + enableWhen.answer] }));\r\n            }));\r\n        }, []);\r\n        this.isEnable = json_logic_js_1.default.apply({ [this.questionItem.enableBehavior]: enableWhenConfigs });\r\n    }\r\n    setReplyStrategy(replyStrategy) {\r\n        const obs = observable_1.getObservable(this);\r\n        obs && obs.mute();\r\n        this.replyStrategy = replyStrategy;\r\n        obs && obs.unmute();\r\n    }\r\n    validate() {\r\n        const newErrorMessages = [];\r\n        this.validationRules.forEach(validator => {\r\n            const value = this.answers[0] && this.answers[0].value;\r\n            const message = validator(value);\r\n            message && newErrorMessages.push(message);\r\n        });\r\n        this.errorMessages = newErrorMessages;\r\n    }\r\n    reply(value) {\r\n        if (!this.replyStrategy)\r\n            return;\r\n        const obs = observable_1.getObservable(this);\r\n        obs && obs.mute();\r\n        this.replyStrategy(value, this, this.answerFactory);\r\n        this.validate();\r\n        obs && obs.unmute();\r\n        obs && obs.emitChange();\r\n        this.answerCollection.updateResponseAnswers(this.questionId, this.answers);\r\n    }\r\n    addQuestionnaireResponseItem(item) {\r\n        if (this.itemIdMap.has(item.id))\r\n            return;\r\n        item.answerCollection = this.answerCollection;\r\n        this.items.push(item);\r\n        this.itemIdMap.set(item.id, true);\r\n    }\r\n    updateQuestionnaireResponseItem(item) {\r\n        Object.assign(this, item);\r\n    }\r\n    setSingleAnswer(answer) {\r\n        this.answers.splice(0, this.answers.length, answer);\r\n        this.answerIdMap.clear();\r\n        this.answerIdMap.set(answer.id, true);\r\n    }\r\n    addAnswer(answer, index) {\r\n        if (this.itemIdMap.has(answer.id))\r\n            return;\r\n        index = index === undefined ? this.answers.length : index;\r\n        this.answers.splice(index, 0, answer);\r\n        this.answerIdMap.set(answer.id, true);\r\n    }\r\n    removeAnswer(answer) {\r\n        this.answers.splice(answer.position, 1);\r\n        this.answerIdMap.delete(answer.id);\r\n    }\r\n};\r\n__decorate([\r\n    observable_1.observableProperty,\r\n    __metadata(\"design:type\", Array)\r\n], QuestionnaireResponseItem.prototype, \"items\", void 0);\r\n__decorate([\r\n    observable_1.observableProperty,\r\n    __metadata(\"design:type\", Array)\r\n], QuestionnaireResponseItem.prototype, \"answers\", void 0);\r\nQuestionnaireResponseItem = __decorate([\r\n    observable_1.observable,\r\n    __metadata(\"design:paramtypes\", [Object, Object, Function, Array, answersCollection_1.default])\r\n], QuestionnaireResponseItem);\r\nexports.QuestionnaireResponseItem = QuestionnaireResponseItem;\r\nexports.default = QuestionnaireResponseItem;\r\n\n\n//# sourceURL=webpack://Models/./src/models/questionnaireResponseItem.ts?");

/***/ }),

/***/ "./src/replyStrategies/attachmentStrategy.ts":
/*!***************************************************!*\
  !*** ./src/replyStrategies/attachmentStrategy.ts ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.attachmentStrategy = (value, questionnaireResponseItem, answerFactory) => {\r\n    const answer = questionnaireResponseItem.answers.find(answer => answer.value === value);\r\n    if (!answer) {\r\n        if (questionnaireResponseItem.questionItem.multipleFiles) {\r\n            questionnaireResponseItem.addAnswer(answerFactory.createAnswer({ value }));\r\n        }\r\n        else {\r\n            questionnaireResponseItem.setSingleAnswer(answerFactory.createAnswer({ value }));\r\n        }\r\n    }\r\n    else {\r\n        answer.remove();\r\n    }\r\n};\r\nexports.default = exports.attachmentStrategy;\r\n\n\n//# sourceURL=webpack://Models/./src/replyStrategies/attachmentStrategy.ts?");

/***/ }),

/***/ "./src/replyStrategies/choiceStrategy.ts":
/*!***********************************************!*\
  !*** ./src/replyStrategies/choiceStrategy.ts ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.choiceStrategy = (value, questionnaireResponseItem, answerFactory) => {\r\n    const answer = questionnaireResponseItem.answers[0] || answerFactory.createAnswer();\r\n    const option = questionnaireResponseItem.questionItem.options.find(option => option.id === value);\r\n    option && answer.updateAnswer(Object.assign(Object.assign({}, answer), { id: option.id, value: option.value }));\r\n    questionnaireResponseItem.setSingleAnswer(answer);\r\n};\r\nexports.default = exports.choiceStrategy;\r\n\n\n//# sourceURL=webpack://Models/./src/replyStrategies/choiceStrategy.ts?");

/***/ }),

/***/ "./src/replyStrategies/multiChoiceStrategy.ts":
/*!****************************************************!*\
  !*** ./src/replyStrategies/multiChoiceStrategy.ts ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.multiChoiceStrategy = (value, questionnaireResponseItem, answerFactory) => {\r\n    const option = questionnaireResponseItem.questionItem.options.find(option => option.id === value);\r\n    if (!option)\r\n        return;\r\n    const answer = questionnaireResponseItem.answers.find(answer => answer.id === option.id);\r\n    if (!answer) {\r\n        questionnaireResponseItem.addAnswer(answerFactory.createAnswer({ id: option.id, value: option.value }));\r\n    }\r\n    else {\r\n        answer.remove();\r\n    }\r\n};\r\nexports.default = exports.multiChoiceStrategy;\r\n\n\n//# sourceURL=webpack://Models/./src/replyStrategies/multiChoiceStrategy.ts?");

/***/ }),

/***/ "./src/replyStrategies/textInputStrategy.ts":
/*!**************************************************!*\
  !*** ./src/replyStrategies/textInputStrategy.ts ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.textInputStrategy = (value, questionnaireResponseItem, answerFactory) => {\r\n    if (questionnaireResponseItem.answers[0]) {\r\n        const answer = questionnaireResponseItem.answers[0];\r\n        if (value !== '' && value !== undefined) {\r\n            answer.setValue(value);\r\n        }\r\n        else {\r\n            answer.remove();\r\n        }\r\n    }\r\n    else {\r\n        if (value !== '' && value !== undefined) {\r\n            const answer = answerFactory.createAnswer({ value });\r\n            questionnaireResponseItem.setSingleAnswer(answer);\r\n        }\r\n    }\r\n};\r\nexports.default = exports.textInputStrategy;\r\n\n\n//# sourceURL=webpack://Models/./src/replyStrategies/textInputStrategy.ts?");

/***/ }),

/***/ "./src/validators/validators.ts":
/*!**************************************!*\
  !*** ./src/validators/validators.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst errorMessages_1 = __webpack_require__(/*! ../constants/errorMessages */ \"./src/constants/errorMessages.ts\");\r\nconst textRegExp = /[ \\r\\n\\t\\S]+/; // for text and string\r\nconst decimalRegExp = /-?(0|[1-9][0-9]*)(\\.[0-9]+)?([eE][+-]?[0-9]+)?/;\r\nconst booleanRegExp = /true|false/;\r\nconst dateRegExp = /([0-9]([0-9]([0-9][1-9]|[1-9]0)|[1-9]00)|[1-9]000)(-(0[1-9]|1[0-2])(-(0[1-9]|[1-2][0-9]|3[0-1]))?)?/;\r\nconst timeRegExp = /([01][0-9]|2[0-3]):[0-5][0-9]:([0-5][0-9]|60)(\\.[0-9]+)?/;\r\nconst dateTimeRegExp = /([0-9]([0-9]([0-9][1-9]|[1-9]0)|[1-9]00)|[1-9]000)(-(0[1-9]|1[0-2])(-(0[1-9]|[1-2][0-9]|3[0-1])(T([01][0-9]|2[0-3]):[0-5][0-9]:([0-5][0-9]|60)(\\.[0-9]+)?(Z|(\\+|-)((0[0-9]|1[0-3]):[0-5][0-9]|14:00)))?)?)?/;\r\nconst testByRegExp = (value, regExp) => (regExp.test('' + value) || value === '' || value === undefined) ? undefined : errorMessages_1.REG_EXP;\r\nconst testByRequired = (value) => (value !== undefined && value !== '') ? undefined : errorMessages_1.REQUIRED;\r\nexports.validators = {\r\n    stringRegExp(value) {\r\n        return testByRegExp(value, textRegExp);\r\n    },\r\n    textRegExp(value) {\r\n        return testByRegExp(value, textRegExp);\r\n    },\r\n    decimalRegExp(value) {\r\n        return testByRegExp(value, decimalRegExp);\r\n    },\r\n    booleanRegExp(value) {\r\n        return testByRegExp(value, booleanRegExp);\r\n    },\r\n    dateRegExp(value) {\r\n        return testByRegExp(value, dateRegExp);\r\n    },\r\n    timeRegExp(value) {\r\n        return testByRegExp(value, timeRegExp);\r\n    },\r\n    dateTimeRegExp(value) {\r\n        return testByRegExp(value, dateTimeRegExp);\r\n    },\r\n    required(value) {\r\n        return testByRequired(value);\r\n    }\r\n};\r\nexports.default = exports.validators;\r\n\n\n//# sourceURL=webpack://Models/./src/validators/validators.ts?");

/***/ }),

/***/ "@art-forms/observable":
/*!****************************************!*\
  !*** external "@art-forms/observable" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE__art_forms_observable__;\n\n//# sourceURL=webpack://Models/external_%22@art-forms/observable%22?");

/***/ })

/******/ });
});