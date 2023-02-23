/******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "/packs/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/javascript/packs/js/scrollreveal.min.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/javascript/packs/js/scrollreveal.min.js":
/*!*****************************************************!*\
  !*** ./app/javascript/packs/js/scrollreveal.min.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*! Scroll Reveal Animations */
window.scrollReveal = function (t) {
  "use strict";

  function e(e) {
    this.docElem = t.document.documentElement, this.options = this.extend(this.defaults, e), this.styleBank = {}, 1 == this.options.init && this.init();
  }
  var i = 1,
    o = function () {
      return t.requestAnimationFrame || t.webkitRequestAnimationFrame || t.mozRequestAnimationFrame || function (e) {
        t.setTimeout(e, 1e3 / 60);
      };
    }();
  return e.prototype = {
    defaults: {
      after: "0s",
      enter: "bottom",
      move: "24px",
      over: "0.66s",
      easing: "ease-in-out",
      opacity: 0,
      viewportFactor: .33,
      reset: !1,
      init: !0
    },
    init: function init() {
      this.scrolled = !1;
      var e = this;
      this.elems = Array.prototype.slice.call(this.docElem.querySelectorAll("[data-scroll-reveal]")), this.elems.forEach(function (t, o) {
        var r = t.getAttribute("data-scroll-reveal-id");
        r || (r = i++, t.setAttribute("data-scroll-reveal-id", r)), e.styleBank[r] || (e.styleBank[r] = t.getAttribute("style")), e.update(t);
      });
      var r = function r(t) {
          e.scrolled || (e.scrolled = !0, o(function () {
            e._scrollPage();
          }));
        },
        n = function n() {
          function t() {
            e._scrollPage(), e.resizeTimeout = null;
          }
          e.resizeTimeout && clearTimeout(e.resizeTimeout), e.resizeTimeout = setTimeout(t, 200);
        };
      t.addEventListener("scroll", r, !1), t.addEventListener("resize", n, !1);
    },
    _scrollPage: function _scrollPage() {
      var t = this;
      this.elems.forEach(function (e, i) {
        t.update(e);
      }), this.scrolled = !1;
    },
    parseLanguage: function parseLanguage(t) {
      function e(t) {
        var e = [],
          i = ["from", "the", "and", "then", "but", "with"];
        return t.forEach(function (t, o) {
          i.indexOf(t) > -1 || e.push(t);
        }), e;
      }
      var i = t.getAttribute("data-scroll-reveal").split(/[, ]+/),
        o = {};
      return i = e(i), i.forEach(function (t, e) {
        switch (t) {
          case "enter":
            return void (o.enter = i[e + 1]);
          case "after":
            return void (o.after = i[e + 1]);
          case "wait":
            return void (o.after = i[e + 1]);
          case "move":
            return void (o.move = i[e + 1]);
          case "ease":
            return o.move = i[e + 1], void (o.ease = "ease");
          case "ease-in":
            return o.move = i[e + 1], void (o.easing = "ease-in");
          case "ease-in-out":
            return o.move = i[e + 1], void (o.easing = "ease-in-out");
          case "ease-out":
            return o.move = i[e + 1], void (o.easing = "ease-out");
          case "over":
            return void (o.over = i[e + 1]);
          default:
            return;
        }
      }), o;
    },
    update: function update(t) {
      var e = this.genCSS(t),
        i = this.styleBank[t.getAttribute("data-scroll-reveal-id")];
      return null != i ? i += ";" : i = "", t.getAttribute("data-scroll-reveal-initialized") || (t.setAttribute("style", i + e.initial), t.setAttribute("data-scroll-reveal-initialized", !0)), this.isElementInViewport(t, this.options.viewportFactor) ? t.getAttribute("data-scroll-reveal-complete") ? void 0 : this.isElementInViewport(t, this.options.viewportFactor) ? (t.setAttribute("style", i + e.target + e.transition), void (this.options.reset || setTimeout(function () {
        "" != i ? t.setAttribute("style", i) : t.removeAttribute("style"), t.setAttribute("data-scroll-reveal-complete", !0);
      }, e.totalDuration))) : void 0 : void (this.options.reset && t.setAttribute("style", i + e.initial + e.reset));
    },
    genCSS: function genCSS(t) {
      var e,
        i,
        o = this.parseLanguage(t);
      o.enter ? (("top" == o.enter || "bottom" == o.enter) && (e = o.enter, i = "y"), ("left" == o.enter || "right" == o.enter) && (e = o.enter, i = "x")) : (("top" == this.options.enter || "bottom" == this.options.enter) && (e = this.options.enter, i = "y"), ("left" == this.options.enter || "right" == this.options.enter) && (e = this.options.enter, i = "x")), ("top" == e || "left" == e) && (o.move ? o.move = "-" + o.move : o.move = "-" + this.options.move);
      var r = o.move || this.options.move,
        n = o.over || this.options.over,
        s = o.after || this.options.after,
        a = o.easing || this.options.easing,
        l = o.opacity || this.options.opacity,
        u = "-webkit-transition: -webkit-transform " + n + " " + a + " " + s + ",  opacity " + n + " " + a + " " + s + ";transition: transform " + n + " " + a + " " + s + ", opacity " + n + " " + a + " " + s + ";-webkit-perspective: 1000;-webkit-backface-visibility: hidden;",
        c = "-webkit-transition: -webkit-transform " + n + " " + a + " 0s,  opacity " + n + " " + a + " " + s + ";transition: transform " + n + " " + a + " 0s,  opacity " + n + " " + a + " " + s + ";-webkit-perspective: 1000;-webkit-backface-visibility: hidden;",
        f = "-webkit-transform: translate" + i + "(" + r + ");transform: translate" + i + "(" + r + ");opacity: " + l + ";",
        p = "-webkit-transform: translate" + i + "(0);transform: translate" + i + "(0);opacity: 1;";
      return {
        transition: u,
        initial: f,
        target: p,
        reset: c,
        totalDuration: 1e3 * (parseFloat(n) + parseFloat(s))
      };
    },
    getViewportH: function getViewportH() {
      var e = this.docElem.clientHeight,
        i = t.innerHeight;
      return i > e ? i : e;
    },
    getOffset: function getOffset(t) {
      var e = 0,
        i = 0;
      do isNaN(t.offsetTop) || (e += t.offsetTop), isNaN(t.offsetLeft) || (i += t.offsetLeft); while (t = t.offsetParent);
      return {
        top: e,
        left: i
      };
    },
    isElementInViewport: function isElementInViewport(e, i) {
      var o = t.pageYOffset,
        r = o + this.getViewportH(),
        n = e.offsetHeight,
        s = this.getOffset(e).top,
        a = s + n,
        i = i || 0;
      return r >= s + n * i && a >= o || "fixed" == (e.currentStyle ? e.currentStyle : t.getComputedStyle(e, null)).position;
    },
    extend: function extend(t, e) {
      for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
      return t;
    }
  }, e;
}(window);

/***/ })

/******/ });
//# sourceMappingURL=scrollreveal-212f42a1afd23f9b3219.js.map