!(function (e) {
    "use strict";
    e(document).ready(function () {
        e(".header_stick").length &&
            e(window).scroll(function () {
                e(window).scrollTop() ? e(".header_stick").addClass("navbar_fixed") : e(".header_stick").removeClass("navbar_fixed");
            }),
            e(".bar_menu").length &&
                (e(".bar_menu").on("click", function () {
                    e("#menu").toggleClass("show-menu");
                }),
                e(".close_icon").on("click", function () {
                    e("#menu").removeClass("show-menu");
                }));
    });
})(jQuery),
    jQuery(function (e) {
        e("nav ul li a").each(function () {
            this.href === window.location.href && e(this).addClass("active");
        }),
            e(document).ready(function () {
                e(window).scroll(function () {
                    const o = localStorage.getItem("showMsg");
                    e(window).scrollTop() > 550
                        ? "false" !== o && (e(".new_footer_area").addClass("popupspc"), e(".overlayPop").addClass("slideUp").removeClass("slideDown"))
                        : e(".overlayPop").removeClass("slideUp").addClass("slideDown").hide("1000"),
                        e(".close-fd").click(function () {
                            e(".new_footer_area").removeClass("popupspc"), e(".overlayPop").addClass("slideDown").removeClass("slideUp"), localStorage.setItem("showMsg", "false");
                        }),
                        "false" == o && (e(".new_footer_area").removeClass("popupspc"), e(".overlayPop").addClass("slideDown").removeClass("slideUp"));
                });
            });
    });
