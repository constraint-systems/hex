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
    var grid_width = canvas_width - xp * 2 + size;
    var grid_height = canvas_height - yp * 2 + size;
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
    var grid_width = canvas_width - xp * 2 + size;
    var grid_height = canvas_height - yp * 2 + size;
    var columns = grid_width / size;
    var rows = grid_height / size;
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
    setDimensions([canvas_width, canvas_height]);
  }

  Object(react__WEBPACK_IMPORTED_MODULE_6__["useEffect"])(function () {
    if (dimensions[0] !== null) {
      clearGrid();
    }
  }, [dimensions]);
  Object(react__WEBPACK_IMPORTED_MODULE_6__["useEffect"])(function () {
    if (!once) {
      setWindowSize();
      document.documentElement.className = 'loaded';
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
      lineNumber: 291
    },
    __self: this
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_9__["jsx"])("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a.dynamic([["135641999", [_parts_theme__WEBPACK_IMPORTED_MODULE_8__["default"].fontSizes[0], _parts_theme__WEBPACK_IMPORTED_MODULE_8__["default"].lineHeights.body]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 292
    },
    __self: this
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_9__["jsx"])(next_head__WEBPACK_IMPORTED_MODULE_7___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 293
    },
    __self: this
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_9__["jsx"])("title", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a.dynamic([["135641999", [_parts_theme__WEBPACK_IMPORTED_MODULE_8__["default"].fontSizes[0], _parts_theme__WEBPACK_IMPORTED_MODULE_8__["default"].lineHeights.body]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 294
    },
    __self: this
  }, "Hex")), Object(theme_ui__WEBPACK_IMPORTED_MODULE_9__["jsx"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
    id: "135641999",
    dynamic: [_parts_theme__WEBPACK_IMPORTED_MODULE_8__["default"].fontSizes[0], _parts_theme__WEBPACK_IMPORTED_MODULE_8__["default"].lineHeights.body],
    __self: this
  }, "@font-face{font-family:'custom';src:url('/static/fonts/IBMPlexMono-Regular.woff2') format('woff2'), url('/static/fonts/IBMPlexMono-Regular.woff') format('woff');}*{box-sizing:border-box;}html{font-family:custom,monospace;font-size:".concat(_parts_theme__WEBPACK_IMPORTED_MODULE_8__["default"].fontSizes[0], "px;line-height:").concat(_parts_theme__WEBPACK_IMPORTED_MODULE_8__["default"].lineHeights.body, ";}html.loaded{background:#ddd;}body{margin:0;padding:10px;}textarea{font-family:inherit;font-size:inherit;line-height:inherit;}p{margin:0;}.keytip+.keytip{margin-left:1px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ncmFudC5jdXN0ZXIvU2l0ZXMvY29uc3RyYWludF9zeXN0ZW1zL2hleC9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF1UzJCLEFBR2tDLEFBS0MsQUFHUSxBQUtkLEFBR1AsQUFJVyxBQUtYLEFBR08sU0FYSCxBQVNmLE9BWkEsQUFlQSxJQVJvQixDQW5CNEMsQ0FJaEUsQUFZQSxPQVQyQyxTQWFyQixvQkFDdEIsWUFiMkMseUNBQzNDLHVDQVJBIiwiZmlsZSI6Ii9Vc2Vycy9ncmFudC5jdXN0ZXIvU2l0ZXMvY29uc3RyYWludF9zeXN0ZW1zL2hleC9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIEBqc3gganN4ICovXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VDYWxsYmFjayB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5pbXBvcnQgdGhlbWUgZnJvbSAnLi4vcGFydHMvdGhlbWUnO1xuaW1wb3J0IHsganN4IH0gZnJvbSAndGhlbWUtdWknO1xuaW1wb3J0IHsgVGhlbWVQcm92aWRlciB9IGZyb20gJ3RoZW1lLXVpJztcbmltcG9ydCB7IHJlcXVlc3RJbnRlcnZhbCB9IGZyb20gJy4uL3BhcnRzL3V0aWxzJztcblxubGV0IGZzID0gdGhlbWUuZm9udFNpemVzWzBdO1xuXG5sZXQgb25jZSA9IGZhbHNlO1xubGV0IHNpemUgPSAxNDtcblxubGV0IHNwZWNpYWxfa2V5cyA9ICd4P2V3Jy5zcGxpdCgnJyk7XG5cbk9iamVjdC5mcm9tRW50cmllcyA9IGFyciA9PlxuICBPYmplY3QuYXNzaWduKHt9LCAuLi5BcnJheS5mcm9tKGFyciwgKFtrLCB2XSkgPT4gKHsgW2tdOiB2IH0pKSk7XG5cbmxldCB4cCA9IDQ7XG5sZXQgeXAgPSA0O1xuXG5jb25zdCBIb21lID0gKCkgPT4ge1xuICBsZXQgW2RpbWVuc2lvbnMsIHNldERpbWVuc2lvbnNdID0gdXNlU3RhdGUoW251bGwsIG51bGxdKTtcbiAgbGV0IFttb2RlLCBzZXRNb2RlXSA9IHVzZVN0YXRlKCdkcmF3Jyk7XG5cbiAgbGV0IGNhbnZhc1JlZiA9IHVzZVJlZigpO1xuICBsZXQgb3ZlcmxheUNhbnZhc1JlZiA9IHVzZVJlZigpO1xuXG4gIGxldCByZXF1ZXN0UmVmID0gdXNlUmVmKCk7XG4gIGxldCBrZXltYXAgPSB1c2VSZWYoe30pO1xuICBsZXQgY29vcmRpbmF0ZXMgPSB1c2VSZWYoWzAsIDBdKTtcbiAgbGV0IHZlcnRpY2FsID0gdXNlUmVmKG51bGwpO1xuICBsZXQgaG9yaXpvbnRhbCA9IHVzZVJlZihudWxsKTtcbiAgbGV0IGJhY2tzbGFzaCA9IHVzZVJlZihudWxsKTtcbiAgbGV0IHNsYXNoID0gdXNlUmVmKG51bGwpO1xuICBsZXQgW2hlbHAsIHRvZ2dsZUhlbHBdID0gdXNlU3RhdGUodHJ1ZSk7XG5cbiAgZnVuY3Rpb24gS2V5VGlwKGxldHRlcikge1xuICAgIHJldHVybiAoXG4gICAgICA8c3BhblxuICAgICAgICBjbGFzc05hbWU9XCJrZXl0aXBcIlxuICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAga2V5bWFwLmN1cnJlbnRbbGV0dGVyXSA9IHRydWU7XG4gICAgICAgICAga2V5QWN0aW9uKGxldHRlciwgZmFsc2UpO1xuICAgICAgICAgIGtleW1hcC5jdXJyZW50W2xldHRlcl0gPSBmYWxzZTtcbiAgICAgICAgfX1cbiAgICAgICAgc3g9e3tcbiAgICAgICAgICBvdXRsaW5lOiAnc29saWQgMXB4IGJsYWNrJyxcbiAgICAgICAgICB3aWR0aDogJzJjaCcsXG4gICAgICAgICAgdGV4dEFsaWduOiAnY2VudGVyJyxcbiAgICAgICAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcbiAgICAgICAgICB1c2VyU2VsZWN0OiAnbm9uZScsXG4gICAgICAgICAgY3Vyc29yOiAnZGVmYXVsdCcsXG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIHtsZXR0ZXJ9XG4gICAgICA8L3NwYW4+XG4gICAgKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGtleUFjdGlvbihrZXksIHJlcGVhdCkge1xuICAgIGxldCBjYW52YXNfd2lkdGggPSBNYXRoLmZsb29yKGNhbnZhc1JlZi5jdXJyZW50Lm9mZnNldFdpZHRoKTtcbiAgICBsZXQgY2FudmFzX2hlaWdodCA9IE1hdGguZmxvb3IoY2FudmFzUmVmLmN1cnJlbnQub2Zmc2V0SGVpZ2h0KTtcblxuICAgIGxldCBncmlkX3dpZHRoID0gY2FudmFzX3dpZHRoIC0geHAgKiAyICsgc2l6ZTtcbiAgICBsZXQgZ3JpZF9oZWlnaHQgPSBjYW52YXNfaGVpZ2h0IC0geXAgKiAyICsgc2l6ZTtcblxuICAgIGxldCBjdHggPSBjYW52YXNSZWYuY3VycmVudC5nZXRDb250ZXh0KCcyZCcpO1xuICAgIGN0eC5maWxsU3R5bGUgPSAnYmxhY2snO1xuXG4gICAgbGV0IF9tb2RlID0gbW9kZTtcblxuICAgIGlmIChzcGVjaWFsX2tleXMuaW5jbHVkZXMoa2V5KSkge1xuICAgICAgaWYgKGtleSA9PT0gJ2UnICYmICFyZXBlYXQpIHtcbiAgICAgICAgaWYgKF9tb2RlID09PSAnZHJhdycpIHtcbiAgICAgICAgICBfbW9kZSA9ICdlcmFzZSc7XG4gICAgICAgICAgc2V0TW9kZShfbW9kZSk7XG4gICAgICAgIH0gZWxzZSBpZiAoX21vZGUgPT09ICdlcmFzZScpIHtcbiAgICAgICAgICBfbW9kZSA9ICdkcmF3JztcbiAgICAgICAgICBzZXRNb2RlKF9tb2RlKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChrZXkgPT09ICd4JyAmJiAhcmVwZWF0KSB7XG4gICAgICAgIGNsZWFyR3JpZCgpO1xuICAgICAgfSBlbHNlIGlmIChrZXkgPT09ICd3JyAmJiAhcmVwZWF0KSB7XG4gICAgICAgIGxldCBlbmNvZGVkID0gY2FudmFzUmVmLmN1cnJlbnQudG9EYXRhVVJMKCdpbWFnZS9wbmcnKTtcbiAgICAgICAgbGV0IGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgICAgIGxpbmsuc2V0QXR0cmlidXRlKCdocmVmJywgZW5jb2RlZCk7XG4gICAgICAgIGxpbmsuc2V0QXR0cmlidXRlKCdkb3dubG9hZCcsICdldGNoLnBuZycpO1xuICAgICAgICBsaW5rLmRpc3BhdGNoRXZlbnQoXG4gICAgICAgICAgbmV3IE1vdXNlRXZlbnQoYGNsaWNrYCwge1xuICAgICAgICAgICAgYnViYmxlczogdHJ1ZSxcbiAgICAgICAgICAgIGNhbmNlbGFibGU6IHRydWUsXG4gICAgICAgICAgICB2aWV3OiB3aW5kb3csXG4gICAgICAgICAgfSlcbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfSBlbHNlIGlmIChrZXkgPT09ICc/JyAmJiAhcmVwZWF0KSB7XG4gICAgICAgIHRvZ2dsZUhlbHAoIWhlbHApO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGtleSA9PT0gJ2luaXQnKSB7XG4gICAgICBjdHguZmlsbFN0eWxlID0gJ3doaXRlJztcbiAgICAgIGN0eC5maWxsUmVjdCgwLCAwLCBjYW52YXNfd2lkdGgsIGNhbnZhc19oZWlnaHQpO1xuICAgIH1cblxuICAgIGxldCBvY3R4ID0gb3ZlcmxheUNhbnZhc1JlZi5jdXJyZW50LmdldENvbnRleHQoJzJkJyk7XG4gICAgb2N0eC5zdHJva2VTdHlsZSA9IF9tb2RlID09PSAnZHJhdycgPyAnbGltZWdyZWVuJyA6ICdob3RwaW5rJztcbiAgICBsZXQgb3N0cm9rZSA9IDQ7XG4gICAgb2N0eC5saW5lV2lkdGggPSBvc3Ryb2tlO1xuXG4gICAgbGV0IGN1cnJlbnQgPSBjb29yZGluYXRlcy5jdXJyZW50O1xuXG4gICAgbGV0IGluYyA9IHNpemU7XG4gICAgbGV0IG1vZGlmeSA9IFswLCAwXTtcbiAgICBpZiAoa2V5bWFwLmN1cnJlbnRbJ2onXSkgbW9kaWZ5WzFdICs9IGluYztcbiAgICBpZiAoa2V5bWFwLmN1cnJlbnRbJ2snXSkgbW9kaWZ5WzFdICs9IC1pbmM7XG4gICAgaWYgKGtleW1hcC5jdXJyZW50WydoJ10pIG1vZGlmeVswXSArPSAtaW5jO1xuICAgIGlmIChrZXltYXAuY3VycmVudFsnbCddKSBtb2RpZnlbMF0gKz0gaW5jO1xuXG4gICAgbGV0IG5leHQgPSBbY3VycmVudFswXSArIG1vZGlmeVswXSwgY3VycmVudFsxXSArIG1vZGlmeVsxXV07XG5cbiAgICBpZiAobmV4dFswXSA8IDApIG5leHRbMF0gPSBncmlkX3dpZHRoIC0gc2l6ZSAqIDI7XG4gICAgaWYgKG5leHRbMF0gPj0gZ3JpZF93aWR0aCAtIHNpemUpIG5leHRbMF0gPSAwO1xuICAgIGlmIChuZXh0WzFdIDwgMCkgbmV4dFsxXSA9IGdyaWRfaGVpZ2h0IC0gc2l6ZSAqIDI7XG4gICAgaWYgKG5leHRbMV0gPj0gZ3JpZF9oZWlnaHQgLSBzaXplKSBuZXh0WzFdID0gMDtcbiAgICBjb29yZGluYXRlcy5jdXJyZW50ID0gbmV4dDtcblxuICAgIC8vIG1vZGlmeSBkcmF3aW5nXG4gICAgbGV0IGMgPSBuZXh0WzBdIC8gc2l6ZTtcbiAgICBsZXQgciA9IG5leHRbMV0gLyBzaXplO1xuXG4gICAgbGV0IG5ld192YWwgPSBfbW9kZSA9PT0gJ2RyYXcnID8gdHJ1ZSA6IGZhbHNlO1xuICAgIGlmIChrZXltYXAuY3VycmVudFsnYSddKSB7XG4gICAgICBsZXQgaW5kZXggPSByICogKGdyaWRfd2lkdGggLyBzaXplICsgMSkgKyBjO1xuICAgICAgdmVydGljYWwuY3VycmVudFtpbmRleF0gPSBuZXdfdmFsO1xuICAgIH1cbiAgICBpZiAoa2V5bWFwLmN1cnJlbnRbJ2QnXSkge1xuICAgICAgbGV0IGluZGV4ID0gKHIgKyAxKSAqIChncmlkX3dpZHRoIC8gc2l6ZSArIDEpICsgYztcbiAgICAgIGhvcml6b250YWwuY3VycmVudFtpbmRleF0gPSBuZXdfdmFsO1xuICAgIH1cbiAgICBpZiAoa2V5bWFwLmN1cnJlbnRbJ3MnXSkge1xuICAgICAgbGV0IGluZGV4ID0gciAqIChncmlkX3dpZHRoIC8gc2l6ZSArIDEpICsgYztcbiAgICAgIGhvcml6b250YWwuY3VycmVudFtpbmRleF0gPSBuZXdfdmFsO1xuICAgIH1cbiAgICBpZiAoa2V5bWFwLmN1cnJlbnRbJ2YnXSkge1xuICAgICAgbGV0IGluZGV4ID0gciAqIChncmlkX3dpZHRoIC8gc2l6ZSArIDEpICsgYyArIDE7XG4gICAgICB2ZXJ0aWNhbC5jdXJyZW50W2luZGV4XSA9IG5ld192YWw7XG4gICAgfVxuICAgIGlmIChrZXltYXAuY3VycmVudFsnZyddKSB7XG4gICAgICBsZXQgaW5kZXggPSByICogKGdyaWRfd2lkdGggLyBzaXplICsgMSkgKyBjO1xuICAgICAgYmFja3NsYXNoLmN1cnJlbnRbaW5kZXhdID0gbmV3X3ZhbDtcbiAgICB9XG4gICAgaWYgKGtleW1hcC5jdXJyZW50WydyJ10pIHtcbiAgICAgIGxldCBpbmRleCA9IHIgKiAoZ3JpZF93aWR0aCAvIHNpemUgKyAxKSArIGM7XG4gICAgICBzbGFzaC5jdXJyZW50W2luZGV4XSA9IG5ld192YWw7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbW92ZVRvKGN0eCwgeCwgeSkge1xuICAgICAgY3R4Lm1vdmVUbyh4ICsgeHAsIHkgKyB5cCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbGluZVRvKGN0eCwgeCwgeSkge1xuICAgICAgY3R4LmxpbmVUbyh4ICsgeHAsIHkgKyB5cCk7XG4gICAgfVxuXG4gICAgY3R4LmNsZWFyUmVjdCgwLCAwLCBjYW52YXNfd2lkdGgsIGNhbnZhc19oZWlnaHQpO1xuXG4gICAgaWYgKHZlcnRpY2FsLmN1cnJlbnQgIT09IG51bGwpIHtcbiAgICAgIGxldCB2YSA9IHZlcnRpY2FsLmN1cnJlbnQ7XG4gICAgICBsZXQgaGEgPSBob3Jpem9udGFsLmN1cnJlbnQ7XG4gICAgICBsZXQgYmEgPSBiYWNrc2xhc2guY3VycmVudDtcbiAgICAgIGxldCBzYSA9IHNsYXNoLmN1cnJlbnQ7XG5cbiAgICAgIGxldCBkYyA9IGdyaWRfd2lkdGggLyBzaXplICsgMTtcbiAgICAgIGxldCBkciA9IGdyaWRfaGVpZ2h0IC8gc2l6ZSArIDE7XG5cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdmEubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbGV0IHYgPSB2YVtpXTtcbiAgICAgICAgbGV0IGggPSBoYVtpXTtcbiAgICAgICAgbGV0IGIgPSBiYVtpXTtcbiAgICAgICAgbGV0IHMgPSBzYVtpXTtcblxuICAgICAgICBsZXQgYyA9IGkgJSBkYztcbiAgICAgICAgbGV0IHIgPSBNYXRoLmZsb29yKGkgLyBkYyk7XG5cbiAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICBpZiAodiA9PT0gdHJ1ZSkge1xuICAgICAgICAgIG1vdmVUbyhjdHgsIGMgKiBzaXplLCByICogc2l6ZSk7XG4gICAgICAgICAgbGluZVRvKGN0eCwgYyAqIHNpemUsIHIgKiBzaXplICsgc2l6ZSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGggPT09IHRydWUpIHtcbiAgICAgICAgICBtb3ZlVG8oY3R4LCBjICogc2l6ZSwgciAqIHNpemUpO1xuICAgICAgICAgIGxpbmVUbyhjdHgsIGMgKiBzaXplICsgc2l6ZSwgciAqIHNpemUpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChiID09PSB0cnVlKSB7XG4gICAgICAgICAgbW92ZVRvKGN0eCwgYyAqIHNpemUgKyBzaXplLCByICogc2l6ZSArIHNpemUpO1xuICAgICAgICAgIGxpbmVUbyhjdHgsIGMgKiBzaXplLCByICogc2l6ZSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHMgPT09IHRydWUpIHtcbiAgICAgICAgICBtb3ZlVG8oY3R4LCBjICogc2l6ZSwgciAqIHNpemUgKyBzaXplKTtcbiAgICAgICAgICBsaW5lVG8oY3R4LCBjICogc2l6ZSArIHNpemUsIHIgKiBzaXplKTtcbiAgICAgICAgfVxuICAgICAgICBjdHguc3Ryb2tlKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgb2N0eC5jbGVhclJlY3QoMCwgMCwgd2luZG93LmlubmVyV2lkdGgsIHdpbmRvdy5pbm5lckhlaWdodCk7XG4gICAgb2N0eC5zdHJva2VSZWN0KFxuICAgICAgY29vcmRpbmF0ZXMuY3VycmVudFswXSAtIG9zdHJva2UgLyAyICsgeHAsXG4gICAgICBjb29yZGluYXRlcy5jdXJyZW50WzFdIC0gb3N0cm9rZSAvIDIgKyB5cCxcbiAgICAgIHNpemUgKyBvc3Ryb2tlLFxuICAgICAgc2l6ZSArIG9zdHJva2VcbiAgICApO1xuICB9XG5cbiAgZnVuY3Rpb24gZG93bkhhbmRsZXIoZSkge1xuICAgIGtleW1hcC5jdXJyZW50W2Uua2V5XSA9IHRydWU7XG4gICAga2V5QWN0aW9uKGUua2V5LCBlLnJlcGVhdCk7XG4gIH1cblxuICBmdW5jdGlvbiB1cEhhbmRsZXIoZSkge1xuICAgIGtleW1hcC5jdXJyZW50W2Uua2V5XSA9IGZhbHNlO1xuICB9XG5cbiAgZnVuY3Rpb24gY2xlYXJHcmlkKCkge1xuICAgIGxldCBjYW52YXNfd2lkdGggPSBjYW52YXNSZWYuY3VycmVudC5vZmZzZXRXaWR0aDtcbiAgICBsZXQgY2FudmFzX2hlaWdodCA9IGNhbnZhc1JlZi5jdXJyZW50Lm9mZnNldEhlaWdodDtcblxuICAgIGxldCBncmlkX3dpZHRoID0gY2FudmFzX3dpZHRoIC0geHAgKiAyICsgc2l6ZTtcbiAgICBsZXQgZ3JpZF9oZWlnaHQgPSBjYW52YXNfaGVpZ2h0IC0geXAgKiAyICsgc2l6ZTtcblxuICAgIGxldCBjb2x1bW5zID0gZ3JpZF93aWR0aCAvIHNpemU7XG4gICAgbGV0IHJvd3MgPSBncmlkX2hlaWdodCAvIHNpemU7XG5cbiAgICB2ZXJ0aWNhbC5jdXJyZW50ID0gQXJyYXkoY29sdW1ucyAqIHJvd3MpLmZpbGwoZmFsc2UpO1xuICAgIGhvcml6b250YWwuY3VycmVudCA9IHZlcnRpY2FsLmN1cnJlbnQuc2xpY2UoKTtcbiAgICBiYWNrc2xhc2guY3VycmVudCA9IHZlcnRpY2FsLmN1cnJlbnQuc2xpY2UoKTtcbiAgICBzbGFzaC5jdXJyZW50ID0gdmVydGljYWwuY3VycmVudC5zbGljZSgpO1xuICB9XG5cbiAgZnVuY3Rpb24gc2V0V2luZG93U2l6ZSgpIHtcbiAgICBsZXQgZ3JpZF93aWR0aCA9IE1hdGguZmxvb3IoKHdpbmRvdy5pbm5lcldpZHRoIC0geHAgKiAyKSAvIHNpemUpICogc2l6ZTtcbiAgICBsZXQgZ3JpZF9oZWlnaHQgPSBNYXRoLmZsb29yKCh3aW5kb3cuaW5uZXJIZWlnaHQgLSB5cCAqIDIpIC8gc2l6ZSkgKiBzaXplO1xuXG4gICAgbGV0IGNhbnZhc193aWR0aCA9IGdyaWRfd2lkdGggKyB4cCAqIDI7XG4gICAgbGV0IGNhbnZhc19oZWlnaHQgPSBncmlkX2hlaWdodCArIHlwICogMjtcblxuICAgIGxldCBkcHIgPSB3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbyB8fCAxO1xuXG4gICAgY2FudmFzUmVmLmN1cnJlbnQud2lkdGggPSBjYW52YXNfd2lkdGggKiBkcHI7XG4gICAgY2FudmFzUmVmLmN1cnJlbnQuaGVpZ2h0ID0gY2FudmFzX2hlaWdodCAqIGRwcjtcbiAgICBsZXQgY3R4ID0gY2FudmFzUmVmLmN1cnJlbnQuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICBjdHguc2NhbGUoZHByLCBkcHIpO1xuXG4gICAgb3ZlcmxheUNhbnZhc1JlZi5jdXJyZW50LndpZHRoID0gY2FudmFzX3dpZHRoICogZHByO1xuICAgIG92ZXJsYXlDYW52YXNSZWYuY3VycmVudC5oZWlnaHQgPSBjYW52YXNfaGVpZ2h0ICogZHByO1xuICAgIGxldCBvY3R4ID0gb3ZlcmxheUNhbnZhc1JlZi5jdXJyZW50LmdldENvbnRleHQoJzJkJyk7XG4gICAgb2N0eC5zY2FsZShkcHIsIGRwcik7XG5cbiAgICBzZXREaW1lbnNpb25zKFtjYW52YXNfd2lkdGgsIGNhbnZhc19oZWlnaHRdKTtcbiAgfVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGRpbWVuc2lvbnNbMF0gIT09IG51bGwpIHtcbiAgICAgIGNsZWFyR3JpZCgpO1xuICAgIH1cbiAgfSwgW2RpbWVuc2lvbnNdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICghb25jZSkge1xuICAgICAgc2V0V2luZG93U2l6ZSgpO1xuICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTmFtZSA9ICdsb2FkZWQnO1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGtleUFjdGlvbignaW5pdCcsIGZhbHNlKTtcbiAgICAgIH0sIDApO1xuICAgICAgb25jZSA9IHRydWU7XG4gICAgfVxuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBkb3duSGFuZGxlcik7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgdXBIYW5kbGVyKTtcbiAgICAvLyBSZW1vdmUgZXZlbnQgbGlzdGVuZXJzIG9uIGNsZWFudXBcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBkb3duSGFuZGxlcik7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5dXAnLCB1cEhhbmRsZXIpO1xuICAgIH07XG4gIH0sIFttb2RlLCBoZWxwXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8VGhlbWVQcm92aWRlciB0aGVtZT17dGhlbWV9PlxuICAgICAgPGRpdj5cbiAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgPHRpdGxlPkhleDwvdGl0bGU+XG4gICAgICAgIDwvSGVhZD5cbiAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgICAgICBAZm9udC1mYWNlIHtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnY3VzdG9tJztcbiAgICAgICAgICAgIHNyYzogdXJsKCcvc3RhdGljL2ZvbnRzL0lCTVBsZXhNb25vLVJlZ3VsYXIud29mZjInKSBmb3JtYXQoJ3dvZmYyJyksXG4gICAgICAgICAgICAgIHVybCgnL3N0YXRpYy9mb250cy9JQk1QbGV4TW9uby1SZWd1bGFyLndvZmYnKSBmb3JtYXQoJ3dvZmYnKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgKiB7XG4gICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICAgIH1cbiAgICAgICAgICBodG1sIHtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBjdXN0b20sIG1vbm9zcGFjZTtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogJHt0aGVtZS5mb250U2l6ZXNbMF19cHg7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogJHt0aGVtZS5saW5lSGVpZ2h0cy5ib2R5fTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaHRtbC5sb2FkZWQge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogI2RkZDtcbiAgICAgICAgICB9XG4gICAgICAgICAgYm9keSB7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICB0ZXh0YXJlYSB7XG4gICAgICAgICAgICBmb250LWZhbWlseTogaW5oZXJpdDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiBpbmhlcml0O1xuICAgICAgICAgIH1cbiAgICAgICAgICBwIHtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmtleXRpcCArIC5rZXl0aXAge1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDFweDtcbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgPGNhbnZhc1xuICAgICAgICAgIHJlZj17Y2FudmFzUmVmfVxuICAgICAgICAgIHN4PXt7IGJhY2tncm91bmQ6ICd3aGl0ZScgfX1cbiAgICAgICAgICBjc3M9e3tcbiAgICAgICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgICAgICAgbGVmdDogMCxcbiAgICAgICAgICAgIHRvcDogMCxcbiAgICAgICAgICAgIHdpZHRoOiBkaW1lbnNpb25zWzBdLFxuICAgICAgICAgICAgaGVpZ2h0OiBkaW1lbnNpb25zWzFdLFxuICAgICAgICAgICAgZGlzcGxheTogZGltZW5zaW9uc1swXSAhPT0gbnVsbCA/ICdibG9jaycgOiAnbm9uZScsXG4gICAgICAgICAgfX1cbiAgICAgICAgLz5cbiAgICAgICAgPGNhbnZhc1xuICAgICAgICAgIHJlZj17b3ZlcmxheUNhbnZhc1JlZn1cbiAgICAgICAgICBzeD17eyBiYWNrZ3JvdW5kOiAndHJhbnNwYXJlbnQnIH19XG4gICAgICAgICAgY3NzPXt7XG4gICAgICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgICAgICAgIGxlZnQ6IDAsXG4gICAgICAgICAgICB0b3A6IDAsXG4gICAgICAgICAgICB3aWR0aDogZGltZW5zaW9uc1swXSxcbiAgICAgICAgICAgIGhlaWdodDogZGltZW5zaW9uc1sxXSxcbiAgICAgICAgICAgIGRpc3BsYXk6IGRpbWVuc2lvbnNbMF0gIT09IG51bGwgPyAnYmxvY2snIDogJ25vbmUnLFxuICAgICAgICAgIH19XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdlxuICAgICAgICBjc3M9e3tcbiAgICAgICAgICBwb3NpdGlvbjogJ2ZpeGVkJyxcbiAgICAgICAgICBvdXRsaW5lOiAnc29saWQgMXB4IGJsYWNrJyxcbiAgICAgICAgICBkaXNwbGF5OiBoZWxwID8gJ2Jsb2NrJyA6ICdub25lJyxcbiAgICAgICAgICBtYXhXaWR0aDogYGNhbGMoMTAwJSAtICR7dGhlbWUuc3BhY2VbMF0gKiAyfXB4KWAsXG4gICAgICAgICAgYmFja2dyb3VuZDogJ3JnYmEoMjU1LDI1NSwyNTUsMC44KScsXG4gICAgICAgIH19XG4gICAgICAgIHN4PXt7IHB4OiAnMWNoJywgcGI6IDEsIHB0OiAxLCByaWdodDogMCwgYm90dG9tOiAwIH19XG4gICAgICA+XG4gICAgICAgIDxkaXYgc3g9e3sgbWFyZ2luQm90dG9tOiAwIH19PlxuICAgICAgICAgIEhleCBpcyBhIGtleWJvYXJkLWRyaXZlbiwgZ3JpZC1iYXNlZCBkcmF3aW5nIHRvb2wuXG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IHN0eWxlPXt7IHBvc2l0aW9uOiAncmVsYXRpdmUnIH19PlxuICAgICAgICAgIDxkaXYgc3g9e3sgbWFyZ2luQm90dG9tOiAwIH19PlxuICAgICAgICAgICAge0tleVRpcCgnZScpfSB0b2dnbGUgbW9kZTp7JyAnfVxuICAgICAgICAgICAge1snZHJhdycsICdlcmFzZSddLm1hcChtID0+IChcbiAgICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICBrZXk9e2Btb2RlXyR7bX1gfVxuICAgICAgICAgICAgICAgIHN4PXt7IHB4OiAnMWNoJyB9fVxuICAgICAgICAgICAgICAgIGNzcz17e1xuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDpcbiAgICAgICAgICAgICAgICAgICAgbSA9PT0gbW9kZVxuICAgICAgICAgICAgICAgICAgICAgID8gbW9kZSA9PT0gJ2RyYXcnXG4gICAgICAgICAgICAgICAgICAgICAgICA/ICdsaW1lZ3JlZW4nXG4gICAgICAgICAgICAgICAgICAgICAgICA6ICdob3RwaW5rJ1xuICAgICAgICAgICAgICAgICAgICAgIDogJ25vbmUnLFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7bX1cbiAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBzeD17eyBtYjogMSB9fT5EcmF3ICYgbW92ZTo8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNzcz17eyBkaXNwbGF5OiAnZmxleCcgfX0+XG4gICAgICAgICAgICA8ZGl2IHN4PXt7IGRpc3BsYXk6ICdmbGV4JywgbWFyZ2luUmlnaHQ6ICcyY2gnIH19PlxuICAgICAgICAgICAgICB7W1xuICAgICAgICAgICAgICAgIFswLCAwLCAwLCBzaXplXSxcbiAgICAgICAgICAgICAgICBbMCwgMCwgc2l6ZSwgMF0sXG4gICAgICAgICAgICAgICAgWzAsIHNpemUsIHNpemUsIHNpemVdLFxuICAgICAgICAgICAgICAgIFtzaXplLCAwLCBzaXplLCBzaXplXSxcbiAgICAgICAgICAgICAgICBbc2l6ZSwgMCwgMCwgc2l6ZV0sXG4gICAgICAgICAgICAgICAgWzAsIDAsIHNpemUsIHNpemVdLFxuICAgICAgICAgICAgICBdLm1hcCgoYywgaSkgPT4gKFxuICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImtleXRpcFwiXG4gICAgICAgICAgICAgICAgICBjc3M9e3tcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6ICcyY2gnLFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IHRoZW1lLnNwYWNlWzBdLFxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nTGVmdDogYGNhbGMoMWNoIC0gJHtzaXplIC8gMn1weClgLFxuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8c3ZnIHZpZXdCb3g9e2AwIDAgJHtzaXplfSAke3NpemV9YH0+XG4gICAgICAgICAgICAgICAgICAgIDxsaW5lXG4gICAgICAgICAgICAgICAgICAgICAgeDE9e2NbMF19XG4gICAgICAgICAgICAgICAgICAgICAgeTE9e2NbMV19XG4gICAgICAgICAgICAgICAgICAgICAgeDI9e2NbMl19XG4gICAgICAgICAgICAgICAgICAgICAgeTI9e2NbM119XG4gICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlPVwiYmxhY2tcIlxuICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZVdpZHRoPXtpID4gMyA/IDEgOiAyfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICB7WyfihpAnLCAn4oaTJywgJ+KGkScsICfihpInXS5tYXAoYSA9PiAoXG4gICAgICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImtleXRpcFwiXG4gICAgICAgICAgICAgICAgICBrZXk9e2BhcnJvd18ke2F9YH1cbiAgICAgICAgICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogJzJjaCcsXG4gICAgICAgICAgICAgICAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIHthfVxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IHN4PXt7IGRpc3BsYXk6ICdmbGV4JyB9fT5cbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luUmlnaHQ6ICcyY2gnIH19PlxuICAgICAgICAgICAgICB7S2V5VGlwKCdhJyl9XG4gICAgICAgICAgICAgIHtLZXlUaXAoJ3MnKX1cbiAgICAgICAgICAgICAge0tleVRpcCgnZCcpfVxuICAgICAgICAgICAgICB7S2V5VGlwKCdmJyl9XG4gICAgICAgICAgICAgIHtLZXlUaXAoJ3InKX1cbiAgICAgICAgICAgICAge0tleVRpcCgnZycpfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICB7S2V5VGlwKCdoJyl9XG4gICAgICAgICAgICAgIHtLZXlUaXAoJ2onKX1cbiAgICAgICAgICAgICAge0tleVRpcCgnaycpfVxuICAgICAgICAgICAgICB7S2V5VGlwKCdsJyl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICBtdDogMCxcbiAgICAgICAgICAgICAgbWI6IDEsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIFNwZWNpYWw6XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIHtLZXlUaXAoJ3cnKX0gc2F2ZSBwbmcmbmJzcDsge0tleVRpcCgneCcpfSBjbGVhciZuYnNwOyB7S2V5VGlwKCc/Jyl9eycgJ31cbiAgICAgICAgICAgIHRvZ2dsZSBoZWxwXG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICB7aGVscCA/IG51bGwgOiAoXG4gICAgICAgIDxkaXZcbiAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgcG9zaXRpb246ICdmaXhlZCcsXG4gICAgICAgICAgICByaWdodDogMCxcbiAgICAgICAgICAgIGJvdHRvbTogMCxcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAge0tleVRpcCgnPycpfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICl9XG4gICAgPC9UaGVtZVByb3ZpZGVyPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcbiJdfQ== */\n/*@ sourceURL=/Users/grant.custer/Sites/constraint_systems/hex/pages/index.js */")), Object(theme_ui__WEBPACK_IMPORTED_MODULE_9__["jsx"])("canvas", {
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
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a.dynamic([["135641999", [_parts_theme__WEBPACK_IMPORTED_MODULE_8__["default"].fontSizes[0], _parts_theme__WEBPACK_IMPORTED_MODULE_8__["default"].lineHeights.body]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 329
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
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a.dynamic([["135641999", [_parts_theme__WEBPACK_IMPORTED_MODULE_8__["default"].fontSizes[0], _parts_theme__WEBPACK_IMPORTED_MODULE_8__["default"].lineHeights.body]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 341
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
      lineNumber: 355
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
  }, "Hex is a keyboard-driven, grid-based drawing tool."), Object(theme_ui__WEBPACK_IMPORTED_MODULE_9__["jsx"])("div", {
    style: {
      position: 'relative'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 368
    },
    __self: this
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_9__["jsx"])("div", {
    sx: {
      marginBottom: 0
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 369
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
        lineNumber: 372
      },
      __self: this
    }, m);
  })), Object(theme_ui__WEBPACK_IMPORTED_MODULE_9__["jsx"])("div", {
    sx: {
      mb: 1
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 388
    },
    __self: this
  }, "Draw & move:"), Object(theme_ui__WEBPACK_IMPORTED_MODULE_9__["jsx"])("div", {
    css: {
      display: 'flex'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 389
    },
    __self: this
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_9__["jsx"])("div", {
    sx: {
      display: 'flex',
      marginRight: '2ch'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 390
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
        lineNumber: 399
      },
      __self: this
    }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_9__["jsx"])("svg", {
      viewBox: "0 0 ".concat(size, " ").concat(size),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 407
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
        lineNumber: 408
      },
      __self: this
    })));
  })), Object(theme_ui__WEBPACK_IMPORTED_MODULE_9__["jsx"])("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 420
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
        lineNumber: 422
      },
      __self: this
    }, a);
  }))), Object(theme_ui__WEBPACK_IMPORTED_MODULE_9__["jsx"])("div", {
    sx: {
      display: 'flex'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 436
    },
    __self: this
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_9__["jsx"])("div", {
    style: {
      marginRight: '2ch'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 437
    },
    __self: this
  }, KeyTip('a'), KeyTip('s'), KeyTip('d'), KeyTip('f'), KeyTip('r'), KeyTip('g')), Object(theme_ui__WEBPACK_IMPORTED_MODULE_9__["jsx"])("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 445
    },
    __self: this
  }, KeyTip('h'), KeyTip('j'), KeyTip('k'), KeyTip('l'))), Object(theme_ui__WEBPACK_IMPORTED_MODULE_9__["jsx"])("div", {
    sx: {
      mt: 0,
      mb: 1
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 452
    },
    __self: this
  }, "Special:"), Object(theme_ui__WEBPACK_IMPORTED_MODULE_9__["jsx"])("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 460
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
      lineNumber: 467
    },
    __self: this
  }, KeyTip('?')));
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

})
//# sourceMappingURL=index.js.857eb59e87c991ed804c.hot-update.js.map