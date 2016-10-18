/**
 * CORS
 * @authors Leonard Lepadatu (leonardlepadatu@yahoo.com)
 * @date    2016-10-14 16:06:51
 * @version $Id$
 */

 var COOKIE = {
	get: function() {
		parent.postMessage(document.cookie, '*');
		return;
	},
	set: function (name, value) {
		document.cookie = name + "=" + value + "; expires=expires=Fri, 31 Dec 9999 23:59:59 GMT" +"; path=/";
	},
	del: function(name) {
		document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:00 GMT;";
	}
 }

 parent.postMessage(document.cookie, '*');

 window.addEventListener("message", function(event) {
	if(event.origin === 'http://aa' || event.origin === 'http://bb') {
		var j = JSON.parse(event.data);
		switch(j.met) {
			case "set":
			this.COOKIE.set(j.n, j.v) ;
			break;

			case "del":
			this.COOKIE.del(j.n);
			break;

			case "get":
			this.COOKIE.get();
			break;
		}
	} else {
		return;
	}
 }, false);