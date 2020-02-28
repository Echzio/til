(window.webpackJsonp = window.webpackJsonp || []).push([
  [4],
  {
    323: function(e, t, r) {
      'use strict';
      r.r(t),
        function(e) {
          var o,
            a = r(325),
            n = r(5),
            l = r.n(n),
            c = r(324);
          function i(e, t) {
            return (
              (function(e) {
                if (Array.isArray(e)) return e;
              })(e) ||
              (function(e, t) {
                if (
                  !(
                    Symbol.iterator in Object(e) ||
                    '[object Arguments]' === Object.prototype.toString.call(e)
                  )
                )
                  return;
                var r = [],
                  o = !0,
                  a = !1,
                  n = void 0;
                try {
                  for (
                    var l, c = e[Symbol.iterator]();
                    !(o = (l = c.next()).done) && (r.push(l.value), !t || r.length !== t);
                    o = !0
                  );
                } catch (e) {
                  (a = !0), (n = e);
                } finally {
                  try {
                    o || null == c.return || c.return();
                  } finally {
                    if (a) throw n;
                  }
                }
                return r;
              })(e, t) ||
              (function() {
                throw new TypeError('Invalid attempt to destructure non-iterable instance');
              })()
            );
          }
          (o =
            'undefined' != typeof reactHotLoaderGlobal
              ? reactHotLoaderGlobal.enterModule
              : void 0) && o(e);
          var s =
              'undefined' != typeof reactHotLoaderGlobal
                ? reactHotLoaderGlobal.default.signature
                : function(e) {
                    return e;
                  },
            u = Object(a.a)('h1', { target: 'e8q4cy80', label: 'H1' })({
              name: 'wmnbku',
              styles: 'font-size:2rem;',
            }),
            d = function() {
              var e = i(Object(n.useState)(''), 2),
                t = e[0],
                r = e[1];
              return (
                Object(n.useEffect)(function() {
                  r('Hello, world');
                }),
                l.a.createElement(
                  'div',
                  null,
                  l.a.createElement(u, null, t),
                  l.a.createElement('img', {
                    src: '/assets/img/Tony-Stark-Iron-Man-Comic-Face-Cover.webp',
                  }),
                )
              );
            };
          s(d, "useState{[title, setTitle]('')}\nuseEffect{}");
          var f,
            p,
            b = Object(c.hot)(e)(d);
          (t.default = b),
            (f =
              'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
              (f.register(
                u,
                'H1',
                'C:\\Users\\komarovAS\\Desktop\\til\\React\\SPA boilerplate\\src\\components\\App.jsx',
              ),
              f.register(
                d,
                'App',
                'C:\\Users\\komarovAS\\Desktop\\til\\React\\SPA boilerplate\\src\\components\\App.jsx',
              ),
              f.register(
                b,
                'default',
                'C:\\Users\\komarovAS\\Desktop\\til\\React\\SPA boilerplate\\src\\components\\App.jsx',
              )),
            (p =
              'undefined' != typeof reactHotLoaderGlobal
                ? reactHotLoaderGlobal.leaveModule
                : void 0) && p(e);
        }.call(this, r(127)(e));
    },
  },
]);
