function Pi(e, t) {
  return function () {
    return e.apply(t, arguments);
  };
}
const { toString: On } = Object.prototype,
  { getPrototypeOf: ke } = Object,
  se = ((e) => (t) => {
    const i = On.call(t);
    return e[i] || (e[i] = i.slice(8, -1).toLowerCase());
  })(Object.create(null)),
  $ = (e) => ((e = e.toLowerCase()), (t) => se(t) === e),
  oe = (e) => (t) => typeof t === e,
  { isArray: gt } = Array,
  It = oe("undefined");
function kn(e) {
  return (
    e !== null &&
    !It(e) &&
    e.constructor !== null &&
    !It(e.constructor) &&
    B(e.constructor.isBuffer) &&
    e.constructor.isBuffer(e)
  );
}
const Di = $("ArrayBuffer");
function Cn(e) {
  let t;
  return (
    typeof ArrayBuffer < "u" && ArrayBuffer.isView
      ? (t = ArrayBuffer.isView(e))
      : (t = e && e.buffer && Di(e.buffer)),
    t
  );
}
const Sn = oe("string"),
  B = oe("function"),
  Hi = oe("number"),
  ae = (e) => e !== null && typeof e == "object",
  Tn = (e) => e === !0 || e === !1,
  qt = (e) => {
    if (se(e) !== "object") return !1;
    const t = ke(e);
    return (
      (t === null ||
        t === Object.prototype ||
        Object.getPrototypeOf(t) === null) &&
      !(Symbol.toStringTag in e) &&
      !(Symbol.iterator in e)
    );
  },
  Rn = $("Date"),
  Pn = $("File"),
  Dn = $("Blob"),
  Hn = $("FileList"),
  jn = (e) => ae(e) && B(e.pipe),
  Bn = (e) => {
    let t;
    return (
      e &&
      ((typeof FormData == "function" && e instanceof FormData) ||
        (B(e.append) &&
          ((t = se(e)) === "formdata" ||
            (t === "object" &&
              B(e.toString) &&
              e.toString() === "[object FormData]"))))
    );
  },
  Nn = $("URLSearchParams"),
  zn = (e) =>
    e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function kt(e, t, { allOwnKeys: i = !1 } = {}) {
  if (e === null || typeof e > "u") return;
  let n, r;
  if ((typeof e != "object" && (e = [e]), gt(e)))
    for (n = 0, r = e.length; n < r; n++) t.call(null, e[n], n, e);
  else {
    const s = i ? Object.getOwnPropertyNames(e) : Object.keys(e),
      o = s.length;
    let a;
    for (n = 0; n < o; n++) (a = s[n]), t.call(null, e[a], a, e);
  }
}
function ji(e, t) {
  t = t.toLowerCase();
  const i = Object.keys(e);
  let n = i.length,
    r;
  for (; n-- > 0; ) if (((r = i[n]), t === r.toLowerCase())) return r;
  return null;
}
const Bi =
    typeof globalThis < "u"
      ? globalThis
      : typeof self < "u"
      ? self
      : typeof window < "u"
      ? window
      : global,
  Ni = (e) => !It(e) && e !== Bi;
function _e() {
  const { caseless: e } = (Ni(this) && this) || {},
    t = {},
    i = (n, r) => {
      const s = (e && ji(t, r)) || r;
      qt(t[s]) && qt(n)
        ? (t[s] = _e(t[s], n))
        : qt(n)
        ? (t[s] = _e({}, n))
        : gt(n)
        ? (t[s] = n.slice())
        : (t[s] = n);
    };
  for (let n = 0, r = arguments.length; n < r; n++)
    arguments[n] && kt(arguments[n], i);
  return t;
}
const Fn = (e, t, i, { allOwnKeys: n } = {}) => (
    kt(
      t,
      (r, s) => {
        i && B(r) ? (e[s] = Pi(r, i)) : (e[s] = r);
      },
      { allOwnKeys: n }
    ),
    e
  ),
  qn = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e),
  Mn = (e, t, i, n) => {
    (e.prototype = Object.create(t.prototype, n)),
      (e.prototype.constructor = e),
      Object.defineProperty(e, "super", { value: t.prototype }),
      i && Object.assign(e.prototype, i);
  },
  Un = (e, t, i, n) => {
    let r, s, o;
    const a = {};
    if (((t = t || {}), e == null)) return t;
    do {
      for (r = Object.getOwnPropertyNames(e), s = r.length; s-- > 0; )
        (o = r[s]), (!n || n(o, e, t)) && !a[o] && ((t[o] = e[o]), (a[o] = !0));
      e = i !== !1 && ke(e);
    } while (e && (!i || i(e, t)) && e !== Object.prototype);
    return t;
  },
  Vn = (e, t, i) => {
    (e = String(e)),
      (i === void 0 || i > e.length) && (i = e.length),
      (i -= t.length);
    const n = e.indexOf(t, i);
    return n !== -1 && n === i;
  },
  Wn = (e) => {
    if (!e) return null;
    if (gt(e)) return e;
    let t = e.length;
    if (!Hi(t)) return null;
    const i = new Array(t);
    for (; t-- > 0; ) i[t] = e[t];
    return i;
  },
  $n = (
    (e) => (t) =>
      e && t instanceof e
  )(typeof Uint8Array < "u" && ke(Uint8Array)),
  Jn = (e, t) => {
    const n = (e && e[Symbol.iterator]).call(e);
    let r;
    for (; (r = n.next()) && !r.done; ) {
      const s = r.value;
      t.call(e, s[0], s[1]);
    }
  },
  Kn = (e, t) => {
    let i;
    const n = [];
    for (; (i = e.exec(t)) !== null; ) n.push(i);
    return n;
  },
  Xn = $("HTMLFormElement"),
  Gn = (e) =>
    e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (i, n, r) {
      return n.toUpperCase() + r;
    }),
  li = (
    ({ hasOwnProperty: e }) =>
    (t, i) =>
      e.call(t, i)
  )(Object.prototype),
  Yn = $("RegExp"),
  zi = (e, t) => {
    const i = Object.getOwnPropertyDescriptors(e),
      n = {};
    kt(i, (r, s) => {
      let o;
      (o = t(r, s, e)) !== !1 && (n[s] = o || r);
    }),
      Object.defineProperties(e, n);
  },
  Qn = (e) => {
    zi(e, (t, i) => {
      if (B(e) && ["arguments", "caller", "callee"].indexOf(i) !== -1)
        return !1;
      const n = e[i];
      if (B(n)) {
        if (((t.enumerable = !1), "writable" in t)) {
          t.writable = !1;
          return;
        }
        t.set ||
          (t.set = () => {
            throw Error("Can not rewrite read-only method '" + i + "'");
          });
      }
    });
  },
  Zn = (e, t) => {
    const i = {},
      n = (r) => {
        r.forEach((s) => {
          i[s] = !0;
        });
      };
    return gt(e) ? n(e) : n(String(e).split(t)), i;
  },
  tr = () => {},
  er = (e, t) => ((e = +e), Number.isFinite(e) ? e : t),
  ve = "abcdefghijklmnopqrstuvwxyz",
  di = "0123456789",
  Fi = { DIGIT: di, ALPHA: ve, ALPHA_DIGIT: ve + ve.toUpperCase() + di },
  ir = (e = 16, t = Fi.ALPHA_DIGIT) => {
    let i = "";
    const { length: n } = t;
    for (; e--; ) i += t[(Math.random() * n) | 0];
    return i;
  };
function nr(e) {
  return !!(
    e &&
    B(e.append) &&
    e[Symbol.toStringTag] === "FormData" &&
    e[Symbol.iterator]
  );
}
const rr = (e) => {
    const t = new Array(10),
      i = (n, r) => {
        if (ae(n)) {
          if (t.indexOf(n) >= 0) return;
          if (!("toJSON" in n)) {
            t[r] = n;
            const s = gt(n) ? [] : {};
            return (
              kt(n, (o, a) => {
                const c = i(o, r + 1);
                !It(c) && (s[a] = c);
              }),
              (t[r] = void 0),
              s
            );
          }
        }
        return n;
      };
    return i(e, 0);
  },
  sr = $("AsyncFunction"),
  or = (e) => e && (ae(e) || B(e)) && B(e.then) && B(e.catch),
  d = {
    isArray: gt,
    isArrayBuffer: Di,
    isBuffer: kn,
    isFormData: Bn,
    isArrayBufferView: Cn,
    isString: Sn,
    isNumber: Hi,
    isBoolean: Tn,
    isObject: ae,
    isPlainObject: qt,
    isUndefined: It,
    isDate: Rn,
    isFile: Pn,
    isBlob: Dn,
    isRegExp: Yn,
    isFunction: B,
    isStream: jn,
    isURLSearchParams: Nn,
    isTypedArray: $n,
    isFileList: Hn,
    forEach: kt,
    merge: _e,
    extend: Fn,
    trim: zn,
    stripBOM: qn,
    inherits: Mn,
    toFlatObject: Un,
    kindOf: se,
    kindOfTest: $,
    endsWith: Vn,
    toArray: Wn,
    forEachEntry: Jn,
    matchAll: Kn,
    isHTMLForm: Xn,
    hasOwnProperty: li,
    hasOwnProp: li,
    reduceDescriptors: zi,
    freezeMethods: Qn,
    toObjectSet: Zn,
    toCamelCase: Gn,
    noop: tr,
    toFiniteNumber: er,
    findKey: ji,
    global: Bi,
    isContextDefined: Ni,
    ALPHABET: Fi,
    generateString: ir,
    isSpecCompliantForm: nr,
    toJSONObject: rr,
    isAsyncFn: sr,
    isThenable: or,
  };
function b(e, t, i, n, r) {
  Error.call(this),
    Error.captureStackTrace
      ? Error.captureStackTrace(this, this.constructor)
      : (this.stack = new Error().stack),
    (this.message = e),
    (this.name = "AxiosError"),
    t && (this.code = t),
    i && (this.config = i),
    n && (this.request = n),
    r && (this.response = r);
}
d.inherits(b, Error, {
  toJSON: function () {
    return {
      message: this.message,
      name: this.name,
      description: this.description,
      number: this.number,
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      config: d.toJSONObject(this.config),
      code: this.code,
      status:
        this.response && this.response.status ? this.response.status : null,
    };
  },
});
const qi = b.prototype,
  Mi = {};
[
  "ERR_BAD_OPTION_VALUE",
  "ERR_BAD_OPTION",
  "ECONNABORTED",
  "ETIMEDOUT",
  "ERR_NETWORK",
  "ERR_FR_TOO_MANY_REDIRECTS",
  "ERR_DEPRECATED",
  "ERR_BAD_RESPONSE",
  "ERR_BAD_REQUEST",
  "ERR_CANCELED",
  "ERR_NOT_SUPPORT",
  "ERR_INVALID_URL",
].forEach((e) => {
  Mi[e] = { value: e };
});
Object.defineProperties(b, Mi);
Object.defineProperty(qi, "isAxiosError", { value: !0 });
b.from = (e, t, i, n, r, s) => {
  const o = Object.create(qi);
  return (
    d.toFlatObject(
      e,
      o,
      function (c) {
        return c !== Error.prototype;
      },
      (a) => a !== "isAxiosError"
    ),
    b.call(o, e.message, t, i, n, r),
    (o.cause = e),
    (o.name = e.name),
    s && Object.assign(o, s),
    o
  );
};
const ar = null;
function we(e) {
  return d.isPlainObject(e) || d.isArray(e);
}
function Ui(e) {
  return d.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function ui(e, t, i) {
  return e
    ? e
        .concat(t)
        .map(function (r, s) {
          return (r = Ui(r)), !i && s ? "[" + r + "]" : r;
        })
        .join(i ? "." : "")
    : t;
}
function cr(e) {
  return d.isArray(e) && !e.some(we);
}
const lr = d.toFlatObject(d, {}, null, function (t) {
  return /^is[A-Z]/.test(t);
});
function ce(e, t, i) {
  if (!d.isObject(e)) throw new TypeError("target must be an object");
  (t = t || new FormData()),
    (i = d.toFlatObject(
      i,
      { metaTokens: !0, dots: !1, indexes: !1 },
      !1,
      function (h, m) {
        return !d.isUndefined(m[h]);
      }
    ));
  const n = i.metaTokens,
    r = i.visitor || l,
    s = i.dots,
    o = i.indexes,
    c = (i.Blob || (typeof Blob < "u" && Blob)) && d.isSpecCompliantForm(t);
  if (!d.isFunction(r)) throw new TypeError("visitor must be a function");
  function f(p) {
    if (p === null) return "";
    if (d.isDate(p)) return p.toISOString();
    if (!c && d.isBlob(p))
      throw new b("Blob is not supported. Use a Buffer instead.");
    return d.isArrayBuffer(p) || d.isTypedArray(p)
      ? c && typeof Blob == "function"
        ? new Blob([p])
        : Buffer.from(p)
      : p;
  }
  function l(p, h, m) {
    let y = p;
    if (p && !m && typeof p == "object") {
      if (d.endsWith(h, "{}"))
        (h = n ? h : h.slice(0, -2)), (p = JSON.stringify(p));
      else if (
        (d.isArray(p) && cr(p)) ||
        ((d.isFileList(p) || d.endsWith(h, "[]")) && (y = d.toArray(p)))
      )
        return (
          (h = Ui(h)),
          y.forEach(function (A, _) {
            !(d.isUndefined(A) || A === null) &&
              t.append(
                o === !0 ? ui([h], _, s) : o === null ? h : h + "[]",
                f(A)
              );
          }),
          !1
        );
    }
    return we(p) ? !0 : (t.append(ui(m, h, s), f(p)), !1);
  }
  const u = [],
    g = Object.assign(lr, {
      defaultVisitor: l,
      convertValue: f,
      isVisitable: we,
    });
  function v(p, h) {
    if (!d.isUndefined(p)) {
      if (u.indexOf(p) !== -1)
        throw Error("Circular reference detected in " + h.join("."));
      u.push(p),
        d.forEach(p, function (y, E) {
          (!(d.isUndefined(y) || y === null) &&
            r.call(t, y, d.isString(E) ? E.trim() : E, h, g)) === !0 &&
            v(y, h ? h.concat(E) : [E]);
        }),
        u.pop();
    }
  }
  if (!d.isObject(e)) throw new TypeError("data must be an object");
  return v(e), t;
}
function fi(e) {
  const t = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0",
  };
  return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function (n) {
    return t[n];
  });
}
function Ce(e, t) {
  (this._pairs = []), e && ce(e, this, t);
}
const Vi = Ce.prototype;
Vi.append = function (t, i) {
  this._pairs.push([t, i]);
};
Vi.toString = function (t) {
  const i = t
    ? function (n) {
        return t.call(this, n, fi);
      }
    : fi;
  return this._pairs
    .map(function (r) {
      return i(r[0]) + "=" + i(r[1]);
    }, "")
    .join("&");
};
function dr(e) {
  return encodeURIComponent(e)
    .replace(/%3A/gi, ":")
    .replace(/%24/g, "$")
    .replace(/%2C/gi, ",")
    .replace(/%20/g, "+")
    .replace(/%5B/gi, "[")
    .replace(/%5D/gi, "]");
}
function Wi(e, t, i) {
  if (!t) return e;
  const n = (i && i.encode) || dr,
    r = i && i.serialize;
  let s;
  if (
    (r
      ? (s = r(t, i))
      : (s = d.isURLSearchParams(t) ? t.toString() : new Ce(t, i).toString(n)),
    s)
  ) {
    const o = e.indexOf("#");
    o !== -1 && (e = e.slice(0, o)),
      (e += (e.indexOf("?") === -1 ? "?" : "&") + s);
  }
  return e;
}
class hi {
  constructor() {
    this.handlers = [];
  }
  use(t, i, n) {
    return (
      this.handlers.push({
        fulfilled: t,
        rejected: i,
        synchronous: n ? n.synchronous : !1,
        runWhen: n ? n.runWhen : null,
      }),
      this.handlers.length - 1
    );
  }
  eject(t) {
    this.handlers[t] && (this.handlers[t] = null);
  }
  clear() {
    this.handlers && (this.handlers = []);
  }
  forEach(t) {
    d.forEach(this.handlers, function (n) {
      n !== null && t(n);
    });
  }
}
const $i = {
    silentJSONParsing: !0,
    forcedJSONParsing: !0,
    clarifyTimeoutError: !1,
  },
  ur = typeof URLSearchParams < "u" ? URLSearchParams : Ce,
  fr = typeof FormData < "u" ? FormData : null,
  hr = typeof Blob < "u" ? Blob : null,
  pr = {
    isBrowser: !0,
    classes: { URLSearchParams: ur, FormData: fr, Blob: hr },
    protocols: ["http", "https", "file", "blob", "url", "data"],
  },
  Ji = typeof window < "u" && typeof document < "u",
  vr = ((e) => Ji && ["ReactNative", "NativeScript", "NS"].indexOf(e) < 0)(
    typeof navigator < "u" && navigator.product
  ),
  mr =
    typeof WorkerGlobalScope < "u" &&
    self instanceof WorkerGlobalScope &&
    typeof self.importScripts == "function",
  gr = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        hasBrowserEnv: Ji,
        hasStandardBrowserEnv: vr,
        hasStandardBrowserWebWorkerEnv: mr,
      },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  U = { ...gr, ...pr };
