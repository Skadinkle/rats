javascript:w = window.open("", "Links", "scrollbars,resizable,width=640,height=550");
w.document.write('<!DOCTYPE html><html><head><meta charset="utf-8"/><script src="https://cdnjs.cloudflare.com/ajax/libs/crypto-js/3.1.9-1/core.js"></script><script src="https://cdnjs.cloudflare.com/ajax/libs/crypto-js/3.1.9-1/sha1.js"></script><script src="https://cdnjs.cloudflare.com/ajax/libs/crypto-js/3.1.9-1/hmac.js"></script><script src="https://cdnjs.cloudflare.com/ajax/libs/crypto-js/3.1.9-1/enc-base64.js"></script><script src="https://cdnjs.cloudflare.com/ajax/libs/crypto-js/3.1.9-1/cipher-core.js"></script><script src="https://cdnjs.cloudflare.com/ajax/libs/crypto-js/3.1.9-1/aes.js"></script><script src="https://cdnjs.cloudflare.com/ajax/libs/crypto-js/3.1.9-1/pbkdf2.js"></script><script type="text/javascript">function encrypt(){var encypt_text=document.getElementById("encypt-text").value;var pass=CryptoJS.enc.Utf8.parse(document.getElementById("encrypt-password").value);var salt=CryptoJS.lib.WordArray.random(128/8);var key=CryptoJS.PBKDF2(pass,salt,{keySize:256/32,iterations:100});var iv=CryptoJS.lib.WordArray.random(128/8);var options={iv:iv,mode:CryptoJS.mode.CBC,padding:CryptoJS.pad.Pkcs7};var encrypted=CryptoJS.AES.encrypt(encypt_text,key,options);document.getElementById("transitmessage").value=salt.toString()+iv.toString()+encrypted.toString();}function decrypt(){document.getElementById("decrypted").value="";var transitmessage=document.getElementById("transitmessage").value;var salt=CryptoJS.enc.Hex.parse(transitmessage.substr(0,32));var iv=CryptoJS.enc.Hex.parse(transitmessage.substr(32,32));var encrypted=transitmessage.substring(64);var pass=CryptoJS.enc.Utf8.parse(document.getElementById("decrypt-password").value);var key=CryptoJS.PBKDF2(pass,salt,{keySize:256/32,iterations:100});var options={iv:iv,mode:CryptoJS.mode.CBC,padding:CryptoJS.pad.Pkcs7};var decrypted=CryptoJS.AES.decrypt(encrypted,key,options);document.getElementById("decrypted").value=decrypted.toString(CryptoJS.enc.Utf8);}</script></head><body><label for="encypt-text">Text to Encrypt：</label><br /><textarea id="encypt-text" rows="8" cols="85"></textarea><br />%C2%A0↓%C2%A0<label for="encrypt-password">Password：</label><br />%C2%A0↓%C2%A0<input id="encrypt-password" type="text" size="80" value="" /><br />%C2%A0↓%C2%A0<input id="encrypt" type="button" value="Encrypt" onclick="encrypt()" /><br /><label for="transitmessage">Text to Decrypt：</label><br /><textarea id="transitmessage" rows="4" cols="85"></textarea><br />%C2%A0↓%C2%A0<label for="decrypt-password">Password：</label><br />%C2%A0↓%C2%A0<input id="decrypt-password" type="text" size="80" value="" /><br />%C2%A0↓%C2%A0<input id="decrypt" type="button" value="Decrypt" onclick="decrypt()" /><br /><label for="decrypted">Decrypted Text：</label><br /><textarea id="decrypted" rows="8" cols="85"></textarea></body></html>');
javascript:w = window.open("", "Links", "scrollbars,resizable,width=640,height=550");
w.document.write('<!DOCTYPE html><html><head><meta charset="utf-8"/><script src="https://cdnjs.cloudflare.com/ajax/libs/crypto-js/3.1.9-1/core.js"></script><script src="https://cdnjs.cloudflare.com/ajax/libs/crypto-js/3.1.9-1/sha1.js"></script><script src="https://cdnjs.cloudflare.com/ajax/libs/crypto-js/3.1.9-1/hmac.js"></script><script src="https://cdnjs.cloudflare.com/ajax/libs/crypto-js/3.1.9-1/enc-base64.js"></script><script src="https://cdnjs.cloudflare.com/ajax/libs/crypto-js/3.1.9-1/cipher-core.js"></script><script src="https://cdnjs.cloudflare.com/ajax/libs/crypto-js/3.1.9-1/aes.js"></script><script src="https://cdnjs.cloudflare.com/ajax/libs/crypto-js/3.1.9-1/pbkdf2.js"></script><script type="text/javascript">function encrypt(){var encypt_text=document.getElementById("encypt-text").value;var pass=CryptoJS.enc.Utf8.parse(document.getElementById("encrypt-password").value);var salt=CryptoJS.lib.WordArray.random(128/8);var key=CryptoJS.PBKDF2(pass,salt,{keySize:256/32,iterations:100});var iv=CryptoJS.lib.WordArray.random(128/8);var options={iv:iv,mode:CryptoJS.mode.CBC,padding:CryptoJS.pad.Pkcs7};var encrypted=CryptoJS.AES.encrypt(encypt_text,key,options);document.getElementById("transitmessage").value=salt.toString()+iv.toString()+encrypted.toString();}function decrypt(){document.getElementById("decrypted").value="";var transitmessage=document.getElementById("transitmessage").value;var salt=CryptoJS.enc.Hex.parse(transitmessage.substr(0,32));var iv=CryptoJS.enc.Hex.parse(transitmessage.substr(32,32));var encrypted=transitmessage.substring(64);var pass=CryptoJS.enc.Utf8.parse(document.getElementById("decrypt-password").value);var key=CryptoJS.PBKDF2(pass,salt,{keySize:256/32,iterations:100});var options={iv:iv,mode:CryptoJS.mode.CBC,padding:CryptoJS.pad.Pkcs7};var decrypted=CryptoJS.AES.decrypt(encrypted,key,options);document.getElementById("decrypted").value=decrypted.toString(CryptoJS.enc.Utf8);}</script></head><body><label for="encypt-text">Text to Encrypt：</label><br /><textarea id="encypt-text" rows="8" cols="85"></textarea><br />%C2%A0↓%C2%A0<label for="encrypt-password">Password：</label><br />%C2%A0↓%C2%A0<input id="encrypt-password" type="text" size="80" value="" /><br />%C2%A0↓%C2%A0<input id="encrypt" type="button" value="Encrypt" onclick="encrypt()" /><br /><label for="transitmessage">Text to Decrypt：</label><br /><textarea id="transitmessage" rows="4" cols="85"></textarea><br />%C2%A0↓%C2%A0<label for="decrypt-password">Password：</label><br />%C2%A0↓%C2%A0<input id="decrypt-password" type="text" size="80" value="" /><br />%C2%A0↓%C2%A0<input id="decrypt" type="button" value="Decrypt" onclick="decrypt()" /><br /><label for="decrypted">Decrypted Text：</label><br /><textarea id="decrypted" rows="8" cols="85"></textarea></body></html>');