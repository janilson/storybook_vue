import { defineComponent as x, computed as v, createElementBlock as d, openBlock as s, createElementVNode as l, toDisplayString as m, createCommentVNode as F, Fragment as D, renderList as S, createBlock as _, createVNode as y, normalizeClass as w, normalizeStyle as Z, withModifiers as z, unref as T, withCtx as G, ref as W } from "vue";
import P from "vuedraggable";
const N = { class: "w-6 h-6 rounded-full bg-[#E7EBEF] outline outline-1 outline-gray-900 flex items-center justify-center overflow-hidden" }, X = { class: "body extra-small font-semibold text-gray-900 uppercase" }, U = /* @__PURE__ */ x({
  __name: "LeadAvatar",
  props: {
    name: {}
  },
  setup(e) {
    const o = e, n = v(() => {
      var f, g, p, t;
      if (!o.name) return "";
      const a = o.name.trim().split(/\s+/);
      if (a.length === 0 || !a[0]) return "";
      if (a.length === 1) return ((g = (f = a[0]) == null ? void 0 : f.charAt(0)) == null ? void 0 : g.toUpperCase()) ?? "";
      const c = ((p = a[0]) == null ? void 0 : p.charAt(0)) ?? "", u = ((t = a[a.length - 1]) == null ? void 0 : t.charAt(0)) ?? "";
      return (c + u).toUpperCase();
    });
    return (a, c) => (s(), d("div", N, [
      l("span", X, m(n.value), 1)
    ]));
  }
}), q = { class: "flex items-stretch gap-2" }, O = { class: "px-2 py-1 bg-[#D9EFFF] flex items-center gap-2 flex-wrap text-blue-700 uppercase w-fit" }, R = { class: "body small font-semibold tracking-wide text-blue-700" }, J = {
  key: 0,
  class: "body extra-small text-blue-700"
}, K = {
  key: 0,
  class: "px-1.5 py-1 bg-[#D9EFFF] w-fit flex items-center justify-center"
}, Q = { class: "body extra-small text-blue-700 uppercase" }, Y = /* @__PURE__ */ x({
  __name: "LeadBadgePill",
  props: {
    primary: {},
    secondary: {},
    extraCount: {}
  },
  setup(e) {
    return (o, n) => (s(), d("div", q, [
      l("div", O, [
        l("span", R, m(e.primary), 1),
        e.secondary ? (s(), d("span", J, m(e.secondary), 1)) : F("", !0)
      ]),
      e.extraCount && e.extraCount > 0 ? (s(), d("div", K, [
        l("span", Q, " +" + m(e.extraCount), 1)
      ])) : F("", !0)
    ]));
  }
}), I = { class: "px-2 bg-[#E7EBEF] rounded-full flex items-center justify-center w-fit" }, ee = { class: "body small font-medium text-gray-600" }, te = /* @__PURE__ */ x({
  __name: "StageCounter",
  props: {
    value: {}
  },
  setup(e) {
    return (o, n) => (s(), d("div", I, [
      l("span", ee, m(e.value), 1)
    ]));
  }
}), ae = { class: "flex items-center -space-x-2" }, ne = /* @__PURE__ */ x({
  __name: "LeadAvatarGroup",
  props: {
    owners: {}
  },
  setup(e) {
    return (o, n) => (s(), d("div", ae, [
      (s(!0), d(D, null, S(e.owners, (a) => (s(), _(U, {
        key: a.name,
        name: a.name
      }, null, 8, ["name"]))), 128))
    ]));
  }
}), le = {
  key: 0,
  class: "inline-flex items-center gap-2"
}, se = /* @__PURE__ */ x({
  __name: "LeadBadgeSummary",
  props: {
    badge: {},
    extraCount: {}
  },
  setup(e) {
    return (o, n) => e.badge ? (s(), d("div", le, [
      y(Y, {
        primary: e.badge.primary,
        secondary: e.badge.secondary,
        "extra-count": e.extraCount
      }, null, 8, ["primary", "secondary", "extra-count"])
    ])) : F("", !0);
  }
}), oe = {
  width: "16",
  height: "16",
  viewBox: "0 0 16 16",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, re = ["fill"], ie = ["fill"], de = /* @__PURE__ */ x({
  __name: "Whatsapp",
  props: {
    color: { type: String, default: "#4DA025" }
  },
  setup(e) {
    return (o, n) => (s(), d("svg", oe, [
      l("path", {
        "fill-rule": "evenodd",
        "clip-rule": "evenodd",
        d: "M0.75 8C0.75 4.01117 4.01117 0.75 8 0.75C11.9888 0.75 15.25 4.01117 15.25 8C15.25 11.9888 11.9888 15.25 8 15.25C6.78338 15.25 5.56727 14.9356 4.52335 14.3619L2.61558 14.907C1.6855 15.1727 0.818995 14.3267 1.0624 13.3905L1.57929 11.4025C1.06914 10.3805 0.75 9.2264 0.75 8ZM8 1.91667C4.6555 1.91667 1.91667 4.6555 1.91667 8C1.91667 9.09073 2.21961 10.1305 2.71471 11.0588C2.78361 11.188 2.80141 11.3384 2.76456 11.4801L2.19153 13.6841C2.1753 13.7465 2.23307 13.8029 2.29507 13.7852L4.43975 13.1724C4.59499 13.1281 4.76167 13.1501 4.90012 13.2331C5.80842 13.7781 6.90451 14.0833 8 14.0833C11.3445 14.0833 14.0833 11.3445 14.0833 8C14.0833 4.6555 11.3445 1.91667 8 1.91667Z",
        fill: e.color
      }, null, 8, re),
      l("path", {
        d: "M11 9.899C11 10.007 10.976 10.118 10.9249 10.226C10.8738 10.334 10.8077 10.436 10.7206 10.532C10.5734 10.694 10.4111 10.811 10.2278 10.886C10.0476 10.961 9.85228 11 9.64196 11C9.3355 11 9.00801 10.928 8.66249 10.781C8.31698 10.634 7.97146 10.436 7.62894 10.187C7.28343 9.935 6.95593 9.656 6.64347 9.347C6.334 9.035 6.05458 8.708 5.80521 8.366C5.55884 8.024 5.36054 7.682 5.21632 7.343C5.07211 7.001 5 6.674 5 6.362C5 6.158 5.03605 5.963 5.10816 5.783C5.18027 5.6 5.29444 5.432 5.45368 5.282C5.64597 5.093 5.85628 5 6.07862 5C6.16274 5 6.24687 5.018 6.32198 5.054C6.4001 5.09 6.4692 5.144 6.52328 5.222L7.22033 6.203C7.27441 6.278 7.31347 6.347 7.34051 6.413C7.36755 6.476 7.38257 6.539 7.38257 6.596C7.38257 6.668 7.36154 6.74 7.31948 6.809C7.28042 6.878 7.22334 6.95 7.15123 7.022L6.92288 7.259C6.88983 7.292 6.87481 7.331 6.87481 7.379C6.87481 7.403 6.87782 7.424 6.88383 7.448C6.89284 7.472 6.90185 7.49 6.90786 7.508C6.96194 7.607 7.05508 7.736 7.18728 7.892C7.32248 8.048 7.4667 8.207 7.62293 8.366C7.78518 8.525 7.94141 8.672 8.10065 8.807C8.25689 8.939 8.38608 9.029 8.48823 9.083C8.50325 9.089 8.52128 9.098 8.54231 9.107C8.56635 9.116 8.59039 9.119 8.61743 9.119C8.6685 9.119 8.70756 9.101 8.74061 9.068L8.96895 8.843C9.04407 8.768 9.11617 8.711 9.18528 8.675C9.25438 8.633 9.32349 8.612 9.3986 8.612C9.45568 8.612 9.51577 8.624 9.58187 8.651C9.64797 8.678 9.71708 8.717 9.79219 8.768L10.7867 9.473C10.8648 9.527 10.9189 9.59 10.9519 9.665C10.982 9.74 11 9.815 11 9.899Z",
        fill: e.color
      }, null, 8, ie)
    ]));
  }
}), ce = { class: "w-full flex items-center gap-4" }, ue = { class: "flex-1" }, ge = { class: "body large font-semibold text-gray-900 line-clamp-1" }, fe = { class: "w-full flex justify-between items-start gap-4" }, me = { class: "flex items-center gap-1" }, he = {
  key: 1,
  class: "w-full flex items-center gap-1"
}, xe = ["title"], V = /* @__PURE__ */ x({
  __name: "LeadCard",
  props: {
    lead: {}
  },
  setup(e) {
    const o = e, n = {
      default: "text-gray-900",
      subtle: "text-gray-600",
      alert: "text-red-700",
      success: "text-green-500"
    }, a = v(() => [
      "",
      o.lead.borderTone === "alert" ? "border-t border-red-700" : ""
    ]), c = v(
      () => n[o.lead.contactTone ?? "subtle"]
    ), u = v(
      () => n[o.lead.statusTone ?? "default"]
    ), f = v(
      () => o.lead.highlightBars && o.lead.highlightBars.length > 0
    );
    return (g, p) => (s(), d("article", {
      class: w([a.value, "flex flex-col gap-2 justify-between bg-white !w-[240px] min-h-[84px] p-4 shadow-sm"])
    }, [
      l("header", ce, [
        l("div", ue, [
          l("p", ge, m(e.lead.name), 1)
        ]),
        y(ne, {
          owners: e.lead.owners
        }, null, 8, ["owners"])
      ]),
      l("div", fe, [
        l("div", me, [
          y(de, {
            color: e.lead.contactTone === "success" ? "#4DA025" : "#7D7E80"
          }, null, 8, ["color"]),
          l("span", {
            class: w(["body extra-small font-medium", c.value])
          }, m(e.lead.contactInfo), 3)
        ]),
        l("span", {
          class: w(["body extra-small font-semibold", u.value])
        }, m(e.lead.statusLabel), 3)
      ]),
      e.lead.badge && e.lead.showBadge !== !1 ? (s(), _(se, {
        key: 0,
        badge: e.lead.badge,
        "extra-count": e.lead.badgeExtraCount
      }, null, 8, ["badge", "extra-count"])) : F("", !0),
      f.value ? (s(), d("footer", he, [
        (s(!0), d(D, null, S(e.lead.highlightBars, (t) => (s(), d("span", {
          key: t.color + (t.title ?? ""),
          class: "h-1 !w-[19px]",
          style: Z({ backgroundColor: t.color }),
          title: t.title
        }, null, 12, xe))), 128))
      ])) : F("", !0)
    ], 2));
  }
}), pe = (e, o) => {
  const n = e.__vccOpts || e;
  for (const [a, c] of o)
    n[a] = c;
  return n;
}, Ce = {}, ye = {
  width: "20",
  height: "20",
  viewBox: "0 0 20 20",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
function be(e, o) {
  return s(), d("svg", ye, [...o[0] || (o[0] = [
    l("path", {
      "fill-rule": "evenodd",
      "clip-rule": "evenodd",
      d: "M9.99958 3.03566C6.15295 3.03566 3.0353 6.15332 3.0353 9.99995C3.0353 13.8466 6.15295 16.9642 9.99958 16.9642C13.8462 16.9642 16.9639 13.8466 16.9639 9.99995C16.9639 6.15332 13.8462 3.03566 9.99958 3.03566ZM1.96387 9.99995C1.96387 5.56158 5.56121 1.96423 9.99958 1.96423C14.4379 1.96423 18.0353 5.56158 18.0353 9.99995C18.0353 14.4383 14.4379 18.0357 9.99958 18.0357C5.56121 18.0357 1.96387 14.4383 1.96387 9.99995ZM9.99957 6.13091C10.2954 6.13091 10.5353 6.37076 10.5353 6.66662V9.46423H13.3329C13.6288 9.46423 13.8686 9.70407 13.8686 9.99994C13.8686 10.2958 13.6288 10.5357 13.3329 10.5357H10.5353V13.3333C10.5353 13.6292 10.2954 13.869 9.99957 13.869C9.70371 13.869 9.46386 13.6292 9.46386 13.3333V10.5357H6.66626C6.37039 10.5357 6.13054 10.2958 6.13054 9.99994C6.13054 9.70407 6.37039 9.46423 6.66626 9.46423H9.46386V6.66662C9.46386 6.37076 9.70371 6.13091 9.99957 6.13091Z",
      fill: "#0092FD"
    }, null, -1)
  ])]);
}
const ve = /* @__PURE__ */ pe(Ce, [["render", be]]), Fe = { class: "p-4 bg-white flex flex-col w-[272px] flex-shrink-0 border border-gray-400" }, _e = { class: "body large text-gray-900" }, Ee = { class: "flex items-center justify-between gap-2" }, we = { class: "body small font-medium text-gray-600" }, De = { class: "p-2 flex flex-col gap-2 flex-1 min-h-0" }, Se = {
  type: "button",
  class: "h-10 p-1 inline-flex items-center gap-1 flex-shrink-0"
}, Be = ["data-id"], Le = /* @__PURE__ */ x({
  __name: "PipelineColumn",
  props: {
    column: {},
    draggable: { type: Boolean, default: !0 },
    disabled: { type: Boolean, default: !1 },
    highlight: { type: Boolean, default: !1 }
  },
  emits: ["dragEnd", "dragEnter", "dragLeave", "dragStart"],
  setup(e, { emit: o }) {
    const n = e, a = o, c = () => {
      a("dragStart", n.column.id);
    }, u = (p) => {
      var h, b, L, $, A, k, E, M, H;
      const { item: t, to: i } = p, B = ((L = (b = (h = i == null ? void 0 : i.closest) == null ? void 0 : h.call(i, "[data-column-id]")) == null ? void 0 : b.getAttribute) == null ? void 0 : L.call(b, "data-column-id")) || (($ = i == null ? void 0 : i.getAttribute) == null ? void 0 : $.call(i, "id")) || n.column.id, r = ((A = t == null ? void 0 : t.getAttribute) == null ? void 0 : A.call(t, "data-id")) || ((M = (E = (k = t == null ? void 0 : t.querySelector) == null ? void 0 : k.call(t, "[data-id]")) == null ? void 0 : E.getAttribute) == null ? void 0 : M.call(E, "data-id")) || ((H = t == null ? void 0 : t.dataset) == null ? void 0 : H.id), C = n.column.leads.find((j) => j.id === r);
      a("dragEnd", {
        from: n.column.id,
        to: B,
        item: C || {}
      });
    }, f = () => {
      a("dragEnter", n.column.id);
    }, g = () => {
      a("dragLeave", n.column.id);
    };
    return (p, t) => (s(), d("div", {
      class: w(["flex flex-col items-center", { highlight: e.highlight }])
    }, [
      l("header", Fe, [
        l("h3", _e, m(e.column.title), 1),
        l("div", Ee, [
          l("span", we, m(e.column.amount), 1),
          y(te, {
            value: e.column.leadsCount
          }, null, 8, ["value"])
        ])
      ]),
      l("section", {
        class: "flex flex-col bg-gray-300 !w-[256.6px] flex-1 col border border-gray-300",
        onDragenter: z(f, ["prevent"]),
        onDragover: t[0] || (t[0] = z(() => {
        }, ["prevent"]))
      }, [
        l("div", De, [
          l("button", Se, [
            y(ve),
            t[1] || (t[1] = l("span", { class: "body medium font-medium text-blue-700" }, "Novo Lead", -1))
          ]),
          T(P) ? (s(), _(T(P), {
            key: 0,
            id: e.column.id,
            "data-column-id": e.column.id,
            list: e.column.leads,
            animation: 150,
            delay: 100,
            "delay-on-touch-only": !0,
            "touch-start-threshold": 5,
            disabled: e.disabled,
            group: "leads",
            "item-key": "id",
            class: "flex flex-col gap-2 flex-grow min-h-0",
            style: { "min-height": "100%" },
            onStart: c,
            onEnd: u,
            onDragenter: f,
            onDragleave: g
          }, {
            item: G(({ element: i }) => [
              (s(), d("div", {
                key: i.id,
                "data-id": i.id,
                class: "item"
              }, [
                y(V, { lead: i }, null, 8, ["lead"])
              ], 8, Be))
            ]),
            _: 1
          }, 8, ["id", "data-column-id", "list", "disabled"])) : (s(!0), d(D, { key: 1 }, S(e.column.leads, (i) => (s(), _(V, {
            key: i.id,
            lead: i
          }, null, 8, ["lead"]))), 128))
        ])
      ], 32)
    ], 2));
  }
}), $e = { class: "w-full h-screen overflow-auto" }, Ae = {
  class: "min-w-[1200px] flex items-stretch",
  style: { "min-height": "100vh", height: "auto" }
}, He = /* @__PURE__ */ x({
  __name: "CrmBoard",
  props: {
    columns: {},
    draggable: { type: Boolean, default: !0 },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["dragEnd", "dragEnter", "dragLeave", "dragStart"],
  setup(e, { emit: o }) {
    const n = o, a = W(null), c = W(null);
    let u = null, f = !1;
    const g = /* @__PURE__ */ new Map(), p = (r) => {
      f = !0, c.value = r, a.value = r, g.clear(), g.set(r, 1), n("dragStart", r);
    }, t = (r) => {
      f && (u && (clearTimeout(u), u = null), f = !1, a.value = null, c.value = null, g.clear(), n("dragEnd", r));
    }, i = (r) => {
      if (!f)
        return;
      u && (clearTimeout(u), u = null);
      const C = g.get(r) || 0;
      g.set(r, C + 1), a.value = r, n("dragEnter", r);
    }, B = (r) => {
      if (!f || !c.value)
        return;
      const C = g.get(r) || 0, h = Math.max(0, C - 1);
      g.set(r, h), u = setTimeout(() => {
        if (!c.value) {
          u = null;
          return;
        }
        (g.get(r) || 0) === 0 && a.value === r && c.value !== r && (a.value = null), u = null;
      }, 150), n("dragLeave", r);
    };
    return (r, C) => (s(), d("section", $e, [
      l("div", Ae, [
        (s(!0), d(D, null, S(e.columns, (h) => (s(), _(Le, {
          key: h.id,
          column: h,
          draggable: e.draggable,
          disabled: e.disabled,
          highlight: c.value !== null && (c.value === h.id || a.value === h.id),
          onDragStart: p,
          onDragEnd: t,
          onDragEnter: i,
          onDragLeave: B
        }, null, 8, ["column", "draggable", "disabled", "highlight"]))), 128))
      ])
    ]));
  }
}), ze = {
  blue: {
    100: "#E8F7FD",
    200: "#D9EFFF",
    300: "#BFE4FF",
    500: "#51BFFB",
    700: "#0092FD",
    750: "#0076CC",
    800: "#0D5F9B",
    900: "#0E395D"
  },
  gray: {
    100: "#F5F9FC",
    200: "#F0F3F5",
    300: "#E7EBEF",
    400: "#DCDDE0",
    500: "#C4C7CC",
    600: "#7D7E80",
    700: "#565759",
    900: "#111214"
  },
  red: {
    100: "#FEF2F2",
    200: "#FCE3E3",
    300: "#F5A8A8",
    500: "#EF7272",
    700: "#EA4343",
    800: "#B72424",
    900: "#5C1919"
  },
  green: {
    100: "#F1F7EE",
    200: "#E4F1DE",
    300: "#A8D892",
    500: "#7AB85C",
    700: "#4DA025",
    800: "#336A18",
    900: "#274C15"
  },
  yellow: {
    100: "#FFFBEE",
    200: "#FFF8E0",
    300: "#FEE896",
    500: "#FEDD62",
    700: "#FDD12D",
    800: "#BE9D22",
    900: "#594910"
  },
  other: {
    white: "#FFFFFF",
    orange: "#FD7A00",
    teal: "#005C4B",
    cyan: "#16E7E7",
    purple: "#9800FD",
    pink: "#EA4394"
  }
}, Te = {
  fontFamily: {
    sans: "'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif"
  },
  fontSize: {
    xl: "32px",
    lg: "24px",
    md: "20px",
    sm: "14px",
    bodyLg: "18px",
    // 👈 Body Large
    bodyMd: "16px",
    // 👈 Body Medium
    bodySm: "14px",
    // 👈 Body Small
    bodyXs: "12px"
    // 👈 Body Extra Small
  },
  fontWeight: {
    semibold: 600,
    medium: 500
  },
  lineHeight: {
    xl: "38px",
    lg: "30px",
    md: "24px",
    sm: "20px",
    bodyLg: "28px",
    bodyMd: "24px",
    bodySm: "20px",
    bodyXs: "18px"
  },
  textStyles: {
    // ======================
    // 🅰️ HEADINGS
    // ======================
    "Extra Large (XL)": {
      fontFamily: "'Poppins', sans-serif",
      fontSize: "32px",
      fontWeight: 600,
      lineHeight: "38px",
      letterSpacing: "0em"
    },
    "Large (LG)": {
      fontFamily: "'Poppins', sans-serif",
      fontSize: "24px",
      fontWeight: 600,
      lineHeight: "30px",
      letterSpacing: "0em"
    },
    "Medium (MD)": {
      fontFamily: "'Poppins', sans-serif",
      fontSize: "20px",
      fontWeight: 600,
      lineHeight: "24px",
      letterSpacing: "0em"
    },
    "Small (SM)": {
      fontFamily: "'Poppins', sans-serif",
      fontSize: "14px",
      fontWeight: 600,
      lineHeight: "20px",
      letterSpacing: "0em"
    },
    // ======================
    // 🅱️ BODY TEXTS
    // ======================
    "Body Large (LG)": {
      fontFamily: "'Inter', sans-serif",
      fontSize: "18px",
      fontWeight: 500,
      lineHeight: "28px",
      letterSpacing: "0em"
    },
    "Body Medium (MD)": {
      fontFamily: "'Inter', sans-serif",
      fontSize: "16px",
      fontWeight: 500,
      lineHeight: "24px",
      letterSpacing: "0em"
    },
    "Body Small (SM)": {
      fontFamily: "'Inter', sans-serif",
      fontSize: "14px",
      fontWeight: 500,
      lineHeight: "20px",
      letterSpacing: "0em"
    },
    "Body Extra Small (XS)": {
      fontFamily: "'Inter', sans-serif",
      fontSize: "12px",
      fontWeight: 500,
      lineHeight: "18px",
      letterSpacing: "0em"
    }
  }
};
export {
  He as CrmBoard,
  U as LeadAvatar,
  ne as LeadAvatarGroup,
  Y as LeadBadgePill,
  se as LeadBadgeSummary,
  V as LeadCard,
  Le as PipelineColumn,
  te as StageCounter,
  ze as colors,
  Te as typography
};
//# sourceMappingURL=ecosys-ui.es.js.map