jQuery(document).ready(function (t) {
    var a = !0,
        e = !0,
        i = !1,
        o = 1,
        r = "vantage-circle",
        s = " https://vantagefitblog.ghost.io",
        l = "ad75a783c6fd3a1665f4d6c225",
        n = Math.max(document.documentElement.clientWidth, window.innerWidth || 0),
        d = (Math.max(document.documentElement.clientHeight, window.innerHeight || 0), []),
        c = (t("html").attr("lang"), t(".no-bookmarks").html()),
        h = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        m = new GhostContentAPI({
            host: s,
            key: l,
            version: "v2",
        });
    void 0 !== Cookies.get("poveglia-read-later") && (d = JSON.parse(Cookies.get("poveglia-read-later"))),
        (d = g(t("#content .loop"), d)),
        (d = g(t(".related-posts loop"), d)),
        (d = g(t(".post-intro"), d)),
        t(".search-trigger, .bookmark-trigger").on("click", function (t) {
            t.preventDefault();
        }),
        b(),
        t("body").on("click", ".modal-backdrop", function (a) {
            a.preventDefault(), t(".modal.show .close").click();
        }),
        t("#content").attr("data-id") &&
            "" != r &&
            t(".comments-trigger").on("click", function (a) {
                a.preventDefault(), t(this).addClass("hidden"), t(".comments").append('<div id="disqus_thread"></div>');
                var e, i;
                [location.protocol, "//", location.host, location.pathname].join("");
                (e = document), ((i = e.createElement("script")).src = "//" + r + ".disqus.com/embed.js"), i.setAttribute("data-timestamp", +new Date()), (e.head || e.body).appendChild(i);
            });
    new GhostSearch({
        host: s,
        key: l,
        input: "#search-field",
        results: "#results",
        api: {
            parameters: {
                fields: ["title", "slug", "published_at", "primary_tag", "id", "feature_image"],
                include: "tags",
            },
        },
        on: {
            afterDisplay: function (a) {
                if (a.length) {
                    t("#results").empty();
                    var e = [];
                    t.each(a, function (a, i) {
                        i.obj.primary_tag ? -1 === t.inArray(i.obj.primary_tag.name, e) && e.push(i.obj.primary_tag.name) : -1 === t.inArray("Other", e) && e.push("Other");
                    }),
                        e.sort(),
                        t.each(e, function (a, e) {
                            var i = e;
                            "Other" == e && (i = t("#results").attr("data-other")), t("#results").append("<h3>" + i + '</h3><ul data-tag="' + e + '" class="list-box loop row search_list"></ul>');
                        }),
                        t.each(a, function (a, e) {
                            var i = "",
                                o = "",
                                r = e.obj.published_at.split("T");
                            r = r[0].split("-");
                            var s = h[r[1] - 1],
                                l = moment(r[2] + "-" + s + "-" + r[1], "DD-MM-YYYY").format("DD-MM-YYYY");
                            e.obj.feature_image
                                ? ("http" == e.obj.feature_image.substring(0, 4)
                                      ? (i = 'style="background-image: url(' + e.obj.feature_image + ');"')
                                      : ((e.obj.feature_image = e.obj.feature_image.replace("/images/", "/images/size/w167h125/")), (i = 'style="background-image: url(' + url + e.obj.feature_image + ');"')),
                                  (o += "featured-image image_search"))
                                : (o += "excerpt"),
                                e.obj.primary_tag
                                    ? t('#results ul[data-tag="' + e.obj.primary_tag.name + '"]').append(
                                          '<li class="col-md-4 item"><article class="post"><div class="post-inner-content"><div class="img-holder"> <a href="/' +
                                              e.obj.slug +
                                              '/" class="' +
                                              o +
                                              '" title="' +
                                              e.obj.title +
                                              '"' +
                                              i +
                                              '></a> </div><div class="inner search_title"><h2><a href="/' +
                                              e.obj.slug +
                                              '/">' +
                                              e.obj.title +
                                              '</a></h2><i class="far fa-calendar-alt"></i><time>' +
                                              l +
                                              '</time><a href="#" class="read-later" data-id="' +
                                              e.obj.id +
                                              '"><i class="far fa-bookmark" data-toggle="tooltip" data-trigger="hover" data-placement="right" title="' +
                                              t("#results").attr("data-bookmark-article") +
                                              '"></i><i class="fas fa-bookmark" data-toggle="tooltip" data-trigger="hover" data-placement="right" title="' +
                                              t("#results").attr("data-remove-bookmark") +
                                              '"></i></a></div></div></article></li>'
                                      )
                                    : t('#results ul[data-tag="Other"]').append(
                                          '<li class="col-md-4 item"><article class="post"><div class="post-inner-content"><div class="img-holder"> <a href="/' +
                                              e.obj.slug +
                                              '/" class="' +
                                              o +
                                              '" title="' +
                                              e.obj.title +
                                              '"' +
                                              i +
                                              '></a> </div><div class="inner search_title"><h2><a href="/' +
                                              e.obj.slug +
                                              '/">' +
                                              e.obj.title +
                                              '</a></h2><i class="far fa-calendar-alt"></i><time>' +
                                              l +
                                              '</time><a href="#" class="read-later" data-id="' +
                                              e.obj.id +
                                              '"><i class="far fa-bookmark" data-toggle="tooltip" data-trigger="hover" data-placement="right" title="' +
                                              t("#results").attr("data-bookmark-article") +
                                              '"></i><i class="fas fa-bookmark" data-toggle="tooltip" data-trigger="hover" data-placement="right" title="' +
                                              t("#results").attr("data-remove-bookmark") +
                                              '"></i></a></div></div></article></li>'
                                      );
                        }),
                        t('#results [data-toggle="tooltip"]').tooltip({
                            trigger: "hover",
                        }),
                        (d = g(t("#results"), d));
                } else
                    t("#search-field").val().length &&
                        !a.length &&
                        t("#results").append("<h3>" + t("#results").attr("data-no-results") + '</h3><ul class="list-box loop row"><li class="col-md-12 item">' + t("#results").attr("data-no-results-description") + "</li></ul>");
            },
        },
    });
    function g(a, e) {
        return (
            void 0 !== Cookies.get("poveglia-read-later") &&
                (t.each(e, function (a, e) {
                    t('.read-later[data-id="' + e + '"]').addClass("active");
                }),
                p(e)),
            t(a)
                .find(".read-later")
                .each(function (a, i) {
                    t(this).on("click", function (a) {
                        a.preventDefault();
                        var i = t(this).attr("data-id");
                        t(this).hasClass("active") ? u(e, i) : e.push(i),
                            t('.read-later[data-id="' + i + '"]').each(function (a, e) {
                                t(this).toggleClass("active");
                            }),
                            t("header .counter").addClass("shake"),
                            setTimeout(function () {
                                t("header .counter").removeClass("shake");
                            }, 300),
                            Cookies.set("poveglia-read-later", e, {
                                expires: 365,
                            }),
                            p(e);
                    });
                }),
            e
        );
    }
    function p(a) {
        if ((t(".bookmark-container").empty(), (a = a.filter(Boolean)).length)) {
            var e = [location.protocol, "//", location.host].join("");
            t("header .counter").removeClass("hidden").text(a.length);
            var i = a.toString();
            (i = "id:[" + i + "]"),
                m.posts
                    .browse({
                        limit: "all",
                        filter: i,
                        include: "tags",
                    })
                    .then((i) => {
                        t(".bookmark-container").empty();
                        var o = [];
                        t.each(i, function (a, e) {
                            e.primary_tag ? -1 === t.inArray(e.primary_tag.name, o) && o.push(e.primary_tag.name) : -1 === t.inArray("Other", o) && o.push("Other");
                        }),
                            o.sort(),
                            t.each(o, function (a, e) {
                                "Other" == e && t(".bookmark-container").attr("data-other"), t(".bookmark-container").append('<ul data-tag="' + e + '" class="list-box loop row"></ul>');
                            }),
                            t.each(i, function (a, i) {
                                var o = "",
                                    r = "",
                                    s = i.published_at.split("T");
                                s = s[0].split("-");
                                var l = h[s[1] - 1],
                                    n = moment(s[2] + "-" + l + "-" + s[1], "DD-MM-YYYY").format("DD-MM-YYYY");
                                i.feature_image
                                    ? ("http" == i.feature_image.substring(0, 4)
                                          ? (o = 'style="background-image: url(' + i.feature_image + ');"')
                                          : ((i.feature_image = i.feature_image.replace("/images/", "/images/size/w167h125/")), (o = 'style="background-image: url(' + e + i.feature_image + ');"')),
                                      (r += "featured-image image_search"))
                                    : (r += "excerpt"),
                                    i.primary_tag
                                        ? t('.bookmark-container ul[data-tag="' + i.primary_tag.name + '"]').append(
                                              '<li class="col-md-4 item"><article class="post"><div class="post-inner-content"><div class="img-holder"> <a href="/' +
                                                  i.slug +
                                                  '/" class="' +
                                                  r +
                                                  '" title="' +
                                                  i.title +
                                                  '"' +
                                                  o +
                                                  '></a> </div><div class="inner"><h2><a href="/' +
                                                  i.slug +
                                                  '/">' +
                                                  i.title +
                                                  '</a></h2><i class="far fa-calendar-alt"></i><time>' +
                                                  n +
                                                  '</time><a href="#" class="read-later active" data-id="' +
                                                  i.id +
                                                  '"><i class="far fa-bookmark" data-toggle="tooltip" data-trigger="hover" data-placement="right" title="' +
                                                  t("#results").attr("data-bookmark-article") +
                                                  '"></i><i class="fas fa-bookmark" data-toggle="tooltip" data-trigger="hover" data-placement="right" title="' +
                                                  t("#results").attr("data-remove-bookmark") +
                                                  '"></i></a></div></div></article></li>'
                                          )
                                        : t('.bookmark-container ul[data-tag="Other"]').append(
                                              '<li class="col-md-4 item"><article class="post"><div class="post-inner-content"><div class="img-holder"> <a href="/' +
                                                  i.slug +
                                                  '/" class="' +
                                                  r +
                                                  '" title="' +
                                                  i.title +
                                                  '"' +
                                                  o +
                                                  '></a> </div><div class="inner"><h2><a href="/' +
                                                  i.slug +
                                                  '/">' +
                                                  i.title +
                                                  '</a></h2><i class="far fa-calendar-alt"></i><time>' +
                                                  n +
                                                  '</time><a href="#" class="read-later active" data-id="' +
                                                  i.id +
                                                  '"><i class="far fa-bookmark" data-toggle="tooltip" data-trigger="hover" data-placement="right" title="' +
                                                  t("#results").attr("data-bookmark-article") +
                                                  '"></i><i class="fas fa-bookmark" data-toggle="tooltip" data-trigger="hover" data-placement="right" title="' +
                                                  t("#results").attr("data-remove-bookmark") +
                                                  '"></i></a></div></div></article></li>'
                                          );
                            }),
                            t(".bookmark-container")
                                .find(".read-later")
                                .each(function (e, i) {
                                    t(this).on("click", function (e) {
                                        e.preventDefault();
                                        var i = t(this).attr("data-id");
                                        t(this).hasClass("active") ? u(a, i) : a.push(i),
                                            t('.read-later[data-id="' + i + '"]').each(function (a, e) {
                                                t(this).toggleClass("active");
                                            }),
                                            Cookies.set("poveglia-read-later", a, {
                                                expires: 365,
                                            }),
                                            p(a);
                                    });
                                }),
                            i ? t("header .counter").removeClass("hidden").text(i.length) : (t(".bookmark-container").append('<p class="no-bookmarks"></p>'), t(".no-bookmarks").html(c));
                    })
                    .catch((t) => {
                        console.error(t);
                    });
        } else t("header .counter").addClass("hidden"), t(".bookmark-container").append('<p class="no-bookmarks"></p>'), t(".no-bookmarks").html(c);
    }
    function u(t) {
        for (var a, e, i = arguments, o = i.length; o > 1 && t.length; ) for (a = i[--o]; -1 !== (e = t.indexOf(a)); ) t.splice(e, 1);
        return t;
    }
    t(document).on("click", function (a) {
        t('[data-toggle="popover"],[data-original-title]').each(function () {
            t(this).is(a.target) || 0 !== t(this).has(a.target).length || 0 !== t(".popover").has(a.target).length || (((t(this).popover("hide").data("bs.popover") || {}).inState || {}).click = !1);
        });
    });
    t(window).on("load", function (a) {
        b(),
            t(".editor-content img, .inner-featured-image_remove").each(function (a, e) {
                t(this).parent().is("a") || (t("<a href='" + t(this).attr("src") + "' class='zoom'></a>").insertAfter(t(this)), t(this).appendTo(t(this).next("a")));
            }),
            t(".zoom").fluidbox(),
            t(window).on("scroll", function (a) {
                t(".zoom").fluidbox("close");
            });
        var r = 1,
            s = window.location.pathname,
            l = (t(".post"), 0);
        if (((s = s.replace(/#(.*)$/g, "").replace("///g", "/")), t("body").hasClass("paged") && (r = parseInt(s.replace(/[^0-9]/gi, ""))), e && "undefined" != typeof maxPages)) {
            if ((t("#load-posts").addClass("visible").removeClass("hidden"), r == maxPages)) return void t("#load-posts").addClass("finish").text(t("#load-posts").attr("data-last"));
            t("#load-posts").on("click", function (a) {
                a.preventDefault();
                var e = t(this);
                r++, t("body").hasClass("paged") && (s = "/");
                var i = s + "page/" + r + "/";
                e.hasClass("step") &&
                    setTimeout(function () {
                        e.removeClass("step"), (l = 0);
                    }, 1e3),
                    t.get(i, function (a) {
                        l++;
                        var e = t(a).find(".item");
                        t("#content .loop").append(e),
                            t.each(e, function (a, e) {
                                var i = t(this),
                                    o = t(this).find(".post").addClass("no-opacity").attr("data-id");
                                t("#content .loop").imagesLoaded(function () {
                                    var a = {
                                        duration: 800,
                                        easing: [0.1, 1, 0.3, 1],
                                        delay: function (t, a) {
                                            return 35 * a;
                                        },
                                        opacity: {
                                            value: [0, 1],
                                            duration: 600,
                                            easing: "linear",
                                        },
                                        translateY: [200, 0],
                                        translateZ: [300, 0],
                                        rotateX: [75, 0],
                                    };
                                    (a.targets = '.item:not(.post-featured) .post[data-id="' + o + '"]'),
                                        anime.remove(a.targets),
                                        anime(a),
                                        t('[data-toggle="tooltip"]').tooltip({
                                            trigger: "hover",
                                        }),
                                        (d = g(i, d)),
                                        r != maxPages || t("#load-posts").addClass("finish").text("You've reached the end of the list");
                                });
                            });
                    });
            });
        }
        if (i && e) {
            var n = "on";
            t("#load-posts").length > 0 &&
                t(window).on("scroll", function (a) {
                    var e, i, r, s;
                    (e = "#load-posts"),
                        (i = t(window).scrollTop()),
                        (r = i + t(window).height()),
                        (s = t(e).offset().top) + t(e).height() <= r &&
                            s >= i &&
                            "on" == n &&
                            l < o &&
                            (t("#load-posts").click(),
                            (n = "off"),
                            setTimeout(function () {
                                (n = "on"), l == o && t("#load-posts").addClass("step");
                            }, 1e3));
                });
        }
    }),
        t("#search").on("shown.bs.modal", function () {
            t("#search-field").focus();
        }),
        t("pre code, pre").each(function (t, a) {
            hljs.highlightBlock(a);
        });
    t(".content-inner .share ul").height();
    if (
        (t(this).scrollTop() > 0 && t("body").addClass("scroll"),
        t(".go-up").on("click", function (a) {
            a.preventDefault(),
                t("body,html").animate(
                    {
                        scrollTop: 0,
                    },
                    500
                );
        }),
        t(window).on("scroll", function (a) {
            t(this).scrollTop() > 0 ? t("body").addClass("scroll") : t("body").removeClass("scroll");
        }),
        t("header .progress").tooltip({
            title: function () {
                return t("header .progress").attr("data-original-title");
            },
            trigger: "hover",
            placement: "bottom",
        }),
        t('[data-toggle="tooltip"]').tooltip({
            trigger: "hover",
        }),
        t(".gh-signin").each(function (a, e) {
            t(this).validate({
                rules: {
                    email: {
                        required: !0,
                        email: !0,
                    },
                },
                submitHandler: function (a) {
                    t(a).submit();
                },
            });
        }),
        t("form[action*='https://formspree.io/']").each(function (a, e) {
            t(this).validate({
                rules: {
                    email: {
                        required: !0,
                        email: !0,
                    },
                    message: {
                        required: !0,
                    },
                },
            });
        }),
        a &&
            shareSelectedText(".post-template .editor-content", {
                sanitize: !0,
                buttons: ["twitter"],
                tooltipTimeout: 250,
            }),
        t(".error-title").length && t("body").addClass("error"),
        t(".tweets").length)
    ) {
        var f = t(".tweets").attr("data-twitter").substr(1);
        t(".tweets").append(
            '<a class="twitter-timeline" data-width="100%" data-height="800" data-tweet-limit="3" data-chrome="noborders noheader nofooter transparent" href="https://twitter.com/' +
                f +
                '?ref_src=twsrc%5Etfw"></a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>'
        );
    }
    function v(a) {
        a < 992 ? t("header .nav").appendTo("#menu .modal-nav") : (t("#menu .modal-nav .nav").appendTo("header .navigation"), t("#menu").modal("hide"));
    }
    function b() {
        t(".kg-gallery-image img").each(function (a, e) {
            var i = t(this).closest(".kg-gallery-image"),
                o = t(this)[0].naturalWidth / t(this)[0].naturalHeight;
            i.attr("style", "flex: " + o + " 1 0%");
        });
    }
    v(n),
        t(window).on("resize", function (t) {
            v((n = Math.max(document.documentElement.clientWidth, window.innerWidth || 0)));
        });
});
