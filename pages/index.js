/* @jsx jsx */
import React, { useState, useEffect, useRef, useCallback } from 'react';
import Head from 'next/head';
import theme from '../parts/theme';
import { jsx } from 'theme-ui';
import { ThemeProvider } from 'theme-ui';
import { requestInterval } from '../parts/utils';

let fs = theme.fontSizes[0];

let once = false;
let size = 14;

let special_keys = 'x?ew'.split('');

Object.fromEntries = arr =>
  Object.assign({}, ...Array.from(arr, ([k, v]) => ({ [k]: v })));

let xp = 4;
let yp = 4;

const Home = () => {
  let [dimensions, setDimensions] = useState([null, null]);
  let [mode, setMode] = useState('draw');

  let canvasRef = useRef();
  let overlayCanvasRef = useRef();

  let requestRef = useRef();
  let keymap = useRef({});
  let coordinates = useRef([0, 0]);
  let vertical = useRef(null);
  let horizontal = useRef(null);
  let backslash = useRef(null);
  let slash = useRef(null);
  let [help, toggleHelp] = useState(true);

  function KeyTip(letter) {
    return (
      <span
        className="keytip"
        onClick={() => {
          keymap.current[letter] = true;
          keyAction(letter, false);
          keymap.current[letter] = false;
        }}
        sx={{
          outline: 'solid 1px black',
          width: '2ch',
          textAlign: 'center',
          display: 'inline-block',
          userSelect: 'none',
          cursor: 'default',
        }}
      >
        {letter}
      </span>
    );
  }

  function keyAction(key, repeat) {
    let canvas_width = Math.floor(canvasRef.current.offsetWidth);
    let canvas_height = Math.floor(canvasRef.current.offsetHeight);

    let grid_width = canvas_width - xp * 2 + size;
    let grid_height = canvas_height - yp * 2 + size;

    let ctx = canvasRef.current.getContext('2d');
    ctx.fillStyle = 'black';

    let _mode = mode;

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
        let encoded = canvasRef.current.toDataURL('image/png');
        let link = document.createElement('a');
        link.setAttribute('href', encoded);
        link.setAttribute('download', 'hex.png');
        link.dispatchEvent(
          new MouseEvent(`click`, {
            bubbles: true,
            cancelable: true,
            view: window,
          })
        );
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

    let octx = overlayCanvasRef.current.getContext('2d');
    octx.strokeStyle = _mode === 'draw' ? 'limegreen' : 'hotpink';
    let ostroke = 4;
    octx.lineWidth = ostroke;

    let current = coordinates.current;

    let inc = size;
    let modify = [0, 0];
    if (keymap.current['j']) modify[1] += inc;
    if (keymap.current['k']) modify[1] += -inc;
    if (keymap.current['h']) modify[0] += -inc;
    if (keymap.current['l']) modify[0] += inc;

    let next = [current[0] + modify[0], current[1] + modify[1]];

    if (next[0] < 0) next[0] = grid_width - size * 2;
    if (next[0] >= grid_width - size) next[0] = 0;
    if (next[1] < 0) next[1] = grid_height - size * 2;
    if (next[1] >= grid_height - size) next[1] = 0;
    coordinates.current = next;

    // modify drawing
    let c = next[0] / size;
    let r = next[1] / size;

    let new_val = _mode === 'draw' ? true : false;
    if (keymap.current['a']) {
      let index = r * (grid_width / size + 1) + c;
      vertical.current[index] = new_val;
    }
    if (keymap.current['d']) {
      let index = (r + 1) * (grid_width / size + 1) + c;
      horizontal.current[index] = new_val;
    }
    if (keymap.current['s']) {
      let index = r * (grid_width / size + 1) + c;
      horizontal.current[index] = new_val;
    }
    if (keymap.current['f']) {
      let index = r * (grid_width / size + 1) + c + 1;
      vertical.current[index] = new_val;
    }
    if (keymap.current['g']) {
      let index = r * (grid_width / size + 1) + c;
      backslash.current[index] = new_val;
    }
    if (keymap.current['r']) {
      let index = r * (grid_width / size + 1) + c;
      slash.current[index] = new_val;
    }

    function moveTo(ctx, x, y) {
      ctx.moveTo(x + xp, y + yp);
    }

    function lineTo(ctx, x, y) {
      ctx.lineTo(x + xp, y + yp);
    }

    ctx.fillStyle = 'white';
    ctx.fillRect(0, 0, canvas_width, canvas_height);

    if (vertical.current !== null) {
      let va = vertical.current;
      let ha = horizontal.current;
      let ba = backslash.current;
      let sa = slash.current;

      let dc = grid_width / size + 1;
      let dr = grid_height / size + 1;

      for (let i = 0; i < va.length; i++) {
        let v = va[i];
        let h = ha[i];
        let b = ba[i];
        let s = sa[i];

        let c = i % dc;
        let r = Math.floor(i / dc);

        ctx.beginPath();
        if (v === true) {
          moveTo(ctx, c * size, r * size);
          lineTo(ctx, c * size, r * size + size);
        }
        if (h === true) {
          moveTo(ctx, c * size, r * size);
          lineTo(ctx, c * size + size, r * size);
        }
        if (b === true) {
          moveTo(ctx, c * size + size, r * size + size);
          lineTo(ctx, c * size, r * size);
        }
        if (s === true) {
          moveTo(ctx, c * size, r * size + size);
          lineTo(ctx, c * size + size, r * size);
        }
        ctx.stroke();
      }
    }

    octx.clearRect(0, 0, window.innerWidth, window.innerHeight);
    octx.strokeRect(
      coordinates.current[0] - ostroke / 2 + xp,
      coordinates.current[1] - ostroke / 2 + yp,
      size + ostroke,
      size + ostroke
    );
  }

  function downHandler(e) {
    keymap.current[e.key] = true;
    keyAction(e.key, e.repeat);
  }

  function upHandler(e) {
    keymap.current[e.key] = false;
  }

  function clearGrid() {
    let canvas_width = canvasRef.current.offsetWidth;
    let canvas_height = canvasRef.current.offsetHeight;

    let grid_width = canvas_width - xp * 2 + size;
    let grid_height = canvas_height - yp * 2 + size;

    let columns = grid_width / size;
    let rows = grid_height / size;

    vertical.current = Array(columns * rows).fill(false);
    horizontal.current = vertical.current.slice();
    backslash.current = vertical.current.slice();
    slash.current = vertical.current.slice();
  }

  function setWindowSize() {
    let grid_width = Math.floor((window.innerWidth - xp * 2) / size) * size;
    let grid_height = Math.floor((window.innerHeight - yp * 2) / size) * size;

    let canvas_width = grid_width + xp * 2;
    let canvas_height = grid_height + yp * 2;

    let dpr = window.devicePixelRatio || 1;

    canvasRef.current.width = canvas_width * dpr;
    canvasRef.current.height = canvas_height * dpr;
    let ctx = canvasRef.current.getContext('2d');
    ctx.scale(dpr, dpr);

    overlayCanvasRef.current.width = canvas_width * dpr;
    overlayCanvasRef.current.height = canvas_height * dpr;
    let octx = overlayCanvasRef.current.getContext('2d');
    octx.scale(dpr, dpr);

    setDimensions([canvas_width, canvas_height]);
  }

  useEffect(() => {
    if (dimensions[0] !== null) {
      clearGrid();
    }
  }, [dimensions]);

  useEffect(() => {
    if (!once) {
      setWindowSize();
      document.documentElement.className = 'loaded';
      setTimeout(() => {
        keyAction('init', false);
      }, 0);
      once = true;
    }

    window.addEventListener('keydown', downHandler);
    window.addEventListener('keyup', upHandler);
    // Remove event listeners on cleanup
    return () => {
      window.removeEventListener('keydown', downHandler);
      window.removeEventListener('keyup', upHandler);
    };
  }, [mode, help]);

  return (
    <ThemeProvider theme={theme}>
      <div>
        <Head>
          <title>Hex</title>
        </Head>
        <style jsx global>{`
          @font-face {
            font-family: 'custom';
            src: url('/static/fonts/IBMPlexMono-Regular.woff2') format('woff2'),
              url('/static/fonts/IBMPlexMono-Regular.woff') format('woff');
          }
          * {
            box-sizing: border-box;
          }
          html {
            font-family: custom, monospace;
            font-size: ${theme.fontSizes[0]}px;
            line-height: ${theme.lineHeights.body};
          }
          html.loaded {
            background: #ddd;
          }
          body {
            margin: 0;
            padding: 10px;
          }
          textarea {
            font-family: inherit;
            font-size: inherit;
            line-height: inherit;
          }
          p {
            margin: 0;
          }
          .keytip + .keytip {
            margin-left: 1px;
          }
        `}</style>
        <canvas
          ref={canvasRef}
          sx={{ background: 'white' }}
          css={{
            position: 'absolute',
            left: 0,
            top: 0,
            width: dimensions[0],
            height: dimensions[1],
            display: dimensions[0] !== null ? 'block' : 'none',
          }}
        />
        <canvas
          ref={overlayCanvasRef}
          sx={{ background: 'transparent' }}
          css={{
            position: 'absolute',
            left: 0,
            top: 0,
            width: dimensions[0],
            height: dimensions[1],
            display: dimensions[0] !== null ? 'block' : 'none',
          }}
        />
      </div>

      <div
        css={{
          position: 'fixed',
          outline: 'solid 1px black',
          display: help ? 'block' : 'none',
          maxWidth: `calc(100% - ${theme.space[0] * 2}px)`,
          background: 'rgba(255,255,255,0.8)',
        }}
        sx={{ px: '1ch', pb: 1, pt: 1, right: 0, bottom: 0 }}
      >
        <div sx={{ marginBottom: 0 }}>
          Hex is a keyboard-driven, grid-based drawing tool.
        </div>
        <div style={{ position: 'relative' }}>
          <div sx={{ marginBottom: 0 }}>
            {KeyTip('e')} toggle mode:{' '}
            {['draw', 'erase'].map(m => (
              <span
                key={`mode_${m}`}
                sx={{ px: '1ch' }}
                css={{
                  background:
                    m === mode
                      ? mode === 'draw'
                        ? 'limegreen'
                        : 'hotpink'
                      : 'none',
                }}
              >
                {m}
              </span>
            ))}
          </div>
          <div sx={{ mb: 1 }}>Draw & move:</div>
          <div css={{ display: 'flex' }}>
            <div sx={{ display: 'flex', marginRight: '2ch' }}>
              {[
                [0, 0, 0, size],
                [0, 0, size, 0],
                [0, size, size, size],
                [size, 0, size, size],
                [size, 0, 0, size],
                [0, 0, size, size],
              ].map((c, i) => (
                <div
                  className="keytip"
                  css={{
                    width: '2ch',
                    height: theme.space[0],
                    paddingLeft: `calc(1ch - ${size / 2}px)`,
                  }}
                >
                  <svg viewBox={`0 0 ${size} ${size}`}>
                    <line
                      x1={c[0]}
                      y1={c[1]}
                      x2={c[2]}
                      y2={c[3]}
                      stroke="black"
                      strokeWidth={i > 3 ? 1 : 2}
                    />
                  </svg>
                </div>
              ))}
            </div>
            <div>
              {['←', '↓', '↑', '→'].map(a => (
                <span
                  className="keytip"
                  key={`arrow_${a}`}
                  sx={{
                    display: 'inline-block',
                    width: '2ch',
                    textAlign: 'center',
                  }}
                >
                  {a}
                </span>
              ))}
            </div>
          </div>
          <div sx={{ display: 'flex' }}>
            <div style={{ marginRight: '2ch' }}>
              {KeyTip('a')}
              {KeyTip('s')}
              {KeyTip('d')}
              {KeyTip('f')}
              {KeyTip('r')}
              {KeyTip('g')}
            </div>
            <div>
              {KeyTip('h')}
              {KeyTip('j')}
              {KeyTip('k')}
              {KeyTip('l')}
            </div>
          </div>
          <div
            sx={{
              mt: 0,
              mb: 1,
            }}
          >
            Special:
          </div>
          <div sx={{ mb: 0 }}>
            {KeyTip('w')} save png&nbsp; {KeyTip('x')} clear&nbsp; {KeyTip('?')}{' '}
            toggle help
          </div>
          <div sx={{}}>
            <a href="https://github.com/constraint-systems/hex" target="_blank">
              View source↗
            </a>
          </div>
        </div>
      </div>
      {help ? null : (
        <div
          sx={{
            position: 'fixed',
            right: 0,
            bottom: 0,
          }}
        >
          {KeyTip('?')}
        </div>
      )}
    </ThemeProvider>
  );
};

export default Home;
