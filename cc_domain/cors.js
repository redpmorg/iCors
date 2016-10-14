/**
 * CORS - cors
 * @authors Leonard Lepadatu (leonardlepadatu@yahoo.com)
 * @date    2016-10-13 16:06:51
 * @version $Id$
 */

 var i = document.createElement('iframe');
 i.width=0;
 i.height=0;
 i.style.visibility='hidden';
i.src="http://cc/index.html"; //IE problems without
document.body.appendChild(i);

var COOKIE = {
	cookie: "",
	i: document.getElementsByTagName("iframe")[0].contentWindow,
	get: function(name) {
		var eq = name + "=";
		var c = COOKIE.cookie.split(';');
		for (var i = 0; i < c.length; i++) {
			var a = c[i];
			while (a.charAt(0) == ' ') {
				a = a.substring(1, a.length);
			}
			if (a.indexOf(eq) == 0) {
				return a.substring(eq.length, a.length);
			}
		}
		return null;
	},
	set: function(name, value) {
		COOKIE.i.postMessage(JSON.stringify({n:name, v:value}), '*');
	}
}

//fetch cookie
window.addEventListener("message", function(event) {
	if(event.origin !== 'http://cc') {
		return;
	}
	COOKIE.cookie = event.data;
	return;
}, false);
