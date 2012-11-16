jasmine-clog
============

Override default console.log behavior and move it into jasmine

Usage
-----

To use jasmine-clog, simply include the `jasmine-clog.js` file after you load in jasmine.  

Your code should look like this:

	<script type="text/javascript" src="http://pivotal.github.com/jasmine/lib/jasmine.js"></script>
	<script type="text/javascript" src="http://josephwegner.github.com/jasmine-clog/jasmine-clog.min.js"></script>

Github CDN
----------

While you can certainly download the file directly using the download link above, I think it's much easier to utilize [Github's CDN](http://code.lancepollard.com/github-as-a-cdn/) to load in the file.  

The URL for the Github CDN version is http://josephwegner.github.com/jasmine-clog/jasmine-clog.min.js

**Note:** Github Pages does not support SSL, so if you want to use Github's CDN, you will have to use plain old HTTP.  *Sorry!*

Test
----

As of this writing, jasmine-clog has been tested and works in Chrome, Safari, and Firefox.  It has not been tested in Internet Explorer, but should work in the most recent versions.

To run tests yourself, check out the `/tests` folder.

**Note:** Regardless of browser compatability, jasmine-clog should fail gracefully.  You will see an error thrown in your logs, but the rest of your jasmine tests should run successfully.

