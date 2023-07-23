document.addEventListener("DOMContentLoaded", function () {
    const contrastSlider = document.getElementById("contrast-slider");
    const hueSlider = document.getElementById("hue-slider");
    const contrastValueContainer = document.getElementById("contrast-value-container");
    const hueValueContainer = document.getElementById("hue-value-container");
    const dropdown = document.getElementById("dropdown");

    let contrastValue = 100;
    let hueValue = 0;

    function updateFilter() {
        const filterValue = `contrast(${contrastValue}%) hue-rotate(${hueValue}deg)`;
        chrome.tabs.query({active: true, currentWindow: true}, function (tabs) {
            chrome.tabs.sendMessage(tabs[0].id, {filter: filterValue});
        });
    }

    contrastSlider.addEventListener("input", function () {
        contrastValue = contrastSlider.value;
        contrastValueContainer.innerText = contrastValue;
        updateFilter();
    });

    hueSlider.addEventListener("input", function () {
        hueValue = hueSlider.value;
        hueValueContainer.innerText = hueValue;
        updateFilter();
    });

    dropdown.addEventListener("change", function() {
        hueValue = dropdown.value;
        hueSlider.value = hueValue;
        hueValueContainer.innerText = hueValue;
        updateFilter();
    });
});
