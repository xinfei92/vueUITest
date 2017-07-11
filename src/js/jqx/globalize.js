!function (a, b) {
    var c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z;
    c = function (a) {
        console.log(a);
        return new c.prototype.init(a)
    }, "undefined" != typeof require && "undefined" != typeof exports && "undefined" != typeof module ? module.exports = c : a.Globalize = c, c.cultures = {}, c.prototype = {
        constructor: c,
        init: function (a) {
            return this.cultures = c.cultures, this.cultureSelector = a, this
        }
    }, c.prototype.init.prototype = c.prototype, c.cultures.default = {
        name: "en",
        englishName: "English",
        nativeName: "English",
        isRTL: !1,
        language: "en",
        numberFormat: {
            pattern: ["-n"],
            decimals: 2,
            ",": ",",
            ".": ".",
            groupSizes: [3],
            "+": "+",
            "-": "-",
            NaN: "NaN",
            negativeInfinity: "-Infinity",
            positiveInfinity: "Infinity",
            percent: {pattern: ["-n %", "n %"], decimals: 2, groupSizes: [3], ",": ",", ".": ".", symbol: "%"},
            currency: {pattern: ["($n)", "$n"], decimals: 2, groupSizes: [3], ",": ",", ".": ".", symbol: "$"}
        },
        calendars: {
            standard: {
                name: "Gregorian_USEnglish",
                "/": "/",
                ":": ":",
                firstDay: 0,
                days: {
                    names: ["日", "一", "二", "三", "四", "五", "六"],
                    namesAbbr: ["日", "一", "二", "三", "四", "五", "六"],
                    namesShort: ["日", "一", "二", "三", "四", "五", "六"]
                },
                months: {
                    names: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December", ""],
                    namesAbbr: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", ""]
                },
                AM: ["AM", "am", "AM"],
                PM: ["PM", "pm", "PM"],
                eras: [{name: "A.D.", start: null, offset: 0}],
                twoDigitYearMax: 2029,
                patterns: {
                    d: "M/d/yyyy",
                    D: "dddd, MMMM dd, yyyy",
                    t: "h:mm tt",
                    T: "h:mm:ss tt",
                    f: "dddd, MMMM dd, yyyy h:mm tt",
                    F: "dddd, MMMM dd, yyyy h:mm:ss tt",
                    M: "MMMM dd",
                    Y: "yyyy MMMM",
                    S: "yyyy'-'MM'-'dd'T'HH':'mm':'ss"
                }
            }
        },
        messages: {}
    }, c.cultures.default.calendar = c.cultures.default.calendars.standard, c.cultures.en = c.cultures.default, c.cultureSelector = "en", d = /^0x[a-f0-9]+$/i, e = /^[+\-]?infinity$/i, f = /^[+\-]?\d*\.?\d*(e[+\-]?\d+)?$/, g = /^\s+|\s+$/g, h = function (a, b) {
        if (a.indexOf) return a.indexOf(b);
        for (var c = 0, d = a.length; c < d; c++)
            if (a[c] === b) return c;
        return -1
    }, i = function (a, b) {
        return a.substr(a.length - b.length) === b
    }, j = function () {
        var a, c, d, e, f, g, h = arguments[0] || {},
            i = 1,
            n = arguments.length,
            o = !1;
        for ("boolean" == typeof h && (o = h, h = arguments[1] || {}, i = 2), "object" == typeof h || l(h) || (h = {}); i < n; i++)
            if (null != (a = arguments[i]))
                for (c in a) d = h[c], e = a[c], h !== e && (o && e && (m(e) || (f = k(e))) ? (f ? (f = !1, g = d && k(d) ? d : []) : g = d && m(d) ? d : {}, h[c] = j(o, g, e)) : e !== b && (h[c] = e));
        return h
    }, k = Array.isArray || function (a) {
            return "[object Array]" === Object.prototype.toString.call(a)
        }, l = function (a) {
        return "[object Function]" === Object.prototype.toString.call(a)
    }, m = function (a) {
        return "[object Object]" === Object.prototype.toString.call(a)
    }, n = function (a, b) {
        return 0 === a.indexOf(b)
    }, o = function (a) {
        return (a + "").replace(g, "")
    }, p = function (a) {
        return isNaN(a) ? NaN : Math[a < 0 ? "ceil" : "floor"](a)
    }, q = function (a, b, c) {
        var d;
        for (d = a.length; d < b; d += 1) a = c ? "0" + a : a + "0";
        return a
    }, r = function (a, b) {
        for (var c = 0, d = !1, e = 0, f = a.length; e < f; e++) {
            var g = a.charAt(e);
            switch (g) {
                case "'":
                    d ? b.push("'") : c++, d = !1;
                    break;
                case "\\":
                    d && b.push("\\"), d = !d;
                    break;
                default:
                    b.push(g), d = !1
            }
        }
        return c
    }, s = function (a, b) {
        b = b || "F";
        var c, d = a.patterns,
            e = b.length;
        if (1 === e) {
            if (c = d[b], !c) throw "Invalid date format string '" + b + "'.";
            b = c
        } else 2 === e && "%" === b.charAt(0) && (b = b.charAt(1));
        return b
    }, t = function (a, b, c) {
        function d(a, b) {
            if (a < 0) return "-" + d(-a, b);
            var c, e = a + "";
            return b > 1 && e.length < b ? (c = u[b - 2] + e, c.substr(c.length - b, b)) : c = e
        }

        function e() {
            return o || p ? o : (o = y.test(b), p = !0, o)
        }

        function f(a, b) {
            if (q) return q[b];
            switch (b) {
                case 0:
                    return a.getFullYear();
                case 1:
                    return a.getMonth();
                case 2:
                    return a.getDate();
                default:
                    throw "Invalid part value " + b
            }
        }

        var g, h = c.calendar,
            i = h.convert;
        if (!b || !b.length || "i" === b) {
            if (c && c.name.length)
                if (i) g = t(a, h.patterns.F, c);
                else {
                    var j = new Date(a.getTime()),
                        k = w(a, h.eras);
                    j.setFullYear(x(a, h, k)), g = j.toLocaleString()
                } else g = a.toString();
            return g
        }
        var l = h.eras,
            m = "s" === b;
        b = s(h, b), g = [];
        var n, o, p, q, u = ["0", "00", "000"],
            y = /([^d]|^)(d|dd)([^d]|$)/g,
            z = 0,
            A = v();
        for (!m && i && (q = i.fromGregorian(a)); ;) {
            var B = A.lastIndex,
                C = A.exec(b),
                D = b.slice(B, C ? C.index : b.length);
            if (z += r(D, g), !C) break;
            if (z % 2) g.push(C[0]);
            else {
                var E = C[0],
                    F = E.length;
                switch (E) {
                    case "ddd":
                    case "dddd":
                        var G = 3 === F ? h.days.namesAbbr : h.days.names;
                        g.push(G[a.getDay()]);
                        break;
                    case "d":
                    case "dd":
                        o = !0, g.push(d(f(a, 2), F));
                        break;
                    case "MMM":
                    case "MMMM":
                        var H = f(a, 1);
                        g.push(h.monthsGenitive && e() ? h.monthsGenitive[3 === F ? "namesAbbr" : "names"][H] : h.months[3 === F ? "namesAbbr" : "names"][H]);
                        break;
                    case "M":
                    case "MM":
                        g.push(d(f(a, 1) + 1, F));
                        break;
                    case "y":
                    case "yy":
                    case "yyyy":
                        H = q ? q[0] : x(a, h, w(a, l), m), F < 4 && (H %= 100), g.push(d(H, F));
                        break;
                    case "h":
                    case "hh":
                        n = a.getHours() % 12, 0 === n && (n = 12), g.push(d(n, F));
                        break;
                    case "H":
                    case "HH":
                        g.push(d(a.getHours(), F));
                        break;
                    case "m":
                    case "mm":
                        g.push(d(a.getMinutes(), F));
                        break;
                    case "s":
                    case "ss":
                        g.push(d(a.getSeconds(), F));
                        break;
                    case "t":
                    case "tt":
                        H = a.getHours() < 12 ? h.AM ? h.AM[0] : " " : h.PM ? h.PM[0] : " ", g.push(1 === F ? H.charAt(0) : H);
                        break;
                    case "f":
                    case "ff":
                    case "fff":
                        g.push(d(a.getMilliseconds(), 3).substr(0, F));
                        break;
                    case "z":
                    case "zz":
                        n = a.getTimezoneOffset() / 60, g.push((n <= 0 ? "+" : "-") + d(Math.floor(Math.abs(n)), F));
                        break;
                    case "zzz":
                        n = a.getTimezoneOffset() / 60, g.push((n <= 0 ? "+" : "-") + d(Math.floor(Math.abs(n)), 2) + ":" + d(Math.abs(a.getTimezoneOffset() % 60), 2));
                        break;
                    case "g":
                    case "gg":
                        h.eras && g.push(h.eras[w(a, l)].name);
                        break;
                    case "/":
                        g.push(h["/"]);
                        break;
                    default:
                        throw "Invalid date format pattern '" + E + "'."
                }
            }
        }
        return g.join("")
    },
        function () {
            var a;
            a = function (a, b, c) {
                var d = c.groupSizes,
                    e = d[0],
                    f = 1,
                    g = Math.pow(10, b),
                    h = Math.round(a * g) / g;
                isFinite(h) || (h = a), a = h;
                var i = a + "",
                    j = "",
                    k = i.split(/e/i),
                    l = k.length > 1 ? parseInt(k[1], 10) : 0;
                i = k[0], k = i.split("."), i = k[0], j = k.length > 1 ? k[1] : "";
                l > 0 ? (j = q(j, l, !1), i += j.slice(0, l), j = j.substr(l)) : l < 0 && (l = -l, i = q(i, l + 1, !0), j = i.slice(-l, i.length) + j, i = i.slice(0, -l)), j = b > 0 ? c["."] + (j.length > b ? j.slice(0, b) : q(j, b)) : "";
                for (var m = i.length - 1, n = c[","], o = ""; m >= 0;) {
                    if (0 === e || e > m) return i.slice(0, m + 1) + (o.length ? n + o + j : j);
                    o = i.slice(m - e + 1, m + 1) + (o.length ? n + o : ""), m -= e, f < d.length && (e = d[f], f++)
                }
                return i.slice(0, m + 1) + n + o + j
            }, u = function (b, c, d) {
                if (!isFinite(b)) return b === 1 / 0 ? d.numberFormat.positiveInfinity : b === -(1 / 0) ? d.numberFormat.negativeInfinity : d.numberFormat.NaN;
                if (!c || "i" === c) return d.name.length ? b.toLocaleString() : b.toString();
                c = c || "D";
                var e, f = d.numberFormat,
                    g = Math.abs(b),
                    h = -1;
                c.length > 1 && (h = parseInt(c.slice(1), 10));
                var i, j = c.charAt(0).toUpperCase();
                switch (j) {
                    case "D":
                        e = "n", g = p(g), h !== -1 && (g = q("" + g, h, !0)), b < 0 && (g = "-" + g);
                        break;
                    case "N":
                        i = f;
                    case "C":
                        i = i || f.currency;
                    case "P":
                        i = i || f.percent, e = b < 0 ? i.pattern[0] : i.pattern[1] || "n", h === -1 && (h = i.decimals), g = a(g * ("P" === j ? 100 : 1), h, i);
                        break;
                    default:
                        throw "Bad number format specifier: " + j
                }
                for (var k = /n|\$|-|%/g, l = ""; ;) {
                    var m = k.lastIndex,
                        n = k.exec(e);
                    if (l += e.slice(m, n ? n.index : e.length), !n) break;
                    switch (n[0]) {
                        case "n":
                            l += g;
                            break;
                        case "$":
                            l += f.currency.symbol;
                            break;
                        case "-":
                            /[1-9]/.test(g) && (l += f["-"]);
                            break;
                        case "%":
                            l += f.percent.symbol
                    }
                }
                return l
            }
        }(), v = function () {
        return /\/|dddd|ddd|dd|d|MMMM|MMM|MM|M|yyyy|yy|y|hh|h|HH|H|mm|m|ss|s|tt|t|fff|ff|f|zzz|zz|z|gg|g/g
    }, w = function (a, b) {
        if (!b) return 0;
        for (var c, d = a.getTime(), e = 0, f = b.length; e < f; e++)
            if (c = b[e].start, null === c || d >= c) return e;
        return 0
    }, x = function (a, b, c, d) {
        var e = a.getFullYear();
        return !d && b.eras && (e -= b.eras[c].offset), e
    },
        function () {
            var a, b, c, d, e, f, g;
            a = function (a, b) {
                if (b < 100) {
                    var c = new Date,
                        d = w(c),
                        e = x(c, a, d),
                        f = a.twoDigitYearMax;
                    f = "string" == typeof f ? (new Date).getFullYear() % 100 + parseInt(f, 10) : f, b += e - e % 100, b > f && (b -= 100)
                }
                return b
            }, b = function (a, b, c) {
                var d, e = a.days,
                    i = a._upperDays;
                return i || (a._upperDays = i = [g(e.names), g(e.namesAbbr), g(e.namesShort)]), b = f(b), c ? (d = h(i[1], b), d === -1 && (d = h(i[2], b))) : d = h(i[0], b), d
            }, c = function (a, b, c) {
                var d = a.months,
                    e = a.monthsGenitive || a.months,
                    i = a._upperMonths,
                    j = a._upperMonthsGen;
                i || (a._upperMonths = i = [g(d.names), g(d.namesAbbr)], a._upperMonthsGen = j = [g(e.names), g(e.namesAbbr)]), b = f(b);
                var k = h(c ? i[1] : i[0], b);
                return k < 0 && (k = h(c ? j[1] : j[0], b)), k
            }, d = function (a, b) {
                var c = a._parseRegExp;
                if (c) {
                    var d = c[b];
                    if (d) return d
                } else a._parseRegExp = c = {};
                for (var e, f = s(a, b).replace(/([\^\$\.\*\+\?\|\[\]\(\)\{\}])/g, "\\\\$1"), g = ["^"], h = [], i = 0, j = 0, k = v(); null !== (e = k.exec(f));) {
                    var l = f.slice(i, e.index);
                    if (i = k.lastIndex, j += r(l, g), j % 2) g.push(e[0]);
                    else {
                        var m, n = e[0],
                            o = n.length;
                        switch (n) {
                            case "dddd":
                            case "ddd":
                            case "MMMM":
                            case "MMM":
                            case "gg":
                            case "g":
                                m = "(\\D+)";
                                break;
                            case "tt":
                            case "t":
                                m = "(\\D*)";
                                break;
                            case "yyyy":
                            case "fff":
                            case "ff":
                            case "f":
                                m = "(\\d{" + o + "})";
                                break;
                            case "dd":
                            case "d":
                            case "MM":
                            case "M":
                            case "yy":
                            case "y":
                            case "HH":
                            case "H":
                            case "hh":
                            case "h":
                            case "mm":
                            case "m":
                            case "ss":
                            case "s":
                                m = "(\\d\\d?)";
                                break;
                            case "zzz":
                                m = "([+-]?\\d\\d?:\\d{2})";
                                break;
                            case "zz":
                            case "z":
                                m = "([+-]?\\d\\d?)";
                                break;
                            case "/":
                                m = "(\\/)";
                                break;
                            default:
                                throw "Invalid date format pattern '" + n + "'."
                        }
                        m && g.push(m), h.push(e[0])
                    }
                }
                r(f.slice(i), g), g.push("$");
                var p = g.join("").replace(/\s+/g, "\\s+"),
                    q = {regExp: p, groups: h};
                return c[b] = q
            }, e = function (a, b, c) {
                return a < b || a > c
            }, f = function (a) {
                return a.split(" ").join(" ").toUpperCase()
            }, g = function (a) {
                for (var b = [], c = 0, d = a.length; c < d; c++) b[c] = f(a[c]);
                return b
            }, y = function (f, g, h) {
                f = o(f);
                var i = h.calendar,
                    j = d(i, g),
                    k = new RegExp(j.regExp).exec(f);
                if (null === k) return null;
                for (var l, m = j.groups, p = null, q = null, r = null, s = null, t = null, u = 0, v = 0, w = 0, x = 0, y = null, z = !1, A = 0, B = m.length; A < B; A++) {
                    var C = k[A + 1];
                    if (C) {
                        var D = m[A],
                            E = D.length,
                            F = parseInt(C, 10);
                        switch (D) {
                            case "dd":
                            case "d":
                                if (s = F, e(s, 1, 31)) return null;
                                break;
                            case "MMM":
                            case "MMMM":
                                if (r = c(i, C, 3 === E), e(r, 0, 11)) return null;
                                break;
                            case "M":
                            case "MM":
                                if (r = F - 1, e(r, 0, 11)) return null;
                                break;
                            case "y":
                            case "yy":
                            case "yyyy":
                                if (q = E < 4 ? a(i, F) : F, e(q, 0, 9999)) return null;
                                break;
                            case "h":
                            case "hh":
                                if (u = F, 12 === u && (u = 0), e(u, 0, 11)) return null;
                                break;
                            case "H":
                            case "HH":
                                if (u = F, e(u, 0, 23)) return null;
                                break;
                            case "m":
                            case "mm":
                                if (v = F, e(v, 0, 59)) return null;
                                break;
                            case "s":
                            case "ss":
                                if (w = F, e(w, 0, 59)) return null;
                                break;
                            case "tt":
                            case "t":
                                if (z = i.PM && (C === i.PM[0] || C === i.PM[1] || C === i.PM[2]), !z && (!i.AM || C !== i.AM[0] && C !== i.AM[1] && C !== i.AM[2])) return null;
                                break;
                            case "f":
                            case "ff":
                            case "fff":
                                if (x = F * Math.pow(10, 3 - E), e(x, 0, 999)) return null;
                                break;
                            case "ddd":
                            case "dddd":
                                if (t = b(i, C, 3 === E), e(t, 0, 6)) return null;
                                break;
                            case "zzz":
                                var G = C.split(/:/);
                                if (2 !== G.length) return null;
                                if (l = parseInt(G[0], 10), e(l, -12, 13)) return null;
                                var H = parseInt(G[1], 10);
                                if (e(H, 0, 59)) return null;
                                y = 60 * l + (n(C, "-") ? -H : H);
                                break;
                            case "z":
                            case "zz":
                                if (l = F, e(l, -12, 13)) return null;
                                y = 60 * l;
                                break;
                            case "g":
                            case "gg":
                                var I = C;
                                if (!I || !i.eras) return null;
                                I = o(I.toLowerCase());
                                for (var J = 0, K = i.eras.length; J < K; J++)
                                    if (I === i.eras[J].name.toLowerCase()) {
                                        p = J;
                                        break
                                    }
                                if (null === p) return null
                        }
                    }
                }
                var L, M = new Date,
                    N = i.convert;
                if (L = N ? N.fromGregorian(M)[0] : M.getFullYear(), null === q ? q = L : i.eras && (q += i.eras[p || 0].offset), null === r && (r = 0), null === s && (s = 1), N) {
                    if (M = N.toGregorian(q, r, s), null === M) return null
                } else {
                    if (M.setFullYear(q, r, s), M.getDate() !== s) return null;
                    if (null !== t && M.getDay() !== t) return null
                }
                if (z && u < 12 && (u += 12), M.setHours(u, v, w, x), null !== y) {
                    var O = M.getMinutes() - (y + M.getTimezoneOffset());
                    M.setHours(M.getHours() + parseInt(O / 60, 10), O % 60)
                }
                return M
            }
        }(), z = function (a, b, c) {
        var d, e = b["-"],
            f = b["+"];
        switch (c) {
            case "n -":
                e = " " + e, f = " " + f;
            case "n-":
                i(a, e) ? d = ["-", a.substr(0, a.length - e.length)] : i(a, f) && (d = ["+", a.substr(0, a.length - f.length)]);
                break;
            case "- n":
                e += " ", f += " ";
            case "-n":
                n(a, e) ? d = ["-", a.substr(e.length)] : n(a, f) && (d = ["+", a.substr(f.length)]);
                break;
            case "(n)":
                n(a, "(") && i(a, ")") && (d = ["-", a.substr(1, a.length - 2)])
        }
        return d || ["", a]
    }, c.prototype.findClosestCulture = function (a) {
        return c.findClosestCulture.call(this, a)
    }, c.prototype.format = function (a, b, d) {
        return c.format.call(this, a, b, d)
    }, c.prototype.localize = function (a, b) {
        return c.localize.call(this, a, b)
    }, c.prototype.parseInt = function (a, b, d) {
        return c.parseInt.call(this, a, b, d)
    }, c.prototype.parseFloat = function (a, b, d) {
        return c.parseFloat.call(this, a, b, d)
    }, c.prototype.culture = function (a) {
        return c.culture.call(this, a)
    }, c.addCultureInfo = function (a, b, c) {
        var d = {},
            e = !1;
        "string" != typeof a ? (c = a, a = this.culture().name, d = this.cultures[a]) : "string" != typeof b ? (c = b, e = null == this.cultures[a], d = this.cultures[a] || this.cultures.default) : (e = !0, d = this.cultures[b]), this.cultures[a] = j(!0, {}, d, c), e && (this.cultures[a].calendar = this.cultures[a].calendars.standard)
    }, c.findClosestCulture = function (a) {
        var b;
        if (!a) return this.findClosestCulture(this.cultureSelector) || this.cultures.default;
        if ("string" == typeof a && (a = a.split(",")), k(a)) {
            var c, d, e = this.cultures,
                f = a,
                g = f.length,
                h = [];
            for (d = 0; d < g; d++) {
                a = o(f[d]);
                var i, j = a.split(";");
                c = o(j[0]), 1 === j.length ? i = 1 : (a = o(j[1]), 0 === a.indexOf("q=") ? (a = a.substr(2), i = parseFloat(a), i = isNaN(i) ? 0 : i) : i = 1), h.push({
                    lang: c,
                    pri: i
                })
            }
            for (h.sort(function (a, b) {
                return a.pri < b.pri ? 1 : a.pri > b.pri ? -1 : 0
            }), d = 0; d < g; d++)
                if (c = h[d].lang, b = e[c]) return b;
            for (d = 0; d < g; d++)
                for (c = h[d].lang; ;) {
                    var l = c.lastIndexOf("-");
                    if (l === -1) break;
                    if (c = c.substr(0, l), b = e[c]) return b
                }
            for (d = 0; d < g; d++) {
                c = h[d].lang;
                for (var m in e) {
                    var n = e[m];
                    if (n.language == c) return n
                }
            }
        } else if ("object" == typeof a) return a;
        return b || null
    }, c.format = function (a, b, c) {
        var d = this.findClosestCulture(c);
        return a instanceof Date ? a = t(a, b, d) : "number" == typeof a && (a = u(a, b, d)), a
    }, c.localize = function (a, b) {
        return this.findClosestCulture(b).messages[a] || this.cultures.default.messages[a]
    }, c.parseDate = function (a, b, c) {
        c = this.findClosestCulture(c);
        var d, e, f;
        if (b) {
            if ("string" == typeof b && (b = [b]), b.length)
                for (var g = 0, h = b.length; g < h; g++) {
                    var i = b[g];
                    if (i && (d = y(a, i, c))) break
                }
        } else {
            f = c.calendar.patterns;
            for (e in f)
                if (d = y(a, f[e], c)) break
        }
        return d || null
    }, c.parseInt = function (a, b, d) {
        return p(c.parseFloat(a, b, d))
    }, c.parseFloat = function (a, b, c) {
        "number" != typeof b && (c = b, b = 10);
        var g = this.findClosestCulture(c),
            h = NaN,
            i = g.numberFormat;
        if (a.indexOf(g.numberFormat.currency.symbol) > -1 && (a = a.replace(g.numberFormat.currency.symbol, ""), a = a.replace(g.numberFormat.currency["."], g.numberFormat["."])), a.indexOf(g.numberFormat.percent.symbol) > -1 && (a = a.replace(g.numberFormat.percent.symbol, "")), a = a.replace(/ /g, ""), e.test(a)) h = parseFloat(a);
        else if (!b && d.test(a)) h = parseInt(a, 16);
        else {
            var j = z(a, i, i.pattern[0]),
                k = j[0],
                l = j[1];
            "" === k && "(n)" !== i.pattern[0] && (j = z(a, i, "(n)"), k = j[0], l = j[1]), "" === k && "-n" !== i.pattern[0] && (j = z(a, i, "-n"), k = j[0], l = j[1]), k = k || "+";
            var m, n, o = l.indexOf("e");
            o < 0 && (o = l.indexOf("E")), o < 0 ? (n = l, m = null) : (n = l.substr(0, o), m = l.substr(o + 1));
            var p, q, r = i["."],
                s = n.indexOf(r);
            s < 0 ? (p = n, q = null) : (p = n.substr(0, s), q = n.substr(s + r.length));
            var t = i[","];
            p = p.split(t).join("");
            var u = t.replace(/\u00A0/g, " ");
            t !== u && (p = p.split(u).join(""));
            var v = k + p;
            if (null !== q && (v += "." + q), null !== m) {
                var w = z(m, i, "-n");
                v += "e" + (w[0] || "+") + w[1]
            }
            f.test(v) && (h = parseFloat(v))
        }
        return h
    }, c.culture = function (a) {
        return "undefined" != typeof a && (this.cultureSelector = a), this.findClosestCulture(a) || this.cultures.default
    }
}(this);