function yr(e, t) {
  return ce(
    e,
    new U.classes.URLSearchParams(),
    Object.assign(
      {
        visitor: function (i, n, r, s) {
          return U.isNode && d.isBuffer(i)
            ? (this.append(n, i.toString("base64")), !1)
            : s.defaultVisitor.apply(this, arguments);
        },
      },
      t
    )
  );
}
function _r(e) {
  return d
    .matchAll(/\w+|\[(\w*)]/g, e)
    .map((t) => (t[0] === "[]" ? "" : t[1] || t[0]));
}
function wr(e) {
  const t = {},
    i = Object.keys(e);
  let n;
  const r = i.length;
  let s;
  for (n = 0; n < r; n++) (s = i[n]), (t[s] = e[s]);
  return t;
}
function Ki(e) {
  function t(i, n, r, s) {
    let o = i[s++];
    if (o === "__proto__") return !0;
    const a = Number.isFinite(+o),
      c = s >= i.length;
    return (
      (o = !o && d.isArray(r) ? r.length : o),
      c
        ? (d.hasOwnProp(r, o) ? (r[o] = [r[o], n]) : (r[o] = n), !a)
        : ((!r[o] || !d.isObject(r[o])) && (r[o] = []),
          t(i, n, r[o], s) && d.isArray(r[o]) && (r[o] = wr(r[o])),
          !a)
    );
  }
  if (d.isFormData(e) && d.isFunction(e.entries)) {
    const i = {};
    return (
      d.forEachEntry(e, (n, r) => {
        t(_r(n), r, i, 0);
      }),
      i
    );
  }
  return null;
}
function br(e, t, i) {
  if (d.isString(e))
    try {
      return (t || JSON.parse)(e), d.trim(e);
    } catch (n) {
      if (n.name !== "SyntaxError") throw n;
    }
  return (i || JSON.stringify)(e);
}
const Se = {
  transitional: $i,
  adapter: ["xhr", "http"],
  transformRequest: [
    function (t, i) {
      const n = i.getContentType() || "",
        r = n.indexOf("application/json") > -1,
        s = d.isObject(t);
      if ((s && d.isHTMLForm(t) && (t = new FormData(t)), d.isFormData(t)))
        return r ? JSON.stringify(Ki(t)) : t;
      if (
        d.isArrayBuffer(t) ||
        d.isBuffer(t) ||
        d.isStream(t) ||
        d.isFile(t) ||
        d.isBlob(t)
      )
        return t;
      if (d.isArrayBufferView(t)) return t.buffer;
      if (d.isURLSearchParams(t))
        return (
          i.setContentType(
            "application/x-www-form-urlencoded;charset=utf-8",
            !1
          ),
          t.toString()
        );
      let a;
      if (s) {
        if (n.indexOf("application/x-www-form-urlencoded") > -1)
          return yr(t, this.formSerializer).toString();
        if ((a = d.isFileList(t)) || n.indexOf("multipart/form-data") > -1) {
          const c = this.env && this.env.FormData;
          return ce(
            a ? { "files[]": t } : t,
            c && new c(),
            this.formSerializer
          );
        }
      }
      return s || r ? (i.setContentType("application/json", !1), br(t)) : t;
    },
  ],
  transformResponse: [
    function (t) {
      const i = this.transitional || Se.transitional,
        n = i && i.forcedJSONParsing,
        r = this.responseType === "json";
      if (t && d.isString(t) && ((n && !this.responseType) || r)) {
        const o = !(i && i.silentJSONParsing) && r;
        try {
          return JSON.parse(t);
        } catch (a) {
          if (o)
            throw a.name === "SyntaxError"
              ? b.from(a, b.ERR_BAD_RESPONSE, this, null, this.response)
              : a;
        }
      }
      return t;
    },
  ],
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: { FormData: U.classes.FormData, Blob: U.classes.Blob },
  validateStatus: function (t) {
    return t >= 200 && t < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": void 0,
    },
  },
};
d.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
  Se.headers[e] = {};
});
const Te = Se,
  Er = d.toObjectSet([
    "age",
    "authorization",
    "content-length",
    "content-type",
    "etag",
    "expires",
    "from",
    "host",
    "if-modified-since",
    "if-unmodified-since",
    "last-modified",
    "location",
    "max-forwards",
    "proxy-authorization",
    "referer",
    "retry-after",
    "user-agent",
  ]),
  Ar = (e) => {
    const t = {};
    let i, n, r;
    return (
      e &&
        e
          .split(
            `
`
          )
          .forEach(function (o) {
            (r = o.indexOf(":")),
              (i = o.substring(0, r).trim().toLowerCase()),
              (n = o.substring(r + 1).trim()),
              !(!i || (t[i] && Er[i])) &&
                (i === "set-cookie"
                  ? t[i]
                    ? t[i].push(n)
                    : (t[i] = [n])
                  : (t[i] = t[i] ? t[i] + ", " + n : n));
          }),
      t
    );
  },
  pi = Symbol("internals");
