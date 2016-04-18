'use strict';"use strict";
var lang_1 = require('angular2/src/facade/lang');
exports.MODULE_SUFFIX = lang_1.IS_DART ? '.dart' : '';
var CAMEL_CASE_REGEXP = /([A-Z])/g;
var DASH_CASE_REGEXP = /-([a-z])/g;
function camelCaseToDashCase(input) {
    return lang_1.StringWrapper.replaceAllMapped(input, CAMEL_CASE_REGEXP, function (m) { return '-' + m[1].toLowerCase(); });
}
exports.camelCaseToDashCase = camelCaseToDashCase;
function dashCaseToCamelCase(input) {
    return lang_1.StringWrapper.replaceAllMapped(input, DASH_CASE_REGEXP, function (m) { return m[1].toUpperCase(); });
}
exports.dashCaseToCamelCase = dashCaseToCamelCase;
function splitAtColon(input, defaultValues) {
    var parts = lang_1.StringWrapper.split(input.trim(), /\s*:\s*/g);
    if (parts.length > 1) {
        return parts;
    }
    else {
        return defaultValues;
    }
}
exports.splitAtColon = splitAtColon;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRpZmZpbmdfcGx1Z2luX3dyYXBwZXItb3V0cHV0X3BhdGgtdE1XZ1NRRnUudG1wL2FuZ3VsYXIyL3NyYy9jb21waWxlci91dGlsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxxQkFBb0QsMEJBQTBCLENBQUMsQ0FBQTtBQUVwRSxxQkFBYSxHQUFHLGNBQU8sR0FBRyxPQUFPLEdBQUcsRUFBRSxDQUFDO0FBRWxELElBQUksaUJBQWlCLEdBQUcsVUFBVSxDQUFDO0FBQ25DLElBQUksZ0JBQWdCLEdBQUcsV0FBVyxDQUFDO0FBRW5DLDZCQUFvQyxLQUFhO0lBQy9DLE1BQU0sQ0FBQyxvQkFBYSxDQUFDLGdCQUFnQixDQUFDLEtBQUssRUFBRSxpQkFBaUIsRUFDeEIsVUFBQyxDQUFDLElBQU8sTUFBTSxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNyRixDQUFDO0FBSGUsMkJBQW1CLHNCQUdsQyxDQUFBO0FBRUQsNkJBQW9DLEtBQWE7SUFDL0MsTUFBTSxDQUFDLG9CQUFhLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLGdCQUFnQixFQUN2QixVQUFDLENBQUMsSUFBTyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDL0UsQ0FBQztBQUhlLDJCQUFtQixzQkFHbEMsQ0FBQTtBQUVELHNCQUE2QixLQUFhLEVBQUUsYUFBdUI7SUFDakUsSUFBSSxLQUFLLEdBQUcsb0JBQWEsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxFQUFFLFVBQVUsQ0FBQyxDQUFDO0lBQzFELEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNyQixNQUFNLENBQUMsS0FBSyxDQUFDO0lBQ2YsQ0FBQztJQUFDLElBQUksQ0FBQyxDQUFDO1FBQ04sTUFBTSxDQUFDLGFBQWEsQ0FBQztJQUN2QixDQUFDO0FBQ0gsQ0FBQztBQVBlLG9CQUFZLGVBTzNCLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0lTX0RBUlQsIFN0cmluZ1dyYXBwZXIsIE1hdGgsIGlzQmxhbmt9IGZyb20gJ2FuZ3VsYXIyL3NyYy9mYWNhZGUvbGFuZyc7XG5cbmV4cG9ydCB2YXIgTU9EVUxFX1NVRkZJWCA9IElTX0RBUlQgPyAnLmRhcnQnIDogJyc7XG5cbnZhciBDQU1FTF9DQVNFX1JFR0VYUCA9IC8oW0EtWl0pL2c7XG52YXIgREFTSF9DQVNFX1JFR0VYUCA9IC8tKFthLXpdKS9nO1xuXG5leHBvcnQgZnVuY3Rpb24gY2FtZWxDYXNlVG9EYXNoQ2FzZShpbnB1dDogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIFN0cmluZ1dyYXBwZXIucmVwbGFjZUFsbE1hcHBlZChpbnB1dCwgQ0FNRUxfQ0FTRV9SRUdFWFAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKG0pID0+IHsgcmV0dXJuICctJyArIG1bMV0udG9Mb3dlckNhc2UoKTsgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkYXNoQ2FzZVRvQ2FtZWxDYXNlKGlucHV0OiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gU3RyaW5nV3JhcHBlci5yZXBsYWNlQWxsTWFwcGVkKGlucHV0LCBEQVNIX0NBU0VfUkVHRVhQLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChtKSA9PiB7IHJldHVybiBtWzFdLnRvVXBwZXJDYXNlKCk7IH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3BsaXRBdENvbG9uKGlucHV0OiBzdHJpbmcsIGRlZmF1bHRWYWx1ZXM6IHN0cmluZ1tdKTogc3RyaW5nW10ge1xuICB2YXIgcGFydHMgPSBTdHJpbmdXcmFwcGVyLnNwbGl0KGlucHV0LnRyaW0oKSwgL1xccyo6XFxzKi9nKTtcbiAgaWYgKHBhcnRzLmxlbmd0aCA+IDEpIHtcbiAgICByZXR1cm4gcGFydHM7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGRlZmF1bHRWYWx1ZXM7XG4gIH1cbn1cbiJdfQ==