javascript:void function() {
	"use strict";
	function e(e, t) {
		c.drawImage(d, 50 * e, 51 * t, 50, 51, a.width / 2 - 50, a.height / 2 - 51, 100, 102);
	}
	function t(e, t, n, i, o, r, a, d, c, p) {
		var s = document.createElement(e);
		"div" == e?s.style = `position: absolute; background: red; width: ${a}px; height: ${d}px`:"img" == e && (s.src = p, s.style = `position: absolute; width: ${a}px; height: ${d}px`),
		c && (s.style.backfaceVisibility = "hidden"),
		document.body.appendChild(s),
		y.push([s, t, n, i, o, r, a, d]);
	}
	function n() {
		m().then(function(e) {
			return w = Math.round(e);
		}), document.body.style = "background: linear-gradient(#66b8ff,#fff,#fff,#fff); overflow: visible !important;", document.body.style.transformStyle = "preserve-3d",
		document.body.style.transform = `perspective(${l.fov}px) rotateX(${(f.rX + l.rX)}deg) translate3D(${-f.x}px,${f.z}px,${-f.y}px) rotateY(${l.rY}deg) rotateZ(${-f.rY}deg)`, g.innerHTML = `made by gerland. fps:${w} current frame: ${p.frame}`, a.style.transform = `translate3D(${s.x}px,${-s.z}px,${(s.y + 50)}px) rotateX(-90deg)`, f.z += (s.z - 700 - f.z) / 25, u.style.transform = `translate3D(${(s.x + 100)}px,${(-s.z + 20)}px,0)`, y.forEach(function(e) {
			e[0].style.transform = `translate3D(${e[1]}px,${-e[3]}px,${(e[7] / 2 + e[2])}px) rotateX(${(-90 + e[4])}deg) rotateY(${e[5]}deg)`;
		}), window.requestAnimationFrame(n);
	}
	function i() {
		h.left || h.right || h.down || h.down || h.up || (s.walking =! 1), h.left && (s.x -= 5, p.dirc = 2,s.walking =! 0), h.right && (s.x += 5, p.dirc = 3, s.walking =! 0), h.down && (s.z -= 5, p.dirc = 0, s.walking =! 0), h.up && (s.z += 5, p.dirc = 1, s.walking =! 0), window.requestAnimationFrame(i);
	}
	function o() {
		c.clearRect(0, 0, a.width, a.height), s.walking ? (p.frameval += 1/7, p.frame = Math.floor(p.frameval % 254), e(p.loop[p.frame], p.dirc)):(p.frame = 0, e(p.frame, p.dirc)), window.requestAnimationFrame(o);
	}
	var r = {
		tree:"https://piskel-imgstore-b.appspot.com/img/b34dcb07-afbc-11ec-8d01-cf14772c2713.gif", wall:"https://i.postimg.cc/ZRGFkfV2/cbimage.png", door:"https://i.postimg.cc/Fs8vM04c/image.png", grass:"https://i.postimg.cc/tR2smQxk/e-1.png", charph:"https://i.postimg.cc/g2183jT5/image.png", plrshadow:"https://cdn-icons-png.flaticon.com/512/0/14.png"
	}, a = document.createElement("canvas"), d = new Image, c = a.getContext("2d"); a.style = "position: fixed;", document.body.appendChild(a),
	d.src = r.charph;
	var p = {
		dirc:0, frame:0, frameval:0, loop:[0, 1, 0, 2]
	}, s = {
		x:0, y:0, z:0, rX:0, rY:0, xv:0, yv:0, zv:0, walking:!1
	}, f = {
		x:0, y:0, z:0, rX:60, rY:0
	}, l = {
		fov:500, dist:0, rX:0, rY:0
	}, h = {
		left:!1, right:!1, down:!1, up:!1, space:!1
	}, m = function() {
		return new Promise(function(e) {
			return requestAnimationFrame(function(t) {
				return requestAnimationFrame(function(n) {
					return e(1e3 / (n-t));
				})
			})
		})
	}, w = 0, g = document.createElement("div");
	g.innerHTML = "e", g.style = "background: rgba(0,0,0,0.25); color: white; left: 10px; height: 20px; bottom: 0px; width: 500px; position: fixed; z-index: 1001; text-shadow: 0px 0px 2px #000000, 0px 0px 2px #000000, 0px 0px 2px #000000, 0px 0px 2px #000000, 0px 0px 3px #000000; font-family: Arial, Helvetica, sans-serif;", document.body.parentNode.appendChild(g);
	var x = document.createElement("img");
	x.src = r.grass, x.style = "left: 50%25; top: 95%25; transform: translate(-50%25, -95%25); position: fixed; z-index: -100000; width: 1500px; height: 5000px; overflow: visible;", document.body.appendChild(x);
	var u = document.createElement("img");
	u.src = r.plrshadow, u.style = "opacity: 0.2; width: 100px; height: 100px;", document.body.appendChild(u);
	var y = [];
	t("img", 250, 0, 2e3, 0, 0, 200, 200, !1, r.tree), t("img", 250, 0, 2e3, 0, 90, 200, 200, !1, r.tree), window.addEventListener("keydown", function(e) {
		["Space", "ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight", "KeyR"].indexOf(e.code)>-1&&e.preventDefault(),
		"KeyR" == "".concat(e.code) && window.location.reload(!0);
	}, !1), window.onkeydown = function(e) {
		32 == e.which && (h.space =! 0), 37 == e.which && (h.left =! 0), 38 == e.which && (h.up =! 0), 39 == e.which && (h.right =! 0), 40 == e.which && (h.down =! 0);
	}, window.onkeyup = function(e) {
		32 == e.which && (h.space =! 1), 37 == e.which && (h.left =! 1), 38 == e.which && (h.up =! 1), 39 == e.which && (h.right =! 1), 40 == e.which && (h.down =! 1);
	}, window.scrollTo(0, 0), window.onscroll = function() {
		window.scrollTo(0,0);
	}, o(), n(), i();
}();