'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [31],
  {
    3699: function (e, t) {
      let r;
      (Object.defineProperty(t, '__esModule', { value: !0 }),
        (function (e, t) {
          for (var r in t) Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
        })(t, {
          DOMAttributeNames: function () {
            return i;
          },
          default: function () {
            return s;
          },
          isEqualNode: function () {
            return o;
          }
        }));
      let i = {
        acceptCharset: 'accept-charset',
        className: 'class',
        htmlFor: 'for',
        httpEquiv: 'http-equiv',
        noModule: 'noModule'
      };
      function n(e) {
        let { type: t, props: r } = e,
          n = document.createElement(t);
        for (let e in r) {
          if (
            !r.hasOwnProperty(e) ||
            'children' === e ||
            'dangerouslySetInnerHTML' === e ||
            void 0 === r[e]
          )
            continue;
          let o = i[e] || e.toLowerCase();
          'script' === t && ('async' === o || 'defer' === o || 'noModule' === o)
            ? (n[o] = !!r[e])
            : n.setAttribute(o, r[e]);
        }
        let { children: o, dangerouslySetInnerHTML: s } = r;
        return (
          s
            ? (n.innerHTML = s.__html || '')
            : o && (n.textContent = 'string' == typeof o ? o : Array.isArray(o) ? o.join('') : ''),
          n
        );
      }
      function o(e, t) {
        if (e instanceof HTMLElement && t instanceof HTMLElement) {
          let r = t.getAttribute('nonce');
          if (r && !e.getAttribute('nonce')) {
            let i = t.cloneNode(!0);
            return (i.setAttribute('nonce', ''), (i.nonce = r), r === e.nonce && e.isEqualNode(i));
          }
        }
        return e.isEqualNode(t);
      }
      function s() {
        return {
          mountedInstances: new Set(),
          updateHead: (e) => {
            let t = {};
            e.forEach((e) => {
              if ('link' === e.type && e.props['data-optimized-fonts']) {
                if (document.querySelector('style[data-href="' + e.props['data-href'] + '"]'))
                  return;
                ((e.props.href = e.props['data-href']), (e.props['data-href'] = void 0));
              }
              let r = t[e.type] || [];
              (r.push(e), (t[e.type] = r));
            });
            let i = t.title ? t.title[0] : null,
              n = '';
            if (i) {
              let { children: e } = i.props;
              n = 'string' == typeof e ? e : Array.isArray(e) ? e.join('') : '';
            }
            (n !== document.title && (document.title = n),
              ['meta', 'base', 'link', 'style', 'script'].forEach((e) => {
                r(e, t[e] || []);
              }));
          }
        };
      }
      ((r = (e, t) => {
        let r = document.getElementsByTagName('head')[0],
          i = r.querySelector('meta[name=next-head-count]'),
          s = Number(i.content),
          a = [];
        for (
          let t = 0, r = i.previousElementSibling;
          t < s;
          t++, r = (null == r ? void 0 : r.previousElementSibling) || null
        ) {
          var l;
          (null == r ? void 0 : null == (l = r.tagName) ? void 0 : l.toLowerCase()) === e &&
            a.push(r);
        }
        let u = t.map(n).filter((e) => {
          for (let t = 0, r = a.length; t < r; t++) if (o(a[t], e)) return (a.splice(t, 1), !1);
          return !0;
        });
        (a.forEach((e) => {
          var t;
          return null == (t = e.parentNode) ? void 0 : t.removeChild(e);
        }),
          u.forEach((e) => r.insertBefore(e, i)),
          (i.content = (s - a.length + u.length).toString()));
      }),
        ('function' == typeof t.default || ('object' == typeof t.default && null !== t.default)) &&
          void 0 === t.default.__esModule &&
          (Object.defineProperty(t.default, '__esModule', { value: !0 }),
          Object.assign(t.default, t),
          (e.exports = t.default)));
    },
    3516: function (e, t, r) {
      (Object.defineProperty(t, '__esModule', { value: !0 }),
        (function (e, t) {
          for (var r in t) Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
        })(t, {
          default: function () {
            return y;
          },
          handleClientScriptLoad: function () {
            return g;
          },
          initScriptLoader: function () {
            return v;
          }
        }));
      let i = r(7283),
        n = r(9091),
        o = r(7230),
        s = i._(r(2667)),
        a = n._(r(5419)),
        l = r(3186),
        u = r(3699),
        d = r(5966),
        h = new Map(),
        c = new Set(),
        p = [
          'onLoad',
          'onReady',
          'dangerouslySetInnerHTML',
          'children',
          'onError',
          'strategy',
          'stylesheets'
        ],
        m = (e) => {
          if (s.default.preinit) {
            e.forEach((e) => {
              s.default.preinit(e, { as: 'style' });
            });
            return;
          }
          if ('undefined' != typeof window) {
            let t = document.head;
            e.forEach((e) => {
              let r = document.createElement('link');
              ((r.type = 'text/css'), (r.rel = 'stylesheet'), (r.href = e), t.appendChild(r));
            });
          }
        },
        f = (e) => {
          let {
              src: t,
              id: r,
              onLoad: i = () => {},
              onReady: n = null,
              dangerouslySetInnerHTML: o,
              children: s = '',
              strategy: a = 'afterInteractive',
              onError: l,
              stylesheets: d
            } = e,
            f = r || t;
          if (f && c.has(f)) return;
          if (h.has(t)) {
            (c.add(f), h.get(t).then(i, l));
            return;
          }
          let g = () => {
              (n && n(), c.add(f));
            },
            v = document.createElement('script'),
            b = new Promise((e, t) => {
              (v.addEventListener('load', function (t) {
                (e(), i && i.call(this, t), g());
              }),
                v.addEventListener('error', function (e) {
                  t(e);
                }));
            }).catch(function (e) {
              l && l(e);
            });
          for (let [r, i] of (o
            ? ((v.innerHTML = o.__html || ''), g())
            : s
              ? ((v.textContent = 'string' == typeof s ? s : Array.isArray(s) ? s.join('') : ''),
                g())
              : t && ((v.src = t), h.set(t, b)),
          Object.entries(e))) {
            if (void 0 === i || p.includes(r)) continue;
            let e = u.DOMAttributeNames[r] || r.toLowerCase();
            v.setAttribute(e, i);
          }
          ('worker' === a && v.setAttribute('type', 'text/partytown'),
            v.setAttribute('data-nscript', a),
            d && m(d),
            document.body.appendChild(v));
        };
      function g(e) {
        let { strategy: t = 'afterInteractive' } = e;
        'lazyOnload' === t
          ? window.addEventListener('load', () => {
              (0, d.requestIdleCallback)(() => f(e));
            })
          : f(e);
      }
      function v(e) {
        (e.forEach(g),
          [
            ...document.querySelectorAll('[data-nscript="beforeInteractive"]'),
            ...document.querySelectorAll('[data-nscript="beforePageRender"]')
          ].forEach((e) => {
            let t = e.id || e.getAttribute('src');
            c.add(t);
          }));
      }
      function b(e) {
        let {
            id: t,
            src: r = '',
            onLoad: i = () => {},
            onReady: n = null,
            strategy: u = 'afterInteractive',
            onError: h,
            stylesheets: p,
            ...m
          } = e,
          {
            updateScripts: g,
            scripts: v,
            getIsSsr: b,
            appDir: y,
            nonce: x
          } = (0, a.useContext)(l.HeadManagerContext),
          w = (0, a.useRef)(!1);
        (0, a.useEffect)(() => {
          let e = t || r;
          w.current || (n && e && c.has(e) && n(), (w.current = !0));
        }, [n, t, r]);
        let S = (0, a.useRef)(!1);
        if (
          ((0, a.useEffect)(() => {
            !S.current &&
              ('afterInteractive' === u
                ? f(e)
                : 'lazyOnload' === u &&
                  ('complete' === document.readyState
                    ? (0, d.requestIdleCallback)(() => f(e))
                    : window.addEventListener('load', () => {
                        (0, d.requestIdleCallback)(() => f(e));
                      })),
              (S.current = !0));
          }, [e, u]),
          ('beforeInteractive' === u || 'worker' === u) &&
            (g
              ? ((v[u] = (v[u] || []).concat([
                  { id: t, src: r, onLoad: i, onReady: n, onError: h, ...m }
                ])),
                g(v))
              : b && b()
                ? c.add(t || r)
                : b && !b() && f(e)),
          y)
        ) {
          if (
            (p &&
              p.forEach((e) => {
                s.default.preinit(e, { as: 'style' });
              }),
            'beforeInteractive' === u)
          )
            return r
              ? (s.default.preload(
                  r,
                  m.integrity
                    ? { as: 'script', integrity: m.integrity, nonce: x }
                    : { as: 'script', nonce: x }
                ),
                (0, o.jsx)('script', {
                  nonce: x,
                  dangerouslySetInnerHTML: {
                    __html:
                      '(self.__next_s=self.__next_s||[]).push(' +
                      JSON.stringify([r, { ...m, id: t }]) +
                      ')'
                  }
                }))
              : (m.dangerouslySetInnerHTML &&
                  ((m.children = m.dangerouslySetInnerHTML.__html),
                  delete m.dangerouslySetInnerHTML),
                (0, o.jsx)('script', {
                  nonce: x,
                  dangerouslySetInnerHTML: {
                    __html:
                      '(self.__next_s=self.__next_s||[]).push(' +
                      JSON.stringify([0, { ...m, id: t }]) +
                      ')'
                  }
                }));
          'afterInteractive' === u &&
            r &&
            s.default.preload(
              r,
              m.integrity
                ? { as: 'script', integrity: m.integrity, nonce: x }
                : { as: 'script', nonce: x }
            );
        }
        return null;
      }
      Object.defineProperty(b, '__nextScript', { value: !0 });
      let y = b;
      ('function' == typeof t.default || ('object' == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, '__esModule', { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    3500: function (e, t, r) {
      function i(e, t = {}) {
        let r = !1;
        function n(t) {
          let r = (['container', 'root'].includes(null != t ? t : '') ? [e] : [e, t])
              .filter(Boolean)
              .join('__'),
            i = `chakra-${r}`;
          return { className: i, selector: `.${i}`, toString: () => t };
        }
        return {
          parts: function (...o) {
            for (let e of (!(function () {
              if (!r) {
                r = !0;
                return;
              }
              throw Error(
                '[anatomy] .part(...) should only be called once. Did you mean to use .extend(...) ?'
              );
            })(),
            o))
              t[e] = n(e);
            return i(e, t);
          },
          toPart: n,
          extend: function (...r) {
            for (let e of r) e in t || (t[e] = n(e));
            return i(e, t);
          },
          selectors: function () {
            return Object.fromEntries(Object.entries(t).map(([e, t]) => [e, t.selector]));
          },
          classnames: function () {
            return Object.fromEntries(Object.entries(t).map(([e, t]) => [e, t.className]));
          },
          get keys() {
            return Object.keys(t);
          },
          __type: {}
        };
      }
      r.d(t, {
        sA: function () {
          return n;
        },
        aP: function () {
          return o;
        },
        $5: function () {
          return s;
        },
        AB: function () {
          return a;
        },
        SG: function () {
          return T;
        },
        TB: function () {
          return l;
        },
        iU: function () {
          return u;
        },
        lN: function () {
          return d;
        },
        TJ: function () {
          return h;
        },
        ao: function () {
          return c;
        },
        X: function () {
          return p;
        },
        vE: function () {
          return m;
        },
        rk: function () {
          return f;
        },
        wl: function () {
          return g;
        },
        V1: function () {
          return v;
        },
        Ji: function () {
          return b;
        },
        Eb: function () {
          return y;
        },
        f2: function () {
          return x;
        },
        nY: function () {
          return w;
        },
        q0: function () {
          return S;
        },
        aj: function () {
          return k;
        },
        ke: function () {
          return P;
        },
        l1: function () {
          return C;
        },
        nw: function () {
          return A;
        },
        VM: function () {
          return E;
        }
      });
      var n = i('accordion').parts('root', 'container', 'button', 'panel').extend('icon'),
        o = i('alert').parts('title', 'description', 'container').extend('icon', 'spinner'),
        s = i('avatar').parts('label', 'badge', 'container').extend('excessLabel', 'group'),
        a = i('breadcrumb').parts('link', 'item', 'container').extend('separator');
      i('button').parts();
      var l = i('checkbox').parts('control', 'icon', 'container').extend('label');
      i('progress').parts('track', 'filledTrack').extend('label');
      var u = i('drawer')
          .parts('overlay', 'dialogContainer', 'dialog')
          .extend('header', 'closeButton', 'body', 'footer'),
        d = i('editable').parts('preview', 'input', 'textarea'),
        h = i('form').parts('container', 'requiredIndicator', 'helperText'),
        c = i('formError').parts('text', 'icon'),
        p = i('input').parts('addon', 'field', 'element', 'group'),
        m = i('list').parts('container', 'item', 'icon'),
        f = i('menu')
          .parts('button', 'list', 'item')
          .extend('groupTitle', 'icon', 'command', 'divider'),
        g = i('modal')
          .parts('overlay', 'dialogContainer', 'dialog')
          .extend('header', 'closeButton', 'body', 'footer'),
        v = i('numberinput').parts('root', 'field', 'stepperGroup', 'stepper');
      i('pininput').parts('field');
      var b = i('popover')
          .parts('content', 'header', 'body', 'footer')
          .extend('popper', 'arrow', 'closeButton'),
        y = i('progress').parts('label', 'filledTrack', 'track'),
        x = i('radio').parts('container', 'control', 'label'),
        w = i('select').parts('field', 'icon'),
        S = i('slider').parts('container', 'track', 'thumb', 'filledTrack', 'mark'),
        k = i('stat').parts('container', 'label', 'helpText', 'number', 'icon'),
        P = i('switch').parts('container', 'track', 'thumb', 'label'),
        C = i('table').parts('table', 'thead', 'tbody', 'tr', 'th', 'td', 'tfoot', 'caption'),
        A = i('tabs').parts('root', 'tab', 'tablist', 'tabpanel', 'tabpanels', 'indicator'),
        E = i('tag').parts('container', 'label', 'closeButton'),
        T = i('card').parts('container', 'header', 'body', 'footer');
      i('stepper').parts(
        'stepper',
        'step',
        'title',
        'description',
        'indicator',
        'separator',
        'icon',
        'number'
      );
    },
    6590: function (e, t, r) {
      let i;
      function n(e, t) {
        return (
          t || (t = e.slice(0)),
          Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } }))
        );
      }
      r.d(t, {
        x: function () {
          return sC;
        }
      });
      var o,
        s = r(6480),
        a = r(7230);
      function l() {
        let e = n([
          '\n  :root,\n  :host {\n    --chakra-vh: 100vh;\n  }\n\n  @supports (height: -webkit-fill-available) {\n    :root,\n    :host {\n      --chakra-vh: -webkit-fill-available;\n    }\n  }\n\n  @supports (height: -moz-fill-available) {\n    :root,\n    :host {\n      --chakra-vh: -moz-fill-available;\n    }\n  }\n\n  @supports (height: 100dvh) {\n    :root,\n    :host {\n      --chakra-vh: 100dvh;\n    }\n  }\n'
        ]);
        return (
          (l = function () {
            return e;
          }),
          e
        );
      }
      function u() {
        let e = n([
          '\n      html {\n        line-height: 1.5;\n        -webkit-text-size-adjust: 100%;\n        font-family: system-ui, sans-serif;\n        -webkit-font-smoothing: antialiased;\n        text-rendering: optimizeLegibility;\n        -moz-osx-font-smoothing: grayscale;\n        touch-action: manipulation;\n      }\n\n      body {\n        position: relative;\n        min-height: 100%;\n        margin: 0;\n        font-feature-settings: "kern";\n      }\n\n      ',
          ' :where(*, *::before, *::after) {\n        border-width: 0;\n        border-style: solid;\n        box-sizing: border-box;\n        word-wrap: break-word;\n      }\n\n      main {\n        display: block;\n      }\n\n      ',
          ' hr {\n        border-top-width: 1px;\n        box-sizing: content-box;\n        height: 0;\n        overflow: visible;\n      }\n\n      ',
          ' :where(pre, code, kbd,samp) {\n        font-family: SFMono-Regular, Menlo, Monaco, Consolas, monospace;\n        font-size: 1em;\n      }\n\n      ',
          ' a {\n        background-color: transparent;\n        color: inherit;\n        text-decoration: inherit;\n      }\n\n      ',
          ' abbr[title] {\n        border-bottom: none;\n        text-decoration: underline;\n        -webkit-text-decoration: underline dotted;\n        text-decoration: underline dotted;\n      }\n\n      ',
          ' :where(b, strong) {\n        font-weight: bold;\n      }\n\n      ',
          ' small {\n        font-size: 80%;\n      }\n\n      ',
          ' :where(sub,sup) {\n        font-size: 75%;\n        line-height: 0;\n        position: relative;\n        vertical-align: baseline;\n      }\n\n      ',
          ' sub {\n        bottom: -0.25em;\n      }\n\n      ',
          ' sup {\n        top: -0.5em;\n      }\n\n      ',
          ' img {\n        border-style: none;\n      }\n\n      ',
          ' :where(button, input, optgroup, select, textarea) {\n        font-family: inherit;\n        font-size: 100%;\n        line-height: 1.15;\n        margin: 0;\n      }\n\n      ',
          ' :where(button, input) {\n        overflow: visible;\n      }\n\n      ',
          ' :where(button, select) {\n        text-transform: none;\n      }\n\n      ',
          ' :where(\n          button::-moz-focus-inner,\n          [type="button"]::-moz-focus-inner,\n          [type="reset"]::-moz-focus-inner,\n          [type="submit"]::-moz-focus-inner\n        ) {\n        border-style: none;\n        padding: 0;\n      }\n\n      ',
          ' fieldset {\n        padding: 0.35em 0.75em 0.625em;\n      }\n\n      ',
          ' legend {\n        box-sizing: border-box;\n        color: inherit;\n        display: table;\n        max-width: 100%;\n        padding: 0;\n        white-space: normal;\n      }\n\n      ',
          ' progress {\n        vertical-align: baseline;\n      }\n\n      ',
          ' textarea {\n        overflow: auto;\n      }\n\n      ',
          ' :where([type="checkbox"], [type="radio"]) {\n        box-sizing: border-box;\n        padding: 0;\n      }\n\n      ',
          ' input[type="number"]::-webkit-inner-spin-button,\n      ',
          ' input[type="number"]::-webkit-outer-spin-button {\n        -webkit-appearance: none !important;\n      }\n\n      ',
          ' input[type="number"] {\n        -moz-appearance: textfield;\n      }\n\n      ',
          ' input[type="search"] {\n        -webkit-appearance: textfield;\n        outline-offset: -2px;\n      }\n\n      ',
          ' input[type="search"]::-webkit-search-decoration {\n        -webkit-appearance: none !important;\n      }\n\n      ',
          ' ::-webkit-file-upload-button {\n        -webkit-appearance: button;\n        font: inherit;\n      }\n\n      ',
          ' details {\n        display: block;\n      }\n\n      ',
          ' summary {\n        display: list-item;\n      }\n\n      template {\n        display: none;\n      }\n\n      [hidden] {\n        display: none !important;\n      }\n\n      ',
          ' :where(\n          blockquote,\n          dl,\n          dd,\n          h1,\n          h2,\n          h3,\n          h4,\n          h5,\n          h6,\n          hr,\n          figure,\n          p,\n          pre\n        ) {\n        margin: 0;\n      }\n\n      ',
          ' button {\n        background: transparent;\n        padding: 0;\n      }\n\n      ',
          ' fieldset {\n        margin: 0;\n        padding: 0;\n      }\n\n      ',
          ' :where(ol, ul) {\n        margin: 0;\n        padding: 0;\n      }\n\n      ',
          ' textarea {\n        resize: vertical;\n      }\n\n      ',
          ' :where(button, [role="button"]) {\n        cursor: pointer;\n      }\n\n      ',
          ' button::-moz-focus-inner {\n        border: 0 !important;\n      }\n\n      ',
          ' table {\n        border-collapse: collapse;\n      }\n\n      ',
          ' :where(h1, h2, h3, h4, h5, h6) {\n        font-size: inherit;\n        font-weight: inherit;\n      }\n\n      ',
          ' :where(button, input, optgroup, select, textarea) {\n        padding: 0;\n        line-height: inherit;\n        color: inherit;\n      }\n\n      ',
          ' :where(img, svg, video, canvas, audio, iframe, embed, object) {\n        display: block;\n      }\n\n      ',
          ' :where(img, video) {\n        max-width: 100%;\n        height: auto;\n      }\n\n      [data-js-focus-visible]\n        :focus:not([data-focus-visible-added]):not(\n          [data-focus-visible-disabled]\n        ) {\n        outline: none;\n        box-shadow: none;\n      }\n\n      ',
          ' select::-ms-expand {\n        display: none;\n      }\n\n      ',
          '\n    '
        ]);
        return (
          (u = function () {
            return e;
          }),
          e
        );
      }
      var d = String.raw,
        h = d(l()),
        c = () => (0, a.jsx)(s.xB, { styles: h }),
        p = (e) => {
          let { scope: t = '' } = e;
          return (0, a.jsx)(s.xB, {
            styles: d(
              u(),
              t,
              t,
              t,
              t,
              t,
              t,
              t,
              t,
              t,
              t,
              t,
              t,
              t,
              t,
              t,
              t,
              t,
              t,
              t,
              t,
              t,
              t,
              t,
              t,
              t,
              t,
              t,
              t,
              t,
              t,
              t,
              t,
              t,
              t,
              t,
              t,
              t,
              t,
              t,
              t,
              t,
              h
            )
          });
        },
        m = r(1581),
        [f, g] = (0, m.k)({ strict: !1, name: 'PortalManagerContext' });
      function v(e) {
        let { children: t, zIndex: r } = e;
        return (0, a.jsx)(f, { value: { zIndex: r }, children: t });
      }
      v.displayName = 'PortalManager';
      var b = r(1660),
        y = r(5419),
        x = r(1318),
        w = r(9438),
        S = r(4418),
        k = r(8618);
      function P(e) {
        let { cssVarsRoot: t, theme: r, children: i } = e,
          n = (0, y.useMemo)(() => (0, x.c0)(r), [r]);
        return (0, a.jsxs)(k.a, { theme: n, children: [(0, a.jsx)(C, { root: t }), i] });
      }
      function C(e) {
        let { root: t = ':host, :root' } = e,
          r = [t, '[data-theme]'].join(',');
        return (0, a.jsx)(s.xB, { styles: (e) => ({ [r]: e.__cssVars }) });
      }
      var [A, E] = (function (e = {}) {
        let {
            strict: t = !0,
            errorMessage:
              r = 'useContext: `context` is undefined. Seems you forgot to wrap component within the Provider',
            name: i
          } = e,
          n = (0, y.createContext)(void 0);
        return (
          (n.displayName = i),
          [
            n.Provider,
            function e() {
              var i;
              let o = (0, y.useContext)(n);
              if (!o && t) {
                let t = Error(r);
                throw (
                  (t.name = 'ContextError'),
                  null == (i = Error.captureStackTrace) || i.call(Error, t, e),
                  t
                );
              }
              return o;
            },
            n
          ]
        );
      })({
        name: 'StylesContext',
        errorMessage:
          'useStyles: `styles` is undefined. Seems you forgot to wrap the components in `<StylesProvider />` '
      });
      function T() {
        let { colorMode: e } = (0, b.If)();
        return (0, a.jsx)(s.xB, {
          styles: (t) => {
            let r = (0, w.Wf)(t, 'styles.global'),
              i = (0, S.Pu)(r, { theme: t, colorMode: e });
            if (i) return (0, x.iv)(i)(t);
          }
        });
      }
      var _ = { light: 'chakra-ui-light', dark: 'chakra-ui-dark' },
        z = 'chakra-ui-color-mode',
        j = {
          ssr: !1,
          type: 'localStorage',
          get(e) {
            let t;
            if (!(null == globalThis ? void 0 : globalThis.document)) return e;
            try {
              t = localStorage.getItem(z) || e;
            } catch (e) {}
            return t || e;
          },
          set(e) {
            try {
              localStorage.setItem(z, e);
            } catch (e) {}
          }
        },
        M = (null == globalThis ? void 0 : globalThis.document) ? y.useLayoutEffect : y.useEffect,
        D = () => {};
      function F(e, t) {
        return 'cookie' === e.type && e.ssr ? e.get(t) : t;
      }
      function V(e) {
        let {
            value: t,
            children: r,
            options: {
              useSystemColorMode: i,
              initialColorMode: n,
              disableTransitionOnChange: o
            } = {},
            colorModeManager: s = j
          } = e,
          l = 'dark' === n ? 'dark' : 'light',
          [u, d] = (0, y.useState)(() => F(s, l)),
          [h, c] = (0, y.useState)(() => F(s)),
          {
            getSystemTheme: p,
            setClassName: m,
            setDataset: f,
            addListener: g
          } = (0, y.useMemo)(
            () =>
              (function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                  { preventTransition: t = !0 } = e,
                  r = {
                    setDataset: (e) => {
                      let i = t ? r.preventTransition() : void 0;
                      ((document.documentElement.dataset.theme = e),
                        (document.documentElement.style.colorScheme = e),
                        null == i || i());
                    },
                    setClassName(e) {
                      (document.body.classList.add(e ? _.dark : _.light),
                        document.body.classList.remove(e ? _.light : _.dark));
                    },
                    query: () => window.matchMedia('(prefers-color-scheme: dark)'),
                    getSystemTheme(e) {
                      var t;
                      return (null != (t = r.query().matches) ? t : 'dark' === e)
                        ? 'dark'
                        : 'light';
                    },
                    addListener(e) {
                      let t = r.query(),
                        i = (t) => {
                          e(t.matches ? 'dark' : 'light');
                        };
                      return (
                        'function' == typeof t.addListener
                          ? t.addListener(i)
                          : t.addEventListener('change', i),
                        () => {
                          'function' == typeof t.removeListener
                            ? t.removeListener(i)
                            : t.removeEventListener('change', i);
                        }
                      );
                    },
                    preventTransition() {
                      let e = document.createElement('style');
                      return (
                        e.appendChild(
                          document.createTextNode(
                            '*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}'
                          )
                        ),
                        document.head.appendChild(e),
                        () => {
                          (window.getComputedStyle(document.body),
                            requestAnimationFrame(() => {
                              requestAnimationFrame(() => {
                                document.head.removeChild(e);
                              });
                            }));
                        }
                      );
                    }
                  };
                return r;
              })({ preventTransition: o }),
            [o]
          ),
          v = 'system' !== n || u ? u : h,
          x = (0, y.useCallback)(
            (e) => {
              let t = 'system' === e ? p() : e;
              (d(t), m('dark' === t), f(t), s.set(t));
            },
            [s, p, m, f]
          );
        (M(() => {
          'system' === n && c(p());
        }, []),
          (0, y.useEffect)(() => {
            let e = s.get();
            if (e) {
              x(e);
              return;
            }
            if ('system' === n) {
              x('system');
              return;
            }
            x(l);
          }, [s, l, n, x]));
        let w = (0, y.useCallback)(() => {
          x('dark' === v ? 'light' : 'dark');
        }, [v, x]);
        (0, y.useEffect)(() => {
          if (i) return g(x);
        }, [i, g, x]);
        let S = (0, y.useMemo)(
          () => ({
            colorMode: null != t ? t : v,
            toggleColorMode: t ? D : w,
            setColorMode: t ? D : x,
            forced: void 0 !== t
          }),
          [v, w, x, t]
        );
        return (0, a.jsx)(b.kc.Provider, { value: S, children: r });
      }
      V.displayName = 'ColorModeProvider';
      var R = (0, y.createContext)({ getDocument: () => document, getWindow: () => window });
      function B(e) {
        let { children: t, environment: r, disabled: i } = e,
          n = (0, y.useRef)(null),
          o = (0, y.useMemo)(
            () =>
              r || {
                getDocument: () => {
                  var e, t;
                  return null != (t = null == (e = n.current) ? void 0 : e.ownerDocument)
                    ? t
                    : document;
                },
                getWindow: () => {
                  var e, t;
                  return null !=
                    (t = null == (e = n.current) ? void 0 : e.ownerDocument.defaultView)
                    ? t
                    : window;
                }
              },
            [r]
          ),
          s = !i || !r;
        return (0, a.jsxs)(R.Provider, {
          value: o,
          children: [t, s && (0, a.jsx)('span', { id: '__chakra_env', hidden: !0, ref: n })]
        });
      }
      ((R.displayName = 'EnvironmentContext'), (B.displayName = 'EnvironmentProvider'));
      var $ = (e) => {
          let {
              children: t,
              colorModeManager: r,
              portalZIndex: i,
              resetScope: n,
              resetCSS: o = !0,
              theme: s = {},
              environment: l,
              cssVarsRoot: u,
              disableEnvironment: d,
              disableGlobalStyle: h
            } = e,
            m = (0, a.jsx)(B, { environment: l, disabled: d, children: t });
          return (0, a.jsx)(P, {
            theme: s,
            cssVarsRoot: u,
            children: (0, a.jsxs)(V, {
              colorModeManager: r,
              options: s.config,
              children: [
                o ? (0, a.jsx)(p, { scope: n }) : (0, a.jsx)(c, {}),
                !h && (0, a.jsx)(T, {}),
                i ? (0, a.jsx)(v, { zIndex: i, children: m }) : m
              ]
            })
          });
        },
        L = r(9054),
        I = (e, t) => e.find((e) => e.id === t);
      function O(e, t) {
        let r = W(e, t),
          i = r ? e[r].findIndex((e) => e.id === t) : -1;
        return { position: r, index: i };
      }
      function W(e, t) {
        for (let [r, i] of Object.entries(e)) if (I(i, t)) return r;
      }
      function N(e, t) {
        let r = (0, y.useRef)(!1),
          i = (0, y.useRef)(!1);
        ((0, y.useEffect)(() => {
          if (r.current && i.current) return e();
          i.current = !0;
        }, t),
          (0, y.useEffect)(
            () => (
              (r.current = !0),
              () => {
                r.current = !1;
              }
            ),
            []
          ));
      }
      var H = r(6200);
      let U = (0, y.createContext)(null),
        q = (0, y.createContext)({
          transformPagePoint: (e) => e,
          isStatic: !1,
          reducedMotion: 'never'
        }),
        J = (0, y.createContext)({}),
        Y = 'undefined' != typeof window,
        K = Y ? y.useLayoutEffect : y.useEffect,
        X = (0, y.createContext)({ strict: !1 }),
        G = (e) => e.replace(/([a-z])([A-Z])/gu, '$1-$2').toLowerCase(),
        Z = 'data-' + G('framerAppearId'),
        Q = { skipAnimations: !1, useManualTiming: !1 },
        ee = ['read', 'resolveKeyframes', 'update', 'preRender', 'render', 'postRender'];
      function et(e, t) {
        let r = !1,
          i = !0,
          n = { delta: 0, timestamp: 0, isProcessing: !1 },
          o = () => (r = !0),
          s = ee.reduce(
            (e, t) => (
              (e[t] = (function (e) {
                let t = new Set(),
                  r = new Set(),
                  i = !1,
                  n = !1,
                  o = new WeakSet(),
                  s = { delta: 0, timestamp: 0, isProcessing: !1 };
                function a(t) {
                  (o.has(t) && (l.schedule(t), e()), t(s));
                }
                let l = {
                  schedule: (e, n = !1, s = !1) => {
                    let a = s && i ? t : r;
                    return (n && o.add(e), a.has(e) || a.add(e), e);
                  },
                  cancel: (e) => {
                    (r.delete(e), o.delete(e));
                  },
                  process: (e) => {
                    if (((s = e), i)) {
                      n = !0;
                      return;
                    }
                    ((i = !0),
                      ([t, r] = [r, t]),
                      r.clear(),
                      t.forEach(a),
                      (i = !1),
                      n && ((n = !1), l.process(e)));
                  }
                };
                return l;
              })(o)),
              e
            ),
            {}
          ),
          { read: a, resolveKeyframes: l, update: u, preRender: d, render: h, postRender: c } = s,
          p = () => {
            let o = Q.useManualTiming ? n.timestamp : performance.now();
            ((r = !1),
              (n.delta = i ? 1e3 / 60 : Math.max(Math.min(o - n.timestamp, 40), 1)),
              (n.timestamp = o),
              (n.isProcessing = !0),
              a.process(n),
              l.process(n),
              u.process(n),
              d.process(n),
              h.process(n),
              c.process(n),
              (n.isProcessing = !1),
              r && t && ((i = !1), e(p)));
          },
          m = () => {
            ((r = !0), (i = !0), n.isProcessing || e(p));
          };
        return {
          schedule: ee.reduce((e, t) => {
            let i = s[t];
            return ((e[t] = (e, t = !1, n = !1) => (r || m(), i.schedule(e, t, n))), e);
          }, {}),
          cancel: (e) => {
            for (let t = 0; t < ee.length; t++) s[ee[t]].cancel(e);
          },
          state: n,
          steps: s
        };
      }
      let { schedule: er, cancel: ei } = et(queueMicrotask, !1);
      function en(e) {
        return e && 'object' == typeof e && Object.prototype.hasOwnProperty.call(e, 'current');
      }
      let eo = (0, y.createContext)({}),
        es = !1;
      function ea() {
        window.HandoffComplete = !0;
      }
      function el(e) {
        return 'string' == typeof e || Array.isArray(e);
      }
      function eu(e) {
        return null !== e && 'object' == typeof e && 'function' == typeof e.start;
      }
      let ed = [
          'animate',
          'whileInView',
          'whileFocus',
          'whileHover',
          'whileTap',
          'whileDrag',
          'exit'
        ],
        eh = ['initial', ...ed];
      function ec(e) {
        return eu(e.animate) || eh.some((t) => el(e[t]));
      }
      function ep(e) {
        return !!(ec(e) || e.variants);
      }
      function em(e) {
        return Array.isArray(e) ? e.join(' ') : e;
      }
      let ef = {
          animation: [
            'animate',
            'variants',
            'whileHover',
            'whileTap',
            'exit',
            'whileInView',
            'whileFocus',
            'whileDrag'
          ],
          exit: ['exit'],
          drag: ['drag', 'dragControls'],
          focus: ['whileFocus'],
          hover: ['whileHover', 'onHoverStart', 'onHoverEnd'],
          tap: ['whileTap', 'onTap', 'onTapStart', 'onTapCancel'],
          pan: ['onPan', 'onPanStart', 'onPanSessionStart', 'onPanEnd'],
          inView: ['whileInView', 'onViewportEnter', 'onViewportLeave'],
          layout: ['layout', 'layoutId']
        },
        eg = {};
      for (let e in ef) eg[e] = { isEnabled: (t) => ef[e].some((e) => !!t[e]) };
      let ev = (0, y.createContext)({}),
        eb = Symbol.for('motionComponentSymbol'),
        ey = [
          'animate',
          'circle',
          'defs',
          'desc',
          'ellipse',
          'g',
          'image',
          'line',
          'filter',
          'marker',
          'mask',
          'metadata',
          'path',
          'pattern',
          'polygon',
          'polyline',
          'rect',
          'stop',
          'switch',
          'symbol',
          'svg',
          'text',
          'tspan',
          'use',
          'view'
        ];
      function ex(e) {
        if ('string' != typeof e || e.includes('-'));
        else if (ey.indexOf(e) > -1 || /[A-Z]/u.test(e)) return !0;
        return !1;
      }
      let ew = {},
        eS = [
          'transformPerspective',
          'x',
          'y',
          'z',
          'translateX',
          'translateY',
          'translateZ',
          'scale',
          'scaleX',
          'scaleY',
          'rotate',
          'rotateX',
          'rotateY',
          'rotateZ',
          'skew',
          'skewX',
          'skewY'
        ],
        ek = new Set(eS);
      function eP(e, { layout: t, layoutId: r }) {
        return (
          ek.has(e) ||
          e.startsWith('origin') ||
          ((t || void 0 !== r) && (!!ew[e] || 'opacity' === e))
        );
      }
      let eC = (e) => !!(e && e.getVelocity),
        eA = (e, t) => (t && 'number' == typeof e ? t.transform(e) : e),
        eE = (e, t, r) => (r > t ? t : r < e ? e : r),
        eT = { test: (e) => 'number' == typeof e, parse: parseFloat, transform: (e) => e },
        e_ = { ...eT, transform: (e) => eE(0, 1, e) },
        ez = { ...eT, default: 1 },
        ej = (e) => Math.round(1e5 * e) / 1e5,
        eM = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu,
        eD =
          /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu,
        eF =
          /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu;
      function eV(e) {
        return 'string' == typeof e;
      }
      let eR = (e) => ({
          test: (t) => eV(t) && t.endsWith(e) && 1 === t.split(' ').length,
          parse: parseFloat,
          transform: (t) => `${t}${e}`
        }),
        eB = eR('deg'),
        e$ = eR('%'),
        eL = eR('px'),
        eI = eR('vh'),
        eO = eR('vw'),
        eW = { ...e$, parse: (e) => e$.parse(e) / 100, transform: (e) => e$.transform(100 * e) },
        eN = { ...eT, transform: Math.round },
        eH = {
          borderWidth: eL,
          borderTopWidth: eL,
          borderRightWidth: eL,
          borderBottomWidth: eL,
          borderLeftWidth: eL,
          borderRadius: eL,
          radius: eL,
          borderTopLeftRadius: eL,
          borderTopRightRadius: eL,
          borderBottomRightRadius: eL,
          borderBottomLeftRadius: eL,
          width: eL,
          maxWidth: eL,
          height: eL,
          maxHeight: eL,
          size: eL,
          top: eL,
          right: eL,
          bottom: eL,
          left: eL,
          padding: eL,
          paddingTop: eL,
          paddingRight: eL,
          paddingBottom: eL,
          paddingLeft: eL,
          margin: eL,
          marginTop: eL,
          marginRight: eL,
          marginBottom: eL,
          marginLeft: eL,
          rotate: eB,
          rotateX: eB,
          rotateY: eB,
          rotateZ: eB,
          scale: ez,
          scaleX: ez,
          scaleY: ez,
          scaleZ: ez,
          skew: eB,
          skewX: eB,
          skewY: eB,
          distance: eL,
          translateX: eL,
          translateY: eL,
          translateZ: eL,
          x: eL,
          y: eL,
          z: eL,
          perspective: eL,
          transformPerspective: eL,
          opacity: e_,
          originX: eW,
          originY: eW,
          originZ: eL,
          zIndex: eN,
          backgroundPositionX: eL,
          backgroundPositionY: eL,
          fillOpacity: e_,
          strokeOpacity: e_,
          numOctaves: eN
        },
        eU = {
          x: 'translateX',
          y: 'translateY',
          z: 'translateZ',
          transformPerspective: 'perspective'
        },
        eq = eS.length,
        eJ = (e) => (t) => 'string' == typeof t && t.startsWith(e),
        eY = eJ('--'),
        eK = eJ('var(--'),
        eX = (e) => !!eK(e) && eG.test(e.split('/*')[0].trim()),
        eG = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;
      function eZ(e, t, r) {
        let { style: i, vars: n, transformOrigin: o } = e,
          s = !1,
          a = !1;
        for (let e in t) {
          let r = t[e];
          if (ek.has(e)) {
            s = !0;
            continue;
          }
          if (eY(e)) {
            n[e] = r;
            continue;
          }
          {
            let t = eA(r, eH[e]);
            e.startsWith('origin') ? ((a = !0), (o[e] = t)) : (i[e] = t);
          }
        }
        if (
          (!t.transform &&
            (s || r
              ? (i.transform = (function (e, t, r) {
                  let i = '',
                    n = !0;
                  for (let o = 0; o < eq; o++) {
                    let s = eS[o],
                      a = e[s];
                    if (void 0 === a) continue;
                    let l = !0;
                    if (
                      !(l =
                        'number' == typeof a
                          ? a === (s.startsWith('scale') ? 1 : 0)
                          : 0 === parseFloat(a)) ||
                      r
                    ) {
                      let e = eA(a, eH[s]);
                      if (!l) {
                        n = !1;
                        let t = eU[s] || s;
                        i += `${t}(${e}) `;
                      }
                      r && (t[s] = e);
                    }
                  }
                  return ((i = i.trim()), r ? (i = r(t, n ? '' : i)) : n && (i = 'none'), i);
                })(t, e.transform, r))
              : i.transform && (i.transform = 'none')),
          a)
        ) {
          let { originX: e = '50%', originY: t = '50%', originZ: r = 0 } = o;
          i.transformOrigin = `${e} ${t} ${r}`;
        }
      }
      let eQ = () => ({ style: {}, transform: {}, transformOrigin: {}, vars: {} });
      function e0(e, t, r) {
        for (let i in t) eC(t[i]) || eP(i, r) || (e[i] = t[i]);
      }
      let e1 = new Set([
        'animate',
        'exit',
        'variants',
        'initial',
        'style',
        'values',
        'variants',
        'transition',
        'transformTemplate',
        'custom',
        'inherit',
        'onBeforeLayoutMeasure',
        'onAnimationStart',
        'onAnimationComplete',
        'onUpdate',
        'onDragStart',
        'onDrag',
        'onDragEnd',
        'onMeasureDragConstraints',
        'onDirectionLock',
        'onDragTransitionEnd',
        '_dragX',
        '_dragY',
        'onHoverStart',
        'onHoverEnd',
        'onViewportEnter',
        'onViewportLeave',
        'globalTapTarget',
        'ignoreStrict',
        'viewport'
      ]);
      function e5(e) {
        return (
          e.startsWith('while') ||
          (e.startsWith('drag') && 'draggable' !== e) ||
          e.startsWith('layout') ||
          e.startsWith('onTap') ||
          e.startsWith('onPan') ||
          e.startsWith('onLayout') ||
          e1.has(e)
        );
      }
      let e2 = (e) => !e5(e);
      try {
        (o = require('@emotion/is-prop-valid').default) &&
          (e2 = (e) => (e.startsWith('on') ? !e5(e) : o(e)));
      } catch (e) {}
      function e3(e, t, r) {
        return 'string' == typeof e ? e : eL.transform(t + r * e);
      }
      let e4 = { offset: 'stroke-dashoffset', array: 'stroke-dasharray' },
        e6 = { offset: 'strokeDashoffset', array: 'strokeDasharray' };
      function e9(
        e,
        {
          attrX: t,
          attrY: r,
          attrScale: i,
          originX: n,
          originY: o,
          pathLength: s,
          pathSpacing: a = 1,
          pathOffset: l = 0,
          ...u
        },
        d,
        h
      ) {
        if ((eZ(e, u, h), d)) {
          e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
          return;
        }
        ((e.attrs = e.style), (e.style = {}));
        let { attrs: c, style: p, dimensions: m } = e;
        (c.transform && (m && (p.transform = c.transform), delete c.transform),
          m &&
            (void 0 !== n || void 0 !== o || p.transform) &&
            (p.transformOrigin = (function (e, t, r) {
              let i = e3(t, e.x, e.width),
                n = e3(r, e.y, e.height);
              return `${i} ${n}`;
            })(m, void 0 !== n ? n : 0.5, void 0 !== o ? o : 0.5)),
          void 0 !== t && (c.x = t),
          void 0 !== r && (c.y = r),
          void 0 !== i && (c.scale = i),
          void 0 !== s &&
            (function (e, t, r = 1, i = 0, n = !0) {
              e.pathLength = 1;
              let o = n ? e4 : e6;
              e[o.offset] = eL.transform(-i);
              let s = eL.transform(t),
                a = eL.transform(r);
              e[o.array] = `${s} ${a}`;
            })(c, s, a, l, !1));
      }
      let e8 = () => ({ ...eQ(), attrs: {} }),
        e7 = (e) => 'string' == typeof e && 'svg' === e.toLowerCase();
      function te(e, { style: t, vars: r }, i, n) {
        for (let o in (Object.assign(e.style, t, n && n.getProjectionStyles(i)), r))
          e.style.setProperty(o, r[o]);
      }
      let tt = new Set([
        'baseFrequency',
        'diffuseConstant',
        'kernelMatrix',
        'kernelUnitLength',
        'keySplines',
        'keyTimes',
        'limitingConeAngle',
        'markerHeight',
        'markerWidth',
        'numOctaves',
        'targetX',
        'targetY',
        'surfaceScale',
        'specularConstant',
        'specularExponent',
        'stdDeviation',
        'tableValues',
        'viewBox',
        'gradientTransform',
        'pathLength',
        'startOffset',
        'textLength',
        'lengthAdjust'
      ]);
      function tr(e, t, r, i) {
        for (let r in (te(e, t, void 0, i), t.attrs))
          e.setAttribute(tt.has(r) ? r : G(r), t.attrs[r]);
      }
      function ti(e, t, r) {
        var i;
        let { style: n } = e,
          o = {};
        for (let s in n)
          (eC(n[s]) ||
            (t.style && eC(t.style[s])) ||
            eP(s, e) ||
            (null === (i = null == r ? void 0 : r.getValue(s)) || void 0 === i
              ? void 0
              : i.liveStyle) !== void 0) &&
            (o[s] = n[s]);
        return (r && n && 'string' == typeof n.willChange && (r.applyWillChange = !1), o);
      }
      function tn(e, t, r) {
        let i = ti(e, t, r);
        for (let r in e)
          (eC(e[r]) || eC(t[r])) &&
            (i[-1 !== eS.indexOf(r) ? 'attr' + r.charAt(0).toUpperCase() + r.substring(1) : r] =
              e[r]);
        return i;
      }
      function to(e) {
        let t = [{}, {}];
        return (
          null == e ||
            e.values.forEach((e, r) => {
              ((t[0][r] = e.get()), (t[1][r] = e.getVelocity()));
            }),
          t
        );
      }
      function ts(e, t, r, i) {
        if ('function' == typeof t) {
          let [n, o] = to(i);
          t = t(void 0 !== r ? r : e.custom, n, o);
        }
        if (('string' == typeof t && (t = e.variants && e.variants[t]), 'function' == typeof t)) {
          let [n, o] = to(i);
          t = t(void 0 !== r ? r : e.custom, n, o);
        }
        return t;
      }
      function ta(e) {
        let t = (0, y.useRef)(null);
        return (null === t.current && (t.current = e()), t.current);
      }
      let tl = (e) => Array.isArray(e),
        tu = (e) => !!(e && 'object' == typeof e && e.mix && e.toValue),
        td = (e) => (tl(e) ? e[e.length - 1] || 0 : e);
      function th(e) {
        let t = eC(e) ? e.get() : e;
        return tu(t) ? t.toValue() : t;
      }
      let tc = new Set(['opacity', 'clipPath', 'filter', 'transform']);
      function tp(e) {
        return ek.has(e) ? 'transform' : tc.has(e) ? G(e) : void 0;
      }
      function tm(e, t) {
        -1 === e.indexOf(t) && e.push(t);
      }
      function tf(e, t) {
        let r = e.indexOf(t);
        r > -1 && e.splice(r, 1);
      }
      let tg = (e) => (t, r) => {
        let i = (0, y.useContext)(J),
          n = (0, y.useContext)(U),
          o = () =>
            (function (
              {
                applyWillChange: e = !1,
                scrapeMotionValuesFromProps: t,
                createRenderState: r,
                onMount: i
              },
              n,
              o,
              s,
              a
            ) {
              let l = {
                latestValues: (function (e, t, r, i, n) {
                  var o;
                  let s = {},
                    a = [],
                    l =
                      i &&
                      (null === (o = e.style) || void 0 === o ? void 0 : o.willChange) === void 0,
                    u = n(e, {});
                  for (let e in u) s[e] = th(u[e]);
                  let { initial: d, animate: h } = e,
                    c = ec(e),
                    p = ep(e);
                  t &&
                    p &&
                    !c &&
                    !1 !== e.inherit &&
                    (void 0 === d && (d = t.initial), void 0 === h && (h = t.animate));
                  let m = !!r && !1 === r.initial,
                    f = (m = m || !1 === d) ? h : d;
                  return (
                    f &&
                      'boolean' != typeof f &&
                      !eu(f) &&
                      tv(e, f, (e, t) => {
                        for (let t in e) {
                          let r = e[t];
                          if (Array.isArray(r)) {
                            let e = m ? r.length - 1 : 0;
                            r = r[e];
                          }
                          null !== r && (s[t] = r);
                        }
                        for (let e in t) s[e] = t[e];
                      }),
                    l &&
                      (h &&
                        !1 !== d &&
                        !eu(h) &&
                        tv(e, h, (e) => {
                          for (let t in e)
                            !(function (e, t) {
                              let r = tp(t);
                              r && tm(e, r);
                            })(a, t);
                        }),
                      a.length && (s.willChange = a.join(','))),
                    s
                  );
                })(n, o, s, !a && e, t),
                renderState: r()
              };
              return (i && (l.mount = (e) => i(n, e, l)), l);
            })(e, t, i, n, r);
        return r ? o() : ta(o);
      };
      function tv(e, t, r) {
        let i = Array.isArray(t) ? t : [t];
        for (let t = 0; t < i.length; t++) {
          let n = ts(e, i[t]);
          if (n) {
            let { transitionEnd: e, transition: t, ...i } = n;
            r(i, e);
          }
        }
      }
      let tb = (e) => e,
        {
          schedule: ty,
          cancel: tx,
          state: tw,
          steps: tS
        } = et('undefined' != typeof requestAnimationFrame ? requestAnimationFrame : tb, !0),
        tk = {
          useVisualState: tg({
            scrapeMotionValuesFromProps: tn,
            createRenderState: e8,
            onMount: (e, t, { renderState: r, latestValues: i }) => {
              (ty.read(() => {
                try {
                  r.dimensions =
                    'function' == typeof t.getBBox ? t.getBBox() : t.getBoundingClientRect();
                } catch (e) {
                  r.dimensions = { x: 0, y: 0, width: 0, height: 0 };
                }
              }),
                ty.render(() => {
                  (e9(r, i, e7(t.tagName), e.transformTemplate), tr(t, r));
                }));
            }
          })
        },
        tP = {
          useVisualState: tg({
            applyWillChange: !0,
            scrapeMotionValuesFromProps: ti,
            createRenderState: eQ
          })
        };
      function tC(e, t, r, i = { passive: !0 }) {
        return (e.addEventListener(t, r, i), () => e.removeEventListener(t, r));
      }
      let tA = (e) =>
        'mouse' === e.pointerType
          ? 'number' != typeof e.button || e.button <= 0
          : !1 !== e.isPrimary;
      function tE(e, t = 'page') {
        return { point: { x: e[`${t}X`], y: e[`${t}Y`] } };
      }
      let tT = (e) => (t) => tA(t) && e(t, tE(t));
      function t_(e, t, r, i) {
        return tC(e, t, tT(r), i);
      }
      let tz = (e, t) => (r) => t(e(r)),
        tj = (...e) => e.reduce(tz);
      function tM(e) {
        let t = null;
        return () =>
          null === t &&
          ((t = e),
          () => {
            t = null;
          });
      }
      let tD = tM('dragHorizontal'),
        tF = tM('dragVertical');
      function tV(e) {
        let t = !1;
        if ('y' === e) t = tF();
        else if ('x' === e) t = tD();
        else {
          let e = tD(),
            r = tF();
          e && r
            ? (t = () => {
                (e(), r());
              })
            : (e && e(), r && r());
        }
        return t;
      }
      function tR() {
        let e = tV(!0);
        return !e || (e(), !1);
      }
      class tB {
        constructor(e) {
          ((this.isMounted = !1), (this.node = e));
        }
        update() {}
      }
      function t$(e, t) {
        let r = t ? 'onHoverStart' : 'onHoverEnd';
        return t_(
          e.current,
          t ? 'pointerenter' : 'pointerleave',
          (i, n) => {
            if ('touch' === i.pointerType || tR()) return;
            let o = e.getProps();
            e.animationState && o.whileHover && e.animationState.setActive('whileHover', t);
            let s = o[r];
            s && ty.postRender(() => s(i, n));
          },
          { passive: !e.getProps()[r] }
        );
      }
      class tL extends tB {
        mount() {
          this.unmount = tj(t$(this.node, !0), t$(this.node, !1));
        }
        unmount() {}
      }
      class tI extends tB {
        constructor() {
          (super(...arguments), (this.isActive = !1));
        }
        onFocus() {
          let e = !1;
          try {
            e = this.node.current.matches(':focus-visible');
          } catch (t) {
            e = !0;
          }
          e &&
            this.node.animationState &&
            (this.node.animationState.setActive('whileFocus', !0), (this.isActive = !0));
        }
        onBlur() {
          this.isActive &&
            this.node.animationState &&
            (this.node.animationState.setActive('whileFocus', !1), (this.isActive = !1));
        }
        mount() {
          this.unmount = tj(
            tC(this.node.current, 'focus', () => this.onFocus()),
            tC(this.node.current, 'blur', () => this.onBlur())
          );
        }
        unmount() {}
      }
      let tO = (e, t) => !!t && (e === t || tO(e, t.parentElement));
      function tW(e, t) {
        if (!t) return;
        let r = new PointerEvent('pointer' + e);
        t(r, tE(r));
      }
      class tN extends tB {
        constructor() {
          (super(...arguments),
            (this.removeStartListeners = tb),
            (this.removeEndListeners = tb),
            (this.removeAccessibleListeners = tb),
            (this.startPointerPress = (e, t) => {
              if (this.isPressing) return;
              this.removeEndListeners();
              let r = this.node.getProps(),
                i = t_(
                  window,
                  'pointerup',
                  (e, t) => {
                    if (!this.checkPressEnd()) return;
                    let { onTap: r, onTapCancel: i, globalTapTarget: n } = this.node.getProps(),
                      o = n || tO(this.node.current, e.target) ? r : i;
                    o && ty.update(() => o(e, t));
                  },
                  { passive: !(r.onTap || r.onPointerUp) }
                ),
                n = t_(window, 'pointercancel', (e, t) => this.cancelPress(e, t), {
                  passive: !(r.onTapCancel || r.onPointerCancel)
                });
              ((this.removeEndListeners = tj(i, n)), this.startPress(e, t));
            }),
            (this.startAccessiblePress = () => {
              let e = tC(this.node.current, 'keydown', (e) => {
                  'Enter' !== e.key ||
                    this.isPressing ||
                    (this.removeEndListeners(),
                    (this.removeEndListeners = tC(this.node.current, 'keyup', (e) => {
                      'Enter' === e.key &&
                        this.checkPressEnd() &&
                        tW('up', (e, t) => {
                          let { onTap: r } = this.node.getProps();
                          r && ty.postRender(() => r(e, t));
                        });
                    })),
                    tW('down', (e, t) => {
                      this.startPress(e, t);
                    }));
                }),
                t = tC(this.node.current, 'blur', () => {
                  this.isPressing && tW('cancel', (e, t) => this.cancelPress(e, t));
                });
              this.removeAccessibleListeners = tj(e, t);
            }));
        }
        startPress(e, t) {
          this.isPressing = !0;
          let { onTapStart: r, whileTap: i } = this.node.getProps();
          (i && this.node.animationState && this.node.animationState.setActive('whileTap', !0),
            r && ty.postRender(() => r(e, t)));
        }
        checkPressEnd() {
          return (
            this.removeEndListeners(),
            (this.isPressing = !1),
            this.node.getProps().whileTap &&
              this.node.animationState &&
              this.node.animationState.setActive('whileTap', !1),
            !tR()
          );
        }
        cancelPress(e, t) {
          if (!this.checkPressEnd()) return;
          let { onTapCancel: r } = this.node.getProps();
          r && ty.postRender(() => r(e, t));
        }
        mount() {
          let e = this.node.getProps(),
            t = t_(
              e.globalTapTarget ? window : this.node.current,
              'pointerdown',
              this.startPointerPress,
              { passive: !(e.onTapStart || e.onPointerStart) }
            ),
            r = tC(this.node.current, 'focus', this.startAccessiblePress);
          this.removeStartListeners = tj(t, r);
        }
        unmount() {
          (this.removeStartListeners(),
            this.removeEndListeners(),
            this.removeAccessibleListeners());
        }
      }
      let tH = new WeakMap(),
        tU = new WeakMap(),
        tq = (e) => {
          let t = tH.get(e.target);
          t && t(e);
        },
        tJ = (e) => {
          e.forEach(tq);
        },
        tY = { some: 0, all: 1 };
      class tK extends tB {
        constructor() {
          (super(...arguments), (this.hasEnteredView = !1), (this.isInView = !1));
        }
        startObserver() {
          this.unmount();
          let { viewport: e = {} } = this.node.getProps(),
            { root: t, margin: r, amount: i = 'some', once: n } = e,
            o = {
              root: t ? t.current : void 0,
              rootMargin: r,
              threshold: 'number' == typeof i ? i : tY[i]
            };
          return (function (e, t, r) {
            let i = (function ({ root: e, ...t }) {
              let r = e || document;
              tU.has(r) || tU.set(r, {});
              let i = tU.get(r),
                n = JSON.stringify(t);
              return (i[n] || (i[n] = new IntersectionObserver(tJ, { root: e, ...t })), i[n]);
            })(t);
            return (
              tH.set(e, r),
              i.observe(e),
              () => {
                (tH.delete(e), i.unobserve(e));
              }
            );
          })(this.node.current, o, (e) => {
            let { isIntersecting: t } = e;
            if (this.isInView === t || ((this.isInView = t), n && !t && this.hasEnteredView))
              return;
            (t && (this.hasEnteredView = !0),
              this.node.animationState && this.node.animationState.setActive('whileInView', t));
            let { onViewportEnter: r, onViewportLeave: i } = this.node.getProps(),
              o = t ? r : i;
            o && o(e);
          });
        }
        mount() {
          this.startObserver();
        }
        update() {
          if ('undefined' == typeof IntersectionObserver) return;
          let { props: e, prevProps: t } = this.node;
          ['amount', 'margin', 'root'].some(
            (function ({ viewport: e = {} }, { viewport: t = {} } = {}) {
              return (r) => e[r] !== t[r];
            })(e, t)
          ) && this.startObserver();
        }
        unmount() {}
      }
      function tX(e, t) {
        if (!Array.isArray(t)) return !1;
        let r = t.length;
        if (r !== e.length) return !1;
        for (let i = 0; i < r; i++) if (t[i] !== e[i]) return !1;
        return !0;
      }
      function tG(e, t, r) {
        let i = e.getProps();
        return ts(i, t, void 0 !== r ? r : i.custom, e);
      }
      let tZ = (e) => 1e3 * e,
        tQ = (e) => e / 1e3,
        t0 = { type: 'spring', stiffness: 500, damping: 25, restSpeed: 10 },
        t1 = (e) => ({
          type: 'spring',
          stiffness: 550,
          damping: 0 === e ? 2 * Math.sqrt(550) : 30,
          restSpeed: 10
        }),
        t5 = { type: 'keyframes', duration: 0.8 },
        t2 = { type: 'keyframes', ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
        t3 = (e, { keyframes: t }) =>
          t.length > 2 ? t5 : ek.has(e) ? (e.startsWith('scale') ? t1(t[1]) : t0) : t2;
      function t4(e, t) {
        return e[t] || e.default || e;
      }
      let t6 = { current: !1 },
        t9 = (e) => null !== e;
      function t8(e, { repeat: t, repeatType: r = 'loop' }, i) {
        let n = e.filter(t9),
          o = t && 'loop' !== r && t % 2 == 1 ? 0 : n.length - 1;
        return o && void 0 !== i ? i : n[o];
      }
      function t7() {
        i = void 0;
      }
      let re = {
          now: () => (
            void 0 === i &&
              re.set(tw.isProcessing || Q.useManualTiming ? tw.timestamp : performance.now()),
            i
          ),
          set: (e) => {
            ((i = e), queueMicrotask(t7));
          }
        },
        rt = (e) => /^0[^.\s]+$/u.test(e),
        rr = (e) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e),
        ri = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u,
        rn = new Set([
          'width',
          'height',
          'top',
          'left',
          'right',
          'bottom',
          'x',
          'y',
          'translateX',
          'translateY'
        ]),
        ro = (e) => e === eT || e === eL,
        rs = (e, t) => parseFloat(e.split(', ')[t]),
        ra =
          (e, t) =>
          (r, { transform: i }) => {
            if ('none' === i || !i) return 0;
            let n = i.match(/^matrix3d\((.+)\)$/u);
            if (n) return rs(n[1], t);
            {
              let t = i.match(/^matrix\((.+)\)$/u);
              return t ? rs(t[1], e) : 0;
            }
          },
        rl = new Set(['x', 'y', 'z']),
        ru = eS.filter((e) => !rl.has(e)),
        rd = {
          width: ({ x: e }, { paddingLeft: t = '0', paddingRight: r = '0' }) =>
            e.max - e.min - parseFloat(t) - parseFloat(r),
          height: ({ y: e }, { paddingTop: t = '0', paddingBottom: r = '0' }) =>
            e.max - e.min - parseFloat(t) - parseFloat(r),
          top: (e, { top: t }) => parseFloat(t),
          left: (e, { left: t }) => parseFloat(t),
          bottom: ({ y: e }, { top: t }) => parseFloat(t) + (e.max - e.min),
          right: ({ x: e }, { left: t }) => parseFloat(t) + (e.max - e.min),
          x: ra(4, 13),
          y: ra(5, 14)
        };
      ((rd.translateX = rd.x), (rd.translateY = rd.y));
      let rh = (e) => (t) => t.test(e),
        rc = [eT, eL, e$, eB, eO, eI, { test: (e) => 'auto' === e, parse: (e) => e }],
        rp = (e) => rc.find(rh(e)),
        rm = new Set(),
        rf = !1,
        rg = !1;
      function rv() {
        if (rg) {
          let e = Array.from(rm).filter((e) => e.needsMeasurement),
            t = new Set(e.map((e) => e.element)),
            r = new Map();
          (t.forEach((e) => {
            let t = (function (e) {
              let t = [];
              return (
                ru.forEach((r) => {
                  let i = e.getValue(r);
                  void 0 !== i && (t.push([r, i.get()]), i.set(r.startsWith('scale') ? 1 : 0));
                }),
                t
              );
            })(e);
            t.length && (r.set(e, t), e.render());
          }),
            e.forEach((e) => e.measureInitialState()),
            t.forEach((e) => {
              e.render();
              let t = r.get(e);
              t &&
                t.forEach(([t, r]) => {
                  var i;
                  null === (i = e.getValue(t)) || void 0 === i || i.set(r);
                });
            }),
            e.forEach((e) => e.measureEndState()),
            e.forEach((e) => {
              void 0 !== e.suspendedScrollY && window.scrollTo(0, e.suspendedScrollY);
            }));
        }
        ((rg = !1), (rf = !1), rm.forEach((e) => e.complete()), rm.clear());
      }
      function rb() {
        rm.forEach((e) => {
          (e.readKeyframes(), e.needsMeasurement && (rg = !0));
        });
      }
      class ry {
        constructor(e, t, r, i, n, o = !1) {
          ((this.isComplete = !1),
            (this.isAsync = !1),
            (this.needsMeasurement = !1),
            (this.isScheduled = !1),
            (this.unresolvedKeyframes = [...e]),
            (this.onComplete = t),
            (this.name = r),
            (this.motionValue = i),
            (this.element = n),
            (this.isAsync = o));
        }
        scheduleResolve() {
          ((this.isScheduled = !0),
            this.isAsync
              ? (rm.add(this), rf || ((rf = !0), ty.read(rb), ty.resolveKeyframes(rv)))
              : (this.readKeyframes(), this.complete()));
        }
        readKeyframes() {
          let { unresolvedKeyframes: e, name: t, element: r, motionValue: i } = this;
          for (let n = 0; n < e.length; n++)
            if (null === e[n]) {
              if (0 === n) {
                let n = null == i ? void 0 : i.get(),
                  o = e[e.length - 1];
                if (void 0 !== n) e[0] = n;
                else if (r && t) {
                  let i = r.readValue(t, o);
                  null != i && (e[0] = i);
                }
                (void 0 === e[0] && (e[0] = o), i && void 0 === n && i.set(e[0]));
              } else e[n] = e[n - 1];
            }
        }
        setFinalKeyframe() {}
        measureInitialState() {}
        renderEndStyles() {}
        measureEndState() {}
        complete() {
          ((this.isComplete = !0),
            this.onComplete(this.unresolvedKeyframes, this.finalKeyframe),
            rm.delete(this));
        }
        cancel() {
          this.isComplete || ((this.isScheduled = !1), rm.delete(this));
        }
        resume() {
          this.isComplete || this.scheduleResolve();
        }
      }
      let rx = (e, t) => (r) =>
          !!(
            (eV(r) && eF.test(r) && r.startsWith(e)) ||
            (t && null != r && Object.prototype.hasOwnProperty.call(r, t))
          ),
        rw = (e, t, r) => (i) => {
          if (!eV(i)) return i;
          let [n, o, s, a] = i.match(eM);
          return {
            [e]: parseFloat(n),
            [t]: parseFloat(o),
            [r]: parseFloat(s),
            alpha: void 0 !== a ? parseFloat(a) : 1
          };
        },
        rS = (e) => eE(0, 255, e),
        rk = { ...eT, transform: (e) => Math.round(rS(e)) },
        rP = {
          test: rx('rgb', 'red'),
          parse: rw('red', 'green', 'blue'),
          transform: ({ red: e, green: t, blue: r, alpha: i = 1 }) =>
            'rgba(' +
            rk.transform(e) +
            ', ' +
            rk.transform(t) +
            ', ' +
            rk.transform(r) +
            ', ' +
            ej(e_.transform(i)) +
            ')'
        },
        rC = {
          test: rx('#'),
          parse: function (e) {
            let t = '',
              r = '',
              i = '',
              n = '';
            return (
              e.length > 5
                ? ((t = e.substring(1, 3)),
                  (r = e.substring(3, 5)),
                  (i = e.substring(5, 7)),
                  (n = e.substring(7, 9)))
                : ((t = e.substring(1, 2)),
                  (r = e.substring(2, 3)),
                  (i = e.substring(3, 4)),
                  (n = e.substring(4, 5)),
                  (t += t),
                  (r += r),
                  (i += i),
                  (n += n)),
              {
                red: parseInt(t, 16),
                green: parseInt(r, 16),
                blue: parseInt(i, 16),
                alpha: n ? parseInt(n, 16) / 255 : 1
              }
            );
          },
          transform: rP.transform
        },
        rA = {
          test: rx('hsl', 'hue'),
          parse: rw('hue', 'saturation', 'lightness'),
          transform: ({ hue: e, saturation: t, lightness: r, alpha: i = 1 }) =>
            'hsla(' +
            Math.round(e) +
            ', ' +
            e$.transform(ej(t)) +
            ', ' +
            e$.transform(ej(r)) +
            ', ' +
            ej(e_.transform(i)) +
            ')'
        },
        rE = {
          test: (e) => rP.test(e) || rC.test(e) || rA.test(e),
          parse: (e) => (rP.test(e) ? rP.parse(e) : rA.test(e) ? rA.parse(e) : rC.parse(e)),
          transform: (e) =>
            eV(e) ? e : e.hasOwnProperty('red') ? rP.transform(e) : rA.transform(e)
        },
        rT = 'number',
        r_ = 'color',
        rz =
          /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
      function rj(e) {
        let t = e.toString(),
          r = [],
          i = { color: [], number: [], var: [] },
          n = [],
          o = 0,
          s = t
            .replace(
              rz,
              (e) => (
                rE.test(e)
                  ? (i.color.push(o), n.push(r_), r.push(rE.parse(e)))
                  : e.startsWith('var(')
                    ? (i.var.push(o), n.push('var'), r.push(e))
                    : (i.number.push(o), n.push(rT), r.push(parseFloat(e))),
                ++o,
                '${}'
              )
            )
            .split('${}');
        return { values: r, split: s, indexes: i, types: n };
      }
      function rM(e) {
        return rj(e).values;
      }
      function rD(e) {
        let { split: t, types: r } = rj(e),
          i = t.length;
        return (e) => {
          let n = '';
          for (let o = 0; o < i; o++)
            if (((n += t[o]), void 0 !== e[o])) {
              let t = r[o];
              t === rT ? (n += ej(e[o])) : t === r_ ? (n += rE.transform(e[o])) : (n += e[o]);
            }
          return n;
        };
      }
      let rF = (e) => ('number' == typeof e ? 0 : e),
        rV = {
          test: function (e) {
            var t, r;
            return (
              isNaN(e) &&
              eV(e) &&
              ((null === (t = e.match(eM)) || void 0 === t ? void 0 : t.length) || 0) +
                ((null === (r = e.match(eD)) || void 0 === r ? void 0 : r.length) || 0) >
                0
            );
          },
          parse: rM,
          createTransformer: rD,
          getAnimatableNone: function (e) {
            let t = rM(e);
            return rD(e)(t.map(rF));
          }
        },
        rR = new Set(['brightness', 'contrast', 'saturate', 'opacity']);
      function rB(e) {
        let [t, r] = e.slice(0, -1).split('(');
        if ('drop-shadow' === t) return e;
        let [i] = r.match(eM) || [];
        if (!i) return e;
        let n = r.replace(i, ''),
          o = rR.has(t) ? 1 : 0;
        return (i !== r && (o *= 100), t + '(' + o + n + ')');
      }
      let r$ = /\b([a-z-]*)\(.*?\)/gu,
        rL = {
          ...rV,
          getAnimatableNone: (e) => {
            let t = e.match(r$);
            return t ? t.map(rB).join(' ') : e;
          }
        },
        rI = {
          ...eH,
          color: rE,
          backgroundColor: rE,
          outlineColor: rE,
          fill: rE,
          stroke: rE,
          borderColor: rE,
          borderTopColor: rE,
          borderRightColor: rE,
          borderBottomColor: rE,
          borderLeftColor: rE,
          filter: rL,
          WebkitFilter: rL
        },
        rO = (e) => rI[e];
      function rW(e, t) {
        let r = rO(e);
        return (r !== rL && (r = rV), r.getAnimatableNone ? r.getAnimatableNone(t) : void 0);
      }
      let rN = new Set(['auto', 'none', '0']);
      class rH extends ry {
        constructor(e, t, r, i) {
          super(e, t, r, i, null == i ? void 0 : i.owner, !0);
        }
        readKeyframes() {
          let { unresolvedKeyframes: e, element: t, name: r } = this;
          if (!t.current) return;
          super.readKeyframes();
          for (let r = 0; r < e.length; r++) {
            let i = e[r];
            if ('string' == typeof i && eX((i = i.trim()))) {
              let n = (function e(t, r, i = 1) {
                tb(
                  i <= 4,
                  `Max CSS variable fallback depth detected in property "${t}". This may indicate a circular fallback dependency.`
                );
                let [n, o] = (function (e) {
                  let t = ri.exec(e);
                  if (!t) return [,];
                  let [, r, i, n] = t;
                  return [`--${null != r ? r : i}`, n];
                })(t);
                if (!n) return;
                let s = window.getComputedStyle(r).getPropertyValue(n);
                if (s) {
                  let e = s.trim();
                  return rr(e) ? parseFloat(e) : e;
                }
                return eX(o) ? e(o, r, i + 1) : o;
              })(i, t.current);
              (void 0 !== n && (e[r] = n), r === e.length - 1 && (this.finalKeyframe = i));
            }
          }
          if ((this.resolveNoneKeyframes(), !rn.has(r) || 2 !== e.length)) return;
          let [i, n] = e,
            o = rp(i),
            s = rp(n);
          if (o !== s) {
            if (ro(o) && ro(s))
              for (let t = 0; t < e.length; t++) {
                let r = e[t];
                'string' == typeof r && (e[t] = parseFloat(r));
              }
            else this.needsMeasurement = !0;
          }
        }
        resolveNoneKeyframes() {
          let { unresolvedKeyframes: e, name: t } = this,
            r = [];
          for (let t = 0; t < e.length; t++) {
            var i;
            ('number' == typeof (i = e[t])
              ? 0 === i
              : null === i || 'none' === i || '0' === i || rt(i)) && r.push(t);
          }
          r.length &&
            (function (e, t, r) {
              let i,
                n = 0;
              for (; n < e.length && !i; ) {
                let t = e[n];
                ('string' == typeof t && !rN.has(t) && rj(t).values.length && (i = e[n]), n++);
              }
              if (i && r) for (let n of t) e[n] = rW(r, i);
            })(e, r, t);
        }
        measureInitialState() {
          let { element: e, unresolvedKeyframes: t, name: r } = this;
          if (!e.current) return;
          ('height' === r && (this.suspendedScrollY = window.pageYOffset),
            (this.measuredOrigin = rd[r](
              e.measureViewportBox(),
              window.getComputedStyle(e.current)
            )),
            (t[0] = this.measuredOrigin));
          let i = t[t.length - 1];
          void 0 !== i && e.getValue(r, i).jump(i, !1);
        }
        measureEndState() {
          var e;
          let { element: t, name: r, unresolvedKeyframes: i } = this;
          if (!t.current) return;
          let n = t.getValue(r);
          n && n.jump(this.measuredOrigin, !1);
          let o = i.length - 1,
            s = i[o];
          ((i[o] = rd[r](t.measureViewportBox(), window.getComputedStyle(t.current))),
            null !== s && void 0 === this.finalKeyframe && (this.finalKeyframe = s),
            (null === (e = this.removedTransforms) || void 0 === e ? void 0 : e.length) &&
              this.removedTransforms.forEach(([e, r]) => {
                t.getValue(e).set(r);
              }),
            this.resolveNoneKeyframes());
        }
      }
      function rU(e) {
        let t;
        return () => (void 0 === t && (t = e()), t);
      }
      let rq = (e, t) =>
        'zIndex' !== t &&
        !!(
          'number' == typeof e ||
          Array.isArray(e) ||
          ('string' == typeof e && (rV.test(e) || '0' === e) && !e.startsWith('url('))
        );
      class rJ {
        constructor({
          autoplay: e = !0,
          delay: t = 0,
          type: r = 'keyframes',
          repeat: i = 0,
          repeatDelay: n = 0,
          repeatType: o = 'loop',
          ...s
        }) {
          ((this.isStopped = !1),
            (this.hasAttemptedResolve = !1),
            (this.options = {
              autoplay: e,
              delay: t,
              type: r,
              repeat: i,
              repeatDelay: n,
              repeatType: o,
              ...s
            }),
            this.updateFinishedPromise());
        }
        get resolved() {
          return (this._resolved || this.hasAttemptedResolve || (rb(), rv()), this._resolved);
        }
        onKeyframesResolved(e, t) {
          this.hasAttemptedResolve = !0;
          let {
            name: r,
            type: i,
            velocity: n,
            delay: o,
            onComplete: s,
            onUpdate: a,
            isGenerator: l
          } = this.options;
          if (
            !l &&
            !(function (e, t, r, i) {
              let n = e[0];
              if (null === n) return !1;
              if ('display' === t || 'visibility' === t) return !0;
              let o = e[e.length - 1],
                s = rq(n, t),
                a = rq(o, t);
              return (
                tb(
                  s === a,
                  `You are trying to animate ${t} from "${n}" to "${o}". ${n} is not an animatable value - to enable this animation set ${n} to a value animatable to ${o} via the \`style\` property.`
                ),
                !!s &&
                  !!a &&
                  ((function (e) {
                    let t = e[0];
                    if (1 === e.length) return !0;
                    for (let r = 0; r < e.length; r++) if (e[r] !== t) return !0;
                  })(e) ||
                    ('spring' === r && i))
              );
            })(e, r, i, n)
          ) {
            if (t6.current || !o) {
              (null == a || a(t8(e, this.options, t)),
                null == s || s(),
                this.resolveFinishedPromise());
              return;
            }
            this.options.duration = 0;
          }
          let u = this.initPlayback(e, t);
          !1 !== u &&
            ((this._resolved = { keyframes: e, finalKeyframe: t, ...u }), this.onPostResolved());
        }
        onPostResolved() {}
        then(e, t) {
          return this.currentFinishedPromise.then(e, t);
        }
        updateFinishedPromise() {
          this.currentFinishedPromise = new Promise((e) => {
            this.resolveFinishedPromise = e;
          });
        }
      }
      function rY(e, t, r) {
        var i, n;
        let o = Math.max(t - 5, 0);
        return ((i = r - e(o)), (n = t - o) ? (1e3 / n) * i : 0);
      }
      function rK(e, t) {
        return e * Math.sqrt(1 - t * t);
      }
      let rX = ['duration', 'bounce'],
        rG = ['stiffness', 'damping', 'mass'];
      function rZ(e, t) {
        return t.some((t) => void 0 !== e[t]);
      }
      function rQ({ keyframes: e, restDelta: t, restSpeed: r, ...i }) {
        let n;
        let o = e[0],
          s = e[e.length - 1],
          a = { done: !1, value: o },
          {
            stiffness: l,
            damping: u,
            mass: d,
            duration: h,
            velocity: c,
            isResolvedFromDuration: p
          } = (function (e) {
            let t = {
              velocity: 0,
              stiffness: 100,
              damping: 10,
              mass: 1,
              isResolvedFromDuration: !1,
              ...e
            };
            if (!rZ(e, rG) && rZ(e, rX)) {
              let r = (function ({
                duration: e = 800,
                bounce: t = 0.25,
                velocity: r = 0,
                mass: i = 1
              }) {
                let n, o;
                tb(e <= tZ(10), 'Spring duration must be 10 seconds or less');
                let s = 1 - t;
                ((s = eE(0.05, 1, s)),
                  (e = eE(0.01, 10, tQ(e))),
                  s < 1
                    ? ((n = (t) => {
                        let i = t * s,
                          n = i * e;
                        return 0.001 - ((i - r) / rK(t, s)) * Math.exp(-n);
                      }),
                      (o = (t) => {
                        let i = t * s * e,
                          o = Math.pow(s, 2) * Math.pow(t, 2) * e,
                          a = rK(Math.pow(t, 2), s);
                        return ((i * r + r - o) * Math.exp(-i) * (-n(t) + 0.001 > 0 ? -1 : 1)) / a;
                      }))
                    : ((n = (t) => -0.001 + Math.exp(-t * e) * ((t - r) * e + 1)),
                      (o = (t) => e * e * (r - t) * Math.exp(-t * e))));
                let a = (function (e, t, r) {
                  let i = r;
                  for (let r = 1; r < 12; r++) i -= e(i) / t(i);
                  return i;
                })(n, o, 5 / e);
                if (((e = tZ(e)), isNaN(a))) return { stiffness: 100, damping: 10, duration: e };
                {
                  let t = Math.pow(a, 2) * i;
                  return { stiffness: t, damping: 2 * s * Math.sqrt(i * t), duration: e };
                }
              })(e);
              (t = { ...t, ...r, mass: 1 }).isResolvedFromDuration = !0;
            }
            return t;
          })({ ...i, velocity: -tQ(i.velocity || 0) }),
          m = c || 0,
          f = u / (2 * Math.sqrt(l * d)),
          g = s - o,
          v = tQ(Math.sqrt(l / d)),
          b = 5 > Math.abs(g);
        if ((r || (r = b ? 0.01 : 2), t || (t = b ? 0.005 : 0.5), f < 1)) {
          let e = rK(v, f);
          n = (t) =>
            s -
            Math.exp(-f * v * t) * (((m + f * v * g) / e) * Math.sin(e * t) + g * Math.cos(e * t));
        } else if (1 === f) n = (e) => s - Math.exp(-v * e) * (g + (m + v * g) * e);
        else {
          let e = v * Math.sqrt(f * f - 1);
          n = (t) => {
            let r = Math.exp(-f * v * t),
              i = Math.min(e * t, 300);
            return s - (r * ((m + f * v * g) * Math.sinh(i) + e * g * Math.cosh(i))) / e;
          };
        }
        return {
          calculatedDuration: (p && h) || null,
          next: (e) => {
            let i = n(e);
            if (p) a.done = e >= h;
            else {
              let o = m;
              0 !== e && (o = f < 1 ? rY(n, e, i) : 0);
              let l = Math.abs(o) <= r,
                u = Math.abs(s - i) <= t;
              a.done = l && u;
            }
            return ((a.value = a.done ? s : i), a);
          }
        };
      }
      function r0({
        keyframes: e,
        velocity: t = 0,
        power: r = 0.8,
        timeConstant: i = 325,
        bounceDamping: n = 10,
        bounceStiffness: o = 500,
        modifyTarget: s,
        min: a,
        max: l,
        restDelta: u = 0.5,
        restSpeed: d
      }) {
        let h, c;
        let p = e[0],
          m = { done: !1, value: p },
          f = (e) => (void 0 !== a && e < a) || (void 0 !== l && e > l),
          g = (e) =>
            void 0 === a ? l : void 0 === l ? a : Math.abs(a - e) < Math.abs(l - e) ? a : l,
          v = r * t,
          b = p + v,
          y = void 0 === s ? b : s(b);
        y !== b && (v = y - p);
        let x = (e) => -v * Math.exp(-e / i),
          w = (e) => y + x(e),
          S = (e) => {
            let t = x(e),
              r = w(e);
            ((m.done = Math.abs(t) <= u), (m.value = m.done ? y : r));
          },
          k = (e) => {
            f(m.value) &&
              ((h = e),
              (c = rQ({
                keyframes: [m.value, g(m.value)],
                velocity: rY(w, e, m.value),
                damping: n,
                stiffness: o,
                restDelta: u,
                restSpeed: d
              })));
          };
        return (
          k(0),
          {
            calculatedDuration: null,
            next: (e) => {
              let t = !1;
              return (c || void 0 !== h || ((t = !0), S(e), k(e)), void 0 !== h && e >= h)
                ? c.next(e - h)
                : (t || S(e), m);
            }
          }
        );
      }
      let r1 = (e, t, r) => (((1 - 3 * r + 3 * t) * e + (3 * r - 6 * t)) * e + 3 * t) * e;
      function r5(e, t, r, i) {
        if (e === t && r === i) return tb;
        let n = (t) =>
          (function (e, t, r, i, n) {
            let o, s;
            let a = 0;
            do (o = r1((s = t + (r - t) / 2), i, n) - e) > 0 ? (r = s) : (t = s);
            while (Math.abs(o) > 1e-7 && ++a < 12);
            return s;
          })(t, 0, 1, e, r);
        return (e) => (0 === e || 1 === e ? e : r1(n(e), t, i));
      }
      let r2 = r5(0.42, 0, 1, 1),
        r3 = r5(0, 0, 0.58, 1),
        r4 = r5(0.42, 0, 0.58, 1),
        r6 = (e) => Array.isArray(e) && 'number' != typeof e[0],
        r9 = (e) => (t) => (t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2),
        r8 = (e) => (t) => 1 - e(1 - t),
        r7 = (e) => 1 - Math.sin(Math.acos(e)),
        ie = r8(r7),
        it = r9(r7),
        ir = r5(0.33, 1.53, 0.69, 0.99),
        ii = r8(ir),
        io = r9(ii),
        is = {
          linear: tb,
          easeIn: r2,
          easeInOut: r4,
          easeOut: r3,
          circIn: r7,
          circInOut: it,
          circOut: ie,
          backIn: ii,
          backInOut: io,
          backOut: ir,
          anticipate: (e) => ((e *= 2) < 1 ? 0.5 * ii(e) : 0.5 * (2 - Math.pow(2, -10 * (e - 1))))
        },
        ia = (e) => {
          if (Array.isArray(e)) {
            tb(4 === e.length, 'Cubic bezier arrays must contain four numerical values.');
            let [t, r, i, n] = e;
            return r5(t, r, i, n);
          }
          return 'string' == typeof e
            ? (tb(void 0 !== is[e], `Invalid easing type '${e}'`), is[e])
            : e;
        },
        il = (e, t, r) => {
          let i = t - e;
          return 0 === i ? 1 : (r - e) / i;
        },
        iu = (e, t, r) => e + (t - e) * r;
      function id(e, t, r) {
        return (r < 0 && (r += 1), r > 1 && (r -= 1), r < 1 / 6)
          ? e + (t - e) * 6 * r
          : r < 0.5
            ? t
            : r < 2 / 3
              ? e + (t - e) * (2 / 3 - r) * 6
              : e;
      }
      function ih(e, t) {
        return (r) => (r > 0 ? t : e);
      }
      let ic = (e, t, r) => {
          let i = e * e,
            n = r * (t * t - i) + i;
          return n < 0 ? 0 : Math.sqrt(n);
        },
        ip = [rC, rP, rA],
        im = (e) => ip.find((t) => t.test(e));
      function ig(e) {
        let t = im(e);
        if (
          (tb(!!t, `'${e}' is not an animatable color. Use the equivalent color code instead.`), !t)
        )
          return !1;
        let r = t.parse(e);
        return (
          t === rA &&
            (r = (function ({ hue: e, saturation: t, lightness: r, alpha: i }) {
              ((e /= 360), (r /= 100));
              let n = 0,
                o = 0,
                s = 0;
              if ((t /= 100)) {
                let i = r < 0.5 ? r * (1 + t) : r + t - r * t,
                  a = 2 * r - i;
                ((n = id(a, i, e + 1 / 3)), (o = id(a, i, e)), (s = id(a, i, e - 1 / 3)));
              } else n = o = s = r;
              return {
                red: Math.round(255 * n),
                green: Math.round(255 * o),
                blue: Math.round(255 * s),
                alpha: i
              };
            })(r)),
          r
        );
      }
      let iv = (e, t) => {
          let r = ig(e),
            i = ig(t);
          if (!r || !i) return ih(e, t);
          let n = { ...r };
          return (e) => (
            (n.red = ic(r.red, i.red, e)),
            (n.green = ic(r.green, i.green, e)),
            (n.blue = ic(r.blue, i.blue, e)),
            (n.alpha = iu(r.alpha, i.alpha, e)),
            rP.transform(n)
          );
        },
        ib = new Set(['none', 'hidden']);
      function iy(e, t) {
        return (r) => iu(e, t, r);
      }
      function ix(e) {
        return 'number' == typeof e
          ? iy
          : 'string' == typeof e
            ? eX(e)
              ? ih
              : rE.test(e)
                ? iv
                : ik
            : Array.isArray(e)
              ? iw
              : 'object' == typeof e
                ? rE.test(e)
                  ? iv
                  : iS
                : ih;
      }
      function iw(e, t) {
        let r = [...e],
          i = r.length,
          n = e.map((e, r) => ix(e)(e, t[r]));
        return (e) => {
          for (let t = 0; t < i; t++) r[t] = n[t](e);
          return r;
        };
      }
      function iS(e, t) {
        let r = { ...e, ...t },
          i = {};
        for (let n in r) void 0 !== e[n] && void 0 !== t[n] && (i[n] = ix(e[n])(e[n], t[n]));
        return (e) => {
          for (let t in i) r[t] = i[t](e);
          return r;
        };
      }
      let ik = (e, t) => {
        let r = rV.createTransformer(t),
          i = rj(e),
          n = rj(t);
        return i.indexes.var.length === n.indexes.var.length &&
          i.indexes.color.length === n.indexes.color.length &&
          i.indexes.number.length >= n.indexes.number.length
          ? (ib.has(e) && !n.values.length) || (ib.has(t) && !i.values.length)
            ? ib.has(e)
              ? (r) => (r <= 0 ? e : t)
              : (r) => (r >= 1 ? t : e)
            : tj(
                iw(
                  (function (e, t) {
                    var r;
                    let i = [],
                      n = { color: 0, var: 0, number: 0 };
                    for (let o = 0; o < t.values.length; o++) {
                      let s = t.types[o],
                        a = e.indexes[s][n[s]],
                        l = null !== (r = e.values[a]) && void 0 !== r ? r : 0;
                      ((i[o] = l), n[s]++);
                    }
                    return i;
                  })(i, n),
                  n.values
                ),
                r
              )
          : (tb(
              !0,
              `Complex values '${e}' and '${t}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`
            ),
            ih(e, t));
      };
      function iP(e, t, r) {
        return 'number' == typeof e && 'number' == typeof t && 'number' == typeof r
          ? iu(e, t, r)
          : ix(e)(e, t);
      }
      function iC({ duration: e = 300, keyframes: t, times: r, ease: i = 'easeInOut' }) {
        let n = r6(i) ? i.map(ia) : ia(i),
          o = { done: !1, value: t[0] },
          s = (function (e, t, { clamp: r = !0, ease: i, mixer: n } = {}) {
            let o = e.length;
            if (
              (tb(o === t.length, 'Both input and output ranges must be the same length'), 1 === o)
            )
              return () => t[0];
            if (2 === o && e[0] === e[1]) return () => t[1];
            e[0] > e[o - 1] && ((e = [...e].reverse()), (t = [...t].reverse()));
            let s = (function (e, t, r) {
                let i = [],
                  n = r || iP,
                  o = e.length - 1;
                for (let r = 0; r < o; r++) {
                  let o = n(e[r], e[r + 1]);
                  (t && (o = tj(Array.isArray(t) ? t[r] || tb : t, o)), i.push(o));
                }
                return i;
              })(t, i, n),
              a = s.length,
              l = (t) => {
                let r = 0;
                if (a > 1) for (; r < e.length - 2 && !(t < e[r + 1]); r++);
                let i = il(e[r], e[r + 1], t);
                return s[r](i);
              };
            return r ? (t) => l(eE(e[0], e[o - 1], t)) : l;
          })(
            (r && r.length === t.length
              ? r
              : (function (e) {
                  let t = [0];
                  return (
                    (function (e, t) {
                      let r = e[e.length - 1];
                      for (let i = 1; i <= t; i++) {
                        let n = il(0, t, i);
                        e.push(iu(r, 1, n));
                      }
                    })(t, e.length - 1),
                    t
                  );
                })(t)
            ).map((t) => t * e),
            t,
            { ease: Array.isArray(n) ? n : t.map(() => n || r4).splice(0, t.length - 1) }
          );
        return { calculatedDuration: e, next: (t) => ((o.value = s(t)), (o.done = t >= e), o) };
      }
      let iA = (e) => {
          let t = ({ timestamp: t }) => e(t);
          return {
            start: () => ty.update(t, !0),
            stop: () => tx(t),
            now: () => (tw.isProcessing ? tw.timestamp : re.now())
          };
        },
        iE = { decay: r0, inertia: r0, tween: iC, keyframes: iC, spring: rQ },
        iT = (e) => e / 100;
      class i_ extends rJ {
        constructor({ KeyframeResolver: e = ry, ...t }) {
          (super(t),
            (this.holdTime = null),
            (this.startTime = null),
            (this.cancelTime = null),
            (this.currentTime = 0),
            (this.playbackSpeed = 1),
            (this.pendingPlayState = 'running'),
            (this.state = 'idle'),
            (this.stop = () => {
              if ((this.resolver.cancel(), (this.isStopped = !0), 'idle' === this.state)) return;
              this.teardown();
              let { onStop: e } = this.options;
              e && e();
            }));
          let { name: r, motionValue: i, keyframes: n } = this.options,
            o = (e, t) => this.onKeyframesResolved(e, t);
          (r && i && i.owner
            ? (this.resolver = i.owner.resolveKeyframes(n, o, r, i))
            : (this.resolver = new e(n, o, r, i)),
            this.resolver.scheduleResolve());
        }
        initPlayback(e) {
          let t, r;
          let {
              type: i = 'keyframes',
              repeat: n = 0,
              repeatDelay: o = 0,
              repeatType: s,
              velocity: a = 0
            } = this.options,
            l = iE[i] || iC;
          l !== iC && 'number' != typeof e[0] && ((t = tj(iT, iP(e[0], e[1]))), (e = [0, 100]));
          let u = l({ ...this.options, keyframes: e });
          ('mirror' === s &&
            (r = l({ ...this.options, keyframes: [...e].reverse(), velocity: -a })),
            null === u.calculatedDuration &&
              (u.calculatedDuration = (function (e) {
                let t = 0,
                  r = e.next(t);
                for (; !r.done && t < 2e4; ) ((t += 50), (r = e.next(t)));
                return t >= 2e4 ? 1 / 0 : t;
              })(u)));
          let { calculatedDuration: d } = u,
            h = d + o;
          return {
            generator: u,
            mirroredGenerator: r,
            mapPercentToKeyframes: t,
            calculatedDuration: d,
            resolvedDuration: h,
            totalDuration: h * (n + 1) - o
          };
        }
        onPostResolved() {
          let { autoplay: e = !0 } = this.options;
          (this.play(),
            'paused' !== this.pendingPlayState && e
              ? (this.state = this.pendingPlayState)
              : this.pause());
        }
        tick(e, t = !1) {
          let { resolved: r } = this;
          if (!r) {
            let { keyframes: e } = this.options;
            return { done: !0, value: e[e.length - 1] };
          }
          let {
            finalKeyframe: i,
            generator: n,
            mirroredGenerator: o,
            mapPercentToKeyframes: s,
            keyframes: a,
            calculatedDuration: l,
            totalDuration: u,
            resolvedDuration: d
          } = r;
          if (null === this.startTime) return n.next(0);
          let { delay: h, repeat: c, repeatType: p, repeatDelay: m, onUpdate: f } = this.options;
          (this.speed > 0
            ? (this.startTime = Math.min(this.startTime, e))
            : this.speed < 0 && (this.startTime = Math.min(e - u / this.speed, this.startTime)),
            t
              ? (this.currentTime = e)
              : null !== this.holdTime
                ? (this.currentTime = this.holdTime)
                : (this.currentTime = Math.round(e - this.startTime) * this.speed));
          let g = this.currentTime - h * (this.speed >= 0 ? 1 : -1),
            v = this.speed >= 0 ? g < 0 : g > u;
          ((this.currentTime = Math.max(g, 0)),
            'finished' === this.state && null === this.holdTime && (this.currentTime = u));
          let b = this.currentTime,
            y = n;
          if (c) {
            let e = Math.min(this.currentTime, u) / d,
              t = Math.floor(e),
              r = e % 1;
            (!r && e >= 1 && (r = 1),
              1 === r && t--,
              (t = Math.min(t, c + 1)) % 2 &&
                ('reverse' === p ? ((r = 1 - r), m && (r -= m / d)) : 'mirror' === p && (y = o)),
              (b = eE(0, 1, r) * d));
          }
          let x = v ? { done: !1, value: a[0] } : y.next(b);
          s && (x.value = s(x.value));
          let { done: w } = x;
          v || null === l || (w = this.speed >= 0 ? this.currentTime >= u : this.currentTime <= 0);
          let S =
            null === this.holdTime &&
            ('finished' === this.state || ('running' === this.state && w));
          return (
            S && void 0 !== i && (x.value = t8(a, this.options, i)),
            f && f(x.value),
            S && this.finish(),
            x
          );
        }
        get duration() {
          let { resolved: e } = this;
          return e ? tQ(e.calculatedDuration) : 0;
        }
        get time() {
          return tQ(this.currentTime);
        }
        set time(e) {
          ((e = tZ(e)),
            (this.currentTime = e),
            null !== this.holdTime || 0 === this.speed
              ? (this.holdTime = e)
              : this.driver && (this.startTime = this.driver.now() - e / this.speed));
        }
        get speed() {
          return this.playbackSpeed;
        }
        set speed(e) {
          let t = this.playbackSpeed !== e;
          ((this.playbackSpeed = e), t && (this.time = tQ(this.currentTime)));
        }
        play() {
          if ((this.resolver.isScheduled || this.resolver.resume(), !this._resolved)) {
            this.pendingPlayState = 'running';
            return;
          }
          if (this.isStopped) return;
          let { driver: e = iA, onPlay: t } = this.options;
          (this.driver || (this.driver = e((e) => this.tick(e))), t && t());
          let r = this.driver.now();
          (null !== this.holdTime
            ? (this.startTime = r - this.holdTime)
            : (this.startTime && 'finished' !== this.state) || (this.startTime = r),
            'finished' === this.state && this.updateFinishedPromise(),
            (this.cancelTime = this.startTime),
            (this.holdTime = null),
            (this.state = 'running'),
            this.driver.start());
        }
        pause() {
          var e;
          if (!this._resolved) {
            this.pendingPlayState = 'paused';
            return;
          }
          ((this.state = 'paused'),
            (this.holdTime = null !== (e = this.currentTime) && void 0 !== e ? e : 0));
        }
        complete() {
          ('running' !== this.state && this.play(),
            (this.pendingPlayState = this.state = 'finished'),
            (this.holdTime = null));
        }
        finish() {
          (this.teardown(), (this.state = 'finished'));
          let { onComplete: e } = this.options;
          e && e();
        }
        cancel() {
          (null !== this.cancelTime && this.tick(this.cancelTime),
            this.teardown(),
            this.updateFinishedPromise());
        }
        teardown() {
          ((this.state = 'idle'),
            this.stopDriver(),
            this.resolveFinishedPromise(),
            this.updateFinishedPromise(),
            (this.startTime = this.cancelTime = null),
            this.resolver.cancel());
        }
        stopDriver() {
          this.driver && (this.driver.stop(), (this.driver = void 0));
        }
        sample(e) {
          return ((this.startTime = 0), this.tick(e, !0));
        }
      }
      let iz = (e) => Array.isArray(e) && 'number' == typeof e[0],
        ij = ([e, t, r, i]) => `cubic-bezier(${e}, ${t}, ${r}, ${i})`,
        iM = {
          linear: 'linear',
          ease: 'ease',
          easeIn: 'ease-in',
          easeOut: 'ease-out',
          easeInOut: 'ease-in-out',
          circIn: ij([0, 0.65, 0.55, 1]),
          circOut: ij([0.55, 0, 1, 0.45]),
          backIn: ij([0.31, 0.01, 0.66, -0.59]),
          backOut: ij([0.33, 1.53, 0.69, 0.99])
        };
      function iD(e) {
        return iF(e) || iM.easeOut;
      }
      function iF(e) {
        if (e) return iz(e) ? ij(e) : Array.isArray(e) ? e.map(iD) : iM[e];
      }
      let iV = rU(() => Object.hasOwnProperty.call(Element.prototype, 'animate'));
      class iR extends rJ {
        constructor(e) {
          super(e);
          let { name: t, motionValue: r, keyframes: i } = this.options;
          ((this.resolver = new rH(i, (e, t) => this.onKeyframesResolved(e, t), t, r)),
            this.resolver.scheduleResolve());
        }
        initPlayback(e, t) {
          var r, i;
          let {
            duration: n = 300,
            times: o,
            ease: s,
            type: a,
            motionValue: l,
            name: u
          } = this.options;
          if (!(null === (r = l.owner) || void 0 === r ? void 0 : r.current)) return !1;
          if (
            'spring' === (i = this.options).type ||
            !(function e(t) {
              return !!(
                !t ||
                ('string' == typeof t && t in iM) ||
                iz(t) ||
                (Array.isArray(t) && t.every(e))
              );
            })(i.ease)
          ) {
            let { onComplete: t, onUpdate: r, motionValue: i, ...l } = this.options,
              u = (function (e, t) {
                let r = new i_({ ...t, keyframes: e, repeat: 0, delay: 0, isGenerator: !0 }),
                  i = { done: !1, value: e[0] },
                  n = [],
                  o = 0;
                for (; !i.done && o < 2e4; ) (n.push((i = r.sample(o)).value), (o += 10));
                return { times: void 0, keyframes: n, duration: o - 10, ease: 'linear' };
              })(e, l);
            (1 === (e = u.keyframes).length && (e[1] = e[0]),
              (n = u.duration),
              (o = u.times),
              (s = u.ease),
              (a = 'keyframes'));
          }
          let d = (function (
            e,
            t,
            r,
            {
              delay: i = 0,
              duration: n = 300,
              repeat: o = 0,
              repeatType: s = 'loop',
              ease: a,
              times: l
            } = {}
          ) {
            let u = { [t]: r };
            l && (u.offset = l);
            let d = iF(a);
            return (
              Array.isArray(d) && (u.easing = d),
              e.animate(u, {
                delay: i,
                duration: n,
                easing: Array.isArray(d) ? 'linear' : d,
                fill: 'both',
                iterations: o + 1,
                direction: 'reverse' === s ? 'alternate' : 'normal'
              })
            );
          })(l.owner.current, u, e, { ...this.options, duration: n, times: o, ease: s });
          return (
            (d.startTime = re.now()),
            this.pendingTimeline
              ? ((d.timeline = this.pendingTimeline), (this.pendingTimeline = void 0))
              : (d.onfinish = () => {
                  let { onComplete: r } = this.options;
                  (l.set(t8(e, this.options, t)),
                    r && r(),
                    this.cancel(),
                    this.resolveFinishedPromise());
                }),
            { animation: d, duration: n, times: o, type: a, ease: s, keyframes: e }
          );
        }
        get duration() {
          let { resolved: e } = this;
          if (!e) return 0;
          let { duration: t } = e;
          return tQ(t);
        }
        get time() {
          let { resolved: e } = this;
          if (!e) return 0;
          let { animation: t } = e;
          return tQ(t.currentTime || 0);
        }
        set time(e) {
          let { resolved: t } = this;
          if (!t) return;
          let { animation: r } = t;
          r.currentTime = tZ(e);
        }
        get speed() {
          let { resolved: e } = this;
          if (!e) return 1;
          let { animation: t } = e;
          return t.playbackRate;
        }
        set speed(e) {
          let { resolved: t } = this;
          if (!t) return;
          let { animation: r } = t;
          r.playbackRate = e;
        }
        get state() {
          let { resolved: e } = this;
          if (!e) return 'idle';
          let { animation: t } = e;
          return t.playState;
        }
        attachTimeline(e) {
          if (this._resolved) {
            let { resolved: t } = this;
            if (!t) return tb;
            let { animation: r } = t;
            ((r.timeline = e), (r.onfinish = null));
          } else this.pendingTimeline = e;
          return tb;
        }
        play() {
          if (this.isStopped) return;
          let { resolved: e } = this;
          if (!e) return;
          let { animation: t } = e;
          ('finished' === t.playState && this.updateFinishedPromise(), t.play());
        }
        pause() {
          let { resolved: e } = this;
          if (!e) return;
          let { animation: t } = e;
          t.pause();
        }
        stop() {
          if ((this.resolver.cancel(), (this.isStopped = !0), 'idle' === this.state)) return;
          (this.resolveFinishedPromise(), this.updateFinishedPromise());
          let { resolved: e } = this;
          if (!e) return;
          let { animation: t, keyframes: r, duration: i, type: n, ease: o, times: s } = e;
          if ('idle' === t.playState || 'finished' === t.playState) return;
          if (this.time) {
            let { motionValue: e, onUpdate: t, onComplete: a, ...l } = this.options,
              u = new i_({
                ...l,
                keyframes: r,
                duration: i,
                type: n,
                ease: o,
                times: s,
                isGenerator: !0
              }),
              d = tZ(this.time);
            e.setWithVelocity(u.sample(d - 10).value, u.sample(d).value, 10);
          }
          let { onStop: a } = this.options;
          (a && a(), this.cancel());
        }
        complete() {
          let { resolved: e } = this;
          e && e.animation.finish();
        }
        cancel() {
          let { resolved: e } = this;
          e && e.animation.cancel();
        }
        static supports(e) {
          let { motionValue: t, name: r, repeatDelay: i, repeatType: n, damping: o, type: s } = e;
          return (
            iV() &&
            r &&
            tc.has(r) &&
            t &&
            t.owner &&
            t.owner.current instanceof HTMLElement &&
            !t.owner.getProps().onUpdate &&
            !i &&
            'mirror' !== n &&
            0 !== o &&
            'inertia' !== s
          );
        }
      }
      let iB = rU(() => void 0 !== window.ScrollTimeline);
      class i$ {
        constructor(e) {
          ((this.stop = () => this.runAll('stop')), (this.animations = e.filter(Boolean)));
        }
        then(e, t) {
          return Promise.all(this.animations).then(e).catch(t);
        }
        getAll(e) {
          return this.animations[0][e];
        }
        setAll(e, t) {
          for (let r = 0; r < this.animations.length; r++) this.animations[r][e] = t;
        }
        attachTimeline(e) {
          let t = this.animations.map((t) => {
            if (!iB() || !t.attachTimeline)
              return (
                t.pause(),
                (function (e, t) {
                  let r;
                  let i = () => {
                    let { currentTime: i } = t,
                      n = (null === i ? 0 : i.value) / 100;
                    (r !== n && e(n), (r = n));
                  };
                  return (ty.update(i, !0), () => tx(i));
                })((e) => {
                  t.time = t.duration * e;
                }, e)
              );
            t.attachTimeline(e);
          });
          return () => {
            t.forEach((e, t) => {
              (e && e(), this.animations[t].stop());
            });
          };
        }
        get time() {
          return this.getAll('time');
        }
        set time(e) {
          this.setAll('time', e);
        }
        get speed() {
          return this.getAll('speed');
        }
        set speed(e) {
          this.setAll('speed', e);
        }
        get duration() {
          let e = 0;
          for (let t = 0; t < this.animations.length; t++)
            e = Math.max(e, this.animations[t].duration);
          return e;
        }
        runAll(e) {
          this.animations.forEach((t) => t[e]());
        }
        play() {
          this.runAll('play');
        }
        pause() {
          this.runAll('pause');
        }
        cancel() {
          this.runAll('cancel');
        }
        complete() {
          this.runAll('complete');
        }
      }
      let iL =
        (e, t, r, i = {}, n, o, s) =>
        (a) => {
          let l = t4(i, e) || {},
            u = l.delay || i.delay || 0,
            { elapsed: d = 0 } = i;
          d -= tZ(u);
          let h = {
            keyframes: Array.isArray(r) ? r : [null, r],
            ease: 'easeOut',
            velocity: t.getVelocity(),
            ...l,
            delay: -d,
            onUpdate: (e) => {
              (t.set(e), l.onUpdate && l.onUpdate(e));
            },
            onComplete: () => {
              (a(), l.onComplete && l.onComplete(), s && s());
            },
            onStop: s,
            name: e,
            motionValue: t,
            element: o ? void 0 : n
          };
          (!(function ({
            when: e,
            delay: t,
            delayChildren: r,
            staggerChildren: i,
            staggerDirection: n,
            repeat: o,
            repeatType: s,
            repeatDelay: a,
            from: l,
            elapsed: u,
            ...d
          }) {
            return !!Object.keys(d).length;
          })(l) && (h = { ...h, ...t3(e, h) }),
            h.duration && (h.duration = tZ(h.duration)),
            h.repeatDelay && (h.repeatDelay = tZ(h.repeatDelay)),
            void 0 !== h.from && (h.keyframes[0] = h.from));
          let c = !1;
          if (
            ((!1 !== h.type && (0 !== h.duration || h.repeatDelay)) ||
              ((h.duration = 0), 0 !== h.delay || (c = !0)),
            (t6.current || Q.skipAnimations) && ((c = !0), (h.duration = 0), (h.delay = 0)),
            c && !o && void 0 !== t.get())
          ) {
            let e = t8(h.keyframes, l);
            if (void 0 !== e)
              return (
                ty.update(() => {
                  (h.onUpdate(e), h.onComplete());
                }),
                new i$([])
              );
          }
          return !o && iR.supports(h) ? new iR(h) : new i_(h);
        };
      class iI {
        constructor() {
          this.subscriptions = [];
        }
        add(e) {
          return (tm(this.subscriptions, e), () => tf(this.subscriptions, e));
        }
        notify(e, t, r) {
          let i = this.subscriptions.length;
          if (i) {
            if (1 === i) this.subscriptions[0](e, t, r);
            else
              for (let n = 0; n < i; n++) {
                let i = this.subscriptions[n];
                i && i(e, t, r);
              }
          }
        }
        getSize() {
          return this.subscriptions.length;
        }
        clear() {
          this.subscriptions.length = 0;
        }
      }
      let iO = (e) => !isNaN(parseFloat(e)),
        iW = { current: void 0 };
      class iN {
        constructor(e, t = {}) {
          ((this.version = '11.3.21'),
            (this.canTrackVelocity = null),
            (this.events = {}),
            (this.updateAndNotify = (e, t = !0) => {
              let r = re.now();
              (this.updatedAt !== r && this.setPrevFrameValue(),
                (this.prev = this.current),
                this.setCurrent(e),
                this.current !== this.prev &&
                  this.events.change &&
                  this.events.change.notify(this.current),
                t && this.events.renderRequest && this.events.renderRequest.notify(this.current));
            }),
            (this.hasAnimated = !1),
            this.setCurrent(e),
            (this.owner = t.owner));
        }
        setCurrent(e) {
          ((this.current = e),
            (this.updatedAt = re.now()),
            null === this.canTrackVelocity &&
              void 0 !== e &&
              (this.canTrackVelocity = iO(this.current)));
        }
        setPrevFrameValue(e = this.current) {
          ((this.prevFrameValue = e), (this.prevUpdatedAt = this.updatedAt));
        }
        onChange(e) {
          return this.on('change', e);
        }
        on(e, t) {
          this.events[e] || (this.events[e] = new iI());
          let r = this.events[e].add(t);
          return 'change' === e
            ? () => {
                (r(),
                  ty.read(() => {
                    this.events.change.getSize() || this.stop();
                  }));
              }
            : r;
        }
        clearListeners() {
          for (let e in this.events) this.events[e].clear();
        }
        attach(e, t) {
          ((this.passiveEffect = e), (this.stopPassiveEffect = t));
        }
        set(e, t = !0) {
          t && this.passiveEffect
            ? this.passiveEffect(e, this.updateAndNotify)
            : this.updateAndNotify(e, t);
        }
        setWithVelocity(e, t, r) {
          (this.set(t),
            (this.prev = void 0),
            (this.prevFrameValue = e),
            (this.prevUpdatedAt = this.updatedAt - r));
        }
        jump(e, t = !0) {
          (this.updateAndNotify(e),
            (this.prev = e),
            (this.prevUpdatedAt = this.prevFrameValue = void 0),
            t && this.stop(),
            this.stopPassiveEffect && this.stopPassiveEffect());
        }
        get() {
          return (iW.current && iW.current.push(this), this.current);
        }
        getPrevious() {
          return this.prev;
        }
        getVelocity() {
          var e;
          let t = re.now();
          if (!this.canTrackVelocity || void 0 === this.prevFrameValue || t - this.updatedAt > 30)
            return 0;
          let r = Math.min(this.updatedAt - this.prevUpdatedAt, 30);
          return (
            (e = parseFloat(this.current) - parseFloat(this.prevFrameValue)),
            r ? (1e3 / r) * e : 0
          );
        }
        start(e) {
          return (
            this.stop(),
            new Promise((t) => {
              ((this.hasAnimated = !0),
                (this.animation = e(t)),
                this.events.animationStart && this.events.animationStart.notify());
            }).then(() => {
              (this.events.animationComplete && this.events.animationComplete.notify(),
                this.clearAnimation());
            })
          );
        }
        stop() {
          (this.animation &&
            (this.animation.stop(),
            this.events.animationCancel && this.events.animationCancel.notify()),
            this.clearAnimation());
        }
        isAnimating() {
          return !!this.animation;
        }
        clearAnimation() {
          delete this.animation;
        }
        destroy() {
          (this.clearListeners(), this.stop(), this.stopPassiveEffect && this.stopPassiveEffect());
        }
      }
      function iH(e, t) {
        return new iN(e, t);
      }
      function iU(e) {
        return e.getProps()[Z];
      }
      class iq extends iN {
        constructor() {
          (super(...arguments), (this.output = []), (this.counts = new Map()));
        }
        add(e) {
          let t = tp(e);
          if (!t) return;
          let r = this.counts.get(t) || 0;
          (this.counts.set(t, r + 1), 0 === r && (this.output.push(t), this.update()));
          let i = !1;
          return () => {
            if (i) return;
            i = !0;
            let e = this.counts.get(t) - 1;
            (this.counts.set(t, e), 0 === e && (tf(this.output, t), this.update()));
          };
        }
        update() {
          this.set(this.output.length ? this.output.join(', ') : 'auto');
        }
      }
      function iJ(e, t) {
        var r, i;
        if (!e.applyWillChange) return;
        let n = e.getValue('willChange');
        if (
          (n ||
            (null === (r = e.props.style) || void 0 === r ? void 0 : r.willChange) ||
            ((n = new iq('auto')), e.addValue('willChange', n)),
          eC((i = n)) && i.add)
        )
          return n.add(t);
      }
      function iY(e, t, { delay: r = 0, transitionOverride: i, type: n } = {}) {
        var o;
        let { transition: s = e.getDefaultTransition(), transitionEnd: a, ...l } = t;
        i && (s = i);
        let u = [],
          d = n && e.animationState && e.animationState.getState()[n];
        for (let t in l) {
          let i = e.getValue(t, null !== (o = e.latestValues[t]) && void 0 !== o ? o : null),
            n = l[t];
          if (
            void 0 === n ||
            (d &&
              (function ({ protectedKeys: e, needsAnimating: t }, r) {
                let i = e.hasOwnProperty(r) && !0 !== t[r];
                return ((t[r] = !1), i);
              })(d, t))
          )
            continue;
          let a = { delay: r, elapsed: 0, ...t4(s || {}, t) },
            h = !1;
          if (window.HandoffAppearAnimations) {
            let r = iU(e);
            if (r) {
              let e = window.HandoffAppearAnimations(r, t, i, ty);
              null !== e && ((a.elapsed = e), (h = !0));
            }
          }
          i.start(
            iL(t, i, n, e.shouldReduceMotion && ek.has(t) ? { type: !1 } : a, e, h, iJ(e, t))
          );
          let c = i.animation;
          c && u.push(c);
        }
        return (
          a &&
            Promise.all(u).then(() => {
              ty.update(() => {
                a &&
                  (function (e, t) {
                    let { transitionEnd: r = {}, transition: i = {}, ...n } = tG(e, t) || {};
                    for (let t in (n = { ...n, ...r })) {
                      let r = td(n[t]);
                      e.hasValue(t) ? e.getValue(t).set(r) : e.addValue(t, iH(r));
                    }
                  })(e, a);
              });
            }),
          u
        );
      }
      function iK(e, t, r = {}) {
        var i;
        let n = tG(
            e,
            t,
            'exit' === r.type
              ? null === (i = e.presenceContext) || void 0 === i
                ? void 0
                : i.custom
              : void 0
          ),
          { transition: o = e.getDefaultTransition() || {} } = n || {};
        r.transitionOverride && (o = r.transitionOverride);
        let s = n ? () => Promise.all(iY(e, n, r)) : () => Promise.resolve(),
          a =
            e.variantChildren && e.variantChildren.size
              ? (i = 0) => {
                  let { delayChildren: n = 0, staggerChildren: s, staggerDirection: a } = o;
                  return (function (e, t, r = 0, i = 0, n = 1, o) {
                    let s = [],
                      a = (e.variantChildren.size - 1) * i,
                      l = 1 === n ? (e = 0) => e * i : (e = 0) => a - e * i;
                    return (
                      Array.from(e.variantChildren)
                        .sort(iX)
                        .forEach((e, i) => {
                          (e.notify('AnimationStart', t),
                            s.push(
                              iK(e, t, { ...o, delay: r + l(i) }).then(() =>
                                e.notify('AnimationComplete', t)
                              )
                            ));
                        }),
                      Promise.all(s)
                    );
                  })(e, t, n + i, s, a, r);
                }
              : () => Promise.resolve(),
          { when: l } = o;
        if (!l) return Promise.all([s(), a(r.delay)]);
        {
          let [e, t] = 'beforeChildren' === l ? [s, a] : [a, s];
          return e().then(() => t());
        }
      }
      function iX(e, t) {
        return e.sortNodePosition(t);
      }
      let iG = [...ed].reverse(),
        iZ = ed.length;
      function iQ(e = !1) {
        return { isActive: e, protectedKeys: {}, needsAnimating: {}, prevResolvedValues: {} };
      }
      function i0() {
        return {
          animate: iQ(!0),
          whileInView: iQ(),
          whileHover: iQ(),
          whileTap: iQ(),
          whileDrag: iQ(),
          whileFocus: iQ(),
          exit: iQ()
        };
      }
      class i1 extends tB {
        constructor(e) {
          (super(e),
            e.animationState ||
              (e.animationState = (function (e) {
                let t = (t) =>
                    Promise.all(
                      t.map(({ animation: t, options: r }) =>
                        (function (e, t, r = {}) {
                          let i;
                          if ((e.notify('AnimationStart', t), Array.isArray(t)))
                            i = Promise.all(t.map((t) => iK(e, t, r)));
                          else if ('string' == typeof t) i = iK(e, t, r);
                          else {
                            let n = 'function' == typeof t ? tG(e, t, r.custom) : t;
                            i = Promise.all(iY(e, n, r));
                          }
                          return i.then(() => {
                            e.notify('AnimationComplete', t);
                          });
                        })(e, t, r)
                      )
                    ),
                  r = i0(),
                  i = !0,
                  n = (t) => (r, i) => {
                    var n;
                    let o = tG(
                      e,
                      i,
                      'exit' === t
                        ? null === (n = e.presenceContext) || void 0 === n
                          ? void 0
                          : n.custom
                        : void 0
                    );
                    if (o) {
                      let { transition: e, transitionEnd: t, ...i } = o;
                      r = { ...r, ...i, ...t };
                    }
                    return r;
                  };
                function o(o) {
                  let s = e.getProps(),
                    a = e.getVariantContext(!0) || {},
                    l = [],
                    u = new Set(),
                    d = {},
                    h = 1 / 0;
                  for (let t = 0; t < iZ; t++) {
                    var c;
                    let p = iG[t],
                      m = r[p],
                      f = void 0 !== s[p] ? s[p] : a[p],
                      g = el(f),
                      v = p === o ? m.isActive : null;
                    !1 === v && (h = t);
                    let b = f === a[p] && f !== s[p] && g;
                    if (
                      (b && i && e.manuallyAnimateOnMount && (b = !1),
                      (m.protectedKeys = { ...d }),
                      (!m.isActive && null === v) ||
                        (!f && !m.prevProp) ||
                        eu(f) ||
                        'boolean' == typeof f)
                    )
                      continue;
                    let y =
                        ((c = m.prevProp),
                        ('string' == typeof f ? f !== c : !!Array.isArray(f) && !tX(f, c)) ||
                          (p === o && m.isActive && !b && g) ||
                          (t > h && g)),
                      x = !1,
                      w = Array.isArray(f) ? f : [f],
                      S = w.reduce(n(p), {});
                    !1 === v && (S = {});
                    let { prevResolvedValues: k = {} } = m,
                      P = { ...k, ...S },
                      C = (t) => {
                        ((y = !0), u.has(t) && ((x = !0), u.delete(t)), (m.needsAnimating[t] = !0));
                        let r = e.getValue(t);
                        r && (r.liveStyle = !1);
                      };
                    for (let e in P) {
                      let t = S[e],
                        r = k[e];
                      if (!d.hasOwnProperty(e))
                        (tl(t) && tl(r) ? tX(t, r) : t === r)
                          ? void 0 !== t && u.has(e)
                            ? C(e)
                            : (m.protectedKeys[e] = !0)
                          : null != t
                            ? C(e)
                            : u.add(e);
                    }
                    ((m.prevProp = f),
                      (m.prevResolvedValues = S),
                      m.isActive && (d = { ...d, ...S }),
                      i && e.blockInitialAnimation && (y = !1),
                      y &&
                        (!b || x) &&
                        l.push(...w.map((e) => ({ animation: e, options: { type: p } }))));
                  }
                  if (u.size) {
                    let t = {};
                    (u.forEach((r) => {
                      let i = e.getBaseTarget(r),
                        n = e.getValue(r);
                      (n && (n.liveStyle = !0), (t[r] = null != i ? i : null));
                    }),
                      l.push({ animation: t }));
                  }
                  let p = !!l.length;
                  return (
                    i &&
                      (!1 === s.initial || s.initial === s.animate) &&
                      !e.manuallyAnimateOnMount &&
                      (p = !1),
                    (i = !1),
                    p ? t(l) : Promise.resolve()
                  );
                }
                return {
                  animateChanges: o,
                  setActive: function (t, i) {
                    var n;
                    if (r[t].isActive === i) return Promise.resolve();
                    (null === (n = e.variantChildren) ||
                      void 0 === n ||
                      n.forEach((e) => {
                        var r;
                        return null === (r = e.animationState) || void 0 === r
                          ? void 0
                          : r.setActive(t, i);
                      }),
                      (r[t].isActive = i));
                    let s = o(t);
                    for (let e in r) r[e].protectedKeys = {};
                    return s;
                  },
                  setAnimateFunction: function (r) {
                    t = r(e);
                  },
                  getState: () => r,
                  reset: () => {
                    ((r = i0()), (i = !0));
                  }
                };
              })(e)));
        }
        updateAnimationControlsSubscription() {
          let { animate: e } = this.node.getProps();
          eu(e) && (this.unmountControls = e.subscribe(this.node));
        }
        mount() {
          this.updateAnimationControlsSubscription();
        }
        update() {
          let { animate: e } = this.node.getProps(),
            { animate: t } = this.node.prevProps || {};
          e !== t && this.updateAnimationControlsSubscription();
        }
        unmount() {
          var e;
          (this.node.animationState.reset(),
            null === (e = this.unmountControls) || void 0 === e || e.call(this));
        }
      }
      let i5 = 0;
      class i2 extends tB {
        constructor() {
          (super(...arguments), (this.id = i5++));
        }
        update() {
          if (!this.node.presenceContext) return;
          let { isPresent: e, onExitComplete: t } = this.node.presenceContext,
            { isPresent: r } = this.node.prevPresenceContext || {};
          if (!this.node.animationState || e === r) return;
          let i = this.node.animationState.setActive('exit', !e);
          t && !e && i.then(() => t(this.id));
        }
        mount() {
          let { register: e } = this.node.presenceContext || {};
          e && (this.unmount = e(this.id));
        }
        unmount() {}
      }
      let i3 = (e, t) => Math.abs(e - t);
      class i4 {
        constructor(
          e,
          t,
          { transformPagePoint: r, contextWindow: i, dragSnapToOrigin: n = !1 } = {}
        ) {
          if (
            ((this.startEvent = null),
            (this.lastMoveEvent = null),
            (this.lastMoveEventInfo = null),
            (this.handlers = {}),
            (this.contextWindow = window),
            (this.updatePoint = () => {
              var e, t;
              if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
              let r = i8(this.lastMoveEventInfo, this.history),
                i = null !== this.startEvent,
                n =
                  ((e = r.offset),
                  (t = { x: 0, y: 0 }),
                  Math.sqrt(i3(e.x, t.x) ** 2 + i3(e.y, t.y) ** 2) >= 3);
              if (!i && !n) return;
              let { point: o } = r,
                { timestamp: s } = tw;
              this.history.push({ ...o, timestamp: s });
              let { onStart: a, onMove: l } = this.handlers;
              (i || (a && a(this.lastMoveEvent, r), (this.startEvent = this.lastMoveEvent)),
                l && l(this.lastMoveEvent, r));
            }),
            (this.handlePointerMove = (e, t) => {
              ((this.lastMoveEvent = e),
                (this.lastMoveEventInfo = i6(t, this.transformPagePoint)),
                ty.update(this.updatePoint, !0));
            }),
            (this.handlePointerUp = (e, t) => {
              this.end();
              let { onEnd: r, onSessionEnd: i, resumeAnimation: n } = this.handlers;
              if (
                (this.dragSnapToOrigin && n && n(), !(this.lastMoveEvent && this.lastMoveEventInfo))
              )
                return;
              let o = i8(
                'pointercancel' === e.type
                  ? this.lastMoveEventInfo
                  : i6(t, this.transformPagePoint),
                this.history
              );
              (this.startEvent && r && r(e, o), i && i(e, o));
            }),
            !tA(e))
          )
            return;
          ((this.dragSnapToOrigin = n),
            (this.handlers = t),
            (this.transformPagePoint = r),
            (this.contextWindow = i || window));
          let o = i6(tE(e), this.transformPagePoint),
            { point: s } = o,
            { timestamp: a } = tw;
          this.history = [{ ...s, timestamp: a }];
          let { onSessionStart: l } = t;
          (l && l(e, i8(o, this.history)),
            (this.removeListeners = tj(
              t_(this.contextWindow, 'pointermove', this.handlePointerMove),
              t_(this.contextWindow, 'pointerup', this.handlePointerUp),
              t_(this.contextWindow, 'pointercancel', this.handlePointerUp)
            )));
        }
        updateHandlers(e) {
          this.handlers = e;
        }
        end() {
          (this.removeListeners && this.removeListeners(), tx(this.updatePoint));
        }
      }
      function i6(e, t) {
        return t ? { point: t(e.point) } : e;
      }
      function i9(e, t) {
        return { x: e.x - t.x, y: e.y - t.y };
      }
      function i8({ point: e }, t) {
        return {
          point: e,
          delta: i9(e, i7(t)),
          offset: i9(e, t[0]),
          velocity: (function (e, t) {
            if (e.length < 2) return { x: 0, y: 0 };
            let r = e.length - 1,
              i = null,
              n = i7(e);
            for (; r >= 0 && ((i = e[r]), !(n.timestamp - i.timestamp > tZ(0.1))); ) r--;
            if (!i) return { x: 0, y: 0 };
            let o = tQ(n.timestamp - i.timestamp);
            if (0 === o) return { x: 0, y: 0 };
            let s = { x: (n.x - i.x) / o, y: (n.y - i.y) / o };
            return (s.x === 1 / 0 && (s.x = 0), s.y === 1 / 0 && (s.y = 0), s);
          })(t, 0)
        };
      }
      function i7(e) {
        return e[e.length - 1];
      }
      function ne(e) {
        return e.max - e.min;
      }
      function nt(e, t, r, i = 0.5) {
        ((e.origin = i),
          (e.originPoint = iu(t.min, t.max, e.origin)),
          (e.scale = ne(r) / ne(t)),
          (e.translate = iu(r.min, r.max, e.origin) - e.originPoint),
          ((e.scale >= 0.9999 && e.scale <= 1.0001) || isNaN(e.scale)) && (e.scale = 1),
          ((e.translate >= -0.01 && e.translate <= 0.01) || isNaN(e.translate)) &&
            (e.translate = 0));
      }
      function nr(e, t, r, i) {
        (nt(e.x, t.x, r.x, i ? i.originX : void 0), nt(e.y, t.y, r.y, i ? i.originY : void 0));
      }
      function ni(e, t, r) {
        ((e.min = r.min + t.min), (e.max = e.min + ne(t)));
      }
      function nn(e, t, r) {
        ((e.min = t.min - r.min), (e.max = e.min + ne(t)));
      }
      function no(e, t, r) {
        (nn(e.x, t.x, r.x), nn(e.y, t.y, r.y));
      }
      function ns(e, t, r) {
        return {
          min: void 0 !== t ? e.min + t : void 0,
          max: void 0 !== r ? e.max + r - (e.max - e.min) : void 0
        };
      }
      function na(e, t) {
        let r = t.min - e.min,
          i = t.max - e.max;
        return (t.max - t.min < e.max - e.min && ([r, i] = [i, r]), { min: r, max: i });
      }
      function nl(e, t, r) {
        return { min: nu(e, t), max: nu(e, r) };
      }
      function nu(e, t) {
        return 'number' == typeof e ? e : e[t] || 0;
      }
      let nd = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
        nh = () => ({ x: nd(), y: nd() }),
        nc = () => ({ min: 0, max: 0 }),
        np = () => ({ x: nc(), y: nc() });
      function nm(e) {
        return [e('x'), e('y')];
      }
      function nf({ top: e, left: t, right: r, bottom: i }) {
        return { x: { min: t, max: r }, y: { min: e, max: i } };
      }
      function ng(e) {
        return void 0 === e || 1 === e;
      }
      function nv({ scale: e, scaleX: t, scaleY: r }) {
        return !ng(e) || !ng(t) || !ng(r);
      }
      function nb(e) {
        return nv(e) || ny(e) || e.z || e.rotate || e.rotateX || e.rotateY || e.skewX || e.skewY;
      }
      function ny(e) {
        var t, r;
        return ((t = e.x) && '0%' !== t) || ((r = e.y) && '0%' !== r);
      }
      function nx(e, t, r, i, n) {
        return (void 0 !== n && (e = i + n * (e - i)), i + r * (e - i) + t);
      }
      function nw(e, t = 0, r = 1, i, n) {
        ((e.min = nx(e.min, t, r, i, n)), (e.max = nx(e.max, t, r, i, n)));
      }
      function nS(e, { x: t, y: r }) {
        (nw(e.x, t.translate, t.scale, t.originPoint),
          nw(e.y, r.translate, r.scale, r.originPoint));
      }
      function nk(e, t) {
        ((e.min = e.min + t), (e.max = e.max + t));
      }
      function nP(e, t, r, i, n = 0.5) {
        let o = iu(e.min, e.max, n);
        nw(e, t, r, o, i);
      }
      function nC(e, t) {
        (nP(e.x, t.x, t.scaleX, t.scale, t.originX), nP(e.y, t.y, t.scaleY, t.scale, t.originY));
      }
      function nA(e, t) {
        return nf(
          (function (e, t) {
            if (!t) return e;
            let r = t({ x: e.left, y: e.top }),
              i = t({ x: e.right, y: e.bottom });
            return { top: r.y, left: r.x, bottom: i.y, right: i.x };
          })(e.getBoundingClientRect(), t)
        );
      }
      let nE = ({ current: e }) => (e ? e.ownerDocument.defaultView : null),
        nT = new WeakMap();
      class n_ {
        constructor(e) {
          ((this.openGlobalLock = null),
            (this.isDragging = !1),
            (this.currentDirection = null),
            (this.originPoint = { x: 0, y: 0 }),
            (this.constraints = !1),
            (this.hasMutatedConstraints = !1),
            (this.elastic = np()),
            (this.visualElement = e));
        }
        start(e, { snapToCursor: t = !1 } = {}) {
          let { presenceContext: r } = this.visualElement;
          if (r && !1 === r.isPresent) return;
          let { dragSnapToOrigin: i } = this.getProps();
          this.panSession = new i4(
            e,
            {
              onSessionStart: (e) => {
                let { dragSnapToOrigin: r } = this.getProps();
                (r ? this.pauseAnimation() : this.stopAnimation(),
                  t && this.snapToCursor(tE(e, 'page').point));
              },
              onStart: (e, t) => {
                var r;
                let { drag: i, dragPropagation: n, onDragStart: o } = this.getProps();
                if (
                  i &&
                  !n &&
                  (this.openGlobalLock && this.openGlobalLock(),
                  (this.openGlobalLock = tV(i)),
                  !this.openGlobalLock)
                )
                  return;
                ((this.isDragging = !0),
                  (this.currentDirection = null),
                  this.resolveConstraints(),
                  this.visualElement.projection &&
                    ((this.visualElement.projection.isAnimationBlocked = !0),
                    (this.visualElement.projection.target = void 0)),
                  nm((e) => {
                    let t = this.getAxisMotionValue(e).get() || 0;
                    if (e$.test(t)) {
                      let { projection: r } = this.visualElement;
                      if (r && r.layout) {
                        let i = r.layout.layoutBox[e];
                        if (i) {
                          let e = ne(i);
                          t = (parseFloat(t) / 100) * e;
                        }
                      }
                    }
                    this.originPoint[e] = t;
                  }),
                  o && ty.postRender(() => o(e, t)),
                  null === (r = this.removeWillChange) || void 0 === r || r.call(this),
                  (this.removeWillChange = iJ(this.visualElement, 'transform')));
                let { animationState: s } = this.visualElement;
                s && s.setActive('whileDrag', !0);
              },
              onMove: (e, t) => {
                let {
                  dragPropagation: r,
                  dragDirectionLock: i,
                  onDirectionLock: n,
                  onDrag: o
                } = this.getProps();
                if (!r && !this.openGlobalLock) return;
                let { offset: s } = t;
                if (i && null === this.currentDirection) {
                  ((this.currentDirection = (function (e, t = 10) {
                    let r = null;
                    return (Math.abs(e.y) > t ? (r = 'y') : Math.abs(e.x) > t && (r = 'x'), r);
                  })(s)),
                    null !== this.currentDirection && n && n(this.currentDirection));
                  return;
                }
                (this.updateAxis('x', t.point, s),
                  this.updateAxis('y', t.point, s),
                  this.visualElement.render(),
                  o && o(e, t));
              },
              onSessionEnd: (e, t) => this.stop(e, t),
              resumeAnimation: () =>
                nm((e) => {
                  var t;
                  return (
                    'paused' === this.getAnimationState(e) &&
                    (null === (t = this.getAxisMotionValue(e).animation) || void 0 === t
                      ? void 0
                      : t.play())
                  );
                })
            },
            {
              transformPagePoint: this.visualElement.getTransformPagePoint(),
              dragSnapToOrigin: i,
              contextWindow: nE(this.visualElement)
            }
          );
        }
        stop(e, t) {
          var r;
          null === (r = this.removeWillChange) || void 0 === r || r.call(this);
          let i = this.isDragging;
          if ((this.cancel(), !i)) return;
          let { velocity: n } = t;
          this.startAnimation(n);
          let { onDragEnd: o } = this.getProps();
          o && ty.postRender(() => o(e, t));
        }
        cancel() {
          this.isDragging = !1;
          let { projection: e, animationState: t } = this.visualElement;
          (e && (e.isAnimationBlocked = !1),
            this.panSession && this.panSession.end(),
            (this.panSession = void 0));
          let { dragPropagation: r } = this.getProps();
          (!r && this.openGlobalLock && (this.openGlobalLock(), (this.openGlobalLock = null)),
            t && t.setActive('whileDrag', !1));
        }
        updateAxis(e, t, r) {
          let { drag: i } = this.getProps();
          if (!r || !nz(e, i, this.currentDirection)) return;
          let n = this.getAxisMotionValue(e),
            o = this.originPoint[e] + r[e];
          (this.constraints &&
            this.constraints[e] &&
            (o = (function (e, { min: t, max: r }, i) {
              return (
                void 0 !== t && e < t
                  ? (e = i ? iu(t, e, i.min) : Math.max(e, t))
                  : void 0 !== r && e > r && (e = i ? iu(r, e, i.max) : Math.min(e, r)),
                e
              );
            })(o, this.constraints[e], this.elastic[e])),
            n.set(o));
        }
        resolveConstraints() {
          var e;
          let { dragConstraints: t, dragElastic: r } = this.getProps(),
            i =
              this.visualElement.projection && !this.visualElement.projection.layout
                ? this.visualElement.projection.measure(!1)
                : null === (e = this.visualElement.projection) || void 0 === e
                  ? void 0
                  : e.layout,
            n = this.constraints;
          (t && en(t)
            ? this.constraints || (this.constraints = this.resolveRefConstraints())
            : t && i
              ? (this.constraints = (function (e, { top: t, left: r, bottom: i, right: n }) {
                  return { x: ns(e.x, r, n), y: ns(e.y, t, i) };
                })(i.layoutBox, t))
              : (this.constraints = !1),
            (this.elastic = (function (e = 0.35) {
              return (
                !1 === e ? (e = 0) : !0 === e && (e = 0.35),
                { x: nl(e, 'left', 'right'), y: nl(e, 'top', 'bottom') }
              );
            })(r)),
            n !== this.constraints &&
              i &&
              this.constraints &&
              !this.hasMutatedConstraints &&
              nm((e) => {
                !1 !== this.constraints &&
                  this.getAxisMotionValue(e) &&
                  (this.constraints[e] = (function (e, t) {
                    let r = {};
                    return (
                      void 0 !== t.min && (r.min = t.min - e.min),
                      void 0 !== t.max && (r.max = t.max - e.min),
                      r
                    );
                  })(i.layoutBox[e], this.constraints[e]));
              }));
        }
        resolveRefConstraints() {
          var e;
          let { dragConstraints: t, onMeasureDragConstraints: r } = this.getProps();
          if (!t || !en(t)) return !1;
          let i = t.current;
          tb(
            null !== i,
            "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop."
          );
          let { projection: n } = this.visualElement;
          if (!n || !n.layout) return !1;
          let o = (function (e, t, r) {
              let i = nA(e, r),
                { scroll: n } = t;
              return (n && (nk(i.x, n.offset.x), nk(i.y, n.offset.y)), i);
            })(i, n.root, this.visualElement.getTransformPagePoint()),
            s = { x: na((e = n.layout.layoutBox).x, o.x), y: na(e.y, o.y) };
          if (r) {
            let e = r(
              (function ({ x: e, y: t }) {
                return { top: t.min, right: e.max, bottom: t.max, left: e.min };
              })(s)
            );
            ((this.hasMutatedConstraints = !!e), e && (s = nf(e)));
          }
          return s;
        }
        startAnimation(e) {
          let {
              drag: t,
              dragMomentum: r,
              dragElastic: i,
              dragTransition: n,
              dragSnapToOrigin: o,
              onDragTransitionEnd: s
            } = this.getProps(),
            a = this.constraints || {};
          return Promise.all(
            nm((s) => {
              if (!nz(s, t, this.currentDirection)) return;
              let l = (a && a[s]) || {};
              o && (l = { min: 0, max: 0 });
              let u = {
                type: 'inertia',
                velocity: r ? e[s] : 0,
                bounceStiffness: i ? 200 : 1e6,
                bounceDamping: i ? 40 : 1e7,
                timeConstant: 750,
                restDelta: 1,
                restSpeed: 10,
                ...n,
                ...l
              };
              return this.startAxisValueAnimation(s, u);
            })
          ).then(s);
        }
        startAxisValueAnimation(e, t) {
          let r = this.getAxisMotionValue(e);
          return r.start(iL(e, r, 0, t, this.visualElement, !1, iJ(this.visualElement, e)));
        }
        stopAnimation() {
          nm((e) => this.getAxisMotionValue(e).stop());
        }
        pauseAnimation() {
          nm((e) => {
            var t;
            return null === (t = this.getAxisMotionValue(e).animation) || void 0 === t
              ? void 0
              : t.pause();
          });
        }
        getAnimationState(e) {
          var t;
          return null === (t = this.getAxisMotionValue(e).animation) || void 0 === t
            ? void 0
            : t.state;
        }
        getAxisMotionValue(e) {
          let t = `_drag${e.toUpperCase()}`,
            r = this.visualElement.getProps();
          return r[t] || this.visualElement.getValue(e, (r.initial ? r.initial[e] : void 0) || 0);
        }
        snapToCursor(e) {
          nm((t) => {
            let { drag: r } = this.getProps();
            if (!nz(t, r, this.currentDirection)) return;
            let { projection: i } = this.visualElement,
              n = this.getAxisMotionValue(t);
            if (i && i.layout) {
              let { min: r, max: o } = i.layout.layoutBox[t];
              n.set(e[t] - iu(r, o, 0.5));
            }
          });
        }
        scalePositionWithinConstraints() {
          if (!this.visualElement.current) return;
          let { drag: e, dragConstraints: t } = this.getProps(),
            { projection: r } = this.visualElement;
          if (!en(t) || !r || !this.constraints) return;
          this.stopAnimation();
          let i = { x: 0, y: 0 };
          nm((e) => {
            let t = this.getAxisMotionValue(e);
            if (t && !1 !== this.constraints) {
              let r = t.get();
              i[e] = (function (e, t) {
                let r = 0.5,
                  i = ne(e),
                  n = ne(t);
                return (
                  n > i
                    ? (r = il(t.min, t.max - i, e.min))
                    : i > n && (r = il(e.min, e.max - n, t.min)),
                  eE(0, 1, r)
                );
              })({ min: r, max: r }, this.constraints[e]);
            }
          });
          let { transformTemplate: n } = this.visualElement.getProps();
          ((this.visualElement.current.style.transform = n ? n({}, '') : 'none'),
            r.root && r.root.updateScroll(),
            r.updateLayout(),
            this.resolveConstraints(),
            nm((t) => {
              if (!nz(t, e, null)) return;
              let r = this.getAxisMotionValue(t),
                { min: n, max: o } = this.constraints[t];
              r.set(iu(n, o, i[t]));
            }));
        }
        addListeners() {
          if (!this.visualElement.current) return;
          nT.set(this.visualElement, this);
          let e = t_(this.visualElement.current, 'pointerdown', (e) => {
              let { drag: t, dragListener: r = !0 } = this.getProps();
              t && r && this.start(e);
            }),
            t = () => {
              let { dragConstraints: e } = this.getProps();
              en(e) && e.current && (this.constraints = this.resolveRefConstraints());
            },
            { projection: r } = this.visualElement,
            i = r.addEventListener('measure', t);
          (r && !r.layout && (r.root && r.root.updateScroll(), r.updateLayout()), ty.read(t));
          let n = tC(window, 'resize', () => this.scalePositionWithinConstraints()),
            o = r.addEventListener('didUpdate', ({ delta: e, hasLayoutChanged: t }) => {
              this.isDragging &&
                t &&
                (nm((t) => {
                  let r = this.getAxisMotionValue(t);
                  r && ((this.originPoint[t] += e[t].translate), r.set(r.get() + e[t].translate));
                }),
                this.visualElement.render());
            });
          return () => {
            (n(), e(), i(), o && o());
          };
        }
        getProps() {
          let e = this.visualElement.getProps(),
            {
              drag: t = !1,
              dragDirectionLock: r = !1,
              dragPropagation: i = !1,
              dragConstraints: n = !1,
              dragElastic: o = 0.35,
              dragMomentum: s = !0
            } = e;
          return {
            ...e,
            drag: t,
            dragDirectionLock: r,
            dragPropagation: i,
            dragConstraints: n,
            dragElastic: o,
            dragMomentum: s
          };
        }
      }
      function nz(e, t, r) {
        return (!0 === t || t === e) && (null === r || r === e);
      }
      class nj extends tB {
        constructor(e) {
          (super(e),
            (this.removeGroupControls = tb),
            (this.removeListeners = tb),
            (this.controls = new n_(e)));
        }
        mount() {
          let { dragControls: e } = this.node.getProps();
          (e && (this.removeGroupControls = e.subscribe(this.controls)),
            (this.removeListeners = this.controls.addListeners() || tb));
        }
        unmount() {
          (this.removeGroupControls(), this.removeListeners());
        }
      }
      let nM = (e) => (t, r) => {
        e && ty.postRender(() => e(t, r));
      };
      class nD extends tB {
        constructor() {
          (super(...arguments), (this.removePointerDownListener = tb));
        }
        onPointerDown(e) {
          this.session = new i4(e, this.createPanHandlers(), {
            transformPagePoint: this.node.getTransformPagePoint(),
            contextWindow: nE(this.node)
          });
        }
        createPanHandlers() {
          let { onPanSessionStart: e, onPanStart: t, onPan: r, onPanEnd: i } = this.node.getProps();
          return {
            onSessionStart: nM(e),
            onStart: nM(t),
            onMove: r,
            onEnd: (e, t) => {
              (delete this.session, i && ty.postRender(() => i(e, t)));
            }
          };
        }
        mount() {
          this.removePointerDownListener = t_(this.node.current, 'pointerdown', (e) =>
            this.onPointerDown(e)
          );
        }
        update() {
          this.session && this.session.updateHandlers(this.createPanHandlers());
        }
        unmount() {
          (this.removePointerDownListener(), this.session && this.session.end());
        }
      }
      let nF = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 };
      function nV(e, t) {
        return t.max === t.min ? 0 : (e / (t.max - t.min)) * 100;
      }
      let nR = {
        correct: (e, t) => {
          if (!t.target) return e;
          if ('string' == typeof e) {
            if (!eL.test(e)) return e;
            e = parseFloat(e);
          }
          let r = nV(e, t.target.x),
            i = nV(e, t.target.y);
          return `${r}% ${i}%`;
        }
      };
      class nB extends y.Component {
        componentDidMount() {
          let { visualElement: e, layoutGroup: t, switchLayoutGroup: r, layoutId: i } = this.props,
            { projection: n } = e;
          (Object.assign(ew, nL),
            n &&
              (t.group && t.group.add(n),
              r && r.register && i && r.register(n),
              n.root.didUpdate(),
              n.addEventListener('animationComplete', () => {
                this.safeToRemove();
              }),
              n.setOptions({ ...n.options, onExitComplete: () => this.safeToRemove() })),
            (nF.hasEverUpdated = !0));
        }
        getSnapshotBeforeUpdate(e) {
          let { layoutDependency: t, visualElement: r, drag: i, isPresent: n } = this.props,
            o = r.projection;
          return (
            o &&
              ((o.isPresent = n),
              i || e.layoutDependency !== t || void 0 === t ? o.willUpdate() : this.safeToRemove(),
              e.isPresent === n ||
                (n
                  ? o.promote()
                  : o.relegate() ||
                    ty.postRender(() => {
                      let e = o.getStack();
                      (e && e.members.length) || this.safeToRemove();
                    }))),
            null
          );
        }
        componentDidUpdate() {
          let { projection: e } = this.props.visualElement;
          e &&
            (e.root.didUpdate(),
            er.postRender(() => {
              !e.currentAnimation && e.isLead() && this.safeToRemove();
            }));
        }
        componentWillUnmount() {
          let { visualElement: e, layoutGroup: t, switchLayoutGroup: r } = this.props,
            { projection: i } = e;
          i &&
            (i.scheduleCheckAfterUnmount(),
            t && t.group && t.group.remove(i),
            r && r.deregister && r.deregister(i));
        }
        safeToRemove() {
          let { safeToRemove: e } = this.props;
          e && e();
        }
        render() {
          return null;
        }
      }
      function n$(e) {
        let [t, r] = (function () {
            let e = (0, y.useContext)(U);
            if (null === e) return [!0, null];
            let { isPresent: t, onExitComplete: r, register: i } = e,
              n = (0, y.useId)();
            (0, y.useEffect)(() => i(n), []);
            let o = (0, y.useCallback)(() => r && r(n), [n, r]);
            return !t && r ? [!1, o] : [!0];
          })(),
          i = (0, y.useContext)(ev);
        return (0, a.jsx)(nB, {
          ...e,
          layoutGroup: i,
          switchLayoutGroup: (0, y.useContext)(eo),
          isPresent: t,
          safeToRemove: r
        });
      }
      let nL = {
          borderRadius: {
            ...nR,
            applyTo: [
              'borderTopLeftRadius',
              'borderTopRightRadius',
              'borderBottomLeftRadius',
              'borderBottomRightRadius'
            ]
          },
          borderTopLeftRadius: nR,
          borderTopRightRadius: nR,
          borderBottomLeftRadius: nR,
          borderBottomRightRadius: nR,
          boxShadow: {
            correct: (e, { treeScale: t, projectionDelta: r }) => {
              let i = rV.parse(e);
              if (i.length > 5) return e;
              let n = rV.createTransformer(e),
                o = 'number' != typeof i[0] ? 1 : 0,
                s = r.x.scale * t.x,
                a = r.y.scale * t.y;
              ((i[0 + o] /= s), (i[1 + o] /= a));
              let l = iu(s, a, 0.5);
              return (
                'number' == typeof i[2 + o] && (i[2 + o] /= l),
                'number' == typeof i[3 + o] && (i[3 + o] /= l),
                n(i)
              );
            }
          }
        },
        nI = ['TopLeft', 'TopRight', 'BottomLeft', 'BottomRight'],
        nO = nI.length,
        nW = (e) => ('string' == typeof e ? parseFloat(e) : e),
        nN = (e) => 'number' == typeof e || eL.test(e);
      function nH(e, t) {
        return void 0 !== e[t] ? e[t] : e.borderRadius;
      }
      let nU = nJ(0, 0.5, ie),
        nq = nJ(0.5, 0.95, tb);
      function nJ(e, t, r) {
        return (i) => (i < e ? 0 : i > t ? 1 : r(il(e, t, i)));
      }
      function nY(e, t) {
        ((e.min = t.min), (e.max = t.max));
      }
      function nK(e, t) {
        (nY(e.x, t.x), nY(e.y, t.y));
      }
      function nX(e, t) {
        ((e.translate = t.translate),
          (e.scale = t.scale),
          (e.originPoint = t.originPoint),
          (e.origin = t.origin));
      }
      function nG(e, t, r, i, n) {
        return (
          (e -= t),
          (e = i + (1 / r) * (e - i)),
          void 0 !== n && (e = i + (1 / n) * (e - i)),
          e
        );
      }
      function nZ(e, t, [r, i, n], o, s) {
        !(function (e, t = 0, r = 1, i = 0.5, n, o = e, s = e) {
          if (
            (e$.test(t) && ((t = parseFloat(t)), (t = iu(s.min, s.max, t / 100) - s.min)),
            'number' != typeof t)
          )
            return;
          let a = iu(o.min, o.max, i);
          (e === o && (a -= t), (e.min = nG(e.min, t, r, a, n)), (e.max = nG(e.max, t, r, a, n)));
        })(e, t[r], t[i], t[n], t.scale, o, s);
      }
      let nQ = ['x', 'scaleX', 'originX'],
        n0 = ['y', 'scaleY', 'originY'];
      function n1(e, t, r, i) {
        (nZ(e.x, t, nQ, r ? r.x : void 0, i ? i.x : void 0),
          nZ(e.y, t, n0, r ? r.y : void 0, i ? i.y : void 0));
      }
      function n5(e) {
        return 0 === e.translate && 1 === e.scale;
      }
      function n2(e) {
        return n5(e.x) && n5(e.y);
      }
      function n3(e, t) {
        return e.min === t.min && e.max === t.max;
      }
      function n4(e, t) {
        return Math.round(e.min) === Math.round(t.min) && Math.round(e.max) === Math.round(t.max);
      }
      function n6(e, t) {
        return n4(e.x, t.x) && n4(e.y, t.y);
      }
      function n9(e) {
        return ne(e.x) / ne(e.y);
      }
      function n8(e, t) {
        return (
          e.translate === t.translate && e.scale === t.scale && e.originPoint === t.originPoint
        );
      }
      class n7 {
        constructor() {
          this.members = [];
        }
        add(e) {
          (tm(this.members, e), e.scheduleRender());
        }
        remove(e) {
          if (
            (tf(this.members, e), e === this.prevLead && (this.prevLead = void 0), e === this.lead)
          ) {
            let e = this.members[this.members.length - 1];
            e && this.promote(e);
          }
        }
        relegate(e) {
          let t;
          let r = this.members.findIndex((t) => e === t);
          if (0 === r) return !1;
          for (let e = r; e >= 0; e--) {
            let r = this.members[e];
            if (!1 !== r.isPresent) {
              t = r;
              break;
            }
          }
          return !!t && (this.promote(t), !0);
        }
        promote(e, t) {
          let r = this.lead;
          if (e !== r && ((this.prevLead = r), (this.lead = e), e.show(), r)) {
            (r.instance && r.scheduleRender(),
              e.scheduleRender(),
              (e.resumeFrom = r),
              t && (e.resumeFrom.preserveOpacity = !0),
              r.snapshot &&
                ((e.snapshot = r.snapshot),
                (e.snapshot.latestValues = r.animationValues || r.latestValues)),
              e.root && e.root.isUpdating && (e.isLayoutDirty = !0));
            let { crossfade: i } = e.options;
            !1 === i && r.hide();
          }
        }
        exitAnimationComplete() {
          this.members.forEach((e) => {
            let { options: t, resumingFrom: r } = e;
            (t.onExitComplete && t.onExitComplete(),
              r && r.options.onExitComplete && r.options.onExitComplete());
          });
        }
        scheduleRender() {
          this.members.forEach((e) => {
            e.instance && e.scheduleRender(!1);
          });
        }
        removeLeadSnapshot() {
          this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
        }
      }
      let oe = (e, t) => e.depth - t.depth;
      class ot {
        constructor() {
          ((this.children = []), (this.isDirty = !1));
        }
        add(e) {
          (tm(this.children, e), (this.isDirty = !0));
        }
        remove(e) {
          (tf(this.children, e), (this.isDirty = !0));
        }
        forEach(e) {
          (this.isDirty && this.children.sort(oe), (this.isDirty = !1), this.children.forEach(e));
        }
      }
      let or = {
          type: 'projectionFrame',
          totalNodes: 0,
          resolvedTargetDeltas: 0,
          recalculatedProjection: 0
        },
        oi = 'undefined' != typeof window && void 0 !== window.MotionDebug,
        on = ['', 'X', 'Y', 'Z'],
        oo = { visibility: 'hidden' },
        os = 0;
      function oa(e, t, r, i) {
        let { latestValues: n } = t;
        n[e] && ((r[e] = n[e]), t.setStaticValue(e, 0), i && (i[e] = 0));
      }
      function ol({
        attachResizeListener: e,
        defaultParent: t,
        measureScroll: r,
        checkIsScrollRoot: i,
        resetTransform: n
      }) {
        return class {
          constructor(e = {}, r = null == t ? void 0 : t()) {
            ((this.id = os++),
              (this.animationId = 0),
              (this.children = new Set()),
              (this.options = {}),
              (this.isTreeAnimating = !1),
              (this.isAnimationBlocked = !1),
              (this.isLayoutDirty = !1),
              (this.isProjectionDirty = !1),
              (this.isSharedProjectionDirty = !1),
              (this.isTransformDirty = !1),
              (this.updateManuallyBlocked = !1),
              (this.updateBlockedByResize = !1),
              (this.isUpdating = !1),
              (this.isSVG = !1),
              (this.needsReset = !1),
              (this.shouldResetTransform = !1),
              (this.hasCheckedOptimisedAppear = !1),
              (this.treeScale = { x: 1, y: 1 }),
              (this.eventHandlers = new Map()),
              (this.hasTreeAnimated = !1),
              (this.updateScheduled = !1),
              (this.scheduleUpdate = () => this.update()),
              (this.projectionUpdateScheduled = !1),
              (this.checkUpdateFailed = () => {
                this.isUpdating && ((this.isUpdating = !1), this.clearAllSnapshots());
              }),
              (this.updateProjection = () => {
                ((this.projectionUpdateScheduled = !1),
                  oi && (or.totalNodes = or.resolvedTargetDeltas = or.recalculatedProjection = 0),
                  this.nodes.forEach(oh),
                  this.nodes.forEach(ob),
                  this.nodes.forEach(oy),
                  this.nodes.forEach(oc),
                  oi && window.MotionDebug.record(or));
              }),
              (this.resolvedRelativeTargetAt = 0),
              (this.hasProjected = !1),
              (this.isVisible = !0),
              (this.animationProgress = 0),
              (this.sharedNodes = new Map()),
              (this.latestValues = e),
              (this.root = r ? r.root || r : this),
              (this.path = r ? [...r.path, r] : []),
              (this.parent = r),
              (this.depth = r ? r.depth + 1 : 0));
            for (let e = 0; e < this.path.length; e++) this.path[e].shouldResetTransform = !0;
            this.root === this && (this.nodes = new ot());
          }
          addEventListener(e, t) {
            return (
              this.eventHandlers.has(e) || this.eventHandlers.set(e, new iI()),
              this.eventHandlers.get(e).add(t)
            );
          }
          notifyListeners(e, ...t) {
            let r = this.eventHandlers.get(e);
            r && r.notify(...t);
          }
          hasListeners(e) {
            return this.eventHandlers.has(e);
          }
          mount(t, r = this.root.hasTreeAnimated) {
            if (this.instance) return;
            ((this.isSVG = t instanceof SVGElement && 'svg' !== t.tagName), (this.instance = t));
            let { layoutId: i, layout: n, visualElement: o } = this.options;
            if (
              (o && !o.current && o.mount(t),
              this.root.nodes.add(this),
              this.parent && this.parent.children.add(this),
              r && (n || i) && (this.isLayoutDirty = !0),
              e)
            ) {
              let r;
              let i = () => (this.root.updateBlockedByResize = !1);
              e(t, () => {
                ((this.root.updateBlockedByResize = !0),
                  r && r(),
                  (r = (function (e, t) {
                    let r = re.now(),
                      i = ({ timestamp: t }) => {
                        let n = t - r;
                        n >= 250 && (tx(i), e(n - 250));
                      };
                    return (ty.read(i, !0), () => tx(i));
                  })(i, 0)),
                  nF.hasAnimatedSinceResize &&
                    ((nF.hasAnimatedSinceResize = !1), this.nodes.forEach(ov)));
              });
            }
            (i && this.root.registerSharedNode(i, this),
              !1 !== this.options.animate &&
                o &&
                (i || n) &&
                this.addEventListener(
                  'didUpdate',
                  ({ delta: e, hasLayoutChanged: t, hasRelativeTargetChanged: r, layout: i }) => {
                    if (this.isTreeAnimationBlocked()) {
                      ((this.target = void 0), (this.relativeTarget = void 0));
                      return;
                    }
                    let n = this.options.transition || o.getDefaultTransition() || oC,
                      { onLayoutAnimationStart: s, onLayoutAnimationComplete: a } = o.getProps(),
                      l = !this.targetLayout || !n6(this.targetLayout, i) || r,
                      u = !t && r;
                    if (
                      this.options.layoutRoot ||
                      (this.resumeFrom && this.resumeFrom.instance) ||
                      u ||
                      (t && (l || !this.currentAnimation))
                    ) {
                      (this.resumeFrom &&
                        ((this.resumingFrom = this.resumeFrom),
                        (this.resumingFrom.resumingFrom = void 0)),
                        this.setAnimationOrigin(e, u));
                      let t = { ...t4(n, 'layout'), onPlay: s, onComplete: a };
                      ((o.shouldReduceMotion || this.options.layoutRoot) &&
                        ((t.delay = 0), (t.type = !1)),
                        this.startAnimation(t));
                    } else
                      (t || ov(this),
                        this.isLead() &&
                          this.options.onExitComplete &&
                          this.options.onExitComplete());
                    this.targetLayout = i;
                  }
                ));
          }
          unmount() {
            (this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this));
            let e = this.getStack();
            (e && e.remove(this),
              this.parent && this.parent.children.delete(this),
              (this.instance = void 0),
              tx(this.updateProjection));
          }
          blockUpdate() {
            this.updateManuallyBlocked = !0;
          }
          unblockUpdate() {
            this.updateManuallyBlocked = !1;
          }
          isUpdateBlocked() {
            return this.updateManuallyBlocked || this.updateBlockedByResize;
          }
          isTreeAnimationBlocked() {
            return (
              this.isAnimationBlocked || (this.parent && this.parent.isTreeAnimationBlocked()) || !1
            );
          }
          startUpdate() {
            !this.isUpdateBlocked() &&
              ((this.isUpdating = !0), this.nodes && this.nodes.forEach(ox), this.animationId++);
          }
          getTransformTemplate() {
            let { visualElement: e } = this.options;
            return e && e.getProps().transformTemplate;
          }
          willUpdate(e = !0) {
            if (((this.root.hasTreeAnimated = !0), this.root.isUpdateBlocked())) {
              this.options.onExitComplete && this.options.onExitComplete();
              return;
            }
            if (
              (window.HandoffCancelAllAnimations &&
                (function e(t) {
                  if (((t.hasCheckedOptimisedAppear = !0), t.root === t)) return !1;
                  let { visualElement: r } = t.options;
                  return (
                    !!r &&
                    (!!iU(r) || (!!t.parent && !t.parent.hasCheckedOptimisedAppear && e(t.parent)))
                  );
                })(this) &&
                window.HandoffCancelAllAnimations(),
              this.root.isUpdating || this.root.startUpdate(),
              this.isLayoutDirty)
            )
              return;
            this.isLayoutDirty = !0;
            for (let e = 0; e < this.path.length; e++) {
              let t = this.path[e];
              ((t.shouldResetTransform = !0),
                t.updateScroll('snapshot'),
                t.options.layoutRoot && t.willUpdate(!1));
            }
            let { layoutId: t, layout: r } = this.options;
            if (void 0 === t && !r) return;
            let i = this.getTransformTemplate();
            ((this.prevTransformTemplateValue = i ? i(this.latestValues, '') : void 0),
              this.updateSnapshot(),
              e && this.notifyListeners('willUpdate'));
          }
          update() {
            if (((this.updateScheduled = !1), this.isUpdateBlocked())) {
              (this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(om));
              return;
            }
            (this.isUpdating || this.nodes.forEach(of),
              (this.isUpdating = !1),
              this.nodes.forEach(og),
              this.nodes.forEach(ou),
              this.nodes.forEach(od),
              this.clearAllSnapshots());
            let e = re.now();
            ((tw.delta = eE(0, 1e3 / 60, e - tw.timestamp)),
              (tw.timestamp = e),
              (tw.isProcessing = !0),
              tS.update.process(tw),
              tS.preRender.process(tw),
              tS.render.process(tw),
              (tw.isProcessing = !1));
          }
          didUpdate() {
            this.updateScheduled || ((this.updateScheduled = !0), er.read(this.scheduleUpdate));
          }
          clearAllSnapshots() {
            (this.nodes.forEach(op), this.sharedNodes.forEach(ow));
          }
          scheduleUpdateProjection() {
            this.projectionUpdateScheduled ||
              ((this.projectionUpdateScheduled = !0), ty.preRender(this.updateProjection, !1, !0));
          }
          scheduleCheckAfterUnmount() {
            ty.postRender(() => {
              this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed();
            });
          }
          updateSnapshot() {
            !this.snapshot && this.instance && (this.snapshot = this.measure());
          }
          updateLayout() {
            if (
              !this.instance ||
              (this.updateScroll(),
              !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty)
            )
              return;
            if (this.resumeFrom && !this.resumeFrom.instance)
              for (let e = 0; e < this.path.length; e++) this.path[e].updateScroll();
            let e = this.layout;
            ((this.layout = this.measure(!1)),
              (this.layoutCorrected = np()),
              (this.isLayoutDirty = !1),
              (this.projectionDelta = void 0),
              this.notifyListeners('measure', this.layout.layoutBox));
            let { visualElement: t } = this.options;
            t && t.notify('LayoutMeasure', this.layout.layoutBox, e ? e.layoutBox : void 0);
          }
          updateScroll(e = 'measure') {
            let t = !!(this.options.layoutScroll && this.instance);
            if (
              (this.scroll &&
                this.scroll.animationId === this.root.animationId &&
                this.scroll.phase === e &&
                (t = !1),
              t)
            ) {
              let t = i(this.instance);
              this.scroll = {
                animationId: this.root.animationId,
                phase: e,
                isRoot: t,
                offset: r(this.instance),
                wasRoot: this.scroll ? this.scroll.isRoot : t
              };
            }
          }
          resetTransform() {
            if (!n) return;
            let e =
                this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout,
              t = this.projectionDelta && !n2(this.projectionDelta),
              r = this.getTransformTemplate(),
              i = r ? r(this.latestValues, '') : void 0,
              o = i !== this.prevTransformTemplateValue;
            e &&
              (t || nb(this.latestValues) || o) &&
              (n(this.instance, i), (this.shouldResetTransform = !1), this.scheduleRender());
          }
          measure(e = !0) {
            var t;
            let r = this.measurePageBox(),
              i = this.removeElementScroll(r);
            return (
              e && (i = this.removeTransform(i)),
              oT((t = i).x),
              oT(t.y),
              {
                animationId: this.root.animationId,
                measuredBox: r,
                layoutBox: i,
                latestValues: {},
                source: this.id
              }
            );
          }
          measurePageBox() {
            var e;
            let { visualElement: t } = this.options;
            if (!t) return np();
            let r = t.measureViewportBox();
            if (
              !(
                (null === (e = this.scroll) || void 0 === e ? void 0 : e.wasRoot) ||
                this.path.some(oz)
              )
            ) {
              let { scroll: e } = this.root;
              e && (nk(r.x, e.offset.x), nk(r.y, e.offset.y));
            }
            return r;
          }
          removeElementScroll(e) {
            var t;
            let r = np();
            if ((nK(r, e), null === (t = this.scroll) || void 0 === t ? void 0 : t.wasRoot))
              return r;
            for (let t = 0; t < this.path.length; t++) {
              let i = this.path[t],
                { scroll: n, options: o } = i;
              i !== this.root &&
                n &&
                o.layoutScroll &&
                (n.wasRoot && nK(r, e), nk(r.x, n.offset.x), nk(r.y, n.offset.y));
            }
            return r;
          }
          applyTransform(e, t = !1) {
            let r = np();
            nK(r, e);
            for (let e = 0; e < this.path.length; e++) {
              let i = this.path[e];
              (!t &&
                i.options.layoutScroll &&
                i.scroll &&
                i !== i.root &&
                nC(r, { x: -i.scroll.offset.x, y: -i.scroll.offset.y }),
                nb(i.latestValues) && nC(r, i.latestValues));
            }
            return (nb(this.latestValues) && nC(r, this.latestValues), r);
          }
          removeTransform(e) {
            let t = np();
            nK(t, e);
            for (let e = 0; e < this.path.length; e++) {
              let r = this.path[e];
              if (!r.instance || !nb(r.latestValues)) continue;
              nv(r.latestValues) && r.updateSnapshot();
              let i = np();
              (nK(i, r.measurePageBox()),
                n1(t, r.latestValues, r.snapshot ? r.snapshot.layoutBox : void 0, i));
            }
            return (nb(this.latestValues) && n1(t, this.latestValues), t);
          }
          setTargetDelta(e) {
            ((this.targetDelta = e),
              this.root.scheduleUpdateProjection(),
              (this.isProjectionDirty = !0));
          }
          setOptions(e) {
            this.options = {
              ...this.options,
              ...e,
              crossfade: void 0 === e.crossfade || e.crossfade
            };
          }
          clearMeasurements() {
            ((this.scroll = void 0),
              (this.layout = void 0),
              (this.snapshot = void 0),
              (this.prevTransformTemplateValue = void 0),
              (this.targetDelta = void 0),
              (this.target = void 0),
              (this.isLayoutDirty = !1));
          }
          forceRelativeParentToResolveTarget() {
            this.relativeParent &&
              this.relativeParent.resolvedRelativeTargetAt !== tw.timestamp &&
              this.relativeParent.resolveTargetDelta(!0);
          }
          resolveTargetDelta(e = !1) {
            var t, r, i, n;
            let o = this.getLead();
            (this.isProjectionDirty || (this.isProjectionDirty = o.isProjectionDirty),
              this.isTransformDirty || (this.isTransformDirty = o.isTransformDirty),
              this.isSharedProjectionDirty ||
                (this.isSharedProjectionDirty = o.isSharedProjectionDirty));
            let s = !!this.resumingFrom || this !== o;
            if (
              !(
                e ||
                (s && this.isSharedProjectionDirty) ||
                this.isProjectionDirty ||
                (null === (t = this.parent) || void 0 === t ? void 0 : t.isProjectionDirty) ||
                this.attemptToResolveRelativeTarget ||
                this.root.updateBlockedByResize
              )
            )
              return;
            let { layout: a, layoutId: l } = this.options;
            if (this.layout && (a || l)) {
              if (
                ((this.resolvedRelativeTargetAt = tw.timestamp),
                !this.targetDelta && !this.relativeTarget)
              ) {
                let e = this.getClosestProjectingParent();
                e && e.layout && 1 !== this.animationProgress
                  ? ((this.relativeParent = e),
                    this.forceRelativeParentToResolveTarget(),
                    (this.relativeTarget = np()),
                    (this.relativeTargetOrigin = np()),
                    no(this.relativeTargetOrigin, this.layout.layoutBox, e.layout.layoutBox),
                    nK(this.relativeTarget, this.relativeTargetOrigin))
                  : (this.relativeParent = this.relativeTarget = void 0);
              }
              if (this.relativeTarget || this.targetDelta) {
                if (
                  ((this.target || ((this.target = np()), (this.targetWithTransforms = np())),
                  this.relativeTarget &&
                    this.relativeTargetOrigin &&
                    this.relativeParent &&
                    this.relativeParent.target)
                    ? (this.forceRelativeParentToResolveTarget(),
                      (r = this.target),
                      (i = this.relativeTarget),
                      (n = this.relativeParent.target),
                      ni(r.x, i.x, n.x),
                      ni(r.y, i.y, n.y))
                    : this.targetDelta
                      ? (this.resumingFrom
                          ? (this.target = this.applyTransform(this.layout.layoutBox))
                          : nK(this.target, this.layout.layoutBox),
                        nS(this.target, this.targetDelta))
                      : nK(this.target, this.layout.layoutBox),
                  this.attemptToResolveRelativeTarget)
                ) {
                  this.attemptToResolveRelativeTarget = !1;
                  let e = this.getClosestProjectingParent();
                  e &&
                  !!e.resumingFrom == !!this.resumingFrom &&
                  !e.options.layoutScroll &&
                  e.target &&
                  1 !== this.animationProgress
                    ? ((this.relativeParent = e),
                      this.forceRelativeParentToResolveTarget(),
                      (this.relativeTarget = np()),
                      (this.relativeTargetOrigin = np()),
                      no(this.relativeTargetOrigin, this.target, e.target),
                      nK(this.relativeTarget, this.relativeTargetOrigin))
                    : (this.relativeParent = this.relativeTarget = void 0);
                }
                oi && or.resolvedTargetDeltas++;
              }
            }
          }
          getClosestProjectingParent() {
            return !this.parent || nv(this.parent.latestValues) || ny(this.parent.latestValues)
              ? void 0
              : this.parent.isProjecting()
                ? this.parent
                : this.parent.getClosestProjectingParent();
          }
          isProjecting() {
            return !!(
              (this.relativeTarget || this.targetDelta || this.options.layoutRoot) &&
              this.layout
            );
          }
          calcProjection() {
            var e;
            let t = this.getLead(),
              r = !!this.resumingFrom || this !== t,
              i = !0;
            if (
              ((this.isProjectionDirty ||
                (null === (e = this.parent) || void 0 === e ? void 0 : e.isProjectionDirty)) &&
                (i = !1),
              r && (this.isSharedProjectionDirty || this.isTransformDirty) && (i = !1),
              this.resolvedRelativeTargetAt === tw.timestamp && (i = !1),
              i)
            )
              return;
            let { layout: n, layoutId: o } = this.options;
            if (
              ((this.isTreeAnimating = !!(
                (this.parent && this.parent.isTreeAnimating) ||
                this.currentAnimation ||
                this.pendingAnimation
              )),
              this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0),
              !this.layout || !(n || o))
            )
              return;
            nK(this.layoutCorrected, this.layout.layoutBox);
            let s = this.treeScale.x,
              a = this.treeScale.y;
            (!(function (e, t, r, i = !1) {
              let n, o;
              let s = r.length;
              if (s) {
                t.x = t.y = 1;
                for (let a = 0; a < s; a++) {
                  o = (n = r[a]).projectionDelta;
                  let { visualElement: s } = n.options;
                  (!s || !s.props.style || 'contents' !== s.props.style.display) &&
                    (i &&
                      n.options.layoutScroll &&
                      n.scroll &&
                      n !== n.root &&
                      nC(e, { x: -n.scroll.offset.x, y: -n.scroll.offset.y }),
                    o && ((t.x *= o.x.scale), (t.y *= o.y.scale), nS(e, o)),
                    i && nb(n.latestValues) && nC(e, n.latestValues));
                }
                (t.x < 1.0000000000001 && t.x > 0.999999999999 && (t.x = 1),
                  t.y < 1.0000000000001 && t.y > 0.999999999999 && (t.y = 1));
              }
            })(this.layoutCorrected, this.treeScale, this.path, r),
              t.layout &&
                !t.target &&
                (1 !== this.treeScale.x || 1 !== this.treeScale.y) &&
                ((t.target = t.layout.layoutBox), (t.targetWithTransforms = np())));
            let { target: l } = t;
            if (!l) {
              this.prevProjectionDelta && (this.createProjectionDeltas(), this.scheduleRender());
              return;
            }
            (this.projectionDelta && this.prevProjectionDelta
              ? (nX(this.prevProjectionDelta.x, this.projectionDelta.x),
                nX(this.prevProjectionDelta.y, this.projectionDelta.y))
              : this.createProjectionDeltas(),
              nr(this.projectionDelta, this.layoutCorrected, l, this.latestValues),
              (this.treeScale.x === s &&
                this.treeScale.y === a &&
                n8(this.projectionDelta.x, this.prevProjectionDelta.x) &&
                n8(this.projectionDelta.y, this.prevProjectionDelta.y)) ||
                ((this.hasProjected = !0),
                this.scheduleRender(),
                this.notifyListeners('projectionUpdate', l)),
              oi && or.recalculatedProjection++);
          }
          hide() {
            this.isVisible = !1;
          }
          show() {
            this.isVisible = !0;
          }
          scheduleRender(e = !0) {
            var t;
            if (
              (null === (t = this.options.visualElement) || void 0 === t || t.scheduleRender(), e)
            ) {
              let e = this.getStack();
              e && e.scheduleRender();
            }
            this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0);
          }
          createProjectionDeltas() {
            ((this.prevProjectionDelta = nh()),
              (this.projectionDelta = nh()),
              (this.projectionDeltaWithTransform = nh()));
          }
          setAnimationOrigin(e, t = !1) {
            let r;
            let i = this.snapshot,
              n = i ? i.latestValues : {},
              o = { ...this.latestValues },
              s = nh();
            ((this.relativeParent && this.relativeParent.options.layoutRoot) ||
              (this.relativeTarget = this.relativeTargetOrigin = void 0),
              (this.attemptToResolveRelativeTarget = !t));
            let a = np(),
              l = (i ? i.source : void 0) !== (this.layout ? this.layout.source : void 0),
              u = this.getStack(),
              d = !u || u.members.length <= 1,
              h = !!(l && !d && !0 === this.options.crossfade && !this.path.some(oP));
            ((this.animationProgress = 0),
              (this.mixTargetDelta = (t) => {
                let i = t / 1e3;
                if (
                  (oS(s.x, e.x, i),
                  oS(s.y, e.y, i),
                  this.setTargetDelta(s),
                  this.relativeTarget &&
                    this.relativeTargetOrigin &&
                    this.layout &&
                    this.relativeParent &&
                    this.relativeParent.layout)
                ) {
                  var u, c, p, m;
                  (no(a, this.layout.layoutBox, this.relativeParent.layout.layoutBox),
                    (p = this.relativeTarget),
                    (m = this.relativeTargetOrigin),
                    ok(p.x, m.x, a.x, i),
                    ok(p.y, m.y, a.y, i),
                    r &&
                      ((u = this.relativeTarget), (c = r), n3(u.x, c.x) && n3(u.y, c.y)) &&
                      (this.isProjectionDirty = !1),
                    r || (r = np()),
                    nK(r, this.relativeTarget));
                }
                (l &&
                  ((this.animationValues = o),
                  (function (e, t, r, i, n, o) {
                    n
                      ? ((e.opacity = iu(0, void 0 !== r.opacity ? r.opacity : 1, nU(i))),
                        (e.opacityExit = iu(void 0 !== t.opacity ? t.opacity : 1, 0, nq(i))))
                      : o &&
                        (e.opacity = iu(
                          void 0 !== t.opacity ? t.opacity : 1,
                          void 0 !== r.opacity ? r.opacity : 1,
                          i
                        ));
                    for (let n = 0; n < nO; n++) {
                      let o = `border${nI[n]}Radius`,
                        s = nH(t, o),
                        a = nH(r, o);
                      (void 0 !== s || void 0 !== a) &&
                        (s || (s = 0),
                        a || (a = 0),
                        0 === s || 0 === a || nN(s) === nN(a)
                          ? ((e[o] = Math.max(iu(nW(s), nW(a), i), 0)),
                            (e$.test(a) || e$.test(s)) && (e[o] += '%'))
                          : (e[o] = a));
                    }
                    (t.rotate || r.rotate) && (e.rotate = iu(t.rotate || 0, r.rotate || 0, i));
                  })(o, n, this.latestValues, i, h, d)),
                  this.root.scheduleUpdateProjection(),
                  this.scheduleRender(),
                  (this.animationProgress = i));
              }),
              this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0));
          }
          startAnimation(e) {
            (this.notifyListeners('animationStart'),
              this.currentAnimation && this.currentAnimation.stop(),
              this.resumingFrom &&
                this.resumingFrom.currentAnimation &&
                this.resumingFrom.currentAnimation.stop(),
              this.pendingAnimation &&
                (tx(this.pendingAnimation), (this.pendingAnimation = void 0)),
              (this.pendingAnimation = ty.update(() => {
                ((nF.hasAnimatedSinceResize = !0),
                  (this.currentAnimation = (function (e, t, r) {
                    let i = eC(0) ? 0 : iH(0);
                    return (i.start(iL('', i, 1e3, r)), i.animation);
                  })(0, 0, {
                    ...e,
                    onUpdate: (t) => {
                      (this.mixTargetDelta(t), e.onUpdate && e.onUpdate(t));
                    },
                    onComplete: () => {
                      (e.onComplete && e.onComplete(), this.completeAnimation());
                    }
                  })),
                  this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation),
                  (this.pendingAnimation = void 0));
              })));
          }
          completeAnimation() {
            this.resumingFrom &&
              ((this.resumingFrom.currentAnimation = void 0),
              (this.resumingFrom.preserveOpacity = void 0));
            let e = this.getStack();
            (e && e.exitAnimationComplete(),
              (this.resumingFrom = this.currentAnimation = this.animationValues = void 0),
              this.notifyListeners('animationComplete'));
          }
          finishAnimation() {
            (this.currentAnimation &&
              (this.mixTargetDelta && this.mixTargetDelta(1e3), this.currentAnimation.stop()),
              this.completeAnimation());
          }
          applyTransformsToTarget() {
            let e = this.getLead(),
              { targetWithTransforms: t, target: r, layout: i, latestValues: n } = e;
            if (t && r && i) {
              if (
                this !== e &&
                this.layout &&
                i &&
                o_(this.options.animationType, this.layout.layoutBox, i.layoutBox)
              ) {
                r = this.target || np();
                let t = ne(this.layout.layoutBox.x);
                ((r.x.min = e.target.x.min), (r.x.max = r.x.min + t));
                let i = ne(this.layout.layoutBox.y);
                ((r.y.min = e.target.y.min), (r.y.max = r.y.min + i));
              }
              (nK(t, r),
                nC(t, n),
                nr(this.projectionDeltaWithTransform, this.layoutCorrected, t, n));
            }
          }
          registerSharedNode(e, t) {
            (this.sharedNodes.has(e) || this.sharedNodes.set(e, new n7()),
              this.sharedNodes.get(e).add(t));
            let r = t.options.initialPromotionConfig;
            t.promote({
              transition: r ? r.transition : void 0,
              preserveFollowOpacity:
                r && r.shouldPreserveFollowOpacity ? r.shouldPreserveFollowOpacity(t) : void 0
            });
          }
          isLead() {
            let e = this.getStack();
            return !e || e.lead === this;
          }
          getLead() {
            var e;
            let { layoutId: t } = this.options;
            return (
              (t && (null === (e = this.getStack()) || void 0 === e ? void 0 : e.lead)) || this
            );
          }
          getPrevLead() {
            var e;
            let { layoutId: t } = this.options;
            return t
              ? null === (e = this.getStack()) || void 0 === e
                ? void 0
                : e.prevLead
              : void 0;
          }
          getStack() {
            let { layoutId: e } = this.options;
            if (e) return this.root.sharedNodes.get(e);
          }
          promote({ needsReset: e, transition: t, preserveFollowOpacity: r } = {}) {
            let i = this.getStack();
            (i && i.promote(this, r),
              e && ((this.projectionDelta = void 0), (this.needsReset = !0)),
              t && this.setOptions({ transition: t }));
          }
          relegate() {
            let e = this.getStack();
            return !!e && e.relegate(this);
          }
          resetSkewAndRotation() {
            let { visualElement: e } = this.options;
            if (!e) return;
            let t = !1,
              { latestValues: r } = e;
            if (
              ((r.z || r.rotate || r.rotateX || r.rotateY || r.rotateZ || r.skewX || r.skewY) &&
                (t = !0),
              !t)
            )
              return;
            let i = {};
            r.z && oa('z', e, i, this.animationValues);
            for (let t = 0; t < on.length; t++)
              (oa(`rotate${on[t]}`, e, i, this.animationValues),
                oa(`skew${on[t]}`, e, i, this.animationValues));
            for (let t in (e.render(), i))
              (e.setStaticValue(t, i[t]), this.animationValues && (this.animationValues[t] = i[t]));
            e.scheduleRender();
          }
          getProjectionStyles(e) {
            var t, r;
            if (!this.instance || this.isSVG) return;
            if (!this.isVisible) return oo;
            let i = { visibility: '' },
              n = this.getTransformTemplate();
            if (this.needsReset)
              return (
                (this.needsReset = !1),
                (i.opacity = ''),
                (i.pointerEvents = th(null == e ? void 0 : e.pointerEvents) || ''),
                (i.transform = n ? n(this.latestValues, '') : 'none'),
                i
              );
            let o = this.getLead();
            if (!this.projectionDelta || !this.layout || !o.target) {
              let t = {};
              return (
                this.options.layoutId &&
                  ((t.opacity =
                    void 0 !== this.latestValues.opacity ? this.latestValues.opacity : 1),
                  (t.pointerEvents = th(null == e ? void 0 : e.pointerEvents) || '')),
                this.hasProjected &&
                  !nb(this.latestValues) &&
                  ((t.transform = n ? n({}, '') : 'none'), (this.hasProjected = !1)),
                t
              );
            }
            let s = o.animationValues || o.latestValues;
            (this.applyTransformsToTarget(),
              (i.transform = (function (e, t, r) {
                let i = '',
                  n = e.x.translate / t.x,
                  o = e.y.translate / t.y,
                  s = (null == r ? void 0 : r.z) || 0;
                if (
                  ((n || o || s) && (i = `translate3d(${n}px, ${o}px, ${s}px) `),
                  (1 !== t.x || 1 !== t.y) && (i += `scale(${1 / t.x}, ${1 / t.y}) `),
                  r)
                ) {
                  let {
                    transformPerspective: e,
                    rotate: t,
                    rotateX: n,
                    rotateY: o,
                    skewX: s,
                    skewY: a
                  } = r;
                  (e && (i = `perspective(${e}px) ${i}`),
                    t && (i += `rotate(${t}deg) `),
                    n && (i += `rotateX(${n}deg) `),
                    o && (i += `rotateY(${o}deg) `),
                    s && (i += `skewX(${s}deg) `),
                    a && (i += `skewY(${a}deg) `));
                }
                let a = e.x.scale * t.x,
                  l = e.y.scale * t.y;
                return ((1 !== a || 1 !== l) && (i += `scale(${a}, ${l})`), i || 'none');
              })(this.projectionDeltaWithTransform, this.treeScale, s)),
              n && (i.transform = n(s, i.transform)));
            let { x: a, y: l } = this.projectionDelta;
            for (let e in ((i.transformOrigin = `${100 * a.origin}% ${100 * l.origin}% 0`),
            o.animationValues
              ? (i.opacity =
                  o === this
                    ? null !==
                        (r =
                          null !== (t = s.opacity) && void 0 !== t
                            ? t
                            : this.latestValues.opacity) && void 0 !== r
                      ? r
                      : 1
                    : this.preserveOpacity
                      ? this.latestValues.opacity
                      : s.opacityExit)
              : (i.opacity =
                  o === this
                    ? void 0 !== s.opacity
                      ? s.opacity
                      : ''
                    : void 0 !== s.opacityExit
                      ? s.opacityExit
                      : 0),
            ew)) {
              if (void 0 === s[e]) continue;
              let { correct: t, applyTo: r } = ew[e],
                n = 'none' === i.transform ? s[e] : t(s[e], o);
              if (r) {
                let e = r.length;
                for (let t = 0; t < e; t++) i[r[t]] = n;
              } else i[e] = n;
            }
            return (
              this.options.layoutId &&
                (i.pointerEvents =
                  o === this ? th(null == e ? void 0 : e.pointerEvents) || '' : 'none'),
              i
            );
          }
          clearSnapshot() {
            this.resumeFrom = this.snapshot = void 0;
          }
          resetTree() {
            (this.root.nodes.forEach((e) => {
              var t;
              return null === (t = e.currentAnimation) || void 0 === t ? void 0 : t.stop();
            }),
              this.root.nodes.forEach(om),
              this.root.sharedNodes.clear());
          }
        };
      }
      function ou(e) {
        e.updateLayout();
      }
      function od(e) {
        var t;
        let r = (null === (t = e.resumeFrom) || void 0 === t ? void 0 : t.snapshot) || e.snapshot;
        if (e.isLead() && e.layout && r && e.hasListeners('didUpdate')) {
          let { layoutBox: t, measuredBox: i } = e.layout,
            { animationType: n } = e.options,
            o = r.source !== e.layout.source;
          'size' === n
            ? nm((e) => {
                let i = o ? r.measuredBox[e] : r.layoutBox[e],
                  n = ne(i);
                ((i.min = t[e].min), (i.max = i.min + n));
              })
            : o_(n, r.layoutBox, t) &&
              nm((i) => {
                let n = o ? r.measuredBox[i] : r.layoutBox[i],
                  s = ne(t[i]);
                ((n.max = n.min + s),
                  e.relativeTarget &&
                    !e.currentAnimation &&
                    ((e.isProjectionDirty = !0),
                    (e.relativeTarget[i].max = e.relativeTarget[i].min + s)));
              });
          let s = nh();
          nr(s, t, r.layoutBox);
          let a = nh();
          o ? nr(a, e.applyTransform(i, !0), r.measuredBox) : nr(a, t, r.layoutBox);
          let l = !n2(s),
            u = !1;
          if (!e.resumeFrom) {
            let i = e.getClosestProjectingParent();
            if (i && !i.resumeFrom) {
              let { snapshot: n, layout: o } = i;
              if (n && o) {
                let s = np();
                no(s, r.layoutBox, n.layoutBox);
                let a = np();
                (no(a, t, o.layoutBox),
                  n6(s, a) || (u = !0),
                  i.options.layoutRoot &&
                    ((e.relativeTarget = a), (e.relativeTargetOrigin = s), (e.relativeParent = i)));
              }
            }
          }
          e.notifyListeners('didUpdate', {
            layout: t,
            snapshot: r,
            delta: a,
            layoutDelta: s,
            hasLayoutChanged: l,
            hasRelativeTargetChanged: u
          });
        } else if (e.isLead()) {
          let { onExitComplete: t } = e.options;
          t && t();
        }
        e.options.transition = void 0;
      }
      function oh(e) {
        (oi && or.totalNodes++,
          e.parent &&
            (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty),
            e.isSharedProjectionDirty ||
              (e.isSharedProjectionDirty = !!(
                e.isProjectionDirty ||
                e.parent.isProjectionDirty ||
                e.parent.isSharedProjectionDirty
              )),
            e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty)));
      }
      function oc(e) {
        e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1;
      }
      function op(e) {
        e.clearSnapshot();
      }
      function om(e) {
        e.clearMeasurements();
      }
      function of(e) {
        e.isLayoutDirty = !1;
      }
      function og(e) {
        let { visualElement: t } = e.options;
        (t && t.getProps().onBeforeLayoutMeasure && t.notify('BeforeLayoutMeasure'),
          e.resetTransform());
      }
      function ov(e) {
        (e.finishAnimation(),
          (e.targetDelta = e.relativeTarget = e.target = void 0),
          (e.isProjectionDirty = !0));
      }
      function ob(e) {
        e.resolveTargetDelta();
      }
      function oy(e) {
        e.calcProjection();
      }
      function ox(e) {
        e.resetSkewAndRotation();
      }
      function ow(e) {
        e.removeLeadSnapshot();
      }
      function oS(e, t, r) {
        ((e.translate = iu(t.translate, 0, r)),
          (e.scale = iu(t.scale, 1, r)),
          (e.origin = t.origin),
          (e.originPoint = t.originPoint));
      }
      function ok(e, t, r, i) {
        ((e.min = iu(t.min, r.min, i)), (e.max = iu(t.max, r.max, i)));
      }
      function oP(e) {
        return e.animationValues && void 0 !== e.animationValues.opacityExit;
      }
      let oC = { duration: 0.45, ease: [0.4, 0, 0.1, 1] },
        oA = (e) =>
          'undefined' != typeof navigator &&
          navigator.userAgent &&
          navigator.userAgent.toLowerCase().includes(e),
        oE = oA('applewebkit/') && !oA('chrome/') ? Math.round : tb;
      function oT(e) {
        ((e.min = oE(e.min)), (e.max = oE(e.max)));
      }
      function o_(e, t, r) {
        return 'position' === e || ('preserve-aspect' === e && !(0.2 >= Math.abs(n9(t) - n9(r))));
      }
      function oz(e) {
        var t;
        return e !== e.root && (null === (t = e.scroll) || void 0 === t ? void 0 : t.wasRoot);
      }
      let oj = ol({
          attachResizeListener: (e, t) => tC(e, 'resize', t),
          measureScroll: () => ({
            x: document.documentElement.scrollLeft || document.body.scrollLeft,
            y: document.documentElement.scrollTop || document.body.scrollTop
          }),
          checkIsScrollRoot: () => !0
        }),
        oM = { current: void 0 },
        oD = ol({
          measureScroll: (e) => ({ x: e.scrollLeft, y: e.scrollTop }),
          defaultParent: () => {
            if (!oM.current) {
              let e = new oj({});
              (e.mount(window), e.setOptions({ layoutScroll: !0 }), (oM.current = e));
            }
            return oM.current;
          },
          resetTransform: (e, t) => {
            e.style.transform = void 0 !== t ? t : 'none';
          },
          checkIsScrollRoot: (e) => 'fixed' === window.getComputedStyle(e).position
        }),
        oF = { current: null },
        oV = { current: !1 },
        oR = new WeakMap(),
        oB = [...rc, rE, rV],
        o$ = (e) => oB.find(rh(e)),
        oL = [
          'AnimationStart',
          'AnimationComplete',
          'Update',
          'BeforeLayoutMeasure',
          'LayoutMeasure',
          'LayoutAnimationStart',
          'LayoutAnimationComplete'
        ],
        oI = eh.length;
      class oO {
        scrapeMotionValuesFromProps(e, t, r) {
          return {};
        }
        constructor(
          {
            parent: e,
            props: t,
            presenceContext: r,
            reducedMotionConfig: i,
            blockInitialAnimation: n,
            visualState: o
          },
          s = {}
        ) {
          ((this.applyWillChange = !1),
            (this.resolveKeyframes = (e, t, r, i) => new this.KeyframeResolver(e, t, r, i, this)),
            (this.current = null),
            (this.children = new Set()),
            (this.isVariantNode = !1),
            (this.isControllingVariants = !1),
            (this.shouldReduceMotion = null),
            (this.values = new Map()),
            (this.KeyframeResolver = ry),
            (this.features = {}),
            (this.valueSubscriptions = new Map()),
            (this.prevMotionValues = {}),
            (this.events = {}),
            (this.propEventSubscriptions = {}),
            (this.notifyUpdate = () => this.notify('Update', this.latestValues)),
            (this.render = () => {
              ((this.isRenderScheduled = !1),
                this.current &&
                  (this.triggerBuild(),
                  this.renderInstance(
                    this.current,
                    this.renderState,
                    this.props.style,
                    this.projection
                  )));
            }),
            (this.isRenderScheduled = !1),
            (this.scheduleRender = () => {
              this.isRenderScheduled ||
                ((this.isRenderScheduled = !0), ty.render(this.render, !1, !0));
            }));
          let { latestValues: a, renderState: l } = o;
          ((this.latestValues = a),
            (this.baseTarget = { ...a }),
            (this.initialValues = t.initial ? { ...a } : {}),
            (this.renderState = l),
            (this.parent = e),
            (this.props = t),
            (this.presenceContext = r),
            (this.depth = e ? e.depth + 1 : 0),
            (this.reducedMotionConfig = i),
            (this.options = s),
            (this.blockInitialAnimation = !!n),
            (this.isControllingVariants = ec(t)),
            (this.isVariantNode = ep(t)),
            this.isVariantNode && (this.variantChildren = new Set()),
            (this.manuallyAnimateOnMount = !!(e && e.current)));
          let { willChange: u, ...d } = this.scrapeMotionValuesFromProps(t, {}, this);
          for (let e in d) {
            let t = d[e];
            void 0 !== a[e] && eC(t) && t.set(a[e], !1);
          }
        }
        mount(e) {
          ((this.current = e),
            oR.set(e, this),
            this.projection && !this.projection.instance && this.projection.mount(e),
            this.parent &&
              this.isVariantNode &&
              !this.isControllingVariants &&
              (this.removeFromVariantTree = this.parent.addVariantChild(this)),
            this.values.forEach((e, t) => this.bindToMotionValue(t, e)),
            oV.current ||
              (function () {
                if (((oV.current = !0), Y)) {
                  if (window.matchMedia) {
                    let e = window.matchMedia('(prefers-reduced-motion)'),
                      t = () => (oF.current = e.matches);
                    (e.addListener(t), t());
                  } else oF.current = !1;
                }
              })(),
            (this.shouldReduceMotion =
              'never' !== this.reducedMotionConfig &&
              ('always' === this.reducedMotionConfig || oF.current)),
            this.parent && this.parent.children.add(this),
            this.update(this.props, this.presenceContext));
        }
        unmount() {
          for (let e in (oR.delete(this.current),
          this.projection && this.projection.unmount(),
          tx(this.notifyUpdate),
          tx(this.render),
          this.valueSubscriptions.forEach((e) => e()),
          this.removeFromVariantTree && this.removeFromVariantTree(),
          this.parent && this.parent.children.delete(this),
          this.events))
            this.events[e].clear();
          for (let e in this.features) {
            let t = this.features[e];
            t && (t.unmount(), (t.isMounted = !1));
          }
          this.current = null;
        }
        bindToMotionValue(e, t) {
          let r = ek.has(e),
            i = t.on('change', (t) => {
              ((this.latestValues[e] = t),
                this.props.onUpdate && ty.preRender(this.notifyUpdate),
                r && this.projection && (this.projection.isTransformDirty = !0));
            }),
            n = t.on('renderRequest', this.scheduleRender);
          this.valueSubscriptions.set(e, () => {
            (i(), n(), t.owner && t.stop());
          });
        }
        sortNodePosition(e) {
          return this.current && this.sortInstanceNodePosition && this.type === e.type
            ? this.sortInstanceNodePosition(this.current, e.current)
            : 0;
        }
        updateFeatures() {
          let e = 'animation';
          for (e in eg) {
            let t = eg[e];
            if (!t) continue;
            let { isEnabled: r, Feature: i } = t;
            if (
              (!this.features[e] && i && r(this.props) && (this.features[e] = new i(this)),
              this.features[e])
            ) {
              let t = this.features[e];
              t.isMounted ? t.update() : (t.mount(), (t.isMounted = !0));
            }
          }
        }
        triggerBuild() {
          this.build(this.renderState, this.latestValues, this.props);
        }
        measureViewportBox() {
          return this.current ? this.measureInstanceViewportBox(this.current, this.props) : np();
        }
        getStaticValue(e) {
          return this.latestValues[e];
        }
        setStaticValue(e, t) {
          this.latestValues[e] = t;
        }
        update(e, t) {
          ((e.transformTemplate || this.props.transformTemplate) && this.scheduleRender(),
            (this.prevProps = this.props),
            (this.props = e),
            (this.prevPresenceContext = this.presenceContext),
            (this.presenceContext = t));
          for (let t = 0; t < oL.length; t++) {
            let r = oL[t];
            this.propEventSubscriptions[r] &&
              (this.propEventSubscriptions[r](), delete this.propEventSubscriptions[r]);
            let i = e['on' + r];
            i && (this.propEventSubscriptions[r] = this.on(r, i));
          }
          ((this.prevMotionValues = (function (e, t, r) {
            for (let i in t) {
              let n = t[i],
                o = r[i];
              if (eC(n)) e.addValue(i, n);
              else if (eC(o)) e.addValue(i, iH(n, { owner: e }));
              else if (o !== n) {
                if (e.hasValue(i)) {
                  let t = e.getValue(i);
                  !0 === t.liveStyle ? t.jump(n) : t.hasAnimated || t.set(n);
                } else {
                  let t = e.getStaticValue(i);
                  e.addValue(i, iH(void 0 !== t ? t : n, { owner: e }));
                }
              }
            }
            for (let i in r) void 0 === t[i] && e.removeValue(i);
            return t;
          })(
            this,
            this.scrapeMotionValuesFromProps(e, this.prevProps, this),
            this.prevMotionValues
          )),
            this.handleChildMotionValue && this.handleChildMotionValue());
        }
        getProps() {
          return this.props;
        }
        getVariant(e) {
          return this.props.variants ? this.props.variants[e] : void 0;
        }
        getDefaultTransition() {
          return this.props.transition;
        }
        getTransformPagePoint() {
          return this.props.transformPagePoint;
        }
        getClosestVariantNode() {
          return this.isVariantNode
            ? this
            : this.parent
              ? this.parent.getClosestVariantNode()
              : void 0;
        }
        getVariantContext(e = !1) {
          if (e) return this.parent ? this.parent.getVariantContext() : void 0;
          if (!this.isControllingVariants) {
            let e = (this.parent && this.parent.getVariantContext()) || {};
            return (void 0 !== this.props.initial && (e.initial = this.props.initial), e);
          }
          let t = {};
          for (let e = 0; e < oI; e++) {
            let r = eh[e],
              i = this.props[r];
            (el(i) || !1 === i) && (t[r] = i);
          }
          return t;
        }
        addVariantChild(e) {
          let t = this.getClosestVariantNode();
          if (t)
            return (
              t.variantChildren && t.variantChildren.add(e),
              () => t.variantChildren.delete(e)
            );
        }
        addValue(e, t) {
          let r = this.values.get(e);
          t !== r &&
            (r && this.removeValue(e),
            this.bindToMotionValue(e, t),
            this.values.set(e, t),
            (this.latestValues[e] = t.get()));
        }
        removeValue(e) {
          this.values.delete(e);
          let t = this.valueSubscriptions.get(e);
          (t && (t(), this.valueSubscriptions.delete(e)),
            delete this.latestValues[e],
            this.removeValueFromRenderState(e, this.renderState));
        }
        hasValue(e) {
          return this.values.has(e);
        }
        getValue(e, t) {
          if (this.props.values && this.props.values[e]) return this.props.values[e];
          let r = this.values.get(e);
          return (
            void 0 === r &&
              void 0 !== t &&
              ((r = iH(null === t ? void 0 : t, { owner: this })), this.addValue(e, r)),
            r
          );
        }
        readValue(e, t) {
          var r;
          let i =
            void 0 === this.latestValues[e] && this.current
              ? null !== (r = this.getBaseTargetFromProps(this.props, e)) && void 0 !== r
                ? r
                : this.readValueFromInstance(this.current, e, this.options)
              : this.latestValues[e];
          return (
            null != i &&
              ('string' == typeof i && (rr(i) || rt(i))
                ? (i = parseFloat(i))
                : !o$(i) && rV.test(t) && (i = rW(e, t)),
              this.setBaseTarget(e, eC(i) ? i.get() : i)),
            eC(i) ? i.get() : i
          );
        }
        setBaseTarget(e, t) {
          this.baseTarget[e] = t;
        }
        getBaseTarget(e) {
          var t;
          let r;
          let { initial: i } = this.props;
          if ('string' == typeof i || 'object' == typeof i) {
            let n = ts(
              this.props,
              i,
              null === (t = this.presenceContext) || void 0 === t ? void 0 : t.custom
            );
            n && (r = n[e]);
          }
          if (i && void 0 !== r) return r;
          let n = this.getBaseTargetFromProps(this.props, e);
          return void 0 === n || eC(n)
            ? void 0 !== this.initialValues[e] && void 0 === r
              ? void 0
              : this.baseTarget[e]
            : n;
        }
        on(e, t) {
          return (this.events[e] || (this.events[e] = new iI()), this.events[e].add(t));
        }
        notify(e, ...t) {
          this.events[e] && this.events[e].notify(...t);
        }
      }
      class oW extends oO {
        constructor() {
          (super(...arguments), (this.KeyframeResolver = rH));
        }
        sortInstanceNodePosition(e, t) {
          return 2 & e.compareDocumentPosition(t) ? 1 : -1;
        }
        getBaseTargetFromProps(e, t) {
          return e.style ? e.style[t] : void 0;
        }
        removeValueFromRenderState(e, { vars: t, style: r }) {
          (delete t[e], delete r[e]);
        }
      }
      class oN extends oW {
        constructor() {
          (super(...arguments),
            (this.type = 'html'),
            (this.applyWillChange = !0),
            (this.renderInstance = te));
        }
        readValueFromInstance(e, t) {
          if (ek.has(t)) {
            let e = rO(t);
            return (e && e.default) || 0;
          }
          {
            let r = window.getComputedStyle(e),
              i = (eY(t) ? r.getPropertyValue(t) : r[t]) || 0;
            return 'string' == typeof i ? i.trim() : i;
          }
        }
        measureInstanceViewportBox(e, { transformPagePoint: t }) {
          return nA(e, t);
        }
        build(e, t, r) {
          eZ(e, t, r.transformTemplate);
        }
        scrapeMotionValuesFromProps(e, t, r) {
          return ti(e, t, r);
        }
        handleChildMotionValue() {
          this.childSubscription && (this.childSubscription(), delete this.childSubscription);
          let { children: e } = this.props;
          eC(e) &&
            (this.childSubscription = e.on('change', (e) => {
              this.current && (this.current.textContent = `${e}`);
            }));
        }
      }
      class oH extends oW {
        constructor() {
          (super(...arguments),
            (this.type = 'svg'),
            (this.isSVGTag = !1),
            (this.measureInstanceViewportBox = np));
        }
        getBaseTargetFromProps(e, t) {
          return e[t];
        }
        readValueFromInstance(e, t) {
          if (ek.has(t)) {
            let e = rO(t);
            return (e && e.default) || 0;
          }
          return ((t = tt.has(t) ? t : G(t)), e.getAttribute(t));
        }
        scrapeMotionValuesFromProps(e, t, r) {
          return tn(e, t, r);
        }
        build(e, t, r) {
          e9(e, t, this.isSVGTag, r.transformTemplate);
        }
        renderInstance(e, t, r, i) {
          tr(e, t, r, i);
        }
        mount(e) {
          ((this.isSVGTag = e7(e.tagName)), super.mount(e));
        }
      }
      let oU = (e, t) => (ex(e) ? new oH(t) : new oN(t, { allowProjection: e !== y.Fragment })),
        oq = {
          animation: { Feature: i1 },
          exit: { Feature: i2 },
          inView: { Feature: tK },
          tap: { Feature: tN },
          focus: { Feature: tI },
          hover: { Feature: tL },
          pan: { Feature: nD },
          drag: { Feature: nj, ProjectionNode: oD, MeasureLayout: n$ },
          layout: { ProjectionNode: oD, MeasureLayout: n$ }
        },
        oJ = (function (e) {
          function t(t, r = {}) {
            return (function ({
              preloadedFeatures: e,
              createVisualElement: t,
              useRender: r,
              useVisualState: i,
              Component: n
            }) {
              e &&
                (function (e) {
                  for (let t in e) eg[t] = { ...eg[t], ...e[t] };
                })(e);
              let o = (0, y.forwardRef)(function (e, o) {
                var s;
                let l;
                let u = {
                    ...(0, y.useContext)(q),
                    ...e,
                    layoutId: (function ({ layoutId: e }) {
                      let t = (0, y.useContext)(ev).id;
                      return t && void 0 !== e ? t + '-' + e : e;
                    })(e)
                  },
                  { isStatic: d } = u,
                  h = (function (e) {
                    let { initial: t, animate: r } = (function (e, t) {
                      if (ec(e)) {
                        let { initial: t, animate: r } = e;
                        return {
                          initial: !1 === t || el(t) ? t : void 0,
                          animate: el(r) ? r : void 0
                        };
                      }
                      return !1 !== e.inherit ? t : {};
                    })(e, (0, y.useContext)(J));
                    return (0, y.useMemo)(() => ({ initial: t, animate: r }), [em(t), em(r)]);
                  })(e),
                  c = i(e, d);
                if (!d && Y) {
                  (0, y.useContext)(X).strict;
                  let e = (function (e) {
                    let { drag: t, layout: r } = eg;
                    if (!t && !r) return {};
                    let i = { ...t, ...r };
                    return {
                      MeasureLayout:
                        (null == t ? void 0 : t.isEnabled(e)) ||
                        (null == r ? void 0 : r.isEnabled(e))
                          ? i.MeasureLayout
                          : void 0,
                      ProjectionNode: i.ProjectionNode
                    };
                  })(u);
                  ((l = e.MeasureLayout),
                    (h.visualElement = (function (e, t, r, i, n) {
                      let { visualElement: o } = (0, y.useContext)(J),
                        s = (0, y.useContext)(X),
                        a = (0, y.useContext)(U),
                        l = (0, y.useContext)(q).reducedMotion,
                        u = (0, y.useRef)();
                      ((i = i || s.renderer),
                        !u.current &&
                          i &&
                          (u.current = i(e, {
                            visualState: t,
                            parent: o,
                            props: r,
                            presenceContext: a,
                            blockInitialAnimation: !!a && !1 === a.initial,
                            reducedMotionConfig: l
                          })));
                      let d = u.current,
                        h = (0, y.useContext)(eo);
                      (d &&
                        !d.projection &&
                        n &&
                        ('html' === d.type || 'svg' === d.type) &&
                        (function (e, t, r, i) {
                          let {
                            layoutId: n,
                            layout: o,
                            drag: s,
                            dragConstraints: a,
                            layoutScroll: l,
                            layoutRoot: u
                          } = t;
                          ((e.projection = new r(
                            e.latestValues,
                            t['data-framer-portal-id']
                              ? void 0
                              : (function e(t) {
                                  if (t)
                                    return !1 !== t.options.allowProjection
                                      ? t.projection
                                      : e(t.parent);
                                })(e.parent)
                          )),
                            e.projection.setOptions({
                              layoutId: n,
                              layout: o,
                              alwaysMeasureLayout: !!s || (a && en(a)),
                              visualElement: e,
                              animationType: 'string' == typeof o ? o : 'both',
                              initialPromotionConfig: i,
                              layoutScroll: l,
                              layoutRoot: u
                            }));
                        })(u.current, r, n, h),
                        (0, y.useInsertionEffect)(() => {
                          d && d.update(r, a);
                        }));
                      let c = (0, y.useRef)(!!(r[Z] && !window.HandoffComplete));
                      return (
                        K(() => {
                          d &&
                            (d.updateFeatures(),
                            er.render(d.render),
                            c.current && d.animationState && d.animationState.animateChanges());
                        }),
                        (0, y.useEffect)(() => {
                          d &&
                            (!c.current && d.animationState && d.animationState.animateChanges(),
                            c.current && ((c.current = !1), es || ((es = !0), queueMicrotask(ea))));
                        }),
                        d
                      );
                    })(n, c, u, t, e.ProjectionNode)));
                }
                return (0, a.jsxs)(J.Provider, {
                  value: h,
                  children: [
                    l && h.visualElement
                      ? (0, a.jsx)(l, { visualElement: h.visualElement, ...u })
                      : null,
                    r(
                      n,
                      e,
                      ((s = h.visualElement),
                      (0, y.useCallback)(
                        (e) => {
                          (e && c.mount && c.mount(e),
                            s && (e ? s.mount(e) : s.unmount()),
                            o && ('function' == typeof o ? o(e) : en(o) && (o.current = e)));
                        },
                        [s]
                      )),
                      c,
                      d,
                      h.visualElement
                    )
                  ]
                });
              });
              return ((o[eb] = n), o);
            })(e(t, r));
          }
          if ('undefined' == typeof Proxy) return t;
          let r = new Map();
          return new Proxy(t, { get: (e, i) => (r.has(i) || r.set(i, t(i)), r.get(i)) });
        })((e, t) =>
          (function (e, { forwardMotionProps: t = !1 }, r, i) {
            return {
              ...(ex(e) ? tk : tP),
              preloadedFeatures: r,
              useRender: (function (e = !1) {
                return (t, r, i, { latestValues: n }, o) => {
                  let s = (
                      ex(t)
                        ? function (e, t, r, i) {
                            let n = (0, y.useMemo)(() => {
                              let r = e8();
                              return (
                                e9(r, t, e7(i), e.transformTemplate),
                                { ...r.attrs, style: { ...r.style } }
                              );
                            }, [t]);
                            if (e.style) {
                              let t = {};
                              (e0(t, e.style, e), (n.style = { ...t, ...n.style }));
                            }
                            return n;
                          }
                        : function (e, t) {
                            let r = {},
                              i = (function (e, t) {
                                let r = e.style || {},
                                  i = {};
                                return (
                                  e0(i, r, e),
                                  Object.assign(
                                    i,
                                    (function ({ transformTemplate: e }, t) {
                                      return (0, y.useMemo)(() => {
                                        let r = eQ();
                                        return (eZ(r, t, e), Object.assign({}, r.vars, r.style));
                                      }, [t]);
                                    })(e, t)
                                  ),
                                  i
                                );
                              })(e, t);
                            return (
                              e.drag &&
                                !1 !== e.dragListener &&
                                ((r.draggable = !1),
                                (i.userSelect = i.WebkitUserSelect = i.WebkitTouchCallout = 'none'),
                                (i.touchAction =
                                  !0 === e.drag ? 'none' : `pan-${'x' === e.drag ? 'y' : 'x'}`)),
                              void 0 === e.tabIndex &&
                                (e.onTap || e.onTapStart || e.whileTap) &&
                                (r.tabIndex = 0),
                              (r.style = i),
                              r
                            );
                          }
                    )(r, n, o, t),
                    a = (function (e, t, r) {
                      let i = {};
                      for (let n in e)
                        ('values' !== n || 'object' != typeof e.values) &&
                          (e2(n) ||
                            (!0 === r && e5(n)) ||
                            (!t && !e5(n)) ||
                            (e.draggable && n.startsWith('onDrag'))) &&
                          (i[n] = e[n]);
                      return i;
                    })(r, 'string' == typeof t, e),
                    l = t !== y.Fragment ? { ...a, ...s, ref: i } : {},
                    { children: u } = r,
                    d = (0, y.useMemo)(() => (eC(u) ? u.get() : u), [u]);
                  return (0, y.createElement)(t, { ...l, children: d });
                };
              })(t),
              createVisualElement: i,
              Component: e
            };
          })(e, t, oq, oU)
        );
      var oY = r(8600),
        oK = {
          initial: (e) => {
            let { position: t } = e,
              r = ['top', 'bottom'].includes(t) ? 'y' : 'x',
              i = ['top-right', 'bottom-right'].includes(t) ? 1 : -1;
            return ('bottom' === t && (i = 1), { opacity: 0, [r]: 24 * i });
          },
          animate: {
            opacity: 1,
            y: 0,
            x: 0,
            scale: 1,
            transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] }
          },
          exit: { opacity: 0, scale: 0.85, transition: { duration: 0.2, ease: [0.4, 0, 1, 1] } }
        },
        oX = (0, y.memo)((e) => {
          var t;
          let {
              id: r,
              message: i,
              onCloseComplete: n,
              onRequestRemove: o,
              requestClose: s = !1,
              position: l = 'bottom',
              duration: u = 5e3,
              containerStyle: d,
              motionVariants: h = oK,
              toastSpacing: c = '0.5rem'
            } = e,
            [p, m] = (0, y.useState)(u),
            f = null === (t = (0, y.useContext)(U)) || t.isPresent;
          (N(() => {
            f || null == n || n();
          }, [f]),
            N(() => {
              m(u);
            }, [u]));
          let g = () => {
            f && o();
          };
          ((0, y.useEffect)(() => {
            f && s && o();
          }, [f, s, o]),
            (function (e, t) {
              let r = (function (e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
                  r = (0, y.useRef)(e);
                return (
                  (0, y.useEffect)(() => {
                    r.current = e;
                  }),
                  (0, y.useCallback)(function () {
                    for (var e, t = arguments.length, i = Array(t), n = 0; n < t; n++)
                      i[n] = arguments[n];
                    return null == (e = r.current) ? void 0 : e.call(r, ...i);
                  }, t)
                );
              })(e);
              (0, y.useEffect)(() => {
                if (null == t) return;
                let e = null;
                return (
                  (e = window.setTimeout(() => {
                    r();
                  }, t)),
                  () => {
                    e && window.clearTimeout(e);
                  }
                );
              }, [t, r]);
            })(g, p));
          let v = (0, y.useMemo)(
              () => ({ pointerEvents: 'auto', maxWidth: 560, minWidth: 300, margin: c, ...d }),
              [d, c]
            ),
            b = (0, y.useMemo)(
              () =>
                (function (e) {
                  let t = e.includes('right'),
                    r = e.includes('left'),
                    i = 'center';
                  return (
                    t && (i = 'flex-end'),
                    r && (i = 'flex-start'),
                    { display: 'flex', flexDirection: 'column', alignItems: i }
                  );
                })(l),
              [l]
            );
          return (0, a.jsx)(oJ.div, {
            layout: !0,
            className: 'chakra-toast',
            variants: h,
            initial: 'initial',
            animate: 'animate',
            exit: 'exit',
            onHoverStart: () => m(null),
            onHoverEnd: () => m(u),
            custom: { position: l },
            style: b,
            children: (0, a.jsx)(oY.m.div, {
              role: 'status',
              'aria-atomic': 'true',
              className: 'chakra-toast__inner',
              __css: v,
              children: (0, H.Pu)(i, { id: r, onClose: g })
            })
          });
        });
      oX.displayName = 'ToastComponent';
      var oG = r(6869);
      function oZ(e) {
        return (0, a.jsx)(oG.J, {
          viewBox: '0 0 24 24',
          ...e,
          children: (0, a.jsx)('path', {
            fill: 'currentColor',
            d: 'M11.983,0a12.206,12.206,0,0,0-8.51,3.653A11.8,11.8,0,0,0,0,12.207,11.779,11.779,0,0,0,11.8,24h.214A12.111,12.111,0,0,0,24,11.791h0A11.766,11.766,0,0,0,11.983,0ZM10.5,16.542a1.476,1.476,0,0,1,1.449-1.53h.027a1.527,1.527,0,0,1,1.523,1.47,1.475,1.475,0,0,1-1.449,1.53h-.027A1.529,1.529,0,0,1,10.5,16.542ZM11,12.5v-6a1,1,0,0,1,2,0v6a1,1,0,1,1-2,0Z'
          })
        });
      }
      var oQ = r(3861),
        [o0, o1] = (0, m.k)({
          name: 'AlertContext',
          hookName: 'useAlertContext',
          providerName: '<Alert />'
        }),
        [o5, o2] = (0, m.k)({
          name: 'AlertStylesContext',
          hookName: 'useAlertStyles',
          providerName: '<Alert />'
        }),
        o3 = {
          info: {
            icon: function (e) {
              return (0, a.jsx)(oG.J, {
                viewBox: '0 0 24 24',
                ...e,
                children: (0, a.jsx)('path', {
                  fill: 'currentColor',
                  d: 'M12,0A12,12,0,1,0,24,12,12.013,12.013,0,0,0,12,0Zm.25,5a1.5,1.5,0,1,1-1.5,1.5A1.5,1.5,0,0,1,12.25,5ZM14.5,18.5h-4a1,1,0,0,1,0-2h.75a.25.25,0,0,0,.25-.25v-4.5a.25.25,0,0,0-.25-.25H10.5a1,1,0,0,1,0-2h1a2,2,0,0,1,2,2v4.75a.25.25,0,0,0,.25.25h.75a1,1,0,1,1,0,2Z'
                })
              });
            },
            colorScheme: 'blue'
          },
          warning: { icon: oZ, colorScheme: 'orange' },
          success: {
            icon: function (e) {
              return (0, a.jsx)(oG.J, {
                viewBox: '0 0 24 24',
                ...e,
                children: (0, a.jsx)('path', {
                  fill: 'currentColor',
                  d: 'M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z'
                })
              });
            },
            colorScheme: 'green'
          },
          error: { icon: oZ, colorScheme: 'red' },
          loading: { icon: oQ.$, colorScheme: 'blue' }
        },
        o4 = r(8597),
        o6 = r(762),
        o9 = (0, o4.G)(function (e, t) {
          var r;
          let { status: i = 'info', addRole: n = !0, ...o } = (0, x.Lr)(e),
            s = null != (r = e.colorScheme) ? r : o3[i].colorScheme,
            l = (0, o6.jC)('Alert', { ...e, colorScheme: s }),
            u = {
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              position: 'relative',
              overflow: 'hidden',
              ...l.container
            };
          return (0, a.jsx)(o0, {
            value: { status: i },
            children: (0, a.jsx)(o5, {
              value: l,
              children: (0, a.jsx)(oY.m.div, {
                'data-status': i,
                role: n ? 'alert' : void 0,
                ref: t,
                ...o,
                className: (0, H.cx)('chakra-alert', e.className),
                __css: u
              })
            })
          });
        });
      function o8(e) {
        let { status: t } = o1(),
          r = o3[t].icon,
          i = o2(),
          n = 'loading' === t ? i.spinner : i.icon;
        return (0, a.jsx)(oY.m.span, {
          display: 'inherit',
          'data-status': t,
          ...e,
          className: (0, H.cx)('chakra-alert__icon', e.className),
          __css: n,
          children: e.children || (0, a.jsx)(r, { h: '100%', w: '100%' })
        });
      }
      ((o9.displayName = 'Alert'), (o8.displayName = 'AlertIcon'));
      var o7 = (0, o4.G)(function (e, t) {
        let r = o2(),
          { status: i } = o1();
        return (0, a.jsx)(oY.m.div, {
          ref: t,
          'data-status': i,
          ...e,
          className: (0, H.cx)('chakra-alert__title', e.className),
          __css: r.title
        });
      });
      o7.displayName = 'AlertTitle';
      var se = (0, o4.G)(function (e, t) {
        let r = o2(),
          { status: i } = o1(),
          n = { display: 'inline', ...r.description };
        return (0, a.jsx)(oY.m.div, {
          ref: t,
          'data-status': i,
          ...e,
          className: (0, H.cx)('chakra-alert__desc', e.className),
          __css: n
        });
      });
      function st(e) {
        return (0, a.jsx)(oG.J, {
          focusable: 'false',
          'aria-hidden': !0,
          ...e,
          children: (0, a.jsx)('path', {
            fill: 'currentColor',
            d: 'M.439,21.44a1.5,1.5,0,0,0,2.122,2.121L11.823,14.3a.25.25,0,0,1,.354,0l9.262,9.263a1.5,1.5,0,1,0,2.122-2.121L14.3,12.177a.25.25,0,0,1,0-.354l9.263-9.262A1.5,1.5,0,0,0,21.439.44L12.177,9.7a.25.25,0,0,1-.354,0L2.561.44A1.5,1.5,0,0,0,.439,2.561L9.7,11.823a.25.25,0,0,1,0,.354Z'
          })
        });
      }
      se.displayName = 'AlertDescription';
      var sr = (0, o4.G)(function (e, t) {
        let r = (0, o6.mq)('CloseButton', e),
          { children: i, isDisabled: n, __css: o, ...s } = (0, x.Lr)(e);
        return (0, a.jsx)(oY.m.button, {
          type: 'button',
          'aria-label': 'Close',
          ref: t,
          disabled: n,
          __css: {
            outline: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
            ...r,
            ...o
          },
          ...s,
          children: i || (0, a.jsx)(st, { width: '1em', height: '1em' })
        });
      });
      sr.displayName = 'CloseButton';
      var si = (function (e) {
          let t = e,
            r = new Set(),
            i = (e) => {
              ((t = e(t)), r.forEach((e) => e()));
            };
          return {
            getState: () => t,
            subscribe: (t) => (
              r.add(t),
              () => {
                (i(() => e), r.delete(t));
              }
            ),
            removeToast: (e, t) => {
              i((r) => ({ ...r, [t]: r[t].filter((t) => t.id != e) }));
            },
            notify: (e, t) => {
              let r = (function (e) {
                  var t, r;
                  let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                  sn += 1;
                  let n = null != (t = i.id) ? t : sn,
                    o = null != (r = i.position) ? r : 'bottom';
                  return {
                    id: n,
                    message: e,
                    position: o,
                    duration: i.duration,
                    onCloseComplete: i.onCloseComplete,
                    onRequestRemove: () => si.removeToast(String(n), o),
                    status: i.status,
                    requestClose: !1,
                    containerStyle: i.containerStyle
                  };
                })(e, t),
                { position: n, id: o } = r;
              return (
                i((e) => {
                  var t, i;
                  let o = n.includes('top')
                    ? [r, ...(null != (t = e[n]) ? t : [])]
                    : [...(null != (i = e[n]) ? i : []), r];
                  return { ...e, [n]: o };
                }),
                o
              );
            },
            update: (e, t) => {
              e &&
                i((r) => {
                  let i = { ...r },
                    { position: n, index: o } = O(i, e);
                  return (
                    n &&
                      -1 !== o &&
                      (i[n][o] = {
                        ...i[n][o],
                        ...t,
                        message: (function () {
                          let e =
                              arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            { render: t, toastComponent: r = so } = e;
                          return (i) =>
                            'function' == typeof t
                              ? t({ ...i, ...e })
                              : (0, a.jsx)(r, { ...i, ...e });
                        })(t)
                      }),
                    i
                  );
                });
            },
            closeAll: function () {
              let { positions: e } =
                arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
              i((t) =>
                (null != e
                  ? e
                  : ['bottom', 'bottom-right', 'bottom-left', 'top', 'top-left', 'top-right']
                ).reduce((e, r) => ((e[r] = t[r].map((e) => ({ ...e, requestClose: !0 }))), e), {
                  ...t
                })
              );
            },
            close: (e) => {
              i((t) => {
                let r = W(t, e);
                return r
                  ? { ...t, [r]: t[r].map((t) => (t.id == e ? { ...t, requestClose: !0 } : t)) }
                  : t;
              });
            },
            isActive: (e) => !!O(si.getState(), e).position
          };
        })({
          top: [],
          'top-left': [],
          'top-right': [],
          'bottom-left': [],
          bottom: [],
          'bottom-right': []
        }),
        sn = 0,
        so = (e) => {
          let {
              status: t,
              variant: r = 'solid',
              id: i,
              title: n,
              isClosable: o,
              onClose: s,
              description: l,
              colorScheme: u,
              icon: d
            } = e,
            h = i
              ? {
                  root: 'toast-'.concat(i),
                  title: 'toast-'.concat(i, '-title'),
                  description: 'toast-'.concat(i, '-description')
                }
              : void 0;
          return (0, a.jsxs)(o9, {
            addRole: !1,
            status: t,
            variant: r,
            id: null == h ? void 0 : h.root,
            alignItems: 'start',
            borderRadius: 'md',
            boxShadow: 'lg',
            paddingEnd: 8,
            textAlign: 'start',
            width: 'auto',
            colorScheme: u,
            children: [
              (0, a.jsx)(o8, { children: d }),
              (0, a.jsxs)(oY.m.div, {
                flex: '1',
                maxWidth: '100%',
                children: [
                  n && (0, a.jsx)(o7, { id: null == h ? void 0 : h.title, children: n }),
                  l &&
                    (0, a.jsx)(se, {
                      id: null == h ? void 0 : h.description,
                      display: 'block',
                      children: l
                    })
                ]
              }),
              o &&
                (0, a.jsx)(sr, {
                  size: 'sm',
                  onClick: s,
                  position: 'absolute',
                  insetEnd: 1,
                  top: 1
                })
            ]
          });
        };
      class ss extends y.Component {
        getSnapshotBeforeUpdate(e) {
          let t = this.props.childRef.current;
          if (t && e.isPresent && !this.props.isPresent) {
            let e = this.props.sizeRef.current;
            ((e.height = t.offsetHeight || 0),
              (e.width = t.offsetWidth || 0),
              (e.top = t.offsetTop),
              (e.left = t.offsetLeft));
          }
          return null;
        }
        componentDidUpdate() {}
        render() {
          return this.props.children;
        }
      }
      function sa({ children: e, isPresent: t }) {
        let r = (0, y.useId)(),
          i = (0, y.useRef)(null),
          n = (0, y.useRef)({ width: 0, height: 0, top: 0, left: 0 }),
          { nonce: o } = (0, y.useContext)(q);
        return (
          (0, y.useInsertionEffect)(() => {
            let { width: e, height: s, top: a, left: l } = n.current;
            if (t || !i.current || !e || !s) return;
            i.current.dataset.motionPopId = r;
            let u = document.createElement('style');
            return (
              o && (u.nonce = o),
              document.head.appendChild(u),
              u.sheet &&
                u.sheet.insertRule(`
          [data-motion-pop-id="${r}"] {
            position: absolute !important;
            width: ${e}px !important;
            height: ${s}px !important;
            top: ${a}px !important;
            left: ${l}px !important;
          }
        `),
              () => {
                document.head.removeChild(u);
              }
            );
          }, [t]),
          (0, a.jsx)(ss, {
            isPresent: t,
            childRef: i,
            sizeRef: n,
            children: y.cloneElement(e, { ref: i })
          })
        );
      }
      let sl = ({
        children: e,
        initial: t,
        isPresent: r,
        onExitComplete: i,
        custom: n,
        presenceAffectsLayout: o,
        mode: s
      }) => {
        let l = ta(su),
          u = (0, y.useId)(),
          d = (0, y.useMemo)(
            () => ({
              id: u,
              initial: t,
              isPresent: r,
              custom: n,
              onExitComplete: (e) => {
                for (let t of (l.set(e, !0), l.values())) if (!t) return;
                i && i();
              },
              register: (e) => (l.set(e, !1), () => l.delete(e))
            }),
            o ? [Math.random()] : [r]
          );
        return (
          (0, y.useMemo)(() => {
            l.forEach((e, t) => l.set(t, !1));
          }, [r]),
          y.useEffect(() => {
            r || l.size || !i || i();
          }, [r]),
          'popLayout' === s && (e = (0, a.jsx)(sa, { isPresent: r, children: e })),
          (0, a.jsx)(U.Provider, { value: d, children: e })
        );
      };
      function su() {
        return new Map();
      }
      let sd = (e) => e.key || '';
      function sh(e) {
        let t = [];
        return (
          y.Children.forEach(e, (e) => {
            (0, y.isValidElement)(e) && t.push(e);
          }),
          t
        );
      }
      let sc = ({
        children: e,
        exitBeforeEnter: t,
        custom: r,
        initial: i = !0,
        onExitComplete: n,
        presenceAffectsLayout: o = !0,
        mode: s = 'sync'
      }) => {
        tb(!t, "Replace exitBeforeEnter with mode='wait'");
        let l = (0, y.useMemo)(() => sh(e), [e]),
          u = l.map(sd),
          d = (0, y.useRef)(!0),
          h = (0, y.useRef)(l),
          c = ta(() => new Map()),
          [p, m] = (0, y.useState)(l),
          [f, g] = (0, y.useState)(l);
        K(() => {
          ((d.current = !1), (h.current = l));
          for (let e = 0; e < f.length; e++) {
            let t = sd(f[e]);
            u.includes(t) ? c.delete(t) : !0 !== c.get(t) && c.set(t, !1);
          }
        }, [f, u.length, u.join('-')]);
        let v = [];
        if (l !== p) {
          let e = [...l];
          for (let t = 0; t < f.length; t++) {
            let r = f[t],
              i = sd(r);
            u.includes(i) || (e.splice(t, 0, r), v.push(r));
          }
          ('wait' === s && v.length && (e = v), g(sh(e)), m(l));
          return;
        }
        let { forceRender: b } = (0, y.useContext)(ev);
        return (0, a.jsx)(a.Fragment, {
          children: f.map((e) => {
            let t = sd(e),
              p = l === f || u.includes(t);
            return (0, a.jsx)(
              sl,
              {
                isPresent: p,
                initial: (!d.current || !!i) && void 0,
                custom: p ? void 0 : r,
                presenceAffectsLayout: o,
                mode: s,
                onExitComplete: p
                  ? void 0
                  : () => {
                      if (!c.has(t)) return;
                      c.set(t, !0);
                      let e = !0;
                      (c.forEach((t) => {
                        t || (e = !1);
                      }),
                        e && (null == b || b(), g(h.current), n && n()));
                    },
                children: e
              },
              t
            );
          })
        });
      };
      var sp = r(2667),
        [sm, sf] = (0, m.k)({ strict: !1, name: 'PortalContext' }),
        sg = 'chakra-portal',
        sv = (e) =>
          (0, a.jsx)('div', {
            className: 'chakra-portal-zIndex',
            style: { position: 'absolute', zIndex: e.zIndex, top: 0, left: 0, right: 0 },
            children: e.children
          }),
        sb = (e) => {
          let { appendToParentPortal: t, children: r } = e,
            [i, n] = (0, y.useState)(null),
            o = (0, y.useRef)(null),
            [, s] = (0, y.useState)({});
          (0, y.useEffect)(() => s({}), []);
          let l = sf(),
            u = g();
          M(() => {
            if (!i) return;
            let e = i.ownerDocument,
              r = t && null != l ? l : e.body;
            if (!r) return;
            ((o.current = e.createElement('div')),
              (o.current.className = sg),
              r.appendChild(o.current),
              s({}));
            let n = o.current;
            return () => {
              r.contains(n) && r.removeChild(n);
            };
          }, [i]);
          let d = (null == u ? void 0 : u.zIndex)
            ? (0, a.jsx)(sv, { zIndex: null == u ? void 0 : u.zIndex, children: r })
            : r;
          return o.current
            ? (0, sp.createPortal)((0, a.jsx)(sm, { value: o.current, children: d }), o.current)
            : (0, a.jsx)('span', {
                ref: (e) => {
                  e && n(e);
                }
              });
        },
        sy = (e) => {
          let { children: t, containerRef: r, appendToParentPortal: i } = e,
            n = r.current,
            o = null != n ? n : 'undefined' != typeof window ? document.body : void 0,
            s = (0, y.useMemo)(() => {
              let e = null == n ? void 0 : n.ownerDocument.createElement('div');
              return (e && (e.className = sg), e);
            }, [n]),
            [, l] = (0, y.useState)({});
          return (M(() => l({}), []),
          M(() => {
            if (s && o)
              return (
                o.appendChild(s),
                () => {
                  o.removeChild(s);
                }
              );
          }, [s, o]),
          o && s)
            ? (0, sp.createPortal)((0, a.jsx)(sm, { value: i ? s : null, children: t }), s)
            : null;
        };
      function sx(e) {
        let { containerRef: t, ...r } = { appendToParentPortal: !0, ...e };
        return t ? (0, a.jsx)(sy, { containerRef: t, ...r }) : (0, a.jsx)(sb, { ...r });
      }
      ((sx.className = sg), (sx.selector = '.chakra-portal'), (sx.displayName = 'Portal'));
      var [sw, sS] = (0, m.k)({ name: 'ToastOptionsContext', strict: !1 }),
        sk = (e) => {
          let t = (0, y.useSyncExternalStore)(si.subscribe, si.getState, si.getState),
            { motionVariants: r, component: i = oX, portalProps: n } = e,
            o = Object.keys(t).map((e) => {
              let n = t[e];
              return (0, a.jsx)(
                'div',
                {
                  role: 'region',
                  'aria-live': 'polite',
                  'aria-label': 'Notifications-'.concat(e),
                  id: 'chakra-toast-manager-'.concat(e),
                  style: (function (e) {
                    let t = e.includes('top') ? 'env(safe-area-inset-top, 0px)' : void 0,
                      r = e.includes('bottom') ? 'env(safe-area-inset-bottom, 0px)' : void 0,
                      i = e.includes('left') ? void 0 : 'env(safe-area-inset-right, 0px)',
                      n = e.includes('right') ? void 0 : 'env(safe-area-inset-left, 0px)';
                    return {
                      position: 'fixed',
                      zIndex: 'var(--toast-z-index, 5500)',
                      pointerEvents: 'none',
                      display: 'flex',
                      flexDirection: 'column',
                      margin: 'top' === e || 'bottom' === e ? '0 auto' : void 0,
                      top: t,
                      bottom: r,
                      right: i,
                      left: n
                    };
                  })(e),
                  children: (0, a.jsx)(sc, {
                    initial: !1,
                    children: n.map((e) => (0, a.jsx)(i, { motionVariants: r, ...e }, e.id))
                  })
                },
                e
              );
            });
          return (0, a.jsx)(sx, { ...n, children: o });
        },
        sP = (e) =>
          function (t) {
            let { children: r, theme: i = e, toastOptions: n, ...o } = t;
            return (0, a.jsxs)($, {
              theme: i,
              ...o,
              children: [
                (0, a.jsx)(sw, { value: null == n ? void 0 : n.defaultOptions, children: r }),
                (0, a.jsx)(sk, { ...n })
              ]
            });
          },
        sC = sP(L.rS);
      sP(L.wE);
    },
    9058: function (e, t, r) {
      r.d(t, {
        B1: function () {
          return u;
        }
      });
      var i = r(6200),
        n = [
          'borders',
          'breakpoints',
          'colors',
          'components',
          'config',
          'direction',
          'fonts',
          'fontSizes',
          'fontWeights',
          'letterSpacings',
          'lineHeights',
          'radii',
          'shadows',
          'sizes',
          'space',
          'styles',
          'transition',
          'zIndices'
        ],
        o = r(9054),
        s = r(2660);
      function a(e) {
        return 'function' == typeof e;
      }
      var l = (e) =>
          function (...t) {
            var r;
            let o = [...t],
              l = t[t.length - 1];
            return (
              ((r = l),
              (0, i.Kn)(r) &&
                n.every((e) => Object.prototype.hasOwnProperty.call(r, e)) &&
                o.length > 1)
                ? (o = o.slice(0, o.length - 1))
                : (l = e),
              (function (...e) {
                return (t) => e.reduce((e, t) => t(e), t);
              })(
                ...o.map(
                  (e) => (t) =>
                    a(e)
                      ? e(t)
                      : (function (...e) {
                          return s({}, ...e, d);
                        })(t, e)
                )
              )(l)
            );
          },
        u = l(o.rS);
      function d(e, t, r, i) {
        if ((a(e) || a(t)) && Object.prototype.hasOwnProperty.call(i, r))
          return (...r) => s({}, a(e) ? e(...r) : e, a(t) ? t(...r) : t, d);
      }
      l(o.wE);
    },
    9054: function (e, t, r) {
      r.d(t, {
        wE: function () {
          return nz;
        },
        rS: function () {
          return n_;
        }
      });
      var i,
        n,
        o,
        s,
        a,
        l,
        u,
        d,
        h,
        c,
        p,
        m,
        f,
        g,
        v,
        b,
        y,
        x,
        w,
        S,
        k,
        P,
        C,
        A = {
          letterSpacings: {
            tighter: '-0.05em',
            tight: '-0.025em',
            normal: '0',
            wide: '0.025em',
            wider: '0.05em',
            widest: '0.1em'
          },
          lineHeights: {
            normal: 'normal',
            none: 1,
            shorter: 1.25,
            short: 1.375,
            base: 1.5,
            tall: 1.625,
            taller: '2',
            3: '.75rem',
            4: '1rem',
            5: '1.25rem',
            6: '1.5rem',
            7: '1.75rem',
            8: '2rem',
            9: '2.25rem',
            10: '2.5rem'
          },
          fontWeights: {
            hairline: 100,
            thin: 200,
            light: 300,
            normal: 400,
            medium: 500,
            semibold: 600,
            bold: 700,
            extrabold: 800,
            black: 900
          },
          fonts: {
            heading:
              '-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
            body: '-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
            mono: 'SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace'
          },
          fontSizes: {
            '3xs': '0.45rem',
            '2xs': '0.625rem',
            xs: '0.75rem',
            sm: '0.875rem',
            md: '1rem',
            lg: '1.125rem',
            xl: '1.25rem',
            '2xl': '1.5rem',
            '3xl': '1.875rem',
            '4xl': '2.25rem',
            '5xl': '3rem',
            '6xl': '3.75rem',
            '7xl': '4.5rem',
            '8xl': '6rem',
            '9xl': '8rem'
          }
        },
        E = {
          px: '1px',
          0.5: '0.125rem',
          1: '0.25rem',
          1.5: '0.375rem',
          2: '0.5rem',
          2.5: '0.625rem',
          3: '0.75rem',
          3.5: '0.875rem',
          4: '1rem',
          5: '1.25rem',
          6: '1.5rem',
          7: '1.75rem',
          8: '2rem',
          9: '2.25rem',
          10: '2.5rem',
          12: '3rem',
          14: '3.5rem',
          16: '4rem',
          20: '5rem',
          24: '6rem',
          28: '7rem',
          32: '8rem',
          36: '9rem',
          40: '10rem',
          44: '11rem',
          48: '12rem',
          52: '13rem',
          56: '14rem',
          60: '15rem',
          64: '16rem',
          72: '18rem',
          80: '20rem',
          96: '24rem'
        },
        T = {
          ...E,
          max: 'max-content',
          min: 'min-content',
          full: '100%',
          '3xs': '14rem',
          '2xs': '16rem',
          xs: '20rem',
          sm: '24rem',
          md: '28rem',
          lg: '32rem',
          xl: '36rem',
          '2xl': '42rem',
          '3xl': '48rem',
          '4xl': '56rem',
          '5xl': '64rem',
          '6xl': '72rem',
          '7xl': '80rem',
          '8xl': '90rem',
          prose: '60ch',
          container: { sm: '640px', md: '768px', lg: '1024px', xl: '1280px' }
        },
        _ = {
          breakpoints: {
            base: '0em',
            sm: '30em',
            md: '48em',
            lg: '62em',
            xl: '80em',
            '2xl': '96em'
          },
          zIndices: {
            hide: -1,
            auto: 'auto',
            base: 0,
            docked: 10,
            dropdown: 1e3,
            sticky: 1100,
            banner: 1200,
            overlay: 1300,
            modal: 1400,
            popover: 1500,
            skipLink: 1600,
            toast: 1700,
            tooltip: 1800
          },
          radii: {
            none: '0',
            sm: '0.125rem',
            base: '0.25rem',
            md: '0.375rem',
            lg: '0.5rem',
            xl: '0.75rem',
            '2xl': '1rem',
            '3xl': '1.5rem',
            full: '9999px'
          },
          blur: {
            none: 0,
            sm: '4px',
            base: '8px',
            md: '12px',
            lg: '16px',
            xl: '24px',
            '2xl': '40px',
            '3xl': '64px'
          },
          colors: {
            transparent: 'transparent',
            current: 'currentColor',
            black: '#000000',
            white: '#FFFFFF',
            whiteAlpha: {
              50: 'rgba(255, 255, 255, 0.04)',
              100: 'rgba(255, 255, 255, 0.06)',
              200: 'rgba(255, 255, 255, 0.08)',
              300: 'rgba(255, 255, 255, 0.16)',
              400: 'rgba(255, 255, 255, 0.24)',
              500: 'rgba(255, 255, 255, 0.36)',
              600: 'rgba(255, 255, 255, 0.48)',
              700: 'rgba(255, 255, 255, 0.64)',
              800: 'rgba(255, 255, 255, 0.80)',
              900: 'rgba(255, 255, 255, 0.92)'
            },
            blackAlpha: {
              50: 'rgba(0, 0, 0, 0.04)',
              100: 'rgba(0, 0, 0, 0.06)',
              200: 'rgba(0, 0, 0, 0.08)',
              300: 'rgba(0, 0, 0, 0.16)',
              400: 'rgba(0, 0, 0, 0.24)',
              500: 'rgba(0, 0, 0, 0.36)',
              600: 'rgba(0, 0, 0, 0.48)',
              700: 'rgba(0, 0, 0, 0.64)',
              800: 'rgba(0, 0, 0, 0.80)',
              900: 'rgba(0, 0, 0, 0.92)'
            },
            gray: {
              50: '#F7FAFC',
              100: '#EDF2F7',
              200: '#E2E8F0',
              300: '#CBD5E0',
              400: '#A0AEC0',
              500: '#718096',
              600: '#4A5568',
              700: '#2D3748',
              800: '#1A202C',
              900: '#171923'
            },
            red: {
              50: '#FFF5F5',
              100: '#FED7D7',
              200: '#FEB2B2',
              300: '#FC8181',
              400: '#F56565',
              500: '#E53E3E',
              600: '#C53030',
              700: '#9B2C2C',
              800: '#822727',
              900: '#63171B'
            },
            orange: {
              50: '#FFFAF0',
              100: '#FEEBC8',
              200: '#FBD38D',
              300: '#F6AD55',
              400: '#ED8936',
              500: '#DD6B20',
              600: '#C05621',
              700: '#9C4221',
              800: '#7B341E',
              900: '#652B19'
            },
            yellow: {
              50: '#FFFFF0',
              100: '#FEFCBF',
              200: '#FAF089',
              300: '#F6E05E',
              400: '#ECC94B',
              500: '#D69E2E',
              600: '#B7791F',
              700: '#975A16',
              800: '#744210',
              900: '#5F370E'
            },
            green: {
              50: '#F0FFF4',
              100: '#C6F6D5',
              200: '#9AE6B4',
              300: '#68D391',
              400: '#48BB78',
              500: '#38A169',
              600: '#2F855A',
              700: '#276749',
              800: '#22543D',
              900: '#1C4532'
            },
            teal: {
              50: '#E6FFFA',
              100: '#B2F5EA',
              200: '#81E6D9',
              300: '#4FD1C5',
              400: '#38B2AC',
              500: '#319795',
              600: '#2C7A7B',
              700: '#285E61',
              800: '#234E52',
              900: '#1D4044'
            },
            blue: {
              50: '#ebf8ff',
              100: '#bee3f8',
              200: '#90cdf4',
              300: '#63b3ed',
              400: '#4299e1',
              500: '#3182ce',
              600: '#2b6cb0',
              700: '#2c5282',
              800: '#2a4365',
              900: '#1A365D'
            },
            cyan: {
              50: '#EDFDFD',
              100: '#C4F1F9',
              200: '#9DECF9',
              300: '#76E4F7',
              400: '#0BC5EA',
              500: '#00B5D8',
              600: '#00A3C4',
              700: '#0987A0',
              800: '#086F83',
              900: '#065666'
            },
            purple: {
              50: '#FAF5FF',
              100: '#E9D8FD',
              200: '#D6BCFA',
              300: '#B794F4',
              400: '#9F7AEA',
              500: '#805AD5',
              600: '#6B46C1',
              700: '#553C9A',
              800: '#44337A',
              900: '#322659'
            },
            pink: {
              50: '#FFF5F7',
              100: '#FED7E2',
              200: '#FBB6CE',
              300: '#F687B3',
              400: '#ED64A6',
              500: '#D53F8C',
              600: '#B83280',
              700: '#97266D',
              800: '#702459',
              900: '#521B41'
            },
            linkedin: {
              50: '#E8F4F9',
              100: '#CFEDFB',
              200: '#9BDAF3',
              300: '#68C7EC',
              400: '#34B3E4',
              500: '#00A0DC',
              600: '#008CC9',
              700: '#0077B5',
              800: '#005E93',
              900: '#004471'
            },
            facebook: {
              50: '#E8F4F9',
              100: '#D9DEE9',
              200: '#B7C2DA',
              300: '#6482C0',
              400: '#4267B2',
              500: '#385898',
              600: '#314E89',
              700: '#29487D',
              800: '#223B67',
              900: '#1E355B'
            },
            messenger: {
              50: '#D0E6FF',
              100: '#B9DAFF',
              200: '#A2CDFF',
              300: '#7AB8FF',
              400: '#2E90FF',
              500: '#0078FF',
              600: '#0063D1',
              700: '#0052AC',
              800: '#003C7E',
              900: '#002C5C'
            },
            whatsapp: {
              50: '#dffeec',
              100: '#b9f5d0',
              200: '#90edb3',
              300: '#65e495',
              400: '#3cdd78',
              500: '#22c35e',
              600: '#179848',
              700: '#0c6c33',
              800: '#01421c',
              900: '#001803'
            },
            twitter: {
              50: '#E5F4FD',
              100: '#C8E9FB',
              200: '#A8DCFA',
              300: '#83CDF7',
              400: '#57BBF5',
              500: '#1DA1F2',
              600: '#1A94DA',
              700: '#1681BF',
              800: '#136B9E',
              900: '#0D4D71'
            },
            telegram: {
              50: '#E3F2F9',
              100: '#C5E4F3',
              200: '#A2D4EC',
              300: '#7AC1E4',
              400: '#47A9DA',
              500: '#0088CC',
              600: '#007AB8',
              700: '#006BA1',
              800: '#005885',
              900: '#003F5E'
            }
          },
          ...A,
          sizes: T,
          shadows: {
            xs: '0 0 0 1px rgba(0, 0, 0, 0.05)',
            sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
            base: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
            md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
            lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
            xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
            '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
            outline: '0 0 0 3px rgba(66, 153, 225, 0.6)',
            inner: 'inset 0 2px 4px 0 rgba(0,0,0,0.06)',
            none: 'none',
            'dark-lg':
              'rgba(0, 0, 0, 0.1) 0px 0px 0px 1px, rgba(0, 0, 0, 0.2) 0px 5px 10px, rgba(0, 0, 0, 0.4) 0px 15px 40px'
          },
          space: E,
          borders: {
            none: 0,
            '1px': '1px solid',
            '2px': '2px solid',
            '4px': '4px solid',
            '8px': '8px solid'
          },
          transition: {
            property: {
              common:
                'background-color, border-color, color, fill, stroke, opacity, box-shadow, transform',
              colors: 'background-color, border-color, color, fill, stroke',
              dimensions: 'width, height',
              position: 'left, right, top, bottom',
              background: 'background-color, background-image, background-position'
            },
            easing: {
              'ease-in': 'cubic-bezier(0.4, 0, 1, 1)',
              'ease-out': 'cubic-bezier(0, 0, 0.2, 1)',
              'ease-in-out': 'cubic-bezier(0.4, 0, 0.2, 1)'
            },
            duration: {
              'ultra-fast': '50ms',
              faster: '100ms',
              fast: '150ms',
              normal: '200ms',
              slow: '300ms',
              slower: '400ms',
              'ultra-slow': '500ms'
            }
          }
        },
        z = r(1318),
        { defineMultiStyleConfig: j, definePartsStyle: M } = (0, z.D)([
          'stepper',
          'step',
          'title',
          'description',
          'indicator',
          'separator',
          'icon',
          'number'
        ]),
        D = (0, z.gJ)('stepper-indicator-size'),
        F = (0, z.gJ)('stepper-icon-size'),
        V = (0, z.gJ)('stepper-title-font-size'),
        R = (0, z.gJ)('stepper-description-font-size'),
        B = (0, z.gJ)('stepper-accent-color'),
        $ = j({
          baseStyle: M(({ colorScheme: e }) => ({
            stepper: {
              display: 'flex',
              justifyContent: 'space-between',
              gap: '4',
              '&[data-orientation=vertical]': { flexDirection: 'column', alignItems: 'flex-start' },
              '&[data-orientation=horizontal]': { flexDirection: 'row', alignItems: 'center' },
              [B.variable]: `colors.${e}.500`,
              _dark: { [B.variable]: `colors.${e}.200` }
            },
            title: { fontSize: V.reference, fontWeight: 'medium' },
            description: { fontSize: R.reference, color: 'chakra-subtle-text' },
            number: { fontSize: V.reference },
            step: {
              flexShrink: 0,
              position: 'relative',
              display: 'flex',
              gap: '2',
              '&[data-orientation=horizontal]': { alignItems: 'center' },
              flex: '1',
              '&:last-of-type:not([data-stretch])': { flex: 'initial' }
            },
            icon: { flexShrink: 0, width: F.reference, height: F.reference },
            indicator: {
              flexShrink: 0,
              borderRadius: 'full',
              width: D.reference,
              height: D.reference,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              '&[data-status=active]': { borderWidth: '2px', borderColor: B.reference },
              '&[data-status=complete]': { bg: B.reference, color: 'chakra-inverse-text' },
              '&[data-status=incomplete]': { borderWidth: '2px' }
            },
            separator: {
              bg: 'chakra-border-color',
              flex: '1',
              '&[data-status=complete]': { bg: B.reference },
              '&[data-orientation=horizontal]': { width: '100%', height: '2px', marginStart: '2' },
              '&[data-orientation=vertical]': {
                width: '2px',
                position: 'absolute',
                height: '100%',
                maxHeight: `calc(100% - ${D.reference} - 8px)`,
                top: `calc(${D.reference} + 4px)`,
                insetStart: `calc(${D.reference} / 2 - 1px)`
              }
            }
          })),
          sizes: {
            xs: M({
              stepper: {
                [D.variable]: 'sizes.4',
                [F.variable]: 'sizes.3',
                [V.variable]: 'fontSizes.xs',
                [R.variable]: 'fontSizes.xs'
              }
            }),
            sm: M({
              stepper: {
                [D.variable]: 'sizes.6',
                [F.variable]: 'sizes.4',
                [V.variable]: 'fontSizes.sm',
                [R.variable]: 'fontSizes.xs'
              }
            }),
            md: M({
              stepper: {
                [D.variable]: 'sizes.8',
                [F.variable]: 'sizes.5',
                [V.variable]: 'fontSizes.md',
                [R.variable]: 'fontSizes.sm'
              }
            }),
            lg: M({
              stepper: {
                [D.variable]: 'sizes.10',
                [F.variable]: 'sizes.6',
                [V.variable]: 'fontSizes.lg',
                [R.variable]: 'fontSizes.md'
              }
            })
          },
          defaultProps: { size: 'md', colorScheme: 'blue' }
        }),
        L = r(3500);
      function I(e) {
        let t = (function (e, t = '-') {
          return e.replace(/\s+/g, t);
        })(e.toString());
        return t.includes('\\.')
          ? e
          : Number.isInteger(parseFloat(e.toString()))
            ? e
            : t.replace('.', '\\.');
      }
      function O(e, t) {
        var r, i;
        let n = (function (e, t = '') {
          return `--${(function (e, t = '') {
            return [t, I(e)].filter(Boolean).join('-');
          })(e, t)}`;
        })(e, null == t ? void 0 : t.prefix);
        return {
          variable: n,
          reference:
            ((r =
              'string' == typeof (i = null == t ? void 0 : t.fallback)
                ? i
                : null == i
                  ? void 0
                  : i.reference),
            `var(${I(n)}${r ? `, ${r}` : ''})`)
        };
      }
      var W = r(6200);
      function N(e) {
        return (0, W.Kn)(e) && e.reference ? e.reference : String(e);
      }
      var H = (e, ...t) => t.map(N).join(` ${e} `).replace(/calc/g, ''),
        U = (...e) => `calc(${H('+', ...e)})`,
        q = (...e) => `calc(${H('-', ...e)})`,
        J = (...e) => `calc(${H('*', ...e)})`,
        Y = (...e) => `calc(${H('/', ...e)})`,
        K = (e) => {
          let t = N(e);
          return null == t || Number.isNaN(parseFloat(t))
            ? J(t, -1)
            : String(t).startsWith('-')
              ? String(t).slice(1)
              : `-${t}`;
        },
        X = Object.assign(
          (e) => ({
            add: (...t) => X(U(e, ...t)),
            subtract: (...t) => X(q(e, ...t)),
            multiply: (...t) => X(J(e, ...t)),
            divide: (...t) => X(Y(e, ...t)),
            negate: () => X(K(e)),
            toString: () => e.toString()
          }),
          { add: U, subtract: q, multiply: J, divide: Y, negate: K }
        ),
        { defineMultiStyleConfig: G, definePartsStyle: Z } = (0, z.D)(L.ke.keys),
        Q = O('switch-track-width'),
        ee = O('switch-track-height'),
        et = O('switch-track-diff'),
        er = X.subtract(Q, ee),
        ei = O('switch-thumb-x'),
        en = O('switch-bg'),
        eo = (0, z.k0)((e) => {
          let { colorScheme: t } = e;
          return {
            borderRadius: 'full',
            p: '0.5',
            width: [Q.reference],
            height: [ee.reference],
            transitionProperty: 'common',
            transitionDuration: 'fast',
            [en.variable]: 'colors.gray.300',
            _dark: { [en.variable]: 'colors.whiteAlpha.400' },
            _focusVisible: { boxShadow: 'outline' },
            _disabled: { opacity: 0.4, cursor: 'not-allowed' },
            _checked: {
              [en.variable]: `colors.${t}.500`,
              _dark: { [en.variable]: `colors.${t}.200` }
            },
            bg: en.reference
          };
        }),
        es = (0, z.k0)({
          bg: 'white',
          transitionProperty: 'transform',
          transitionDuration: 'normal',
          borderRadius: 'inherit',
          width: [ee.reference],
          height: [ee.reference],
          _checked: { transform: `translateX(${ei.reference})` }
        }),
        ea = G({
          baseStyle: Z((e) => ({
            container: {
              [et.variable]: er,
              [ei.variable]: et.reference,
              _rtl: { [ei.variable]: X(et).negate().toString() }
            },
            track: eo(e),
            thumb: es
          })),
          sizes: {
            sm: Z({ container: { [Q.variable]: '1.375rem', [ee.variable]: 'sizes.3' } }),
            md: Z({ container: { [Q.variable]: '1.875rem', [ee.variable]: 'sizes.4' } }),
            lg: Z({ container: { [Q.variable]: '2.875rem', [ee.variable]: 'sizes.6' } })
          },
          defaultProps: { size: 'md', colorScheme: 'blue' }
        });
      function el(e, t) {
        return (r) => ('dark' === r.colorMode ? t : e);
      }
      function eu(e) {
        let { orientation: t, vertical: r, horizontal: i } = e;
        return t ? ('vertical' === t ? r : i) : {};
      }
      var { defineMultiStyleConfig: ed, definePartsStyle: eh } = (0, z.D)(L.l1.keys),
        ec = eh({
          table: {
            fontVariantNumeric: 'lining-nums tabular-nums',
            borderCollapse: 'collapse',
            width: 'full'
          },
          th: {
            fontFamily: 'heading',
            fontWeight: 'bold',
            textTransform: 'uppercase',
            letterSpacing: 'wider',
            textAlign: 'start'
          },
          td: { textAlign: 'start' },
          caption: { mt: 4, fontFamily: 'heading', textAlign: 'center', fontWeight: 'medium' }
        }),
        ep = (0, z.k0)({ '&[data-is-numeric=true]': { textAlign: 'end' } }),
        em = ed({
          baseStyle: ec,
          variants: {
            simple: eh((e) => {
              let { colorScheme: t } = e;
              return {
                th: {
                  color: el('gray.600', 'gray.400')(e),
                  borderBottom: '1px',
                  borderColor: el(`${t}.100`, `${t}.700`)(e),
                  ...ep
                },
                td: { borderBottom: '1px', borderColor: el(`${t}.100`, `${t}.700`)(e), ...ep },
                caption: { color: el('gray.600', 'gray.100')(e) },
                tfoot: { tr: { '&:last-of-type': { th: { borderBottomWidth: 0 } } } }
              };
            }),
            striped: eh((e) => {
              let { colorScheme: t } = e;
              return {
                th: {
                  color: el('gray.600', 'gray.400')(e),
                  borderBottom: '1px',
                  borderColor: el(`${t}.100`, `${t}.700`)(e),
                  ...ep
                },
                td: { borderBottom: '1px', borderColor: el(`${t}.100`, `${t}.700`)(e), ...ep },
                caption: { color: el('gray.600', 'gray.100')(e) },
                tbody: {
                  tr: {
                    '&:nth-of-type(odd)': {
                      'th, td': {
                        borderBottomWidth: '1px',
                        borderColor: el(`${t}.100`, `${t}.700`)(e)
                      },
                      td: { background: el(`${t}.100`, `${t}.700`)(e) }
                    }
                  }
                },
                tfoot: { tr: { '&:last-of-type': { th: { borderBottomWidth: 0 } } } }
              };
            }),
            unstyled: (0, z.k0)({})
          },
          sizes: {
            sm: eh({
              th: { px: '4', py: '1', lineHeight: '4', fontSize: 'xs' },
              td: { px: '4', py: '2', fontSize: 'sm', lineHeight: '4' },
              caption: { px: '4', py: '2', fontSize: 'xs' }
            }),
            md: eh({
              th: { px: '6', py: '3', lineHeight: '4', fontSize: 'xs' },
              td: { px: '6', py: '4', lineHeight: '5' },
              caption: { px: '6', py: '2', fontSize: 'sm' }
            }),
            lg: eh({
              th: { px: '8', py: '4', lineHeight: '5', fontSize: 'sm' },
              td: { px: '8', py: '5', lineHeight: '6' },
              caption: { px: '6', py: '2', fontSize: 'md' }
            })
          },
          defaultProps: { variant: 'simple', size: 'md', colorScheme: 'gray' }
        });
      function ef(e, t, r) {
        return Math.min(Math.max(e, r), t);
      }
      class eg extends Error {
        constructor(e) {
          super(`Failed to parse color: "${e}"`);
        }
      }
      function ev(e) {
        if ('string' != typeof e) throw new eg(e);
        if ('transparent' === e.trim().toLowerCase()) return [0, 0, 0, 0];
        let t = e.trim();
        t = eC.test(e)
          ? (function (e) {
              let t =
                ey[
                  (function (e) {
                    let t = 5381,
                      r = e.length;
                    for (; r; ) t = (33 * t) ^ e.charCodeAt(--r);
                    return (t >>> 0) % 2341;
                  })(e.toLowerCase().trim())
                ];
              if (!t) throw new eg(e);
              return `#${t}`;
            })(e)
          : e;
        let r = ew.exec(t);
        if (r) {
          let e = Array.from(r).slice(1);
          return [
            ...e.slice(0, 3).map((e) => parseInt(ex(e, 2), 16)),
            parseInt(ex(e[3] || 'f', 2), 16) / 255
          ];
        }
        let i = eS.exec(t);
        if (i) {
          let e = Array.from(i).slice(1);
          return [...e.slice(0, 3).map((e) => parseInt(e, 16)), parseInt(e[3] || 'ff', 16) / 255];
        }
        let n = ek.exec(t);
        if (n) {
          let e = Array.from(n).slice(1);
          return [...e.slice(0, 3).map((e) => parseInt(e, 10)), parseFloat(e[3] || '1')];
        }
        let o = eP.exec(t);
        if (o) {
          let [t, r, i, n] = Array.from(o).slice(1).map(parseFloat);
          if (ef(0, 100, r) !== r || ef(0, 100, i) !== i) throw new eg(e);
          return [...eE(t, r, i), Number.isNaN(n) ? 1 : n];
        }
        throw new eg(e);
      }
      let eb = (e) => parseInt(e.replace(/_/g, ''), 36),
        ey =
          '1q29ehhb 1n09sgk7 1kl1ekf_ _yl4zsno 16z9eiv3 1p29lhp8 _bd9zg04 17u0____ _iw9zhe5 _to73___ _r45e31e _7l6g016 _jh8ouiv _zn3qba8 1jy4zshs 11u87k0u 1ro9yvyo 1aj3xael 1gz9zjz0 _3w8l4xo 1bf1ekf_ _ke3v___ _4rrkb__ 13j776yz _646mbhl _nrjr4__ _le6mbhl 1n37ehkb _m75f91n _qj3bzfz 1939yygw 11i5z6x8 _1k5f8xs 1509441m 15t5lwgf _ae2th1n _tg1ugcv 1lp1ugcv 16e14up_ _h55rw7n _ny9yavn _7a11xb_ 1ih442g9 _pv442g9 1mv16xof 14e6y7tu 1oo9zkds 17d1cisi _4v9y70f _y98m8kc 1019pq0v 12o9zda8 _348j4f4 1et50i2o _8epa8__ _ts6senj 1o350i2o 1mi9eiuo 1259yrp0 1ln80gnw _632xcoy 1cn9zldc _f29edu4 1n490c8q _9f9ziet 1b94vk74 _m49zkct 1kz6s73a 1eu9dtog _q58s1rz 1dy9sjiq __u89jo3 _aj5nkwg _ld89jo3 13h9z6wx _qa9z2ii _l119xgq _bs5arju 1hj4nwk9 1qt4nwk9 1ge6wau6 14j9zlcw 11p1edc_ _ms1zcxe _439shk6 _jt9y70f _754zsow 1la40eju _oq5p___ _x279qkz 1fa5r3rv _yd2d9ip _424tcku _8y1di2_ _zi2uabw _yy7rn9h 12yz980_ __39ljp6 1b59zg0x _n39zfzp 1fy9zest _b33k___ _hp9wq92 1il50hz4 _io472ub _lj9z3eo 19z9ykg0 _8t8iu3a 12b9bl4a 1ak5yw0o _896v4ku _tb8k8lv _s59zi6t _c09ze0p 1lg80oqn 1id9z8wb _238nba5 1kq6wgdi _154zssg _tn3zk49 _da9y6tc 1sg7cv4f _r12jvtt 1gq5fmkz 1cs9rvci _lp9jn1c _xw1tdnb 13f9zje6 16f6973h _vo7ir40 _bt5arjf _rc45e4t _hr4e100 10v4e100 _hc9zke2 _w91egv_ _sj2r1kk 13c87yx8 _vqpds__ _ni8ggk8 _tj9yqfb 1ia2j4r4 _7x9b10u 1fc9ld4j 1eq9zldr _5j9lhpx _ez9zl6o _md61fzm'
            .split(' ')
            .reduce((e, t) => {
              let r = eb(t.substring(0, 3)),
                i = eb(t.substring(3)).toString(16),
                n = '';
              for (let e = 0; e < 6 - i.length; e++) n += '0';
              return ((e[r] = `${n}${i}`), e);
            }, {}),
        ex = (e, t) =>
          Array.from(Array(t))
            .map(() => e)
            .join(''),
        ew = RegExp(`^#${ex('([a-f0-9])', 3)}([a-f0-9])?$`, 'i'),
        eS = RegExp(`^#${ex('([a-f0-9]{2})', 3)}([a-f0-9]{2})?$`, 'i'),
        ek = RegExp(
          `^rgba?\\(\\s*(\\d+)\\s*${ex(',\\s*(\\d+)\\s*', 2)}(?:,\\s*([\\d.]+))?\\s*\\)$`,
          'i'
        ),
        eP = /^hsla?\(\s*([\d.]+)\s*,\s*([\d.]+)%\s*,\s*([\d.]+)%(?:\s*,\s*([\d.]+))?\s*\)$/i,
        eC = /^[a-z]+$/i,
        eA = (e) => Math.round(255 * e),
        eE = (e, t, r) => {
          let i = r / 100;
          if (0 === t) return [i, i, i].map(eA);
          let n = (((e % 360) + 360) % 360) / 60,
            o = (t / 100) * (1 - Math.abs(2 * i - 1)),
            s = o * (1 - Math.abs((n % 2) - 1)),
            a = 0,
            l = 0,
            u = 0;
          n >= 0 && n < 1
            ? ((a = o), (l = s))
            : n >= 1 && n < 2
              ? ((a = s), (l = o))
              : n >= 2 && n < 3
                ? ((l = o), (u = s))
                : n >= 3 && n < 4
                  ? ((l = s), (u = o))
                  : n >= 4 && n < 5
                    ? ((a = s), (u = o))
                    : n >= 5 && n < 6 && ((a = o), (u = s));
          let d = i - o / 2;
          return [a + d, l + d, u + d].map(eA);
        };
      var eT = (e) => 0 === Object.keys(e).length,
        e_ = (e, t, r) => {
          let i = (function (e, t, r, i, n) {
            for (t = t.split ? t.split('.') : t, i = 0; i < t.length; i++) e = e ? e[t[i]] : void 0;
            return void 0 === e ? r : e;
          })(e, `colors.${t}`, t);
          try {
            return (
              !(function (e) {
                let [t, r, i, n] = ev(e),
                  o = (e) => {
                    let t = ef(0, 255, e).toString(16);
                    return 1 === t.length ? `0${t}` : t;
                  };
                (o(t), o(r), o(i), n < 1 && o(Math.round(255 * n)));
              })(i),
              i
            );
          } catch {
            return null != r ? r : '#000000';
          }
        },
        ez = (e) => {
          let [t, r, i] = ev(e);
          return (299 * t + 587 * r + 114 * i) / 1e3;
        },
        ej = (e) => (t) => (128 > ez(e_(t, e)) ? 'dark' : 'light'),
        eM = (e) => (t) => 'dark' === ej(e)(t),
        eD = (e, t) => (r) =>
          (function (e, t) {
            var r;
            let [i, n, o, s] = ev(e);
            return (
              (r = s - t),
              `rgba(${ef(0, 255, i).toFixed()}, ${ef(0, 255, n).toFixed()}, ${ef(0, 255, o).toFixed()}, ${parseFloat(ef(0, 1, r).toFixed(3))})`
            );
          })(e_(r, e), 1 - t);
      function eF(e = '1rem', t = 'rgba(255, 255, 255, 0.15)') {
        return {
          backgroundImage: `linear-gradient(
    45deg,
    ${t} 25%,
    transparent 25%,
    transparent 50%,
    ${t} 50%,
    ${t} 75%,
    transparent 75%,
    transparent
  )`,
          backgroundSize: `${e} ${e}`
        };
      }
      var eV = () =>
          `#${Math.floor(16777215 * Math.random())
            .toString(16)
            .padEnd(6, '0')}`,
        eR = (0, z.gJ)('tabs-color'),
        eB = (0, z.gJ)('tabs-bg'),
        e$ = (0, z.gJ)('tabs-border-color'),
        { defineMultiStyleConfig: eL, definePartsStyle: eI } = (0, z.D)(L.nw.keys),
        eO = (0, z.k0)((e) => {
          let { orientation: t } = e;
          return { display: 'vertical' === t ? 'flex' : 'block' };
        }),
        eW = (0, z.k0)((e) => {
          let { isFitted: t } = e;
          return {
            flex: t ? 1 : void 0,
            transitionProperty: 'common',
            transitionDuration: 'normal',
            _focusVisible: { zIndex: 1, boxShadow: 'outline' },
            _disabled: { cursor: 'not-allowed', opacity: 0.4 }
          };
        }),
        eN = (0, z.k0)((e) => {
          let { align: t = 'start', orientation: r } = e;
          return {
            justifyContent: { end: 'flex-end', center: 'center', start: 'flex-start' }[t],
            flexDirection: 'vertical' === r ? 'column' : 'row'
          };
        }),
        eH = (0, z.k0)({ p: 4 }),
        eU = eL({
          baseStyle: eI((e) => ({ root: eO(e), tab: eW(e), tablist: eN(e), tabpanel: eH })),
          sizes: {
            sm: eI({ tab: { py: 1, px: 4, fontSize: 'sm' } }),
            md: eI({ tab: { fontSize: 'md', py: 2, px: 4 } }),
            lg: eI({ tab: { fontSize: 'lg', py: 3, px: 4 } })
          },
          variants: {
            line: eI((e) => {
              let { colorScheme: t, orientation: r } = e,
                i = 'vertical' === r,
                n = i ? 'borderStart' : 'borderBottom';
              return {
                tablist: { [n]: '2px solid', borderColor: 'inherit' },
                tab: {
                  [n]: '2px solid',
                  borderColor: 'transparent',
                  [i ? 'marginStart' : 'marginBottom']: '-2px',
                  _selected: {
                    [eR.variable]: `colors.${t}.600`,
                    _dark: { [eR.variable]: `colors.${t}.300` },
                    borderColor: 'currentColor'
                  },
                  _active: {
                    [eB.variable]: 'colors.gray.200',
                    _dark: { [eB.variable]: 'colors.whiteAlpha.300' }
                  },
                  _disabled: { _active: { bg: 'none' } },
                  color: eR.reference,
                  bg: eB.reference
                }
              };
            }),
            enclosed: eI((e) => {
              let { colorScheme: t } = e;
              return {
                tab: {
                  borderTopRadius: 'md',
                  border: '1px solid',
                  borderColor: 'transparent',
                  mb: '-1px',
                  [e$.variable]: 'transparent',
                  _selected: {
                    [eR.variable]: `colors.${t}.600`,
                    [e$.variable]: 'colors.white',
                    _dark: { [eR.variable]: `colors.${t}.300`, [e$.variable]: 'colors.gray.800' },
                    borderColor: 'inherit',
                    borderBottomColor: e$.reference
                  },
                  color: eR.reference
                },
                tablist: { mb: '-1px', borderBottom: '1px solid', borderColor: 'inherit' }
              };
            }),
            'enclosed-colored': eI((e) => {
              let { colorScheme: t } = e;
              return {
                tab: {
                  border: '1px solid',
                  borderColor: 'inherit',
                  [eB.variable]: 'colors.gray.50',
                  _dark: { [eB.variable]: 'colors.whiteAlpha.50' },
                  mb: '-1px',
                  _notLast: { marginEnd: '-1px' },
                  _selected: {
                    [eB.variable]: 'colors.white',
                    [eR.variable]: `colors.${t}.600`,
                    _dark: { [eB.variable]: 'colors.gray.800', [eR.variable]: `colors.${t}.300` },
                    borderColor: 'inherit',
                    borderTopColor: 'currentColor',
                    borderBottomColor: 'transparent'
                  },
                  color: eR.reference,
                  bg: eB.reference
                },
                tablist: { mb: '-1px', borderBottom: '1px solid', borderColor: 'inherit' }
              };
            }),
            'soft-rounded': eI((e) => {
              let { colorScheme: t, theme: r } = e;
              return {
                tab: {
                  borderRadius: 'full',
                  fontWeight: 'semibold',
                  color: 'gray.600',
                  _selected: { color: e_(r, `${t}.700`), bg: e_(r, `${t}.100`) }
                }
              };
            }),
            'solid-rounded': eI((e) => {
              let { colorScheme: t } = e;
              return {
                tab: {
                  borderRadius: 'full',
                  fontWeight: 'semibold',
                  [eR.variable]: 'colors.gray.600',
                  _dark: { [eR.variable]: 'inherit' },
                  _selected: {
                    [eR.variable]: 'colors.white',
                    [eB.variable]: `colors.${t}.600`,
                    _dark: { [eR.variable]: 'colors.gray.800', [eB.variable]: `colors.${t}.300` }
                  },
                  color: eR.reference,
                  bg: eB.reference
                }
              };
            }),
            unstyled: eI({})
          },
          defaultProps: { size: 'md', variant: 'line', colorScheme: 'blue' }
        }),
        eq = (0, z._6)('badge', ['bg', 'color', 'shadow']),
        eJ = (0, z.k0)({
          px: 1,
          textTransform: 'uppercase',
          fontSize: 'xs',
          borderRadius: 'sm',
          fontWeight: 'bold',
          bg: eq.bg.reference,
          color: eq.color.reference,
          boxShadow: eq.shadow.reference
        }),
        eY = (0, z.k0)((e) => {
          let { colorScheme: t, theme: r } = e,
            i = eD(`${t}.500`, 0.6)(r);
          return {
            [eq.bg.variable]: `colors.${t}.500`,
            [eq.color.variable]: 'colors.white',
            _dark: { [eq.bg.variable]: i, [eq.color.variable]: 'colors.whiteAlpha.800' }
          };
        }),
        eK = (0, z.k0)((e) => {
          let { colorScheme: t, theme: r } = e,
            i = eD(`${t}.200`, 0.16)(r);
          return {
            [eq.bg.variable]: `colors.${t}.100`,
            [eq.color.variable]: `colors.${t}.800`,
            _dark: { [eq.bg.variable]: i, [eq.color.variable]: `colors.${t}.200` }
          };
        }),
        eX = (0, z.k0)((e) => {
          let { colorScheme: t, theme: r } = e,
            i = eD(`${t}.200`, 0.8)(r);
          return {
            [eq.color.variable]: `colors.${t}.500`,
            _dark: { [eq.color.variable]: i },
            [eq.shadow.variable]: `inset 0 0 0px 1px ${eq.color.reference}`
          };
        }),
        eG = (0, z.fj)({
          baseStyle: eJ,
          variants: { solid: eY, subtle: eK, outline: eX },
          defaultProps: { variant: 'subtle', colorScheme: 'gray' }
        }),
        { defineMultiStyleConfig: eZ, definePartsStyle: eQ } = (0, z.D)(L.VM.keys),
        e0 = (0, z.gJ)('tag-bg'),
        e1 = (0, z.gJ)('tag-color'),
        e5 = (0, z.gJ)('tag-shadow'),
        e2 = (0, z.gJ)('tag-min-height'),
        e3 = (0, z.gJ)('tag-min-width'),
        e4 = (0, z.gJ)('tag-font-size'),
        e6 = (0, z.gJ)('tag-padding-inline'),
        e9 = eQ({
          container: (0, z.k0)({
            fontWeight: 'medium',
            lineHeight: 1.2,
            outline: 0,
            [e1.variable]: eq.color.reference,
            [e0.variable]: eq.bg.reference,
            [e5.variable]: eq.shadow.reference,
            color: e1.reference,
            bg: e0.reference,
            boxShadow: e5.reference,
            borderRadius: 'md',
            minH: e2.reference,
            minW: e3.reference,
            fontSize: e4.reference,
            px: e6.reference,
            _focusVisible: { [e5.variable]: 'shadows.outline' }
          }),
          label: (0, z.k0)({ lineHeight: 1.2, overflow: 'visible' }),
          closeButton: (0, z.k0)({
            fontSize: 'lg',
            w: '5',
            h: '5',
            transitionProperty: 'common',
            transitionDuration: 'normal',
            borderRadius: 'full',
            marginStart: '1.5',
            marginEnd: '-1',
            opacity: 0.5,
            _disabled: { opacity: 0.4 },
            _focusVisible: { boxShadow: 'outline', bg: 'rgba(0, 0, 0, 0.14)' },
            _hover: { opacity: 0.8 },
            _active: { opacity: 1 }
          })
        }),
        e8 = {
          sm: eQ({
            container: {
              [e2.variable]: 'sizes.5',
              [e3.variable]: 'sizes.5',
              [e4.variable]: 'fontSizes.xs',
              [e6.variable]: 'space.2'
            },
            closeButton: { marginEnd: '-2px', marginStart: '0.35rem' }
          }),
          md: eQ({
            container: {
              [e2.variable]: 'sizes.6',
              [e3.variable]: 'sizes.6',
              [e4.variable]: 'fontSizes.sm',
              [e6.variable]: 'space.2'
            }
          }),
          lg: eQ({
            container: {
              [e2.variable]: 'sizes.8',
              [e3.variable]: 'sizes.8',
              [e4.variable]: 'fontSizes.md',
              [e6.variable]: 'space.3'
            }
          })
        },
        e7 = eZ({
          variants: {
            subtle: eQ((e) => {
              var t;
              return { container: null == (t = eG.variants) ? void 0 : t.subtle(e) };
            }),
            solid: eQ((e) => {
              var t;
              return { container: null == (t = eG.variants) ? void 0 : t.solid(e) };
            }),
            outline: eQ((e) => {
              var t;
              return { container: null == (t = eG.variants) ? void 0 : t.outline(e) };
            })
          },
          baseStyle: e9,
          sizes: e8,
          defaultProps: { size: 'md', variant: 'subtle', colorScheme: 'gray' }
        }),
        { definePartsStyle: te, defineMultiStyleConfig: tt } = (0, z.D)(L.X.keys),
        tr = (0, z.gJ)('input-height'),
        ti = (0, z.gJ)('input-font-size'),
        tn = (0, z.gJ)('input-padding'),
        to = (0, z.gJ)('input-border-radius'),
        ts = te({
          addon: {
            height: tr.reference,
            fontSize: ti.reference,
            px: tn.reference,
            borderRadius: to.reference
          },
          field: {
            width: '100%',
            height: tr.reference,
            fontSize: ti.reference,
            px: tn.reference,
            borderRadius: to.reference,
            minWidth: 0,
            outline: 0,
            position: 'relative',
            appearance: 'none',
            transitionProperty: 'common',
            transitionDuration: 'normal',
            _disabled: { opacity: 0.4, cursor: 'not-allowed' }
          }
        }),
        ta = {
          lg: (0, z.k0)({
            [ti.variable]: 'fontSizes.lg',
            [tn.variable]: 'space.4',
            [to.variable]: 'radii.md',
            [tr.variable]: 'sizes.12'
          }),
          md: (0, z.k0)({
            [ti.variable]: 'fontSizes.md',
            [tn.variable]: 'space.4',
            [to.variable]: 'radii.md',
            [tr.variable]: 'sizes.10'
          }),
          sm: (0, z.k0)({
            [ti.variable]: 'fontSizes.sm',
            [tn.variable]: 'space.3',
            [to.variable]: 'radii.sm',
            [tr.variable]: 'sizes.8'
          }),
          xs: (0, z.k0)({
            [ti.variable]: 'fontSizes.xs',
            [tn.variable]: 'space.2',
            [to.variable]: 'radii.sm',
            [tr.variable]: 'sizes.6'
          })
        };
      function tl(e) {
        let { focusBorderColor: t, errorBorderColor: r } = e;
        return {
          focusBorderColor: t || el('blue.500', 'blue.300')(e),
          errorBorderColor: r || el('red.500', 'red.300')(e)
        };
      }
      var tu = tt({
          baseStyle: ts,
          sizes: {
            lg: te({ field: ta.lg, group: ta.lg }),
            md: te({ field: ta.md, group: ta.md }),
            sm: te({ field: ta.sm, group: ta.sm }),
            xs: te({ field: ta.xs, group: ta.xs })
          },
          variants: {
            outline: te((e) => {
              let { theme: t } = e,
                { focusBorderColor: r, errorBorderColor: i } = tl(e);
              return {
                field: {
                  border: '1px solid',
                  borderColor: 'inherit',
                  bg: 'inherit',
                  _hover: { borderColor: el('gray.300', 'whiteAlpha.400')(e) },
                  _readOnly: { boxShadow: 'none !important', userSelect: 'all' },
                  _invalid: { borderColor: e_(t, i), boxShadow: `0 0 0 1px ${e_(t, i)}` },
                  _focusVisible: {
                    zIndex: 1,
                    borderColor: e_(t, r),
                    boxShadow: `0 0 0 1px ${e_(t, r)}`
                  }
                },
                addon: {
                  border: '1px solid',
                  borderColor: el('inherit', 'whiteAlpha.50')(e),
                  bg: el('gray.100', 'whiteAlpha.300')(e)
                }
              };
            }),
            filled: te((e) => {
              let { theme: t } = e,
                { focusBorderColor: r, errorBorderColor: i } = tl(e);
              return {
                field: {
                  border: '2px solid',
                  borderColor: 'transparent',
                  bg: el('gray.100', 'whiteAlpha.50')(e),
                  _hover: { bg: el('gray.200', 'whiteAlpha.100')(e) },
                  _readOnly: { boxShadow: 'none !important', userSelect: 'all' },
                  _invalid: { borderColor: e_(t, i) },
                  _focusVisible: { bg: 'transparent', borderColor: e_(t, r) }
                },
                addon: {
                  border: '2px solid',
                  borderColor: 'transparent',
                  bg: el('gray.100', 'whiteAlpha.50')(e)
                }
              };
            }),
            flushed: te((e) => {
              let { theme: t } = e,
                { focusBorderColor: r, errorBorderColor: i } = tl(e);
              return {
                field: {
                  borderBottom: '1px solid',
                  borderColor: 'inherit',
                  borderRadius: '0',
                  px: '0',
                  bg: 'transparent',
                  _readOnly: { boxShadow: 'none !important', userSelect: 'all' },
                  _invalid: { borderColor: e_(t, i), boxShadow: `0px 1px 0px 0px ${e_(t, i)}` },
                  _focusVisible: { borderColor: e_(t, r), boxShadow: `0px 1px 0px 0px ${e_(t, r)}` }
                },
                addon: {
                  borderBottom: '2px solid',
                  borderColor: 'inherit',
                  borderRadius: '0',
                  px: '0',
                  bg: 'transparent'
                }
              };
            }),
            unstyled: te({
              field: { bg: 'transparent', px: '0', height: 'auto' },
              addon: { bg: 'transparent', px: '0', height: 'auto' }
            })
          },
          defaultProps: { size: 'md', variant: 'outline' }
        }),
        td = (0, z.k0)({
          ...(null == (i = tu.baseStyle) ? void 0 : i.field),
          paddingY: '2',
          minHeight: '20',
          lineHeight: 'short',
          verticalAlign: 'top'
        }),
        th = {
          outline: (0, z.k0)((e) => {
            var t, r;
            return null != (r = null == (t = tu.variants) ? void 0 : t.outline(e).field) ? r : {};
          }),
          flushed: (0, z.k0)((e) => {
            var t, r;
            return null != (r = null == (t = tu.variants) ? void 0 : t.flushed(e).field) ? r : {};
          }),
          filled: (0, z.k0)((e) => {
            var t, r;
            return null != (r = null == (t = tu.variants) ? void 0 : t.filled(e).field) ? r : {};
          }),
          unstyled: null != (o = null == (n = tu.variants) ? void 0 : n.unstyled.field) ? o : {}
        },
        tc = {
          xs: null != (a = null == (s = tu.sizes) ? void 0 : s.xs.field) ? a : {},
          sm: null != (u = null == (l = tu.sizes) ? void 0 : l.sm.field) ? u : {},
          md: null != (h = null == (d = tu.sizes) ? void 0 : d.md.field) ? h : {},
          lg: null != (p = null == (c = tu.sizes) ? void 0 : c.lg.field) ? p : {}
        },
        tp = (0, z.fj)({
          baseStyle: td,
          sizes: tc,
          variants: th,
          defaultProps: { size: 'md', variant: 'outline' }
        }),
        tm = O('tooltip-bg'),
        tf = O('tooltip-fg'),
        tg = O('popper-arrow-bg'),
        tv = (0, z.k0)({
          bg: tm.reference,
          color: tf.reference,
          [tm.variable]: 'colors.gray.700',
          [tf.variable]: 'colors.whiteAlpha.900',
          _dark: { [tm.variable]: 'colors.gray.300', [tf.variable]: 'colors.gray.900' },
          [tg.variable]: tm.reference,
          px: '2',
          py: '0.5',
          borderRadius: 'sm',
          fontWeight: 'medium',
          fontSize: 'sm',
          boxShadow: 'md',
          maxW: 'xs',
          zIndex: 'tooltip'
        }),
        tb = (0, z.fj)({ baseStyle: tv }),
        { defineMultiStyleConfig: ty, definePartsStyle: tx } = (0, z.D)(L.Eb.keys),
        tw = (0, z.k0)((e) => {
          let { colorScheme: t, theme: r, isIndeterminate: i, hasStripe: n } = e,
            o = el(eF(), eF('1rem', 'rgba(0,0,0,0.1)'))(e),
            s = el(`${t}.500`, `${t}.200`)(e),
            a = `linear-gradient(
    to right,
    transparent 0%,
    ${e_(r, s)} 50%,
    transparent 100%
  )`;
          return { ...(!i && n && o), ...(i ? { bgImage: a } : { bgColor: s }) };
        }),
        tS = (0, z.k0)({ lineHeight: '1', fontSize: '0.25em', fontWeight: 'bold', color: 'white' }),
        tk = (0, z.k0)((e) => ({ bg: el('gray.100', 'whiteAlpha.300')(e) })),
        tP = (0, z.k0)((e) => ({
          transitionProperty: 'common',
          transitionDuration: 'slow',
          ...tw(e)
        })),
        tC = tx((e) => ({ label: tS, filledTrack: tP(e), track: tk(e) })),
        tA = ty({
          sizes: {
            xs: tx({ track: { h: '1' } }),
            sm: tx({ track: { h: '2' } }),
            md: tx({ track: { h: '3' } }),
            lg: tx({ track: { h: '4' } })
          },
          baseStyle: tC,
          defaultProps: { size: 'md', colorScheme: 'blue' }
        }),
        tE = (e) => 'function' == typeof e;
      function tT(e, ...t) {
        return tE(e) ? e(...t) : e;
      }
      var { definePartsStyle: t_, defineMultiStyleConfig: tz } = (0, z.D)(L.TB.keys),
        tj = (0, z.gJ)('checkbox-size'),
        tM = (0, z.k0)((e) => {
          let { colorScheme: t } = e;
          return {
            w: tj.reference,
            h: tj.reference,
            transitionProperty: 'box-shadow',
            transitionDuration: 'normal',
            border: '2px solid',
            borderRadius: 'sm',
            borderColor: 'inherit',
            color: 'white',
            _checked: {
              bg: el(`${t}.500`, `${t}.200`)(e),
              borderColor: el(`${t}.500`, `${t}.200`)(e),
              color: el('white', 'gray.900')(e),
              _hover: {
                bg: el(`${t}.600`, `${t}.300`)(e),
                borderColor: el(`${t}.600`, `${t}.300`)(e)
              },
              _disabled: {
                borderColor: el('gray.200', 'transparent')(e),
                bg: el('gray.200', 'whiteAlpha.300')(e),
                color: el('gray.500', 'whiteAlpha.500')(e)
              }
            },
            _indeterminate: {
              bg: el(`${t}.500`, `${t}.200`)(e),
              borderColor: el(`${t}.500`, `${t}.200`)(e),
              color: el('white', 'gray.900')(e)
            },
            _disabled: {
              bg: el('gray.100', 'whiteAlpha.100')(e),
              borderColor: el('gray.100', 'transparent')(e)
            },
            _focusVisible: { boxShadow: 'outline' },
            _invalid: { borderColor: el('red.500', 'red.300')(e) }
          };
        }),
        tD = (0, z.k0)({ _disabled: { cursor: 'not-allowed' } }),
        tF = (0, z.k0)({ userSelect: 'none', _disabled: { opacity: 0.4 } }),
        tV = (0, z.k0)({ transitionProperty: 'transform', transitionDuration: 'normal' }),
        tR = tz({
          baseStyle: t_((e) => ({ icon: tV, container: tD, control: tT(tM, e), label: tF })),
          sizes: {
            sm: t_({
              control: { [tj.variable]: 'sizes.3' },
              label: { fontSize: 'sm' },
              icon: { fontSize: '3xs' }
            }),
            md: t_({
              control: { [tj.variable]: 'sizes.4' },
              label: { fontSize: 'md' },
              icon: { fontSize: '2xs' }
            }),
            lg: t_({
              control: { [tj.variable]: 'sizes.5' },
              label: { fontSize: 'lg' },
              icon: { fontSize: '2xs' }
            })
          },
          defaultProps: { size: 'md', colorScheme: 'blue' }
        }),
        { defineMultiStyleConfig: tB, definePartsStyle: t$ } = (0, z.D)(L.f2.keys),
        tL = (0, z.k0)((e) => {
          var t;
          let r = null == (t = tT(tR.baseStyle, e)) ? void 0 : t.control;
          return {
            ...r,
            borderRadius: 'full',
            _checked: {
              ...(null == r ? void 0 : r._checked),
              _before: {
                content: '""',
                display: 'inline-block',
                pos: 'relative',
                w: '50%',
                h: '50%',
                borderRadius: '50%',
                bg: 'currentColor'
              }
            }
          };
        }),
        tI = tB({
          baseStyle: t$((e) => {
            var t, r;
            return {
              label: null == (t = tR.baseStyle) ? void 0 : t.call(tR, e).label,
              container: null == (r = tR.baseStyle) ? void 0 : r.call(tR, e).container,
              control: tL(e)
            };
          }),
          sizes: {
            md: t$({ control: { w: '4', h: '4' }, label: { fontSize: 'md' } }),
            lg: t$({ control: { w: '5', h: '5' }, label: { fontSize: 'lg' } }),
            sm: t$({ control: { width: '3', height: '3' }, label: { fontSize: 'sm' } })
          },
          defaultProps: { size: 'md', colorScheme: 'blue' }
        }),
        { defineMultiStyleConfig: tO, definePartsStyle: tW } = (0, z.D)(L.nY.keys),
        tN = (0, z.gJ)('select-bg'),
        tH = tW({
          field: (0, z.k0)({
            ...(null == (m = tu.baseStyle) ? void 0 : m.field),
            appearance: 'none',
            paddingBottom: '1px',
            lineHeight: 'normal',
            bg: tN.reference,
            [tN.variable]: 'colors.white',
            _dark: { [tN.variable]: 'colors.gray.700' },
            '> option, > optgroup': { bg: tN.reference }
          }),
          icon: (0, z.k0)({
            width: '6',
            height: '100%',
            insetEnd: '2',
            position: 'relative',
            color: 'currentColor',
            fontSize: 'xl',
            _disabled: { opacity: 0.5 }
          })
        }),
        tU = (0, z.k0)({ paddingInlineEnd: '8' }),
        tq = tO({
          baseStyle: tH,
          sizes: {
            lg: {
              ...(null == (f = tu.sizes) ? void 0 : f.lg),
              field: { ...(null == (g = tu.sizes) ? void 0 : g.lg.field), ...tU }
            },
            md: {
              ...(null == (v = tu.sizes) ? void 0 : v.md),
              field: { ...(null == (b = tu.sizes) ? void 0 : b.md.field), ...tU }
            },
            sm: {
              ...(null == (y = tu.sizes) ? void 0 : y.sm),
              field: { ...(null == (x = tu.sizes) ? void 0 : x.sm.field), ...tU }
            },
            xs: {
              ...(null == (w = tu.sizes) ? void 0 : w.xs),
              field: { ...(null == (S = tu.sizes) ? void 0 : S.xs.field), ...tU },
              icon: { insetEnd: '1' }
            }
          },
          variants: tu.variants,
          defaultProps: tu.defaultProps
        }),
        tJ = (0, z.gJ)('skeleton-start-color'),
        tY = (0, z.gJ)('skeleton-end-color'),
        tK = (0, z.k0)({
          [tJ.variable]: 'colors.gray.100',
          [tY.variable]: 'colors.gray.400',
          _dark: { [tJ.variable]: 'colors.gray.800', [tY.variable]: 'colors.gray.600' },
          background: tJ.reference,
          borderColor: tY.reference,
          opacity: 0.7,
          borderRadius: 'sm'
        }),
        tX = (0, z.fj)({ baseStyle: tK }),
        tG = (0, z.gJ)('skip-link-bg'),
        tZ = (0, z.k0)({
          borderRadius: 'md',
          fontWeight: 'semibold',
          _focusVisible: {
            boxShadow: 'outline',
            padding: '4',
            position: 'fixed',
            top: '6',
            insetStart: '6',
            [tG.variable]: 'colors.white',
            _dark: { [tG.variable]: 'colors.gray.700' },
            bg: tG.reference
          }
        }),
        tQ = (0, z.fj)({ baseStyle: tZ }),
        { defineMultiStyleConfig: t0, definePartsStyle: t1 } = (0, z.D)(L.q0.keys),
        t5 = (0, z.gJ)('slider-thumb-size'),
        t2 = (0, z.gJ)('slider-track-size'),
        t3 = (0, z.gJ)('slider-bg'),
        t4 = (0, z.k0)((e) => {
          let { orientation: t } = e;
          return {
            display: 'inline-block',
            position: 'relative',
            cursor: 'pointer',
            _disabled: { opacity: 0.6, cursor: 'default', pointerEvents: 'none' },
            ...eu({ orientation: t, vertical: { h: '100%' }, horizontal: { w: '100%' } })
          };
        }),
        t6 = (0, z.k0)((e) => ({
          ...eu({
            orientation: e.orientation,
            horizontal: { h: t2.reference },
            vertical: { w: t2.reference }
          }),
          overflow: 'hidden',
          borderRadius: 'sm',
          [t3.variable]: 'colors.gray.200',
          _dark: { [t3.variable]: 'colors.whiteAlpha.200' },
          _disabled: {
            [t3.variable]: 'colors.gray.300',
            _dark: { [t3.variable]: 'colors.whiteAlpha.300' }
          },
          bg: t3.reference
        })),
        t9 = (0, z.k0)((e) => {
          let { orientation: t } = e;
          return {
            ...eu({
              orientation: t,
              vertical: {
                left: '50%',
                transform: 'translateX(-50%)',
                _active: { transform: 'translateX(-50%) scale(1.15)' }
              },
              horizontal: {
                top: '50%',
                transform: 'translateY(-50%)',
                _active: { transform: 'translateY(-50%) scale(1.15)' }
              }
            }),
            w: t5.reference,
            h: t5.reference,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'absolute',
            outline: 0,
            zIndex: 1,
            borderRadius: 'full',
            bg: 'white',
            boxShadow: 'base',
            border: '1px solid',
            borderColor: 'transparent',
            transitionProperty: 'transform',
            transitionDuration: 'normal',
            _focusVisible: { boxShadow: 'outline' },
            _disabled: { bg: 'gray.300' }
          };
        }),
        t8 = (0, z.k0)((e) => {
          let { colorScheme: t } = e;
          return {
            width: 'inherit',
            height: 'inherit',
            [t3.variable]: `colors.${t}.500`,
            _dark: { [t3.variable]: `colors.${t}.200` },
            bg: t3.reference
          };
        }),
        t7 = t0({
          baseStyle: t1((e) => ({
            container: t4(e),
            track: t6(e),
            thumb: t9(e),
            filledTrack: t8(e)
          })),
          sizes: {
            lg: t1({ container: { [t5.variable]: 'sizes.4', [t2.variable]: 'sizes.1' } }),
            md: t1({ container: { [t5.variable]: 'sizes.3.5', [t2.variable]: 'sizes.1' } }),
            sm: t1({ container: { [t5.variable]: 'sizes.2.5', [t2.variable]: 'sizes.0.5' } })
          },
          defaultProps: { size: 'md', colorScheme: 'blue' }
        }),
        re = O('spinner-size'),
        rt = (0, z.k0)({ width: [re.reference], height: [re.reference] }),
        rr = {
          xs: (0, z.k0)({ [re.variable]: 'sizes.3' }),
          sm: (0, z.k0)({ [re.variable]: 'sizes.4' }),
          md: (0, z.k0)({ [re.variable]: 'sizes.6' }),
          lg: (0, z.k0)({ [re.variable]: 'sizes.8' }),
          xl: (0, z.k0)({ [re.variable]: 'sizes.12' })
        },
        ri = (0, z.fj)({ baseStyle: rt, sizes: rr, defaultProps: { size: 'md' } }),
        { defineMultiStyleConfig: rn, definePartsStyle: ro } = (0, z.D)(L.aj.keys),
        rs = rn({
          baseStyle: ro({
            container: {},
            label: (0, z.k0)({ fontWeight: 'medium' }),
            helpText: (0, z.k0)({ opacity: 0.8, marginBottom: '2' }),
            number: (0, z.k0)({ verticalAlign: 'baseline', fontWeight: 'semibold' }),
            icon: (0, z.k0)({ marginEnd: 1, w: '3.5', h: '3.5', verticalAlign: 'middle' })
          }),
          sizes: {
            md: ro({
              label: { fontSize: 'sm' },
              helpText: { fontSize: 'sm' },
              number: { fontSize: '2xl' }
            })
          },
          defaultProps: { size: 'md' }
        }),
        ra = (0, z.gJ)('kbd-bg'),
        rl = (0, z.k0)({
          [ra.variable]: 'colors.gray.100',
          _dark: { [ra.variable]: 'colors.whiteAlpha.100' },
          bg: ra.reference,
          borderRadius: 'md',
          borderWidth: '1px',
          borderBottomWidth: '3px',
          fontSize: '0.8em',
          fontWeight: 'bold',
          lineHeight: 'normal',
          px: '0.4em',
          whiteSpace: 'nowrap'
        }),
        ru = (0, z.fj)({ baseStyle: rl }),
        rd = (0, z.k0)({
          transitionProperty: 'common',
          transitionDuration: 'fast',
          transitionTimingFunction: 'ease-out',
          cursor: 'pointer',
          textDecoration: 'none',
          outline: 'none',
          color: 'inherit',
          _hover: { textDecoration: 'underline' },
          _focusVisible: { boxShadow: 'outline' }
        }),
        rh = (0, z.fj)({ baseStyle: rd }),
        { defineMultiStyleConfig: rc, definePartsStyle: rp } = (0, z.D)(L.vE.keys),
        rm = rc({
          baseStyle: rp({
            icon: (0, z.k0)({ marginEnd: '2', display: 'inline', verticalAlign: 'text-bottom' })
          })
        }),
        { defineMultiStyleConfig: rf, definePartsStyle: rg } = (0, z.D)(L.rk.keys),
        rv = (0, z.gJ)('menu-bg'),
        rb = (0, z.gJ)('menu-shadow'),
        ry = (0, z.k0)({
          [rv.variable]: '#fff',
          [rb.variable]: 'shadows.sm',
          _dark: { [rv.variable]: 'colors.gray.700', [rb.variable]: 'shadows.dark-lg' },
          color: 'inherit',
          minW: '3xs',
          py: '2',
          zIndex: 1,
          borderRadius: 'md',
          borderWidth: '1px',
          bg: rv.reference,
          boxShadow: rb.reference
        }),
        rx = (0, z.k0)({
          py: '1.5',
          px: '3',
          transitionProperty: 'background',
          transitionDuration: 'ultra-fast',
          transitionTimingFunction: 'ease-in',
          _focus: {
            [rv.variable]: 'colors.gray.100',
            _dark: { [rv.variable]: 'colors.whiteAlpha.100' }
          },
          _active: {
            [rv.variable]: 'colors.gray.200',
            _dark: { [rv.variable]: 'colors.whiteAlpha.200' }
          },
          _expanded: {
            [rv.variable]: 'colors.gray.100',
            _dark: { [rv.variable]: 'colors.whiteAlpha.100' }
          },
          _disabled: { opacity: 0.4, cursor: 'not-allowed' },
          bg: rv.reference
        }),
        rw = (0, z.k0)({ mx: 4, my: 2, fontWeight: 'semibold', fontSize: 'sm' }),
        rS = (0, z.k0)({
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0
        }),
        rk = (0, z.k0)({ opacity: 0.6 }),
        rP = (0, z.k0)({
          border: 0,
          borderBottom: '1px solid',
          borderColor: 'inherit',
          my: '2',
          opacity: 0.6
        }),
        rC = rf({
          baseStyle: rg({
            button: (0, z.k0)({ transitionProperty: 'common', transitionDuration: 'normal' }),
            list: ry,
            item: rx,
            groupTitle: rw,
            icon: rS,
            command: rk,
            divider: rP
          })
        }),
        { defineMultiStyleConfig: rA, definePartsStyle: rE } = (0, z.D)(L.wl.keys),
        rT = (0, z.gJ)('modal-bg'),
        r_ = (0, z.gJ)('modal-shadow'),
        rz = (0, z.k0)({ bg: 'blackAlpha.600', zIndex: 'modal' }),
        rj = (0, z.k0)((e) => {
          let { isCentered: t, scrollBehavior: r } = e;
          return {
            display: 'flex',
            zIndex: 'modal',
            justifyContent: 'center',
            alignItems: t ? 'center' : 'flex-start',
            overflow: 'inside' === r ? 'hidden' : 'auto',
            overscrollBehaviorY: 'none'
          };
        }),
        rM = (0, z.k0)((e) => {
          let { isCentered: t, scrollBehavior: r } = e;
          return {
            borderRadius: 'md',
            color: 'inherit',
            my: t ? 'auto' : '16',
            mx: t ? 'auto' : void 0,
            zIndex: 'modal',
            maxH: 'inside' === r ? 'calc(100% - 7.5rem)' : void 0,
            [rT.variable]: 'colors.white',
            [r_.variable]: 'shadows.lg',
            _dark: { [rT.variable]: 'colors.gray.700', [r_.variable]: 'shadows.dark-lg' },
            bg: rT.reference,
            boxShadow: r_.reference
          };
        }),
        rD = (0, z.k0)({ px: '6', py: '4', fontSize: 'xl', fontWeight: 'semibold' }),
        rF = (0, z.k0)({ position: 'absolute', top: '2', insetEnd: '3' }),
        rV = (0, z.k0)((e) => {
          let { scrollBehavior: t } = e;
          return { px: '6', py: '2', flex: '1', overflow: 'inside' === t ? 'auto' : void 0 };
        }),
        rR = (0, z.k0)({ px: '6', py: '4' });
      function rB(e) {
        return 'full' === e
          ? rE({ dialog: { maxW: '100vw', minH: '$100vh', my: '0', borderRadius: '0' } })
          : rE({ dialog: { maxW: e } });
      }
      var r$ = rA({
          baseStyle: rE((e) => ({
            overlay: rz,
            dialogContainer: tT(rj, e),
            dialog: tT(rM, e),
            header: rD,
            closeButton: rF,
            body: tT(rV, e),
            footer: rR
          })),
          sizes: {
            xs: rB('xs'),
            sm: rB('sm'),
            md: rB('md'),
            lg: rB('lg'),
            xl: rB('xl'),
            '2xl': rB('2xl'),
            '3xl': rB('3xl'),
            '4xl': rB('4xl'),
            '5xl': rB('5xl'),
            '6xl': rB('6xl'),
            full: rB('full')
          },
          defaultProps: { size: 'md' }
        }),
        { defineMultiStyleConfig: rL, definePartsStyle: rI } = (0, z.D)(L.V1.keys),
        rO = O('number-input-stepper-width'),
        rW = O('number-input-input-padding'),
        rN = X(rO).add('0.5rem').toString(),
        rH = O('number-input-bg'),
        rU = O('number-input-color'),
        rq = O('number-input-border-color'),
        rJ = (0, z.k0)({ [rO.variable]: 'sizes.6', [rW.variable]: rN }),
        rY = (0, z.k0)((e) => {
          var t, r;
          return null != (r = null == (t = tT(tu.baseStyle, e)) ? void 0 : t.field) ? r : {};
        }),
        rK = (0, z.k0)({ width: rO.reference }),
        rX = (0, z.k0)({
          borderStart: '1px solid',
          borderStartColor: rq.reference,
          color: rU.reference,
          bg: rH.reference,
          [rU.variable]: 'colors.chakra-body-text',
          [rq.variable]: 'colors.chakra-border-color',
          _dark: { [rU.variable]: 'colors.whiteAlpha.800', [rq.variable]: 'colors.whiteAlpha.300' },
          _active: {
            [rH.variable]: 'colors.gray.200',
            _dark: { [rH.variable]: 'colors.whiteAlpha.300' }
          },
          _disabled: { opacity: 0.4, cursor: 'not-allowed' }
        });
      function rG(e) {
        var t, r, i;
        let n = null == (t = tu.sizes) ? void 0 : t[e],
          o = { lg: 'md', md: 'md', sm: 'sm', xs: 'sm' },
          s = null != (i = null == (r = n.field) ? void 0 : r.fontSize) ? i : 'md',
          a = A.fontSizes[s];
        return rI({
          field: { ...n.field, paddingInlineEnd: rW.reference, verticalAlign: 'top' },
          stepper: {
            fontSize: X(a).multiply(0.75).toString(),
            _first: { borderTopEndRadius: o[e] },
            _last: { borderBottomEndRadius: o[e], mt: '-1px', borderTopWidth: 1 }
          }
        });
      }
      var rZ = rL({
          baseStyle: rI((e) => {
            var t;
            return {
              root: rJ,
              field: null != (t = tT(rY, e)) ? t : {},
              stepperGroup: rK,
              stepper: rX
            };
          }),
          sizes: { xs: rG('xs'), sm: rG('sm'), md: rG('md'), lg: rG('lg') },
          variants: tu.variants,
          defaultProps: tu.defaultProps
        }),
        rQ = (0, z.k0)({ ...(null == (k = tu.baseStyle) ? void 0 : k.field), textAlign: 'center' }),
        r0 = {
          lg: (0, z.k0)({ fontSize: 'lg', w: 12, h: 12, borderRadius: 'md' }),
          md: (0, z.k0)({ fontSize: 'md', w: 10, h: 10, borderRadius: 'md' }),
          sm: (0, z.k0)({ fontSize: 'sm', w: 8, h: 8, borderRadius: 'sm' }),
          xs: (0, z.k0)({ fontSize: 'xs', w: 6, h: 6, borderRadius: 'sm' })
        },
        r1 = {
          outline: (0, z.k0)((e) => {
            var t, r, i;
            return null !=
              (i =
                null == (r = tT(null == (t = tu.variants) ? void 0 : t.outline, e))
                  ? void 0
                  : r.field)
              ? i
              : {};
          }),
          flushed: (0, z.k0)((e) => {
            var t, r, i;
            return null !=
              (i =
                null == (r = tT(null == (t = tu.variants) ? void 0 : t.flushed, e))
                  ? void 0
                  : r.field)
              ? i
              : {};
          }),
          filled: (0, z.k0)((e) => {
            var t, r, i;
            return null !=
              (i =
                null == (r = tT(null == (t = tu.variants) ? void 0 : t.filled, e))
                  ? void 0
                  : r.field)
              ? i
              : {};
          }),
          unstyled: null != (C = null == (P = tu.variants) ? void 0 : P.unstyled.field) ? C : {}
        },
        r5 = (0, z.fj)({ baseStyle: rQ, sizes: r0, variants: r1, defaultProps: tu.defaultProps }),
        { defineMultiStyleConfig: r2, definePartsStyle: r3 } = (0, z.D)(L.Ji.keys),
        r4 = O('popper-bg'),
        r6 = O('popper-arrow-bg'),
        r9 = O('popper-arrow-shadow-color'),
        r8 = r2({
          baseStyle: r3({
            popper: (0, z.k0)({ zIndex: 10 }),
            content: (0, z.k0)({
              [r4.variable]: 'colors.white',
              bg: r4.reference,
              [r6.variable]: r4.reference,
              [r9.variable]: 'colors.gray.200',
              _dark: { [r4.variable]: 'colors.gray.700', [r9.variable]: 'colors.whiteAlpha.300' },
              width: 'xs',
              border: '1px solid',
              borderColor: 'inherit',
              borderRadius: 'md',
              boxShadow: 'sm',
              zIndex: 'inherit',
              _focusVisible: { outline: 0, boxShadow: 'outline' }
            }),
            header: (0, z.k0)({ px: 3, py: 2, borderBottomWidth: '1px' }),
            body: (0, z.k0)({ px: 3, py: 2 }),
            footer: (0, z.k0)({ px: 3, py: 2, borderTopWidth: '1px' }),
            closeButton: (0, z.k0)({
              position: 'absolute',
              borderRadius: 'md',
              top: 1,
              insetEnd: 2,
              padding: 2
            })
          })
        }),
        { definePartsStyle: r7, defineMultiStyleConfig: ie } = (0, z.D)(L.iU.keys),
        it = (0, z.gJ)('drawer-bg'),
        ir = (0, z.gJ)('drawer-box-shadow');
      function ii(e) {
        return 'full' === e
          ? r7({ dialog: { maxW: '100vw', h: '100vh' } })
          : r7({ dialog: { maxW: e } });
      }
      var io = (0, z.k0)({ bg: 'blackAlpha.600', zIndex: 'modal' }),
        is = (0, z.k0)({ display: 'flex', zIndex: 'modal', justifyContent: 'center' }),
        ia = (0, z.k0)((e) => {
          let { isFullHeight: t } = e;
          return {
            ...(t && { height: '100vh' }),
            zIndex: 'modal',
            maxH: '100vh',
            color: 'inherit',
            [it.variable]: 'colors.white',
            [ir.variable]: 'shadows.lg',
            _dark: { [it.variable]: 'colors.gray.700', [ir.variable]: 'shadows.dark-lg' },
            bg: it.reference,
            boxShadow: ir.reference
          };
        }),
        il = (0, z.k0)({ px: '6', py: '4', fontSize: 'xl', fontWeight: 'semibold' }),
        iu = (0, z.k0)({ position: 'absolute', top: '2', insetEnd: '3' }),
        id = (0, z.k0)({ px: '6', py: '2', flex: '1', overflow: 'auto' }),
        ih = (0, z.k0)({ px: '6', py: '4' }),
        ic = ie({
          baseStyle: r7((e) => ({
            overlay: io,
            dialogContainer: is,
            dialog: tT(ia, e),
            header: il,
            closeButton: iu,
            body: id,
            footer: ih
          })),
          sizes: {
            xs: ii('xs'),
            sm: ii('md'),
            md: ii('lg'),
            lg: ii('2xl'),
            xl: ii('4xl'),
            full: ii('full')
          },
          defaultProps: { size: 'xs' }
        }),
        { definePartsStyle: ip, defineMultiStyleConfig: im } = (0, z.D)(L.lN.keys),
        ig = im({
          baseStyle: ip({
            preview: (0, z.k0)({
              borderRadius: 'md',
              py: '1',
              transitionProperty: 'common',
              transitionDuration: 'normal'
            }),
            input: (0, z.k0)({
              borderRadius: 'md',
              py: '1',
              transitionProperty: 'common',
              transitionDuration: 'normal',
              width: 'full',
              _focusVisible: { boxShadow: 'outline' },
              _placeholder: { opacity: 0.6 }
            }),
            textarea: (0, z.k0)({
              borderRadius: 'md',
              py: '1',
              transitionProperty: 'common',
              transitionDuration: 'normal',
              width: 'full',
              _focusVisible: { boxShadow: 'outline' },
              _placeholder: { opacity: 0.6 }
            })
          })
        }),
        { definePartsStyle: iv, defineMultiStyleConfig: ib } = (0, z.D)(L.TJ.keys),
        iy = (0, z.gJ)('form-control-color'),
        ix = ib({
          baseStyle: iv({
            container: { width: '100%', position: 'relative' },
            requiredIndicator: (0, z.k0)({
              marginStart: '1',
              [iy.variable]: 'colors.red.500',
              _dark: { [iy.variable]: 'colors.red.300' },
              color: iy.reference
            }),
            helperText: (0, z.k0)({
              mt: '2',
              [iy.variable]: 'colors.gray.600',
              _dark: { [iy.variable]: 'colors.whiteAlpha.600' },
              color: iy.reference,
              lineHeight: 'normal',
              fontSize: 'sm'
            })
          })
        }),
        { definePartsStyle: iw, defineMultiStyleConfig: iS } = (0, z.D)(L.ao.keys),
        ik = (0, z.gJ)('form-error-color'),
        iP = iS({
          baseStyle: iw({
            text: (0, z.k0)({
              [ik.variable]: 'colors.red.500',
              _dark: { [ik.variable]: 'colors.red.300' },
              color: ik.reference,
              mt: '2',
              fontSize: 'sm',
              lineHeight: 'normal'
            }),
            icon: (0, z.k0)({
              marginEnd: '0.5em',
              [ik.variable]: 'colors.red.500',
              _dark: { [ik.variable]: 'colors.red.300' },
              color: ik.reference
            })
          })
        }),
        iC = (0, z.k0)({
          fontSize: 'md',
          marginEnd: '3',
          mb: '2',
          fontWeight: 'medium',
          transitionProperty: 'common',
          transitionDuration: 'normal',
          opacity: 1,
          _disabled: { opacity: 0.4 }
        }),
        iA = (0, z.fj)({ baseStyle: iC }),
        iE = (0, z.k0)({ fontFamily: 'heading', fontWeight: 'bold' }),
        iT = {
          '4xl': (0, z.k0)({ fontSize: ['6xl', null, '7xl'], lineHeight: 1 }),
          '3xl': (0, z.k0)({ fontSize: ['5xl', null, '6xl'], lineHeight: 1 }),
          '2xl': (0, z.k0)({ fontSize: ['4xl', null, '5xl'], lineHeight: [1.2, null, 1] }),
          xl: (0, z.k0)({ fontSize: ['3xl', null, '4xl'], lineHeight: [1.33, null, 1.2] }),
          lg: (0, z.k0)({ fontSize: ['2xl', null, '3xl'], lineHeight: [1.33, null, 1.2] }),
          md: (0, z.k0)({ fontSize: 'xl', lineHeight: 1.2 }),
          sm: (0, z.k0)({ fontSize: 'md', lineHeight: 1.2 }),
          xs: (0, z.k0)({ fontSize: 'sm', lineHeight: 1.2 })
        },
        i_ = (0, z.fj)({ baseStyle: iE, sizes: iT, defaultProps: { size: 'xl' } }),
        { defineMultiStyleConfig: iz, definePartsStyle: ij } = (0, z.D)(L.AB.keys),
        iM = (0, z.gJ)('breadcrumb-link-decor'),
        iD = iz({
          baseStyle: ij({
            link: (0, z.k0)({
              transitionProperty: 'common',
              transitionDuration: 'fast',
              transitionTimingFunction: 'ease-out',
              outline: 'none',
              color: 'inherit',
              textDecoration: iM.reference,
              [iM.variable]: 'none',
              '&:not([aria-current=page])': {
                cursor: 'pointer',
                _hover: { [iM.variable]: 'underline' },
                _focusVisible: { boxShadow: 'outline' }
              }
            })
          })
        }),
        iF = (0, z.k0)({
          lineHeight: '1.2',
          borderRadius: 'md',
          fontWeight: 'semibold',
          transitionProperty: 'common',
          transitionDuration: 'normal',
          _focusVisible: { boxShadow: 'outline' },
          _disabled: { opacity: 0.4, cursor: 'not-allowed', boxShadow: 'none' },
          _hover: { _disabled: { bg: 'initial' } }
        }),
        iV = (0, z.k0)((e) => {
          let { colorScheme: t, theme: r } = e;
          if ('gray' === t)
            return {
              color: el('gray.800', 'whiteAlpha.900')(e),
              _hover: { bg: el('gray.100', 'whiteAlpha.200')(e) },
              _active: { bg: el('gray.200', 'whiteAlpha.300')(e) }
            };
          let i = eD(`${t}.200`, 0.12)(r),
            n = eD(`${t}.200`, 0.24)(r);
          return {
            color: el(`${t}.600`, `${t}.200`)(e),
            bg: 'transparent',
            _hover: { bg: el(`${t}.50`, i)(e) },
            _active: { bg: el(`${t}.100`, n)(e) }
          };
        }),
        iR = (0, z.k0)((e) => {
          let { colorScheme: t } = e,
            r = el('gray.200', 'whiteAlpha.300')(e);
          return {
            border: '1px solid',
            borderColor: 'gray' === t ? r : 'currentColor',
            '.chakra-button__group[data-attached][data-orientation=horizontal] > &:not(:last-of-type)':
              { marginEnd: '-1px' },
            '.chakra-button__group[data-attached][data-orientation=vertical] > &:not(:last-of-type)':
              { marginBottom: '-1px' },
            ...tT(iV, e)
          };
        }),
        iB = {
          yellow: {
            bg: 'yellow.400',
            color: 'black',
            hoverBg: 'yellow.500',
            activeBg: 'yellow.600'
          },
          cyan: { bg: 'cyan.400', color: 'black', hoverBg: 'cyan.500', activeBg: 'cyan.600' }
        },
        i$ = (0, z.k0)((e) => {
          var t;
          let { colorScheme: r } = e;
          if ('gray' === r) {
            let t = el('gray.100', 'whiteAlpha.200')(e);
            return {
              bg: t,
              color: el('gray.800', 'whiteAlpha.900')(e),
              _hover: { bg: el('gray.200', 'whiteAlpha.300')(e), _disabled: { bg: t } },
              _active: { bg: el('gray.300', 'whiteAlpha.400')(e) }
            };
          }
          let {
              bg: i = `${r}.500`,
              color: n = 'white',
              hoverBg: o = `${r}.600`,
              activeBg: s = `${r}.700`
            } = null != (t = iB[r]) ? t : {},
            a = el(i, `${r}.200`)(e);
          return {
            bg: a,
            color: el(n, 'gray.800')(e),
            _hover: { bg: el(o, `${r}.300`)(e), _disabled: { bg: a } },
            _active: { bg: el(s, `${r}.400`)(e) }
          };
        }),
        iL = (0, z.k0)((e) => {
          let { colorScheme: t } = e;
          return {
            padding: 0,
            height: 'auto',
            lineHeight: 'normal',
            verticalAlign: 'baseline',
            color: el(`${t}.500`, `${t}.200`)(e),
            _hover: { textDecoration: 'underline', _disabled: { textDecoration: 'none' } },
            _active: { color: el(`${t}.700`, `${t}.500`)(e) }
          };
        }),
        iI = (0, z.k0)({
          bg: 'none',
          color: 'inherit',
          display: 'inline',
          lineHeight: 'inherit',
          m: '0',
          p: '0'
        }),
        iO = {
          lg: (0, z.k0)({ h: '12', minW: '12', fontSize: 'lg', px: '6' }),
          md: (0, z.k0)({ h: '10', minW: '10', fontSize: 'md', px: '4' }),
          sm: (0, z.k0)({ h: '8', minW: '8', fontSize: 'sm', px: '3' }),
          xs: (0, z.k0)({ h: '6', minW: '6', fontSize: 'xs', px: '2' })
        },
        iW = (0, z.fj)({
          baseStyle: iF,
          variants: { ghost: iV, outline: iR, solid: i$, link: iL, unstyled: iI },
          sizes: iO,
          defaultProps: { variant: 'solid', size: 'md', colorScheme: 'gray' }
        }),
        { definePartsStyle: iN, defineMultiStyleConfig: iH } = (0, z.D)(L.SG.keys),
        iU = (0, z.gJ)('card-bg'),
        iq = (0, z.gJ)('card-padding'),
        iJ = (0, z.gJ)('card-shadow'),
        iY = (0, z.gJ)('card-radius'),
        iK = (0, z.gJ)('card-border-width', '0'),
        iX = (0, z.gJ)('card-border-color'),
        iG = iN({
          container: {
            [iU.variable]: 'colors.chakra-body-bg',
            backgroundColor: iU.reference,
            boxShadow: iJ.reference,
            borderRadius: iY.reference,
            color: 'chakra-body-text',
            borderWidth: iK.reference,
            borderColor: iX.reference
          },
          body: { padding: iq.reference, flex: '1 1 0%' },
          header: { padding: iq.reference },
          footer: { padding: iq.reference }
        }),
        iZ = {
          sm: iN({ container: { [iY.variable]: 'radii.base', [iq.variable]: 'space.3' } }),
          md: iN({ container: { [iY.variable]: 'radii.md', [iq.variable]: 'space.5' } }),
          lg: iN({ container: { [iY.variable]: 'radii.xl', [iq.variable]: 'space.7' } })
        },
        iQ = iH({
          baseStyle: iG,
          variants: {
            elevated: iN({
              container: {
                [iJ.variable]: 'shadows.base',
                _dark: { [iU.variable]: 'colors.gray.700' }
              }
            }),
            outline: iN({
              container: { [iK.variable]: '1px', [iX.variable]: 'colors.chakra-border-color' }
            }),
            filled: iN({ container: { [iU.variable]: 'colors.chakra-subtle-bg' } }),
            unstyled: {
              body: { [iq.variable]: 0 },
              header: { [iq.variable]: 0 },
              footer: { [iq.variable]: 0 }
            }
          },
          sizes: iZ,
          defaultProps: { variant: 'elevated', size: 'md' }
        }),
        i0 = O('close-button-size'),
        i1 = O('close-button-bg'),
        i5 = (0, z.k0)({
          w: [i0.reference],
          h: [i0.reference],
          borderRadius: 'md',
          transitionProperty: 'common',
          transitionDuration: 'normal',
          _disabled: { opacity: 0.4, cursor: 'not-allowed', boxShadow: 'none' },
          _hover: {
            [i1.variable]: 'colors.blackAlpha.100',
            _dark: { [i1.variable]: 'colors.whiteAlpha.100' }
          },
          _active: {
            [i1.variable]: 'colors.blackAlpha.200',
            _dark: { [i1.variable]: 'colors.whiteAlpha.200' }
          },
          _focusVisible: { boxShadow: 'outline' },
          bg: i1.reference
        }),
        i2 = {
          lg: (0, z.k0)({ [i0.variable]: 'sizes.10', fontSize: 'md' }),
          md: (0, z.k0)({ [i0.variable]: 'sizes.8', fontSize: 'xs' }),
          sm: (0, z.k0)({ [i0.variable]: 'sizes.6', fontSize: '2xs' })
        },
        i3 = (0, z.fj)({ baseStyle: i5, sizes: i2, defaultProps: { size: 'md' } }),
        { variants: i4, defaultProps: i6 } = eG,
        i9 = (0, z.k0)({
          fontFamily: 'mono',
          fontSize: 'sm',
          px: '0.2em',
          borderRadius: 'sm',
          bg: eq.bg.reference,
          color: eq.color.reference,
          boxShadow: eq.shadow.reference
        }),
        i8 = (0, z.fj)({ baseStyle: i9, variants: i4, defaultProps: i6 }),
        i7 = (0, z.k0)({ w: '100%', mx: 'auto', maxW: 'prose', px: '4' }),
        ne = (0, z.fj)({ baseStyle: i7 }),
        nt = (0, z.k0)({ opacity: 0.6, borderColor: 'inherit' }),
        nr = (0, z.k0)({ borderStyle: 'solid' }),
        ni = (0, z.k0)({ borderStyle: 'dashed' }),
        nn = (0, z.fj)({
          baseStyle: nt,
          variants: { solid: nr, dashed: ni },
          defaultProps: { variant: 'solid' }
        }),
        { definePartsStyle: no, defineMultiStyleConfig: ns } = (0, z.D)(L.sA.keys),
        na = ns({
          baseStyle: no({
            container: (0, z.k0)({
              borderTopWidth: '1px',
              borderColor: 'inherit',
              _last: { borderBottomWidth: '1px' }
            }),
            button: (0, z.k0)({
              transitionProperty: 'common',
              transitionDuration: 'normal',
              fontSize: 'md',
              _focusVisible: { boxShadow: 'outline' },
              _hover: { bg: 'blackAlpha.50' },
              _disabled: { opacity: 0.4, cursor: 'not-allowed' },
              px: '4',
              py: '2'
            }),
            panel: (0, z.k0)({ pt: '2', px: '4', pb: '5' }),
            icon: (0, z.k0)({ fontSize: '1.25em' })
          })
        }),
        { definePartsStyle: nl, defineMultiStyleConfig: nu } = (0, z.D)(L.aP.keys),
        nd = (0, z.gJ)('alert-fg'),
        nh = (0, z.gJ)('alert-bg');
      function nc(e) {
        let { theme: t, colorScheme: r } = e,
          i = eD(`${r}.200`, 0.16)(t);
        return { light: `colors.${r}.100`, dark: i };
      }
      var np = nu({
          baseStyle: nl({
            container: { bg: nh.reference, px: '4', py: '3' },
            title: { fontWeight: 'bold', lineHeight: '6', marginEnd: '2' },
            description: { lineHeight: '6' },
            icon: { color: nd.reference, flexShrink: 0, marginEnd: '3', w: '5', h: '6' },
            spinner: { color: nd.reference, flexShrink: 0, marginEnd: '3', w: '5', h: '5' }
          }),
          variants: {
            subtle: nl((e) => {
              let { colorScheme: t } = e,
                r = nc(e);
              return {
                container: {
                  [nd.variable]: `colors.${t}.600`,
                  [nh.variable]: r.light,
                  _dark: { [nd.variable]: `colors.${t}.200`, [nh.variable]: r.dark }
                }
              };
            }),
            'left-accent': nl((e) => {
              let { colorScheme: t } = e,
                r = nc(e);
              return {
                container: {
                  [nd.variable]: `colors.${t}.600`,
                  [nh.variable]: r.light,
                  _dark: { [nd.variable]: `colors.${t}.200`, [nh.variable]: r.dark },
                  paddingStart: '3',
                  borderStartWidth: '4px',
                  borderStartColor: nd.reference
                }
              };
            }),
            'top-accent': nl((e) => {
              let { colorScheme: t } = e,
                r = nc(e);
              return {
                container: {
                  [nd.variable]: `colors.${t}.600`,
                  [nh.variable]: r.light,
                  _dark: { [nd.variable]: `colors.${t}.200`, [nh.variable]: r.dark },
                  pt: '2',
                  borderTopWidth: '4px',
                  borderTopColor: nd.reference
                }
              };
            }),
            solid: nl((e) => {
              let { colorScheme: t } = e;
              return {
                container: {
                  [nd.variable]: 'colors.white',
                  [nh.variable]: `colors.${t}.600`,
                  _dark: { [nd.variable]: 'colors.gray.900', [nh.variable]: `colors.${t}.200` },
                  color: nd.reference
                }
              };
            })
          },
          defaultProps: { variant: 'subtle', colorScheme: 'blue' }
        }),
        { definePartsStyle: nm, defineMultiStyleConfig: nf } = (0, z.D)(L.$5.keys),
        ng = (0, z.gJ)('avatar-border-color'),
        nv = (0, z.gJ)('avatar-bg'),
        nb = (0, z.gJ)('avatar-font-size'),
        ny = (0, z.gJ)('avatar-size'),
        nx = (0, z.k0)({
          borderRadius: 'full',
          border: '0.2em solid',
          borderColor: ng.reference,
          [ng.variable]: 'white',
          _dark: { [ng.variable]: 'colors.gray.800' }
        }),
        nw = (0, z.k0)({
          bg: nv.reference,
          fontSize: nb.reference,
          width: ny.reference,
          height: ny.reference,
          lineHeight: '1',
          [nv.variable]: 'colors.gray.200',
          _dark: { [nv.variable]: 'colors.whiteAlpha.400' }
        }),
        nS = (0, z.k0)((e) => {
          let { name: t, theme: r } = e,
            i = t
              ? (function (e) {
                  var t;
                  let r = eV();
                  return !e || eT(e)
                    ? r
                    : e.string && e.colors
                      ? (function (e, t) {
                          let r = 0;
                          if (0 === e.length) return t[0];
                          for (let t = 0; t < e.length; t += 1)
                            ((r = e.charCodeAt(t) + ((r << 5) - r)), (r &= r));
                          return ((r = ((r % t.length) + t.length) % t.length), t[r]);
                        })(e.string, e.colors)
                      : e.string && !e.colors
                        ? (function (e) {
                            let t = 0;
                            if (0 === e.length) return t.toString();
                            for (let r = 0; r < e.length; r += 1)
                              ((t = e.charCodeAt(r) + ((t << 5) - t)), (t &= t));
                            let r = '#';
                            for (let e = 0; e < 3; e += 1) {
                              let i = (t >> (8 * e)) & 255;
                              r += `00${i.toString(16)}`.substr(-2);
                            }
                            return r;
                          })(e.string)
                        : e.colors && !e.string
                          ? (t = e.colors)[Math.floor(Math.random() * t.length)]
                          : r;
                })({ string: t })
              : 'colors.gray.400',
            n = eM(i)(r),
            o = 'white';
          return (
            n || (o = 'gray.800'),
            {
              bg: nv.reference,
              fontSize: nb.reference,
              color: o,
              borderColor: ng.reference,
              verticalAlign: 'top',
              width: ny.reference,
              height: ny.reference,
              '&:not([data-loaded])': { [nv.variable]: i },
              [ng.variable]: 'colors.white',
              _dark: { [ng.variable]: 'colors.gray.800' }
            }
          );
        }),
        nk = (0, z.k0)({ fontSize: nb.reference, lineHeight: '1' });
      function nP(e) {
        let t = '100%' !== e ? T[e] : void 0;
        return nm({
          container: {
            [ny.variable]: null != t ? t : e,
            [nb.variable]: `calc(${null != t ? t : e} / 2.5)`
          },
          excessLabel: {
            [ny.variable]: null != t ? t : e,
            [nb.variable]: `calc(${null != t ? t : e} / 2.5)`
          }
        });
      }
      var nC = nf({
          baseStyle: nm((e) => ({
            badge: tT(nx, e),
            excessLabel: tT(nw, e),
            container: tT(nS, e),
            label: nk
          })),
          sizes: {
            '2xs': nP(4),
            xs: nP(6),
            sm: nP(8),
            md: nP(12),
            lg: nP(16),
            xl: nP(24),
            '2xl': nP(32),
            full: nP('100%')
          },
          defaultProps: { size: 'md' }
        }),
        nA = {
          colors: {
            'chakra-body-text': { _light: 'gray.800', _dark: 'whiteAlpha.900' },
            'chakra-body-bg': { _light: 'white', _dark: 'gray.800' },
            'chakra-border-color': { _light: 'gray.200', _dark: 'whiteAlpha.300' },
            'chakra-inverse-text': { _light: 'white', _dark: 'gray.800' },
            'chakra-subtle-bg': { _light: 'gray.100', _dark: 'gray.700' },
            'chakra-subtle-text': { _light: 'gray.600', _dark: 'gray.400' },
            'chakra-placeholder-color': { _light: 'gray.500', _dark: 'whiteAlpha.400' }
          }
        },
        nE = {
          global: {
            body: {
              fontFamily: 'body',
              color: 'chakra-body-text',
              bg: 'chakra-body-bg',
              transitionProperty: 'background-color',
              transitionDuration: 'normal',
              lineHeight: 'base'
            },
            '*::placeholder': { color: 'chakra-placeholder-color' },
            '*, *::before, &::after': { borderColor: 'chakra-border-color' }
          }
        },
        nT = { useSystemColorMode: !1, initialColorMode: 'light', cssVarPrefix: 'chakra' },
        n_ = {
          semanticTokens: nA,
          direction: 'ltr',
          ..._,
          components: {
            Accordion: na,
            Alert: np,
            Avatar: nC,
            Badge: eG,
            Breadcrumb: iD,
            Button: iW,
            Checkbox: tR,
            CloseButton: i3,
            Code: i8,
            Container: ne,
            Divider: nn,
            Drawer: ic,
            Editable: ig,
            Form: ix,
            FormError: iP,
            FormLabel: iA,
            Heading: i_,
            Input: tu,
            Kbd: ru,
            Link: rh,
            List: rm,
            Menu: rC,
            Modal: r$,
            NumberInput: rZ,
            PinInput: r5,
            Popover: r8,
            Progress: tA,
            Radio: tI,
            Select: tq,
            Skeleton: tX,
            SkipLink: tQ,
            Slider: t7,
            Spinner: ri,
            Stat: rs,
            Switch: ea,
            Table: em,
            Tabs: eU,
            Tag: e7,
            Textarea: tp,
            Tooltip: tb,
            Card: iQ,
            Stepper: $
          },
          styles: nE,
          config: nT
        },
        nz = { semanticTokens: nA, direction: 'ltr', components: {}, ..._, styles: nE, config: nT };
    }
  }
]);
