javascript: (function () {
	window.g = function () {
		function G(element) {
			if (element.childNodes.length > 0)for (var i = 0; i < element.childNodes.length; i++) {
				if (element.childNodes[i].nodeName.toLowerCase() !== "style" && element.childNodes[i].nodeName.toLowerCase() !== "script") {
					G(element.childNodes[i]);
				}
			}
			if (element.nodeType === Node.TEXT_NODE && element.nodeValue !== "") {
				var thechars =["%EA%AA%96","%E1%A5%87","%E1%A5%B4","%E1%A6%94","%EA%AB%80","%E1%A0%BB","%E1%A7%81","%EA%AB%9D","%EA%A0%B8","%EA%A0%B9","%E1%9B%95","%EA%AA%B6","%EA%AA%91","%EA%AA%80","%EA%AA%AE","%CF%81","%EA%AA%87","%E1%A5%85","%E1%A6%93","%EA%AA%BB","%EA%AA%8A","%EA%AA%9C","%E1%AD%99","%E1%A5%8A","%EA%AA%97","%C6%BA","%EA%AA%96","%E1%A5%87","%E1%A5%B4","%E1%A6%94","%EA%AB%80","%E1%A0%BB","%E1%A7%81","%EA%AB%9D","%EA%A0%B8","%EA%A0%B9","%E1%9B%95","%EA%AA%B6","%EA%AA%91","%EA%AA%80","%EA%AA%AE","%CF%81","%EA%AA%87","%E1%A5%85","%E1%A6%93","%EA%AA%BB","%EA%AA%8A","%EA%AA%9C","%E1%AD%99","%E1%A5%8A","%EA%AA%97","%C6%BA","%E1%A7%92","%E1%92%BF","%E1%97%B1","%E1%94%B0","%C6%BC","%E1%A6%86","%E1%92%A3","%E1%81%A6","%E1%A6%B2"];
				element.textContent = element.textContent.replace("a", thechars[0]).replace("b", thechars[1]).replace("c", thechars[2]).replace("d", thechars[3]).replace("e", thechars[4]).replace("f", thechars[5]).replace("g", thechars[6]).replace("h", thechars[7]).replace("i", thechars[8]).replace("j", thechars[9]).replace("k", thechars[10]).replace("l", thechars[11]).replace("m", thechars[12]).replace("n", thechars[13]).replace("o", thechars[14]).replace("p", thechars[15]).replace("q", thechars[16]).replace("r", thechars[17]).replace("s", thechars[18]).replace("t", thechars[19]).replace("u", thechars[20]).replace("v", thechars[21]).replace("w", thechars[22]).replace("x", thechars[23]).replace("y", thechars[24]).replace("z", thechars[25]).replace("A", thechars[26]).replace("B", thechars[27]).replace("C", thechars[28]).replace("D", thechars[29]).replace("E", thechars[30]).replace("F", thechars[31]).replace("G", thechars[32]).replace("H", thechars[33]).replace("I", thechars[34]).replace("J", thechars[35]).replace("K", thechars[36]).replace("L", thechars[37]).replace("M", thechars[38]).replace("N", thechars[39]).replace("O", thechars[40]).replace("P", thechars[41]).replace("Q", thechars[42]).replace("R", thechars[43]).replace("S", thechars[44]).replace("T", thechars[45]).replace("U", thechars[46]).replace("V", thechars[47]).replace("W", thechars[48]).replace("X", thechars[49]).replace("Y", thechars[50]).replace("Z", thechars[51]).replace("fax", "%E2%84%BB").replace("1", thechars[52]).replace("2", thechars[53]).replace("3", thechars[54]).replace("4", thechars[55]).replace("5", thechars[56]).replace("6", thechars[57]).replace("7", thechars[58]).replace("8", thechars[59]).replace("9", thechars[60]).replace("0", thechars[61]);
			}
		}
		var html = document.getElementsByTagName("html")[0];
		G(html);
	};
	setInterval(g, 1);
})();