document.addEventListener("DOMContentLoaded", function() {
    var browserInfoDiv = document.getElementById("browser-info");
    var browserName = navigator.appName;
    var version = navigator.appVersion;
    browserInfoDiv.textContent = "You are using " + browserName + " version " + version;
});
