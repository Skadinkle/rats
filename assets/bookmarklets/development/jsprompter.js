javascript:function JSexe() {
	if (valJS != 'null' && valJS != 'undefined') strJS = valJS;
	strJS = prompt('Your Javascript code or variable:', strJS);
	if (strJS != null && strJS != '' && strJS != 'undefined') {
		setTimeout('valJS=\'\'+eval(strJS);JSexe()', 10);
	} else {
		valJS = '';
		strJS = '';
	}
}
valJS = '';
strJS = '';
JSexe();