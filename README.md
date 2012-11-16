jasmine-clog
============

Override default console.log behavior and move it into jasmine

Usage
-----

To use jasmine-clog, simply include the `jasmine-clog.js` file after you load in jasmine.  

Your code should look like this:

	<script type="text/javascript" src="http://pivotal.github.com/jasmine/lib/jasmine.js"></script>
	<script type="text/javascript" src="../jasmine-clog.js"></script>

Test
----

As of this writing, jasmine-clog has been tested and works in Chrome, Safari, and Firefox.  It has not been tested in Internet Explorer, but should work in the most recent versions.

To run tests yourself, check out the `/tests` folder.

**Note:** Regardless of browser compatability, jasmine-clog should fail gracefully.  You will see an error thrown in your logs, but the rest of your jasmine tests should run successfully.

