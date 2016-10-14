/**
 * CORS
 * @authors Leonard Lepadatu (leonardlepadatu@yahoo.com)
 * @date    2016-10-14 16:06:51
 * @version $Id$
 */

var COOKIE = {
	set: function (name, value) {
		document.cookie = name + "=" + value + "; path=/";
		//ex.without expire
	},
}

parent.postMessage(document.cookie, '*');

window.addEventListener("message", function(event) {
	if(event.origin === 'http://aa' || event.origin === 'http://bb') {
		var j = JSON.parse(event.data);
		this.COOKIE.set(j.n, j.v) ;
	} else {
		return;
	}
}, false);