javascript:var a, b, c = ['https://web.archive.org/web/20160427205704/https://ajax.googleapis.com/ajax/libs/jquery/1.6.2/jquery.min.js', 'https://web.archive.org/web/20160427205704/http://nyan.alternative.ly/css-transform.js', 'https://web.archive.org/web/20160427205704/http://nyan.alternative.ly/jquery-rotate.js', 'https://web.archive.org/web/20160427205704/http://nyan.alternative.ly/nyan.js'];
for(a = 0; a != c.length; a++) {
	b = document.createElement('script');
	b.src = c[a];
	document.body.appendChild(b);
}
void(0);