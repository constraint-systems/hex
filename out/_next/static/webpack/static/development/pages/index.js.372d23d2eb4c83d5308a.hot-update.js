webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/array/from */ "./node_modules/@babel/runtime-corejs2/core-js/array/from.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _parts_theme__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../parts/theme */ "./parts/theme.js");
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! theme-ui */ "./node_modules/theme-ui/dist/index.esm.js");
/* harmony import */ var _parts_utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../parts/utils */ "./parts/utils.js");





var _jsxFileName = "/Users/grant.custer/Sites/constraint_systems/hex/pages/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;

/* @jsx jsx */






var fs = _parts_theme__WEBPACK_IMPORTED_MODULE_8__["default"].fontSizes[0];
var once = false;
var size = 14;
var special_keys = 'x?ew'.split('');

Object.fromEntries = function (arr) {
  return _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_3___default.a.apply(Object, [{}].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_4__["default"])(_babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_2___default()(arr, function (_ref) {
    var _ref2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, 2),
        k = _ref2[0],
        v = _ref2[1];

    return Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, k, v);
  }))));
};

var xp = 4;
var yp = 4;

var Home = function Home() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])([null, null]),
      dimensions = _useState[0],
      setDimensions = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])('draw'),
      mode = _useState2[0],
      setMode = _useState2[1];

  var canvasRef = Object(react__WEBPACK_IMPORTED_MODULE_6__["useRef"])();
  var overlayCanvasRef = Object(react__WEBPACK_IMPORTED_MODULE_6__["useRef"])();
  var requestRef = Object(react__WEBPACK_IMPORTED_MODULE_6__["useRef"])();
  var keymap = Object(react__WEBPACK_IMPORTED_MODULE_6__["useRef"])({});
  var coordinates = Object(react__WEBPACK_IMPORTED_MODULE_6__["useRef"])([0, 0]);
  var vertical = Object(react__WEBPACK_IMPORTED_MODULE_6__["useRef"])(null);
  var horizontal = Object(react__WEBPACK_IMPORTED_MODULE_6__["useRef"])(null);
  var backslash = Object(react__WEBPACK_IMPORTED_MODULE_6__["useRef"])(null);
  var slash = Object(react__WEBPACK_IMPORTED_MODULE_6__["useRef"])(null);

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])(true),
      help = _useState3[0],
      toggleHelp = _useState3[1];

  function KeyTip(letter) {
    return Object(theme_ui__WEBPACK_IMPORTED_MODULE_9__["jsx"])("span", {
      className: "keytip",
      onClick: function onClick() {
        keymap.current[letter] = true;
        keyAction(letter, false);
        keymap.current[letter] = false;
      },
      sx: {
        outline: 'solid 1px black',
        width: '2ch',
        textAlign: 'center',
        display: 'inline-block',
        userSelect: 'none',
        cursor: 'default'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40
      },
      __self: this
    }, letter);
  }

  function keyAction(key, repeat) {
    var canvas_width = Math.floor(canvasRef.current.offsetWidth);
    var canvas_height = Math.floor(canvasRef.current.offsetHeight);
    var grid_width = Math.floor((canvas_width - xp * 2) / size) * size;
    var grid_height = Math.floor((canvas_height - yp * 2) / size) * size;
    var ctx = canvasRef.current.getContext('2d');
    ctx.fillStyle = 'black';
    var _mode = mode;

    if (special_keys.includes(key)) {
      if (key === 'e' && !repeat) {
        if (_mode === 'draw') {
          _mode = 'erase';
          setMode(_mode);
        } else if (_mode === 'erase') {
          _mode = 'draw';
          setMode(_mode);
        }
      } else if (key === 'x' && !repeat) {
        clearGrid();
      } else if (key === 'w' && !repeat) {
        var encoded = canvasRef.current.toDataURL('image/png');
        var link = document.createElement('a');
        link.setAttribute('href', encoded);
        link.setAttribute('download', 'etch.png');
        link.dispatchEvent(new MouseEvent("click", {
          bubbles: true,
          cancelable: true,
          view: window
        }));
        return;
      } else if (key === '?' && !repeat) {
        toggleHelp(!help);
        return;
      }
    }

    if (key === 'init') {
      ctx.fillStyle = 'white';
      ctx.fillRect(0, 0, canvas_width, canvas_height);
    }

    var octx = overlayCanvasRef.current.getContext('2d');
    octx.strokeStyle = _mode === 'draw' ? 'limegreen' : 'hotpink';
    var ostroke = 4;
    octx.lineWidth = ostroke;
    var current = coordinates.current;
    var inc = size;
    var modify = [0, 0];
    if (keymap.current['j']) modify[1] += inc;
    if (keymap.current['k']) modify[1] += -inc;
    if (keymap.current['h']) modify[0] += -inc;
    if (keymap.current['l']) modify[0] += inc;
    var next = [current[0] + modify[0], current[1] + modify[1]];
    if (next[0] < 0) next[0] = grid_width - size * 2;
    if (next[0] >= grid_width - size) next[0] = 0;
    if (next[1] < 0) next[1] = grid_height - size * 2;
    if (next[1] >= grid_height - size) next[1] = 0;
    coordinates.current = next; // modify drawing

    var c = next[0] / size;
    var r = next[1] / size;
    var new_val = _mode === 'draw' ? true : false;

    if (keymap.current['a']) {
      var index = r * (grid_width / size + 1) + c;
      vertical.current[index] = new_val;
    }

    if (keymap.current['d']) {
      var _index = (r + 1) * (grid_width / size + 1) + c;

      horizontal.current[_index] = new_val;
    }

    if (keymap.current['s']) {
      var _index2 = r * (grid_width / size + 1) + c;

      horizontal.current[_index2] = new_val;
    }

    if (keymap.current['f']) {
      var _index3 = r * (grid_width / size + 1) + c + 1;

      vertical.current[_index3] = new_val;
    }

    if (keymap.current['g']) {
      var _index4 = r * (grid_width / size + 1) + c;

      backslash.current[_index4] = new_val;
    }

    if (keymap.current['r']) {
      var _index5 = r * (grid_width / size + 1) + c;

      slash.current[_index5] = new_val;
    }

    function moveTo(ctx, x, y) {
      ctx.moveTo(x + xp, y + yp);
    }

    function lineTo(ctx, x, y) {
      ctx.lineTo(x + xp, y + yp);
    }

    ctx.clearRect(0, 0, canvas_width, canvas_height);

    if (vertical.current !== null) {
      var va = vertical.current;
      var ha = horizontal.current;
      var ba = backslash.current;
      var sa = slash.current;
      var dc = grid_width / size + 1;
      var dr = grid_height / size + 1;

      for (var i = 0; i < va.length; i++) {
        var v = va[i];
        var h = ha[i];
        var b = ba[i];
        var s = sa[i];

        var _c = i % dc;

        var _r = Math.floor(i / dc);

        ctx.beginPath();

        if (v === true) {
          moveTo(ctx, _c * size, _r * size);
          lineTo(ctx, _c * size, _r * size + size);
        }

        if (h === true) {
          moveTo(ctx, _c * size, _r * size);
          lineTo(ctx, _c * size + size, _r * size);
        }

        if (b === true) {
          moveTo(ctx, _c * size + size, _r * size + size);
          lineTo(ctx, _c * size, _r * size);
        }

        if (s === true) {
          moveTo(ctx, _c * size, _r * size + size);
          lineTo(ctx, _c * size + size, _r * size);
        }

        ctx.stroke();
      }
    }

    octx.clearRect(0, 0, window.innerWidth, window.innerHeight);
    octx.strokeRect(coordinates.current[0] - ostroke / 2 + xp, coordinates.current[1] - ostroke / 2 + yp, size + ostroke, size + ostroke);
  }

  function downHandler(e) {
    keymap.current[e.key] = true;
    keyAction(e.key, e.repeat);
  }

  function upHandler(e) {
    keymap.current[e.key] = false;
  }

  function clearGrid() {
    var canvas_width = Math.floor(canvasRef.current.offsetWidth);
    var canvas_height = Math.floor(canvasRef.current.offsetHeight);
    var grid_width = Math.floor((canvas_width - xp * 2) / size) * size;
    var grid_height = Math.floor((canvas_height - yp * 2) / size) * size;
    var columns = grid_width / size + 1;
    var rows = grid_height / size + 1;
    vertical.current = Array(columns * rows).fill(false);
    horizontal.current = vertical.current.slice();
    backslash.current = vertical.current.slice();
    slash.current = vertical.current.slice();
  }

  function setWindowSize() {
    console.log('set size');
    var canvas_width = Math.floor(window.innerWidth);
    var canvas_height = Math.floor(window.innerHeight);
    console.log(canvas_width, canvas_height);
    clearGrid();
    var dpr = window.devicePixelRatio || 1;
    canvasRef.current.width = canvas_width * dpr;
    canvasRef.current.height = canvas_height * dpr;
    var ctx = canvasRef.current.getContext('2d');
    ctx.scale(dpr, dpr);
    overlayCanvasRef.current.width = canvas_width * dpr;
    overlayCanvasRef.current.height = canvas_height * dpr;
    var octx = overlayCanvasRef.current.getContext('2d');
    octx.scale(dpr, dpr);
    setDimensions([canvas_width, canvas_height]);
  }

  Object(react__WEBPACK_IMPORTED_MODULE_6__["useEffect"])(function () {
    if (!once) {
      setWindowSize();
      setTimeout(function () {
        keyAction('init', false);
      }, 0);
      once = true;
    }

    window.addEventListener('keydown', downHandler);
    window.addEventListener('keyup', upHandler); // Remove event listeners on cleanup

    return function () {
      window.removeEventListener('keydown', downHandler);
      window.removeEventListener('keyup', upHandler);
    };
  }, [mode, help]);
  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_9__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_9__["ThemeProvider"], {
    theme: _parts_theme__WEBPACK_IMPORTED_MODULE_8__["default"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 286
    },
    __self: this
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_9__["jsx"])("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a.dynamic([["3684514086", [_parts_theme__WEBPACK_IMPORTED_MODULE_8__["default"].fontSizes[0], _parts_theme__WEBPACK_IMPORTED_MODULE_8__["default"].lineHeights.body]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 287
    },
    __self: this
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_9__["jsx"])(next_head__WEBPACK_IMPORTED_MODULE_7___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 288
    },
    __self: this
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_9__["jsx"])("title", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a.dynamic([["3684514086", [_parts_theme__WEBPACK_IMPORTED_MODULE_8__["default"].fontSizes[0], _parts_theme__WEBPACK_IMPORTED_MODULE_8__["default"].lineHeights.body]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 289
    },
    __self: this
  }, "Hex")), Object(theme_ui__WEBPACK_IMPORTED_MODULE_9__["jsx"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
    id: "3684514086",
    dynamic: [_parts_theme__WEBPACK_IMPORTED_MODULE_8__["default"].fontSizes[0], _parts_theme__WEBPACK_IMPORTED_MODULE_8__["default"].lineHeights.body],
    __self: this
  }, "@font-face{font-family:'custom';src:url('/static/fonts/IBMPlexMono-Regular.woff2') format('woff2'), url('/static/fonts/IBMPlexMono-Regular.woff') format('woff');}*{box-sizing:border-box;}html{font-family:custom,monospace;font-size:".concat(_parts_theme__WEBPACK_IMPORTED_MODULE_8__["default"].fontSizes[0], "px;background:white;line-height:").concat(_parts_theme__WEBPACK_IMPORTED_MODULE_8__["default"].lineHeights.body, ";}body{margin:0;overflow:hidden;}textarea{font-family:inherit;font-size:inherit;line-height:inherit;}p{margin:0;}.keytip+.keytip{margin-left:1px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ncmFudC5jdXN0ZXIvU2l0ZXMvY29uc3RyYWludF9zeXN0ZW1zL2hleC9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFrUzJCLEFBR2tDLEFBS0MsQUFHUSxBQU1yQixBQUlXLEFBS1gsQUFHTyxTQVhBLEFBU2xCLE9BR0EsSUFSb0IsQ0FqQjRDLENBSWhFLEdBVUEsSUFQMkMsU0FXckIsb0JBQ3RCLFlBWG1CLGlCQUN3Qix5Q0FDM0Msc0JBVEEiLCJmaWxlIjoiL1VzZXJzL2dyYW50LmN1c3Rlci9TaXRlcy9jb25zdHJhaW50X3N5c3RlbXMvaGV4L3BhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogQGpzeCBqc3ggKi9cbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZUNhbGxiYWNrIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcbmltcG9ydCB0aGVtZSBmcm9tICcuLi9wYXJ0cy90aGVtZSc7XG5pbXBvcnQgeyBqc3ggfSBmcm9tICd0aGVtZS11aSc7XG5pbXBvcnQgeyBUaGVtZVByb3ZpZGVyIH0gZnJvbSAndGhlbWUtdWknO1xuaW1wb3J0IHsgcmVxdWVzdEludGVydmFsIH0gZnJvbSAnLi4vcGFydHMvdXRpbHMnO1xuXG5sZXQgZnMgPSB0aGVtZS5mb250U2l6ZXNbMF07XG5cbmxldCBvbmNlID0gZmFsc2U7XG5sZXQgc2l6ZSA9IDE0O1xuXG5sZXQgc3BlY2lhbF9rZXlzID0gJ3g/ZXcnLnNwbGl0KCcnKTtcblxuT2JqZWN0LmZyb21FbnRyaWVzID0gYXJyID0+XG4gIE9iamVjdC5hc3NpZ24oe30sIC4uLkFycmF5LmZyb20oYXJyLCAoW2ssIHZdKSA9PiAoeyBba106IHYgfSkpKTtcblxubGV0IHhwID0gNDtcbmxldCB5cCA9IDQ7XG5cbmNvbnN0IEhvbWUgPSAoKSA9PiB7XG4gIGxldCBbZGltZW5zaW9ucywgc2V0RGltZW5zaW9uc10gPSB1c2VTdGF0ZShbbnVsbCwgbnVsbF0pO1xuICBsZXQgW21vZGUsIHNldE1vZGVdID0gdXNlU3RhdGUoJ2RyYXcnKTtcblxuICBsZXQgY2FudmFzUmVmID0gdXNlUmVmKCk7XG4gIGxldCBvdmVybGF5Q2FudmFzUmVmID0gdXNlUmVmKCk7XG5cbiAgbGV0IHJlcXVlc3RSZWYgPSB1c2VSZWYoKTtcbiAgbGV0IGtleW1hcCA9IHVzZVJlZih7fSk7XG4gIGxldCBjb29yZGluYXRlcyA9IHVzZVJlZihbMCwgMF0pO1xuICBsZXQgdmVydGljYWwgPSB1c2VSZWYobnVsbCk7XG4gIGxldCBob3Jpem9udGFsID0gdXNlUmVmKG51bGwpO1xuICBsZXQgYmFja3NsYXNoID0gdXNlUmVmKG51bGwpO1xuICBsZXQgc2xhc2ggPSB1c2VSZWYobnVsbCk7XG4gIGxldCBbaGVscCwgdG9nZ2xlSGVscF0gPSB1c2VTdGF0ZSh0cnVlKTtcblxuICBmdW5jdGlvbiBLZXlUaXAobGV0dGVyKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxzcGFuXG4gICAgICAgIGNsYXNzTmFtZT1cImtleXRpcFwiXG4gICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICBrZXltYXAuY3VycmVudFtsZXR0ZXJdID0gdHJ1ZTtcbiAgICAgICAgICBrZXlBY3Rpb24obGV0dGVyLCBmYWxzZSk7XG4gICAgICAgICAga2V5bWFwLmN1cnJlbnRbbGV0dGVyXSA9IGZhbHNlO1xuICAgICAgICB9fVxuICAgICAgICBzeD17e1xuICAgICAgICAgIG91dGxpbmU6ICdzb2xpZCAxcHggYmxhY2snLFxuICAgICAgICAgIHdpZHRoOiAnMmNoJyxcbiAgICAgICAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxuICAgICAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAgICAgICAgIHVzZXJTZWxlY3Q6ICdub25lJyxcbiAgICAgICAgICBjdXJzb3I6ICdkZWZhdWx0JyxcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAge2xldHRlcn1cbiAgICAgIDwvc3Bhbj5cbiAgICApO1xuICB9XG5cbiAgZnVuY3Rpb24ga2V5QWN0aW9uKGtleSwgcmVwZWF0KSB7XG4gICAgbGV0IGNhbnZhc193aWR0aCA9IE1hdGguZmxvb3IoY2FudmFzUmVmLmN1cnJlbnQub2Zmc2V0V2lkdGgpO1xuICAgIGxldCBjYW52YXNfaGVpZ2h0ID0gTWF0aC5mbG9vcihjYW52YXNSZWYuY3VycmVudC5vZmZzZXRIZWlnaHQpO1xuXG4gICAgbGV0IGdyaWRfd2lkdGggPSBNYXRoLmZsb29yKChjYW52YXNfd2lkdGggLSB4cCAqIDIpIC8gc2l6ZSkgKiBzaXplO1xuICAgIGxldCBncmlkX2hlaWdodCA9IE1hdGguZmxvb3IoKGNhbnZhc19oZWlnaHQgLSB5cCAqIDIpIC8gc2l6ZSkgKiBzaXplO1xuXG4gICAgbGV0IGN0eCA9IGNhbnZhc1JlZi5jdXJyZW50LmdldENvbnRleHQoJzJkJyk7XG4gICAgY3R4LmZpbGxTdHlsZSA9ICdibGFjayc7XG5cbiAgICBsZXQgX21vZGUgPSBtb2RlO1xuXG4gICAgaWYgKHNwZWNpYWxfa2V5cy5pbmNsdWRlcyhrZXkpKSB7XG4gICAgICBpZiAoa2V5ID09PSAnZScgJiYgIXJlcGVhdCkge1xuICAgICAgICBpZiAoX21vZGUgPT09ICdkcmF3Jykge1xuICAgICAgICAgIF9tb2RlID0gJ2VyYXNlJztcbiAgICAgICAgICBzZXRNb2RlKF9tb2RlKTtcbiAgICAgICAgfSBlbHNlIGlmIChfbW9kZSA9PT0gJ2VyYXNlJykge1xuICAgICAgICAgIF9tb2RlID0gJ2RyYXcnO1xuICAgICAgICAgIHNldE1vZGUoX21vZGUpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKGtleSA9PT0gJ3gnICYmICFyZXBlYXQpIHtcbiAgICAgICAgY2xlYXJHcmlkKCk7XG4gICAgICB9IGVsc2UgaWYgKGtleSA9PT0gJ3cnICYmICFyZXBlYXQpIHtcbiAgICAgICAgbGV0IGVuY29kZWQgPSBjYW52YXNSZWYuY3VycmVudC50b0RhdGFVUkwoJ2ltYWdlL3BuZycpO1xuICAgICAgICBsZXQgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICAgICAgbGluay5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCBlbmNvZGVkKTtcbiAgICAgICAgbGluay5zZXRBdHRyaWJ1dGUoJ2Rvd25sb2FkJywgJ2V0Y2gucG5nJyk7XG4gICAgICAgIGxpbmsuZGlzcGF0Y2hFdmVudChcbiAgICAgICAgICBuZXcgTW91c2VFdmVudChgY2xpY2tgLCB7XG4gICAgICAgICAgICBidWJibGVzOiB0cnVlLFxuICAgICAgICAgICAgY2FuY2VsYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIHZpZXc6IHdpbmRvdyxcbiAgICAgICAgICB9KVxuICAgICAgICApO1xuICAgICAgICByZXR1cm47XG4gICAgICB9IGVsc2UgaWYgKGtleSA9PT0gJz8nICYmICFyZXBlYXQpIHtcbiAgICAgICAgdG9nZ2xlSGVscCghaGVscCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoa2V5ID09PSAnaW5pdCcpIHtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSAnd2hpdGUnO1xuICAgICAgY3R4LmZpbGxSZWN0KDAsIDAsIGNhbnZhc193aWR0aCwgY2FudmFzX2hlaWdodCk7XG4gICAgfVxuXG4gICAgbGV0IG9jdHggPSBvdmVybGF5Q2FudmFzUmVmLmN1cnJlbnQuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICBvY3R4LnN0cm9rZVN0eWxlID0gX21vZGUgPT09ICdkcmF3JyA/ICdsaW1lZ3JlZW4nIDogJ2hvdHBpbmsnO1xuICAgIGxldCBvc3Ryb2tlID0gNDtcbiAgICBvY3R4LmxpbmVXaWR0aCA9IG9zdHJva2U7XG5cbiAgICBsZXQgY3VycmVudCA9IGNvb3JkaW5hdGVzLmN1cnJlbnQ7XG5cbiAgICBsZXQgaW5jID0gc2l6ZTtcbiAgICBsZXQgbW9kaWZ5ID0gWzAsIDBdO1xuICAgIGlmIChrZXltYXAuY3VycmVudFsnaiddKSBtb2RpZnlbMV0gKz0gaW5jO1xuICAgIGlmIChrZXltYXAuY3VycmVudFsnayddKSBtb2RpZnlbMV0gKz0gLWluYztcbiAgICBpZiAoa2V5bWFwLmN1cnJlbnRbJ2gnXSkgbW9kaWZ5WzBdICs9IC1pbmM7XG4gICAgaWYgKGtleW1hcC5jdXJyZW50WydsJ10pIG1vZGlmeVswXSArPSBpbmM7XG5cbiAgICBsZXQgbmV4dCA9IFtjdXJyZW50WzBdICsgbW9kaWZ5WzBdLCBjdXJyZW50WzFdICsgbW9kaWZ5WzFdXTtcblxuICAgIGlmIChuZXh0WzBdIDwgMCkgbmV4dFswXSA9IGdyaWRfd2lkdGggLSBzaXplICogMjtcbiAgICBpZiAobmV4dFswXSA+PSBncmlkX3dpZHRoIC0gc2l6ZSkgbmV4dFswXSA9IDA7XG4gICAgaWYgKG5leHRbMV0gPCAwKSBuZXh0WzFdID0gZ3JpZF9oZWlnaHQgLSBzaXplICogMjtcbiAgICBpZiAobmV4dFsxXSA+PSBncmlkX2hlaWdodCAtIHNpemUpIG5leHRbMV0gPSAwO1xuICAgIGNvb3JkaW5hdGVzLmN1cnJlbnQgPSBuZXh0O1xuXG4gICAgLy8gbW9kaWZ5IGRyYXdpbmdcbiAgICBsZXQgYyA9IG5leHRbMF0gLyBzaXplO1xuICAgIGxldCByID0gbmV4dFsxXSAvIHNpemU7XG5cbiAgICBsZXQgbmV3X3ZhbCA9IF9tb2RlID09PSAnZHJhdycgPyB0cnVlIDogZmFsc2U7XG4gICAgaWYgKGtleW1hcC5jdXJyZW50WydhJ10pIHtcbiAgICAgIGxldCBpbmRleCA9IHIgKiAoZ3JpZF93aWR0aCAvIHNpemUgKyAxKSArIGM7XG4gICAgICB2ZXJ0aWNhbC5jdXJyZW50W2luZGV4XSA9IG5ld192YWw7XG4gICAgfVxuICAgIGlmIChrZXltYXAuY3VycmVudFsnZCddKSB7XG4gICAgICBsZXQgaW5kZXggPSAociArIDEpICogKGdyaWRfd2lkdGggLyBzaXplICsgMSkgKyBjO1xuICAgICAgaG9yaXpvbnRhbC5jdXJyZW50W2luZGV4XSA9IG5ld192YWw7XG4gICAgfVxuICAgIGlmIChrZXltYXAuY3VycmVudFsncyddKSB7XG4gICAgICBsZXQgaW5kZXggPSByICogKGdyaWRfd2lkdGggLyBzaXplICsgMSkgKyBjO1xuICAgICAgaG9yaXpvbnRhbC5jdXJyZW50W2luZGV4XSA9IG5ld192YWw7XG4gICAgfVxuICAgIGlmIChrZXltYXAuY3VycmVudFsnZiddKSB7XG4gICAgICBsZXQgaW5kZXggPSByICogKGdyaWRfd2lkdGggLyBzaXplICsgMSkgKyBjICsgMTtcbiAgICAgIHZlcnRpY2FsLmN1cnJlbnRbaW5kZXhdID0gbmV3X3ZhbDtcbiAgICB9XG4gICAgaWYgKGtleW1hcC5jdXJyZW50WydnJ10pIHtcbiAgICAgIGxldCBpbmRleCA9IHIgKiAoZ3JpZF93aWR0aCAvIHNpemUgKyAxKSArIGM7XG4gICAgICBiYWNrc2xhc2guY3VycmVudFtpbmRleF0gPSBuZXdfdmFsO1xuICAgIH1cbiAgICBpZiAoa2V5bWFwLmN1cnJlbnRbJ3InXSkge1xuICAgICAgbGV0IGluZGV4ID0gciAqIChncmlkX3dpZHRoIC8gc2l6ZSArIDEpICsgYztcbiAgICAgIHNsYXNoLmN1cnJlbnRbaW5kZXhdID0gbmV3X3ZhbDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBtb3ZlVG8oY3R4LCB4LCB5KSB7XG4gICAgICBjdHgubW92ZVRvKHggKyB4cCwgeSArIHlwKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBsaW5lVG8oY3R4LCB4LCB5KSB7XG4gICAgICBjdHgubGluZVRvKHggKyB4cCwgeSArIHlwKTtcbiAgICB9XG5cbiAgICBjdHguY2xlYXJSZWN0KDAsIDAsIGNhbnZhc193aWR0aCwgY2FudmFzX2hlaWdodCk7XG5cbiAgICBpZiAodmVydGljYWwuY3VycmVudCAhPT0gbnVsbCkge1xuICAgICAgbGV0IHZhID0gdmVydGljYWwuY3VycmVudDtcbiAgICAgIGxldCBoYSA9IGhvcml6b250YWwuY3VycmVudDtcbiAgICAgIGxldCBiYSA9IGJhY2tzbGFzaC5jdXJyZW50O1xuICAgICAgbGV0IHNhID0gc2xhc2guY3VycmVudDtcblxuICAgICAgbGV0IGRjID0gZ3JpZF93aWR0aCAvIHNpemUgKyAxO1xuICAgICAgbGV0IGRyID0gZ3JpZF9oZWlnaHQgLyBzaXplICsgMTtcblxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB2YS5sZW5ndGg7IGkrKykge1xuICAgICAgICBsZXQgdiA9IHZhW2ldO1xuICAgICAgICBsZXQgaCA9IGhhW2ldO1xuICAgICAgICBsZXQgYiA9IGJhW2ldO1xuICAgICAgICBsZXQgcyA9IHNhW2ldO1xuXG4gICAgICAgIGxldCBjID0gaSAlIGRjO1xuICAgICAgICBsZXQgciA9IE1hdGguZmxvb3IoaSAvIGRjKTtcblxuICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgIGlmICh2ID09PSB0cnVlKSB7XG4gICAgICAgICAgbW92ZVRvKGN0eCwgYyAqIHNpemUsIHIgKiBzaXplKTtcbiAgICAgICAgICBsaW5lVG8oY3R4LCBjICogc2l6ZSwgciAqIHNpemUgKyBzaXplKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaCA9PT0gdHJ1ZSkge1xuICAgICAgICAgIG1vdmVUbyhjdHgsIGMgKiBzaXplLCByICogc2l6ZSk7XG4gICAgICAgICAgbGluZVRvKGN0eCwgYyAqIHNpemUgKyBzaXplLCByICogc2l6ZSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGIgPT09IHRydWUpIHtcbiAgICAgICAgICBtb3ZlVG8oY3R4LCBjICogc2l6ZSArIHNpemUsIHIgKiBzaXplICsgc2l6ZSk7XG4gICAgICAgICAgbGluZVRvKGN0eCwgYyAqIHNpemUsIHIgKiBzaXplKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocyA9PT0gdHJ1ZSkge1xuICAgICAgICAgIG1vdmVUbyhjdHgsIGMgKiBzaXplLCByICogc2l6ZSArIHNpemUpO1xuICAgICAgICAgIGxpbmVUbyhjdHgsIGMgKiBzaXplICsgc2l6ZSwgciAqIHNpemUpO1xuICAgICAgICB9XG4gICAgICAgIGN0eC5zdHJva2UoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBvY3R4LmNsZWFyUmVjdCgwLCAwLCB3aW5kb3cuaW5uZXJXaWR0aCwgd2luZG93LmlubmVySGVpZ2h0KTtcbiAgICBvY3R4LnN0cm9rZVJlY3QoXG4gICAgICBjb29yZGluYXRlcy5jdXJyZW50WzBdIC0gb3N0cm9rZSAvIDIgKyB4cCxcbiAgICAgIGNvb3JkaW5hdGVzLmN1cnJlbnRbMV0gLSBvc3Ryb2tlIC8gMiArIHlwLFxuICAgICAgc2l6ZSArIG9zdHJva2UsXG4gICAgICBzaXplICsgb3N0cm9rZVxuICAgICk7XG4gIH1cblxuICBmdW5jdGlvbiBkb3duSGFuZGxlcihlKSB7XG4gICAga2V5bWFwLmN1cnJlbnRbZS5rZXldID0gdHJ1ZTtcbiAgICBrZXlBY3Rpb24oZS5rZXksIGUucmVwZWF0KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHVwSGFuZGxlcihlKSB7XG4gICAga2V5bWFwLmN1cnJlbnRbZS5rZXldID0gZmFsc2U7XG4gIH1cblxuICBmdW5jdGlvbiBjbGVhckdyaWQoKSB7XG4gICAgbGV0IGNhbnZhc193aWR0aCA9IE1hdGguZmxvb3IoY2FudmFzUmVmLmN1cnJlbnQub2Zmc2V0V2lkdGgpO1xuICAgIGxldCBjYW52YXNfaGVpZ2h0ID0gTWF0aC5mbG9vcihjYW52YXNSZWYuY3VycmVudC5vZmZzZXRIZWlnaHQpO1xuXG4gICAgbGV0IGdyaWRfd2lkdGggPSBNYXRoLmZsb29yKChjYW52YXNfd2lkdGggLSB4cCAqIDIpIC8gc2l6ZSkgKiBzaXplO1xuICAgIGxldCBncmlkX2hlaWdodCA9IE1hdGguZmxvb3IoKGNhbnZhc19oZWlnaHQgLSB5cCAqIDIpIC8gc2l6ZSkgKiBzaXplO1xuXG4gICAgbGV0IGNvbHVtbnMgPSBncmlkX3dpZHRoIC8gc2l6ZSArIDE7XG4gICAgbGV0IHJvd3MgPSBncmlkX2hlaWdodCAvIHNpemUgKyAxO1xuXG4gICAgdmVydGljYWwuY3VycmVudCA9IEFycmF5KGNvbHVtbnMgKiByb3dzKS5maWxsKGZhbHNlKTtcbiAgICBob3Jpem9udGFsLmN1cnJlbnQgPSB2ZXJ0aWNhbC5jdXJyZW50LnNsaWNlKCk7XG4gICAgYmFja3NsYXNoLmN1cnJlbnQgPSB2ZXJ0aWNhbC5jdXJyZW50LnNsaWNlKCk7XG4gICAgc2xhc2guY3VycmVudCA9IHZlcnRpY2FsLmN1cnJlbnQuc2xpY2UoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHNldFdpbmRvd1NpemUoKSB7XG4gICAgY29uc29sZS5sb2coJ3NldCBzaXplJyk7XG4gICAgbGV0IGNhbnZhc193aWR0aCA9IE1hdGguZmxvb3Iod2luZG93LmlubmVyV2lkdGgpO1xuICAgIGxldCBjYW52YXNfaGVpZ2h0ID0gTWF0aC5mbG9vcih3aW5kb3cuaW5uZXJIZWlnaHQpO1xuXG4gICAgY29uc29sZS5sb2coY2FudmFzX3dpZHRoLCBjYW52YXNfaGVpZ2h0KTtcblxuICAgIGNsZWFyR3JpZCgpO1xuXG4gICAgbGV0IGRwciA9IHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvIHx8IDE7XG5cbiAgICBjYW52YXNSZWYuY3VycmVudC53aWR0aCA9IGNhbnZhc193aWR0aCAqIGRwcjtcbiAgICBjYW52YXNSZWYuY3VycmVudC5oZWlnaHQgPSBjYW52YXNfaGVpZ2h0ICogZHByO1xuICAgIGxldCBjdHggPSBjYW52YXNSZWYuY3VycmVudC5nZXRDb250ZXh0KCcyZCcpO1xuICAgIGN0eC5zY2FsZShkcHIsIGRwcik7XG5cbiAgICBvdmVybGF5Q2FudmFzUmVmLmN1cnJlbnQud2lkdGggPSBjYW52YXNfd2lkdGggKiBkcHI7XG4gICAgb3ZlcmxheUNhbnZhc1JlZi5jdXJyZW50LmhlaWdodCA9IGNhbnZhc19oZWlnaHQgKiBkcHI7XG4gICAgbGV0IG9jdHggPSBvdmVybGF5Q2FudmFzUmVmLmN1cnJlbnQuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICBvY3R4LnNjYWxlKGRwciwgZHByKTtcblxuICAgIHNldERpbWVuc2lvbnMoW2NhbnZhc193aWR0aCwgY2FudmFzX2hlaWdodF0pO1xuICB9XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoIW9uY2UpIHtcbiAgICAgIHNldFdpbmRvd1NpemUoKTtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBrZXlBY3Rpb24oJ2luaXQnLCBmYWxzZSk7XG4gICAgICB9LCAwKTtcbiAgICAgIG9uY2UgPSB0cnVlO1xuICAgIH1cblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgZG93bkhhbmRsZXIpO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIHVwSGFuZGxlcik7XG4gICAgLy8gUmVtb3ZlIGV2ZW50IGxpc3RlbmVycyBvbiBjbGVhbnVwXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgZG93bkhhbmRsZXIpO1xuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleXVwJywgdXBIYW5kbGVyKTtcbiAgICB9O1xuICB9LCBbbW9kZSwgaGVscF0pO1xuXG4gIHJldHVybiAoXG4gICAgPFRoZW1lUHJvdmlkZXIgdGhlbWU9e3RoZW1lfT5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxIZWFkPlxuICAgICAgICAgIDx0aXRsZT5IZXg8L3RpdGxlPlxuICAgICAgICA8L0hlYWQ+XG4gICAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICAgICAgQGZvbnQtZmFjZSB7XG4gICAgICAgICAgICBmb250LWZhbWlseTogJ2N1c3RvbSc7XG4gICAgICAgICAgICBzcmM6IHVybCgnL3N0YXRpYy9mb250cy9JQk1QbGV4TW9uby1SZWd1bGFyLndvZmYyJykgZm9ybWF0KCd3b2ZmMicpLFxuICAgICAgICAgICAgICB1cmwoJy9zdGF0aWMvZm9udHMvSUJNUGxleE1vbm8tUmVndWxhci53b2ZmJykgZm9ybWF0KCd3b2ZmJyk7XG4gICAgICAgICAgfVxuICAgICAgICAgICoge1xuICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgICB9XG4gICAgICAgICAgaHRtbCB7XG4gICAgICAgICAgICBmb250LWZhbWlseTogY3VzdG9tLCBtb25vc3BhY2U7XG4gICAgICAgICAgICBmb250LXNpemU6ICR7dGhlbWUuZm9udFNpemVzWzBdfXB4O1xuICAgICAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogJHt0aGVtZS5saW5lSGVpZ2h0cy5ib2R5fTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYm9keSB7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgIH1cbiAgICAgICAgICB0ZXh0YXJlYSB7XG4gICAgICAgICAgICBmb250LWZhbWlseTogaW5oZXJpdDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiBpbmhlcml0O1xuICAgICAgICAgIH1cbiAgICAgICAgICBwIHtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmtleXRpcCArIC5rZXl0aXAge1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDFweDtcbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgPGNhbnZhc1xuICAgICAgICAgIHJlZj17Y2FudmFzUmVmfVxuICAgICAgICAgIHN4PXt7IGJhY2tncm91bmQ6ICd3aGl0ZScgfX1cbiAgICAgICAgICBjc3M9e3tcbiAgICAgICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgICAgICAgbGVmdDogMCxcbiAgICAgICAgICAgIHRvcDogMCxcbiAgICAgICAgICAgIHdpZHRoOiBkaW1lbnNpb25zWzBdICsgc2l6ZSxcbiAgICAgICAgICAgIGhlaWdodDogZGltZW5zaW9uc1sxXSArIHNpemUsXG4gICAgICAgICAgICBkaXNwbGF5OiBkaW1lbnNpb25zWzBdICE9PSBudWxsID8gJ2Jsb2NrJyA6ICdub25lJyxcbiAgICAgICAgICB9fVxuICAgICAgICAvPlxuICAgICAgICA8Y2FudmFzXG4gICAgICAgICAgcmVmPXtvdmVybGF5Q2FudmFzUmVmfVxuICAgICAgICAgIHN4PXt7IGJhY2tncm91bmQ6ICd0cmFuc3BhcmVudCcgfX1cbiAgICAgICAgICBjc3M9e3tcbiAgICAgICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgICAgICAgbGVmdDogMCxcbiAgICAgICAgICAgIHRvcDogMCxcbiAgICAgICAgICAgIHdpZHRoOiBkaW1lbnNpb25zWzBdICsgc2l6ZSxcbiAgICAgICAgICAgIGhlaWdodDogZGltZW5zaW9uc1sxXSArIHNpemUsXG5cbiAgICAgICAgICAgIGRpc3BsYXk6IGRpbWVuc2lvbnNbMF0gIT09IG51bGwgPyAnYmxvY2snIDogJ25vbmUnLFxuICAgICAgICAgIH19XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdlxuICAgICAgICBjc3M9e3tcbiAgICAgICAgICBwb3NpdGlvbjogJ2ZpeGVkJyxcbiAgICAgICAgICBvdXRsaW5lOiAnc29saWQgMXB4IGJsYWNrJyxcbiAgICAgICAgICBkaXNwbGF5OiBoZWxwID8gJ2Jsb2NrJyA6ICdub25lJyxcbiAgICAgICAgICBtYXhXaWR0aDogYGNhbGMoMTAwJSAtICR7dGhlbWUuc3BhY2VbMF0gKiAyfXB4KWAsXG4gICAgICAgICAgYmFja2dyb3VuZDogJ3JnYmEoMjU1LDI1NSwyNTUsMC44KScsXG4gICAgICAgIH19XG4gICAgICAgIHN4PXt7IHB4OiAnMWNoJywgcGI6IDEsIHB0OiAxLCByaWdodDogMCwgYm90dG9tOiAwIH19XG4gICAgICA+XG4gICAgICAgIDxkaXYgc3g9e3sgbWFyZ2luQm90dG9tOiAwIH19PlxuICAgICAgICAgIEhleCBpcyBhIGtleWJvYXJkLWRyaXZlbiwgZ3JpZC1iYXNlZCBkcmF3aW5nIHRvb2wuXG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IHN0eWxlPXt7IHBvc2l0aW9uOiAncmVsYXRpdmUnIH19PlxuICAgICAgICAgIDxkaXYgc3g9e3sgbWFyZ2luQm90dG9tOiAwIH19PlxuICAgICAgICAgICAge0tleVRpcCgnZScpfSB0b2dnbGUgbW9kZTp7JyAnfVxuICAgICAgICAgICAge1snZHJhdycsICdlcmFzZSddLm1hcChtID0+IChcbiAgICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICBrZXk9e2Btb2RlXyR7bX1gfVxuICAgICAgICAgICAgICAgIHN4PXt7IHB4OiAnMWNoJyB9fVxuICAgICAgICAgICAgICAgIGNzcz17e1xuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDpcbiAgICAgICAgICAgICAgICAgICAgbSA9PT0gbW9kZVxuICAgICAgICAgICAgICAgICAgICAgID8gbW9kZSA9PT0gJ2RyYXcnXG4gICAgICAgICAgICAgICAgICAgICAgICA/ICdsaW1lZ3JlZW4nXG4gICAgICAgICAgICAgICAgICAgICAgICA6ICdob3RwaW5rJ1xuICAgICAgICAgICAgICAgICAgICAgIDogJ25vbmUnLFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7bX1cbiAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBzeD17eyBtYjogMSB9fT5EcmF3ICYgbW92ZTo8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNzcz17eyBkaXNwbGF5OiAnZmxleCcgfX0+XG4gICAgICAgICAgICA8ZGl2IHN4PXt7IGRpc3BsYXk6ICdmbGV4JywgbWFyZ2luUmlnaHQ6ICcyY2gnIH19PlxuICAgICAgICAgICAgICB7W1xuICAgICAgICAgICAgICAgIFswLCAwLCAwLCBzaXplXSxcbiAgICAgICAgICAgICAgICBbMCwgMCwgc2l6ZSwgMF0sXG4gICAgICAgICAgICAgICAgWzAsIHNpemUsIHNpemUsIHNpemVdLFxuICAgICAgICAgICAgICAgIFtzaXplLCAwLCBzaXplLCBzaXplXSxcbiAgICAgICAgICAgICAgICBbc2l6ZSwgMCwgMCwgc2l6ZV0sXG4gICAgICAgICAgICAgICAgWzAsIDAsIHNpemUsIHNpemVdLFxuICAgICAgICAgICAgICBdLm1hcCgoYywgaSkgPT4gKFxuICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImtleXRpcFwiXG4gICAgICAgICAgICAgICAgICBjc3M9e3tcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6ICcyY2gnLFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IHRoZW1lLnNwYWNlWzBdLFxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nTGVmdDogYGNhbGMoMWNoIC0gJHtzaXplIC8gMn1weClgLFxuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8c3ZnIHZpZXdCb3g9e2AwIDAgJHtzaXplfSAke3NpemV9YH0+XG4gICAgICAgICAgICAgICAgICAgIDxsaW5lXG4gICAgICAgICAgICAgICAgICAgICAgeDE9e2NbMF19XG4gICAgICAgICAgICAgICAgICAgICAgeTE9e2NbMV19XG4gICAgICAgICAgICAgICAgICAgICAgeDI9e2NbMl19XG4gICAgICAgICAgICAgICAgICAgICAgeTI9e2NbM119XG4gICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlPVwiYmxhY2tcIlxuICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZVdpZHRoPXtpID4gMyA/IDEgOiAyfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICB7WyfihpAnLCAn4oaTJywgJ+KGkScsICfihpInXS5tYXAoYSA9PiAoXG4gICAgICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImtleXRpcFwiXG4gICAgICAgICAgICAgICAgICBrZXk9e2BhcnJvd18ke2F9YH1cbiAgICAgICAgICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogJzJjaCcsXG4gICAgICAgICAgICAgICAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIHthfVxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IHN4PXt7IGRpc3BsYXk6ICdmbGV4JyB9fT5cbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luUmlnaHQ6ICcyY2gnIH19PlxuICAgICAgICAgICAgICB7S2V5VGlwKCdhJyl9XG4gICAgICAgICAgICAgIHtLZXlUaXAoJ3MnKX1cbiAgICAgICAgICAgICAge0tleVRpcCgnZCcpfVxuICAgICAgICAgICAgICB7S2V5VGlwKCdmJyl9XG4gICAgICAgICAgICAgIHtLZXlUaXAoJ3InKX1cbiAgICAgICAgICAgICAge0tleVRpcCgnZycpfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICB7S2V5VGlwKCdoJyl9XG4gICAgICAgICAgICAgIHtLZXlUaXAoJ2onKX1cbiAgICAgICAgICAgICAge0tleVRpcCgnaycpfVxuICAgICAgICAgICAgICB7S2V5VGlwKCdsJyl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICBtdDogMCxcbiAgICAgICAgICAgICAgbWI6IDEsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIFNwZWNpYWw6XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIHtLZXlUaXAoJ3cnKX0gc2F2ZSBwbmcmbmJzcDsge0tleVRpcCgneCcpfSBjbGVhciZuYnNwOyB7S2V5VGlwKCc/Jyl9eycgJ31cbiAgICAgICAgICAgIHRvZ2dsZSBoZWxwXG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICB7aGVscCA/IG51bGwgOiAoXG4gICAgICAgIDxkaXZcbiAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgcG9zaXRpb246ICdmaXhlZCcsXG4gICAgICAgICAgICByaWdodDogMCxcbiAgICAgICAgICAgIGJvdHRvbTogMCxcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAge0tleVRpcCgnPycpfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICl9XG4gICAgPC9UaGVtZVByb3ZpZGVyPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcbiJdfQ== */\n/*@ sourceURL=/Users/grant.custer/Sites/constraint_systems/hex/pages/index.js */")), Object(theme_ui__WEBPACK_IMPORTED_MODULE_9__["jsx"])("canvas", {
    ref: canvasRef,
    sx: {
      background: 'white'
    },
    css: {
      position: 'absolute',
      left: 0,
      top: 0,
      width: dimensions[0] + size,
      height: dimensions[1] + size,
      display: dimensions[0] !== null ? 'block' : 'none'
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a.dynamic([["3684514086", [_parts_theme__WEBPACK_IMPORTED_MODULE_8__["default"].fontSizes[0], _parts_theme__WEBPACK_IMPORTED_MODULE_8__["default"].lineHeights.body]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 322
    },
    __self: this
  }), Object(theme_ui__WEBPACK_IMPORTED_MODULE_9__["jsx"])("canvas", {
    ref: overlayCanvasRef,
    sx: {
      background: 'transparent'
    },
    css: {
      position: 'absolute',
      left: 0,
      top: 0,
      width: dimensions[0] + size,
      height: dimensions[1] + size,
      display: dimensions[0] !== null ? 'block' : 'none'
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a.dynamic([["3684514086", [_parts_theme__WEBPACK_IMPORTED_MODULE_8__["default"].fontSizes[0], _parts_theme__WEBPACK_IMPORTED_MODULE_8__["default"].lineHeights.body]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 334
    },
    __self: this
  })), Object(theme_ui__WEBPACK_IMPORTED_MODULE_9__["jsx"])("div", {
    css: {
      position: 'fixed',
      outline: 'solid 1px black',
      display: help ? 'block' : 'none',
      maxWidth: "calc(100% - ".concat(_parts_theme__WEBPACK_IMPORTED_MODULE_8__["default"].space[0] * 2, "px)"),
      background: 'rgba(255,255,255,0.8)'
    },
    sx: {
      px: '1ch',
      pb: 1,
      pt: 1,
      right: 0,
      bottom: 0
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 349
    },
    __self: this
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_9__["jsx"])("div", {
    sx: {
      marginBottom: 0
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 359
    },
    __self: this
  }, "Hex is a keyboard-driven, grid-based drawing tool."), Object(theme_ui__WEBPACK_IMPORTED_MODULE_9__["jsx"])("div", {
    style: {
      position: 'relative'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 362
    },
    __self: this
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_9__["jsx"])("div", {
    sx: {
      marginBottom: 0
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 363
    },
    __self: this
  }, KeyTip('e'), " toggle mode:", ' ', ['draw', 'erase'].map(function (m) {
    return Object(theme_ui__WEBPACK_IMPORTED_MODULE_9__["jsx"])("span", {
      key: "mode_".concat(m),
      sx: {
        px: '1ch'
      },
      css: {
        background: m === mode ? mode === 'draw' ? 'limegreen' : 'hotpink' : 'none'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 366
      },
      __self: this
    }, m);
  })), Object(theme_ui__WEBPACK_IMPORTED_MODULE_9__["jsx"])("div", {
    sx: {
      mb: 1
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 382
    },
    __self: this
  }, "Draw & move:"), Object(theme_ui__WEBPACK_IMPORTED_MODULE_9__["jsx"])("div", {
    css: {
      display: 'flex'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 383
    },
    __self: this
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_9__["jsx"])("div", {
    sx: {
      display: 'flex',
      marginRight: '2ch'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 384
    },
    __self: this
  }, [[0, 0, 0, size], [0, 0, size, 0], [0, size, size, size], [size, 0, size, size], [size, 0, 0, size], [0, 0, size, size]].map(function (c, i) {
    return Object(theme_ui__WEBPACK_IMPORTED_MODULE_9__["jsx"])("div", {
      className: "keytip",
      css: {
        width: '2ch',
        height: _parts_theme__WEBPACK_IMPORTED_MODULE_8__["default"].space[0],
        paddingLeft: "calc(1ch - ".concat(size / 2, "px)")
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 393
      },
      __self: this
    }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_9__["jsx"])("svg", {
      viewBox: "0 0 ".concat(size, " ").concat(size),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 401
      },
      __self: this
    }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_9__["jsx"])("line", {
      x1: c[0],
      y1: c[1],
      x2: c[2],
      y2: c[3],
      stroke: "black",
      strokeWidth: i > 3 ? 1 : 2,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 402
      },
      __self: this
    })));
  })), Object(theme_ui__WEBPACK_IMPORTED_MODULE_9__["jsx"])("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 414
    },
    __self: this
  }, ['←', '↓', '↑', '→'].map(function (a) {
    return Object(theme_ui__WEBPACK_IMPORTED_MODULE_9__["jsx"])("span", {
      className: "keytip",
      key: "arrow_".concat(a),
      sx: {
        display: 'inline-block',
        width: '2ch',
        textAlign: 'center'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 416
      },
      __self: this
    }, a);
  }))), Object(theme_ui__WEBPACK_IMPORTED_MODULE_9__["jsx"])("div", {
    sx: {
      display: 'flex'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 430
    },
    __self: this
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_9__["jsx"])("div", {
    style: {
      marginRight: '2ch'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 431
    },
    __self: this
  }, KeyTip('a'), KeyTip('s'), KeyTip('d'), KeyTip('f'), KeyTip('r'), KeyTip('g')), Object(theme_ui__WEBPACK_IMPORTED_MODULE_9__["jsx"])("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 439
    },
    __self: this
  }, KeyTip('h'), KeyTip('j'), KeyTip('k'), KeyTip('l'))), Object(theme_ui__WEBPACK_IMPORTED_MODULE_9__["jsx"])("div", {
    sx: {
      mt: 0,
      mb: 1
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 446
    },
    __self: this
  }, "Special:"), Object(theme_ui__WEBPACK_IMPORTED_MODULE_9__["jsx"])("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 454
    },
    __self: this
  }, KeyTip('w'), " save png\xA0 ", KeyTip('x'), " clear\xA0 ", KeyTip('?'), ' ', "toggle help"))), help ? null : Object(theme_ui__WEBPACK_IMPORTED_MODULE_9__["jsx"])("div", {
    sx: {
      position: 'fixed',
      right: 0,
      bottom: 0
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 461
    },
    __self: this
  }, KeyTip('?')));
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

})
//# sourceMappingURL=index.js.372d23d2eb4c83d5308a.hot-update.js.map