(function() {

	if(typeof(console.log) !== "function") {
		throw("jasmine-clog: console.log is not defined!");
		return false
	}

	if(typeof(jasmine) === "undefined") {
		throw("jasming-clog: jasmine isn't defined!  Make sure you include the jasmine-clog.js file AFTER jasmine.js");
		return false;
	}

	var realLog = console.log
	console.log = function() { };

	jasmine.clog = function() {
		realLog.apply(console, arguments);
	}
})();