function wt(e) {
  return e && String(e).trim().toLowerCase();
}
function Mt(e) {
  return e === !1 || e == null ? e : d.isArray(e) ? e.map(Mt) : String(e);
}
function Lr(e) {
  const t = Object.create(null),
    i = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let n;
  for (; (n = i.exec(e)); ) t[n[1]] = n[2];
  return t;
}
const Ir = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function me(e, t, i, n, r) {
  if (d.isFunction(n)) return n.call(this, t, i);
  if ((r && (t = i), !!d.isString(t))) {
    if (d.isString(n)) return t.indexOf(n) !== -1;
    if (d.isRegExp(n)) return n.test(t);
  }
}
function xr(e) {
  return e
    .trim()
    .toLowerCase()
    .replace(/([a-z\d])(\w*)/g, (t, i, n) => i.toUpperCase() + n);
}
function Or(e, t) {
  const i = d.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((n) => {
    Object.defineProperty(e, n + i, {
      value: function (r, s, o) {
        return this[n].call(this, t, r, s, o);
      },
      configurable: !0,
    });
  });
}
class le {
  constructor(t) {
    t && this.set(t);
  }
  set(t, i, n) {
    const r = this;
    function s(a, c, f) {
      const l = wt(c);
      if (!l) throw new Error("header name must be a non-empty string");
      const u = d.findKey(r, l);
      (!u || r[u] === void 0 || f === !0 || (f === void 0 && r[u] !== !1)) &&
        (r[u || c] = Mt(a));
    }
    const o = (a, c) => d.forEach(a, (f, l) => s(f, l, c));
    return (
      d.isPlainObject(t) || t instanceof this.constructor
        ? o(t, i)
        : d.isString(t) && (t = t.trim()) && !Ir(t)
        ? o(Ar(t), i)
        : t != null && s(i, t, n),
      this
    );
  }
  get(t, i) {
    if (((t = wt(t)), t)) {
      const n = d.findKey(this, t);
      if (n) {
        const r = this[n];
        if (!i) return r;
        if (i === !0) return Lr(r);
        if (d.isFunction(i)) return i.call(this, r, n);
        if (d.isRegExp(i)) return i.exec(r);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, i) {
    if (((t = wt(t)), t)) {
      const n = d.findKey(this, t);
      return !!(n && this[n] !== void 0 && (!i || me(this, this[n], n, i)));
    }
    return !1;
  }
  delete(t, i) {
    const n = this;
    let r = !1;
    function s(o) {
      if (((o = wt(o)), o)) {
        const a = d.findKey(n, o);
        a && (!i || me(n, n[a], a, i)) && (delete n[a], (r = !0));
      }
    }
    return d.isArray(t) ? t.forEach(s) : s(t), r;
  }
  clear(t) {
    const i = Object.keys(this);
    let n = i.length,
      r = !1;
    for (; n--; ) {
      const s = i[n];
      (!t || me(this, this[s], s, t, !0)) && (delete this[s], (r = !0));
    }
    return r;
  }
  normalize(t) {
    const i = this,
      n = {};
    return (
      d.forEach(this, (r, s) => {
        const o = d.findKey(n, s);
        if (o) {
          (i[o] = Mt(r)), delete i[s];
          return;
        }
        const a = t ? xr(s) : String(s).trim();
        a !== s && delete i[s], (i[a] = Mt(r)), (n[a] = !0);
      }),
      this
    );
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const i = Object.create(null);
    return (
      d.forEach(this, (n, r) => {
        n != null && n !== !1 && (i[r] = t && d.isArray(n) ? n.join(", ") : n);
      }),
      i
    );
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([t, i]) => t + ": " + i).join(`
`);
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(t) {
    return t instanceof this ? t : new this(t);
  }
  static concat(t, ...i) {
    const n = new this(t);
    return i.forEach((r) => n.set(r)), n;
  }
  static accessor(t) {
    const n = (this[pi] = this[pi] = { accessors: {} }).accessors,
      r = this.prototype;
    function s(o) {
      const a = wt(o);
      n[a] || (Or(r, o), (n[a] = !0));
    }
    return d.isArray(t) ? t.forEach(s) : s(t), this;
  }
}
le.accessor([
  "Content-Type",
  "Content-Length",
  "Accept",
  "Accept-Encoding",
  "User-Agent",
  "Authorization",
]);
d.reduceDescriptors(le.prototype, ({ value: e }, t) => {
  let i = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(n) {
      this[i] = n;
    },
  };
});
d.freezeMethods(le);
const J = le;
function ge(e, t) {
  const i = this || Te,
    n = t || i,
    r = J.from(n.headers);
  let s = n.data;
  return (
    d.forEach(e, function (a) {
      s = a.call(i, s, r.normalize(), t ? t.status : void 0);
    }),
    r.normalize(),
    s
  );
}
function Xi(e) {
  return !!(e && e.__CANCEL__);
}
function Ct(e, t, i) {
  b.call(this, e ?? "canceled", b.ERR_CANCELED, t, i),
    (this.name = "CanceledError");
}
d.inherits(Ct, b, { __CANCEL__: !0 });
function kr(e, t, i) {
  const n = i.config.validateStatus;
  !i.status || !n || n(i.status)
    ? e(i)
    : t(
        new b(
          "Request failed with status code " + i.status,
          [b.ERR_BAD_REQUEST, b.ERR_BAD_RESPONSE][
            Math.floor(i.status / 100) - 4
          ],
          i.config,
          i.request,
          i
        )
      );
}
const Cr = U.hasStandardBrowserEnv
  ? {
      write(e, t, i, n, r, s) {
        const o = [e + "=" + encodeURIComponent(t)];
        d.isNumber(i) && o.push("expires=" + new Date(i).toGMTString()),
          d.isString(n) && o.push("path=" + n),
          d.isString(r) && o.push("domain=" + r),
          s === !0 && o.push("secure"),
          (document.cookie = o.join("; "));
      },
      read(e) {
        const t = document.cookie.match(
          new RegExp("(^|;\\s*)(" + e + ")=([^;]*)")
        );
        return t ? decodeURIComponent(t[3]) : null;
      },
      remove(e) {
        this.write(e, "", Date.now() - 864e5);
      },
    }
  : {
      write() {},
      read() {
        return null;
      },
      remove() {},
    };
function Sr(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function Tr(e, t) {
  return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function Gi(e, t) {
  return e && !Sr(t) ? Tr(e, t) : t;
}
const Rr = U.hasStandardBrowserEnv
  ? (function () {
      const t = /(msie|trident)/i.test(navigator.userAgent),
        i = document.createElement("a");
      let n;
      function r(s) {
        let o = s;
        return (
          t && (i.setAttribute("href", o), (o = i.href)),
          i.setAttribute("href", o),
          {
            href: i.href,
            protocol: i.protocol ? i.protocol.replace(/:$/, "") : "",
            host: i.host,
            search: i.search ? i.search.replace(/^\?/, "") : "",
            hash: i.hash ? i.hash.replace(/^#/, "") : "",
            hostname: i.hostname,
            port: i.port,
            pathname:
              i.pathname.charAt(0) === "/" ? i.pathname : "/" + i.pathname,
          }
        );
      }
      return (
        (n = r(window.location.href)),
        function (o) {
          const a = d.isString(o) ? r(o) : o;
          return a.protocol === n.protocol && a.host === n.host;
        }
      );
    })()
  : (function () {
      return function () {
        return !0;
      };
    })();
function Pr(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return (t && t[1]) || "";
}
function Dr(e, t) {
  e = e || 10;
  const i = new Array(e),
    n = new Array(e);
  let r = 0,
    s = 0,
    o;
  return (
    (t = t !== void 0 ? t : 1e3),
    function (c) {
      const f = Date.now(),
        l = n[s];
      o || (o = f), (i[r] = c), (n[r] = f);
      let u = s,
        g = 0;
      for (; u !== r; ) (g += i[u++]), (u = u % e);
      if (((r = (r + 1) % e), r === s && (s = (s + 1) % e), f - o < t)) return;
      const v = l && f - l;
      return v ? Math.round((g * 1e3) / v) : void 0;
    }
  );
}
function vi(e, t) {
  let i = 0;
  const n = Dr(50, 250);
  return (r) => {
    const s = r.loaded,
      o = r.lengthComputable ? r.total : void 0,
      a = s - i,
      c = n(a),
      f = s <= o;
    i = s;
    const l = {
      loaded: s,
      total: o,
      progress: o ? s / o : void 0,
      bytes: a,
      rate: c || void 0,
      estimated: c && o && f ? (o - s) / c : void 0,
      event: r,
    };
    (l[t ? "download" : "upload"] = !0), e(l);
  };
}
const Hr = typeof XMLHttpRequest < "u",
  jr =
    Hr &&
    function (e) {
      return new Promise(function (i, n) {
        let r = e.data;
        const s = J.from(e.headers).normalize();
        let { responseType: o, withXSRFToken: a } = e,
          c;
        function f() {
          e.cancelToken && e.cancelToken.unsubscribe(c),
            e.signal && e.signal.removeEventListener("abort", c);
        }
        let l;
        if (d.isFormData(r)) {
          if (U.hasStandardBrowserEnv || U.hasStandardBrowserWebWorkerEnv)
            s.setContentType(!1);
          else if ((l = s.getContentType()) !== !1) {
            const [h, ...m] = l
              ? l
                  .split(";")
                  .map((y) => y.trim())
                  .filter(Boolean)
              : [];
            s.setContentType([h || "multipart/form-data", ...m].join("; "));
          }
        }
        let u = new XMLHttpRequest();
        if (e.auth) {
          const h = e.auth.username || "",
            m = e.auth.password
              ? unescape(encodeURIComponent(e.auth.password))
              : "";
          s.set("Authorization", "Basic " + btoa(h + ":" + m));
        }
        const g = Gi(e.baseURL, e.url);
        u.open(e.method.toUpperCase(), Wi(g, e.params, e.paramsSerializer), !0),
          (u.timeout = e.timeout);
        function v() {
          if (!u) return;
          const h = J.from(
              "getAllResponseHeaders" in u && u.getAllResponseHeaders()
            ),
            y = {
              data:
                !o || o === "text" || o === "json"
                  ? u.responseText
                  : u.response,
              status: u.status,
              statusText: u.statusText,
              headers: h,
              config: e,
              request: u,
            };
          kr(
            function (A) {
              i(A), f();
            },
            function (A) {
              n(A), f();
            },
            y
          ),
            (u = null);
        }
        if (
          ("onloadend" in u
            ? (u.onloadend = v)
            : (u.onreadystatechange = function () {
                !u ||
                  u.readyState !== 4 ||
                  (u.status === 0 &&
                    !(u.responseURL && u.responseURL.indexOf("file:") === 0)) ||
                  setTimeout(v);
              }),
          (u.onabort = function () {
            u &&
              (n(new b("Request aborted", b.ECONNABORTED, e, u)), (u = null));
          }),
          (u.onerror = function () {
            n(new b("Network Error", b.ERR_NETWORK, e, u)), (u = null);
          }),
          (u.ontimeout = function () {
            let m = e.timeout
              ? "timeout of " + e.timeout + "ms exceeded"
              : "timeout exceeded";
            const y = e.transitional || $i;
            e.timeoutErrorMessage && (m = e.timeoutErrorMessage),
              n(
                new b(
                  m,
                  y.clarifyTimeoutError ? b.ETIMEDOUT : b.ECONNABORTED,
                  e,
                  u
                )
              ),
              (u = null);
          }),
          U.hasStandardBrowserEnv &&
            (a && d.isFunction(a) && (a = a(e)), a || (a !== !1 && Rr(g))))
        ) {
          const h =
            e.xsrfHeaderName && e.xsrfCookieName && Cr.read(e.xsrfCookieName);
          h && s.set(e.xsrfHeaderName, h);
        }
        r === void 0 && s.setContentType(null),
          "setRequestHeader" in u &&
            d.forEach(s.toJSON(), function (m, y) {
              u.setRequestHeader(y, m);
            }),
          d.isUndefined(e.withCredentials) ||
            (u.withCredentials = !!e.withCredentials),
          o && o !== "json" && (u.responseType = e.responseType),
          typeof e.onDownloadProgress == "function" &&
            u.addEventListener("progress", vi(e.onDownloadProgress, !0)),
          typeof e.onUploadProgress == "function" &&
            u.upload &&
            u.upload.addEventListener("progress", vi(e.onUploadProgress)),
          (e.cancelToken || e.signal) &&
            ((c = (h) => {
              u &&
                (n(!h || h.type ? new Ct(null, e, u) : h),
                u.abort(),
                (u = null));
            }),
            e.cancelToken && e.cancelToken.subscribe(c),
            e.signal &&
              (e.signal.aborted ? c() : e.signal.addEventListener("abort", c)));
        const p = Pr(g);
        if (p && U.protocols.indexOf(p) === -1) {
          n(new b("Unsupported protocol " + p + ":", b.ERR_BAD_REQUEST, e));
          return;
        }
        u.send(r || null);
      });
    },
  be = { http: ar, xhr: jr };
d.forEach(be, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {}
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const mi = (e) => `- ${e}`,
  Br = (e) => d.isFunction(e) || e === null || e === !1,
  Yi = {
    getAdapter: (e) => {
      e = d.isArray(e) ? e : [e];
      const { length: t } = e;
      let i, n;
      const r = {};
      for (let s = 0; s < t; s++) {
        i = e[s];
        let o;
        if (
          ((n = i),
          !Br(i) && ((n = be[(o = String(i)).toLowerCase()]), n === void 0))
        )
          throw new b(`Unknown adapter '${o}'`);
        if (n) break;
        r[o || "#" + s] = n;
      }
      if (!n) {
        const s = Object.entries(r).map(
          ([a, c]) =>
            `adapter ${a} ` +
            (c === !1
              ? "is not supported by the environment"
              : "is not available in the build")
        );
        let o = t
          ? s.length > 1
            ? `since :
` +
              s.map(mi).join(`
`)
            : " " + mi(s[0])
          : "as no adapter specified";
        throw new b(
          "There is no suitable adapter to dispatch the request " + o,
          "ERR_NOT_SUPPORT"
        );
      }
      return n;
    },
    adapters: be,
  };
function ye(e) {
  if (
    (e.cancelToken && e.cancelToken.throwIfRequested(),
    e.signal && e.signal.aborted)
  )
    throw new Ct(null, e);
}
function gi(e) {
  return (
    ye(e),
    (e.headers = J.from(e.headers)),
    (e.data = ge.call(e, e.transformRequest)),
    ["post", "put", "patch"].indexOf(e.method) !== -1 &&
      e.headers.setContentType("application/x-www-form-urlencoded", !1),
    Yi.getAdapter(e.adapter || Te.adapter)(e).then(
      function (n) {
        return (
          ye(e),
          (n.data = ge.call(e, e.transformResponse, n)),
          (n.headers = J.from(n.headers)),
          n
        );
      },
      function (n) {
        return (
          Xi(n) ||
            (ye(e),
            n &&
              n.response &&
              ((n.response.data = ge.call(e, e.transformResponse, n.response)),
              (n.response.headers = J.from(n.response.headers)))),
          Promise.reject(n)
        );
      }
    )
  );
}
const yi = (e) => (e instanceof J ? e.toJSON() : e);
function ft(e, t) {
  t = t || {};
  const i = {};
  function n(f, l, u) {
    return d.isPlainObject(f) && d.isPlainObject(l)
      ? d.merge.call({ caseless: u }, f, l)
      : d.isPlainObject(l)
      ? d.merge({}, l)
      : d.isArray(l)
      ? l.slice()
      : l;
  }
  function r(f, l, u) {
    if (d.isUndefined(l)) {
      if (!d.isUndefined(f)) return n(void 0, f, u);
    } else return n(f, l, u);
  }
  function s(f, l) {
    if (!d.isUndefined(l)) return n(void 0, l);
  }
  function o(f, l) {
    if (d.isUndefined(l)) {
      if (!d.isUndefined(f)) return n(void 0, f);
    } else return n(void 0, l);
  }
  function a(f, l, u) {
    if (u in t) return n(f, l);
    if (u in e) return n(void 0, f);
  }
  const c = {
    url: s,
    method: s,
    data: s,
    baseURL: o,
    transformRequest: o,
    transformResponse: o,
    paramsSerializer: o,
    timeout: o,
    timeoutMessage: o,
    withCredentials: o,
    withXSRFToken: o,
    adapter: o,
    responseType: o,
    xsrfCookieName: o,
    xsrfHeaderName: o,
    onUploadProgress: o,
    onDownloadProgress: o,
    decompress: o,
    maxContentLength: o,
    maxBodyLength: o,
    beforeRedirect: o,
    transport: o,
    httpAgent: o,
    httpsAgent: o,
    cancelToken: o,
    socketPath: o,
    responseEncoding: o,
    validateStatus: a,
    headers: (f, l) => r(yi(f), yi(l), !0),
  };
  return (
    d.forEach(Object.keys(Object.assign({}, e, t)), function (l) {
      const u = c[l] || r,
        g = u(e[l], t[l], l);
      (d.isUndefined(g) && u !== a) || (i[l] = g);
    }),
    i
  );
}
const Qi = "1.6.7",
  Re = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach(
  (e, t) => {
    Re[e] = function (n) {
      return typeof n === e || "a" + (t < 1 ? "n " : " ") + e;
    };
  }
);
const _i = {};
Re.transitional = function (t, i, n) {
  function r(s, o) {
    return (
      "[Axios v" +
      Qi +
      "] Transitional option '" +
      s +
      "'" +
      o +
      (n ? ". " + n : "")
    );
  }
  return (s, o, a) => {
    if (t === !1)
      throw new b(
        r(o, " has been removed" + (i ? " in " + i : "")),
        b.ERR_DEPRECATED
      );
    return (
      i &&
        !_i[o] &&
        ((_i[o] = !0),
        console.warn(
          r(
            o,
            " has been deprecated since v" +
              i +
              " and will be removed in the near future"
          )
        )),
      t ? t(s, o, a) : !0
    );
  };
};
function Nr(e, t, i) {
  if (typeof e != "object")
    throw new b("options must be an object", b.ERR_BAD_OPTION_VALUE);
  const n = Object.keys(e);
  let r = n.length;
  for (; r-- > 0; ) {
    const s = n[r],
      o = t[s];
    if (o) {
      const a = e[s],
        c = a === void 0 || o(a, s, e);
      if (c !== !0)
        throw new b("option " + s + " must be " + c, b.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (i !== !0) throw new b("Unknown option " + s, b.ERR_BAD_OPTION);
  }
}
const Ee = { assertOptions: Nr, validators: Re },
  G = Ee.validators;
class $t {
  constructor(t) {
    (this.defaults = t),
      (this.interceptors = { request: new hi(), response: new hi() });
  }
  async request(t, i) {
    try {
      return await this._request(t, i);
    } catch (n) {
      if (n instanceof Error) {
        let r;
        Error.captureStackTrace
          ? Error.captureStackTrace((r = {}))
          : (r = new Error());
        const s = r.stack ? r.stack.replace(/^.+\n/, "") : "";
        n.stack
          ? s &&
            !String(n.stack).endsWith(s.replace(/^.+\n.+\n/, "")) &&
            (n.stack +=
              `
` + s)
          : (n.stack = s);
      }
      throw n;
    }
  }
  _request(t, i) {
    typeof t == "string" ? ((i = i || {}), (i.url = t)) : (i = t || {}),
      (i = ft(this.defaults, i));
    const { transitional: n, paramsSerializer: r, headers: s } = i;
    n !== void 0 &&
      Ee.assertOptions(
        n,
        {
          silentJSONParsing: G.transitional(G.boolean),
          forcedJSONParsing: G.transitional(G.boolean),
          clarifyTimeoutError: G.transitional(G.boolean),
        },
        !1
      ),
      r != null &&
        (d.isFunction(r)
          ? (i.paramsSerializer = { serialize: r })
          : Ee.assertOptions(
              r,
              { encode: G.function, serialize: G.function },
              !0
            )),
      (i.method = (i.method || this.defaults.method || "get").toLowerCase());
    let o = s && d.merge(s.common, s[i.method]);
    s &&
      d.forEach(
        ["delete", "get", "head", "post", "put", "patch", "common"],
        (p) => {
          delete s[p];
        }
      ),
      (i.headers = J.concat(o, s));
    const a = [];
    let c = !0;
    this.interceptors.request.forEach(function (h) {
      (typeof h.runWhen == "function" && h.runWhen(i) === !1) ||
        ((c = c && h.synchronous), a.unshift(h.fulfilled, h.rejected));
    });
    const f = [];
    this.interceptors.response.forEach(function (h) {
      f.push(h.fulfilled, h.rejected);
    });
    let l,
      u = 0,
      g;
    if (!c) {
      const p = [gi.bind(this), void 0];
      for (
        p.unshift.apply(p, a),
          p.push.apply(p, f),
          g = p.length,
          l = Promise.resolve(i);
        u < g;

      )
        l = l.then(p[u++], p[u++]);
      return l;
    }
    g = a.length;
    let v = i;
    for (u = 0; u < g; ) {
      const p = a[u++],
        h = a[u++];
      try {
        v = p(v);
      } catch (m) {
        h.call(this, m);
        break;
      }
    }
    try {
      l = gi.call(this, v);
    } catch (p) {
      return Promise.reject(p);
    }
    for (u = 0, g = f.length; u < g; ) l = l.then(f[u++], f[u++]);
    return l;
  }
  getUri(t) {
    t = ft(this.defaults, t);
    const i = Gi(t.baseURL, t.url);
    return Wi(i, t.params, t.paramsSerializer);
  }
}
d.forEach(["delete", "get", "head", "options"], function (t) {
  $t.prototype[t] = function (i, n) {
    return this.request(
      ft(n || {}, { method: t, url: i, data: (n || {}).data })
    );
  };
});
d.forEach(["post", "put", "patch"], function (t) {
  function i(n) {
    return function (s, o, a) {
      return this.request(
        ft(a || {}, {
          method: t,
          headers: n ? { "Content-Type": "multipart/form-data" } : {},
          url: s,
          data: o,
        })
      );
    };
  }
  ($t.prototype[t] = i()), ($t.prototype[t + "Form"] = i(!0));
});
const Ut = $t;
class Pe {
  constructor(t) {
    if (typeof t != "function")
      throw new TypeError("executor must be a function.");
    let i;
    this.promise = new Promise(function (s) {
      i = s;
    });
    const n = this;
    this.promise.then((r) => {
      if (!n._listeners) return;
      let s = n._listeners.length;
      for (; s-- > 0; ) n._listeners[s](r);
      n._listeners = null;
    }),
      (this.promise.then = (r) => {
        let s;
        const o = new Promise((a) => {
          n.subscribe(a), (s = a);
        }).then(r);
        return (
          (o.cancel = function () {
            n.unsubscribe(s);
          }),
          o
        );
      }),
      t(function (s, o, a) {
        n.reason || ((n.reason = new Ct(s, o, a)), i(n.reason));
      });
  }
  throwIfRequested() {
    if (this.reason) throw this.reason;
  }
  subscribe(t) {
    if (this.reason) {
      t(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(t) : (this._listeners = [t]);
  }
  unsubscribe(t) {
    if (!this._listeners) return;
    const i = this._listeners.indexOf(t);
    i !== -1 && this._listeners.splice(i, 1);
  }
  static source() {
    let t;
    return {
      token: new Pe(function (r) {
        t = r;
      }),
      cancel: t,
    };
  }
}
const zr = Pe;
function Fr(e) {
  return function (i) {
    return e.apply(null, i);
  };
}
function qr(e) {
  return d.isObject(e) && e.isAxiosError === !0;
}
const Ae = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511,
};
Object.entries(Ae).forEach(([e, t]) => {
  Ae[t] = e;
});
const Mr = Ae;
function Zi(e) {
  const t = new Ut(e),
    i = Pi(Ut.prototype.request, t);
  return (
    d.extend(i, Ut.prototype, t, { allOwnKeys: !0 }),
    d.extend(i, t, null, { allOwnKeys: !0 }),
    (i.create = function (r) {
      return Zi(ft(e, r));
    }),
    i
  );
}
const O = Zi(Te);
O.Axios = Ut;
O.CanceledError = Ct;
O.CancelToken = zr;
O.isCancel = Xi;
O.VERSION = Qi;
O.toFormData = ce;
O.AxiosError = b;
O.Cancel = O.CanceledError;
O.all = function (t) {
  return Promise.all(t);
};
O.spread = Fr;
O.isAxiosError = qr;
O.mergeConfig = ft;
O.AxiosHeaders = J;
O.formToJSON = (e) => Ki(d.isHTMLForm(e) ? new FormData(e) : e);
O.getAdapter = Yi.getAdapter;
O.HttpStatusCode = Mr;
O.default = O;
const Ur = O;
window.axios = Ur;
window.axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";
var Vr = (function () {
    function e(t, i) {
      i === void 0 && (i = []),
        (this._eventType = t),
        (this._eventFunctions = i);
    }
    return (
      (e.prototype.init = function () {
        var t = this;
        this._eventFunctions.forEach(function (i) {
          typeof window < "u" && window.addEventListener(t._eventType, i);
        });
      }),
      e
    );
  })(),
  Wr = (function () {
    function e() {
      this._instances = {
        Accordion: {},
        Carousel: {},
        Collapse: {},
        Dial: {},
        Dismiss: {},
        Drawer: {},
        Dropdown: {},
        Modal: {},
        Popover: {},
        Tabs: {},
        Tooltip: {},
        InputCounter: {},
      };
    }
    return (
      (e.prototype.addInstance = function (t, i, n, r) {
        if ((r === void 0 && (r = !1), !this._instances[t]))
          return (
            console.warn("Flowbite: Component ".concat(t, " does not exist.")),
            !1
          );
        if (this._instances[t][n] && !r) {
          console.warn(
            "Flowbite: Instance with ID ".concat(n, " already exists.")
          );
          return;
        }
        r &&
          this._instances[t][n] &&
          this._instances[t][n].destroyAndRemoveInstance(),
          (this._instances[t][n || this._generateRandomId()] = i);
      }),
      (e.prototype.getAllInstances = function () {
        return this._instances;
      }),
      (e.prototype.getInstances = function (t) {
        return this._instances[t]
          ? this._instances[t]
          : (console.warn("Flowbite: Component ".concat(t, " does not exist.")),
            !1);
      }),
      (e.prototype.getInstance = function (t, i) {
        if (this._componentAndInstanceCheck(t, i)) {
          if (!this._instances[t][i]) {
            console.warn(
              "Flowbite: Instance with ID ".concat(i, " does not exist.")
            );
            return;
          }
          return this._instances[t][i];
        }
      }),
      (e.prototype.destroyAndRemoveInstance = function (t, i) {
        this._componentAndInstanceCheck(t, i) &&
          (this.destroyInstanceObject(t, i), this.removeInstance(t, i));
      }),
      (e.prototype.removeInstance = function (t, i) {
        this._componentAndInstanceCheck(t, i) && delete this._instances[t][i];
      }),
      (e.prototype.destroyInstanceObject = function (t, i) {
        this._componentAndInstanceCheck(t, i) &&
          this._instances[t][i].destroy();
      }),
      (e.prototype.instanceExists = function (t, i) {
        return !(!this._instances[t] || !this._instances[t][i]);
      }),
      (e.prototype._generateRandomId = function () {
        return Math.random().toString(36).substr(2, 9);
      }),
      (e.prototype._componentAndInstanceCheck = function (t, i) {
        return this._instances[t]
          ? this._instances[t][i]
            ? !0
            : (console.warn(
                "Flowbite: Instance with ID ".concat(i, " does not exist.")
              ),
              !1)
          : (console.warn("Flowbite: Component ".concat(t, " does not exist.")),
            !1);
      }),
      e
    );
  })(),
  w = new Wr();
typeof window < "u" && (window.FlowbiteInstances = w);
var Jt = function () {
    return (
      (Jt =
        Object.assign ||
        function (e) {
          for (var t, i = 1, n = arguments.length; i < n; i++) {
            t = arguments[i];
            for (var r in t)
              Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
          }
          return e;
        }),
      Jt.apply(this, arguments)
    );
  },
  Kt = {
    alwaysOpen: !1,
    activeClasses: "bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white",
    inactiveClasses: "text-gray-500 dark:text-gray-400",
    onOpen: function () {},
    onClose: function () {},
    onToggle: function () {},
  },
  $r = { id: null, override: !0 },
  tn = (function () {
    function e(t, i, n, r) {
      t === void 0 && (t = null),
        i === void 0 && (i = []),
        n === void 0 && (n = Kt),
        r === void 0 && (r = $r),
        (this._instanceId = r.id ? r.id : t.id),
        (this._accordionEl = t),
        (this._items = i),
        (this._options = Jt(Jt({}, Kt), n)),
        (this._initialized = !1),
        this.init(),
        w.addInstance("Accordion", this, this._instanceId, r.override);
    }
    return (
      (e.prototype.init = function () {
        var t = this;
        this._items.length &&
          !this._initialized &&
          (this._items.forEach(function (i) {
            i.active && t.open(i.id);
            var n = function () {
              t.toggle(i.id);
            };
            i.triggerEl.addEventListener("click", n), (i.clickHandler = n);
          }),
          (this._initialized = !0));
      }),
      (e.prototype.destroy = function () {
        this._items.length &&
          this._initialized &&
          (this._items.forEach(function (t) {
            t.triggerEl.removeEventListener("click", t.clickHandler),
              delete t.clickHandler;
          }),
          (this._initialized = !1));
      }),
      (e.prototype.removeInstance = function () {
        w.removeInstance("Accordion", this._instanceId);
      }),
      (e.prototype.destroyAndRemoveInstance = function () {
        this.destroy(), this.removeInstance();
      }),
      (e.prototype.getItem = function (t) {
        return this._items.filter(function (i) {
          return i.id === t;
        })[0];
      }),
      (e.prototype.open = function (t) {
        var i,
          n,
          r = this,
          s = this.getItem(t);
        this._options.alwaysOpen ||
          this._items.map(function (o) {
            var a, c;
            o !== s &&
              ((a = o.triggerEl.classList).remove.apply(
                a,
                r._options.activeClasses.split(" ")
              ),
              (c = o.triggerEl.classList).add.apply(
                c,
                r._options.inactiveClasses.split(" ")
              ),
              o.targetEl.classList.add("hidden"),
              o.triggerEl.setAttribute("aria-expanded", "false"),
              (o.active = !1),
              o.iconEl && o.iconEl.classList.remove("rotate-180"));
          }),
          (i = s.triggerEl.classList).add.apply(
            i,
            this._options.activeClasses.split(" ")
          ),
          (n = s.triggerEl.classList).remove.apply(
            n,
            this._options.inactiveClasses.split(" ")
          ),
          s.triggerEl.setAttribute("aria-expanded", "true"),
          s.targetEl.classList.remove("hidden"),
          (s.active = !0),
          s.iconEl && s.iconEl.classList.add("rotate-180"),
          this._options.onOpen(this, s);
      }),
      (e.prototype.toggle = function (t) {
        var i = this.getItem(t);
        i.active ? this.close(t) : this.open(t),
          this._options.onToggle(this, i);
      }),
      (e.prototype.close = function (t) {
        var i,
          n,
          r = this.getItem(t);
        (i = r.triggerEl.classList).remove.apply(
          i,
          this._options.activeClasses.split(" ")
        ),
          (n = r.triggerEl.classList).add.apply(
            n,
            this._options.inactiveClasses.split(" ")
          ),
          r.targetEl.classList.add("hidden"),
          r.triggerEl.setAttribute("aria-expanded", "false"),
          (r.active = !1),
          r.iconEl && r.iconEl.classList.remove("rotate-180"),
          this._options.onClose(this, r);
      }),
      e
    );
  })();
function De() {
  document.querySelectorAll("[data-accordion]").forEach(function (e) {
    var t = e.getAttribute("data-accordion"),
      i = e.getAttribute("data-active-classes"),
      n = e.getAttribute("data-inactive-classes"),
      r = [];
    e.querySelectorAll("[data-accordion-target]").forEach(function (s) {
      if (s.closest("[data-accordion]") === e) {
        var o = {
          id: s.getAttribute("data-accordion-target"),
          triggerEl: s,
          targetEl: document.querySelector(
            s.getAttribute("data-accordion-target")
          ),
          iconEl: s.querySelector("[data-accordion-icon]"),
          active: s.getAttribute("aria-expanded") === "true",
        };
        r.push(o);
      }
    }),
      new tn(e, r, {
        alwaysOpen: t === "open",
        activeClasses: i || Kt.activeClasses,
        inactiveClasses: n || Kt.inactiveClasses,
      });
  });
}
typeof window < "u" && ((window.Accordion = tn), (window.initAccordions = De));
var Xt = function () {
    return (
      (Xt =
        Object.assign ||
        function (e) {
          for (var t, i = 1, n = arguments.length; i < n; i++) {
            t = arguments[i];
            for (var r in t)
              Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
          }
          return e;
        }),
      Xt.apply(this, arguments)
    );
  },
  wi = {
    onCollapse: function () {},
    onExpand: function () {},
    onToggle: function () {},
  },
  Jr = { id: null, override: !0 },
  Le = (function () {
    function e(t, i, n, r) {
      t === void 0 && (t = null),
        i === void 0 && (i = null),
        n === void 0 && (n = wi),
        r === void 0 && (r = Jr),
        (this._instanceId = r.id ? r.id : t.id),
        (this._targetEl = t),
        (this._triggerEl = i),
        (this._options = Xt(Xt({}, wi), n)),
        (this._visible = !1),
        (this._initialized = !1),
        this.init(),
        w.addInstance("Collapse", this, this._instanceId, r.override);
    }
    return (
      (e.prototype.init = function () {
        var t = this;
        this._triggerEl &&
          this._targetEl &&
          !this._initialized &&
          (this._triggerEl.hasAttribute("aria-expanded")
            ? (this._visible =
                this._triggerEl.getAttribute("aria-expanded") === "true")
            : (this._visible = !this._targetEl.classList.contains("hidden")),
          (this._clickHandler = function () {
            t.toggle();
          }),
          this._triggerEl.addEventListener("click", this._clickHandler),
          (this._initialized = !0));
      }),
      (e.prototype.destroy = function () {
        this._triggerEl &&
          this._initialized &&
          (this._triggerEl.removeEventListener("click", this._clickHandler),
          (this._initialized = !1));
      }),
      (e.prototype.removeInstance = function () {
        w.removeInstance("Collapse", this._instanceId);
      }),
      (e.prototype.destroyAndRemoveInstance = function () {
        this.destroy(), this.removeInstance();
      }),
      (e.prototype.collapse = function () {
        this._targetEl.classList.add("hidden"),
          this._triggerEl &&
            this._triggerEl.setAttribute("aria-expanded", "false"),
          (this._visible = !1),
          this._options.onCollapse(this);
      }),
      (e.prototype.expand = function () {
        this._targetEl.classList.remove("hidden"),
          this._triggerEl &&
            this._triggerEl.setAttribute("aria-expanded", "true"),
          (this._visible = !0),
          this._options.onExpand(this);
      }),
      (e.prototype.toggle = function () {
        this._visible ? this.collapse() : this.expand(),
          this._options.onToggle(this);
      }),
      e
    );
  })();
function He() {
  document.querySelectorAll("[data-collapse-toggle]").forEach(function (e) {
    var t = e.getAttribute("data-collapse-toggle"),
      i = document.getElementById(t);
    i
      ? w.instanceExists("Collapse", i.getAttribute("id"))
        ? new Le(
            i,
            e,
            {},
            { id: i.getAttribute("id") + "_" + w._generateRandomId() }
          )
        : new Le(i, e)
      : console.error(
          'The target element with id "'.concat(
            t,
            '" does not exist. Please check the data-collapse-toggle attribute.'
          )
        );
  });
}
typeof window < "u" && ((window.Collapse = Le), (window.initCollapses = He));
var at = function () {
    return (
      (at =
        Object.assign ||
        function (e) {
          for (var t, i = 1, n = arguments.length; i < n; i++) {
            t = arguments[i];
            for (var r in t)
              Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
          }
          return e;
        }),
      at.apply(this, arguments)
    );
  },
  Vt = {
    defaultPosition: 0,
    indicators: {
      items: [],
      activeClasses: "bg-white dark:bg-gray-800",
      inactiveClasses:
        "bg-white/50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800",
    },
    interval: 3e3,
    onNext: function () {},
    onPrev: function () {},
    onChange: function () {},
  },
  Kr = { id: null, override: !0 },
  en = (function () {
    function e(t, i, n, r) {
      t === void 0 && (t = null),
        i === void 0 && (i = []),
        n === void 0 && (n = Vt),
        r === void 0 && (r = Kr),
        (this._instanceId = r.id ? r.id : t.id),
        (this._carouselEl = t),
        (this._items = i),
        (this._options = at(at(at({}, Vt), n), {
          indicators: at(at({}, Vt.indicators), n.indicators),
        })),
        (this._activeItem = this.getItem(this._options.defaultPosition)),
        (this._indicators = this._options.indicators.items),
        (this._intervalDuration = this._options.interval),
        (this._intervalInstance = null),
        (this._initialized = !1),
        this.init(),
        w.addInstance("Carousel", this, this._instanceId, r.override);
    }
    return (
      (e.prototype.init = function () {
        var t = this;
        this._items.length &&
          !this._initialized &&
          (this._items.map(function (i) {
            i.el.classList.add(
              "absolute",
              "inset-0",
              "transition-transform",
              "transform"
            );
          }),
          this._getActiveItem()
            ? this.slideTo(this._getActiveItem().position)
            : this.slideTo(0),
          this._indicators.map(function (i, n) {
            i.el.addEventListener("click", function () {
              t.slideTo(n);
            });
          }),
          (this._initialized = !0));
      }),
      (e.prototype.destroy = function () {
        this._initialized && (this._initialized = !1);
      }),
      (e.prototype.removeInstance = function () {
        w.removeInstance("Carousel", this._instanceId);
      }),
      (e.prototype.destroyAndRemoveInstance = function () {
        this.destroy(), this.removeInstance();
      }),
      (e.prototype.getItem = function (t) {
        return this._items[t];
      }),
      (e.prototype.slideTo = function (t) {
        var i = this._items[t],
          n = {
            left:
              i.position === 0
                ? this._items[this._items.length - 1]
                : this._items[i.position - 1],
            middle: i,
            right:
              i.position === this._items.length - 1
                ? this._items[0]
                : this._items[i.position + 1],
          };
        this._rotate(n),
          this._setActiveItem(i),
          this._intervalInstance && (this.pause(), this.cycle()),
          this._options.onChange(this);
      }),
      (e.prototype.next = function () {
        var t = this._getActiveItem(),
          i = null;
        t.position === this._items.length - 1
          ? (i = this._items[0])
          : (i = this._items[t.position + 1]),
          this.slideTo(i.position),
          this._options.onNext(this);
      }),
      (e.prototype.prev = function () {
        var t = this._getActiveItem(),
          i = null;
        t.position === 0
          ? (i = this._items[this._items.length - 1])
          : (i = this._items[t.position - 1]),
          this.slideTo(i.position),
          this._options.onPrev(this);
      }),
      (e.prototype._rotate = function (t) {
        this._items.map(function (i) {
          i.el.classList.add("hidden");
        }),
          t.left.el.classList.remove(
            "-translate-x-full",
            "translate-x-full",
            "translate-x-0",
            "hidden",
            "z-20"
          ),
          t.left.el.classList.add("-translate-x-full", "z-10"),
          t.middle.el.classList.remove(
            "-translate-x-full",
            "translate-x-full",
            "translate-x-0",
            "hidden",
            "z-10"
          ),
          t.middle.el.classList.add("translate-x-0", "z-20"),
          t.right.el.classList.remove(
            "-translate-x-full",
            "translate-x-full",
            "translate-x-0",
            "hidden",
            "z-20"
          ),
          t.right.el.classList.add("translate-x-full", "z-10");
      }),
      (e.prototype.cycle = function () {
        var t = this;
        typeof window < "u" &&
          (this._intervalInstance = window.setInterval(function () {
            t.next();
          }, this._intervalDuration));
      }),
      (e.prototype.pause = function () {
        clearInterval(this._intervalInstance);
      }),
      (e.prototype._getActiveItem = function () {
        return this._activeItem;
      }),
      (e.prototype._setActiveItem = function (t) {
        var i,
          n,
          r = this;
        this._activeItem = t;
        var s = t.position;
        this._indicators.length &&
          (this._indicators.map(function (o) {
            var a, c;
            o.el.setAttribute("aria-current", "false"),
              (a = o.el.classList).remove.apply(
                a,
                r._options.indicators.activeClasses.split(" ")
              ),
              (c = o.el.classList).add.apply(
                c,
                r._options.indicators.inactiveClasses.split(" ")
              );
          }),
          (i = this._indicators[s].el.classList).add.apply(
            i,
            this._options.indicators.activeClasses.split(" ")
          ),
          (n = this._indicators[s].el.classList).remove.apply(
            n,
            this._options.indicators.inactiveClasses.split(" ")
          ),
          this._indicators[s].el.setAttribute("aria-current", "true"));
      }),
      e
    );
  })();
function je() {
  document.querySelectorAll("[data-carousel]").forEach(function (e) {
    var t = e.getAttribute("data-carousel-interval"),
      i = e.getAttribute("data-carousel") === "slide",
      n = [],
      r = 0;
    e.querySelectorAll("[data-carousel-item]").length &&
      Array.from(e.querySelectorAll("[data-carousel-item]")).map(function (
        f,
        l
      ) {
        n.push({ position: l, el: f }),
          f.getAttribute("data-carousel-item") === "active" && (r = l);
      });
    var s = [];
    e.querySelectorAll("[data-carousel-slide-to]").length &&
      Array.from(e.querySelectorAll("[data-carousel-slide-to]")).map(function (
        f
      ) {
        s.push({
          position: parseInt(f.getAttribute("data-carousel-slide-to")),
          el: f,
        });
      });
    var o = new en(e, n, {
      defaultPosition: r,
      indicators: { items: s },
      interval: t || Vt.interval,
    });
    i && o.cycle();
    var a = e.querySelector("[data-carousel-next]"),
      c = e.querySelector("[data-carousel-prev]");
    a &&
      a.addEventListener("click", function () {
        o.next();
      }),
      c &&
        c.addEventListener("click", function () {
          o.prev();
        });
  });
}
typeof window < "u" && ((window.Carousel = en), (window.initCarousels = je));
var Gt = function () {
    return (
      (Gt =
        Object.assign ||
        function (e) {
          for (var t, i = 1, n = arguments.length; i < n; i++) {
            t = arguments[i];
            for (var r in t)
              Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
          }
          return e;
        }),
      Gt.apply(this, arguments)
    );
  },
  bi = {
    transition: "transition-opacity",
    duration: 300,
    timing: "ease-out",
    onHide: function () {},
  },
  Xr = { id: null, override: !0 },
  nn = (function () {
    function e(t, i, n, r) {
      t === void 0 && (t = null),
        i === void 0 && (i = null),
        n === void 0 && (n = bi),
        r === void 0 && (r = Xr),
        (this._instanceId = r.id ? r.id : t.id),
        (this._targetEl = t),
        (this._triggerEl = i),
        (this._options = Gt(Gt({}, bi), n)),
        (this._initialized = !1),
        this.init(),
        w.addInstance("Dismiss", this, this._instanceId, r.override);
    }
    return (
      (e.prototype.init = function () {
        var t = this;
        this._triggerEl &&
          this._targetEl &&
          !this._initialized &&
          ((this._clickHandler = function () {
            t.hide();
          }),
          this._triggerEl.addEventListener("click", this._clickHandler),
          (this._initialized = !0));
      }),
      (e.prototype.destroy = function () {
        this._triggerEl &&
          this._initialized &&
          (this._triggerEl.removeEventListener("click", this._clickHandler),
          (this._initialized = !1));
      }),
      (e.prototype.removeInstance = function () {
        w.removeInstance("Dismiss", this._instanceId);
      }),
      (e.prototype.destroyAndRemoveInstance = function () {
        this.destroy(), this.removeInstance();
      }),
      (e.prototype.hide = function () {
        var t = this;
        this._targetEl.classList.add(
          this._options.transition,
          "duration-".concat(this._options.duration),
          this._options.timing,
          "opacity-0"
        ),
          setTimeout(function () {
            t._targetEl.classList.add("hidden");
          }, this._options.duration),
          this._options.onHide(this, this._targetEl);
      }),
      e
    );
  })();
function Be() {
  document.querySelectorAll("[data-dismiss-target]").forEach(function (e) {
    var t = e.getAttribute("data-dismiss-target"),
      i = document.querySelector(t);
    i
      ? new nn(i, e)
      : console.error(
          'The dismiss element with id "'.concat(
            t,
            '" does not exist. Please check the data-dismiss-target attribute.'
          )
        );
  });
}
typeof window < "u" && ((window.Dismiss = nn), (window.initDismisses = Be));
var P = "top",
  z = "bottom",
  F = "right",
  D = "left",
  Ne = "auto",
  St = [P, z, F, D],
  ht = "start",
  xt = "end",
  Gr = "clippingParents",
  rn = "viewport",
  bt = "popper",
  Yr = "reference",
  Ei = St.reduce(function (e, t) {
    return e.concat([t + "-" + ht, t + "-" + xt]);
  }, []),
  sn = [].concat(St, [Ne]).reduce(function (e, t) {
    return e.concat([t, t + "-" + ht, t + "-" + xt]);
  }, []),
  Qr = "beforeRead",
  Zr = "read",
  ts = "afterRead",
  es = "beforeMain",
  is = "main",
  ns = "afterMain",
  rs = "beforeWrite",
  ss = "write",
  os = "afterWrite",
  as = [Qr, Zr, ts, es, is, ns, rs, ss, os];
function W(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function j(e) {
  if (e == null) return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return (t && t.defaultView) || window;
  }
  return e;
}
function dt(e) {
  var t = j(e).Element;
  return e instanceof t || e instanceof Element;
}
function N(e) {
  var t = j(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function ze(e) {
  if (typeof ShadowRoot > "u") return !1;
  var t = j(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function cs(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function (i) {
    var n = t.styles[i] || {},
      r = t.attributes[i] || {},
      s = t.elements[i];
    !N(s) ||
      !W(s) ||
      (Object.assign(s.style, n),
      Object.keys(r).forEach(function (o) {
        var a = r[o];
        a === !1 ? s.removeAttribute(o) : s.setAttribute(o, a === !0 ? "" : a);
      }));
  });
}
function ls(e) {
  var t = e.state,
    i = {
      popper: {
        position: t.options.strategy,
        left: "0",
        top: "0",
        margin: "0",
      },
      arrow: { position: "absolute" },
      reference: {},
    };
  return (
    Object.assign(t.elements.popper.style, i.popper),
    (t.styles = i),
    t.elements.arrow && Object.assign(t.elements.arrow.style, i.arrow),
    function () {
      Object.keys(t.elements).forEach(function (n) {
        var r = t.elements[n],
          s = t.attributes[n] || {},
          o = Object.keys(t.styles.hasOwnProperty(n) ? t.styles[n] : i[n]),
          a = o.reduce(function (c, f) {
            return (c[f] = ""), c;
          }, {});
        !N(r) ||
          !W(r) ||
          (Object.assign(r.style, a),
          Object.keys(s).forEach(function (c) {
            r.removeAttribute(c);
          }));
      });
    }
  );
}
const ds = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: cs,
  effect: ls,
  requires: ["computeStyles"],
};
function V(e) {
  return e.split("-")[0];
}
var lt = Math.max,
  Yt = Math.min,
  pt = Math.round;
function Ie() {
  var e = navigator.userAgentData;
  return e != null && e.brands && Array.isArray(e.brands)
    ? e.brands
        .map(function (t) {
          return t.brand + "/" + t.version;
        })
        .join(" ")
    : navigator.userAgent;
}
function on() {
  return !/^((?!chrome|android).)*safari/i.test(Ie());
}
function vt(e, t, i) {
  t === void 0 && (t = !1), i === void 0 && (i = !1);
  var n = e.getBoundingClientRect(),
    r = 1,
    s = 1;
  t &&
    N(e) &&
    ((r = (e.offsetWidth > 0 && pt(n.width) / e.offsetWidth) || 1),
    (s = (e.offsetHeight > 0 && pt(n.height) / e.offsetHeight) || 1));
  var o = dt(e) ? j(e) : window,
    a = o.visualViewport,
    c = !on() && i,
    f = (n.left + (c && a ? a.offsetLeft : 0)) / r,
    l = (n.top + (c && a ? a.offsetTop : 0)) / s,
    u = n.width / r,
    g = n.height / s;
  return {
    width: u,
    height: g,
    top: l,
    right: f + u,
    bottom: l + g,
    left: f,
    x: f,
    y: l,
  };
}
function Fe(e) {
  var t = vt(e),
    i = e.offsetWidth,
    n = e.offsetHeight;
  return (
    Math.abs(t.width - i) <= 1 && (i = t.width),
    Math.abs(t.height - n) <= 1 && (n = t.height),
    { x: e.offsetLeft, y: e.offsetTop, width: i, height: n }
  );
}
function an(e, t) {
  var i = t.getRootNode && t.getRootNode();
  if (e.contains(t)) return !0;
  if (i && ze(i)) {
    var n = t;
    do {
      if (n && e.isSameNode(n)) return !0;
      n = n.parentNode || n.host;
    } while (n);
  }
  return !1;
}
function K(e) {
  return j(e).getComputedStyle(e);
}
function us(e) {
  return ["table", "td", "th"].indexOf(W(e)) >= 0;
}
function et(e) {
  return ((dt(e) ? e.ownerDocument : e.document) || window.document)
    .documentElement;
}
function de(e) {
  return W(e) === "html"
    ? e
    : e.assignedSlot || e.parentNode || (ze(e) ? e.host : null) || et(e);
}
function Ai(e) {
  return !N(e) || K(e).position === "fixed" ? null : e.offsetParent;
}
function fs(e) {
  var t = /firefox/i.test(Ie()),
    i = /Trident/i.test(Ie());
  if (i && N(e)) {
    var n = K(e);
    if (n.position === "fixed") return null;
  }
  var r = de(e);
  for (ze(r) && (r = r.host); N(r) && ["html", "body"].indexOf(W(r)) < 0; ) {
    var s = K(r);
    if (
      s.transform !== "none" ||
      s.perspective !== "none" ||
      s.contain === "paint" ||
      ["transform", "perspective"].indexOf(s.willChange) !== -1 ||
      (t && s.willChange === "filter") ||
      (t && s.filter && s.filter !== "none")
    )
      return r;
    r = r.parentNode;
  }
  return null;
}
function Tt(e) {
  for (var t = j(e), i = Ai(e); i && us(i) && K(i).position === "static"; )
    i = Ai(i);
  return i &&
    (W(i) === "html" || (W(i) === "body" && K(i).position === "static"))
    ? t
    : i || fs(e) || t;
}
function qe(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function Et(e, t, i) {
  return lt(e, Yt(t, i));
}
function hs(e, t, i) {
  var n = Et(e, t, i);
  return n > i ? i : n;
}
function cn() {
  return { top: 0, right: 0, bottom: 0, left: 0 };
}
function ln(e) {
  return Object.assign({}, cn(), e);
}
function dn(e, t) {
  return t.reduce(function (i, n) {
    return (i[n] = e), i;
  }, {});
}
var ps = function (t, i) {
  return (
    (t =
      typeof t == "function"
        ? t(Object.assign({}, i.rects, { placement: i.placement }))
        : t),
    ln(typeof t != "number" ? t : dn(t, St))
  );
};
function vs(e) {
  var t,
    i = e.state,
    n = e.name,
    r = e.options,
    s = i.elements.arrow,
    o = i.modifiersData.popperOffsets,
    a = V(i.placement),
    c = qe(a),
    f = [D, F].indexOf(a) >= 0,
    l = f ? "height" : "width";
  if (!(!s || !o)) {
    var u = ps(r.padding, i),
      g = Fe(s),
      v = c === "y" ? P : D,
      p = c === "y" ? z : F,
      h =
        i.rects.reference[l] + i.rects.reference[c] - o[c] - i.rects.popper[l],
      m = o[c] - i.rects.reference[c],
      y = Tt(s),
      E = y ? (c === "y" ? y.clientHeight || 0 : y.clientWidth || 0) : 0,
      A = h / 2 - m / 2,
      _ = u[v],
      L = E - g[l] - u[p],
      I = E / 2 - g[l] / 2 + A,
      x = Et(_, I, L),
      S = c;
    i.modifiersData[n] = ((t = {}), (t[S] = x), (t.centerOffset = x - I), t);
  }
}
function ms(e) {
  var t = e.state,
    i = e.options,
    n = i.element,
    r = n === void 0 ? "[data-popper-arrow]" : n;
  r != null &&
    ((typeof r == "string" && ((r = t.elements.popper.querySelector(r)), !r)) ||
      (an(t.elements.popper, r) && (t.elements.arrow = r)));
}
const gs = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: vs,
  effect: ms,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"],
};
function mt(e) {
  return e.split("-")[1];
}
var ys = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
function _s(e, t) {
  var i = e.x,
    n = e.y,
    r = t.devicePixelRatio || 1;
  return { x: pt(i * r) / r || 0, y: pt(n * r) / r || 0 };
}
function Li(e) {
  var t,
    i = e.popper,
    n = e.popperRect,
    r = e.placement,
    s = e.variation,
    o = e.offsets,
    a = e.position,
    c = e.gpuAcceleration,
    f = e.adaptive,
    l = e.roundOffsets,
    u = e.isFixed,
    g = o.x,
    v = g === void 0 ? 0 : g,
    p = o.y,
    h = p === void 0 ? 0 : p,
    m = typeof l == "function" ? l({ x: v, y: h }) : { x: v, y: h };
  (v = m.x), (h = m.y);
  var y = o.hasOwnProperty("x"),
    E = o.hasOwnProperty("y"),
    A = D,
    _ = P,
    L = window;
  if (f) {
    var I = Tt(i),
      x = "clientHeight",
      S = "clientWidth";
    if (
      (I === j(i) &&
        ((I = et(i)),
        K(I).position !== "static" &&
          a === "absolute" &&
          ((x = "scrollHeight"), (S = "scrollWidth"))),
      (I = I),
      r === P || ((r === D || r === F) && s === xt))
    ) {
      _ = z;
      var C = u && I === L && L.visualViewport ? L.visualViewport.height : I[x];
      (h -= C - n.height), (h *= c ? 1 : -1);
    }
    if (r === D || ((r === P || r === z) && s === xt)) {
      A = F;
      var k = u && I === L && L.visualViewport ? L.visualViewport.width : I[S];
      (v -= k - n.width), (v *= c ? 1 : -1);
    }
  }
  var T = Object.assign({ position: a }, f && ys),
    q = l === !0 ? _s({ x: v, y: h }, j(i)) : { x: v, y: h };
  if (((v = q.x), (h = q.y), c)) {
    var R;
    return Object.assign(
      {},
      T,
      ((R = {}),
      (R[_] = E ? "0" : ""),
      (R[A] = y ? "0" : ""),
      (R.transform =
        (L.devicePixelRatio || 1) <= 1
          ? "translate(" + v + "px, " + h + "px)"
          : "translate3d(" + v + "px, " + h + "px, 0)"),
      R)
    );
  }
  return Object.assign(
    {},
    T,
    ((t = {}),
    (t[_] = E ? h + "px" : ""),
    (t[A] = y ? v + "px" : ""),
    (t.transform = ""),
    t)
  );
}
function ws(e) {
  var t = e.state,
    i = e.options,
    n = i.gpuAcceleration,
    r = n === void 0 ? !0 : n,
    s = i.adaptive,
    o = s === void 0 ? !0 : s,
    a = i.roundOffsets,
    c = a === void 0 ? !0 : a,
    f = {
      placement: V(t.placement),
      variation: mt(t.placement),
      popper: t.elements.popper,
      popperRect: t.rects.popper,
      gpuAcceleration: r,
      isFixed: t.options.strategy === "fixed",
    };
  t.modifiersData.popperOffsets != null &&
    (t.styles.popper = Object.assign(
      {},
      t.styles.popper,
      Li(
        Object.assign({}, f, {
          offsets: t.modifiersData.popperOffsets,
          position: t.options.strategy,
          adaptive: o,
          roundOffsets: c,
        })
      )
    )),
    t.modifiersData.arrow != null &&
      (t.styles.arrow = Object.assign(
        {},
        t.styles.arrow,
        Li(
          Object.assign({}, f, {
            offsets: t.modifiersData.arrow,
            position: "absolute",
            adaptive: !1,
            roundOffsets: c,
          })
        )
      )),
    (t.attributes.popper = Object.assign({}, t.attributes.popper, {
      "data-popper-placement": t.placement,
    }));
}
const bs = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: ws,
  data: {},
};
var Bt = { passive: !0 };
function Es(e) {
  var t = e.state,
    i = e.instance,
    n = e.options,
    r = n.scroll,
    s = r === void 0 ? !0 : r,
    o = n.resize,
    a = o === void 0 ? !0 : o,
    c = j(t.elements.popper),
    f = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return (
    s &&
      f.forEach(function (l) {
        l.addEventListener("scroll", i.update, Bt);
      }),
    a && c.addEventListener("resize", i.update, Bt),
    function () {
      s &&
        f.forEach(function (l) {
          l.removeEventListener("scroll", i.update, Bt);
        }),
        a && c.removeEventListener("resize", i.update, Bt);
    }
  );
}
const As = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function () {},
  effect: Es,
  data: {},
};
var Ls = { left: "right", right: "left", bottom: "top", top: "bottom" };
function Wt(e) {
  return e.replace(/left|right|bottom|top/g, function (t) {
    return Ls[t];
  });
}
var Is = { start: "end", end: "start" };
function Ii(e) {
  return e.replace(/start|end/g, function (t) {
    return Is[t];
  });
}
function Me(e) {
  var t = j(e),
    i = t.pageXOffset,
    n = t.pageYOffset;
  return { scrollLeft: i, scrollTop: n };
}
function Ue(e) {
  return vt(et(e)).left + Me(e).scrollLeft;
}
function xs(e, t) {
  var i = j(e),
    n = et(e),
    r = i.visualViewport,
    s = n.clientWidth,
    o = n.clientHeight,
    a = 0,
    c = 0;
  if (r) {
    (s = r.width), (o = r.height);
    var f = on();
    (f || (!f && t === "fixed")) && ((a = r.offsetLeft), (c = r.offsetTop));
  }
  return { width: s, height: o, x: a + Ue(e), y: c };
}
function Os(e) {
  var t,
    i = et(e),
    n = Me(e),
    r = (t = e.ownerDocument) == null ? void 0 : t.body,
    s = lt(
      i.scrollWidth,
      i.clientWidth,
      r ? r.scrollWidth : 0,
      r ? r.clientWidth : 0
    ),
    o = lt(
      i.scrollHeight,
      i.clientHeight,
      r ? r.scrollHeight : 0,
      r ? r.clientHeight : 0
    ),
    a = -n.scrollLeft + Ue(e),
    c = -n.scrollTop;
  return (
    K(r || i).direction === "rtl" &&
      (a += lt(i.clientWidth, r ? r.clientWidth : 0) - s),
    { width: s, height: o, x: a, y: c }
  );
}
function Ve(e) {
  var t = K(e),
    i = t.overflow,
    n = t.overflowX,
    r = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(i + r + n);
}
function un(e) {
  return ["html", "body", "#document"].indexOf(W(e)) >= 0
    ? e.ownerDocument.body
    : N(e) && Ve(e)
    ? e
    : un(de(e));
}
function At(e, t) {
  var i;
  t === void 0 && (t = []);
  var n = un(e),
    r = n === ((i = e.ownerDocument) == null ? void 0 : i.body),
    s = j(n),
    o = r ? [s].concat(s.visualViewport || [], Ve(n) ? n : []) : n,
    a = t.concat(o);
  return r ? a : a.concat(At(de(o)));
}
function xe(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height,
  });
}
function ks(e, t) {
  var i = vt(e, !1, t === "fixed");
  return (
    (i.top = i.top + e.clientTop),
    (i.left = i.left + e.clientLeft),
    (i.bottom = i.top + e.clientHeight),
    (i.right = i.left + e.clientWidth),
    (i.width = e.clientWidth),
    (i.height = e.clientHeight),
    (i.x = i.left),
    (i.y = i.top),
    i
  );
}
function xi(e, t, i) {
  return t === rn ? xe(xs(e, i)) : dt(t) ? ks(t, i) : xe(Os(et(e)));
}
function Cs(e) {
  var t = At(de(e)),
    i = ["absolute", "fixed"].indexOf(K(e).position) >= 0,
    n = i && N(e) ? Tt(e) : e;
  return dt(n)
    ? t.filter(function (r) {
        return dt(r) && an(r, n) && W(r) !== "body";
      })
    : [];
}
function Ss(e, t, i, n) {
  var r = t === "clippingParents" ? Cs(e) : [].concat(t),
    s = [].concat(r, [i]),
    o = s[0],
    a = s.reduce(function (c, f) {
      var l = xi(e, f, n);
      return (
        (c.top = lt(l.top, c.top)),
        (c.right = Yt(l.right, c.right)),
        (c.bottom = Yt(l.bottom, c.bottom)),
        (c.left = lt(l.left, c.left)),
        c
      );
    }, xi(e, o, n));
  return (
    (a.width = a.right - a.left),
    (a.height = a.bottom - a.top),
    (a.x = a.left),
    (a.y = a.top),
    a
  );
}
function fn(e) {
  var t = e.reference,
    i = e.element,
    n = e.placement,
    r = n ? V(n) : null,
    s = n ? mt(n) : null,
    o = t.x + t.width / 2 - i.width / 2,
    a = t.y + t.height / 2 - i.height / 2,
    c;
  switch (r) {
    case P:
      c = { x: o, y: t.y - i.height };
      break;
    case z:
      c = { x: o, y: t.y + t.height };
      break;
    case F:
      c = { x: t.x + t.width, y: a };
      break;
    case D:
      c = { x: t.x - i.width, y: a };
      break;
    default:
      c = { x: t.x, y: t.y };
  }
  var f = r ? qe(r) : null;
  if (f != null) {
    var l = f === "y" ? "height" : "width";
    switch (s) {
      case ht:
        c[f] = c[f] - (t[l] / 2 - i[l] / 2);
        break;
      case xt:
        c[f] = c[f] + (t[l] / 2 - i[l] / 2);
        break;
    }
  }
  return c;
}
function Ot(e, t) {
  t === void 0 && (t = {});
  var i = t,
    n = i.placement,
    r = n === void 0 ? e.placement : n,
    s = i.strategy,
    o = s === void 0 ? e.strategy : s,
    a = i.boundary,
    c = a === void 0 ? Gr : a,
    f = i.rootBoundary,
    l = f === void 0 ? rn : f,
    u = i.elementContext,
    g = u === void 0 ? bt : u,
    v = i.altBoundary,
    p = v === void 0 ? !1 : v,
    h = i.padding,
    m = h === void 0 ? 0 : h,
    y = ln(typeof m != "number" ? m : dn(m, St)),
    E = g === bt ? Yr : bt,
    A = e.rects.popper,
    _ = e.elements[p ? E : g],
    L = Ss(dt(_) ? _ : _.contextElement || et(e.elements.popper), c, l, o),
    I = vt(e.elements.reference),
    x = fn({ reference: I, element: A, strategy: "absolute", placement: r }),
    S = xe(Object.assign({}, A, x)),
    C = g === bt ? S : I,
    k = {
      top: L.top - C.top + y.top,
      bottom: C.bottom - L.bottom + y.bottom,
      left: L.left - C.left + y.left,
      right: C.right - L.right + y.right,
    },
    T = e.modifiersData.offset;
  if (g === bt && T) {
    var q = T[r];
    Object.keys(k).forEach(function (R) {
      var it = [F, z].indexOf(R) >= 0 ? 1 : -1,
        nt = [P, z].indexOf(R) >= 0 ? "y" : "x";
      k[R] += q[nt] * it;
    });
  }
  return k;
}
function Ts(e, t) {
  t === void 0 && (t = {});
  var i = t,
    n = i.placement,
    r = i.boundary,
    s = i.rootBoundary,
    o = i.padding,
    a = i.flipVariations,
    c = i.allowedAutoPlacements,
    f = c === void 0 ? sn : c,
    l = mt(n),
    u = l
      ? a
        ? Ei
        : Ei.filter(function (p) {
            return mt(p) === l;
          })
      : St,
    g = u.filter(function (p) {
      return f.indexOf(p) >= 0;
    });
  g.length === 0 && (g = u);
  var v = g.reduce(function (p, h) {
    return (
      (p[h] = Ot(e, { placement: h, boundary: r, rootBoundary: s, padding: o })[
        V(h)
      ]),
      p
    );
  }, {});
  return Object.keys(v).sort(function (p, h) {
    return v[p] - v[h];
  });
}
function Rs(e) {
  if (V(e) === Ne) return [];
  var t = Wt(e);
  return [Ii(e), t, Ii(t)];
}
function Ps(e) {
  var t = e.state,
    i = e.options,
    n = e.name;
  if (!t.modifiersData[n]._skip) {
    for (
      var r = i.mainAxis,
        s = r === void 0 ? !0 : r,
        o = i.altAxis,
        a = o === void 0 ? !0 : o,
        c = i.fallbackPlacements,
        f = i.padding,
        l = i.boundary,
        u = i.rootBoundary,
        g = i.altBoundary,
        v = i.flipVariations,
        p = v === void 0 ? !0 : v,
        h = i.allowedAutoPlacements,
        m = t.options.placement,
        y = V(m),
        E = y === m,
        A = c || (E || !p ? [Wt(m)] : Rs(m)),
        _ = [m].concat(A).reduce(function (ut, X) {
          return ut.concat(
            V(X) === Ne
              ? Ts(t, {
                  placement: X,
                  boundary: l,
                  rootBoundary: u,
                  padding: f,
                  flipVariations: p,
                  allowedAutoPlacements: h,
                })
              : X
          );
        }, []),
        L = t.rects.reference,
        I = t.rects.popper,
        x = new Map(),
        S = !0,
        C = _[0],
        k = 0;
      k < _.length;
      k++
    ) {
      var T = _[k],
        q = V(T),
        R = mt(T) === ht,
        it = [P, z].indexOf(q) >= 0,
        nt = it ? "width" : "height",
        H = Ot(t, {
          placement: T,
          boundary: l,
          rootBoundary: u,
          altBoundary: g,
          padding: f,
        }),
        M = it ? (R ? F : D) : R ? z : P;
      L[nt] > I[nt] && (M = Wt(M));
      var Rt = Wt(M),
        rt = [];
      if (
        (s && rt.push(H[q] <= 0),
        a && rt.push(H[M] <= 0, H[Rt] <= 0),
        rt.every(function (ut) {
          return ut;
        }))
      ) {
        (C = T), (S = !1);
        break;
      }
      x.set(T, rt);
    }
    if (S)
      for (
        var Pt = p ? 3 : 1,
          ue = function (X) {
            var _t = _.find(function (Ht) {
              var st = x.get(Ht);
              if (st)
                return st.slice(0, X).every(function (fe) {
                  return fe;
                });
            });
            if (_t) return (C = _t), "break";
          },
          yt = Pt;
        yt > 0;
        yt--
      ) {
        var Dt = ue(yt);
        if (Dt === "break") break;
      }
    t.placement !== C &&
      ((t.modifiersData[n]._skip = !0), (t.placement = C), (t.reset = !0));
  }
}
const Ds = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: Ps,
  requiresIfExists: ["offset"],
  data: { _skip: !1 },
};
function Oi(e, t, i) {
  return (
    i === void 0 && (i = { x: 0, y: 0 }),
    {
      top: e.top - t.height - i.y,
      right: e.right - t.width + i.x,
      bottom: e.bottom - t.height + i.y,
      left: e.left - t.width - i.x,
    }
  );
}
function ki(e) {
  return [P, F, z, D].some(function (t) {
    return e[t] >= 0;
  });
}
function Hs(e) {
  var t = e.state,
    i = e.name,
    n = t.rects.reference,
    r = t.rects.popper,
    s = t.modifiersData.preventOverflow,
    o = Ot(t, { elementContext: "reference" }),
    a = Ot(t, { altBoundary: !0 }),
    c = Oi(o, n),
    f = Oi(a, r, s),
    l = ki(c),
    u = ki(f);
  (t.modifiersData[i] = {
    referenceClippingOffsets: c,
    popperEscapeOffsets: f,
    isReferenceHidden: l,
    hasPopperEscaped: u,
  }),
    (t.attributes.popper = Object.assign({}, t.attributes.popper, {
      "data-popper-reference-hidden": l,
      "data-popper-escaped": u,
    }));
}
const js = {
  name: "hide",
  enabled: !0,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: Hs,
};
function Bs(e, t, i) {
  var n = V(e),
    r = [D, P].indexOf(n) >= 0 ? -1 : 1,
    s = typeof i == "function" ? i(Object.assign({}, t, { placement: e })) : i,
    o = s[0],
    a = s[1];
  return (
    (o = o || 0),
    (a = (a || 0) * r),
    [D, F].indexOf(n) >= 0 ? { x: a, y: o } : { x: o, y: a }
  );
}
function Ns(e) {
  var t = e.state,
    i = e.options,
    n = e.name,
    r = i.offset,
    s = r === void 0 ? [0, 0] : r,
    o = sn.reduce(function (l, u) {
      return (l[u] = Bs(u, t.rects, s)), l;
    }, {}),
    a = o[t.placement],
    c = a.x,
    f = a.y;
  t.modifiersData.popperOffsets != null &&
    ((t.modifiersData.popperOffsets.x += c),
    (t.modifiersData.popperOffsets.y += f)),
    (t.modifiersData[n] = o);
}
const zs = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: Ns,
};
function Fs(e) {
  var t = e.state,
    i = e.name;
  t.modifiersData[i] = fn({
    reference: t.rects.reference,
    element: t.rects.popper,
    strategy: "absolute",
    placement: t.placement,
  });
}
const qs = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: Fs,
  data: {},
};
function Ms(e) {
  return e === "x" ? "y" : "x";
}
function Us(e) {
  var t = e.state,
    i = e.options,
    n = e.name,
    r = i.mainAxis,
    s = r === void 0 ? !0 : r,
    o = i.altAxis,
    a = o === void 0 ? !1 : o,
    c = i.boundary,
    f = i.rootBoundary,
    l = i.altBoundary,
    u = i.padding,
    g = i.tether,
    v = g === void 0 ? !0 : g,
    p = i.tetherOffset,
    h = p === void 0 ? 0 : p,
    m = Ot(t, { boundary: c, rootBoundary: f, padding: u, altBoundary: l }),
    y = V(t.placement),
    E = mt(t.placement),
    A = !E,
    _ = qe(y),
    L = Ms(_),
    I = t.modifiersData.popperOffsets,
    x = t.rects.reference,
    S = t.rects.popper,
    C =
      typeof h == "function"
        ? h(Object.assign({}, t.rects, { placement: t.placement }))
        : h,
    k =
      typeof C == "number"
        ? { mainAxis: C, altAxis: C }
        : Object.assign({ mainAxis: 0, altAxis: 0 }, C),
    T = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null,
    q = { x: 0, y: 0 };
  if (I) {
    if (s) {
      var R,
        it = _ === "y" ? P : D,
        nt = _ === "y" ? z : F,
        H = _ === "y" ? "height" : "width",
        M = I[_],
        Rt = M + m[it],
        rt = M - m[nt],
        Pt = v ? -S[H] / 2 : 0,
        ue = E === ht ? x[H] : S[H],
        yt = E === ht ? -S[H] : -x[H],
        Dt = t.elements.arrow,
        ut = v && Dt ? Fe(Dt) : { width: 0, height: 0 },
        X = t.modifiersData["arrow#persistent"]
          ? t.modifiersData["arrow#persistent"].padding
          : cn(),
        _t = X[it],
        Ht = X[nt],
        st = Et(0, x[H], ut[H]),
        fe = A
          ? x[H] / 2 - Pt - st - _t - k.mainAxis
          : ue - st - _t - k.mainAxis,
        bn = A
          ? -x[H] / 2 + Pt + st + Ht + k.mainAxis
          : yt + st + Ht + k.mainAxis,
        he = t.elements.arrow && Tt(t.elements.arrow),
        En = he ? (_ === "y" ? he.clientTop || 0 : he.clientLeft || 0) : 0,
        ti = (R = T == null ? void 0 : T[_]) != null ? R : 0,
        An = M + fe - ti - En,
        Ln = M + bn - ti,
        ei = Et(v ? Yt(Rt, An) : Rt, M, v ? lt(rt, Ln) : rt);
      (I[_] = ei), (q[_] = ei - M);
    }
    if (a) {
      var ii,
        In = _ === "x" ? P : D,
        xn = _ === "x" ? z : F,
        ot = I[L],
        jt = L === "y" ? "height" : "width",
        ni = ot + m[In],
        ri = ot - m[xn],
        pe = [P, D].indexOf(y) !== -1,
        si = (ii = T == null ? void 0 : T[L]) != null ? ii : 0,
        oi = pe ? ni : ot - x[jt] - S[jt] - si + k.altAxis,
        ai = pe ? ot + x[jt] + S[jt] - si - k.altAxis : ri,
        ci = v && pe ? hs(oi, ot, ai) : Et(v ? oi : ni, ot, v ? ai : ri);
      (I[L] = ci), (q[L] = ci - ot);
    }
    t.modifiersData[n] = q;
  }
}
const Vs = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: Us,
  requiresIfExists: ["offset"],
};
function Ws(e) {
  return { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop };
}
function $s(e) {
  return e === j(e) || !N(e) ? Me(e) : Ws(e);
}
function Js(e) {
  var t = e.getBoundingClientRect(),
    i = pt(t.width) / e.offsetWidth || 1,
    n = pt(t.height) / e.offsetHeight || 1;
  return i !== 1 || n !== 1;
}
function Ks(e, t, i) {
  i === void 0 && (i = !1);
  var n = N(t),
    r = N(t) && Js(t),
    s = et(t),
    o = vt(e, r, i),
    a = { scrollLeft: 0, scrollTop: 0 },
    c = { x: 0, y: 0 };
  return (
    (n || (!n && !i)) &&
      ((W(t) !== "body" || Ve(s)) && (a = $s(t)),
      N(t)
        ? ((c = vt(t, !0)), (c.x += t.clientLeft), (c.y += t.clientTop))
        : s && (c.x = Ue(s))),
    {
      x: o.left + a.scrollLeft - c.x,
      y: o.top + a.scrollTop - c.y,
      width: o.width,
      height: o.height,
    }
  );
}
function Xs(e) {
  var t = new Map(),
    i = new Set(),
    n = [];
  e.forEach(function (s) {
    t.set(s.name, s);
  });
  function r(s) {
    i.add(s.name);
    var o = [].concat(s.requires || [], s.requiresIfExists || []);
    o.forEach(function (a) {
      if (!i.has(a)) {
        var c = t.get(a);
        c && r(c);
      }
    }),
      n.push(s);
  }
  return (
    e.forEach(function (s) {
      i.has(s.name) || r(s);
    }),
    n
  );
}
function Gs(e) {
  var t = Xs(e);
  return as.reduce(function (i, n) {
    return i.concat(
      t.filter(function (r) {
        return r.phase === n;
      })
    );
  }, []);
}
function Ys(e) {
  var t;
  return function () {
    return (
      t ||
        (t = new Promise(function (i) {
          Promise.resolve().then(function () {
            (t = void 0), i(e());
          });
        })),
      t
    );
  };
}
function Qs(e) {
  var t = e.reduce(function (i, n) {
    var r = i[n.name];
    return (
      (i[n.name] = r
        ? Object.assign({}, r, n, {
            options: Object.assign({}, r.options, n.options),
            data: Object.assign({}, r.data, n.data),
          })
        : n),
      i
    );
  }, {});
  return Object.keys(t).map(function (i) {
    return t[i];
  });
}
var Ci = { placement: "bottom", modifiers: [], strategy: "absolute" };
function Si() {
  for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++)
    t[i] = arguments[i];
  return !t.some(function (n) {
    return !(n && typeof n.getBoundingClientRect == "function");
  });
}
function Zs(e) {
  e === void 0 && (e = {});
  var t = e,
    i = t.defaultModifiers,
    n = i === void 0 ? [] : i,
    r = t.defaultOptions,
    s = r === void 0 ? Ci : r;
  return function (a, c, f) {
    f === void 0 && (f = s);
    var l = {
        placement: "bottom",
        orderedModifiers: [],
        options: Object.assign({}, Ci, s),
        modifiersData: {},
        elements: { reference: a, popper: c },
        attributes: {},
        styles: {},
      },
      u = [],
      g = !1,
      v = {
        state: l,
        setOptions: function (y) {
          var E = typeof y == "function" ? y(l.options) : y;
          h(),
            (l.options = Object.assign({}, s, l.options, E)),
            (l.scrollParents = {
              reference: dt(a)
                ? At(a)
                : a.contextElement
                ? At(a.contextElement)
                : [],
              popper: At(c),
            });
          var A = Gs(Qs([].concat(n, l.options.modifiers)));
          return (
            (l.orderedModifiers = A.filter(function (_) {
              return _.enabled;
            })),
            p(),
            v.update()
          );
        },
        forceUpdate: function () {
          if (!g) {
            var y = l.elements,
              E = y.reference,
              A = y.popper;
            if (Si(E, A)) {
              (l.rects = {
                reference: Ks(E, Tt(A), l.options.strategy === "fixed"),
                popper: Fe(A),
              }),
                (l.reset = !1),
                (l.placement = l.options.placement),
                l.orderedModifiers.forEach(function (k) {
                  return (l.modifiersData[k.name] = Object.assign({}, k.data));
                });
              for (var _ = 0; _ < l.orderedModifiers.length; _++) {
                if (l.reset === !0) {
                  (l.reset = !1), (_ = -1);
                  continue;
                }
                var L = l.orderedModifiers[_],
                  I = L.fn,
                  x = L.options,
                  S = x === void 0 ? {} : x,
                  C = L.name;
                typeof I == "function" &&
                  (l = I({ state: l, options: S, name: C, instance: v }) || l);
              }
            }
          }
        },
        update: Ys(function () {
          return new Promise(function (m) {
            v.forceUpdate(), m(l);
          });
        }),
        destroy: function () {
          h(), (g = !0);
        },
      };
    if (!Si(a, c)) return v;
    v.setOptions(f).then(function (m) {
      !g && f.onFirstUpdate && f.onFirstUpdate(m);
    });
    function p() {
      l.orderedModifiers.forEach(function (m) {
        var y = m.name,
          E = m.options,
          A = E === void 0 ? {} : E,
          _ = m.effect;
        if (typeof _ == "function") {
          var L = _({ state: l, name: y, instance: v, options: A }),
            I = function () {};
          u.push(L || I);
        }
      });
    }
    function h() {
      u.forEach(function (m) {
        return m();
      }),
        (u = []);
    }
    return v;
  };
}
var to = [As, qs, bs, ds, zs, Ds, Vs, gs, js],
  We = Zs({ defaultModifiers: to }),
  Y = function () {
    return (
      (Y =
        Object.assign ||
        function (e) {
          for (var t, i = 1, n = arguments.length; i < n; i++) {
            t = arguments[i];
            for (var r in t)
              Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
          }
          return e;
        }),
      Y.apply(this, arguments)
    );
  },
  Nt = function (e, t, i) {
    if (i || arguments.length === 2)
      for (var n = 0, r = t.length, s; n < r; n++)
        (s || !(n in t)) &&
          (s || (s = Array.prototype.slice.call(t, 0, n)), (s[n] = t[n]));
    return e.concat(s || Array.prototype.slice.call(t));
  },
  Q = {
    placement: "bottom",
    triggerType: "click",
    offsetSkidding: 0,
    offsetDistance: 10,
    delay: 300,
    ignoreClickOutsideClass: !1,
    onShow: function () {},
    onHide: function () {},
    onToggle: function () {},
  },
  eo = { id: null, override: !0 },
  hn = (function () {
    function e(t, i, n, r) {
      t === void 0 && (t = null),
        i === void 0 && (i = null),
        n === void 0 && (n = Q),
        r === void 0 && (r = eo),
        (this._instanceId = r.id ? r.id : t.id),
        (this._targetEl = t),
        (this._triggerEl = i),
        (this._options = Y(Y({}, Q), n)),
        (this._popperInstance = null),
        (this._visible = !1),
        (this._initialized = !1),
        this.init(),
        w.addInstance("Dropdown", this, this._instanceId, r.override);
    }
    return (
      (e.prototype.init = function () {
        this._triggerEl &&
          this._targetEl &&
          !this._initialized &&
          ((this._popperInstance = this._createPopperInstance()),
          this._setupEventListeners(),
          (this._initialized = !0));
      }),
      (e.prototype.destroy = function () {
        var t = this,
          i = this._getTriggerEvents();
        this._options.triggerType === "click" &&
          i.showEvents.forEach(function (n) {
            t._triggerEl.removeEventListener(n, t._clickHandler);
          }),
          this._options.triggerType === "hover" &&
            (i.showEvents.forEach(function (n) {
              t._triggerEl.removeEventListener(n, t._hoverShowTriggerElHandler),
                t._targetEl.removeEventListener(n, t._hoverShowTargetElHandler);
            }),
            i.hideEvents.forEach(function (n) {
              t._triggerEl.removeEventListener(n, t._hoverHideHandler),
                t._targetEl.removeEventListener(n, t._hoverHideHandler);
            })),
          this._popperInstance.destroy(),
          (this._initialized = !1);
      }),
      (e.prototype.removeInstance = function () {
        w.removeInstance("Dropdown", this._instanceId);
      }),
      (e.prototype.destroyAndRemoveInstance = function () {
        this.destroy(), this.removeInstance();
      }),
      (e.prototype._setupEventListeners = function () {
        var t = this,
          i = this._getTriggerEvents();
        (this._clickHandler = function () {
          t.toggle();
        }),
          this._options.triggerType === "click" &&
            i.showEvents.forEach(function (n) {
              t._triggerEl.addEventListener(n, t._clickHandler);
            }),
          (this._hoverShowTriggerElHandler = function (n) {
            n.type === "click"
              ? t.toggle()
              : setTimeout(function () {
                  t.show();
                }, t._options.delay);
          }),
          (this._hoverShowTargetElHandler = function () {
            t.show();
          }),
          (this._hoverHideHandler = function () {
            setTimeout(function () {
              t._targetEl.matches(":hover") || t.hide();
            }, t._options.delay);
          }),
          this._options.triggerType === "hover" &&
            (i.showEvents.forEach(function (n) {
              t._triggerEl.addEventListener(n, t._hoverShowTriggerElHandler),
                t._targetEl.addEventListener(n, t._hoverShowTargetElHandler);
            }),
            i.hideEvents.forEach(function (n) {
              t._triggerEl.addEventListener(n, t._hoverHideHandler),
                t._targetEl.addEventListener(n, t._hoverHideHandler);
            }));
      }),
      (e.prototype._createPopperInstance = function () {
        return We(this._triggerEl, this._targetEl, {
          placement: this._options.placement,
          modifiers: [
            {
              name: "offset",
              options: {
                offset: [
                  this._options.offsetSkidding,
                  this._options.offsetDistance,
                ],
              },
            },
          ],
        });
      }),
      (e.prototype._setupClickOutsideListener = function () {
        var t = this;
        (this._clickOutsideEventListener = function (i) {
          t._handleClickOutside(i, t._targetEl);
        }),
          document.body.addEventListener(
            "click",
            this._clickOutsideEventListener,
            !0
          );
      }),
      (e.prototype._removeClickOutsideListener = function () {
        document.body.removeEventListener(
          "click",
          this._clickOutsideEventListener,
          !0
        );
      }),
      (e.prototype._handleClickOutside = function (t, i) {
        var n = t.target,
          r = this._options.ignoreClickOutsideClass,
          s = !1;
        if (r) {
          var o = document.querySelectorAll(".".concat(r));
          o.forEach(function (a) {
            if (a.contains(n)) {
              s = !0;
              return;
            }
          });
        }
        n !== i &&
          !i.contains(n) &&
          !this._triggerEl.contains(n) &&
          !s &&
          this.isVisible() &&
          this.hide();
      }),
      (e.prototype._getTriggerEvents = function () {
        switch (this._options.triggerType) {
          case "hover":
            return {
              showEvents: ["mouseenter", "click"],
              hideEvents: ["mouseleave"],
            };
          case "click":
            return { showEvents: ["click"], hideEvents: [] };
          case "none":
            return { showEvents: [], hideEvents: [] };
          default:
            return { showEvents: ["click"], hideEvents: [] };
        }
      }),
      (e.prototype.toggle = function () {
        this.isVisible() ? this.hide() : this.show(),
          this._options.onToggle(this);
      }),
      (e.prototype.isVisible = function () {
        return this._visible;
      }),
      (e.prototype.show = function () {
        this._targetEl.classList.remove("hidden"),
          this._targetEl.classList.add("block"),
          this._popperInstance.setOptions(function (t) {
            return Y(Y({}, t), {
              modifiers: Nt(
                Nt([], t.modifiers, !0),
                [{ name: "eventListeners", enabled: !0 }],
                !1
              ),
            });
          }),
          this._setupClickOutsideListener(),
          this._popperInstance.update(),
          (this._visible = !0),
          this._options.onShow(this);
      }),
      (e.prototype.hide = function () {
        this._targetEl.classList.remove("block"),
          this._targetEl.classList.add("hidden"),
          this._popperInstance.setOptions(function (t) {
            return Y(Y({}, t), {
              modifiers: Nt(
                Nt([], t.modifiers, !0),
                [{ name: "eventListeners", enabled: !1 }],
                !1
              ),
            });
          }),
          (this._visible = !1),
          this._removeClickOutsideListener(),
          this._options.onHide(this);
      }),
      e
    );
  })();
function $e() {
  document.querySelectorAll("[data-dropdown-toggle]").forEach(function (e) {
    var t = e.getAttribute("data-dropdown-toggle"),
      i = document.getElementById(t);
    if (i) {
      var n = e.getAttribute("data-dropdown-placement"),
        r = e.getAttribute("data-dropdown-offset-skidding"),
        s = e.getAttribute("data-dropdown-offset-distance"),
        o = e.getAttribute("data-dropdown-trigger"),
        a = e.getAttribute("data-dropdown-delay"),
        c = e.getAttribute("data-dropdown-ignore-click-outside-class");
      new hn(i, e, {
        placement: n || Q.placement,
        triggerType: o || Q.triggerType,
        offsetSkidding: r ? parseInt(r) : Q.offsetSkidding,
        offsetDistance: s ? parseInt(s) : Q.offsetDistance,
        delay: a ? parseInt(a) : Q.delay,
        ignoreClickOutsideClass: c || Q.ignoreClickOutsideClass,
      });
    } else console.error('The dropdown element with id "'.concat(t, '" does not exist. Please check the data-dropdown-toggle attribute.'));
  });
}
typeof window < "u" && ((window.Dropdown = hn), (window.initDropdowns = $e));
var Qt = function () {
    return (
      (Qt =
        Object.assign ||
        function (e) {
          for (var t, i = 1, n = arguments.length; i < n; i++) {
            t = arguments[i];
            for (var r in t)
              Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
          }
          return e;
        }),
      Qt.apply(this, arguments)
    );
  },
  Zt = {
    placement: "center",
    backdropClasses: "bg-gray-900/50 dark:bg-gray-900/80 fixed inset-0 z-40",
    backdrop: "dynamic",
    closable: !0,
    onHide: function () {},
    onShow: function () {},
    onToggle: function () {},
  },
  io = { id: null, override: !0 },
  pn = (function () {
    function e(t, i, n) {
      t === void 0 && (t = null),
        i === void 0 && (i = Zt),
        n === void 0 && (n = io),
        (this._eventListenerInstances = []),
        (this._instanceId = n.id ? n.id : t.id),
        (this._targetEl = t),
        (this._options = Qt(Qt({}, Zt), i)),
        (this._isHidden = !0),
        (this._backdropEl = null),
        (this._initialized = !1),
        this.init(),
        w.addInstance("Modal", this, this._instanceId, n.override);
    }
    return (
      (e.prototype.init = function () {
        var t = this;
        this._targetEl &&
          !this._initialized &&
          (this._getPlacementClasses().map(function (i) {
            t._targetEl.classList.add(i);
          }),
          (this._initialized = !0));
      }),
      (e.prototype.destroy = function () {
        this._initialized &&
          (this.removeAllEventListenerInstances(),
          this._destroyBackdropEl(),
          (this._initialized = !1));
      }),
      (e.prototype.removeInstance = function () {
        w.removeInstance("Modal", this._instanceId);
      }),
      (e.prototype.destroyAndRemoveInstance = function () {
        this.destroy(), this.removeInstance();
      }),
      (e.prototype._createBackdrop = function () {
        var t;
        if (this._isHidden) {
          var i = document.createElement("div");
          i.setAttribute("modal-backdrop", ""),
            (t = i.classList).add.apply(
              t,
              this._options.backdropClasses.split(" ")
            ),
            document.querySelector("body").append(i),
            (this._backdropEl = i);
        }
      }),
      (e.prototype._destroyBackdropEl = function () {
        this._isHidden || document.querySelector("[modal-backdrop]").remove();
      }),
      (e.prototype._setupModalCloseEventListeners = function () {
        var t = this;
        this._options.backdrop === "dynamic" &&
          ((this._clickOutsideEventListener = function (i) {
            t._handleOutsideClick(i.target);
          }),
          this._targetEl.addEventListener(
            "click",
            this._clickOutsideEventListener,
            !0
          )),
          (this._keydownEventListener = function (i) {
            i.key === "Escape" && t.hide();
          }),
          document.body.addEventListener(
            "keydown",
            this._keydownEventListener,
            !0
          );
      }),
      (e.prototype._removeModalCloseEventListeners = function () {
        this._options.backdrop === "dynamic" &&
          this._targetEl.removeEventListener(
            "click",
            this._clickOutsideEventListener,
            !0
          ),
          document.body.removeEventListener(
            "keydown",
            this._keydownEventListener,
            !0
          );
      }),
      (e.prototype._handleOutsideClick = function (t) {
        (t === this._targetEl ||
          (t === this._backdropEl && this.isVisible())) &&
          this.hide();
      }),
      (e.prototype._getPlacementClasses = function () {
        switch (this._options.placement) {
          case "top-left":
            return ["justify-start", "items-start"];
          case "top-center":
            return ["justify-center", "items-start"];
          case "top-right":
            return ["justify-end", "items-start"];
          case "center-left":
            return ["justify-start", "items-center"];
          case "center":
            return ["justify-center", "items-center"];
          case "center-right":
            return ["justify-end", "items-center"];
          case "bottom-left":
            return ["justify-start", "items-end"];
          case "bottom-center":
            return ["justify-center", "items-end"];
          case "bottom-right":
            return ["justify-end", "items-end"];
          default:
            return ["justify-center", "items-center"];
        }
      }),
      (e.prototype.toggle = function () {
        this._isHidden ? this.show() : this.hide(),
          this._options.onToggle(this);
      }),
      (e.prototype.show = function () {
        this.isHidden &&
          (this._targetEl.classList.add("flex"),
          this._targetEl.classList.remove("hidden"),
          this._targetEl.setAttribute("aria-modal", "true"),
          this._targetEl.setAttribute("role", "dialog"),
          this._targetEl.removeAttribute("aria-hidden"),
          this._createBackdrop(),
          (this._isHidden = !1),
          this._options.closable && this._setupModalCloseEventListeners(),
          document.body.classList.add("overflow-hidden"),
          this._options.onShow(this));
      }),
      (e.prototype.hide = function () {
        this.isVisible &&
          (this._targetEl.classList.add("hidden"),
          this._targetEl.classList.remove("flex"),
          this._targetEl.setAttribute("aria-hidden", "true"),
          this._targetEl.removeAttribute("aria-modal"),
          this._targetEl.removeAttribute("role"),
          this._destroyBackdropEl(),
          (this._isHidden = !0),
          document.body.classList.remove("overflow-hidden"),
          this._options.closable && this._removeModalCloseEventListeners(),
          this._options.onHide(this));
      }),
      (e.prototype.isVisible = function () {
        return !this._isHidden;
      }),
      (e.prototype.isHidden = function () {
        return this._isHidden;
      }),
      (e.prototype.addEventListenerInstance = function (t, i, n) {
        this._eventListenerInstances.push({ element: t, type: i, handler: n });
      }),
      (e.prototype.removeAllEventListenerInstances = function () {
        this._eventListenerInstances.map(function (t) {
          t.element.removeEventListener(t.type, t.handler);
        }),
          (this._eventListenerInstances = []);
      }),
      (e.prototype.getAllEventListenerInstances = function () {
        return this._eventListenerInstances;
      }),
      e
    );
  })();
function Je() {
  document.querySelectorAll("[data-modal-target]").forEach(function (e) {
    var t = e.getAttribute("data-modal-target"),
      i = document.getElementById(t);
    if (i) {
      var n = i.getAttribute("data-modal-placement"),
        r = i.getAttribute("data-modal-backdrop");
      new pn(i, { placement: n || Zt.placement, backdrop: r || Zt.backdrop });
    } else console.error("Modal with id ".concat(t, " does not exist. Are you sure that the data-modal-target attribute points to the correct modal id?."));
  }),
    document.querySelectorAll("[data-modal-toggle]").forEach(function (e) {
      var t = e.getAttribute("data-modal-toggle"),
        i = document.getElementById(t);
      if (i) {
        var n = w.getInstance("Modal", t);
        if (n) {
          var r = function () {
            n.toggle();
          };
          e.addEventListener("click", r),
            n.addEventListenerInstance(e, "click", r);
        } else
          console.error(
            "Modal with id ".concat(
              t,
              " has not been initialized. Please initialize it using the data-modal-target attribute."
            )
          );
      } else console.error("Modal with id ".concat(t, " does not exist. Are you sure that the data-modal-toggle attribute points to the correct modal id?"));
    }),
    document.querySelectorAll("[data-modal-show]").forEach(function (e) {
      var t = e.getAttribute("data-modal-show"),
        i = document.getElementById(t);
      if (i) {
        var n = w.getInstance("Modal", t);
        if (n) {
          var r = function () {
            n.show();
          };
          e.addEventListener("click", r),
            n.addEventListenerInstance(e, "click", r);
        } else
          console.error(
            "Modal with id ".concat(
              t,
              " has not been initialized. Please initialize it using the data-modal-target attribute."
            )
          );
      } else console.error("Modal with id ".concat(t, " does not exist. Are you sure that the data-modal-show attribute points to the correct modal id?"));
    }),
    document.querySelectorAll("[data-modal-hide]").forEach(function (e) {
      var t = e.getAttribute("data-modal-hide"),
        i = document.getElementById(t);
      if (i) {
        var n = w.getInstance("Modal", t);
        if (n) {
          var r = function () {
            n.hide();
          };
          e.addEventListener("click", r),
            n.addEventListenerInstance(e, "click", r);
        } else
          console.error(
            "Modal with id ".concat(
              t,
              " has not been initialized. Please initialize it using the data-modal-target attribute."
            )
          );
      } else console.error("Modal with id ".concat(t, " does not exist. Are you sure that the data-modal-hide attribute points to the correct modal id?"));
    });
}
typeof window < "u" && ((window.Modal = pn), (window.initModals = Je));
var te = function () {
    return (
      (te =
        Object.assign ||
        function (e) {
          for (var t, i = 1, n = arguments.length; i < n; i++) {
            t = arguments[i];
            for (var r in t)
              Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
          }
          return e;
        }),
      te.apply(this, arguments)
    );
  },
  ct = {
    placement: "left",
    bodyScrolling: !1,
    backdrop: !0,
    edge: !1,
    edgeOffset: "bottom-[60px]",
    backdropClasses: "bg-gray-900/50 dark:bg-gray-900/80 fixed inset-0 z-30",
    onShow: function () {},
    onHide: function () {},
    onToggle: function () {},
  },
  no = { id: null, override: !0 },
  vn = (function () {
    function e(t, i, n) {
      t === void 0 && (t = null),
        i === void 0 && (i = ct),
        n === void 0 && (n = no),
        (this._eventListenerInstances = []),
        (this._instanceId = n.id ? n.id : t.id),
        (this._targetEl = t),
        (this._options = te(te({}, ct), i)),
        (this._visible = !1),
        (this._initialized = !1),
        this.init(),
        w.addInstance("Drawer", this, this._instanceId, n.override);
    }
    return (
      (e.prototype.init = function () {
        var t = this;
        this._targetEl &&
          !this._initialized &&
          (this._targetEl.setAttribute("aria-hidden", "true"),
          this._targetEl.classList.add("transition-transform"),
          this._getPlacementClasses(this._options.placement).base.map(function (
            i
          ) {
            t._targetEl.classList.add(i);
          }),
          (this._handleEscapeKey = function (i) {
            i.key === "Escape" && t.isVisible() && t.hide();
          }),
          document.addEventListener("keydown", this._handleEscapeKey),
          (this._initialized = !0));
      }),
      (e.prototype.destroy = function () {
        this._initialized &&
          (this.removeAllEventListenerInstances(),
          this._destroyBackdropEl(),
          document.removeEventListener("keydown", this._handleEscapeKey),
          (this._initialized = !1));
      }),
      (e.prototype.removeInstance = function () {
        w.removeInstance("Drawer", this._instanceId);
      }),
      (e.prototype.destroyAndRemoveInstance = function () {
        this.destroy(), this.removeInstance();
      }),
      (e.prototype.hide = function () {
        var t = this;
        this._options.edge
          ? (this._getPlacementClasses(
              this._options.placement + "-edge"
            ).active.map(function (i) {
              t._targetEl.classList.remove(i);
            }),
            this._getPlacementClasses(
              this._options.placement + "-edge"
            ).inactive.map(function (i) {
              t._targetEl.classList.add(i);
            }))
          : (this._getPlacementClasses(this._options.placement).active.map(
              function (i) {
                t._targetEl.classList.remove(i);
              }
            ),
            this._getPlacementClasses(this._options.placement).inactive.map(
              function (i) {
                t._targetEl.classList.add(i);
              }
            )),
          this._targetEl.setAttribute("aria-hidden", "true"),
          this._targetEl.removeAttribute("aria-modal"),
          this._targetEl.removeAttribute("role"),
          this._options.bodyScrolling ||
            document.body.classList.remove("overflow-hidden"),
          this._options.backdrop && this._destroyBackdropEl(),
          (this._visible = !1),
          this._options.onHide(this);
      }),
      (e.prototype.show = function () {
        var t = this;
        this._options.edge
          ? (this._getPlacementClasses(
              this._options.placement + "-edge"
            ).active.map(function (i) {
              t._targetEl.classList.add(i);
            }),
            this._getPlacementClasses(
              this._options.placement + "-edge"
            ).inactive.map(function (i) {
              t._targetEl.classList.remove(i);
            }))
          : (this._getPlacementClasses(this._options.placement).active.map(
              function (i) {
                t._targetEl.classList.add(i);
              }
            ),
            this._getPlacementClasses(this._options.placement).inactive.map(
              function (i) {
                t._targetEl.classList.remove(i);
              }
            )),
          this._targetEl.setAttribute("aria-modal", "true"),
          this._targetEl.setAttribute("role", "dialog"),
          this._targetEl.removeAttribute("aria-hidden"),
          this._options.bodyScrolling ||
            document.body.classList.add("overflow-hidden"),
          this._options.backdrop && this._createBackdrop(),
          (this._visible = !0),
          this._options.onShow(this);
      }),
      (e.prototype.toggle = function () {
        this.isVisible() ? this.hide() : this.show();
      }),
      (e.prototype._createBackdrop = function () {
        var t,
          i = this;
        if (!this._visible) {
          var n = document.createElement("div");
          n.setAttribute("drawer-backdrop", ""),
            (t = n.classList).add.apply(
              t,
              this._options.backdropClasses.split(" ")
            ),
            document.querySelector("body").append(n),
            n.addEventListener("click", function () {
              i.hide();
            });
        }
      }),
      (e.prototype._destroyBackdropEl = function () {
        this._visible && document.querySelector("[drawer-backdrop]").remove();
      }),
      (e.prototype._getPlacementClasses = function (t) {
        switch (t) {
          case "top":
            return {
              base: ["top-0", "left-0", "right-0"],
              active: ["transform-none"],
              inactive: ["-translate-y-full"],
            };
          case "right":
            return {
              base: ["right-0", "top-0"],
              active: ["transform-none"],
              inactive: ["translate-x-full"],
            };
          case "bottom":
            return {
              base: ["bottom-0", "left-0", "right-0"],
              active: ["transform-none"],
              inactive: ["translate-y-full"],
            };
          case "left":
            return {
              base: ["left-0", "top-0"],
              active: ["transform-none"],
              inactive: ["-translate-x-full"],
            };
          case "bottom-edge":
            return {
              base: ["left-0", "top-0"],
              active: ["transform-none"],
              inactive: ["translate-y-full", this._options.edgeOffset],
            };
          default:
            return {
              base: ["left-0", "top-0"],
              active: ["transform-none"],
              inactive: ["-translate-x-full"],
            };
        }
      }),
      (e.prototype.isHidden = function () {
        return !this._visible;
      }),
      (e.prototype.isVisible = function () {
        return this._visible;
      }),
      (e.prototype.addEventListenerInstance = function (t, i, n) {
        this._eventListenerInstances.push({ element: t, type: i, handler: n });
      }),
      (e.prototype.removeAllEventListenerInstances = function () {
        this._eventListenerInstances.map(function (t) {
          t.element.removeEventListener(t.type, t.handler);
        }),
          (this._eventListenerInstances = []);
      }),
      (e.prototype.getAllEventListenerInstances = function () {
        return this._eventListenerInstances;
      }),
      e
    );
  })();
function Ke() {
  document.querySelectorAll("[data-drawer-target]").forEach(function (e) {
    var t = e.getAttribute("data-drawer-target"),
      i = document.getElementById(t);
    if (i) {
      var n = e.getAttribute("data-drawer-placement"),
        r = e.getAttribute("data-drawer-body-scrolling"),
        s = e.getAttribute("data-drawer-backdrop"),
        o = e.getAttribute("data-drawer-edge"),
        a = e.getAttribute("data-drawer-edge-offset");
      new vn(i, {
        placement: n || ct.placement,
        bodyScrolling: r ? r === "true" : ct.bodyScrolling,
        backdrop: s ? s === "true" : ct.backdrop,
        edge: o ? o === "true" : ct.edge,
        edgeOffset: a || ct.edgeOffset,
      });
    } else console.error("Drawer with id ".concat(t, " not found. Are you sure that the data-drawer-target attribute points to the correct drawer id?"));
  }),
    document.querySelectorAll("[data-drawer-toggle]").forEach(function (e) {
      var t = e.getAttribute("data-drawer-toggle"),
        i = document.getElementById(t);
      if (i) {
        var n = w.getInstance("Drawer", t);
        if (n) {
          var r = function () {
            n.toggle();
          };
          e.addEventListener("click", r),
            n.addEventListenerInstance(e, "click", r);
        } else
          console.error(
            "Drawer with id ".concat(
              t,
              " has not been initialized. Please initialize it using the data-drawer-target attribute."
            )
          );
      } else console.error("Drawer with id ".concat(t, " not found. Are you sure that the data-drawer-target attribute points to the correct drawer id?"));
    }),
    document
      .querySelectorAll("[data-drawer-dismiss], [data-drawer-hide]")
      .forEach(function (e) {
        var t = e.getAttribute("data-drawer-dismiss")
            ? e.getAttribute("data-drawer-dismiss")
            : e.getAttribute("data-drawer-hide"),
          i = document.getElementById(t);
        if (i) {
          var n = w.getInstance("Drawer", t);
          if (n) {
            var r = function () {
              n.hide();
            };
            e.addEventListener("click", r),
              n.addEventListenerInstance(e, "click", r);
          } else
            console.error(
              "Drawer with id ".concat(
                t,
                " has not been initialized. Please initialize it using the data-drawer-target attribute."
              )
            );
        } else console.error("Drawer with id ".concat(t, " not found. Are you sure that the data-drawer-target attribute points to the correct drawer id"));
      }),
    document.querySelectorAll("[data-drawer-show]").forEach(function (e) {
      var t = e.getAttribute("data-drawer-show"),
        i = document.getElementById(t);
      if (i) {
        var n = w.getInstance("Drawer", t);
        if (n) {
          var r = function () {
            n.show();
          };
          e.addEventListener("click", r),
            n.addEventListenerInstance(e, "click", r);
        } else
          console.error(
            "Drawer with id ".concat(
              t,
              " has not been initialized. Please initialize it using the data-drawer-target attribute."
            )
          );
      } else console.error("Drawer with id ".concat(t, " not found. Are you sure that the data-drawer-target attribute points to the correct drawer id?"));
    });
}
typeof window < "u" && ((window.Drawer = vn), (window.initDrawers = Ke));
var ee = function () {
    return (
      (ee =
        Object.assign ||
        function (e) {
          for (var t, i = 1, n = arguments.length; i < n; i++) {
            t = arguments[i];
            for (var r in t)
              Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
          }
          return e;
        }),
      ee.apply(this, arguments)
    );
  },
  Ti = {
    defaultTabId: null,
    activeClasses:
      "text-blue-600 hover:text-blue-600 dark:text-blue-500 dark:hover:text-blue-500 border-blue-600 dark:border-blue-500",
    inactiveClasses:
      "dark:border-transparent text-gray-500 hover:text-gray-600 dark:text-gray-400 border-gray-100 hover:border-gray-300 dark:border-gray-700 dark:hover:text-gray-300",
    onShow: function () {},
  },
  ro = { id: null, override: !0 },
  mn = (function () {
    function e(t, i, n, r) {
      t === void 0 && (t = null),
        i === void 0 && (i = []),
        n === void 0 && (n = Ti),
        r === void 0 && (r = ro),
        (this._instanceId = r.id ? r.id : t.id),
        (this._tabsEl = t),
        (this._items = i),
        (this._activeTab = n ? this.getTab(n.defaultTabId) : null),
        (this._options = ee(ee({}, Ti), n)),
        (this._initialized = !1),
        this.init(),
        w.addInstance("Tabs", this, this._tabsEl.id, !0),
        w.addInstance("Tabs", this, this._instanceId, r.override);
    }
    return (
      (e.prototype.init = function () {
        var t = this;
        this._items.length &&
          !this._initialized &&
          (this._activeTab || this.setActiveTab(this._items[0]),
          this.show(this._activeTab.id, !0),
          this._items.map(function (i) {
            i.triggerEl.addEventListener("click", function () {
              t.show(i.id);
            });
          }));
      }),
      (e.prototype.destroy = function () {
        this._initialized && (this._initialized = !1);
      }),
      (e.prototype.removeInstance = function () {
        this.destroy(), w.removeInstance("Tabs", this._instanceId);
      }),
      (e.prototype.destroyAndRemoveInstance = function () {
        this.destroy(), this.removeInstance();
      }),
      (e.prototype.getActiveTab = function () {
        return this._activeTab;
      }),
      (e.prototype.setActiveTab = function (t) {
        this._activeTab = t;
      }),
      (e.prototype.getTab = function (t) {
        return this._items.filter(function (i) {
          return i.id === t;
        })[0];
      }),
      (e.prototype.show = function (t, i) {
        var n,
          r,
          s = this;
        i === void 0 && (i = !1);
        var o = this.getTab(t);
        (o === this._activeTab && !i) ||
          (this._items.map(function (a) {
            var c, f;
            a !== o &&
              ((c = a.triggerEl.classList).remove.apply(
                c,
                s._options.activeClasses.split(" ")
              ),
              (f = a.triggerEl.classList).add.apply(
                f,
                s._options.inactiveClasses.split(" ")
              ),
              a.targetEl.classList.add("hidden"),
              a.triggerEl.setAttribute("aria-selected", "false"));
          }),
          (n = o.triggerEl.classList).add.apply(
            n,
            this._options.activeClasses.split(" ")
          ),
          (r = o.triggerEl.classList).remove.apply(
            r,
            this._options.inactiveClasses.split(" ")
          ),
          o.triggerEl.setAttribute("aria-selected", "true"),
          o.targetEl.classList.remove("hidden"),
          this.setActiveTab(o),
          this._options.onShow(this, o));
      }),
      e
    );
  })();
function Xe() {
  document.querySelectorAll("[data-tabs-toggle]").forEach(function (e) {
    var t = [],
      i = null;
    e.querySelectorAll('[role="tab"]').forEach(function (n) {
      var r = n.getAttribute("aria-selected") === "true",
        s = {
          id: n.getAttribute("data-tabs-target"),
          triggerEl: n,
          targetEl: document.querySelector(n.getAttribute("data-tabs-target")),
        };
      t.push(s), r && (i = s.id);
    }),
      new mn(e, t, { defaultTabId: i });
  });
}
typeof window < "u" && ((window.Tabs = mn), (window.initTabs = Xe));
var Z = function () {
    return (
      (Z =
        Object.assign ||
        function (e) {
          for (var t, i = 1, n = arguments.length; i < n; i++) {
            t = arguments[i];
            for (var r in t)
              Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
          }
          return e;
        }),
      Z.apply(this, arguments)
    );
  },
  zt = function (e, t, i) {
    if (i || arguments.length === 2)
      for (var n = 0, r = t.length, s; n < r; n++)
        (s || !(n in t)) &&
          (s || (s = Array.prototype.slice.call(t, 0, n)), (s[n] = t[n]));
    return e.concat(s || Array.prototype.slice.call(t));
  },
  ie = {
    placement: "top",
    triggerType: "hover",
    onShow: function () {},
    onHide: function () {},
    onToggle: function () {},
  },
  so = { id: null, override: !0 },
  gn = (function () {
    function e(t, i, n, r) {
      t === void 0 && (t = null),
        i === void 0 && (i = null),
        n === void 0 && (n = ie),
        r === void 0 && (r = so),
        (this._instanceId = r.id ? r.id : t.id),
        (this._targetEl = t),
        (this._triggerEl = i),
        (this._options = Z(Z({}, ie), n)),
        (this._popperInstance = null),
        (this._visible = !1),
        (this._initialized = !1),
        this.init(),
        w.addInstance("Tooltip", this, this._instanceId, r.override);
    }
    return (
      (e.prototype.init = function () {
        this._triggerEl &&
          this._targetEl &&
          !this._initialized &&
          (this._setupEventListeners(),
          (this._popperInstance = this._createPopperInstance()),
          (this._initialized = !0));
      }),
      (e.prototype.destroy = function () {
        var t = this;
        if (this._initialized) {
          var i = this._getTriggerEvents();
          i.showEvents.forEach(function (n) {
            t._triggerEl.removeEventListener(n, t._showHandler);
          }),
            i.hideEvents.forEach(function (n) {
              t._triggerEl.removeEventListener(n, t._hideHandler);
            }),
            this._removeKeydownListener(),
            this._removeClickOutsideListener(),
            this._popperInstance && this._popperInstance.destroy(),
            (this._initialized = !1);
        }
      }),
      (e.prototype.removeInstance = function () {
        w.removeInstance("Tooltip", this._instanceId);
      }),
      (e.prototype.destroyAndRemoveInstance = function () {
        this.destroy(), this.removeInstance();
      }),
      (e.prototype._setupEventListeners = function () {
        var t = this,
          i = this._getTriggerEvents();
        (this._showHandler = function () {
          t.show();
        }),
          (this._hideHandler = function () {
            t.hide();
          }),
          i.showEvents.forEach(function (n) {
            t._triggerEl.addEventListener(n, t._showHandler);
          }),
          i.hideEvents.forEach(function (n) {
            t._triggerEl.addEventListener(n, t._hideHandler);
          });
      }),
      (e.prototype._createPopperInstance = function () {
        return We(this._triggerEl, this._targetEl, {
          placement: this._options.placement,
          modifiers: [{ name: "offset", options: { offset: [0, 8] } }],
        });
      }),
      (e.prototype._getTriggerEvents = function () {
        switch (this._options.triggerType) {
          case "hover":
            return {
              showEvents: ["mouseenter", "focus"],
              hideEvents: ["mouseleave", "blur"],
            };
          case "click":
            return {
              showEvents: ["click", "focus"],
              hideEvents: ["focusout", "blur"],
            };
          case "none":
            return { showEvents: [], hideEvents: [] };
          default:
            return {
              showEvents: ["mouseenter", "focus"],
              hideEvents: ["mouseleave", "blur"],
            };
        }
      }),
      (e.prototype._setupKeydownListener = function () {
        var t = this;
        (this._keydownEventListener = function (i) {
          i.key === "Escape" && t.hide();
        }),
          document.body.addEventListener(
            "keydown",
            this._keydownEventListener,
            !0
          );
      }),
      (e.prototype._removeKeydownListener = function () {
        document.body.removeEventListener(
          "keydown",
          this._keydownEventListener,
          !0
        );
      }),
      (e.prototype._setupClickOutsideListener = function () {
        var t = this;
        (this._clickOutsideEventListener = function (i) {
          t._handleClickOutside(i, t._targetEl);
        }),
          document.body.addEventListener(
            "click",
            this._clickOutsideEventListener,
            !0
          );
      }),
      (e.prototype._removeClickOutsideListener = function () {
        document.body.removeEventListener(
          "click",
          this._clickOutsideEventListener,
          !0
        );
      }),
      (e.prototype._handleClickOutside = function (t, i) {
        var n = t.target;
        n !== i &&
          !i.contains(n) &&
          !this._triggerEl.contains(n) &&
          this.isVisible() &&
          this.hide();
      }),
      (e.prototype.isVisible = function () {
        return this._visible;
      }),
      (e.prototype.toggle = function () {
        this.isVisible() ? this.hide() : this.show();
      }),
      (e.prototype.show = function () {
        this._targetEl.classList.remove("opacity-0", "invisible"),
          this._targetEl.classList.add("opacity-100", "visible"),
          this._popperInstance.setOptions(function (t) {
            return Z(Z({}, t), {
              modifiers: zt(
                zt([], t.modifiers, !0),
                [{ name: "eventListeners", enabled: !0 }],
                !1
              ),
            });
          }),
          this._setupClickOutsideListener(),
          this._setupKeydownListener(),
          this._popperInstance.update(),
          (this._visible = !0),
          this._options.onShow(this);
      }),
      (e.prototype.hide = function () {
        this._targetEl.classList.remove("opacity-100", "visible"),
          this._targetEl.classList.add("opacity-0", "invisible"),
          this._popperInstance.setOptions(function (t) {
            return Z(Z({}, t), {
              modifiers: zt(
                zt([], t.modifiers, !0),
                [{ name: "eventListeners", enabled: !1 }],
                !1
              ),
            });
          }),
          this._removeClickOutsideListener(),
          this._removeKeydownListener(),
          (this._visible = !1),
          this._options.onHide(this);
      }),
      e
    );
  })();
function Ge() {
  document.querySelectorAll("[data-tooltip-target]").forEach(function (e) {
    var t = e.getAttribute("data-tooltip-target"),
      i = document.getElementById(t);
    if (i) {
      var n = e.getAttribute("data-tooltip-trigger"),
        r = e.getAttribute("data-tooltip-placement");
      new gn(i, e, {
        placement: r || ie.placement,
        triggerType: n || ie.triggerType,
      });
    } else console.error('The tooltip element with id "'.concat(t, '" does not exist. Please check the data-tooltip-target attribute.'));
  });
}
typeof window < "u" && ((window.Tooltip = gn), (window.initTooltips = Ge));
var tt = function () {
    return (
      (tt =
        Object.assign ||
        function (e) {
          for (var t, i = 1, n = arguments.length; i < n; i++) {
            t = arguments[i];
            for (var r in t)
              Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
          }
          return e;
        }),
      tt.apply(this, arguments)
    );
  },
  Ft = function (e, t, i) {
    if (i || arguments.length === 2)
      for (var n = 0, r = t.length, s; n < r; n++)
        (s || !(n in t)) &&
          (s || (s = Array.prototype.slice.call(t, 0, n)), (s[n] = t[n]));
    return e.concat(s || Array.prototype.slice.call(t));
  },
  Lt = {
    placement: "top",
    offset: 10,
    triggerType: "hover",
    onShow: function () {},
    onHide: function () {},
    onToggle: function () {},
  },
  oo = { id: null, override: !0 },
  yn = (function () {
    function e(t, i, n, r) {
      t === void 0 && (t = null),
        i === void 0 && (i = null),
        n === void 0 && (n = Lt),
        r === void 0 && (r = oo),
        (this._instanceId = r.id ? r.id : t.id),
        (this._targetEl = t),
        (this._triggerEl = i),
        (this._options = tt(tt({}, Lt), n)),
        (this._popperInstance = null),
        (this._visible = !1),
        (this._initialized = !1),
        this.init(),
        w.addInstance(
          "Popover",
          this,
          r.id ? r.id : this._targetEl.id,
          r.override
        );
    }
    return (
      (e.prototype.init = function () {
        this._triggerEl &&
          this._targetEl &&
          !this._initialized &&
          (this._setupEventListeners(),
          (this._popperInstance = this._createPopperInstance()),
          (this._initialized = !0));
      }),
      (e.prototype.destroy = function () {
        var t = this;
        if (this._initialized) {
          var i = this._getTriggerEvents();
          i.showEvents.forEach(function (n) {
            t._triggerEl.removeEventListener(n, t._showHandler),
              t._targetEl.removeEventListener(n, t._showHandler);
          }),
            i.hideEvents.forEach(function (n) {
              t._triggerEl.removeEventListener(n, t._hideHandler),
                t._targetEl.removeEventListener(n, t._hideHandler);
            }),
            this._removeKeydownListener(),
            this._removeClickOutsideListener(),
            this._popperInstance && this._popperInstance.destroy(),
            (this._initialized = !1);
        }
      }),
      (e.prototype.removeInstance = function () {
        w.removeInstance("Popover", this._instanceId);
      }),
      (e.prototype.destroyAndRemoveInstance = function () {
        this.destroy(), this.removeInstance();
      }),
      (e.prototype._setupEventListeners = function () {
        var t = this,
          i = this._getTriggerEvents();
        (this._showHandler = function () {
          t.show();
        }),
          (this._hideHandler = function () {
            setTimeout(function () {
              t._targetEl.matches(":hover") || t.hide();
            }, 100);
          }),
          i.showEvents.forEach(function (n) {
            t._triggerEl.addEventListener(n, t._showHandler),
              t._targetEl.addEventListener(n, t._showHandler);
          }),
          i.hideEvents.forEach(function (n) {
            t._triggerEl.addEventListener(n, t._hideHandler),
              t._targetEl.addEventListener(n, t._hideHandler);
          });
      }),
      (e.prototype._createPopperInstance = function () {
        return We(this._triggerEl, this._targetEl, {
          placement: this._options.placement,
          modifiers: [
            { name: "offset", options: { offset: [0, this._options.offset] } },
          ],
        });
      }),
      (e.prototype._getTriggerEvents = function () {
        switch (this._options.triggerType) {
          case "hover":
            return {
              showEvents: ["mouseenter", "focus"],
              hideEvents: ["mouseleave", "blur"],
            };
          case "click":
            return {
              showEvents: ["click", "focus"],
              hideEvents: ["focusout", "blur"],
            };
          case "none":
            return { showEvents: [], hideEvents: [] };
          default:
            return {
              showEvents: ["mouseenter", "focus"],
              hideEvents: ["mouseleave", "blur"],
            };
        }
      }),
      (e.prototype._setupKeydownListener = function () {
        var t = this;
        (this._keydownEventListener = function (i) {
          i.key === "Escape" && t.hide();
        }),
          document.body.addEventListener(
            "keydown",
            this._keydownEventListener,
            !0
          );
      }),
      (e.prototype._removeKeydownListener = function () {
        document.body.removeEventListener(
          "keydown",
          this._keydownEventListener,
          !0
        );
      }),
      (e.prototype._setupClickOutsideListener = function () {
        var t = this;
        (this._clickOutsideEventListener = function (i) {
          t._handleClickOutside(i, t._targetEl);
        }),
          document.body.addEventListener(
            "click",
            this._clickOutsideEventListener,
            !0
          );
      }),
      (e.prototype._removeClickOutsideListener = function () {
        document.body.removeEventListener(
          "click",
          this._clickOutsideEventListener,
          !0
        );
      }),
      (e.prototype._handleClickOutside = function (t, i) {
        var n = t.target;
        n !== i &&
          !i.contains(n) &&
          !this._triggerEl.contains(n) &&
          this.isVisible() &&
          this.hide();
      }),
      (e.prototype.isVisible = function () {
        return this._visible;
      }),
      (e.prototype.toggle = function () {
        this.isVisible() ? this.hide() : this.show(),
          this._options.onToggle(this);
      }),
      (e.prototype.show = function () {
        this._targetEl.classList.remove("opacity-0", "invisible"),
          this._targetEl.classList.add("opacity-100", "visible"),
          this._popperInstance.setOptions(function (t) {
            return tt(tt({}, t), {
              modifiers: Ft(
                Ft([], t.modifiers, !0),
                [{ name: "eventListeners", enabled: !0 }],
                !1
              ),
            });
          }),
          this._setupClickOutsideListener(),
          this._setupKeydownListener(),
          this._popperInstance.update(),
          (this._visible = !0),
          this._options.onShow(this);
      }),
      (e.prototype.hide = function () {
        this._targetEl.classList.remove("opacity-100", "visible"),
          this._targetEl.classList.add("opacity-0", "invisible"),
          this._popperInstance.setOptions(function (t) {
            return tt(tt({}, t), {
              modifiers: Ft(
                Ft([], t.modifiers, !0),
                [{ name: "eventListeners", enabled: !1 }],
                !1
              ),
            });
          }),
          this._removeClickOutsideListener(),
          this._removeKeydownListener(),
          (this._visible = !1),
          this._options.onHide(this);
      }),
      e
    );
  })();
function Ye() {
  document.querySelectorAll("[data-popover-target]").forEach(function (e) {
    var t = e.getAttribute("data-popover-target"),
      i = document.getElementById(t);
    if (i) {
      var n = e.getAttribute("data-popover-trigger"),
        r = e.getAttribute("data-popover-placement"),
        s = e.getAttribute("data-popover-offset");
      new yn(i, e, {
        placement: r || Lt.placement,
        offset: s ? parseInt(s) : Lt.offset,
        triggerType: n || Lt.triggerType,
      });
    } else console.error('The popover element with id "'.concat(t, '" does not exist. Please check the data-popover-target attribute.'));
  });
}
typeof window < "u" && ((window.Popover = yn), (window.initPopovers = Ye));
var ne = function () {
    return (
      (ne =
        Object.assign ||
        function (e) {
          for (var t, i = 1, n = arguments.length; i < n; i++) {
            t = arguments[i];
            for (var r in t)
              Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
          }
          return e;
        }),
      ne.apply(this, arguments)
    );
  },
  Oe = {
    triggerType: "hover",
    onShow: function () {},
    onHide: function () {},
    onToggle: function () {},
  },
  ao = { id: null, override: !0 },
  _n = (function () {
    function e(t, i, n, r, s) {
      t === void 0 && (t = null),
        i === void 0 && (i = null),
        n === void 0 && (n = null),
        r === void 0 && (r = Oe),
        s === void 0 && (s = ao),
        (this._instanceId = s.id ? s.id : n.id),
        (this._parentEl = t),
        (this._triggerEl = i),
        (this._targetEl = n),
        (this._options = ne(ne({}, Oe), r)),
        (this._visible = !1),
        (this._initialized = !1),
        this.init(),
        w.addInstance("Dial", this, this._instanceId, s.override);
    }
    return (
      (e.prototype.init = function () {
        var t = this;
        if (this._triggerEl && this._targetEl && !this._initialized) {
          var i = this._getTriggerEventTypes(this._options.triggerType);
          (this._showEventHandler = function () {
            t.show();
          }),
            i.showEvents.forEach(function (n) {
              t._triggerEl.addEventListener(n, t._showEventHandler),
                t._targetEl.addEventListener(n, t._showEventHandler);
            }),
            (this._hideEventHandler = function () {
              t._parentEl.matches(":hover") || t.hide();
            }),
            i.hideEvents.forEach(function (n) {
              t._parentEl.addEventListener(n, t._hideEventHandler);
            }),
            (this._initialized = !0);
        }
      }),
      (e.prototype.destroy = function () {
        var t = this;
        if (this._initialized) {
          var i = this._getTriggerEventTypes(this._options.triggerType);
          i.showEvents.forEach(function (n) {
            t._triggerEl.removeEventListener(n, t._showEventHandler),
              t._targetEl.removeEventListener(n, t._showEventHandler);
          }),
            i.hideEvents.forEach(function (n) {
              t._parentEl.removeEventListener(n, t._hideEventHandler);
            }),
            (this._initialized = !1);
        }
      }),
      (e.prototype.removeInstance = function () {
        w.removeInstance("Dial", this._instanceId);
      }),
      (e.prototype.destroyAndRemoveInstance = function () {
        this.destroy(), this.removeInstance();
      }),
      (e.prototype.hide = function () {
        this._targetEl.classList.add("hidden"),
          this._triggerEl &&
            this._triggerEl.setAttribute("aria-expanded", "false"),
          (this._visible = !1),
          this._options.onHide(this);
      }),
      (e.prototype.show = function () {
        this._targetEl.classList.remove("hidden"),
          this._triggerEl &&
            this._triggerEl.setAttribute("aria-expanded", "true"),
          (this._visible = !0),
          this._options.onShow(this);
      }),
      (e.prototype.toggle = function () {
        this._visible ? this.hide() : this.show();
      }),
      (e.prototype.isHidden = function () {
        return !this._visible;
      }),
      (e.prototype.isVisible = function () {
        return this._visible;
      }),
      (e.prototype._getTriggerEventTypes = function (t) {
        switch (t) {
          case "hover":
            return {
              showEvents: ["mouseenter", "focus"],
              hideEvents: ["mouseleave", "blur"],
            };
          case "click":
            return {
              showEvents: ["click", "focus"],
              hideEvents: ["focusout", "blur"],
            };
          case "none":
            return { showEvents: [], hideEvents: [] };
          default:
            return {
              showEvents: ["mouseenter", "focus"],
              hideEvents: ["mouseleave", "blur"],
            };
        }
      }),
      e
    );
  })();
function Qe() {
  document.querySelectorAll("[data-dial-init]").forEach(function (e) {
    var t = e.querySelector("[data-dial-toggle]");
    if (t) {
      var i = t.getAttribute("data-dial-toggle"),
        n = document.getElementById(i);
      if (n) {
        var r = t.getAttribute("data-dial-trigger");
        new _n(e, t, n, { triggerType: r || Oe.triggerType });
      } else
        console.error(
          "Dial with id ".concat(
            i,
            " does not exist. Are you sure that the data-dial-toggle attribute points to the correct modal id?"
          )
        );
    } else console.error("Dial with id ".concat(e.id, " does not have a trigger element. Are you sure that the data-dial-toggle attribute exists?"));
  });
}
typeof window < "u" && ((window.Dial = _n), (window.initDials = Qe));
var re = function () {
    return (
      (re =
        Object.assign ||
        function (e) {
          for (var t, i = 1, n = arguments.length; i < n; i++) {
            t = arguments[i];
            for (var r in t)
              Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
          }
          return e;
        }),
      re.apply(this, arguments)
    );
  },
  Ri = {
    minValue: null,
    maxValue: null,
    onIncrement: function () {},
    onDecrement: function () {},
  },
  co = { id: null, override: !0 },
  wn = (function () {
    function e(t, i, n, r, s) {
      t === void 0 && (t = null),
        i === void 0 && (i = null),
        n === void 0 && (n = null),
        r === void 0 && (r = Ri),
        s === void 0 && (s = co),
        (this._instanceId = s.id ? s.id : t.id),
        (this._targetEl = t),
        (this._incrementEl = i),
        (this._decrementEl = n),
        (this._options = re(re({}, Ri), r)),
        (this._initialized = !1),
        this.init(),
        w.addInstance("InputCounter", this, this._instanceId, s.override);
    }
    return (
      (e.prototype.init = function () {
        var t = this;
        this._targetEl &&
          !this._initialized &&
          ((this._inputHandler = function (i) {
            {
              var n = i.target;
              /^\d*$/.test(n.value) ||
                (n.value = n.value.replace(/[^\d]/g, "")),
                t._options.maxValue !== null &&
                  parseInt(n.value) > t._options.maxValue &&
                  (n.value = t._options.maxValue.toString()),
                t._options.minValue !== null &&
                  parseInt(n.value) < t._options.minValue &&
                  (n.value = t._options.minValue.toString());
            }
          }),
          (this._incrementClickHandler = function () {
            t.increment();
          }),
          (this._decrementClickHandler = function () {
            t.decrement();
          }),
          this._targetEl.addEventListener("input", this._inputHandler),
          this._incrementEl &&
            this._incrementEl.addEventListener(
              "click",
              this._incrementClickHandler
            ),
          this._decrementEl &&
            this._decrementEl.addEventListener(
              "click",
              this._decrementClickHandler
            ),
          (this._initialized = !0));
      }),
      (e.prototype.destroy = function () {
        this._targetEl &&
          this._initialized &&
          (this._targetEl.removeEventListener("input", this._inputHandler),
          this._incrementEl &&
            this._incrementEl.removeEventListener(
              "click",
              this._incrementClickHandler
            ),
          this._decrementEl &&
            this._decrementEl.removeEventListener(
              "click",
              this._decrementClickHandler
            ),
          (this._initialized = !1));
      }),
      (e.prototype.removeInstance = function () {
        w.removeInstance("InputCounter", this._instanceId);
      }),
      (e.prototype.destroyAndRemoveInstance = function () {
        this.destroy(), this.removeInstance();
      }),
      (e.prototype.getCurrentValue = function () {
        return parseInt(this._targetEl.value) || 0;
      }),
      (e.prototype.increment = function () {
        (this._options.maxValue !== null &&
          this.getCurrentValue() >= this._options.maxValue) ||
          ((this._targetEl.value = (this.getCurrentValue() + 1).toString()),
          this._options.onIncrement(this));
      }),
      (e.prototype.decrement = function () {
        (this._options.minValue !== null &&
          this.getCurrentValue() <= this._options.minValue) ||
          ((this._targetEl.value = (this.getCurrentValue() - 1).toString()),
          this._options.onDecrement(this));
      }),
      e
    );
  })();
function Ze() {
  document.querySelectorAll("[data-input-counter]").forEach(function (e) {
    var t = e.id,
      i = document.querySelector('[data-input-counter-increment="' + t + '"]'),
      n = document.querySelector('[data-input-counter-decrement="' + t + '"]'),
      r = e.getAttribute("data-input-counter-min"),
      s = e.getAttribute("data-input-counter-max");
    e
      ? w.instanceExists("InputCounter", e.getAttribute("id")) ||
        new wn(e, i || null, n || null, {
          minValue: r ? parseInt(r) : null,
          maxValue: s ? parseInt(s) : null,
        })
      : console.error(
          'The target element with id "'.concat(
            t,
            '" does not exist. Please check the data-input-counter attribute.'
          )
        );
  });
}
typeof window < "u" &&
  ((window.InputCounter = wn), (window.initInputCounters = Ze));
function lo() {
  De(), He(), je(), Be(), $e(), Je(), Ke(), Xe(), Ge(), Ye(), Qe(), Ze();
}
typeof window < "u" && (window.initFlowbite = lo);
var uo = new Vr("load", [De, He, je, Be, $e, Je, Ke, Xe, Ge, Ye, Qe, Ze]);
uo.init();
