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
    var grid_width = canvas_width - xp * 2;
    var grid_height = canvas_height - yp * 2;
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
    var canvas_width = canvasRef.current.offsetWidth;
    var canvas_height = canvasRef.current.offsetHeight;
    console.log(canvas_width, canvas_height);
    var grid_width = canvas_width - xp * 2;
    var grid_height = canvas_height - yp * 2;
    var columns = grid_width / size + 1;
    var rows = grid_height / size + 1;
    vertical.current = Array(columns * rows).fill(false);
    horizontal.current = vertical.current.slice();
    backslash.current = vertical.current.slice();
    slash.current = vertical.current.slice();
  }

  function setWindowSize() {
    var grid_width = Math.floor((window.innerWidth - xp * 2) / size) * size;
    var grid_height = Math.floor((window.innerHeight - yp * 2) / size) * size;
    var canvas_width = grid_width + xp * 2;
    var canvas_height = grid_height + yp * 2;
    var dpr = window.devicePixelRatio || 1;
    canvasRef.current.width = canvas_width * dpr;
    canvasRef.current.height = canvas_height * dpr;
    var ctx = canvasRef.current.getContext('2d');
    ctx.scale(dpr, dpr);
    overlayCanvasRef.current.width = canvas_width * dpr;
    overlayCanvasRef.current.height = canvas_height * dpr;
    var octx = overlayCanvasRef.current.getContext('2d');
    octx.scale(dpr, dpr);
    setDimensions([canvas_width, canvas_height], function () {
      clearGrid();
    });
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
      lineNumber: 288
    },
    __self: this
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_9__["jsx"])("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a.dynamic([["1224738735", [_parts_theme__WEBPACK_IMPORTED_MODULE_8__["default"].fontSizes[0], _parts_theme__WEBPACK_IMPORTED_MODULE_8__["default"].lineHeights.body]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 289
    },
    __self: this
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_9__["jsx"])(next_head__WEBPACK_IMPORTED_MODULE_7___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 290
    },
    __self: this
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_9__["jsx"])("title", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a.dynamic([["1224738735", [_parts_theme__WEBPACK_IMPORTED_MODULE_8__["default"].fontSizes[0], _parts_theme__WEBPACK_IMPORTED_MODULE_8__["default"].lineHeights.body]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 291
    },
    __self: this
  }, "Hex")), Object(theme_ui__WEBPACK_IMPORTED_MODULE_9__["jsx"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
    id: "1224738735",
    dynamic: [_parts_theme__WEBPACK_IMPORTED_MODULE_8__["default"].fontSizes[0], _parts_theme__WEBPACK_IMPORTED_MODULE_8__["default"].lineHeights.body],
    __self: this
  }, "@font-face{font-family:'custom';src:url('/static/fonts/IBMPlexMono-Regular.woff2') format('woff2'), url('/static/fonts/IBMPlexMono-Regular.woff') format('woff');}*{box-sizing:border-box;}html{font-family:custom,monospace;font-size:".concat(_parts_theme__WEBPACK_IMPORTED_MODULE_8__["default"].fontSizes[0], "px;background:white;line-height:").concat(_parts_theme__WEBPACK_IMPORTED_MODULE_8__["default"].lineHeights.body, ";}body{margin:0;background:red;padding:10px;}textarea{font-family:inherit;font-size:inherit;line-height:inherit;}p{margin:0;}.keytip+.keytip{margin-left:1px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ncmFudC5jdXN0ZXIvU2l0ZXMvY29uc3RyYWludF9zeXN0ZW1zL2hleC9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFvUzJCLEFBR2tDLEFBS0MsQUFHUSxBQU1yQixBQUtXLEFBS1gsQUFHTyxTQVpELEFBVWpCLE9BR0EsSUFSb0IsQ0FsQjRDLENBSWhFLEVBVWUsS0FQNEIsUUFRM0MsQ0FJc0Isb0JBQ3RCLFlBWm1CLGlCQUN3Qix5Q0FDM0Msc0JBVEEiLCJmaWxlIjoiL1VzZXJzL2dyYW50LmN1c3Rlci9TaXRlcy9jb25zdHJhaW50X3N5c3RlbXMvaGV4L3BhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogQGpzeCBqc3ggKi9cbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZUNhbGxiYWNrIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcbmltcG9ydCB0aGVtZSBmcm9tICcuLi9wYXJ0cy90aGVtZSc7XG5pbXBvcnQgeyBqc3ggfSBmcm9tICd0aGVtZS11aSc7XG5pbXBvcnQgeyBUaGVtZVByb3ZpZGVyIH0gZnJvbSAndGhlbWUtdWknO1xuaW1wb3J0IHsgcmVxdWVzdEludGVydmFsIH0gZnJvbSAnLi4vcGFydHMvdXRpbHMnO1xuXG5sZXQgZnMgPSB0aGVtZS5mb250U2l6ZXNbMF07XG5cbmxldCBvbmNlID0gZmFsc2U7XG5sZXQgc2l6ZSA9IDE0O1xuXG5sZXQgc3BlY2lhbF9rZXlzID0gJ3g/ZXcnLnNwbGl0KCcnKTtcblxuT2JqZWN0LmZyb21FbnRyaWVzID0gYXJyID0+XG4gIE9iamVjdC5hc3NpZ24oe30sIC4uLkFycmF5LmZyb20oYXJyLCAoW2ssIHZdKSA9PiAoeyBba106IHYgfSkpKTtcblxubGV0IHhwID0gNDtcbmxldCB5cCA9IDQ7XG5cbmNvbnN0IEhvbWUgPSAoKSA9PiB7XG4gIGxldCBbZGltZW5zaW9ucywgc2V0RGltZW5zaW9uc10gPSB1c2VTdGF0ZShbbnVsbCwgbnVsbF0pO1xuICBsZXQgW21vZGUsIHNldE1vZGVdID0gdXNlU3RhdGUoJ2RyYXcnKTtcblxuICBsZXQgY2FudmFzUmVmID0gdXNlUmVmKCk7XG4gIGxldCBvdmVybGF5Q2FudmFzUmVmID0gdXNlUmVmKCk7XG5cbiAgbGV0IHJlcXVlc3RSZWYgPSB1c2VSZWYoKTtcbiAgbGV0IGtleW1hcCA9IHVzZVJlZih7fSk7XG4gIGxldCBjb29yZGluYXRlcyA9IHVzZVJlZihbMCwgMF0pO1xuICBsZXQgdmVydGljYWwgPSB1c2VSZWYobnVsbCk7XG4gIGxldCBob3Jpem9udGFsID0gdXNlUmVmKG51bGwpO1xuICBsZXQgYmFja3NsYXNoID0gdXNlUmVmKG51bGwpO1xuICBsZXQgc2xhc2ggPSB1c2VSZWYobnVsbCk7XG4gIGxldCBbaGVscCwgdG9nZ2xlSGVscF0gPSB1c2VTdGF0ZSh0cnVlKTtcblxuICBmdW5jdGlvbiBLZXlUaXAobGV0dGVyKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxzcGFuXG4gICAgICAgIGNsYXNzTmFtZT1cImtleXRpcFwiXG4gICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICBrZXltYXAuY3VycmVudFtsZXR0ZXJdID0gdHJ1ZTtcbiAgICAgICAgICBrZXlBY3Rpb24obGV0dGVyLCBmYWxzZSk7XG4gICAgICAgICAga2V5bWFwLmN1cnJlbnRbbGV0dGVyXSA9IGZhbHNlO1xuICAgICAgICB9fVxuICAgICAgICBzeD17e1xuICAgICAgICAgIG91dGxpbmU6ICdzb2xpZCAxcHggYmxhY2snLFxuICAgICAgICAgIHdpZHRoOiAnMmNoJyxcbiAgICAgICAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxuICAgICAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAgICAgICAgIHVzZXJTZWxlY3Q6ICdub25lJyxcbiAgICAgICAgICBjdXJzb3I6ICdkZWZhdWx0JyxcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAge2xldHRlcn1cbiAgICAgIDwvc3Bhbj5cbiAgICApO1xuICB9XG5cbiAgZnVuY3Rpb24ga2V5QWN0aW9uKGtleSwgcmVwZWF0KSB7XG4gICAgbGV0IGNhbnZhc193aWR0aCA9IE1hdGguZmxvb3IoY2FudmFzUmVmLmN1cnJlbnQub2Zmc2V0V2lkdGgpO1xuICAgIGxldCBjYW52YXNfaGVpZ2h0ID0gTWF0aC5mbG9vcihjYW52YXNSZWYuY3VycmVudC5vZmZzZXRIZWlnaHQpO1xuXG4gICAgbGV0IGdyaWRfd2lkdGggPSBjYW52YXNfd2lkdGggLSB4cCAqIDI7XG4gICAgbGV0IGdyaWRfaGVpZ2h0ID0gY2FudmFzX2hlaWdodCAtIHlwICogMjtcblxuICAgIGxldCBjdHggPSBjYW52YXNSZWYuY3VycmVudC5nZXRDb250ZXh0KCcyZCcpO1xuICAgIGN0eC5maWxsU3R5bGUgPSAnYmxhY2snO1xuXG4gICAgbGV0IF9tb2RlID0gbW9kZTtcblxuICAgIGlmIChzcGVjaWFsX2tleXMuaW5jbHVkZXMoa2V5KSkge1xuICAgICAgaWYgKGtleSA9PT0gJ2UnICYmICFyZXBlYXQpIHtcbiAgICAgICAgaWYgKF9tb2RlID09PSAnZHJhdycpIHtcbiAgICAgICAgICBfbW9kZSA9ICdlcmFzZSc7XG4gICAgICAgICAgc2V0TW9kZShfbW9kZSk7XG4gICAgICAgIH0gZWxzZSBpZiAoX21vZGUgPT09ICdlcmFzZScpIHtcbiAgICAgICAgICBfbW9kZSA9ICdkcmF3JztcbiAgICAgICAgICBzZXRNb2RlKF9tb2RlKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChrZXkgPT09ICd4JyAmJiAhcmVwZWF0KSB7XG4gICAgICAgIGNsZWFyR3JpZCgpO1xuICAgICAgfSBlbHNlIGlmIChrZXkgPT09ICd3JyAmJiAhcmVwZWF0KSB7XG4gICAgICAgIGxldCBlbmNvZGVkID0gY2FudmFzUmVmLmN1cnJlbnQudG9EYXRhVVJMKCdpbWFnZS9wbmcnKTtcbiAgICAgICAgbGV0IGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgICAgIGxpbmsuc2V0QXR0cmlidXRlKCdocmVmJywgZW5jb2RlZCk7XG4gICAgICAgIGxpbmsuc2V0QXR0cmlidXRlKCdkb3dubG9hZCcsICdldGNoLnBuZycpO1xuICAgICAgICBsaW5rLmRpc3BhdGNoRXZlbnQoXG4gICAgICAgICAgbmV3IE1vdXNlRXZlbnQoYGNsaWNrYCwge1xuICAgICAgICAgICAgYnViYmxlczogdHJ1ZSxcbiAgICAgICAgICAgIGNhbmNlbGFibGU6IHRydWUsXG4gICAgICAgICAgICB2aWV3OiB3aW5kb3csXG4gICAgICAgICAgfSlcbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfSBlbHNlIGlmIChrZXkgPT09ICc/JyAmJiAhcmVwZWF0KSB7XG4gICAgICAgIHRvZ2dsZUhlbHAoIWhlbHApO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGtleSA9PT0gJ2luaXQnKSB7XG4gICAgICBjdHguZmlsbFN0eWxlID0gJ3doaXRlJztcbiAgICAgIGN0eC5maWxsUmVjdCgwLCAwLCBjYW52YXNfd2lkdGgsIGNhbnZhc19oZWlnaHQpO1xuICAgIH1cblxuICAgIGxldCBvY3R4ID0gb3ZlcmxheUNhbnZhc1JlZi5jdXJyZW50LmdldENvbnRleHQoJzJkJyk7XG4gICAgb2N0eC5zdHJva2VTdHlsZSA9IF9tb2RlID09PSAnZHJhdycgPyAnbGltZWdyZWVuJyA6ICdob3RwaW5rJztcbiAgICBsZXQgb3N0cm9rZSA9IDQ7XG4gICAgb2N0eC5saW5lV2lkdGggPSBvc3Ryb2tlO1xuXG4gICAgbGV0IGN1cnJlbnQgPSBjb29yZGluYXRlcy5jdXJyZW50O1xuXG4gICAgbGV0IGluYyA9IHNpemU7XG4gICAgbGV0IG1vZGlmeSA9IFswLCAwXTtcbiAgICBpZiAoa2V5bWFwLmN1cnJlbnRbJ2onXSkgbW9kaWZ5WzFdICs9IGluYztcbiAgICBpZiAoa2V5bWFwLmN1cnJlbnRbJ2snXSkgbW9kaWZ5WzFdICs9IC1pbmM7XG4gICAgaWYgKGtleW1hcC5jdXJyZW50WydoJ10pIG1vZGlmeVswXSArPSAtaW5jO1xuICAgIGlmIChrZXltYXAuY3VycmVudFsnbCddKSBtb2RpZnlbMF0gKz0gaW5jO1xuXG4gICAgbGV0IG5leHQgPSBbY3VycmVudFswXSArIG1vZGlmeVswXSwgY3VycmVudFsxXSArIG1vZGlmeVsxXV07XG5cbiAgICBpZiAobmV4dFswXSA8IDApIG5leHRbMF0gPSBncmlkX3dpZHRoIC0gc2l6ZSAqIDI7XG4gICAgaWYgKG5leHRbMF0gPj0gZ3JpZF93aWR0aCAtIHNpemUpIG5leHRbMF0gPSAwO1xuICAgIGlmIChuZXh0WzFdIDwgMCkgbmV4dFsxXSA9IGdyaWRfaGVpZ2h0IC0gc2l6ZSAqIDI7XG4gICAgaWYgKG5leHRbMV0gPj0gZ3JpZF9oZWlnaHQgLSBzaXplKSBuZXh0WzFdID0gMDtcbiAgICBjb29yZGluYXRlcy5jdXJyZW50ID0gbmV4dDtcblxuICAgIC8vIG1vZGlmeSBkcmF3aW5nXG4gICAgbGV0IGMgPSBuZXh0WzBdIC8gc2l6ZTtcbiAgICBsZXQgciA9IG5leHRbMV0gLyBzaXplO1xuXG4gICAgbGV0IG5ld192YWwgPSBfbW9kZSA9PT0gJ2RyYXcnID8gdHJ1ZSA6IGZhbHNlO1xuICAgIGlmIChrZXltYXAuY3VycmVudFsnYSddKSB7XG4gICAgICBsZXQgaW5kZXggPSByICogKGdyaWRfd2lkdGggLyBzaXplICsgMSkgKyBjO1xuICAgICAgdmVydGljYWwuY3VycmVudFtpbmRleF0gPSBuZXdfdmFsO1xuICAgIH1cbiAgICBpZiAoa2V5bWFwLmN1cnJlbnRbJ2QnXSkge1xuICAgICAgbGV0IGluZGV4ID0gKHIgKyAxKSAqIChncmlkX3dpZHRoIC8gc2l6ZSArIDEpICsgYztcbiAgICAgIGhvcml6b250YWwuY3VycmVudFtpbmRleF0gPSBuZXdfdmFsO1xuICAgIH1cbiAgICBpZiAoa2V5bWFwLmN1cnJlbnRbJ3MnXSkge1xuICAgICAgbGV0IGluZGV4ID0gciAqIChncmlkX3dpZHRoIC8gc2l6ZSArIDEpICsgYztcbiAgICAgIGhvcml6b250YWwuY3VycmVudFtpbmRleF0gPSBuZXdfdmFsO1xuICAgIH1cbiAgICBpZiAoa2V5bWFwLmN1cnJlbnRbJ2YnXSkge1xuICAgICAgbGV0IGluZGV4ID0gciAqIChncmlkX3dpZHRoIC8gc2l6ZSArIDEpICsgYyArIDE7XG4gICAgICB2ZXJ0aWNhbC5jdXJyZW50W2luZGV4XSA9IG5ld192YWw7XG4gICAgfVxuICAgIGlmIChrZXltYXAuY3VycmVudFsnZyddKSB7XG4gICAgICBsZXQgaW5kZXggPSByICogKGdyaWRfd2lkdGggLyBzaXplICsgMSkgKyBjO1xuICAgICAgYmFja3NsYXNoLmN1cnJlbnRbaW5kZXhdID0gbmV3X3ZhbDtcbiAgICB9XG4gICAgaWYgKGtleW1hcC5jdXJyZW50WydyJ10pIHtcbiAgICAgIGxldCBpbmRleCA9IHIgKiAoZ3JpZF93aWR0aCAvIHNpemUgKyAxKSArIGM7XG4gICAgICBzbGFzaC5jdXJyZW50W2luZGV4XSA9IG5ld192YWw7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbW92ZVRvKGN0eCwgeCwgeSkge1xuICAgICAgY3R4Lm1vdmVUbyh4ICsgeHAsIHkgKyB5cCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbGluZVRvKGN0eCwgeCwgeSkge1xuICAgICAgY3R4LmxpbmVUbyh4ICsgeHAsIHkgKyB5cCk7XG4gICAgfVxuXG4gICAgY3R4LmNsZWFyUmVjdCgwLCAwLCBjYW52YXNfd2lkdGgsIGNhbnZhc19oZWlnaHQpO1xuXG4gICAgaWYgKHZlcnRpY2FsLmN1cnJlbnQgIT09IG51bGwpIHtcbiAgICAgIGxldCB2YSA9IHZlcnRpY2FsLmN1cnJlbnQ7XG4gICAgICBsZXQgaGEgPSBob3Jpem9udGFsLmN1cnJlbnQ7XG4gICAgICBsZXQgYmEgPSBiYWNrc2xhc2guY3VycmVudDtcbiAgICAgIGxldCBzYSA9IHNsYXNoLmN1cnJlbnQ7XG5cbiAgICAgIGxldCBkYyA9IGdyaWRfd2lkdGggLyBzaXplICsgMTtcbiAgICAgIGxldCBkciA9IGdyaWRfaGVpZ2h0IC8gc2l6ZSArIDE7XG5cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdmEubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbGV0IHYgPSB2YVtpXTtcbiAgICAgICAgbGV0IGggPSBoYVtpXTtcbiAgICAgICAgbGV0IGIgPSBiYVtpXTtcbiAgICAgICAgbGV0IHMgPSBzYVtpXTtcblxuICAgICAgICBsZXQgYyA9IGkgJSBkYztcbiAgICAgICAgbGV0IHIgPSBNYXRoLmZsb29yKGkgLyBkYyk7XG5cbiAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICBpZiAodiA9PT0gdHJ1ZSkge1xuICAgICAgICAgIG1vdmVUbyhjdHgsIGMgKiBzaXplLCByICogc2l6ZSk7XG4gICAgICAgICAgbGluZVRvKGN0eCwgYyAqIHNpemUsIHIgKiBzaXplICsgc2l6ZSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGggPT09IHRydWUpIHtcbiAgICAgICAgICBtb3ZlVG8oY3R4LCBjICogc2l6ZSwgciAqIHNpemUpO1xuICAgICAgICAgIGxpbmVUbyhjdHgsIGMgKiBzaXplICsgc2l6ZSwgciAqIHNpemUpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChiID09PSB0cnVlKSB7XG4gICAgICAgICAgbW92ZVRvKGN0eCwgYyAqIHNpemUgKyBzaXplLCByICogc2l6ZSArIHNpemUpO1xuICAgICAgICAgIGxpbmVUbyhjdHgsIGMgKiBzaXplLCByICogc2l6ZSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHMgPT09IHRydWUpIHtcbiAgICAgICAgICBtb3ZlVG8oY3R4LCBjICogc2l6ZSwgciAqIHNpemUgKyBzaXplKTtcbiAgICAgICAgICBsaW5lVG8oY3R4LCBjICogc2l6ZSArIHNpemUsIHIgKiBzaXplKTtcbiAgICAgICAgfVxuICAgICAgICBjdHguc3Ryb2tlKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgb2N0eC5jbGVhclJlY3QoMCwgMCwgd2luZG93LmlubmVyV2lkdGgsIHdpbmRvdy5pbm5lckhlaWdodCk7XG4gICAgb2N0eC5zdHJva2VSZWN0KFxuICAgICAgY29vcmRpbmF0ZXMuY3VycmVudFswXSAtIG9zdHJva2UgLyAyICsgeHAsXG4gICAgICBjb29yZGluYXRlcy5jdXJyZW50WzFdIC0gb3N0cm9rZSAvIDIgKyB5cCxcbiAgICAgIHNpemUgKyBvc3Ryb2tlLFxuICAgICAgc2l6ZSArIG9zdHJva2VcbiAgICApO1xuICB9XG5cbiAgZnVuY3Rpb24gZG93bkhhbmRsZXIoZSkge1xuICAgIGtleW1hcC5jdXJyZW50W2Uua2V5XSA9IHRydWU7XG4gICAga2V5QWN0aW9uKGUua2V5LCBlLnJlcGVhdCk7XG4gIH1cblxuICBmdW5jdGlvbiB1cEhhbmRsZXIoZSkge1xuICAgIGtleW1hcC5jdXJyZW50W2Uua2V5XSA9IGZhbHNlO1xuICB9XG5cbiAgZnVuY3Rpb24gY2xlYXJHcmlkKCkge1xuICAgIGxldCBjYW52YXNfd2lkdGggPSBjYW52YXNSZWYuY3VycmVudC5vZmZzZXRXaWR0aDtcbiAgICBsZXQgY2FudmFzX2hlaWdodCA9IGNhbnZhc1JlZi5jdXJyZW50Lm9mZnNldEhlaWdodDtcblxuICAgIGNvbnNvbGUubG9nKGNhbnZhc193aWR0aCwgY2FudmFzX2hlaWdodCk7XG5cbiAgICBsZXQgZ3JpZF93aWR0aCA9IGNhbnZhc193aWR0aCAtIHhwICogMjtcbiAgICBsZXQgZ3JpZF9oZWlnaHQgPSBjYW52YXNfaGVpZ2h0IC0geXAgKiAyO1xuXG4gICAgbGV0IGNvbHVtbnMgPSBncmlkX3dpZHRoIC8gc2l6ZSArIDE7XG4gICAgbGV0IHJvd3MgPSBncmlkX2hlaWdodCAvIHNpemUgKyAxO1xuXG4gICAgdmVydGljYWwuY3VycmVudCA9IEFycmF5KGNvbHVtbnMgKiByb3dzKS5maWxsKGZhbHNlKTtcbiAgICBob3Jpem9udGFsLmN1cnJlbnQgPSB2ZXJ0aWNhbC5jdXJyZW50LnNsaWNlKCk7XG4gICAgYmFja3NsYXNoLmN1cnJlbnQgPSB2ZXJ0aWNhbC5jdXJyZW50LnNsaWNlKCk7XG4gICAgc2xhc2guY3VycmVudCA9IHZlcnRpY2FsLmN1cnJlbnQuc2xpY2UoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHNldFdpbmRvd1NpemUoKSB7XG4gICAgbGV0IGdyaWRfd2lkdGggPSBNYXRoLmZsb29yKCh3aW5kb3cuaW5uZXJXaWR0aCAtIHhwICogMikgLyBzaXplKSAqIHNpemU7XG4gICAgbGV0IGdyaWRfaGVpZ2h0ID0gTWF0aC5mbG9vcigod2luZG93LmlubmVySGVpZ2h0IC0geXAgKiAyKSAvIHNpemUpICogc2l6ZTtcblxuICAgIGxldCBjYW52YXNfd2lkdGggPSBncmlkX3dpZHRoICsgeHAgKiAyO1xuICAgIGxldCBjYW52YXNfaGVpZ2h0ID0gZ3JpZF9oZWlnaHQgKyB5cCAqIDI7XG5cbiAgICBsZXQgZHByID0gd2luZG93LmRldmljZVBpeGVsUmF0aW8gfHwgMTtcblxuICAgIGNhbnZhc1JlZi5jdXJyZW50LndpZHRoID0gY2FudmFzX3dpZHRoICogZHByO1xuICAgIGNhbnZhc1JlZi5jdXJyZW50LmhlaWdodCA9IGNhbnZhc19oZWlnaHQgKiBkcHI7XG4gICAgbGV0IGN0eCA9IGNhbnZhc1JlZi5jdXJyZW50LmdldENvbnRleHQoJzJkJyk7XG4gICAgY3R4LnNjYWxlKGRwciwgZHByKTtcblxuICAgIG92ZXJsYXlDYW52YXNSZWYuY3VycmVudC53aWR0aCA9IGNhbnZhc193aWR0aCAqIGRwcjtcbiAgICBvdmVybGF5Q2FudmFzUmVmLmN1cnJlbnQuaGVpZ2h0ID0gY2FudmFzX2hlaWdodCAqIGRwcjtcbiAgICBsZXQgb2N0eCA9IG92ZXJsYXlDYW52YXNSZWYuY3VycmVudC5nZXRDb250ZXh0KCcyZCcpO1xuICAgIG9jdHguc2NhbGUoZHByLCBkcHIpO1xuXG4gICAgc2V0RGltZW5zaW9ucyhbY2FudmFzX3dpZHRoLCBjYW52YXNfaGVpZ2h0XSwgZnVuY3Rpb24oKSB7XG4gICAgICBjbGVhckdyaWQoKTtcbiAgICB9KTtcbiAgfVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKCFvbmNlKSB7XG4gICAgICBzZXRXaW5kb3dTaXplKCk7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAga2V5QWN0aW9uKCdpbml0JywgZmFsc2UpO1xuICAgICAgfSwgMCk7XG4gICAgICBvbmNlID0gdHJ1ZTtcbiAgICB9XG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGRvd25IYW5kbGVyKTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCB1cEhhbmRsZXIpO1xuICAgIC8vIFJlbW92ZSBldmVudCBsaXN0ZW5lcnMgb24gY2xlYW51cFxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGRvd25IYW5kbGVyKTtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXl1cCcsIHVwSGFuZGxlcik7XG4gICAgfTtcbiAgfSwgW21vZGUsIGhlbHBdKTtcblxuICByZXR1cm4gKFxuICAgIDxUaGVtZVByb3ZpZGVyIHRoZW1lPXt0aGVtZX0+XG4gICAgICA8ZGl2PlxuICAgICAgICA8SGVhZD5cbiAgICAgICAgICA8dGl0bGU+SGV4PC90aXRsZT5cbiAgICAgICAgPC9IZWFkPlxuICAgICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAgICAgIEBmb250LWZhY2Uge1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdjdXN0b20nO1xuICAgICAgICAgICAgc3JjOiB1cmwoJy9zdGF0aWMvZm9udHMvSUJNUGxleE1vbm8tUmVndWxhci53b2ZmMicpIGZvcm1hdCgnd29mZjInKSxcbiAgICAgICAgICAgICAgdXJsKCcvc3RhdGljL2ZvbnRzL0lCTVBsZXhNb25vLVJlZ3VsYXIud29mZicpIGZvcm1hdCgnd29mZicpO1xuICAgICAgICAgIH1cbiAgICAgICAgICAqIHtcbiAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgICAgfVxuICAgICAgICAgIGh0bWwge1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6IGN1c3RvbSwgbW9ub3NwYWNlO1xuICAgICAgICAgICAgZm9udC1zaXplOiAke3RoZW1lLmZvbnRTaXplc1swXX1weDtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6ICR7dGhlbWUubGluZUhlaWdodHMuYm9keX07XG4gICAgICAgICAgfVxuICAgICAgICAgIGJvZHkge1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgYmFja2dyb3VuZDogcmVkO1xuICAgICAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgdGV4dGFyZWEge1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XG4gICAgICAgICAgICBmb250LXNpemU6IGluaGVyaXQ7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogaW5oZXJpdDtcbiAgICAgICAgICB9XG4gICAgICAgICAgcCB7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5rZXl0aXAgKyAua2V5dGlwIHtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxcHg7XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgIDxjYW52YXNcbiAgICAgICAgICByZWY9e2NhbnZhc1JlZn1cbiAgICAgICAgICBzeD17eyBiYWNrZ3JvdW5kOiAnd2hpdGUnIH19XG4gICAgICAgICAgY3NzPXt7XG4gICAgICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgICAgICAgIGxlZnQ6IDAsXG4gICAgICAgICAgICB0b3A6IDAsXG4gICAgICAgICAgICB3aWR0aDogZGltZW5zaW9uc1swXSxcbiAgICAgICAgICAgIGhlaWdodDogZGltZW5zaW9uc1sxXSxcbiAgICAgICAgICAgIGRpc3BsYXk6IGRpbWVuc2lvbnNbMF0gIT09IG51bGwgPyAnYmxvY2snIDogJ25vbmUnLFxuICAgICAgICAgIH19XG4gICAgICAgIC8+XG4gICAgICAgIDxjYW52YXNcbiAgICAgICAgICByZWY9e292ZXJsYXlDYW52YXNSZWZ9XG4gICAgICAgICAgc3g9e3sgYmFja2dyb3VuZDogJ3RyYW5zcGFyZW50JyB9fVxuICAgICAgICAgIGNzcz17e1xuICAgICAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICAgICAgICBsZWZ0OiAwLFxuICAgICAgICAgICAgdG9wOiAwLFxuICAgICAgICAgICAgd2lkdGg6IGRpbWVuc2lvbnNbMF0sXG4gICAgICAgICAgICBoZWlnaHQ6IGRpbWVuc2lvbnNbMV0sXG4gICAgICAgICAgICBkaXNwbGF5OiBkaW1lbnNpb25zWzBdICE9PSBudWxsID8gJ2Jsb2NrJyA6ICdub25lJyxcbiAgICAgICAgICB9fVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXZcbiAgICAgICAgY3NzPXt7XG4gICAgICAgICAgcG9zaXRpb246ICdmaXhlZCcsXG4gICAgICAgICAgb3V0bGluZTogJ3NvbGlkIDFweCBibGFjaycsXG4gICAgICAgICAgZGlzcGxheTogaGVscCA/ICdibG9jaycgOiAnbm9uZScsXG4gICAgICAgICAgbWF4V2lkdGg6IGBjYWxjKDEwMCUgLSAke3RoZW1lLnNwYWNlWzBdICogMn1weClgLFxuICAgICAgICAgIGJhY2tncm91bmQ6ICdyZ2JhKDI1NSwyNTUsMjU1LDAuOCknLFxuICAgICAgICB9fVxuICAgICAgICBzeD17eyBweDogJzFjaCcsIHBiOiAxLCBwdDogMSwgcmlnaHQ6IDAsIGJvdHRvbTogMCB9fVxuICAgICAgPlxuICAgICAgICA8ZGl2IHN4PXt7IG1hcmdpbkJvdHRvbTogMCB9fT5cbiAgICAgICAgICBIZXggaXMgYSBrZXlib2FyZC1kcml2ZW4sIGdyaWQtYmFzZWQgZHJhd2luZyB0b29sLlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBzdHlsZT17eyBwb3NpdGlvbjogJ3JlbGF0aXZlJyB9fT5cbiAgICAgICAgICA8ZGl2IHN4PXt7IG1hcmdpbkJvdHRvbTogMCB9fT5cbiAgICAgICAgICAgIHtLZXlUaXAoJ2UnKX0gdG9nZ2xlIG1vZGU6eycgJ31cbiAgICAgICAgICAgIHtbJ2RyYXcnLCAnZXJhc2UnXS5tYXAobSA9PiAoXG4gICAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgICAga2V5PXtgbW9kZV8ke219YH1cbiAgICAgICAgICAgICAgICBzeD17eyBweDogJzFjaCcgfX1cbiAgICAgICAgICAgICAgICBjc3M9e3tcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6XG4gICAgICAgICAgICAgICAgICAgIG0gPT09IG1vZGVcbiAgICAgICAgICAgICAgICAgICAgICA/IG1vZGUgPT09ICdkcmF3J1xuICAgICAgICAgICAgICAgICAgICAgICAgPyAnbGltZWdyZWVuJ1xuICAgICAgICAgICAgICAgICAgICAgICAgOiAnaG90cGluaydcbiAgICAgICAgICAgICAgICAgICAgICA6ICdub25lJyxcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge219XG4gICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgc3g9e3sgbWI6IDEgfX0+RHJhdyAmIG1vdmU6PC9kaXY+XG4gICAgICAgICAgPGRpdiBjc3M9e3sgZGlzcGxheTogJ2ZsZXgnIH19PlxuICAgICAgICAgICAgPGRpdiBzeD17eyBkaXNwbGF5OiAnZmxleCcsIG1hcmdpblJpZ2h0OiAnMmNoJyB9fT5cbiAgICAgICAgICAgICAge1tcbiAgICAgICAgICAgICAgICBbMCwgMCwgMCwgc2l6ZV0sXG4gICAgICAgICAgICAgICAgWzAsIDAsIHNpemUsIDBdLFxuICAgICAgICAgICAgICAgIFswLCBzaXplLCBzaXplLCBzaXplXSxcbiAgICAgICAgICAgICAgICBbc2l6ZSwgMCwgc2l6ZSwgc2l6ZV0sXG4gICAgICAgICAgICAgICAgW3NpemUsIDAsIDAsIHNpemVdLFxuICAgICAgICAgICAgICAgIFswLCAwLCBzaXplLCBzaXplXSxcbiAgICAgICAgICAgICAgXS5tYXAoKGMsIGkpID0+IChcbiAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJrZXl0aXBcIlxuICAgICAgICAgICAgICAgICAgY3NzPXt7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAnMmNoJyxcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiB0aGVtZS5zcGFjZVswXSxcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZ0xlZnQ6IGBjYWxjKDFjaCAtICR7c2l6ZSAvIDJ9cHgpYCxcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPHN2ZyB2aWV3Qm94PXtgMCAwICR7c2l6ZX0gJHtzaXplfWB9PlxuICAgICAgICAgICAgICAgICAgICA8bGluZVxuICAgICAgICAgICAgICAgICAgICAgIHgxPXtjWzBdfVxuICAgICAgICAgICAgICAgICAgICAgIHkxPXtjWzFdfVxuICAgICAgICAgICAgICAgICAgICAgIHgyPXtjWzJdfVxuICAgICAgICAgICAgICAgICAgICAgIHkyPXtjWzNdfVxuICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZT1cImJsYWNrXCJcbiAgICAgICAgICAgICAgICAgICAgICBzdHJva2VXaWR0aD17aSA+IDMgPyAxIDogMn1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAge1sn4oaQJywgJ+KGkycsICfihpEnLCAn4oaSJ10ubWFwKGEgPT4gKFxuICAgICAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJrZXl0aXBcIlxuICAgICAgICAgICAgICAgICAga2V5PXtgYXJyb3dfJHthfWB9XG4gICAgICAgICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6ICcyY2gnLFxuICAgICAgICAgICAgICAgICAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICB7YX1cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBzeD17eyBkaXNwbGF5OiAnZmxleCcgfX0+XG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpblJpZ2h0OiAnMmNoJyB9fT5cbiAgICAgICAgICAgICAge0tleVRpcCgnYScpfVxuICAgICAgICAgICAgICB7S2V5VGlwKCdzJyl9XG4gICAgICAgICAgICAgIHtLZXlUaXAoJ2QnKX1cbiAgICAgICAgICAgICAge0tleVRpcCgnZicpfVxuICAgICAgICAgICAgICB7S2V5VGlwKCdyJyl9XG4gICAgICAgICAgICAgIHtLZXlUaXAoJ2cnKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAge0tleVRpcCgnaCcpfVxuICAgICAgICAgICAgICB7S2V5VGlwKCdqJyl9XG4gICAgICAgICAgICAgIHtLZXlUaXAoJ2snKX1cbiAgICAgICAgICAgICAge0tleVRpcCgnbCcpfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgbXQ6IDAsXG4gICAgICAgICAgICAgIG1iOiAxLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICBTcGVjaWFsOlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICB7S2V5VGlwKCd3Jyl9IHNhdmUgcG5nJm5ic3A7IHtLZXlUaXAoJ3gnKX0gY2xlYXImbmJzcDsge0tleVRpcCgnPycpfXsnICd9XG4gICAgICAgICAgICB0b2dnbGUgaGVscFxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAge2hlbHAgPyBudWxsIDogKFxuICAgICAgICA8ZGl2XG4gICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgIHBvc2l0aW9uOiAnZml4ZWQnLFxuICAgICAgICAgICAgcmlnaHQ6IDAsXG4gICAgICAgICAgICBib3R0b206IDAsXG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIHtLZXlUaXAoJz8nKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuICAgIDwvVGhlbWVQcm92aWRlcj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWU7XG4iXX0= */\n/*@ sourceURL=/Users/grant.custer/Sites/constraint_systems/hex/pages/index.js */")), Object(theme_ui__WEBPACK_IMPORTED_MODULE_9__["jsx"])("canvas", {
    ref: canvasRef,
    sx: {
      background: 'white'
    },
    css: {
      position: 'absolute',
      left: 0,
      top: 0,
      width: dimensions[0],
      height: dimensions[1],
      display: dimensions[0] !== null ? 'block' : 'none'
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a.dynamic([["1224738735", [_parts_theme__WEBPACK_IMPORTED_MODULE_8__["default"].fontSizes[0], _parts_theme__WEBPACK_IMPORTED_MODULE_8__["default"].lineHeights.body]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 325
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
      width: dimensions[0],
      height: dimensions[1],
      display: dimensions[0] !== null ? 'block' : 'none'
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a.dynamic([["1224738735", [_parts_theme__WEBPACK_IMPORTED_MODULE_8__["default"].fontSizes[0], _parts_theme__WEBPACK_IMPORTED_MODULE_8__["default"].lineHeights.body]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 337
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
      lineNumber: 351
    },
    __self: this
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_9__["jsx"])("div", {
    sx: {
      marginBottom: 0
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 361
    },
    __self: this
  }, "Hex is a keyboard-driven, grid-based drawing tool."), Object(theme_ui__WEBPACK_IMPORTED_MODULE_9__["jsx"])("div", {
    style: {
      position: 'relative'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 364
    },
    __self: this
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_9__["jsx"])("div", {
    sx: {
      marginBottom: 0
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 365
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
        lineNumber: 368
      },
      __self: this
    }, m);
  })), Object(theme_ui__WEBPACK_IMPORTED_MODULE_9__["jsx"])("div", {
    sx: {
      mb: 1
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 384
    },
    __self: this
  }, "Draw & move:"), Object(theme_ui__WEBPACK_IMPORTED_MODULE_9__["jsx"])("div", {
    css: {
      display: 'flex'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 385
    },
    __self: this
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_9__["jsx"])("div", {
    sx: {
      display: 'flex',
      marginRight: '2ch'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 386
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
        lineNumber: 395
      },
      __self: this
    }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_9__["jsx"])("svg", {
      viewBox: "0 0 ".concat(size, " ").concat(size),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 403
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
        lineNumber: 404
      },
      __self: this
    })));
  })), Object(theme_ui__WEBPACK_IMPORTED_MODULE_9__["jsx"])("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 416
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
        lineNumber: 418
      },
      __self: this
    }, a);
  }))), Object(theme_ui__WEBPACK_IMPORTED_MODULE_9__["jsx"])("div", {
    sx: {
      display: 'flex'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 432
    },
    __self: this
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_9__["jsx"])("div", {
    style: {
      marginRight: '2ch'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 433
    },
    __self: this
  }, KeyTip('a'), KeyTip('s'), KeyTip('d'), KeyTip('f'), KeyTip('r'), KeyTip('g')), Object(theme_ui__WEBPACK_IMPORTED_MODULE_9__["jsx"])("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 441
    },
    __self: this
  }, KeyTip('h'), KeyTip('j'), KeyTip('k'), KeyTip('l'))), Object(theme_ui__WEBPACK_IMPORTED_MODULE_9__["jsx"])("div", {
    sx: {
      mt: 0,
      mb: 1
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 448
    },
    __self: this
  }, "Special:"), Object(theme_ui__WEBPACK_IMPORTED_MODULE_9__["jsx"])("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 456
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
      lineNumber: 463
    },
    __self: this
  }, KeyTip('?')));
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

})
//# sourceMappingURL=index.js.aaf3388a35525454bd40.hot-update.js.map