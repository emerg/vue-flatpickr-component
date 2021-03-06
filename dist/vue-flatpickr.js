(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("flatpickr"));
	else if(typeof define === 'function' && define.amd)
		define("VueFlatpickr", ["flatpickr"], factory);
	else if(typeof exports === 'object')
		exports["VueFlatpickr"] = factory(require("flatpickr"));
	else
		root["VueFlatpickr"] = factory(root["flatpickr"]);
})(typeof self !== 'undefined' ? self : this, function(__WEBPACK_EXTERNAL_MODULE_2__) {
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: external "flatpickr"
var external__flatpickr_ = __webpack_require__(2);
var external__flatpickr__default = /*#__PURE__*/__webpack_require__.n(external__flatpickr_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/component.vue
//
//
//
//
//
//
//
//


// You have to import css yourself

// All available hooks, copied from flatpickr source
var hooks = ['onChange', 'onClose', 'onDayCreate', 'onDestroy', 'onKeyDown', 'onMonthChange', 'onOpen', 'onParseConfig', 'onReady', 'onValueUpdate', 'onYearChange'];

var camelToKebab = function camelToKebab(string) {
  return string.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
};

var arrayify = function arrayify(obj) {
  return obj instanceof Array ? obj : [obj];
};

/* harmony default export */ var component = ({
  name: 'flat-pickr',
  props: {
    value: {
      default: null,
      required: true,
      validator: function validator(value) {
        return value === null || value instanceof Date || typeof value === 'string' || value instanceof String || value instanceof Array || typeof value === 'number';
      }
    },
    // https://chmln.github.io/flatpickr/options/
    config: {
      type: Object,
      default: function _default() {
        return {
          wrap: false
        };
      }
    }
  },
  data: function data() {
    return {
      /**
       * The flatpickr instance
       */
      fp: null
    };
  },
  mounted: function mounted() {
    var _this = this;

    // Return early if flatPickr is already loaded
    /* istanbul ignore if */
    if (this.fp) return;

    // Inject our method into hooks array
    hooks.forEach(function (hook) {
      _this.config[hook] = arrayify(_this.config[hook] || []).concat(function () {
        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        _this.$emit.apply(_this, [camelToKebab(hook)].concat(args));
      });
    });

    // Init flatpickr
    this.fp = new external__flatpickr__default.a(this.getElem(), this.config);
    // Set initial date
    this.fp.setDate(this.value, true);
  },

  methods: {
    /**
     * Get the HTML node where flatpickr to be attached
     * Bind on parent element if wrap is true
     */
    getElem: function getElem() {
      return this.config.wrap ? this.$el.parentNode : this.$el;
    },


    /**
     * Watch for value changed by date-picker itself and notify parent component
     *
     * @param event
     */
    onInput: function onInput(event) {
      this.$emit('input', event.target.value);
    }
  },
  watch: {
    /**
     * Watch for any config changes and redraw date-picker
     *
     * @param newConfig Object
     */
    config: {
      deep: true,
      handler: function handler(newConfig) {
        // Workaround: Don't pass hooks to configs again
        hooks.forEach(function (hook) {
          delete newConfig[hook];
        });
        this.fp.set(newConfig);
      }
    },
    /**
     * Watch for changes from parent component and update DOM
     *
     * @param newValue
     */
    value: function value(newValue) {
      // Prevent updates if v-model value is same as input's current value
      if (newValue === this.$el.value) return;
      // Make sure we have a flatpickr instance
      this.fp &&
      // Notify flatpickr instance that there is a change in value
      this.fp.setDate(newValue, true);
    }
  }
  /**
   * Free up memory
   */
  // destroyed() {
  //   /* istanbul ignore else */
  //   if (this.fp) {
  //     this.fp.destroy();
  //     this.fp = null;
  //   }
  // },
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-46c42ed6","hasScoped":false,"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/component.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('input',{attrs:{"type":"text","data-input":""},on:{"input":_vm.onInput}})}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var selectortype_template_index_0_src_component = (esExports);
// CONCATENATED MODULE: ./src/component.vue
var normalizeComponent = __webpack_require__(1)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  component,
  selectortype_template_index_0_src_component,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var src_component = (Component.exports);

// CONCATENATED MODULE: ./src/index.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Plugin", function() { return src_Plugin; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "Component", function() { return src_component; });


var src_Plugin = function Plugin(Vue, params) {
  var name = 'flat-pickr';
  /* istanbul ignore else */
  if (typeof params === 'string') name = params;

  Vue.component(name, src_component);
};

src_component.install = src_Plugin;

/* harmony default export */ var src = __webpack_exports__["default"] = (src_component);


/***/ }),
/* 1 */
/***/ (function(module, exports) {

/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file.
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = injectStyles
  }

  if (hook) {
    var functional = options.functional
    var existing = functional
      ? options.render
      : options.beforeCreate

    if (!functional) {
      // inject component registration as beforeCreate hook
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    } else {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return existing(h, context)
      }
    }
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ })
/******/ ])["default"];
});