(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("ElCheckbox", [], factory);
	else if(typeof exports === 'object')
		exports["ElCheckbox"] = factory();
	else
		root["ElCheckbox"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var ElCheckbox = __webpack_require__(2);

	module.exports = {
	  ElCheckbox: ElCheckbox,
	  install: function install(Vue) {
	    Vue.component('el-checkbox', ElCheckbox);
	  }
	};

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = "<label block=element-checkbox> <span elem=input> <span elem=inner :class=\"{\n        'is-disabled': isLimit || disabled,\n        'is-checked': checked\n      }\"> </span> <input elem=original :value=value v-model=model type=checkbox :disabled=\"isLimit || disabled\"> </span> <span elem=label v-text=\"label || value\"></span> </label>";

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(3)
	__vue_template__ = __webpack_require__(1)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}


/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _defineProperty2 = __webpack_require__(5);

	var _defineProperty3 = _interopRequireDefault(_defineProperty2);

	var _events;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	  name: 'el-checkbox',

	  elementName: 'ElCheckbox',

	  props: {
	    model: {
	      type: Array,
	      default: function _default() {
	        return [];
	      },

	      twoWay: true,
	      required: true
	    },
	    value: {
	      type: String,
	      required: true
	    },
	    label: String,
	    disabled: Boolean
	  },

	  computed: {
	    checked: function checked() {
	      return this.model.indexOf(this.value) > -1;
	    }
	  },

	  data: function data() {
	    return {
	      isLimit: false
	    };
	  },


	  events: (_events = {}, (0, _defineProperty3.default)(_events, 'element.checkbox.disabled', function elementCheckboxDisabled() {
	    if (this.checked) {
	      return;
	    }

	    this.isLimit = true;
	  }), (0, _defineProperty3.default)(_events, 'element.checkbox.enabled', function elementCheckboxEnabled() {
	    this.isLimit = false;
	  }), _events),

	  watch: {
	    checked: function checked(sure) {
	      this.$dispatch('element.checkbox', sure);
	    }
	  }
	};

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(6), __esModule: true };

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _defineProperty = __webpack_require__(4);

	var _defineProperty2 = _interopRequireDefault(_defineProperty);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function (obj, key, value) {
	  if (key in obj) {
	    (0, _defineProperty2.default)(obj, key, {
	      value: value,
	      enumerable: true,
	      configurable: true,
	      writable: true
	    });
	  } else {
	    obj[key] = value;
	  }

	  return obj;
	};

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	var $ = __webpack_require__(7);
	module.exports = function defineProperty(it, key, desc){
	  return $.setDesc(it, key, desc);
	};

/***/ },
/* 7 */
/***/ function(module, exports) {

	var $Object = Object;
	module.exports = {
	  create:     $Object.create,
	  getProto:   $Object.getPrototypeOf,
	  isEnum:     {}.propertyIsEnumerable,
	  getDesc:    $Object.getOwnPropertyDescriptor,
	  setDesc:    $Object.defineProperty,
	  setDescs:   $Object.defineProperties,
	  getKeys:    $Object.keys,
	  getNames:   $Object.getOwnPropertyNames,
	  getSymbols: $Object.getOwnPropertySymbols,
	  each:       [].forEach
	};

/***/ }
/******/ ])
});
;