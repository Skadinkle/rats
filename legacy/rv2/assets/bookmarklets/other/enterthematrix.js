javascript:(function() {
	var wn = window, w, h, o = {}, m, dc, b, c = 'ABCDEFGHIJKLM1234567890nopqrstuvwxyz', y = setInterval, z = clearInterval, t = 1;
	function x() {
		dc = document;
		b = dc.body;
		b.innerHTML = '';
		bs = b.style;
		w = wn.innerWidth;
		h = wn.innerHeight;
		bs.backgroundColor = 'black';
		bs.overflow = 'hidden';
		m = y(n, 25);
		dc.addEventListener('keydown', function(e) {
			if(e.keyCode == 83) {
				if(t)z(m);
				else m = y(n, 25);
				t = !t;
			}
		}, 0);
	}
	function g(i) {
		return dc.getElementById(i);
	}
	function r(d, m) {
		return Math.floor(Math.random() * d) + m;
	}
	function a(i) {
		var d = g(i), ds = d.style, t = parseInt(ds.top), k = o[i];
		if(t < h) {
			ds.top = (t + 10) + 'px';
		} else {
			z(k);
			b.removeChild(d);
			delete k;
		}
	}
	function n() {
		var d = dc.createElement('div'), dt = new Date(), i = 'm_' + dt.getTime(), ds = d.style, v = ds.visibility, j = 0, u = [], l = r(21, 4), q = c.length, p;
		d.id = i;
		ds.width = '5px';
		ds.opacity = r(0.3, 0.7);
		ds.fontSize = r(8, 8) + 'px';
		ds.lineHeight = '8px';
		ds.color = 'green';
		ds.position = 'absolute';
		ds.left = r(w, 0) + 'px';
		v = 'hidden';
		while(j < l) {
			p = r(q, 0);
			u[j] = c.substring(p, p + 1);
			j++;
		}
		d.innerHTML = u.join("\n");
		b.appendChild(d);
		ds.top = -d.offsetHeight + 'px';
		v = 'visible';
		o[i] = y(function() {
			a(i);
		}, r(20, 40));
	}
	x();
})()