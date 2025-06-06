javascript:(function read() {
	var css = (function () {
		/*@charset "utf-8";
		@namespace svg "http://www.w3.org/2000/svg";
		-jancss-comment { content: "General styles -------------------------------------------";
		}
		* {line-height:1.5;}
		html {background:rgb(245,245,225); color:rgb(30,30,30);}
		body {max-width:48em; margin:0 auto; padding:1em; font-family:"Calibri",sans-serif; font-size:1.05rem;}
		p {line-height:1.7;}
		:link {color:#00e;}
		:visited {color: #528;}
		:link:focus, :visited:focus, :link:hover, :visited:hover {color: #e30;}
		:link:active, :visited:active {
			color: #ee0000;
		}
		center, [align] {
			text-align: left;
		}
		b:not(.jancss-probably-structure), u, blink {
			font-weight: inherit;
			font-style: inherit;
			text-decoration: inherit
		}
		b.jancss-probably-structure {
			font-size: larger;
		}
		.jancss-probably-layout {
			font: inherit;
		}
		-jancss-comment {
			content: "Headers --------------------------------------------------";
		}
		h1:not(.jancss-probably-layout), h2:not(.jancss-probably-layout), h3:not(.jancss-probably-layout) {
			font-family: "Cambria", serif;
		}
		h1, h1.jancss-probably-layout {
			border-bottom: 1px solid #888888;
			font-size: 200%;
			font-weight: 100;
		}
		h2, h2.jancss-probably-layout * {
			border-bottom: 1px solid #bbbbbb;
			font-size: 150%;
			font-weight: 100;
		}
		h3, h3.jancss-probably-layout {
			border-bottom: 1px dotted #bbbbbb;
			font-size: 117%;
			font-weight: 100;
		}
		h1.jancss-probably-layout *, h2.jancss-probably-layout *, h3.jancss-probably-layout * {
			font-size: 1rem;
		}
		-jancss-comment {
			content: "Links in headers (probably permalinks) -------------------";
		}
		h1 a[href]:not(:hover), h2 a[href]:not(:hover), h3 a[href]:not(:hover) {
			text-decoration: none;
		}
		h1 a[href]::after, h2 a[href]::after, h3 a[href]::after {
			font-size: 75%;
			content: " #";
		}
		-jancss-comment {
			content: "Pre-formatted text and source code -----------------------";
		}
		pre {
			padding: 1ex;
			border: 1px dotted;
		}
		code, pre, .syntaxhighlighter, .dp-highlighter {
			font-family: "Consolas", monospace;
			font-size: small;
			background: #ffe;
		}
		.dp-highlighter + pre[name="code"] {
			display: none;
		}
		-jancss-comment {
			content: "Forms ----------------------------------------------------";
		}
		textarea {
			width: 100%;
			height: 32ex;
		}
		-jancss-comment {
			content: "Tables ---------------------------------------------------";
		}
		table.jancss-probably-for-data th, table.jancss-probably-for-data td {
			vertical-align: top;
			text-align: left;
			padding: 0.5ex;
		}
		table.jancss-probably-for-data caption {
			font-weight: bold;
			border-bottom: 1px dotted;
		}
		table.jancss-probably-for-layout td {
			display: inline-block;
		}
		table.jancss-probably-for-data tr:nth-child(odd) td:not(.jancss-active-col) {
			background: #ffe;
		}
		table.jancss-probably-for-data tr:hover td:not(.code), table.jancss-probably-for-data .jancss-active-col {
			background: #ffc;
		}
		table.jancss-probably-for-data th, table.jancss-probably-for-data tr td:not(.code):hover {
			background: #ff9;
		}
		table.jancss-probably-for-data th code, table.jancss-probably-for-data td code {
			background: inherit;
		}
		-jancss-comment {
			content: "Make images use the full page width ----------------------";
		}
		img, input[type="image"], object, embed, video, audio, iframe, canvas, :not(svg|*) > svg|* {
			max-width: 100%;
		}
		figure {
			margin: 0;
		}
		iframe {
			width: 100%;
		}
		iframe[class*="twitter"] {
			min-height: 15em;
		}
		-jancss-comment {
			content: "Dim images and media until :hover ------------------------";
		}
		body:not(:hover) img, body:not(:hover) input[type="image"], body:not(:hover) object, body:not(:hover) embed, body:not(:hover) video, body:not(:hover) audio, body:not(:hover) iframe, body:not(:hover) canvas, body:not(:hover) :not(svg|*) > svg|* {
			opacity: 0.25;
		}
		-jancss-comment {
			content: "Limit icon dimensions --------------------------------";
		}
		svg, img[class*="icon"][src*=".svg"], img[class*="Icon"][src*=".svg"], .svg-icon, .inline-icon, .wp-smiley, .smiley, .emoticon, :not(html).emoji {
			max-width: 1.4em;
			max-height: 1.4em;
		}
		-jancss-comment {
			content: "Make everything scrollable -------------------------------";
		}
		[style*="position: fixed"], [style*="position:fixed"] {
			position: static !important;
		}
		-jancss-comment {
			content: "Make side notes and pull quotes less conspicuous ---------";
		}
		aside:not(:hover), [data-expander-id], [id^="footnote_plugin_tooltip_text_"]:not(:hover), blockquote[class*="quote"]:not(:hover), q[class*="pull"]:not(:hover), blockquote[class*="pull"]:not(:hover), .quote-box:not(:hover), .su-pullquote:not(:hover), .pullquote:not(:hover), .pullQuote:not(:hover), .pull-quote:not(:hover) {
			opacity: 0.25;
		}
		-jancss-comment {
			content: "Decrease common forum and metadata font size -------------";
		}
		.postprofile, .signature {
			font-size: smaller;
			border-top: 1px dotted;
			opacity: 0.5;
		} -jancss-comment {
			content: "Hide common social media elements ------------------------";
		}
		iframe[src*=".facebook.com/"], iframe[src*=".twitter.com/widgets/"], iframe[src*="//plusone.google.com/_/+1/"], iframe[src*="//www.reddit.com/static/button/"], iframe[src*="//s7.addthis.com/"], iframe[src*="//www.stumbleupon.com/badge/embed/"], iframe[src*="//widgets.bufferapp.com/"] {
			width: 12em;
			height: 4ex;
			border: 1px dotted;
		}
		.twtr-widget.twtr-scroll {
			max-height: 30ex; overflow: auto;
		}
		.article__share, .social-share, #social_btns, .social-media > .share, .taboola {
			display: none;
		}
		:-moz-any( div, ul, li ):-moz-any( :-moz-any( [id*="social"], [id*="Social"] ):-moz-any( [id*="media"], [id*="Media"] ):-moz-any( [id*="share"], [id*="Share"], [id*="sharing"], [id*="Sharing"] ), :-moz-any( [id*="social"], [id*="Social"] [id*="share"], [id*="Share"], [id*="sharing"], [id*="Sharing"] ):-moz-any( [id*="toolbar"], [id*="Toolbar"], [id*="buttons"], [id*="Buttons"], ), :-moz-any( [class*="social"], [class*="Social"] ):-moz-any( [class*="media"], [class*="Media"] ):-moz-any( [class*="share"], [class*="Share"], [class*="sharing"], [class*="Sharing"] ), :-moz-any( [class*="social"], [class*="Social"] [class*="share"], [class*="Share"], [class*="sharing"], [class*="Sharing"] ):-moz-any( [class*="toolbar"], [class*="Toolbar"], [class*="buttons"], [class*="Buttons"], ) ) {
			display: none;
		}
		:matches( div, ul, li ):matches( :matches( [id*="social"], [id*="Social"] ):matches( [id*="media"], [id*="Media"] ):matches( [id*="share"], [id*="Share"], [id*="sharing"], [id*="Sharing"] ), :matches( [id*="social"], [id*="Social"] [id*="share"], [id*="Share"], [id*="sharing"], [id*="Sharing"] ):matches( [id*="toolbar"], [id*="Toolbar"], [id*="buttons"], [id*="Buttons"], ), :matches( [class*="social"], [class*="Social"] ):matches( [class*="media"], [class*="Media"] ):matches( [class*="share"], [class*="Share"], [class*="sharing"], [class*="Sharing"] ), :matches( [class*="social"], [class*="Social"] [class*="share"], [class*="Share"], [class*="sharing"], [class*="Sharing"] ):matches( [class*="toolbar"], [class*="Toolbar"], [class*="buttons"], [class*="Buttons"], ) ) {
			display: none;
		}
		-jancss-comment {
			content: "Hide ad elements that slipped through my ad blocker ------";
		}
		iframe[id^="google_ads_"] {
			display: none;
		}
		-jancss-comment {
			content: "Hide empty list items ------------------------------------";
		}
		li:empty, li.jancss-emptyish {
			display: none;
		}
		-jancss-comment {
			content: "Make common navigation elements more compact -------------";
		}
		:-moz-any( nav, body [class*="avigat"], body [id*="avigat"], body [class*="-nav-"], body [class*="nav-"], body [class$="-nav"], body [id*="-nav-"], body [id*="nav-"], body [id$="-nav"], body [role="navigation"] ) ul {
			display: inline;
			margin: 0;
			padding: 0;
		}
		:-webkit-any( nav, body [class*="avigat"], body [id*="avigat"], body [class*="-nav-"], body [class*="nav-"], body [class$="-nav"], body [id*="-nav-"], body [id*="nav-"], body [id$="-nav"], body [role="navigation"] ) ul {
			display: inline;
			margin: 0;
			padding: 0;
		}
		:any( nav, body [class*="avigat"], body [id*="avigat"], body [class*="-nav-"], body [class*="nav-"], body [class$="-nav"], body [id*="-nav-"], body [id*="nav-"], body [id$="-nav"], body [role="navigation"] ) ul {
			display: inline;
			margin: 0;
			padding: 0;
		}
		:-moz-any( nav, body [class*="avigat"], body [id*="avigat"], body [class*="-nav-"], body [class*="nav-"], body [class$="-nav"], body [id*="-nav-"], body [id*="nav-"], body [id$="-nav"], body [role="navigation"] ) li {
			display: inline;
			margin: 0;
			padding: 0 .5em;
			border-right: 1px dotted;
		}
		:-webkit-any( nav, body [class*="avigat"], body [id*="avigat"], body [class*="-nav-"], body [class*="nav-"], body [class$="-nav"], body [id*="-nav-"], body [id*="nav-"], body [id$="-nav"], body [role="navigation"] ) li {
			display: inline;
			margin: 0;
			padding: 0 .5em;
			border-right: 1px dotted;
		}
		:any( nav, body [class*="avigat"], body [id*="avigat"], body [class*="-nav-"], body [class*="nav-"], body [class$="-nav"], body [id*="-nav-"], body [id*="nav-"], body [id$="-nav"], body [role="navigation"] ) li {
			display: inline;
			margin: 0;
			padding: 0 .5em;
			border-right: 1px dotted;
		}
		-jancss-comment {
			content: "Hide old cufón text replacement --------------------------";
		}
		.cufon-canvas canvas {
			display: none;
		}
		-jancss-comment {
			content: "Make notes on decorrespondent.nl less conspicuous --------";
		}
		.contentitem-sidenote:not(:hover) > :not(.contentitem-sidenote-snippet), .contentitem-infocard-toggle-container + .contentitem-infocard-contents:not(:hover) {
			opacity: 0.25;
		}
		.contentitem-sidenote:hover > :not(.contentitem-sidenote-snippet), .contentitem-infocard-toggle-container + .contentitem-infocard-contents:hover {
			background: #ffc;
		}
		-jancss-comment {
			content: "Hide the source text on Google Translate-d pages ---------";
		}
		.google-src-text {
			display: none;
		}
		 -jancss-comment {
			content: "Hide big ScrollMagic spacers, e.g. on Co.Design ----------";
		}
		.scrollmagic-pin-spacer {
			display: none;
		}
		-jancss-comment {
			content: "Always hide our IFRAME used to restore console.log -------";
		}
		#xxxJanConsole {
			display: none;
		} */;
	}).toString() .replace(/^function\s*\(\s*\)\s*\{\s*\/\*/, '') .replace(/\*\/\s*\;?\s*\}\s*$/, '');
	var attrs = ['style', 'background', 'bgcolor', 'color', 'text', 'link', 'vlink', 'alink', 'hlink', 'table@width', 'colgroup@width', 'col@width', 'tr@width', 'td@width', 'th@width', 'table@height', 'tr@height', 'td@height', 'th@height', 'img@width', 'img@height', 'source@width', 'source@height', 'border', 'frameborder', 'align', 'face', 'font@size', 'basefont@size'];
	var elementsToRemoveSelectors = [ '.bt-popin' ];
	var headerSelectors = ['[class*="head"]:not(:empty)', '[class*="Head"]:not(:empty)', '[id*="head"]:not(:empty)', '[id*="Head"]:not(:empty)', '[role="heading"]', '[class*="title"]:not(:empty)', '[class*="Title"]:not(:empty)', 'h1:not(:empty), h2:not(:empty), h3:not(:empty)', 'h1:not(:empty)[itemprop~="name"], h2:not(:empty)[itemprop~="name"], h3:not(:empty)[itemprop~="name"]', 'h1:not(:empty)[itemprop~="headline"], h2:not(:empty)[itemprop~="headline"], h3:not(:empty)[itemprop~="headline"]'];
	var ancestorsForHeadersToIgnoreSelectors = ['aside', '.related-posts', '.article-slider', '.article-drawer'];
	var contentSelectors = ['main h1:not(:empty)', 'main header', 'main h2:not(:empty)', 'main', 'body [itemprop="blogPost"] h1:not(:empty)', 'body [itemprop="blogPost"] header', 'body [itemprop="blogPost"] h2:not(:empty)', 'body [itemprop="blogPost"]', 'body [role="main"] h1:not(:empty)', 'body [role="main"] header', 'body [role="main"] h2:not(:empty)', 'body [role="main"]', 'body [role="document"] h1:not(:empty)', 'body [role="document"] header', 'body [role="document"] h2:not(:empty)', 'body [role="document"]', 'body [role="article"] h1:not(:empty)', 'body [role="article"] header', 'body [role="article"] h2:not(:empty)', 'body [role="article"]', 'body #main h1:not(:empty)', 'body #main header', 'body #main h2:not(:empty)', 'body #main', ':not(li) > article:only-of-type', 'body #article', 'body :not(#spotlight) > .article', 'body .articleContent', 'body #article_top', 'body #article_body', 'body #article_main', 'body .post-body:not(.field-item)', ':not(input):not(textarea).post', ':not(input):not(textarea).blogpost', ':not(input):not(textarea).blogPost', 'body [id^="post0"]', 'body [id^="post1"]', 'body [id^="post2"]', 'body [id^="post3"]', 'body [id^="post4"]', 'body [id^="post5"]', 'body [id^="post6"]', 'body [id^="post7"]', 'body [id^="post8"]', 'body [id^="post9"]', 'body [id^="post-0"]', 'body [id^="post-1"]', 'body [id^="post-2"]', 'body [id^="post-3"]', 'body [id^="post-4"]', 'body [id^="post-5"]', 'body [id^="post-6"]', 'body [id^="post-7"]', 'body [id^="post-8"]', 'body [id^="post-9"]', 'body #entry', 'body .entry', 'body #content', 'body .content', 'body [id^="content"]', 'body [class^="content"]', 'body #main', 'body .main', 'h1:not(:empty)', 'body #header', 'header', 'body .header', 'h2:not(:empty)', 'big'];
	var structureElementsForLayoutSelectors = ['//*[contains(" h1 h2 h3 h4 h5 h6 h7 ", concat(" ", local-name(), " ")) and string-length(normalize-space()) > 120]'];
	var layoutElementsForStructureSelectors = ['b:first-child + :empty', ':empty + b + :empty', ':empty + b:last-child', 'div > b:only-child, p > b:only-child'];
	var syntaxHighlightHrefRegex = /\b((syntax|pygments)(hi(ghlight(er)?|lite(r)?))?|sh(Core|Theme[^.]*)|geshi|codecolorer)[./]/i;
	var elementsWithToggledEventHandlers = {};
	var eventHandlerAttributesToToggle = ['oncontextmenu', 'onshow', 'oninput', 'onkeydown', 'onkeyup', 'onkeypress', 'onmousedown', 'onmouseup', 'onmouseenter', 'onmouseleave', 'onmouseover', 'onmouseout', 'onmousemove', 'onresize', 'onscroll', 'onwheel', 'onselect', 'onselectstart', 'onselectionchange'];
	var contentElements = [];
	(function execute(document) {
		function addClass(element, classNames) {
			classNames.split(/\s+/).forEach(function (className) {
				element.className = ((' ' + element.className + ' ').replace(' ' + className.trim() + ' ', '') + ' ' + className).trim();
			});
		}
		function removeClass(element, classNames) {
			classNames.split(/\s+/).forEach(function (className) {
				element.className = (' ' + element.className + ' ').replace(' ' + className.trim() + ' ', '').trim();
			});
		}
		function toArray(arrayLike) {
			return Array.prototype.slice.call(arrayLike);
		}
		var all = toArray(document.getElementsByTagName('*')), ourStyleSheet = document.getElementById('jancss'), allStyleSheets = toArray(document.styleSheets), prettyPrintStyleSheet, matches;
		window.TextResizeDetector && TextResizeDetector.stopDetector && TextResizeDetector.stopDetector();
		var maxTimeoutId = setTimeout(function () {
			for (var i = 1; i < maxTimeoutId; i++) {
				clearTimeout(i); clearInterval(i);
			}
		}, 4);
		var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame || function () {};
		var cancelAnimationFrame = window.cancelAnimationFrame || window.mozCancelAnimationFrame || window.webkitCancelAnimationFrame || window.msCancelAnimationFrame || function () {};
		var maxAnimationFrameRequestId = requestAnimationFrame(function () {
			for (i = 1; i < maxAnimationFrameRequestId * 2; i++) {
				cancelAnimationFrame(i);
			}
			window.requestAnimationFrame = function (callback) {
				var callbackSource = callback.toSource && callback.toSource();
				if (callbackSource && callbackSource.indexOf('Readable++ requestAnimationFrame interceptor') === -1) {
					console.log(`Readable++: intercepted call to requestAnimationFrame at ${new Date()}`);
					console.log(`Readable++: callback for requestAnimationFrame: ${callbackSource}`);
				}
			};
		});
		[window, document, document.documentElement, document.body].forEach(function (elem) {
			if (!elem) {
				return;
			}
			if (elementsWithToggledEventHandlers[elem]) {
				return;
			}
			elementsWithToggledEventHandlers[elem] = true;
			eventHandlerAttributesToToggle.forEach(function (attrib) {
				if (elem[`jancss-${attrib}`]) {
					elem[attrib] = elem[`jancss-${attrib}`]; delete elem[`jancss-${attrib}`];
				} else if (elem[attrib]) {
					elem[`jancss-${attrib}`] = elem[attrib];
					elem[attrib] = function () {};
				}
			});
			if (typeof jQuery === 'function') {
				if (typeof jQuery.hasData === 'function' && jQuery.hasData(elem)) {
					if (typeof jQuery._data !== 'function') {
						return;
					}
					var data = jQuery._data(elem);
					if (data.jancssEvents) {
						data.events = data.jancssEvents;
						delete data.jancssEvents;
						jQuery._data(elem, data);
						return;
					} else if (data.events) {
						data.jancssEvents = data.events;
						delete data.events;
						jQuery._data(elem, data);
						return;
					}
				}
				if (jQuery.fn.data) {
					var $elem = jQuery(elem);
					var eventsData = $elem.data('events');
					var jancssEventsData = $elem.data('jancssEvents');
					if (jancssEventsData) {
						$elem.data('events', jancssEventsData);
						$elem.removeData('jancssEvents');
					} else if (eventsData) {
						$elem.data('jancssEvents', eventsData);
						$elem.removeData('events');
					}
				}
			}
		});
		if (typeof MutationObserver === 'function' && !document.jancssHasMutationObserver) {
			document.jancssHasMutationObserver = true;
			var observer = new MutationObserver(function (mutations) {
				if (ourStyleSheet.disabled) {
					return;
				}
				mutations.forEach(function(mutation) {
					if (!mutation.target.hasAttribute('style') || mutation.target.id === 'xxxJanConsole' || mutation.target.xxxJanReadableAllowStyle) {
						return;
					}
					console.log('Readable++: removing "style" attribute set while in Readable++ mode on element ', mutation.target);
					mutation.target.removeAttribute(mutation.attributeName);
				});
			});
			observer.observe(document, {
				attributes: true, attributeFilter: ['style'], subtree: true
			});
		}
		toArray(document.querySelectorAll('img.b-lazy[data-src*="|"]')).forEach(function (img) {
			var attribute = 'data-src';
			var sources = img.getAttribute(attribute).split('|');
			img.src = sources.pop();
			img.removeAttribute(attribute);
		});
		toArray(document.querySelectorAll('img[data-src] + noscript')).forEach(function (noscript) {
			var img = noscript.previousElementSibling;
			var placeholder = img.previousElementSibling;
			if (placeholder && placeholder.tagName.toLowerCase() === 'svg') {
				placeholder.parentNode.removeChild(placeholder);
			} img.outerHTML = noscript.textContent; noscript.parentNode.removeChild(noscript);
		});
		[ 'data-original', 'data-lazyload', 'data-lazy-src', 'data-full-src', 'data-src' ].forEach(function (attribute) {
			toArray(document.querySelectorAll(`img[${attribute}]`)).forEach(function (img) {
				img.src = img.getAttribute(attribute);
				img.removeAttribute(attribute);
			});
		});
		[].forEach.call(document.querySelectorAll('audio, video'), function (element) {
			element.controls = true;
		});
		toArray(document.querySelectorAll('li :empty:not(img):not(input)')).forEach(function (elem) {
			while (elem.tagName && elem.tagName.toLowerCase() !== 'li') {
				elem = elem.parentNode;
			}
			if (elem.textContent.trim() === '' && !elem.querySelector('img, input')) {
				addClass(elem, 'jancss-emptyish');
			}
		});
		toArray(document.querySelectorAll(elementsToRemoveSelectors.join(', '))).forEach(function (element) {
			element.parentNode.removeChild(element);
		});
		if (!ourStyleSheet) {
			(ourStyleSheet = document.createElementNS('http://www.w3.org/1999/xhtml', 'style')).id = 'jancss';
			ourStyleSheet.innerHTML = css;
			(document.head || document.body || document.documentElement).appendChild(ourStyleSheet);
			ourStyleSheet.disabled = true;
			function columnMouseHandler(e) {
				if (!/^t[dh]$/i.test(`${e.target.tagName}`)) {
					return;
				}
				var targetCell = e.target, nthChild = targetCell.cellIndex + 1, table = targetCell.parentNode;
				while (table && table.tagName.toLowerCase() !== 'table') {
					table = table.parentNode;
				}
				var activeColumnClassName = 'jancss-active-col';
				toArray(table.querySelectorAll(`td:nth-child(${nthChild})`)).forEach(function (cell) {
					if (e.type === 'mouseenter') {
						addClass(cell, activeColumnClassName);
					} else {
						removeClass(cell, activeColumnClassName);
					}
				});
			}
			toArray(document.querySelectorAll('table')).forEach(function (table) {
				var isTableForData = true;
				if (table.querySelector('table')) {
					var isWikipediaInfobox = (` ${table.className} `).match(/infobox/);
					if (!isWikipediaInfobox) {
						console.log('Readable++: TABLE contains other TABLEs, so probably for layout: ', table);
						isTableForData = false;
					}
				} else if (document.compatMode === 'BackCompat' && document.documentElement.scrollHeight > window.innerHeight && table.scrollHeight > 3/4 * document.documentElement.scrollHeight) {
					console.log('Readable++: TABLE seems pretty high in this document in quirks mode, so probably for layout: ', table);
					isTableForData = false;
				} else if (table.rows.length > 3) {
					var numCellsPerRow = [];
					toArray(table.rows).forEach(function (row) {
						if (numCellsPerRow.indexOf(row.cells.length) === -1) {
							numCellsPerRow.push(row.cells.length);
						}
					});
					if (document.compatMode === 'BackCompat' && numCellsPerRow.length >= 3) {
						console.log('Readable++: TABLE has a lot of differing cell counts in this document in quirks mode, so probably for layout: ', table);
						isTableForData = false;
					} else if (numCellsPerRow.length === 1 && numCellsPerRow[0] === 1) {
						console.log('Readable++: TABLE has only rows of one cell each, so probably for layout: ', table);
						isTableForData = false;
					}
				}
				if (isTableForData) {
					addClass(table, 'jancss-probably-for-data');
					table.addEventListener('mouseenter', columnMouseHandler, true);
					table.addEventListener('mouseleave', columnMouseHandler, true);
				} else {
					addClass(table, 'jancss-probably-for-layout');
				}
			});
			if (document.querySelector('.prettyprint')) {
				prettyPrintStyleSheet = document.createElementNS('http://www.w3.org/1999/xhtml', 'style');
				prettyPrintStyleSheet.textContent = '@import url(https://janmoesen.github.io/bookmarklets/css/prettify.css)';
				document.head.appendChild(prettyPrintStyleSheet);
			} else if (document.querySelector('.syntaxhighlighter')) {
				prettyPrintStyleSheet = document.createElementNS('http://www.w3.org/1999/xhtml', 'style');
				prettyPrintStyleSheet.textContent = '@import url(https://janmoesen.github.io/bookmarklets/css/syntaxhighlighter.css)';
				document.head.appendChild(prettyPrintStyleSheet);
			} else if (document.querySelector('.highlight .c, .highlight .k, .highlight .m, .highlight .s, .highlight .w')) {
				prettyPrintStyleSheet = document.createElementNS('http://www.w3.org/1999/xhtml', 'style');
				prettyPrintStyleSheet.textContent = '@import url(https://janmoesen.github.io/bookmarklets/css/pygments.css)';
				document.head.appendChild(prettyPrintStyleSheet);
			} else if (document.querySelector('code[class*="language-"] .token.punctuation')) {
				prettyPrintStyleSheet = document.createElementNS('http://www.w3.org/1999/xhtml', 'style');
				prettyPrintStyleSheet.textContent = '@import url(https://janmoesen.github.io/bookmarklets/css/prism.css)';
				document.head.appendChild(prettyPrintStyleSheet);
			}
			structureElementsForLayoutSelectors.forEach(function (selector) {
				var xPathResult = document.evaluate(selector, document, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);
				for (var i = 0; i < xPathResult.snapshotLength; i++) {
					var elem = xPathResult.snapshotItem(i);
					addClass(elem, 'jancss-probably-layout');
				}
			});
			layoutElementsForStructureSelectors.forEach(function (selector) {
				toArray(document.querySelectorAll(selector)).forEach(function (elem) {
					if (elem.tagName.toLowerCase() !== 'b') {
						elem = elem.previousElementSibling;
					}
					addClass(elem, 'jancss-probably-structure');
				});
			});
		}
		function toggleStyles() {
			ourStyleSheet.disabled = !ourStyleSheet.disabled;
			if (prettyPrintStyleSheet) {
				prettyPrintStyleSheet.disabled = ourStyleSheet.disabled;
			}
			allStyleSheets.forEach(function (styleSheet, i) {
				if (styleSheet.ownerNode !== ourStyleSheet && !syntaxHighlightHrefRegex.test(styleSheet.href)) {
					if (ourStyleSheet[`jancss-originally-disabled-${i}`] === undefined) {
						ourStyleSheet[`jancss-originally-disabled-${i}`] = styleSheet.disabled;
					}
					if (ourStyleSheet.disabled) {
						styleSheet.disabled = ourStyleSheet[`jancss-originally-disabled-${i}`];
					} else {
						styleSheet.disabled = true;
						try {
							if (styleSheet.cssRules[0] && styleSheet.cssRules[0].type === styleSheet.cssRules[0].IMPORT_RULE && styleSheet.cssRules[0].href) {
								styleSheet.disabled = !styleSheet.cssRules[0].href.match(/^https:\/\/janmoesen\.github\.io\//);
							}
						}
						catch (e) {}
					}
				}
			});
			all.forEach(function (elem, i) {
				attrs.forEach(function (attr, j) {
					if (!(matches = attr.match(/([^@]+)@([^@]+)/)) || (elem.tagName && elem.tagName.toLowerCase() == matches[1])) {
						attr = matches ? matches[2] : attr;
						var names = {
							enabled: attr, disabled: `jancss-${attr}`
						};
						if (elem.hasAttribute(names.enabled)) {
							elem.setAttribute(names.disabled, elem.getAttribute(names.enabled));
							elem.removeAttribute(names.enabled);
						} else if (elem.hasAttribute(names.disabled)) {
							elem.setAttribute(names.enabled, elem.getAttribute(names.disabled));
							elem.removeAttribute(names.disabled);
						}
					}
				});
			});
			var disabledStyleAttr = 'jancss-style';
			toArray(document.querySelectorAll(`.wp_syntax [${disabledStyleAttr}]`)).forEach(function (elem) {
				elem.setAttribute('style', elem.getAttribute(disabledStyleAttr));
				elem.removeAttribute(disabledStyleAttr);
			});
		}
		function findContentElement() {
			if (location.hash) {
				var inPageAnchor, inPageAnchorSelectors = [ `a[name="${location.hash.substring(1)}"]`, location.hash.replace(/\./g, '\\.') ];
				for (var i = 0; i < inPageAnchorSelectors.length; i++) {
					try {
						if ((inPageAnchor = document.querySelector(inPageAnchorSelectors[i]))) {
							console.log('Readable++: found in-page anchor based on location.hash: ', inPageAnchor);
							return inPageAnchor;
						}
					}
					catch (e) {}
				}
			}
			var headerInPageTitle;
			var charactersToIgnore = /[^A-Za-z\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0-\u08B4\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16F1-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AD\uA7B0-\uA7B7\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]+/g;
			function normalizeText(str) {
				return str .replace(/\xAD/g, '') .replace(charactersToIgnore, ' ') .trim() .toLowerCase();
			}
			var metaTitleElement = document.querySelector('meta[property="og:title"], meta[property="twitter:title"], meta[name="title"]');
			var normalizedMetaTitle = metaTitleElement && normalizeText(metaTitleElement.content);
			var normalizedPageTitle = normalizeText(document.title); headerSelectors.forEach(function (selector) {
				toArray(document.querySelectorAll(selector)).forEach(function (element) {
					var normalizedText = normalizeText(element.textContent);
					if (!normalizedText.length) {
						return;
					}
					var boundingRect = element.getBoundingClientRect();
					if (!boundingRect.width || !boundingRect.height) {
						return;
					}
					if (boundingRect.top + window.scrollY > window.innerHeight * 1.5) {
						return;
					}
					if ( normalizedPageTitle.length < normalizedText.length && (!metaTitleElement || normalizedMetaTitle.length < normalizedText.length) ) {
						return;
					}
					var substringIndex = normalizedPageTitle.indexOf(normalizedText);
					if (substringIndex === -1 && metaTitleElement) {
						substringIndex = normalizedMetaTitle.indexOf(normalizedText);
					}
					if (substringIndex === -1) {
						return;
					}
					if (typeof element.closest === 'function' && element.closest(ancestorsForHeadersToIgnoreSelectors.join(', '))) {
						return;
					}
					headerInPageTitle = element;
				});
			});
			if (headerInPageTitle) {
				console.log('Readable++: found suitable header element whose text appears in the page title: ', headerInPageTitle);
				return headerInPageTitle;
			}
			for (var i = 0; i < contentSelectors.length; i++) {
				try {
					var element = document.querySelector(contentSelectors[i]);
					if (element && (element.tagName.toLowerCase() === 'a' || element.offsetWidth || element.offsetHeight)) {
						console.log(`Readable++: found matching selector for content element: ${contentSelectors[i]}\nElement: `, element);
						return element;
					}
				}
				catch (e) {
					console.log(`Readable++: bad selector for content element: ${contentSelectors[i]}\nException: ${e}`);
				}
			}
		}
		var contentElement, shouldScrollContentIntoView = false;
		var selection = document.getSelection && document.getSelection();
		if (selection && selection.anchorNode && (selection + '').length) {
			shouldScrollContentIntoView = true;
			contentElement = selection.anchorNode;
			while (contentElement.nodeType !== contentElement.ELEMENT_NODE && contentElement.parentNode) {
				contentElement = contentElement.parentNode;
			}
			console.log('Readable++: found selected element to scroll into view: ', contentElement);
		} else if (ourStyleSheet.disabled && (contentElement = findContentElement())) {
			var tmpElement = contentElement, contentTop = 0;
			do {
				contentTop += tmpElement.offsetTop;
			}
			while ((tmpElement = tmpElement.offsetParent));
			shouldScrollContentIntoView = !window.scrollY || Math.abs(window.scrollY - contentTop) < 20;
		}
		toggleStyles();
		shouldScrollContentIntoView && contentElements.push(contentElement);
		try {
			Array.from(document.querySelectorAll('frame, iframe, object[type^="text/html"], object[type^="application/xhtml+xml"]')).forEach( elem => {
				try {
					execute(elem.contentDocument)
				}
				catch (e) {}
			});
		}
		catch (e) {}
	})(document);
	var contentElement;
	while ((contentElement = contentElements.pop())) {
		contentElement.scrollIntoView({
			behavior: 'smooth', block: 'start', inline: 'start'
		});
	};
})();