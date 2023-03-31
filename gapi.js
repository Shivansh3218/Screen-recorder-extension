gapi.loaded_0(function(_) {
    var window = this;
    var fa, ia, ja, ka, la, oa, ya;
    _.ea = function(a) {
        return function() {
            return _.ba[a].apply(this, arguments)
        }
    }
    ;
    _.ba = [];
    fa = function(a) {
        var b = 0;
        return function() {
            return b < a.length ? {
                done: !1,
                value: a[b++]
            } : {
                done: !0
            }
        }
    }
    ;
    ia = "function" == typeof Object.defineProperties ? Object.defineProperty : function(a, b, c) {
        if (a == Array.prototype || a == Object.prototype)
            return a;
        a[b] = c.value;
        return a
    }
    ;
    ja = function(a) {
        a = ["object" == typeof globalThis && globalThis, a, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global];
        for (var b = 0; b < a.length; ++b) {
            var c = a[b];
            if (c && c.Math == Math)
                return c
        }
        throw Error("a");
    }
    ;
    ka = ja(this);
    la = function(a, b) {
        if (b)
            a: {
                var c = ka;
                a = a.split(".");
                for (var d = 0; d < a.length - 1; d++) {
                    var e = a[d];
                    if (!(e in c))
                        break a;
                    c = c[e]
                }
                a = a[a.length - 1];
                d = c[a];
                b = b(d);
                b != d && null != b && ia(c, a, {
                    configurable: !0,
                    writable: !0,
                    value: b
                })
            }
    }
    ;
    la("Symbol", function(a) {
        if (a)
            return a;
        var b = function(f, h) {
            this.ET = f;
            ia(this, "description", {
                configurable: !0,
                writable: !0,
                value: h
            })
        };
        b.prototype.toString = function() {
            return this.ET
        }
        ;
        var c = "jscomp_symbol_" + (1E9 * Math.random() >>> 0) + "_"
          , d = 0
          , e = function(f) {
            if (this instanceof e)
                throw new TypeError("Symbol is not a constructor");
            return new b(c + (f || "") + "_" + d++,f)
        };
        return e
    });
    la("Symbol.iterator", function(a) {
        if (a)
            return a;
        a = Symbol("Symbol.iterator");
        for (var b = "Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "), c = 0; c < b.length; c++) {
            var d = ka[b[c]];
            "function" === typeof d && "function" != typeof d.prototype[a] && ia(d.prototype, a, {
                configurable: !0,
                writable: !0,
                value: function() {
                    return oa(fa(this))
                }
            })
        }
        return a
    });
    oa = function(a) {
        a = {
            next: a
        };
        a[Symbol.iterator] = function() {
            return this
        }
        ;
        return a
    }
    ;
    _.sa = function(a) {
        var b = "undefined" != typeof Symbol && Symbol.iterator && a[Symbol.iterator];
        if (b)
            return b.call(a);
        if ("number" == typeof a.length)
            return {
                next: fa(a)
            };
        throw Error("b`" + String(a));
    }
    ;
    _.xa = "function" == typeof Object.create ? Object.create : function(a) {
        var b = function() {};
        b.prototype = a;
        return new b
    }
    ;
    if ("function" == typeof Object.setPrototypeOf)
        ya = Object.setPrototypeOf;
    else {
        var Aa;
        a: {
            var Da = {
                a: !0
            }
              , Ha = {};
            try {
                Ha.__proto__ = Da;
                Aa = Ha.a;
                break a
            } catch (a) {}
            Aa = !1
        }
        ya = Aa ? function(a, b) {
            a.__proto__ = b;
            if (a.__proto__ !== b)
                throw new TypeError(a + " is not extensible");
            return a
        }
        : null
    }
    _.Ja = ya;
    la("Promise", function(a) {
        function b() {
            this.Ze = null
        }
        function c(h) {
            return h instanceof e ? h : new e(function(k) {
                k(h)
            }
            )
        }
        if (a)
            return a;
        b.prototype.QK = function(h) {
            if (null == this.Ze) {
                this.Ze = [];
                var k = this;
                this.RK(function() {
                    k.YX()
                })
            }
            this.Ze.push(h)
        }
        ;
        var d = ka.setTimeout;
        b.prototype.RK = function(h) {
            d(h, 0)
        }
        ;
        b.prototype.YX = function() {
            for (; this.Ze && this.Ze.length; ) {
                var h = this.Ze;
                this.Ze = [];
                for (var k = 0; k < h.length; ++k) {
                    var l = h[k];
                    h[k] = null;
                    try {
                        l()
                    } catch (m) {
                        this.ko(m)
                    }
                }
            }
            this.Ze = null
        }
        ;
        b.prototype.ko = function(h) {
            this.RK(function() {
                throw h;
            })
        }
        ;
        var e = function(h) {
            this.Ca = 0;
            this.Qe = void 0;
            this.Pp = [];
            this.mP = !1;
            var k = this.oC();
            try {
                h(k.resolve, k.reject)
            } catch (l) {
                k.reject(l)
            }
        };
        e.prototype.oC = function() {
            function h(m) {
                return function(n) {
                    l || (l = !0,
                    m.call(k, n))
                }
            }
            var k = this
              , l = !1;
            return {
                resolve: h(this.f4),
                reject: h(this.pG)
            }
        }
        ;
        e.prototype.f4 = function(h) {
            if (h === this)
                this.pG(new TypeError("A Promise cannot resolve to itself"));
            else if (h instanceof e)
                this.I5(h);
            else {
                a: switch (typeof h) {
                case "object":
                    var k = null != h;
                    break a;
                case "function":
                    k = !0;
                    break a;
                default:
                    k = !1
                }
                k ? this.e4(h) : this.VM(h)
            }
        }
        ;
        e.prototype.e4 = function(h) {
            var k = void 0;
            try {
                k = h.then
            } catch (l) {
                this.pG(l);
                return
            }
            "function" == typeof k ? this.J5(k, h) : this.VM(h)
        }
        ;
        e.prototype.pG = function(h) {
            this.vS(2, h)
        }
        ;
        e.prototype.VM = function(h) {
            this.vS(1, h)
        }
        ;
        e.prototype.vS = function(h, k) {
            if (0 != this.Ca)
                throw Error("c`" + h + "`" + k + "`" + this.Ca);
            this.Ca = h;
            this.Qe = k;
            2 === this.Ca && this.v4();
            this.ZX()
        }
        ;
        e.prototype.v4 = function() {
            var h = this;
            d(function() {
                if (h.l2()) {
                    var k = ka.console;
                    "undefined" !== typeof k && k.error(h.Qe)
                }
            }, 1)
        }
        ;
        e.prototype.l2 = function() {
            if (this.mP)
                return !1;
            var h = ka.CustomEvent
              , k = ka.Event
              , l = ka.dispatchEvent;
            if ("undefined" === typeof l)
                return !0;
            "function" === typeof h ? h = new h("unhandledrejection",{
                cancelable: !0
            }) : "function" === typeof k ? h = new k("unhandledrejection",{
                cancelable: !0
            }) : (h = ka.document.createEvent("CustomEvent"),
            h.initCustomEvent("unhandledrejection", !1, !0, h));
            h.promise = this;
            h.reason = this.Qe;
            return l(h)
        }
        ;
        e.prototype.ZX = function() {
            if (null != this.Pp) {
                for (var h = 0; h < this.Pp.length; ++h)
                    f.QK(this.Pp[h]);
                this.Pp = null
            }
        }
        ;
        var f = new b;
        e.prototype.I5 = function(h) {
            var k = this.oC();
            h.Cv(k.resolve, k.reject)
        }
        ;
        e.prototype.J5 = function(h, k) {
            var l = this.oC();
            try {
                h.call(k, l.resolve, l.reject)
            } catch (m) {
                l.reject(m)
            }
        }
        ;
        e.prototype.then = function(h, k) {
            function l(p, t) {
                return "function" == typeof p ? function(v) {
                    try {
                        m(p(v))
                    } catch (r) {
                        n(r)
                    }
                }
                : t
            }
            var m, n, q = new e(function(p, t) {
                m = p;
                n = t
            }
            );
            this.Cv(l(h, m), l(k, n));
            return q
        }
        ;
        e.prototype.catch = function(h) {
            return this.then(void 0, h)
        }
        ;
        e.prototype.Cv = function(h, k) {
            function l() {
                switch (m.Ca) {
                case 1:
                    h(m.Qe);
                    break;
                case 2:
                    k(m.Qe);
                    break;
                default:
                    throw Error("d`" + m.Ca);
                }
            }
            var m = this;
            null == this.Pp ? f.QK(l) : this.Pp.push(l);
            this.mP = !0
        }
        ;
        e.resolve = c;
        e.reject = function(h) {
            return new e(function(k, l) {
                l(h)
            }
            )
        }
        ;
        e.race = function(h) {
            return new e(function(k, l) {
                for (var m = _.sa(h), n = m.next(); !n.done; n = m.next())
                    c(n.value).Cv(k, l)
            }
            )
        }
        ;
        e.all = function(h) {
            var k = _.sa(h)
              , l = k.next();
            return l.done ? c([]) : new e(function(m, n) {
                function q(v) {
                    return function(r) {
                        p[v] = r;
                        t--;
                        0 == t && m(p)
                    }
                }
                var p = []
                  , t = 0;
                do
                    p.push(void 0),
                    t++,
                    c(l.value).Cv(q(p.length - 1), n),
                    l = k.next();
                while (!l.done)
            }
            )
        }
        ;
        return e
    });
    var Pa = function(a, b, c) {
        if (null == a)
            throw new TypeError("The 'this' value for String.prototype." + c + " must not be null or undefined");
        if (b instanceof RegExp)
            throw new TypeError("First argument to String.prototype." + c + " must not be a regular expression");
        return a + ""
    };
    la("String.prototype.startsWith", function(a) {
        return a ? a : function(b, c) {
            var d = Pa(this, b, "startsWith")
              , e = d.length
              , f = b.length;
            c = Math.max(0, Math.min(c | 0, d.length));
            for (var h = 0; h < f && c < e; )
                if (d[c++] != b[h++])
                    return !1;
            return h >= f
        }
    });
    var Qa = function(a, b) {
        return Object.prototype.hasOwnProperty.call(a, b)
    };
    la("WeakMap", function(a) {
        function b() {}
        function c(l) {
            var m = typeof l;
            return "object" === m && null !== l || "function" === m
        }
        function d(l) {
            if (!Qa(l, f)) {
                var m = new b;
                ia(l, f, {
                    value: m
                })
            }
        }
        function e(l) {
            var m = Object[l];
            m && (Object[l] = function(n) {
                if (n instanceof b)
                    return n;
                Object.isExtensible(n) && d(n);
                return m(n)
            }
            )
        }
        if (function() {
            if (!a || !Object.seal)
                return !1;
            try {
                var l = Object.seal({})
                  , m = Object.seal({})
                  , n = new a([[l, 2], [m, 3]]);
                if (2 != n.get(l) || 3 != n.get(m))
                    return !1;
                n.delete(l);
                n.set(m, 4);
                return !n.has(l) && 4 == n.get(m)
            } catch (q) {
                return !1
            }
        }())
            return a;
        var f = "$jscomp_hidden_" + Math.random();
        e("freeze");
        e("preventExtensions");
        e("seal");
        var h = 0
          , k = function(l) {
            this.Ba = (h += Math.random() + 1).toString();
            if (l) {
                l = _.sa(l);
                for (var m; !(m = l.next()).done; )
                    m = m.value,
                    this.set(m[0], m[1])
            }
        };
        k.prototype.set = function(l, m) {
            if (!c(l))
                throw Error("e");
            d(l);
            if (!Qa(l, f))
                throw Error("f`" + l);
            l[f][this.Ba] = m;
            return this
        }
        ;
        k.prototype.get = function(l) {
            return c(l) && Qa(l, f) ? l[f][this.Ba] : void 0
        }
        ;
        k.prototype.has = function(l) {
            return c(l) && Qa(l, f) && Qa(l[f], this.Ba)
        }
        ;
        k.prototype.delete = function(l) {
            return c(l) && Qa(l, f) && Qa(l[f], this.Ba) ? delete l[f][this.Ba] : !1
        }
        ;
        return k
    });
    la("Map", function(a) {
        if (function() {
            if (!a || "function" != typeof a || !a.prototype.entries || "function" != typeof Object.seal)
                return !1;
            try {
                var k = Object.seal({
                    x: 4
                })
                  , l = new a(_.sa([[k, "s"]]));
                if ("s" != l.get(k) || 1 != l.size || l.get({
                    x: 4
                }) || l.set({
                    x: 4
                }, "t") != l || 2 != l.size)
                    return !1;
                var m = l.entries()
                  , n = m.next();
                if (n.done || n.value[0] != k || "s" != n.value[1])
                    return !1;
                n = m.next();
                return n.done || 4 != n.value[0].x || "t" != n.value[1] || !m.next().done ? !1 : !0
            } catch (q) {
                return !1
            }
        }())
            return a;
        var b = new WeakMap
          , c = function(k) {
            this.Nf = {};
            this.qf = f();
            this.size = 0;
            if (k) {
                k = _.sa(k);
                for (var l; !(l = k.next()).done; )
                    l = l.value,
                    this.set(l[0], l[1])
            }
        };
        c.prototype.set = function(k, l) {
            k = 0 === k ? 0 : k;
            var m = d(this, k);
            m.list || (m.list = this.Nf[m.id] = []);
            m.De ? m.De.value = l : (m.De = {
                next: this.qf,
                Oj: this.qf.Oj,
                head: this.qf,
                key: k,
                value: l
            },
            m.list.push(m.De),
            this.qf.Oj.next = m.De,
            this.qf.Oj = m.De,
            this.size++);
            return this
        }
        ;
        c.prototype.delete = function(k) {
            k = d(this, k);
            return k.De && k.list ? (k.list.splice(k.index, 1),
            k.list.length || delete this.Nf[k.id],
            k.De.Oj.next = k.De.next,
            k.De.next.Oj = k.De.Oj,
            k.De.head = null,
            this.size--,
            !0) : !1
        }
        ;
        c.prototype.clear = function() {
            this.Nf = {};
            this.qf = this.qf.Oj = f();
            this.size = 0
        }
        ;
        c.prototype.has = function(k) {
            return !!d(this, k).De
        }
        ;
        c.prototype.get = function(k) {
            return (k = d(this, k).De) && k.value
        }
        ;
        c.prototype.entries = function() {
            return e(this, function(k) {
                return [k.key, k.value]
            })
        }
        ;
        c.prototype.keys = function() {
            return e(this, function(k) {
                return k.key
            })
        }
        ;
        c.prototype.values = function() {
            return e(this, function(k) {
                return k.value
            })
        }
        ;
        c.prototype.forEach = function(k, l) {
            for (var m = this.entries(), n; !(n = m.next()).done; )
                n = n.value,
                k.call(l, n[1], n[0], this)
        }
        ;
        c.prototype[Symbol.iterator] = c.prototype.entries;
        var d = function(k, l) {
            var m = l && typeof l;
            "object" == m || "function" == m ? b.has(l) ? m = b.get(l) : (m = "" + ++h,
            b.set(l, m)) : m = "p_" + l;
            var n = k.Nf[m];
            if (n && Qa(k.Nf, m))
                for (k = 0; k < n.length; k++) {
                    var q = n[k];
                    if (l !== l && q.key !== q.key || l === q.key)
                        return {
                            id: m,
                            list: n,
                            index: k,
                            De: q
                        }
                }
            return {
                id: m,
                list: n,
                index: -1,
                De: void 0
            }
        }
          , e = function(k, l) {
            var m = k.qf;
            return oa(function() {
                if (m) {
                    for (; m.head != k.qf; )
                        m = m.Oj;
                    for (; m.next != m.head; )
                        return m = m.next,
                        {
                            done: !1,
                            value: l(m)
                        };
                    m = null
                }
                return {
                    done: !0,
                    value: void 0
                }
            })
        }
          , f = function() {
            var k = {};
            return k.Oj = k.next = k.head = k
        }
          , h = 0;
        return c
    });
    la("Array.prototype.find", function(a) {
        return a ? a : function(b, c) {
            a: {
                var d = this;
                d instanceof String && (d = String(d));
                for (var e = d.length, f = 0; f < e; f++) {
                    var h = d[f];
                    if (b.call(c, h, f, d)) {
                        b = h;
                        break a
                    }
                }
                b = void 0
            }
            return b
        }
    });
    var Ra = function(a, b) {
        a instanceof String && (a += "");
        var c = 0
          , d = !1
          , e = {
            next: function() {
                if (!d && c < a.length) {
                    var f = c++;
                    return {
                        value: b(f, a[f]),
                        done: !1
                    }
                }
                d = !0;
                return {
                    done: !0,
                    value: void 0
                }
            }
        };
        e[Symbol.iterator] = function() {
            return e
        }
        ;
        return e
    };
    la("Array.prototype.entries", function(a) {
        return a ? a : function() {
            return Ra(this, function(b, c) {
                return [b, c]
            })
        }
    });
    la("Array.prototype.keys", function(a) {
        return a ? a : function() {
            return Ra(this, function(b) {
                return b
            })
        }
    });
    var Ta = "function" == typeof Object.assign ? Object.assign : function(a, b) {
        for (var c = 1; c < arguments.length; c++) {
            var d = arguments[c];
            if (d)
                for (var e in d)
                    Qa(d, e) && (a[e] = d[e])
        }
        return a
    }
    ;
    la("Object.assign", function(a) {
        return a || Ta
    });
    la("Set", function(a) {
        if (function() {
            if (!a || "function" != typeof a || !a.prototype.entries || "function" != typeof Object.seal)
                return !1;
            try {
                var c = Object.seal({
                    x: 4
                })
                  , d = new a(_.sa([c]));
                if (!d.has(c) || 1 != d.size || d.add(c) != d || 1 != d.size || d.add({
                    x: 4
                }) != d || 2 != d.size)
                    return !1;
                var e = d.entries()
                  , f = e.next();
                if (f.done || f.value[0] != c || f.value[1] != c)
                    return !1;
                f = e.next();
                return f.done || f.value[0] == c || 4 != f.value[0].x || f.value[1] != f.value[0] ? !1 : e.next().done
            } catch (h) {
                return !1
            }
        }())
            return a;
        var b = function(c) {
            this.va = new Map;
            if (c) {
                c = _.sa(c);
                for (var d; !(d = c.next()).done; )
                    this.add(d.value)
            }
            this.size = this.va.size
        };
        b.prototype.add = function(c) {
            c = 0 === c ? 0 : c;
            this.va.set(c, c);
            this.size = this.va.size;
            return this
        }
        ;
        b.prototype.delete = function(c) {
            c = this.va.delete(c);
            this.size = this.va.size;
            return c
        }
        ;
        b.prototype.clear = function() {
            this.va.clear();
            this.size = 0
        }
        ;
        b.prototype.has = function(c) {
            return this.va.has(c)
        }
        ;
        b.prototype.entries = function() {
            return this.va.entries()
        }
        ;
        b.prototype.values = function() {
            return this.va.values()
        }
        ;
        b.prototype.keys = b.prototype.values;
        b.prototype[Symbol.iterator] = b.prototype.values;
        b.prototype.forEach = function(c, d) {
            var e = this;
            this.va.forEach(function(f) {
                return c.call(d, f, f, e)
            })
        }
        ;
        return b
    });
    la("Number.isFinite", function(a) {
        return a ? a : function(b) {
            return "number" !== typeof b ? !1 : !isNaN(b) && Infinity !== b && -Infinity !== b
        }
    });
    la("Array.prototype.values", function(a) {
        return a ? a : function() {
            return Ra(this, function(b, c) {
                return c
            })
        }
    });
    la("Array.from", function(a) {
        return a ? a : function(b, c, d) {
            c = null != c ? c : function(k) {
                return k
            }
            ;
            var e = []
              , f = "undefined" != typeof Symbol && Symbol.iterator && b[Symbol.iterator];
            if ("function" == typeof f) {
                b = f.call(b);
                for (var h = 0; !(f = b.next()).done; )
                    e.push(c.call(d, f.value, h++))
            } else
                for (f = b.length,
                h = 0; h < f; h++)
                    e.push(c.call(d, b[h], h));
            return e
        }
    });
    la("Object.entries", function(a) {
        return a ? a : function(b) {
            var c = [], d;
            for (d in b)
                Qa(b, d) && c.push([d, b[d]]);
            return c
        }
    });
    la("Object.values", function(a) {
        return a ? a : function(b) {
            var c = [], d;
            for (d in b)
                Qa(b, d) && c.push(b[d]);
            return c
        }
    });
    la("Object.is", function(a) {
        return a ? a : function(b, c) {
            return b === c ? 0 !== b || 1 / b === 1 / c : b !== b && c !== c
        }
    });
    la("Array.prototype.includes", function(a) {
        return a ? a : function(b, c) {
            var d = this;
            d instanceof String && (d = String(d));
            var e = d.length;
            c = c || 0;
            for (0 > c && (c = Math.max(c + e, 0)); c < e; c++) {
                var f = d[c];
                if (f === b || Object.is(f, b))
                    return !0
            }
            return !1
        }
    });
    la("String.prototype.includes", function(a) {
        return a ? a : function(b, c) {
            return -1 !== Pa(this, b, "includes").indexOf(b, c || 0)
        }
    });
    la("Array.prototype.flat", function(a) {
        return a ? a : function(b) {
            b = void 0 === b ? 1 : b;
            var c = [];
            Array.prototype.forEach.call(this, function(d) {
                Array.isArray(d) && 0 < b ? (d = Array.prototype.flat.call(d, b - 1),
                c.push.apply(c, d)) : c.push(d)
            });
            return c
        }
    });
    la("Number.isNaN", function(a) {
        return a ? a : function(b) {
            return "number" === typeof b && isNaN(b)
        }
    });
    la("String.prototype.replaceAll", function(a) {
        return a ? a : function(b, c) {
            if (b instanceof RegExp && !b.global)
                throw new TypeError("String.prototype.replaceAll called with a non-global RegExp argument.");
            return b instanceof RegExp ? this.replace(b, c) : this.replace(new RegExp(String(b).replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08"),"g"), c)
        }
    });
    la("globalThis", function(a) {
        return a || ka
    });
    la("Math.imul", function(a) {
        return a ? a : function(b, c) {
            b = Number(b);
            c = Number(c);
            var d = b & 65535
              , e = c & 65535;
            return d * e + ((b >>> 16 & 65535) * e + d * (c >>> 16 & 65535) << 16 >>> 0) | 0
        }
    });
    la("String.fromCodePoint", function(a) {
        return a ? a : function(b) {
            for (var c = "", d = 0; d < arguments.length; d++) {
                var e = Number(arguments[d]);
                if (0 > e || 1114111 < e || e !== Math.floor(e))
                    throw new RangeError("invalid_code_point " + e);
                65535 >= e ? c += String.fromCharCode(e) : (e -= 65536,
                c += String.fromCharCode(e >>> 10 & 1023 | 55296),
                c += String.fromCharCode(e & 1023 | 56320))
            }
            return c
        }
    });
    _.Ua = {};
    /*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
    _.Xa = _.Xa || {};
    _.u = this || self;
    _.Za = "closure_uid_" + (1E9 * Math.random() >>> 0);
    _.E = function(a, b) {
        a = a.split(".");
        var c = _.u;
        a[0]in c || "undefined" == typeof c.execScript || c.execScript("var " + a[0]);
        for (var d; a.length && (d = a.shift()); )
            a.length || void 0 === b ? c = c[d] && c[d] !== Object.prototype[d] ? c[d] : c[d] = {} : c[d] = b
    }
    ;
    _.ab = function(a, b) {
        function c() {}
        c.prototype = b.prototype;
        a.H = b.prototype;
        a.prototype = new c;
        a.prototype.constructor = a;
        a.gr = function(d, e, f) {
            for (var h = Array(arguments.length - 2), k = 2; k < arguments.length; k++)
                h[k - 2] = arguments[k];
            return b.prototype[e].apply(d, h)
        }
    }
    ;
    _.bb = window.osapi = window.osapi || {};
    window.___jsl = window.___jsl || {};
    (window.___jsl.cd = window.___jsl.cd || []).push({
        gwidget: {
            parsetags: "explicit"
        },
        appsapi: {
            plus_one_service: "/plus/v1"
        },
        csi: {
            rate: .01
        },
        poshare: {
            hangoutContactPickerServer: "https://plus.google.com"
        },
        gappsutil: {
            required_scopes: ["https://www.googleapis.com/auth/plus.me", "https://www.googleapis.com/auth/plus.people.recommended"],
            display_on_page_ready: !1
        },
        appsutil: {
            required_scopes: ["https://www.googleapis.com/auth/plus.me", "https://www.googleapis.com/auth/plus.people.recommended"],
            display_on_page_ready: !1
        },
        "oauth-flow": {
            authUrl: "https://accounts.google.com/o/oauth2/auth",
            proxyUrl: "https://accounts.google.com/o/oauth2/postmessageRelay",
            redirectUri: "postmessage"
        },
        iframes: {
            sharebox: {
                params: {
                    json: "&"
                },
                url: ":socialhost:/:session_prefix:_/sharebox/dialog"
            },
            plus: {
                url: ":socialhost:/:session_prefix:_/widget/render/badge?usegapi=1"
            },
            ":socialhost:": "https://apis.google.com",
            ":im_socialhost:": "https://plus.googleapis.com",
            domains_suggest: {
                url: "https://domains.google.com/suggest/flow"
            },
            card: {
                params: {
                    s: "#",
                    userid: "&"
                },
                url: ":socialhost:/:session_prefix:_/hovercard/internalcard"
            },
            ":signuphost:": "https://plus.google.com",
            ":gplus_url:": "https://plus.google.com",
            plusone: {
                url: ":socialhost:/:session_prefix:_/+1/fastbutton?usegapi=1"
            },
            plus_share: {
                url: ":socialhost:/:session_prefix:_/+1/sharebutton?plusShare=true&usegapi=1"
            },
            plus_circle: {
                url: ":socialhost:/:session_prefix:_/widget/plus/circle?usegapi=1"
            },
            plus_followers: {
                url: ":socialhost:/_/im/_/widget/render/plus/followers?usegapi=1"
            },
            configurator: {
                url: ":socialhost:/:session_prefix:_/plusbuttonconfigurator?usegapi=1"
            },
            appcirclepicker: {
                url: ":socialhost:/:session_prefix:_/widget/render/appcirclepicker"
            },
            page: {
                url: ":socialhost:/:session_prefix:_/widget/render/page?usegapi=1"
            },
            person: {
                url: ":socialhost:/:session_prefix:_/widget/render/person?usegapi=1"
            },
            community: {
                url: ":ctx_socialhost:/:session_prefix::im_prefix:_/widget/render/community?usegapi=1"
            },
            follow: {
                url: ":socialhost:/:session_prefix:_/widget/render/follow?usegapi=1"
            },
            commentcount: {
                url: ":socialhost:/:session_prefix:_/widget/render/commentcount?usegapi=1"
            },
            comments: {
                url: ":socialhost:/:session_prefix:_/widget/render/comments?usegapi=1"
            },
            blogger: {
                url: ":socialhost:/:session_prefix:_/widget/render/blogger?usegapi=1"
            },
            youtube: {
                url: ":socialhost:/:session_prefix:_/widget/render/youtube?usegapi=1"
            },
            reportabuse: {
                url: ":socialhost:/:session_prefix:_/widget/render/reportabuse?usegapi=1"
            },
            additnow: {
                url: ":socialhost:/additnow/additnow.html"
            },
            appfinder: {
                url: "https://workspace.google.com/:session_prefix:marketplace/appfinder?usegapi=1"
            },
            ":source:": "1p"
        },
        poclient: {
            update_session: "google.updateSessionCallback"
        },
        "googleapis.config": {
            rpc: "/rpc",
            root: "https://content.googleapis.com",
            "root-1p": "https://clients6.google.com",
            useGapiForXd3: !0,
            xd3: "/static/proxy.html",
            auth: {
                useInterimAuth: !1
            }
        },
        report: {
            apis: ["iframes\\..*", "gadgets\\..*", "gapi\\.appcirclepicker\\..*", "gapi\\.client\\..*"],
            rate: 1E-4
        },
        client: {
            perApiBatch: !0
        }
    });
    /*

 SPDX-License-Identifier: Apache-2.0
*/
    var Fb, Hb, Ib, Wb, Yb, Zb, $b;
    _.cb = function(a, b) {
        return _.ba[a] = b
    }
    ;
    _.fb = function(a, b) {
        if (Error.captureStackTrace)
            Error.captureStackTrace(this, _.fb);
        else {
            var c = Error().stack;
            c && (this.stack = c)
        }
        a && (this.message = String(a));
        void 0 !== b && (this.cause = b);
        this.iR = !0
    }
    ;
    _.hb = function(a, b) {
        return 0 <= (0,
        _.gb)(a, b)
    }
    ;
    _.ib = function(a) {
        var b = a.length;
        if (0 < b) {
            for (var c = Array(b), d = 0; d < b; d++)
                c[d] = a[d];
            return c
        }
        return []
    }
    ;
    _.lb = function(a, b, c) {
        for (var d in a)
            b.call(c, a[d], d, a)
    }
    ;
    _.nb = function(a, b) {
        for (var c in a)
            if (a[c] == b)
                return !0;
        return !1
    }
    ;
    _.ob = function() {
        var a = _.u.navigator;
        return a && (a = a.userAgent) ? a : ""
    }
    ;
    _.sb = function(a) {
        return _.pb ? _.qb ? _.qb.brands.some(function(b) {
            return (b = b.brand) && _.rb(b, a)
        }) : !1 : !1
    }
    ;
    _.tb = function(a) {
        return _.rb(_.ob(), a)
    }
    ;
    _.ub = function() {
        return _.pb ? !!_.qb && 0 < _.qb.brands.length : !1
    }
    ;
    _.vb = function() {
        return _.ub() ? !1 : _.tb("Opera")
    }
    ;
    _.wb = function() {
        return _.ub() ? !1 : _.tb("Trident") || _.tb("MSIE")
    }
    ;
    _.xb = function() {
        return _.ub() ? !1 : _.tb("Edge")
    }
    ;
    _.yb = function() {
        return _.ub() ? _.sb("Microsoft Edge") : _.tb("Edg/")
    }
    ;
    _.zb = function() {
        return _.tb("Firefox") || _.tb("FxiOS")
    }
    ;
    _.Bb = function() {
        return _.tb("Safari") && !(_.Ab() || (_.ub() ? 0 : _.tb("Coast")) || _.vb() || _.xb() || _.yb() || (_.ub() ? _.sb("Opera") : _.tb("OPR")) || _.zb() || _.tb("Silk") || _.tb("Android"))
    }
    ;
    _.Ab = function() {
        return _.ub() ? _.sb("Chromium") : (_.tb("Chrome") || _.tb("CriOS")) && !_.xb() || _.tb("Silk")
    }
    ;
    _.Cb = function() {
        return _.tb("Android") && !(_.Ab() || _.zb() || _.vb() || _.tb("Silk"))
    }
    ;
    _.Eb = function(a, b) {
        if (void 0 !== a.tagName) {
            if ("script" === a.tagName.toLowerCase())
                throw Error("q");
            if ("style" === a.tagName.toLowerCase())
                throw Error("q");
        }
        a.innerHTML = _.Db(b)
    }
    ;
    Fb = function(a) {
        return {
            valueOf: a
        }.valueOf()
    }
    ;
    Hb = function(a) {
        return new _.Gb(function(b) {
            return b.substr(0, a.length + 1).toLowerCase() === a + ":"
        }
        )
    }
    ;
    Ib = function() {
        return _.pb ? !!_.qb && !!_.qb.platform : !1
    }
    ;
    _.Jb = function() {
        return Ib() ? "Android" === _.qb.platform : _.tb("Android")
    }
    ;
    _.Lb = function() {
        return _.tb("iPhone") && !_.tb("iPod") && !_.tb("iPad")
    }
    ;
    _.Mb = function() {
        return _.Lb() || _.tb("iPad") || _.tb("iPod")
    }
    ;
    _.Nb = function() {
        return Ib() ? "macOS" === _.qb.platform : _.tb("Macintosh")
    }
    ;
    _.Ob = function() {
        return Ib() ? "Windows" === _.qb.platform : _.tb("Windows")
    }
    ;
    _.Pb = function() {
        return Ib() ? "Chrome OS" === _.qb.platform : _.tb("CrOS")
    }
    ;
    _.Qb = function(a) {
        return null === a ? "null" : void 0 === a ? "undefined" : a
    }
    ;
    _.Rb = function(a) {
        var b = typeof a;
        return "object" == b && null != a || "function" == b
    }
    ;
    _.L = function(a, b) {
        a.prototype = (0,
        _.xa)(b.prototype);
        a.prototype.constructor = a;
        if (_.Ja)
            (0,
            _.Ja)(a, b);
        else
            for (var c in b)
                if ("prototype" != c)
                    if (Object.defineProperties) {
                        var d = Object.getOwnPropertyDescriptor(b, c);
                        d && Object.defineProperty(a, c, d)
                    } else
                        a[c] = b[c];
        a.H = b.prototype
    }
    ;
    _.Sb = function(a, b) {
        a = a.split(".");
        b = b || _.u;
        for (var c = 0; c < a.length; c++)
            if (b = b[a[c]],
            null == b)
                return null;
        return b
    }
    ;
    _.Tb = function(a) {
        var b = typeof a;
        return "object" != b ? b : a ? Array.isArray(a) ? "array" : b : "null"
    }
    ;
    _.Ub = function(a) {
        var b = _.Tb(a);
        return "array" == b || "object" == b && "number" == typeof a.length
    }
    ;
    Wb = 0;
    _.Xb = function(a) {
        return Object.prototype.hasOwnProperty.call(a, _.Za) && a[_.Za] || (a[_.Za] = ++Wb)
    }
    ;
    Yb = function(a, b, c) {
        return a.call.apply(a.bind, arguments)
    }
    ;
    Zb = function(a, b, c) {
        if (!a)
            throw Error();
        if (2 < arguments.length) {
            var d = Array.prototype.slice.call(arguments, 2);
            return function() {
                var e = Array.prototype.slice.call(arguments);
                Array.prototype.unshift.apply(e, d);
                return a.apply(b, e)
            }
        }
        return function() {
            return a.apply(b, arguments)
        }
    }
    ;
    _.M = function(a, b, c) {
        _.M = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? Yb : Zb;
        return _.M.apply(null, arguments)
    }
    ;
    $b = function(a) {
        return a
    }
    ;
    _.ab(_.fb, Error);
    _.fb.prototype.name = "CustomError";
    var ac;
    _.gb = Array.prototype.indexOf ? function(a, b) {
        return Array.prototype.indexOf.call(a, b, void 0)
    }
    : function(a, b) {
        if ("string" === typeof a)
            return "string" !== typeof b || 1 != b.length ? -1 : a.indexOf(b, 0);
        for (var c = 0; c < a.length; c++)
            if (c in a && a[c] === b)
                return c;
        return -1
    }
    ;
    _.bc = Array.prototype.lastIndexOf ? function(a, b) {
        return Array.prototype.lastIndexOf.call(a, b, a.length - 1)
    }
    : function(a, b) {
        var c = a.length - 1;
        0 > c && (c = Math.max(0, a.length + c));
        if ("string" === typeof a)
            return "string" !== typeof b || 1 != b.length ? -1 : a.lastIndexOf(b, c);
        for (; 0 <= c; c--)
            if (c in a && a[c] === b)
                return c;
        return -1
    }
    ;
    _.cc = Array.prototype.forEach ? function(a, b, c) {
        Array.prototype.forEach.call(a, b, c)
    }
    : function(a, b, c) {
        for (var d = a.length, e = "string" === typeof a ? a.split("") : a, f = 0; f < d; f++)
            f in e && b.call(c, e[f], f, a)
    }
    ;
    _.dc = Array.prototype.map ? function(a, b) {
        return Array.prototype.map.call(a, b, void 0)
    }
    : function(a, b) {
        for (var c = a.length, d = Array(c), e = "string" === typeof a ? a.split("") : a, f = 0; f < c; f++)
            f in e && (d[f] = b.call(void 0, e[f], f, a));
        return d
    }
    ;
    _.ec = Array.prototype.some ? function(a, b, c) {
        return Array.prototype.some.call(a, b, c)
    }
    : function(a, b, c) {
        for (var d = a.length, e = "string" === typeof a ? a.split("") : a, f = 0; f < d; f++)
            if (f in e && b.call(c, e[f], f, a))
                return !0;
        return !1
    }
    ;
    _.fc = Array.prototype.every ? function(a, b, c) {
        return Array.prototype.every.call(a, b, c)
    }
    : function(a, b, c) {
        for (var d = a.length, e = "string" === typeof a ? a.split("") : a, f = 0; f < d; f++)
            if (f in e && !b.call(c, e[f], f, a))
                return !1;
        return !0
    }
    ;
    var hc, ic;
    hc = _.Sb("WIZ_global_data.oxN3nb");
    ic = hc && hc[610401301];
    _.pb = null != ic ? ic : !1;
    var jc, kc = function() {
        if (void 0 === jc) {
            var a = null
              , b = _.u.trustedTypes;
            if (b && b.createPolicy)
                try {
                    a = b.createPolicy("goog#html", {
                        createHTML: $b,
                        createScript: $b,
                        createScriptURL: $b
                    })
                } catch (c) {
                    _.u.console && _.u.console.error(c.message)
                }
            jc = a
        }
        return jc
    };
    var oc, lc;
    _.pc = function(a, b) {
        this.QS = a === lc && b || "";
        this.VV = oc
    }
    ;
    _.pc.prototype.zi = !0;
    _.pc.prototype.zg = function() {
        return this.QS
    }
    ;
    _.qc = function(a) {
        return a instanceof _.pc && a.constructor === _.pc && a.VV === oc ? a.QS : "type_error:Const"
    }
    ;
    _.rc = function(a) {
        return new _.pc(lc,a)
    }
    ;
    oc = {};
    lc = {};
    var sc;
    _.tc = function(a, b) {
        this.lG = b === sc ? a : ""
    }
    ;
    _.tc.prototype.toString = function() {
        return this.lG + ""
    }
    ;
    _.tc.prototype.zi = !0;
    _.tc.prototype.zg = function() {
        return this.lG.toString()
    }
    ;
    _.vc = function(a) {
        return _.uc(a).toString()
    }
    ;
    _.uc = function(a) {
        if (a instanceof _.tc && a.constructor === _.tc)
            return a.lG;
        _.Tb(a);
        return "type_error:TrustedResourceUrl"
    }
    ;
    _.xc = function(a) {
        return _.wc(_.qc(a))
    }
    ;
    sc = {};
    _.wc = function(a) {
        var b = kc();
        a = b ? b.createScriptURL(a) : a;
        return new _.tc(a,sc)
    }
    ;
    var Dc, Ec, Fc, Gc, Hc, Ic, Cc, Kc;
    _.yc = function(a, b) {
        return 0 == a.lastIndexOf(b, 0)
    }
    ;
    _.zc = function(a) {
        return /^[\s\xa0]*$/.test(a)
    }
    ;
    _.Ac = String.prototype.trim ? function(a) {
        return a.trim()
    }
    : function(a) {
        return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]
    }
    ;
    _.Jc = function(a) {
        if (!Cc.test(a))
            return a;
        -1 != a.indexOf("&") && (a = a.replace(Dc, "&amp;"));
        -1 != a.indexOf("<") && (a = a.replace(Ec, "&lt;"));
        -1 != a.indexOf(">") && (a = a.replace(Fc, "&gt;"));
        -1 != a.indexOf('"') && (a = a.replace(Gc, "&quot;"));
        -1 != a.indexOf("'") && (a = a.replace(Hc, "&#39;"));
        -1 != a.indexOf("\x00") && (a = a.replace(Ic, "&#0;"));
        return a
    }
    ;
    Dc = /&/g;
    Ec = /</g;
    Fc = />/g;
    Gc = /"/g;
    Hc = /'/g;
    Ic = /\x00/g;
    Cc = /[\x00&<>"']/;
    _.rb = function(a, b) {
        return -1 != a.indexOf(b)
    }
    ;
    _.Lc = function(a, b) {
        var c = 0;
        a = (0,
        _.Ac)(String(a)).split(".");
        b = (0,
        _.Ac)(String(b)).split(".");
        for (var d = Math.max(a.length, b.length), e = 0; 0 == c && e < d; e++) {
            var f = a[e] || ""
              , h = b[e] || "";
            do {
                f = /(\d*)(\D*)(.*)/.exec(f) || ["", "", "", ""];
                h = /(\d*)(\D*)(.*)/.exec(h) || ["", "", "", ""];
                if (0 == f[0].length && 0 == h[0].length)
                    break;
                c = Kc(0 == f[1].length ? 0 : parseInt(f[1], 10), 0 == h[1].length ? 0 : parseInt(h[1], 10)) || Kc(0 == f[2].length, 0 == h[2].length) || Kc(f[2], h[2]);
                f = f[3];
                h = h[3]
            } while (0 == c)
        }
        return c
    }
    ;
    Kc = function(a, b) {
        return a < b ? -1 : a > b ? 1 : 0
    }
    ;
    var Rc, Sc, Vc, Wc, Oc;
    _.Pc = function(a, b) {
        this.kG = b === Oc ? a : ""
    }
    ;
    _.Pc.prototype.toString = function() {
        return this.kG.toString()
    }
    ;
    _.Pc.prototype.zi = !0;
    _.Pc.prototype.zg = function() {
        return this.kG.toString()
    }
    ;
    _.Qc = function(a) {
        if (a instanceof _.Pc && a.constructor === _.Pc)
            return a.kG;
        _.Tb(a);
        return "type_error:SafeUrl"
    }
    ;
    Rc = /^data:(.*);base64,[a-z0-9+\/]+=*$/i;
    Sc = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;
    _.Uc = function(a) {
        if (a instanceof _.Pc)
            return a;
        a = "object" == typeof a && a.zi ? a.zg() : String(a);
        Sc.test(a) ? a = _.Tc(a) : (a = String(a).replace(/(%0A|%0D)/g, ""),
        a = a.match(Rc) ? _.Tc(a) : null);
        return a
    }
    ;
    try {
        new URL("s://g"),
        Vc = !0
    } catch (a) {
        Vc = !1
    }
    Wc = Vc;
    _.Xc = function(a) {
        if (a instanceof _.Pc)
            return a;
        a = "object" == typeof a && a.zi ? a.zg() : String(a);
        a: {
            var b = a;
            if (Wc) {
                try {
                    var c = new URL(b)
                } catch (d) {
                    b = "https:";
                    break a
                }
                b = c.protocol
            } else
                b: {
                    c = document.createElement("a");
                    try {
                        c.href = b
                    } catch (d) {
                        b = void 0;
                        break b
                    }
                    b = c.protocol;
                    b = ":" === b || "" === b ? "https:" : b
                }
        }
        "javascript:" === b && (a = "about:invalid#zClosurez");
        return _.Tc(a)
    }
    ;
    Oc = {};
    _.Tc = function(a) {
        return new _.Pc(a,Oc)
    }
    ;
    _.Yc = _.Tc("about:invalid#zClosurez");
    _.Zc = {};
    _.$c = function(a, b) {
        this.jG = b === _.Zc ? a : "";
        this.zi = !0
    }
    ;
    _.$c.prototype.zg = function() {
        return this.jG
    }
    ;
    _.$c.prototype.toString = function() {
        return this.jG.toString()
    }
    ;
    _.ad = new _.$c("",_.Zc);
    _.bd = RegExp("^[-+,.\"'%_!#/ a-zA-Z0-9\\[\\]]+$");
    _.cd = RegExp("\\b(url\\([ \t\n]*)('[ -&(-\\[\\]-~]*'|\"[ !#-\\[\\]-~]*\"|[!#-&*-\\[\\]-~]*)([ \t\n]*\\))", "g");
    _.dd = RegExp("\\b(calc|cubic-bezier|fit-content|hsl|hsla|linear-gradient|matrix|minmax|radial-gradient|repeat|rgb|rgba|(rotate|scale|translate)(X|Y|Z|3d)?|steps|var)\\([-+*/0-9a-zA-Z.%#\\[\\], ]+\\)", "g");
    _.ed = {};
    _.fd = function(a, b) {
        this.iG = b === _.ed ? a : "";
        this.zi = !0
    }
    ;
    _.fd.prototype.toString = function() {
        return this.iG.toString()
    }
    ;
    _.hd = function(a) {
        a = _.qc(a);
        return 0 === a.length ? gd : new _.fd(a,_.ed)
    }
    ;
    _.fd.prototype.zg = function() {
        return this.iG
    }
    ;
    var gd = new _.fd("",_.ed);
    var id;
    id = _.u.navigator;
    _.qb = id ? id.userAgentData || null : null;
    var jd;
    jd = {};
    _.kd = function(a, b) {
        this.hG = b === jd ? a : "";
        this.zi = !0
    }
    ;
    _.kd.prototype.zg = function() {
        return this.hG.toString()
    }
    ;
    _.kd.prototype.toString = function() {
        return this.hG.toString()
    }
    ;
    _.Db = function(a) {
        if (a instanceof _.kd && a.constructor === _.kd)
            return a.hG;
        _.Tb(a);
        return "type_error:SafeHtml"
    }
    ;
    _.md = function(a) {
        return a instanceof _.kd ? a : _.ld(_.Jc("object" == typeof a && a.zi ? a.zg() : String(a)))
    }
    ;
    _.ld = function(a) {
        var b = kc();
        a = b ? b.createHTML(a) : a;
        return new _.kd(a,jd)
    }
    ;
    _.nd = new _.kd(_.u.trustedTypes && _.u.trustedTypes.emptyHTML || "",jd);
    _.od = _.ld("<br>");
    var qd = function(a, b, c, d) {
        var e = new Map(pd);
        this.tW = a;
        this.cM = e;
        this.uW = b;
        this.PZ = c;
        this.PN = d
    };
    var rd = "ARTICLE SECTION NAV ASIDE H1 H2 H3 H4 H5 H6 HEADER FOOTER ADDRESS P HR PRE BLOCKQUOTE OL UL LH LI DL DT DD FIGURE FIGCAPTION MAIN DIV EM STRONG SMALL S CITE Q DFN ABBR RUBY RB RT RTC RP DATA TIME CODE VAR SAMP KBD SUB SUP I B U MARK BDI BDO SPAN BR WBR INS DEL PICTURE PARAM TRACK MAP TABLE CAPTION COLGROUP COL TBODY THEAD TFOOT TR TD TH SELECT DATALIST OPTGROUP OPTION OUTPUT PROGRESS METER FIELDSET LEGEND DETAILS SUMMARY MENU DIALOG SLOT CANVAS FONT CENTER".split(" ")
      , pd = [["A", new Map([["href", {
        zd: 2
    }]])], ["AREA", new Map([["href", {
        zd: 2
    }]])], ["LINK", new Map([["href", {
        zd: 2,
        conditions: new Map([["rel", new Set("alternate author bookmark canonical cite help icon license next prefetch dns-prefetch prerender preconnect preload prev search subresource".split(" "))]])
    }]])], ["SOURCE", new Map([["src", {
        zd: 1
    }]])], ["IMG", new Map([["src", {
        zd: 1
    }]])], ["VIDEO", new Map([["src", {
        zd: 1
    }]])], ["AUDIO", new Map([["src", {
        zd: 1
    }]])]]
      , sd = "title aria-atomic aria-autocomplete aria-busy aria-checked aria-current aria-disabled aria-dropeffect aria-expanded aria-haspopup aria-hidden aria-invalid aria-label aria-level aria-live aria-multiline aria-multiselectable aria-orientation aria-posinset aria-pressed aria-readonly aria-relevant aria-required aria-selected aria-setsize aria-sort aria-valuemax aria-valuemin aria-valuenow aria-valuetext alt align autocapitalize autocomplete autocorrect autofocus autoplay bgcolor border cellpadding cellspacing checked color cols colspan controls datetime disabled download draggable enctype face formenctype frameborder height hreflang hidden ismap label lang loop max maxlength media minlength min multiple muted nonce open placeholder preload rel required reversed role rows rowspan selected shape size sizes slot span spellcheck start step summary translate type valign value width wrap itemscope itemtype itemid itemprop itemref".split(" ")
      , td = [["dir", {
        zd: 3,
        conditions: Fb(function() {
            return new Map([["dir", new Set(["auto", "ltr", "rtl"])]])
        })
    }], ["async", {
        zd: 3,
        conditions: Fb(function() {
            return new Map([["async", new Set(["async"])]])
        })
    }], ["cite", {
        zd: 2
    }], ["loading", {
        zd: 3,
        conditions: Fb(function() {
            return new Map([["loading", new Set(["eager", "lazy"])]])
        })
    }], ["poster", {
        zd: 2
    }], ["target", {
        zd: 3,
        conditions: Fb(function() {
            return new Map([["target", new Set(["_self", "_blank"])]])
        })
    }]]
      , ud = new qd(new Set(rd),new Set(sd),new Map(td))
      , vd = new qd(new Set(rd),new Set(Fb(function() {
        return sd.concat(["class", "id"])
    })),new Map(Fb(function() {
        return td.concat([["style", {
            zd: 4
        }]])
    })))
      , wd = new qd(new Set(Fb(function() {
        return rd.concat("STYLE TITLE INPUT TEXTAREA BUTTON LABEL".split(" "))
    })),new Set(Fb(function() {
        return sd.concat(["class", "id", "tabindex", "contenteditable", "name"])
    })),new Map(Fb(function() {
        return td.concat([["style", {
            zd: 4
        }]])
    })),new Set(["data-", "aria-"]));
    _.xd = Fb(function() {
        try {
            return new URL("s://g"),
            !0
        } catch (a) {
            return !1
        }
    });
    var yd;
    yd = function(a) {
        this.wR = a;
        this.Hv = []
    }
    ;
    _.zd = Fb(function() {
        return new yd(ud)
    });
    _.Ad = Fb(function() {
        return new yd(vd)
    });
    _.Bd = Fb(function() {
        return new yd(wd)
    });
    _.Gb = function(a) {
        this.Hi = a
    }
    ;
    _.Cd = [Hb("data"), Hb("http"), Hb("https"), Hb("mailto"), Hb("ftp"), new _.Gb(function(a) {
        return /^[^:]*([/?#]|$)/.test(a)
    }
    )];
    var Dd = function(a) {
        Dd[" "](a);
        return a
    };
    Dd[" "] = function() {}
    ;
    _.Ed = function(a, b) {
        try {
            return Dd(a[b]),
            !0
        } catch (c) {}
        return !1
    }
    ;
    var Vd, Wd, ae;
    _.Fd = _.vb();
    _.Gd = _.wb();
    _.Hd = _.tb("Edge");
    _.Id = _.Hd || _.Gd;
    _.Kd = _.tb("Gecko") && !(_.rb(_.ob().toLowerCase(), "webkit") && !_.tb("Edge")) && !(_.tb("Trident") || _.tb("MSIE")) && !_.tb("Edge");
    _.Ld = _.rb(_.ob().toLowerCase(), "webkit") && !_.tb("Edge");
    _.Md = _.Ld && _.tb("Mobile");
    _.Nd = _.Nb();
    _.Od = _.Ob();
    _.Pd = (Ib() ? "Linux" === _.qb.platform : _.tb("Linux")) || _.Pb();
    _.Qd = _.Jb();
    _.Rd = _.Lb();
    _.Sd = _.tb("iPad");
    _.Td = _.tb("iPod");
    _.Ud = _.Mb();
    Vd = function() {
        var a = _.u.document;
        return a ? a.documentMode : void 0
    }
    ;
    a: {
        var Xd = ""
          , Yd = function() {
            var a = _.ob();
            if (_.Kd)
                return /rv:([^\);]+)(\)|;)/.exec(a);
            if (_.Hd)
                return /Edge\/([\d\.]+)/.exec(a);
            if (_.Gd)
                return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
            if (_.Ld)
                return /WebKit\/(\S+)/.exec(a);
            if (_.Fd)
                return /(?:Version)[ \/]?(\S+)/.exec(a)
        }();
        Yd && (Xd = Yd ? Yd[1] : "");
        if (_.Gd) {
            var Zd = Vd();
            if (null != Zd && Zd > parseFloat(Xd)) {
                Wd = String(Zd);
                break a
            }
        }
        Wd = Xd
    }
    _.$d = Wd;
    if (_.u.document && _.Gd) {
        var be = Vd();
        ae = be ? be : parseInt(_.$d, 10) || void 0
    } else
        ae = void 0;
    _.ce = ae;
    try {
        (new self.OffscreenCanvas(0,0)).getContext("2d")
    } catch (a) {}
    _.de = _.Gd || _.Ld;
    _.ee = function(a) {
        var b = !1, c;
        return function() {
            b || (c = a(),
            b = !0);
            return c
        }
    }
    ;
    var fe, je;
    fe = _.ee(function() {
        var a = document.createElement("div")
          , b = document.createElement("div");
        b.appendChild(document.createElement("div"));
        a.appendChild(b);
        b = a.firstChild.firstChild;
        a.innerHTML = _.Db(_.nd);
        return !b.parentElement
    });
    _.ge = function(a, b) {
        if (fe())
            for (; a.lastChild; )
                a.removeChild(a.lastChild);
        a.innerHTML = _.Db(b)
    }
    ;
    _.he = function(a, b) {
        b = b instanceof _.Pc ? b : _.Xc(b);
        a.href = _.Qc(b)
    }
    ;
    _.ie = function(a, b, c, d) {
        a = a instanceof _.Pc ? a : _.Xc(a);
        b = b || _.u;
        c = c instanceof _.pc ? _.qc(c) : c || "";
        return void 0 !== d ? b.open(_.Qc(a), c, d) : b.open(_.Qc(a), c)
    }
    ;
    je = /^[\w+/_-]+[=]{0,2}$/;
    _.ke = function(a, b) {
        b = (b || _.u).document;
        return b.querySelector ? (a = b.querySelector(a)) && (a = a.nonce || a.getAttribute("nonce")) && je.test(a) ? a : "" : ""
    }
    ;
    _.le = String.prototype.repeat ? function(a, b) {
        return a.repeat(b)
    }
    : function(a, b) {
        return Array(b + 1).join(a)
    }
    ;
    _.me = 2147483648 * Math.random() | 0;
    var re, xe;
    _.pe = function(a) {
        return a ? new _.ne(_.oe(a)) : ac || (ac = new _.ne)
    }
    ;
    _.qe = function(a, b, c, d) {
        a = d || a;
        b = b && "*" != b ? String(b).toUpperCase() : "";
        if (a.querySelectorAll && a.querySelector && (b || c))
            return a.querySelectorAll(b + (c ? "." + c : ""));
        if (c && a.getElementsByClassName) {
            a = a.getElementsByClassName(c);
            if (b) {
                d = {};
                for (var e = 0, f = 0, h; h = a[f]; f++)
                    b == h.nodeName && (d[e++] = h);
                d.length = e;
                return d
            }
            return a
        }
        a = a.getElementsByTagName(b || "*");
        if (c) {
            d = {};
            for (f = e = 0; h = a[f]; f++)
                b = h.className,
                "function" == typeof b.split && _.hb(b.split(/\s+/), c) && (d[e++] = h);
            d.length = e;
            return d
        }
        return a
    }
    ;
    _.te = function(a, b) {
        _.lb(b, function(c, d) {
            c && "object" == typeof c && c.zi && (c = c.zg());
            "style" == d ? a.style.cssText = c : "class" == d ? a.className = c : "for" == d ? a.htmlFor = c : re.hasOwnProperty(d) ? a.setAttribute(re[d], c) : _.yc(d, "aria-") || _.yc(d, "data-") ? a.setAttribute(d, c) : a[d] = c
        })
    }
    ;
    re = {
        cellpadding: "cellPadding",
        cellspacing: "cellSpacing",
        colspan: "colSpan",
        frameborder: "frameBorder",
        height: "height",
        maxlength: "maxLength",
        nonce: "nonce",
        role: "role",
        rowspan: "rowSpan",
        type: "type",
        usemap: "useMap",
        valign: "vAlign",
        width: "width"
    };
    _.ve = function(a) {
        return a ? a.parentWindow || a.defaultView : window
    }
    ;
    _.ye = function(a, b) {
        var c = b[1]
          , d = _.we(a, String(b[0]));
        c && ("string" === typeof c ? d.className = c : Array.isArray(c) ? d.className = c.join(" ") : _.te(d, c));
        2 < b.length && xe(a, d, b, 2);
        return d
    }
    ;
    xe = function(a, b, c, d) {
        function e(k) {
            k && b.appendChild("string" === typeof k ? a.createTextNode(k) : k)
        }
        for (; d < c.length; d++) {
            var f = c[d];
            if (!_.Ub(f) || _.Rb(f) && 0 < f.nodeType)
                e(f);
            else {
                a: {
                    if (f && "number" == typeof f.length) {
                        if (_.Rb(f)) {
                            var h = "function" == typeof f.item || "string" == typeof f.item;
                            break a
                        }
                        if ("function" === typeof f) {
                            h = "function" == typeof f.item;
                            break a
                        }
                    }
                    h = !1
                }
                _.cc(h ? _.ib(f) : f, e)
            }
        }
    }
    ;
    _.ze = function(a) {
        return _.we(document, a)
    }
    ;
    _.we = function(a, b) {
        b = String(b);
        "application/xhtml+xml" === a.contentType && (b = b.toLowerCase());
        return a.createElement(b)
    }
    ;
    _.Ae = function(a) {
        if (1 != a.nodeType)
            return !1;
        switch (a.tagName) {
        case "APPLET":
        case "AREA":
        case "BASE":
        case "BR":
        case "COL":
        case "COMMAND":
        case "EMBED":
        case "FRAME":
        case "HR":
        case "IMG":
        case "INPUT":
        case "IFRAME":
        case "ISINDEX":
        case "KEYGEN":
        case "LINK":
        case "NOFRAMES":
        case "NOSCRIPT":
        case "META":
        case "OBJECT":
        case "PARAM":
        case "SCRIPT":
        case "SOURCE":
        case "STYLE":
        case "TRACK":
        case "WBR":
            return !1
        }
        return !0
    }
    ;
    _.Be = function(a, b) {
        xe(_.oe(a), a, arguments, 1)
    }
    ;
    _.Ce = function(a) {
        for (var b; b = a.firstChild; )
            a.removeChild(b)
    }
    ;
    _.De = function(a, b) {
        b.parentNode && b.parentNode.insertBefore(a, b)
    }
    ;
    _.Ee = function(a) {
        return a && a.parentNode ? a.parentNode.removeChild(a) : null
    }
    ;
    _.Fe = function(a) {
        return void 0 != a.children ? a.children : Array.prototype.filter.call(a.childNodes, function(b) {
            return 1 == b.nodeType
        })
    }
    ;
    _.Ge = function(a) {
        return _.Rb(a) && 1 == a.nodeType
    }
    ;
    _.He = function(a, b) {
        if (!a || !b)
            return !1;
        if (a.contains && 1 == b.nodeType)
            return a == b || a.contains(b);
        if ("undefined" != typeof a.compareDocumentPosition)
            return a == b || !!(a.compareDocumentPosition(b) & 16);
        for (; b && a != b; )
            b = b.parentNode;
        return b == a
    }
    ;
    _.oe = function(a) {
        return 9 == a.nodeType ? a : a.ownerDocument || a.document
    }
    ;
    _.Ie = function(a, b) {
        if ("textContent"in a)
            a.textContent = b;
        else if (3 == a.nodeType)
            a.data = String(b);
        else if (a.firstChild && 3 == a.firstChild.nodeType) {
            for (; a.lastChild != a.firstChild; )
                a.removeChild(a.lastChild);
            a.firstChild.data = String(b)
        } else
            _.Ce(a),
            a.appendChild(_.oe(a).createTextNode(String(b)))
    }
    ;
    _.ne = function(a) {
        this.qb = a || _.u.document || document
    }
    ;
    _.g = _.ne.prototype;
    _.g.Ea = _.pe;
    _.g.lH = _.ea(0);
    _.g.hb = function() {
        return this.qb
    }
    ;
    _.g.N = _.ea(1);
    _.g.getElementsByTagName = function(a, b) {
        return (b || this.qb).getElementsByTagName(String(a))
    }
    ;
    _.g.na = function(a, b, c) {
        return _.ye(this.qb, arguments)
    }
    ;
    _.g.createElement = function(a) {
        return _.we(this.qb, a)
    }
    ;
    _.g.createTextNode = function(a) {
        return this.qb.createTextNode(String(a))
    }
    ;
    _.g.getWindow = function() {
        var a = this.qb;
        return a.parentWindow || a.defaultView
    }
    ;
    _.g.appendChild = function(a, b) {
        a.appendChild(b)
    }
    ;
    _.g.append = _.Be;
    _.g.canHaveChildren = _.Ae;
    _.g.Sd = _.Ce;
    _.g.UO = _.De;
    _.g.removeNode = _.Ee;
    _.g.kD = _.Fe;
    _.g.isElement = _.Ge;
    _.g.contains = _.He;
    _.g.Fi = _.ea(2);
    /*
 gapi.loader.OBJECT_CREATE_TEST_OVERRIDE &&*/
    _.Je = window;
    _.Ke = document;
    _.Le = _.Je.location;
    _.Me = /\[native code\]/;
    _.Ne = function(a, b, c) {
        return a[b] = a[b] || c
    }
    ;
    _.Oe = function() {
        var a;
        if ((a = Object.create) && _.Me.test(a))
            a = a(null);
        else {
            a = {};
            for (var b in a)
                a[b] = void 0
        }
        return a
    }
    ;
    _.Pe = function(a, b) {
        return Object.prototype.hasOwnProperty.call(a, b)
    }
    ;
    _.Qe = function(a, b) {
        a = a || {};
        for (var c in a)
            _.Pe(a, c) && (b[c] = a[c])
    }
    ;
    _.Re = _.Ne(_.Je, "gapi", {});
    _.Se = function(a, b, c) {
        var d = new RegExp("([#].*&|[#])" + b + "=([^&#]*)","g");
        b = new RegExp("([?#].*&|[?#])" + b + "=([^&#]*)","g");
        if (a = a && (d.exec(a) || b.exec(a)))
            try {
                c = decodeURIComponent(a[2])
            } catch (e) {}
        return c
    }
    ;
    _.Te = new RegExp(/^/.source + /([a-zA-Z][-+.a-zA-Z0-9]*:)?/.source + /(\/\/[^\/?#]*)?/.source + /([^?#]*)?/.source + /(\?([^#]*))?/.source + /(#((#|[^#])*))?/.source + /$/.source);
    _.Ue = new RegExp(/(%([^0-9a-fA-F%]|[0-9a-fA-F]([^0-9a-fA-F%])?)?)*/.source + /%($|[^0-9a-fA-F]|[0-9a-fA-F]($|[^0-9a-fA-F]))/.source,"g");
    _.Ve = new RegExp(/\/?\??#?/.source + "(" + /[\/?#]/i.source + "|" + /[\uD800-\uDBFF]/i.source + "|" + /%[c-f][0-9a-f](%[89ab][0-9a-f]){0,2}(%[89ab]?)?/i.source + "|" + /%[0-9a-f]?/i.source + ")$","i");
    _.Xe = function(a, b, c) {
        _.We(a, b, c, "add", "at")
    }
    ;
    _.We = function(a, b, c, d, e) {
        if (a[d + "EventListener"])
            a[d + "EventListener"](b, c, !1);
        else if (a[e + "tachEvent"])
            a[e + "tachEvent"]("on" + b, c)
    }
    ;
    _.Ye = {};
    _.Ye = _.Ne(_.Je, "___jsl", _.Oe());
    _.Ne(_.Ye, "I", 0);
    _.Ne(_.Ye, "hel", 10);
    var Ze, $e, af, bf, cf, df, ef;
    Ze = function(a) {
        var b = window.___jsl = window.___jsl || {};
        b[a] = b[a] || [];
        return b[a]
    }
    ;
    $e = function(a) {
        var b = window.___jsl = window.___jsl || {};
        b.cfg = !a && b.cfg || {};
        return b.cfg
    }
    ;
    af = function(a) {
        return "object" === typeof a && /\[native code\]/.test(a.push)
    }
    ;
    bf = function(a, b, c) {
        if (b && "object" === typeof b)
            for (var d in b)
                !Object.prototype.hasOwnProperty.call(b, d) || c && "___goc" === d && "undefined" === typeof b[d] || (a[d] && b[d] && "object" === typeof a[d] && "object" === typeof b[d] && !af(a[d]) && !af(b[d]) ? bf(a[d], b[d]) : b[d] && "object" === typeof b[d] ? (a[d] = af(b[d]) ? [] : {},
                bf(a[d], b[d])) : a[d] = b[d])
    }
    ;
    cf = function(a) {
        if (a && !/^\s+$/.test(a)) {
            for (; 0 == a.charCodeAt(a.length - 1); )
                a = a.substring(0, a.length - 1);
            try {
                var b = window.JSON.parse(a)
            } catch (c) {}
            if ("object" === typeof b)
                return b;
            try {
                b = (new Function("return (" + a + "\n)"))()
            } catch (c) {}
            if ("object" === typeof b)
                return b;
            try {
                b = (new Function("return ({" + a + "\n})"))()
            } catch (c) {}
            return "object" === typeof b ? b : {}
        }
    }
    ;
    df = function(a, b) {
        var c = {
            ___goc: void 0
        };
        a.length && a[a.length - 1] && Object.hasOwnProperty.call(a[a.length - 1], "___goc") && "undefined" === typeof a[a.length - 1].___goc && (c = a.pop());
        bf(c, b);
        a.push(c)
    }
    ;
    ef = function(a) {
        $e(!0);
        var b = window.___gcfg
          , c = Ze("cu")
          , d = window.___gu;
        b && b !== d && (df(c, b),
        window.___gu = b);
        b = Ze("cu");
        var e = document.scripts || document.getElementsByTagName("script") || [];
        d = [];
        var f = [];
        f.push.apply(f, Ze("us"));
        for (var h = 0; h < e.length; ++h)
            for (var k = e[h], l = 0; l < f.length; ++l)
                k.src && 0 == k.src.indexOf(f[l]) && d.push(k);
        0 == d.length && 0 < e.length && e[e.length - 1].src && d.push(e[e.length - 1]);
        for (e = 0; e < d.length; ++e)
            d[e].getAttribute("gapi_processed") || (d[e].setAttribute("gapi_processed", !0),
            (f = d[e]) ? (h = f.nodeType,
            f = 3 == h || 4 == h ? f.nodeValue : f.textContent || "") : f = void 0,
            (f = cf(f)) && b.push(f));
        a && df(c, a);
        d = Ze("cd");
        a = 0;
        for (b = d.length; a < b; ++a)
            bf($e(), d[a], !0);
        d = Ze("ci");
        a = 0;
        for (b = d.length; a < b; ++a)
            bf($e(), d[a], !0);
        a = 0;
        for (b = c.length; a < b; ++a)
            bf($e(), c[a], !0)
    }
    ;
    _.ff = function(a, b) {
        var c = $e();
        if (!a)
            return c;
        a = a.split("/");
        for (var d = 0, e = a.length; c && "object" === typeof c && d < e; ++d)
            c = c[a[d]];
        return d === a.length && void 0 !== c ? c : b
    }
    ;
    _.gf = function(a, b) {
        var c;
        if ("string" === typeof a) {
            var d = c = {};
            a = a.split("/");
            for (var e = 0, f = a.length; e < f - 1; ++e) {
                var h = {};
                d = d[a[e]] = h
            }
            d[a[e]] = b
        } else
            c = a;
        ef(c)
    }
    ;
    var hf = function() {
        var a = window.__GOOGLEAPIS;
        a && (a.googleapis && !a["googleapis.config"] && (a["googleapis.config"] = a.googleapis),
        _.Ne(_.Ye, "ci", []).push(a),
        window.__GOOGLEAPIS = void 0)
    };
    hf && hf();
    ef();
    _.E("gapi.config.get", _.ff);
    _.E("gapi.config.update", _.gf);
    _.Kg = (window.gapi || {}).load;
    _.Un = _.Ne(_.Ye, "rw", _.Oe());
    var Vn = function(a, b) {
        (a = _.Un[a]) && a.state < b && (a.state = b)
    };
    var Wn = function(a) {
        a = (a = _.Un[a]) ? a.oid : void 0;
        if (a) {
            var b = _.Ke.getElementById(a);
            b && b.parentNode.removeChild(b);
            delete _.Un[a];
            Wn(a)
        }
    };
    _.Xn = function(a) {
        a = a.container;
        "string" === typeof a && (a = document.getElementById(a));
        return a
    }
    ;
    _.Yn = function(a) {
        var b = a.clientWidth;
        return "position:absolute;top:-10000px;width:" + (b ? b + "px" : a.style.width || "300px") + ";margin:0px;border-style:none;"
    }
    ;
    _.Zn = function(a, b) {
        var c = {}
          , d = a.jc()
          , e = b && b.width
          , f = b && b.height
          , h = b && b.verticalAlign;
        h && (c.verticalAlign = h);
        e || (e = d.width || a.width);
        f || (f = d.height || a.height);
        d.width = c.width = e;
        d.height = c.height = f;
        d = a.getIframeEl();
        e = a.getId();
        Vn(e, 2);
        a: {
            e = a.getSiteEl();
            c = c || {};
            if (_.Ye.oa) {
                var k = d.id;
                if (k) {
                    f = (f = _.Un[k]) ? f.state : void 0;
                    if (1 === f || 4 === f)
                        break a;
                    Wn(k)
                }
            }
            (f = e.nextSibling) && f.getAttribute && f.getAttribute("data-gapistub") && (e.parentNode.removeChild(f),
            e.style.cssText = "");
            f = c.width;
            h = c.height;
            var l = e.style;
            l.textIndent = "0";
            l.margin = "0";
            l.padding = "0";
            l.background = "transparent";
            l.borderStyle = "none";
            l.cssFloat = "none";
            l.styleFloat = "none";
            l.lineHeight = "normal";
            l.fontSize = "1px";
            l.verticalAlign = "baseline";
            e = e.style;
            e.display = "inline-block";
            d = d.style;
            d.position = "static";
            d.left = "0";
            d.top = "0";
            d.visibility = "visible";
            f && (e.width = d.width = f + "px");
            h && (e.height = d.height = h + "px");
            c.verticalAlign && (e.verticalAlign = c.verticalAlign);
            k && Vn(k, 3)
        }
        (k = b ? b.title : null) && a.getIframeEl().setAttribute("title", k);
        (b = b ? b.ariaLabel : null) && a.getIframeEl().setAttribute("aria-label", b)
    }
    ;
    _.$n = function(a) {
        var b = a.getSiteEl();
        b && b.removeChild(a.getIframeEl())
    }
    ;
    _.ao = function(a) {
        a.where = _.Xn(a);
        var b = a.messageHandlers = a.messageHandlers || {}
          , c = function(e) {
            _.Zn(this, e)
        };
        b._ready = c;
        b._renderstart = c;
        var d = a.onClose;
        a.onClose = function(e) {
            d && d.call(this, e);
            _.$n(this)
        }
        ;
        a.onCreate = function(e) {
            e = e.getIframeEl();
            e.style.cssText = _.Yn(e)
        }
    }
    ;
    _.of = function() {
        var a = window.gadgets && window.gadgets.config && window.gadgets.config.get;
        a && _.gf(a());
        return {
            register: function(b, c, d) {
                d && d(_.ff())
            },
            get: function(b) {
                return _.ff(b)
            },
            update: function(b, c) {
                if (c)
                    throw "Config replacement is not supported";
                _.gf(b)
            },
            xd: function() {}
        }
    }();
    _.E("gadgets.config.register", _.of.register);
    _.E("gadgets.config.get", _.of.get);
    _.E("gadgets.config.init", _.of.xd);
    _.E("gadgets.config.update", _.of.update);
    var pf, qf, rf, sf, tf, uf, vf, wf, xf, yf, zf, Af, Bf, Cf, Df, Ef, Ff, Gf, Hf, If, Jf, Kf, Lf, Mf, Nf, Pf, Qf, Rf, Sf, Tf, Uf, Xf, Yf;
    rf = void 0;
    sf = function(a) {
        try {
            return _.u.JSON.parse.call(_.u.JSON, a)
        } catch (b) {
            return !1
        }
    }
    ;
    tf = function(a) {
        return Object.prototype.toString.call(a)
    }
    ;
    uf = tf(0);
    vf = tf(new Date(0));
    wf = tf(!0);
    xf = tf("");
    yf = tf({});
    zf = tf([]);
    Af = function(a, b) {
        if (b)
            for (var c = 0, d = b.length; c < d; ++c)
                if (a === b[c])
                    throw new TypeError("Converting circular structure to JSON");
        d = typeof a;
        if ("undefined" !== d) {
            c = Array.prototype.slice.call(b || [], 0);
            c[c.length] = a;
            b = [];
            var e = tf(a);
            if (null != a && "function" === typeof a.toJSON && (Object.prototype.hasOwnProperty.call(a, "toJSON") || (e !== zf || a.constructor !== Array && a.constructor !== Object) && (e !== yf || a.constructor !== Array && a.constructor !== Object) && e !== xf && e !== uf && e !== wf && e !== vf))
                return Af(a.toJSON.call(a), c);
            if (null == a)
                b[b.length] = "null";
            else if (e === uf)
                a = Number(a),
                isNaN(a) || isNaN(a - a) ? a = "null" : -0 === a && 0 > 1 / a && (a = "-0"),
                b[b.length] = String(a);
            else if (e === wf)
                b[b.length] = String(!!Number(a));
            else {
                if (e === vf)
                    return Af(a.toISOString.call(a), c);
                if (e === zf && tf(a.length) === uf) {
                    b[b.length] = "[";
                    var f = 0;
                    for (d = Number(a.length) >> 0; f < d; ++f)
                        f && (b[b.length] = ","),
                        b[b.length] = Af(a[f], c) || "null";
                    b[b.length] = "]"
                } else if (e == xf && tf(a.length) === uf) {
                    b[b.length] = '"';
                    f = 0;
                    for (c = Number(a.length) >> 0; f < c; ++f)
                        d = String.prototype.charAt.call(a, f),
                        e = String.prototype.charCodeAt.call(a, f),
                        b[b.length] = "\b" === d ? "\\b" : "\f" === d ? "\\f" : "\n" === d ? "\\n" : "\r" === d ? "\\r" : "\t" === d ? "\\t" : "\\" === d || '"' === d ? "\\" + d : 31 >= e ? "\\u" + (e + 65536).toString(16).substr(1) : 32 <= e && 65535 >= e ? d : "\ufffd";
                    b[b.length] = '"'
                } else if ("object" === d) {
                    b[b.length] = "{";
                    d = 0;
                    for (f in a)
                        Object.prototype.hasOwnProperty.call(a, f) && (e = Af(a[f], c),
                        void 0 !== e && (d++ && (b[b.length] = ","),
                        b[b.length] = Af(f),
                        b[b.length] = ":",
                        b[b.length] = e));
                    b[b.length] = "}"
                } else
                    return
            }
            return b.join("")
        }
    }
    ;
    Bf = /[\0-\x07\x0b\x0e-\x1f]/;
    Cf = /^([^"]*"([^\\"]|\\.)*")*[^"]*"([^"\\]|\\.)*[\0-\x1f]/;
    Df = /^([^"]*"([^\\"]|\\.)*")*[^"]*"([^"\\]|\\.)*\\[^\\\/"bfnrtu]/;
    Ef = /^([^"]*"([^\\"]|\\.)*")*[^"]*"([^"\\]|\\.)*\\u([0-9a-fA-F]{0,3}[^0-9a-fA-F])/;
    Ff = /"([^\0-\x1f\\"]|\\[\\\/"bfnrt]|\\u[0-9a-fA-F]{4})*"/g;
    Gf = /-?(0|[1-9][0-9]*)(\.[0-9]+)?([eE][-+]?[0-9]+)?/g;
    Hf = /[ \t\n\r]+/g;
    If = /[^"]:/;
    Jf = /""/g;
    Kf = /true|false|null/g;
    Lf = /00/;
    Mf = /[\{]([^0\}]|0[^:])/;
    Nf = /(^|\[)[,:]|[,:](\]|\}|[,:]|$)/;
    Pf = /[^\[,:][\[\{]/;
    Qf = /^(\{|\}|\[|\]|,|:|0)+/;
    Rf = /\u2028/g;
    Sf = /\u2029/g;
    Tf = function(a) {
        a = String(a);
        if (Bf.test(a) || Cf.test(a) || Df.test(a) || Ef.test(a))
            return !1;
        var b = a.replace(Ff, '""');
        b = b.replace(Gf, "0");
        b = b.replace(Hf, "");
        if (If.test(b))
            return !1;
        b = b.replace(Jf, "0");
        b = b.replace(Kf, "0");
        if (Lf.test(b) || Mf.test(b) || Nf.test(b) || Pf.test(b) || !b || (b = b.replace(Qf, "")))
            return !1;
        a = a.replace(Rf, "\\u2028").replace(Sf, "\\u2029");
        b = void 0;
        try {
            b = rf ? [sf(a)] : eval("(function (var_args) {\n  return Array.prototype.slice.call(arguments, 0);\n})(\n" + a + "\n)")
        } catch (c) {
            return !1
        }
        return b && 1 === b.length ? b[0] : !1
    }
    ;
    Uf = function() {
        var a = ((_.u.document || {}).scripts || []).length;
        if ((void 0 === pf || void 0 === rf || qf !== a) && -1 !== qf) {
            pf = rf = !1;
            qf = -1;
            try {
                try {
                    rf = !!_.u.JSON && '{"a":[3,true,"1970-01-01T00:00:00.000Z"]}' === _.u.JSON.stringify.call(_.u.JSON, {
                        a: [3, !0, new Date(0)],
                        c: function() {}
                    }) && !0 === sf("true") && 3 === sf('[{"a":3}]')[0].a
                } catch (b) {}
                pf = rf && !sf("[00]") && !sf('"\u0007"') && !sf('"\\0"') && !sf('"\\v"')
            } finally {
                qf = a
            }
        }
    }
    ;
    _.Vf = function(a) {
        if (-1 === qf)
            return !1;
        Uf();
        return (pf ? sf : Tf)(a)
    }
    ;
    _.Wf = function(a) {
        if (-1 !== qf)
            return Uf(),
            rf ? _.u.JSON.stringify.call(_.u.JSON, a) : Af(a)
    }
    ;
    Xf = !Date.prototype.toISOString || "function" !== typeof Date.prototype.toISOString || "1970-01-01T00:00:00.000Z" !== (new Date(0)).toISOString();
    Yf = function() {
        var a = Date.prototype.getUTCFullYear.call(this);
        return [0 > a ? "-" + String(1E6 - a).substr(1) : 9999 >= a ? String(1E4 + a).substr(1) : "+" + String(1E6 + a).substr(1), "-", String(101 + Date.prototype.getUTCMonth.call(this)).substr(1), "-", String(100 + Date.prototype.getUTCDate.call(this)).substr(1), "T", String(100 + Date.prototype.getUTCHours.call(this)).substr(1), ":", String(100 + Date.prototype.getUTCMinutes.call(this)).substr(1), ":", String(100 + Date.prototype.getUTCSeconds.call(this)).substr(1), ".", String(1E3 + Date.prototype.getUTCMilliseconds.call(this)).substr(1), "Z"].join("")
    }
    ;
    Date.prototype.toISOString = Xf ? Yf : Date.prototype.toISOString;
    _.E("gadgets.json.stringify", _.Wf);
    _.E("gadgets.json.parse", _.Vf);
    (function() {
        function a(e, f) {
            if (!(e < c) && d)
                if (2 === e && d.warn)
                    d.warn(f);
                else if (3 === e && d.error)
                    try {
                        d.error(f)
                    } catch (h) {}
                else
                    d.log && d.log(f)
        }
        var b = function(e) {
            a(1, e)
        };
        _.lf = function(e) {
            a(2, e)
        }
        ;
        _.mf = function(e) {
            a(3, e)
        }
        ;
        _.nf = function() {}
        ;
        b.INFO = 1;
        b.WARNING = 2;
        b.NONE = 4;
        var c = 1
          , d = window.console ? window.console : window.opera ? window.opera.postError : void 0;
        return b
    }
    )();
    _.jf = _.jf || {};
    _.jf = _.jf || {};
    (function() {
        var a = [];
        _.jf.Wfa = function(b) {
            a.push(b)
        }
        ;
        _.jf.iga = function() {
            for (var b = 0, c = a.length; b < c; ++b)
                a[b]()
        }
    }
    )();
    _.jf = _.jf || {};
    (function() {
        function a(c) {
            var d = "undefined" === typeof c;
            if (null !== b && d)
                return b;
            var e = {};
            c = c || window.location.href;
            var f = c.indexOf("?")
              , h = c.indexOf("#");
            c = (-1 === h ? c.substr(f + 1) : [c.substr(f + 1, h - f - 1), "&", c.substr(h + 1)].join("")).split("&");
            f = window.decodeURIComponent ? decodeURIComponent : unescape;
            h = 0;
            for (var k = c.length; h < k; ++h) {
                var l = c[h].indexOf("=");
                if (-1 !== l) {
                    var m = c[h].substring(0, l);
                    l = c[h].substring(l + 1);
                    l = l.replace(/\+/g, " ");
                    try {
                        e[m] = f(l)
                    } catch (n) {}
                }
            }
            d && (b = e);
            return e
        }
        var b = null;
        _.jf.Ag = a;
        a()
    }
    )();
    _.E("gadgets.util.getUrlParameters", _.jf.Ag);
    var Zf = function() {
        this.eg = window.console
    };
    Zf.prototype.log = function(a) {
        this.eg && this.eg.log && this.eg.log(a)
    }
    ;
    Zf.prototype.error = function(a) {
        this.eg && (this.eg.error ? this.eg.error(a) : this.eg.log && this.eg.log(a))
    }
    ;
    Zf.prototype.warn = function(a) {
        this.eg && (this.eg.warn ? this.eg.warn(a) : this.eg.log && this.eg.log(a))
    }
    ;
    Zf.prototype.debug = function() {}
    ;
    _.$f = new Zf;
    _.ag = function() {
        var a = _.Ke.readyState;
        return "complete" === a || "interactive" === a && -1 == navigator.userAgent.indexOf("MSIE")
    }
    ;
    _.bg = function(a) {
        if (_.ag())
            a();
        else {
            var b = !1
              , c = function() {
                if (!b)
                    return b = !0,
                    a.apply(this, arguments)
            };
            _.Je.addEventListener ? (_.Je.addEventListener("load", c, !1),
            _.Je.addEventListener("DOMContentLoaded", c, !1)) : _.Je.attachEvent && (_.Je.attachEvent("onreadystatechange", function() {
                _.ag() && c.apply(this, arguments)
            }),
            _.Je.attachEvent("onload", c))
        }
    }
    ;
    _.cg = function(a, b) {
        var c = _.Ne(_.Ye, "watt", _.Oe());
        _.Ne(c, a, b)
    }
    ;
    _.Se(_.Je.location.href, "rpctoken") && _.Xe(_.Ke, "unload", function() {});
    var dg = dg || {};
    dg.tR = null;
    dg.ZP = null;
    dg.Jx = null;
    dg.frameElement = null;
    dg = dg || {};
    dg.FJ || (dg.FJ = function() {
        function a(f, h, k) {
            "undefined" != typeof window.addEventListener ? window.addEventListener(f, h, k) : "undefined" != typeof window.attachEvent && window.attachEvent("on" + f, h);
            "message" === f && (window.___jsl = window.___jsl || {},
            f = window.___jsl,
            f.RPMQ = f.RPMQ || [],
            f.RPMQ.push(h))
        }
        function b(f) {
            var h = _.Vf(f.data);
            if (h && h.f) {
                _.nf();
                var k = _.eg.Jm(h.f);
                e && ("undefined" !== typeof f.origin ? f.origin !== k : f.domain !== /^.+:\/\/([^:]+).*/.exec(k)[1]) ? _.mf("Invalid rpc message origin. " + k + " vs " + (f.origin || "")) : c(h, f.origin)
            }
        }
        var c, d, e = !0;
        return {
            fN: function() {
                return "wpm"
            },
            h1: function() {
                return !0
            },
            xd: function(f, h) {
                _.of.register("rpc", null, function(k) {
                    "true" === String((k && k.rpc || {}).disableForceSecure) && (e = !1)
                });
                c = f;
                d = h;
                a("message", b, !1);
                d("..", !0);
                return !0
            },
            Db: function(f) {
                d(f, !0);
                return !0
            },
            call: function(f, h, k) {
                var l = _.eg.Jm(f)
                  , m = _.eg.tK(f);
                l ? window.setTimeout(function() {
                    var n = _.Wf(k);
                    _.nf();
                    m.postMessage(n, l)
                }, 0) : ".." != f && _.mf("No relay set (used as window.postMessage targetOrigin), cannot send cross-domain message");
                return !0
            }
        }
    }());
    if (window.gadgets && window.gadgets.rpc)
        "undefined" != typeof _.eg && _.eg || (_.eg = window.gadgets.rpc,
        _.eg.config = _.eg.config,
        _.eg.register = _.eg.register,
        _.eg.unregister = _.eg.unregister,
        _.eg.bR = _.eg.registerDefault,
        _.eg.iT = _.eg.unregisterDefault,
        _.eg.SM = _.eg.forceParentVerifiable,
        _.eg.call = _.eg.call,
        _.eg.ss = _.eg.getRelayUrl,
        _.eg.Ui = _.eg.setRelayUrl,
        _.eg.Zz = _.eg.setAuthToken,
        _.eg.Zt = _.eg.setupReceiver,
        _.eg.wm = _.eg.getAuthToken,
        _.eg.sG = _.eg.removeReceiver,
        _.eg.CN = _.eg.getRelayChannel,
        _.eg.ZQ = _.eg.receive,
        _.eg.aR = _.eg.receiveSameDomain,
        _.eg.getOrigin = _.eg.getOrigin,
        _.eg.Jm = _.eg.getTargetOrigin,
        _.eg.tK = _.eg._getTargetWin,
        _.eg.jW = _.eg._parseSiblingId);
    else {
        _.eg = function() {
            function a(B, Y) {
                if (!W[B]) {
                    var S = aa;
                    Y || (S = Sa);
                    W[B] = S;
                    Y = J[B] || [];
                    for (var ma = 0; ma < Y.length; ++ma) {
                        var Ca = Y[ma];
                        Ca.t = A[B];
                        S.call(B, Ca.f, Ca)
                    }
                    J[B] = []
                }
            }
            function b() {
                function B() {
                    db = !0
                }
                pa || ("undefined" != typeof window.addEventListener ? window.addEventListener("unload", B, !1) : "undefined" != typeof window.attachEvent && window.attachEvent("onunload", B),
                pa = !0)
            }
            function c(B, Y, S, ma, Ca) {
                A[Y] && A[Y] === S || (_.mf("Invalid gadgets.rpc token. " + A[Y] + " vs " + S),
                qa(Y, 2));
                Ca.onunload = function() {
                    G[Y] && !db && (qa(Y, 1),
                    _.eg.sG(Y))
                }
                ;
                b();
                ma = _.Vf(decodeURIComponent(ma))
            }
            function d(B, Y) {
                if (B && "string" === typeof B.s && "string" === typeof B.f && B.a instanceof Array)
                    if (A[B.f] && A[B.f] !== B.t && (_.mf("Invalid gadgets.rpc token. " + A[B.f] + " vs " + B.t),
                    qa(B.f, 2)),
                    "__ack" === B.s)
                        window.setTimeout(function() {
                            a(B.f, !0)
                        }, 0);
                    else {
                        B.c && (B.callback = function(ha) {
                            _.eg.call(B.f, (B.g ? "legacy__" : "") + "__cb", null, B.c, ha)
                        }
                        );
                        if (Y) {
                            var S = e(Y);
                            B.origin = Y;
                            var ma = B.r;
                            try {
                                var Ca = e(ma)
                            } catch (ha) {}
                            ma && Ca == S || (ma = Y);
                            B.referer = ma
                        }
                        Y = (r[B.s] || r[""]).apply(B, B.a);
                        B.c && "undefined" !== typeof Y && _.eg.call(B.f, "__cb", null, B.c, Y)
                    }
            }
            function e(B) {
                if (!B)
                    return "";
                B = B.split("#")[0].split("?")[0];
                B = B.toLowerCase();
                0 == B.indexOf("//") && (B = window.location.protocol + B);
                -1 == B.indexOf("://") && (B = window.location.protocol + "//" + B);
                var Y = B.substring(B.indexOf("://") + 3)
                  , S = Y.indexOf("/");
                -1 != S && (Y = Y.substring(0, S));
                B = B.substring(0, B.indexOf("://"));
                if ("http" !== B && "https" !== B && "chrome-extension" !== B && "file" !== B && "android-app" !== B && "chrome-search" !== B && "chrome-untrusted" !== B && "chrome" !== B && "devtools" !== B)
                    throw Error("r");
                S = "";
                var ma = Y.indexOf(":");
                if (-1 != ma) {
                    var Ca = Y.substring(ma + 1);
                    Y = Y.substring(0, ma);
                    if ("http" === B && "80" !== Ca || "https" === B && "443" !== Ca)
                        S = ":" + Ca
                }
                return B + "://" + Y + S
            }
            function f(B) {
                if ("/" == B.charAt(0)) {
                    var Y = B.indexOf("|");
                    return {
                        id: 0 < Y ? B.substring(1, Y) : B.substring(1),
                        origin: 0 < Y ? B.substring(Y + 1) : null
                    }
                }
                return null
            }
            function h(B) {
                if ("undefined" === typeof B || ".." === B)
                    return window.parent;
                var Y = f(B);
                if (Y)
                    return window.top.frames[Y.id];
                B = String(B);
                return (Y = window.frames[B]) ? Y : (Y = document.getElementById(B)) && Y.contentWindow ? Y.contentWindow : null
            }
            function k(B, Y) {
                if (!0 !== G[B]) {
                    "undefined" === typeof G[B] && (G[B] = 0);
                    var S = h(B);
                    ".." !== B && null == S || !0 !== aa.Db(B, Y) ? !0 !== G[B] && 10 > G[B]++ ? window.setTimeout(function() {
                        k(B, Y)
                    }, 500) : (W[B] = Sa,
                    G[B] = !0) : G[B] = !0
                }
            }
            function l(B) {
                (B = w[B]) && "/" === B.substring(0, 1) && (B = "/" === B.substring(1, 2) ? document.location.protocol + B : document.location.protocol + "//" + document.location.host + B);
                return B
            }
            function m(B, Y, S) {
                Y && !/http(s)?:\/\/.+/.test(Y) && (0 == Y.indexOf("//") ? Y = window.location.protocol + Y : "/" == Y.charAt(0) ? Y = window.location.protocol + "//" + window.location.host + Y : -1 == Y.indexOf("://") && (Y = window.location.protocol + "//" + Y));
                w[B] = Y;
                "undefined" !== typeof S && (z[B] = !!S)
            }
            function n(B, Y) {
                Y = Y || "";
                A[B] = String(Y);
                k(B, Y)
            }
            function q(B) {
                B = (B.passReferrer || "").split(":", 2);
                K = B[0] || "none";
                U = B[1] || "origin"
            }
            function p(B) {
                "true" === String(B.useLegacyProtocol) && (aa = dg.Jx || Sa,
                aa.xd(d, a))
            }
            function t(B, Y) {
                function S(ma) {
                    ma = ma && ma.rpc || {};
                    q(ma);
                    var Ca = ma.parentRelayUrl || "";
                    Ca = e(N.parent || Y) + Ca;
                    m("..", Ca, "true" === String(ma.useLegacyProtocol));
                    p(ma);
                    n("..", B)
                }
                !N.parent && Y ? S({}) : _.of.register("rpc", null, S)
            }
            function v(B, Y, S) {
                if (".." === B)
                    t(S || N.rpctoken || N.ifpctok || "", Y);
                else
                    a: {
                        var ma = null;
                        if ("/" != B.charAt(0)) {
                            if (!_.jf)
                                break a;
                            ma = document.getElementById(B);
                            if (!ma)
                                throw Error("s`" + B);
                        }
                        ma = ma && ma.src;
                        Y = Y || e(ma);
                        m(B, Y);
                        Y = _.jf.Ag(ma);
                        n(B, S || Y.rpctoken)
                    }
            }
            var r = {}
              , w = {}
              , z = {}
              , A = {}
              , D = 0
              , x = {}
              , G = {}
              , N = {}
              , W = {}
              , J = {}
              , K = null
              , U = null
              , da = window.top !== window.self
              , ua = window.name
              , qa = function() {}
              , Ga = window.console
              , Fa = Ga && Ga.log && function(B) {
                Ga.log(B)
            }
            || function() {}
              , Sa = function() {
                function B(Y) {
                    return function() {
                        Fa(Y + ": call ignored")
                    }
                }
                return {
                    fN: function() {
                        return "noop"
                    },
                    h1: function() {
                        return !0
                    },
                    xd: B("init"),
                    Db: B("setup"),
                    call: B("call")
                }
            }();
            _.jf && (N = _.jf.Ag());
            var db = !1
              , pa = !1
              , aa = function() {
                if ("rmr" == N.rpctx)
                    return dg.tR;
                var B = "function" === typeof window.postMessage ? dg.FJ : "object" === typeof window.postMessage ? dg.FJ : window.ActiveXObject ? dg.ZP ? dg.ZP : dg.Jx : 0 < navigator.userAgent.indexOf("WebKit") ? dg.tR : "Gecko" === navigator.product ? dg.frameElement : dg.Jx;
                B || (B = Sa);
                return B
            }();
            r[""] = function() {
                Fa("Unknown RPC service: " + this.s)
            }
            ;
            r.__cb = function(B, Y) {
                var S = x[B];
                S && (delete x[B],
                S.call(this, Y))
            }
            ;
            return {
                config: function(B) {
                    "function" === typeof B.AR && (qa = B.AR)
                },
                register: function(B, Y) {
                    if ("__cb" === B || "__ack" === B)
                        throw Error("t");
                    if ("" === B)
                        throw Error("u");
                    r[B] = Y
                },
                unregister: function(B) {
                    if ("__cb" === B || "__ack" === B)
                        throw Error("v");
                    if ("" === B)
                        throw Error("w");
                    delete r[B]
                },
                bR: function(B) {
                    r[""] = B
                },
                iT: function() {
                    delete r[""]
                },
                SM: function() {},
                call: function(B, Y, S, ma) {
                    B = B || "..";
                    var Ca = "..";
                    ".." === B ? Ca = ua : "/" == B.charAt(0) && (Ca = e(window.location.href),
                    Ca = "/" + ua + (Ca ? "|" + Ca : ""));
                    ++D;
                    S && (x[D] = S);
                    var ha = {
                        s: Y,
                        f: Ca,
                        c: S ? D : 0,
                        a: Array.prototype.slice.call(arguments, 3),
                        t: A[B],
                        l: !!z[B]
                    };
                    a: if ("bidir" === K || "c2p" === K && ".." === B || "p2c" === K && ".." !== B) {
                        var ta = window.location.href;
                        var Ka = "?";
                        if ("query" === U)
                            Ka = "#";
                        else if ("hash" === U)
                            break a;
                        Ka = ta.lastIndexOf(Ka);
                        Ka = -1 === Ka ? ta.length : Ka;
                        ta = ta.substring(0, Ka)
                    } else
                        ta = null;
                    ta && (ha.r = ta);
                    if (".." === B || null != f(B) || document.getElementById(B))
                        (ta = W[B]) || null === f(B) || (ta = aa),
                        0 === Y.indexOf("legacy__") && (ta = aa,
                        ha.s = Y.substring(8),
                        ha.c = ha.c ? ha.c : D),
                        ha.g = !0,
                        ha.r = Ca,
                        ta ? (z[B] && (ta = dg.Jx),
                        !1 === ta.call(B, Ca, ha) && (W[B] = Sa,
                        aa.call(B, Ca, ha))) : J[B] ? J[B].push(ha) : J[B] = [ha]
                },
                ss: l,
                Ui: m,
                Zz: n,
                Zt: v,
                wm: function(B) {
                    return A[B]
                },
                sG: function(B) {
                    delete w[B];
                    delete z[B];
                    delete A[B];
                    delete G[B];
                    delete W[B]
                },
                CN: function() {
                    return aa.fN()
                },
                ZQ: function(B, Y) {
                    4 < B.length ? aa.zda(B, d) : c.apply(null, B.concat(Y))
                },
                aR: function(B) {
                    B.a = Array.prototype.slice.call(B.a);
                    window.setTimeout(function() {
                        d(B)
                    }, 0)
                },
                getOrigin: e,
                Jm: function(B) {
                    var Y = null
                      , S = l(B);
                    S ? Y = S : (S = f(B)) ? Y = S.origin : ".." == B ? Y = N.parent : (B = document.getElementById(B)) && "iframe" === B.tagName.toLowerCase() && (Y = B.src);
                    return e(Y)
                },
                xd: function() {
                    !1 === aa.xd(d, a) && (aa = Sa);
                    da ? v("..") : _.of.register("rpc", null, function(B) {
                        B = B.rpc || {};
                        q(B);
                        p(B)
                    })
                },
                tK: h,
                jW: f,
                X6: "__ack",
                Vaa: ua || "..",
                fba: 0,
                eba: 1,
                dba: 2
            }
        }();
        _.eg.xd()
    }
    ;_.eg.config({
        AR: function(a) {
            throw Error("x`" + a);
        }
    });
    _.E("gadgets.rpc.config", _.eg.config);
    _.E("gadgets.rpc.register", _.eg.register);
    _.E("gadgets.rpc.unregister", _.eg.unregister);
    _.E("gadgets.rpc.registerDefault", _.eg.bR);
    _.E("gadgets.rpc.unregisterDefault", _.eg.iT);
    _.E("gadgets.rpc.forceParentVerifiable", _.eg.SM);
    _.E("gadgets.rpc.call", _.eg.call);
    _.E("gadgets.rpc.getRelayUrl", _.eg.ss);
    _.E("gadgets.rpc.setRelayUrl", _.eg.Ui);
    _.E("gadgets.rpc.setAuthToken", _.eg.Zz);
    _.E("gadgets.rpc.setupReceiver", _.eg.Zt);
    _.E("gadgets.rpc.getAuthToken", _.eg.wm);
    _.E("gadgets.rpc.removeReceiver", _.eg.sG);
    _.E("gadgets.rpc.getRelayChannel", _.eg.CN);
    _.E("gadgets.rpc.receive", _.eg.ZQ);
    _.E("gadgets.rpc.receiveSameDomain", _.eg.aR);
    _.E("gadgets.rpc.getOrigin", _.eg.getOrigin);
    _.E("gadgets.rpc.getTargetOrigin", _.eg.Jm);
    _.Ng = function(a) {
        if (!a)
            return "";
        if (/^about:(?:blank|srcdoc)$/.test(a))
            return window.origin || "";
        a = a.split("#")[0].split("?")[0];
        a = a.toLowerCase();
        0 == a.indexOf("//") && (a = window.location.protocol + a);
        /^[\w\-]*:\/\//.test(a) || (a = window.location.href);
        var b = a.substring(a.indexOf("://") + 3)
          , c = b.indexOf("/");
        -1 != c && (b = b.substring(0, c));
        c = a.substring(0, a.indexOf("://"));
        if (!c)
            throw Error("y`" + a);
        if ("http" !== c && "https" !== c && "chrome-extension" !== c && "moz-extension" !== c && "file" !== c && "android-app" !== c && "chrome-search" !== c && "chrome-untrusted" !== c && "chrome" !== c && "app" !== c && "devtools" !== c)
            throw Error("z`" + c);
        a = "";
        var d = b.indexOf(":");
        if (-1 != d) {
            var e = b.substring(d + 1);
            b = b.substring(0, d);
            if ("http" === c && "80" !== e || "https" === c && "443" !== e)
                a = ":" + e
        }
        return c + "://" + b + a
    }
    ;
    var Pg = function() {
        this.blockSize = -1
    };
    var Qg = function() {
        this.blockSize = -1;
        this.blockSize = 64;
        this.Ec = [];
        this.SB = [];
        this.fW = [];
        this.cz = [];
        this.cz[0] = 128;
        for (var a = 1; a < this.blockSize; ++a)
            this.cz[a] = 0;
        this.JA = this.mp = 0;
        this.reset()
    };
    _.ab(Qg, Pg);
    Qg.prototype.reset = function() {
        this.Ec[0] = 1732584193;
        this.Ec[1] = 4023233417;
        this.Ec[2] = 2562383102;
        this.Ec[3] = 271733878;
        this.Ec[4] = 3285377520;
        this.JA = this.mp = 0
    }
    ;
    var Rg = function(a, b, c) {
        c || (c = 0);
        var d = a.fW;
        if ("string" === typeof b)
            for (var e = 0; 16 > e; e++)
                d[e] = b.charCodeAt(c) << 24 | b.charCodeAt(c + 1) << 16 | b.charCodeAt(c + 2) << 8 | b.charCodeAt(c + 3),
                c += 4;
        else
            for (e = 0; 16 > e; e++)
                d[e] = b[c] << 24 | b[c + 1] << 16 | b[c + 2] << 8 | b[c + 3],
                c += 4;
        for (e = 16; 80 > e; e++) {
            var f = d[e - 3] ^ d[e - 8] ^ d[e - 14] ^ d[e - 16];
            d[e] = (f << 1 | f >>> 31) & 4294967295
        }
        b = a.Ec[0];
        c = a.Ec[1];
        var h = a.Ec[2]
          , k = a.Ec[3]
          , l = a.Ec[4];
        for (e = 0; 80 > e; e++) {
            if (40 > e)
                if (20 > e) {
                    f = k ^ c & (h ^ k);
                    var m = 1518500249
                } else
                    f = c ^ h ^ k,
                    m = 1859775393;
            else
                60 > e ? (f = c & h | k & (c | h),
                m = 2400959708) : (f = c ^ h ^ k,
                m = 3395469782);
            f = (b << 5 | b >>> 27) + f + l + m + d[e] & 4294967295;
            l = k;
            k = h;
            h = (c << 30 | c >>> 2) & 4294967295;
            c = b;
            b = f
        }
        a.Ec[0] = a.Ec[0] + b & 4294967295;
        a.Ec[1] = a.Ec[1] + c & 4294967295;
        a.Ec[2] = a.Ec[2] + h & 4294967295;
        a.Ec[3] = a.Ec[3] + k & 4294967295;
        a.Ec[4] = a.Ec[4] + l & 4294967295
    };
    Qg.prototype.update = function(a, b) {
        if (null != a) {
            void 0 === b && (b = a.length);
            for (var c = b - this.blockSize, d = 0, e = this.SB, f = this.mp; d < b; ) {
                if (0 == f)
                    for (; d <= c; )
                        Rg(this, a, d),
                        d += this.blockSize;
                if ("string" === typeof a)
                    for (; d < b; ) {
                        if (e[f] = a.charCodeAt(d),
                        ++f,
                        ++d,
                        f == this.blockSize) {
                            Rg(this, e);
                            f = 0;
                            break
                        }
                    }
                else
                    for (; d < b; )
                        if (e[f] = a[d],
                        ++f,
                        ++d,
                        f == this.blockSize) {
                            Rg(this, e);
                            f = 0;
                            break
                        }
            }
            this.mp = f;
            this.JA += b
        }
    }
    ;
    Qg.prototype.digest = function() {
        var a = []
          , b = 8 * this.JA;
        56 > this.mp ? this.update(this.cz, 56 - this.mp) : this.update(this.cz, this.blockSize - (this.mp - 56));
        for (var c = this.blockSize - 1; 56 <= c; c--)
            this.SB[c] = b & 255,
            b /= 256;
        Rg(this, this.SB);
        for (c = b = 0; 5 > c; c++)
            for (var d = 24; 0 <= d; d -= 8)
                a[b] = this.Ec[c] >> d & 255,
                ++b;
        return a
    }
    ;
    _.Sg = function() {
        this.KI = new Qg
    }
    ;
    _.g = _.Sg.prototype;
    _.g.reset = function() {
        this.KI.reset()
    }
    ;
    _.g.kT = function(a) {
        this.KI.update(a)
    }
    ;
    _.g.QL = function() {
        return this.KI.digest()
    }
    ;
    _.g.Hu = function(a) {
        a = unescape(encodeURIComponent(a));
        for (var b = [], c = 0, d = a.length; c < d; ++c)
            b.push(a.charCodeAt(c));
        this.kT(b)
    }
    ;
    _.g.bi = function() {
        for (var a = this.QL(), b = "", c = 0; c < a.length; c++)
            b += "0123456789ABCDEF".charAt(Math.floor(a[c] / 16)) + "0123456789ABCDEF".charAt(a[c] % 16);
        return b
    }
    ;
    _.wh = _.zb();
    _.xh = _.Lb() || _.tb("iPod");
    _.yh = _.tb("iPad");
    _.zh = _.Cb();
    _.Ah = _.Ab();
    _.Bh = _.Bb() && !_.Mb();
    _.ai = function(a) {
        var b = window.___jsl = window.___jsl || {};
        b.cfg = !a && b.cfg || {};
        return b.cfg
    }
    ;
    _.bi = function(a) {
        var b = _.ai();
        if (!a)
            return b;
        a = a.split("/");
        for (var c = 0, d = a.length; b && "object" === typeof b && c < d; ++c)
            b = b[a[c]];
        return c === a.length && void 0 !== b ? b : void 0
    }
    ;
    var ci;
    ci = /^https?:\/\/(?:\w|[\-\.])+\.google\.(?:\w|[\-:\.])+(?:\/[^\?#]*)?\/u\/(\d)\//;
    _.di = function(a) {
        var b = _.bi("googleapis.config/sessionIndex");
        "string" === typeof b && 254 < b.length && (b = null);
        null == b && (b = window.__X_GOOG_AUTHUSER);
        "string" === typeof b && 254 < b.length && (b = null);
        if (null == b) {
            var c = window.google;
            c && (b = c.authuser)
        }
        "string" === typeof b && 254 < b.length && (b = null);
        null == b && (a = a || window.location.href,
        b = _.Se(a, "authuser") || null,
        null == b && (b = (b = a.match(ci)) ? b[1] : null));
        if (null == b)
            return null;
        b = String(b);
        254 < b.length && (b = null);
        return b
    }
    ;
    var vi, ui, Ci, Di, wi, Ai, yi, Ei, zi;
    _.Bi = function() {
        if (ui) {
            var a = new _.Je.Uint32Array(1);
            vi.getRandomValues(a);
            a = Number("0." + a[0])
        } else
            a = wi,
            a += parseInt(yi.substr(0, 20), 16),
            yi = zi(yi),
            a /= Ai + Math.pow(16, 20);
        return a
    }
    ;
    vi = _.Je.crypto;
    ui = !1;
    Ci = 0;
    Di = 0;
    wi = 1;
    Ai = 0;
    yi = "";
    Ei = function(a) {
        a = a || _.Je.event;
        var b = a.screenX + a.clientX << 16;
        b += a.screenY + a.clientY;
        b *= (new Date).getTime() % 1E6;
        wi = wi * b % Ai;
        0 < Ci && ++Di == Ci && _.We(_.Je, "mousemove", Ei, "remove", "de")
    }
    ;
    zi = function(a) {
        var b = new _.Sg;
        b.Hu(a);
        return b.bi()
    }
    ;
    ui = !!vi && "function" == typeof vi.getRandomValues;
    ui || (Ai = 1E6 * (screen.width * screen.width + screen.height),
    yi = zi(_.Ke.cookie + "|" + _.Ke.location + "|" + (new Date).getTime() + "|" + Math.random()),
    Ci = _.bi("random/maxObserveMousemove") || 0,
    0 != Ci && _.Xe(_.Je, "mousemove", Ei));
    _.Mi = function(a) {
        var b = window;
        a = (a || b.location.href).match(RegExp(".*(\\?|#|&)usegapi=([^&#]+)")) || [];
        return "1" === decodeURIComponent(a[a.length - 1] || "")
    }
    ;
    _.Ni = function(a) {
        if (!_.xd) {
            a: {
                var b = document.createElement("a");
                try {
                    b.href = a
                } catch (c) {
                    a = void 0;
                    break a
                }
                a = b.protocol;
                a = ":" === a || "" === a ? "https:" : a
            }
            return a
        }
        try {
            b = new URL(a)
        } catch (c) {
            return "https:"
        }
        return b.protocol
    }
    ;
    _.Oi = function(a, b) {
        return "string" === typeof b ? a.getElementById(b) : b
    }
    ;
    _.Pi = function(a, b) {
        var c = Array.prototype.slice.call(arguments, 1);
        return function() {
            var d = c.slice();
            d.push.apply(d, arguments);
            return a.apply(this, d)
        }
    }
    ;
    _.Qi = function() {}
    ;
    _.Ri = [];
    _.Si = [];
    _.Ti = !1;
    _.Ui = function(a) {
        _.Ri[_.Ri.length] = a;
        if (_.Ti)
            for (var b = 0; b < _.Si.length; b++)
                a((0,
                _.M)(_.Si[b].wrap, _.Si[b]))
    }
    ;
    _.Ij = function(a, b, c, d) {
        for (var e = 0, f = a.length, h; e < f; ) {
            var k = e + (f - e >>> 1);
            var l = c ? b.call(void 0, a[k], k, a) : b(d, a[k]);
            0 < l ? e = k + 1 : (f = k,
            h = !l)
        }
        return h ? e : -e - 1
    }
    ;
    _.Jj = function(a, b) {
        var c = {}, d;
        for (d in a)
            b.call(void 0, a[d], d, a) && (c[d] = a[d]);
        return c
    }
    ;
    var Kj = function(a) {
        this.O = a
    };
    _.g = Kj.prototype;
    _.g.value = function() {
        return this.O
    }
    ;
    _.g.ve = function(a) {
        this.O.width = a;
        return this
    }
    ;
    _.g.Mb = function() {
        return this.O.width
    }
    ;
    _.g.Ad = function(a) {
        this.O.height = a;
        return this
    }
    ;
    _.g.Bc = function() {
        return this.O.height
    }
    ;
    _.g.Oh = function(a) {
        this.O.style = a;
        return this
    }
    ;
    _.g.getStyle = function() {
        return this.O.style
    }
    ;
    _.Lj = function(a) {
        this.O = a || {}
    }
    ;
    _.g = _.Lj.prototype;
    _.g.value = function() {
        return this.O
    }
    ;
    _.g.setUrl = function(a) {
        this.O.url = a;
        return this
    }
    ;
    _.g.getUrl = function() {
        return this.O.url
    }
    ;
    _.g.Oh = function(a) {
        this.O.style = a;
        return this
    }
    ;
    _.g.getStyle = function() {
        return this.O.style
    }
    ;
    _.g.ue = function(a) {
        this.O.id = a;
        return this
    }
    ;
    _.g.getId = function() {
        return this.O.id
    }
    ;
    _.g.Il = function(a) {
        this.O.rpctoken = a;
        return this
    }
    ;
    _.Mj = function(a, b) {
        a.O.messageHandlers = b;
        return a
    }
    ;
    _.Nj = function(a, b) {
        a.O.messageHandlersFilter = b;
        return a
    }
    ;
    _.Lj.prototype.mq = _.ea(4);
    _.Lj.prototype.getContext = function() {
        return this.O.context
    }
    ;
    _.Lj.prototype.Mc = function() {
        return this.O.openerIframe
    }
    ;
    _.Lj.prototype.Bm = function() {
        this.O.attributes = this.O.attributes || {};
        return new Kj(this.O.attributes)
    }
    ;
    var Zj;
    _.Tj = function(a, b) {
        for (var c in a)
            if (!(c in b) || a[c] !== b[c])
                return !1;
        for (var d in b)
            if (!(d in a))
                return !1;
        return !0
    }
    ;
    _.Uj = function(a) {
        var b = {}, c;
        for (c in a)
            b[c] = a[c];
        return b
    }
    ;
    _.Vj = function(a) {
        _.u.setTimeout(function() {
            throw a;
        }, 0)
    }
    ;
    _.Wj = function(a) {
        return a
    }
    ;
    _.Xj = function(a) {
        a.prototype.$goog_Thenable = !0
    }
    ;
    _.Yj = function(a) {
        if (!a)
            return !1;
        try {
            return !!a.$goog_Thenable
        } catch (b) {
            return !1
        }
    }
    ;
    Zj = function(a, b) {
        this.wX = a;
        this.c4 = b;
        this.My = 0;
        this.qf = null
    }
    ;
    Zj.prototype.get = function() {
        if (0 < this.My) {
            this.My--;
            var a = this.qf;
            this.qf = a.next;
            a.next = null
        } else
            a = this.wX();
        return a
    }
    ;
    Zj.prototype.put = function(a) {
        this.c4(a);
        100 > this.My && (this.My++,
        a.next = this.qf,
        this.qf = a)
    }
    ;
    var bk, ck, ak;
    _.dk = function(a) {
        a = ak(a);
        "function" !== typeof _.u.setImmediate || _.u.Window && _.u.Window.prototype && !_.xb() && _.u.Window.prototype.setImmediate == _.u.setImmediate ? (bk || (bk = ck()),
        bk(a)) : _.u.setImmediate(a)
    }
    ;
    ck = function() {
        var a = _.u.MessageChannel;
        "undefined" === typeof a && "undefined" !== typeof window && window.postMessage && window.addEventListener && !_.tb("Presto") && (a = function() {
            var e = _.ze("IFRAME");
            e.style.display = "none";
            document.documentElement.appendChild(e);
            var f = e.contentWindow;
            e = f.document;
            e.open();
            e.close();
            var h = "callImmediate" + Math.random()
              , k = "file:" == f.location.protocol ? "*" : f.location.protocol + "//" + f.location.host;
            e = (0,
            _.M)(function(l) {
                if (("*" == k || l.origin == k) && l.data == h)
                    this.port1.onmessage()
            }, this);
            f.addEventListener("message", e, !1);
            this.port1 = {};
            this.port2 = {
                postMessage: function() {
                    f.postMessage(h, k)
                }
            }
        }
        );
        if ("undefined" !== typeof a && !_.wb()) {
            var b = new a
              , c = {}
              , d = c;
            b.port1.onmessage = function() {
                if (void 0 !== c.next) {
                    c = c.next;
                    var e = c.cb;
                    c.cb = null;
                    e()
                }
            }
            ;
            return function(e) {
                d.next = {
                    cb: e
                };
                d = d.next;
                b.port2.postMessage(0)
            }
        }
        return function(e) {
            _.u.setTimeout(e, 0)
        }
    }
    ;
    ak = _.Wj;
    _.Ui(function(a) {
        ak = a
    });
    var ek = function() {
        this.ZA = this.Nq = null
    };
    ek.prototype.add = function(a, b) {
        var c = fk.get();
        c.set(a, b);
        this.ZA ? this.ZA.next = c : this.Nq = c;
        this.ZA = c
    }
    ;
    ek.prototype.remove = function() {
        var a = null;
        this.Nq && (a = this.Nq,
        this.Nq = this.Nq.next,
        this.Nq || (this.ZA = null),
        a.next = null);
        return a
    }
    ;
    var fk = new Zj(function() {
        return new gk
    }
    ,function(a) {
        return a.reset()
    }
    )
      , gk = function() {
        this.next = this.scope = this.jh = null
    };
    gk.prototype.set = function(a, b) {
        this.jh = a;
        this.scope = b;
        this.next = null
    }
    ;
    gk.prototype.reset = function() {
        this.next = this.scope = this.jh = null
    }
    ;
    var hk, ik, jk, kk, mk;
    ik = !1;
    jk = new ek;
    _.lk = function(a, b) {
        hk || kk();
        ik || (hk(),
        ik = !0);
        jk.add(a, b)
    }
    ;
    kk = function() {
        if (_.u.Promise && _.u.Promise.resolve) {
            var a = _.u.Promise.resolve(void 0);
            hk = function() {
                a.then(mk)
            }
        } else
            hk = function() {
                _.dk(mk)
            }
    }
    ;
    mk = function() {
        for (var a; a = jk.remove(); ) {
            try {
                a.jh.call(a.scope)
            } catch (b) {
                _.Vj(b)
            }
            fk.put(a)
        }
        ik = !1
    }
    ;
    var pk, qk, rk;
    _.ok = function(a, b) {
        this.Ca = 0;
        this.Qe = void 0;
        this.to = this.tk = this.Ab = null;
        this.vx = this.NC = !1;
        if (a != _.Qi)
            try {
                var c = this;
                a.call(b, function(d) {
                    nk(c, 2, d)
                }, function(d) {
                    nk(c, 3, d)
                })
            } catch (d) {
                nk(this, 3, d)
            }
    }
    ;
    pk = function() {
        this.next = this.context = this.Op = this.kt = this.Wl = null;
        this.Zq = !1
    }
    ;
    pk.prototype.reset = function() {
        this.context = this.Op = this.kt = this.Wl = null;
        this.Zq = !1
    }
    ;
    qk = new Zj(function() {
        return new pk
    }
    ,function(a) {
        a.reset()
    }
    );
    rk = function(a, b, c) {
        var d = qk.get();
        d.kt = a;
        d.Op = b;
        d.context = c;
        return d
    }
    ;
    _.sk = function(a) {
        if (a instanceof _.ok)
            return a;
        var b = new _.ok(_.Qi);
        nk(b, 2, a);
        return b
    }
    ;
    _.tk = function(a) {
        return new _.ok(function(b, c) {
            c(a)
        }
        )
    }
    ;
    _.vk = function(a, b, c) {
        uk(a, b, c, null) || _.lk(_.Pi(b, a))
    }
    ;
    _.wk = function(a) {
        return new _.ok(function(b, c) {
            var d = a.length
              , e = [];
            if (d)
                for (var f = function(m, n) {
                    d--;
                    e[m] = n;
                    0 == d && b(e)
                }, h = function(m) {
                    c(m)
                }, k = 0, l; k < a.length; k++)
                    l = a[k],
                    _.vk(l, _.Pi(f, k), h);
            else
                b(e)
        }
        )
    }
    ;
    _.yk = function() {
        var a, b, c = new _.ok(function(d, e) {
            a = d;
            b = e
        }
        );
        return new xk(c,a,b)
    }
    ;
    _.ok.prototype.then = function(a, b, c) {
        return zk(this, "function" === typeof a ? a : null, "function" === typeof b ? b : null, c)
    }
    ;
    _.Xj(_.ok);
    _.Bk = function(a, b) {
        b = rk(b, b);
        b.Zq = !0;
        Ak(a, b);
        return a
    }
    ;
    _.ok.prototype.ru = function(a, b) {
        return zk(this, null, a, b)
    }
    ;
    _.ok.prototype.catch = _.ok.prototype.ru;
    _.ok.prototype.cancel = function(a) {
        if (0 == this.Ca) {
            var b = new Ck(a);
            _.lk(function() {
                Dk(this, b)
            }, this)
        }
    }
    ;
    var Dk = function(a, b) {
        if (0 == a.Ca)
            if (a.Ab) {
                var c = a.Ab;
                if (c.tk) {
                    for (var d = 0, e = null, f = null, h = c.tk; h && (h.Zq || (d++,
                    h.Wl == a && (e = h),
                    !(e && 1 < d))); h = h.next)
                        e || (f = h);
                    e && (0 == c.Ca && 1 == d ? Dk(c, b) : (f ? (d = f,
                    d.next == c.to && (c.to = d),
                    d.next = d.next.next) : Ek(c),
                    Fk(c, e, 3, b)))
                }
                a.Ab = null
            } else
                nk(a, 3, b)
    }
      , Ak = function(a, b) {
        a.tk || 2 != a.Ca && 3 != a.Ca || Gk(a);
        a.to ? a.to.next = b : a.tk = b;
        a.to = b
    }
      , zk = function(a, b, c, d) {
        var e = rk(null, null, null);
        e.Wl = new _.ok(function(f, h) {
            e.kt = b ? function(k) {
                try {
                    var l = b.call(d, k);
                    f(l)
                } catch (m) {
                    h(m)
                }
            }
            : f;
            e.Op = c ? function(k) {
                try {
                    var l = c.call(d, k);
                    void 0 === l && k instanceof Ck ? h(k) : f(l)
                } catch (m) {
                    h(m)
                }
            }
            : h
        }
        );
        e.Wl.Ab = a;
        Ak(a, e);
        return e.Wl
    };
    _.ok.prototype.t6 = function(a) {
        this.Ca = 0;
        nk(this, 2, a)
    }
    ;
    _.ok.prototype.u6 = function(a) {
        this.Ca = 0;
        nk(this, 3, a)
    }
    ;
    var nk = function(a, b, c) {
        0 == a.Ca && (a === c && (b = 3,
        c = new TypeError("Promise cannot resolve to itself")),
        a.Ca = 1,
        uk(c, a.t6, a.u6, a) || (a.Qe = c,
        a.Ca = b,
        a.Ab = null,
        Gk(a),
        3 != b || c instanceof Ck || Hk(a, c)))
    }
      , uk = function(a, b, c, d) {
        if (a instanceof _.ok)
            return Ak(a, rk(b || _.Qi, c || null, d)),
            !0;
        if (_.Yj(a))
            return a.then(b, c, d),
            !0;
        if (_.Rb(a))
            try {
                var e = a.then;
                if ("function" === typeof e)
                    return Ik(a, e, b, c, d),
                    !0
            } catch (f) {
                return c.call(d, f),
                !0
            }
        return !1
    }
      , Ik = function(a, b, c, d, e) {
        var f = !1
          , h = function(l) {
            f || (f = !0,
            c.call(e, l))
        }
          , k = function(l) {
            f || (f = !0,
            d.call(e, l))
        };
        try {
            b.call(a, h, k)
        } catch (l) {
            k(l)
        }
    }
      , Gk = function(a) {
        a.NC || (a.NC = !0,
        _.lk(a.kw, a))
    }
      , Ek = function(a) {
        var b = null;
        a.tk && (b = a.tk,
        a.tk = b.next,
        b.next = null);
        a.tk || (a.to = null);
        return b
    };
    _.ok.prototype.kw = function() {
        for (var a; a = Ek(this); )
            Fk(this, a, this.Ca, this.Qe);
        this.NC = !1
    }
    ;
    var Fk = function(a, b, c, d) {
        if (3 == c && b.Op && !b.Zq)
            for (; a && a.vx; a = a.Ab)
                a.vx = !1;
        if (b.Wl)
            b.Wl.Ab = null,
            Jk(b, c, d);
        else
            try {
                b.Zq ? b.kt.call(b.context) : Jk(b, c, d)
            } catch (e) {
                Kk.call(null, e)
            }
        qk.put(b)
    }
      , Jk = function(a, b, c) {
        2 == b ? a.kt.call(a.context, c) : a.Op && a.Op.call(a.context, c)
    }
      , Hk = function(a, b) {
        a.vx = !0;
        _.lk(function() {
            a.vx && Kk.call(null, b)
        })
    }
      , Kk = _.Vj
      , Ck = function(a) {
        _.fb.call(this, a);
        this.iR = !1
    };
    _.ab(Ck, _.fb);
    Ck.prototype.name = "cancel";
    var xk = function(a, b, c) {
        this.promise = a;
        this.resolve = b;
        this.reject = c
    };
    _.Lk = function(a) {
        return new _.ok(a)
    }
    ;
    var Tk = function() {
        this.Cu = {
            dR: Mk ? "../" + Mk : null,
            xC: Nk,
            ON: Ok,
            Gfa: Pk,
            Km: Qk,
            yga: Rk
        };
        this.Hf = _.Je;
        this.NQ = this.AX;
        this.nY = /MSIE\s*[0-8](\D|$)/.test(window.navigator.userAgent);
        if (this.Cu.dR) {
            this.Hf = this.Cu.ON(this.Hf, this.Cu.dR);
            var a = this.Hf.document
              , b = a.createElement("script");
            b.setAttribute("type", "text/javascript");
            b.text = "window.doPostMsg=function(w,s,o) {window.setTimeout(function(){w.postMessage(s,o);},0);};";
            a.body.appendChild(b);
            this.NQ = this.Hf.doPostMsg
        }
        this.LI = {};
        this.mJ = {};
        a = (0,
        _.M)(this.gE, this);
        _.Xe(this.Hf, "message", a);
        _.Ne(_.Ye, "RPMQ", []).push(a);
        this.Hf != this.Hf.parent && Sk(this, this.Hf.parent, this.kF(this.Hf.name), "*")
    };
    Tk.prototype.kF = function(a) {
        return '{"h":"' + escape(a) + '"}'
    }
    ;
    var Uk = function(a) {
        var b = null;
        0 === a.indexOf('{"h":"') && a.indexOf('"}') === a.length - 2 && (b = unescape(a.substring(6, a.length - 2)));
        return b
    }
      , Vk = function(a) {
        if (!/^\s*{/.test(a))
            return !1;
        a = _.Vf(a);
        return null !== a && "object" === typeof a && !!a.g
    };
    Tk.prototype.gE = function(a) {
        var b = String(a.data);
        _.$f.debug("gapix.rpc.receive(" + Pk + "): " + (!b || 512 >= b.length ? b : b.substr(0, 512) + "... (" + b.length + " bytes)"));
        var c = 0 !== b.indexOf("!_");
        c || (b = b.substring(2));
        var d = Vk(b);
        if (!c && !d) {
            if (!d && (c = Uk(b))) {
                if (this.LI[c])
                    this.LI[c]();
                else
                    this.mJ[c] = 1;
                return
            }
            var e = a.origin
              , f = this.Cu.xC;
            this.nY ? _.Je.setTimeout(function() {
                f(b, e)
            }, 0) : f(b, e)
        }
    }
    ;
    Tk.prototype.Db = function(a, b) {
        ".." === a || this.mJ[a] ? (b(),
        delete this.mJ[a]) : this.LI[a] = b
    }
    ;
    var Sk = function(a, b, c, d) {
        var e = Vk(c) ? "" : "!_";
        _.$f.debug("gapix.rpc.send(" + Pk + "): " + (!c || 512 >= c.length ? c : c.substr(0, 512) + "... (" + c.length + " bytes)"));
        a.NQ(b, e + c, d)
    };
    Tk.prototype.AX = function(a, b, c) {
        a.postMessage(b, c)
    }
    ;
    Tk.prototype.send = function(a, b, c) {
        (a = this.Cu.ON(this.Hf, a)) && !a.closed && Sk(this, a, b, c)
    }
    ;
    var Wk, Xk, Yk, Zk, $k, al, bl, Mk, Pk, cl, dl, el, Ok, Qk, gl, hl, ml, nl, pl, Rk, rl, ql, il, jl, sl, Nk, tl, ul;
    Wk = 0;
    Xk = [];
    Yk = {};
    Zk = {};
    $k = _.Je.location.href;
    al = _.Se($k, "rpctoken");
    bl = _.Se($k, "parent") || _.Ke.referrer;
    Mk = _.Se($k, "rly");
    Pk = Mk || (_.Je !== _.Je.top || _.Je.opener) && _.Je.name || "..";
    cl = null;
    dl = {};
    el = function() {}
    ;
    _.fl = {
        send: el,
        Db: el,
        kF: el
    };
    Ok = function(a, b) {
        "/" == b.charAt(0) && (b = b.substring(1),
        a = _.Je.top);
        if (0 === b.length)
            return a;
        for (b = b.split("/"); b.length; ) {
            var c = b.shift();
            "{" == c.charAt(0) && "}" == c.charAt(c.length - 1) && (c = c.substring(1, c.length - 1));
            if (".." === c)
                a = a == a.parent ? a.opener : a.parent;
            else if (".." !== c && a.frames[c]) {
                if (a = a.frames[c],
                !("postMessage"in a))
                    throw Error("L");
            } else
                return null
        }
        return a
    }
    ;
    Qk = function(a) {
        return (a = Yk[a]) && a.token
    }
    ;
    gl = function(a) {
        if (a.f in {})
            return !1;
        var b = a.t
          , c = Yk[a.r];
        a = a.origin;
        return c && (c.token === b || !c.token && !b) && (a === c.origin || "*" === c.origin)
    }
    ;
    hl = function(a) {
        var b = a.id.split("/")
          , c = b[b.length - 1]
          , d = a.origin;
        return function(e) {
            var f = e.origin;
            return e.f == c && (d == f || "*" == d)
        }
    }
    ;
    _.kl = function(a, b, c) {
        a = il(a);
        Zk[a.name] = {
            jh: b,
            Us: a.Us,
            Lq: c || gl
        };
        jl()
    }
    ;
    _.ll = function(a) {
        delete Zk[il(a).name]
    }
    ;
    ml = {};
    nl = function(a, b) {
        (a = ml["_" + a]) && a[1](this) && a[0].call(this, b)
    }
    ;
    pl = function(a) {
        var b = a.c;
        if (!b)
            return el;
        var c = a.r
          , d = a.g ? "legacy__" : "";
        return function() {
            var e = [].slice.call(arguments, 0);
            e.unshift(c, d + "__cb", null, b);
            _.ol.apply(null, e)
        }
    }
    ;
    Rk = function(a) {
        cl = a
    }
    ;
    rl = function(a) {
        dl[a] || (dl[a] = _.Je.setTimeout(function() {
            dl[a] = !1;
            ql(a)
        }, 0))
    }
    ;
    ql = function(a) {
        var b = Yk[a];
        if (b && b.ready) {
            var c = b.nG;
            for (b.nG = []; c.length; )
                _.fl.send(a, _.Wf(c.shift()), b.origin)
        }
    }
    ;
    il = function(a) {
        return 0 === a.indexOf("legacy__") ? {
            name: a.substring(8),
            Us: !0
        } : {
            name: a,
            Us: !1
        }
    }
    ;
    jl = function() {
        for (var a = _.bi("rpc/residenceSec") || 60, b = (new Date).getTime() / 1E3, c, d = 0; c = Xk[d]; ++d) {
            var e = c.An;
            if (!e || 0 < a && b - c.timestamp > a)
                Xk.splice(d, 1),
                --d;
            else {
                var f = e.s
                  , h = Zk[f] || Zk["*"];
                if (h)
                    if (Xk.splice(d, 1),
                    --d,
                    e.origin = c.origin,
                    c = pl(e),
                    e.callback = c,
                    h.Lq(e)) {
                        if ("__cb" !== f && !!h.Us != !!e.g)
                            break;
                        e = h.jh.apply(e, e.a);
                        void 0 !== e && c(e)
                    } else
                        _.$f.debug("gapix.rpc.rejected(" + Pk + "): " + f)
            }
        }
    }
    ;
    sl = function(a, b, c) {
        Xk.push({
            An: a,
            origin: b,
            timestamp: (new Date).getTime() / 1E3
        });
        c || jl()
    }
    ;
    Nk = function(a, b) {
        a = _.Vf(a);
        sl(a, b, !1)
    }
    ;
    tl = function(a) {
        for (; a.length; )
            sl(a.shift(), this.origin, !0);
        jl()
    }
    ;
    ul = function(a) {
        var b = !1;
        a = a.split("|");
        var c = a[0];
        0 <= c.indexOf("/") && (b = !0);
        return {
            id: c,
            origin: a[1] || "*",
            RE: b
        }
    }
    ;
    _.vl = function(a, b, c, d) {
        var e = ul(a);
        d && (_.Je.frames[e.id] = _.Je.frames[e.id] || d);
        a = e.id;
        if (!Yk.hasOwnProperty(a)) {
            c = c || null;
            d = e.origin;
            if (".." === a)
                d = _.Ng(bl),
                c = c || al;
            else if (!e.RE) {
                var f = _.Ke.getElementById(a);
                f && (f = f.src,
                d = _.Ng(f),
                c = c || _.Se(f, "rpctoken"))
            }
            "*" === e.origin && d || (d = e.origin);
            Yk[a] = {
                token: c,
                nG: [],
                origin: d,
                q4: b,
                YQ: function() {
                    var h = a;
                    Yk[h].ready = 1;
                    ql(h)
                }
            };
            _.fl.Db(a, Yk[a].YQ)
        }
        return Yk[a].YQ
    }
    ;
    _.ol = function(a, b, c, d) {
        a = a || "..";
        _.vl(a);
        a = a.split("|", 1)[0];
        var e = b
          , f = [].slice.call(arguments, 3)
          , h = c
          , k = Pk
          , l = al
          , m = Yk[a]
          , n = k
          , q = ul(a);
        if (m && ".." !== a) {
            if (q.RE) {
                if (!(l = Yk[a].q4)) {
                    l = cl ? cl.substring(1).split("/") : [Pk];
                    n = l.length - 1;
                    for (var p = _.Je.parent; p !== _.Je.top; ) {
                        var t = p.parent;
                        if (!n--) {
                            for (var v = null, r = t.frames.length, w = 0; w < r; ++w)
                                t.frames[w] == p && (v = w);
                            l.unshift("{" + v + "}")
                        }
                        p = t
                    }
                    l = "/" + l.join("/")
                }
                n = l
            } else
                n = k = "..";
            l = m.token
        }
        h && q ? (m = gl,
        q.RE && (m = hl(q)),
        ml["_" + ++Wk] = [h, m],
        h = Wk) : h = null;
        f = {
            s: e,
            f: k,
            r: n,
            t: l,
            c: h,
            a: f
        };
        e = il(e);
        f.s = e.name;
        f.g = e.Us;
        Yk[a].nG.push(f);
        rl(a)
    }
    ;
    if ("function" === typeof _.Je.postMessage || "object" === typeof _.Je.postMessage)
        _.fl = new Tk,
        _.kl("__cb", nl, function() {
            return !0
        }),
        _.kl("_processBatch", tl, function() {
            return !0
        }),
        _.vl("..");
    var wl;
    wl = function() {
        function a(k, l) {
            k = window.getComputedStyle(k, "").getPropertyValue(l).match(/^([0-9]+)/);
            return parseInt(k[0], 10)
        }
        for (var b = 0, c = [document.body]; 0 < c.length; ) {
            var d = c.shift()
              , e = d.childNodes;
            if ("undefined" !== typeof d.style) {
                var f = d.style.overflowY;
                f || (f = (f = document.defaultView.getComputedStyle(d, null)) ? f.overflowY : null);
                if ("visible" != f && "inherit" != f && (f = d.style.height,
                f || (f = (f = document.defaultView.getComputedStyle(d, null)) ? f.height : ""),
                0 < f.length && "auto" != f))
                    continue
            }
            for (d = 0; d < e.length; d++) {
                f = e[d];
                if ("undefined" !== typeof f.offsetTop && "undefined" !== typeof f.offsetHeight) {
                    var h = f.offsetTop + f.offsetHeight + a(f, "margin-bottom");
                    b = Math.max(b, h)
                }
                c.push(f)
            }
        }
        return b + a(document.body, "border-bottom") + a(document.body, "margin-bottom") + a(document.body, "padding-bottom")
    }
    ;
    _.xl = function() {
        var a = 0;
        self.innerHeight ? a = self.innerHeight : document.documentElement && document.documentElement.clientHeight ? a = document.documentElement.clientHeight : document.body && (a = document.body.clientHeight);
        var b = document.body
          , c = document.documentElement;
        if ("CSS1Compat" === document.compatMode && c.scrollHeight)
            return c.scrollHeight !== a ? c.scrollHeight : c.offsetHeight;
        if (0 <= navigator.userAgent.indexOf("AppleWebKit"))
            return wl();
        if (b && c) {
            var d = c.scrollHeight
              , e = c.offsetHeight;
            c.clientHeight !== e && (d = b.scrollHeight,
            e = b.offsetHeight);
            return d > a ? d > e ? d : e : d < e ? d : e
        }
    }
    ;
    var zl, Al, Bl, Cl, Dl, El, Fl, Gl, Hl, Il, Jl, Kl, Ol, Pl, Ql, Rl, Sl, Tl, Ul, Vl;
    _.yl = function(a, b) {
        if (!a)
            throw Error(b || "");
    }
    ;
    zl = /&/g;
    Al = /</g;
    Bl = />/g;
    Cl = /"/g;
    Dl = /'/g;
    El = function(a) {
        return String(a).replace(zl, "&amp;").replace(Al, "&lt;").replace(Bl, "&gt;").replace(Cl, "&quot;").replace(Dl, "&#39;")
    }
    ;
    Fl = /[\ud800-\udbff][\udc00-\udfff]|[^!-~]/g;
    Gl = /%([a-f]|[0-9a-fA-F][a-f])/g;
    Hl = /^(https?|ftp|file|chrome-extension):$/i;
    Il = function(a) {
        a = String(a);
        a = a.replace(Fl, function(e) {
            try {
                return encodeURIComponent(e)
            } catch (f) {
                return encodeURIComponent(e.replace(/^[^%]+$/g, "\ufffd"))
            }
        }).replace(_.Ue, function(e) {
            return e.replace(/%/g, "%25")
        }).replace(Gl, function(e) {
            return e.toUpperCase()
        });
        a = a.match(_.Te) || [];
        var b = _.Oe()
          , c = function(e) {
            return e.replace(/\\/g, "%5C").replace(/\^/g, "%5E").replace(/`/g, "%60").replace(/\{/g, "%7B").replace(/\|/g, "%7C").replace(/\}/g, "%7D")
        }
          , d = !!(a[1] || "").match(Hl);
        b.gr = c((a[1] || "") + (a[2] || "") + (a[3] || (a[2] && d ? "/" : "")));
        d = function(e) {
            return c(e.replace(/\?/g, "%3F").replace(/#/g, "%23"))
        }
        ;
        b.query = a[5] ? [d(a[5])] : [];
        b.ki = a[7] ? [d(a[7])] : [];
        return b
    }
    ;
    Jl = function(a) {
        return a.gr + (0 < a.query.length ? "?" + a.query.join("&") : "") + (0 < a.ki.length ? "#" + a.ki.join("&") : "")
    }
    ;
    Kl = function(a, b) {
        var c = [];
        if (a)
            for (var d in a)
                if (_.Pe(a, d) && null != a[d]) {
                    var e = b ? b(a[d]) : a[d];
                    c.push(encodeURIComponent(d) + "=" + encodeURIComponent(e))
                }
        return c
    }
    ;
    _.Ll = function(a, b, c, d) {
        a = Il(a);
        a.query.push.apply(a.query, Kl(b, d));
        a.ki.push.apply(a.ki, Kl(c, d));
        return Jl(a)
    }
    ;
    _.Ml = function(a, b) {
        var c = Il(b);
        b = c.gr;
        c.query.length && (b += "?" + c.query.join(""));
        c.ki.length && (b += "#" + c.ki.join(""));
        var d = "";
        2E3 < b.length && (c = b,
        b = b.substr(0, 2E3),
        b = b.replace(_.Ve, ""),
        d = c.substr(b.length));
        var e = a.createElement("div");
        a = a.createElement("a");
        c = Il(b);
        b = c.gr;
        c.query.length && (b += "?" + c.query.join(""));
        c.ki.length && (b += "#" + c.ki.join(""));
        _.he(a, _.Tc(_.Qb(b)));
        e.appendChild(a);
        _.Eb(e, _.ld(e.innerHTML));
        b = String(e.firstChild.href);
        e.parentNode && e.parentNode.removeChild(e);
        c = Il(b + d);
        b = c.gr;
        c.query.length && (b += "?" + c.query.join(""));
        c.ki.length && (b += "#" + c.ki.join(""));
        return b
    }
    ;
    _.Nl = /^https?:\/\/[^\/%\\?#\s]+\/[^\s]*$/i;
    Pl = function(a) {
        for (; a.firstChild; )
            a.removeChild(a.firstChild)
    }
    ;
    Ql = /^https?:\/\/(?:\w|[\-\.])+\.google\.(?:\w|[\-:\.])+(?:\/[^\?#]*)?\/b\/(\d{10,21})\//;
    Rl = function() {
        var a = _.bi("googleapis.config/sessionDelegate");
        "string" === typeof a && 21 < a.length && (a = null);
        null == a && (a = (a = window.location.href.match(Ql)) ? a[1] : null);
        if (null == a)
            return null;
        a = String(a);
        21 < a.length && (a = null);
        return a
    }
    ;
    Sl = function() {
        var a = _.Ye.onl;
        if (!a) {
            a = _.Oe();
            _.Ye.onl = a;
            var b = _.Oe();
            a.e = function(c) {
                var d = b[c];
                d && (delete b[c],
                d())
            }
            ;
            a.a = function(c, d) {
                b[c] = d
            }
            ;
            a.r = function(c) {
                delete b[c]
            }
        }
        return a
    }
    ;
    Tl = function(a, b) {
        b = b.onload;
        return "function" === typeof b ? (Sl().a(a, b),
        b) : null
    }
    ;
    Ul = function(a) {
        _.yl(/^\w+$/.test(a), "Unsupported id - " + a);
        return 'onload="window.___jsl.onl.e(&#34;' + a + '&#34;)"'
    }
    ;
    Vl = function(a) {
        Sl().r(a)
    }
    ;
    var Xl, Yl, bm;
    _.Wl = {
        allowtransparency: "true",
        frameborder: "0",
        hspace: "0",
        marginheight: "0",
        marginwidth: "0",
        scrolling: "no",
        style: "",
        tabindex: "0",
        vspace: "0",
        width: "100%"
    };
    Xl = {
        allowtransparency: !0,
        onload: !0
    };
    Yl = 0;
    _.Zl = function(a, b) {
        var c = 0;
        do
            var d = b.id || ["I", Yl++, "_", (new Date).getTime()].join("");
        while (a.getElementById(d) && 5 > ++c);
        _.yl(5 > c, "Error creating iframe id");
        return d
    }
    ;
    _.$l = function(a, b) {
        return a ? b + "/" + a : ""
    }
    ;
    _.am = function(a, b, c, d) {
        var e = {}
          , f = {};
        a.documentMode && 9 > a.documentMode && (e.hostiemode = a.documentMode);
        _.Qe(d.queryParams || {}, e);
        _.Qe(d.fragmentParams || {}, f);
        var h = d.pfname;
        var k = _.Oe();
        _.bi("iframes/dropLegacyIdParam") || (k.id = c);
        k._gfid = c;
        k.parent = a.location.protocol + "//" + a.location.host;
        c = _.Se(a.location.href, "parent");
        h = h || "";
        !h && c && (h = _.Se(a.location.href, "_gfid", "") || _.Se(a.location.href, "id", ""),
        h = _.$l(h, _.Se(a.location.href, "pfname", "")));
        h || (c = _.Vf(_.Se(a.location.href, "jcp", ""))) && "object" == typeof c && (h = _.$l(c.id, c.pfname));
        k.pfname = h;
        d.connectWithJsonParam && (h = {},
        h.jcp = _.Wf(k),
        k = h);
        h = _.Se(b, "rpctoken") || e.rpctoken || f.rpctoken;
        h || (h = d.rpctoken || String(Math.round(1E8 * _.Bi())),
        k.rpctoken = h);
        d.rpctoken = h;
        _.Qe(k, d.connectWithQueryParams ? e : f);
        k = a.location.href;
        a = _.Oe();
        (h = _.Se(k, "_bsh", _.Ye.bsh)) && (a._bsh = h);
        (k = _.Ye.dpo ? _.Ye.h : _.Se(k, "jsh", _.Ye.h)) && (a.jsh = k);
        d.hintInFragment ? _.Qe(a, f) : _.Qe(a, e);
        return _.Ll(b, e, f, d.paramsSerializer)
    }
    ;
    bm = function(a) {
        _.yl(!a || _.Nl.test(a), "Illegal url for new iframe - " + a)
    }
    ;
    _.cm = function(a, b, c, d, e) {
        bm(c.src);
        var f, h = Tl(d, c), k = h ? Ul(d) : "";
        try {
            document.all && (f = a.createElement('<iframe frameborder="' + El(String(c.frameborder)) + '" scrolling="' + El(String(c.scrolling)) + '" ' + k + ' name="' + El(String(c.name)) + '"/>'))
        } catch (m) {} finally {
            f || (f = _.pe(a).na("IFRAME"),
            h && (f.onload = function() {
                f.onload = null;
                h.call(this)
            }
            ,
            Vl(d)))
        }
        f.setAttribute("ng-non-bindable", "");
        for (var l in c)
            a = c[l],
            "style" === l && "object" === typeof a ? _.Qe(a, f.style) : Xl[l] || f.setAttribute(l, String(a));
        (l = e && e.beforeNode || null) || e && e.dontclear || Pl(b);
        b.insertBefore(f, l);
        f = l ? l.previousSibling : b.lastChild;
        c.allowtransparency && (f.allowTransparency = !0);
        return f
    }
    ;
    var dm, gm;
    dm = /^:[\w]+$/;
    _.em = /:([a-zA-Z_]+):/g;
    _.fm = function() {
        var a = _.di() || "0"
          , b = Rl();
        var c = _.di() || a;
        var d = Rl()
          , e = "";
        c && (e += "u/" + encodeURIComponent(String(c)) + "/");
        d && (e += "b/" + encodeURIComponent(String(d)) + "/");
        c = e || null;
        (e = (d = !1 === _.bi("isLoggedIn")) ? "_/im/" : "") && (c = "");
        var f = _.bi("iframes/:socialhost:")
          , h = _.bi("iframes/:im_socialhost:");
        return Ol = {
            socialhost: f,
            ctx_socialhost: d ? h : f,
            session_index: a,
            session_delegate: b,
            session_prefix: c,
            im_prefix: e
        }
    }
    ;
    gm = function(a, b) {
        return _.fm()[b] || ""
    }
    ;
    _.hm = function(a) {
        return _.Ml(_.Ke, a.replace(_.em, gm))
    }
    ;
    _.im = function(a) {
        var b = a;
        dm.test(a) && (b = _.bi("iframes/" + b.substring(1) + "/url"),
        _.yl(!!b, "Unknown iframe url config for - " + a));
        return _.hm(b)
    }
    ;
    _.jm = function(a, b, c) {
        c = c || {};
        var d = c.attributes || {};
        _.yl(!(c.allowPost || c.forcePost) || !d.onload, "onload is not supported by post iframe (allowPost or forcePost)");
        a = _.im(a);
        d = b.ownerDocument || _.Ke;
        var e = _.Zl(d, c);
        a = _.am(d, a, e, c);
        var f = c
          , h = _.Oe();
        _.Qe(_.Wl, h);
        _.Qe(f.attributes, h);
        h.name = h.id = e;
        h.src = a;
        c.eurl = a;
        c = (f = c) || {};
        var k = !!c.allowPost;
        if (c.forcePost || k && 2E3 < a.length) {
            c = Il(a);
            h.src = "";
            f.dropDataPostorigin || (h["data-postorigin"] = a);
            a = _.cm(d, b, h, e);
            if (-1 != navigator.userAgent.indexOf("WebKit")) {
                var l = a.contentWindow.document;
                l.open();
                h = l.createElement("div");
                k = {};
                var m = e + "_inner";
                k.name = m;
                k.src = "";
                k.style = "display:none";
                _.cm(d, h, k, m, f)
            }
            h = (f = c.query[0]) ? f.split("&") : [];
            f = [];
            for (k = 0; k < h.length; k++)
                m = h[k].split("=", 2),
                f.push([decodeURIComponent(m[0]), decodeURIComponent(m[1])]);
            c.query = [];
            h = Jl(c);
            _.yl(_.Nl.test(h), "Invalid URL: " + h);
            c = d.createElement("form");
            c.method = "POST";
            c.target = e;
            c.style.display = "none";
            e = h instanceof _.Pc ? h : _.Xc(h);
            c.action = _.Qc(e);
            for (e = 0; e < f.length; e++)
                h = d.createElement("input"),
                h.type = "hidden",
                h.name = f[e][0],
                h.value = f[e][1],
                c.appendChild(h);
            b.appendChild(c);
            c.submit();
            c.parentNode.removeChild(c);
            l && l.close();
            b = a
        } else
            b = _.cm(d, b, h, e, f);
        return b
    }
    ;
    var nm = function(a, b) {
        return _.Ij(a, b, !0)
    }, om = function(a) {
        var b = function(c) {
            return new (a().Context)(c)
        };
        b.prototype.addOnConnectHandler = function(c, d, e, f) {
            return a().Context.prototype.addOnConnectHandler.apply(this, [c, d, e, f])
        }
        ;
        b.prototype.addOnOpenerHandler = function(c, d, e) {
            return a().Context.prototype.addOnOpenerHandler.apply(this, [c, d, e])
        }
        ;
        b.prototype.closeSelf = function(c, d, e) {
            return a().Context.prototype.closeSelf.apply(this, [c, d, e])
        }
        ;
        b.prototype.connectIframes = function(c, d) {
            a().Context.prototype.connectIframes.apply(this, [c, d])
        }
        ;
        b.prototype.getFrameName = function() {
            return a().Context.prototype.getFrameName.apply(this)
        }
        ;
        b.prototype.getGlobalParam = function(c) {
            a().Context.prototype.getGlobalParam.apply(this, [c])
        }
        ;
        b.prototype.getParentIframe = function() {
            return a().Context.prototype.getParentIframe.apply(this)
        }
        ;
        b.prototype.getWindow = function() {
            return a().Context.prototype.getWindow.apply(this)
        }
        ;
        b.prototype.isDisposed = function() {
            return a().Context.prototype.isDisposed.apply(this)
        }
        ;
        b.prototype.open = function(c, d) {
            return a().Context.prototype.open.apply(this, [c, d])
        }
        ;
        b.prototype.openChild = function(c) {
            return a().Context.prototype.openChild.apply(this, [c])
        }
        ;
        b.prototype.ready = function(c, d, e, f) {
            a().Context.prototype.ready.apply(this, [c, d, e, f])
        }
        ;
        b.prototype.removeOnConnectHandler = function(c) {
            a().Context.prototype.removeOnConnectHandler.apply(this, [c])
        }
        ;
        b.prototype.restyleSelf = function(c, d, e) {
            return a().Context.prototype.restyleSelf.apply(this, [c, d, e])
        }
        ;
        b.prototype.setCloseSelfFilter = function(c) {
            a().Context.prototype.setCloseSelfFilter.apply(this, [c])
        }
        ;
        b.prototype.setGlobalParam = function(c, d) {
            a().Context.prototype.setGlobalParam.apply(this, [c, d])
        }
        ;
        b.prototype.setRestyleSelfFilter = function(c) {
            a().Context.prototype.setRestyleSelfFilter.apply(this, [c])
        }
        ;
        return b
    }, pm = function(a) {
        var b = function(c, d, e, f) {
            return new (a().Iframe)(c,d,e,f)
        };
        b.prototype.applyIframesApi = function(c) {
            a().Iframe.prototype.applyIframesApi(c)
        }
        ;
        b.prototype.close = function(c, d) {
            return a().Iframe.prototype.close.apply(this, [c, d])
        }
        ;
        b.prototype.getContext = function() {
            return a().Iframe.prototype.getContext.apply(this, [])
        }
        ;
        b.prototype.getFrameName = function() {
            return a().Iframe.prototype.getFrameName.apply(this, [])
        }
        ;
        b.prototype.getId = function() {
            return a().Iframe.prototype.getId.apply(this, [])
        }
        ;
        b.prototype.getIframeEl = function() {
            return a().Iframe.prototype.getIframeEl.apply(this, [])
        }
        ;
        b.prototype.getOrigin = function() {
            return a().Iframe.prototype.getOrigin.apply(this, [])
        }
        ;
        b.prototype.getParam = function(c) {
            a().Iframe.prototype.getParam.apply(this, [c])
        }
        ;
        b.prototype.getSiteEl = function() {
            return a().Iframe.prototype.getSiteEl.apply(this, [])
        }
        ;
        b.prototype.getWindow = function() {
            return a().Iframe.prototype.getWindow.apply(this, [])
        }
        ;
        b.prototype.isDisposed = function() {
            return a().Iframe.prototype.isDisposed.apply(this, [])
        }
        ;
        b.prototype.ping = function(c, d) {
            return a().Iframe.prototype.ping.apply(this, [c, d])
        }
        ;
        b.prototype.register = function(c, d, e) {
            a().Iframe.prototype.register.apply(this, [c, d, e])
        }
        ;
        b.prototype.registerWasClosed = function(c, d) {
            a().Iframe.prototype.registerWasClosed.apply(this, [c, d])
        }
        ;
        b.prototype.registerWasRestyled = function(c, d) {
            a().Iframe.prototype.registerWasRestyled.apply(this, [c, d])
        }
        ;
        b.prototype.restyle = function(c, d) {
            return a().Iframe.prototype.restyle.apply(this, [c, d])
        }
        ;
        b.prototype.send = function(c, d, e, f) {
            return a().Iframe.prototype.send.apply(this, [c, d, e, f])
        }
        ;
        b.prototype.setParam = function(c, d) {
            a().Iframe.prototype.setParam.apply(this, [c, d])
        }
        ;
        b.prototype.setSiteEl = function(c) {
            a().Iframe.prototype.setSiteEl.apply(this, [c])
        }
        ;
        b.prototype.unregister = function(c, d) {
            a().Iframe.prototype.unregister.apply(this, [c, d])
        }
        ;
        return b
    }, qm, rm, vm, xm, Cm, Lm, Mm, Om, Sm, Tm, Wm, Ym, Zm, an, $m, bn;
    _.Lj.prototype.mq = _.cb(4, function(a) {
        this.O.apis = a;
        return this
    });
    qm = function(a, b) {
        a.O.onload = b
    }
    ;
    rm = function(a) {
        return a.O.rpctoken
    }
    ;
    _.sm = function(a, b) {
        a.O.queryParams = b;
        return a
    }
    ;
    _.tm = function(a, b) {
        a.O.relayOpen = b;
        return a
    }
    ;
    _.um = function(a, b) {
        a.O.onClose = b;
        return a
    }
    ;
    vm = function(a, b) {
        a.O.controllerData = b
    }
    ;
    _.wm = function(a) {
        a.O.waitForOnload = !0;
        return a
    }
    ;
    xm = function(a) {
        return (a = a.O.timeout) ? a : null
    }
    ;
    _.ym = function(a) {
        return !!a && "object" === typeof a && _.Me.test(a.push)
    }
    ;
    _.zm = function(a) {
        for (var b = 0; b < this.length; b++)
            if (this[b] === a)
                return b;
        return -1
    }
    ;
    _.Am = function(a, b, c) {
        if (a) {
            _.yl(_.ym(a), "arrayForEach was called with a non array value");
            for (var d = 0; d < a.length; d++)
                b.call(c, a[d], d)
        }
    }
    ;
    _.Bm = function(a, b, c) {
        if (a)
            if (_.ym(a))
                _.Am(a, b, c);
            else {
                _.yl("object" === typeof a, "objectForEach was called with a non object value");
                c = c || a;
                for (var d in a)
                    _.Pe(a, d) && void 0 !== a[d] && b.call(c, a[d], d)
            }
    }
    ;
    Cm = function(a) {
        this.O = a || {}
    }
    ;
    Cm.prototype.value = function() {
        return this.O
    }
    ;
    Cm.prototype.getIframe = function() {
        return this.O.iframe
    }
    ;
    var Dm = function(a, b) {
        a.O.role = b;
        return a
    }
      , Em = function(a, b) {
        a.O.data = b;
        return a
    };
    Cm.prototype.Vj = function(a) {
        this.O.setRpcReady = a;
        return this
    }
    ;
    var Fm = function(a) {
        return a.O.setRpcReady
    };
    Cm.prototype.Il = function(a) {
        this.O.rpctoken = a;
        return this
    }
    ;
    var Gm = function(a) {
        a.O.selfConnect = !0;
        return a
    }
      , Hm = function(a) {
        this.O = a || {}
    };
    Hm.prototype.value = function() {
        return this.O
    }
    ;
    var Jm = function(a) {
        var b = new Im;
        b.O.role = a;
        return b
    };
    Hm.prototype.FN = function() {
        return this.O.role
    }
    ;
    Hm.prototype.wc = function(a) {
        this.O.handler = a;
        return this
    }
    ;
    Hm.prototype.lb = function() {
        return this.O.handler
    }
    ;
    var Km = function(a, b) {
        a.O.filter = b;
        return a
    };
    Hm.prototype.mq = function(a) {
        this.O.apis = a;
        return this
    }
    ;
    Om = /^[\w\.\-]*$/;
    _.Pm = function(a) {
        return a.getOrigin() === a.getContext().getOrigin()
    }
    ;
    _.Qm = function() {
        return !0
    }
    ;
    _.Rm = function(a) {
        for (var b = _.Oe(), c = 0; c < a.length; c++)
            b[a[c]] = !0;
        return function(d) {
            return !!b[d.Xc]
        }
    }
    ;
    Sm = function(a, b, c) {
        a = Lm[a];
        if (!a)
            return [];
        for (var d = [], e = 0; e < a.length; e++)
            d.push(_.sk(a[e].call(c, b, c)));
        return d
    }
    ;
    Tm = function(a, b, c) {
        return function(d) {
            if (!b.isDisposed()) {
                var e = this.origin
                  , f = b.getOrigin();
                _.yl(e === f, "Wrong origin " + e + " != " + f);
                e = this.callback;
                d = Sm(a, d, b);
                !c && 0 < d.length && _.wk(d).then(e)
            }
        }
    }
    ;
    _.Um = function(a, b, c) {
        _.yl("_default" != a, "Cannot update default api");
        Mm[a] = {
            map: b,
            filter: c
        }
    }
    ;
    _.Vm = function(a, b, c) {
        _.yl("_default" != a, "Cannot update default api");
        _.Ne(Mm, a, {
            map: {},
            filter: _.Pm
        }).map[b] = c
    }
    ;
    Wm = function(a, b) {
        _.Ne(Mm, "_default", {
            map: {},
            filter: _.Qm
        }).map[a] = b;
        _.Bm(_.Nm.Mf, function(c) {
            c.register(a, b, _.Qm)
        })
    }
    ;
    _.Xm = function() {
        return _.Nm
    }
    ;
    Ym = /^https?:\/\/[^\/%\\?#\s]+$/i;
    Zm = {
        longdesc: !0,
        name: !0,
        src: !0,
        frameborder: !0,
        marginwidth: !0,
        marginheight: !0,
        scrolling: !0,
        align: !0,
        height: !0,
        width: !0,
        id: !0,
        "class": !0,
        title: !0,
        tabindex: !0,
        hspace: !0,
        vspace: !0,
        allowtransparency: !0
    };
    an = function(a) {
        this.resolve = this.reject = null;
        this.promise = _.Lk((0,
        _.M)(function(b, c) {
            this.resolve = b;
            this.reject = c
        }, this));
        a && (this.promise = $m(this.promise, a))
    }
    ;
    $m = function(a, b) {
        return a.then(function(c) {
            try {
                b(c)
            } catch (d) {}
            return c
        })
    }
    ;
    bn = function(a) {
        this.Pf = a;
        this.Context = om(a);
        this.Iframe = pm(a)
    }
    ;
    _.g = bn.prototype;
    _.g.CROSS_ORIGIN_IFRAMES_FILTER = function(a) {
        return this.Pf().CROSS_ORIGIN_IFRAMES_FILTER(a)
    }
    ;
    _.g.SAME_ORIGIN_IFRAMES_FILTER = function(a) {
        return this.Pf().SAME_ORIGIN_IFRAMES_FILTER(a)
    }
    ;
    _.g.create = function(a, b, c) {
        return this.Pf().create(a, b, c)
    }
    ;
    _.g.getBeforeOpenStyle = function(a) {
        return this.Pf().getBeforeOpenStyle(a)
    }
    ;
    _.g.getContext = function() {
        return this.Pf().getContext()
    }
    ;
    _.g.getStyle = function(a) {
        return this.Pf().getStyle(a)
    }
    ;
    _.g.makeWhiteListIframesFilter = function(a) {
        return this.Pf().makeWhiteListIframesFilter(a)
    }
    ;
    _.g.registerBeforeOpenStyle = function(a, b) {
        return this.Pf().registerBeforeOpenStyle(a, b)
    }
    ;
    _.g.registerIframesApi = function(a, b, c) {
        return this.Pf().registerIframesApi(a, b, c)
    }
    ;
    _.g.registerIframesApiHandler = function(a, b, c) {
        return this.Pf().registerIframesApiHandler(a, b, c)
    }
    ;
    _.g.registerStyle = function(a, b) {
        return this.Pf().registerStyle(a, b)
    }
    ;
    var cn = function() {
        this.Jh = []
    };
    cn.prototype.Pf = function(a) {
        return this.Jh.length ? dn(this.Jh[0], a) : void 0
    }
    ;
    var dn = function(a, b) {
        b = void 0 === b ? function(c) {
            return new c
        }
        : b;
        return a.xo ? b(a.xo) : a.instance
    }
      , en = function() {
        cn.apply(this, arguments)
    };
    _.L(en, cn);
    var gn = function(a) {
        var b = fn.LL
          , c = a.priority
          , d = ~nm(b.Jh, function(e) {
            return e.priority < c ? -1 : 1
        });
        b.Jh.splice(d, 0, a)
    };
    var fn = new function() {
        var a = this;
        this.LL = new en;
        this.instance = new bn(function() {
            return a.LL.Pf()()
        }
        )
    }
    ;
    gn({
        instance: function() {
            return window.gapi.iframes
        },
        priority: 1
    });
    _.hn = fn.instance;
    var jn, kn;
    jn = {
        height: !0,
        width: !0
    };
    kn = /^(?!-*(?:expression|(?:moz-)?binding))(?:[.#]?-?(?:[_a-z0-9-]+)(?:-[_a-z0-9-]+)*-?|-?(?:[0-9]+(?:\.[0-9]*)?|\.[0-9]+)(?:[a-z]{1,2}|%)?|!important|)$/i;
    _.ln = function(a) {
        "number" === typeof a && (a = String(a) + "px");
        return a
    }
    ;
    var mn = function() {
        Cm.apply(this, arguments)
    };
    _.L(mn, Cm);
    var Im = function() {
        Hm.apply(this, arguments)
    };
    _.L(Im, Hm);
    var nn = function() {
        _.Lj.apply(this, arguments)
    };
    _.L(nn, _.Lj);
    var on = function(a) {
        nn.call(this, a)
    };
    _.L(on, nn);
    var pn = function(a, b) {
        a.O.frameName = b;
        return a
    };
    on.prototype.getFrameName = function() {
        return this.O.frameName
    }
    ;
    var qn = function(a, b) {
        a.O.rpcAddr = b;
        return a
    };
    on.prototype.Tf = function() {
        return this.O.rpcAddr
    }
    ;
    var rn = function(a, b) {
        a.O.retAddr = b;
        return a
    };
    _.g = on.prototype;
    _.g.th = function() {
        return this.O.retAddr
    }
    ;
    _.g.Si = function(a) {
        this.O.origin = a;
        return this
    }
    ;
    _.g.getOrigin = function() {
        return this.O.origin
    }
    ;
    _.g.Vj = function(a) {
        this.O.setRpcReady = a;
        return this
    }
    ;
    _.g.rq = function(a) {
        this.O.context = a
    }
    ;
    var sn = function(a, b) {
        a.O._rpcReadyFn = b
    };
    on.prototype.getIframeEl = function() {
        return this.O.iframeEl
    }
    ;
    var tn = function(a, b, c) {
        var d = a.Tf()
          , e = b.th();
        rn(qn(c, a.th() + "/" + b.Tf()), e + "/" + d);
        pn(c, b.getFrameName()).Si(b.getOrigin())
    };
    var vn = function(a, b, c) {
        a.setTimeout(function() {
            b.closed || 5 == c ? un(b) : (b.close(),
            c++,
            vn(a, b, c))
        }, 1E3)
    }
      , un = function(a) {
        a.closed || a.document && a.document.body && _.Ie(a.document.body, "Please close this window.")
    };
    _.wn = function(a, b, c, d) {
        this.qg = !1;
        this.Za = a;
        this.BG = b;
        this.Fo = c;
        this.Ha = d;
        this.rR = this.Ha.th();
        this.Xc = this.Ha.getOrigin();
        this.A0 = this.Ha.getIframeEl();
        this.IS = this.Ha.O.where;
        this.Jh = [];
        this.applyIframesApi("_default");
        a = this.Ha.O.apis || [];
        for (b = 0; b < a.length; b++)
            this.applyIframesApi(a[b]);
        this.Za.Mf[c] = this
    }
    ;
    _.g = _.wn.prototype;
    _.g.isDisposed = function() {
        return this.qg
    }
    ;
    _.g.Ga = function() {
        if (!this.isDisposed()) {
            for (var a = 0; a < this.Jh.length; a++)
                this.unregister(this.Jh[a]);
            delete _.Nm.Mf[this.getFrameName()];
            this.qg = !0
        }
    }
    ;
    _.g.getContext = function() {
        return this.Za
    }
    ;
    _.g.getOptions = function() {
        return this.Ha
    }
    ;
    _.g.Tf = function() {
        return this.BG
    }
    ;
    _.g.th = function() {
        return this.rR
    }
    ;
    _.g.getFrameName = function() {
        return this.Fo
    }
    ;
    _.g.getIframeEl = function() {
        return this.A0
    }
    ;
    _.g.getSiteEl = function() {
        return this.IS
    }
    ;
    _.g.setSiteEl = function(a) {
        this.IS = a
    }
    ;
    _.g.Vj = function() {
        (0,
        this.Ha.O._rpcReadyFn)()
    }
    ;
    _.g.setParam = function(a, b) {
        this.Ha.value()[a] = b
    }
    ;
    _.g.getParam = function(a) {
        return this.Ha.value()[a]
    }
    ;
    _.g.jc = function() {
        return this.Ha.value()
    }
    ;
    _.g.getId = function() {
        return this.Ha.getId()
    }
    ;
    _.g.getOrigin = function() {
        return this.Xc
    }
    ;
    var xn = function(a, b) {
        var c = a.Za.getFrameName();
        return a.Fo + ":" + c + ":" + b
    };
    _.g = _.wn.prototype;
    _.g.register = function(a, b, c) {
        _.yl(!this.isDisposed(), "Cannot register handler on disposed iframe " + a);
        _.yl((c || _.Pm)(this), "Rejecting untrusted message " + a);
        c = xn(this, a);
        1 == _.Ne(Lm, c, []).push(b) && (this.Jh.push(a),
        _.kl(c, Tm(c, this, "_g_wasClosed" === a)))
    }
    ;
    _.g.unregister = function(a, b) {
        var c = xn(this, a)
          , d = Lm[c];
        d && (b ? (b = _.zm.call(d, b),
        0 <= b && d.splice(b, 1)) : d.splice(0, d.length),
        0 == d.length && (b = _.zm.call(this.Jh, a),
        0 <= b && this.Jh.splice(b, 1),
        _.ll(c)))
    }
    ;
    _.g.BZ = function() {
        return this.Jh
    }
    ;
    _.g.applyIframesApi = function(a) {
        this.EB = this.EB || [];
        if (!(0 <= _.zm.call(this.EB, a))) {
            this.EB.push(a);
            a = Mm[a] || {
                map: {}
            };
            for (var b in a.map)
                _.Pe(a.map, b) && this.register(b, a.map[b], a.filter)
        }
    }
    ;
    _.g.getWindow = function() {
        if (!_.Pm(this))
            return null;
        var a = this.Ha.O._popupWindow;
        if (a)
            return a;
        var b = this.BG.split("/");
        a = this.getContext().getWindow();
        for (var c = 0; c < b.length && a; c++) {
            var d = b[c];
            a = ".." === d ? a == a.parent ? a.opener : a.parent : a.frames[d]
        }
        return a
    }
    ;
    var yn = function(a) {
        var b = {};
        if (a)
            for (var c in a)
                _.Pe(a, c) && _.Pe(jn, c) && kn.test(a[c]) && (b[c] = a[c]);
        return b
    };
    _.g = _.wn.prototype;
    _.g.close = function(a, b) {
        return zn(this, "_g_close", a, b)
    }
    ;
    _.g.restyle = function(a, b) {
        return zn(this, "_g_restyle", a, b)
    }
    ;
    _.g.cq = function(a, b) {
        return zn(this, "_g_restyleDone", a, b)
    }
    ;
    _.g.nX = function(a) {
        return this.getContext().closeSelf(a, void 0, this)
    }
    ;
    _.g.m4 = function(a) {
        if (a && "object" === typeof a)
            return this.getContext().restyleSelf(a, void 0, this)
    }
    ;
    _.g.n4 = function(a) {
        var b = this.Ha.O.onRestyle;
        b && b.call(this, a, this);
        a = a && "object" === typeof a ? yn(a) : {};
        (b = this.getIframeEl()) && a && "object" === typeof a && (_.Pe(a, "height") && (a.height = _.ln(a.height)),
        _.Pe(a, "width") && (a.width = _.ln(a.width)),
        _.Qe(a, b.style))
    }
    ;
    _.g.oX = function(a) {
        var b = this.Ha.O.onClose;
        b && b.call(this, a, this);
        if (b = this.getOptions().O._popupWindow) {
            var c = this.getContext().getWindow().document.getElementById(this.getId());
            c && c.parentNode && c.parentNode.removeChild(c);
            c = this.getContext().getWindow();
            _.Md && _.Bh && c ? (c.focus(),
            vn(c, b, 0)) : (b.close(),
            un(b))
        }
        b || (b = this.getIframeEl()) && b.parentNode && b.parentNode.removeChild(b);
        if (b = this.Ha.O.controller)
            c = {},
            c.frameName = this.getFrameName(),
            zn(b, "_g_disposeControl", c);
        b = xn(this, "_g_wasClosed");
        Sm(b, a, this)
    }
    ;
    _.g.registerWasRestyled = function(a, b) {
        this.register("_g_wasRestyled", a, b)
    }
    ;
    _.g.registerWasClosed = function(a, b) {
        this.register("_g_wasClosed", a, b)
    }
    ;
    _.g.N6 = function() {
        delete this.getContext().Mf[this.getFrameName()];
        this.getContext().getWindow().setTimeout((0,
        _.M)(function() {
            this.Ga()
        }, this), 0)
    }
    ;
    _.g.send = function(a, b, c, d) {
        _.yl(!this.isDisposed(), "Cannot send message to disposed iframe - " + a);
        _.yl((d || _.Pm)(this), "Wrong target for message " + a);
        c = new an(c);
        a = this.Za.getFrameName() + ":" + this.Fo + ":" + a;
        _.ol(this.BG, a, c.resolve, b);
        return c.promise
    }
    ;
    var zn = function(a, b, c, d) {
        return a.send(b, c, d, _.Qm)
    };
    _.g = _.wn.prototype;
    _.g.i3 = function(a) {
        return a
    }
    ;
    _.g.ping = function(a, b) {
        return zn(this, "_g_ping", b, a)
    }
    ;
    _.g.sX = function(a) {
        a = a && "object" === typeof a ? a : {};
        for (var b = a.rpcAddr, c = (this.Tf() + "/" + b).split("/"), d = this.getContext().getWindow(), e; (e = c.shift()) && d; )
            d = ".." == e ? d.parent : d.frames[e];
        _.yl(!!d, "Bad rpc address " + b);
        a._window = d;
        a._parentRpcAddr = this.Tf();
        a._parentRetAddr = this.th();
        this.getContext();
        b = new _.An(a);
        this.s2 && this.s2(b, a.controllerData);
        this.iC = this.iC || [];
        this.iC.push(b, a.controllerData)
    }
    ;
    _.g.FX = function(a) {
        a = (a || {}).frameName;
        for (var b = this.iC || [], c = 0; c < b.length; c++)
            if (b[c].getFrameName() === a) {
                a = b.splice(c, 1)[0];
                a.Ga();
                this.w2 && this.w2(a);
                return
            }
        _.yl(!1, "Unknown contolled iframe to dispose - " + a)
    }
    ;
    _.g.qX = function(a) {
        var b = new on(a);
        a = new mn(b.value());
        if (a.O.selfConnect)
            var c = this;
        else
            (_.yl(Ym.test(b.getOrigin()), "Illegal origin for connected iframe - " + b.getOrigin()),
            c = this.getContext().Mf[b.getFrameName()],
            c) ? Fm(b) && (c.Vj(),
            zn(c, "_g_rpcReady")) : (b = pn(rn(qn(new on, b.Tf()), b.th()).Si(b.getOrigin()), b.getFrameName()).Vj(Fm(b)).Il(rm(b)),
            c = this.getContext().attach(b.value()));
        b = this.getContext();
        var d = a.O.role;
        a = a.O.data;
        Bn(b);
        d = d || "";
        _.Ne(b.gC, d, []).push({
            yi: c,
            data: a
        });
        Cn(c, a, b.IF[d])
    }
    ;
    _.g.UH = function(a, b) {
        (new on(b)).O._relayedDepth || (b = {},
        Gm(Dm(new mn(b), "_opener")),
        zn(a, "_g_connect", b))
    }
    ;
    _.g.zQ = function(a) {
        var b = this
          , c = a.O.messageHandlers
          , d = a.O.messageHandlersFilter
          , e = a.O.onClose;
        _.um(_.Nj(_.Mj(a, null), null), null);
        return zn(this, "_g_open", a.value()).then(function(f) {
            var h = new on(f[0])
              , k = h.getFrameName();
            f = new on;
            var l = b.th()
              , m = h.th();
            rn(qn(f, b.Tf() + "/" + h.Tf()), m + "/" + l);
            pn(f, k);
            f.Si(h.getOrigin());
            f.mq(h.O.apis);
            f.Il(rm(a));
            _.Mj(f, c);
            _.Nj(f, d);
            _.um(f, e);
            (h = b.getContext().Mf[k]) || (h = b.getContext().attach(f.value()));
            return h
        })
    }
    ;
    _.g.CG = function(a) {
        var b = a.getUrl();
        _.yl(!b || _.Nl.test(b), "Illegal url for new iframe - " + b);
        var c = a.Bm().value();
        b = {};
        for (var d in c)
            _.Pe(c, d) && _.Pe(Zm, d) && (b[d] = c[d]);
        _.Pe(c, "style") && (d = c.style,
        "object" === typeof d && (b.style = yn(d)));
        a.value().attributes = b
    }
    ;
    _.g.V2 = function(a) {
        a = new on(a);
        this.CG(a);
        var b = a.O._relayedDepth || 0;
        a.O._relayedDepth = b + 1;
        a.O.openerIframe = this;
        var c = rm(a);
        a.Il(null);
        var d = this;
        return this.getContext().open(a.value()).then(function(e) {
            var f = (new on(e.jc())).O.apis
              , h = new on;
            tn(e, d, h);
            0 == b && Dm(new mn(h.value()), "_opener");
            h.Vj(!0);
            h.Il(c);
            zn(e, "_g_connect", h.value());
            h = new on;
            pn(rn(qn(h, e.Tf()), e.rR), e.getFrameName()).Si(e.getOrigin()).mq(f);
            return h.value()
        })
    }
    ;
    _.g.l4 = function(a) {
        this.getContext().addOnOpenerHandler(function(b) {
            b.send("_g_wasRestyled", a, void 0, _.Qm)
        }, null, _.Qm)
    }
    ;
    var Hn;
    _.Dn = _.Oe();
    _.En = _.Oe();
    _.Fn = function(a, b) {
        _.Dn[a] = b
    }
    ;
    _.Gn = function(a) {
        return _.Dn[a]
    }
    ;
    Hn = function(a, b) {
        _.Re.load("gapi.iframes.style." + a, b)
    }
    ;
    _.In = function(a, b) {
        _.En[a] = b
    }
    ;
    _.Jn = function(a) {
        return _.En[a]
    }
    ;
    _.An = function(a) {
        a = a || {};
        this.qg = !1;
        this.FQ = _.Oe();
        this.Mf = _.Oe();
        this.Hf = a._window || _.Je;
        this.kd = this.Hf.location.href;
        this.GQ = (this.YF = Kn(this.kd, "parent")) ? Kn(this.kd, "pfname") : "";
        this.Ba = this.YF ? Kn(this.kd, "_gfid") || Kn(this.kd, "id") : "";
        this.Fo = _.$l(this.Ba, this.GQ);
        this.Xc = _.Ng(this.kd);
        if (this.Ba) {
            var b = new on;
            qn(b, a._parentRpcAddr || "..");
            rn(b, a._parentRetAddr || this.Ba);
            b.Si(_.Ng(this.YF || this.kd));
            pn(b, this.GQ);
            this.Ab = this.attach(b.value())
        } else
            this.Ab = null
    }
    ;
    _.g = _.An.prototype;
    _.g.isDisposed = function() {
        return this.qg
    }
    ;
    _.g.Ga = function() {
        if (!this.isDisposed()) {
            for (var a = _.sa(Object.values(this.Mf)), b = a.next(); !b.done; b = a.next())
                b.value.Ga();
            this.qg = !0
        }
    }
    ;
    _.g.getFrameName = function() {
        return this.Fo
    }
    ;
    _.g.getOrigin = function() {
        return this.Xc
    }
    ;
    _.g.getWindow = function() {
        return this.Hf
    }
    ;
    _.g.hb = function() {
        return this.Hf.document
    }
    ;
    _.g.setGlobalParam = function(a, b) {
        this.FQ[a] = b
    }
    ;
    _.g.getGlobalParam = function(a) {
        return this.FQ[a]
    }
    ;
    _.g.attach = function(a) {
        _.yl(!this.isDisposed(), "Cannot attach iframe in disposed context");
        a = new on(a);
        a.Tf() || qn(a, a.getId());
        a.th() || rn(a, "..");
        a.getOrigin() || a.Si(_.Ng(a.getUrl()));
        a.getFrameName() || pn(a, _.$l(a.getId(), this.Fo));
        var b = a.getFrameName();
        if (this.Mf[b])
            return this.Mf[b];
        var c = a.Tf()
          , d = c;
        a.getOrigin() && (d = c + "|" + a.getOrigin());
        var e = a.th()
          , f = rm(a);
        f || (f = (f = a.getIframeEl()) && (f.getAttribute("data-postorigin") || f.src) || a.getUrl(),
        f = _.Se(f, "rpctoken"));
        sn(a, _.vl(d, e, f, a.O._popupWindow));
        d = ((window.gadgets || {}).rpc || {}).setAuthToken;
        f && d && d(c, f);
        var h = new _.wn(this,c,b,a)
          , k = a.O.messageHandlersFilter;
        _.Bm(a.O.messageHandlers, function(l, m) {
            h.register(m, l, k)
        });
        Fm(a) && h.Vj();
        zn(h, "_g_rpcReady");
        return h
    }
    ;
    _.g.CG = function(a) {
        pn(a, null);
        var b = a.getId();
        !b || Om.test(b) && !this.getWindow().document.getElementById(b) || (_.$f.log("Ignoring requested iframe ID - " + b),
        a.ue(null))
    }
    ;
    var Kn = function(a, b) {
        var c = _.Se(a, b);
        c || (c = _.Vf(_.Se(a, "jcp", ""))[b]);
        return c || ""
    };
    _.An.prototype.openChild = function(a) {
        _.yl(!this.isDisposed(), "Cannot open iframe in disposed context");
        var b = new on(a);
        Ln(this, b);
        var c = b.getFrameName();
        if (c && this.Mf[c])
            return this.Mf[c];
        this.CG(b);
        c = b.getUrl();
        _.yl(c, "No url for new iframe");
        var d = b.O.queryParams || {};
        d.usegapi = "1";
        _.sm(b, d);
        d = this.iO && this.iO(c, b);
        d || (d = b.O.where,
        _.yl(!!d, "No location for new iframe"),
        c = _.jm(c, d, a),
        b.O.iframeEl = c,
        d = c.getAttribute("id"));
        qn(b, d).ue(d);
        b.Si(_.Ng(b.O.eurl || ""));
        this.IP && this.IP(b, b.getIframeEl());
        c = this.attach(a);
        c.UH && c.UH(c, a);
        (a = b.O.onCreate) && a(c);
        b.O.disableRelayOpen || c.applyIframesApi("_open");
        return c
    }
    ;
    var Mn = function(a, b, c) {
        var d = b.O.canvasUrl;
        if (!d)
            return c;
        _.yl(!b.O.allowPost && !b.O.forcePost, "Post is not supported when using canvas url");
        var e = b.getUrl();
        _.yl(e && _.Ng(e) === a.Xc && _.Ng(d) === a.Xc, "Wrong origin for canvas or hidden url " + d);
        b.setUrl(d);
        _.wm(b);
        b.O.canvasUrl = null;
        return function(f) {
            var h = f.getWindow()
              , k = h.location.hash;
            k = _.im(e) + (/#/.test(e) ? k.replace(/^#/, "&") : k);
            h.location.replace(k);
            c && c(f)
        }
    }
      , Nn = function(a, b, c) {
        var d = b.O.relayOpen;
        if (d) {
            var e = a.getParentIframe();
            d instanceof _.wn ? (e = d,
            _.tm(b, 0)) : 0 < Number(d) && _.tm(b, Number(d) - 1);
            if (e) {
                _.yl(!!e.zQ, "Relaying iframe open is disabled");
                if (d = b.getStyle())
                    if (d = _.En[d])
                        b.rq(a),
                        d(b.value()),
                        b.rq(null);
                b.O.openerIframe = null;
                c.resolve(e.zQ(b));
                return !0
            }
        }
        return !1
    }
      , On = function(a, b, c) {
        var d = b.getStyle();
        if (d)
            if (_.yl(!!_.Gn, "Defer style is disabled, when requesting style " + d),
            _.Dn[d])
                Ln(a, b);
            else
                return Hn(d, function() {
                    _.yl(!!_.Dn[d], "Fail to load style - " + d);
                    c.resolve(a.open(b.value()))
                }),
                !0;
        return !1
    };
    _.An.prototype.open = function(a, b) {
        _.yl(!this.isDisposed(), "Cannot open iframe in disposed context");
        var c = new on(a);
        b = Mn(this, c, b);
        var d = new an(b);
        (b = c.getUrl()) && c.setUrl(_.im(b));
        if (Nn(this, c, d) || On(this, c, d) || Nn(this, c, d))
            return d.promise;
        if (null != xm(c)) {
            var e = setTimeout(function() {
                h.getIframeEl().src = "about:blank";
                d.reject({
                    timeout: "Exceeded time limit of :" + xm(c) + "milliseconds"
                })
            }, xm(c))
              , f = d.resolve;
            d.resolve = function(k) {
                clearTimeout(e);
                f(k)
            }
        }
        c.O.waitForOnload && qm(c.Bm(), function() {
            d.resolve(h)
        });
        var h = this.openChild(a);
        c.O.waitForOnload || d.resolve(h);
        return d.promise
    }
    ;
    _.An.prototype.getParentIframe = function() {
        return this.Ab
    }
    ;
    var Pn = function(a, b) {
        var c = a.getParentIframe()
          , d = !0;
        b.filter && (d = b.filter.call(b.yi, b.params));
        return _.sk(d).then(function(e) {
            return e && c ? (b.EQ && b.EQ.call(a, b.params),
            e = b.sender ? b.sender(b.params) : zn(c, b.message, b.params),
            b.M6 ? e.then(function() {
                return !0
            }) : !0) : !1
        })
    };
    _.g = _.An.prototype;
    _.g.closeSelf = function(a, b, c) {
        a = Pn(this, {
            sender: function(d) {
                var e = _.Nm.getParentIframe();
                _.Bm(_.Nm.Mf, function(f) {
                    f !== e && zn(f, "_g_wasClosed", d)
                });
                return zn(e, "_g_closeMe", d)
            },
            message: "_g_closeMe",
            params: a,
            yi: c,
            filter: this.getGlobalParam("onCloseSelfFilter")
        });
        b = new an(b);
        b.resolve(a);
        return b.promise
    }
    ;
    _.g.restyleSelf = function(a, b, c) {
        a = a || {};
        b = new an(b);
        b.resolve(Pn(this, {
            message: "_g_restyleMe",
            params: a,
            yi: c,
            filter: this.getGlobalParam("onRestyleSelfFilter"),
            M6: !0,
            EQ: this.jT
        }));
        return b.promise
    }
    ;
    _.g.jT = function(a) {
        "auto" === a.height && (a.height = _.xl())
    }
    ;
    _.g.setCloseSelfFilter = function(a) {
        this.setGlobalParam("onCloseSelfFilter", a)
    }
    ;
    _.g.setRestyleSelfFilter = function(a) {
        this.setGlobalParam("onRestyleSelfFilter", a)
    }
    ;
    var Ln = function(a, b) {
        var c = b.getStyle();
        if (c) {
            b.Oh(null);
            var d = _.Dn[c];
            _.yl(d, "No such style: " + c);
            b.rq(a);
            d(b.value());
            b.rq(null)
        }
    };
    _.An.prototype.ready = function(a, b, c, d) {
        var e = b || {}
          , f = this.getParentIframe();
        this.addOnOpenerHandler(function(k) {
            _.Bm(e, function(l, m) {
                k.register(m, l, d)
            }, this);
            k !== f && k.send("_ready", h, void 0, d)
        }, void 0, d);
        var h = a || {};
        h.height = h.height || "auto";
        this.jT(h);
        f && f.send("_ready", h, c, _.Qm)
    }
    ;
    _.An.prototype.connectIframes = function(a, b) {
        a = new mn(a);
        var c = new mn(b)
          , d = Fm(a);
        b = a.getIframe();
        var e = c.getIframe();
        if (e) {
            var f = rm(a)
              , h = new on;
            tn(b, e, h);
            Em(Dm((new mn(h.value())).Il(f), a.O.role), a.O.data).Vj(d);
            var k = new on;
            tn(e, b, k);
            Em(Dm((new mn(k.value())).Il(f), c.O.role), c.O.data).Vj(!0);
            zn(b, "_g_connect", h.value(), function() {
                d || zn(e, "_g_connect", k.value())
            });
            d && zn(e, "_g_connect", k.value())
        } else
            c = {},
            Em(Dm(Gm(new mn(c)), a.O.role), a.O.data),
            zn(b, "_g_connect", c)
    }
    ;
    var Bn = function(a) {
        a.gC || (a.gC = _.Oe(),
        a.IF = _.Oe())
    };
    _.An.prototype.addOnConnectHandler = function(a, b, c, d) {
        Bn(this);
        "object" === typeof a ? (b = new Im(a),
        c = b.FN() || "") : (b = Km(Jm(a).wc(b).mq(c), d),
        c = a);
        d = this.gC[c] || [];
        a = !1;
        for (var e = 0; e < d.length && !a; e++)
            Cn(this.Mf[d[e].yi.getFrameName()], d[e].data, [b]),
            a = b.O.runOnce;
        c = _.Ne(this.IF, c, []);
        a || b.O.dontWait || c.push(b)
    }
    ;
    _.An.prototype.removeOnConnectHandler = function(a, b) {
        a = _.Ne(this.IF, a, []);
        if (b)
            for (var c = !1, d = 0; !c && d < a.length; d++)
                a[d].lb() === b && (c = !0,
                a.splice(d, 1));
        else
            a.splice(0, a.length)
    }
    ;
    var Cn = function(a, b, c) {
        c = c || [];
        for (var d = 0; d < c.length; d++) {
            var e = c[d];
            if (e && a) {
                var f = e.O.filter || _.Pm;
                if (a && f(a)) {
                    f = e.O.apis || [];
                    for (var h = 0; h < f.length; h++)
                        a.applyIframesApi(f[h]);
                    e.lb() && e.lb()(a, b);
                    e.O.runOnce && (c.splice(d, 1),
                    --d)
                }
            }
        }
    };
    _.An.prototype.addOnOpenerHandler = function(a, b, c) {
        var d = this.addOnConnectHandler;
        a = Km(Jm("_opener").wc(a).mq(b), c);
        a.O.runOnce = !0;
        d.call(this, a.value())
    }
    ;
    _.An.prototype.IP = function(a, b) {
        var c = a.O.controller;
        if (c) {
            _.yl(c.Xc === a.getOrigin(), "Wrong controller origin " + this.Xc + " !== " + a.getOrigin());
            var d = a.Tf();
            qn(a, c.Tf());
            rn(a, c.th());
            var e = new on;
            vm(qn(e, d), a.O.controllerData);
            _.Xe(b, "load", function() {
                c.send("_g_control", e.value())
            })
        }
    }
    ;
    var Qn = function(a, b, c) {
        a = a.getWindow();
        var d = a.document
          , e = c.O.reuseWindow;
        if (e) {
            var f = c.getId();
            if (!f)
                throw Error("M");
        } else
            f = _.Zl(d, c);
        var h = f
          , k = c.O.rpcRelayUrl;
        if (k) {
            k = _.hm(k);
            h = c.O.fragmentParams || {};
            h.rly = f;
            c.O.fragmentParams = h;
            h = c.O.where || d.body;
            _.yl(!!h, "Cannot open window in a page with no body");
            var l = {};
            l.src = k;
            l.style = "display:none;";
            l.id = f;
            l.name = f;
            _.cm(d, h, l, f);
            h = f + "_relay"
        }
        b = _.im(b);
        var m = _.am(d, b, f, c.value());
        c.O.eurl = m;
        b = c.O.openAsWindow;
        "string" !== typeof b && (b = void 0);
        c = window.navigator.userAgent || "";
        /Trident|MSIE/i.test(c) && /#/.test(c) && (m = "javascript:window.location.replace(" + _.Je.JSON.stringify(m).replace(/#/g, "\\x23") + ")");
        if (e) {
            var n = e;
            setTimeout(function() {
                n.location.replace(m)
            })
        } else
            n = _.ie(m, a, h, b);
        return {
            id: f,
            AT: n
        }
    };
    _.An.prototype.iO = function(a, b) {
        if (b.O.openAsWindow) {
            a = Qn(this, a, b);
            var c = a.id;
            _.yl(!!a.AT, "Open popup window failed");
            b.O._popupWindow = a.AT
        }
        return c
    }
    ;
    Lm = _.Oe();
    Mm = _.Oe();
    _.Nm = new _.An;
    Wm("_g_rpcReady", _.wn.prototype.Vj);
    Wm("_g_discover", _.wn.prototype.BZ);
    Wm("_g_ping", _.wn.prototype.i3);
    Wm("_g_close", _.wn.prototype.nX);
    Wm("_g_closeMe", _.wn.prototype.oX);
    Wm("_g_restyle", _.wn.prototype.m4);
    Wm("_g_restyleMe", _.wn.prototype.n4);
    Wm("_g_wasClosed", _.wn.prototype.N6);
    _.Vm("control", "_g_control", _.wn.prototype.sX);
    _.Vm("control", "_g_disposeControl", _.wn.prototype.FX);
    var Rn = _.Nm.getParentIframe();
    Rn && Rn.register("_g_restyleDone", _.wn.prototype.l4, _.Qm);
    Wm("_g_connect", _.wn.prototype.qX);
    var Sn = {};
    Sn._g_open = _.wn.prototype.V2;
    _.Um("_open", Sn, _.Qm);
    var Tn = {
        Context: _.An,
        Iframe: _.wn,
        SAME_ORIGIN_IFRAMES_FILTER: _.Pm,
        CROSS_ORIGIN_IFRAMES_FILTER: _.Qm,
        makeWhiteListIframesFilter: _.Rm,
        getContext: _.Xm,
        registerIframesApi: _.Um,
        registerIframesApiHandler: _.Vm,
        registerStyle: _.Fn,
        registerBeforeOpenStyle: _.In,
        getStyle: _.Gn,
        getBeforeOpenStyle: _.Jn,
        create: _.jm
    };
    gn({
        instance: function() {
            return Tn
        },
        priority: 2
    });
    _.Vm("gapi.load", "_g_gapi.load", function(a) {
        return new _.ok(function(b) {
            _.Re.load(a && "object" === typeof a && a.features || "", b)
        }
        )
    });
    _.bo = _.Oe();
    _.co = {};
    window.iframer = _.co;
    var eo, fo, go, ho, io, mo, no;
    eo = function(a) {
        if (_.Me.test(Object.keys))
            return Object.keys(a);
        var b = [], c;
        for (c in a)
            _.Pe(a, c) && b.push(c);
        return b
    }
    ;
    fo = {
        button: !0,
        div: !0,
        span: !0
    };
    go = function(a) {
        var b = _.Ne(_.Ye, "sws", []);
        return 0 <= _.zm.call(b, a)
    }
    ;
    ho = function(a) {
        return _.Ne(_.Ye, "watt", _.Oe())[a]
    }
    ;
    io = function(a) {
        return function(b, c) {
            return a ? _.fm()[c] || a[c] || "" : _.fm()[c] || ""
        }
    }
    ;
    _.jo = {
        callback: 1,
        clientid: 1,
        cookiepolicy: 1,
        openidrealm: -1,
        includegrantedscopes: -1,
        requestvisibleactions: 1,
        scope: 1
    };
    _.ko = !1;
    _.lo = function() {
        if (!_.ko) {
            for (var a = document.getElementsByTagName("meta"), b = 0; b < a.length; ++b) {
                var c = a[b].name.toLowerCase();
                if (_.yc(c, "google-signin-")) {
                    c = c.substring(14);
                    var d = a[b].content;
                    _.jo[c] && d && (_.bo[c] = d)
                }
            }
            if (window.self !== window.top) {
                a = document.location.toString();
                for (var e in _.jo)
                    0 < _.jo[e] && (b = _.Se(a, e, "")) && (_.bo[e] = b)
            }
            _.ko = !0
        }
        e = _.Oe();
        _.Qe(_.bo, e);
        return e
    }
    ;
    mo = function(a) {
        var b;
        a.match(/^https?%3A/i) && (b = decodeURIComponent(a));
        a = b ? b : a;
        return _.Ml(document, a)
    }
    ;
    no = function(a) {
        a = a || "canonical";
        for (var b = document.getElementsByTagName("link"), c = 0, d = b.length; c < d; c++) {
            var e = b[c]
              , f = e.getAttribute("rel");
            if (f && f.toLowerCase() == a && (e = e.getAttribute("href")) && (e = mo(e)) && null != e.match(/^https?:\/\/[\w\-_\.]+/i))
                return e
        }
        return window.location.href
    }
    ;
    _.oo = function() {
        return window.location.origin || window.location.protocol + "//" + window.location.host
    }
    ;
    _.po = function(a, b, c, d) {
        return (a = "string" == typeof a ? a : void 0) ? mo(a) : no(d)
    }
    ;
    _.qo = function(a, b, c) {
        null == a && c && (a = c.db,
        null == a && (a = c.gwidget && c.gwidget.db));
        return a || void 0
    }
    ;
    _.ro = function(a, b, c) {
        null == a && c && (a = c.ecp,
        null == a && (a = c.gwidget && c.gwidget.ecp));
        return a || void 0
    }
    ;
    _.so = function(a, b, c) {
        return _.po(a, b, c, b.action ? void 0 : "publisher")
    }
    ;
    var to, uo, vo, wo, xo, yo, Ao, zo;
    to = {
        se: "0"
    };
    uo = {
        post: !0
    };
    vo = {
        style: "position:absolute;top:-10000px;width:450px;margin:0px;border-style:none"
    };
    wo = "onPlusOne _ready _close _open _resizeMe _renderstart oncircled drefresh erefresh".split(" ");
    xo = _.Ne(_.Ye, "WI", _.Oe());
    yo = ["style", "data-gapiscan"];
    Ao = function(a) {
        for (var b = _.Oe(), c = 0 != a.nodeName.toLowerCase().indexOf("g:"), d = a.attributes.length, e = 0; e < d; e++) {
            var f = a.attributes[e]
              , h = f.name
              , k = f.value;
            0 <= _.zm.call(yo, h) || c && 0 != h.indexOf("data-") || "null" === k || "specified"in f && !f.specified || (c && (h = h.substr(5)),
            b[h.toLowerCase()] = k)
        }
        a = a.style;
        (c = zo(a && a.height)) && (b.height = String(c));
        (a = zo(a && a.width)) && (b.width = String(a));
        return b
    }
    ;
    _.Co = function(a, b, c, d, e, f) {
        if (c.rd)
            var h = b;
        else
            h = document.createElement("div"),
            b.setAttribute("data-gapistub", !0),
            h.style.cssText = "position:absolute;width:450px;left:-10000px;",
            b.parentNode.insertBefore(h, b);
        f.siteElement = h;
        h.id || (h.id = _.Bo(a));
        b = _.Oe();
        b[">type"] = a;
        _.Qe(c, b);
        a = _.jm(d, h, e);
        f.iframeNode = a;
        f.id = a.getAttribute("id")
    }
    ;
    _.Bo = function(a) {
        _.Ne(xo, a, 0);
        return "___" + a + "_" + xo[a]++
    }
    ;
    zo = function(a) {
        var b = void 0;
        "number" === typeof a ? b = a : "string" === typeof a && (b = parseInt(a, 10));
        return b
    }
    ;
    var Do, Eo, Fo, Go, Ho = /(?:^|\s)g-((\S)*)(?:$|\s)/, Io = {
        plusone: !0,
        autocomplete: !0,
        profile: !0,
        signin: !0,
        signin2: !0
    };
    Do = _.Ne(_.Ye, "SW", _.Oe());
    Eo = _.Ne(_.Ye, "SA", _.Oe());
    Fo = _.Ne(_.Ye, "SM", _.Oe());
    Go = _.Ne(_.Ye, "FW", []);
    var Jo = function(a, b) {
        return ("string" === typeof a ? document.getElementById(a) : a) || b
    }
      , No = function(a, b) {
        var c;
        Ko.ps0 = (new Date).getTime();
        Lo("ps0");
        a = Jo(a, _.Ke);
        var d = _.Ke.documentMode;
        if (a.querySelectorAll && (!d || 8 < d)) {
            d = b ? [b] : eo(Do).concat(eo(Eo)).concat(eo(Fo));
            for (var e = [], f = 0; f < d.length; f++) {
                var h = d[f];
                e.push(".g-" + h, "g\\:" + h)
            }
            d = a.querySelectorAll(e.join(","))
        } else
            d = a.getElementsByTagName("*");
        a = _.Oe();
        for (e = 0; e < d.length; e++) {
            f = d[e];
            h = b;
            var k = f.nodeName.toLowerCase()
              , l = void 0;
            if (f.getAttribute("data-gapiscan"))
                h = null;
            else {
                var m = k.indexOf("g:");
                0 == m ? l = k.substr(2) : (m = (m = String(f.className || f.getAttribute("class"))) && Ho.exec(m)) && (l = m[1]);
                h = !l || !(Do[l] || Eo[l] || Fo[l]) || h && l !== h ? null : l
            }
            h && (Io[h] || 0 == f.nodeName.toLowerCase().indexOf("g:") || 0 != eo(Ao(f)).length) && (f.setAttribute("data-gapiscan", !0),
            _.Ne(a, h, []).push(f))
        }
        for (n in a)
            Go.push(n);
        Ko.ps1 = (new Date).getTime();
        Lo("ps1");
        if (b = Go.join(":"))
            try {
                _.Re.load(b, void 0)
            } catch (q) {
                _.$f.log(q);
                return
            }
        e = [];
        for (c in a) {
            d = a[c];
            var n = 0;
            for (b = d.length; n < b; n++)
                f = d[n],
                Mo(c, f, Ao(f), e, b)
        }
    };
    var Oo = function(a, b) {
        var c = ho(a);
        b && c ? (c(b),
        (c = b.iframeNode) && c.setAttribute("data-gapiattached", !0)) : _.Re.load(a, function() {
            var d = ho(a)
              , e = b && b.iframeNode
              , f = b && b.userParams;
            e && d ? (d(b),
            e.setAttribute("data-gapiattached", !0)) : (d = _.Re[a].go,
            "signin2" == a ? d(e, f) : d(e && e.parentNode, f))
        })
    }
      , Mo = function(a, b, c, d, e, f, h) {
        switch (Po(b, a, f)) {
        case 0:
            a = Fo[a] ? a + "_annotation" : a;
            d = {};
            d.iframeNode = b;
            d.userParams = c;
            Oo(a, d);
            break;
        case 1:
            if (b.parentNode) {
                for (var k in c) {
                    if (f = _.Pe(c, k))
                        f = c[k],
                        f = !!f && "object" === typeof f && (!f.toString || f.toString === Object.prototype.toString || f.toString === Array.prototype.toString);
                    if (f)
                        try {
                            c[k] = _.Wf(c[k])
                        } catch (w) {
                            delete c[k]
                        }
                }
                k = !0;
                c.dontclear && (k = !1);
                delete c.dontclear;
                var l;
                f = {};
                var m = l = a;
                "plus" == a && c.action && (l = a + "_" + c.action,
                m = a + "/" + c.action);
                (l = _.ff("iframes/" + l + "/url")) || (l = ":im_socialhost:/:session_prefix::im_prefix:_/widget/render/" + m + "?usegapi=1");
                for (n in to)
                    f[n] = n + "/" + (c[n] || to[n]) + "/";
                var n = _.Ml(_.Ke, l.replace(_.em, io(f)));
                m = "iframes/" + a + "/params/";
                f = {};
                _.Qe(c, f);
                (l = _.ff("lang") || _.ff("gwidget/lang")) && (f.hl = l);
                uo[a] || (f.origin = _.oo());
                f.exp = _.ff(m + "exp");
                if (m = _.ff(m + "location"))
                    for (l = 0; l < m.length; l++) {
                        var q = m[l];
                        f[q] = _.Je.location[q]
                    }
                switch (a) {
                case "plus":
                case "follow":
                    f.url = _.so(f.href, c, null);
                    delete f.href;
                    break;
                case "plusone":
                    m = (m = c.href) ? mo(m) : no();
                    f.url = m;
                    f.db = _.qo(c.db, void 0, _.ff());
                    f.ecp = _.ro(c.ecp, void 0, _.ff());
                    delete f.href;
                    break;
                case "signin":
                    f.url = no()
                }
                _.Ye.ILI && (f.iloader = "1");
                delete f["data-onload"];
                delete f.rd;
                for (var p in to)
                    f[p] && delete f[p];
                f.gsrc = _.ff("iframes/:source:");
                p = _.ff("inline/css");
                "undefined" !== typeof p && 0 < e && p >= e && (f.ic = "1");
                p = /^#|^fr-/;
                e = {};
                for (var t in f)
                    _.Pe(f, t) && p.test(t) && (e[t.replace(p, "")] = f[t],
                    delete f[t]);
                t = "q" == _.ff("iframes/" + a + "/params/si") ? f : e;
                p = _.lo();
                for (var v in p)
                    !_.Pe(p, v) || _.Pe(f, v) || _.Pe(e, v) || (t[v] = p[v]);
                v = [].concat(wo);
                t = _.ff("iframes/" + a + "/methods");
                _.ym(t) && (v = v.concat(t));
                for (r in c)
                    _.Pe(c, r) && /^on/.test(r) && ("plus" != a || "onconnect" != r) && (v.push(r),
                    delete f[r]);
                delete f.callback;
                e._methods = v.join(",");
                var r = _.Ll(n, f, e);
                v = h || {};
                v.allowPost = 1;
                v.attributes = vo;
                v.dontclear = !k;
                h = {};
                h.userParams = c;
                h.url = r;
                h.type = a;
                _.Co(a, b, c, r, v, h);
                b = h.id;
                c = _.Oe();
                c.id = b;
                c.userParams = h.userParams;
                c.url = h.url;
                c.type = h.type;
                c.state = 1;
                _.Un[b] = c;
                b = h
            } else
                b = null;
            b && ((c = b.id) && d.push(c),
            Oo(a, b))
        }
    }
      , Po = function(a, b, c) {
        if (a && 1 === a.nodeType && b) {
            if (c)
                return 1;
            if (Fo[b]) {
                if (fo[a.nodeName.toLowerCase()])
                    return (a = a.innerHTML) && a.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "") ? 0 : 1
            } else {
                if (Eo[b])
                    return 0;
                if (Do[b])
                    return 1
            }
        }
        return null
    };
    _.Ne(_.Re, "platform", {}).go = function(a, b) {
        No(a, b)
    }
    ;
    var Qo = _.Ne(_.Ye, "perf", _.Oe()), Ko = _.Ne(Qo, "g", _.Oe()), Ro = _.Ne(Qo, "i", _.Oe()), So, To, Uo, Lo, Wo, Xo, Yo;
    _.Ne(Qo, "r", []);
    So = _.Oe();
    To = _.Oe();
    Uo = function(a, b, c, d) {
        So[c] = So[c] || !!d;
        _.Ne(To, c, []);
        To[c].push([a, b])
    }
    ;
    Lo = function(a, b, c) {
        var d = Qo.r;
        "function" === typeof d ? d(a, b, c) : d.push([a, b, c])
    }
    ;
    Wo = function(a, b, c, d) {
        if ("_p" == b)
            throw Error("N");
        _.Vo(a, b, c, d)
    }
    ;
    _.Vo = function(a, b, c, d) {
        Xo(b, c)[a] = d || (new Date).getTime();
        Lo(a, b, c)
    }
    ;
    Xo = function(a, b) {
        a = _.Ne(Ro, a, _.Oe());
        return _.Ne(a, b, _.Oe())
    }
    ;
    Yo = function(a, b, c) {
        var d = null;
        b && c && (d = Xo(b, c)[a]);
        return d || Ko[a]
    }
    ;
    (function() {
        function a(h) {
            this.t = {};
            this.tick = function(k, l, m) {
                this.t[k] = [void 0 != m ? m : (new Date).getTime(), l];
                if (void 0 == m)
                    try {
                        window.console.timeStamp("CSI/" + k)
                    } catch (n) {}
            }
            ;
            this.getStartTickTime = function() {
                return this.t.start[0]
            }
            ;
            this.tick("start", null, h)
        }
        var b;
        if (window.performance)
            var c = (b = window.performance.timing) && b.responseStart;
        var d = 0 < c ? new a(c) : new a;
        window.__gapi_jstiming__ = {
            Timer: a,
            load: d
        };
        if (b) {
            var e = b.navigationStart;
            0 < e && c >= e && (window.__gapi_jstiming__.srt = c - e)
        }
        if (b) {
            var f = window.__gapi_jstiming__.load;
            0 < e && c >= e && (f.tick("_wtsrt", void 0, e),
            f.tick("wtsrt_", "_wtsrt", c),
            f.tick("tbsd_", "wtsrt_"))
        }
        try {
            b = null,
            window.chrome && window.chrome.csi && (b = Math.floor(window.chrome.csi().pageT),
            f && 0 < e && (f.tick("_tbnd", void 0, window.chrome.csi().startE),
            f.tick("tbnd_", "_tbnd", e))),
            null == b && window.gtbExternal && (b = window.gtbExternal.pageT()),
            null == b && window.external && (b = window.external.pageT,
            f && 0 < e && (f.tick("_tbnd", void 0, window.external.startE),
            f.tick("tbnd_", "_tbnd", e))),
            b && (window.__gapi_jstiming__.pt = b)
        } catch (h) {}
    }
    )();
    if (window.__gapi_jstiming__) {
        window.__gapi_jstiming__.VK = {};
        window.__gapi_jstiming__.T3 = 1;
        var Zo = function(a, b, c) {
            var d = a.t[b]
              , e = a.t.start;
            if (d && (e || c))
                return d = a.t[b][0],
                e = void 0 != c ? c : e[0],
                Math.round(d - e)
        }
          , $o = function(a, b, c) {
            var d = "";
            window.__gapi_jstiming__.srt && (d += "&srt=" + window.__gapi_jstiming__.srt,
            delete window.__gapi_jstiming__.srt);
            window.__gapi_jstiming__.pt && (d += "&tbsrt=" + window.__gapi_jstiming__.pt,
            delete window.__gapi_jstiming__.pt);
            try {
                window.external && window.external.tran ? d += "&tran=" + window.external.tran : window.gtbExternal && window.gtbExternal.tran ? d += "&tran=" + window.gtbExternal.tran() : window.chrome && window.chrome.csi && (d += "&tran=" + window.chrome.csi().tran)
            } catch (q) {}
            var e = window.chrome;
            if (e && (e = e.loadTimes)) {
                e().wasFetchedViaSpdy && (d += "&p=s");
                if (e().wasNpnNegotiated) {
                    d += "&npn=1";
                    var f = e().npnNegotiatedProtocol;
                    f && (d += "&npnv=" + (encodeURIComponent || escape)(f))
                }
                e().wasAlternateProtocolAvailable && (d += "&apa=1")
            }
            var h = a.t
              , k = h.start;
            e = [];
            f = [];
            for (var l in h)
                if ("start" != l && 0 != l.indexOf("_")) {
                    var m = h[l][1];
                    m ? h[m] && f.push(l + "." + Zo(a, l, h[m][0])) : k && e.push(l + "." + Zo(a, l))
                }
            delete h.start;
            if (b)
                for (var n in b)
                    d += "&" + n + "=" + b[n];
            (b = c) || (b = "https:" == document.location.protocol ? "https://csi.gstatic.com/csi" : "http://csi.gstatic.com/csi");
            return [b, "?v=3", "&s=" + (window.__gapi_jstiming__.sn || "gwidget") + "&action=", a.name, f.length ? "&it=" + f.join(",") : "", d, "&rt=", e.join(",")].join("")
        }
          , ap = function(a, b, c) {
            a = $o(a, b, c);
            if (!a)
                return "";
            b = new Image;
            var d = window.__gapi_jstiming__.T3++;
            window.__gapi_jstiming__.VK[d] = b;
            b.onload = b.onerror = function() {
                window.__gapi_jstiming__ && delete window.__gapi_jstiming__.VK[d]
            }
            ;
            b.src = a;
            b = null;
            return a
        };
        window.__gapi_jstiming__.report = function(a, b, c) {
            var d = document.visibilityState
              , e = "visibilitychange";
            d || (d = document.webkitVisibilityState,
            e = "webkitvisibilitychange");
            if ("prerender" == d) {
                var f = !1
                  , h = function() {
                    if (!f) {
                        b ? b.prerender = "1" : b = {
                            prerender: "1"
                        };
                        if ("prerender" == (document.visibilityState || document.webkitVisibilityState))
                            var k = !1;
                        else
                            ap(a, b, c),
                            k = !0;
                        k && (f = !0,
                        document.removeEventListener(e, h, !1))
                    }
                };
                document.addEventListener(e, h, !1);
                return ""
            }
            return ap(a, b, c)
        }
    }
    ;var bp = {
        g: "gapi_global",
        m: "gapi_module",
        w: "gwidget"
    }
      , cp = function(a, b) {
        this.type = a ? "_p" == a ? "m" : "w" : "g";
        this.name = a;
        this.Fq = b
    };
    cp.prototype.key = function() {
        switch (this.type) {
        case "g":
            return this.type;
        case "m":
            return this.type + "." + this.Fq;
        case "w":
            return this.type + "." + this.name + this.Fq
        }
    }
    ;
    var dp = new cp
      , ep = navigator.userAgent.match(/iPhone|iPad|Android|PalmWebOS|Maemo|Bada/)
      , fp = _.Ne(Qo, "_c", _.Oe())
      , gp = Math.random() < (_.ff("csi/rate") || 0)
      , ip = function(a, b, c) {
        for (var d = new cp(b,c), e = _.Ne(fp, d.key(), _.Oe()), f = To[a] || [], h = 0; h < f.length; ++h) {
            var k = f[h]
              , l = k[0]
              , m = a
              , n = b
              , q = c;
            k = Yo(k[1], n, q);
            m = Yo(m, n, q);
            e[l] = k && m ? m - k : null
        }
        So[a] && gp && (hp(dp),
        hp(d))
    }
      , jp = function(a, b) {
        b = b || [];
        for (var c = [], d = 0; d < b.length; d++)
            c.push(a + b[d]);
        return c
    }
      , hp = function(a) {
        var b = _.Je.__gapi_jstiming__;
        b.sn = bp[a.type];
        var c = new b.Timer(0);
        a: {
            switch (a.type) {
            case "g":
                var d = "global";
                break a;
            case "m":
                d = a.Fq;
                break a;
            case "w":
                d = a.name;
                break a
            }
            d = void 0
        }
        c.name = d;
        d = !1;
        var e = a.key()
          , f = fp[e];
        c.tick("_start", null, 0);
        for (var h in f)
            c.tick(h, "_start", f[h]),
            d = !0;
        fp[e] = _.Oe();
        d && (h = [],
        h.push("l" + (_.ff("isPlusUser") ? "1" : "0")),
        d = "m" + (ep ? "1" : "0"),
        h.push(d),
        "m" == a.type ? h.push("p" + a.Fq) : "w" == a.type && (e = "n" + a.Fq,
        h.push(e),
        "0" == a.Fq && h.push(d + e)),
        h.push("u" + (_.ff("isLoggedIn") ? "1" : "0")),
        a = jp("", h),
        a = jp("abc_", a).join(","),
        b.report(c, {
            e: a
        }))
    };
    Uo("blt", "bs0", "bs1");
    Uo("psi", "ps0", "ps1");
    Uo("rpcqi", "rqe", "rqd");
    Uo("bsprt", "bsrt0", "bsrt1");
    Uo("bsrqt", "bsrt1", "bsrt2");
    Uo("bsrst", "bsrt2", "bsrt3");
    Uo("mli", "ml0", "ml1");
    Uo("mei", "me0", "me1", !0);
    Uo("wcdi", "wrs", "wcdi");
    Uo("wci", "wrs", "wdc");
    Uo("wdi", "wrs", "wrdi");
    Uo("wdt", "bs0", "wrdt");
    Uo("wri", "wrs", "wrri", !0);
    Uo("wrt", "bs0", "wrrt");
    Uo("wji", "wje0", "wje1", !0);
    Uo("wjli", "wjl0", "wjl1");
    Uo("whi", "wh0", "wh1", !0);
    Uo("wai", "waaf0", "waaf1", !0);
    Uo("wadi", "wrs", "waaf1", !0);
    Uo("wadt", "bs0", "waaf1", !0);
    Uo("wprt", "wrt0", "wrt1");
    Uo("wrqt", "wrt1", "wrt2");
    Uo("wrst", "wrt2", "wrt3", !0);
    Uo("fbprt", "fsrt0", "fsrt1");
    Uo("fbrqt", "fsrt1", "fsrt2");
    Uo("fbrst", "fsrt2", "fsrt3", !0);
    Uo("fdns", "fdns0", "fdns1");
    Uo("fcon", "fcon0", "fcon1");
    Uo("freq", "freq0", "freq1");
    Uo("frsp", "frsp0", "frsp1");
    Uo("fttfb", "fttfb0", "fttfb1");
    Uo("ftot", "ftot0", "ftot1", !0);
    var kp = Qo.r;
    if ("function" !== typeof kp) {
        for (var lp; lp = kp.shift(); )
            ip.apply(null, lp);
        Qo.r = ip
    }
    ;var mp = ["div"], np = "onload", op = !0, pp = !0, qp = function(a) {
        return a
    }, rp = null, sp = function(a) {
        var b = _.ff(a);
        return "undefined" !== typeof b ? b : _.ff("gwidget/" + a)
    }, wp, xp, yp, Bp, Cp, Dp, Ep, Kp, Fp, Lp, Mp, Np, Op, Pp, Gp, Ip, Qp, Hp, Rp, Sp, Tp, Up, Vp, Wp;
    rp = _.ff();
    _.ff("gwidget");
    var tp = sp("parsetags");
    np = "explicit" === tp || "onload" === tp ? tp : np;
    var up = sp("google_analytics");
    "undefined" !== typeof up && (op = !!up);
    var vp = sp("data_layer");
    "undefined" !== typeof vp && (pp = !!vp);
    wp = function() {
        var a = this && this.getId();
        a && (_.Ye.drw = a)
    }
    ;
    xp = function() {
        _.Ye.drw = null
    }
    ;
    yp = function(a) {
        return function(b) {
            var c = a;
            "number" === typeof b ? c = b : "string" === typeof b && (c = b.indexOf("px"),
            -1 != c && (b = b.substring(0, c)),
            c = parseInt(b, 10));
            return c
        }
    }
    ;
    Bp = function(a) {
        "string" === typeof a && (a = window[a]);
        return "function" === typeof a ? a : null
    }
    ;
    Cp = function() {
        return sp("lang") || "en-US"
    }
    ;
    Dp = function(a) {
        if (!_.Ua.lb("attach")) {
            var b = {}, c = _.Ua.lb("inline"), d;
            for (d in c)
                c.hasOwnProperty(d) && (b[d] = c[d]);
            b.open = function(e) {
                var f = e.jc().renderData.id;
                f = document.getElementById(f);
                if (!f)
                    throw Error("O");
                return c.attach(e, f)
            }
            ;
            _.Ua.wc("attach", b)
        }
        a.style = "attach"
    }
    ;
    Ep = function() {
        var a = {};
        a.width = [yp(450)];
        a.height = [yp(24)];
        a.onready = [Bp];
        a.lang = [Cp, "hl"];
        a.iloader = [function() {
            return _.Ye.ILI
        }
        , "iloader"];
        return a
    }();
    Kp = function(a) {
        var b = {};
        b.ye = a[0];
        b.Vn = -1;
        b.cha = "___" + b.ye + "_";
        b.O6 = "g:" + b.ye;
        b.nfa = "g-" + b.ye;
        b.hR = [];
        b.config = {};
        b.Dv = [];
        b.qT = {};
        b.KA = {};
        var c = function(e) {
            for (var f in e)
                if (_.Pe(e, f)) {
                    b.config[f] = [Bp];
                    b.Dv.push(f);
                    var h = e[f]
                      , k = null
                      , l = null
                      , m = null;
                    "function" === typeof h ? k = h : h && "object" === typeof h && (k = h.bfa,
                    l = h.LA,
                    m = h.yJ);
                    m && (b.Dv.push(m),
                    b.config[m] = [Bp],
                    b.qT[f] = m);
                    k && (b.config[f] = [k]);
                    l && (b.KA[f] = l)
                }
        }
          , d = function(e) {
            for (var f = {}, h = 0; h < e.length; ++h)
                f[e[h].toLowerCase()] = 1;
            f[b.O6] = 1;
            b.Q1 = f
        };
        a[1] && (b.parameters = a[1]);
        (function(e) {
            b.config = e;
            for (var f in Ep)
                Ep.hasOwnProperty(f) && !b.config.hasOwnProperty(f) && (b.config[f] = Ep[f])
        }
        )(a[2] || {});
        a[3] && c(a[3]);
        a[4] && d(a[4]);
        a[5] && (b.Al = a[5]);
        b.Vga = !0 === a[6];
        b.r3 = a[7];
        b.B6 = a[8];
        b.Q1 || d(mp);
        b.NF = function(e) {
            b.Vn++;
            Wo("wrs", b.ye, String(b.Vn));
            var f = []
              , h = e.element
              , k = e.config
              , l = ":" + b.ye;
            ":plus" == l && e.xl && e.xl.action && (l += "_" + e.xl.action);
            var m = Fp(b, k)
              , n = {};
            _.Qe(_.lo(), n);
            for (var q in e.xl)
                null != e.xl[q] && (n[q] = e.xl[q]);
            q = {
                container: h.id,
                renderData: e.N3,
                style: "inline",
                height: k.height,
                width: k.width
            };
            Dp(q);
            b.Al && (f[2] = q,
            f[3] = n,
            f[4] = m,
            b.Al("i", f));
            l = _.Ua.open(l, q, n, m);
            e = e.xX;
            Gp(l, k);
            Hp(l, h);
            Ip(b, l, e);
            Jp(b.ye, b.Vn.toString(), l);
            f[5] = l;
            b.Al && b.Al("e", f)
        }
        ;
        return b
    }
    ;
    Fp = function(a, b) {
        for (var c = {}, d = a.Dv.length - 1; 0 <= d; --d) {
            var e = a.Dv[d]
              , f = b[a.qT[e] || e] || b[e]
              , h = b[e];
            h && f !== h && (f = function(l, m) {
                return function(n) {
                    m.apply(this, arguments);
                    l.apply(this, arguments)
                }
            }(f, h));
            f && (c[e] = f)
        }
        for (var k in a.KA)
            a.KA.hasOwnProperty(k) && (c[k] = Lp(c[k] || function() {}
            , a.KA[k]));
        c.drefresh = wp;
        c.erefresh = xp;
        return c
    }
    ;
    Lp = function(a, b) {
        return function(c) {
            var d = b(c);
            if (d) {
                var e = c.href || null;
                if (op) {
                    if (window._gat)
                        try {
                            var f = window._gat._getTrackerByName("~0");
                            f && "UA-XXXXX-X" != f._getAccount() ? f._trackSocial("Google", d, e) : window._gaq && window._gaq.push(["_trackSocial", "Google", d, e])
                        } catch (k) {}
                    if (window.ga && window.ga.getAll)
                        try {
                            var h = window.ga.getAll();
                            for (f = 0; f < h.length; f++)
                                h[f].send("social", "Google", d, e)
                        } catch (k) {}
                }
                if (pp && window.dataLayer)
                    try {
                        window.dataLayer.push({
                            event: "social",
                            socialNetwork: "Google",
                            socialAction: d,
                            socialTarget: e
                        })
                    } catch (k) {}
            }
            a.call(this, c)
        }
    }
    ;
    Mp = function(a) {
        return _.wn && a instanceof _.wn
    }
    ;
    Np = function(a) {
        return Mp(a) ? "_renderstart" : "renderstart"
    }
    ;
    Op = function(a) {
        return Mp(a) ? "_ready" : "ready"
    }
    ;
    Pp = function() {
        return !0
    }
    ;
    Gp = function(a, b) {
        if (b.onready) {
            var c = !1
              , d = function() {
                c || (c = !0,
                b.onready.call(null))
            };
            a.register(Op(a), d, Pp);
            a.register(Np(a), d, Pp)
        }
    }
    ;
    Ip = function(a, b, c) {
        var d = a.ye
          , e = String(a.Vn)
          , f = !1
          , h = function() {
            f || (f = !0,
            b.getIframeEl(),
            c && Wo("wrdt", d, e),
            Wo("wrdi", d, e))
        };
        b.register(Np(b), h, Pp);
        var k = !1;
        a = function() {
            k || (k = !0,
            h(),
            c && Wo("wrrt", d, e),
            Wo("wrri", d, e))
        }
        ;
        b.register(Op(b), a, Pp);
        Mp(b) ? b.register("widget-interactive-" + b.id, a, Pp) : _.eg.register("widget-interactive-" + b.id, a);
        _.eg.register("widget-csi-tick-" + b.id, function(l, m, n) {
            "wdc" === l ? Wo("wdc", d, e, n) : "wje0" === l ? Wo("wje0", d, e, n) : "wje1" === l ? Wo("wje1", d, e, n) : "wh0" == l ? _.Vo("wh0", d, e, n) : "wh1" == l ? _.Vo("wh1", d, e, n) : "wcdi" == l && _.Vo("wcdi", d, e, n)
        })
    }
    ;
    Qp = function(a) {
        return "number" == typeof a ? a + "px" : "100%" == a ? a : null
    }
    ;
    Hp = function(a, b) {
        var c = function(d) {
            d = d || a;
            var e = Qp(d.width);
            e && b.style.width != e && (b.style.width = e);
            (d = Qp(d.height)) && b.style.height != d && (b.style.height = d)
        };
        Mp(a) ? a.setParam("onRestyle", c) : (a.register("ready", c, Pp),
        a.register("renderstart", c, Pp),
        a.register("resize", c, Pp))
    }
    ;
    Rp = function(a, b) {
        for (var c in Ep)
            if (Ep.hasOwnProperty(c)) {
                var d = Ep[c][1];
                d && !b.hasOwnProperty(d) && (b[d] = a[d])
            }
        return b
    }
    ;
    Sp = function(a, b) {
        var c = {}, d;
        for (d in a)
            a.hasOwnProperty(d) && (c[a[d][1] || d] = (a[d] && a[d][0] || qp)(b[d.toLowerCase()], b, rp));
        return c
    }
    ;
    Tp = function(a) {
        if (a = a.r3)
            for (var b = 0; b < a.length; b++)
                (new Image).src = a[b]
    }
    ;
    Up = function(a, b) {
        var c = b.userParams
          , d = b.siteElement;
        d || (d = (d = b.iframeNode) && d.parentNode);
        if (d && 1 === d.nodeType) {
            var e = Sp(a.config, c);
            a.hR.push({
                element: d,
                config: e,
                xl: Rp(e, Sp(a.parameters, c)),
                cga: 3,
                xX: !!c["data-onload"],
                N3: b
            })
        }
        b = a.hR;
        for (a = a.NF; 0 < b.length; )
            a(b.shift())
    }
    ;
    Vp = function(a, b) {
        a.Vn++;
        Wo("wrs", a.ye, String(a.Vn));
        var c = b.userParams
          , d = Sp(a.config, c)
          , e = []
          , f = b.iframeNode
          , h = b.siteElement
          , k = Fp(a, d)
          , l = Sp(a.parameters, c);
        _.Qe(_.lo(), l);
        l = Rp(d, l);
        c = !!c["data-onload"];
        var m = _.Nm
          , n = _.Oe();
        n.renderData = b;
        n.height = d.height;
        n.width = d.width;
        n.id = b.id;
        n.url = b.url;
        n.iframeEl = f;
        n.where = n.container = h;
        n.apis = ["_open"];
        n.messageHandlers = k;
        n.messageHandlersFilter = _.Qm;
        _.ao(n);
        f = l;
        a.Al && (e[2] = n,
        e[3] = f,
        e[4] = k,
        a.Al("i", e));
        k = m.attach(n);
        k.id = b.id;
        k.UH(k, n);
        Gp(k, d);
        Hp(k, h);
        Ip(a, k, c);
        Jp(a.ye, a.Vn.toString(), k);
        e[5] = k;
        a.Al && a.Al("e", e)
    }
    ;
    Wp = function(a, b) {
        var c = b.url;
        a.B6 || _.Mi(c) ? Vp(a, b) : _.Ua.open ? Up(a, b) : (0,
        _.Kg)("iframes", function() {
            Up(a, b)
        })
    }
    ;
    _.Xp = function(a) {
        var b = Kp(a);
        Tp(b);
        _.cg(b.ye, function(d) {
            Wp(b, d)
        });
        Do[b.ye] = !0;
        var c = {
            ua: function(d, e, f) {
                var h = e || {};
                h.type = b.ye;
                e = h.type;
                delete h.type;
                var k = Jo(d);
                if (k) {
                    d = {};
                    for (var l in h)
                        _.Pe(h, l) && (d[l.toLowerCase()] = h[l]);
                    d.rd = 1;
                    (l = !!d.ri) && delete d.ri;
                    Mo(e, k, d, [], 0, l, f)
                } else
                    _.$f.log("string" === "gapi." + e + ".render: missing element " + typeof d ? d : "")
            },
            go: function(d) {
                No(d, b.ye)
            },
            ega: function() {
                var d = _.Ne(_.Ye, "WI", _.Oe()), e;
                for (e in d)
                    delete d[e]
            }
        };
        a = function() {
            "onload" === np && c.go()
        }
        ;
        if (!go(b.ye)) {
            if (!_.ag())
                try {
                    a()
                } catch (d) {}
            _.bg(a)
        }
        _.E("gapi." + b.ye + ".go", c.go);
        _.E("gapi." + b.ye + ".render", c.ua);
        return c
    }
    ;
    var Yp = function() {
        var a = window;
        return !!a.performance && !!a.performance.getEntries
    }
      , Jp = function(a, b, c) {
        if (Yp()) {
            var d = function() {
                var f = !1;
                return function() {
                    if (f)
                        return !0;
                    f = !0;
                    return !1
                }
            }()
              , e = function() {
                d() || window.setTimeout(function() {
                    var f = c.getIframeEl().src;
                    var h = f.indexOf("#");
                    -1 != h && (f = f.substring(0, h));
                    f = window.performance.getEntriesByName(f);
                    1 > f.length ? f = null : (f = f[0],
                    f = 0 == f.responseStart ? null : f);
                    if (f) {
                        h = Math.round(f.requestStart);
                        var k = Math.round(f.responseStart)
                          , l = Math.round(f.responseEnd);
                        Wo("wrt0", a, b, Math.round(f.startTime));
                        Wo("wrt1", a, b, h);
                        Wo("wrt2", a, b, k);
                        Wo("wrt3", a, b, l)
                    }
                }, 1E3)
            };
            c.register(Np(c), e, Pp);
            c.register(Op(c), e, Pp)
        }
    };
    _.E("gapi.widget.make", _.Xp);
    _.jf = _.jf || {};
    _.jf.bt = function(a, b, c) {
        for (var d = [], e = 2, f = arguments.length; e < f; ++e)
            d.push(arguments[e]);
        return function() {
            for (var h = d.slice(), k = 0, l = arguments.length; k < l; ++k)
                h.push(arguments[k]);
            return b.apply(a, h)
        }
    }
    ;
    _.jf.zy = function(a) {
        var b, c, d = {};
        for (b = 0; c = a[b]; ++b)
            d[c] = c;
        return d
    }
    ;
    _.jf = _.jf || {};
    _.jf.BW = function(a) {
        var b = window;
        "undefined" != typeof b.addEventListener ? b.addEventListener("mousemove", a, !1) : "undefined" != typeof b.attachEvent ? b.attachEvent("onmousemove", a) : _.lf("cannot attachBrowserEvent: mousemove")
    }
    ;
    _.jf.J3 = function(a) {
        var b = window;
        b.removeEventListener ? b.removeEventListener("mousemove", a, !1) : b.detachEvent ? b.detachEvent("onmousemove", a) : _.lf("cannot removeBrowserEvent: mousemove")
    }
    ;
    _.jf = _.jf || {};
    (function() {
        function a(c, d) {
            return String.fromCharCode(d)
        }
        var b = {
            0: !1,
            10: !0,
            13: !0,
            34: !0,
            39: !0,
            60: !0,
            62: !0,
            92: !0,
            8232: !0,
            8233: !0,
            65282: !0,
            65287: !0,
            65308: !0,
            65310: !0,
            65340: !0
        };
        _.jf.escape = function(c, d) {
            if (c) {
                if ("string" === typeof c)
                    return _.jf.IC(c);
                if ("Array" === typeof c) {
                    var e = 0;
                    for (d = c.length; e < d; ++e)
                        c[e] = _.jf.escape(c[e])
                } else if ("object" === typeof c && d) {
                    d = {};
                    for (e in c)
                        c.hasOwnProperty(e) && (d[_.jf.IC(e)] = _.jf.escape(c[e], !0));
                    return d
                }
            }
            return c
        }
        ;
        _.jf.IC = function(c) {
            if (!c)
                return c;
            for (var d = [], e, f, h = 0, k = c.length; h < k; ++h)
                e = c.charCodeAt(h),
                f = b[e],
                !0 === f ? d.push("&#", e, ";") : !1 !== f && d.push(c.charAt(h));
            return d.join("")
        }
        ;
        _.jf.Wga = function(c) {
            return c ? c.replace(/&#([0-9]+);/g, a) : c
        }
    }
    )();
    _.Tg = function() {
        function a(m) {
            var n = new _.Sg;
            n.Hu(m);
            return n.bi()
        }
        var b = window.crypto;
        if (b && "function" == typeof b.getRandomValues)
            return function() {
                var m = new window.Uint32Array(1);
                b.getRandomValues(m);
                return Number("0." + m[0])
            }
            ;
        var c = _.ff("random/maxObserveMousemove");
        null == c && (c = -1);
        var d = 0
          , e = Math.random()
          , f = 1
          , h = 1E6 * (screen.width * screen.width + screen.height)
          , k = function(m) {
            m = m || window.event;
            var n = m.screenX + m.clientX << 16;
            n += m.screenY + m.clientY;
            n *= (new Date).getTime() % 1E6;
            f = f * n % h;
            0 < c && ++d == c && _.jf.J3(k)
        };
        0 != c && _.jf.BW(k);
        var l = a(document.cookie + "|" + document.location + "|" + (new Date).getTime() + "|" + e);
        return function() {
            var m = f;
            m += parseInt(l.substr(0, 20), 16);
            l = a(l);
            return m / (h + Math.pow(16, 20))
        }
    }();
    _.E("shindig.random", _.Tg);
    _.Ua.Ja = {};
    _.Ua.Ja.Vh = {};
    _.Ua.Ja.Vh.TW = function(a) {
        try {
            return !!a.document
        } catch (b) {}
        return !1
    }
    ;
    _.Ua.Ja.Vh.NN = function(a) {
        var b = a.parent;
        return a != b && _.Ua.Ja.Vh.TW(b) ? _.Ua.Ja.Vh.NN(b) : a
    }
    ;
    _.Ua.Ja.Vh.cfa = function(a) {
        var b = a.userAgent || "";
        a = a.product || "";
        return 0 != b.indexOf("Opera") && -1 == b.indexOf("WebKit") && "Gecko" == a && 0 < b.indexOf("rv:1.")
    }
    ;
    _.Ua.Ja.Vh.bt = function(a, b, c) {
        for (var d = [], e = 2, f = arguments.length; e < f; ++e)
            d.push(arguments[e]);
        return function() {
            for (var h = d.slice(), k = 0, l = arguments.length; k < l; ++k)
                h.push(arguments[k]);
            return b.apply(a, h)
        }
    }
    ;
    var eq, fq, gq, hq, kq, lq, mq, nq, oq, pq, qq;
    eq = function() {
        _.eg.register("_noop_echo", function() {
            this.callback(_.Ua.xZ(_.Ua.Xk[this.f]))
        })
    }
    ;
    fq = function() {
        window.setTimeout(function() {
            _.eg.call("..", "_noop_echo", _.Ua.d3)
        }, 0)
    }
    ;
    gq = function(a, b, c) {
        var d = function(e) {
            var f = Array.prototype.slice.call(arguments, 0)
              , h = f[f.length - 1];
            if ("function" === typeof h) {
                var k = h;
                f.pop()
            }
            f.unshift(b, a, k, c);
            _.eg.call.apply(_.eg, f)
        };
        d._iframe_wrapped_rpc_ = !0;
        return d
    }
    ;
    hq = function(a) {
        _.Ua.Mi[a] || (_.Ua.Mi[a] = {},
        _.eg.register(a, function(b, c) {
            var d = this.f;
            if (!("string" != typeof b || b in {} || d in {})) {
                var e = this.callback, f = _.Ua.Mi[a][d], h;
                f && Object.hasOwnProperty.call(f, b) ? h = f[b] : Object.hasOwnProperty.call(_.Ua.ep, a) && (h = _.Ua.ep[a]);
                if (h)
                    return d = Array.prototype.slice.call(arguments, 1),
                    h._iframe_wrapped_rpc_ && e && d.push(e),
                    h.apply({}, d)
            }
            _.$f.error(['Unregistered call in window "', window.name, '" for method "', a, '", via proxyId "', b, '" from frame "', d, '".'].join(""));
            return null
        }));
        return _.Ua.Mi[a]
    }
    ;
    _.iq = function() {
        var a = {};
        var b = window.location.href;
        var c = b.indexOf("?")
          , d = b.indexOf("#");
        b = (-1 === d ? b.substr(c + 1) : [b.substr(c + 1, d - c - 1), "&", b.substr(d + 1)].join("")).split("&");
        c = window.decodeURIComponent ? decodeURIComponent : unescape;
        d = 0;
        for (var e = b.length; d < e; ++d) {
            var f = b[d].indexOf("=");
            if (-1 !== f) {
                var h = b[d].substring(0, f);
                f = b[d].substring(f + 1);
                f = f.replace(/\+/g, " ");
                try {
                    a[h] = c(f)
                } catch (k) {}
            }
        }
        return a
    }
    ;
    _.jq = function() {
        return _.Je.location.origin || _.Je.location.protocol + "//" + _.Je.location.host
    }
    ;
    kq = function(a) {
        _.Ye.h = a
    }
    ;
    lq = function(a) {
        _.Ye.bsh = a
    }
    ;
    mq = function(a) {
        var b = window.___jsl = window.___jsl || {};
        b[a] = b[a] || [];
        return b[a]
    }
    ;
    nq = function(a) {
        return "object" === typeof a && /\[native code\]/.test(a.push)
    }
    ;
    oq = function(a, b, c) {
        if (b && "object" === typeof b)
            for (var d in b)
                !Object.prototype.hasOwnProperty.call(b, d) || c && "___goc" === d && "undefined" === typeof b[d] || (a[d] && b[d] && "object" === typeof a[d] && "object" === typeof b[d] && !nq(a[d]) && !nq(b[d]) ? oq(a[d], b[d]) : b[d] && "object" === typeof b[d] ? (a[d] = nq(b[d]) ? [] : {},
                oq(a[d], b[d])) : a[d] = b[d])
    }
    ;
    pq = function(a) {
        if (a && !/^\s+$/.test(a)) {
            for (; 0 == a.charCodeAt(a.length - 1); )
                a = a.substring(0, a.length - 1);
            try {
                var b = window.JSON.parse(a)
            } catch (c) {}
            if ("object" === typeof b)
                return b;
            try {
                b = (new Function("return (" + a + "\n)"))()
            } catch (c) {}
            if ("object" === typeof b)
                return b;
            try {
                b = (new Function("return ({" + a + "\n})"))()
            } catch (c) {}
            return "object" === typeof b ? b : {}
        }
    }
    ;
    qq = function(a, b) {
        var c = {
            ___goc: void 0
        };
        a.length && a[a.length - 1] && Object.hasOwnProperty.call(a[a.length - 1], "___goc") && "undefined" === typeof a[a.length - 1].___goc && (c = a.pop());
        oq(c, b);
        a.push(c)
    }
    ;
    _.rq = function(a, b) {
        var c;
        if ("string" === typeof a) {
            var d = c = {};
            a = a.split("/");
            for (var e = 0, f = a.length; e < f - 1; ++e) {
                var h = {};
                d = d[a[e]] = h
            }
            d[a[e]] = b
        } else
            c = a;
        _.ai(!0);
        d = window.___gcfg;
        b = mq("cu");
        a = window.___gu;
        d && d !== a && (qq(b, d),
        window.___gu = d);
        d = mq("cu");
        e = document.scripts || document.getElementsByTagName("script") || [];
        a = [];
        f = [];
        f.push.apply(f, mq("us"));
        for (h = 0; h < e.length; ++h)
            for (var k = e[h], l = 0; l < f.length; ++l)
                k.src && 0 == k.src.indexOf(f[l]) && a.push(k);
        0 == a.length && 0 < e.length && e[e.length - 1].src && a.push(e[e.length - 1]);
        for (e = 0; e < a.length; ++e)
            a[e].getAttribute("gapi_processed") || (a[e].setAttribute("gapi_processed", !0),
            (f = a[e]) ? (h = f.nodeType,
            f = 3 == h || 4 == h ? f.nodeValue : f.textContent || "") : f = void 0,
            (f = pq(f)) && d.push(f));
        c && qq(b, c);
        a = mq("cd");
        c = 0;
        for (d = a.length; c < d; ++c)
            oq(_.ai(), a[c], !0);
        a = mq("ci");
        c = 0;
        for (d = a.length; c < d; ++c)
            oq(_.ai(), a[c], !0);
        c = 0;
        for (d = b.length; c < d; ++c)
            oq(_.ai(), b[c], !0)
    }
    ;
    var sq, tq = window.location.href, uq = tq.indexOf("?"), vq = tq.indexOf("#");
    sq = (-1 === vq ? tq.substr(uq + 1) : [tq.substr(uq + 1, vq - uq - 1), "&", tq.substr(vq + 1)].join("")).split("&");
    for (var wq = window.decodeURIComponent ? decodeURIComponent : unescape, xq = 0, yq = sq.length; xq < yq; ++xq) {
        var zq = sq[xq].indexOf("=");
        if (-1 !== zq) {
            var Aq = sq[xq].substring(zq + 1);
            Aq = Aq.replace(/\+/g, " ");
            try {
                wq(Aq)
            } catch (a) {}
        }
    }
    ;if (window.ToolbarApi)
        Bq = window.ToolbarApi,
        Bq.Pa = window.ToolbarApi.getInstance,
        Bq.prototype = window.ToolbarApi.prototype,
        _.g = Bq.prototype,
        _.g.openWindow = Bq.prototype.openWindow,
        _.g.tL = Bq.prototype.closeWindow,
        _.g.eS = Bq.prototype.setOnCloseHandler,
        _.g.fL = Bq.prototype.canClosePopup,
        _.g.oR = Bq.prototype.resizeWindow;
    else {
        var Bq = function() {};
        Bq.Pa = function() {
            !Cq && window.external && window.external.GTB_IsToolbar && (Cq = new Bq);
            return Cq
        }
        ;
        _.g = Bq.prototype;
        _.g.openWindow = function(a) {
            return window.external.GTB_OpenPopup && window.external.GTB_OpenPopup(a)
        }
        ;
        _.g.tL = function(a) {
            window.external.GTB_ClosePopupWindow && window.external.GTB_ClosePopupWindow(a)
        }
        ;
        _.g.eS = function(a, b) {
            window.external.GTB_SetOnCloseHandler && window.external.GTB_SetOnCloseHandler(a, b)
        }
        ;
        _.g.fL = function(a) {
            return window.external.GTB_CanClosePopup && window.external.GTB_CanClosePopup(a)
        }
        ;
        _.g.oR = function(a, b) {
            return window.external.GTB_ResizeWindow && window.external.GTB_ResizeWindow(a, b)
        }
        ;
        var Cq = null;
        window.ToolbarApi = Bq;
        window.ToolbarApi.getInstance = Bq.Pa
    }
    ;var Dq = /^[-_.0-9A-Za-z]+$/, Eq = {
        open: "open",
        onready: "ready",
        close: "close",
        onresize: "resize",
        onOpen: "open",
        onReady: "ready",
        onClose: "close",
        onResize: "resize",
        onRenderStart: "renderstart"
    }, Fq = {
        onBeforeParentOpen: "beforeparentopen"
    }, Gq = {
        onOpen: function(a) {
            var b = a.jc();
            a.Gg(b.container || b.element);
            return a
        },
        onClose: function(a) {
            a.remove()
        }
    }, Hq = function() {
        _.Ua.GO++;
        return ["I", _.Ua.GO, "_", (new Date).getTime()].join("")
    }, Iq, Jq, Kq, Nq, Oq, Pq, Qq, Sq, Rq;
    _.Ua.Bm = function(a) {
        var b = _.Oe();
        _.Qe(_.Wl, b);
        _.Qe(a, b);
        return b
    }
    ;
    Iq = function(a) {
        return a instanceof Array ? a.join(",") : a instanceof Object ? _.Wf(a) : a
    }
    ;
    Jq = function(a) {
        var b = _.bi("googleapis.config/elog");
        if (b)
            try {
                b(a)
            } catch (c) {}
    }
    ;
    Kq = function(a) {
        a && a.match(Dq) && _.rq("googleapis.config/gcv", a)
    }
    ;
    _.Lq = function(a, b) {
        b = b || {};
        for (var c in a)
            a.hasOwnProperty(c) && (b[c] = a[c]);
        return b
    }
    ;
    _.Mq = function(a, b, c, d, e) {
        var f = [], h;
        for (h in a)
            if (a.hasOwnProperty(h)) {
                var k = b
                  , l = c
                  , m = a[h]
                  , n = d
                  , q = hq(h);
                q[k] = q[k] || {};
                n = _.Ua.Ja.Vh.bt(n, m);
                m._iframe_wrapped_rpc_ && (n._iframe_wrapped_rpc_ = !0);
                q[k][l] = n;
                f.push(h)
            }
        if (e)
            for (var p in _.Ua.ep)
                _.Ua.ep.hasOwnProperty(p) && f.push(p);
        return f.join(",")
    }
    ;
    Nq = function(a, b, c) {
        var d = {};
        if (a && a._methods) {
            a = a._methods.split(",");
            for (var e = 0; e < a.length; e++) {
                var f = a[e];
                d[f] = gq(f, b, c)
            }
        }
        return d
    }
    ;
    Oq = function(a) {
        if (a && a.disableMultiLevelParentRelay)
            a = !1;
        else {
            var b;
            if (b = _.co && _.co._open && "inline" != a.style && !0 !== a.inline)
                a = a.container,
                b = !(a && ("string" == typeof a && document.getElementById(a) || document == (a.ownerDocument || a.document)));
            a = b
        }
        return a
    }
    ;
    Pq = function(a, b) {
        var c = {};
        b = b.params || {};
        for (var d in a)
            "#" == d.charAt(0) && (c[d.substring(1)] = a[d]),
            0 == d.indexOf("fr-") && (c[d.substring(3)] = a[d]),
            "#" == b[d] && (c[d] = a[d]);
        for (var e in c)
            delete a["fr-" + e],
            delete a["#" + e],
            delete a[e];
        return c
    }
    ;
    Qq = function(a) {
        if (":" == a.charAt(0)) {
            var b = _.bi("iframes/" + a.substring(1));
            a = {};
            _.Qe(b, a);
            (b = a.url) && (a.url = _.hm(b));
            a.params || (a.params = {});
            return a
        }
        return {
            url: _.hm(a)
        }
    }
    ;
    Sq = function(a) {
        function b() {}
        b.prototype = Rq.prototype;
        a.prototype = new b
    }
    ;
    Rq = function(a, b, c, d, e, f, h, k) {
        this.config = Qq(a);
        this.openParams = this.Ty = b || {};
        this.params = c || {};
        this.methods = d;
        this.CA = !1;
        Tq(this, b.style);
        this.callbacks = {};
        Uq(this, function() {
            var l;
            (l = this.Ty.style) && _.Ua.mu[l] ? l = _.Ua.mu[l] : l ? (_.$f.warn(['Missing handler for style "', l, '". Continuing with default handler.'].join("")),
            l = null) : l = Gq;
            if (l) {
                if ("function" === typeof l)
                    var m = l(this);
                else {
                    var n = {};
                    for (m in l) {
                        var q = l[m];
                        n[m] = "function" === typeof q ? _.Ua.Ja.Vh.bt(l, q, this) : q
                    }
                    m = n
                }
                for (var p in e)
                    l = m[p],
                    "function" === typeof l && Vq(this, e[p], _.Ua.Ja.Vh.bt(m, l))
            }
            f && Vq(this, "close", f)
        });
        this.Kj = this.ac = h;
        this.SF = (k || []).slice();
        h && this.SF.unshift(h.getId())
    }
    ;
    Rq.prototype.jc = function() {
        return this.Ty
    }
    ;
    Rq.prototype.DD = function() {
        return this.params
    }
    ;
    Rq.prototype.Vw = function() {
        return this.methods
    }
    ;
    Rq.prototype.Mc = function() {
        return this.Kj
    }
    ;
    var Tq = function(a, b) {
        a.CA || ((b = b && !_.Ua.mu[b] && _.Ua.uC[b]) ? (a.tC = [],
        b(function() {
            a.CA = !0;
            for (var c = a.tC.length, d = 0; d < c; ++d)
                a.tC[d].call(a)
        })) : a.CA = !0)
    }
      , Uq = function(a, b) {
        a.CA ? b.call(a) : a.tC.push(b)
    };
    Rq.prototype.Dd = function(a, b) {
        Uq(this, function() {
            Vq(this, a, b)
        })
    }
    ;
    var Vq = function(a, b, c) {
        a.callbacks[b] = a.callbacks[b] || [];
        a.callbacks[b].push(c)
    };
    Rq.prototype.xn = function(a, b) {
        Uq(this, function() {
            var c = this.callbacks[a];
            if (c)
                for (var d = c.length, e = 0; e < d; ++e)
                    if (c[e] === b) {
                        c.splice(e, 1);
                        break
                    }
        })
    }
    ;
    Rq.prototype.xh = function(a, b) {
        var c = this.callbacks[a];
        if (c)
            for (var d = Array.prototype.slice.call(arguments, 1), e = c.length, f = 0; f < e; ++f)
                try {
                    var h = c[f].apply({}, d)
                } catch (k) {
                    _.$f.error(['Exception when calling callback "', a, '" with exception "', k.name, ": ", k.message, '".'].join("")),
                    Jq(k)
                }
        return h
    }
    ;
    var Wq = function(a) {
        return "number" == typeof a ? {
            value: a,
            bD: a + "px"
        } : "100%" == a ? {
            value: 100,
            bD: "100%",
            kP: !0
        } : null
    };
    Rq.prototype.send = function(a, b, c) {
        _.Ua.DR(this, a, b, c)
    }
    ;
    Rq.prototype.register = function(a, b) {
        var c = this;
        c.Dd(a, function(d) {
            b.call(c, d)
        })
    }
    ;
    var Xq = function(a, b, c, d, e, f, h) {
        var k = this;
        Rq.call(this, a, b, c, d, Eq, e, f, h);
        this.id = b.id || Hq();
        this.Ht = b.rpctoken && String(b.rpctoken) || Math.round(1E9 * _.Bi());
        this.n0 = Pq(this.params, this.config);
        this.PC = {};
        Uq(this, function() {
            k.xh("open");
            _.Lq(k.PC, k)
        })
    };
    Sq(Xq);
    _.g = Xq.prototype;
    _.g.Gg = function(a, b) {
        if (!this.config.url)
            return _.$f.error("Cannot open iframe, empty URL."),
            this;
        var c = this.id;
        _.Ua.Xk[c] = this;
        var d = _.Lq(this.methods);
        d._ready = this.Sy;
        d._close = this.close;
        d._open = this.AQ;
        d._resizeMe = this.pR;
        d._renderstart = this.sQ;
        var e = this.n0;
        this.Ht && (e.rpctoken = this.Ht);
        e._methods = _.Mq(d, c, "", this, !0);
        this.el = a = "string" === typeof a ? document.getElementById(a) : a;
        d = {
            id: c
        };
        if (b) {
            d.attributes = b;
            var f = b.style;
            if ("string" === typeof f) {
                if (f) {
                    var h = [];
                    f = f.split(";");
                    for (var k = f.length, l = 0; l < k; ++l) {
                        var m = f[l];
                        if (0 != m.length || l + 1 != k)
                            m = m.split(":"),
                            2 == m.length && m[0].match(/^[ a-zA-Z_-]+$/) && m[1].match(/^[ +.%0-9a-zA-Z_-]+$/) ? h.push(m.join(":")) : _.$f.error(['Iframe style "', f[l], '" not allowed.'].join(""))
                    }
                    h = h.join(";")
                } else
                    h = "";
                b.style = h
            }
        }
        this.jc().allowPost && (d.allowPost = !0);
        this.jc().forcePost && (d.forcePost = !0);
        d.queryParams = this.params;
        d.fragmentParams = e;
        d.paramsSerializer = Iq;
        this.zh = _.jm(this.config.url, a, d);
        a = this.zh.getAttribute("data-postorigin") || this.zh.src;
        _.Ua.Xk[c] = this;
        _.eg.Zz(this.id, this.Ht);
        _.eg.Ui(this.id, a);
        return this
    }
    ;
    _.g.ih = function(a, b) {
        this.PC[a] = b
    }
    ;
    _.g.getId = function() {
        return this.id
    }
    ;
    _.g.getIframeEl = function() {
        return this.zh
    }
    ;
    _.g.getSiteEl = function() {
        return this.el
    }
    ;
    _.g.setSiteEl = function(a) {
        this.el = a
    }
    ;
    _.g.Sy = function(a) {
        var b = Nq(a, this.id, "");
        this.Kj && "function" == typeof this.methods._ready && (a._methods = _.Mq(b, this.Kj.getId(), this.id, this, !1),
        this.methods._ready(a));
        _.Lq(a, this);
        _.Lq(b, this);
        this.xh("ready", a)
    }
    ;
    _.g.sQ = function(a) {
        this.xh("renderstart", a)
    }
    ;
    _.g.close = function(a) {
        a = this.xh("close", a);
        delete _.Ua.Xk[this.id];
        return a
    }
    ;
    _.g.remove = function() {
        var a = document.getElementById(this.id);
        a && a.parentNode && a.parentNode.removeChild(a)
    }
    ;
    _.g.AQ = function(a) {
        var b = Nq(a.params, this.id, a.proxyId);
        delete a.params._methods;
        "_parent" == a.openParams.anchor && (a.openParams.anchor = this.el);
        if (Oq(a.openParams))
            new Yq(a.url,a.openParams,a.params,b,b._onclose,this,a.openedByProxyChain);
        else {
            var c = new Xq(a.url,a.openParams,a.params,b,b._onclose,this,a.openedByProxyChain)
              , d = this;
            Uq(c, function() {
                var e = {
                    childId: c.getId()
                }
                  , f = c.PC;
                f._toclose = c.close;
                e._methods = _.Mq(f, d.id, c.id, c, !1);
                b._onopen(e)
            })
        }
    }
    ;
    _.g.pR = function(a) {
        if (void 0 === this.xh("resize", a) && this.zh) {
            var b = Wq(a.width);
            null != b && (this.zh.style.width = b.bD);
            a = Wq(a.height);
            null != a && (this.zh.style.height = a.bD);
            this.zh.parentElement && (null != b && b.kP || null != a && a.kP) && (this.zh.parentElement.style.display = "block")
        }
    }
    ;
    var Yq = function(a, b, c, d, e, f, h) {
        var k = this;
        Rq.call(this, a, b, c, d, Fq, e, f, h);
        this.url = a;
        this.On = null;
        this.mG = Hq();
        Uq(this, function() {
            k.xh("beforeparentopen");
            var l = _.Lq(k.methods);
            l._onopen = k.U2;
            l._ready = k.Sy;
            l._onclose = k.S2;
            k.params._methods = _.Mq(l, "..", k.mG, k, !0);
            l = {};
            for (var m in k.params)
                l[m] = Iq(k.params[m]);
            _.co._open({
                url: k.config.url,
                openParams: k.Ty,
                params: l,
                proxyId: k.mG,
                openedByProxyChain: k.SF
            })
        })
    };
    Sq(Yq);
    Yq.prototype.IZ = function() {
        return this.On
    }
    ;
    Yq.prototype.U2 = function(a) {
        this.On = a.childId;
        var b = Nq(a, "..", this.On);
        _.Lq(b, this);
        this.close = b._toclose;
        _.Ua.Xk[this.On] = this;
        this.Kj && this.methods._onopen && (a._methods = _.Mq(b, this.Kj.getId(), this.On, this, !1),
        this.methods._onopen(a))
    }
    ;
    Yq.prototype.Sy = function(a) {
        var b = String(this.On)
          , c = Nq(a, "..", b);
        _.Lq(a, this);
        _.Lq(c, this);
        this.xh("ready", a);
        this.Kj && this.methods._ready && (a._methods = _.Mq(c, this.Kj.getId(), b, this, !1),
        this.methods._ready(a))
    }
    ;
    Yq.prototype.S2 = function(a) {
        if (this.Kj && this.methods._onclose)
            this.methods._onclose(a);
        else
            return a = this.xh("close", a),
            delete _.Ua.Xk[this.On],
            a
    }
    ;
    var Zq = function(a, b, c, d, e, f, h) {
        Rq.call(this, a, b, c, d, Fq, f, h);
        this.id = b.id || Hq();
        this.p6 = e;
        d._close = this.close;
        this.onClosed = this.lQ;
        this.BT = 0;
        Uq(this, function() {
            this.xh("beforeparentopen");
            var k = _.Lq(this.methods);
            this.params._methods = _.Mq(k, "..", this.mG, this, !0);
            k = {};
            k.queryParams = this.params;
            a = _.am(_.Ke, this.config.url, this.id, k);
            var l = e.openWindow(a);
            this.canAutoClose = function(m) {
                m(e.fL(l))
            }
            ;
            e.eS(l, this);
            this.BT = l
        })
    };
    Sq(Zq);
    Zq.prototype.close = function(a) {
        a = this.xh("close", a);
        this.p6.tL(this.BT);
        return a
    }
    ;
    Zq.prototype.lQ = function() {
        this.xh("close")
    }
    ;
    _.co.send = function(a, b, c) {
        _.Ua.DR(_.co, a, b, c)
    }
    ;
    (function() {
        function a(h) {
            return _.Ua.mu[h]
        }
        function b(h, k) {
            _.Ua.mu[h] = k
        }
        function c(h) {
            h = h || {};
            "auto" === h.height && (h.height = _.xl());
            var k = window && Bq && Bq.Pa();
            k ? k.oR(h.width || 0, h.height || 0) : _.co && _.co._resizeMe && _.co._resizeMe(h)
        }
        function d(h) {
            Kq(h)
        }
        _.Ua.Xk = {};
        _.Ua.mu = {};
        _.Ua.uC = {};
        _.Ua.GO = 0;
        _.Ua.Mi = {};
        _.Ua.ep = {};
        _.Ua.ez = null;
        _.Ua.dz = [];
        _.Ua.d3 = function(h) {
            var k = !1;
            try {
                if (null != h) {
                    var l = window.parent.frames[h.id];
                    k = l.iframer.id == h.id && l.iframes.openedId_(_.co.id)
                }
            } catch (m) {}
            try {
                _.Ua.ez = {
                    origin: this.origin,
                    referer: this.referer,
                    claimedOpenerId: h && h.id,
                    claimedOpenerProxyChain: h && h.proxyChain || [],
                    sameOrigin: k
                };
                for (h = 0; h < _.Ua.dz.length; ++h)
                    _.Ua.dz[h](_.Ua.ez);
                _.Ua.dz = []
            } catch (m) {
                Jq(m)
            }
        }
        ;
        _.Ua.xZ = function(h) {
            var k = h && h.Kj
              , l = null;
            k && (l = {},
            l.id = k.getId(),
            l.proxyChain = h.SF);
            return l
        }
        ;
        eq();
        if (window.parent != window) {
            var e = _.iq();
            e.gcv && Kq(e.gcv);
            var f = e.jsh;
            f && kq(f);
            _.Lq(Nq(e, "..", ""), _.co);
            _.Lq(e, _.co);
            fq()
        }
        _.Ua.lb = a;
        _.Ua.wc = b;
        _.Ua.l5 = d;
        _.Ua.resize = c;
        _.Ua.RY = function(h) {
            return _.Ua.uC[h]
        }
        ;
        _.Ua.gH = function(h, k) {
            _.Ua.uC[h] = k
        }
        ;
        _.Ua.nR = c;
        _.Ua.G5 = d;
        _.Ua.Bx = {};
        _.Ua.Bx.get = a;
        _.Ua.Bx.set = b;
        _.Ua.allow = function(h, k) {
            hq(h);
            _.Ua.ep[h] = k || window[h]
        }
        ;
        _.Ua.cea = function(h) {
            delete _.Ua.ep[h]
        }
        ;
        _.Ua.open = function(h, k, l, m, n, q) {
            3 == arguments.length ? m = {} : 4 == arguments.length && "function" === typeof m && (n = m,
            m = {});
            var p = "bubble" === k.style && Bq ? Bq.Pa() : null;
            return p ? new Zq(h,k,l,m,p,n,q) : Oq(k) ? new Yq(h,k,l,m,n,q) : new Xq(h,k,l,m,n,q)
        }
        ;
        _.Ua.close = function(h, k) {
            _.co && _.co._close && _.co._close(h, k)
        }
        ;
        _.Ua.ready = function(h, k, l) {
            2 == arguments.length && "function" === typeof k && (l = k,
            k = {});
            var m = h || {};
            "height"in m || (m.height = _.xl());
            m._methods = _.Mq(k || {}, "..", "", _.co, !0);
            _.co && _.co._ready && _.co._ready(m, l)
        }
        ;
        _.Ua.zN = function(h) {
            _.Ua.ez ? h(_.Ua.ez) : _.Ua.dz.push(h)
        }
        ;
        _.Ua.W2 = function(h) {
            return !!_.Ua.Xk[h]
        }
        ;
        _.Ua.cZ = function() {
            return ["https://ssl.gstatic.com/gb/js/", _.bi("googleapis.config/gcv")].join("")
        }
        ;
        _.Ua.TQ = function(h) {
            var k = {
                mouseover: 1,
                mouseout: 1
            };
            if (_.co._event)
                for (var l = 0; l < h.length; l++) {
                    var m = h[l];
                    m in k && document.addEventListener(m, function(n) {
                        _.co._event({
                            event: n.type,
                            timestamp: (new Date).getTime()
                        })
                    }, !0)
                }
        }
        ;
        _.Ua.DR = function(h, k, l, m) {
            var n = this
              , q = [];
            void 0 !== l && q.push(l);
            m && q.push(function(p) {
                m.call(n, [p])
            });
            h[k] && h[k].apply(h, q)
        }
        ;
        _.Ua.CROSS_ORIGIN_IFRAMES_FILTER = function() {
            return !0
        }
        ;
        _.Ua.SW = function(h, k, l) {
            var m = Array.prototype.slice.call(arguments);
            _.Ua.zN(function(n) {
                n.sameOrigin && (m.unshift("/" + n.claimedOpenerId + "|" + window.location.protocol + "//" + window.location.host),
                _.eg.call.apply(_.eg, m))
            })
        }
        ;
        _.Ua.E3 = function(h, k) {
            _.eg.register(h, k)
        }
        ;
        _.Ua.r5 = kq;
        _.Ua.HR = lq;
        _.Ua.GP = Jq;
        _.Ua.HO = _.co
    }
    )();
    _.E("iframes.allow", _.Ua.allow);
    _.E("iframes.callSiblingOpener", _.Ua.SW);
    _.E("iframes.registerForOpenedSibling", _.Ua.E3);
    _.E("iframes.close", _.Ua.close);
    _.E("iframes.getGoogleConnectJsUri", _.Ua.cZ);
    _.E("iframes.getHandler", _.Ua.lb);
    _.E("iframes.getDeferredHandler", _.Ua.RY);
    _.E("iframes.getParentInfo", _.Ua.zN);
    _.E("iframes.iframer", _.Ua.HO);
    _.E("iframes.open", _.Ua.open);
    _.E("iframes.openedId_", _.Ua.W2);
    _.E("iframes.propagate", _.Ua.TQ);
    _.E("iframes.ready", _.Ua.ready);
    _.E("iframes.resize", _.Ua.resize);
    _.E("iframes.setGoogleConnectJsVersion", _.Ua.l5);
    _.E("iframes.setBootstrapHint", _.Ua.HR);
    _.E("iframes.setJsHint", _.Ua.r5);
    _.E("iframes.setHandler", _.Ua.wc);
    _.E("iframes.setDeferredHandler", _.Ua.gH);
    _.E("IframeBase", Rq);
    _.E("IframeBase.prototype.addCallback", Rq.prototype.Dd);
    _.E("IframeBase.prototype.getMethods", Rq.prototype.Vw);
    _.E("IframeBase.prototype.getOpenerIframe", Rq.prototype.Mc);
    _.E("IframeBase.prototype.getOpenParams", Rq.prototype.jc);
    _.E("IframeBase.prototype.getParams", Rq.prototype.DD);
    _.E("IframeBase.prototype.removeCallback", Rq.prototype.xn);
    _.E("Iframe", Xq);
    _.E("Iframe.prototype.close", Xq.prototype.close);
    _.E("Iframe.prototype.exposeMethod", Xq.prototype.ih);
    _.E("Iframe.prototype.getId", Xq.prototype.getId);
    _.E("Iframe.prototype.getIframeEl", Xq.prototype.getIframeEl);
    _.E("Iframe.prototype.getSiteEl", Xq.prototype.getSiteEl);
    _.E("Iframe.prototype.openInto", Xq.prototype.Gg);
    _.E("Iframe.prototype.remove", Xq.prototype.remove);
    _.E("Iframe.prototype.setSiteEl", Xq.prototype.setSiteEl);
    _.E("Iframe.prototype.addCallback", Xq.prototype.Dd);
    _.E("Iframe.prototype.getMethods", Xq.prototype.Vw);
    _.E("Iframe.prototype.getOpenerIframe", Xq.prototype.Mc);
    _.E("Iframe.prototype.getOpenParams", Xq.prototype.jc);
    _.E("Iframe.prototype.getParams", Xq.prototype.DD);
    _.E("Iframe.prototype.removeCallback", Xq.prototype.xn);
    _.E("IframeProxy", Yq);
    _.E("IframeProxy.prototype.getTargetIframeId", Yq.prototype.IZ);
    _.E("IframeProxy.prototype.addCallback", Yq.prototype.Dd);
    _.E("IframeProxy.prototype.getMethods", Yq.prototype.Vw);
    _.E("IframeProxy.prototype.getOpenerIframe", Yq.prototype.Mc);
    _.E("IframeProxy.prototype.getOpenParams", Yq.prototype.jc);
    _.E("IframeProxy.prototype.getParams", Yq.prototype.DD);
    _.E("IframeProxy.prototype.removeCallback", Yq.prototype.xn);
    _.E("IframeWindow", Zq);
    _.E("IframeWindow.prototype.close", Zq.prototype.close);
    _.E("IframeWindow.prototype.onClosed", Zq.prototype.lQ);
    _.E("iframes.util.getTopMostAccessibleWindow", _.Ua.Ja.Vh.NN);
    _.E("iframes.handlers.get", _.Ua.Bx.get);
    _.E("iframes.handlers.set", _.Ua.Bx.set);
    _.E("iframes.resizeMe", _.Ua.nR);
    _.E("iframes.setVersionOverride", _.Ua.G5);
    _.E("iframes.CROSS_ORIGIN_IFRAMES_FILTER", _.Ua.CROSS_ORIGIN_IFRAMES_FILTER);
    _.E("IframeBase.prototype.send", Rq.prototype.send);
    _.E("IframeBase.prototype.register", Rq.prototype.register);
    _.E("Iframe.prototype.send", Xq.prototype.send);
    _.E("Iframe.prototype.register", Xq.prototype.register);
    _.E("IframeProxy.prototype.send", Yq.prototype.send);
    _.E("IframeProxy.prototype.register", Yq.prototype.register);
    _.E("IframeWindow.prototype.send", Zq.prototype.send);
    _.E("IframeWindow.prototype.register", Zq.prototype.register);
    _.E("iframes.iframer.send", _.Ua.HO.send);
    var Nt = _.Ua.wc
      , Ot = {
        open: function(a) {
            var b = _.Xn(a.jc());
            return a.Gg(b, {
                style: _.Yn(b)
            })
        },
        attach: function(a, b) {
            var c = _.Xn(a.jc())
              , d = b.id
              , e = b.getAttribute("data-postorigin") || b.src
              , f = /#(?:.*&)?rpctoken=(\d+)/.exec(e);
            f = f && f[1];
            a.id = d;
            a.Ht = f;
            a.el = c;
            a.zh = b;
            _.Ua.Xk[d] = a;
            b = _.Lq(a.methods);
            b._ready = a.Sy;
            b._close = a.close;
            b._open = a.AQ;
            b._resizeMe = a.pR;
            b._renderstart = a.sQ;
            _.Mq(b, d, "", a, !0);
            _.eg.Zz(a.id, a.Ht);
            _.eg.Ui(a.id, e);
            c = _.Ua.Bm({
                style: _.Yn(c)
            });
            for (var h in c)
                Object.prototype.hasOwnProperty.call(c, h) && ("style" == h ? a.zh.style.cssText = c[h] : a.zh.setAttribute(h, c[h]))
        }
    };
    Ot.onready = _.Zn;
    Ot.onRenderStart = _.Zn;
    Ot.close = _.$n;
    Nt("inline", Ot);
    _.Ch = function(a, b) {
        for (var c = 1; c < arguments.length; c++) {
            var d = arguments[c];
            if (_.Ub(d)) {
                var e = a.length || 0
                  , f = d.length || 0;
                a.length = e + f;
                for (var h = 0; h < f; h++)
                    a[e + h] = d[h]
            } else
                a.push(d)
        }
    }
    ;
    _.Dh = function(a, b) {
        b = b || a;
        for (var c = 0, d = 0, e = {}; d < a.length; ) {
            var f = a[d++]
              , h = _.Rb(f) ? "o" + _.Xb(f) : (typeof f).charAt(0) + f;
            Object.prototype.hasOwnProperty.call(e, h) || (e[h] = !0,
            b[c++] = f)
        }
        b.length = c
    }
    ;
    _.Eh = function(a, b) {
        a.src = _.uc(b);
        var c, d;
        (c = (b = null == (d = (c = (a.ownerDocument && a.ownerDocument.defaultView || window).document).querySelector) ? void 0 : d.call(c, "script[nonce]")) ? b.nonce || b.getAttribute("nonce") || "" : "") && a.setAttribute("nonce", c)
    }
    ;
    _.Fh = function(a) {
        for (var b = [], c = 0, d = 0; d < a.length; d++) {
            var e = a.charCodeAt(d);
            255 < e && (b[c++] = e & 255,
            e >>= 8);
            b[c++] = e
        }
        return b
    }
    ;
    var Gh, Hh, Jh;
    Gh = {};
    Hh = null;
    _.Ih = _.Kd || _.Ld || !_.Bh && !_.Gd && "function" == typeof _.u.atob;
    _.Kh = function(a, b) {
        void 0 === b && (b = 0);
        Jh();
        b = Gh[b];
        for (var c = Array(Math.floor(a.length / 3)), d = b[64] || "", e = 0, f = 0; e < a.length - 2; e += 3) {
            var h = a[e]
              , k = a[e + 1]
              , l = a[e + 2]
              , m = b[h >> 2];
            h = b[(h & 3) << 4 | k >> 4];
            k = b[(k & 15) << 2 | l >> 6];
            l = b[l & 63];
            c[f++] = m + h + k + l
        }
        m = 0;
        l = d;
        switch (a.length - e) {
        case 2:
            m = a[e + 1],
            l = b[(m & 15) << 2] || d;
        case 1:
            a = a[e],
            c[f] = b[a >> 2] + b[(a & 3) << 4 | m >> 4] + l + d
        }
        return c.join("")
    }
    ;
    _.Lh = function(a, b) {
        function c(l) {
            for (; d < a.length; ) {
                var m = a.charAt(d++)
                  , n = Hh[m];
                if (null != n)
                    return n;
                if (!_.zc(m))
                    throw Error("C`" + m);
            }
            return l
        }
        Jh();
        for (var d = 0; ; ) {
            var e = c(-1)
              , f = c(0)
              , h = c(64)
              , k = c(64);
            if (64 === k && -1 === e)
                break;
            b(e << 2 | f >> 4);
            64 != h && (b(f << 4 & 240 | h >> 2),
            64 != k && b(h << 6 & 192 | k))
        }
    }
    ;
    Jh = function() {
        if (!Hh) {
            Hh = {};
            for (var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), b = ["+/=", "+/", "-_=", "-_.", "-_"], c = 0; 5 > c; c++) {
                var d = a.concat(b[c].split(""));
                Gh[c] = d;
                for (var e = 0; e < d.length; e++) {
                    var f = d[e];
                    void 0 === Hh[f] && (Hh[f] = e)
                }
            }
        }
    }
    ;
    _.ei = {};
    var gi;
    _.fi = function(a) {
        this.qb = a || {
            cookie: ""
        }
    }
    ;
    _.g = _.fi.prototype;
    _.g.isEnabled = function() {
        if (!_.u.navigator.cookieEnabled)
            return !1;
        if (!this.isEmpty())
            return !0;
        this.set("TESTCOOKIESENABLED", "1", {
            mF: 60
        });
        if ("1" !== this.get("TESTCOOKIESENABLED"))
            return !1;
        this.remove("TESTCOOKIESENABLED");
        return !0
    }
    ;
    _.g.set = function(a, b, c) {
        var d = !1;
        if ("object" === typeof c) {
            var e = c.jga;
            d = c.secure || !1;
            var f = c.domain || void 0;
            var h = c.path || void 0;
            var k = c.mF
        }
        if (/[;=\s]/.test(a))
            throw Error("F`" + a);
        if (/[;\r\n]/.test(b))
            throw Error("G`" + b);
        void 0 === k && (k = -1);
        this.qb.cookie = a + "=" + b + (f ? ";domain=" + f : "") + (h ? ";path=" + h : "") + (0 > k ? "" : 0 == k ? ";expires=" + (new Date(1970,1,1)).toUTCString() : ";expires=" + (new Date(Date.now() + 1E3 * k)).toUTCString()) + (d ? ";secure" : "") + (null != e ? ";samesite=" + e : "")
    }
    ;
    _.g.get = function(a, b) {
        for (var c = a + "=", d = (this.qb.cookie || "").split(";"), e = 0, f; e < d.length; e++) {
            f = (0,
            _.Ac)(d[e]);
            if (0 == f.lastIndexOf(c, 0))
                return f.slice(c.length);
            if (f == a)
                return ""
        }
        return b
    }
    ;
    _.g.remove = function(a, b, c) {
        var d = this.Yh(a);
        this.set(a, "", {
            mF: 0,
            path: b,
            domain: c
        });
        return d
    }
    ;
    _.g.Sf = function() {
        return gi(this).keys
    }
    ;
    _.g.Uc = function() {
        return gi(this).values
    }
    ;
    _.g.isEmpty = function() {
        return !this.qb.cookie
    }
    ;
    _.g.Fb = function() {
        return this.qb.cookie ? (this.qb.cookie || "").split(";").length : 0
    }
    ;
    _.g.Yh = function(a) {
        return void 0 !== this.get(a)
    }
    ;
    _.g.oj = function(a) {
        for (var b = gi(this).values, c = 0; c < b.length; c++)
            if (b[c] == a)
                return !0;
        return !1
    }
    ;
    _.g.clear = function() {
        for (var a = gi(this).keys, b = a.length - 1; 0 <= b; b--)
            this.remove(a[b])
    }
    ;
    gi = function(a) {
        a = (a.qb.cookie || "").split(";");
        for (var b = [], c = [], d, e, f = 0; f < a.length; f++)
            e = (0,
            _.Ac)(a[f]),
            d = e.indexOf("="),
            -1 == d ? (b.push(""),
            c.push(e)) : (b.push(e.substring(0, d)),
            c.push(e.substring(d + 1)));
        return {
            keys: b,
            values: c
        }
    }
    ;
    _.hi = new _.fi("undefined" == typeof document ? null : document);
    _.si = {};
    _.ti = function(a) {
        return _.si[a || "token"] || null
    }
    ;
    var Wi, Yi;
    _.Vi = function(a, b) {
        b = (0,
        _.gb)(a, b);
        var c;
        (c = 0 <= b) && Array.prototype.splice.call(a, b, 1);
        return c
    }
    ;
    Wi = function(a, b) {
        for (var c in a)
            if (b.call(void 0, a[c], c, a))
                return !0;
        return !1
    }
    ;
    _.Xi = function(a) {
        for (var b in a)
            return !1;
        return !0
    }
    ;
    _.Zi = function(a, b) {
        for (var c, d, e = 1; e < arguments.length; e++) {
            d = arguments[e];
            for (c in d)
                a[c] = d[c];
            for (var f = 0; f < Yi.length; f++)
                c = Yi[f],
                Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
        }
    }
    ;
    _.$i = function(a) {
        a && "function" == typeof a.Ga && a.Ga()
    }
    ;
    _.aj = function(a) {
        if (!(a instanceof Array)) {
            a = _.sa(a);
            for (var b, c = []; !(b = a.next()).done; )
                c.push(b.value);
            a = c
        }
        return a
    }
    ;
    Yi = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
    _.bj = function(a, b) {
        var c = a.length - b.length;
        return 0 <= c && a.indexOf(b, c) == c
    }
    ;
    _.cj = function(a, b, c) {
        return Object.prototype.hasOwnProperty.call(a, b) ? a[b] : a[b] = c(b)
    }
    ;
    _.dj = function() {
        this.qg = this.qg;
        this.jn = this.jn
    }
    ;
    _.dj.prototype.qg = !1;
    _.dj.prototype.isDisposed = function() {
        return this.qg
    }
    ;
    _.dj.prototype.Ga = function() {
        this.qg || (this.qg = !0,
        this.qa())
    }
    ;
    _.fj = function(a, b) {
        _.ej(a, _.Pi(_.$i, b))
    }
    ;
    _.ej = function(a, b) {
        a.qg ? b() : (a.jn || (a.jn = []),
        a.jn.push(b))
    }
    ;
    _.dj.prototype.qa = function() {
        if (this.jn)
            for (; this.jn.length; )
                this.jn.shift()()
    }
    ;
    _.gj = function(a, b) {
        this.type = a;
        this.currentTarget = this.target = b;
        this.defaultPrevented = this.At = !1
    }
    ;
    _.gj.prototype.stopPropagation = function() {
        this.At = !0
    }
    ;
    _.gj.prototype.preventDefault = function() {
        this.defaultPrevented = !0
    }
    ;
    var hj = function() {
        if (!_.u.addEventListener || !Object.defineProperty)
            return !1;
        var a = !1
          , b = Object.defineProperty({}, "passive", {
            get: function() {
                a = !0
            }
        });
        try {
            _.u.addEventListener("test", function() {}, b),
            _.u.removeEventListener("test", function() {}, b)
        } catch (c) {}
        return a
    }();
    _.ij = function(a, b) {
        _.gj.call(this, a ? a.type : "");
        this.relatedTarget = this.currentTarget = this.target = null;
        this.button = this.screenY = this.screenX = this.clientY = this.clientX = this.offsetY = this.offsetX = 0;
        this.key = "";
        this.charCode = this.keyCode = 0;
        this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1;
        this.state = null;
        this.cG = !1;
        this.pointerId = 0;
        this.pointerType = "";
        this.Ee = null;
        a && this.xd(a, b)
    }
    ;
    _.ab(_.ij, _.gj);
    var jj = {
        2: "touch",
        3: "pen",
        4: "mouse"
    };
    _.ij.prototype.xd = function(a, b) {
        var c = this.type = a.type
          , d = a.changedTouches && a.changedTouches.length ? a.changedTouches[0] : null;
        this.target = a.target || a.srcElement;
        this.currentTarget = b;
        (b = a.relatedTarget) ? _.Kd && (_.Ed(b, "nodeName") || (b = null)) : "mouseover" == c ? b = a.fromElement : "mouseout" == c && (b = a.toElement);
        this.relatedTarget = b;
        d ? (this.clientX = void 0 !== d.clientX ? d.clientX : d.pageX,
        this.clientY = void 0 !== d.clientY ? d.clientY : d.pageY,
        this.screenX = d.screenX || 0,
        this.screenY = d.screenY || 0) : (this.offsetX = _.Ld || void 0 !== a.offsetX ? a.offsetX : a.layerX,
        this.offsetY = _.Ld || void 0 !== a.offsetY ? a.offsetY : a.layerY,
        this.clientX = void 0 !== a.clientX ? a.clientX : a.pageX,
        this.clientY = void 0 !== a.clientY ? a.clientY : a.pageY,
        this.screenX = a.screenX || 0,
        this.screenY = a.screenY || 0);
        this.button = a.button;
        this.keyCode = a.keyCode || 0;
        this.key = a.key || "";
        this.charCode = a.charCode || ("keypress" == c ? a.keyCode : 0);
        this.ctrlKey = a.ctrlKey;
        this.altKey = a.altKey;
        this.shiftKey = a.shiftKey;
        this.metaKey = a.metaKey;
        this.cG = _.Nd ? a.metaKey : a.ctrlKey;
        this.pointerId = a.pointerId || 0;
        this.pointerType = "string" === typeof a.pointerType ? a.pointerType : jj[a.pointerType] || "";
        this.state = a.state;
        this.Ee = a;
        a.defaultPrevented && _.ij.H.preventDefault.call(this)
    }
    ;
    _.ij.prototype.stopPropagation = function() {
        _.ij.H.stopPropagation.call(this);
        this.Ee.stopPropagation ? this.Ee.stopPropagation() : this.Ee.cancelBubble = !0
    }
    ;
    _.ij.prototype.preventDefault = function() {
        _.ij.H.preventDefault.call(this);
        var a = this.Ee;
        a.preventDefault ? a.preventDefault() : a.returnValue = !1
    }
    ;
    _.kj = "closure_listenable_" + (1E6 * Math.random() | 0);
    _.lj = function(a) {
        return !(!a || !a[_.kj])
    }
    ;
    var mj = 0;
    var nj = function(a, b, c, d, e) {
        this.listener = a;
        this.proxy = null;
        this.src = b;
        this.type = c;
        this.capture = !!d;
        this.nf = e;
        this.key = ++mj;
        this.Dt = this.Bv = !1
    }
      , oj = function(a) {
        a.Dt = !0;
        a.listener = null;
        a.proxy = null;
        a.src = null;
        a.nf = null
    };
    var pj = function(a) {
        this.src = a;
        this.Pd = {};
        this.Du = 0
    };
    pj.prototype.add = function(a, b, c, d, e) {
        var f = a.toString();
        a = this.Pd[f];
        a || (a = this.Pd[f] = [],
        this.Du++);
        var h = qj(a, b, d, e);
        -1 < h ? (b = a[h],
        c || (b.Bv = !1)) : (b = new nj(b,this.src,f,!!d,e),
        b.Bv = c,
        a.push(b));
        return b
    }
    ;
    pj.prototype.remove = function(a, b, c, d) {
        a = a.toString();
        if (!(a in this.Pd))
            return !1;
        var e = this.Pd[a];
        b = qj(e, b, c, d);
        return -1 < b ? (oj(e[b]),
        Array.prototype.splice.call(e, b, 1),
        0 == e.length && (delete this.Pd[a],
        this.Du--),
        !0) : !1
    }
    ;
    var rj = function(a, b) {
        var c = b.type;
        if (!(c in a.Pd))
            return !1;
        var d = _.Vi(a.Pd[c], b);
        d && (oj(b),
        0 == a.Pd[c].length && (delete a.Pd[c],
        a.Du--));
        return d
    };
    pj.prototype.removeAll = function(a) {
        a = a && a.toString();
        var b = 0, c;
        for (c in this.Pd)
            if (!a || c == a) {
                for (var d = this.Pd[c], e = 0; e < d.length; e++)
                    ++b,
                    oj(d[e]);
                delete this.Pd[c];
                this.Du--
            }
        return b
    }
    ;
    pj.prototype.So = function(a, b, c, d) {
        a = this.Pd[a.toString()];
        var e = -1;
        a && (e = qj(a, b, c, d));
        return -1 < e ? a[e] : null
    }
    ;
    pj.prototype.hasListener = function(a, b) {
        var c = void 0 !== a
          , d = c ? a.toString() : ""
          , e = void 0 !== b;
        return Wi(this.Pd, function(f) {
            for (var h = 0; h < f.length; ++h)
                if (!(c && f[h].type != d || e && f[h].capture != b))
                    return !0;
            return !1
        })
    }
    ;
    var qj = function(a, b, c, d) {
        for (var e = 0; e < a.length; ++e) {
            var f = a[e];
            if (!f.Dt && f.listener == b && f.capture == !!c && f.nf == d)
                return e
        }
        return -1
    };
    var sj, tj, uj, yj, Aj, Bj, Cj, Fj;
    sj = "closure_lm_" + (1E6 * Math.random() | 0);
    tj = {};
    uj = 0;
    _.wj = function(a, b, c, d, e) {
        if (d && d.once)
            return _.vj(a, b, c, d, e);
        if (Array.isArray(b)) {
            for (var f = 0; f < b.length; f++)
                _.wj(a, b[f], c, d, e);
            return null
        }
        c = _.xj(c);
        return _.lj(a) ? a.V(b, c, _.Rb(d) ? !!d.capture : !!d, e) : yj(a, b, c, !1, d, e)
    }
    ;
    yj = function(a, b, c, d, e, f) {
        if (!b)
            throw Error("H");
        var h = _.Rb(e) ? !!e.capture : !!e
          , k = _.zj(a);
        k || (a[sj] = k = new pj(a));
        c = k.add(b, c, d, h, f);
        if (c.proxy)
            return c;
        d = Aj();
        c.proxy = d;
        d.src = a;
        d.listener = c;
        if (a.addEventListener)
            hj || (e = h),
            void 0 === e && (e = !1),
            a.addEventListener(b.toString(), d, e);
        else if (a.attachEvent)
            a.attachEvent(Bj(b.toString()), d);
        else if (a.addListener && a.removeListener)
            a.addListener(d);
        else
            throw Error("I");
        uj++;
        return c
    }
    ;
    Aj = function() {
        var a = Cj
          , b = function(c) {
            return a.call(b.src, b.listener, c)
        };
        return b
    }
    ;
    _.vj = function(a, b, c, d, e) {
        if (Array.isArray(b)) {
            for (var f = 0; f < b.length; f++)
                _.vj(a, b[f], c, d, e);
            return null
        }
        c = _.xj(c);
        return _.lj(a) ? a.Cp(b, c, _.Rb(d) ? !!d.capture : !!d, e) : yj(a, b, c, !0, d, e)
    }
    ;
    _.Dj = function(a, b, c, d, e) {
        if (Array.isArray(b))
            for (var f = 0; f < b.length; f++)
                _.Dj(a, b[f], c, d, e);
        else
            d = _.Rb(d) ? !!d.capture : !!d,
            c = _.xj(c),
            _.lj(a) ? a.lc(b, c, d, e) : a && (a = _.zj(a)) && (b = a.So(b, c, d, e)) && _.Ej(b)
    }
    ;
    _.Ej = function(a) {
        if ("number" === typeof a || !a || a.Dt)
            return !1;
        var b = a.src;
        if (_.lj(b))
            return b.kJ(a);
        var c = a.type
          , d = a.proxy;
        b.removeEventListener ? b.removeEventListener(c, d, a.capture) : b.detachEvent ? b.detachEvent(Bj(c), d) : b.addListener && b.removeListener && b.removeListener(d);
        uj--;
        (c = _.zj(b)) ? (rj(c, a),
        0 == c.Du && (c.src = null,
        b[sj] = null)) : oj(a);
        return !0
    }
    ;
    Bj = function(a) {
        return a in tj ? tj[a] : tj[a] = "on" + a
    }
    ;
    Cj = function(a, b) {
        if (a.Dt)
            a = !0;
        else {
            b = new _.ij(b,this);
            var c = a.listener
              , d = a.nf || a.src;
            a.Bv && _.Ej(a);
            a = c.call(d, b)
        }
        return a
    }
    ;
    _.zj = function(a) {
        a = a[sj];
        return a instanceof pj ? a : null
    }
    ;
    Fj = "__closure_events_fn_" + (1E9 * Math.random() >>> 0);
    _.xj = function(a) {
        if ("function" === typeof a)
            return a;
        a[Fj] || (a[Fj] = function(b) {
            return a.handleEvent(b)
        }
        );
        return a[Fj]
    }
    ;
    _.Ui(function(a) {
        Cj = a(Cj)
    });
    _.Gj = function() {
        _.dj.call(this);
        this.yj = new pj(this);
        this.oW = this;
        this.XF = null
    }
    ;
    _.ab(_.Gj, _.dj);
    _.Gj.prototype[_.kj] = !0;
    _.g = _.Gj.prototype;
    _.g.Em = function() {
        return this.XF
    }
    ;
    _.g.lA = _.ea(3);
    _.g.addEventListener = function(a, b, c, d) {
        _.wj(this, a, b, c, d)
    }
    ;
    _.g.removeEventListener = function(a, b, c, d) {
        _.Dj(this, a, b, c, d)
    }
    ;
    _.g.dispatchEvent = function(a) {
        var b, c = this.Em();
        if (c)
            for (b = []; c; c = c.Em())
                b.push(c);
        c = this.oW;
        var d = a.type || a;
        if ("string" === typeof a)
            a = new _.gj(a,c);
        else if (a instanceof _.gj)
            a.target = a.target || c;
        else {
            var e = a;
            a = new _.gj(d,c);
            _.Zi(a, e)
        }
        e = !0;
        if (b)
            for (var f = b.length - 1; !a.At && 0 <= f; f--) {
                var h = a.currentTarget = b[f];
                e = h.Or(d, !0, a) && e
            }
        a.At || (h = a.currentTarget = c,
        e = h.Or(d, !0, a) && e,
        a.At || (e = h.Or(d, !1, a) && e));
        if (b)
            for (f = 0; !a.At && f < b.length; f++)
                h = a.currentTarget = b[f],
                e = h.Or(d, !1, a) && e;
        return e
    }
    ;
    _.g.qa = function() {
        _.Gj.H.qa.call(this);
        this.rG();
        this.XF = null
    }
    ;
    _.g.V = function(a, b, c, d) {
        return this.yj.add(String(a), b, !1, c, d)
    }
    ;
    _.g.Cp = function(a, b, c, d) {
        return this.yj.add(String(a), b, !0, c, d)
    }
    ;
    _.g.lc = function(a, b, c, d) {
        return this.yj.remove(String(a), b, c, d)
    }
    ;
    _.g.kJ = function(a) {
        return rj(this.yj, a)
    }
    ;
    _.g.rG = function() {
        this.yj && this.yj.removeAll(void 0)
    }
    ;
    _.g.Or = function(a, b, c) {
        a = this.yj.Pd[String(a)];
        if (!a)
            return !0;
        a = a.concat();
        for (var d = !0, e = 0; e < a.length; ++e) {
            var f = a[e];
            if (f && !f.Dt && f.capture == b) {
                var h = f.listener
                  , k = f.nf || f.src;
                f.Bv && this.kJ(f);
                d = !1 !== h.call(k, c) && d
            }
        }
        return d && !c.defaultPrevented
    }
    ;
    _.g.So = function(a, b, c, d) {
        return this.yj.So(String(a), b, c, d)
    }
    ;
    _.g.hasListener = function(a, b) {
        return this.yj.hasListener(void 0 !== a ? String(a) : void 0, b)
    }
    ;
    var Ks, Ls, Ms, Ns, Rs, Ss, Us, Ys, Zs, $s, at, bt, ct, Ts, Vs, Ws;
    Ks = function(a) {
        var b = document.createElement("template");
        if (!("content"in b)) {
            b = _.ld("<html><body>" + a);
            b = (new DOMParser).parseFromString(_.Db(b), "text/html");
            for (a = b.createDocumentFragment(); 0 < b.body.childNodes.length; )
                a.appendChild(b.body.firstChild);
            return a
        }
        a = _.ld(a);
        _.Eb(b, a);
        return b.content
    }
    ;
    Ls = function(a) {
        a = a.nodeName;
        return "string" === typeof a ? a : "FORM"
    }
    ;
    Ms = function(a) {
        a = a.nodeType;
        return a === Node.ELEMENT_NODE || "number" !== typeof a
    }
    ;
    Ns = function(a, b, c) {
        return 2 >= arguments.length ? Array.prototype.slice.call(a, b) : Array.prototype.slice.call(a, b, c)
    }
    ;
    _.Os = function(a, b, c, d) {
        return Array.prototype.splice.apply(a, Ns(arguments, 1))
    }
    ;
    _.Ps = function(a, b, c) {
        if (null !== a && b in a)
            throw Error("k`" + b);
        a[b] = c
    }
    ;
    _.Qs = function(a) {
        var b = void 0 === b ? {} : b;
        a = a.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;");
        b.Rfa && (a = a.replace(/(^|[\r\n\t ]) /g, "$1&#160;"));
        b.Qfa && (a = a.replace(/(\r\n|\n|\r)/g, "<br>"));
        b.Sfa && (a = a.replace(/(\t+)/g, '<span style="white-space:pre">$1</span>'));
        return _.ld(a)
    }
    ;
    Rs = function(a, b) {
        var c = new XMLHttpRequest;
        c.open("POST", a);
        c.setRequestHeader("Content-Type", "application/json");
        c.send(b)
    }
    ;
    Ss = function(a, b) {
        ("undefined" !== typeof window && window.navigator && void 0 !== window.navigator.sendBeacon ? navigator.sendBeacon.bind(navigator) : Rs)("https://csp.withgoogle.com/csp/lcreport/" + a.yz, JSON.stringify({
            host: window.location.hostname,
            type: b,
            additionalData: void 0
        }))
    }
    ;
    Us = function(a, b) {
        try {
            Ts(_.Bd, a)
        } catch (c) {
            return Ss(b, "H_SLSANITIZE"),
            !0
        }
        try {
            Ts(_.Ad, a)
        } catch (c) {
            return Ss(b, "H_RSANITIZE"),
            !0
        }
        try {
            Ts(_.zd, a)
        } catch (c) {
            return Ss(b, "H_SANITIZE"),
            !0
        }
        return !1
    }
    ;
    _.Xs = function(a, b) {
        a = _.Qb(a);
        var c;
        if (c = b) {
            var d, e;
            c = Math.random() < (null != (e = null != (d = b.kga) ? d : Vs[b.yz[0]]) ? e : 0)
        }
        if (c && "DocumentFragment"in window) {
            var f, h;
            Math.random() < (null != (h = null != (f = b.ifa) ? f : Ws[b.yz[0]]) ? h : 0) && Ss(b, "HEARTBEAT");
            Us(a, b) || _.Qs(a).toString() !== a && Ss(b, "H_ESCAPE")
        }
        return _.ld(a)
    }
    ;
    _.ne.prototype.N = _.cb(1, function(a) {
        return _.Oi(this.qb, a)
    });
    Ys = function(a, b, c) {
        c = a.cM.get(c);
        return (null == c ? 0 : c.has(b)) ? c.get(b) : a.uW.has(b) ? {
            zd: 1
        } : (c = a.PZ.get(b)) ? c : a.PN && [].concat(_.aj(a.PN)).some(function(d) {
            return 0 === b.indexOf(d)
        }) ? {
            zd: 1
        } : {
            zd: 0
        }
    }
    ;
    Zs = ["data:", "http:", "https:", "mailto:", "ftp:"];
    $s = function(a) {
        0 === a.Hv.length && a.Hv.push("")
    }
    ;
    at = function(a, b) {
        if (b.nodeType === Node.TEXT_NODE)
            return NodeFilter.FILTER_ACCEPT;
        if (!Ms(b))
            return NodeFilter.FILTER_REJECT;
        b = Ls(b);
        if (null === b)
            return $s(a),
            NodeFilter.FILTER_REJECT;
        var c = a.wR;
        if ("form" !== b.toLowerCase() && (c.tW.has(b) || c.cM.has(b)))
            return NodeFilter.FILTER_ACCEPT;
        $s(a);
        return NodeFilter.FILTER_REJECT
    }
    ;
    bt = function(a, b) {
        var c = Ls(b)
          , d = document.createElement(c);
        b = b.attributes;
        for (var e = _.sa(b), f = e.next(); !f.done; f = e.next()) {
            var h = f.value;
            f = h.name;
            h = h.value;
            var k = Ys(a.wR, f, c), l;
            a: {
                if (l = k.conditions) {
                    l = _.sa(l);
                    for (var m = l.next(); !m.done; m = l.next()) {
                        var n = _.sa(m.value);
                        m = n.next().value;
                        n = n.next().value;
                        var q = void 0;
                        if ((m = null == (q = b.getNamedItem(m)) ? void 0 : q.value) && !n.has(m)) {
                            l = !1;
                            break a
                        }
                    }
                }
                l = !0
            }
            if (l)
                switch (k.zd) {
                case 1:
                    d.setAttribute(f, h);
                    break;
                case 2:
                    k = _.Ni(h);
                    k = void 0 !== k && -1 !== Zs.indexOf(k.toLowerCase()) ? h : "about:invalid#zClosurez";
                    k !== h && $s(a);
                    d.setAttribute(f, k);
                    break;
                case 3:
                    d.setAttribute(f, h.toLowerCase());
                    break;
                case 4:
                    d.setAttribute(f, h);
                    break;
                case 0:
                    $s(a)
                }
            else
                $s(a)
        }
        return d
    }
    ;
    ct = function(a, b) {
        b = Ks(b);
        b = document.createTreeWalker(b, NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_TEXT, function(h) {
            return at(a, h)
        }, !1);
        for (var c = b.nextNode(), d = document.createDocumentFragment(), e = d; null !== c; ) {
            var f = void 0;
            if (c.nodeType === Node.TEXT_NODE)
                f = document.createTextNode(c.data);
            else if (Ms(c))
                f = bt(a, c);
            else
                throw Error("q");
            e.appendChild(f);
            if (c = b.firstChild())
                e = f;
            else
                for (; !(c = b.nextSibling()) && (c = b.parentNode()); )
                    e = e.parentNode
        }
        return d
    }
    ;
    _.dt = function(a, b) {
        var c = document.createElement("span");
        c.appendChild(ct(a, b));
        a = (new XMLSerializer).serializeToString(c);
        a = a.slice(a.indexOf(">") + 1, a.lastIndexOf("</"));
        return _.ld(a)
    }
    ;
    Ts = function(a, b) {
        a.Hv = [];
        _.dt(a, b);
        if (0 !== a.Hv.length)
            throw Error("q");
    }
    ;
    Vs = {
        0: 1,
        1: .1
    };
    Ws = {
        0: .1,
        1: .01
    };
    _.et = function(a, b) {
        var c = b || document;
        if (c.getElementsByClassName)
            a = c.getElementsByClassName(a)[0];
        else {
            c = document;
            var d = b || c;
            a = d.querySelectorAll && d.querySelector && a ? d.querySelector(a ? "." + a : "") : _.qe(c, "*", a, b)[0] || null
        }
        return a || null
    }
    ;
    _.ft = function(a) {
        var b;
        if (_.de && (b = a.parentElement))
            return b;
        b = a.parentNode;
        return _.Ge(b) ? b : null
    }
    ;
    _.gt = function(a) {
        _.dj.call(this);
        this.he = a;
        this.Ob = {}
    }
    ;
    _.ab(_.gt, _.dj);
    var ht = [];
    _.gt.prototype.V = function(a, b, c, d) {
        return this.Vs(a, b, c, d)
    }
    ;
    _.gt.prototype.Vs = function(a, b, c, d, e) {
        Array.isArray(b) || (b && (ht[0] = b.toString()),
        b = ht);
        for (var f = 0; f < b.length; f++) {
            var h = _.wj(a, b[f], c || this.handleEvent, d || !1, e || this.he || this);
            if (!h)
                break;
            this.Ob[h.key] = h
        }
        return this
    }
    ;
    _.gt.prototype.Cp = function(a, b, c, d) {
        return it(this, a, b, c, d)
    }
    ;
    var it = function(a, b, c, d, e, f) {
        if (Array.isArray(c))
            for (var h = 0; h < c.length; h++)
                it(a, b, c[h], d, e, f);
        else {
            b = _.vj(b, c, d || a.handleEvent, e, f || a.he || a);
            if (!b)
                return a;
            a.Ob[b.key] = b
        }
        return a
    };
    _.gt.prototype.lc = function(a, b, c, d, e) {
        if (Array.isArray(b))
            for (var f = 0; f < b.length; f++)
                this.lc(a, b[f], c, d, e);
        else
            c = c || this.handleEvent,
            d = _.Rb(d) ? !!d.capture : !!d,
            e = e || this.he || this,
            c = _.xj(c),
            d = !!d,
            b = _.lj(a) ? a.So(b, c, d, e) : a ? (a = _.zj(a)) ? a.So(b, c, d, e) : null : null,
            b && (_.Ej(b),
            delete this.Ob[b.key]);
        return this
    }
    ;
    _.gt.prototype.removeAll = function() {
        _.lb(this.Ob, function(a, b) {
            this.Ob.hasOwnProperty(b) && _.Ej(a)
        }, this);
        this.Ob = {}
    }
    ;
    _.gt.prototype.qa = function() {
        _.gt.H.qa.call(this);
        this.removeAll()
    }
    ;
    _.gt.prototype.handleEvent = function() {
        throw Error("Q");
    }
    ;
    var Xu, Yu, Zu, $u, av, cv, dv, ev, fv, hv;
    _.Wu = !1;
    Xu = function(a) {
        try {
            _.Wu && window.console && window.console.log && window.console.log(a)
        } catch (b) {}
    }
    ;
    Yu = function(a) {
        try {
            window.console && window.console.warn && window.console.warn(a)
        } catch (b) {}
    }
    ;
    Zu = function(a, b) {
        if (!a)
            return -1;
        if (a.indexOf)
            return a.indexOf(b, void 0);
        for (var c = 0, d = a.length; c < d; c++)
            if (a[c] === b)
                return c;
        return -1
    }
    ;
    $u = function(a, b) {
        function c() {}
        if (!a)
            throw Error("T");
        if (!b)
            throw Error("U");
        c.prototype = b.prototype;
        a.prototype = new c;
        a.prototype.constructor = a
    }
    ;
    av = function(a) {
        return "[object Function]" === Object.prototype.toString.call(a)
    }
    ;
    _.bv = function(a) {
        var b = {};
        if (a)
            for (var c in a)
                a.hasOwnProperty(c) && (b[c] = a[c]);
        return b
    }
    ;
    cv = function(a) {
        var b = location.hash;
        a = new RegExp("[&#]" + a + "=([^&]*)");
        b = decodeURIComponent(b);
        b = a.exec(b);
        return null == b ? "" : b[1].replace(/\+/g, " ")
    }
    ;
    dv = function(a, b, c) {
        if (a.addEventListener)
            a.addEventListener(b, c, !1);
        else if (a.attachEvent)
            a.attachEvent("on" + b, c);
        else
            throw Error("V`" + b);
    }
    ;
    ev = {
        token: 1,
        id_token: 1
    };
    fv = function() {
        var a = navigator.userAgent.toLowerCase();
        return -1 != a.indexOf("msie") && 8 == parseInt(a.split("msie")[1], 10)
    }
    ;
    _.gv = window.JSON;
    hv = function(a) {
        this.AJ = a || [];
        this.Vb = {}
    }
    ;
    hv.prototype.addEventListener = function(a, b) {
        if (!(0 <= Zu(this.AJ, a)))
            throw Error("X`" + a);
        if (!av(b))
            throw Error("Y`" + a);
        this.Vb[a] || (this.Vb[a] = []);
        0 > Zu(this.Vb[a], b) && this.Vb[a].push(b)
    }
    ;
    hv.prototype.removeEventListener = function(a, b) {
        if (!(0 <= Zu(this.AJ, a)))
            throw Error("X`" + a);
        av(b) && this.Vb[a] && this.Vb[a].length && (b = Zu(this.Vb[a], b),
        0 <= b && this.Vb[a].splice(b, 1))
    }
    ;
    hv.prototype.dispatchEvent = function(a) {
        var b = a.type;
        if (!(b && 0 <= Zu(this.AJ, b)))
            throw Error("Z`" + b);
        if (this.Vb[b] && this.Vb[b].length)
            for (var c = this.Vb[b].length, d = 0; d < c; d++)
                this.Vb[b][d](a)
    }
    ;
    var iv, jv, kv, ov, pv, Gv, Hv, Jv, Kv, Mv, Wv;
    iv = {};
    jv = {};
    kv = {
        google: {
            authServerUrl: "https://accounts.google.com/o/oauth2/auth",
            idpIFrameUrl: "https://accounts.google.com/o/oauth2/iframe"
        }
    };
    _.lv = function(a, b) {
        if (a = kv[a])
            return a[b]
    }
    ;
    _.mv = function(a, b) {
        if (!a)
            throw Error("$");
        if (!b.authServerUrl)
            throw Error("aa");
        if (!b.idpIFrameUrl)
            throw Error("ba");
        kv[a] = {
            authServerUrl: b.authServerUrl,
            idpIFrameUrl: b.idpIFrameUrl
        }
    }
    ;
    _.nv = void 0;
    ov = function(a) {
        a.style.position = "absolute";
        a.style.width = "1px";
        a.style.height = "1px";
        a.style.left = "-9999px";
        a.style.top = "-9999px";
        a.style.right = "-9999px";
        a.style.bottom = "-9999px";
        a.style.display = "none";
        a.setAttribute("aria-hidden", "true")
    }
    ;
    pv = function() {
        this.R6 = window;
        this.Xv = this.bm = this.xt = this.Ih = null
    }
    ;
    pv.prototype.open = function(a, b, c, d) {
        qv(this);
        this.xt ? (this.bm && (this.bm(),
        this.bm = null),
        rv(this)) : this.xt = "authPopup" + Math.floor(1E6 * Math.random() + 1);
        a: {
            this.Ih = this.R6.open(a, this.xt, b);
            try {
                this.Ih.focus();
                if (this.Ih.closed || "undefined" == typeof this.Ih.closed)
                    throw Error("da");
                _.nv = this.Ih
            } catch (e) {
                d && setTimeout(d, 0);
                this.Ih = null;
                break a
            }
            c && (this.bm = c,
            sv(this))
        }
    }
    ;
    var qv = function(a) {
        try {
            if (null == a.Ih || a.Ih.closed)
                a.Ih = null,
                a.xt = null,
                rv(a),
                a.bm && (a.bm(),
                a.bm = null)
        } catch (b) {
            a.Ih = null,
            a.xt = null,
            rv(a)
        }
    }
      , sv = function(a) {
        a.Xv = window.setInterval(function() {
            qv(a)
        }, 300)
    }
      , rv = function(a) {
        a.Xv && (window.clearInterval(a.Xv),
        a.Xv = null)
    };
    jv = jv || {};
    var tv = function(a, b) {
        this.Qb = a;
        this.ME = b;
        this.jd = null;
        this.Om = !1
    };
    tv.prototype.start = function() {
        if (!this.Om && !this.jd) {
            var a = this;
            this.jd = window.setTimeout(function() {
                a.clear();
                a.Om || (a.Qb(),
                a.Om = !0)
            }, jv.LN(this.ME))
        }
    }
    ;
    tv.prototype.clear = function() {
        this.jd && (window.clearTimeout(this.jd),
        this.jd = null)
    }
    ;
    var uv = function(a, b) {
        var c = jv.Wq;
        this.o0 = jv.Qq;
        this.uT = c;
        this.Qb = a;
        this.ME = b;
        this.jd = null;
        this.Om = !1;
        var d = this;
        this.vT = function() {
            document[d.o0] || (d.clear(),
            d.start())
        }
    };
    uv.prototype.start = function() {
        if (!this.Om && !this.jd) {
            dv(document, this.uT, this.vT);
            var a = this;
            this.jd = window.setTimeout(function() {
                a.clear();
                a.Om || (a.Qb(),
                a.Om = !0)
            }, jv.LN(this.ME))
        }
    }
    ;
    uv.prototype.clear = function() {
        var a = this.uT
          , b = this.vT
          , c = document;
        if (c.removeEventListener)
            c.removeEventListener(a, b, !1);
        else if (c.detachEvent)
            c.detachEvent("on" + a, b);
        else
            throw Error("W`" + a);
        this.jd && (window.clearTimeout(this.jd),
        this.jd = null)
    }
    ;
    jv.Qq = null;
    jv.Wq = null;
    jv.K0 = function() {
        var a = document;
        "undefined" !== typeof a.hidden ? (jv.Qq = "hidden",
        jv.Wq = "visibilitychange") : "undefined" !== typeof a.msHidden ? (jv.Qq = "msHidden",
        jv.Wq = "msvisibilitychange") : "undefined" !== typeof a.webkitHidden && (jv.Qq = "webkitHidden",
        jv.Wq = "webkitvisibilitychange")
    }
    ;
    jv.K0();
    jv.vX = function(a, b) {
        return jv.Qq && jv.Wq ? new uv(a,b) : new tv(a,b)
    }
    ;
    jv.LN = function(a) {
        return Math.max(1, a - (new Date).getTime())
    }
    ;
    var vv = function(a, b) {
        document.cookie = "G_ENABLED_IDPS=" + a + ";domain=." + b + ";expires=Fri, 31 Dec 9999 12:00:00 GMT;path=/"
    }
      , wv = function() {
        function a() {
            e[0] = 1732584193;
            e[1] = 4023233417;
            e[2] = 2562383102;
            e[3] = 271733878;
            e[4] = 3285377520;
            n = m = 0
        }
        function b(q) {
            for (var p = h, t = 0; 64 > t; t += 4)
                p[t / 4] = q[t] << 24 | q[t + 1] << 16 | q[t + 2] << 8 | q[t + 3];
            for (t = 16; 80 > t; t++)
                q = p[t - 3] ^ p[t - 8] ^ p[t - 14] ^ p[t - 16],
                p[t] = (q << 1 | q >>> 31) & 4294967295;
            q = e[0];
            var v = e[1]
              , r = e[2]
              , w = e[3]
              , z = e[4];
            for (t = 0; 80 > t; t++) {
                if (40 > t)
                    if (20 > t) {
                        var A = w ^ v & (r ^ w);
                        var D = 1518500249
                    } else
                        A = v ^ r ^ w,
                        D = 1859775393;
                else
                    60 > t ? (A = v & r | w & (v | r),
                    D = 2400959708) : (A = v ^ r ^ w,
                    D = 3395469782);
                A = ((q << 5 | q >>> 27) & 4294967295) + A + z + D + p[t] & 4294967295;
                z = w;
                w = r;
                r = (v << 30 | v >>> 2) & 4294967295;
                v = q;
                q = A
            }
            e[0] = e[0] + q & 4294967295;
            e[1] = e[1] + v & 4294967295;
            e[2] = e[2] + r & 4294967295;
            e[3] = e[3] + w & 4294967295;
            e[4] = e[4] + z & 4294967295
        }
        function c(q, p) {
            if ("string" === typeof q) {
                q = unescape(encodeURIComponent(q));
                for (var t = [], v = 0, r = q.length; v < r; ++v)
                    t.push(q.charCodeAt(v));
                q = t
            }
            p || (p = q.length);
            t = 0;
            if (0 == m)
                for (; t + 64 < p; )
                    b(q.slice(t, t + 64)),
                    t += 64,
                    n += 64;
            for (; t < p; )
                if (f[m++] = q[t++],
                n++,
                64 == m)
                    for (m = 0,
                    b(f); t + 64 < p; )
                        b(q.slice(t, t + 64)),
                        t += 64,
                        n += 64
        }
        function d() {
            var q = []
              , p = 8 * n;
            56 > m ? c(k, 56 - m) : c(k, 64 - (m - 56));
            for (var t = 63; 56 <= t; t--)
                f[t] = p & 255,
                p >>>= 8;
            b(f);
            for (t = p = 0; 5 > t; t++)
                for (var v = 24; 0 <= v; v -= 8)
                    q[p++] = e[t] >> v & 255;
            return q
        }
        for (var e = [], f = [], h = [], k = [128], l = 1; 64 > l; ++l)
            k[l] = 0;
        var m, n;
        a();
        return {
            reset: a,
            update: c,
            digest: d,
            bi: function() {
                for (var q = d(), p = "", t = 0; t < q.length; t++)
                    p += "0123456789ABCDEF".charAt(Math.floor(q[t] / 16)) + "0123456789ABCDEF".charAt(q[t] % 16);
                return p
            }
        }
    }
      , xv = window.crypto
      , yv = !1
      , zv = 0
      , Av = 1
      , Bv = 0
      , Cv = ""
      , Dv = function(a) {
        a = a || window.event;
        var b = a.screenX + a.clientX << 16;
        b += a.screenY + a.clientY;
        b *= (new Date).getTime() % 1E6;
        Av = Av * b % Bv;
        if (3 == ++zv)
            if (a = window,
            b = Dv,
            a.removeEventListener)
                a.removeEventListener("mousemove", b, !1);
            else if (a.detachEvent)
                a.detachEvent("onmousemove", b);
            else
                throw Error("W`mousemove");
    }
      , Ev = function(a) {
        var b = wv();
        b.update(a);
        return b.bi()
    };
    yv = !!xv && "function" == typeof xv.getRandomValues;
    yv || (Bv = 1E6 * (screen.width * screen.width + screen.height),
    Cv = Ev(document.cookie + "|" + document.location + "|" + (new Date).getTime() + "|" + Math.random()),
    dv(window, "mousemove", Dv));
    iv = iv || {};
    iv.nU = "ssIFrame_";
    _.Fv = function(a, b, c) {
        c = void 0 === c ? !1 : c;
        this.tb = a;
        if (!this.tb)
            throw Error("ea");
        a = _.lv(a, "idpIFrameUrl");
        if (!a)
            throw Error("fa");
        this.DO = a;
        if (!b)
            throw Error("ga");
        this.El = b;
        a = this.DO;
        b = document.createElement("a");
        b.setAttribute("href", a);
        a = [b.protocol, "//", b.hostname];
        "http:" == b.protocol && "" != b.port && "0" != b.port && "80" != b.port ? (a.push(":"),
        a.push(b.port)) : "https:" == b.protocol && "" != b.port && "0" != b.port && "443" != b.port && (a.push(":"),
        a.push(b.port));
        this.vE = a.join("");
        this.t4 = [location.protocol, "//", location.host].join("");
        this.su = this.uE = this.Sm = !1;
        this.zO = null;
        this.Ry = [];
        this.Wp = [];
        this.kj = {};
        this.Tm = void 0;
        this.Gq = c
    }
    ;
    _.g = _.Fv.prototype;
    _.g.show = function() {
        var a = this.Tm;
        a.style.position = "fixed";
        a.style.width = "100%";
        a.style.height = "100%";
        a.style.left = "0px";
        a.style.top = "0px";
        a.style.right = "0px";
        a.style.bottom = "0px";
        a.style.display = "block";
        a.style.zIndex = "9999999";
        a.style.overflow = "hidden";
        a.setAttribute("aria-hidden", "false")
    }
    ;
    _.g.Sb = function() {
        ov(this.Tm)
    }
    ;
    _.g.vy = function(a) {
        if (this.Sm)
            a && a(this);
        else {
            if (!this.Tm) {
                var b = iv.nU + this.tb;
                var c = this.tb;
                var d = location.hostname;
                var e, f = document.cookie.match("(^|;) ?G_ENABLED_IDPS=([^;]*)(;|$)");
                f && 2 < f.length && (e = f[2]);
                (f = e && 0 <= Zu(e.split("|"), c)) ? vv(e, d) : vv(e ? e + "|" + c : c, d);
                c = !f;
                var h = this.DO
                  , k = this.t4;
                d = this.El;
                e = this.Gq;
                e = void 0 === e ? !1 : e;
                f = document.createElement("iframe");
                f.setAttribute("id", b);
                b = f.setAttribute;
                var l = "allow-scripts allow-same-origin";
                document.requestStorageAccess && av(document.requestStorageAccess) && (l += " allow-storage-access-by-user-activation");
                b.call(f, "sandbox", l);
                ov(f);
                f.setAttribute("frame-border", "0");
                b = [h, "#origin=", encodeURIComponent(k)];
                b.push("&rpcToken=");
                b.push(encodeURIComponent(d));
                c && b.push("&clearCache=1");
                _.Wu && b.push("&debug=1");
                e && b.push("&supportBlocked3PCookies=1");
                document.body.appendChild(f);
                f.setAttribute("src", b.join(""));
                this.Tm = f
            }
            a && this.Ry.push(a)
        }
    }
    ;
    _.g.iy = function() {
        return this.Sm && this.su
    }
    ;
    _.g.Cm = function() {
        return this.zO
    }
    ;
    Gv = function(a) {
        for (var b = 0; b < a.Ry.length; b++)
            a.Ry[b](a);
        a.Ry = []
    }
    ;
    _.Iv = function(a, b, c, d) {
        if (a.Sm) {
            if (a.Sm && a.uE)
                throw a = "Failed to communicate with IDP IFrame due to unitialization error: " + a.Cm(),
                Xu(a),
                Error(a);
            Hv(a, {
                method: b,
                params: c
            }, d)
        } else
            a.Wp.push({
                An: {
                    method: b,
                    params: c
                },
                callback: d
            }),
            a.vy()
    }
    ;
    Hv = function(a, b, c) {
        if (c) {
            for (var d = b.id; !d || a.kj[d]; )
                d = (new Date).getMilliseconds() + "-" + (1E6 * Math.random() + 1);
            b.id = d;
            a.kj[d] = c
        }
        b.rpcToken = a.El;
        a.Tm.contentWindow.postMessage(_.gv.stringify(b), a.vE)
    }
    ;
    Jv = function(a) {
        if (a && 0 <= a.indexOf("::"))
            throw Error("ha");
    }
    ;
    _.Fv.prototype.Ji = function(a, b, c, d, e, f, h, k, l) {
        l = void 0 === l ? !1 : l;
        Jv(f);
        b = _.bv(b);
        _.Iv(this, "getTokenResponse", {
            clientId: a,
            loginHint: c,
            request: b,
            sessionSelector: d,
            forceRefresh: h,
            skipCache: k,
            id: f,
            userInteracted: l
        }, e)
    }
    ;
    _.Fv.prototype.uy = function(a, b, c, d, e) {
        b = _.bv(b);
        _.Iv(this, "listIdpSessions", {
            clientId: a,
            request: b,
            sessionSelector: c,
            forceRefresh: e
        }, d)
    }
    ;
    Kv = function(a, b, c) {
        Jv(b.identifier);
        _.Iv(a, "getSessionSelector", b, c)
    }
    ;
    _.Lv = function(a, b, c, d, e) {
        Jv(b.identifier);
        _.Iv(a, "setSessionSelector", {
            domain: b.domain,
            crossSubDomains: b.crossSubDomains,
            policy: b.policy,
            id: b.id,
            hint: d,
            disabled: !!c
        }, e)
    }
    ;
    Mv = function(a, b, c, d, e) {
        b = {
            clientId: b
        };
        c && (b.pluginName = c);
        d && (b.ackExtensionDate = d);
        _.Iv(a, "monitorClient", b, e)
    }
    ;
    _.Fv.prototype.revoke = _.ea(9);
    _.Fv.prototype.qr = _.ea(11);
    iv.Ix = {};
    iv.uD = function(a) {
        return iv.Ix[a]
    }
    ;
    iv.vy = function(a, b, c) {
        c = void 0 === c ? !1 : c;
        var d = iv.uD(a);
        if (!d) {
            d = String;
            if (yv) {
                var e = new window.Uint32Array(1);
                xv.getRandomValues(e);
                e = Number("0." + e[0])
            } else
                e = Av,
                e += parseInt(Cv.substr(0, 20), 16),
                Cv = Ev(Cv),
                e /= Bv + Math.pow(16, 20);
            d = new _.Fv(a,d(2147483647 * e),c);
            iv.Ix[a] = d
        }
        d.vy(b)
    }
    ;
    iv.TY = function(a) {
        for (var b in iv.Ix) {
            var c = iv.uD(b);
            if (c && c.Tm && c.Tm.contentWindow == a.source && c.vE == a.origin)
                return c
        }
    }
    ;
    iv.yZ = function(a) {
        for (var b in iv.Ix) {
            var c = iv.uD(b);
            if (c && c.vE == a)
                return c
        }
    }
    ;
    iv = iv || {};
    var Ov = function() {
        var a = [], b;
        for (b in Nv)
            a.push(Nv[b]);
        hv.call(this, a);
        this.Yk = {};
        Xu("EventBus is ready.")
    };
    $u(Ov, hv);
    var Nv = {
        FV: "sessionSelectorChanged",
        uB: "sessionStateChanged",
        fB: "authResult",
        ZT: "displayIFrame"
    }
      , Qv = function(a, b) {
        var c = Pv;
        a && b && (c.Yk[a] || (c.Yk[a] = []),
        0 > Zu(c.Yk[a], b) && c.Yk[a].push(b))
    }
      , Rv = function(a) {
        var b = Pv;
        a && (b.Yk[a] || (b.Yk[a] = []))
    }
      , Sv = function(a, b, c) {
        return b && a.Yk[b] && 0 <= Zu(a.Yk[b], c)
    };
    _.g = Ov.prototype;
    _.g.v3 = function(a) {
        var b, c = !!a.source && (a.source === _.nv || a.source.opener === window);
        if (b = c ? iv.yZ(a.origin) : iv.TY(a)) {
            try {
                var d = _.gv.parse(a.data)
            } catch (e) {
                Xu("Bad event, an error happened when parsing data.");
                return
            }
            if (!c) {
                if (!d || !d.rpcToken || d.rpcToken != b.El) {
                    Xu("Bad event, no RPC token.");
                    return
                }
                if (d.id && !d.method) {
                    c = d;
                    if (a = b.kj[c.id])
                        delete b.kj[c.id],
                        a(c.result, c.error);
                    return
                }
            }
            "fireIdpEvent" != d.method ? Xu("Bad IDP event, method unknown.") : (a = d.params) && a.type && this.CO[a.type] ? (d = this.CO[a.type],
            c && !d.rW ? Xu("Bad IDP event. Source window cannot be a popup.") : d.Lq && !d.Lq.call(this, b, a) ? Xu("Bad IDP event.") : d.nf.call(this, b, a)) : Xu("Bad IDP event.")
        } else
            Xu("Bad event, no corresponding Idp Stub.")
    }
    ;
    _.g.T4 = function(a, b) {
        return Sv(this, a.tb, b.clientId)
    }
    ;
    _.g.S4 = function(a, b) {
        b = b.clientId;
        return !b || Sv(this, a.tb, b)
    }
    ;
    _.g.FW = function(a, b) {
        return Sv(this, a.tb, b.clientId)
    }
    ;
    _.g.D2 = function(a, b) {
        a.Sm = !0;
        a.su = !!b.cookieDisabled;
        Gv(a);
        for (b = 0; b < a.Wp.length; b++)
            Hv(a, a.Wp[b].An, a.Wp[b].callback);
        a.Wp = []
    }
    ;
    _.g.C2 = function(a, b) {
        b = {
            error: b.error
        };
        a.Sm = !0;
        a.uE = !0;
        a.zO = b;
        a.Wp = [];
        Gv(a)
    }
    ;
    _.g.vz = function(a, b) {
        b.originIdp = a.tb;
        this.dispatchEvent(b)
    }
    ;
    var Pv = new Ov
      , Tv = Pv
      , Uv = {};
    Uv.idpReady = {
        nf: Tv.D2
    };
    Uv.idpError = {
        nf: Tv.C2
    };
    Uv.sessionStateChanged = {
        nf: Tv.vz,
        Lq: Tv.T4
    };
    Uv.sessionSelectorChanged = {
        nf: Tv.vz,
        Lq: Tv.S4
    };
    Uv.authResult = {
        nf: Tv.vz,
        Lq: Tv.FW,
        rW: !0
    };
    Uv.displayIFrame = {
        nf: Tv.vz
    };
    Pv.CO = Uv || {};
    dv(window, "message", function(a) {
        Pv.v3.call(Pv, a)
    });
    _.Vv = function(a, b) {
        this.we = !1;
        if (!a)
            throw Error("ia");
        var c = [], d;
        for (d in a)
            c.push(a[d]);
        hv.call(this, c);
        this.Xc = [location.protocol, "//", location.host].join("");
        this.Yd = b.crossSubDomains ? b.domain || this.Xc : this.Xc;
        if (!b)
            throw Error("ja");
        if (!b.idpId)
            throw Error("ka");
        if (!_.lv(b.idpId, "authServerUrl") || !_.lv(b.idpId, "idpIFrameUrl"))
            throw Error("la`" + b.idpId);
        this.tb = b.idpId;
        this.Rb = void 0;
        this.CX = !!b.disableTokenRefresh;
        this.sY = !!b.forceTokenRefresh;
        this.S5 = !!b.skipTokenCache;
        this.Gq = !!b.supportBlocked3PCookies;
        b.pluginName && (this.l3 = b.pluginName);
        b.ackExtensionDate && (this.kW = b.ackExtensionDate);
        this.setOptions(b);
        this.Br = [];
        this.su = this.Ej = this.hP = !1;
        this.Bi = void 0;
        this.cR();
        this.wd = void 0;
        var e = this
          , f = function() {
            Xu("Token Manager is ready.");
            if (e.Br.length)
                for (var h = 0; h < e.Br.length; h++)
                    e.Br[h].call(e);
            e.hP = !0;
            e.Br = []
        };
        iv.vy(this.tb, function(h) {
            e.wd = h;
            h.Sm && h.uE ? (e.Ej = !0,
            e.Bi = h.Cm(),
            e.Np(e.Bi)) : (e.su = h.iy(),
            e.Rb ? Mv(e.wd, e.Rb, e.l3, e.kW, function(k) {
                var l = !!k.validOrigin
                  , m = !!k.blocked
                  , n = !!k.suppressed;
                k.invalidExtension ? (e.Bi = {
                    error: "Invalid value for ack_extension_date. Please refer to [Migration Guide](https://developers.google.com/identity/gsi/web/guides/gis-migration) for more information."
                },
                e.Ej = !0,
                e.Np(e.Bi)) : l ? m ? n ? (Yu("You have created a new client application that uses libraries for user authentication or authorization that will soon be deprecated. New clients must use the new libraries instead; existing clients must also migrate before these libraries are deprecated. See the [Migration Guide](https://developers.google.com/identity/gsi/web/guides/gis-migration) for more information."),
                Qv(e.tb, e.Rb),
                f()) : (e.Bi = {
                    error: "You have created a new client application that uses libraries for user authentication or authorization that will soon be deprecated. New clients must use the new libraries instead; existing clients must also migrate before these libraries are deprecated. See the [Migration Guide](https://developers.google.com/identity/gsi/web/guides/gis-migration) for more information."
                },
                e.Ej = !0,
                e.Np(e.Bi)) : (Yu("Your client application uses libraries for user authentication or authorization that will soon be deprecated. See the [Migration Guide](https://developers.google.com/identity/gsi/web/guides/gis-migration) for more information."),
                Qv(e.tb, e.Rb),
                f()) : (e.Bi = {
                    error: "Not a valid origin for the client: " + e.Xc + " has not been registered for client ID " + e.Rb + ". Please go to https://console.developers.google.com/ and register this origin for your project's client ID."
                },
                e.Ej = !0,
                e.Np(e.Bi))
            }) : (Rv(e.tb),
            f()))
        }, this.Gq)
    }
    ;
    $u(_.Vv, hv);
    _.g = _.Vv.prototype;
    _.g.setOptions = function() {}
    ;
    _.g.cR = function() {}
    ;
    _.g.Np = function() {}
    ;
    _.g.iy = function() {
        return this.su
    }
    ;
    _.g.Cm = function() {
        return this.Bi
    }
    ;
    Wv = function(a, b, c) {
        return function() {
            b.apply(a, c)
        }
    }
    ;
    _.Xv = function(a, b, c) {
        if (a.hP)
            b.apply(a, c);
        else {
            if (a.Ej)
                throw a.Bi;
            a.Br.push(Wv(a, b, c))
        }
    }
    ;
    _.Vv.prototype.kL = _.ea(12);
    _.Vv.prototype.qr = _.ea(10);
    _.Zv = function(a, b) {
        _.Vv.call(this, a, b);
        this.LQ = new pv;
        this.Pj = this.qn = null;
        Yv(this)
    }
    ;
    $u(_.Zv, _.Vv);
    _.Zv.prototype.setOptions = function() {}
    ;
    var $v = function(a, b) {
        a.re = {
            crossSubDomains: !!b.crossSubDomains,
            id: b.sessionSelectorId,
            domain: a.Yd
        };
        b.crossSubDomains && (a.re.policy = b.policy)
    }
      , aw = function(a, b) {
        if (!b.authParameters)
            throw Error("ma");
        if (!b.authParameters.scope)
            throw Error("na");
        if (!b.authParameters.response_type)
            throw Error("oa");
        a.fr = b.authParameters;
        a.fr.redirect_uri || (a.fr.redirect_uri = [location.protocol, "//", location.host, location.pathname].join(""));
        a.Oi = _.bv(b.rpcAuthParameters || a.fr);
        if (!a.Oi.scope)
            throw Error("pa");
        if (!a.Oi.response_type)
            throw Error("qa");
        a: {
            var c = a.Oi.response_type.split(" ");
            for (var d = 0, e = c.length; d < e; d++)
                if (c[d] && !ev[c[d]]) {
                    c = !0;
                    break a
                }
            c = !1
        }
        if (c)
            throw Error("ra");
        b.enableSerialConsent && (a.Oi.enable_serial_consent = !0);
        b.authResultIdentifier && (a.GW = b.authResultIdentifier);
        b.spec_compliant && (a.Oi.spec_compliant = b.spec_compliant)
    };
    _.Zv.prototype.cR = function() {
        var a = this;
        Pv.addEventListener(Nv.FV, function(b) {
            a.we && a.re && b.originIdp == a.tb && !b.crossSubDomains == !a.re.crossSubDomains && b.domain == a.re.domain && b.id == a.re.id && a.uQ(b)
        });
        Pv.addEventListener(Nv.uB, function(b) {
            a.we && b.originIdp == a.tb && b.clientId == a.Rb && a.vQ(b)
        });
        Pv.addEventListener(Nv.fB, function(b) {
            _.nv = void 0;
            a.we && b.originIdp == a.tb && b.clientId == a.Rb && b.id == a.Lj && (a.qn && (window.clearTimeout(a.qn),
            a.qn = null),
            a.Lj = void 0,
            a.it(b))
        });
        Pv.addEventListener(Nv.ZT, function(b) {
            a.we && b.originIdp == a.tb && (b.Sb ? a.wd.Sb() : a.wd.show())
        })
    }
    ;
    _.Zv.prototype.uQ = function() {}
    ;
    _.Zv.prototype.vQ = function() {}
    ;
    _.Zv.prototype.it = function() {}
    ;
    var cw = function(a, b) {
        bw(a);
        a.CX || (a.Pj = jv.vX(function() {
            a.Ji(!0)
        }, b - 3E5),
        navigator.onLine && a.Pj.start())
    }
      , bw = function(a) {
        a.Pj && (a.Pj.clear(),
        a.Pj = null)
    }
      , Yv = function(a) {
        var b = window;
        fv() && (b = document.body);
        dv(b, "online", function() {
            a.Pj && a.Pj.start()
        });
        dv(b, "offline", function() {
            a.Pj && a.Pj.clear()
        })
    };
    _.Zv.prototype.Ji = function() {}
    ;
    _.Zv.prototype.bQ = _.ea(13);
    _.Zv.prototype.v1 = function(a, b) {
        if (!this.Rb)
            throw Error("va");
        this.wd.uy(this.Rb, this.Oi, this.re, a, b)
    }
    ;
    _.Zv.prototype.uy = function(a, b) {
        _.Xv(this, this.v1, [a, b])
    }
    ;
    _.ew = function(a) {
        this.ke = void 0;
        this.dh = !1;
        this.kq = void 0;
        _.Zv.call(this, _.dw, a)
    }
    ;
    $u(_.ew, _.Zv);
    _.dw = {
        dK: "noSessionBound",
        Vq: "userLoggedOut",
        FT: "activeSessionChanged",
        uB: "sessionStateChanged",
        qK: "tokenReady",
        ZV: "tokenFailed",
        fB: "authResult",
        ERROR: "error"
    };
    _.ew.prototype.setOptions = function(a) {
        if (!a.clientId)
            throw Error("wa");
        this.Rb = a.clientId;
        this.Ba = a.id;
        $v(this, a);
        aw(this, a)
    }
    ;
    _.ew.prototype.Np = function(a) {
        this.dispatchEvent({
            type: _.dw.ERROR,
            error: "idpiframe_initialization_failed",
            details: a.error,
            idpId: this.tb
        })
    }
    ;
    var fw = function(a) {
        bw(a);
        a.kq = void 0;
        a.py = void 0
    };
    _.g = _.ew.prototype;
    _.g.uQ = function(a) {
        var b = a.newValue || {};
        if (this.ke != b.hint || this.dh != !!b.disabled) {
            a = this.ke;
            var c = !this.ke || this.dh;
            fw(this);
            this.ke = b.hint;
            this.dh = !!b.disabled;
            (b = !this.ke || this.dh) && !c ? this.dispatchEvent({
                type: _.dw.Vq,
                idpId: this.tb
            }) : b || (a != this.ke && this.dispatchEvent({
                type: _.dw.FT,
                idpId: this.tb
            }),
            this.ke && this.Ji())
        }
    }
    ;
    _.g.vQ = function(a) {
        this.dh || (this.ke ? a.user || this.kq ? a.user == this.ke && (this.kq ? a.sessionState ? this.kq = a.sessionState : (fw(this),
        this.dispatchEvent({
            type: _.dw.Vq,
            idpId: this.tb
        })) : a.sessionState && (this.kq = a.sessionState,
        this.Ji())) : this.Ji() : this.dispatchEvent({
            type: _.dw.uB,
            idpId: this.tb
        }))
    }
    ;
    _.g.it = function(a) {
        this.dispatchEvent({
            type: _.dw.fB,
            authResult: a.authResult
        })
    }
    ;
    _.g.Yr = _.ea(15);
    _.g.Sr = function(a) {
        _.Xv(this, this.jD, [a])
    }
    ;
    _.g.jD = function(a) {
        Kv(this.wd, this.re, a)
    }
    ;
    _.g.BA = function(a, b, c, d) {
        d = void 0 === d ? !1 : d;
        if (!a)
            throw Error("xa");
        fw(this);
        this.ke = a;
        this.dh = !1;
        b && _.Lv(this.wd, this.re, !1, this.ke);
        this.we = !0;
        this.Ji(c, !0, d)
    }
    ;
    _.g.start = function() {
        _.Xv(this, this.ku, [])
    }
    ;
    _.g.ku = function() {
        var a = this.Rb == cv("client_id") ? cv("login_hint") : void 0;
        var b = this.Rb == cv("client_id") ? cv("state") : void 0;
        this.FF = b;
        if (a)
            window.history.replaceState ? window.history.replaceState(null, document.title, window.location.href.split("#")[0]) : window.location.href.hash = "",
            this.BA(a, !0, !0, !0);
        else {
            var c = this;
            this.Sr(function(d) {
                c.we = !0;
                d && d.hint ? (fw(c),
                c.ke = d.hint,
                c.dh = !!d.disabled,
                c.dh ? c.dispatchEvent({
                    type: _.dw.Vq,
                    idpId: c.tb
                }) : c.BA(d.hint)) : (fw(c),
                c.ke = void 0,
                c.dh = !(!d || !d.disabled),
                c.dispatchEvent({
                    type: _.dw.dK,
                    autoOpenAuthUrl: !c.dh,
                    idpId: c.tb
                }))
            })
        }
    }
    ;
    _.g.pY = function() {
        var a = this;
        this.Sr(function(b) {
            b && b.hint ? b.disabled ? a.dispatchEvent({
                type: _.dw.Vq,
                idpId: a.tb
            }) : a.Ji(!0) : a.dispatchEvent({
                type: _.dw.dK,
                idpId: a.tb
            })
        })
    }
    ;
    _.g.TM = function() {
        _.Xv(this, this.pY, [])
    }
    ;
    _.g.Ji = function(a, b, c) {
        var d = this;
        this.wd.Ji(this.Rb, this.Oi, this.ke, this.re, function(e, f) {
            (f = f || e.error) ? "user_logged_out" == f ? (fw(d),
            d.dispatchEvent({
                type: _.dw.Vq,
                idpId: d.tb
            })) : (d.py = null,
            d.dispatchEvent({
                type: _.dw.ZV,
                idpId: d.tb,
                error: f
            })) : (d.py = e,
            d.kq = e.session_state,
            cw(d, e.expires_at),
            e.idpId = d.tb,
            b && d.FF && (e.state = d.FF,
            d.FF = void 0),
            d.dispatchEvent({
                type: _.dw.qK,
                idpId: d.tb,
                response: e
            }))
        }, this.Ba, a, !1, void 0 === c ? !1 : c)
    }
    ;
    _.g.revoke = _.ea(8);
    _.g.sR = _.ea(16);
    _.gw = function(a) {
        this.Sl = null;
        _.Zv.call(this, {}, a);
        this.we = !0
    }
    ;
    $u(_.gw, _.Zv);
    _.g = _.gw.prototype;
    _.g.setOptions = function(a) {
        if (!a.clientId)
            throw Error("wa");
        this.Rb = a.clientId;
        this.Ba = a.id;
        $v(this, a);
        aw(this, a)
    }
    ;
    _.g.Np = function(a) {
        this.Sl && (this.Sl({
            authResult: {
                error: "idpiframe_initialization_failed",
                details: a.error
            }
        }),
        this.Sl = null)
    }
    ;
    _.g.it = function(a) {
        if (this.Sl) {
            var b = this.Sl;
            this.Sl = null;
            b(a)
        }
    }
    ;
    _.g.Yr = _.ea(14);
    _.g.Sr = function(a) {
        this.Ej ? a(this.Cm()) : _.Xv(this, this.jD, [a])
    }
    ;
    _.g.jD = function(a) {
        Kv(this.wd, this.re, a)
    }
    ;
    _.hw = function(a, b, c) {
        a.Ej ? c(a.Cm()) : _.Xv(a, a.T2, [b, c])
    }
    ;
    _.gw.prototype.T2 = function(a, b) {
        this.wd.Ji(this.Rb, this.Oi, a, this.re, function(c, d) {
            d ? b({
                error: d
            }) : b(c)
        }, this.Ba, this.sY, this.S5)
    }
    ;
    _.gw.prototype.EP = _.ea(17);
    var iw = function(a) {
        return Array.prototype.concat.apply([], arguments)
    }, jw = function() {
        try {
            var a = Array.from((window.crypto || window.msCrypto).getRandomValues(new Uint8Array(64)))
        } catch (c) {
            a = [];
            for (var b = 0; 64 > b; b++)
                a[b] = Math.floor(256 * Math.random())
        }
        return _.Kh(a, 3).substring(0, 64)
    }, kw = function() {
        var a = navigator.userAgent.toLowerCase();
        return 0 > a.indexOf("edge/") && (-1 < a.indexOf("chrome/") || -1 < a.indexOf("crios/"))
    }, lw = function() {
        var a = navigator.userAgent.toLowerCase();
        return -1 < a.indexOf("firefox/") && 0 > a.indexOf("chrome/") && 0 > a.indexOf("crios/") && 0 > a.indexOf("safari/")
    }, mw = function(a, b, c) {
        if (!a.we)
            throw Error("sa");
        b ? _.Lv(a.wd, a.re, !0, void 0, c) : _.Lv(a.wd, a.re, !0, a.ke, c)
    }, nw = function(a) {
        if (!a.we)
            throw Error("sa");
        return a.py
    }, ow, pw, qw, rw, sw, tw, uw, vw, ww, yw;
    _.gw.prototype.EP = _.cb(17, function(a, b) {
        var c = this.wd
          , d = this.Rb
          , e = this.re
          , f = _.bv(this.Oi);
        delete f.response_type;
        _.Iv(c, "getOnlineCode", {
            clientId: d,
            loginHint: a,
            request: f,
            sessionSelector: e
        }, b)
    });
    _.ew.prototype.sR = _.cb(16, function(a) {
        nw(this) && nw(this).access_token && (this.wd.revoke(this.Rb, nw(this).access_token, a),
        mw(this, !0))
    });
    _.ew.prototype.Yr = _.cb(15, function() {
        var a = this;
        return function(b) {
            if (b && b.authResult && b.authResult.login_hint)
                if (a.iy() && a.Gq && (kw() || lw())) {
                    b = b.authResult;
                    var c = Date.now()
                      , d = b.expires_in;
                    b = {
                        access_token: b.access_token,
                        token_type: b.token_type,
                        login_hint: b.login_hint,
                        expires_in: d,
                        id_token: b.id_token,
                        scope: b.scope,
                        first_issued_at: c,
                        expires_at: c + 1E3 * d,
                        idpId: a.tb
                    };
                    a.py = b;
                    a.dispatchEvent({
                        type: _.dw.qK,
                        idpId: a.tb,
                        response: b
                    })
                } else
                    a.BA(b.authResult.login_hint, a.dh || b.authResult.login_hint != a.ke, !0, !0)
        }
    });
    _.gw.prototype.Yr = _.cb(14, function(a) {
        var b = this;
        return function(c) {
            c && c.authResult && c.authResult.login_hint ? b.Sr(function(d) {
                _.Lv(b.wd, b.re, d && d.disabled, c.authResult.login_hint, function() {
                    _.hw(b, c.authResult.login_hint, a)
                })
            }) : a(c && c.authResult && c.authResult.error ? c.authResult : c && c.authResult && !c.authResult.login_hint ? {
                error: "wrong_response_type"
            } : {
                error: "unknown_error"
            })
        }
    });
    _.Zv.prototype.bQ = _.cb(13, function() {
        this.Rb && _.Iv(this.wd, "startPolling", {
            clientId: this.Rb,
            origin: this.Xc,
            id: this.Lj
        })
    });
    _.Fv.prototype.revoke = _.cb(9, function(a, b, c) {
        _.Iv(this, "revoke", {
            clientId: a,
            token: b
        }, c)
    });
    _.ew.prototype.revoke = _.cb(8, function(a) {
        _.Xv(this, this.sR, [a])
    });
    ow = function() {
        var a = navigator.userAgent, b;
        if (b = !!a && -1 != a.indexOf("CriOS"))
            b = -1,
            (a = a.match(/CriOS\/(\d+)/)) && a[1] && (b = parseInt(a[1], 10) || -1),
            b = 48 > b;
        return b
    }
    ;
    pw = function() {
        var a = navigator.userAgent.toLowerCase();
        if (!(-1 < a.indexOf("safari/") && 0 > a.indexOf("chrome/") && 0 > a.indexOf("crios/") && 0 > a.indexOf("android")))
            return !1;
        var b = RegExp("version/(\\d+)\\.(\\d+)[\\.0-9]*").exec(navigator.userAgent.toLowerCase());
        if (!b || 3 > b.length)
            return !1;
        a = parseInt(b[1], 10);
        b = parseInt(b[2], 10);
        return 12 < a || 12 == a && 1 <= b
    }
    ;
    qw = function(a, b, c, d, e, f, h) {
        var k = _.lv(a, "authServerUrl");
        if (!k)
            throw Error("ca`" + a);
        a = _.bv(d);
        a.response_type = h || "permission";
        a.client_id = c;
        a.ss_domain = b;
        if (f && f.extraQueryParams)
            for (var l in f.extraQueryParams)
                a[l] = f.extraQueryParams[l];
        (b = e) && !(b = pw()) && (b = navigator.userAgent.toLowerCase(),
        -1 < b.indexOf("ipad;") || -1 < b.indexOf("iphone;") ? (b = RegExp("os (\\d+)_\\d+(_\\d+)? like mac os x").exec(navigator.userAgent.toLowerCase()),
        b = !b || 2 > b.length ? !1 : 14 <= parseInt(b[1], 10)) : b = !1);
        b && !a.prompt && (a.prompt = "select_account");
        k += 0 > k.indexOf("?") ? "?" : "&";
        b = [];
        for (var m in a)
            if (a.hasOwnProperty(m)) {
                c = a[m];
                if (null === c || void 0 === c)
                    c = "";
                b.push(encodeURIComponent(m) + "=" + encodeURIComponent(c))
            }
        return k + b.join("&")
    }
    ;
    rw = function(a, b, c, d) {
        if (!a.Rb)
            throw Error("ta");
        a.Lj = c || a.GW || "auth" + Math.floor(1E6 * Math.random() + 1);
        b = b || {};
        b.extraQueryParams = b.extraQueryParams || {};
        if (!b.extraQueryParams.redirect_uri) {
            var e = a.Xc.split("//");
            c = b.extraQueryParams;
            var f = e[0]
              , h = f.indexOf(":");
            0 < h && (f = f.substring(0, h));
            e = ["storagerelay://", f, "/", e[1], "?"];
            e.push("id=" + a.Lj);
            c.redirect_uri = e.join("")
        }
        return qw(a.tb, a.Yd, a.Rb, a.fr, !0, b, d)
    }
    ;
    sw = function(a, b, c) {
        if (!a.Rb)
            throw Error("ta");
        return qw(a.tb, a.Yd, a.Rb, a.fr, !1, b, c)
    }
    ;
    tw = function(a) {
        if (!a)
            return "permission token";
        var b = a.split(" ");
        if (-1 < b.indexOf("token") || -1 < b.indexOf("code") || -1 < b.indexOf("gsession"))
            return a;
        b.push("token");
        return b.join(" ")
    }
    ;
    uw = function(a, b) {
        a.qn && window.clearTimeout(a.qn);
        a.qn = window.setTimeout(function() {
            a.Lj == b && (_.nv = void 0,
            a.qn = null,
            a.Lj = void 0,
            a.it({
                authResult: {
                    error: "popup_closed_by_user"
                }
            }))
        }, 1E3)
    }
    ;
    vw = function(a, b, c) {
        if (!a.Rb)
            throw Error("ua");
        c = c || {};
        a.iy() && a.Gq && (kw() || lw()) && (c.responseType = tw(c.responseType));
        c = rw(a, c.sessionMeta, c.oneTimeId, c.responseType);
        (Object.hasOwnProperty.call(window, "ActiveXObject") && !window.ActiveXObject || ow()) && _.Xv(a, a.bQ, []);
        var d = a.Lj;
        a.LQ.open(c, b, function() {
            a.Lj == d && uw(a, d)
        }, function() {
            a.Lj = void 0;
            a.it({
                authResult: {
                    error: "popup_blocked_by_browser"
                }
            })
        })
    }
    ;
    ww = function(a, b, c) {
        a.Ej ? c(a.Cm()) : _.Xv(a, a.EP, [b, c])
    }
    ;
    _.xw = function(a) {
        for (var b = [], c = 0, d = 0; c < a.length; ) {
            var e = a[c++];
            if (128 > e)
                b[d++] = String.fromCharCode(e);
            else if (191 < e && 224 > e) {
                var f = a[c++];
                b[d++] = String.fromCharCode((e & 31) << 6 | f & 63)
            } else if (239 < e && 365 > e) {
                f = a[c++];
                var h = a[c++]
                  , k = a[c++];
                e = ((e & 7) << 18 | (f & 63) << 12 | (h & 63) << 6 | k & 63) - 65536;
                b[d++] = String.fromCharCode(55296 + (e >> 10));
                b[d++] = String.fromCharCode(56320 + (e & 1023))
            } else
                f = a[c++],
                h = a[c++],
                b[d++] = String.fromCharCode((e & 15) << 12 | (f & 63) << 6 | h & 63)
        }
        return b.join("")
    }
    ;
    yw = function(a) {
        var b = [];
        _.Lh(a, function(c) {
            b.push(c)
        });
        return b
    }
    ;
    _.zw = function(a, b) {
        _.si[b || "token"] = a
    }
    ;
    _.Aw = function(a) {
        delete _.si[a || "token"]
    }
    ;
    _.gv = {
        parse: function(a) {
            a = _.Vf("[" + String(a) + "]");
            if (!1 === a || 1 !== a.length)
                throw new SyntaxError("JSON parsing failed.");
            return a[0]
        },
        stringify: function(a) {
            return _.Wf(a)
        }
    };
    _.gw.prototype.XC = function(a, b) {
        _.Xv(this, this.gY, [a, b])
    }
    ;
    _.gw.prototype.gY = function(a, b) {
        this.wd.XC(this.Rb, a, this.Oi, this.re, b)
    }
    ;
    _.Fv.prototype.XC = function(a, b, c, d, e) {
        c = _.bv(c);
        _.Iv(this, "gsi:fetchLoginHint", {
            clientId: a,
            loginHint: b,
            request: c,
            sessionSelector: d
        }, e)
    }
    ;
    var Bw, Cw = ["client_id", "cookie_policy", "scope"], Dw = "client_id cookie_policy fetch_basic_profile hosted_domain scope openid_realm disable_token_refresh login_hint ux_mode redirect_uri state prompt oidc_spec_compliant nonce enable_serial_consent include_granted_scopes response_type session_selection plugin_name ack_extension_date gsiwebsdk".split(" "), Ew = ["authuser", "after_redirect", "access_type", "hl"], Fw = ["login_hint", "prompt"], Gw = {
        clientid: "client_id",
        cookiepolicy: "cookie_policy"
    }, Hw = ["approval_prompt", "authuser", "login_hint", "prompt", "hd"], Iw = ["login_hint", "g-oauth-window", "status"], Jw = Math.min(_.ff("oauth-flow/authWindowWidth", 599), screen.width - 20), Kw = Math.min(_.ff("oauth-flow/authWindowHeight", 600), screen.height - 30);
    var Lw = function(a) {
        _.fb.call(this, a)
    };
    _.L(Lw, _.fb);
    Lw.prototype.name = "gapi.auth2.ExternallyVisibleError";
    var Mw = function() {};
    Mw.prototype.select = function(a, b) {
        if (a.sessions && 1 == a.sessions.length && (a = a.sessions[0],
        a.login_hint)) {
            b(a);
            return
        }
        b()
    }
    ;
    var Nw = function() {};
    Nw.prototype.select = function(a, b) {
        if (a.sessions && a.sessions.length)
            for (var c = 0; c < a.sessions.length; c++) {
                var d = a.sessions[c];
                if (d.login_hint) {
                    b(d);
                    return
                }
            }
        b()
    }
    ;
    var Ow = function(a) {
        this.HW = a
    };
    Ow.prototype.select = function(a, b) {
        if (a.sessions)
            for (var c = 0; c < a.sessions.length; c++) {
                var d = a.sessions[c];
                if (d.session_state && d.session_state.extraQueryParams && d.session_state.extraQueryParams.authuser == this.HW) {
                    d.login_hint ? b(d) : b();
                    return
                }
            }
        b()
    }
    ;
    var Pw = function(a) {
        this.Ud = a;
        this.Vz = []
    };
    Pw.prototype.select = function(a) {
        var b = 0
          , c = this
          , d = function(e) {
            if (e)
                a(e);
            else {
                var f = c.Vz[b];
                f ? (b++,
                c.Ud.uy(function(h) {
                    h ? f.select(h, d) : d()
                })) : a()
            }
        };
        d()
    }
    ;
    var Qw = function(a) {
        a = new Pw(a);
        a.Vz.push(new Mw);
        return a
    }
      , Rw = function(a) {
        a = new Pw(a);
        a.Vz.push(new Nw);
        return a
    }
      , Sw = function(a, b) {
        void 0 === b || null === b ? b = Qw(a) : (a = new Pw(a),
        a.Vz.push(new Ow(b)),
        b = a);
        return b
    };
    var Tw = function(a) {
        this.nf = a;
        this.isActive = !0
    };
    Tw.prototype.remove = function() {
        this.isActive = !1
    }
    ;
    Tw.prototype.trigger = function() {}
    ;
    var Uw = function(a) {
        this.remove = function() {
            a.remove()
        }
        ;
        this.trigger = function() {
            a.trigger()
        }
    }
      , Vw = function() {
        this.Vb = []
    };
    Vw.prototype.add = function(a) {
        this.Vb.push(a)
    }
    ;
    Vw.prototype.notify = function(a) {
        for (var b = this.Vb, c = [], d = 0; d < b.length; d++) {
            var e = b[d];
            e.isActive && (c.push(e),
            _.dk(Ww(e.nf, a)))
        }
        this.Vb = c
    }
    ;
    var Ww = function(a, b) {
        return function() {
            a(b)
        }
    };
    var Yw = function(a) {
        this.Pb = null;
        this.L6 = new Xw(this);
        this.Vb = new Vw;
        void 0 != a && this.set(a)
    };
    Yw.prototype.set = function(a) {
        a != this.Pb && (this.Pb = a,
        this.L6.value = a,
        this.Vb.notify(this.Pb))
    }
    ;
    Yw.prototype.get = function() {
        return this.Pb
    }
    ;
    Yw.prototype.V = function(a) {
        a = new Zw(this,a);
        this.Vb.add(a);
        return a
    }
    ;
    Yw.prototype.get = Yw.prototype.get;
    var Zw = function(a, b) {
        Tw.call(this, b);
        this.A1 = a
    };
    _.L(Zw, Tw);
    Zw.prototype.trigger = function() {
        var a = this.nf;
        a(this.A1.get())
    }
    ;
    var Xw = function(a) {
        this.value = null;
        this.V = function(b) {
            return new Uw(a.V(b))
        }
    };
    var $w = {
        c9: "fetch_basic_profile",
        d$: "login_hint",
        Baa: "prompt",
        Iaa: "redirect_uri",
        Zaa: "scope",
        oca: "ux_mode",
        Kba: "state"
    }
      , ax = function(a) {
        this.Ha = {};
        if (a && !_.Xi(a))
            if ("function" == typeof a.get)
                this.Ha = a.get();
            else
                for (var b in $w) {
                    var c = $w[b];
                    c in a && (this.Ha[c] = a[c])
                }
    };
    ax.prototype.get = function() {
        return this.Ha
    }
    ;
    ax.prototype.jS = function(a) {
        this.Ha.scope = a;
        return this
    }
    ;
    ax.prototype.ts = function() {
        return this.Ha.scope
    }
    ;
    var bx = function(a, b) {
        var c = a.Ha.scope;
        b = iw(b.split(" "), c ? c.split(" ") : []);
        _.Dh(b);
        a.Ha.scope = b.join(" ")
    };
    _.g = ax.prototype;
    _.g.v5 = function(a) {
        this.Ha.prompt = a;
        return this
    }
    ;
    _.g.AZ = function() {
        return this.Ha.prompt
    }
    ;
    _.g.W4 = function() {
        _.$f.warn("Property app_package_name no longer supported and was not set");
        return this
    }
    ;
    _.g.AY = function() {
        _.$f.warn("Property app_package_name no longer supported")
    }
    ;
    _.g.Ve = function(a) {
        this.Ha.state = a
    }
    ;
    _.g.getState = function() {
        return this.Ha.state
    }
    ;
    var cx = function() {
        return ["toolbar=no", "location=" + (window.opera ? "no" : "yes"), "directories=no,status=no,menubar=no,scrollbars=yes,resizable=yes,copyhistory=no", "width=" + Jw, "height=" + Kw, "top=" + (screen.height - Kw) / 2, "left=" + (screen.width - Jw) / 2].join()
    }
      , dx = function(a) {
        a = a && a.id_token;
        if (!a || !a.split(".")[1])
            return null;
        a = (a.split(".")[1] + "...").replace(/^((....)+).?.?.?$/, "$1");
        return JSON.parse(_.xw(yw(a)))
    }
      , ex = function() {
        Bw = _.ff("auth2/idpValue", "google");
        var a = _.ff("oauth-flow/authUrl", "https://accounts.google.com/o/oauth2/auth")
          , b = _.ff("oauth-flow/idpIframeUrl", "https://accounts.google.com/o/oauth2/iframe");
        _.mv(Bw, {
            authServerUrl: a,
            idpIFrameUrl: b
        })
    }
      , fx = function(a, b, c) {
        for (var d = 0; d < b.length; d++) {
            var e = b[d];
            if (d === b.length - 1) {
                a[e] = c;
                break
            }
            _.Rb(a[e]) || (a[e] = {});
            a = a[e]
        }
    }
      , gx = function() {
        var a = window.location.origin;
        a || (a = window.location.protocol + "//" + window.location.host);
        return a
    }
      , ix = function() {
        var a = hx();
        a.storage_path && window.sessionStorage.setItem(a.storage_path, gx() + window.location.pathname);
        if ("enforced" == a.status.toLowerCase())
            throw new Lw("gapi.auth2 is disabled on this website, but it is still used on page " + window.location.href);
        "informational" == a.status.toLowerCase() && _.$f.warn("gapi.auth2 is disabled on this website, but it is still used on page " + window.location.href)
    };
    var jx = function(a) {
        var b = a ? (b = dx(a)) ? b.sub : null : null;
        this.Ba = b;
        this.zc = a ? _.Uj(a) : null
    };
    _.g = jx.prototype;
    _.g.getId = function() {
        return this.Ba
    }
    ;
    _.g.rD = function() {
        var a = dx(this.zc);
        return a ? a.hd : null
    }
    ;
    _.g.Vf = function() {
        return !!this.zc
    }
    ;
    _.g.Fk = function(a) {
        if (a)
            return this.zc;
        a = kx;
        var b = _.Uj(this.zc);
        !a.Tx || a.pE || a.d0 || (delete b.access_token,
        delete b.scope);
        return b
    }
    ;
    _.g.qG = function() {
        return kx.qG()
    }
    ;
    _.g.Zj = function() {
        this.zc = null
    }
    ;
    _.g.dZ = function() {
        return this.zc ? this.zc.scope : null
    }
    ;
    _.g.update = function(a) {
        this.Ba = a.Ba;
        this.zc = a.zc;
        this.zc.id_token ? this.tv = new lx(this.zc) : this.tv && (this.tv = null)
    }
    ;
    var mx = function(a) {
        return a.zc && "object" == typeof a.zc.session_state ? _.Uj(a.zc.session_state.extraQueryParams || {}) : {}
    };
    _.g = jx.prototype;
    _.g.hD = function() {
        var a = mx(this);
        return a && void 0 !== a.authuser && null !== a.authuser ? a.authuser : null
    }
    ;
    _.g.Yj = function(a) {
        var b = kx
          , c = new ax(a);
        b.pE = c.ts() ? !0 : !1;
        kx.Tx && bx(c, "openid profile email");
        return new _.ok(function(d, e) {
            var f = mx(this);
            f.login_hint = this.getId();
            f.scope = c.ts();
            nx(b, d, e, f)
        }
        ,this)
    }
    ;
    _.g.vs = function(a) {
        return new _.ok(function(b, c) {
            var d = a || {}
              , e = kx;
            d.login_hint = this.getId();
            e.vs(d).then(b, c)
        }
        ,this)
    }
    ;
    _.g.SZ = function(a) {
        return this.Yj(a)
    }
    ;
    _.g.disconnect = function() {
        return kx.disconnect()
    }
    ;
    _.g.DY = function() {
        return this.tv
    }
    ;
    _.g.Ex = function(a) {
        if (!this.Vf())
            return !1;
        var b = this.zc && this.zc.scope ? this.zc.scope.split(" ") : "";
        return _.fc(a ? a.split(" ") : [], function(c) {
            return _.hb(b, c)
        })
    }
    ;
    var lx = function(a) {
        a = dx(a);
        this.xY = a.sub;
        this.yf = a.name;
        this.OZ = a.given_name;
        this.eY = a.family_name;
        this.IO = a.picture;
        this.fw = a.email
    };
    _.g = lx.prototype;
    _.g.getId = function() {
        return this.xY
    }
    ;
    _.g.xg = function() {
        return this.yf
    }
    ;
    _.g.bZ = function() {
        return this.OZ
    }
    ;
    _.g.VY = function() {
        return this.eY
    }
    ;
    _.g.jZ = function() {
        return this.IO
    }
    ;
    _.g.Zr = function() {
        return this.fw
    }
    ;
    var hx, ox;
    hx = function() {
        var a = _.hi.get("G_AUTH2_MIGRATION");
        if (!a)
            return {
                status: "none"
            };
        a = /(enforced|informational)(?::(.*))?/i.exec(a);
        return a ? {
            status: a[1].toLowerCase(),
            storage_path: a[2]
        } : (_.$f.warn("The G_AUTH2_MIGRATION cookie value is not valid."),
        {
            status: "none"
        })
    }
    ;
    ox = function(a) {
        var b = location;
        if (a && "none" != a)
            return "single_host_origin" == a ? b.protocol + "//" + b.host : a
    }
    ;
    _.px = function(a) {
        if (!a)
            throw new Lw("No cookiePolicy");
        var b = window.location.hostname;
        "single_host_origin" == a && (a = window.location.protocol + "//" + b);
        if ("none" == a)
            return null;
        var c = /^(https?:\/\/)([0-9.\-_A-Za-z]+)(?::(\d+))?$/.exec(a);
        if (!c)
            throw new Lw("Invalid cookiePolicy");
        a = c[2];
        c = c[1];
        var d = {};
        d.dotValue = a.split(".").length;
        d.isSecure = -1 != c.indexOf("https");
        d.domain = a;
        if (!_.bj(b, "." + a) && !_.bj(b, a))
            throw new Lw("Invalid cookiePolicy domain");
        return d
    }
    ;
    var rx = function(a) {
        var b = a || {}
          , c = qx();
        _.cc(Dw, function(d) {
            "undefined" === typeof b[d] && "undefined" !== typeof c[d] && (b[d] = c[d])
        });
        return b
    }
      , qx = function() {
        for (var a = {}, b = document.getElementsByTagName("meta"), c = 0; c < b.length; ++c)
            if (b[c].name) {
                var d = b[c].name;
                if (0 == d.indexOf("google-signin-")) {
                    d = d.substring(14);
                    var e = b[c].content;
                    Gw[d] && (d = Gw[d]);
                    _.hb(Dw, d) && e && (a[d] = "true" == e ? !0 : "false" == e ? !1 : e)
                }
            }
        return a
    }
      , sx = function(a) {
        return String(a).replace(/_([a-z])/g, function(b, c) {
            return c.toUpperCase()
        })
    }
      , tx = function(a) {
        _.cc(Dw, function(b) {
            var c = sx(b);
            "undefined" !== typeof a[c] && "undefined" === typeof a[b] && (a[b] = a[c],
            delete a[c])
        })
    }
      , ux = function(a) {
        a = rx(a);
        tx(a);
        a.cookie_policy || (a.cookie_policy = "single_host_origin");
        var b = Dw + Ew, c;
        for (c in a)
            0 > b.indexOf(c) && delete a[c];
        return a
    }
      , vx = function(a, b) {
        if (!a)
            throw new Lw("Empty initial options.");
        for (var c = 0; c < Cw.length; ++c)
            if (!(b && "scope" == Cw[c] || a[Cw[c]]))
                throw new Lw("Missing required parameter '" + Cw[c] + "'");
        _.px(a.cookie_policy)
    }
      , xx = function(a) {
        var b = {
            authParameters: {
                redirect_uri: void 0,
                response_type: "token id_token",
                scope: a.scope,
                "openid.realm": a.openid_realm,
                include_granted_scopes: !0
            },
            clientId: a.client_id,
            crossSubDomains: !0,
            domain: ox(a.cookie_policy),
            disableTokenRefresh: !!a.disable_token_refresh,
            idpId: Bw
        };
        wx(b, a);
        _.cc(Fw, function(d) {
            a[d] && (b.authParameters[d] = a[d])
        });
        "boolean" == typeof a.enable_serial_consent && (b.enableSerialConsent = a.enable_serial_consent);
        if (a.plugin_name)
            b.pluginName = a.plugin_name;
        else {
            var c = _.ff("auth2/pluginName");
            c && (b.pluginName = c)
        }
        a.ack_extension_date && (b.authParameters.ack_extension_date = a.ack_extension_date,
        b.ackExtensionDate = a.ack_extension_date);
        return b
    }
      , wx = function(a, b) {
        var c = b.oidc_spec_compliant;
        b = b.nonce;
        c && (a.spec_compliant = c,
        b = b || jw());
        b && (a.authParameters.nonce = b,
        a.forceTokenRefresh = !0,
        a.skipTokenCache = !0)
    }
      , Cx = function(a) {
        var b = a.client_id
          , c = a.cookie_policy
          , d = a.scope
          , e = a.openid_realm
          , f = a.hosted_domain
          , h = a.oidc_spec_compliant
          , k = a.nonce
          , l = yx(a)
          , m = {
            authParameters: {
                response_type: l,
                scope: d,
                "openid.realm": e
            },
            rpcAuthParameters: {
                response_type: l,
                scope: d,
                "openid.realm": e
            },
            clientId: b,
            crossSubDomains: !0,
            domain: ox(c),
            idpId: Bw
        };
        f && (m.authParameters.hd = f,
        m.rpcAuthParameters.hd = f);
        h && (m.rpcAuthParameters.spec_compliant = h,
        k = k || jw());
        k && (m.authParameters.nonce = k,
        m.rpcAuthParameters.nonce = k,
        m.forceTokenRefresh = !0,
        m.skipTokenCache = !0);
        _.cc(Fw.concat(Ew), function(n) {
            a[n] && (m.authParameters[n] = a[n])
        });
        void 0 !== a.authuser && null !== a.authuser && (m.authParameters.authuser = a.authuser);
        "boolean" == typeof a.include_granted_scopes && (b = new zx(a.response_type || "token"),
        Ax(b) && (m.authParameters.include_granted_scopes = a.include_granted_scopes),
        Bx(b) && (m.rpcAuthParameters.include_granted_scopes = a.include_granted_scopes,
        !1 === a.include_granted_scopes && (m.forceTokenRefresh = !0,
        m.skipTokenCache = !0)));
        "boolean" == typeof a.enable_serial_consent && (m.enableSerialConsent = a.enable_serial_consent);
        a.plugin_name ? m.pluginName = a.plugin_name : (b = _.ff("auth2/pluginName")) && (m.pluginName = b);
        a.ack_extension_date && (m.authParameters.ack_extension_date = a.ack_extension_date,
        m.rpcAuthParameters.ack_extension_date = a.ack_extension_date,
        m.ackExtensionDate = a.ack_extension_date);
        return m
    }
      , yx = function(a) {
        a = new zx(a.response_type || "token");
        var b = [];
        Bx(a) && b.push("token");
        Dx(a, "id_token") && b.push("id_token");
        0 == b.length && (b = ["token", "id_token"]);
        return b.join(" ")
    }
      , Ex = ["permission", "id_token"]
      , Fx = /(^|[^_])token/
      , zx = function(a) {
        this.bq = [];
        this.IE(a)
    };
    zx.prototype.IE = function(a) {
        a ? ((0 <= a.indexOf("permission") || a.match(Fx)) && this.bq.push("permission"),
        0 <= a.indexOf("id_token") && this.bq.push("id_token"),
        0 <= a.indexOf("code") && this.bq.push("code")) : this.bq = Ex
    }
    ;
    var Ax = function(a) {
        return Dx(a, "code")
    }
      , Bx = function(a) {
        return Dx(a, "permission")
    };
    zx.prototype.toString = function() {
        return this.bq.join(" ")
    }
    ;
    var Dx = function(a, b) {
        var c = !1;
        _.cc(a.bq, function(d) {
            d == b && (c = !0)
        });
        return c
    };
    var Hx = function(a, b, c) {
        this.hn = b;
        this.n2 = a;
        for (var d in a)
            a.hasOwnProperty(d) && Gx(this, d);
        if (c && c.length)
            for (a = 0; a < c.length; a++)
                this[c[a]] = this.hn[c[a]]
    }
      , Gx = function(a, b) {
        a[b] = function() {
            return a.n2[b].apply(a.hn, arguments)
        }
    };
    Hx.prototype.then = function(a, b, c) {
        var d = this;
        return _.sk().then(function() {
            return Ix(d.hn, a, b, c)
        })
    }
    ;
    _.Xj(Hx);
    var kx, Jx, Lx;
    kx = null;
    _.Kx = function() {
        return kx ? Jx() : null
    }
    ;
    Jx = function() {
        return new Hx(Lx.prototype,kx,["currentUser", "isSignedIn"])
    }
    ;
    Lx = function(a) {
        delete a.include_granted_scopes;
        this.Ha = xx(a);
        this.tX = a.cookie_policy;
        this.d0 = !!a.scope;
        (this.Tx = !1 !== a.fetch_basic_profile) && (this.Ha.authParameters.scope = Mx(this, "openid profile email"));
        _.ei.GSI_SUPPORT_BLOCKED_3P_COOKIES && (this.Gq = this.Ha.supportBlocked3PCookies = !0);
        this.Gs = a.hosted_domain;
        this.I6 = a.ux_mode || "popup";
        this.C3 = a.redirect_uri || null;
        this.FE()
    }
    ;
    Lx.prototype.FE = function() {
        this.currentUser = new Yw(new jx(null));
        this.isSignedIn = new Yw(!1);
        this.Ud = new _.ew(this.Ha);
        this.Zx = this.vp = null;
        this.i1 = new _.ok(function(a, b) {
            this.vp = a;
            this.Zx = b
        }
        ,this);
        this.Qy = {};
        this.Ps = !0;
        Nx(this);
        this.Ud.start()
    }
    ;
    var Nx = function(a) {
        a.Ud.addEventListener("error", function(b) {
            a.Ps && a.vp && (a.Ps = !1,
            a.Zx({
                error: b.error,
                details: b.details
            }),
            a.vp = null,
            a.Zx = null)
        });
        a.Ud.addEventListener("authResult", function(b) {
            b && b.authResult && a.ef(b);
            a.Ud.Yr()(b)
        });
        a.Ud.addEventListener("tokenReady", function(b) {
            var c = new jx(b.response);
            if (a.Gs && a.Gs != c.rD())
                a.ef({
                    type: "tokenFailed",
                    reason: "Account domain does not match hosted_domain specified by gapi.auth2.init.",
                    accountDomain: c.rD(),
                    expectedDomain: a.Gs
                });
            else {
                a.currentUser.get().update(c);
                var d = a.currentUser;
                d.Vb.notify(d.Pb);
                a.isSignedIn.set(!0);
                c = c.hD();
                (d = _.px(a.tX)) && c && _.hi.set(["G_AUTHUSER_", "https:" === window.location.protocol && d.Je ? "S" : "H", d.ei].join(""), c, {
                    domain: d.domain,
                    secure: d.isSecure
                });
                _.zw(b.response);
                a.ef(b)
            }
        });
        a.Ud.addEventListener("noSessionBound", function(b) {
            a.Ps && b.autoOpenAuthUrl ? (a.Ps = !1,
            Qw(a.Ud).select(function(c) {
                if (c && c.login_hint) {
                    var d = a.Ud;
                    _.Xv(d, d.BA, [c.login_hint, !0])
                } else
                    a.currentUser.set(new jx(null)),
                    a.isSignedIn.set(!1),
                    _.Aw(),
                    a.ef(b)
            })) : (a.currentUser.set(new jx(null)),
            a.isSignedIn.set(!1),
            _.Aw(),
            a.ef(b))
        });
        a.Ud.addEventListener("tokenFailed", function(b) {
            a.ef(b)
        });
        a.Ud.addEventListener("userLoggedOut", function(b) {
            a.currentUser.get().Zj();
            var c = a.currentUser;
            c.Vb.notify(c.Pb);
            a.isSignedIn.set(!1);
            _.Aw();
            a.ef(b)
        })
    }
      , Ix = function(a, b, c, d) {
        return a.i1.then(function(e) {
            if (b)
                return b(e.QZ)
        }, c, d)
    };
    Lx.prototype.ef = function(a) {
        if (a) {
            this.Ps = !1;
            var b = a.type || "";
            if (this.Qy[b])
                this.Qy[b](a);
            this.vp && (this.vp({
                QZ: this
            }),
            this.Zx = this.vp = null)
        }
    }
    ;
    var Ox = function(a, b) {
        _.lb(b, function(c, d) {
            a.Qy[d] = function(e) {
                a.Qy = {};
                c(e)
            }
        })
    }
      , nx = function(a, b, c, d) {
        d = _.Uj(d);
        a.Gs && (d.hd = a.Gs);
        var e = d.ux_mode || a.I6;
        delete d.ux_mode;
        delete d.app_package_name;
        var f = {
            sessionMeta: {
                extraQueryParams: d
            },
            responseType: "permission id_token"
        };
        "redirect" == e ? (d.redirect_uri || (d.redirect_uri = a.C3 || gx() + window.location.pathname),
        Px(a, f)) : (delete d.redirect_uri,
        Qx(a, f),
        Ox(a, {
            authResult: function(h) {
                h.authResult && h.authResult.error ? c(h.authResult) : Ox(a, {
                    tokenReady: function() {
                        b(a.currentUser.get())
                    },
                    tokenFailed: c
                })
            }
        }))
    };
    Lx.prototype.Yj = function(a) {
        return new _.ok(function(b, c) {
            var d = new ax(a);
            this.pE = d.ts() ? !0 : !1;
            this.Tx ? (d.Ha.fetch_basic_profile = !0,
            bx(d, "email profile openid")) : d.Ha.fetch_basic_profile = !1;
            var e = Mx(this, d.ts());
            d.jS(e);
            nx(this, b, c, d.get())
        }
        ,this)
    }
    ;
    Lx.prototype.vs = function(a) {
        var b = a || {};
        this.pE = !!b.scope;
        a = Mx(this, b.scope);
        if ("" == a)
            return _.tk({
                error: "Missing required parameter: scope"
            });
        var c = {
            scope: a,
            access_type: "offline",
            include_granted_scopes: !0
        };
        _.cc(Hw, function(d) {
            null != b[d] && (c[d] = b[d])
        });
        c.hasOwnProperty("prompt") || c.hasOwnProperty("approval_prompt") || (c.prompt = "consent");
        "postmessage" == b.redirect_uri || void 0 == b.redirect_uri ? a = Rx(this, c) : (c.redirect_uri = b.redirect_uri,
        Px(this, {
            sessionMeta: {
                extraQueryParams: c
            },
            responseType: "code id_token"
        }),
        a = _.sk({
            message: "Redirecting to IDP."
        }));
        return a
    }
    ;
    var Rx = function(a, b) {
        b.origin = gx();
        delete b.redirect_uri;
        Qx(a, {
            sessionMeta: {
                extraQueryParams: b
            },
            responseType: "code permission id_token"
        });
        return new _.ok(function(c, d) {
            Ox(this, {
                authResult: function(e) {
                    (e = e && e.authResult) && e.code ? c({
                        code: e.code
                    }) : d(e && e.error ? e : {
                        error: "unknown_error"
                    })
                }
            })
        }
        ,a)
    }
      , Qx = function(a, b) {
        fx(b, ["sessionMeta", "extraQueryParams", "gsiwebsdk"], "2");
        vw(a.Ud, cx(), b)
    }
      , Px = function(a, b) {
        fx(b, ["sessionMeta", "extraQueryParams", "gsiwebsdk"], "2");
        b = b || {};
        window.location.assign(sw(a.Ud, b.sessionMeta, b.responseType))
    };
    Lx.prototype.Zj = function(a) {
        var b = a || !1;
        return new _.ok(function(c) {
            mw(this.Ud, b, function() {
                c()
            })
        }
        ,this)
    }
    ;
    Lx.prototype.qN = function() {
        return this.Ha.authParameters.scope
    }
    ;
    var Mx = function(a, b) {
        a = a.qN();
        b = iw(b ? b.split(" ") : [], a ? a.split(" ") : []);
        _.Dh(b);
        return b.join(" ")
    };
    Lx.prototype.qG = function() {
        var a = this;
        return new _.ok(function(b, c) {
            Ox(a, {
                noSessionBound: c,
                tokenFailed: c,
                userLoggedOut: c,
                tokenReady: function(d) {
                    b(d.response)
                }
            });
            a.Ud.TM()
        }
        )
    }
    ;
    Lx.prototype.SK = function(a, b, c, d) {
        if (a = "string" === typeof a ? document.getElementById(a) : a) {
            var e = this;
            _.wj(a, "click", function() {
                var f = b;
                "function" == typeof b && (f = b());
                e.Yj(f).then(function(h) {
                    c && c(h)
                }, function(h) {
                    d && d(h)
                })
            })
        } else
            d && d({
                error: "Could not attach click handler to the element. Reason: element not found."
            })
    }
    ;
    Lx.prototype.disconnect = function() {
        return new _.ok(function(a) {
            this.Ud.revoke(function() {
                a()
            })
        }
        ,this)
    }
    ;
    Lx.prototype.attachClickHandler = Lx.prototype.SK;
    var Sx;
    _.ok.prototype["catch"] = _.ok.prototype.ru;
    Sx = null;
    _.Tx = function(a) {
        ix();
        a = ux(a);
        if (kx) {
            if (_.Tj(a, Sx || {}))
                return Jx();
            throw new Lw("gapi.auth2 has been initialized with different options. Consider calling gapi.auth2.getAuthInstance() instead of gapi.auth2.init().");
        }
        vx(a, !1 !== a.fetch_basic_profile);
        ex();
        Sx = a;
        kx = new Lx(a);
        _.Ye.ga = 1;
        return Jx()
    }
    ;
    var Vx, Xx, Ux, Zx, Yx, $x;
    _.Wx = function(a, b) {
        ix();
        ex();
        a = ux(a);
        vx(a);
        var c = Cx(a)
          , d = new _.gw(c);
        "none" == a.prompt ? Ux(d, a, function(e) {
            e.status = e.error ? {
                signed_in: !1,
                method: null,
                google_logged_in: !1
            } : {
                signed_in: !0,
                method: "AUTO",
                google_logged_in: !0
            };
            b(e)
        }) : Vx(d, a, function(e) {
            if (e.error)
                e.status = {
                    signed_in: !1,
                    method: null,
                    google_logged_in: !1
                };
            else {
                var f = e.access_token || e.id_token;
                e.status = {
                    signed_in: !!f,
                    method: "PROMPT",
                    google_logged_in: !!f
                }
            }
            e["g-oauth-window"] = d.LQ.Ih;
            b(e)
        })
    }
    ;
    Vx = function(a, b, c) {
        var d = new zx(b.response_type);
        c = Xx(a, d, c);
        var e = {
            responseType: d.toString()
        };
        fx(e, ["sessionMeta", "extraQueryParams", "gsiwebsdk"], b.gsiwebsdk || "2");
        Ax(d) && fx(e, ["sessionMeta", "extraQueryParams", "access_type"], b.access_type || "offline");
        b.redirect_uri && fx(e, ["sessionMeta", "extraQueryParams", "redirect_uri"], b.redirect_uri);
        b.state && fx(e, ["sessionMeta", "extraQueryParams", "state"], b.state);
        b = cx();
        a.Ej ? c({
            authResult: {
                error: "idpiframe_initialization_failed",
                details: a.Cm().error
            }
        }) : (a.Sl = c,
        vw(a, b, e))
    }
    ;
    Xx = function(a, b, c) {
        if (Bx(b)) {
            var d = Yx(c);
            return function(e) {
                e && e.authResult && !e.authResult.error ? a.Yr(function(f) {
                    f && !f.error ? (f = _.Uj(f),
                    Ax(b) && (f.code = e.authResult.code),
                    d(f)) : d(f ? f : {
                        error: "unknown_error"
                    })
                })(e) : d(e && e.authResult ? e.authResult : {
                    error: "unknown_error"
                })
            }
        }
        return function(e) {
            e && e.authResult && !e.authResult.error ? c(_.Uj(e.authResult)) : c(e && e.authResult ? e.authResult : {
                error: "unknown_error"
            })
        }
    }
    ;
    Ux = function(a, b, c) {
        if (Ax(new zx(b.response_type)) && "offline" == b.access_type)
            c({
                error: "immediate_failed",
                error_subtype: "access_denied"
            });
        else {
            var d = Yx(c);
            b.login_hint ? a.XC(b.login_hint, function(e) {
                e ? Zx(a, b, e, d) : c({
                    error: "immediate_failed",
                    error_subtype: "access_denied"
                })
            }) : void 0 !== b.authuser && null !== b.authuser ? Sw(a, b.authuser).select(function(e) {
                e && e.login_hint ? Zx(a, b, e.login_hint, d) : d({
                    error: "immediate_failed",
                    error_subtype: "access_denied"
                })
            }) : a.Sr(function(e) {
                e && e.hint ? Zx(a, b, e.hint, d) : e && e.disabled ? d({
                    error: "immediate_failed",
                    error_subtype: "no_user_bound"
                }) : ("first_valid" == b.session_selection ? Rw(a) : Qw(a)).select(function(f) {
                    f && f.login_hint ? Zx(a, b, f.login_hint, d) : d({
                        error: "immediate_failed",
                        error_subtype: "no_user_bound"
                    })
                })
            })
        }
    }
    ;
    Zx = function(a, b, c, d) {
        b = new zx(b.response_type);
        var e = 0
          , f = {}
          , h = function(k) {
            !k || k.error ? d(k) : (e--,
            _.Zi(f, k),
            0 == e && d(f))
        };
        (Bx(b) || Dx(b, "id_token")) && e++;
        Ax(b) && e++;
        (Bx(b) || Dx(b, "id_token")) && _.hw(a, c, h);
        Ax(b) && ww(a, c, h)
    }
    ;
    Yx = function(a) {
        return function(b) {
            if (!b || b.error)
                _.Aw(),
                b ? a(b) : a({
                    error: "unknown_error"
                });
            else {
                if (b.access_token) {
                    var c = _.Uj(b);
                    $x(c);
                    delete c.id_token;
                    delete c.code;
                    _.zw(c)
                }
                a(b)
            }
        }
    }
    ;
    $x = function(a) {
        _.cc(Iw, function(b) {
            delete a[b]
        })
    }
    ;
    _.E("gapi.auth2.init", _.Tx);
    _.E("gapi.auth2.authorize", function(a, b) {
        if (null != kx)
            throw new Lw("gapi.auth2.authorize cannot be called after GoogleAuth has been initialized (i.e. with a call to gapi.auth2.init, or gapi.client.init when given a 'clientId' and a 'scope' parameters).");
        _.Wx(a, function(c) {
            $x(c);
            b(c)
        })
    });
    _.E("gapi.auth2._gt", function() {
        return _.ti()
    });
    _.E("gapi.auth2.enableDebugLogs", function(a) {
        a = !1 !== a;
        _.Wu = "0" != a && !!a
    });
    _.E("gapi.auth2.getAuthInstance", _.Kx);
    _.E("gapi.auth2.BasicProfile", lx);
    _.E("gapi.auth2.BasicProfile.prototype.getId", lx.prototype.getId);
    _.E("gapi.auth2.BasicProfile.prototype.getName", lx.prototype.xg);
    _.E("gapi.auth2.BasicProfile.prototype.getGivenName", lx.prototype.bZ);
    _.E("gapi.auth2.BasicProfile.prototype.getFamilyName", lx.prototype.VY);
    _.E("gapi.auth2.BasicProfile.prototype.getImageUrl", lx.prototype.jZ);
    _.E("gapi.auth2.BasicProfile.prototype.getEmail", lx.prototype.Zr);
    _.E("gapi.auth2.GoogleAuth", Lx);
    _.E("gapi.auth2.GoogleAuth.prototype.attachClickHandler", Lx.prototype.SK);
    _.E("gapi.auth2.GoogleAuth.prototype.disconnect", Lx.prototype.disconnect);
    _.E("gapi.auth2.GoogleAuth.prototype.grantOfflineAccess", Lx.prototype.vs);
    _.E("gapi.auth2.GoogleAuth.prototype.signIn", Lx.prototype.Yj);
    _.E("gapi.auth2.GoogleAuth.prototype.signOut", Lx.prototype.Zj);
    _.E("gapi.auth2.GoogleAuth.prototype.getInitialScopes", Lx.prototype.qN);
    _.E("gapi.auth2.GoogleUser", jx);
    _.E("gapi.auth2.GoogleUser.prototype.grant", jx.prototype.SZ);
    _.E("gapi.auth2.GoogleUser.prototype.getId", jx.prototype.getId);
    _.E("gapi.auth2.GoogleUser.prototype.isSignedIn", jx.prototype.Vf);
    _.E("gapi.auth2.GoogleUser.prototype.getAuthResponse", jx.prototype.Fk);
    _.E("gapi.auth2.GoogleUser.prototype.getBasicProfile", jx.prototype.DY);
    _.E("gapi.auth2.GoogleUser.prototype.getGrantedScopes", jx.prototype.dZ);
    _.E("gapi.auth2.GoogleUser.prototype.getHostedDomain", jx.prototype.rD);
    _.E("gapi.auth2.GoogleUser.prototype.grantOfflineAccess", jx.prototype.vs);
    _.E("gapi.auth2.GoogleUser.prototype.hasGrantedScopes", jx.prototype.Ex);
    _.E("gapi.auth2.GoogleUser.prototype.reloadAuthResponse", jx.prototype.qG);
    _.E("gapi.auth2.LiveValue", Yw);
    _.E("gapi.auth2.LiveValue.prototype.listen", Yw.prototype.V);
    _.E("gapi.auth2.LiveValue.prototype.get", Yw.prototype.get);
    _.E("gapi.auth2.SigninOptionsBuilder", ax);
    _.E("gapi.auth2.SigninOptionsBuilder.prototype.getAppPackageName", ax.prototype.AY);
    _.E("gapi.auth2.SigninOptionsBuilder.prototype.setAppPackageName", ax.prototype.W4);
    _.E("gapi.auth2.SigninOptionsBuilder.prototype.getScope", ax.prototype.ts);
    _.E("gapi.auth2.SigninOptionsBuilder.prototype.setScope", ax.prototype.jS);
    _.E("gapi.auth2.SigninOptionsBuilder.prototype.getPrompt", ax.prototype.AZ);
    _.E("gapi.auth2.SigninOptionsBuilder.prototype.setPrompt", ax.prototype.v5);
    _.E("gapi.auth2.SigninOptionsBuilder.prototype.get", ax.prototype.get);
    _.jf = _.jf || {};
    (function() {
        function a(b) {
            var c = "";
            if (3 == b.nodeType || 4 == b.nodeType)
                c = b.nodeValue;
            else if (b.innerText)
                c = b.innerText;
            else if (b.innerHTML)
                c = b.innerHTML;
            else if (b.firstChild) {
                c = [];
                for (b = b.firstChild; b; b = b.nextSibling)
                    c.push(a(b));
                c = c.join("")
            }
            return c
        }
        _.jf.createElement = function(b) {
            if (!document.body || document.body.namespaceURI)
                try {
                    var c = document.createElementNS("http://www.w3.org/1999/xhtml", b)
                } catch (d) {}
            return c || document.createElement(b)
        }
        ;
        _.jf.CL = function(b) {
            var c = _.jf.createElement("iframe");
            try {
                var d = ["<", "iframe"], e = b || {}, f;
                for (f in e)
                    e.hasOwnProperty(f) && (d.push(" "),
                    d.push(f),
                    d.push('="'),
                    d.push(_.jf.IC(e[f])),
                    d.push('"'));
                d.push("></");
                d.push("iframe");
                d.push(">");
                var h = _.jf.createElement(d.join(""));
                h && (!c || h.tagName == c.tagName && h.namespaceURI == c.namespaceURI) && (c = h)
            } catch (l) {}
            d = c;
            b = b || {};
            for (var k in b)
                b.hasOwnProperty(k) && (d[k] = b[k]);
            return c
        }
        ;
        _.jf.aN = function() {
            if (document.body)
                return document.body;
            try {
                var b = document.getElementsByTagNameNS("http://www.w3.org/1999/xhtml", "body");
                if (b && 1 == b.length)
                    return b[0]
            } catch (c) {}
            return document.documentElement || document
        }
        ;
        _.jf.Eea = function(b) {
            return a(b)
        }
    }
    )();
    _.Lg = window.gapi && window.gapi.util || {};
    _.Lg = _.Lg = {};
    _.Lg.getOrigin = function(a) {
        return _.Ng(a)
    }
    ;
    _.Ly = function(a) {
        if (0 !== a.indexOf("GCSC"))
            return null;
        var b = {
            Hi: !1
        };
        a = a.substr(4);
        if (!a)
            return b;
        var c = a.charAt(0);
        a = a.substr(1);
        var d = a.lastIndexOf("_");
        if (-1 == d)
            return b;
        var e = _.Jy(a.substr(d + 1));
        if (null == e)
            return b;
        a = a.substring(0, d);
        if ("_" !== a.charAt(0))
            return b;
        d = "E" === c && e.Je;
        return !d && ("U" !== c || e.Je) || d && !_.Ky ? b : {
            Hi: !0,
            Je: d,
            jX: a.substr(1),
            domain: e.domain,
            ei: e.ei
        }
    }
    ;
    _.My = function(a, b) {
        this.yf = a;
        a = b || {};
        this.S1 = Number(a.maxAge) || 0;
        this.Yd = a.domain;
        this.ul = a.path;
        this.I4 = !!a.secure
    }
    ;
    _.My.prototype.read = function() {
        for (var a = this.yf + "=", b = document.cookie.split(/;\s*/), c = 0; c < b.length; ++c) {
            var d = b[c];
            if (0 == d.indexOf(a))
                return d.substr(a.length)
        }
    }
    ;
    _.My.prototype.write = function(a, b) {
        if (!Ny.test(this.yf))
            throw "Invalid cookie name";
        if (!Oy.test(a))
            throw "Invalid cookie value";
        a = this.yf + "=" + a;
        this.Yd && (a += ";domain=" + this.Yd);
        this.ul && (a += ";path=" + this.ul);
        b = "number" === typeof b ? b : this.S1;
        if (0 <= b) {
            var c = new Date;
            c.setSeconds(c.getSeconds() + b);
            a += ";expires=" + c.toUTCString()
        }
        this.I4 && (a += ";secure");
        document.cookie = a;
        return !0
    }
    ;
    _.My.prototype.clear = function() {
        this.write("", 0)
    }
    ;
    var Oy = /^[-+/_=.:|%&a-zA-Z0-9@]*$/
      , Ny = /^[A-Z_][A-Z0-9_]{0,63}$/;
    _.My.iterate = function(a) {
        for (var b = document.cookie.split(/;\s*/), c = 0; c < b.length; ++c) {
            var d = b[c].split("=")
              , e = d.shift();
            a(e, d.join("="))
        }
    }
    ;
    _.Py = function(a) {
        this.Ii = a
    }
    ;
    _.Py.prototype.read = function() {
        if (Qy.hasOwnProperty(this.Ii))
            return Qy[this.Ii]
    }
    ;
    _.Py.prototype.write = function(a) {
        Qy[this.Ii] = a;
        return !0
    }
    ;
    _.Py.prototype.clear = function() {
        delete Qy[this.Ii]
    }
    ;
    var Qy = {};
    _.Py.iterate = function(a) {
        for (var b in Qy)
            Qy.hasOwnProperty(b) && a(b, Qy[b])
    }
    ;
    var Ry = function() {
        this.Pb = null;
        this.key = function() {
            return null
        }
        ;
        this.getItem = function() {
            return this.Pb
        }
        ;
        this.setItem = function(a, b) {
            this.Pb = b;
            this.length = 1
        }
        ;
        this.removeItem = function() {
            this.clear()
        }
        ;
        this.clear = function() {
            this.Pb = null;
            this.length = 0
        }
        ;
        this.length = 0
    }
      , Sy = function(a) {
        try {
            var b = a || window.sessionStorage;
            if (!b)
                return !1;
            b.setItem("gapi.sessionStorageTest", "gapi.sessionStorageTest" + b.length);
            b.removeItem("gapi.sessionStorageTest");
            return !0
        } catch (c) {
            return !1
        }
    }
      , Ty = function(a, b) {
        this.yf = a;
        this.ZI = Sy(b) ? b || window.sessionStorage : new Ry
    };
    Ty.prototype.read = function() {
        return this.ZI.getItem(this.yf)
    }
    ;
    Ty.prototype.write = function(a) {
        try {
            this.ZI.setItem(this.yf, a)
        } catch (b) {
            return !1
        }
        return !0
    }
    ;
    Ty.prototype.clear = function() {
        this.ZI.removeItem(this.yf)
    }
    ;
    Ty.iterate = function(a) {
        if (Sy())
            for (var b = 0, c = window.sessionStorage.length; b < c; ++b) {
                var d = window.sessionStorage.key(b);
                a(d, window.sessionStorage[d])
            }
    }
    ;
    _.Ky = "https:" === window.location.protocol;
    _.Uy = _.Ky || "http:" === window.location.protocol ? _.My : _.Py;
    _.Jy = function(a) {
        var b = a.substr(1)
          , c = ""
          , d = window.location.hostname;
        if ("" !== b) {
            c = parseInt(b, 10);
            if (isNaN(c))
                return null;
            b = d.split(".");
            if (b.length < c - 1)
                return null;
            b.length == c - 1 && (d = "." + d)
        } else
            d = "";
        return {
            Je: "S" == a.charAt(0),
            domain: d,
            ei: c
        }
    }
    ;
    var Vy, Wy, Zy, $y;
    Vy = _.Oe();
    Wy = _.Oe();
    _.Xy = _.Oe();
    _.Yy = _.Oe();
    Zy = "state code cookie_policy g_user_cookie_policy authuser prompt g-oauth-window status".split(" ");
    $y = function(a) {
        this.IQ = a;
        this.oF = null
    }
    ;
    $y.prototype.write = function(a) {
        var b = _.Oe(), c = _.Oe(), d = window.decodeURIComponent ? decodeURIComponent : unescape, e;
        for (e in a)
            if (_.Pe(a, e)) {
                var f = a[e];
                f = f.replace(/\+/g, " ");
                c[e] = d(f);
                b[e] = a[e]
            }
        d = Zy.length;
        for (e = 0; e < d; ++e)
            delete c[Zy[e]];
        a = String(a.authuser || 0);
        d = _.Oe();
        d[a] = c;
        c = _.Wf(d);
        this.IQ.write(c);
        this.oF = b
    }
    ;
    $y.prototype.read = function() {
        return this.oF
    }
    ;
    $y.prototype.clear = function() {
        this.IQ.clear();
        this.oF = _.Oe()
    }
    ;
    _.az = function(a) {
        return a ? {
            domain: a.domain,
            path: "/",
            secure: a.Je
        } : null
    }
    ;
    Ty.iterate(function(a) {
        var b = _.Ly(a);
        b && b.Hi && (Vy[a] = new $y(new Ty(a)))
    });
    _.Uy.iterate(function(a) {
        Vy[a] && (Wy[a] = new _.Uy(a,_.az(_.Ly(a))))
    });
    _.ii = function() {
        function a() {
            e[0] = 1732584193;
            e[1] = 4023233417;
            e[2] = 2562383102;
            e[3] = 271733878;
            e[4] = 3285377520;
            n = m = 0
        }
        function b(q) {
            for (var p = h, t = 0; 64 > t; t += 4)
                p[t / 4] = q[t] << 24 | q[t + 1] << 16 | q[t + 2] << 8 | q[t + 3];
            for (t = 16; 80 > t; t++)
                q = p[t - 3] ^ p[t - 8] ^ p[t - 14] ^ p[t - 16],
                p[t] = (q << 1 | q >>> 31) & 4294967295;
            q = e[0];
            var v = e[1]
              , r = e[2]
              , w = e[3]
              , z = e[4];
            for (t = 0; 80 > t; t++) {
                if (40 > t)
                    if (20 > t) {
                        var A = w ^ v & (r ^ w);
                        var D = 1518500249
                    } else
                        A = v ^ r ^ w,
                        D = 1859775393;
                else
                    60 > t ? (A = v & r | w & (v | r),
                    D = 2400959708) : (A = v ^ r ^ w,
                    D = 3395469782);
                A = ((q << 5 | q >>> 27) & 4294967295) + A + z + D + p[t] & 4294967295;
                z = w;
                w = r;
                r = (v << 30 | v >>> 2) & 4294967295;
                v = q;
                q = A
            }
            e[0] = e[0] + q & 4294967295;
            e[1] = e[1] + v & 4294967295;
            e[2] = e[2] + r & 4294967295;
            e[3] = e[3] + w & 4294967295;
            e[4] = e[4] + z & 4294967295
        }
        function c(q, p) {
            if ("string" === typeof q) {
                q = unescape(encodeURIComponent(q));
                for (var t = [], v = 0, r = q.length; v < r; ++v)
                    t.push(q.charCodeAt(v));
                q = t
            }
            p || (p = q.length);
            t = 0;
            if (0 == m)
                for (; t + 64 < p; )
                    b(q.slice(t, t + 64)),
                    t += 64,
                    n += 64;
            for (; t < p; )
                if (f[m++] = q[t++],
                n++,
                64 == m)
                    for (m = 0,
                    b(f); t + 64 < p; )
                        b(q.slice(t, t + 64)),
                        t += 64,
                        n += 64
        }
        function d() {
            var q = []
              , p = 8 * n;
            56 > m ? c(k, 56 - m) : c(k, 64 - (m - 56));
            for (var t = 63; 56 <= t; t--)
                f[t] = p & 255,
                p >>>= 8;
            b(f);
            for (t = p = 0; 5 > t; t++)
                for (var v = 24; 0 <= v; v -= 8)
                    q[p++] = e[t] >> v & 255;
            return q
        }
        for (var e = [], f = [], h = [], k = [128], l = 1; 64 > l; ++l)
            k[l] = 0;
        var m, n;
        a();
        return {
            reset: a,
            update: c,
            digest: d,
            bi: function() {
                for (var q = d(), p = "", t = 0; t < q.length; t++)
                    p += "0123456789ABCDEF".charAt(Math.floor(q[t] / 16)) + "0123456789ABCDEF".charAt(q[t] % 16);
                return p
            }
        }
    }
    ;
    var ki = function(a, b, c) {
        var d = String(_.u.location.href);
        return d && a && b ? [b, ji(_.Ng(d), a, c || null)].join(" ") : null
    }
      , ji = function(a, b, c) {
        var d = []
          , e = [];
        if (1 == (Array.isArray(c) ? 2 : 1))
            return e = [b, a],
            _.cc(d, function(k) {
                e.push(k)
            }),
            li(e.join(" "));
        var f = []
          , h = [];
        _.cc(c, function(k) {
            h.push(k.key);
            f.push(k.value)
        });
        c = Math.floor((new Date).getTime() / 1E3);
        e = 0 == f.length ? [c, b, a] : [f.join(":"), c, b, a];
        _.cc(d, function(k) {
            e.push(k)
        });
        a = li(e.join(" "));
        a = [c, a];
        0 == h.length || a.push(h.join(""));
        return a.join("_")
    }
      , li = function(a) {
        var b = _.ii();
        b.update(a);
        return b.bi().toLowerCase()
    };
    var oi;
    _.mi = function(a) {
        return !!_.ei.FPA_SAMESITE_PHASE2_MOD || !(void 0 === a || !a)
    }
    ;
    _.ni = function(a) {
        a = void 0 === a ? !1 : a;
        var b = _.u.__SAPISID || _.u.__APISID || _.u.__3PSAPISID || _.u.__OVERRIDE_SID;
        _.mi(a) && (b = b || _.u.__1PSAPISID);
        if (b)
            return !0;
        var c = new _.fi(document);
        b = c.get("SAPISID") || c.get("APISID") || c.get("__Secure-3PAPISID") || c.get("SID") || c.get("OSID");
        _.mi(a) && (b = b || c.get("__Secure-1PAPISID"));
        return !!b
    }
    ;
    oi = function(a, b, c, d) {
        (a = _.u[a]) || (a = (new _.fi(document)).get(b));
        return a ? ki(a, c, d) : null
    }
    ;
    _.pi = function(a, b) {
        b = void 0 === b ? !1 : b;
        var c = _.Ng(String(_.u.location.href))
          , d = [];
        if (_.ni(b)) {
            c = 0 == c.indexOf("https:") || 0 == c.indexOf("chrome-extension:") || 0 == c.indexOf("moz-extension:");
            var e = c ? _.u.__SAPISID : _.u.__APISID;
            e || (e = new _.fi(document),
            e = e.get(c ? "SAPISID" : "APISID") || e.get("__Secure-3PAPISID"));
            (e = e ? ki(e, c ? "SAPISIDHASH" : "APISIDHASH", a) : null) && d.push(e);
            c && _.mi(b) && ((b = oi("__1PSAPISID", "__Secure-1PAPISID", "SAPISID1PHASH", a)) && d.push(b),
            (a = oi("__3PSAPISID", "__Secure-3PAPISID", "SAPISID3PHASH", a)) && d.push(a))
        }
        return 0 == d.length ? null : d.join(" ")
    }
    ;
    _.qi = function(a, b) {
        var c = {
            SAPISIDHASH: !0,
            SAPISID3PHASH: !0,
            APISIDHASH: !0
        };
        _.mi(void 0 === b ? !1 : b) && (c.SAPISID1PHASH = !0);
        return a && (a.OriginToken || a.Authorization && c[String(a.Authorization).split(" ")[0]]) ? !0 : !1
    }
    ;
    _.ri = {
        kO: _.qi,
        f1: _.ni,
        wN: function() {
            var a = null;
            _.ni() && (a = window.__PVT,
            null == a && (a = (new _.fi(document)).get("BEAT")));
            return a
        },
        YM: _.pi
    };
    _.ar = function() {
        return _.pb && _.qb ? _.qb.mobile : !_.$q() && (_.tb("iPod") || _.tb("iPhone") || _.tb("Android") || _.tb("IEMobile"))
    }
    ;
    _.$q = function() {
        return _.pb && _.qb ? !_.qb.mobile && (_.tb("iPad") || _.tb("Android") || _.tb("Silk")) : _.tb("iPad") || _.tb("Android") && !_.tb("Mobile") || _.tb("Silk")
    }
    ;
    var xr, yr, zr, Br, Lr, Ar, Pr, Qr, Rr, Tr, Yr;
    xr = function(a, b) {
        a = a.split("%s");
        for (var c = "", d = a.length - 1, e = 0; e < d; e++)
            c += a[e] + (e < b.length ? b[e] : "%s");
        _.fb.call(this, c + a[d])
    }
    ;
    yr = function(a) {
        for (var b = !0, c = /^[-_a-zA-Z0-9]$/, d = 0; d < a.length; d++) {
            var e = a.charAt(d);
            if ("]" == e) {
                if (b)
                    return !1;
                b = !0
            } else if ("[" == e) {
                if (!b)
                    return !1;
                b = !1
            } else if (!b && !c.test(e))
                return !1
        }
        return b
    }
    ;
    zr = function(a) {
        return a.replace(_.cd, function(b, c, d, e) {
            var f = "";
            d = d.replace(/^(['"])(.*)\1$/, function(h, k, l) {
                f = k;
                return l
            });
            b = (_.Uc(d) || _.Yc).zg();
            return c + f + b + f + e
        })
    }
    ;
    Br = function(a) {
        if (a instanceof _.Pc)
            return 'url("' + _.Qc(a).replace(/</g, "%3c").replace(/[\\"]/g, "\\$&") + '")';
        if (a instanceof _.pc)
            a = _.qc(a);
        else {
            a = String(a);
            var b = a.replace(_.dd, "$1").replace(_.dd, "$1").replace(_.cd, "url");
            if (_.bd.test(b)) {
                if (b = !Ar.test(a)) {
                    for (var c = b = !0, d = 0; d < a.length; d++) {
                        var e = a.charAt(d);
                        "'" == e && c ? b = !b : '"' == e && b && (c = !c)
                    }
                    b = b && c && yr(a)
                }
                a = b ? zr(a) : "zClosurez"
            } else
                a = "zClosurez"
        }
        if (/[{;}]/.test(a))
            throw new xr("Value does not allow [{;}], got: %s.",[a]);
        return a
    }
    ;
    _.Cr = function(a, b) {
        return a == b ? !0 : a && b ? a.x == b.x && a.y == b.y : !1
    }
    ;
    _.Dr = function(a, b) {
        this.x = void 0 !== a ? a : 0;
        this.y = void 0 !== b ? b : 0
    }
    ;
    _.g = _.Dr.prototype;
    _.g.clone = function() {
        return new _.Dr(this.x,this.y)
    }
    ;
    _.g.equals = function(a) {
        return a instanceof _.Dr && _.Cr(this, a)
    }
    ;
    _.g.ceil = function() {
        this.x = Math.ceil(this.x);
        this.y = Math.ceil(this.y);
        return this
    }
    ;
    _.g.floor = function() {
        this.x = Math.floor(this.x);
        this.y = Math.floor(this.y);
        return this
    }
    ;
    _.g.round = function() {
        this.x = Math.round(this.x);
        this.y = Math.round(this.y);
        return this
    }
    ;
    _.g.translate = function(a, b) {
        a instanceof _.Dr ? (this.x += a.x,
        this.y += a.y) : (this.x += Number(a),
        "number" === typeof b && (this.y += b));
        return this
    }
    ;
    _.g.scale = function(a, b) {
        this.x *= a;
        this.y *= "number" === typeof b ? b : a;
        return this
    }
    ;
    _.Er = function(a, b) {
        this.width = a;
        this.height = b
    }
    ;
    _.g = _.Er.prototype;
    _.g.clone = function() {
        return new _.Er(this.width,this.height)
    }
    ;
    _.g.aspectRatio = function() {
        return this.width / this.height
    }
    ;
    _.g.isEmpty = function() {
        return !(this.width * this.height)
    }
    ;
    _.g.ceil = function() {
        this.width = Math.ceil(this.width);
        this.height = Math.ceil(this.height);
        return this
    }
    ;
    _.g.floor = function() {
        this.width = Math.floor(this.width);
        this.height = Math.floor(this.height);
        return this
    }
    ;
    _.g.round = function() {
        this.width = Math.round(this.width);
        this.height = Math.round(this.height);
        return this
    }
    ;
    _.g.scale = function(a, b) {
        this.width *= a;
        this.height *= "number" === typeof b ? b : a;
        return this
    }
    ;
    _.Fr = function(a) {
        return "CSS1Compat" == a.compatMode
    }
    ;
    _.Gr = function(a) {
        a = a.document;
        a = _.Fr(a) ? a.documentElement : a.body;
        return new _.Er(a.clientWidth,a.clientHeight)
    }
    ;
    _.Hr = function(a) {
        return _.Gr(a || window)
    }
    ;
    _.Ir = function(a) {
        return a.scrollingElement ? a.scrollingElement : !_.Ld && _.Fr(a) ? a.documentElement : a.body || a.documentElement
    }
    ;
    _.Jr = function(a) {
        var b = _.Ir(a);
        a = a.parentWindow || a.defaultView;
        return _.Gd && a.pageYOffset != b.scrollTop ? new _.Dr(b.scrollLeft,b.scrollTop) : new _.Dr(a.pageXOffset || b.scrollLeft,a.pageYOffset || b.scrollTop)
    }
    ;
    _.Kr = function(a, b, c, d) {
        return _.qe(a.qb, b, c, d)
    }
    ;
    _.ab(xr, _.fb);
    xr.prototype.name = "AssertionError";
    Lr = {
        area: !0,
        base: !0,
        br: !0,
        col: !0,
        command: !0,
        embed: !0,
        hr: !0,
        img: !0,
        input: !0,
        keygen: !0,
        link: !0,
        meta: !0,
        param: !0,
        source: !0,
        track: !0,
        wbr: !0
    };
    _.Mr = function(a) {
        if (a instanceof _.$c && a.constructor === _.$c)
            return a.jG;
        _.Tb(a);
        return "type_error:SafeStyle"
    }
    ;
    Ar = /\/\*/;
    _.Nr = function(a) {
        var b = "", c;
        for (c in a)
            if (Object.prototype.hasOwnProperty.call(a, c)) {
                if (!/^[-_a-zA-Z0-9]+$/.test(c))
                    throw Error("m`" + c);
                var d = a[c];
                null != d && (d = Array.isArray(d) ? d.map(Br).join(" ") : Br(d),
                b += c + ":" + d + ";")
            }
        return b ? new _.$c(b,_.Zc) : _.ad
    }
    ;
    _.Or = function(a) {
        if (a instanceof _.fd && a.constructor === _.fd)
            return a.iG;
        _.Tb(a);
        return "type_error:SafeStyleSheet"
    }
    ;
    Pr = /^[a-zA-Z0-9-]+$/;
    Qr = {
        APPLET: !0,
        BASE: !0,
        EMBED: !0,
        IFRAME: !0,
        LINK: !0,
        MATH: !0,
        META: !0,
        OBJECT: !0,
        SCRIPT: !0,
        STYLE: !0,
        SVG: !0,
        TEMPLATE: !0
    };
    Rr = function(a) {
        var b = _.md(_.nd)
          , c = []
          , d = function(e) {
            Array.isArray(e) ? e.forEach(d) : (e = _.md(e),
            c.push(_.Db(e).toString()))
        };
        a.forEach(d);
        return _.ld(c.join(_.Db(b).toString()))
    }
    ;
    _.Sr = function(a) {
        return Rr(Array.prototype.slice.call(arguments))
    }
    ;
    Tr = {
        action: !0,
        cite: !0,
        data: !0,
        formaction: !0,
        href: !0,
        manifest: !0,
        poster: !0,
        src: !0
    };
    _.Ur = function(a, b, c) {
        var d = String(a);
        if (!Pr.test(d))
            throw Error("q");
        if (d.toUpperCase()in Qr)
            throw Error("q");
        a = String(a);
        d = "<" + a;
        var e = "";
        if (b)
            for (var f in b)
                if (Object.prototype.hasOwnProperty.call(b, f)) {
                    if (!Pr.test(f))
                        throw Error("q");
                    var h = b[f];
                    if (null != h) {
                        var k = f;
                        if (h instanceof _.pc)
                            h = _.qc(h);
                        else if ("style" == k.toLowerCase()) {
                            if (!_.Rb(h))
                                throw Error("q");
                            h instanceof _.$c || (h = _.Nr(h));
                            h = _.Mr(h)
                        } else {
                            if (/^on/i.test(k))
                                throw Error("q");
                            if (k.toLowerCase()in Tr)
                                if (h instanceof _.tc)
                                    h = _.vc(h);
                                else if (h instanceof _.Pc)
                                    h = _.Qc(h);
                                else if ("string" === typeof h)
                                    h = (_.Uc(h) || _.Yc).zg();
                                else
                                    throw Error("q");
                        }
                        h.zi && (h = h.zg());
                        k = k + '="' + _.Jc(String(h)) + '"';
                        e += " " + k
                    }
                }
        b = d + e;
        null == c ? c = [] : Array.isArray(c) || (c = [c]);
        !0 === Lr[a.toLowerCase()] ? b += ">" : (f = _.Sr(c),
        b += ">" + _.Db(f).toString() + "</" + a + ">");
        return _.ld(b)
    }
    ;
    _.Vr = function(a) {
        return Number(_.ce) >= a
    }
    ;
    _.Wr = function(a) {
        return _.ke('style[nonce],link[rel="stylesheet"][nonce]', a)
    }
    ;
    _.Xr = function(a) {
        return String(a).replace(/\-([a-z])/g, function(b, c) {
            return c.toUpperCase()
        })
    }
    ;
    Yr = function(a) {
        return a.replace(RegExp("(^|[\\s]+)([a-z])", "g"), function(b, c, d) {
            return c + d.toUpperCase()
        })
    }
    ;
    _.Zr = function(a, b, c) {
        return _.ye(document, arguments)
    }
    ;
    _.$r = function(a, b, c, d) {
        this.top = a;
        this.right = b;
        this.bottom = c;
        this.left = d
    }
    ;
    _.g = _.$r.prototype;
    _.g.Mb = function() {
        return this.right - this.left
    }
    ;
    _.g.Bc = function() {
        return this.bottom - this.top
    }
    ;
    _.g.clone = function() {
        return new _.$r(this.top,this.right,this.bottom,this.left)
    }
    ;
    _.g.contains = function(a) {
        return this && a ? a instanceof _.$r ? a.left >= this.left && a.right <= this.right && a.top >= this.top && a.bottom <= this.bottom : a.x >= this.left && a.x <= this.right && a.y >= this.top && a.y <= this.bottom : !1
    }
    ;
    _.g.expand = function(a, b, c, d) {
        _.Rb(a) ? (this.top -= a.top,
        this.right += a.right,
        this.bottom += a.bottom,
        this.left -= a.left) : (this.top -= a,
        this.right += Number(b),
        this.bottom += Number(c),
        this.left -= Number(d));
        return this
    }
    ;
    _.g.ceil = function() {
        this.top = Math.ceil(this.top);
        this.right = Math.ceil(this.right);
        this.bottom = Math.ceil(this.bottom);
        this.left = Math.ceil(this.left);
        return this
    }
    ;
    _.g.floor = function() {
        this.top = Math.floor(this.top);
        this.right = Math.floor(this.right);
        this.bottom = Math.floor(this.bottom);
        this.left = Math.floor(this.left);
        return this
    }
    ;
    _.g.round = function() {
        this.top = Math.round(this.top);
        this.right = Math.round(this.right);
        this.bottom = Math.round(this.bottom);
        this.left = Math.round(this.left);
        return this
    }
    ;
    _.g.translate = function(a, b) {
        a instanceof _.Dr ? (this.left += a.x,
        this.right += a.x,
        this.top += a.y,
        this.bottom += a.y) : (this.left += a,
        this.right += a,
        "number" === typeof b && (this.top += b,
        this.bottom += b));
        return this
    }
    ;
    _.g.scale = function(a, b) {
        b = "number" === typeof b ? b : a;
        this.left *= a;
        this.right *= a;
        this.top *= b;
        this.bottom *= b;
        return this
    }
    ;
    var cs, is, gs, ls, xs, ks;
    _.bs = function(a, b, c) {
        if ("string" === typeof b)
            (b = _.as(a, b)) && (a.style[b] = c);
        else
            for (var d in b) {
                c = a;
                var e = b[d]
                  , f = _.as(c, d);
                f && (c.style[f] = e)
            }
    }
    ;
    cs = {};
    _.as = function(a, b) {
        var c = cs[b];
        if (!c) {
            var d = _.Xr(b);
            c = d;
            void 0 === a.style[d] && (d = (_.Ld ? "Webkit" : _.Kd ? "Moz" : _.Gd ? "ms" : null) + Yr(d),
            void 0 !== a.style[d] && (c = d));
            cs[b] = c
        }
        return c
    }
    ;
    _.ds = function(a, b) {
        var c = _.oe(a);
        return c.defaultView && c.defaultView.getComputedStyle && (a = c.defaultView.getComputedStyle(a, null)) ? a[b] || a.getPropertyValue(b) || "" : ""
    }
    ;
    _.es = function(a, b) {
        return a.currentStyle ? a.currentStyle[b] : null
    }
    ;
    _.fs = function(a, b) {
        return _.ds(a, b) || _.es(a, b) || a.style && a.style[b]
    }
    ;
    _.hs = function(a, b, c) {
        if (b instanceof _.Dr) {
            var d = b.x;
            b = b.y
        } else
            d = b,
            b = c;
        a.style.left = gs(d, !1);
        a.style.top = gs(b, !1)
    }
    ;
    is = function(a) {
        try {
            return a.getBoundingClientRect()
        } catch (b) {
            return {
                left: 0,
                top: 0,
                right: 0,
                bottom: 0
            }
        }
    }
    ;
    _.ms = function(a, b) {
        b = b || _.Ir(document);
        var c = b || _.Ir(document);
        var d = _.js(a)
          , e = _.js(c);
        if (_.Gd && !_.Vr(9)) {
            var f = ks(c, "borderLeft");
            var h = ks(c, "borderRight");
            var k = ks(c, "borderTop")
              , l = ks(c, "borderBottom");
            h = new _.$r(k,h,l,f)
        } else
            f = _.ds(c, "borderLeftWidth"),
            h = _.ds(c, "borderRightWidth"),
            k = _.ds(c, "borderTopWidth"),
            l = _.ds(c, "borderBottomWidth"),
            h = new _.$r(parseFloat(k),parseFloat(h),parseFloat(l),parseFloat(f));
        c == _.Ir(document) ? (f = d.x - c.scrollLeft,
        d = d.y - c.scrollTop,
        _.Gd && !_.Vr(10) && (f += h.left,
        d += h.top)) : (f = d.x - e.x - h.left,
        d = d.y - e.y - h.top);
        a = ls(a);
        e = c.clientHeight - a.height;
        h = c.scrollLeft;
        k = c.scrollTop;
        h += Math.min(f, Math.max(f - (c.clientWidth - a.width), 0));
        k += Math.min(d, Math.max(d - e, 0));
        c = new _.Dr(h,k);
        b.scrollLeft = c.x;
        b.scrollTop = c.y
    }
    ;
    _.js = function(a) {
        var b = _.oe(a)
          , c = new _.Dr(0,0);
        var d = b ? _.oe(b) : document;
        d = !_.Gd || _.Vr(9) || _.Fr(_.pe(d).qb) ? d.documentElement : d.body;
        if (a == d)
            return c;
        a = is(a);
        b = _.Jr(_.pe(b).qb);
        c.x = a.left + b.x;
        c.y = a.top + b.y;
        return c
    }
    ;
    _.os = function(a, b) {
        var c = new _.Dr(0,0)
          , d = _.ve(_.oe(a));
        if (!_.Ed(d, "parent"))
            return c;
        do {
            var e = d == b ? _.js(a) : _.ns(a);
            c.x += e.x;
            c.y += e.y
        } while (d && d != b && d != d.parent && (a = d.frameElement) && (d = d.parent));
        return c
    }
    ;
    _.ns = function(a) {
        a = is(a);
        return new _.Dr(a.left,a.top)
    }
    ;
    _.ps = function(a, b, c) {
        if (b instanceof _.Er)
            c = b.height,
            b = b.width;
        else if (void 0 == c)
            throw Error("P");
        a.style.width = gs(b, !0);
        a.style.height = gs(c, !0)
    }
    ;
    gs = function(a, b) {
        "number" == typeof a && (a = (b ? Math.round(a) : a) + "px");
        return a
    }
    ;
    _.qs = function(a) {
        var b = ls;
        if ("none" != _.fs(a, "display"))
            return b(a);
        var c = a.style
          , d = c.display
          , e = c.visibility
          , f = c.position;
        c.visibility = "hidden";
        c.position = "absolute";
        c.display = "inline";
        a = b(a);
        c.display = d;
        c.position = f;
        c.visibility = e;
        return a
    }
    ;
    ls = function(a) {
        var b = a.offsetWidth
          , c = a.offsetHeight
          , d = _.Ld && !b && !c;
        return (void 0 === b || d) && a.getBoundingClientRect ? (a = is(a),
        new _.Er(a.right - a.left,a.bottom - a.top)) : new _.Er(b,c)
    }
    ;
    _.rs = function(a, b) {
        a.style.display = b ? "" : "none"
    }
    ;
    _.ts = function(a) {
        var b = _.pe(void 0)
          , c = b.hb();
        if (_.Gd && c.createStyleSheet)
            b = c.createStyleSheet(),
            _.ss(b, a);
        else {
            c = _.Kr(b, "HEAD")[0];
            if (!c) {
                var d = _.Kr(b, "BODY")[0];
                c = b.na("HEAD");
                d.parentNode.insertBefore(c, d)
            }
            d = b.na("STYLE");
            var e = _.Wr();
            e && d.setAttribute("nonce", e);
            _.ss(d, a);
            b.appendChild(c, d)
        }
    }
    ;
    _.ss = function(a, b) {
        b = _.Or(b);
        _.Gd && void 0 !== a.cssText ? a.cssText = b : _.u.trustedTypes ? _.Ie(a, b) : a.innerHTML = b
    }
    ;
    _.us = function(a) {
        return "rtl" == _.fs(a, "direction")
    }
    ;
    _.vs = _.Kd ? "MozUserSelect" : _.Ld || _.Hd ? "WebkitUserSelect" : null;
    _.ws = function(a, b) {
        if (/^\d+px?$/.test(b))
            return parseInt(b, 10);
        var c = a.style.left
          , d = a.runtimeStyle.left;
        a.runtimeStyle.left = a.currentStyle.left;
        a.style.left = b;
        b = a.style.pixelLeft;
        a.style.left = c;
        a.runtimeStyle.left = d;
        return +b
    }
    ;
    xs = {
        thin: 2,
        medium: 4,
        thick: 6
    };
    ks = function(a, b) {
        if ("none" == _.es(a, b + "Style"))
            return 0;
        b = _.es(a, b + "Width");
        return b in xs ? xs[b] : _.ws(a, b)
    }
    ;
    var hy;
    _.ey = function(a) {
        for (var b = RegExp("([A-Z][\\w ]+)/([^\\s]+)\\s*(?:\\((.*?)\\))?", "g"), c = [], d; d = b.exec(a); )
            c.push([d[1], d[2], d[3] || void 0]);
        return c
    }
    ;
    _.fy = function(a) {
        var b = {};
        a.forEach(function(c) {
            b[c[0]] = c[1]
        });
        return function(c) {
            return b[c.find(function(d) {
                return d in b
            })] || ""
        }
    }
    ;
    _.gy = function(a) {
        var b = /rv: *([\d\.]*)/.exec(a);
        if (b && b[1])
            return b[1];
        b = "";
        var c = /MSIE +([\d\.]+)/.exec(a);
        if (c && c[1])
            if (a = /Trident\/(\d.\d)/.exec(a),
            "7.0" == c[1])
                if (a && a[1])
                    switch (a[1]) {
                    case "4.0":
                        b = "8.0";
                        break;
                    case "5.0":
                        b = "9.0";
                        break;
                    case "6.0":
                        b = "10.0";
                        break;
                    case "7.0":
                        b = "11.0"
                    }
                else
                    b = "7.0";
            else
                b = c[1];
        return b
    }
    ;
    hy = function(a) {
        var b = _.ob();
        if ("Internet Explorer" === a)
            return _.wb() ? _.gy(b) : "";
        b = _.ey(b);
        var c = _.fy(b);
        switch (a) {
        case "Opera":
            if (_.vb())
                return c(["Version", "Opera"]);
            if (_.ub() ? _.sb("Opera") : _.tb("OPR"))
                return c(["OPR"]);
            break;
        case "Microsoft Edge":
            if (_.xb())
                return c(["Edge"]);
            if (_.yb())
                return c(["Edg"]);
            break;
        case "Chromium":
            if (_.Ab())
                return c(["Chrome", "CriOS", "HeadlessChrome"])
        }
        return "Firefox" === a && _.zb() || "Safari" === a && _.Bb() || "Android Browser" === a && _.Cb() || "Silk" === a && _.tb("Silk") ? (a = b[2]) && a[1] || "" : ""
    }
    ;
    _.iy = function(a) {
        if (_.ub() && "Silk" !== a) {
            var b = _.qb.brands.find(function(c) {
                return c.brand === a
            });
            if (!b || !b.version)
                return NaN;
            b = b.version.split(".")
        } else {
            b = hy(a);
            if ("" === b)
                return NaN;
            b = b.split(".")
        }
        return 0 === b.length ? NaN : Number(b[0])
    }
    ;
    _.jy = function(a, b, c) {
        if ("function" === typeof a)
            c && (a = (0,
            _.M)(a, c));
        else if (a && "function" == typeof a.handleEvent)
            a = (0,
            _.M)(a.handleEvent, a);
        else
            throw Error("Aa");
        return 2147483647 < Number(b) ? -1 : _.u.setTimeout(a, b || 0)
    }
    ;
    _.ky = function(a) {
        _.u.clearTimeout(a)
    }
    ;
    _.bz = function(a) {
        _.dj.call(this);
        this.Ii = 1;
        this.jz = [];
        this.qz = 0;
        this.Ff = [];
        this.Xi = {};
        this.AW = !!a
    }
    ;
    _.ab(_.bz, _.dj);
    _.g = _.bz.prototype;
    _.g.subscribe = function(a, b, c) {
        var d = this.Xi[a];
        d || (d = this.Xi[a] = []);
        var e = this.Ii;
        this.Ff[e] = a;
        this.Ff[e + 1] = b;
        this.Ff[e + 2] = c;
        this.Ii = e + 3;
        d.push(e);
        return e
    }
    ;
    _.g.ou = _.ea(19);
    _.g.unsubscribe = function(a, b, c) {
        if (a = this.Xi[a]) {
            var d = this.Ff;
            if (a = a.find(function(e) {
                return d[e + 1] == b && d[e + 2] == c
            }))
                return this.hk(a)
        }
        return !1
    }
    ;
    _.g.hk = function(a) {
        var b = this.Ff[a];
        if (b) {
            var c = this.Xi[b];
            0 != this.qz ? (this.jz.push(a),
            this.Ff[a + 1] = function() {}
            ) : (c && _.Vi(c, a),
            delete this.Ff[a],
            delete this.Ff[a + 1],
            delete this.Ff[a + 2])
        }
        return !!b
    }
    ;
    _.g.wn = function(a, b) {
        var c = this.Xi[a];
        if (c) {
            for (var d = Array(arguments.length - 1), e = 1, f = arguments.length; e < f; e++)
                d[e - 1] = arguments[e];
            if (this.AW)
                for (e = 0; e < c.length; e++) {
                    var h = c[e];
                    cz(this.Ff[h + 1], this.Ff[h + 2], d)
                }
            else {
                this.qz++;
                try {
                    for (e = 0,
                    f = c.length; e < f && !this.isDisposed(); e++)
                        h = c[e],
                        this.Ff[h + 1].apply(this.Ff[h + 2], d)
                } finally {
                    if (this.qz--,
                    0 < this.jz.length && 0 == this.qz)
                        for (; c = this.jz.pop(); )
                            this.hk(c)
                }
            }
            return 0 != e
        }
        return !1
    }
    ;
    var cz = function(a, b, c) {
        _.lk(function() {
            a.apply(b, c)
        })
    };
    _.bz.prototype.clear = function(a) {
        if (a) {
            var b = this.Xi[a];
            b && (b.forEach(this.hk, this),
            delete this.Xi[a])
        } else
            this.Ff.length = 0,
            this.Xi = {}
    }
    ;
    _.bz.prototype.Fb = function(a) {
        if (a) {
            var b = this.Xi[a];
            return b ? b.length : 0
        }
        a = 0;
        for (b in this.Xi)
            a += this.Fb(b);
        return a
    }
    ;
    _.bz.prototype.qa = function() {
        _.bz.H.qa.call(this);
        this.clear();
        this.jz.length = 0
    }
    ;
    _.dz = function(a) {
        this.q6 = a
    }
    ;
    _.dz.prototype.toString = function() {
        return this.q6
    }
    ;
    _.ez = function(a) {
        _.dj.call(this);
        this.Qd = new _.bz(a);
        _.fj(this, this.Qd)
    }
    ;
    _.ab(_.ez, _.dj);
    _.g = _.ez.prototype;
    _.g.subscribe = function(a, b, c) {
        return this.Qd.subscribe(a.toString(), b, c)
    }
    ;
    _.g.ou = _.ea(18);
    _.g.unsubscribe = function(a, b, c) {
        return this.Qd.unsubscribe(a.toString(), b, c)
    }
    ;
    _.g.hk = function(a) {
        return this.Qd.hk(a)
    }
    ;
    _.g.wn = function(a, b) {
        return this.Qd.wn(a.toString(), b)
    }
    ;
    _.g.clear = function(a) {
        this.Qd.clear(void 0 !== a ? a.toString() : void 0)
    }
    ;
    _.g.Fb = function(a) {
        return this.Qd.Fb(void 0 !== a ? a.toString() : void 0)
    }
    ;
    _.fz = function(a, b) {
        Array.isArray(b) || (b = [b]);
        b = b.map(function(c) {
            return "string" === typeof c ? c : c.pz + " " + c.duration + "s " + c.timing + " " + c.delay + "s"
        });
        _.bs(a, "transition", b.join(","))
    }
    ;
    _.gz = _.ee(function() {
        if (_.Gd)
            return !0;
        var a = _.ze("DIV")
          , b = _.Ld ? "-webkit" : _.Kd ? "-moz" : _.Gd ? "-ms" : null
          , c = {
            transition: "opacity 1s linear"
        };
        b && (c[b + "-transition"] = "opacity 1s linear");
        b = _.Ur("div", {
            style: c
        });
        _.ge(a, b);
        a = a.firstChild;
        b = a.style[_.Xr("transition")];
        return "" != ("undefined" !== typeof b ? b : a.style[_.as(a, "transition")] || "")
    });
    _.iz = function() {
        _.hz = "oauth2relay" + String(2147483647 * (0,
        _.Tg)() | 0)
    }
    ;
    _.jz = new _.ez;
    _.kz = new _.dz("oauth");
    _.iz();
    _.ff("oauth-flow/client_id");
    var lz = String(_.ff("oauth-flow/redirectUri"));
    if (lz)
        lz.replace(/[#][\s\S]*/, "");
    else {
        var mz = _.Lg.getOrigin(window.location.href);
        _.ff("oauth-flow/callbackUrl");
        encodeURIComponent(mz)
    }
    _.Lg.getOrigin(window.location.href);
    var oz, pz, qz, rz, sz, tz, uz, vz, wz, xz, yz, Az, Bz, Cz, Dz, Ez, Fz, Gz, Hz, Iz, Jz, Kz, Lz, Mz, Nz, Oz, Pz, Qz, Rz, Sz, Tz, Uz, Vz, Wz, Xz, Yz, Zz, $z, aA, bA, eA, dA, fA, gA, hA, iA, jA, kA, lA, mA, nA, pA;
    _.nz = function(a, b) {
        if (_.Ih && !b)
            return _.u.atob(a);
        var c = "";
        _.Lh(a, function(d) {
            c += String.fromCharCode(d)
        });
        return c
    }
    ;
    oz = function(a) {
        var b = String(a("immediate") || "");
        a = String(a("prompt") || "");
        return "true" === b || "none" === a
    }
    ;
    pz = function(a) {
        return _.bi("enableMultilogin") && a("cookie_policy") && !oz(a) ? !0 : !1
    }
    ;
    sz = function() {
        var a, b = null;
        _.Uy.iterate(function(c, d) {
            0 === c.indexOf("G_AUTHUSER_") && (c = _.Jy(c.substring(11)),
            !a || c.Je && !a.Je || c.Je == a.Je && c.ei > a.ei) && (a = c,
            b = d)
        });
        return {
            NW: a,
            authuser: b
        }
    }
    ;
    tz = [".APPS.GOOGLEUSERCONTENT.COM", "@DEVELOPER.GSERVICEACCOUNT.COM"];
    uz = function(a) {
        a = a.toUpperCase();
        for (var b = 0, c = tz.length; b < c; ++b) {
            var d = a.split(tz[b]);
            2 == d.length && "" === d[1] && (a = d[0])
        }
        a = a.replace(/-/g, "_").toUpperCase();
        40 < a.length && (b = new _.Sg,
        b.Hu(a),
        a = b.bi().toUpperCase());
        return a
    }
    ;
    vz = function(a) {
        if (!a)
            return [];
        a = a.split("=");
        return a[1] ? a[1].split("|") : []
    }
    ;
    wz = function(a) {
        a = a.split(":");
        return {
            clientId: a[0].split("=")[1],
            U4: vz(a[1]),
            vfa: vz(a[2]),
            nea: vz(a[3])
        }
    }
    ;
    xz = function(a) {
        var b = sz()
          , c = b.NW;
        b = b.authuser;
        var d = a && uz(a);
        if (null !== b) {
            var e;
            _.Uy.iterate(function(h, k) {
                (h = _.Ly(h)) && h.Hi && (d && h.jX != d || h.Je == c.Je && h.ei == c.ei && (e = k))
            });
            if (e) {
                var f = wz(e);
                a = f && f.U4[Number(b)];
                f = f && f.clientId;
                if (a)
                    return {
                        authuser: b,
                        qga: a,
                        clientId: f
                    }
            }
        }
        return null
    }
    ;
    yz = function(a, b) {
        a = _.ti(a);
        if (!a || !b && a.error)
            return null;
        b = Math.floor((new Date).getTime() / 1E3);
        return a.expires_at && b > a.expires_at ? null : a
    }
    ;
    _.zz = function(a, b) {
        if (b) {
            var c = b;
            var d = a
        } else
            "string" === typeof a ? d = a : c = a;
        c ? _.zw(c, d) : _.Aw(d)
    }
    ;
    Az = function(a) {
        if (!a)
            return null;
        "single_host_origin" !== a && (a = _.Ng(a));
        var b = window.location.hostname
          , c = b
          , d = _.Ky;
        if ("single_host_origin" !== a) {
            c = a.split("://");
            if (2 == c.length)
                d = "https" === c.shift();
            else
                return _.$f.log("WARNING invalid cookie_policy: " + a),
                null;
            c = c[0]
        }
        if (-1 !== c.indexOf(":"))
            c = b = "";
        else {
            a = "." + c;
            if (b.lastIndexOf(a) !== b.length - a.length)
                return _.$f.log("Invalid cookie_policy domain: " + c),
                null;
            c = a;
            b = c.split(".").length - 1
        }
        return {
            domain: c,
            Je: d,
            ei: b
        }
    }
    ;
    Bz = function(a) {
        var b = Az(a);
        if (!b)
            return new _.Py("G_USERSTATE_");
        a = ["G_USERSTATE_", _.Ky && b.Je ? "S" : "H", b.ei].join("");
        var c = _.Yy[a];
        c || (c = {
            mF: 63072E3
        },
        _.Qe(_.az(b), c),
        c = new _.My(a,c),
        _.Yy[a] = c,
        b = c.read(),
        "undefined" !== typeof b && null !== b && (document.cookie = a + "=; expires=Thu, 01 Jan 1970 00:00:01 GMT; path=/",
        c.write(b)));
        return c
    }
    ;
    Cz = function(a) {
        var b = Bz(a).read();
        a = _.Oe();
        if (b) {
            b = b.split(":");
            for (var c; c = b.shift(); )
                c = c.split("="),
                a[c[0]] = c[1]
        }
        return a
    }
    ;
    Dz = function(a, b, c) {
        var d = Cz(b)
          , e = d[a];
        d[a] = "0";
        var f = [];
        _.Bm(d, function(k, l) {
            f.push(l + "=" + k)
        });
        var h = f.join(":");
        b = Bz(b);
        h ? b.write(h) : b.clear();
        d[a] !== e && c && c()
    }
    ;
    Ez = function(a) {
        a = Az(a.g_user_cookie_policy);
        if (!a || a.Je && !_.Ky)
            a = null;
        else {
            var b = ["G_AUTHUSER_", _.Ky && a.Je ? "S" : "H", a.ei].join("")
              , c = _.Xy[b];
            c || (c = new _.Uy(b,_.az(a)),
            _.Xy[b] = c);
            a = c
        }
        _.gf("googleapis.config/sessionIndex", null);
        a.clear()
    }
    ;
    Fz = function(a) {
        return oz(function(b) {
            return a[b]
        })
    }
    ;
    Gz = 0;
    Hz = !1;
    Iz = [];
    Jz = {};
    Kz = {};
    Lz = null;
    Mz = function(a) {
        var b = _.hz;
        return function(c) {
            if (this.f == b && this.t == _.eg.wm(this.f) && this.origin == _.eg.Jm(this.f))
                return a.apply(this, arguments)
        }
    }
    ;
    Nz = function(a) {
        if (a && !decodeURIComponent(a).startsWith("m;/_/scs/"))
            throw Error("Fa");
    }
    ;
    Oz = function(a) {
        var b = _.jf.Ag
          , c = b(a).jsh;
        if (null != c)
            return Nz(c),
            a;
        if (b = String(b().jsh || _.Ye.h || ""))
            Nz(b),
            c = (a + "#").indexOf("#"),
            a = a.substr(0, c) + (-1 !== a.substr(0, c).indexOf("?") ? "&" : "?") + "jsh=" + encodeURIComponent(b) + a.substr(c);
        return a
    }
    ;
    Pz = function() {
        return !!_.ff("oauth-flow/usegapi")
    }
    ;
    Qz = function(a, b) {
        Pz() ? Lz.unregister(a) : _.eg.unregister(a + ":" + b)
    }
    ;
    Rz = function(a, b, c) {
        Pz() ? Lz.register(a, c, _.Qm) : _.eg.register(a + ":" + b, Mz(c))
    }
    ;
    Sz = function() {
        qz.parentNode.removeChild(qz)
    }
    ;
    Tz = function(a) {
        var b = qz;
        _.fz(b, [{
            pz: "-webkit-transform",
            duration: 1,
            timing: "ease",
            delay: 0
        }]);
        _.fz(b, [{
            pz: "transform",
            duration: 1,
            timing: "ease",
            delay: 0
        }]);
        _.jy(function() {
            b.style.webkitTransform = "translate3d(0px," + a + "px,0px)";
            b.style.transform = "translate3d(0px," + a + "px,0px)"
        }, 0)
    }
    ;
    Uz = function() {
        var a = rz + 88;
        Tz(a);
        rz = a
    }
    ;
    Vz = function() {
        var a = rz - 88;
        Tz(a);
        rz = a
    }
    ;
    Wz = function(a) {
        var b = a ? Uz : Vz
          , c = a ? Vz : Uz;
        a = a ? "-" : "";
        rz = parseInt(a + 88, 10);
        qz.style.webkitTransform = "translate3d(0px," + a + 88 + "px,0px)";
        qz.style.transform = "translate3d(0px," + a + 88 + "px,0px)";
        qz.style.display = "";
        qz.style.visibility = "visible";
        b();
        _.jy(c, 4E3);
        _.jy(Sz, 5E3)
    }
    ;
    Xz = function(a) {
        var b = _.ff("oauth-flow/toast/position");
        "top" !== b && (b = "bottom");
        var c = document.createElement("div");
        qz = c;
        c.style.cssText = "position:fixed;left:0px;z-index:1000;width:100%;";
        _.bs(c, "visibility", "hidden");
        _.bs(c, b, "-40px");
        _.bs(c, "height", "128px");
        var d = c;
        if (!_.ar() && !_.$q()) {
            d = document.createElement("div");
            d.style.cssText = "float:left;position:relative;left:50%;";
            c.appendChild(d);
            var e = document.createElement("div");
            e.style.cssText = "float:left;position:relative;left:-50%";
            d.appendChild(e);
            d = e
        }
        e = "top" == b ? "-" : "";
        rz = parseInt(e + 88, 10);
        qz.style.webkitTransform = "translate3d(0px," + e + 88 + "px,0px)";
        qz.style.transform = "translate3d(0px," + e + 88 + "px,0px)";
        e = window;
        try {
            for (; e.parent != e && e.parent.document; )
                e = e.parent
        } catch (f) {}
        e = e.document.body;
        try {
            e.insertBefore(c, e.firstChild)
        } catch (f) {}
        _.Nm.openChild({
            url: ":socialhost:/:session_prefix:_/widget/oauthflow/toast",
            queryParams: {
                clientId: a.client_id,
                idToken: a.id_token
            },
            where: d,
            onRestyle: function() {
                "top" === b ? Wz(!0) : Wz(!1)
            }
        })
    }
    ;
    Yz = function(a) {
        var b = _.lo()
          , c = b && b.scope;
        b = a && a.scope;
        b = "string" === typeof b ? b.split(" ") : b || [];
        if (c) {
            c = c.split(" ");
            for (var d = 0; d < c.length; ++d) {
                var e = c[d];
                -1 == _.zm.call(b, e) && b.push(e)
            }
            0 < b.length && (a.scope = b.join(" "))
        }
        return a
    }
    ;
    Zz = function(a, b) {
        var c = null;
        a && b && (c = b.client_id = b.client_id || a.client_id,
        b.scope = b.scope || a.scope,
        b.g_user_cookie_policy = a.cookie_policy,
        b.cookie_policy = b.cookie_policy || a.cookie_policy,
        b.response_type = b.response_type || a.response_type);
        if (b) {
            b.issued_at || (b.issued_at = String(Math.floor((new Date).getTime() / 1E3)));
            var d = parseInt(b.expires_in, 10) || 86400;
            b.error && (d = _.ff("oauth-flow/errorMaxAge") || 86400);
            b.expires_in = String(d);
            b.expires_at || (b.expires_at = String(Math.floor((new Date).getTime() / 1E3) + d));
            b._aa || b.error || null != xz(c) || !Fz(a) || (b._aa = "1");
            a = b.status = {};
            a.google_logged_in = !!b.session_state;
            c = a.signed_in = !!b.access_token;
            a.method = c ? b["g-oauth-window"] ? "PROMPT" : "AUTO" : null
        }
        return b
    }
    ;
    $z = function(a) {
        a = a && a.id_token;
        if (!a || !a.split(".")[1])
            return null;
        a = (a.split(".")[1] + "...").replace(/^((....)+)\.?\.?\.?$/, "$1");
        a = _.Vf(_.nz(a, !0));
        if (!1 === a)
            throw Error("Ga");
        return a
    }
    ;
    aA = function(a) {
        return (a = $z(a)) ? a.sub : null
    }
    ;
    bA = function(a) {
        a && Iz.push(a);
        a = _.hz;
        var b = document.getElementById(a)
          , c = (new Date).getTime();
        if (b) {
            if (Gz && 6E4 > c - Gz)
                return;
            var d = _.eg.wm(a);
            d && (Qz("oauth2relayReady", d),
            Qz("oauth2callback", d));
            b.parentNode.removeChild(b);
            if (/Firefox/.test(navigator.userAgent))
                try {
                    window.frames[a] = void 0
                } catch (f) {}
            _.iz();
            a = _.hz
        }
        Gz = c;
        var e = String(2147483647 * (0,
        _.Tg)() | 0);
        b = _.ff("oauth-flow/proxyUrl") || _.ff("oauth-flow/relayUrl");
        Pz() ? Lz = _.Nm.openChild({
            where: _.jf.aN(),
            url: b,
            id: a,
            attributes: {
                style: {
                    width: "1px",
                    height: "1px",
                    position: "absolute",
                    top: "-100px",
                    display: "none"
                },
                "aria-hidden": "true"
            },
            dontclear: !0
        }) : (b = [b, "?parent=", encodeURIComponent(_.Lg.getOrigin(window.location.href)), "#rpctoken=", e, "&forcesecure=1"].join(""),
        c = _.jf.aN(),
        d = _.jf.CL({
            name: a,
            id: a
        }),
        d.src = Oz(b),
        d.style.width = "1px",
        d.style.height = "1px",
        d.style.position = "absolute",
        d.style.top = "-100px",
        d.tabIndex = -1,
        "function" === typeof d.setAttribute ? d.setAttribute("aria-hidden", "true") : d["aria-hidden"] = "true",
        c.appendChild(d),
        _.eg.Zt(a));
        Rz("oauth2relayReady", e, function() {
            Qz("oauth2relayReady", e);
            var f = Iz;
            if (null !== f) {
                Iz = null;
                for (var h = f.length, k = 0; k < h; ++k)
                    f[k]()
            }
        });
        Rz("oauth2callback", e, function(f) {
            var h = _.jf.Ag;
            h = h(f);
            var k = h.state;
            f = k.replace(/\|.*$/, "");
            f = {}.hasOwnProperty.call(Kz, f) ? Kz[f] : null;
            h.state = f;
            if (null != h.state) {
                f = Jz[k];
                delete Jz[k];
                k = f && f.key || "token";
                var l = h = Zz(f && f.params, h)
                  , m = aA(l);
                if (m) {
                    var n = Cz(l.cookie_policy);
                    m = "0" == n[m] || "X" == n[m]
                } else
                    m = !1;
                !m && l && 0 <= (" " + (l.scope || "") + " ").indexOf(" https://www.googleapis.com/auth/plus.login ") && _.ff("isLoggedIn") && "1" === (l && l._aa) && (l._aa = "0",
                Hz || (Hz = !0,
                Xz(l)));
                _.zz(k, h);
                h = yz(k);
                if (f) {
                    k = f.popup;
                    l = f.after_redirect;
                    if (k && "keep_open" != l)
                        try {
                            k.close()
                        } catch (q) {}
                    f.callback && (f.callback(h),
                    f.callback = null)
                }
            }
        })
    }
    ;
    _.cA = function(a) {
        null !== Iz ? bA(a) : a && a()
    }
    ;
    eA = function(a, b) {
        var c = dA
          , d = aA(a);
        d && (Ez(a),
        Dz(d, b, function() {
            if (c) {
                var e = {
                    error: "user_signed_out"
                };
                e.client_id = a.client_id;
                e.g_user_cookie_policy = a.g_user_cookie_policy;
                e.scope = a.scope;
                e.response_type = a.response_type;
                e.session_state = a.session_state;
                e = Zz(null, e);
                c(e)
            }
        }))
    }
    ;
    dA = function(a) {
        a || (a = yz(void 0, !0));
        a && "object" === typeof a || (a = {
            error: "invalid_request",
            error_description: "no callback data"
        });
        var b = a.error_description;
        b && window.console && (window.console.error(a.error),
        window.console.error(b));
        a.error || (_.Ye.drw = null);
        _.zz(a);
        if (b = a.authuser)
            _.ff("googleapis.config/sessionIndex"),
            _.gf("googleapis.config/sessionIndex", b);
        _.jz.wn(_.kz, a);
        return a
    }
    ;
    fA = ["client_id", "cookie_policy", "response_type"];
    gA = "client_id response_type login_hint authuser prompt include_granted_scopes after_redirect access_type hl state".split(" ");
    hA = function(a) {
        var b = _.Uj(a);
        b.session_state && b.session_state.extraQueryParams && (b.authuser = b.session_state.extraQueryParams.authuser);
        b.session_state = null;
        a.expires_at && (b.expires_at = parseInt(a.expires_at / 1E3).toString());
        a.expires_in && (b.expires_in = a.expires_in.toString());
        a.first_issued_at && (b.issued_at = parseInt(a.first_issued_at / 1E3).toString(),
        delete b.first_issued_at);
        _.zw(b);
        return b
    }
    ;
    iA = function(a) {
        if (void 0 === a.include_granted_scopes) {
            var b = _.ff("include_granted_scopes");
            a.include_granted_scopes = !!b
        }
    }
    ;
    jA = function(a) {
        window.console && ("function" === typeof window.console.warn ? window.console.warn(a) : "function" === typeof window.console.log && window.console.log(a))
    }
    ;
    kA = function(a) {
        var b = a || {}
          , c = {};
        _.cc(gA, function(d) {
            null != b[d] && (c[d] = b[d])
        });
        a = _.ff("googleapis/overrideClientId");
        null != a && (c.client_id = a);
        iA(c);
        "string" === typeof b.scope ? c.scope = b.scope : Array.isArray(b.scope) && (c.scope = b.scope.join(" "));
        null != b["openid.realm"] && (c.openid_realm = b["openid.realm"]);
        null != b.cookie_policy ? c.cookie_policy = b.cookie_policy : null != b.cookiepolicy && (c.cookie_policy = b.cookiepolicy);
        null == c.login_hint && null != b.user_id && (c.login_hint = b.user_id);
        try {
            _.px(c.cookie_policy)
        } catch (d) {
            c.cookie_policy && jA("The cookie_policy configuration: '" + c.cookie_policy + "' is illegal, and thus ignored."),
            delete c.cookie_policy
        }
        null != b.hd && (c.hosted_domain = b.hd);
        null == c.prompt && (1 == b.immediate || "true" == b.immediate ? c.prompt = "none" : "force" == b.approval_prompt && (c.prompt = "consent"));
        "none" == c.prompt && (c.session_selection = "first_valid");
        "none" == c.prompt && "offline" == c.access_type && delete c.access_type;
        "undefined" === typeof c.authuser && (a = _.di(),
        null != a && (c.authuser = a));
        a = b.redirect_uri || _.ff("oauth-flow/redirectUri");
        null != a && "postmessage" != a && (c.redirect_uri = a);
        c.gsiwebsdk = "shim";
        return c
    }
    ;
    lA = function(a, b) {
        var c = kA(a)
          , d = new _.ok(function(e, f) {
            _.Wx(c, function(h) {
                var k = h || {};
                _.cc(fA, function(l) {
                    null == k[l] && (k[l] = c[l])
                });
                !c.include_granted_scopes && a && a.scope && (k.scope = a.scope);
                a && null != a.state && (k.state = a.state);
                k.error ? ("none" == c.prompt && "user_logged_out" == k.error && (k.error = "immediate_failed_user_logged_out"),
                f(k)) : (h = hA(k),
                null != h.authuser && _.gf("googleapis.config/sessionIndex", h.authuser),
                e(h))
            })
        }
        );
        b && d.then(b, b);
        return d
    }
    ;
    mA = _.ri.YM;
    nA = null;
    _.qA = function(a, b) {
        if ("force" !== a.approvalprompt) {
            a = _.oA(a);
            a.prompt = "none";
            delete a.redirect_uri;
            delete a.approval_prompt;
            delete a.immediate;
            if (b = !b)
                nA ? (a.client_id !== nA.client_id && window.console && window.console.log && window.console.log("Ignoring mismatched page-level auth param client_id=" + a.client_id),
                b = !0) : (nA = a,
                b = !1);
            b || pA(a)
        }
    }
    ;
    _.oA = function(a) {
        var b = a.redirecturi || "postmessage"
          , c = (0,
        _.Ac)((a.scope || "").replace(/[\s\xa0]+/g, " "));
        b = {
            client_id: a.clientid,
            redirect_uri: b,
            response_type: "code token id_token gsession",
            scope: c
        };
        a.approvalprompt && (b.approval_prompt = a.approvalprompt);
        a.state && (b.state = a.state);
        a.openidrealm && (b["openid.realm"] = a.openidrealm);
        c = "offline" == a.accesstype ? !0 : (c = a.redirecturi) && "postmessage" != c;
        c && (b.access_type = "offline");
        a.requestvisibleactions && (b.request_visible_actions = (0,
        _.Ac)(a.requestvisibleactions.replace(/[\s\xa0]+/g, " ")));
        a.after_redirect && (b.after_redirect = a.after_redirect);
        a.cookiepolicy && "none" !== a.cookiepolicy && (b.cookie_policy = a.cookiepolicy);
        "undefined" != typeof a.includegrantedscopes && (b.include_granted_scopes = a.includegrantedscopes);
        a.e && (b.e = a.e);
        (a = a.authuser || _.ff("googleapis.config/sessionIndex")) && (b.authuser = a);
        (a = _.ff("useoriginassocialhost")) && (b.use_origin_as_socialhost = a);
        return b
    }
    ;
    pA = function(a) {
        _.Vo("waaf0", "signin", "0");
        lA(a, function(b) {
            _.Vo("waaf1", "signin", "0");
            dA(b)
        })
    }
    ;
    _.rA = function(a) {
        a = _.oA(a);
        _.gf("oauth-flow/authWindowWidth", 445);
        _.gf("oauth-flow/authWindowHeight", 615);
        pA(a)
    }
    ;
    _.sA = function(a) {
        _.jz.unsubscribe(_.kz, a);
        _.jz.subscribe(_.kz, a)
    }
    ;
    var zA, CA;
    _.uA = function(a) {
        return a.cookiepolicy ? !0 : (_.tA("cookiepolicy is a required field.  See https://developers.google.com/+/web/signin/#button_attr_cookiepolicy for more information."),
        !1)
    }
    ;
    _.tA = function(a) {
        window.console && (window.console.error ? window.console.error(a) : window.console.log && window.console.log(a))
    }
    ;
    _.yA = function(a, b) {
        var c = _.lo();
        _.Qe(a, c);
        c = Yz(c);
        if (_.uA(c)) {
            var d = _.vA();
            _.wA(c);
            b ? _.Xe(b, "click", function() {
                _.xA(c, d)
            }) : _.xA(c, d)
        }
    }
    ;
    _.vA = function() {
        var a = new zA;
        _.sA(function(b) {
            a.nF && b && (b.access_token && _.gf("isPlusUser", !0),
            b["g-oauth-window"] && (a.nF = !1,
            _.$f.warn("OTA app install is no longer supported.")))
        });
        return a
    }
    ;
    zA = function() {
        this.nF = !1
    }
    ;
    _.wA = function(a) {
        a = _.AA(a);
        _.BA(a.callback);
        _.cA(function() {
            _.qA(a)
        })
    }
    ;
    _.AA = function(a) {
        CA(a);
        a.redirecturi && delete a.redirecturi;
        pz(function(b) {
            return a[b]
        }) || (a.authuser = 0);
        return a
    }
    ;
    CA = function(a) {
        /^\s*$/.test(a.scope || "") && (a.scope = "https://www.googleapis.com/auth/plus.login")
    }
    ;
    _.BA = function(a) {
        if ("string" === typeof a)
            if (window[a])
                a = window[a];
            else {
                _.tA('Callback function named "' + a + '" not found');
                return
            }
        a && _.sA(a)
    }
    ;
    _.xA = function(a, b) {
        b.nF = !0;
        a = _.AA(a);
        _.rA(a)
    }
    ;
    _.E("gapi.auth.authorize", lA);
    _.E("gapi.auth.checkSessionState", function(a, b) {
        var c = _.Oe();
        c.client_id = a.client_id;
        c.session_state = a.session_state;
        _.cA(function() {
            Pz() ? Lz.send("check_session_state", c, function(d) {
                b.call(null, d[0])
            }, _.Qm) : _.eg.call(_.hz, "check_session_state", Mz(function(d) {
                b.call(null, d)
            }), c.session_state, c.client_id)
        })
    });
    _.E("gapi.auth.getAuthHeaderValueForFirstParty", mA);
    _.E("gapi.auth.getToken", yz);
    _.E("gapi.auth.getVersionInfo", function(a, b) {
        _.cA(function() {
            var c = _.pi() || ""
              , d = null
              , e = null;
            c && (e = c.split(" "),
            2 == e.length && (d = e[1]));
            d ? Pz() ? Lz.send("get_versioninfo", {
                xapisidHash: d,
                sessionIndex: b
            }, function(f) {
                a(f[0])
            }, _.Qm) : _.eg.call(_.hz, "get_versioninfo", Mz(function(f) {
                a(f)
            }), d, b) : a()
        })
    });
    _.E("gapi.auth.init", _.cA);
    _.E("gapi.auth.setToken", _.zz);
    _.E("gapi.auth.signIn", function(a) {
        _.yA(a)
    });
    _.E("gapi.auth.signOut", function() {
        var a = yz();
        a && eA(a, a.cookie_policy)
    });
    _.E("gapi.auth.unsafeUnpackIdToken", $z);
    _.E("gapi.auth._pimf", _.qA);
    _.E("gapi.auth._oart", Xz);
    _.E("gapi.auth._guss", function(a) {
        return Bz(a).read()
    });
    var DA = _.lo();
    DA.clientid && DA.scope && DA.callback && !_.ff("disableRealtimeCallback") && _.wA(DA);
    var ay = function() {};
    ay.prototype.dL = null;
    ay.prototype.getOptions = function() {
        var a;
        (a = this.dL) || (a = {},
        _.by(this) && (a[0] = !0,
        a[1] = !0),
        a = this.dL = a);
        return a
    }
    ;
    var dy;
    dy = function() {}
    ;
    _.ab(dy, ay);
    _.by = function(a) {
        if (!a.EO && "undefined" == typeof XMLHttpRequest && "undefined" != typeof ActiveXObject) {
            for (var b = ["MSXML2.XMLHTTP.6.0", "MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"], c = 0; c < b.length; c++) {
                var d = b[c];
                try {
                    return new ActiveXObject(d),
                    a.EO = d
                } catch (e) {}
            }
            throw Error("ya");
        }
        return a.EO
    }
    ;
    _.cy = new dy;
    _.Og = window.googleapis && window.googleapis.server || {};
    var Ug = function(a) {
        return {
            execute: function(b) {
                var c = {
                    method: a.httpMethod || "GET",
                    root: a.root,
                    path: a.url,
                    params: a.urlParams,
                    headers: a.headers,
                    body: a.body
                }
                  , d = window.gapi
                  , e = function() {
                    var f = d.config.get("client/apiKey")
                      , h = d.config.get("client/version");
                    try {
                        var k = d.config.get("googleapis.config/developerKey")
                          , l = d.config.get("client/apiKey", k);
                        d.config.update("client/apiKey", l);
                        d.config.update("client/version", "1.0.0-alpha");
                        var m = d.client;
                        m.request.call(m, c).then(b, b)
                    } finally {
                        d.config.update("client/apiKey", f),
                        d.config.update("client/version", h)
                    }
                };
                d.client ? e() : d.load.call(d, "client", e)
            }
        }
    }, Vg = function(a, b) {
        return function(c) {
            var d = {};
            c = c.body;
            var e = _.Vf(c)
              , f = {};
            if (e && e.length)
                for (var h = e.length, k = 0; k < h; ++k) {
                    var l = e[k];
                    f[l.id] = l
                }
            h = b.length;
            for (k = 0; k < h; ++k)
                l = b[k].id,
                d[l] = e && e.length ? f[l] : e;
            a(d, c)
        }
    }, Wg = function(a) {
        a.transport = {
            name: "googleapis",
            execute: function(b, c) {
                for (var d = [], e = b.length, f = 0; f < e; ++f) {
                    var h = b[f]
                      , k = h.method
                      , l = String(k).split(".")[0];
                    l = _.ff("googleapis.config/versions/" + k) || _.ff("googleapis.config/versions/" + l) || "v1";
                    d.push({
                        jsonrpc: "2.0",
                        id: h.id,
                        method: k,
                        apiVersion: String(l),
                        params: h.params
                    })
                }
                b = Ug({
                    httpMethod: "POST",
                    root: a.transport.root,
                    url: "/rpc?pp=0",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: d
                });
                b.execute.call(b, Vg(c, d))
            },
            root: void 0
        }
    }, Xg = function(a) {
        var b = this.method
          , c = this.transport;
        c.execute.call(c, [{
            method: b,
            id: b,
            params: this.rpc
        }], function(d) {
            d = d[b];
            d.error || (d = d.data || d.result);
            a(d)
        })
    }, Zg = function() {
        for (var a = Yg, b = a.split("."), c = function(k) {
            k = k || {};
            k.groupId = k.groupId || "@self";
            k.userId = k.userId || "@viewer";
            k = {
                method: a,
                rpc: k || {}
            };
            Wg(k);
            k.execute = Xg;
            return k
        }, d = _.u, e = b.length, f = 0; f < e; ++f) {
            var h = d[b[f]] || {};
            f + 1 == e && (h = c);
            d = d[b[f]] = h
        }
        if (1 < b.length && "googleapis" != b[0])
            for (b[0] = "googleapis",
            "delete" == b[b.length - 1] && (b[b.length - 1] = "remove"),
            d = _.u,
            e = b.length,
            f = 0; f < e; ++f)
                h = d[b[f]] || {},
                f + 1 == e && (h = c),
                d = d[b[f]] = h
    }, Yg;
    for (Yg in _.ff("googleapis.config/methods"))
        Zg();
    _.E("googleapis.newHttpRequest", function(a) {
        return Ug(a)
    });
    _.E("googleapis.setUrlParameter", function(a, b) {
        if ("trace" !== a)
            throw Error("A");
        _.gf("client/trace", b)
    });
    _.Mh = function(a) {
        return null == a ? "" : String(a)
    }
    ;
    _.Nh = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");
    _.Oh = function(a, b) {
        if (!b)
            return a;
        var c = a.indexOf("#");
        0 > c && (c = a.length);
        var d = a.indexOf("?");
        if (0 > d || d > c) {
            d = c;
            var e = ""
        } else
            e = a.substring(d + 1, c);
        a = [a.slice(0, d), e, a.slice(c)];
        c = a[1];
        a[1] = b ? c ? c + "&" + b : b : c;
        return a[0] + (a[1] ? "?" + a[1] : "") + a[2]
    }
    ;
    _.Ph = function(a, b, c) {
        if (Array.isArray(b))
            for (var d = 0; d < b.length; d++)
                _.Ph(a, String(b[d]), c);
        else
            null != b && c.push(a + ("" === b ? "" : "=" + encodeURIComponent(String(b))))
    }
    ;
    _.Qh = function(a) {
        var b = [], c;
        for (c in a)
            _.Ph(c, a[c], b);
        return b.join("&")
    }
    ;
    _.Rh = function(a, b) {
        b = _.Qh(b);
        return _.Oh(a, b)
    }
    ;
    _.Sh = function(a, b, c, d) {
        for (var e = c.length; 0 <= (b = a.indexOf(c, b)) && b < d; ) {
            var f = a.charCodeAt(b - 1);
            if (38 == f || 63 == f)
                if (f = a.charCodeAt(b + e),
                !f || 61 == f || 38 == f || 35 == f)
                    return b;
            b += e + 1
        }
        return -1
    }
    ;
    _.Th = /#|$/;
    var Fi = function(a, b) {
        a = _.jf.CL({
            id: a,
            name: a
        });
        a.style.width = "1px";
        a.style.height = "1px";
        a.style.position = "absolute";
        a.style.top = "-100px";
        a.style.display = "none";
        if (window.navigator) {
            var c = window.navigator.userAgent || "";
            var d = window.navigator.product || "";
            c = 0 != c.indexOf("Opera") && -1 == c.indexOf("WebKit") && "Gecko" == d && 0 < c.indexOf("rv:1.")
        } else
            c = !1;
        a.src = c ? "about:blank" : b;
        a.tabIndex = -1;
        "function" === typeof a.setAttribute ? a.setAttribute("aria-hidden", "true") : a["aria-hidden"] = "true";
        document.body.appendChild(a);
        c && (a.src = b);
        return a
    };
    _.ri = {
        kO: _.qi,
        f1: _.ni,
        wN: function() {
            var a = null;
            _.ni() && (a = window.__PVT,
            null == a && (a = (new _.fi(document)).get("BEAT")));
            return a
        },
        YM: _.pi
    };
    var Hi, Gi;
    Hi = function() {
        return !!Gi("auth/useFirstPartyAuthV2")
    }
    ;
    Gi = function(a) {
        return _.ff("googleapis.config/" + a)
    }
    ;
    _.Ii = function(a, b, c) {
        a = void 0 === a ? {} : a;
        b = void 0 === b ? window.location.href : b;
        c = void 0 === c ? "auto" : c;
        if ("none" == c)
            return a;
        var d = a.Authorization
          , e = a.OriginToken;
        if (!d && !e) {
            (e = _.ti()) && e.access_token && ("oauth2" == c || "auto" == c) && (d = String(e.token_type || "Bearer") + " " + e.access_token);
            if (e = !d)
                e = (!!Gi("auth/useFirstPartyAuth") || "1p" == c) && "oauth2" != c;
            if (e && _.ni()) {
                if (Hi()) {
                    d = Gi("primaryEmail");
                    c = Gi("appDomain");
                    e = Gi("fogId");
                    var f = [];
                    d && f.push({
                        key: "e",
                        value: d
                    });
                    c && f.push({
                        key: "a",
                        value: c
                    });
                    e && f.push({
                        key: "u",
                        value: e
                    });
                    d = _.pi(f)
                } else
                    d = _.pi();
                d && (b = _.di(b),
                b = a["X-Goog-AuthUser"] || b,
                _.zc(_.Mh(b)) && (!Hi() || Hi() && _.zc(_.Mh(Gi("primaryEmail"))) && _.zc(_.Mh(Gi("appDomain"))) && _.zc(_.Mh(Gi("fogId")))) && (b = "0"),
                _.zc(_.Mh(b)) || (a["X-Goog-AuthUser"] = b))
            }
            d ? a.Authorization = d : !1 !== Gi("auth/useOriginToken") && (e = _.ri.wN()) && (a.OriginToken = e)
        }
        return a
    }
    ;
    _.Ji = function() {
        function a(n, q, p, t, v) {
            var r = f("proxy");
            if (t || !r) {
                r = f("root");
                var w = f("root-1p") || r;
                r = r || "https://content.googleapis.com";
                w = w || "https://clients6.google.com";
                var z = f("xd3") || "/static/proxy.html";
                r = (t || String(q ? w : r)) + z
            }
            r = String(r);
            p && (r += (0 <= r.indexOf("?") ? "&" : "?") + "usegapi=1");
            (q = _.jf.Ag().jsh || _.Ye.h) && (r += (0 <= r.indexOf("?") ? "&" : "?") + "jsh=" + encodeURIComponent(q));
            r += "#parent=" + encodeURIComponent(null != v ? String(v) : _.Lg.getOrigin(document.location.href));
            return r + ("&rpctoken=" + n)
        }
        function b(n, q, p, t, v) {
            var r = d(p, t, v);
            k[r] || (p = Fi(r, q),
            _.eg.register("ready:" + n, function() {
                _.eg.unregister("ready:" + n);
                if (!l[r]) {
                    l[r] = !0;
                    var w = m[r];
                    m[r] = [];
                    for (var z = 0, A = w.length; z < A; ++z) {
                        var D = w[z];
                        e(D.An, D.Y3, D.callback)
                    }
                }
            }),
            _.eg.Zt(r, q),
            k[r] = p)
        }
        function c(n, q, p) {
            var t = String(2147483647 * _.Bi() | 0)
              , v = a(t, n, q, p);
            _.bg(function() {
                b(t, v, n, q, p)
            })
        }
        function d(n, q, p) {
            n = a("", n, q, p, "");
            p = h[n + q];
            if (!p) {
                p = new _.Sg;
                p.Hu(n);
                p = p.bi().toLowerCase();
                var t = _.Bi();
                p += t;
                h[n + q] = p
            }
            return "apiproxy" + p
        }
        function e(n, q, p) {
            var t = void 0
              , v = !1;
            if ("makeHttpRequests" !== n)
                throw 'only "makeHttpRequests" RPCs are implemented';
            var r = function(x) {
                if (x) {
                    if ("undefined" != typeof t && "undefined" != typeof x.root && t != x.root)
                        throw "all requests in a batch must have the same root URL";
                    t = x.root || t;
                    v = _.ri.kO(x.headers)
                }
            };
            if (q)
                for (var w = 0, z = q.length; w < z; ++w) {
                    var A = q[w];
                    A && r(A.params)
                }
            r = !!f("useGapiForXd3");
            var D = d(v, r, t);
            k[D] || c(v, r, t);
            l[D] ? _.eg.call(D, n, function(x) {
                if (this.f == D && this.t == _.eg.wm(this.f) && this.origin == _.eg.Jm(this.f)) {
                    var G = _.Vf(x);
                    p(G, x)
                }
            }, q) : (m[D] || (m[D] = []),
            m[D].push({
                An: n,
                Y3: q,
                callback: p
            }))
        }
        function f(n) {
            return _.ff("googleapis.config/" + n)
        }
        var h = {}
          , k = {}
          , l = {}
          , m = {};
        return {
            Cda: function(n, q, p) {
                return _.Ii(n, q, p)
            },
            jq: e
        }
    }();
    var $g = {
        i7: "Authorization",
        RT: "Content-ID",
        H7: "Content-Transfer-Encoding",
        I7: "Content-Type",
        n8: "Date",
        eaa: "OriginToken",
        A9: "hotrod-board-name",
        B9: "hotrod-chrome-cpu-model",
        C9: "hotrod-chrome-processors",
        Ica: "WWW-Authenticate",
        Kca: "X-Ad-Manager-Impersonation",
        Jca: "X-Ad-Manager-Debug-Info",
        Lca: "X-ClientDetails",
        Mca: "X-Compass-Routing-Destination",
        Nca: "X-Goog-AuthUser",
        Qca: "X-Goog-Encode-Response-If-Executable",
        Sca: "X-Goog-Meeting-ABR",
        Tca: "X-Goog-Meeting-Botguardid",
        Uca: "X-Goog-Meeting-ClientInfo",
        Vca: "X-Goog-Meeting-ClientVersion",
        Wca: "X-Goog-Meeting-Debugid",
        Xca: "X-Goog-Meeting-Identifier",
        Yca: "X-Goog-Meeting-Interop-Cohorts",
        Zca: "X-Goog-Meeting-Interop-Type",
        ada: "X-Goog-Meeting-RtcClient",
        bda: "X-Goog-Meeting-StartSource",
        cda: "X-Goog-Meeting-Token",
        dda: "X-Goog-Meeting-ViewerInfo",
        eda: "X-Goog-Meeting-Viewer-Token",
        fda: "X-Goog-PageId",
        gda: "X-Goog-Safety-Content-Type",
        hda: "X-Goog-Safety-Encoding",
        Oca: "X-Goog-Drive-Client-Version",
        Pca: "X-Goog-Drive-Resource-Keys",
        ida: "X-HTTP-Method-Override",
        jda: "X-JavaScript-User-Agent",
        kda: "X-Origin",
        lda: "X-Referer",
        mda: "X-Requested-With",
        pda: "X-Use-HTTP-Status-Code-Override",
        nda: "X-Server-Timeout",
        Rca: "X-Goog-First-Party-Reauth",
        oda: "X-Server-Token"
    }
      , ah = "Accept Accept-Language Authorization Cache-Control cast-device-capabilities Content-Disposition Content-Encoding Content-Language Content-Length Content-MD5 Content-Range Content-Transfer-Encoding Content-Type Date developer-token EES-S7E-MODE financial-institution-id GData-Version google-cloud-resource-prefix hotrod-board-name hotrod-chrome-cpu-model hotrod-chrome-processors Host If-Match If-Modified-Since If-None-Match If-Unmodified-Since linked-customer-id login-customer-id MIME-Version Origin OriginToken Pragma Range request-id Slug Transfer-Encoding Want-Digest X-Ad-Manager-Impersonation X-Ad-Manager-Debug-Info x-alkali-account-key x-alkali-application-key x-alkali-auth-apps-namespace x-alkali-auth-entities-namespace x-alkali-auth-entity x-alkali-client-locale x-chrome-connected x-framework-xsrf-token X-Client-Data X-ClientDetails X-Client-Version X-Firebase-Locale X-GData-Client X-GData-Key X-Goog-AuthUser X-Goog-PageId X-Goog-Encode-Response-If-Executable X-GoogApps-Allowed-Domains X-Goog-AdX-Buyer-Impersonation X-Goog-Api-Client X-Goog-Api-Key X-Goog-Visibilities X-Goog-Correlation-Id X-Goog-Request-Info X-Goog-Request-Reason X-Goog-Request-Time X-Goog-Experiments x-goog-ext-124712974-jspb x-goog-ext-251363160-jspb x-goog-ext-259736195-jspb x-goog-ext-467253834-jspb x-goog-ext-472780938-jspb x-goog-ext-477772811-jspb x-goog-ext-275505673-bin x-goog-ext-353267353-bin x-goog-ext-496773601-bin X-Goog-Firebase-Installations-Auth x-goog-greenenergyuserappservice-metadata X-Firebase-Client X-Firebase-Client-Log-Type X-Firebase-GMPID X-Firebase-Auth-Token X-Firebase-AppCheck X-Firebase-Token X-Goog-Drive-Client-Version X-Goog-Drive-Resource-Keys x-goog-iam-authority-selector x-goog-iam-authorization-token x-goog-request-params x-goog-sherlog-context X-Goog-Sn-Metadata X-Goog-Sn-PatientId X-Goog-Spatula X-Goog-Travel-Bgr X-Goog-Travel-Settings X-Goog-Upload-Command X-Goog-Upload-Content-Disposition X-Goog-Upload-Content-Length X-Goog-Upload-Content-Type X-Goog-Upload-File-Name X-Goog-Upload-Header-Content-Encoding X-Goog-Upload-Header-Content-Length X-Goog-Upload-Header-Content-Type X-Goog-Upload-Header-Transfer-Encoding X-Goog-Upload-Offset X-Goog-Upload-Protocol X-Goog-User-Project X-Goog-Visitor-Id X-Goog-FieldMask X-Google-Project-Override X-HTTP-Method-Override X-JavaScript-User-Agent X-Pan-Versionid X-Proxied-User-IP X-Origin X-Referer X-Requested-With X-Stadia-Client-Context X-Upload-Content-Length X-Upload-Content-Type X-Use-Alt-Service X-Use-HTTP-Status-Code-Override X-Ios-Bundle-Identifier X-Android-Package X-Ariane-Xsrf-Token X-Earth-Engine-App-ID-Token X-Earth-Engine-Computation-Profile X-Earth-Engine-Computation-Profiling X-Play-Console-Experiments-Override X-Play-Console-Session-Id X-YouTube-Bootstrap-Logged-In X-YouTube-VVT X-YouTube-Page-CL X-YouTube-Page-Timestamp X-Compass-Routing-Destination X-Goog-Meeting-ABR X-Goog-Meeting-Botguardid X-Goog-Meeting-ClientInfo X-Goog-Meeting-ClientVersion X-Goog-Meeting-Debugid X-Goog-Meeting-Identifier X-Goog-Meeting-Interop-Cohorts X-Goog-Meeting-Interop-Type X-Goog-Meeting-RtcClient X-Goog-Meeting-StartSource X-Goog-Meeting-Token X-Goog-Meeting-ViewerInfo X-Goog-Meeting-Viewer-Token x-sdm-id-token X-Sfdc-Authorization X-Server-Timeout x-foyer-client-environment X-Goog-First-Party-Reauth X-Server-Token".split(" ")
      , bh = "Digest Cache-Control Content-Disposition Content-Encoding Content-Language Content-Length Content-MD5 Content-Range Content-Transfer-Encoding Content-Type Date ETag Expires Last-Modified Location Pragma Range Server Transfer-Encoding WWW-Authenticate Vary Unzipped-Content-MD5 X-Correlation-ID X-Debug-Tracking-Id X-Goog-Generation X-Goog-Metageneration X-Goog-Safety-Content-Type X-Goog-Safety-Encoding X-Google-Trace X-Goog-Upload-Chunk-Granularity X-Goog-Upload-Control-URL X-Goog-Upload-Size-Received X-Goog-Upload-Status X-Goog-Upload-URL X-Goog-Diff-Download-Range X-Goog-Hash X-Goog-Updated-Authorization X-Server-Object-Version X-Guploader-Customer X-Guploader-Upload-Result X-Guploader-Uploadid X-Google-Gfe-Backend-Request-Cost X-Earth-Engine-Computation-Profile X-Goog-Meeting-ABR X-Goog-Meeting-Botguardid X-Goog-Meeting-ClientInfo X-Goog-Meeting-ClientVersion X-Goog-Meeting-Debugid X-Goog-Meeting-RtcClient X-Goog-Meeting-Token X-Goog-Meeting-Viewer-Token X-Compass-Routing-Destination".split(" ");
    var ch, dh, eh, fh, hh, ih, jh, kh, lh, mh, nh, oh;
    ch = null;
    dh = null;
    eh = null;
    fh = function(a, b) {
        var c = a.length;
        if (c != b.length)
            return !1;
        for (var d = 0; d < c; ++d) {
            var e = a.charCodeAt(d)
              , f = b.charCodeAt(d);
            65 <= e && 90 >= e && (e += 32);
            65 <= f && 90 >= f && (f += 32);
            if (e != f)
                return !1
        }
        return !0
    }
    ;
    _.gh = function(a) {
        a = String(a || "").split("\x00").join("");
        for (var b = [], c = !0, d = a.length, e = 0; e < d; ++e) {
            var f = a.charAt(e)
              , h = a.charCodeAt(e);
            if (55296 <= h && 56319 >= h && e + 1 < d) {
                var k = a.charAt(e + 1)
                  , l = a.charCodeAt(e + 1);
                56320 <= l && 57343 >= l && (f += k,
                h = 65536 + (h - 55296 << 10) + (l - 56320),
                ++e)
            }
            if (!(0 <= h && 1114109 >= h) || 55296 <= h && 57343 >= h || 64976 <= h && 65007 >= h || 65534 == (h & 65534))
                h = 65533,
                f = String.fromCharCode(h);
            k = !(32 <= h && 126 >= h) || " " == f || c && ":" == f || "\\" == f;
            !c || "/" != f && "?" != f || (c = !1);
            "%" == f && (e + 2 >= d ? k = !0 : (l = 16 * parseInt(a.charAt(e + 1), 16) + parseInt(a.charAt(e + 2), 16),
            0 <= l && 255 >= l ? (h = l,
            f = 0 == h ? "" : "%" + (256 + l).toString(16).toUpperCase().substr(1),
            e += 2) : k = !0));
            k && (f = encodeURIComponent(f),
            1 >= f.length && (0 <= h && 127 >= h ? f = "%" + (256 + h).toString(16).toUpperCase().substr(1) : (h = 65533,
            f = encodeURIComponent(String.fromCharCode(h)))));
            b.push(f)
        }
        a = b.join("");
        a = a.split("#")[0];
        a = a.split("?");
        b = a[0].split("/");
        c = [];
        d = b.length;
        for (e = 0; e < d; ++e)
            f = b[e],
            h = f.split("%2E").join("."),
            h = h.split(encodeURIComponent("\uff0e")).join("."),
            "." == h ? e + 1 == d && c.push("") : ".." == h ? (0 < c.length && c.pop(),
            e + 1 == d && c.push("")) : c.push(f);
        a[0] = c.join("/");
        for (a = a.join("?"); a && "/" == a.charAt(0); )
            a = a.substr(1);
        return "/" + a
    }
    ;
    hh = {
        "access-control-allow-origin": !0,
        "access-control-allow-credentials": !0,
        "access-control-expose-headers": !0,
        "access-control-max-age": !0,
        "access-control-allow-headers": !0,
        "access-control-allow-methods": !0,
        p3p: !0,
        "proxy-authenticate": !0,
        "set-cookie": !0,
        "set-cookie2": !0,
        status: !0,
        tsv: !0,
        "": !0
    };
    ih = {
        "accept-charset": !0,
        "accept-encoding": !0,
        "access-control-request-headers": !0,
        "access-control-request-method": !0,
        "client-ip": !0,
        clientip: !0,
        connection: !0,
        "content-length": !0,
        cookie: !0,
        cookie2: !0,
        date: !0,
        dnt: !0,
        expect: !0,
        forwarded: !0,
        "forwarded-for": !0,
        "front-end-https": !0,
        host: !0,
        "keep-alive": !0,
        "max-forwards": !0,
        method: !0,
        origin: !0,
        "raw-post-data": !0,
        referer: !0,
        te: !0,
        trailer: !0,
        "transfer-encoding": !0,
        upgrade: !0,
        url: !0,
        "user-agent": !0,
        version: !0,
        via: !0,
        "x-att-deviceid": !0,
        "x-chrome-connected": !0,
        "x-client-data": !0,
        "x-client-ip": !0,
        "x-do-not-track": !0,
        "x-forwarded-by": !0,
        "x-forwarded-for": !0,
        "x-forwarded-host": !0,
        "x-forwarded-proto": !0,
        "x-geo": !0,
        "x-googapps-allowed-domains": !0,
        "x-origin": !0,
        "x-proxyuser-ip": !0,
        "x-real-ip": !0,
        "x-referer": !0,
        "x-uidh": !0,
        "x-user-ip": !0,
        "x-wap-profile": !0,
        "": !0
    };
    jh = function(a) {
        if (!_.Ub(a))
            return null;
        for (var b = {}, c = 0; c < a.length; c++) {
            var d = a[c];
            if ("string" === typeof d && d) {
                var e = d.toLowerCase();
                fh(d, e) && (b[e] = d)
            }
        }
        for (var f in $g)
            Object.prototype.hasOwnProperty.call($g, f) && (a = $g[f],
            c = a.toLowerCase(),
            fh(a, c) && Object.prototype.hasOwnProperty.call(b, c) && (b[c] = a));
        return b
    }
    ;
    kh = new RegExp("(" + /[\t -~\u00A0-\u2027\u202A-\uD7FF\uE000-\uFFFF]/.source + "|" + /[\uD800-\uDBFF][\uDC00-\uDFFF]/.source + "){1,100}","g");
    lh = /[ \t]*(\r?\n[ \t]+)+/g;
    mh = /^[ \t]+|[ \t]+$/g;
    nh = function(a, b) {
        if (!b && "object" === typeof a && a && "number" === typeof a.length) {
            b = a;
            a = "";
            for (var c = b.length, d = 0; d < c; ++d) {
                var e = nh(b[d], !0);
                e && (a && (e = a + ", " + e),
                a = e)
            }
        }
        if ("string" === typeof a && (a = a.replace(lh, " "),
        a = a.replace(mh, ""),
        "" == a.replace(kh, "") && a))
            return a
    }
    ;
    oh = /^[-0-9A-Za-z!#\$%&'\*\+\.\^_`\|~]+$/g;
    _.ph = function(a) {
        if ("string" !== typeof a || !a || !a.match(oh))
            return null;
        a = a.toLowerCase();
        if (null == eh) {
            var b = []
              , c = _.ff("googleapis/headers/response");
            c && "object" === typeof c && "number" === typeof c.length || (c = null);
            null != c && (b = b.concat(c));
            (c = _.ff("client/headers/response")) && "object" === typeof c && "number" === typeof c.length || (c = null);
            null != c && (b = b.concat(c));
            b = b.concat(bh);
            (c = _.ff("googleapis/headers/request")) && "object" === typeof c && "number" === typeof c.length || (c = null);
            null != c && (b = b.concat(c));
            (c = _.ff("client/headers/request")) && "object" === typeof c && "number" === typeof c.length || (c = null);
            null != c && (b = b.concat(c));
            b = b.concat(ah);
            for (var d in $g)
                Object.prototype.hasOwnProperty.call($g, d) && b.push($g[d]);
            eh = jh(b)
        }
        return null != eh && eh.hasOwnProperty(a) ? eh[a] : a
    }
    ;
    _.qh = function(a, b) {
        if (!_.ph(a) || !nh(b))
            return null;
        a = a.toLowerCase();
        if (a.match(/^x-google|^x-gfe|^proxy-|^sec-/i) || ih[a])
            return null;
        if (null == ch) {
            b = [];
            var c = _.ff("googleapis/headers/request");
            c && "object" === typeof c && "number" === typeof c.length || (c = null);
            null != c && (b = b.concat(c));
            (c = _.ff("client/headers/request")) && "object" === typeof c && "number" === typeof c.length || (c = null);
            null != c && (b = b.concat(c));
            b = b.concat(ah);
            ch = jh(b)
        }
        return null != ch && ch.hasOwnProperty(a) ? ch[a] : null
    }
    ;
    _.rh = function(a, b) {
        if (!_.ph(a) || !nh(b))
            return null;
        a = a.toLowerCase();
        if (hh[a])
            return null;
        if (null == dh) {
            b = [];
            var c = _.ff("googleapis/headers/response");
            c && "object" === typeof c && "number" === typeof c.length || (c = null);
            null != c && (b = b.concat(c));
            (c = _.ff("client/headers/response")) && "object" === typeof c && "number" === typeof c.length || (c = null);
            null != c && (b = b.concat(c));
            b = b.concat(bh);
            dh = jh(b)
        }
        return null != dh && dh.hasOwnProperty(a) ? a : null
    }
    ;
    _.sh = function(a, b) {
        if (_.ph(b) && null != a && "object" === typeof a) {
            var c = void 0, d;
            for (d in a)
                if (Object.prototype.hasOwnProperty.call(a, d) && fh(d, b)) {
                    var e = nh(a[d]);
                    e && (void 0 !== c && (e = c + ", " + e),
                    c = e)
                }
            return c
        }
    }
    ;
    _.th = function(a, b, c, d) {
        var e = _.ph(b);
        if (e) {
            c && (c = nh(c));
            b = b.toLowerCase();
            for (var f in a)
                Object.prototype.hasOwnProperty.call(a, f) && fh(f, b) && delete a[f];
            c && (d || (b = e),
            a[b] = c)
        }
    }
    ;
    _.vh = function(a, b) {
        var c = {};
        if (!a)
            return c;
        a = a.split("\r\n");
        for (var d = a.length, e = 0; e < d; ++e) {
            var f = a[e];
            if (!f)
                break;
            var h = f.indexOf(":");
            if (!(0 >= h)) {
                var k = f.substring(0, h);
                if (k = _.ph(k)) {
                    for (f = f.substring(h + 1); e + 1 < d && a[e + 1].match(/^[ \t]/); )
                        f += "\r\n" + a[e + 1],
                        ++e;
                    if (f = nh(f))
                        if (k = _.rh(k, f) || (b ? void 0 : k))
                            k = k.toLowerCase(),
                            h = _.sh(c, k),
                            void 0 !== h && (f = h + ", " + f),
                            _.th(c, k, f, !0)
                }
            }
        }
        return c
    }
    ;
    _.su = function() {
        return Date.now()
    }
    ;
    /\uffff/.test("\uffff");
    var py;
    _.ly = function(a, b) {
        var c = _.Ub(b)
          , d = c ? b : arguments;
        for (c = c ? 0 : 1; c < d.length; c++) {
            if (null == a)
                return;
            a = a[d[c]]
        }
        return a
    }
    ;
    _.my = function(a) {
        if (!a || "object" !== typeof a)
            return a;
        if ("function" === typeof a.clone)
            return a.clone();
        if ("undefined" !== typeof Map && a instanceof Map)
            return new Map(a);
        if ("undefined" !== typeof Set && a instanceof Set)
            return new Set(a);
        if (a instanceof Date)
            return new Date(a.getTime());
        var b = Array.isArray(a) ? [] : "function" !== typeof ArrayBuffer || "function" !== typeof ArrayBuffer.isView || !ArrayBuffer.isView(a) || a instanceof DataView ? {} : new a.constructor(a.length), c;
        for (c in a)
            b[c] = _.my(a[c]);
        return b
    }
    ;
    _.ny = function(a) {
        var b = _.ob()
          , c = "";
        _.Ob() ? (c = /Windows (?:NT|Phone) ([0-9.]+)/,
        c = (b = c.exec(b)) ? b[1] : "0.0") : _.Mb() ? (c = /(?:iPhone|iPod|iPad|CPU)\s+OS\s+(\S+)/,
        c = (b = c.exec(b)) && b[1].replace(/_/g, ".")) : _.Nb() ? (c = /Mac OS X ([0-9_.]+)/,
        c = (b = c.exec(b)) ? b[1].replace(/_/g, ".") : "10") : _.rb(_.ob().toLowerCase(), "kaios") ? (c = /(?:KaiOS)\/(\S+)/i,
        c = (b = c.exec(b)) && b[1]) : _.Jb() ? (c = /Android\s+([^\);]+)(\)|;)/,
        c = (b = c.exec(b)) && b[1]) : _.Pb() && (c = /(?:CrOS\s+(?:i686|x86_64)\s+([0-9.]+))/,
        c = (b = c.exec(b)) && b[1]);
        return 0 <= _.Lc(c || "", a)
    }
    ;
    _.oy = function(a) {
        return (a = _.by(a)) ? new ActiveXObject(a) : new XMLHttpRequest
    }
    ;
    py = function(a, b) {
        var c = [];
        for (b = b || 0; b < a.length; b += 2)
            _.Ph(a[b], a[b + 1], c);
        return c.join("&")
    }
    ;
    _.qy = function(a, b) {
        var c = 2 == arguments.length ? py(arguments[1], 0) : py(arguments, 1);
        return _.Oh(a, c)
    }
    ;
    _.ry = function(a, b, c) {
        c = null != c ? "=" + encodeURIComponent(String(c)) : "";
        return _.Oh(a, b + c)
    }
    ;
    _.sy = function(a, b) {
        _.bj(a, "/") && (a = a.slice(0, -1));
        _.yc(b, "/") && (b = b.slice(1));
        return a + "/" + b
    }
    ;
    _.ty = function(a) {
        switch (a) {
        case 200:
        case 201:
        case 202:
        case 204:
        case 206:
        case 304:
        case 1223:
            return !0;
        default:
            return !1
        }
    }
    ;
    _.uy = function(a, b) {
        _.Gj.call(this);
        this.jl = a || 1;
        this.vu = b || _.u;
        this.ZK = (0,
        _.M)(this.n6, this);
        this.zP = _.su()
    }
    ;
    _.ab(_.uy, _.Gj);
    _.g = _.uy.prototype;
    _.g.enabled = !1;
    _.g.yc = null;
    _.g.setInterval = function(a) {
        this.jl = a;
        this.yc && this.enabled ? (this.stop(),
        this.start()) : this.yc && this.stop()
    }
    ;
    _.g.n6 = function() {
        if (this.enabled) {
            var a = _.su() - this.zP;
            0 < a && a < .8 * this.jl ? this.yc = this.vu.setTimeout(this.ZK, this.jl - a) : (this.yc && (this.vu.clearTimeout(this.yc),
            this.yc = null),
            this.dispatchEvent("tick"),
            this.enabled && (this.stop(),
            this.start()))
        }
    }
    ;
    _.g.start = function() {
        this.enabled = !0;
        this.yc || (this.yc = this.vu.setTimeout(this.ZK, this.jl),
        this.zP = _.su())
    }
    ;
    _.g.stop = function() {
        this.enabled = !1;
        this.yc && (this.vu.clearTimeout(this.yc),
        this.yc = null)
    }
    ;
    _.g.qa = function() {
        _.uy.H.qa.call(this);
        this.stop();
        delete this.vu
    }
    ;
    var wy, xy, yy;
    _.vy = function(a) {
        _.Gj.call(this);
        this.headers = new Map;
        this.bB = a || null;
        this.If = !1;
        this.aB = this.La = null;
        this.qy = "";
        this.xp = 0;
        this.Vm = this.CE = this.Lx = this.HC = !1;
        this.Pn = 0;
        this.jd = null;
        this.Dl = "";
        this.wJ = this.Og = !1;
        this.jJ = null
    }
    ;
    _.ab(_.vy, _.Gj);
    _.vy.prototype.ob = null;
    wy = /^https?$/i;
    xy = ["POST", "PUT"];
    yy = [];
    _.zy = function(a, b, c, d, e, f, h) {
        var k = new _.vy;
        yy.push(k);
        b && k.V("complete", b);
        k.Cp("ready", k.cX);
        f && k.yI(f);
        h && (k.Og = h);
        k.send(a, c, d, e)
    }
    ;
    _.vy.prototype.cX = function() {
        this.Ga();
        _.Vi(yy, this)
    }
    ;
    _.vy.prototype.yI = function(a) {
        this.Pn = Math.max(0, a)
    }
    ;
    _.vy.prototype.setTrustToken = function(a) {
        this.jJ = a
    }
    ;
    _.vy.prototype.send = function(a, b, c, d) {
        if (this.La)
            throw Error("Ca`" + this.qy + "`" + a);
        b = b ? b.toUpperCase() : "GET";
        this.qy = a;
        this.xp = 0;
        this.HC = !1;
        this.If = !0;
        this.La = this.bB ? _.oy(this.bB) : _.oy(_.cy);
        this.aB = this.bB ? this.bB.getOptions() : _.cy.getOptions();
        this.La.onreadystatechange = (0,
        _.M)(this.qQ, this);
        try {
            this.CE = !0,
            this.La.open(b, String(a), !0),
            this.CE = !1
        } catch (h) {
            this.jw(5, h);
            return
        }
        a = c || "";
        c = new Map(this.headers);
        if (d)
            if (Object.getPrototypeOf(d) === Object.prototype)
                for (var e in d)
                    c.set(e, d[e]);
            else if ("function" === typeof d.keys && "function" === typeof d.get) {
                e = _.sa(d.keys());
                for (var f = e.next(); !f.done; f = e.next())
                    f = f.value,
                    c.set(f, d.get(f))
            } else
                throw Error("Da`" + String(d));
        d = Array.from(c.keys()).find(function(h) {
            return "content-type" == h.toLowerCase()
        });
        e = _.u.FormData && a instanceof _.u.FormData;
        !_.hb(xy, b) || d || e || c.set("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");
        b = _.sa(c);
        for (d = b.next(); !d.done; d = b.next())
            c = _.sa(d.value),
            d = c.next().value,
            c = c.next().value,
            this.La.setRequestHeader(d, c);
        this.Dl && (this.La.responseType = this.Dl);
        "withCredentials"in this.La && this.La.withCredentials !== this.Og && (this.La.withCredentials = this.Og);
        if ("setTrustToken"in this.La && this.jJ)
            try {
                this.La.setTrustToken(this.jJ)
            } catch (h) {}
        try {
            Ay(this),
            0 < this.Pn && ((this.wJ = By(this.La)) ? (this.La.timeout = this.Pn,
            this.La.ontimeout = (0,
            _.M)(this.Lg, this)) : this.jd = _.jy(this.Lg, this.Pn, this)),
            this.Lx = !0,
            this.La.send(a),
            this.Lx = !1
        } catch (h) {
            this.jw(5, h)
        }
    }
    ;
    var By = function(a) {
        return _.Gd && "number" === typeof a.timeout && void 0 !== a.ontimeout
    };
    _.vy.prototype.Lg = function() {
        "undefined" != typeof _.Xa && this.La && (this.xp = 8,
        this.dispatchEvent("timeout"),
        this.abort(8))
    }
    ;
    _.vy.prototype.jw = function(a) {
        this.If = !1;
        this.La && (this.Vm = !0,
        this.La.abort(),
        this.Vm = !1);
        this.xp = a;
        Cy(this);
        Dy(this)
    }
    ;
    var Cy = function(a) {
        a.HC || (a.HC = !0,
        a.dispatchEvent("complete"),
        a.dispatchEvent("error"))
    };
    _.vy.prototype.abort = function(a) {
        this.La && this.If && (this.If = !1,
        this.Vm = !0,
        this.La.abort(),
        this.Vm = !1,
        this.xp = a || 7,
        this.dispatchEvent("complete"),
        this.dispatchEvent("abort"),
        Dy(this))
    }
    ;
    _.vy.prototype.qa = function() {
        this.La && (this.If && (this.If = !1,
        this.Vm = !0,
        this.La.abort(),
        this.Vm = !1),
        Dy(this, !0));
        _.vy.H.qa.call(this)
    }
    ;
    _.vy.prototype.qQ = function() {
        this.isDisposed() || (this.CE || this.Lx || this.Vm ? Ey(this) : this.MF())
    }
    ;
    _.vy.prototype.MF = function() {
        Ey(this)
    }
    ;
    var Ey = function(a) {
        if (a.If && "undefined" != typeof _.Xa && (!a.aB[1] || 4 != _.Fy(a) || 2 != a.getStatus()))
            if (a.Lx && 4 == _.Fy(a))
                _.jy(a.qQ, 0, a);
            else if (a.dispatchEvent("readystatechange"),
            4 == _.Fy(a)) {
                a.If = !1;
                try {
                    _.Gy(a) ? (a.dispatchEvent("complete"),
                    a.dispatchEvent("success")) : (a.xp = 6,
                    Cy(a))
                } finally {
                    Dy(a)
                }
            }
    }
      , Dy = function(a, b) {
        if (a.La) {
            Ay(a);
            var c = a.La
              , d = a.aB[0] ? function() {}
            : null;
            a.La = null;
            a.aB = null;
            b || a.dispatchEvent("ready");
            try {
                c.onreadystatechange = d
            } catch (e) {}
        }
    }
      , Ay = function(a) {
        a.La && a.wJ && (a.La.ontimeout = null);
        a.jd && (_.ky(a.jd),
        a.jd = null)
    };
    _.vy.prototype.isActive = function() {
        return !!this.La
    }
    ;
    _.Gy = function(a) {
        var b = a.getStatus(), c;
        if (!(c = _.ty(b))) {
            if (b = 0 === b)
                a = String(a.qy).match(_.Nh)[1] || null,
                !a && _.u.self && _.u.self.location && (a = _.u.self.location.protocol.slice(0, -1)),
                b = !wy.test(a ? a.toLowerCase() : "");
            c = b
        }
        return c
    }
    ;
    _.Fy = function(a) {
        return a.La ? a.La.readyState : 0
    }
    ;
    _.vy.prototype.getStatus = function() {
        try {
            return 2 < _.Fy(this) ? this.La.status : -1
        } catch (a) {
            return -1
        }
    }
    ;
    _.Hy = function(a) {
        try {
            return a.La ? a.La.responseText : ""
        } catch (b) {
            return ""
        }
    }
    ;
    _.Iy = function(a) {
        try {
            if (!a.La)
                return null;
            if ("response"in a.La)
                return a.La.response;
            switch (a.Dl) {
            case "":
            case "text":
                return a.La.responseText;
            case "arraybuffer":
                if ("mozResponseArrayBuffer"in a.La)
                    return a.La.mozResponseArrayBuffer
            }
            return null
        } catch (b) {
            return null
        }
    }
    ;
    _.vy.prototype.getResponseHeader = function(a) {
        if (this.La && 4 == _.Fy(this))
            return a = this.La.getResponseHeader(a),
            null === a ? void 0 : a
    }
    ;
    _.vy.prototype.getAllResponseHeaders = function() {
        return this.La && 2 <= _.Fy(this) ? this.La.getAllResponseHeaders() || "" : ""
    }
    ;
    _.Ui(function(a) {
        _.vy.prototype.MF = a(_.vy.prototype.MF)
    });
    _.tu = function(a) {
        var b = 0, c;
        for (c in a)
            b++;
        return b
    }
    ;
    _.uu = function(a) {
        var b = [], c = 0, d;
        for (d in a)
            b[c++] = a[d];
        return b
    }
    ;
    _.vu = function(a) {
        var b = [], c = 0, d;
        for (d in a)
            b[c++] = d;
        return b
    }
    ;
    _.wu = function(a) {
        return a.Fb && "function" == typeof a.Fb ? a.Fb() : _.Ub(a) || "string" === typeof a ? a.length : _.tu(a)
    }
    ;
    _.xu = function(a) {
        if (a.Uc && "function" == typeof a.Uc)
            return a.Uc();
        if ("undefined" !== typeof Map && a instanceof Map || "undefined" !== typeof Set && a instanceof Set)
            return Array.from(a.values());
        if ("string" === typeof a)
            return a.split("");
        if (_.Ub(a)) {
            for (var b = [], c = a.length, d = 0; d < c; d++)
                b.push(a[d]);
            return b
        }
        return _.uu(a)
    }
    ;
    _.yu = function(a) {
        if (a.Sf && "function" == typeof a.Sf)
            return a.Sf();
        if (!a.Uc || "function" != typeof a.Uc) {
            if ("undefined" !== typeof Map && a instanceof Map)
                return Array.from(a.keys());
            if (!("undefined" !== typeof Set && a instanceof Set)) {
                if (_.Ub(a) || "string" === typeof a) {
                    var b = [];
                    a = a.length;
                    for (var c = 0; c < a; c++)
                        b.push(c);
                    return b
                }
                return _.vu(a)
            }
        }
    }
    ;
    var Au, Cu, Pu, Ku, Tu, Lu, Nu, Mu, Qu, Ou, Uu;
    _.zu = function() {
        return Math.floor(2147483648 * Math.random()).toString(36) + Math.abs(Math.floor(2147483648 * Math.random()) ^ _.su()).toString(36)
    }
    ;
    Au = function(a, b) {
        if (a) {
            a = a.split("&");
            for (var c = 0; c < a.length; c++) {
                var d = a[c].indexOf("=")
                  , e = null;
                if (0 <= d) {
                    var f = a[c].substring(0, d);
                    e = a[c].substring(d + 1)
                } else
                    f = a[c];
                b(f, e ? decodeURIComponent(e.replace(/\+/g, " ")) : "")
            }
        }
    }
    ;
    _.Bu = function(a, b) {
        var c = a.search(_.Th)
          , d = _.Sh(a, 0, b, c);
        if (0 > d)
            return null;
        var e = a.indexOf("&", d);
        if (0 > e || e > c)
            e = c;
        d += b.length + 1;
        return decodeURIComponent(a.slice(d, -1 !== e ? e : 0).replace(/\+/g, " "))
    }
    ;
    Cu = function(a, b, c) {
        if (a.forEach && "function" == typeof a.forEach)
            a.forEach(b, c);
        else if (_.Ub(a) || "string" === typeof a)
            Array.prototype.forEach.call(a, b, c);
        else
            for (var d = _.yu(a), e = _.xu(a), f = e.length, h = 0; h < f; h++)
                b.call(c, e[h], d && d[h], a)
    }
    ;
    _.Du = function(a, b) {
        this.Yd = this.Ng = this.Mh = "";
        this.Zf = null;
        this.cD = this.ul = "";
        this.Bg = !1;
        var c;
        a instanceof _.Du ? (this.Bg = void 0 !== b ? b : a.Bg,
        _.Eu(this, a.Mh),
        _.Fu(this, a.Ng),
        _.Gu(this, a.ug()),
        _.Hu(this, a.Zf),
        this.setPath(a.getPath()),
        _.Iu(this, a.Rd.clone()),
        this.Uj(a.Nw())) : a && (c = String(a).match(_.Nh)) ? (this.Bg = !!b,
        _.Eu(this, c[1] || "", !0),
        _.Fu(this, c[2] || "", !0),
        _.Gu(this, c[3] || "", !0),
        _.Hu(this, c[4]),
        this.setPath(c[5] || "", !0),
        _.Iu(this, c[6] || "", !0),
        this.Uj(c[7] || "", !0)) : (this.Bg = !!b,
        this.Rd = new _.Ju(null,this.Bg))
    }
    ;
    _.Du.prototype.toString = function() {
        var a = []
          , b = this.Mh;
        b && a.push(Ku(b, Lu, !0), ":");
        var c = this.ug();
        if (c || "file" == b)
            a.push("//"),
            (b = this.Ng) && a.push(Ku(b, Lu, !0), "@"),
            a.push(encodeURIComponent(String(c)).replace(/%25([0-9a-fA-F]{2})/g, "%$1")),
            c = this.Zf,
            null != c && a.push(":", String(c));
        if (c = this.getPath())
            this.Yd && "/" != c.charAt(0) && a.push("/"),
            a.push(Ku(c, "/" == c.charAt(0) ? Mu : Nu, !0));
        (c = this.Rd.toString()) && a.push("?", c);
        (c = this.Nw()) && a.push("#", Ku(c, Ou));
        return a.join("")
    }
    ;
    _.Du.prototype.resolve = function(a) {
        var b = this.clone()
          , c = !!a.Mh;
        c ? _.Eu(b, a.Mh) : c = !!a.Ng;
        c ? _.Fu(b, a.Ng) : c = !!a.Yd;
        c ? _.Gu(b, a.ug()) : c = null != a.Zf;
        var d = a.getPath();
        if (c)
            _.Hu(b, a.Zf);
        else if (c = !!a.ul) {
            if ("/" != d.charAt(0))
                if (this.Yd && !this.ul)
                    d = "/" + d;
                else {
                    var e = b.getPath().lastIndexOf("/");
                    -1 != e && (d = b.getPath().slice(0, e + 1) + d)
                }
            e = d;
            if (".." == e || "." == e)
                d = "";
            else if (_.rb(e, "./") || _.rb(e, "/.")) {
                d = _.yc(e, "/");
                e = e.split("/");
                for (var f = [], h = 0; h < e.length; ) {
                    var k = e[h++];
                    "." == k ? d && h == e.length && f.push("") : ".." == k ? ((1 < f.length || 1 == f.length && "" != f[0]) && f.pop(),
                    d && h == e.length && f.push("")) : (f.push(k),
                    d = !0)
                }
                d = f.join("/")
            } else
                d = e
        }
        c ? b.setPath(d) : c = a.gp();
        c ? _.Iu(b, a.Rd.clone()) : c = !!a.cD;
        c && b.Uj(a.Nw());
        return b
    }
    ;
    _.Du.prototype.clone = function() {
        return new _.Du(this)
    }
    ;
    _.Eu = function(a, b, c) {
        a.Mh = c ? Pu(b, !0) : b;
        a.Mh && (a.Mh = a.Mh.replace(/:$/, ""));
        return a
    }
    ;
    _.Fu = function(a, b, c) {
        a.Ng = c ? Pu(b) : b;
        return a
    }
    ;
    _.Du.prototype.ug = function() {
        return this.Yd
    }
    ;
    _.Gu = function(a, b, c) {
        a.Yd = c ? Pu(b, !0) : b;
        return a
    }
    ;
    _.Hu = function(a, b) {
        if (b) {
            b = Number(b);
            if (isNaN(b) || 0 > b)
                throw Error("R`" + b);
            a.Zf = b
        } else
            a.Zf = null;
        return a
    }
    ;
    _.Du.prototype.getPath = function() {
        return this.ul
    }
    ;
    _.Du.prototype.setPath = function(a, b) {
        this.ul = b ? Pu(a, !0) : a;
        return this
    }
    ;
    _.Du.prototype.gp = function() {
        return "" !== this.Rd.toString()
    }
    ;
    _.Iu = function(a, b, c) {
        b instanceof _.Ju ? (a.Rd = b,
        a.Rd.yH(a.Bg)) : (c || (b = Ku(b, Qu)),
        a.Rd = new _.Ju(b,a.Bg));
        return a
    }
    ;
    _.Du.prototype.Va = function(a, b) {
        return _.Iu(this, a, b)
    }
    ;
    _.Du.prototype.getQuery = function() {
        return this.Rd.toString()
    }
    ;
    _.Ru = function(a, b, c) {
        a.Rd.set(b, c);
        return a
    }
    ;
    _.g = _.Du.prototype;
    _.g.qh = function(a) {
        return this.Rd.get(a)
    }
    ;
    _.g.Nw = function() {
        return this.cD
    }
    ;
    _.g.Uj = function(a, b) {
        this.cD = b ? Pu(a) : a;
        return this
    }
    ;
    _.g.removeParameter = function(a) {
        this.Rd.remove(a);
        return this
    }
    ;
    _.g.yH = function(a) {
        this.Bg = a;
        this.Rd && this.Rd.yH(a)
    }
    ;
    _.Su = function(a, b) {
        return a instanceof _.Du ? a.clone() : new _.Du(a,b)
    }
    ;
    Pu = function(a, b) {
        return a ? b ? decodeURI(a.replace(/%25/g, "%2525")) : decodeURIComponent(a) : ""
    }
    ;
    Ku = function(a, b, c) {
        return "string" === typeof a ? (a = encodeURI(a).replace(b, Tu),
        c && (a = a.replace(/%25([0-9a-fA-F]{2})/g, "%$1")),
        a) : null
    }
    ;
    Tu = function(a) {
        a = a.charCodeAt(0);
        return "%" + (a >> 4 & 15).toString(16) + (a & 15).toString(16)
    }
    ;
    Lu = /[#\/\?@]/g;
    Nu = /[#\?:]/g;
    Mu = /[#\?]/g;
    Qu = /[#\?@]/g;
    Ou = /#/g;
    _.Ju = function(a, b) {
        this.Xd = this.Cc = null;
        this.Rf = a || null;
        this.Bg = !!b
    }
    ;
    Uu = function(a) {
        a.Cc || (a.Cc = new Map,
        a.Xd = 0,
        a.Rf && Au(a.Rf, function(b, c) {
            a.add(decodeURIComponent(b.replace(/\+/g, " ")), c)
        }))
    }
    ;
    _.g = _.Ju.prototype;
    _.g.Fb = function() {
        Uu(this);
        return this.Xd
    }
    ;
    _.g.add = function(a, b) {
        Uu(this);
        this.Rf = null;
        a = Vu(this, a);
        var c = this.Cc.get(a);
        c || this.Cc.set(a, c = []);
        c.push(b);
        this.Xd += 1;
        return this
    }
    ;
    _.g.remove = function(a) {
        Uu(this);
        a = Vu(this, a);
        return this.Cc.has(a) ? (this.Rf = null,
        this.Xd -= this.Cc.get(a).length,
        this.Cc.delete(a)) : !1
    }
    ;
    _.g.clear = function() {
        this.Cc = this.Rf = null;
        this.Xd = 0
    }
    ;
    _.g.isEmpty = function() {
        Uu(this);
        return 0 == this.Xd
    }
    ;
    _.g.Yh = function(a) {
        Uu(this);
        a = Vu(this, a);
        return this.Cc.has(a)
    }
    ;
    _.g.oj = function(a) {
        var b = this.Uc();
        return _.hb(b, a)
    }
    ;
    _.g.forEach = function(a, b) {
        Uu(this);
        this.Cc.forEach(function(c, d) {
            c.forEach(function(e) {
                a.call(b, e, d, this)
            }, this)
        }, this)
    }
    ;
    _.g.Sf = function() {
        Uu(this);
        for (var a = Array.from(this.Cc.values()), b = Array.from(this.Cc.keys()), c = [], d = 0; d < b.length; d++)
            for (var e = a[d], f = 0; f < e.length; f++)
                c.push(b[d]);
        return c
    }
    ;
    _.g.Uc = function(a) {
        Uu(this);
        var b = [];
        if ("string" === typeof a)
            this.Yh(a) && (b = b.concat(this.Cc.get(Vu(this, a))));
        else {
            a = Array.from(this.Cc.values());
            for (var c = 0; c < a.length; c++)
                b = b.concat(a[c])
        }
        return b
    }
    ;
    _.g.set = function(a, b) {
        Uu(this);
        this.Rf = null;
        a = Vu(this, a);
        this.Yh(a) && (this.Xd -= this.Cc.get(a).length);
        this.Cc.set(a, [b]);
        this.Xd += 1;
        return this
    }
    ;
    _.g.get = function(a, b) {
        if (!a)
            return b;
        a = this.Uc(a);
        return 0 < a.length ? String(a[0]) : b
    }
    ;
    _.g.setValues = function(a, b) {
        this.remove(a);
        0 < b.length && (this.Rf = null,
        this.Cc.set(Vu(this, a), _.ib(b)),
        this.Xd += b.length)
    }
    ;
    _.g.toString = function() {
        if (this.Rf)
            return this.Rf;
        if (!this.Cc)
            return "";
        for (var a = [], b = Array.from(this.Cc.keys()), c = 0; c < b.length; c++) {
            var d = b[c]
              , e = encodeURIComponent(String(d));
            d = this.Uc(d);
            for (var f = 0; f < d.length; f++) {
                var h = e;
                "" !== d[f] && (h += "=" + encodeURIComponent(String(d[f])));
                a.push(h)
            }
        }
        return this.Rf = a.join("&")
    }
    ;
    _.g.clone = function() {
        var a = new _.Ju;
        a.Rf = this.Rf;
        this.Cc && (a.Cc = new Map(this.Cc),
        a.Xd = this.Xd);
        return a
    }
    ;
    var Vu = function(a, b) {
        b = String(b);
        a.Bg && (b = b.toLowerCase());
        return b
    };
    _.Ju.prototype.yH = function(a) {
        a && !this.Bg && (Uu(this),
        this.Rf = null,
        this.Cc.forEach(function(b, c) {
            var d = c.toLowerCase();
            c != d && (this.remove(c),
            this.setValues(d, b))
        }, this));
        this.Bg = a
    }
    ;
    _.Ju.prototype.extend = function(a) {
        for (var b = 0; b < arguments.length; b++)
            Cu(arguments[b], function(c, d) {
                this.add(d, c)
            }, this)
    }
    ;
    var FA = function(a) {
        if (!a || "function" !== typeof a)
            throw new EA("Must provide a function.");
        this.dg = null;
        this.aY = a
    }
      , GA = !1;
    GA = !1;
    var HA = function(a) {
        return new _.ok(function(b) {
            var c = a.length
              , d = [];
            if (c)
                for (var e = function(k, l, m) {
                    c--;
                    d[k] = l ? {
                        zw: !0,
                        value: m
                    } : {
                        zw: !1,
                        reason: m
                    };
                    0 == c && b(d)
                }, f = 0, h; f < a.length; f++)
                    h = a[f],
                    _.vk(h, _.Pi(e, f, !0), _.Pi(e, f, !1));
            else
                b(d)
        }
        )
    }, IA, JA, KA, LA = {
        WK: function(a) {
            IA = a;
            try {
                delete LA.WK
            } catch (b) {}
        },
        XK: function(a) {
            JA = a;
            try {
                delete LA.XK
            } catch (b) {}
        },
        YK: function(a) {
            KA = a;
            try {
                delete LA.YK
            } catch (b) {}
        }
    }, MA = function(a) {
        return _.ty(a.status)
    }, NA = function() {
        var a = !0
          , b = _.oy(_.cy);
        b && void 0 !== b.withCredentials || (a = !1);
        return a
    }, OA = function(a, b) {
        if (null == b)
            return b;
        b = String(b);
        b.match(/^\/\/.*/) && (b = ("http:" == window.location.protocol ? "http:" : "https:") + b);
        b.match(/^\/([^\/].*)?$/) && window.location.host && String(window.location.protocol).match(/^https?:$/) && (b = window.location.protocol + "//" + window.location.host + b);
        var c = b.match(/^(https?:)(\/\/)?(\/([^\/].*)?)?$/i);
        c && window.location.host && String(window.location.protocol).match(/^https?:$/) && (b = c[1] + "//" + window.location.host + (c[3] || ""));
        b = b.replace(/^(https?:\/\/[^\/?#@]*)\/$/i, "$1");
        b = b.replace(/^(http:\/\/[-_a-z0-9.]+):0*80([\/?#].*)?$/i, "$1$2");
        b = b.replace(/^(https:\/\/[-_a-z0-9.]+):0*443([\/?#].*)?$/i, "$1$2");
        b.match(/^https?:\/\/[-_a-z0-9.]*[-_a-z][-_a-z0-9.]*$/i) && (b = b.toLowerCase());
        c = _.ff("client/rewrite");
        _.Rb(c) && Object.prototype.hasOwnProperty.call(c, b) ? b = String(c[b] || b) : (b = b.replace(/^(https?):\/\/www\.googleapis\.com$/, "$1://content.googleapis.com"),
        b = b.replace(/^(https?):\/\/www-(googleapis-[-_a-z0-9]+\.[-_a-z0-9]+\.google\.com)$/, "$1://content-$2"),
        b.match(/^https?:\/\/content(-[-_a-z0-9.]+)?\.googleapis\.com$/) || (b = b.replace(/^(https?):\/\/([-_a-z0-9]+(\.[-_a-z0-9]+)?\.googleapis\.com)$/, "$1://content-$2")));
        a && (a = _.ff("client/firstPartyRewrite"),
        _.Rb(a) && Object.prototype.hasOwnProperty.call(a, b) ? b = String(a[b] || b) : (b = b.replace(/^(https?):\/\/content\.googleapis\.com$/, "$1://clients6.google.com"),
        b = b.replace(/^(https?):\/\/content-([-a-z0-9]+)\.([-a-z0-9]+)\.googleapis\.com$/, "$1://$2-googleapis.$3.google.com"),
        b = b.replace(/^(https?):\/\/content-([-a-z0-9]+)\.googleapis\.com$/, "$1://$2.clients6.google.com"),
        b = b.replace(/^(https?):\/\/([-a-z0-9]+)-www-googleapis\.([-a-z0-9]+).google.com$/, "$1://content-googleapis-$2.$3.google.com")));
        return b
    }, EA = function(a) {
        _.fb.call(this, a)
    };
    _.L(EA, _.fb);
    EA.prototype.name = "gapix.client.GapiClientError";
    FA.prototype.then = function(a, b, c) {
        this.dg || (this.dg = this.aY());
        return this.dg.then(a, b, c)
    }
    ;
    FA.prototype.nA = function(a) {
        this.dg || (this.dg = a)
    }
    ;
    var PA = function(a) {
        var b = {}, c;
        for (c in a)
            if (Object.prototype.hasOwnProperty.call(a, c)) {
                var d = _.sh(a, c);
                d && (c = _.rh(c, d)) && _.th(b, c, d, !0)
            }
        return b
    }
      , QA = {
        error: {
            code: -1,
            message: "A network error occurred and the request could not be completed."
        }
    }
      , RA = function(a, b, c, d) {
        _.vy.call(this);
        this.kd = a;
        this.rF = b;
        this.ud = c;
        a = {};
        if (d)
            for (var e in d)
                Object.prototype.hasOwnProperty.call(d, e) && (b = _.sh(d, e),
                void 0 !== b && (e = _.qh(e, b)) && _.th(a, e, b));
        d = {};
        for (e in a)
            Object.prototype.hasOwnProperty.call(a, e) && (d[unescape(encodeURIComponent(e))] = unescape(encodeURIComponent(a[e])));
        this.Cs = d;
        this.dg = null
    };
    _.L(RA, _.vy);
    RA.prototype.then = function(a) {
        this.dg || (this.dg = (new _.ok(function(b, c) {
            this.V("error", (0,
            _.M)(function() {
                c(SA(this))
            }, this));
            this.V("success", (0,
            _.M)(function() {
                b(SA(this))
            }, this));
            this.send(this.kd, this.rF, this.ud, this.Cs)
        }
        ,this)).then(function(b) {
            b.headers = PA(b.headers);
            return b
        }, function(b) {
            return b.status ? (b.headers = PA(b.headers),
            _.tk(b)) : _.tk({
                result: QA,
                body: '{"error":{"code":-1,"message":"A network error occurred and the request could not be completed."}}',
                headers: null,
                status: null,
                statusText: null
            })
        }));
        return this.dg.then.apply(this.dg, arguments)
    }
    ;
    var SA = function(a) {
        var b = a.getStatus()
          , c = _.Hy(a);
        var d = 204 == b ? !1 : "" == a.Dl ? _.Vf(c) : _.Iy(a);
        var e = a.getAllResponseHeaders();
        e = _.vh(e, !1);
        try {
            var f = 2 < _.Fy(a) ? a.La.statusText : ""
        } catch (h) {
            f = ""
        }
        return {
            result: d,
            body: c,
            headers: e,
            status: b,
            statusText: f
        }
    }
      , TA = /;\s*charset\s*=\s*("utf-?8"|utf-?8)\s*(;|$)/i
      , UA = /^(text\/[^\s;\/""]+|application\/(json(\+[^\s;\/""]*)?|([^\s;\/""]*\+)?xml))\s*(;|$)/i
      , VA = /;\s*charset\s*=/i
      , WA = /(([\r\n]{0,2}[A-Za-z0-9+\/]){4,4}){0,1024}([\r\n]{0,2}[A-Za-z0-9+\/][\r\n]{0,2}[AQgw]([\r\n]{0,2}=){2,2}|([\r\n]{0,2}[A-Za-z0-9+\/]){2,2}[\r\n]{0,2}[AEIMQUYcgkosw048][\r\n]{0,2}=|([\r\n]{0,2}[A-Za-z0-9+\/]){4,4})[\r\n]{0,2}/g
      , XA = function(a) {
        var b = [];
        a = a.replace(WA, function(c) {
            b.push(_.nz(c));
            return ""
        });
        if (a.length)
            throw Error("Ea");
        return b.join("")
    }
      , YA = function(a) {
        var b = a.headers;
        if (b && "base64" === _.sh(b, "X-Goog-Safety-Encoding")) {
            var c = XA(a.body)
              , d = _.sh(b, "X-Goog-Safety-Content-Type");
            b["Content-Type"] = d;
            if (d.match(TA) || d.match(UA) && !d.match(VA))
                c = _.xw(_.Fh(c));
            _.th(b, "X-Goog-Safety-Encoding");
            _.th(b, "X-Goog-Safety-Content-Type");
            a.body = c
        }
    }
      , ZA = function(a, b, c) {
        c || ((c = _.ff("googleapis.config/proxy")) && (c = String(c).replace(/\/static\/proxy\.html$/, "") || "/"),
        c = String(c || ""));
        c || (c = _.ff("googleapis.config/root"),
        b && (c = _.ff("googleapis.config/root-1p") || c),
        c = String(c || ""));
        c = String(OA(b, c) || c);
        return a = _.sy(c, a)
    }
      , $A = function(a, b) {
        var c = a.params || _.Oe();
        c.url = c.path;
        var d = c.root;
        d = ZA("/", _.qi(c.headers), d);
        d.match(/^(.*[^\/])?\/$/) && (d = d.substr(0, d.length - 1));
        c.root = d;
        a.params = c;
        _.Ji.jq("makeHttpRequests", [a], function(e, f) {
            e && e.gapiRequest ? (e.gapiRequest.data ? YA(e.gapiRequest.data) : YA(e),
            b(e, _.Wf(e))) : b(e, f)
        })
    }
      , aB = function(a) {
        var b = _.ly(a, "params", "headers");
        b && "object" === typeof b || (b = {});
        a = {};
        for (var c in b)
            if (Object.prototype.hasOwnProperty.call(b, c)) {
                var d = _.sh(b, c);
                d && (_.qh(c, d),
                _.th(a, c, d))
            }
        c = "chrome-extension" == (window.location.href.match(_.Nh)[1] || null);
        a = _.qi(a);
        return !(c && a) && NA()
    }
      , bB = function(a) {
        return new _.ok(function(b, c) {
            var d = function(e) {
                e && e.gapiRequest ? e = e.gapiRequest.data || e : c(e);
                e = {
                    result: 204 != e.status && _.Vf(e.body),
                    body: e.body,
                    headers: e.headers || null,
                    status: e.status || null,
                    statusText: e.statusText || null
                };
                MA(e) ? b(e) : c(e)
            };
            try {
                $A(a, d)
            } catch (e) {
                c(e)
            }
        }
        )
    }
      , cB = function(a) {
        var b = !_.ff("client/cors") || !!_.ff("client/xd4")
          , c = {};
        _.Bm(a, function(d, e) {
            (d = _.qh(e, d)) || b || (d = _.ph(e));
            d && (e = _.sh(a, d)) && _.th(c, d, e)
        });
        return c
    }
      , dB = function(a) {
        var b = a.params || _.Oe();
        a = _.Uj(b.headers || {});
        var c = b.httpMethod || "GET"
          , d = String(b.url || "")
          , e = encodeURIComponent("$unique");
        if (!("POST" === c || 0 <= _.Sh(d, 0, "$unique", d.search(_.Th)) || 0 <= _.Sh(d, 0, e, d.search(_.Th)))) {
            var f = [];
            for (h in a)
                Object.prototype.hasOwnProperty.call(a, h) && f.push(h.toLowerCase());
            f.sort();
            f.push(_.Ng(location.href));
            var h = f.join(":");
            f = _.ii();
            f.update(h);
            h = f.bi().toLowerCase().substr(0, 7);
            h = String(parseInt(h, 16) % 1E3 + 1E3).substr(1);
            d = _.qy(d, e, "gc" + h)
        }
        e = b.body || null;
        h = b.responseType || null;
        b = _.qi(a) || "1p" == b.authType;
        f = !!_.ff("googleapis.config/auth/useUberProxyAuth");
        _.th(a, "X-Referer");
        a = cB(a);
        var k = new RA(d,c,e,a);
        k.Og = b || f;
        h && (k.Dl = h);
        return new _.ok(function(l, m) {
            k.then(function(n) {
                YA(n);
                l(n)
            }, function(n) {
                m(n)
            })
        }
        )
    }
      , eB = function(a, b) {
        var c = function(d) {
            d = _.Uj(d);
            delete d.result;
            d = {
                gapiRequest: {
                    data: d
                }
            };
            b && b(d, _.Wf(d))
        };
        dB(a).then(c, c)
    }
      , fB = function(a, b) {
        (_.ff("client/cors") || _.ff("client/xd4")) && aB(a) ? eB(a, b) : $A(a, b)
    }
      , gB = function(a) {
        this.Gt = a;
        this.If = !1;
        this.promise = {
            then: (0,
            _.M)(function(b, c, d) {
                this.If || (this.If = !0);
                this.Ft && !this.Ct ? this.Gt.resolve(this.Ft) : this.Ct && !this.Ft && this.Gt.reject(this.Ct);
                return this.Gt.promise.then(b, c, d)
            }, this)
        }
    };
    gB.prototype.resolve = function(a) {
        this.If ? this.Gt.resolve(a) : this.Ft || this.Ct || (this.Ft = a)
    }
    ;
    gB.prototype.reject = function(a) {
        this.If ? this.Gt.reject(a) : this.Ft || this.Ct || (this.Ct = a)
    }
    ;
    var hB = function(a) {
        a = _.my(a.error);
        return {
            code: a.code,
            data: a.errors,
            message: a.message
        }
    }
      , uB = function(a) {
        throw Error("Ha`" + a);
    };
    var FB = function(a) {
        FA.call(this, FB.prototype.vn);
        if (!a || "object" != typeof a && "string" != typeof a)
            throw new EA("Missing required parameters");
        if ("string" === typeof a) {
            var b = {};
            b.path = a
        } else
            b = a;
        if (!b.path)
            throw new EA('Missing required parameter: "path"');
        this.Lh = {};
        this.Lh.path = b.path;
        this.Lh.method = b.method || "GET";
        this.Lh.params = b.params || {};
        this.Lh.headers = b.headers || {};
        this.Lh.body = b.body;
        this.Lh.root = b.root;
        this.Lh.responseType = b.responseType;
        this.Lh.apiId = b.apiId;
        this.Tl = b.authType || "auto";
        this.p1 = !!b.isXd4;
        this.eP = !1;
        this.Qi(this.Tl);
        this.kR = !1
    };
    _.L(FB, FA);
    FB.prototype.Fe = function() {
        return this.Lh
    }
    ;
    FB.prototype.Qi = function(a) {
        this.Tl = a;
        this.eP = "1p" === this.Tl
    }
    ;
    FB.prototype.js = function() {
        return this.eP
    }
    ;
    FB.prototype.Nj = function() {
        if (!this.kR) {
            this.kR = !0;
            var a = this.Lh
              , b = a.headers = a.headers || {}
              , c = []
              , d = [];
            for (h in b)
                if (Object.prototype.hasOwnProperty.call(b, h)) {
                    c.push(h);
                    var e = h
                      , f = _.sh(b, e);
                    f && (e = _.qh(e, f) || _.ph(e)) && d.push([e, f])
                }
            var h = 0;
            for (e = c.length; h < e; ++h)
                delete b[c[h]];
            c = 0;
            for (h = d.length; c < h; ++c)
                _.th(b, d[c][0], d[c][1]);
            if (this.p1)
                d = "1p" == this.Tl;
            else {
                d = b;
                c = String(_.ff("client/version", "1.1.0"));
                h = String(_.ff("client/name", "google-api-javascript-client"));
                h = !0 === GB[h] ? h : "google-api-javascript-client";
                e = String(_.ff("client/appName", ""));
                f = [];
                e && (f.push(e),
                f.push(" "));
                f.push(h);
                c && (f.push("/"),
                f.push(c));
                _.th(d, "X-JavaScript-User-Agent", f.join(""));
                _.th(b, "X-Requested-With", "XMLHttpRequest");
                d = _.sh(b, "Content-Type");
                a.body && !d && _.th(b, "Content-Type", "application/json");
                _.ff("client/allowExecutableResponse") || _.th(b, "X-Goog-Encode-Response-If-Executable", "base64");
                (d = _.sh(b, "Content-Type")) && "application/json" == d.toLowerCase() && !a.params.alt && (a.params.alt = "json");
                (d = a.body || null) && _.Rb(d) && (a.body = _.Wf(d));
                a.key = a.id;
                b = _.Ii(b, void 0, this.Tl);
                d = _.qi(b);
                if ((c = b) && window.navigator) {
                    h = [];
                    for (e = 0; e < HB.length; e++)
                        (f = window.navigator[HB[e]]) && h.push(encodeURIComponent(HB[e]) + "=" + encodeURIComponent(f));
                    _.th(c, "X-ClientDetails", h.join("&"))
                }
                (c = _.ff("client/apiKey")) && void 0 === a.params.key && (a.params.key = c);
                (c = _.ff("client/trace")) && !a.params.trace && (a.params.trace = c)
            }
            "auto" == this.Tl && (d ? this.Qi("1p") : (b = _.sh(b, "Authorization")) && String(b).match(/^(Bearer|MAC)[ \t]/i) ? this.Qi("oauth2") : this.Qi("none"));
            if ((b = String(a.path || "").match(/^(https?:\/\/[^\/?#]+)([\/?#].*)?$/i)) && !a.root)
                if (a.root = String(b[1]),
                a.path = String(b[2] || "/"),
                a.path.match(/^\/_ah\/api(\/.*)?$/))
                    a.root += "/_ah/api",
                    a.path = a.path.substr(8);
                else {
                    b = _.ff("googleapis.config/root");
                    d && (b = _.ff("googleapis.config/root-1p") || b);
                    b = String(b || "");
                    c = a.root + a.path;
                    if (h = b && c.substr(0, b.length) === b)
                        h = _.Su(b),
                        e = _.Su(c),
                        h = (!h.Yd && !e.Yd || h.ug() == e.ug()) && (null == h.Zf && null == e.Zf || h.Zf == e.Zf);
                    h && (a.path = c.substr(b.length),
                    a.root = b)
                }
            b = a.params;
            c = _.gh(a.path);
            h = String(_.ff("googleapis.config/xd3") || "");
            18 <= h.length && "/static/proxy.html" == h.substring(h.length - 18) && (h = h.substring(0, h.length - 18));
            h || (h = "/");
            e = _.gh(h);
            if (h != e)
                throw Error("D");
            "/" != h.charAt(h.length - 1) && (h += "/");
            c = _.sy(h, c);
            _.bj(c, "/") && (c = c.substring(0, c.length - 1));
            h = _.Oe();
            for (var k in b)
                Object.prototype.hasOwnProperty.call(b, k) && (e = encodeURIComponent(k),
                h[e] = b[k]);
            c = _.Rh(c, h);
            a.path = c;
            a.root = OA(!!d, a.root);
            a.url = ZA(a.path, !!d, a.root)
        }
    }
    ;
    var IB = function(a) {
        a.Nj();
        var b = a.Lh;
        return {
            key: "gapiRequest",
            params: {
                id: b.id,
                key: b.key,
                url: b.url,
                path: b.path,
                httpMethod: b.method,
                body: b.body || "",
                headers: b.headers || {},
                urlParams: {},
                root: b.root,
                authType: a.Tl
            }
        }
    };
    FB.prototype.execute = function(a) {
        var b = IB(this);
        fB(b, function(c, d) {
            var e = c;
            c.gapiRequest && (e = c.gapiRequest);
            e && e.data && (e = e.data);
            c = e instanceof Array ? e[0] : e;
            if (204 != c.status && c.body)
                try {
                    var f = _.Vf(c.body)
                } catch (h) {}
            a && a(f, d)
        })
    }
    ;
    FB.prototype.vn = function() {
        var a = IB(this);
        return (_.ff("client/cors") || _.ff("client/xd4")) && aB(a) ? dB(a) : bB(a)
    }
    ;
    FB.prototype.ui = function() {
        return this.vn()
    }
    ;
    var HB = ["appVersion", "platform", "userAgent"]
      , GB = {
        "google-api-gwt-client": !0,
        "google-api-javascript-client": !0
    };
    FB.prototype.execute = FB.prototype.execute;
    FB.prototype.then = FB.prototype.then;
    FB.prototype.getPromise = FB.prototype.ui;
    var JB = function(a) {
        if (!a || "object" != typeof a)
            throw new EA("Missing rpc parameters");
        if (!a.method)
            throw new EA("Missing rpc method");
        this.Ez = a
    };
    JB.prototype.Hm = function() {
        var a = this.Ez.transport;
        return a ? a.root || null : null
    }
    ;
    JB.prototype.execute = function(a) {
        var b = JA();
        b.add(this, {
            id: "gapiRpc",
            callback: this.Zs(a)
        });
        b.execute()
    }
    ;
    JB.prototype.Ay = function(a) {
        var b = this.Ez.method, c = String, d;
        (d = this.Ez.apiVersion) || (d = String(b).split(".")[0],
        d = _.ff("googleapis.config/versions/" + b) || _.ff("googleapis.config/versions/" + d) || "v1",
        d = String(d));
        a = {
            jsonrpc: "2.0",
            id: a,
            method: b,
            apiVersion: c(d)
        };
        (b = this.Ez.rpcParams) && (a.params = b);
        return a
    }
    ;
    JB.prototype.Zs = function(a) {
        return function(b, c) {
            if (b)
                if (b.error) {
                    var d = b.error;
                    null == d.error && (d.error = _.Uj(b.error))
                } else
                    d = b.result || b.data,
                    _.Rb(d) && null == d.result && (d.result = _.Uj(b.result || b.data));
            else
                d = !1;
            a(d, c)
        }
    }
    ;
    JB.prototype.execute = JB.prototype.execute;
    var LB = function(a, b) {
        this.Zd = b || 0;
        2 == this.Zd ? (b = null,
        null != a && _.Rb(a) && (b = {},
        b.method = a.method,
        b.rpcParams = a.rpcParams,
        b.transport = a.transport,
        b.root = a.root,
        b.apiVersion = a.apiVersion,
        b.authType = a.authType),
        this.mb = new JB(b)) : (0 == this.Zd && (b = a && a.callback) && (a.callback = KB(b)),
        b = null,
        null != a && (_.Rb(a) ? (b = {},
        b.path = a.path,
        b.method = a.method,
        b.params = a.params,
        b.headers = a.headers,
        b.body = a.body,
        b.root = a.root,
        b.responseType = a.responseType,
        b.authType = a.authType,
        b.apiId = a.apiId) : "string" === typeof a && (b = a)),
        this.mb = new FB(b))
    }
      , KB = function(a) {
        return function(b) {
            if (null != b && _.Rb(b) && b.error) {
                var c = hB(b);
                b = _.Wf([{
                    id: "gapiRpc",
                    error: c
                }]);
                c.error = _.my(c)
            } else
                null == b && (b = {}),
                c = _.my(b),
                c.result = _.my(b),
                b = _.Wf([{
                    id: "gapiRpc",
                    result: b
                }]);
            a(c, b)
        }
    };
    _.g = LB.prototype;
    _.g.getFormat = function() {
        return this.Zd
    }
    ;
    _.g.execute = function(a) {
        this.mb.execute(a && 1 == this.Zd ? KB(a) : a)
    }
    ;
    _.g.then = function(a, b, c) {
        2 == this.Zd && uB('The "then" method is not available on this object.');
        return this.mb.then(a, b, c)
    }
    ;
    _.g.nA = function(a) {
        this.mb.nA && this.mb.nA(a)
    }
    ;
    _.g.Fe = function() {
        if (this.mb.Fe)
            return this.mb.Fe()
    }
    ;
    _.g.Nj = function() {
        this.mb.Fe && this.mb.Nj()
    }
    ;
    _.g.Hm = function() {
        if (this.mb.Hm)
            return this.mb.Hm()
    }
    ;
    _.g.Ay = function(a) {
        if (this.mb.Ay)
            return this.mb.Ay(a)
    }
    ;
    _.g.Qi = function(a) {
        this.mb.Qi && this.mb.Qi(a)
    }
    ;
    _.g.js = function() {
        return this.mb.js()
    }
    ;
    _.g.ui = function() {
        if (this.mb.ui)
            return this.mb.ui()
    }
    ;
    LB.prototype.execute = LB.prototype.execute;
    LB.prototype.then = LB.prototype.then;
    LB.prototype.getPromise = LB.prototype.ui;
    var MB = /<response-(.*)>/
      , NB = /^application\/http(;.+$|$)/
      , OB = ["clients6.google.com", "content.googleapis.com", "www.googleapis.com"]
      , PB = function(a, b) {
        a = _.sh(a, b);
        if (!a)
            throw new EA("Unable to retrieve header.");
        return a
    }
      , QB = function(a) {
        var b = void 0;
        a = _.sa(a);
        for (var c = a.next(); !c.done; c = a.next()) {
            c = c.value.Fe().apiId;
            if ("string" !== typeof c)
                return "batch";
            if (void 0 === b)
                b = c;
            else if (b != c)
                return "batch"
        }
        b = _.ff("client/batchPath/" + b) || "batch/" + b.split(":").join("/");
        return String(b)
    }
      , RB = function(a) {
        a = a.map(function(b) {
            return b.request
        });
        return QB(a)
    }
      , SB = function(a, b) {
        var c = [];
        a = a.Fe();
        var d = function(f, h) {
            _.Bm(f, function(k, l) {
                h.push(l + ": " + k)
            })
        }
          , e = {
            "Content-Type": "application/http",
            "Content-Transfer-Encoding": "binary"
        };
        e["Content-ID"] = "<" + b + ">";
        d(e, c);
        c.push("");
        c.push(a.method + " " + a.path);
        d(a.headers, c);
        c.push("");
        a.body && c.push(a.body);
        return c.join("\r\n")
    }
      , VB = function(a, b) {
        a = TB(a, b);
        var c = {};
        _.lb(a, function(d, e) {
            c[e] = UB(d, e)
        });
        return c
    }
      , UB = function(a, b) {
        return {
            result: a.result || a.body,
            rawResult: _.Wf({
                id: b,
                result: a.result || a.body
            }),
            id: b
        }
    }
      , TB = function(a, b) {
        a = (0,
        _.Ac)(a);
        _.bj(a, "--") && (a = a.substring(0, a.length - 2));
        a = a.split(b);
        b = _.Oe();
        for (var c = 0; c < a.length; c++)
            if (a[c]) {
                var d;
                if (d = a[c]) {
                    _.bj(d, "\r\n") && (d = d.substring(0, d.length - 2));
                    if (d) {
                        d = d.split("\r\n");
                        for (var e = 0, f = {
                            headers: {},
                            body: ""
                        }; e < d.length && "" == d[e]; )
                            e++;
                        for (f.outerHeaders = WB(d, e); e < d.length && "" != d[e]; )
                            e++;
                        e++;
                        var h = d[e++].split(" ");
                        f.status = Number(h[1]);
                        f.statusText = h.slice(2).join(" ");
                        for (f.headers = WB(d, e); e < d.length && "" != d[e]; )
                            e++;
                        e++;
                        f.body = d.slice(e).join("\r\n");
                        YA(f);
                        d = f
                    } else
                        d = null;
                    e = _.Oe();
                    f = PB(d.outerHeaders, "Content-Type");
                    if (null == NB.exec(f))
                        throw new EA("Unexpected Content-Type <" + f + ">");
                    f = PB(d.outerHeaders, "Content-ID");
                    f = MB.exec(f);
                    if (!f)
                        throw new EA("Unable to recognize Content-Id.");
                    e.id = decodeURIComponent(f[1].split("@")[0].replace(/^.*[+]/, ""));
                    e.response = {
                        status: d.status,
                        statusText: d.statusText,
                        headers: d.headers
                    };
                    204 != d.status && (e.response.body = d.body,
                    e.response.result = _.Vf(d.body));
                    d = e
                } else
                    d = null;
                d && d.id && (b[d.id] = d.response)
            }
        return b
    }
      , WB = function(a, b) {
        for (var c = []; b < a.length && a[b]; b++)
            c.push(a[b]);
        return _.vh(c.join("\r\n"), !1)
    }
      , XB = function(a, b, c) {
        a = a || b;
        if (!a || "https" !== _.Su(a).Mh)
            if (a = c ? _.ff("googleapis.config/root-1p") : _.ff("googleapis.config/root"),
            !a)
                return !1;
        a = OA(c, String(a)) || a;
        return OB.includes(_.Su(a).ug())
    };
    var YB = function(a) {
        FA.call(this, YB.prototype.vn);
        this.wj = {};
        this.uv = {};
        this.Bl = [];
        this.Se = a;
        this.R1 = !!a;
        this.mO = this.Dx = !1
    };
    _.L(YB, FA);
    var ZB = function(a, b) {
        a = _.sa(Object.values(a.wj));
        for (var c = a.next(); !c.done; c = a.next())
            if (c.value.map(function(d) {
                return d.id
            }).includes(b))
                return !0;
        return !1
    };
    YB.prototype.ko = function(a) {
        (function(b) {
            setTimeout(function() {
                throw b;
            })
        }
        )(a)
    }
    ;
    YB.prototype.add = function(a, b) {
        var c = b || _.Oe();
        b = _.Oe();
        if (!a)
            throw new EA("Batch entry " + (_.Pe(c, "id") ? '"' + c.id + '" ' : "") + "is missing a request method");
        a.Nj();
        b.request = a;
        var d = _.yk();
        d = new gB(d);
        b.Bz = d;
        a.nA(b.Bz.promise);
        d = a.Fe().headers;
        _.qi(d) && (this.Dx = !0);
        (d = String((d || {}).Authorization || "") || null) && d.match(/^Bearer|MAC[ \t]/i) && (this.mO = !0);
        d = a.Fe().root;
        if (!this.R1) {
            if (d && this.Se && d != this.Se)
                throw new EA('The "root" provided in this request is not consistent with that of existing requests in the batch.');
            this.Se = d || this.Se
        }
        if (_.Pe(c, "id")) {
            d = c.id;
            if (ZB(this, d))
                throw new EA('Batch ID "' + d + '" already in use, please use another.');
            b.id = d
        } else {
            do
                b.id = String(Math.round(2147483647 * _.Bi()));
            while (ZB(this, b.id))
        }
        b.callback = c.callback;
        c = "batch";
        XB(this.Se, a.Fe().path, this.Dx) && (c = RB([b]));
        this.wj[c] = this.wj[c] || [];
        this.wj[c].push(b);
        this.uv[b.id] = b;
        return b.id
    }
    ;
    var $B = function(a) {
        var b = []
          , c = XB(a.Se, void 0, a.Dx);
        1 < Object.entries(a.wj).length && _.$f.warn("Heterogeneous batch requests are deprecated. See https://developers.googleblog.com/2018/03/discontinuing-support-for-json-rpc-and.html");
        for (var d = _.sa(Object.entries(a.wj)), e = d.next(); !e.done; e = d.next()) {
            e = _.sa(e.value);
            var f = e.next().value;
            e = e.next().value;
            for (var h = !0, k = _.sa(e), l = k.next(); !l.done; l = k.next())
                l = l.value,
                l.request.Nj(),
                "batch" === f && c && (h = !1,
                l.g1 = !0,
                l.request.Fe.root = a.Se,
                b.push(l.request),
                a.Bl.push([l]));
            if (h) {
                f = a.Se;
                h = a.Dx;
                k = a.mO;
                l = "batch" + String(Math.round(2147483647 * _.Bi())) + String(Math.round(2147483647 * _.Bi()));
                var m = "--" + l;
                l = "multipart/mixed; boundary=" + l;
                for (var n = {
                    path: RB(e),
                    method: "POST"
                }, q = [], p = 0; p < e.length; p++)
                    q.push(SB(e[p].request, [m.substr(m.indexOf("--") + 2), "+", encodeURIComponent(e[p].id).split("(").join("%28").split(")").join("%29").split(".").join("%2E"), "@googleapis.com"].join("")));
                n.body = [m, q.join("\r\n" + m + "\r\n"), m + "--"].join("\r\n") + "\r\n";
                n.root = f || null;
                _.ff("client/xd4") && NA() ? (n.isXd4 = !0,
                n.params = {
                    $ct: l
                },
                n.headers = {},
                _.th(n.headers, "Content-Type", "text/plain; charset=UTF-8"),
                h ? n.authType = "1p" : k && (n.authType = "oauth2"),
                f = new FB(n)) : (n.headers = {},
                _.th(n.headers, "Content-Type", l),
                f = KA(n));
                b.push(f);
                a.Bl.push(e)
            }
        }
        return b
    };
    YB.prototype.execute = function(a) {
        if (!(1 > Object.keys(this.wj).length)) {
            var b = this.Zs(a);
            a = $B(this);
            var c = []
              , d = a.map(function(e) {
                return new _.ok(function(f) {
                    try {
                        e.execute(function(h, k) {
                            return f({
                                UK: h,
                                A3: k
                            })
                        })
                    } catch (h) {
                        c.push(h),
                        f({
                            UK: {
                                zw: !1,
                                reason: h
                            }
                        })
                    }
                }
                )
            });
            if (0 < c.length && c.length === a.length)
                throw c[0];
            _.wk(d).then(function(e) {
                var f = e.map(function(h) {
                    return h.A3
                });
                e = e.map(function(h) {
                    return h.UK
                });
                b(e, f)
            })
        }
    }
    ;
    YB.prototype.vn = function() {
        var a = this;
        if (1 > Object.keys(this.wj).length)
            return _.sk({});
        var b = $B(this).map(function(c) {
            return new _.ok(function(d, e) {
                return c.ui().then(d, e)
            }
            )
        });
        return HA(b).then(function(c) {
            c = c.map(function(d) {
                return d.zw ? d.value : d
            });
            return aC(a, c, !0)
        })
    }
    ;
    var aC = function(a, b, c, d, e) {
        for (var f = !1, h = {}, k, l = 0, m = 0; m < b.length; m++) {
            var n = b[m];
            if (!1 === n.zw) {
                l++;
                b[m] = n.reason;
                for (var q = bC([b[m]]), p = _.sa(a.Bl[m]), t = p.next(); !t.done; t = p.next())
                    h[t.value.id] = q
            } else {
                if (1 > a.Bl[m].length)
                    throw new EA("Error processing batch responses.");
                try {
                    var v = !(1 === a.Bl[m].length && a.Bl[m][0].g1)
                      , r = a.Bl[m][0].id;
                    if (!c) {
                        t = n;
                        var w = d[m];
                        q = t;
                        if (w && (!q || !v)) {
                            var z = _.Vf(w);
                            z && (q = z.gapiRequest ? z.gapiRequest.data : z,
                            !v && t && (q.body = t))
                        }
                        if (!q)
                            throw new EA("The batch response is missing.");
                        n = q
                    }
                    t = void 0;
                    if (q = n) {
                        var A = q.headers;
                        if (A) {
                            var D = _.Oe();
                            for (t in A)
                                if (Object.prototype.hasOwnProperty.call(A, t)) {
                                    var x = _.sh(A, t);
                                    _.th(D, t, x, !0)
                                }
                            q.headers = D
                        }
                    }
                    if (v && 0 != PB(n.headers, "Content-Type").indexOf("multipart/mixed"))
                        throw new EA("The response's Content-Type is not multipart/mixed.");
                    k = k || _.my(n);
                    var G = MA(n);
                    G && !MA(k) && (k.status = n.status,
                    k.statusText = n.statusText);
                    if (G || c || !v) {
                        f = !0;
                        t = Object;
                        var N = t.assign;
                        q = h;
                        p = a;
                        var W = n
                          , J = c;
                        n = {};
                        if (v) {
                            J = J ? TB : VB;
                            var K = PB(W.headers, "Content-Type").split("boundary=")[1];
                            if (!K)
                                throw new EA("Boundary not indicated in response.");
                            n = J(W.body, "--" + K)
                        } else
                            J ? (W.result = _.Vf(W.body),
                            n[r] = W) : n[r] = UB(W, r);
                        W = {};
                        for (var U = _.sa(Object.entries(n)), da = U.next(); !da.done; da = U.next()) {
                            var ua = _.sa(da.value)
                              , qa = ua.next().value
                              , Ga = ua.next().value;
                            W[qa] = Ga;
                            if (!p.uv[qa])
                                throw new EA("Could not find batch entry for id " + qa + ".");
                        }
                        h = N.call(t, q, W)
                    }
                } catch (Fa) {
                    for (l++,
                    b[m] = Fa,
                    q = bC([Fa]),
                    p = _.sa(a.Bl[m]),
                    t = p.next(); !t.done; t = p.next())
                        h[t.value.id] = q
                }
            }
        }
        if (l === b.length) {
            d = bC(b);
            h = _.Wf(d);
            k = 0;
            a = Array.from(Object.values(a.wj)).flat();
            f = _.sa(a);
            for (l = f.next(); !l.done; l = f.next())
                if (l = l.value,
                c)
                    l.Bz.reject(d);
                else if (l.callback)
                    try {
                        k++,
                        l.callback(d, h)
                    } catch (Fa) {
                        YB.prototype.ko(Fa)
                    }
            if (e)
                try {
                    e(d, h)
                } catch (Fa) {
                    YB.prototype.ko(Fa)
                }
            else if (k !== a.length)
                throw 1 === b.length ? b[0] : d;
        } else {
            if (f)
                for (f = _.sa(Object.entries(h)),
                l = f.next(); !l.done; l = f.next())
                    if (l = _.sa(l.value),
                    m = l.next().value,
                    l = l.next().value,
                    c)
                        m = a.uv[m],
                        l && MA(l) ? m.Bz.resolve(l) : m.Bz.reject(l);
                    else if (m = a.uv[m],
                    m.callback) {
                        if (l && l.rawResult)
                            try {
                                delete l.rawResult
                            } catch (Fa) {}
                        try {
                            m.callback(l || !1, _.Wf(l))
                        } catch (Fa) {
                            YB.prototype.ko(Fa)
                        }
                    }
            k.result = h || {};
            k.body = 1 === b.length ? k.body : "";
            if (e)
                try {
                    e(h || null, 1 === d.length ? d[0] : null)
                } catch (Fa) {
                    YB.prototype.ko(Fa)
                }
            return k
        }
    }
      , bC = function(a) {
        var b = {
            error: {
                code: 0,
                message: "The batch request could not be fulfilled.  "
            }
        };
        a = _.sa(a);
        for (var c = a.next(); !c.done; c = a.next())
            (c = c.value) && c.message || c instanceof Error && c.message ? b.error.message += (c.message || c instanceof Error && c.message) + "  " : c && c.error && c.error.message && (b.error.message += c.error.message + "  ",
            b.error.code = c.error.code || b.error.code || 0);
        b.error.message = b.error.message.trim();
        return {
            result: b,
            body: _.Wf(b),
            headers: null,
            status: null,
            statusText: null
        }
    };
    YB.prototype.Zs = function(a) {
        var b = this;
        return function(c, d) {
            b.MB(c, d, a)
        }
    }
    ;
    YB.prototype.MB = function(a, b, c) {
        aC(this, a, !1, b, c)
    }
    ;
    YB.prototype.add = YB.prototype.add;
    YB.prototype.execute = YB.prototype.execute;
    YB.prototype.then = YB.prototype.then;
    var cC = function() {
        this.Bk = [];
        this.Se = this.Pe = null
    };
    cC.prototype.add = function(a, b) {
        b = b || {};
        var c = {}
          , d = Object.prototype.hasOwnProperty;
        if (a)
            c.An = a;
        else
            throw new EA("Batch entry " + (d.call(b, "id") ? '"' + b.id + '" ' : "") + "is missing a request method");
        if (d.call(b, "id")) {
            a = b.id;
            for (d = 0; d < this.Bk.length; d++)
                if (this.Bk[d].id == a)
                    throw new EA('Batch ID "' + a + '" already in use, please use another.');
            c.id = a
        } else {
            do
                c.id = String(2147483647 * _.Bi() | 0);
            while (d.call(this.Bk, c.id))
        }
        c.callback = b.callback;
        this.Bk.push(c);
        return c.id
    }
    ;
    var dC = function(a) {
        return function(b) {
            var c = b.body;
            if (b = b.result) {
                for (var d = {}, e = 0, f = b.length; e < f; ++e)
                    d[b[e].id] = b[e];
                a(d, c)
            } else
                a(b, c)
        }
    };
    cC.prototype.execute = function(a) {
        this.Pe = [];
        for (var b, c, d = 0; d < this.Bk.length; d++)
            b = this.Bk[d],
            c = b.An,
            this.Pe.push(c.Ay(b.id)),
            this.Se = c.Hm() || this.Se;
        c = this.Zs(a);
        a = {
            requests: this.Pe,
            root: this.Se
        };
        b = {};
        d = a.headers || {};
        for (var e in d) {
            var f = e;
            if (Object.prototype.hasOwnProperty.call(d, f)) {
                var h = _.sh(d, f);
                h && (f = _.qh(f, h) || _.ph(f)) && _.th(b, f, h)
            }
        }
        _.th(b, "Content-Type", "application/json");
        e = dC(c);
        KA({
            method: "POST",
            root: a.root || void 0,
            path: "/rpc",
            params: a.urlParams,
            headers: b,
            body: a.requests || []
        }).then(e, e)
    }
    ;
    cC.prototype.Zs = function(a) {
        var b = this;
        return function(c, d) {
            b.MB(c, d, a)
        }
    }
    ;
    cC.prototype.MB = function(a, b, c) {
        a || (a = {});
        for (var d = 0; d < this.Bk.length; d++) {
            var e = this.Bk[d];
            e.callback && e.callback(a[e.id] || !1, b)
        }
        c && c(a, b)
    }
    ;
    LA.XK(function() {
        return new cC
    });
    cC.prototype.add = cC.prototype.add;
    cC.prototype.execute = cC.prototype.execute;
    var eC = function(a, b) {
        this.Y2 = a;
        this.Zd = b || null;
        this.Ze = null
    };
    eC.prototype.IE = function(a) {
        this.Zd = a;
        this.Ze = 2 == this.Zd ? new cC : new YB(this.Y2)
    }
    ;
    eC.prototype.add = function(a, b) {
        if (!a)
            throw a = b || _.Oe(),
            new EA("Batch entry " + (_.Pe(a, "id") ? '"' + a.id + '" ' : "") + "is missing a request method");
        null === this.Zd && this.IE(a.getFormat());
        this.Zd !== a.getFormat() && uB("Unable to add item to batch.");
        var c = b && b.callback;
        1 == this.Zd && c && (b.callback = function(d) {
            d = fC(d);
            var e = _.Wf([d]);
            c(d, e)
        }
        );
        return this.Ze.add(a, b)
    }
    ;
    eC.prototype.execute = function(a) {
        var b = a && 1 == this.Zd ? function(c) {
            var d = [];
            _.Bm(c, function(f, h) {
                f = fC(f);
                c[h] = f;
                d.push(f)
            });
            var e = _.Wf(d);
            a(c, e)
        }
        : a;
        this.Ze && this.Ze.execute(b)
    }
    ;
    var fC = function(a) {
        var b = a ? _.ly(a, "result") : null;
        _.Rb(b) && null != b.error && (b = hB(b),
        a = {
            id: a.id,
            error: b
        });
        return a
    };
    eC.prototype.then = function(a, b, c) {
        2 == this.Zd && uB('The "then" method is not available on this object.');
        return this.Ze.then(a, b, c)
    }
    ;
    eC.prototype.add = eC.prototype.add;
    eC.prototype.execute = eC.prototype.execute;
    eC.prototype.then = eC.prototype.then;
    var gC = function(a) {
        FA.call(this, gC.prototype.vn);
        this.mb = a
    };
    _.L(gC, FA);
    var hC = function(a) {
        a.mb.Nj();
        var b = a.mb
          , c = b.Fe();
        return !(XB(c.root, c.path, a.mb.js()) ? "batch" !== QB([b]) : 1)
    };
    _.g = gC.prototype;
    _.g.execute = function(a) {
        var b = this;
        if (hC(this))
            this.mb.execute(a);
        else {
            var c = function(d) {
                if ("function" === typeof a) {
                    var e = {
                        gapiRequest: {
                            data: {
                                status: d && d.status,
                                statusText: d && d.statusText,
                                headers: d && d.headers,
                                body: d && d.body
                            }
                        }
                    };
                    if (1 === b.getFormat()) {
                        a = KB(a);
                        var f = {}
                    }
                    var h = d ? d.result : !1;
                    d && 204 == d.status && (h = f,
                    delete e.gapiRequest.data.body);
                    a(h, _.Wf(e))
                }
            };
            this.ui().then(c, c)
        }
    }
    ;
    _.g.vn = function() {
        return hC(this) ? this.mb.ui() : new _.ok(function(a, b) {
            var c = IA()
              , d = c.add(this.mb, {
                id: "gapiRequest"
            });
            c.then(function(e) {
                var f = e.result;
                if (f && (f = f[d])) {
                    Object.prototype.hasOwnProperty.call(f, "result") || (f.result = !1);
                    Object.prototype.hasOwnProperty.call(f, "body") || (f.body = "");
                    MA(f) ? a(f) : b(f);
                    return
                }
                b(e)
            }, b)
        }
        ,this)
    }
    ;
    _.g.Fe = function() {
        if (this.mb.Fe)
            return this.mb.Fe()
    }
    ;
    _.g.Nj = function() {
        this.mb.Nj && this.mb.Nj()
    }
    ;
    _.g.Hm = function() {
        if (this.mb.Hm)
            return this.mb.Hm()
    }
    ;
    _.g.Qi = function(a) {
        this.mb.Qi && this.mb.Qi(a)
    }
    ;
    _.g.js = function() {
        return this.mb.js()
    }
    ;
    _.g.getFormat = function() {
        return this.mb.getFormat ? this.mb.getFormat() : 0
    }
    ;
    _.g.ui = function() {
        return this.vn()
    }
    ;
    gC.prototype.execute = gC.prototype.execute;
    gC.prototype.then = gC.prototype.then;
    gC.prototype.getPromise = gC.prototype.ui;
    var iC = "/rest?fields=" + encodeURIComponent("kind,name,version,rootUrl,servicePath,resources,parameters,methods,batchPath,id") + "&pp=0"
      , jC = function(a, b) {
        return "/discovery/v1/apis/" + (encodeURIComponent(a) + "/" + encodeURIComponent(b) + iC)
    }
      , lC = function(a, b, c, d) {
        if (_.Rb(a)) {
            var e = a;
            var f = a.name;
            a = a.version || "v1"
        } else
            f = a,
            a = b;
        if (!f || !a)
            throw new EA("Missing required parameters.");
        var h = c || function() {}
          , k = _.Rb(d) ? d : {};
        c = function(l) {
            var m = l && l.result;
            if (!m || m.error || !m.name || !l || l.error || l.message || l.message)
                h(m && m.error ? m : l && (l.error || l.message || l.message) ? l : new EA("API discovery response missing required fields."));
            else {
                l = k.root;
                l = null != m.rootUrl ? String(m.rootUrl) : l;
                l = "string" === typeof l ? l.replace(/([^\/])\/$/, "$1") : void 0;
                k.root = l;
                m.name && m.version && !m.id && (m.id = [m.name, m.version].join(":"));
                m.id && (k.apiId = m.id,
                l = "client/batchPath/" + m.id,
                m.batchPath && !_.ff(l) && _.gf(l, m.batchPath));
                var n = m.servicePath
                  , q = m.parameters
                  , p = function(v) {
                    _.Bm(v, function(r) {
                        if (!(r && r.id && r.path && r.httpMethod))
                            throw new EA("Missing required parameters");
                        var w = r.id.split("."), z = window.gapi.client, A;
                        for (A = 0; A < w.length - 1; A++) {
                            var D = w[A];
                            z[D] = z[D] || {};
                            z = z[D]
                        }
                        var x, G;
                        k && (k.hasOwnProperty("root") && (x = k.root),
                        k.hasOwnProperty("apiId") && (G = k.apiId));
                        D = window.gapi.client[w[0]];
                        D.JJ || (D.JJ = {
                            servicePath: n || "",
                            parameters: q,
                            apiId: G
                        });
                        w = w[A];
                        z[w] || (z[w] = _.Pi(kC, {
                            path: "string" === typeof r.path ? r.path : null,
                            httpMethod: "string" === typeof r.httpMethod ? r.httpMethod : null,
                            parameters: r.parameters,
                            parameterName: (r.request || {}).parameterName || "",
                            request: r.request,
                            root: x
                        }, D.JJ))
                    })
                }
                  , t = function(v) {
                    _.Bm(v, function(r) {
                        p(r.methods);
                        t(r.resources)
                    })
                };
                t(m.resources);
                p(m.methods);
                h.call()
            }
        }
        ;
        e ? c({
            result: e
        }) : 0 < f.indexOf("://") ? KA({
            path: f,
            params: {
                pp: 0,
                fields: 0 <= ("/" + f).indexOf("/discovery/v1/apis/") ? "kind,name,version,rootUrl,servicePath,resources,parameters,methods,batchPath,id" : 'fields["kind"],fields["name"],fields["version"],fields["rootUrl"],fields["servicePath"],fields["resources"],fields["parameters"],fields["methods"],fields["batchPath"],fields["id"]'
            }
        }).then(c, c) : KA({
            path: jC(f, a),
            root: d && d.root
        }).then(c, c)
    }
      , kC = function(a, b, c, d, e) {
        e = void 0 === e ? {} : e;
        var f = b.servicePath || "";
        _.yc(f, "/") || (f = "/" + f);
        var h = mC(a.path, [a.parameters, b.parameters], c || {});
        c = h.xl;
        var k = h.z6;
        f = _.sy(f, h.path);
        h = k.root;
        delete k.root;
        var l = a.parameterName;
        !l && 1 == _.tu(k) && k.hasOwnProperty("resource") && (l = "resource");
        if (l) {
            var m = k[l];
            delete k[l]
        }
        null == m && (m = d);
        null == m && a.request && (_.Xi(k) && (k = void 0),
        m = k);
        e = e || {};
        l = a.httpMethod;
        "GET" == l && void 0 !== m && "" != String(m) && (_.th(e, "X-HTTP-Method-Override", l),
        l = "POST");
        if ((null == m || null != d) && k)
            for (var n in k)
                "string" === typeof k[n] && (c[n] = k[n]);
        return KA({
            path: f,
            method: l,
            params: c,
            headers: e,
            body: m,
            root: h || a.root,
            apiId: b.apiId
        }, 1)
    }
      , mC = function(a, b, c) {
        c = _.Uj(c);
        var d = {};
        _.Am(b, function(e) {
            _.Bm(e, function(f, h) {
                var k = f.required;
                if ("path" == f.location)
                    if (Object.prototype.hasOwnProperty.call(c, h))
                        _.rb(a, "{" + h + "}") ? (f = encodeURIComponent(String(c[h])),
                        a = a.replace("{" + h + "}", f)) : _.rb(a, "{+" + h + "}") && (f = encodeURI(String(c[h])),
                        a = a.replace("{+" + h + "}", f)),
                        delete c[h];
                    else {
                        if (k)
                            throw new EA("Required path parameter " + h + " is missing.");
                    }
                else
                    "query" == f.location && Object.prototype.hasOwnProperty.call(c, h) && (d[h] = c[h],
                    delete c[h])
            })
        });
        if (b = c.trace)
            d.trace = b,
            delete c.trace;
        return {
            path: a,
            xl: d,
            z6: c
        }
    };
    var nC = function(a, b, c, d) {
        var e = b || "v1"
          , f = _.Rb(d) ? d : {
            root: d
        };
        if (c)
            lC(a, e, function(h) {
                if (h)
                    if (h.error)
                        c(h);
                    else {
                        var k = "API discovery was unsuccessful.";
                        if (h.message || h.message)
                            k = h.message || h.message;
                        c({
                            error: k,
                            code: 0
                        })
                    }
                else
                    c()
            }, f);
        else
            return new _.ok(function(h, k) {
                var l = function(m) {
                    m ? k(m) : h()
                };
                try {
                    lC(a, e, l, f)
                } catch (m) {
                    k(m)
                }
            }
            )
    }
      , oC = new RegExp(/^((([Hh][Tt][Tt][Pp][Ss]?:)?\/\/[^\/?#]*)?\/)?/.source + /(_ah\/api\/)?(batch|rpc)(\/|\?|#|$)/.source)
      , pC = function(a, b) {
        if (!a)
            throw new EA("Missing required parameters");
        var c = "object" === typeof a ? a : {
            path: a
        };
        a = c.callback;
        delete c.callback;
        b = new LB(c,b);
        if (c = !!_.ff("client/xd4") && NA()) {
            var d = b.Fe();
            c = d.path;
            (d = d.root) && "/" !== d.charAt(d.length - 1) && (d += "/");
            d && c && c.substr(0, d.length) === d && (c = c.substr(d.length));
            c = !c.match(oC)
        }
        c && (b = new gC(b));
        return a ? (b.execute(a),
        null) : b
    };
    LA.YK(function(a) {
        return pC.apply(null, arguments)
    });
    var qC = function(a, b) {
        if (!a)
            throw new EA("Missing required parameters");
        for (var c = a.split("."), d = window.gapi.client, e = 0; e < c.length - 1; e++) {
            var f = c[e];
            d[f] = d[f] || {};
            d = d[f]
        }
        c = c[c.length - 1];
        if (!d[c]) {
            var h = b || {};
            d[c] = function(k) {
                var l = "string" == typeof h ? h : h.root;
                k && k.root && (l = k.root);
                return new LB({
                    method: a,
                    apiVersion: h.apiVersion,
                    rpcParams: k,
                    transport: {
                        name: "googleapis",
                        root: l
                    }
                },2)
            }
        }
    }
      , rC = function(a) {
        return new eC(a)
    };
    LA.WK(function(a) {
        return rC.apply(null, arguments)
    });
    var sC = function(a) {
        if (_.ei.JSONRPC_ERROR_MOD)
            throw new EA(a + " is discontinued. See https://developers.googleblog.com/2018/03/discontinuing-support-for-json-rpc-and.html");
        _.$f.log(a + " is deprecated. See https://developers.google.com/api-client-library/javascript/reference/referencedocs")
    };
    _.E("gapi.client.init", function(a) {
        a.apiKey && _.gf("client/apiKey", a.apiKey);
        var b = _.dc(a.discoveryDocs || [], function(d) {
            return nC(d)
        });
        if ((a.clientId || a.client_id) && a.scope) {
            var c = new _.ok(function(d, e) {
                var f = function() {
                    _.u.gapi.auth2.init.call(_.u.gapi.auth2, a).then(function() {
                        d()
                    }, e)
                };
                GA ? f() : _.u.gapi.load("auth2", {
                    callback: function() {
                        f()
                    },
                    onerror: function(h) {
                        e(h || Error("Ia"))
                    }
                })
            }
            );
            b.push(c)
        } else
            (a.clientId || a.client_id || a.scope) && _.$f.log("client_id and scope must both be provided to initialize OAuth.");
        return _.wk(b).then(function() {})
    });
    _.E("gapi.client.load", nC);
    _.E("gapi.client.newBatch", rC);
    _.E("gapi.client.newRpcBatch", function() {
        sC("gapi.client.newRpcBatch");
        return rC()
    });
    _.E("gapi.client.newHttpBatch", function(a) {
        sC("gapi.client.newHttpBatch");
        return new eC(a,0)
    });
    _.E("gapi.client.register", function(a, b) {
        sC("gapi.client.register");
        var c;
        b && (c = {
            apiVersion: b.apiVersion,
            root: b.root
        });
        qC(a, c)
    });
    _.E("gapi.client.request", pC);
    _.E("gapi.client.rpcRequest", function(a, b, c) {
        sC("gapi.client.rpcRequest");
        if (!a)
            throw new EA('Missing required parameter "method".');
        return new LB({
            method: a,
            apiVersion: b,
            rpcParams: c,
            transport: {
                name: "googleapis",
                root: c && c.root || ""
            }
        },2)
    });
    _.E("gapi.client.setApiKey", function(a) {
        _.gf("client/apiKey", a);
        _.gf("googleapis.config/developerKey", a)
    });
    _.E("gapi.client.setApiVersions", function(a) {
        sC("gapi.client.setApiVersions");
        _.gf("googleapis.config/versions", a)
    });
    _.E("gapi.client.getToken", function(a) {
        return _.ti(a)
    });
    _.E("gapi.client.setToken", function(a, b) {
        a ? _.zw(a, b) : _.Aw(b)
    });
    _.E("gapi.client.AuthType", {
        j7: "auto",
        NONE: "none",
        X$: "oauth2",
        f9: "1p"
    });
    _.E("gapi.client.AuthType.AUTO", "auto");
    _.E("gapi.client.AuthType.NONE", "none");
    _.E("gapi.client.AuthType.OAUTH2", "oauth2");
    _.E("gapi.client.AuthType.FIRST_PARTY", "1p");
    var Zp, $p, aq, cq;
    Zp = ["left", "right"];
    $p = "inline bubble none only pp vertical-bubble".split(" ");
    aq = function(a, b) {
        if ("string" == typeof a) {
            a = a.toLowerCase();
            var c;
            for (c = 0; c < b.length; c++)
                if (b[c] == a)
                    return a
        }
    }
    ;
    _.bq = function(a) {
        return aq(a, $p)
    }
    ;
    cq = function(a) {
        return aq(a, Zp)
    }
    ;
    _.dq = function(a) {
        a.source = [null, "source"];
        a.expandTo = [null, "expandTo"];
        a.align = [cq];
        a.annotation = [_.bq];
        a.origin = [_.oo]
    }
    ;
    _.Ua.gH("bubble", function(a) {
        (0,
        _.Kg)("iframes-styles-bubble", a)
    });
    _.Ua.gH("slide-menu", function(a) {
        (0,
        _.Kg)("iframes-styles-slide-menu", a)
    });
    _.E("gapi.plusone.render", _.U4);
    _.E("gapi.plusone.go", _.V4);
    var W4 = {
        tall: {
            "true": {
                width: 50,
                height: 60
            },
            "false": {
                width: 50,
                height: 24
            }
        },
        small: {
            "false": {
                width: 24,
                height: 15
            },
            "true": {
                width: 70,
                height: 15
            }
        },
        medium: {
            "false": {
                width: 32,
                height: 20
            },
            "true": {
                width: 90,
                height: 20
            }
        },
        standard: {
            "false": {
                width: 38,
                height: 24
            },
            "true": {
                width: 106,
                height: 24
            }
        }
    }
      , X4 = {
        width: 180,
        height: 35
    }
      , Y4 = function(a) {
        return "string" == typeof a ? "" != a && "0" != a && "false" != a.toLowerCase() : !!a
    }
      , Z4 = function(a) {
        var b = parseInt(a, 10);
        if (b == a)
            return String(b)
    }
      , $4 = function(a) {
        if (Y4(a))
            return "true"
    }
      , a5 = function(a) {
        return "string" == typeof a && W4[a.toLowerCase()] ? a.toLowerCase() : "standard"
    }
      , b5 = function(a, b) {
        return "tall" == a5(b) ? "true" : null == a || Y4(a) ? "true" : "false"
    }
      , c5 = function(a, b) {
        return W4[a5(a)][b5(b, a)]
    }
      , d5 = function(a, b, c) {
        a = _.bq(a);
        b = a5(b);
        if ("" != a) {
            if ("inline" == a || "only" == a)
                return a = 450,
                c.width && (a = 120 < c.width ? c.width : 120),
                {
                    width: a,
                    height: W4[b]["false"].height
                };
            if ("bubble" != a) {
                if ("none" == a)
                    return W4[b]["false"];
                if ("pp" == a)
                    return X4
            }
        }
        return W4[b]["true"]
    }
      , e5 = {
        href: [_.po, "url"],
        width: [Z4],
        size: [a5],
        resize: [$4],
        autosize: [$4],
        count: [function(a, b) {
            return b5(b.count, b.size)
        }
        ],
        db: [_.qo],
        ecp: [_.ro],
        textcolor: [function(a) {
            if ("string" == typeof a && a.match(/^[0-9A-F]{6}$/i))
                return a
        }
        ],
        drm: [$4],
        recommendations: [],
        fu: [],
        ad: [$4],
        cr: [Z4],
        ag: [Z4],
        "fr-ai": [],
        "fr-sigh": []
    };
    (function() {
        var a = {
            0: "plusone"
        }
          , b = _.ff("iframes/plusone/preloadUrl");
        b && (a[7] = b);
        _.dq(e5);
        a[1] = e5;
        a[2] = {
            width: [function(c, d) {
                return d.annotation ? d5(d.annotation, d.size, d).width : c5(d.size, d.count).width
            }
            ],
            height: [function(c, d) {
                return d.annotation ? d5(d.annotation, d.size, d).height : c5(d.size, d.count).height
            }
            ]
        };
        a[3] = {
            onPlusOne: {
                LA: function(c) {
                    return "on" == c.state ? "+1" : null
                },
                yJ: "callback"
            },
            onstartinteraction: !0,
            onendinteraction: !0,
            onpopup: !0
        };
        a[4] = ["div", "button"];
        a = _.Xp(a);
        _.V4 = a.go;
        _.U4 = a.ua
    }
    )();
});
// Google Inc.
