javascript:"use strict";
var t = window.open("_EXT").document;
t.write('<!DOCTYPE html><html lang="en"><head><title>Source</title><meta charset="utf-8"/></head><body/></html>');
t.close();
t.body.appendChild(t.createElement("pre")).appendChild(t.createElement("code")).appendChild(t.createTextNode(document.documentElement.outerHTML));