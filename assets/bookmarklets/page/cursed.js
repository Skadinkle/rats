javascript:(function() {
	function q() {
		var a = document.createElement("div");
		a.setAttribute("class", r);
		document.body.appendChild(a);
		setTimeout(function() {
			document.body.removeChild(a);
		} ,100);
	}
	function l(a) {
		var b = a.offsetHeight;
		a = a.offsetWidth;
		return b > t && b < u && a > v && a < w
	}
	function x(a) {
		for(var b = 0; a;)b += a.offsetTop, a = a.offsetParent;
		a = b;
		return a >= m && a <= y + m
	}
	function n() {
		for(var a = document.getElementsByClassName(e), b = new RegExp("\b" + e + "\b"); 0 < a.length;)a[0].className = a[0].className.replace(b, "")
	}
	var t = 30, v = 30, u = 350, w = 350, e = "mw-harlem_shake_me", p = ["im_drunk","im_baked","im_trippin","im_blown"], r = "mw-strobe_light", y = function() {
		var a = document.documentElement;
		return window.innerWidth?window.innerHeight:a && !isNaN(a.clientHeight) ? a.clientHeight:0
	}();
	var m = window.pageYOffset ? window.pageYOffset:Math.max(document.documentElement.scrollTop, document.body.scrollTop);
	for(var f = document.getElementsByTagName("*"), h = null, c = 0; c < f.length; c++) {
		var d = f[c];
		if(l(d) && x(d)) {
			h = d;
			break
		}
	}
	if (null === d)console.warn("Could not find a node of the right size. Please try a different page.");
	else {
		(function() {
			var a = document.createElement("link");
			a.setAttribute("type", "text/css");
			a.setAttribute("rel", "stylesheet");
			a.setAttribute("href", "https://s3.amazonaws.com/moovweb-marketing/playground/harlem-shake-style.css");
			a.setAttribute("class", "mw_added_css");
			document.body.appendChild(a);
		})();
		(function() {
			var a = document.createElement("audio");
			a.setAttribute("class", "mw_added_css");
			a.src = "https://s3.amazonaws.com/moovweb-marketing/playground/harlem-shake.mp3";
			a.loop = !1;
			a.addEventListener("canplay", function() {
				setTimeout(function() {
					h.className += " " + e + " im_first";
				}, 500);
				setTimeout(function() {
					n();
					q();
					for(var b = 0; b < g.length; b++)g[b].className += " " + e + " " + p[Math.floor(Math.random() * p.length)];
				}, 15500)
			}, !0);
			a.addEventListener("ended", function() {
				n();
				for(var b = document.getElementsByClassName("mw_added_css"), k = 0; k < b.length; k++)document.body.removeChild(b[k]);
			}, !0);
			a.innerHTML = " <p>If you are reading this, it is because your browser does not support the audio element. We recommend that you get a new browser.</p> <p>";
			document.body.appendChild(a);
			a.play();
		})();
		var g = [];
		for(c = 0; c < f.length; c++)d = f[c], l(d) && g.push(d);
	}
})();
(function() {
	var $jscomp = $jscomp || {};
	$jscomp.scope = {};
	$jscomp.createTemplateTagFirstArg = function(a) {
		return a.raw = a
	};
	$jscomp.createTemplateTagFirstArgWithRaw = function(a, b) {
		a.raw = b;
		return a
	};
	var incrementingNum = 0, colors = "red orange yellow green blue purple pink".split(" ");
	setInterval(function() {
		6 <= incrementingNum ? incrementingNum = 0:incrementingNum++;
		for(var a = document.querySelectorAll("div"), b = 0; b < a.length; b++)a[b].style.backgroundColor = colors[incrementingNum], a[b].style.transition = "background-color 1s";
	}, 1E3);
	try { 
		var audio = document.createElement("audio");
		audio.src = "http://soundbible.com/mp3/Fart-Common-Everyday-Fart_Mike-Koenig.mp3";
		audio.loop = !0;
		audio.play();
	}
	catch(a) {
		console.log("Unable to play audio.");
	}
	var css = "\nhtml, body {\n\tcursor: url('data:image/x-icon;base64,AAACAAEAICAAAAAAAACoEAAAFgAAACgAAAAgAAAAQAAAAAEAIAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP///wL///8C////Av///wL///8C////Av///wL///8C////Av///wL///8C////Av///wL///8C////Av///wL///8C////Av///wL///8C////Av///wL///8CAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA////Av///wL///8C////Av///wL///8C////Av///wL///8C////Av///wL///8C////Av///wL///8C////Av///wL///8C////Av///wL///8C////Av///wIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD///8C////Av///wL///8C////Av///wL///8C////Av///wL///8C////Av///wL///8C////Av///wL///8C////Av///wL///8C////Av///wL///8C////AgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP///wL///8C////Av///wL///8C////Av///wL///8C////Av///wLZ7vH/2u/z/////wL///8C////Av///wL///8C////Av///wL///8C////Av///wL///8CAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA////Av///wL///8C////Av///wL///8C////Ah1wdf8ncnz/O217/ypwff8tc4D/JnN8/zJwcv////8C////Av///wL///8C////Av///wL///8C////Av///wIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD///8C////Av///wL///8C////Av///wI0eoT/K32F/y10fv8qcXv/LnB7/ytteP8sdn7/O4yT/zR6ff////8C////Av///wL///8C////Av///wL///8C////AgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP///wL///8C////Av///wL///8CJ3qA/y1/h/8xeYP/J254/ypxe/8xeIL/KXB6/ydkbv8oYGv/KHJ4/zKQjv////8C////Av///wL///8C////Av///wL///8C////AgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA////Av///wL///8C////Aj5xdf8ueYH/L3mF/yp5gv8yf5D/NXqM/yZykP8kcI3/L3eI/zhwdv8teXb/MIOE/z2RjP////8C////Av///wL///8C////Av///wIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD///8C////Av///wL///8CL32H/y+BhP8zhIn/MH+c/1yZy/9co8f/T5y4/02atv9jr9P/orTe/zmOk/86mJj/NZ+a/zSMh/////8C////Av///wL///8C////AgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP///wL///8C////Aj2Dif8ugIX/L4GG/y5+l/9jo9f/AAkS/0E8ef9ARYP/RkyW/1ZTk/8PIlT/Zrbe/zOfmv85naH/Oa2n/0h/fv////8C////Av///wL///8CAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA////Av///wL///8CKnh//zKDiP87jJH/XaTZ/wMKCP9MUY7/R1SH/0RIff9JS3P/OUVs/zo6Zv8AAgb/fbjv/zamp/82rK7/LbKp/////wL///8C////Av///wIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD///8C////Ajx/gP83iY//L3+H/yx8lP8qUXX/IBwp/x4jMv8VFyH/EhEN/xYPGP8WDxT/GQ8R/w0GAP8RJSv/MZqq/zKnq/8zt7v/uN3Z/////wL///8C////AgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP///wL///8CKoSI/ziMl/80hYz/PYmv/wcHAf8SFRr/GSQ0/wgcJ/9vlq3/g6ix/7Pd8P9oj57/UXqM/y8tPv88dZj/PrG2/zSst/9sqqX/////Av///wL///8CAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA////Av///wI0h4n/MoqP/y2EjP9MjrT/ESMg/yVDY/8lT2v/V5ai/0tujf8jR2b/Hz9x/yBJdP8gbpL/Lai7/zOkqv80pKv/N5eg/ziwqf////8C////Av///wIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD///8C////Aj2Okf8ygYf/LXyD/yJXc/8iNkf/ETRW/xc7Z/8hVX7/XKjD/1DQyv8+yM//T9bk/0XK1P83ws3/MK64/yFoe/81jZf/Hq6j/////wL///8C////AgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP///wL///8CL5WR/yl5gP8YUl//MoKR/zSSlv84q6v/Nrm7/ze1s/8zoKT/JmBt/yNecf87m6z/PLrI/zG2x/8ukZ3/J15u/ziepv8/q6v/////Av///wL///8CAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA////Av///wI0jov/L4aL/yxve/8ZTWH/J2p6/zmKl/8ziZf/J2dz/xc2Pv8fQ0v/Ildt/xpYcf8ZOD7/F1BW/y1wff8xqbP/MLm//0C4t/////8C////Av///wIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD///8C////Av///wIwj5P/MYKK/yZrdf8hW2f/IUxb/x08SP8QIC//MWl0/z+Kpv80nrn/NaG7/zSdof80qq3/SbzH/0TG1P8sxMv/Ks7G/////wL///8C////AgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP///wL///8C////AjKloP81l53/N5mf/zaXof85mKL/IFpm/zR4gv87i5T/Laez/0m1x/9avdH/Mb2//zO3vP89ydD/PdTa/zPh5P810cr/////Av///wL///8CAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA////Av///wL///8CTKif/ziztP8ys73/LL/K/yjI0v8nv8f/Jo6V/0LBx/85x8//PNXc/z3N0P8HU2L/GTVc/32NpP9rmab/N5+k/////wL///8C////Av///wIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD///8C////Av///wLH+PH/QcTA/z7GzP8tgYn/YnmL/xUUNv+Wv8z/MFJe/z2Wnv87t8L/IW1w/yRMU/8PLDb/ED5J/z6NkP9Bq7D/KKyx/////wL///8C////AgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/////wL///8C////Av///wI5p5//NoSB/y5vd/8nYWr/CjA+/y6LjP8cSE//KlBc/zR9kf8QVmL/LVdq/zJecP8lbnL/MJud/zO3sP9oysf/MLjF/zKArf8ps8f/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/////Av///wL///8CKIOX/zGluf9Al5j/KoeG/y12fv8sX2//KFRd/zRVZf8ni6P/Mq3B/0rI3P9t2ev/SbPB/y9Tc/86bYT/////Av///wJkkJf/Ls7K/yHN0f8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP8qma//HVh3/0egvv9Zu77/////Ake6rv8zlo//PJaX/zyZmv8oen7/H3iQ/z3V6/822Ob/JNPf/zfd5v8n1dj/O8nQ/zbKx/////8C////Av///wJD4PH/////AgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/zKfsP8tn6//PsjE/////wL///8C////AjGvov8mXHP/MVd5/0Kcuv8i1db/Jtfe/yHb4f8z4+r/M+Dm/yTf4/8/x8//levn/////wL///8C////Av///wL///8CAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/////Aiewx/////8C////Av///wL///8CicvJ/zS7tf8yxML/NMLG/yXV2/8p2eT/Nd/t/0Dh8P8x3ej/I93l/xzg1f////8C////Av///wL///8C////Av///wIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/////wL///8CftrL/zLKyv8i2db/INfd/yLX4/803u7/K9nk/yLk5P8S3tT/////Av///wL///8C////Av///wL///8C////AgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP///wL///8C////Av///wL///8C////Av///wL///8C////AmnQz/8c18v/QNfU/zHf3f8K5Nb/////Av///wL///8C////Av///wL///8C////Av///wL///8CAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA////Av///wL///8C////Av///wL///8C////Av///wL///8C////Av///wL///8C////Av///wL///8C////Av///wL///8C////Av///wL///8C////Av///wIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD///8C////Av///wL///8C////Av///wL///8C////Av///wL///8C////Av///wL///8C////Av///wL///8C////Av///wL///8C////Av///wL///8C////AgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP///wL///8C////Av///wL///8C////Av///wL///8C////Av///wL///8C////Av///wL///8C////Av///wL///8C////Av///wL///8C////Av///wL///8CAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA////Av///wL///8C////Av///wL///8C////Av///wL///8C////Av///wL///8C////Av///wL///8C////Av///wL///8C////Av///wL///8C////Av///wIAAAAAAAAAAAAAAAAAAAAA//////////////////5////wH///4A///8AH//+AA///gAH//wAA//8AAP/+AAB//gAAf/4AAH/+AAB//gAAf/4AAH//AAB//wAAf/8AAP//AAB/94AAD/cAAY/wQAHf8OAB//XgA//wMAf///wf//////////////////////8='), auto;\n}", style = document.createElement("style");
	style.innerHTML = css;
	document.head.appendChild(style);
	css = "\n@keyframes roll {\n  100%{\n    transform:rotate(360deg)\n  }\n}\nbody {\n  animation-name: roll;\n  animation-duration: 4s;\n  animation-iteration-count: 1;\n}\n";
	style = document.createElement("style");
	style.innerHTML = css;
	document.head.appendChild(style);
})();
(function() {
	var elems = document.getElementsByTagName("*");
	for(var i = 0; i < elems.length; i++) {
		elems[i].style.fontFamily = "Comic Sans MS";
		elems[i].style.fontSize = Math.random() * 75 + "px";
		elems[i].style.color = '#' + Math.random().toString(16).slice(2, 8);
		elems[i].style.backgroundColor = '#' + Math.random().toString(16).slice(2, 8);
	}
})();
document.onclick = function() {
	(function() {
		var d = 0;
		setInterval(function() {
			document.body.style['-webkit-transform'] = 'rotate('+ d +'deg)'; d += 1;
		}, 100);
	}());
};
(function() {
	var bluroffspeed = 1000;
	var bluronspeed = 2000;
	function bluron() {
		(function () {
			document.body.style.filter = 'blur(5px)';
		})();
		function bluroff() {
			(function () {
				document.body.style.filter = 'blur(0px)';
			})();
		}
		setTimeout(bluroff, bluroffspeed);
	}
	setInterval(bluron, bluronspeed);
})();
(function() {
	var opt = 0.1;
	var pen = 'block';
	var size = 10;
	var clr = "blue";
	var rate = 0.005;
	var userrate = 3;
	function mousemove(event) {
		var x = event.clientX;
		var y = event.clientY;
		x = x - 8;
		y = y - 8;
		(function() {
			var elem = document.createElement('div');
			var body = document.getElementsByTagName('body')[0];
			body.appendChild(elem);
			elem.style.position = 'fixed';
			elem.style.top = '' + y + 'px';
			elem.style.left = '' + x + 'px';
			elem.style.margin = '10px';
			elem.style.paddingTop = '10px';
			elem.style.width = '' + size + 'px';
			elem.style.height = '' + size + 'px';
			elem.style.zIndex = 10000;
			elem.style.opacity = opt;
			elem.style.color = '' + clr + '';
			elem.style.backgroundColor = '' + clr + '';
			elem.style.border = '0px solid white';
			elem.style.textAlign = 'center';
			elem.id = 'paint';
			elem.style.display = '' + pen + '';
			elem.innerText = '';
			function repeat() {
				elem.style.opacity = elem.style.opacity - rate;
			}
			setInterval(repeat, 15);
		}());
	}
	window.addEventListener('mousemove', mousemove);
})();
(function() {
	var style = document.createElement("style");
	document.body.appendChild(style);
	var canvas = document.createElement("canvas");
	canvas.id = "canvas";
	document.body.appendChild(canvas);
	var context = canvas.getContext("2d");
	function outlineBounds() {
		context.clearRect(0, 0, window.innerWidth, window.innerHeight);
		context.beginPath();
		var bounds = Array.from(document.querySelectorAll("*")).map(function (e) {
			return e.getBoundingClientRect();
		});
		var withinBounds = bounds.filter(function (e) {
			var viewVertical = window.scrollY < e.bottom || e.top < window.scrollY + window.innerHeight;
			var viewHorizontal = window.scrollX < e.right || e.left < window.scrollX + window.innerWidth;
			return viewVertical && viewHorizontal;
		});
		withinBounds.forEach(function (e) {
			context.rect(e.left, e.top, e.right - e.left, e.bottom - e.top);
		});
		context.stroke();
	}
	function fillBounds() {
		context.clearRect(0, 0, window.innerWidth, window.innerHeight);
		context.fillStyle = "#00000011";
		var bounds = Array.from(document.querySelectorAll("*")).map(function (e) {
			return e.getBoundingClientRect();
		});
		var withinBounds = bounds.filter(function (e) {
			var viewVertical = window.scrollY < e.bottom || e.top < window.scrollY+window.innerHeight;
			var viewHorizontal=window.scrollX<e.right||e.left<window.scrollX+window.innerWidth;
			return viewVertical && viewHorizontal;
		});
		withinBounds.forEach(function (e) {
			context.fillRect(e.left, e.top, e.right - e.left, e.bottom - e.top);
		});
	}
	function resizeCanvas() {
		style.innerHTML = `#canvas {position: fixed;left: 0;top: 0;width: 100%;height: 100%;z-index: 9999;pointer-events: none;}`;
		canvas.width = window.innerWidth;
		canvas.height = window.innerHeight;
		fillBounds();
	}
	resizeCanvas();
	window.addEventListener("scroll", fillBounds);
	window.addEventListener("resize", resizeCanvas);
	var pixelSize = 8;
	var halfPixel = Math.floor(pixelSize / 2);
	function drawPixel(x, y, r, g, b, a) {
		context.fillStyle = "rgba(" + [r, g, b, a].join(", ") + ")";
		context.fillRect(x - halfPixel, y - halfPixel, pixelSize, pixelSize);
	}
	function distanceSquared(a, b) {
		var dx = b.x - a.x;
		var dy = b.y - a.y;
		return dx * dx + dy * dy;
	}
	function main(mouse) {
		fillBounds();
		var data = context.getImageData(0, 0, context.canvas.width, context.canvas.height).data;
		context.clearRect(0, 0, context.canvas.width, context.canvas.height);
		for (var x = 0; x < context.canvas.width; x += pixelSize) {
			for (var y = 0; y < context.canvas.height; y += pixelSize) {
				var pixel = {
					"x": x, "y": y
				};
				var intensityMouse = 1 / distanceSquared(pixel, mouse);
				var colorMouse = {
					"r": 0, "g": 255, "b": 255
				};
				var copy = {
					"x": window.innerWidth - mouse.x, "y": window.innerHeight - mouse.y
				};
				var intensityCopy = 1 / distanceSquared(pixel, copy);
				var colorCopy = {
					"r": 255, "g": 0, "b": 0
				};
				var intensity = intensityMouse + intensityCopy;
				var color = {
					"r": Math.floor((colorMouse.r * intensityMouse + colorCopy.r * intensityCopy) / intensity),"g": Math.floor((colorMouse.g * intensityMouse + colorCopy.g * intensityCopy) / intensity), "b": Math.floor((colorMouse.b * intensityMouse + colorCopy.b * intensityCopy) / intensity)
				};
				if (intensity > 0.000001) {
					var ha = 256 * intensity * (256 - data[(x + y * window.innerWidth) * 4 + 3]);
					drawPixel(x, y, Math.floor(color.r * ha), Math.floor(color.g * ha), Math.floor(color.b * ha), 1 - ha);
				}
			}
		}
	}
	window.addEventListener("mousemove", main);
})();
document.addEventListener("click", e => {
	e.stopPropagation();
	e.preventDefault();
}, true);