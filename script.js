// Get the div element where the browser information will be displayed
var browserInfoDiv = document.getElementById("browser-info");

// Retrieve browser information using the navigator object
var browserName = navigator.appName;
var version = navigator.appVersion;

// Display the browser information in the div
browserInfoDiv.textContent = "You are using " + browserName + " version " + version;
