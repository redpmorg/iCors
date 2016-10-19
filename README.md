# iCORS

Exchanging messaging with different domains(Cross Origin Resource Domanin) will break the browsers "same origin policy".
There are some methods to eschew "same origin policy":

* JSONP              - AJAX call - JSON with Padding - with a payload callback 
* CORS               - The newer AJAX method, instantiated with *withCredentials*! Need HTTP Server additional configs to provide headers
* Reverse Proxy      - Setting a proxy on server and allow browser to use relative paths for the AJAX calls ...
* window.postMessage - The iFrame method for CORS message exchanging

iCORS is a javascript small library that use CORS iFrame method to share cookie between different domains.

aa_domain and bb_domain - clients domain no matter who they are

cc_domain - central domain where the cookie will be stored

The library is deliberate not optimized nor minified because this should be use as teaching material!


# Example

aa_domain, bb_domain and cc_domain should be configured as valid domains.

Open first browser tab or window and enter http://aa

Hit "Like" button

Open second browser tab and enter http://bb!

# DEMO

http://aa.redpm.org

http://bb.redpm.org

# Knowing Issues

There is not a "has method" implemented yet

Crossbrowser: IE prior to 9 this lib will not work! 

*window.addEventListener* is not recognized in <=IE8 so you need a little hack:

    if(window.addEventListener) {
        window.addEventListener("message", function(event) {...}, false);
    } else {
        window.attachEvent("message", function(event) {...});        
    }

Enjoy ;)

Leo
