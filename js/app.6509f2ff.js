(function (t) {
    function e(e) {
        for (var s, o, i = e[0], l = e[1], c = e[2], u = 0, f = []; u < i.length; u++) o = i[u], r[o] && f.push(r[o][0]), r[o] = 0;
        for (s in l) Object.prototype.hasOwnProperty.call(l, s) && (t[s] = l[s]);
        p && p(e);
        while (f.length) f.shift()();
        return n.push.apply(n, c || []), a()
    }

    function a() {
        for (var t, e = 0; e < n.length; e++) {
            for (var a = n[e], s = !0, o = 1; o < a.length; o++) {
                var i = a[o];
                0 !== r[i] && (s = !1)
            }
            s && (n.splice(e--, 1), t = l(l.s = a[0]))
        }
        return t
    }
    var s = {},
        o = {
            app: 0
        },
        r = {
            app: 0
        },
        n = [];

    function i(t) {
        return l.p + "js/" + ({} [t] || t) + "." + {
            "chunk-04d2dfca": "1a1a3e01",
            "chunk-96e4e4fc": "1b439854",
            "chunk-97ebee50": "29e0eb2d",
            "chunk-d02b8e9c": "1d9f2efa"
        } [t] + ".js"
    }

    function l(e) {
        if (s[e]) return s[e].exports;
        var a = s[e] = {
            i: e,
            l: !1,
            exports: {}
        };
        return t[e].call(a.exports, a, a.exports, l), a.l = !0, a.exports
    }
    l.e = function (t) {
        var e = [],
            a = {
                "chunk-97ebee50": 1
            };
        o[t] ? e.push(o[t]) : 0 !== o[t] && a[t] && e.push(o[t] = new Promise(function (e, a) {
            for (var s = "css/" + ({} [t] || t) + "." + {
                    "chunk-04d2dfca": "31d6cfe0",
                    "chunk-96e4e4fc": "31d6cfe0",
                    "chunk-97ebee50": "32b42bf8",
                    "chunk-d02b8e9c": "31d6cfe0"
                } [t] + ".css", r = l.p + s, n = document.getElementsByTagName("link"), i = 0; i < n.length; i++) {
                var c = n[i],
                    u = c.getAttribute("data-href") || c.getAttribute("href");
                if ("stylesheet" === c.rel && (u === s || u === r)) return e()
            }
            var f = document.getElementsByTagName("style");
            for (i = 0; i < f.length; i++) {
                c = f[i], u = c.getAttribute("data-href");
                if (u === s || u === r) return e()
            }
            var p = document.createElement("link");
            p.rel = "stylesheet", p.type = "text/css", p.onload = e, p.onerror = function (e) {
                var s = e && e.target && e.target.src || r,
                    n = new Error("Loading CSS chunk " + t + " failed.\n(" + s + ")");
                n.request = s, delete o[t], p.parentNode.removeChild(p), a(n)
            }, p.href = r;
            var g = document.getElementsByTagName("head")[0];
            g.appendChild(p)
        }).then(function () {
            o[t] = 0
        }));
        var s = r[t];
        if (0 !== s)
            if (s) e.push(s[2]);
            else {
                var n = new Promise(function (e, a) {
                    s = r[t] = [e, a]
                });
                e.push(s[2] = n);
                var c, u = document.createElement("script");
                u.charset = "utf-8", u.timeout = 120, l.nc && u.setAttribute("nonce", l.nc), u.src = i(t), c = function (e) {
                    u.onerror = u.onload = null, clearTimeout(f);
                    var a = r[t];
                    if (0 !== a) {
                        if (a) {
                            var s = e && ("load" === e.type ? "missing" : e.type),
                                o = e && e.target && e.target.src,
                                n = new Error("Loading chunk " + t + " failed.\n(" + s + ": " + o + ")");
                            n.type = s, n.request = o, a[1](n)
                        }
                        r[t] = void 0
                    }
                };
                var f = setTimeout(function () {
                    c({
                        type: "timeout",
                        target: u
                    })
                }, 12e4);
                u.onerror = u.onload = c, document.head.appendChild(u)
            } return Promise.all(e)
    }, l.m = t, l.c = s, l.d = function (t, e, a) {
        l.o(t, e) || Object.defineProperty(t, e, {
            enumerable: !0,
            get: a
        })
    }, l.r = function (t) {
        "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }, l.t = function (t, e) {
        if (1 & e && (t = l(t)), 8 & e) return t;
        if (4 & e && "object" === typeof t && t && t.__esModule) return t;
        var a = Object.create(null);
        if (l.r(a), Object.defineProperty(a, "default", {
                enumerable: !0,
                value: t
            }), 2 & e && "string" != typeof t)
            for (var s in t) l.d(a, s, function (e) {
                return t[e]
            }.bind(null, s));
        return a
    }, l.n = function (t) {
        var e = t && t.__esModule ? function () {
            return t["default"]
        } : function () {
            return t
        };
        return l.d(e, "a", e), e
    }, l.o = function (t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, l.p = "/", l.oe = function (t) {
        throw console.error(t), t
    };
    var c = window["webpackJsonp"] = window["webpackJsonp"] || [],
        u = c.push.bind(c);
    c.push = e, c = c.slice();
    for (var f = 0; f < c.length; f++) e(c[f]);
    var p = u;
    n.push([0, "chunk-vendors"]), a()
})({
    0: function (t, e, a) {
        t.exports = a("56d7")
    },
    "0058": function (t) {
        t.exports = {
            FeatureEventName: "Build Actions on Google with Dialogflow | GDG Nagpur Launch",
            EventImage: "aog.jpeg",
            EventDate: {
                Date: "23",
                Month: "6",
                Year: "2019"
            },
            EventTime: {
                StartTime: "10:00 AM",
                EndTime: "01:00 PM"
            },
            EventVenue: "11/5, IT Park, S Ambazari Rd, Opposite VNIT, Nagpur, Maharashtra 440022",
            EventVenueMapLink: "https://goo.gl/maps/4q2ojqFmRXiDHt9r9",
            EventWebsite: "/",
            EventDescription: "Google Developer Group Nagpur is excited to share and invite you to our launch meetup, brings together developers from around the Nagpur for talks, hands-on learning with tech enthusiast, and the first look at Google’s latest developer products.",
            MeetupLink: "https://www.meetup.com/GDG-Nagpur/events/262388298/",
            RegistrationLink: "https://www.meetup.com/GDG-Nagpur/events/262388298/",
            FBEventPageURL: "https://www.facebook.com/GDGNagpur.Official"
        }
    },
    "0f8b": function (t, e, a) {
        t.exports = a.p + "img/aog.e2ff2fe8.png"
    },
    1145: function (t) {
        t.exports = [{
            name: "GDG",
            link: "https://developers.google.com/groups",
            img: "gdglogo.png"
        }, {
            name: "WomenTechmakers",
            link: "https://www.womentechmakers.com/",
            img: "wtm.png"
        }, {
            name: "GDG[x]",
            link: "https://github.com/gdg-x",
            img: "gdg-x.svg"
        }]
    },
    "1d36": function (t, e) {
        t.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAOVBMVEXz9Pa5vsq2u8jN0dnV2N/o6u7w8fTi5OnFydO+ws3f4ee6v8vY2+H29/jy9Pbu7/LJztbCx9HR1ty/NMEIAAAC8ElEQVR4nO3b67ZrMBiFYaSh1HHd/8XuFap1SFolXb7s8T4/18EwOyNCiSIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACryrezAy2kulR+lVl6dqip7Jr412Zyeizj7yjODjYqvhRQTMQm/1rC/OxsvapIht3xehDeN1lIOBSrtt+ZW+t1Kh02GrciEvaDNLl4Ph1e+hqvEk4Z94SZ580WchJGJNyHhH/JlrDR+uC+iU6Yqf7c2JXNga0KTlj/xOP5ujuwdpabML0mz1VXUu7eqtyEP5OAvysdvXerYhMWs4C/a+e9uyg1YXVdXh7sXTtLTagXFcaJ2rlVqQmXgzSOu5f76J5shSasylXC/NVJUbknW6kJLx8lNPNu6WhRaMKPRmmtzB+7WpSasNk+09TjmdPeotSEVbfs0HW7LFXjh2FvUWrC1Z1F1yCt1aRtW4tiE0ZqPk4dp4NUzYaypUW5CaNuGtExjdSLz8HSouCEjRqvnuLcceE/b9D+UQhOGFWZys093e7S2IfoqkFbi5ITRv1NDN24ds7SoKVF4QlfsTa4bjHchOmPI+AiYrgJXQ0uB2qoCWt3g4sWQ034qsF5i4EkbBY3ol43OGsxjIT6luvp7NG+DfhsMYSElc7jpHteAL85BhcthpBQ38zPny1uadD8x3C9JT+habD/RXdfu21rsP822fy5/IR9g/GjxXpjg+ZSKoiEY4OPFrc2GEzCR4O9XL87D4aWcNrgEHFzvkASzhv8UAAJVw3+dwkPNRhAwoMNBpDwYIPiEx5uUHzCww1KT1htX7qEmnD9/SEJSXhutgEJSUjC8/lOKPs+jfla7ajh/qPUhP6Q8C+RcJdKUML7W0HK75vA9+/hrmenM8bHgr/y7pqS8O7a43nEb7x/6Pvo3iddPa3njYx3SKMoO37rwu4mo8LIPJB4fLG2lggZoz3d5l6PQuPWahHTzEgXF79KQQUCAAAAAAAAAAAAAAAAAAAAAAAAAAAAp/gHLTI30QIHnooAAAAASUVORK5CYII="
    },
    "248e": function (t) {
        t.exports = {
            AboutSession: [{
                LinkName: "GDG Nagpur",
                Link: "/"
            }, {
                LinkName: "Google Developers Groups",
                Link: "https://developers.google.com/programs/community/gdg/"
            }, {
                LinkName: "WomenTechamkers",
                Link: "https://www.womentechmakers.com/"
            }, {
                LinkName: "Become a Member",
                Link: "https://www.meetup.com/GDG-Nagpur/"
            }],
            ChapterResourcesSession: [{
                LinkName: "Become a Sponsor",
                Link: "mailto:gdgnagpurofficial@gmail.com"
            }, {
                LinkName: "Call for Speaker",
                Link: "mailto:gdgnagpurofficial@gmail.com"
            }, {
                LinkName: "Media Kit",
                Link: "https://drive.google.com/open?id=1Gfb4qmFF5J8IUOTzRTulcFjxyNA5YqZc"
            }],
            DevConsole: [{
                LinkName: "Google API Console",
                Link: "https://console.developers.google.com/"
            }, {
                LinkName: "GCP Console",
                Link: "https://console.cloud.google.com/"
            }, {
                LinkName: "Google Play Console",
                Link: "https://console.cloud.google.com/"
            }, {
                LinkName: "Firebase Console",
                Link: "https://console.firebase.google.com/"
            }],
            FooterEndSession: [{
                LinkName: "Code of Conduct",
                Link: "https://docs.google.com/document/d/1Wz_w6Z7usMnXKFMpOY4IPbA35twK7Uc4CAxScGDiwOk/edit"
            }, {
                LinkName: "Terms & Servies",
                Link: "https://docs.google.com/document/d/14g3fv9NItiB8Hd-YGYyVYd2N4LRxe6Bx3syWse_wsiA/edit?usp=sharing"
            }]
        }
    },
    "38c8": function (t, e, a) {},
    "3c26": function (t, e, a) {
        t.exports = a.p + "img/gdg.d65d8ad0.jpg"
    },
    4776: function (t, e, a) {
        "use strict";
        var s = a("7739"),
            o = a.n(s);
        o.a
    },
    4805: function (t, e, a) {
        t.exports = a.p + "img/tf.d192dc79.svg"
    },
    "4b69": function (t, e, a) {
        t.exports = a.p + "img/IWD.bccc0753.jpg"
    },
    "4bde": function (t, e, a) {
        "use strict";
        a.d(e, "a", function () {
            return s
        });
        var s = {
            apiKey: "3c226616297ea62053c4c3c18285d",
            urlname: "GDG-Nagpur"
        }
    },
    "4ffd": function (t, e, a) {
        t.exports = a.p + "img/logo.0229df09.png"
    },
    "56d7": function (t, e, a) {
        "use strict";
        a.r(e);
        a("cadf"), a("551c"), a("f751"), a("097d");
        var s = a("2b0e"),
            o = a("ce5b"),
            r = a.n(o);
        a("bf40");
        s["default"].use(r.a, {
            theme: {
                primary: "#518FF5",
                secondary: "#424242",
                accent: "#82B1FF",
                error: "#FF5252",
                info: "#2196F3",
                success: "#4CAF50",
                warning: "#FFC107"
            },
            iconfont: "md"
        });
        var n = function () {
                var t = this,
                    e = t.$createElement,
                    a = t._self._c || e;
                return a("v-app", {
                    staticClass: "white"
                }, [a("v-snackbar", {
                    staticClass: "snack",
                    attrs: {
                        timeout: t.timeout,
                        bottom: "",
                        left: ""
                    },
                    model: {
                        value: t.snackWithButtons,
                        callback: function (e) {
                            t.snackWithButtons = e
                        },
                        expression: "snackWithButtons"
                    }
                }, [t._v("\n      " + t._s(t.snackWithBtnText) + "\n      "), a("v-spacer"), a("v-btn", {
                    attrs: {
                        dark: "",
                        flat: "",
                        color: "#00f500"
                    },
                    nativeOn: {
                        click: function (e) {
                            return t.refreshApp(e)
                        }
                    }
                }, [t._v("\n        " + t._s(t.snackBtnText) + "\n      ")]), a("v-btn", {
                    attrs: {
                        icon: ""
                    },
                    on: {
                        click: function (e) {
                            t.snackWithButtons = !1
                        }
                    }
                }, [a("v-icon", [t._v("close")])], 1)], 1), a("CoreToolbar"), a("CoreDrawer"), a("CoreView"), a("CoreFooter"), a("BottomNav")], 1)
            },
            i = [],
            l = function () {
                var t = this,
                    e = t.$createElement,
                    s = t._self._c || e;
                return s("v-navigation-drawer", {
                    attrs: {
                        app: "",
                        temporary: ""
                    },
                    model: {
                        value: t.drawer,
                        callback: function (e) {
                            t.drawer = e
                        },
                        expression: "drawer"
                    }
                }, [s("v-flex", {
                    staticClass: "pl-3 pt-5 grey lighten-5 pb-2",
                    attrs: {
                        xs12: ""
                    }
                }, [s("v-img", {
                    attrs: {
                        src: a("4ffd"),
                        "lazy-src": a("4ffd"),
                        width: "10vh"
                    }
                }, [s("v-layout", {
                    attrs: {
                        slot: "placeholder",
                        "fill-height": "",
                        "align-center": "",
                        "justify-center": "",
                        "ma-0": ""
                    },
                    slot: "placeholder"
                }, [s("v-progress-circular", {
                    attrs: {
                        indeterminate: "",
                        color: "grey lighten-5"
                    }
                })], 1)], 1), s("p", {
                    staticClass: "google-font mt-2",
                    staticStyle: {
                        "font-size": "130%"
                    }
                }, [t._v(t._s(t.ChapterDetails.ChapterName))])], 1), s("v-list", t._l(t.links, function (e, a) {
                    return s("v-list-tile", {
                        key: a,
                        staticClass: "google-font",
                        attrs: {
                            to: e.to,
                            href: e.href
                        },
                        on: {
                            click: function (a) {
                                return t.onClick(a, e)
                            }
                        }
                    }, [s("v-list-tile-action", [s("v-icon", [t._v(t._s(e.icon))])], 1), s("v-list-tile-content", [s("v-list-tile-title", {
                        domProps: {
                            textContent: t._s(e.text)
                        }
                    })], 1)], 1)
                }), 1)], 1)
            },
            c = [],
            u = a("cebc"),
            f = a("96a1"),
            p = a("2f62"),
            g = {
                name: "CoreDrawer",
                data: function () {
                    return {
                        ChapterDetails: f
                    }
                },
                computed: Object(u["a"])({}, Object(p["b"])(["links"]), {
                    drawer: {
                        get: function () {
                            return this.$store.state.drawer
                        },
                        set: function (t) {
                            this.setDrawer(t)
                        }
                    }
                }),
                methods: Object(u["a"])({}, Object(p["c"])(["setDrawer"]), {
                    onClick: function (t, e) {
                        if (t.stopPropagation(), "/" === e.to) return this.$vuetify.goTo(0), void this.setDrawer(!1);
                        !e.to && e.href && (this.$vuetify.goTo(e.href), this.setDrawer(!1))
                    }
                })
            },
            v = g,
            d = a("2877"),
            m = Object(d["a"])(v, l, c, !1, null, null, null),
            h = m.exports,
            b = function () {
                var t = this,
                    e = t.$createElement,
                    a = t._self._c || e;
                return a("v-toolbar", {
                    attrs: {
                        app: "",
                        color: "white",
                        height: "55px",
                        "scroll-off-screen": ""
                    }
                }, [a("v-toolbar-side-icon", {
                    staticClass: "hidden-md-and-up",
                    on: {
                        click: t.toggleDrawer
                    }
                }), a("v-toolbar-title", {
                    staticClass: "ml-0 pl-1 mr-1"
                }, [a("span", {
                    staticClass: "google-font"
                }, [t._v(t._s(t.ChapterDetails.ChapterName))])]), a("v-spacer"), t._l(t.links, function (e, s) {
                    return a("v-btn", {
                        key: s,
                        staticClass: "ml-0 google-font hidden-sm-and-down",
                        staticStyle: {
                            "text-transform": "capitalize"
                        },
                        attrs: {
                            to: e.to,
                            flat: ""
                        },
                        on: {
                            click: function (a) {
                                return t.onClick(a, e)
                            }
                        }
                    }, [t._v("\n      " + t._s(e.text) + "\n  ")])
                })], 2)
            },
            y = [],
            w = {
                data: function () {
                    return {
                        ChapterDetails: f
                    }
                },
                computed: Object(u["a"])({}, Object(p["b"])(["links"])),
                methods: Object(u["a"])({}, Object(p["c"])(["toggleDrawer"]), {
                    onClick: function (t, e) {
                        t.stopPropagation(), !e.to && e.href && this.$vuetify.goTo(e.href)
                    }
                })
            },
            x = w,
            C = Object(d["a"])(x, b, y, !1, null, null, null),
            _ = C.exports,
            k = function () {
                var t = this,
                    e = t.$createElement,
                    a = t._self._c || e;
                return a("v-footer", {
                    staticClass: "hidden-sm-and-down",
                    attrs: {
                        color: "white",
                        height: "auto"
                    }
                }, [a("v-container", {
                    staticStyle: {
                        "border-color": "#e0e0e0",
                        "border-width": "1px",
                        "border-style": "solid",
                        "border-bottom": "0"
                    },
                    attrs: {
                        fluid: ""
                    }
                }, [a("v-layout", {
                    staticClass: "my-0 py-0",
                    attrs: {
                        wrap: "",
                        "align-center": "",
                        "justify-center": "",
                        row: "",
                        "fill-height": ""
                    }
                }, [a("v-flex", {
                    staticClass: "py-0 my-0",
                    attrs: {
                        xs12: "",
                        md10: "",
                        sm10: "",
                        lg10: ""
                    }
                }, [a("p", {
                    staticClass: "google-font",
                    staticStyle: {
                        "font-size": "130%"
                    }
                }, [t._v("Follow Us:\n          "), t._l(t.ChapterDetails.socialLinks, function (e, s) {
                    return a("span", {
                        key: s
                    }, [a("v-tooltip", {
                        attrs: {
                            top: ""
                        }
                    }, [a("v-btn", {
                        attrs: {
                            slot: "activator",
                            flat: "",
                            icon: "",
                            href: e.link,
                            target: "_blank"
                        },
                        slot: "activator"
                    }, [a("v-icon", [t._v(t._s(e.icon))])], 1), a("span", [t._v(t._s(e.name))])], 1)], 1)
                })], 2), a("v-divider")], 1)], 1), a("v-layout", {
                    attrs: {
                        wrap: "",
                        "justify-center": "",
                        row: ""
                    }
                }, [a("v-flex", {
                    attrs: {
                        xs12: "",
                        md10: "",
                        lg10: ""
                    }
                }, [a("v-layout", {
                    staticClass: "my-2",
                    attrs: {
                        wrap: "",
                        "align-start": "",
                        "justify-start": "",
                        row: ""
                    }
                }, [a("v-flex", {
                    staticClass: "py-2",
                    attrs: {
                        xs12: "",
                        md3: "",
                        sm4: "",
                        lg3: ""
                    }
                }, [a("p", {
                    staticClass: "google-font mb-0",
                    staticStyle: {
                        "font-size": "140%",
                        "font-weight": "300"
                    }
                }, [a("b", [t._v("About")])]), t._l(t.FooterData.AboutSession, function (e, s) {
                    return a("div", {
                        key: s,
                        staticClass: "mt-1"
                    }, [a("a", {
                        staticClass: "google-font",
                        staticStyle: {
                            color: "#3E4551",
                            "text-decoration": "none",
                            "font-size": "110%"
                        },
                        attrs: {
                            href: e.Link,
                            target: "_blank"
                        }
                    }, [t._v(t._s(e.LinkName))]), a("br")])
                })], 2), a("v-flex", {
                    staticClass: "py-2",
                    attrs: {
                        xs12: "",
                        md3: "",
                        sm4: "",
                        lg3: ""
                    }
                }, [a("p", {
                    staticClass: "google-font mb-0",
                    staticStyle: {
                        "font-size": "140%",
                        "font-weight": "300"
                    }
                }, [a("b", [t._v("Resources")])]), t._l(t.FooterData.ChapterResourcesSession, function (e, s) {
                    return a("div", {
                        key: s,
                        staticClass: "mt-1"
                    }, [a("a", {
                        staticClass: "google-font",
                        staticStyle: {
                            color: "#3E4551",
                            "text-decoration": "none",
                            "font-size": "110%"
                        },
                        attrs: {
                            href: e.Link,
                            target: "_blank"
                        }
                    }, [t._v(t._s(e.LinkName))]), a("br")])
                })], 2), a("v-flex", {
                    staticClass: "py-2",
                    attrs: {
                        xs12: "",
                        md3: "",
                        sm4: "",
                        lg3: ""
                    }
                }, [a("p", {
                    staticClass: "google-font mb-0",
                    staticStyle: {
                        "font-size": "140%",
                        "font-weight": "300"
                    }
                }, [a("b", [t._v("Developer Console")])]), t._l(t.FooterData.DevConsole, function (e, s) {
                    return a("div", {
                        key: s,
                        staticClass: "mt-1"
                    }, [a("a", {
                        staticClass: "google-font",
                        staticStyle: {
                            color: "#3E4551",
                            "text-decoration": "none",
                            "font-size": "110%"
                        },
                        attrs: {
                            href: e.Link,
                            target: "_blank"
                        }
                    }, [t._v(t._s(e.LinkName))]), a("br")])
                })], 2)], 1)], 1)], 1), a("v-layout", {
                    staticClass: "mb-0",
                    attrs: {
                        wrap: "",
                        "justify-center": "",
                        row: ""
                    }
                }, [a("v-flex", {
                    attrs: {
                        xs12: "",
                        md10: "",
                        lg10: ""
                    }
                }, [a("v-divider"), a("v-toolbar", {
                    staticClass: "pa-0 mx-0",
                    staticStyle: {
                        padding: "0 !important"
                    },
                    attrs: {
                        flat: "",
                        color: "white"
                    }
                }, [a("v-toolbar-title", {
                    staticClass: "google-font pl-0 ml-0 mr-3",
                    staticStyle: {
                        "font-size": "200%"
                    }
                }, [t._v(t._s(t.ChapterDetails.ChapterName))]), t._l(t.FooterData.FooterEndSession, function (e, s) {
                    return a("v-btn", {
                        key: s,
                        staticClass: "ml-0 google-font hidden-sm-and-down",
                        staticStyle: {
                            "text-transform": "capitalize",
                            "font-size": "110%"
                        },
                        attrs: {
                            href: e.Link,
                            target: "_blank",
                            flat: ""
                        }
                    }, [t._v("\n                " + t._s(e.LinkName) + "\n            ")])
                })], 2)], 1)], 1)], 1)], 1)
            },
            D = [],
            A = a("248e"),
            S = {
                data: function () {
                    return {
                        ChapterDetails: f,
                        FooterData: A
                    }
                }
            },
            G = S,
            N = Object(d["a"])(G, k, D, !1, null, null, null),
            j = N.exports,
            E = function () {
                var t = this,
                    e = t.$createElement,
                    a = t._self._c || e;
                return a("v-content", {
                    staticClass: "pb-0",
                    attrs: {
                        id: "home"
                    }
                }, [a("v-slide-y-reverse-transition", [a("router-view", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: t.show,
                        expression: "show"
                    }]
                })], 1)], 1)
            },
            F = [],
            L = {
                created: function () {
                    this.show = !0
                }
            },
            z = L,
            O = Object(d["a"])(z, E, F, !1, null, null, null),
            P = O.exports,
            M = function () {
                var t = this,
                    e = t.$createElement,
                    a = t._self._c || e;
                return a("v-card", {
                    staticClass: "white hidden-sm-and-up",
                    attrs: {
                        color: "white",
                        height: "60px",
                        flat: ""
                    }
                }, [a("v-bottom-nav", {
                    staticClass: "elevation-2",
                    attrs: {
                        active: t.bottomNav,
                        value: !0,
                        app: "",
                        color: "white"
                    },
                    on: {
                        "update:active": function (e) {
                            t.bottomNav = e
                        }
                    }
                }, [a("v-btn", {
                    attrs: {
                        color: "#518FF5",
                        flat: "",
                        value: "Home",
                        router: "",
                        to: "/home"
                    }
                }, [a("span", [t._v("Home")]), a("v-icon", [t._v("dashboard")])], 1), a("v-btn", {
                    attrs: {
                        color: "#518FF5",
                        flat: "",
                        value: "events",
                        router: "",
                        to: "/events"
                    }
                }, [a("span", [t._v("Events")]), a("v-icon", [t._v("rounded_corner")])], 1), a("v-btn", {
                    attrs: {
                        color: "#518FF5",
                        flat: "",
                        value: "team",
                        router: "",
                        to: "/team"
                    }
                }, [a("span", [t._v("Team")]), a("v-icon", [t._v("group")])], 1), a("v-btn", {
                    attrs: {
                        color: "#518FF5",
                        flat: "",
                        value: "about",
                        router: "",
                        to: "/about"
                    }
                }, [a("span", [t._v("About")]), a("v-icon", [t._v("toc")])], 1)], 1)], 1)
            },
            T = [],
            W = {
                data: function () {
                    return {
                        bottomNav: "recent",
                        items: [{
                            title: "Home",
                            icon: "dashboard",
                            route: "/home"
                        }, {
                            title: "Attending",
                            icon: "rounded_corner",
                            route: "/attending"
                        }, {
                            title: "Sessions",
                            icon: "toc",
                            route: "/sessions"
                        }, {
                            title: "Speakers",
                            icon: "group",
                            route: "/speakers"
                        }]
                    }
                }
            },
            V = W,
            U = Object(d["a"])(V, M, T, !1, null, null, null),
            K = U.exports,
            B = {
                name: "App",
                components: {
                    CoreDrawer: h,
                    CoreToolbar: _,
                    CoreFooter: j,
                    CoreView: P,
                    BottomNav: K
                },
                data: function () {
                    return {
                        refreshing: !1,
                        registration: null,
                        snackBtnText: "",
                        snackWithBtnText: "",
                        snackWithButtons: !1,
                        timeout: 6e3
                    }
                },
                created: function () {
                    var t = this;
                    document.addEventListener("swUpdated", this.showRefreshUI, {
                        once: !0
                    }), navigator.serviceWorker.addEventListener("controllerchange", function () {
                        t.refreshing || (t.refreshing = !0, window.location.reload())
                    })
                },
                methods: {
                    showRefreshUI: function (t) {
                        this.registration = t.detail, this.snackBtnText = "Refresh", this.snackWithBtnText = "New version available!", this.snackWithButtons = !0
                    },
                    refreshApp: function () {
                        this.snackWithButtons = !1, this.registration && this.registration.waiting && this.registration.waiting.postMessage("skipWaiting")
                    }
                }
            },
            X = B,
            H = (a("697b"), Object(d["a"])(X, n, i, !1, null, "13cf4109", null)),
            I = H.exports,
            R = a("8c4f"),
            q = function () {
                var t = this,
                    e = t.$createElement,
                    a = t._self._c || e;
                return a("v-content", {
                    staticClass: "pa-0"
                }, [a("v-container", {
                    staticClass: "my-4",
                    attrs: {
                        fluid: ""
                    }
                }, [a("v-layout", {
                    attrs: {
                        wrap: "",
                        "align-center": "",
                        "justify-center": "",
                        row: "",
                        "fill-height": ""
                    }
                }, [a("v-flex", {
                    attrs: {
                        xs12: "",
                        md10: ""
                    }
                }, [a("HomeStartScreen")], 1)], 1)], 1), a("v-container", {
                    staticStyle: {
                        "background-color": "#F9F9F9"
                    },
                    attrs: {
                        fluid: ""
                    }
                }, [a("v-layout", {
                    attrs: {
                        wrap: "",
                        "align-center": "",
                        "justify-center": "",
                        row: "",
                        "fill-height": ""
                    }
                }, [a("v-flex", {
                    attrs: {
                        xs12: "",
                        md10: ""
                    }
                }, [a("whatWeDo")], 1)], 1)], 1), a("v-container", {
                    staticStyle: {
                        "background-color": "#4C4A78"
                    },
                    attrs: {
                        fluid: ""
                    }
                }, [a("v-layout", {
                    attrs: {
                        wrap: "",
                        "align-center": "",
                        "justify-center": "",
                        row: "",
                        "fill-height": ""
                    }
                }, [a("v-flex", {
                    attrs: {
                        xs12: "",
                        md10: ""
                    }
                }, [a("AboutGDGChapter")], 1)], 1)], 1), a("v-container", {
                    attrs: {
                        fluid: ""
                    }
                }, [a("v-layout", {
                    attrs: {
                        wrap: "",
                        "align-center": "",
                        "justify-center": "",
                        row: "",
                        "fill-height": ""
                    }
                }, [a("v-flex", {
                    attrs: {
                        xs12: "",
                        md10: ""
                    }
                }, [a("eventshowcase")], 1)], 1)], 1), a("v-container", {
                    staticClass: "py-5",
                    staticStyle: {
                        "background-color": "#F9F9F9"
                    },
                    attrs: {
                        fluid: ""
                    }
                }, [a("v-layout", {
                    attrs: {
                        wrap: "",
                        "align-start": "",
                        "justify-start": "",
                        row: "",
                        "fill-height": ""
                    }
                }, [a("v-flex", {
                    attrs: {
                        xs12: "",
                        md10: "",
                        "offset-md1": "",
                        "offset-lg1": ""
                    }
                }, [a("p", {
                    staticClass: "google-font mb-2",
                    staticStyle: {
                        "font-size": "150%"
                    }
                }, [t._v("Our Feature Event & Meetup")])]), a("v-flex", {
                    attrs: {
                        xs12: "",
                        md10: "",
                        "offset-md1": "",
                        "offset-lg1": ""
                    }
                }, [a("featureEvent")], 1)], 1)], 1), a("v-container", {
                    attrs: {
                        fluid: ""
                    }
                }, [a("v-layout", {
                    attrs: {
                        wrap: "",
                        "align-center": "",
                        "justify-center": "",
                        row: "",
                        "fill-height": ""
                    }
                }, [a("v-flex", {
                    attrs: {
                        xs12: "",
                        md10: ""
                    }
                }, [a("partners")], 1)], 1)], 1)], 1)
            },
            J = [],
            Y = function () {
                var t = this,
                    e = t.$createElement,
                    s = t._self._c || e;
                return s("v-container", {
                    staticClass: "pa-0"
                }, [s("v-layout", {
                    attrs: {
                        wrap: "",
                        "align-center": "",
                        "justify-center": "",
                        row: "",
                        "fill-height": ""
                    }
                }, [s("v-flex", {
                    staticClass: "text-xs-center pa-3",
                    attrs: {
                        xs12: "",
                        sm5: "",
                        md3: "",
                        lg3: "",
                        xl3: ""
                    }
                }, [s("v-img", {
                    attrs: {
                        src: a("3c26"),
                        "lazy-src": a("3c26"),
                        width: "100%"
                    }
                }, [s("v-layout", {
                    attrs: {
                        slot: "placeholder",
                        "fill-height": "",
                        "align-center": "",
                        "justify-center": "",
                        "ma-0": ""
                    },
                    slot: "placeholder"
                }, [s("v-progress-circular", {
                    attrs: {
                        indeterminate: "",
                        color: "grey lighten-5"
                    }
                })], 1)], 1)], 1), s("v-flex", {
                    attrs: {
                        xs12: "",
                        sm7: "",
                        md8: "",
                        lg8: "",
                        xl8: ""
                    }
                }, [s("p", {
                    staticClass: "google-font mb-1",
                    staticStyle: {
                        "font-weight": "350",
                        color: "#616161",
                        "font-size": "300%"
                    }
                }, [s("b", [t._v("Make good things \n                "), s("span", {
                    staticStyle: {
                        color: "#1a73e8"
                    }
                }, [t._v("together")]), t._v(".")])]), s("p", {
                    staticClass: "google-font mt-0",
                    staticStyle: {
                        "font-size": "180%"
                    }
                }, [t._v(t._s(t.chapterDetails.ChapterName))]), s("p", {
                    staticClass: "google-font",
                    staticStyle: {
                        "font-size": "110%"
                    }
                }, [t._v(t._s(t.chapterDetails.ChapterShortDescription))]), s("p", {
                    staticClass: "google-font",
                    staticStyle: {
                        "font-size": "110%",
                        color: "#9e9e9e"
                    }
                }, t._l(t.chapterDetails.ChapterHashTags, function (e, a) {
                    return s("span", {
                        key: a
                    }, [t._v("\n                    #" + t._s(e) + "  \n                ")])
                }), 0), s("v-btn", {
                    staticClass: "ma-0 google-font elevation-1",
                    staticStyle: {
                        "text-transform": "capitalize",
                        "border-radius": "5px",
                        color: "white"
                    },
                    attrs: {
                        href: t.chapterDetails.ChapterMeetupLink,
                        target: "_blank",
                        color: "#1a73e8"
                    }
                }, [t._v("Become a Member")]), t._v("\n\n             \n\n            "), s("v-btn", {
                    staticClass: "ml-0",
                    staticStyle: {
                        "text-transform": "capitalize",
                        "border-radius": "5px"
                    },
                    attrs: {
                        href: t.chapterDetails.GDGProgramWebsite,
                        target: "_blank",
                        round: "",
                        color: "cyan",
                        outline: "",
                        dark: ""
                    }
                }, [t._v("Learn More")])], 1)], 1)], 1)
            },
            Z = [],
            Q = {
                data: function () {
                    return {
                        chapterDetails: f
                    }
                }
            },
            $ = Q,
            tt = Object(d["a"])($, Y, Z, !1, null, null, null),
            et = tt.exports,
            at = function () {
                var t = this,
                    e = t.$createElement,
                    a = t._self._c || e;
                return a("v-container", {
                    staticClass: "pa-0"
                }, [a("v-layout", {
                    attrs: {
                        wrap: "",
                        "align-center": "",
                        "justify-center": "",
                        row: "",
                        "fill-height": ""
                    }
                }, [a("v-flex", {
                    staticClass: "pa-2",
                    attrs: {
                        xs12: "",
                        md3: "",
                        lg3: ""
                    }
                }, [a("p", {
                    staticClass: "google-font",
                    staticStyle: {
                        "font-size": "180%"
                    }
                }, [t._v("What we do?")]), a("p", {
                    staticClass: "google-font",
                    staticStyle: {
                        "font-size": "110%"
                    }
                }, [t._v("Google Developer Groups (GDGs) are for developers who are interested in Google's developer technology.")]), a("p", {
                    staticClass: "google-font",
                    staticStyle: {
                        "font-size": "110%"
                    }
                }, [t._v("About different Google technologies")]), t._l(t.whatWeDoData, function (e, s) {
                    return a("span", {
                        key: s
                    }, [a("v-tooltip", {
                        attrs: {
                            bottom: ""
                        },
                        scopedSlots: t._u([{
                            key: "activator",
                            fn: function (s) {
                                var o = s.on;
                                return [a("a", {
                                    staticClass: "ma-0",
                                    attrs: {
                                        href: e.link,
                                        target: "_blank",
                                        flat: ""
                                    }
                                }, [a("img", t._g({
                                    attrs: {
                                        src: t.getImgUrl(e.image),
                                        width: "30vh",
                                        alt: "",
                                        srcset: "",
                                        dark: ""
                                    }
                                }, o))]), t._v(" \n                           \n                    ")]
                            }
                        }], null, !0)
                    }, [a("span", [t._v(t._s(e.TechName))])])], 1)
                }), a("br"), a("br"), a("v-btn", {
                    staticClass: "ml-0 google-font hidden-md-and-down",
                    staticStyle: {
                        "text-transform": "capitalize",
                        "border-radius": "5px"
                    },
                    attrs: {
                        href: t.chapterDetails.GDGProgramWebsite,
                        outline: "",
                        target: "_blank",
                        round: "",
                        color: "cyan",
                        flat: "",
                        dark: ""
                    }
                }, [t._v("Learn More")])], 2), a("v-flex", {
                    attrs: {
                        xs12: "",
                        md9: "",
                        lg9: ""
                    }
                }, [a("v-layout", {
                    attrs: {
                        row: "",
                        wrap: ""
                    }
                }, [a("v-flex", {
                    staticClass: "text-xs-center pa-2",
                    attrs: {
                        xs6: "",
                        sm6: "",
                        md3: "",
                        lg3: ""
                    }
                }, [a("v-icon", {
                    staticStyle: {
                        "font-size": "300%"
                    },
                    attrs: {
                        large: ""
                    }
                }, [t._v("chat_bubble")]), a("p", {
                    staticClass: "google-font",
                    staticStyle: {
                        "font-size": "130%"
                    }
                }, [t._v("Talks")]), a("p", {
                    staticClass: "google-font",
                    staticStyle: {
                        "font-size": "110%"
                    }
                }, [t._v("Get updated with the latest news and announcements")])], 1), a("v-flex", {
                    staticClass: "text-xs-center pa-2",
                    attrs: {
                        xs6: "",
                        sm6: "",
                        md3: "",
                        lg3: ""
                    }
                }, [a("v-icon", {
                    staticStyle: {
                        "font-size": "300%"
                    },
                    attrs: {
                        large: ""
                    }
                }, [t._v("code")]), a("p", {
                    staticClass: "google-font",
                    staticStyle: {
                        "font-size": "130%"
                    }
                }, [t._v("Codelabs")]), a("p", {
                    staticClass: "google-font",
                    staticStyle: {
                        "font-size": "110%"
                    }
                }, [t._v("Get hands-on experience and guidance from the community members")])], 1), a("v-flex", {
                    staticClass: "text-xs-center pa-2",
                    attrs: {
                        xs6: "",
                        sm6: "",
                        md3: "",
                        lg3: ""
                    }
                }, [a("v-icon", {
                    staticStyle: {
                        "font-size": "300%"
                    },
                    attrs: {
                        large: ""
                    }
                }, [t._v("school")]), a("p", {
                    staticClass: "google-font",
                    staticStyle: {
                        "font-size": "130%"
                    }
                }, [t._v("Campus Roadshows")]), a("p", {
                    staticClass: "google-font",
                    staticStyle: {
                        "font-size": "110%"
                    }
                }, [t._v("Share knowledge in different Companies, colleges and universities")])], 1), a("v-flex", {
                    staticClass: "text-xs-center pa-2",
                    attrs: {
                        xs6: "",
                        sm6: "",
                        md3: "",
                        lg3: ""
                    }
                }, [a("v-icon", {
                    staticStyle: {
                        "font-size": "300%"
                    },
                    attrs: {
                        large: ""
                    }
                }, [t._v("airplay")]), a("p", {
                    staticClass: "google-font",
                    staticStyle: {
                        "font-size": "130%"
                    }
                }, [t._v("Live Viewing Parties")]), a("p", {
                    staticClass: "google-font",
                    staticStyle: {
                        "font-size": "110%"
                    }
                }, [t._v("Share knowledge in different Companies, colleges and universities")])], 1)], 1)], 1)], 1)], 1)
            },
            st = [],
            ot = a("b610"),
            rt = {
                data: function () {
                    return {
                        chapterDetails: f,
                        whatWeDoData: ot
                    }
                },
                methods: {
                    getImgUrl: function (t) {
                        return t.length > 0 ? a("8fc8")("./" + t) : a("1d36")
                    }
                }
            },
            nt = rt,
            it = Object(d["a"])(nt, at, st, !1, null, null, null),
            lt = it.exports,
            ct = function () {
                var t = this,
                    e = t.$createElement,
                    a = t._self._c || e;
                return a("v-container", {
                    staticClass: "pa-0 white--text"
                }, [a("v-layout", {
                    staticClass: "my-3",
                    attrs: {
                        wrap: "",
                        "align-center": "",
                        "justify-center": "",
                        row: "",
                        "fill-height": ""
                    }
                }, [a("v-flex", {
                    staticClass: "pa-2",
                    attrs: {
                        xs12: "",
                        md12: "",
                        lg12: ""
                    }
                }, [a("p", {
                    staticClass: "google-font",
                    staticStyle: {
                        "font-size": "150%"
                    }
                }, [t._v("About " + t._s(t.chapterDetails.ChapterName))]), a("p", {
                    staticClass: "google-font",
                    staticStyle: {
                        "font-size": "110%"
                    }
                }, [t._v("\n               " + t._s(t.chapterDetails.ChapterLongDec) + "\n           ")]), a("v-btn", {
                    staticClass: "ma-0 google-font",
                    staticStyle: {
                        "border-radius": "5px",
                        "text-transform": "capitalize"
                    },
                    attrs: {
                        href: t.chapterDetails.ChapterMeetupLink,
                        target: "_blank",
                        outline: "",
                        color: "white"
                    }
                }, [t._v("Meetup Page")]), t._v("\n            \n           "), a("v-btn", {
                    staticClass: "ma-0 google-font",
                    staticStyle: {
                        "border-radius": "5px",
                        "text-transform": "capitalize"
                    },
                    attrs: {
                        href: t.chapterDetails.socialLinks[0].link,
                        target: "_blank",
                        outline: "",
                        color: "white"
                    }
                }, [t._v("Facebook Page")]), a("br"), a("br"), a("router-link", {
                    staticClass: "google-font",
                    staticStyle: {
                        "text-decoration": "none",
                        color: "white"
                    },
                    attrs: {
                        to: "/about"
                    }
                }, [t._v("See More about " + t._s(t.chapterDetails.ChapterName))])], 1)], 1)], 1)
            },
            ut = [],
            ft = {
                data: function () {
                    return {
                        chapterDetails: f
                    }
                }
            },
            pt = ft,
            gt = Object(d["a"])(pt, ct, ut, !1, null, null, null),
            vt = gt.exports,
            dt = function () {
                var t = this,
                    e = t.$createElement,
                    a = t._self._c || e;
                return a("v-container", {
                    staticClass: "pa-0"
                }, [a("v-snackbar", {
                    attrs: {
                        bottom: "",
                        left: ""
                    },
                    model: {
                        value: t.errorAlert,
                        callback: function (e) {
                            t.errorAlert = e
                        },
                        expression: "errorAlert"
                    }
                }, [t._v("\n        " + t._s(t.errorMsg) + "\n        "), a("v-btn", {
                    attrs: {
                        color: "pink",
                        flat: ""
                    },
                    on: {
                        click: function (e) {
                            t.errorAlert = !1
                        }
                    }
                }, [t._v("\n            Close\n        ")])], 1), a("v-layout", {
                    staticClass: "my-3 ",
                    attrs: {
                        wrap: "",
                        "align-center": "",
                        "justify-center": "",
                        row: "",
                        "fill-height": ""
                    }
                }, [a("v-flex", {
                    staticClass: "pa-2 text-xs-center",
                    attrs: {
                        xs12: "",
                        md9: "",
                        lg9: ""
                    }
                }, [a("p", {
                    staticClass: "google-font",
                    staticStyle: {
                        "font-size": "170%"
                    }
                }, [t._v("Our Events & Meetups")]), a("p", {
                    staticClass: "google-font",
                    staticStyle: {
                        "font-size": "120%"
                    }
                }, [t._v("\n               At sessions that span from the technical to the visionary, let’s celebrate and discover what the technologies can enable: how product innovation, open source, and ML and AI can propel enterprises forward and solve the big problems that impact all of us.\n           ")]), a("router-link", {
                    staticClass: "ma-0 google-font",
                    staticStyle: {
                        "border-radius": "5px",
                        "text-transform": "capitalize",
                        "text-decoration": "none",
                        color: "#4C4A78"
                    },
                    attrs: {
                        to: "/events",
                        flat: "",
                        color: "#4C4A78"
                    }
                }, [t._v("See More")])], 1)], 1), a("v-layout", {
                    staticClass: "hidden-sm-and-down mb-4",
                    attrs: {
                        wrap: "",
                        "align-start": "",
                        "justify-center": "",
                        row: "",
                        "fill-height": ""
                    }
                }, [t.showLoader ? a("v-flex", {
                    attrs: {
                        xs12: ""
                    }
                }, [a("v-layout", {
                    attrs: {
                        row: "",
                        wrap: ""
                    }
                }, t._l(1, function (t) {
                    return a("v-flex", {
                        key: "4" + t,
                        attrs: {
                            xs12: "",
                            sm6: "",
                            md3: "",
                            lg3: ""
                        }
                    }, [a("v-card", {
                        staticClass: "ma-1 pa-1 my-0 elevation-0",
                        staticStyle: {
                            "border-radius": "7px",
                            border: "1px #ddd solid"
                        },
                        attrs: {
                            flat: ""
                        }
                    }, [a("v-card-title", {
                        staticClass: "mb-0"
                    }, [a("div", [a("p", {
                        staticClass: "google-font mb-2 animate-shimmer",
                        staticStyle: {
                            color: "#424242",
                            width: "200px",
                            height: "20px"
                        }
                    }), a("p", {
                        staticClass: "google-font mt-1 mb-0 animate-shimmer",
                        staticStyle: {
                            color: "#424242",
                            width: "100px",
                            height: "20px"
                        }
                    }), a("p", {
                        staticClass: "google-font mt-1 mb-0 animate-shimmer",
                        staticStyle: {
                            color: "#424242",
                            width: "100px",
                            height: "20px"
                        }
                    }), a("p", {
                        staticClass: "google-font mt-1 mb-0 animate-shimmer",
                        staticStyle: {
                            color: "#424242",
                            width: "100px",
                            height: "20px"
                        }
                    })])]), a("v-card-actions", {
                        staticClass: "mt-0"
                    }, [a("v-spacer"), a("span", {
                        staticClass: "animate-shimmer",
                        staticStyle: {
                            color: "#424242",
                            width: "60px",
                            height: "25px"
                        }
                    })], 1)], 1)], 1)
                }), 1)], 1) : t._e(), t._l(t.eventsData, function (e, s) {
                    return a("v-flex", {
                        key: s,
                        attrs: {
                            xs12: "",
                            sm6: "",
                            md3: "",
                            lg3: ""
                        }
                    }, [a("v-card", {
                        staticClass: "ma-1 pa-1 my-0",
                        staticStyle: {
                            border: "1px solid #e0e0e0",
                            "min-height": "160px",
                            "border-radius": "7px"
                        },
                        attrs: {
                            flat: ""
                        }
                    }, [a("v-card-title", {
                        staticClass: "mb-0"
                    }, [a("div", [a("p", {
                        staticClass: "google-font mb-0",
                        staticStyle: {
                            "font-size": "130%"
                        }
                    }, [t._v(t._s(t._f("summery")(e.name, 25)))]), a("p", {
                        staticClass: "google-font mt-1 mb-0",
                        staticStyle: {
                            "font-size": "110%"
                        }
                    }, [a("v-icon", {
                        attrs: {
                            small: ""
                        }
                    }, [t._v("insert_invitation")]), t._v("\n                            " + t._s(t._f("dateFilter")(e.local_date)) + "\n                        ")], 1), a("p", {
                        staticClass: "google-font mt-0 mb-0",
                        staticStyle: {
                            "font-size": "110%"
                        }
                    }, [a("v-icon", {
                        attrs: {
                            small: ""
                        }
                    }, [t._v("watch_later")]), t._v("\n                            " + t._s(e.local_time) + "\n                        ")], 1), a("p", {
                        staticClass: "google-font mt-0 mb-0",
                        staticStyle: {
                            "font-size": "110%"
                        }
                    }, [a("v-icon", {
                        attrs: {
                            small: ""
                        }
                    }, [t._v("map")]), t._v("\n                            " + t._s(t._f("summery")(e.venue.name, 30)) + "\n                        ")], 1)])]), a("v-card-actions", {
                        staticClass: "mt-0"
                    }, [a("v-spacer"), a("v-btn", {
                        staticClass: "mb-0 ml-0 mt-0 google-font",
                        staticStyle: {
                            "border-radius": "7px",
                            "text-transform": "capitalize"
                        },
                        attrs: {
                            flat: "",
                            color: "#4C4A78",
                            href: e.link,
                            target: "_blank"
                        }
                    }, [t._v("See More")])], 1)], 1)], 1)
                }), 1 == t.notFoundEventFlag ? a("v-flex", {
                    staticClass: "text-xs-center",
                    attrs: {
                        xs12: ""
                    }
                }, [a("p", {
                    staticClass: "google-font px-2",
                    staticStyle: {
                        "font-size": "140%"
                    }
                }, [a("v-icon", [t._v("highlight_off")]), t._v(" Events Not Found!")], 1)]) : t._e()], 2), a("v-layout", {
                    staticClass: "hidden-md-and-up mb-3",
                    attrs: {
                        wrap: "",
                        "align-center": "",
                        "justify-center": "",
                        row: "",
                        "fill-height": ""
                    }
                }, [t.showLoader ? a("v-flex", {
                    attrs: {
                        xs12: ""
                    }
                }, [a("v-layout", {
                    attrs: {
                        row: "",
                        wrap: ""
                    }
                }, t._l(4, function (e) {
                    return a("v-flex", {
                        key: "4" + e,
                        attrs: {
                            xs12: "",
                            sm6: "",
                            md4: "",
                            lg4: ""
                        }
                    }, [a("v-list", {
                        staticClass: "pa-2",
                        attrs: {
                            "two-line": "",
                            subheader: ""
                        }
                    }, [a("v-list-tile", {
                        attrs: {
                            avatar: ""
                        }
                    }, [a("v-list-tile-avatar", [a("v-avatar", {
                        attrs: {
                            color: "animate-shimmer"
                        }
                    }, [a("span", {
                        staticClass: "google-font",
                        staticStyle: {
                            width: "100vh"
                        }
                    })])], 1), a("v-list-tile-content", [a("v-list-tile-title", {
                        staticClass: "google-font animate-shimmer",
                        staticStyle: {
                            color: "#424242",
                            width: "200px",
                            height: "20px"
                        }
                    }), a("v-list-tile-sub-title", {
                        staticClass: "google-font mt-1 animate-shimmer",
                        staticStyle: {
                            color: "#424242",
                            width: "100px",
                            height: "20px"
                        }
                    })], 1), a("v-list-tile-action", [a("v-icon", {
                        attrs: {
                            color: "grey lighten-3"
                        }
                    }, [t._v("info")])], 1)], 1)], 1)], 1)
                }), 1)], 1) : t._e(), a("v-flex", {
                    attrs: {
                        xs12: ""
                    }
                }, [a("v-slide-y-reverse-transition", [a("v-list", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: t.showData,
                        expression: "showData"
                    }],
                    attrs: {
                        "two-line": "",
                        subheader: ""
                    }
                }, t._l(t.eventsData, function (e, s) {
                    return a("v-list-tile", {
                        key: s,
                        staticStyle: {
                            "border-color": "#e0e0e0",
                            "border-width": "1px",
                            "border-style": "solid",
                            "border-top": "0",
                            "border-left": "0",
                            "border-right": "0",
                            "border-bottom": "1"
                        },
                        attrs: {
                            avatar: ""
                        }
                    }, [a("v-list-tile-avatar", [a("v-avatar", {
                        attrs: {
                            color: "grey lighten-2"
                        }
                    }, [a("span", {
                        staticClass: "google-font",
                        staticStyle: {
                            width: "100vh"
                        }
                    }, [t._v(t._s(t.getCharString(e.name)))])])], 1), a("v-list-tile-content", [a("v-list-tile-title", {
                        staticClass: "google-font"
                    }, [t._v(t._s(e.name))]), a("v-list-tile-sub-title", {
                        staticClass: "google-font"
                    }, [t._v(t._s(t._f("dateFilter")(e.local_date)) + " | " + t._s(e.local_time))])], 1), a("v-list-tile-action", [a("v-tooltip", {
                        attrs: {
                            bottom: ""
                        }
                    }, [a("v-btn", {
                        attrs: {
                            slot: "activator",
                            icon: "",
                            ripple: "",
                            href: e.link,
                            target: "_blank"
                        },
                        slot: "activator"
                    }, [a("v-icon", {
                        attrs: {
                            color: "grey darken-1"
                        }
                    }, [t._v("info")])], 1), a("span", [t._v("See More about " + t._s(e.name))])], 1)], 1)], 1)
                }), 1)], 1)], 1), 1 == t.notFoundEventFlag ? a("v-flex", {
                    staticClass: "text-xs-center",
                    attrs: {
                        xs12: ""
                    }
                }, [a("p", {
                    staticClass: "google-font px-2",
                    staticStyle: {
                        "font-size": "140%"
                    }
                }, [a("v-icon", [t._v("highlight_off")]), t._v(" Events Not Found!")], 1)]) : t._e()], 1)], 1)
            },
            mt = [],
            ht = (a("28a5"), a("4bde")),
            bt = {
                data: function () {
                    return {
                        chapterDetails: f,
                        eventsData: [],
                        showLoader: !0,
                        showData: !1,
                        errorMsg: "",
                        errorAlert: !1,
                        notFoundEventFlag: !1
                    }
                },
                created: function () {
                    var t = this;
                    fetch("https://cors-anywhere.herokuapp.com/https://api.meetup.com/" + ht["a"].urlname + "/events?key=" + ht["a"].apiKey).then(function (t) {
                        return t.json()
                    }).then(function (e) {
                        e.length > 0 ? (t.showLoader = !1, t.showData = !0, t.eventsData = e) : (t.notFoundEventFlag = !0, t.showLoader = !1)
                    }).catch(function (e) {
                        t.showLoader = !1, t.errorMsg = "Issue found with " + e, t.errorAlert = !0, t.notFoundEventFlag = !0
                    })
                },
                methods: {
                    getCharString: function (t) {
                        var e = t.split(" ");
                        return e.length > 1 ? (e[0].substring(0, 1) + "" + e[1].substring(0, 1)).toUpperCase() : e[0].substring(0, 1).toUpperCase()
                    }
                },
                filters: {
                    summery: function (t, e) {
                        return t.substring(0, e) + ".."
                    },
                    dateFilter: function (t) {
                        var e = new Date(t);
                        return e.toLocaleString(["en-US"], {
                            month: "short",
                            day: "2-digit",
                            year: "numeric"
                        })
                    }
                }
            },
            yt = bt,
            wt = (a("4776"), Object(d["a"])(yt, dt, mt, !1, null, null, null)),
            xt = wt.exports,
            Ct = function () {
                var t = this,
                    e = t.$createElement,
                    s = t._self._c || e;
                return s("v-container", {
                    staticClass: "pa-0 pb-5"
                }, [s("v-layout", {
                    attrs: {
                        wrap: "",
                        "align-center": "",
                        "justify-center": "",
                        row: "",
                        "fill-height": ""
                    }
                }, [s("v-flex", {
                    attrs: {
                        xs12: "",
                        md12: ""
                    }
                }, [s("p", {
                    staticClass: "google-font mt-2 mb-0",
                    staticStyle: {
                        "font-size": "170%",
                        color: "#37474F"
                    }
                }, [t._v("Partners")]), s("p", {
                    staticClass: "google-font mt-1 mb-0",
                    staticStyle: {
                        "font-size": "120%"
                    }
                }, [t._v("A very big thank you to all our partners for their continued partnership.")]), s("p", {
                    staticClass: "google-font mt-0",
                    staticStyle: {
                        "font-size": "120%"
                    }
                }, [t._v("If you’re interested in being showcased throughout "), s("b", [t._v(t._s(t.chapterDetails.ChapterName))]), t._v(", contact "), s("a", {
                    staticStyle: {
                        color: "#1565C0",
                        "text-decoration": "none"
                    },
                    attrs: {
                        href: "mailto:" + t.chapterDetails.ChapterEmail
                    }
                }, [t._v(t._s(t.chapterDetails.ChapterEmail))]), t._v(" to discuss sponsorship opportunities.")])]), s("v-flex", {
                    staticClass: "mt-2",
                    attrs: {
                        xs12: "",
                        md12: ""
                    }
                }, [s("p", {
                    staticClass: "google-font my-2",
                    staticStyle: {
                        "font-size": "110%"
                    }
                }, [t._v("General Partners")]), s("v-layout", {
                    staticClass: "transparent",
                    attrs: {
                        row: "",
                        wrap: ""
                    }
                }, [s("v-flex", {
                    staticClass: "elevation-0 transparent",
                    attrs: {
                        xs12: "",
                        sm7: ""
                    }
                }, [s("v-card", {
                    staticClass: "elevation-0 pa-0 ma-0 transparent"
                }, [s("v-container", {
                    staticClass: "pa-0 ma-0",
                    attrs: {
                        "grid-list-sm": "",
                        fluid: ""
                    }
                }, [s("v-layout", {
                    staticClass: "ma-0 pa-0",
                    attrs: {
                        row: "",
                        wrap: ""
                    }
                }, t._l(t.partnerData, function (e, a) {
                    return s("v-flex", {
                        key: a,
                        staticClass: "pa-0 white elevation-0",
                        attrs: {
                            xs6: "",
                            md3: "",
                            sm4: "",
                            "d-flex": ""
                        }
                    }, [s("v-card", {
                        staticClass: "d-flex pa-2 ma-1 elevation-1",
                        staticStyle: {
                            "border-radius": "4px",
                            "border-width": "0px",
                            "border-style": "solid"
                        },
                        attrs: {
                            flat: "",
                            tile: ""
                        }
                    }, [s("a", {
                        attrs: {
                            href: e.link,
                            target: "_blank"
                        }
                    }, [s("v-tooltip", {
                        attrs: {
                            bottom: ""
                        },
                        scopedSlots: t._u([{
                            key: "activator",
                            fn: function (a) {
                                var o = a.on;
                                return [s("v-img", t._g({
                                    staticClass: "white",
                                    attrs: {
                                        src: t.getImgUrl(e.img),
                                        "lazy-src": t.getImgUrl(e.img),
                                        "aspect-ratio": "3.0"
                                    }
                                }, o), [s("v-layout", {
                                    attrs: {
                                        slot: "placeholder",
                                        "fill-height": "",
                                        "align-center": "",
                                        "justify-center": "",
                                        "ma-0": ""
                                    },
                                    slot: "placeholder"
                                }, [s("v-progress-circular", {
                                    attrs: {
                                        indeterminate: "",
                                        color: "grey lighten-5"
                                    }
                                })], 1)], 1)]
                            }
                        }], null, !0)
                    }, [s("span", {
                        staticClass: "google-font"
                    }, [t._v(t._s(e.name))])])], 1)])], 1)
                }), 1)], 1)], 1)], 1)], 1)], 1), s("v-flex", {
                    staticClass: "mt-3",
                    attrs: {
                        xs12: "",
                        md12: ""
                    }
                }, [s("p", {
                    staticClass: "google-font my-2",
                    staticStyle: {
                        "font-size": "110%"
                    }
                }, [t._v("Template Partner")]), s("v-layout", {
                    staticClass: "transparent"
                }, [s("v-flex", {
                    staticClass: "elevation-0 transparent",
                    attrs: {
                        xs12: "",
                        sm11: ""
                    }
                }, [s("v-card", {
                    staticClass: "elevation-0 pa-0 ma-0 transparent"
                }, [s("v-container", {
                    staticClass: "pa-0 ma-0",
                    attrs: {
                        "grid-list-sm": "",
                        fluid: ""
                    }
                }, [s("v-layout", {
                    staticClass: "ma-0 pa-0",
                    attrs: {
                        row: "",
                        wrap: ""
                    }
                }, [s("v-flex", {
                    staticClass: "white elevation-0",
                    attrs: {
                        xs6: "",
                        md2: "",
                        sm4: "",
                        "d-flex": ""
                    }
                }, [s("v-card", {
                    staticClass: "d-flex pa-2 ma-1 elevation-1",
                    staticStyle: {
                        "border-radius": "5px",
                        "border-width": "1px",
                        "border-style": "solid"
                    },
                    attrs: {
                        flat: "",
                        tile: ""
                    }
                }, [s("a", {
                    attrs: {
                        href: "https://gdgjalandhar.com",
                        target: "_blank"
                    }
                }, [s("v-tooltip", {
                    attrs: {
                        bottom: ""
                    },
                    scopedSlots: t._u([{
                        key: "activator",
                        fn: function (e) {
                            var o = e.on;
                            return [s("v-img", t._g({
                                staticClass: "white",
                                attrs: {
                                    src: a("b071"),
                                    "lazy-src": a("b071"),
                                    "aspect-ratio": "3.0"
                                }
                            }, o), [s("v-layout", {
                                attrs: {
                                    slot: "placeholder",
                                    "fill-height": "",
                                    "align-center": "",
                                    "justify-center": "",
                                    "ma-0": ""
                                },
                                slot: "placeholder"
                            }, [s("v-progress-circular", {
                                attrs: {
                                    indeterminate: "",
                                    color: "grey lighten-5"
                                }
                            })], 1)], 1)]
                        }
                    }])
                }, [s("span", {
                    staticClass: "google-font"
                }, [t._v("GDG Jalandhar")])])], 1)])], 1)], 1)], 1)], 1)], 1)], 1)], 1)], 1)], 1)
            },
            _t = [],
            kt = a("1145"),
            Dt = {
                data: function () {
                    return {
                        partnerData: kt,
                        chapterDetails: f
                    }
                },
                methods: {
                    getImgUrl: function (t) {
                        return a("78ea")("./" + t)
                    }
                }
            },
            At = Dt,
            St = Object(d["a"])(At, Ct, _t, !1, null, null, null),
            Gt = St.exports,
            Nt = function () {
                var t = this,
                    e = t.$createElement,
                    a = t._self._c || e;
                return a("v-container", {
                    staticClass: "pa-0 my-0"
                }, [a("v-layout", {
                    staticClass: "mt-2 elevation-2 white",
                    staticStyle: {
                        border: "1px solid #e0e0e0",
                        "border-radius": "5px"
                    },
                    attrs: {
                        wrap: "",
                        "align-center": "",
                        "justify-center": "",
                        row: "",
                        "fill-height": ""
                    }
                }, [a("v-flex", {
                    staticClass: "pa-4",
                    attrs: {
                        xs12: "",
                        sm4: "",
                        md3: "",
                        lg3: ""
                    }
                }, [a("v-img", {
                    attrs: {
                        src: t.getImgUrl(t.eventDetails.EventImage),
                        "lazy-src": t.getImgUrl(t.eventDetails.EventImage),
                        width: "100%"
                    }
                }, [a("v-layout", {
                    attrs: {
                        slot: "placeholder",
                        "fill-height": "",
                        "align-center": "",
                        "justify-center": "",
                        "ma-0": ""
                    },
                    slot: "placeholder"
                }, [a("v-progress-circular", {
                    attrs: {
                        indeterminate: "",
                        color: "grey lighten-5"
                    }
                })], 1)], 1)], 1), a("v-flex", {
                    staticClass: "pa-2 py-4 px-3",
                    attrs: {
                        xs12: "",
                        sm8: "",
                        md9: "",
                        lg9: ""
                    }
                }, [a("p", {
                    staticClass: "google-font mb-0",
                    staticStyle: {
                        "font-size": "150%",
                        color: "rgb(2, 119, 189)"
                    }
                }, [t._v(t._s(t.eventDetails.FeatureEventName))]), a("span", {
                    staticClass: "google-font mt-1 mb-0 grey--text",
                    staticStyle: {
                        "font-size": "105%"
                    }
                }, [a("v-icon", {
                    attrs: {
                        small: ""
                    }
                }, [t._v("insert_invitation")]), t._v("\n                " + t._s(t.eventDetails.EventDate.Date + "/" + t.eventDetails.EventDate.Month + "/" + t.eventDetails.EventDate.Year) + " \n                 \n                "), a("v-icon", {
                    attrs: {
                        small: ""
                    }
                }, [t._v("watch_later")]), t._v("\n                " + t._s(t.eventDetails.EventTime.StartTime + " - " + t.eventDetails.EventTime.EndTime) + "\n                 \n                "), a("v-icon", {
                    attrs: {
                        small: ""
                    }
                }, [t._v("map")]), t._v("\n                " + t._s(t._f("summery")(t.eventDetails.EventVenue, 50)) + " "), a("a", {
                    attrs: {
                        href: t.eventDetails.EventVenueMapLink,
                        target: "_blank"
                    }
                }, [t._v("(Map)")])], 1), a("p", {
                    staticClass: "google-font mt-2 mb-1",
                    staticStyle: {
                        "font-size": "115%",
                        color: "#757575"
                    }
                }, [t._v("\n               " + t._s(t.eventDetails.EventDescription) + "\n           ")]), t.eventDetails.RegistrationLink.length > 0 ? a("v-btn", {
                    staticClass: "ma-0 elevation-0 my-2",
                    staticStyle: {
                        "text-transform": "capitalize",
                        "border-radius": "5px"
                    },
                    attrs: {
                        color: "#1a73e8",
                        href: t.eventDetails.RegistrationLink,
                        target: "_blank",
                        dark: ""
                    }
                }, [t._v(" \n                Registration Link\n            ")]) : t._e(), t._v("\n             \n\n            "), t.eventDetails.EventWebsite.length > 0 ? a("v-tooltip", {
                    attrs: {
                        slot: "activator",
                        top: ""
                    },
                    slot: "activator"
                }, [a("v-btn", {
                    staticClass: "ma-0 elevation-0",
                    staticStyle: {
                        "text-transform": "capitalize",
                        "border-radius": "5px"
                    },
                    attrs: {
                        slot: "activator",
                        flat: "",
                        icon: "",
                        color: "#616161",
                        href: t.eventDetails.EventWebsite,
                        target: "_blank"
                    },
                    slot: "activator"
                }, [a("v-icon", [t._v("language")])], 1), a("span", [t._v("See " + t._s(t.eventDetails.FeatureEventName) + " Website")])], 1) : t._e(), t.eventDetails.MeetupLink.length > 0 ? a("v-tooltip", {
                    attrs: {
                        slot: "activator",
                        top: ""
                    },
                    slot: "activator"
                }, [a("v-btn", {
                    staticClass: "ma-0 elevation-0",
                    staticStyle: {
                        "text-transform": "capitalize",
                        "border-radius": "5px"
                    },
                    attrs: {
                        slot: "activator",
                        flat: "",
                        icon: "",
                        color: "#616161",
                        href: t.eventDetails.MeetupLink,
                        target: "_blank"
                    },
                    slot: "activator"
                }, [a("v-icon", [t._v("fab fa-meetup")])], 1), a("span", [t._v("See " + t._s(t.eventDetails.FeatureEventName) + " Meetup")])], 1) : t._e(), t.eventDetails.FBEventPageURL.length > 0 ? a("v-tooltip", {
                    attrs: {
                        slot: "activator",
                        top: ""
                    },
                    slot: "activator"
                }, [a("v-btn", {
                    staticClass: "ma-0 elevation-0",
                    staticStyle: {
                        "text-transform": "capitalize",
                        "border-radius": "5px"
                    },
                    attrs: {
                        slot: "activator",
                        flat: "",
                        icon: "",
                        color: "#616161",
                        href: t.eventDetails.FBEventPageURL,
                        target: "_blank"
                    },
                    slot: "activator"
                }, [a("v-icon", [t._v("fab fa-facebook-f")])], 1), a("span", [t._v("See " + t._s(t.eventDetails.FeatureEventName) + " Facebook Page")])], 1) : t._e()], 1)], 1)], 1)
            },
            jt = [],
            Et = a("0058"),
            Ft = {
                components: {},
                data: function () {
                    return {
                        eventDetails: Et
                    }
                },
                created: function () {},
                methods: {
                    getImgUrl: function (t) {
                        return t.length > 0 ? a("6658")("./" + t) : a("b34b")
                    }
                },
                filters: {
                    summery: function (t, e) {
                        return t.substring(0, e) + ".."
                    },
                    dateFilter: function (t) {
                        var e = new Date(t);
                        return e.toLocaleString(["en-US"], {
                            month: "short",
                            day: "2-digit",
                            year: "numeric"
                        })
                    }
                }
            },
            Lt = Ft,
            zt = Object(d["a"])(Lt, Nt, jt, !1, null, null, null),
            Ot = zt.exports,
            Pt = {
                components: {
                    HomeStartScreen: et,
                    whatWeDo: lt,
                    AboutGDGChapter: vt,
                    eventshowcase: xt,
                    partners: Gt,
                    featureEvent: Ot
                }
            },
            Mt = Pt,
            Tt = Object(d["a"])(Mt, q, J, !1, null, null, null),
            Wt = Tt.exports;
        s["default"].use(R["a"]);
        var Vt = new R["a"]({
            mode: "history",
            base: "/",
            scrollBehavior: function () {
                return {
                    x: 0,
                    y: 0
                }
            },
            routes: [{
                path: "/",
                name: "home",
                component: Wt
            }, {
                path: "*",
                name: "home",
                component: Wt
            }, {
                path: "/home",
                name: "home",
                component: Wt
            }, {
                path: "/about",
                name: "about",
                component: function () {
                    return a.e("chunk-96e4e4fc").then(a.bind(null, "f820"))
                }
            }, {
                path: "/team",
                name: "team",
                component: function () {
                    return a.e("chunk-d02b8e9c").then(a.bind(null, "0767"))
                }
            }, {
                path: "/events",
                name: "events",
                component: function () {
                    return a.e("chunk-97ebee50").then(a.bind(null, "aa9c"))
                }
            }, {
                path: "/contact",
                name: "contact",
                component: function () {
                    return a.e("chunk-04d2dfca").then(a.bind(null, "b8fa"))
                }
            }]
        });
        s["default"].use(p["a"]);
        var Ut = new p["a"].Store({
                state: {
                    drawer: !1,
                    items: [{
                        text: "Home",
                        to: "/",
                        icon: "home"
                    }, {
                        text: "Events",
                        to: "/events",
                        icon: "rounded_corner"
                    }, {
                        text: "Team",
                        to: "/team",
                        icon: "group"
                    }, {
                        text: "About",
                        to: "/about",
                        icon: "toc"
                    }, {
                        text: "Contact",
                        to: "/contact",
                        icon: "person"
                    }]
                },
                getters: {
                    links: function (t) {
                        return t.items
                    }
                },
                mutations: {
                    setDrawer: function (t, e) {
                        return t.drawer = e
                    },
                    toggleDrawer: function (t) {
                        return t.drawer = !t.drawer
                    }
                },
                actions: {}
            }),
            Kt = a("bc3a"),
            Bt = a.n(Kt),
            Xt = a("a7fe"),
            Ht = a.n(Xt),
            It = a("9483");
        Object(It["a"])("".concat("/", "service-worker.js"), {
            ready: function () {
                console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")
            },
            registered: function (t) {
                console.log("Service worker has been registered."), setInterval(function () {
                    t.update()
                }, 36e5)
            },
            cached: function () {
                console.log("Content has been cached for offline use.")
            },
            updatefound: function () {
                console.log("New content is downloading.")
            },
            updated: function (t) {
                console.log("New content is available; please refresh."), document.dispatchEvent(new CustomEvent("swUpdated", {
                    detail: t
                }))
            },
            offline: function () {
                console.log("No internet connection found. App is running in offline mode.")
            },
            error: function (t) {
                console.error("Error during service worker registration:", t)
            }
        });
        a("d5e8"), a("d1e7"), a("38c8");
        s["default"].filter("truncate", function (t, e, a) {
            return t < e ? t.substring(0, e) + a : t
        }), s["default"].use(Ht.a, Bt.a), s["default"].config.productionTip = !1, new s["default"]({
            router: Vt,
            store: Ut,
            render: function (t) {
                return t(I)
            }
        }).$mount("#app")
    },
    "5c35": function (t, e, a) {
        t.exports = a.p + "img/polymer.f0624356.svg"
    },
    6658: function (t, e, a) {
        var s = {
            "./IWD.jpg": "4b69",
            "./aog.jpeg": "73f5",
            "./imagenotfound.png": "b34b"
        };

        function o(t) {
            var e = r(t);
            return a(e)
        }

        function r(t) {
            var e = s[t];
            if (!(e + 1)) {
                var a = new Error("Cannot find module '" + t + "'");
                throw a.code = "MODULE_NOT_FOUND", a
            }
            return e
        }
        o.keys = function () {
            return Object.keys(s)
        }, o.resolve = r, t.exports = o, o.id = "6658"
    },
    "697b": function (t, e, a) {
        "use strict";
        var s = a("723a"),
            o = a.n(s);
        o.a
    },
    "723a": function (t, e, a) {},
    "73f5": function (t, e, a) {
        t.exports = a.p + "img/aog.14e56635.jpeg"
    },
    7739: function (t, e, a) {},
    "78ea": function (t, e, a) {
        var s = {
            "./gdg-x.svg": "8c54",
            "./gdgjalandhar.png": "b071",
            "./gdglogo.png": "f6e1",
            "./wtm.png": "aea0"
        };

        function o(t) {
            var e = r(t);
            return a(e)
        }

        function r(t) {
            var e = s[t];
            if (!(e + 1)) {
                var a = new Error("Cannot find module '" + t + "'");
                throw a.code = "MODULE_NOT_FOUND", a
            }
            return e
        }
        o.keys = function () {
            return Object.keys(s)
        }, o.resolve = r, t.exports = o, o.id = "78ea"
    },
    8350: function (t, e, a) {
        t.exports = a.p + "img/angular.48ae79d9.svg"
    },
    "8c54": function (t, e, a) {
        t.exports = a.p + "img/gdg-x.f8fb99f2.svg"
    },
    "8d14": function (t, e, a) {
        t.exports = a.p + "img/gcp.09643848.svg"
    },
    "8fc8": function (t, e, a) {
        var s = {
            "./android.svg": "d2c1",
            "./angular.svg": "8350",
            "./aog.png": "0f8b",
            "./firebase.svg": "f558",
            "./gcp.svg": "8d14",
            "./notFound.png": "1d36",
            "./polymer.svg": "5c35",
            "./tf.svg": "4805"
        };

        function o(t) {
            var e = r(t);
            return a(e)
        }

        function r(t) {
            var e = s[t];
            if (!(e + 1)) {
                var a = new Error("Cannot find module '" + t + "'");
                throw a.code = "MODULE_NOT_FOUND", a
            }
            return e
        }
        o.keys = function () {
            return Object.keys(s)
        }, o.resolve = r, t.exports = o, o.id = "8fc8"
    },
    "96a1": function (t) {
        t.exports = {
            ChapterName: "GDG Nagpur",
            ChapterShortDescription: "GDG stands for Google Developer Group and GDG Nagpur is an initiative where developers meet to discuss and work with several open source Google products and APIs.",
            ChapterLongDec: "Google Developer Group Nagpur is inspired by GTUG/GDG Family. We provides a network for people of central part of India who are interested in Google's open source technologies and also love the spirit of sharing in the field of technology.",
            ChapterMeetupLink: "https://www.meetup.com/GDG-Nagpur/",
            ChapterEmail: "gdgnagpurofficial@gmail.com",
            website: "https://gdgnagpur.org",
            GDGProgramWebsite: "https://developers.google.com/programs/community/",
            ChapterHashTags: ["GDGNagpur", "WTMNagpur", "GDG", "WTM"],
            socialLinks: [{
                name: "Facebook",
                link: "https://www.facebook.com/GDGNagpur.Official",
                icon: "fab fa-facebook"
            }, {
                name: "LinkedIn",
                link: "https://www.linkedin.com/company/gdgnagpur",
                icon: "fab fa-linkedin"
            }, {
                name: "Twitter",
                link: "https://twitter.com/GDGNagpur_",
                icon: "fab fa-twitter"
            }, {
                name: "Meetup",
                link: "https://www.meetup.com/GDG-Nagpur/",
                icon: "fab fa-meetup"
            }],
            wtmWebsite: "https://www.womentechmakers.com/",
            aboutGDGProgram: "GDGs are local groups of developers who are specifically interested in Google products and APIs. Each local group is called a GDG chapter and can host a variety of technical activities for developers - from just a few people getting together to watch our latest videos, to large gatherings with demos and tech talks, to hackathons."
        }
    },
    aea0: function (t, e, a) {
        t.exports = a.p + "img/wtm.710b4d5e.png"
    },
    b071: function (t, e, a) {
        t.exports = a.p + "img/gdgjalandhar.b58324f8.png"
    },
    b34b: function (t, e) {
        t.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASsAAACoCAMAAACPKThEAAAAbFBMVEVYWFrz8/RQUFKxsbJfX2D5+fpVVVf///9vb3FHR0r29vdMTE6OjpDR0dJKSk3c3N2bm5y5ubpmZmju7u93d3k5OTxxcXPExMWoqKmUlJXo6OlcXF6IiIrIyMne3t9AQEKrq6w0NDd/f4CgoKE4K673AAAFzElEQVR4nO3cC5OiOBSGYQwkh3AVRLl4Hf3//3ETtBVddE7rFlZtvre6qkfEKXyWhOiser7wECfhe7BiBit+sOIHK36w4gcrfrDiByt+sOIHK36w4gcrfrDiByt+sOIHK36w4gcrfrDiByt+sOIHK36w4gcrfrDiByt+sOIHK36w4gcrfrDiByt+sOIHK36w4gcrfrDiByt+sOIHK36w4gcrfrDiByt+sOIHK36w4vctK/VpXzjmL1kFyacF0x/0d6zUiuRn0Wr6M+tLVqGcfZYM3bKK3s1Bq/zdHLRaZu+1dNBKv/loDau/PeaKA6vXD4jjsNSXA4XVq0SYmjXVrDifW7B6kUhk1C+qZqUVgtWLvVc/K9doYY8VVuZYnuyd5dF1uX4QsLKHkj450dZ0fWkTdRmszJG05GejOx8HLx4lrExZGlEydij3VhpWngrkU4GbVbTDeWUO5CB/rnOPmTPuelo1mNsNQNefN2Pz++3drqiLPVip6uwhi5H5XWwua9FFgLWo58X1ZZyNzu8iqGeSFr7AaxxTfJuSxhRUrNcKr53Ph9Fer3Xj8/swx60Gl7pZlP/lhaLbVv3i6rbeHJvfB7lt1S+ubo2v36+5bXVeXA3OrDuJx+Nz2upncXWbsgbzu4rrh0c7bXVdXI3M76Ls5PZ+snfb6pHKzu/ne/XcLNnl5u4QXbYaLK4G83sr7Pjbnu+C1eXWcHF1N7+LsDtTRXej0GGr+8XVYH7vx98FbjgKHbZ6WFwNsIbbYWV7XFyNww1GobtWd2+nP28wCt21+vfi6kmwGltc/WUUOms1urh6PQqdtRr8Azx3FLpq9WRx9XIUumr1bHH1ahS6asVaXD2MQketmIurn86j0FGreCt/9SkASpSzVqL4Zb7D/z+D+G2eu1bv5KLV/tcn1bm9g1bt/L1aB63e/qClg1af5JDVit7+oOVloeXOZ3jLPP2svHTFyn5u68O+8KUD+C4LfrDiByt+sOIHK35ftnp2NRvf/pVv3Lk1mZXQ5ic2z1fbtxcybZ92rMJY2C263+jprN/PEyIUwvzJprzzDpn5VZbmpujfGhXK/mUi82J73zSGU1mJgnRNu0wlRMrTHZm1ZFwTyXl2JFtgTKjTdr+sMLeLfUFSErVKlWR+R/tqQdSF5k7jRUVAuRb1bLkz9+2qaf5zT2klKci2UipVkfSF2XQKt7Q6kp+0rd1Hykb7ct+QHx6oWbWFbNpQqYDqpE2E7KrjYqb9i5WUra4Xy7xL5gu5nuLMmtRqETX7aEcqrrtipjO51SJuwyPNy9K+ZBHUSeXLP4t8r/b5QsctrYTyjFWzz/SJKiE2lFytuqi32u3jippJnsOUVl29M0/LWMnDio4eHbJ5ns4rM4rIfo5Z0LxLG/mHCmH3z8ScKtX/c6vZo/FJ9GwHYxXbMZjMisJaZZbuf2e1OFKazsmcL2ktt3uq9bGRfkWJ6K9wgk4V5fLPLNWeTmf6amXGZBU0FCpRUWvMVNZbbSi3VlqU/8PzarGcyfmJdNoVRS71Vh71nIzVaVVVa2vV7GsZLQtqs8ScKjerJrazVu6td9JsPOmWTgG1+1R2Zr4KjzlN8q7DlFbbaFmTaKikg86MkMjNdXBXVP11cGVnoUaoiHScmtupGYcXq5LsIYrEXg2Pwj6K8rikuQjIXAfNrej1Z1L+s+cw1foqKJX5WdufdelZgVLp1UZ5gVfa7D7l2rN7eFm4Ce3Hl/odz9vtoYrj0X7YMlttVvq8c/+XlmU2zWp6unW7uv2oy+3LQvz6HZiD7cq7brit4n+29r9/dp7u+zPxepAfrPjBih+s+MGKH6z4wYofrPjBih+s+MGKH6z4wYofrPjBih+s+MGKH6z4wYofrPjBih+s+MGKH6z4wYofrPjBih+s+MGKH6z4wYofrPjBih+s+MGKH6z4wYofrPjBih+s+MGKH6z4wYofrPjBih+s+MGKn7XyAsTJ8/8Bw49wPvDv2M0AAAAASUVORK5CYII="
    },
    b610: function (t) {
        t.exports = [{
            TechName: "Angular",
            image: "angular.svg",
            link: "https://angular.io/"
        }, {
            TechName: "Google Cloud Platform",
            image: "gcp.svg",
            link: "https://cloud.google.com/"
        }, {
            TechName: "Android",
            image: "android.svg",
            link: "https://www.android.com/"
        }, {
            TechName: "Actions On Google",
            image: "aog.png",
            link: "https://developers.google.com/actions/"
        }, {
            TechName: "Firebase",
            image: "firebase.svg",
            link: "https://firebase.google.com/"
        }, {
            TechName: "TensorFlow",
            image: "tf.svg",
            link: "https://www.tensorflow.org/"
        }]
    },
    d2c1: function (t, e, a) {
        t.exports = a.p + "img/android.14ed07e6.svg"
    },
    f558: function (t, e, a) {
        t.exports = a.p + "img/firebase.1a1dfb3f.svg"
    },
    f6e1: function (t, e, a) {
        t.exports = a.p + "img/gdglogo.19fe90be.png"
    }
});
//# sourceMappingURL=app.6509f2ff.js.map