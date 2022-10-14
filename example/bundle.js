(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));

  // example/countries.js
  var require_countries = __commonJS({
    "example/countries.js"(exports, module) {
      var countries = ["Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Anguilla", "Antigua & Barbuda", "Argentina", "Armenia", "Aruba", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bermuda", "Bhutan", "Bolivia", "Bosnia & Herzegovina", "Botswana", "Brazil", "British Virgin Islands", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cambodia", "Cameroon", "Cape Verde", "Cayman Islands", "Chad", "Chile", "China", "Colombia", "Congo", "Cook Islands", "Costa Rica", "Cote D Ivoire", "Croatia", "Cruise Ship", "Cuba", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Estonia", "Ethiopia", "Falkland Islands", "Faroe Islands", "Fiji", "Finland", "France", "French Polynesia", "French West Indies", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Gibraltar", "Greece", "Greenland", "Grenada", "Guam", "Guatemala", "Guernsey", "Guinea", "Guinea Bissau", "Guyana", "Haiti", "Honduras", "Hong Kong", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Isle of Man", "Israel", "Italy", "Jamaica", "Japan", "Jersey", "Jordan", "Kazakhstan", "Kenya", "Kuwait", "Kyrgyz Republic", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Macau", "Macedonia", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Mauritania", "Mauritius", "Mexico", "Moldova", "Monaco", "Mongolia", "Montenegro", "Montserrat", "Morocco", "Mozambique", "Namibia", "Nepal", "Netherlands", "Netherlands Antilles", "New Caledonia", "New Zealand", "Nicaragua", "Niger", "Nigeria", "Norway", "Oman", "Pakistan", "Palestine", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Puerto Rico", "Qatar", "Reunion", "Romania", "Russia", "Rwanda", "Saint Pierre & Miquelon", "Samoa", "San Marino", "Satellite", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "South Africa", "South Korea", "Spain", "Sri Lanka", "St Kitts & Nevis", "St Lucia", "St Vincent", "St. Lucia", "Sudan", "Suriname", "Swaziland", "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Timor L'Este", "Togo", "Tonga", "Trinidad & Tobago", "Tunisia", "Turkey", "Turkmenistan", "Turks & Caicos", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States of America", "Uruguay", "Uzbekistan", "Venezuela", "Vietnam", "Virgin Islands (US)", "Yemen", "Zambia", "Zimbabwe"];
      module.exports = countries.map((name, id) => ({ id, name }));
    }
  });

  // node_modules/preact/dist/preact.module.js
  var n;
  var l;
  var u;
  var i;
  var t;
  var o;
  var r;
  var f = {};
  var e = [];
  var c = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
  function s(n2, l3) {
    for (var u3 in l3)
      n2[u3] = l3[u3];
    return n2;
  }
  function a(n2) {
    var l3 = n2.parentNode;
    l3 && l3.removeChild(n2);
  }
  function h(l3, u3, i3) {
    var t3, o4, r3, f3 = {};
    for (r3 in u3)
      "key" == r3 ? t3 = u3[r3] : "ref" == r3 ? o4 = u3[r3] : f3[r3] = u3[r3];
    if (arguments.length > 2 && (f3.children = arguments.length > 3 ? n.call(arguments, 2) : i3), "function" == typeof l3 && null != l3.defaultProps)
      for (r3 in l3.defaultProps)
        void 0 === f3[r3] && (f3[r3] = l3.defaultProps[r3]);
    return v(l3, f3, t3, o4, null);
  }
  function v(n2, i3, t3, o4, r3) {
    var f3 = { type: n2, props: i3, key: t3, ref: o4, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: null == r3 ? ++u : r3 };
    return null == r3 && null != l.vnode && l.vnode(f3), f3;
  }
  function y() {
    return { current: null };
  }
  function p(n2) {
    return n2.children;
  }
  function d(n2, l3) {
    this.props = n2, this.context = l3;
  }
  function _(n2, l3) {
    if (null == l3)
      return n2.__ ? _(n2.__, n2.__.__k.indexOf(n2) + 1) : null;
    for (var u3; l3 < n2.__k.length; l3++)
      if (null != (u3 = n2.__k[l3]) && null != u3.__e)
        return u3.__e;
    return "function" == typeof n2.type ? _(n2) : null;
  }
  function k(n2) {
    var l3, u3;
    if (null != (n2 = n2.__) && null != n2.__c) {
      for (n2.__e = n2.__c.base = null, l3 = 0; l3 < n2.__k.length; l3++)
        if (null != (u3 = n2.__k[l3]) && null != u3.__e) {
          n2.__e = n2.__c.base = u3.__e;
          break;
        }
      return k(n2);
    }
  }
  function b(n2) {
    (!n2.__d && (n2.__d = true) && t.push(n2) && !g.__r++ || o !== l.debounceRendering) && ((o = l.debounceRendering) || setTimeout)(g);
  }
  function g() {
    for (var n2; g.__r = t.length; )
      n2 = t.sort(function(n3, l3) {
        return n3.__v.__b - l3.__v.__b;
      }), t = [], n2.some(function(n3) {
        var l3, u3, i3, t3, o4, r3;
        n3.__d && (o4 = (t3 = (l3 = n3).__v).__e, (r3 = l3.__P) && (u3 = [], (i3 = s({}, t3)).__v = t3.__v + 1, j(r3, t3, i3, l3.__n, void 0 !== r3.ownerSVGElement, null != t3.__h ? [o4] : null, u3, null == o4 ? _(t3) : o4, t3.__h), z(u3, t3), t3.__e != o4 && k(t3)));
      });
  }
  function w(n2, l3, u3, i3, t3, o4, r3, c3, s2, a3) {
    var h2, y3, d3, k3, b3, g3, w3, x = i3 && i3.__k || e, C2 = x.length;
    for (u3.__k = [], h2 = 0; h2 < l3.length; h2++)
      if (null != (k3 = u3.__k[h2] = null == (k3 = l3[h2]) || "boolean" == typeof k3 ? null : "string" == typeof k3 || "number" == typeof k3 || "bigint" == typeof k3 ? v(null, k3, null, null, k3) : Array.isArray(k3) ? v(p, { children: k3 }, null, null, null) : k3.__b > 0 ? v(k3.type, k3.props, k3.key, null, k3.__v) : k3)) {
        if (k3.__ = u3, k3.__b = u3.__b + 1, null === (d3 = x[h2]) || d3 && k3.key == d3.key && k3.type === d3.type)
          x[h2] = void 0;
        else
          for (y3 = 0; y3 < C2; y3++) {
            if ((d3 = x[y3]) && k3.key == d3.key && k3.type === d3.type) {
              x[y3] = void 0;
              break;
            }
            d3 = null;
          }
        j(n2, k3, d3 = d3 || f, t3, o4, r3, c3, s2, a3), b3 = k3.__e, (y3 = k3.ref) && d3.ref != y3 && (w3 || (w3 = []), d3.ref && w3.push(d3.ref, null, k3), w3.push(y3, k3.__c || b3, k3)), null != b3 ? (null == g3 && (g3 = b3), "function" == typeof k3.type && k3.__k === d3.__k ? k3.__d = s2 = m(k3, s2, n2) : s2 = A(n2, k3, d3, x, b3, s2), "function" == typeof u3.type && (u3.__d = s2)) : s2 && d3.__e == s2 && s2.parentNode != n2 && (s2 = _(d3));
      }
    for (u3.__e = g3, h2 = C2; h2--; )
      null != x[h2] && ("function" == typeof u3.type && null != x[h2].__e && x[h2].__e == u3.__d && (u3.__d = _(i3, h2 + 1)), N(x[h2], x[h2]));
    if (w3)
      for (h2 = 0; h2 < w3.length; h2++)
        M(w3[h2], w3[++h2], w3[++h2]);
  }
  function m(n2, l3, u3) {
    for (var i3, t3 = n2.__k, o4 = 0; t3 && o4 < t3.length; o4++)
      (i3 = t3[o4]) && (i3.__ = n2, l3 = "function" == typeof i3.type ? m(i3, l3, u3) : A(u3, i3, i3, t3, i3.__e, l3));
    return l3;
  }
  function A(n2, l3, u3, i3, t3, o4) {
    var r3, f3, e4;
    if (void 0 !== l3.__d)
      r3 = l3.__d, l3.__d = void 0;
    else if (null == u3 || t3 != o4 || null == t3.parentNode)
      n:
        if (null == o4 || o4.parentNode !== n2)
          n2.appendChild(t3), r3 = null;
        else {
          for (f3 = o4, e4 = 0; (f3 = f3.nextSibling) && e4 < i3.length; e4 += 2)
            if (f3 == t3)
              break n;
          n2.insertBefore(t3, o4), r3 = o4;
        }
    return void 0 !== r3 ? r3 : t3.nextSibling;
  }
  function C(n2, l3, u3, i3, t3) {
    var o4;
    for (o4 in u3)
      "children" === o4 || "key" === o4 || o4 in l3 || H(n2, o4, null, u3[o4], i3);
    for (o4 in l3)
      t3 && "function" != typeof l3[o4] || "children" === o4 || "key" === o4 || "value" === o4 || "checked" === o4 || u3[o4] === l3[o4] || H(n2, o4, l3[o4], u3[o4], i3);
  }
  function $(n2, l3, u3) {
    "-" === l3[0] ? n2.setProperty(l3, u3) : n2[l3] = null == u3 ? "" : "number" != typeof u3 || c.test(l3) ? u3 : u3 + "px";
  }
  function H(n2, l3, u3, i3, t3) {
    var o4;
    n:
      if ("style" === l3)
        if ("string" == typeof u3)
          n2.style.cssText = u3;
        else {
          if ("string" == typeof i3 && (n2.style.cssText = i3 = ""), i3)
            for (l3 in i3)
              u3 && l3 in u3 || $(n2.style, l3, "");
          if (u3)
            for (l3 in u3)
              i3 && u3[l3] === i3[l3] || $(n2.style, l3, u3[l3]);
        }
      else if ("o" === l3[0] && "n" === l3[1])
        o4 = l3 !== (l3 = l3.replace(/Capture$/, "")), l3 = l3.toLowerCase() in n2 ? l3.toLowerCase().slice(2) : l3.slice(2), n2.l || (n2.l = {}), n2.l[l3 + o4] = u3, u3 ? i3 || n2.addEventListener(l3, o4 ? T : I, o4) : n2.removeEventListener(l3, o4 ? T : I, o4);
      else if ("dangerouslySetInnerHTML" !== l3) {
        if (t3)
          l3 = l3.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
        else if ("href" !== l3 && "list" !== l3 && "form" !== l3 && "tabIndex" !== l3 && "download" !== l3 && l3 in n2)
          try {
            n2[l3] = null == u3 ? "" : u3;
            break n;
          } catch (n3) {
          }
        "function" == typeof u3 || (null != u3 && (false !== u3 || "a" === l3[0] && "r" === l3[1]) ? n2.setAttribute(l3, u3) : n2.removeAttribute(l3));
      }
  }
  function I(n2) {
    this.l[n2.type + false](l.event ? l.event(n2) : n2);
  }
  function T(n2) {
    this.l[n2.type + true](l.event ? l.event(n2) : n2);
  }
  function j(n2, u3, i3, t3, o4, r3, f3, e4, c3) {
    var a3, h2, v3, y3, _3, k3, b3, g3, m3, x, A2, C2, $2, H2 = u3.type;
    if (void 0 !== u3.constructor)
      return null;
    null != i3.__h && (c3 = i3.__h, e4 = u3.__e = i3.__e, u3.__h = null, r3 = [e4]), (a3 = l.__b) && a3(u3);
    try {
      n:
        if ("function" == typeof H2) {
          if (g3 = u3.props, m3 = (a3 = H2.contextType) && t3[a3.__c], x = a3 ? m3 ? m3.props.value : a3.__ : t3, i3.__c ? b3 = (h2 = u3.__c = i3.__c).__ = h2.__E : ("prototype" in H2 && H2.prototype.render ? u3.__c = h2 = new H2(g3, x) : (u3.__c = h2 = new d(g3, x), h2.constructor = H2, h2.render = O), m3 && m3.sub(h2), h2.props = g3, h2.state || (h2.state = {}), h2.context = x, h2.__n = t3, v3 = h2.__d = true, h2.__h = []), null == h2.__s && (h2.__s = h2.state), null != H2.getDerivedStateFromProps && (h2.__s == h2.state && (h2.__s = s({}, h2.__s)), s(h2.__s, H2.getDerivedStateFromProps(g3, h2.__s))), y3 = h2.props, _3 = h2.state, v3)
            null == H2.getDerivedStateFromProps && null != h2.componentWillMount && h2.componentWillMount(), null != h2.componentDidMount && h2.__h.push(h2.componentDidMount);
          else {
            if (null == H2.getDerivedStateFromProps && g3 !== y3 && null != h2.componentWillReceiveProps && h2.componentWillReceiveProps(g3, x), !h2.__e && null != h2.shouldComponentUpdate && false === h2.shouldComponentUpdate(g3, h2.__s, x) || u3.__v === i3.__v) {
              h2.props = g3, h2.state = h2.__s, u3.__v !== i3.__v && (h2.__d = false), h2.__v = u3, u3.__e = i3.__e, u3.__k = i3.__k, u3.__k.forEach(function(n3) {
                n3 && (n3.__ = u3);
              }), h2.__h.length && f3.push(h2);
              break n;
            }
            null != h2.componentWillUpdate && h2.componentWillUpdate(g3, h2.__s, x), null != h2.componentDidUpdate && h2.__h.push(function() {
              h2.componentDidUpdate(y3, _3, k3);
            });
          }
          if (h2.context = x, h2.props = g3, h2.__v = u3, h2.__P = n2, A2 = l.__r, C2 = 0, "prototype" in H2 && H2.prototype.render)
            h2.state = h2.__s, h2.__d = false, A2 && A2(u3), a3 = h2.render(h2.props, h2.state, h2.context);
          else
            do {
              h2.__d = false, A2 && A2(u3), a3 = h2.render(h2.props, h2.state, h2.context), h2.state = h2.__s;
            } while (h2.__d && ++C2 < 25);
          h2.state = h2.__s, null != h2.getChildContext && (t3 = s(s({}, t3), h2.getChildContext())), v3 || null == h2.getSnapshotBeforeUpdate || (k3 = h2.getSnapshotBeforeUpdate(y3, _3)), $2 = null != a3 && a3.type === p && null == a3.key ? a3.props.children : a3, w(n2, Array.isArray($2) ? $2 : [$2], u3, i3, t3, o4, r3, f3, e4, c3), h2.base = u3.__e, u3.__h = null, h2.__h.length && f3.push(h2), b3 && (h2.__E = h2.__ = null), h2.__e = false;
        } else
          null == r3 && u3.__v === i3.__v ? (u3.__k = i3.__k, u3.__e = i3.__e) : u3.__e = L(i3.__e, u3, i3, t3, o4, r3, f3, c3);
      (a3 = l.diffed) && a3(u3);
    } catch (n3) {
      u3.__v = null, (c3 || null != r3) && (u3.__e = e4, u3.__h = !!c3, r3[r3.indexOf(e4)] = null), l.__e(n3, u3, i3);
    }
  }
  function z(n2, u3) {
    l.__c && l.__c(u3, n2), n2.some(function(u4) {
      try {
        n2 = u4.__h, u4.__h = [], n2.some(function(n3) {
          n3.call(u4);
        });
      } catch (n3) {
        l.__e(n3, u4.__v);
      }
    });
  }
  function L(l3, u3, i3, t3, o4, r3, e4, c3) {
    var s2, h2, v3, y3 = i3.props, p3 = u3.props, d3 = u3.type, k3 = 0;
    if ("svg" === d3 && (o4 = true), null != r3) {
      for (; k3 < r3.length; k3++)
        if ((s2 = r3[k3]) && "setAttribute" in s2 == !!d3 && (d3 ? s2.localName === d3 : 3 === s2.nodeType)) {
          l3 = s2, r3[k3] = null;
          break;
        }
    }
    if (null == l3) {
      if (null === d3)
        return document.createTextNode(p3);
      l3 = o4 ? document.createElementNS("http://www.w3.org/2000/svg", d3) : document.createElement(d3, p3.is && p3), r3 = null, c3 = false;
    }
    if (null === d3)
      y3 === p3 || c3 && l3.data === p3 || (l3.data = p3);
    else {
      if (r3 = r3 && n.call(l3.childNodes), h2 = (y3 = i3.props || f).dangerouslySetInnerHTML, v3 = p3.dangerouslySetInnerHTML, !c3) {
        if (null != r3)
          for (y3 = {}, k3 = 0; k3 < l3.attributes.length; k3++)
            y3[l3.attributes[k3].name] = l3.attributes[k3].value;
        (v3 || h2) && (v3 && (h2 && v3.__html == h2.__html || v3.__html === l3.innerHTML) || (l3.innerHTML = v3 && v3.__html || ""));
      }
      if (C(l3, p3, y3, o4, c3), v3)
        u3.__k = [];
      else if (k3 = u3.props.children, w(l3, Array.isArray(k3) ? k3 : [k3], u3, i3, t3, o4 && "foreignObject" !== d3, r3, e4, r3 ? r3[0] : i3.__k && _(i3, 0), c3), null != r3)
        for (k3 = r3.length; k3--; )
          null != r3[k3] && a(r3[k3]);
      c3 || ("value" in p3 && void 0 !== (k3 = p3.value) && (k3 !== l3.value || "progress" === d3 && !k3 || "option" === d3 && k3 !== y3.value) && H(l3, "value", k3, y3.value, false), "checked" in p3 && void 0 !== (k3 = p3.checked) && k3 !== l3.checked && H(l3, "checked", k3, y3.checked, false));
    }
    return l3;
  }
  function M(n2, u3, i3) {
    try {
      "function" == typeof n2 ? n2(u3) : n2.current = u3;
    } catch (n3) {
      l.__e(n3, i3);
    }
  }
  function N(n2, u3, i3) {
    var t3, o4;
    if (l.unmount && l.unmount(n2), (t3 = n2.ref) && (t3.current && t3.current !== n2.__e || M(t3, null, u3)), null != (t3 = n2.__c)) {
      if (t3.componentWillUnmount)
        try {
          t3.componentWillUnmount();
        } catch (n3) {
          l.__e(n3, u3);
        }
      t3.base = t3.__P = null;
    }
    if (t3 = n2.__k)
      for (o4 = 0; o4 < t3.length; o4++)
        t3[o4] && N(t3[o4], u3, "function" != typeof n2.type);
    i3 || null == n2.__e || a(n2.__e), n2.__e = n2.__d = void 0;
  }
  function O(n2, l3, u3) {
    return this.constructor(n2, u3);
  }
  function P(u3, i3, t3) {
    var o4, r3, e4;
    l.__ && l.__(u3, i3), r3 = (o4 = "function" == typeof t3) ? null : t3 && t3.__k || i3.__k, e4 = [], j(i3, u3 = (!o4 && t3 || i3).__k = h(p, null, [u3]), r3 || f, f, void 0 !== i3.ownerSVGElement, !o4 && t3 ? [t3] : r3 ? null : i3.firstChild ? n.call(i3.childNodes) : null, e4, !o4 && t3 ? t3 : r3 ? r3.__e : i3.firstChild, o4), z(e4, u3);
  }
  n = e.slice, l = { __e: function(n2, l3, u3, i3) {
    for (var t3, o4, r3; l3 = l3.__; )
      if ((t3 = l3.__c) && !t3.__)
        try {
          if ((o4 = t3.constructor) && null != o4.getDerivedStateFromError && (t3.setState(o4.getDerivedStateFromError(n2)), r3 = t3.__d), null != t3.componentDidCatch && (t3.componentDidCatch(n2, i3 || {}), r3 = t3.__d), r3)
            return t3.__E = t3;
        } catch (l4) {
          n2 = l4;
        }
    throw n2;
  } }, u = 0, i = function(n2) {
    return null != n2 && void 0 === n2.constructor;
  }, d.prototype.setState = function(n2, l3) {
    var u3;
    u3 = null != this.__s && this.__s !== this.state ? this.__s : this.__s = s({}, this.state), "function" == typeof n2 && (n2 = n2(s({}, u3), this.props)), n2 && s(u3, n2), null != n2 && this.__v && (l3 && this.__h.push(l3), b(this));
  }, d.prototype.forceUpdate = function(n2) {
    this.__v && (this.__e = true, n2 && this.__h.push(n2), b(this));
  }, d.prototype.render = p, t = [], g.__r = 0, r = 0;

  // node_modules/preact/hooks/dist/hooks.module.js
  var t2;
  var r2;
  var u2;
  var i2;
  var o2 = 0;
  var c2 = [];
  var f2 = [];
  var e2 = l.__b;
  var a2 = l.__r;
  var v2 = l.diffed;
  var l2 = l.__c;
  var m2 = l.unmount;
  function d2(t3, u3) {
    l.__h && l.__h(r2, t3, o2 || u3), o2 = 0;
    var i3 = r2.__H || (r2.__H = { __: [], __h: [] });
    return t3 >= i3.__.length && i3.__.push({ __V: f2 }), i3.__[t3];
  }
  function p2(n2) {
    return o2 = 1, y2(z2, n2);
  }
  function y2(n2, u3, i3) {
    var o4 = d2(t2++, 2);
    if (o4.t = n2, !o4.__c && (o4.__ = [i3 ? i3(u3) : z2(void 0, u3), function(n3) {
      var t3 = o4.__N ? o4.__N[0] : o4.__[0], r3 = o4.t(t3, n3);
      t3 !== r3 && (o4.__N = [r3, o4.__[1]], o4.__c.setState({}));
    }], o4.__c = r2, !r2.u)) {
      r2.u = true;
      var c3 = r2.shouldComponentUpdate;
      r2.shouldComponentUpdate = function(n3, t3, r3) {
        if (!o4.__c.__H)
          return true;
        var u4 = o4.__c.__H.__.filter(function(n4) {
          return n4.__c;
        });
        if (u4.every(function(n4) {
          return !n4.__N;
        }))
          return !c3 || c3.call(this, n3, t3, r3);
        var i4 = false;
        return u4.forEach(function(n4) {
          if (n4.__N) {
            var t4 = n4.__[0];
            n4.__ = n4.__N, n4.__N = void 0, t4 !== n4.__[0] && (i4 = true);
          }
        }), !!i4 && (!c3 || c3.call(this, n3, t3, r3));
      };
    }
    return o4.__N || o4.__;
  }
  function _2(n2) {
    return o2 = 5, F(function() {
      return { current: n2 };
    }, []);
  }
  function F(n2, r3) {
    var u3 = d2(t2++, 7);
    return w2(u3.__H, r3) ? (u3.__V = n2(), u3.i = r3, u3.__h = n2, u3.__V) : u3.__;
  }
  function T2(n2, t3) {
    return o2 = 8, F(function() {
      return n2;
    }, t3);
  }
  function b2() {
    for (var t3; t3 = c2.shift(); )
      if (t3.__P && t3.__H)
        try {
          t3.__H.__h.forEach(j2), t3.__H.__h.forEach(k2), t3.__H.__h = [];
        } catch (r3) {
          t3.__H.__h = [], l.__e(r3, t3.__v);
        }
  }
  l.__b = function(n2) {
    r2 = null, e2 && e2(n2);
  }, l.__r = function(n2) {
    a2 && a2(n2), t2 = 0;
    var i3 = (r2 = n2.__c).__H;
    i3 && (u2 === r2 ? (i3.__h = [], r2.__h = [], i3.__.forEach(function(n3) {
      n3.__N && (n3.__ = n3.__N), n3.__V = f2, n3.__N = n3.i = void 0;
    })) : (i3.__h.forEach(j2), i3.__h.forEach(k2), i3.__h = [])), u2 = r2;
  }, l.diffed = function(t3) {
    v2 && v2(t3);
    var o4 = t3.__c;
    o4 && o4.__H && (o4.__H.__h.length && (1 !== c2.push(o4) && i2 === l.requestAnimationFrame || ((i2 = l.requestAnimationFrame) || function(n2) {
      var t4, r3 = function() {
        clearTimeout(u3), g2 && cancelAnimationFrame(t4), setTimeout(n2);
      }, u3 = setTimeout(r3, 100);
      g2 && (t4 = requestAnimationFrame(r3));
    })(b2)), o4.__H.__.forEach(function(n2) {
      n2.i && (n2.__H = n2.i), n2.__V !== f2 && (n2.__ = n2.__V), n2.i = void 0, n2.__V = f2;
    })), u2 = r2 = null;
  }, l.__c = function(t3, r3) {
    r3.some(function(t4) {
      try {
        t4.__h.forEach(j2), t4.__h = t4.__h.filter(function(n2) {
          return !n2.__ || k2(n2);
        });
      } catch (u3) {
        r3.some(function(n2) {
          n2.__h && (n2.__h = []);
        }), r3 = [], l.__e(u3, t4.__v);
      }
    }), l2 && l2(t3, r3);
  }, l.unmount = function(t3) {
    m2 && m2(t3);
    var r3, u3 = t3.__c;
    u3 && u3.__H && (u3.__H.__.forEach(function(n2) {
      try {
        j2(n2);
      } catch (n3) {
        r3 = n3;
      }
    }), r3 && l.__e(r3, u3.__v));
  };
  var g2 = "function" == typeof requestAnimationFrame;
  function j2(n2) {
    var t3 = r2, u3 = n2.__c;
    "function" == typeof u3 && (n2.__c = void 0, u3()), r2 = t3;
  }
  function k2(n2) {
    var t3 = r2;
    n2.__c = n2.__(), r2 = t3;
  }
  function w2(n2, t3) {
    return !n2 || n2.length !== t3.length || t3.some(function(t4, r3) {
      return t4 !== n2[r3];
    });
  }
  function z2(n2, t3) {
    return "function" == typeof t3 ? t3(n2) : t3;
  }

  // node_modules/preact/jsx-runtime/dist/jsxRuntime.module.js
  var o3 = 0;
  function e3(_3, e4, n2, t3, f3) {
    var l3, s2, u3 = {};
    for (s2 in e4)
      "ref" == s2 ? l3 = e4[s2] : u3[s2] = e4[s2];
    var a3 = { type: _3, props: u3, key: n2, ref: l3, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --o3, __source: f3, __self: t3 };
    if ("function" == typeof _3 && (l3 = _3.defaultProps))
      for (s2 in l3)
        void 0 === u3[s2] && (u3[s2] = l3[s2]);
    return l.vnode && l.vnode(a3), a3;
  }

  // lib/Tag.jsx
  function Tag(props) {
    return /* @__PURE__ */ e3("button", {
      type: "button",
      className: props.classNames.selectedTag,
      title: props.removeButtonText,
      onClick: props.onDelete,
      children: /* @__PURE__ */ e3("span", {
        className: props.classNames.selectedTagName,
        children: props.tag.name
      })
    });
  }
  var Tag_default = Tag;

  // lib/Input.jsx
  var SIZER_STYLES = {
    position: "absolute",
    width: 0,
    height: 0,
    visibility: "hidden",
    overflow: "scroll",
    whiteSpace: "pre"
  };
  var STYLE_PROPS = [
    "fontSize",
    "fontFamily",
    "fontWeight",
    "fontStyle",
    "letterSpacing",
    "textTransform"
  ];
  var Input = class extends d {
    constructor(props) {
      super(props);
      this.state = { inputWidth: null };
      this.input = y();
      this.sizer = y();
    }
    componentDidMount() {
      if (this.props.autoresize) {
        this.copyInputStyles();
        this.updateInputWidth();
      }
    }
    componentDidUpdate({ query, placeholderText }) {
      if (query !== this.props.query || placeholderText !== this.props.placeholderText) {
        this.updateInputWidth();
      }
    }
    copyInputStyles() {
      const inputStyle = window.getComputedStyle(this.input.current);
      STYLE_PROPS.forEach((prop) => {
        this.sizer.current.style[prop] = inputStyle[prop];
      });
    }
    updateInputWidth() {
      let inputWidth;
      if (this.props.autoresize) {
        inputWidth = Math.ceil(this.sizer.current.scrollWidth) + 2;
      }
      if (inputWidth !== this.state.inputWidth) {
        this.setState({ inputWidth });
      }
    }
    render() {
      const { id, query, ariaLabelText, placeholderText, expanded, classNames, inputAttributes, inputEventHandlers, index } = this.props;
      return /* @__PURE__ */ e3("div", {
        className: classNames.searchWrapper,
        children: [
          /* @__PURE__ */ e3("input", {
            ...inputAttributes,
            ...inputEventHandlers,
            ref: this.input,
            value: query,
            placeholder: placeholderText,
            className: classNames.searchInput,
            role: "combobox",
            "aria-autocomplete": "list",
            "aria-label": ariaLabelText || placeholderText,
            "aria-owns": id,
            "aria-activedescendant": index > -1 ? `${id}-${index}` : null,
            "aria-expanded": expanded,
            style: { width: this.state.inputWidth }
          }),
          /* @__PURE__ */ e3("div", {
            ref: this.sizer,
            style: SIZER_STYLES,
            children: query || placeholderText
          })
        ]
      });
    }
  };
  var Input_default = Input;

  // lib/concerns/matchers.js
  function escapeForRegExp(string) {
    return string.replace(/[-\\^$*+?.()|[\]{}]/g, "\\$&");
  }
  function matchAny(string) {
    return new RegExp(escapeForRegExp(string), "gi");
  }
  function matchPartial(string) {
    return new RegExp(`(?:^|\\s)${escapeForRegExp(string)}`, "i");
  }
  function matchExact(string) {
    return new RegExp(`^${escapeForRegExp(string)}$`, "i");
  }

  // lib/Suggestions.jsx
  function markIt(name, query) {
    const regexp = matchAny(query);
    return name.replace(regexp, "<mark>$&</mark>");
  }
  function DefaultSuggestionComponent({ item, query }) {
    return /* @__PURE__ */ e3("span", {
      dangerouslySetInnerHTML: { __html: markIt(item.name, query) }
    });
  }
  function Suggestions(props) {
    const SuggestionComponent = props.suggestionComponent || DefaultSuggestionComponent;
    const options = props.options.map((item, index) => {
      const key = `${props.id}-${index}`;
      const classNames = [];
      if (props.index === index) {
        classNames.push(props.classNames.suggestionActive);
      }
      if (item.disabled) {
        classNames.push(props.classNames.suggestionDisabled);
      }
      return /* @__PURE__ */ e3("li", {
        id: key,
        role: "option",
        className: classNames.join(" "),
        "aria-disabled": Boolean(item.disabled),
        onMouseDown: (e4) => e4.preventDefault(),
        onClick: () => props.addTag(item),
        children: [
          item.prefix ? /* @__PURE__ */ e3("span", {
            className: props.classNames.suggestionPrefix,
            children: [
              item.prefix,
              " "
            ]
          }) : null,
          item.disableMarkIt ? item.name : /* @__PURE__ */ e3(SuggestionComponent, {
            item,
            query: props.query
          })
        ]
      }, key);
    });
    return /* @__PURE__ */ e3("div", {
      className: props.classNames.suggestions,
      children: /* @__PURE__ */ e3("ul", {
        role: "listbox",
        id: props.id,
        children: options
      })
    });
  }
  var Suggestions_default = Suggestions;

  // lib/concerns/focusNextElement.js
  function focusNextElement(scope, currentTarget) {
    const interactiveEls = scope.querySelectorAll("a,button,input");
    const currentEl = Array.prototype.findIndex.call(
      interactiveEls,
      (element) => element === currentTarget
    );
    const nextEl = interactiveEls[currentEl - 1] || interactiveEls[currentEl + 1];
    if (nextEl) {
      nextEl.focus();
    }
  }

  // lib/PreactTagAutocomplete.jsx
  var KEYS = {
    ENTER: "Enter",
    TAB: "Tab",
    BACKSPACE: "Backspace",
    UP_ARROW: "ArrowUp",
    UP_ARROW_COMPAT: "Up",
    DOWN_ARROW: "ArrowDown",
    DOWN_ARROW_COMPAT: "Down"
  };
  var CLASS_NAMES = {
    root: "preact-tag-ac",
    rootFocused: "is-focused",
    selected: "preact-tag-ac__selected",
    selectedTag: "preact-tag-ac__selected-tag",
    selectedTagName: "preact-tag-ac__selected-tag-name",
    search: "preact-tag-ac__search",
    searchWrapper: "preact-tag-ac__search-wrapper",
    searchInput: "preact-tag-ac__search-input",
    suggestions: "preact-tag-ac__suggestions",
    suggestionActive: "is-active",
    suggestionDisabled: "is-disabled",
    suggestionPrefix: "preact-tag-ac__suggestion-prefix"
  };
  function findMatchIndex(options, query) {
    return options.findIndex((option) => matchExact(query).test(option.name));
  }
  function pressDelimiter() {
    if (this.state.query.length >= this.props.minQueryLength) {
      const match = findMatchIndex(this.state.options, this.state.query);
      const index = this.state.index === -1 ? match : this.state.index;
      const tag = index > -1 ? this.state.options[index] : null;
      if (tag) {
        this.addTag(tag);
      } else if (this.props.allowNew) {
        this.addTag({ name: this.state.query });
      }
    }
  }
  function pressUpKey(e4) {
    e4.preventDefault();
    const size = this.state.options.length - 1;
    this.setState({ index: this.state.index <= 0 ? size : this.state.index - 1 });
  }
  function pressDownKey(e4) {
    e4.preventDefault();
    const size = this.state.options.length - 1;
    this.setState({ index: this.state.index >= size ? 0 : this.state.index + 1 });
  }
  function pressBackspaceKey() {
    if (!this.state.query.length) {
      this.deleteTag(this.props.tags.length - 1);
    }
  }
  function defaultSuggestionsFilter(item, query) {
    const regexp = matchPartial(query);
    return regexp.test(item.name);
  }
  function getOptions(props, state) {
    let options;
    if (props.suggestionsTransform) {
      options = props.suggestionsTransform(state.query, props.suggestions);
    } else {
      options = props.suggestions.filter((item) => props.suggestionsFilter(item, state.query));
    }
    options = options.slice(0, props.maxSuggestionsLength);
    if (props.allowNew && props.newTagText && findMatchIndex(options, state.query) === -1) {
      options.push({ id: 0, name: state.query, prefix: props.newTagText, disableMarkIt: true });
    } else if (props.noSuggestionsText && options.length === 0) {
      options.push({ id: 0, name: props.noSuggestionsText, disabled: true, disableMarkIt: true });
    }
    return options;
  }
  var PreactTagAutocomplete = class extends d {
    constructor(props) {
      super(props);
      this.state = {
        query: "",
        focused: false,
        index: -1
      };
      this.inputEventHandlers = {
        onBlur: this.onBlur.bind(this),
        onFocus: this.onFocus.bind(this),
        onInput: this.onInput.bind(this),
        onKeyDown: this.onKeyDown.bind(this)
      };
      this.container = y();
      this.input = y();
    }
    onInput(e4) {
      const query = e4.target.value;
      if (this.props.onInput) {
        this.props.onInput(query);
      }
      if (query.length === this.state.query.length + 1 && this.props.delimiters.indexOf(query.slice(-1)) > -1) {
        pressDelimiter.call(this);
      } else if (query !== this.state.query) {
        this.setState({ query });
      }
    }
    onKeyDown(e4) {
      if (this.props.delimiters.indexOf(e4.key) > -1) {
        if (this.state.query || this.state.index > -1) {
          e4.preventDefault();
        }
        pressDelimiter.call(this);
      }
      if (e4.key === KEYS.BACKSPACE && this.props.allowBackspace) {
        pressBackspaceKey.call(this, e4);
      }
      if (e4.key === KEYS.UP_ARROW || e4.key === KEYS.UP_ARROW_COMPAT) {
        pressUpKey.call(this, e4);
      }
      if (e4.key === KEYS.DOWN_ARROW || e4.key === KEYS.DOWN_ARROW_COMPAT) {
        pressDownKey.call(this, e4);
      }
    }
    onClick(e4) {
      if (document.activeElement !== e4.target) {
        this.focusInput();
      }
    }
    onBlur() {
      this.setState({ focused: false, index: -1 });
      if (this.props.onBlur) {
        this.props.onBlur();
      }
      if (this.props.addOnBlur) {
        pressDelimiter.call(this);
      }
    }
    onFocus() {
      this.setState({ focused: true });
      if (this.props.onFocus) {
        this.props.onFocus();
      }
    }
    onDeleteTag(index, event) {
      if (this.container.current) {
        focusNextElement(this.container.current, event.currentTarget);
      }
      this.deleteTag(index);
    }
    addTag(tag) {
      if (tag.disabled) {
        return;
      }
      if (typeof this.props.onValidate === "function" && !this.props.onValidate(tag)) {
        return;
      }
      this.props.onAddition({ id: tag.id, name: tag.name });
      this.clearInput();
    }
    deleteTag(i3) {
      this.props.onDelete(i3);
    }
    clearInput() {
      this.setState({
        query: "",
        index: -1
      });
    }
    clearSelectedIndex() {
      this.setState({ index: -1 });
    }
    focusInput() {
      if (this.input.current && this.input.current.input.current) {
        this.input.current.input.current.focus();
      }
    }
    render() {
      const TagComponent = this.props.tagComponent || Tag_default;
      const expanded = this.state.focused && this.state.query.length >= this.props.minQueryLength;
      const classNames = Object.assign({}, CLASS_NAMES, this.props.classNames);
      const rootClassNames = [classNames.root];
      this.state.focused && rootClassNames.push(classNames.rootFocused);
      return /* @__PURE__ */ e3("div", {
        ref: this.container,
        className: rootClassNames.join(" "),
        onClick: this.onClick.bind(this),
        children: [
          /* @__PURE__ */ e3("div", {
            className: classNames.selected,
            "aria-relevant": "additions removals",
            "aria-live": "polite",
            children: this.props.tags.map((tag, i3) => /* @__PURE__ */ e3(TagComponent, {
              tag,
              removeButtonText: this.props.removeButtonText,
              classNames,
              onDelete: this.onDeleteTag.bind(this, i3)
            }, i3))
          }),
          /* @__PURE__ */ e3("div", {
            className: classNames.search,
            children: [
              /* @__PURE__ */ e3(Input_default, {
                ...this.state,
                id: this.props.id,
                ref: this.input,
                classNames,
                inputAttributes: this.props.inputAttributes,
                inputEventHandlers: this.inputEventHandlers,
                autoresize: this.props.autoresize,
                expanded,
                placeholderText: this.props.placeholderText,
                ariaLabelText: this.props.ariaLabelText
              }),
              expanded && this.state.options.length ? /* @__PURE__ */ e3(Suggestions_default, {
                ...this.state,
                id: this.props.id,
                classNames,
                expanded,
                addTag: this.addTag.bind(this),
                suggestionComponent: this.props.suggestionComponent
              }) : null
            ]
          })
        ]
      });
    }
    static getDerivedStateFromProps(props, state) {
      if (state.prevQuery !== state.query || state.prevSuggestions !== props.suggestions) {
        return {
          prevQuery: state.query,
          prevSuggestions: props.suggestions,
          options: getOptions(props, state)
        };
      }
      return null;
    }
  };
  PreactTagAutocomplete.defaultProps = {
    id: "PreactTagAutocomplete",
    tags: [],
    placeholderText: "Add new tag",
    removeButtonText: "Click to remove tag",
    noSuggestionsText: null,
    newTagText: null,
    suggestions: [],
    suggestionsFilter: defaultSuggestionsFilter,
    suggestionsTransform: null,
    autoresize: true,
    classNames: CLASS_NAMES,
    delimiters: [KEYS.TAB, KEYS.ENTER],
    minQueryLength: 2,
    maxSuggestionsLength: 6,
    allowNew: false,
    allowBackspace: true,
    addOnBlur: false,
    tagComponent: null,
    suggestionComponent: null,
    inputAttributes: {}
  };
  var PreactTagAutocomplete_default = PreactTagAutocomplete;

  // example/main.jsx
  var import_countries = __toESM(require_countries());
  function CountrySelector() {
    const [tags, setTags] = p2([]);
    const ref = _2();
    const onDelete = T2((tagIndex) => {
      setTags(tags.filter((_3, i3) => i3 !== tagIndex));
    }, [tags]);
    const onAddition = T2((newTag) => {
      setTags([...tags, newTag]);
    }, [tags]);
    return /* @__PURE__ */ e3(p, {
      children: [
        /* @__PURE__ */ e3("p", {
          children: "Select the countries you have visited below:"
        }),
        /* @__PURE__ */ e3(PreactTagAutocomplete_default, {
          ref,
          tags,
          suggestions: import_countries.default,
          noSuggestionsText: "No matching countries",
          onDelete,
          onAddition
        }),
        /* @__PURE__ */ e3("p", {
          children: /* @__PURE__ */ e3("b", {
            children: "Output:"
          })
        }),
        /* @__PURE__ */ e3("pre", {
          children: /* @__PURE__ */ e3("code", {
            children: JSON.stringify(tags, null, 2)
          })
        })
      ]
    });
  }
  P(/* @__PURE__ */ e3(CountrySelector, {}), document.getElementById("demo-1"));
  function CustomTags() {
    const [tags, setTags] = p2([]);
    const ref = _2();
    const onDelete = T2((tagIndex) => {
      setTags(tags.filter((_3, i3) => i3 !== tagIndex));
    }, [tags]);
    const onAddition = T2((newTag) => {
      setTags([...tags, newTag]);
    }, [tags]);
    const onValidate = T2((newTag) => {
      return /^[a-z]{3,12}$/i.test(newTag.name);
    });
    return /* @__PURE__ */ e3(p, {
      children: [
        /* @__PURE__ */ e3("p", {
          children: "Enter new tags meeting the requirements below:"
        }),
        /* @__PURE__ */ e3(PreactTagAutocomplete_default, {
          allowNew: true,
          newTagText: "Create new tag:",
          ref,
          tags,
          suggestions: [],
          onDelete,
          onAddition,
          onValidate
        }),
        /* @__PURE__ */ e3("p", {
          style: { margin: "0.25rem 0", color: "gray" },
          children: /* @__PURE__ */ e3("small", {
            children: /* @__PURE__ */ e3("em", {
              children: "Tags must be 3\u201312 characters in length and only contain the letters A-Z"
            })
          })
        }),
        /* @__PURE__ */ e3("p", {
          children: /* @__PURE__ */ e3("b", {
            children: "Output:"
          })
        }),
        /* @__PURE__ */ e3("pre", {
          children: /* @__PURE__ */ e3("code", {
            children: JSON.stringify(tags, null, 2)
          })
        })
      ]
    });
  }
  P(/* @__PURE__ */ e3(CustomTags, {}), document.getElementById("demo-2"));
})();
