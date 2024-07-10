for (var e, t, n, i = document.getElementById("banner-photo-gallery"), a = i.querySelectorAll(".nav-procedures .procedures ul.toc a"), o = i.querySelectorAll(".zones svg a"), c = i.querySelector(".cta-concern a.eii-btn"), u = 0, s = [], l = 0; l < a.length; l++) s.push(a[l].getAttribute("data-rel"));
for (l = 0; l < a.length; l++) a[l].addEventListener("mouseover", (function () {
  m(), h(), g(), f(this.getAttribute("data-rel"))
})), a[l].addEventListener("mouseout", h);
for (l = 0; l < o.length; l++) o[l].addEventListener("mouseover", (function () {
  p() || (m(), h(), g(), target = this.getAttribute("data-rel"), v(target), f(target))
})), o[l].addEventListener("mouseout", (function (e) {
  p() || (h(), g())
})), o[l].addEventListener("click", (function (e) {
  d(e, this.getAttribute("data-rel"), this)
})), o[l].addEventListener("touch", (function (e) {
  d(e, this.getAttribute("data-rel"), this)
}));

function d(e, t, i) {
  if (p()) return e.preventDefault(), i === n && (location.href = i.getAttributeNS("http://www.w3.org/1999/xlink", "href")), n = i, m(), g(), h(), v(t), f(t), b(t), r(document.body.clientWidth), !1
}

function f(e) {
  for (var t = 0; t < o.length; t++) o[t].classList.contains(e) && (o[t].classList.add("active"), "contour" === o[t].getAttribute("data-procedure") && (c.classList.remove("secondary"), c.classList.add("primary")), "rejuvenation" === o[t].getAttribute("data-procedure") && (c.classList.remove("primary"), c.classList.add("secondary")))
}

function h() {
  for (var e = 0; e < o.length; e++) o[e].classList.remove("active")
}

function v(e) {
  for (var t = 0; t < a.length; t++) a[t].getAttribute("data-rel") == e && a[t].classList.add("active")
}

function g() {
  for (var e = 0; e < a.length; e++) a[e].classList.remove("active")
}

function m() {
  clearInterval(e), clearTimeout(t), t = setTimeout((function () {
    e = setInterval(L, 2500)
  }), 6500)
}

function L() {
  n = "", g(), h(), f(s[u]), v(s[u]), c.classList.contains("base") || b(s[u]), u = u < s.length - 1 ? u + 1 : 0
}

function y(e) {
  var t = c.querySelector("span").innerHTML.length,
    n = setInterval((function () {
      t <= 1 && (clearInterval(n), function (e) {
        var t = e;
        c.querySelector("span").innerHTML = t.charAt(0);
        var n = 1,
          r = setInterval((function () {
            n > t.length && clearInterval(r), c.querySelector("span").innerHTML += t.charAt(n), n++
          }), 20)
      }(e)), c.querySelector("span").innerHTML = c.querySelector("span").innerHTML.substring(0, t), t--
    }), 15)
}

function b(e) {
  var t, n = i.querySelector('.nav-procedures .procedures ul.toc a[data-rel="' + e + '"]');
  label = null !== (t = n.getAttribute("data-label-short")) && void 0 !== t ? t : n.innerHTML, url = n.getAttribute("href"), c.setAttribute("href", url), c.classList.remove("base"), y(label)
}

function p() {
  if ((window.innerWidth && document.documentElement.clientWidth ? Math.min(window.innerWidth, document.documentElement.clientWidth) : window.innerWidth || document.documentElement.clientWidth || document.getElementsByTagName("body")[0].clientWidth) <= 1024) return !0;
  n = ""
}
e = setInterval(L, 2500)