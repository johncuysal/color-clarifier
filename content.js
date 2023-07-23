chrome.runtime.onMessage.addListener(function (request) {
    if (request.filter) {
        document.documentElement.style.filter = request.filter;
    }
});
