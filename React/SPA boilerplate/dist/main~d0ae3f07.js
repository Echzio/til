!(function(e) {
  function r(r) {
    for (var t, o, i = r[0], a = r[1], c = r[2], d = 0, l = []; d < i.length; d++)
      (o = i[d]), Object.prototype.hasOwnProperty.call(x, o) && x[o] && l.push(x[o][0]), (x[o] = 0);
    for (t in a) Object.prototype.hasOwnProperty.call(a, t) && (e[t] = a[t]);
    for (L && L(r); l.length; ) l.shift()();
    return k.push.apply(k, c || []), n();
  }
  function n() {
    for (var e, r = 0; r < k.length; r++) {
      for (var n = k[r], t = !0, o = 1; o < n.length; o++) {
        var i = n[o];
        0 !== x[i] && (t = !1);
      }
      t && (k.splice(r--, 1), (e = A((A.s = n[0]))));
    }
    return e;
  }
  var t = window.webpackHotUpdate;
  window.webpackHotUpdate = function(e, r) {
    !(function(e, r) {
      if (!O[e] || !w[e]) return;
      for (var n in ((w[e] = !1), r)) Object.prototype.hasOwnProperty.call(r, n) && (v[n] = r[n]);
      0 == --b && 0 === m && D();
    })(e, r),
      t && t(e, r);
  };
  var o,
    i = !0,
    a = '2ddba733b280a58874a3',
    c = {},
    d = [],
    l = [];
  function u(e) {
    var r = {
      _acceptedDependencies: {},
      _declinedDependencies: {},
      _selfAccepted: !1,
      _selfDeclined: !1,
      _disposeHandlers: [],
      _main: o !== e,
      active: !0,
      accept: function(e, n) {
        if (void 0 === e) r._selfAccepted = !0;
        else if ('function' == typeof e) r._selfAccepted = e;
        else if ('object' == typeof e)
          for (var t = 0; t < e.length; t++) r._acceptedDependencies[e[t]] = n || function() {};
        else r._acceptedDependencies[e] = n || function() {};
      },
      decline: function(e) {
        if (void 0 === e) r._selfDeclined = !0;
        else if ('object' == typeof e)
          for (var n = 0; n < e.length; n++) r._declinedDependencies[e[n]] = !0;
        else r._declinedDependencies[e] = !0;
      },
      dispose: function(e) {
        r._disposeHandlers.push(e);
      },
      addDisposeHandler: function(e) {
        r._disposeHandlers.push(e);
      },
      removeDisposeHandler: function(e) {
        var n = r._disposeHandlers.indexOf(e);
        n >= 0 && r._disposeHandlers.splice(n, 1);
      },
      check: j,
      apply: H,
      status: function(e) {
        if (!e) return p;
        s.push(e);
      },
      addStatusHandler: function(e) {
        s.push(e);
      },
      removeStatusHandler: function(e) {
        var r = s.indexOf(e);
        r >= 0 && s.splice(r, 1);
      },
      data: c[e],
    };
    return (o = void 0), r;
  }
  var s = [],
    p = 'idle';
  function f(e) {
    p = e;
    for (var r = 0; r < s.length; r++) s[r].call(null, e);
  }
  var h,
    v,
    y,
    b = 0,
    m = 0,
    g = {},
    w = {},
    O = {};
  function _(e) {
    return +e + '' === e ? +e : e;
  }
  function j(e) {
    if ('idle' !== p) throw new Error('check() is only allowed in idle status');
    return (
      (i = e),
      f('check'),
      ((r = 1e4),
      (r = r || 1e4),
      new Promise(function(e, n) {
        if ('undefined' == typeof XMLHttpRequest) return n(new Error('No browser support'));
        try {
          var t = new XMLHttpRequest(),
            o = A.p + '' + a + '.hot-update.json';
          t.open('GET', o, !0), (t.timeout = r), t.send(null);
        } catch (e) {
          return n(e);
        }
        t.onreadystatechange = function() {
          if (4 === t.readyState)
            if (0 === t.status) n(new Error('Manifest request to ' + o + ' timed out.'));
            else if (404 === t.status) e();
            else if (200 !== t.status && 304 !== t.status)
              n(new Error('Manifest request to ' + o + ' failed.'));
            else {
              try {
                var r = JSON.parse(t.responseText);
              } catch (e) {
                return void n(e);
              }
              e(r);
            }
        };
      })).then(function(e) {
        if (!e) return f('idle'), null;
        (w = {}), (g = {}), (O = e.c), (y = e.h), f('prepare');
        var r = new Promise(function(e, r) {
          h = { resolve: e, reject: r };
        });
        for (var n in ((v = {}), x)) E(n);
        return 'prepare' === p && 0 === m && 0 === b && D(), r;
      })
    );
    var r;
  }
  function E(e) {
    O[e]
      ? ((w[e] = !0),
        b++,
        (function(e) {
          var r = document.createElement('script');
          (r.charset = 'utf-8'),
            (r.src = A.p + '' + e + '.' + a + '.hot-update.js'),
            document.head.appendChild(r);
        })(e))
      : (g[e] = !0);
  }
  function D() {
    f('ready');
    var e = h;
    if (((h = null), e))
      if (i)
        Promise.resolve()
          .then(function() {
            return H(i);
          })
          .then(
            function(r) {
              e.resolve(r);
            },
            function(r) {
              e.reject(r);
            },
          );
      else {
        var r = [];
        for (var n in v) Object.prototype.hasOwnProperty.call(v, n) && r.push(_(n));
        e.resolve(r);
      }
  }
  function H(r) {
    if ('ready' !== p) throw new Error('apply() is only allowed in ready status');
    var n, t, o, i, l;
    function u(e) {
      for (
        var r = [e],
          n = {},
          t = r.map(function(e) {
            return { chain: [e], id: e };
          });
        t.length > 0;

      ) {
        var o = t.pop(),
          a = o.id,
          c = o.chain;
        if ((i = P[a]) && !i.hot._selfAccepted) {
          if (i.hot._selfDeclined) return { type: 'self-declined', chain: c, moduleId: a };
          if (i.hot._main) return { type: 'unaccepted', chain: c, moduleId: a };
          for (var d = 0; d < i.parents.length; d++) {
            var l = i.parents[d],
              u = P[l];
            if (u) {
              if (u.hot._declinedDependencies[a])
                return { type: 'declined', chain: c.concat([l]), moduleId: a, parentId: l };
              -1 === r.indexOf(l) &&
                (u.hot._acceptedDependencies[a]
                  ? (n[l] || (n[l] = []), s(n[l], [a]))
                  : (delete n[l], r.push(l), t.push({ chain: c.concat([l]), id: l })));
            }
          }
        }
      }
      return { type: 'accepted', moduleId: e, outdatedModules: r, outdatedDependencies: n };
    }
    function s(e, r) {
      for (var n = 0; n < r.length; n++) {
        var t = r[n];
        -1 === e.indexOf(t) && e.push(t);
      }
    }
    r = r || {};
    var h = {},
      b = [],
      m = {},
      g = function() {
        console.warn('[HMR] unexpected require(' + j.moduleId + ') to disposed module');
      };
    for (var w in v)
      if (Object.prototype.hasOwnProperty.call(v, w)) {
        var j;
        l = _(w);
        var E = !1,
          D = !1,
          H = !1,
          k = '';
        switch (
          ((j = v[w] ? u(l) : { type: 'disposed', moduleId: w }).chain &&
            (k = '\nUpdate propagation: ' + j.chain.join(' -> ')),
          j.type)
        ) {
          case 'self-declined':
            r.onDeclined && r.onDeclined(j),
              r.ignoreDeclined ||
                (E = new Error('Aborted because of self decline: ' + j.moduleId + k));
            break;
          case 'declined':
            r.onDeclined && r.onDeclined(j),
              r.ignoreDeclined ||
                (E = new Error(
                  'Aborted because of declined dependency: ' + j.moduleId + ' in ' + j.parentId + k,
                ));
            break;
          case 'unaccepted':
            r.onUnaccepted && r.onUnaccepted(j),
              r.ignoreUnaccepted ||
                (E = new Error('Aborted because ' + l + ' is not accepted' + k));
            break;
          case 'accepted':
            r.onAccepted && r.onAccepted(j), (D = !0);
            break;
          case 'disposed':
            r.onDisposed && r.onDisposed(j), (H = !0);
            break;
          default:
            throw new Error('Unexception type ' + j.type);
        }
        if (E) return f('abort'), Promise.reject(E);
        if (D)
          for (l in ((m[l] = v[l]), s(b, j.outdatedModules), j.outdatedDependencies))
            Object.prototype.hasOwnProperty.call(j.outdatedDependencies, l) &&
              (h[l] || (h[l] = []), s(h[l], j.outdatedDependencies[l]));
        H && (s(b, [j.moduleId]), (m[l] = g));
      }
    var I,
      M = [];
    for (t = 0; t < b.length; t++)
      (l = b[t]),
        P[l] &&
          P[l].hot._selfAccepted &&
          m[l] !== g &&
          M.push({ module: l, errorHandler: P[l].hot._selfAccepted });
    f('dispose'),
      Object.keys(O).forEach(function(e) {
        !1 === O[e] &&
          (function(e) {
            delete x[e];
          })(e);
      });
    for (var S, L, G = b.slice(); G.length > 0; )
      if (((l = G.pop()), (i = P[l]))) {
        var U = {},
          q = i.hot._disposeHandlers;
        for (o = 0; o < q.length; o++) (n = q[o])(U);
        for (
          c[l] = U, i.hot.active = !1, delete P[l], delete h[l], o = 0;
          o < i.children.length;
          o++
        ) {
          var R = P[i.children[o]];
          R && (I = R.parents.indexOf(l)) >= 0 && R.parents.splice(I, 1);
        }
      }
    for (l in h)
      if (Object.prototype.hasOwnProperty.call(h, l) && (i = P[l]))
        for (L = h[l], o = 0; o < L.length; o++)
          (S = L[o]), (I = i.children.indexOf(S)) >= 0 && i.children.splice(I, 1);
    for (l in (f('apply'), (a = y), m)) Object.prototype.hasOwnProperty.call(m, l) && (e[l] = m[l]);
    var T = null;
    for (l in h)
      if (Object.prototype.hasOwnProperty.call(h, l) && (i = P[l])) {
        L = h[l];
        var C = [];
        for (t = 0; t < L.length; t++)
          if (((S = L[t]), (n = i.hot._acceptedDependencies[S]))) {
            if (-1 !== C.indexOf(n)) continue;
            C.push(n);
          }
        for (t = 0; t < C.length; t++) {
          n = C[t];
          try {
            n(L);
          } catch (e) {
            r.onErrored &&
              r.onErrored({ type: 'accept-errored', moduleId: l, dependencyId: L[t], error: e }),
              r.ignoreErrored || T || (T = e);
          }
        }
      }
    for (t = 0; t < M.length; t++) {
      var J = M[t];
      (l = J.module), (d = [l]);
      try {
        A(l);
      } catch (e) {
        if ('function' == typeof J.errorHandler)
          try {
            J.errorHandler(e);
          } catch (n) {
            r.onErrored &&
              r.onErrored({
                type: 'self-accept-error-handler-errored',
                moduleId: l,
                error: n,
                originalError: e,
              }),
              r.ignoreErrored || T || (T = n),
              T || (T = e);
          }
        else
          r.onErrored && r.onErrored({ type: 'self-accept-errored', moduleId: l, error: e }),
            r.ignoreErrored || T || (T = e);
      }
    }
    return T
      ? (f('fail'), Promise.reject(T))
      : (f('idle'),
        new Promise(function(e) {
          e(b);
        }));
  }
  var P = {},
    x = { 3: 0 },
    k = [];
  function A(r) {
    if (P[r]) return P[r].exports;
    var n = (P[r] = {
      i: r,
      l: !1,
      exports: {},
      hot: u(r),
      parents: ((l = d), (d = []), l),
      children: [],
    });
    return (
      e[r].call(
        n.exports,
        n,
        n.exports,
        (function(e) {
          var r = P[e];
          if (!r) return A;
          var n = function(n) {
              return (
                r.hot.active
                  ? (P[n]
                      ? -1 === P[n].parents.indexOf(e) && P[n].parents.push(e)
                      : ((d = [e]), (o = n)),
                    -1 === r.children.indexOf(n) && r.children.push(n))
                  : (console.warn('[HMR] unexpected require(' + n + ') from disposed module ' + e),
                    (d = [])),
                A(n)
              );
            },
            t = function(e) {
              return {
                configurable: !0,
                enumerable: !0,
                get: function() {
                  return A[e];
                },
                set: function(r) {
                  A[e] = r;
                },
              };
            };
          for (var i in A)
            Object.prototype.hasOwnProperty.call(A, i) &&
              'e' !== i &&
              't' !== i &&
              Object.defineProperty(n, i, t(i));
          return (
            (n.e = function(e) {
              return (
                'ready' === p && f('prepare'),
                m++,
                A.e(e).then(r, function(e) {
                  throw (r(), e);
                })
              );
              function r() {
                m--, 'prepare' === p && (g[e] || E(e), 0 === m && 0 === b && D());
              }
            }),
            (n.t = function(e, r) {
              return 1 & r && (e = n(e)), A.t(e, -2 & r);
            }),
            n
          );
        })(r),
      ),
      (n.l = !0),
      n.exports
    );
  }
  (A.e = function(e) {
    var r = [],
      n = x[e];
    if (0 !== n)
      if (n) r.push(n[2]);
      else {
        var t = new Promise(function(r, t) {
          n = x[e] = [r, t];
        });
        r.push((n[2] = t));
        var o,
          i = document.createElement('script');
        (i.charset = 'utf-8'),
          (i.timeout = 120),
          A.nc && i.setAttribute('nonce', A.nc),
          (i.src = (function(e) {
            return A.p + '' + ({}[e] || e) + '.js';
          })(e));
        var a = new Error();
        o = function(r) {
          (i.onerror = i.onload = null), clearTimeout(c);
          var n = x[e];
          if (0 !== n) {
            if (n) {
              var t = r && ('load' === r.type ? 'missing' : r.type),
                o = r && r.target && r.target.src;
              (a.message = 'Loading chunk ' + e + ' failed.\n(' + t + ': ' + o + ')'),
                (a.name = 'ChunkLoadError'),
                (a.type = t),
                (a.request = o),
                n[1](a);
            }
            x[e] = void 0;
          }
        };
        var c = setTimeout(function() {
          o({ type: 'timeout', target: i });
        }, 12e4);
        (i.onerror = i.onload = o), document.head.appendChild(i);
      }
    return Promise.all(r);
  }),
    (A.m = e),
    (A.c = P),
    (A.d = function(e, r, n) {
      A.o(e, r) || Object.defineProperty(e, r, { enumerable: !0, get: n });
    }),
    (A.r = function(e) {
      'undefined' != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(e, '__esModule', { value: !0 });
    }),
    (A.t = function(e, r) {
      if ((1 & r && (e = A(e)), 8 & r)) return e;
      if (4 & r && 'object' == typeof e && e && e.__esModule) return e;
      var n = Object.create(null);
      if (
        (A.r(n),
        Object.defineProperty(n, 'default', { enumerable: !0, value: e }),
        2 & r && 'string' != typeof e)
      )
        for (var t in e)
          A.d(
            n,
            t,
            function(r) {
              return e[r];
            }.bind(null, t),
          );
      return n;
    }),
    (A.n = function(e) {
      var r =
        e && e.__esModule
          ? function() {
              return e.default;
            }
          : function() {
              return e;
            };
      return A.d(r, 'a', r), r;
    }),
    (A.o = function(e, r) {
      return Object.prototype.hasOwnProperty.call(e, r);
    }),
    (A.p = '/'),
    (A.oe = function(e) {
      throw (console.error(e), e);
    }),
    (A.h = function() {
      return a;
    });
  var I = (window.webpackJsonp = window.webpackJsonp || []),
    M = I.push.bind(I);
  (I.push = r), (I = I.slice());
  for (var S = 0; S < I.length; S++) r(I[S]);
  var L = M;
  k.push([128, 0, 2, 1]), n();
})({
  128: function(e, r, n) {
    n(129), (e.exports = n(315));
  },
  315: function(e, r, n) {
    'use strict';
    n.r(r),
      function(e) {
        var r,
          t = n(5),
          o = n.n(t),
          i = n(124);
        n(320);
        (r =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) &&
          r(e);
        'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
        var a,
          c,
          d = Object(t.lazy)(function() {
            return Promise.all([n.e(0), n.e(2), n.e(1), n.e(4)]).then(n.bind(null, 323));
          }),
          l = function() {
            return o.a.createElement(
              t.Suspense,
              { fallback: 'loading' },
              o.a.createElement(d, null),
            );
          };
        Object(i.render)(o.a.createElement(l, null), document.getElementById('app')),
          (a =
            'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
            (a.register(
              d,
              'App',
              'C:\\Users\\komarovAS\\Desktop\\til\\React\\SPA boilerplate\\src\\index.js',
            ),
            a.register(
              l,
              'Root',
              'C:\\Users\\komarovAS\\Desktop\\til\\React\\SPA boilerplate\\src\\index.js',
            )),
          (c =
            'undefined' != typeof reactHotLoaderGlobal
              ? reactHotLoaderGlobal.leaveModule
              : void 0) && c(e);
      }.call(this, n(127)(e));
  },
  320: function(e, r, n) {
    var t = n(321),
      o = n(89);
    'string' == typeof (o = o.__esModule ? o.default : o) && (o = [[e.i, o, '']]);
    var i = { insert: 'head', singleton: !1 },
      a = t(o, i),
      c = o.locals ? o.locals : {};
    o.locals ||
      e.hot.accept(89, function() {
        var r = n(89);
        'string' == typeof (r = r.__esModule ? r.default : r) && (r = [[e.i, r, '']]), a(r);
      }),
      e.hot.dispose(function() {
        a();
      }),
      (e.exports = c);
  },
  89: function(e, r, n) {},
});
